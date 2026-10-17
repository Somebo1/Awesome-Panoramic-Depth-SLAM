"""Download public depth papers and reproducibly rasterize reviewed figure crops.

PDFs remain local in ignored library/. Reviewed selections and attribution are in
source_data/figures_depth.json. Never substitutes generated or unrelated artwork.
Requires pdfplumber, pypdfium2 and Pillow; network only for --download.
"""
import argparse
import concurrent.futures
import hashlib
import json
import re
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PDFS = ROOT / 'library' / 'pdfs'
PREVIEWS = ROOT / 'library' / 'previews'
ASSETS = ROOT / 'site' / 'assets' / 'papers'
MANIFEST = ROOT / 'source_data' / 'figures_depth.json'
SELECTIONS = {
    'depth_anything_v2':(6,7), 'depth_anything_3':(5,2), 'dac':(4,4),
    'unidac':(4,3), 'da2_panorama':(5,4), 'dap':(5,3), 'panda':(5,8),
    'da360':(3,3), 'unik3d':(3,2), 'vggt':(3,2), 'vggt_omega':(3,2),
    'unidepth_v2':(3,2), 'metric3d_v2':(4,4), 'depth_pro':(5,3),
    'video_depth_anything':(4,2), 'unifuse':(2,1), 'panoformer':(4,2),
    'bifuse_pp':(2,1), '360monodepth':(1,1), 'omnifusion':(3,2),
    'hrdfuse':(3,3), 'elite360d':(3,3), 'depth_anywhere':(4,2),
    'mode':(2,1), 'mcpdepth':(5,3), 'rpg360':(5,3), 'st2_360d':(2,1),
    'pager':(4,2), 'reper360':(5,2), 'dreamcube':(5,4)
}
CROP_BOXES = {
 'depth_anything_v2':[108,65,506,184], 'depth_anything_3':[70,97,543,253],
 'dac':[58,70,555,313], 'unidac':[58,65,560,263],
 'da2_panorama':[108,75,506,260], 'dap':[58,68,555,209],
 'panda':[58,65,297,243], 'da360':[54,48,559,225],
 'unik3d':[58,63,555,229], 'vggt':[58,68,562,252],
 'vggt_omega':[58,62,555,289], 'unidepth_v2':[48,51,565,212],
 'metric3d_v2':[54,45,559,310], 'depth_pro':[100,74,514,233],
 'video_depth_anything':[50,67,546,192], 'unifuse':[85,55,531,196],
 'panoformer':[134,113,482,224], 'bifuse_pp':[44,38,591,227],
 '360monodepth':[50,202,546,390], 'omnifusion':[50,65,546,192],
 'hrdfuse':[50,65,546,212], 'elite360d':[50,65,546,243],
 'depth_anywhere':[108,70,505,237], 'mode':[134,113,482,260],
 'mcpdepth':[58,65,555,266], 'rpg360':[108,65,506,210],
 'st2_360d':[108,65,506,184], 'pager':[94,65,506,171],
 'reper360':[134,116,482,244], 'dreamcube':[58,65,555,311]
}
DESCRIPTIONS = {
 'depth_anything_v2':('合成数据教师、真实图像伪标签与学生模型的训练流程。','Teacher training on synthetic images, real-image pseudo labels and student training.'),
 'depth_anything_3':('单一 Transformer 与深度—射线预测的整体流程。','Single-transformer pipeline with depth and ray predictions.'),
 'dac':('统一 ERP 空间中的相机转换、训练增强与深度推理。','Camera conversion, training augmentation and depth inference in canonical ERP space.'),
 'unidac':('相对深度与深度引导尺度估计解耦的方法总览。','Method overview decoupling relative depth and depth-guided scale estimation.'),
 'da2_panorama':('SphereViT 的球面嵌入、网络结构与训练监督。','SphereViT spherical embeddings, architecture and training supervision.'),
 'dap':('DAP 的畸变感知深度解码与几何训练约束。','DAP distortion-aware depth decoding and geometric training constraints.'),
 'panda':('联合有标签与无标签全景的半监督训练及空间增强。','Semi-supervised training and spatial augmentation with labeled and unlabeled panoramas.'),
 'da360':('透视预训练模型适配全景的尺度不变训练框架。','Scale-invariant training framework adapting a perspective pretrained model to panoramas.'),
 'unik3d':('角度相机模块与径向模块联合预测三维点的网络结构。','Angular camera and radial modules for predicting 3D points.'),
 'vggt':('交替注意力骨干及相机、深度、点图与跟踪预测头。','Alternating-attention backbone and camera, depth, point-map and tracking heads.'),
 'vggt_omega':('图像、相机和场景令牌的交替注意力与几何输出。','Alternating attention over image, camera and scene tokens with geometry outputs.'),
 'unidepth_v2':('相机分支与深度分支共同恢复三维几何的网络总览。','Camera and depth branches for recovering 3D geometry.'),
 'metric3d_v2':('统一米制深度与法线估计的整体方法。','Overall methodology for joint metric depth and surface-normal estimation.'),
 'depth_pro':('多尺度图像编码、特征融合与焦距估计网络。','Multiscale image encoding, feature fusion and focal-length estimation.'),
 'video_depth_anything':('基于 Depth Anything V2 编码器与时空预测头的视频流程。','Video pipeline with a Depth Anything V2 encoder and spatiotemporal head.'),
 'unifuse':('立方体与 ERP 特征的单向融合深度网络。','Unidirectional fusion of cubemap and ERP features for depth.'),
 'panoformer':('全景 Transformer 编码—解码的深度估计结构。','Panoramic Transformer encoder-decoder architecture for depth estimation.'),
 'bifuse_pp':('双投影深度网络与位姿网络的自监督框架。','Self-supervised framework with bi-projection depth and pose networks.'),
 '360monodepth':('切平面预测、视差对齐与融合的高分辨率全景流程。','High-resolution panoramic pipeline with tangent predictions, disparity alignment and blending.'),
 'omnifusion':('切平面特征、几何嵌入与全局融合的整体流程。','Tangent-image features, geometric embedding and global fusion pipeline.'),
 'hrdfuse':('ERP 与切平面特征对齐和深度分布协作预测。','ERP/tangent feature alignment and collaborative depth-distribution prediction.'),
 'elite360d':('ERP 与二十面体点特征的双投影融合方法。','Bi-projection fusion of ERP features and icosahedral point features.'),
 'depth_anywhere':('有标签全景监督与透视模型蒸馏的联合训练流程。','Joint training with labeled panoramas and perspective-model distillation.'),
 'mode':('四相机装置、多视图全景深度及点云重建概览。','Four-camera rig, multiview omnidirectional depth and point-cloud reconstruction overview.'),
 'mcpdepth':('多柱面立体匹配、置信度与深度融合流程。','Multicylindrical stereo matching, confidence prediction and depth fusion.'),
 'rpg360':('透视基础模型初始化与图优化联合细化深度和法线。','Perspective foundation-model initialization and graph refinement of depth and normals.'),
 'st2_360d':('把单幅全景转换成虚拟视频以复用视频深度一致性。','Converting one panorama into a virtual video to reuse temporal depth consistency.'),
 'pager':('共享几何骨干与尺度不变深度、米制深度、法线和天空预测。','Shared geometry backbone with scale-invariant/metric depth, normals and sky prediction.'),
 'reper360':('几何对齐引导、自调制与全景深度监督的整体框架。','Geometry-aligned guidance, self-modulation and panoramic depth supervision.'),
 'dreamcube':('RGB-D 立方体扩散模型的训练与同步推理框架。','Training and synchronized inference of an RGB-D cubemap diffusion model.')
}

