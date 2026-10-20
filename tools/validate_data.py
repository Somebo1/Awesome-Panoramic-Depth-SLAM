"""Offline content, schema, deployment and publication-scope validation."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse,unquote
import csv
import hashlib
import json
import re

ROOT=Path(__file__).resolve().parents[1]
catalog=json.loads((ROOT/'site/data/catalog.json').read_text(encoding='utf-8'))
records=catalog['records'];errors=[];figure_digests={}
ids=[e['id'] for e in records]
if len(ids)!=len(set(ids)):errors.append('Duplicate record IDs')
required='id collection name title year venue authors institutions summary cameras scale scaleNote metricStatus depthType inputSummary outputSummary inputs outputDetails codeStatus paperUrl license evidence sourceChecked'.split()
for e in records:
    if e['collection']=='datasets':
        for field in 'id name title year cameras tasks environment reality sensors groundTruth access homepageUrl paperUrl downloadUrl localizedSummary datasetDetails datasetLicense datasetNotes sensorLabels groundTruthLabels sourceChecked evidence'.split():
            if field not in e or e[field] in [None,'',[]]:errors.append(e['id']+': missing dataset '+field)
        for field in ['localizedSummary','datasetDetails','datasetLicense','datasetNotes','sensorLabels','groundTruthLabels']:
            if not isinstance(e.get(field),dict) or not all(e[field].get(lang) for lang in ['en','zh']):errors.append(e['id']+': missing dataset translation '+field)
        if set(e.get('tasks',[]))-{'depth','slam'}:errors.append(e['id']+': invalid dataset task')
        if set(e.get('cameras',[]))-{'panoramic','fisheye','wide','perspective','multi'}:errors.append(e['id']+': invalid dataset camera')
        if set(e.get('environment',[]))-{'indoor','outdoor'}:errors.append(e['id']+': invalid dataset environment')
        if e.get('reality') not in ['real','synthetic','mixed']:errors.append(e['id']+': invalid data source')
        if e.get('access') not in ['open','registration','request','restricted','unknown']:errors.append(e['id']+': invalid access')
        for key in ['homepageUrl','paperUrl','downloadUrl']:
            if urlparse(e.get(key,'')).scheme not in ['https','http']:errors.append(e['id']+': unsafe dataset URL '+key)
        for source in e.get('evidence',[]):
            if not isinstance(source,dict) or urlparse(source.get('url','')).scheme not in ['https','http']:errors.append(e['id']+': missing primary dataset source')
        c=e.get('curation',{})
        if c.get('tier') not in ['established','common','specialized','pending'] or not isinstance(c.get('rank'),int):errors.append(e['id']+': invalid dataset priority')
        for key in ['scope','reason']:
            if not isinstance(c.get(key),dict) or not all(c[key].get(lang) for lang in ['en','zh']):errors.append(e['id']+': missing localized curation '+key)
        if not c.get('evidence') or not all(urlparse(s.get('url','')).scheme in ['http','https'] for s in c['evidence']):errors.append(e['id']+': missing priority evidence')
        f=e.get('figure',{})
        if f.get('verified') is not True or f.get('kind')!='dataset-preview':errors.append(e['id']+': dataset preview not verified')
        for key in ['image','thumbnail']:
            path=f.get(key,'')
            if not re.fullmatch(r'assets/datasets/[A-Za-z0-9_-]+\.(webp|png|jpg|jpeg)',path) or not (ROOT/'site'/path).is_file():errors.append(e['id']+': unsafe or missing dataset '+key)
        for key in ['caption','credit']:
            if not isinstance(f.get(key),dict) or not all(f[key].get(lang) for lang in ['en','zh']):errors.append(e['id']+': missing localized dataset '+key)
        if f.get('sourceType') in ['author-project-image','author-video-frame']:
            for key in ['sourceUrl','sourcePageUrl']:
                if urlparse(f.get(key,'')).scheme not in ['http','https']:errors.append(e['id']+': missing preview '+key)
            if not re.fullmatch(r'[a-f0-9]{64}',f.get('sourceSha256','')):errors.append(e['id']+': missing preview source hash')
            if f.get('sourceType')=='author-video-frame' and (not isinstance(f.get('frameSeconds'),(int,float)) or f['frameSeconds']<0):errors.append(e['id']+': invalid source video frame')
        elif f.get('sourceType')=='paper-pdf':
            if urlparse(f.get('paperUrl','')).scheme not in ['https','http'] or not re.fullmatch(r'[a-f0-9]{64}',f.get('pdfSha256','')):errors.append(e['id']+': missing dataset PDF provenance')
            box=f.get('cropBox',[])
            if not isinstance(f.get('page'),int) or f['page']<1 or len(box)!=4 or box[2]<=box[0] or box[3]<=box[1] or not f.get('originalCaption'):errors.append(e['id']+': invalid dataset PDF crop provenance')
        else:errors.append(e['id']+': unknown dataset preview type')
        continue
    for field in required:
        if field not in e or e[field] in [None,'']:errors.append(f'{e["id"]}: missing {field}')
    if not e.get('paperUrl','').startswith('https://'):errors.append(e['id']+': missing official paper URL')
    if not e['evidence']:errors.append(e['id']+': no evidence')
    if e['collection'] not in ['depth','slam']:errors.append('Unknown collection')
    if e['scale'] not in ['metric','relative','mixed','unknown']:errors.append('Unknown scale enum')
    if e['codeStatus'] not in ['released','partial','none','unverified']:errors.append('Unknown release enum')
    if set(e['cameras'])-{'panoramic','fisheye','wide','perspective','multi'}:errors.append('Unknown camera enum')
    for k in ['paperUrl','codeUrl','projectUrl','weightsUrl']:
        if e.get(k) and urlparse(e[k]).scheme not in ['http','https']:errors.append(e['id']+': unsafe '+k)
    figure=e.get('figure')
    if not figure:
        errors.append(e['id']+': missing paper figure')
        continue
    if figure.get('verified') is not True:errors.append(e['id']+': figure not visually verified')
    if urlparse(figure.get('paperUrl','')).scheme not in ['https','http']:errors.append(e['id']+': no figure PDF source')
    for key in ['image','thumbnail']:
        relative=figure.get(key,'')
        if not re.fullmatch(r'assets/papers/[A-Za-z0-9_-]+\.(webp|png|jpg|jpeg)',relative):
            errors.append(e['id']+': unsafe figure path '+key)
        else:
            asset=ROOT/'site'/relative
            if not asset.is_file() or asset.stat().st_size<500:errors.append(e['id']+': missing/empty figure '+key)
            elif key=='image':
                image_digest=hashlib.sha256(asset.read_bytes()).hexdigest()
                if image_digest in figure_digests:errors.append(e['id']+': duplicated figure from '+figure_digests[image_digest])
                figure_digests[image_digest]=e['id']
    for key in ['caption','credit']:
        value=figure.get(key,{})
        if not isinstance(value,dict) or not all(value.get(lang) for lang in ['zh','en']):errors.append(e['id']+': missing localized figure '+key)
    source_type=figure.get('sourceType','paper-pdf')
    if source_type=='author-project-image':
        for key in ['sourceUrl','sourcePageUrl']:
            if urlparse(figure.get(key,'')).scheme not in ['https','http']:errors.append(e['id']+': missing safe author image '+key)
        digest=figure.get('sourceSha256','')
        if not re.fullmatch(r'[0-9a-f]{64}',digest):errors.append(e['id']+': missing author image provenance hash')
        local=ROOT/'library/source_images'/f"{e['id']}.webp"
        if local.exists() and hashlib.sha256(local.read_bytes()).hexdigest()!=digest:errors.append(e['id']+': author image does not match source provenance')
        if any(figure.get(key) for key in ['page','cropBox','pdfSha256']):errors.append(e['id']+': author webpage image must not claim PDF provenance')
    elif source_type=='paper-pdf':
        if not isinstance(figure.get('page'),int) or figure['page']<1:errors.append(e['id']+': invalid PDF page')
        digest=figure.get('pdfSha256','')
        if not re.fullmatch(r'[0-9a-f]{64}',digest):errors.append(e['id']+': missing PDF provenance hash')
        local=ROOT/'library/pdfs'/f"{e['id']}.pdf"
        if local.exists() and hashlib.sha256(local.read_bytes()).hexdigest()!=digest:errors.append(e['id']+': local PDF does not match figure provenance')
        box=figure.get('cropBox',[])
        if not isinstance(box,list) or len(box)!=4 or box[2]<=box[0] or box[3]<=box[1]:errors.append(e['id']+': invalid PDF crop')
        if not figure.get('originalCaption'):errors.append(e['id']+': missing original PDF caption')
    else:errors.append(e['id']+': unknown figure source type')
    if not figure.get('figureLabel'):errors.append(e['id']+': missing figure identity')
byid={e['id']:e for e in records}
for id in ['orbslam3_2021','panoslam2025','p2uslam2026','lfvislam2023','omnislam2020']:
    if 'panoramic' in byid[id]['cameras']:errors.append(id+': falsely classified as ERP')
for id in ['p2uslam2026','panoslam2025','panogsslam2026']:
    if byid[id]['codeStatus']!='none':errors.append(id+': documentation/promise cannot count as source release')
for id in ['da2_panorama','da360']:
    if byid[id]['scale']!='relative':errors.append(id+': scale-invariant is not metric')
for id in ['odgsslam2026','monogs2024','goslam2023']:
    if byid[id]['scale']!='mixed':errors.append(id+': sensor-dependent scale must be conditional')
for id in ['mode','mcpdepth']:
    if 'multi' not in byid[id]['cameras']:errors.append(id+': real stereo baseline omitted')
if byid['mode']['depthType']!='range':errors.append('MODE final range confused with intermediate disparity')
if byid['dap']['year']!=2026 or byid['da2_panorama']['year']!=2026:errors.append('Conference year/preprint conflated')

source_count=0
private=re.compile(r'(?<![A-Za-z])[A-Z]:[\\/]|BaiduSyncdisk|\.codex[/\\]|gh[pousr]_[A-Za-z0-9]{20,}')
for folder in ['site','docs','source_data','references']:
    for p in (ROOT/folder).rglob('*'):
        if p.is_file() and p.suffix in ['.js','.json','.md','.html','.css','.csv']:
            text=p.read_text(encoding='utf-8-sig')
            if '\ufffd' in text:errors.append('Broken Unicode '+str(p.relative_to(ROOT)))
            if private.search(text):errors.append('Local path or credential-like content '+str(p.relative_to(ROOT)))
            source_count+=1

class Assets(HTMLParser):
    def __init__(self):super().__init__();self.ids=[]
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if 'id' in attrs:self.ids.append(attrs['id'])
        for key in ['src','href']:
            link=attrs.get(key,'');parts=urlparse(link)
            if link and not parts.scheme and not link.startswith('#'):
                if not (ROOT/'site'/unquote(parts.path)).exists():errors.append('Missing site asset '+link)

parser=Assets();parser.feed((ROOT/'site/index.html').read_text(encoding='utf-8'))
if 'hero-visual' in (ROOT/'site/index.html').read_text(encoding='utf-8'):errors.append('Removed hero illustration is still present')
if 'tab-datasets' not in parser.ids:errors.append('Missing datasets collection tab')
if len(parser.ids)!=len(set(parser.ids)):errors.append('Duplicate HTML IDs')
for p in (ROOT/'site').rglob('*'):
    if p.is_file():
        other=ROOT/'docs'/p.relative_to(ROOT/'site')
        if not other.exists() or hashlib.sha256(p.read_bytes()).digest()!=hashlib.sha256(other.read_bytes()).digest():errors.append('Stale Pages output '+str(other.relative_to(ROOT)))
if not (ROOT/'docs/.nojekyll').exists():errors.append('Missing .nojekyll')
with (ROOT/'site/data/catalog.csv').open(encoding='utf-8-sig',newline='') as f:
    count=len(list(csv.DictReader(f)))
if count!=len(records):errors.append('CSV/JSON count differs')
result=dict(records=len(records),**catalog['stats'],text_files_checked=source_count,errors=sorted(set(errors)))
(ROOT/'tests/results').mkdir(parents=True,exist_ok=True)
(ROOT/'tests/results/content.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(result,ensure_ascii=True))
if errors:raise SystemExit(1)
