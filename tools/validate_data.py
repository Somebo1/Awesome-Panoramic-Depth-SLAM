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
records=catalog['records'];errors=[]
ids=[e['id'] for e in records]
if len(ids)!=len(set(ids)):errors.append('Duplicate record IDs')
required='id collection name title year venue authors institutions summary cameras scale scaleNote metricStatus depthType inputSummary outputSummary inputs outputDetails codeStatus paperUrl license evidence sourceChecked'.split()
for e in records:
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