def records():
    return sum((json.loads((ROOT/'source_data'/n).read_text(encoding='utf-8')) for n in ['depth_models.json','panoramic_additions.json']), [])

def pdf_url(url):
    return url.replace('arxiv.org/abs/', 'arxiv.org/pdf/')

def download(record):
    PDFS.mkdir(parents=True, exist_ok=True)
    target = PDFS / (record['id'] + '.pdf')
    if target.exists() and target.read_bytes().startswith(b'%PDF'):
        return record['id'], 'cached'
    url = ('https://papers.nips.cc/paper_files/paper/2025/file/45c361d4117d598d4bb6568b407e9ac9-Paper-Conference.pdf'
           if record['id']=='st2_360d' else pdf_url(record['paper_url']))
    try:
        req = urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0 (academic-literature-figure-review)'})
        with urllib.request.urlopen(req, timeout=100) as response:
            content = response.read()
        if not content.startswith(b'%PDF'):
            raise ValueError('Response is not a PDF')
        target.write_bytes(content)
        return record['id'], f'downloaded {len(content)}'
    except Exception as exc:
        return record['id'], str(exc)

def scan():
    import pdfplumber
    PREVIEWS.mkdir(parents=True, exist_ok=True)
    results = {}
    for r in records():
        p = PDFS/(r['id']+'.pdf')
        if not p.exists(): continue
        with pdfplumber.open(p) as doc:
            entries=[]
            for num,page in enumerate(doc.pages[:8],1):
                words=page.extract_words()
                hits=[]
                for w in words:
                    if re.fullmatch(r'Fig(?:ure)?\.?', w['text'],re.I):
                        top=w['top']
                        nearby=' '.join(x['text'] for x in words if top-2 <= x['top'] <= top+78)
                        hits.append({'y':round(top,1),'x':round(w['x0'],1),'text':nearby[:1100]})
                if hits: entries.append({'page':num,'width':page.width,'height':page.height,'hits':hits})
            results[r['id']]=entries
    (PREVIEWS/'depth_caption_scan.json').write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf-8')

def render_pages(ids, pages):
    import pdfplumber
    PREVIEWS.mkdir(parents=True,exist_ok=True)
    for id in ids:
        with pdfplumber.open(PDFS/(id+'.pdf')) as doc:
            for number in pages:
                if number <= len(doc.pages):
                    doc.pages[number-1].to_image(resolution=80).original.convert('RGB').save(PREVIEWS/f'{id}-p{number}.jpg',quality=85)

def render_manifest():
    import pdfplumber
    from PIL import Image
    data=json.loads(MANIFEST.read_text(encoding='utf-8'))
    ASSETS.mkdir(parents=True,exist_ok=True)
    for id,figure in data.items():
        pdf=PDFS/(id+'.pdf')
        with pdfplumber.open(pdf) as doc:
            crop=doc.pages[figure['page']-1].crop(tuple(figure['cropBox']))
            im=crop.to_image(resolution=220,antialias=True).original.convert('RGB')
            im.thumbnail((2000,2000),Image.Resampling.LANCZOS)
            im.save(ASSETS/(id+'.webp'),quality=91,method=6)
            im.thumbnail((960,960),Image.Resampling.LANCZOS)
            im.save(ASSETS/(id+'-thumb.webp'),quality=87,method=6)
        figure['pdfSha256']=hashlib.sha256(pdf.read_bytes()).hexdigest()
        figure['imageSha256']=hashlib.sha256((ASSETS/(id+'.webp')).read_bytes()).hexdigest()
    MANIFEST.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')

def sheets():
    from PIL import Image,ImageDraw
    files=sorted(PREVIEWS.glob('*-p*.jpg'))
    for batch in range(0,len(files),8):
        canvas=Image.new('RGB',(1400,1800),'#e6e6e6')
        draw=ImageDraw.Draw(canvas)
        for i,path in enumerate(files[batch:batch+8]):
            im=Image.open(path);im.thumbnail((340,830))
            x=(i%4)*350;y=(i//4)*900
            canvas.paste(im,(x,y+25));draw.text((x+4,y+5),path.stem,fill='black')
        canvas.save(PREVIEWS/f'depth-sheet-{batch//8:02}.jpg',quality=92)

def selected_sheets():
    import pdfplumber
    from PIL import Image,ImageDraw
    files=[]
    info={}
    for id,(number,fig) in SELECTIONS.items():
        with pdfplumber.open(PDFS/(id+'.pdf')) as doc:
            page=doc.pages[number-1]
            im=page.to_image(resolution=100).original.convert('RGB')
            path=PREVIEWS/f'{id}-selected.jpg';im.save(path,quality=90);files.append(path)
            lines=page.extract_text_lines(x_tolerance=1)
            caps=[x for x in lines if re.match(r'^(Figure|Fig[. ])\s*'+str(fig)+r'[:. –]',x['text'])]
            info[id]={'page':number,'size':[page.width,page.height],'caption':[{k:v for k,v in l.items() if k!='chars'} for l in caps]}
    (PREVIEWS/'depth_selections_scan.json').write_text(json.dumps(info,ensure_ascii=False,indent=2),encoding='utf-8')
    for batch in range(0,len(files),6):
        canvas=Image.new('RGB',(1800,1650),'#ddd');draw=ImageDraw.Draw(canvas)
        for i,path in enumerate(files[batch:batch+6]):
            im=Image.open(path);im.thumbnail((590,790));x=i%3*600;y=i//3*825
            canvas.paste(im,(x,y+25));draw.text((x+5,y+5),path.stem,fill='black')
        canvas.save(PREVIEWS/f'depth-selected-sheet-{batch//6:02}.jpg',quality=93)

def initialize_manifest():
    """Seed metadata from the visually reviewed page/figure selections above."""
    import pdfplumber
    result={}
    by_id={r['id']:r for r in records()}
    scans=json.loads((PREVIEWS/'depth_selections_scan.json').read_text(encoding='utf-8'))
    for id,(page_number,figure_number) in SELECTIONS.items():
        r=by_id[id];selection=scans[id]['caption'][0];box=CROP_BOXES[id]
        with pdfplumber.open(PDFS/(id+'.pdf')) as doc:
            x0,x1=(58,297) if id=='panda' else (box[0],box[2])
            lines=doc.pages[page_number-1].crop((x0,selection['top']-1,x1,min(selection['top']+180,792))).extract_text_lines(x_tolerance=1)
            caption=[];previous=None
            for line in lines:
                if previous is not None and line['top']-previous>5:break
                caption.append(line['text']);previous=line['bottom']
        zh,en=DESCRIPTIONS[id]
        result[id]={
            'thumbnail':f'assets/papers/{id}-thumb.webp','image':f'assets/papers/{id}.webp',
            'paperUrl':('https://papers.nips.cc/paper_files/paper/2025/file/45c361d4117d598d4bb6568b407e9ac9-Paper-Conference.pdf' if id=='st2_360d' else pdf_url(r['paper_url'])),
            'page':page_number,'figureLabel':f'Figure {figure_number}',
            'caption':{'zh':zh,'en':en},
            'credit':{'zh':f'来源：{r["authors"][0]} 等，原论文图 {figure_number}。','en':f'Source: {r["authors"][0]} et al., Figure {figure_number} of the paper.'},
            'kind':'method','verified':False,'cropBox':box,
            'originalCaption':' '.join(' '.join(caption).split()[:25]),
            'sourceLicense':'Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.',
            'reviewedAt':'2026-10-17','selectionNotes':'Method overview cropped from downloaded original paper PDF; caption stored separately.'
        }
    MANIFEST.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')

def crop_sheets():
    from PIL import Image,ImageDraw
    data=json.loads(MANIFEST.read_text(encoding='utf-8'));ids=list(data)
    for batch in range(0,len(ids),9):
        canvas=Image.new('RGB',(1800,975),'#ddd');draw=ImageDraw.Draw(canvas)
        for i,id in enumerate(ids[batch:batch+9]):
            im=Image.open(ROOT/'site'/data[id]['thumbnail']);im.thumbnail((580,290))
            x=i%3*600;y=i//3*325
            canvas.paste(im,(x,y+25));draw.text((x+5,y+5),id,fill='black')
        canvas.save(PREVIEWS/f'depth-crops-{batch//9}.jpg',quality=94)

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--download',action='store_true')
    parser.add_argument('--scan',action='store_true')
    parser.add_argument('--pages',default='')
    parser.add_argument('--ids',default='')
    parser.add_argument('--render',action='store_true')
    parser.add_argument('--sheets',action='store_true')
    parser.add_argument('--selected',action='store_true')
    parser.add_argument('--initialize-manifest',action='store_true')
    parser.add_argument('--crop-sheets',action='store_true')
    args=parser.parse_args()
    if args.download:
        with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
            for id,status in pool.map(download, records()):print(id,status,flush=True)
    if args.scan:scan()
    if args.pages:render_pages(args.ids.split(',') if args.ids else [r['id'] for r in records()], [int(x) for x in args.pages.split(',')])
    if args.sheets:sheets()
    if args.selected:selected_sheets()
    if args.initialize_manifest:initialize_manifest()
    if args.render:render_manifest()
    if args.crop_sheets:crop_sheets()

if __name__=='__main__':main()
