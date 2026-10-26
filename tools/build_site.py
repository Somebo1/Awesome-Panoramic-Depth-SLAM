"""Normalize verified records and emit a buildless, GitHub-Pages-safe site."""
from pathlib import Path
import csv
import json
import re
import shutil
from urllib.parse import urlparse

ROOT=Path(__file__).resolve().parents[1]
UPDATED='2026-10-26'
REPO_URL='https://github.com/Somebo1/Awesome-Panoramic-Depth-SLAM'

# Explicit reviewed labels: substring search is not a test of camera support.
# Each tuple: name, cameras, scale status, primary geometry convention, summary.
DEPTH={
 'depth_anything_v2':('Depth Anything V2',['perspective'],'mixed','inverse','透视相对深度的重要基线；独立 metric 分支需区分权重，不能把原始鱼眼或 ERP 直接视为受支持投影。'),
 'depth_anything_3':('Depth Anything 3',['perspective'],'mixed','z','从单帧或多视图恢复深度、相机与几何；Any-view 描述视角关系，不代表原生支持全景投影。'),
 'dac':('Depth Any Camera',['panoramic','fisheye','wide','perspective'],'metric','range','将已知相机投影映射到统一 ERP 表示，研究跨视场的零样本公制距离；仍需正确标定与投影转换。'),
 'unidac':('UniDAC',['panoramic','fisheye','wide','perspective'],'metric','range','分解相对形状与空间变化的尺度，统一多种相机的公制距离；论文 shift 与当前代码的差异保留在证据中。'),
 'da2_panorama':('DA²',['panoramic'],'relative','range','SphereViT 显式使用球面坐标，端到端预测全景尺度不变距离；几何形状不等于公制尺度。'),
 'dap':('Depth Any Panoramas',['panoramic'],'metric','range','面向不同距离范围的全景公制深度基础模型；当前 raw 输出与有效掩码必须按作者说明转换。'),
 'panda':('PanDA',['panoramic'],'mixed','unknown','通过有标注与无标注全景和球面增强适配 Depth Anything；公开主权重为相对深度，metric 微调另列。'),
 'da360':('Depth Anything in 360°',['panoramic'],'relative','range','针对真实全景的尺度不变深度路线，提供不同大小模型；EXR 或 PLY 文件本身不证明结果以米计。'),
 'unik3d':('UniK3D',['panoramic','fisheye','wide','perspective'],'metric','points','以通用射线和球面表示处理不同相机，输出公制点图；distance 是径向距离，depth 则是相机 Z。'),
 'vggt':('VGGT',['perspective'],'relative','mixed','多视图联合预测相机、深度和三维几何；共享坐标中的重建仍存在尺度规范，需与连续 SLAM 区分。'),
 'vggt_omega':('VGGT-Ω',['perspective'],'unknown','z','通过更高效的跨帧信息交换扩展多视图几何恢复；复现版与 in-wild checkpoint 应分别记录。'),
 'unidepth_v2':('UniDepthV2',['perspective'],'metric','points','联合估计透视公制几何、相机表示与不确定性；不能由 universal 名称推断完整 ERP 支持。'),
 'metric3d_v2':('Metric3Dv2',['perspective'],'metric','z','利用相机规范化恢复透视公制深度和法向；焦距缩放和数据域影响实际公制几何。'),
 'depth_pro':('Depth Pro',['perspective'],'metric','z','面向细节边界的单目公制深度与焦距预测；不直接输出连续相机轨迹。'),
 'video_depth_anything':('Video Depth Anything',['perspective'],'mixed','unknown','强调长视频深度一致性；相对与 metric 权重分别核对，视频深度并不自动提供 SLAM 位姿。'),
 'unifuse':('UniFuse',['panoramic'],'mixed','unknown','用同一张全景的 ERP 与 cubemap 特征单向融合；这是双投影，不是增加一个真实立体相机。'),
 'panoformer':('PanoFormer',['panoramic'],'mixed','unknown','在球面切平面上构造 token 的室内全景 Transformer；数据集监督精度不代表开放域公制保证。'),
 'bifuse_pp':('BiFuse++',['panoramic'],'mixed','unknown','融合 ERP 与 cubemap 表征，包含监督与自监督方案；不同训练配置的尺度来源应分别记录。')
}
DEPTH['geopano2026']=('GeoPano',['panoramic'],'relative','points','单张 ERP 拆为十个共心虚拟视图，利用球面重叠注意力融合点图；训练显式对齐尺度，不提供已核实的真实轨迹或公制输出。')
DEPTH['moge3']=('MoGe-3', ['perspective'], 'metric', 'z', '以 MoGe-2 为基础，将点图提升到稀疏三维体素壳中反复细化，恢复细结构；原始接口属于针孔相机的公制 Z 深度与点图模型。')
DEPTH['moge2']=('MoGe-2', ['perspective'], 'metric', 'z', '将仿射不变点图与公制尺度预测解耦，利用合成标签细化真实训练几何；作为针孔公制点图、Z 深度及可选法线基线。')
DEPTH['marigold']=('Marigold', ['perspective'], 'relative', 'affine', '将 Stable Diffusion 改作单图深度预测，以合成数据微调并可集成多次采样；输出保留尺度与偏移歧义，是扩散式针孔深度的重要对照。')
DEPTH['depthmaster2026']=('DepthMaster (2026)', ['perspective', 'panoramic'], 'metric', 'mixed', '统一针孔与完整 ERP 的单图公制几何模型；全景内部转为六个重叠透视面，利用虚拟相机条件与对应一致性约束，输出径向距离和点图。')
DEPTH['omnipoint2026']=('OmniPoint', ['panoramic', 'fisheye', 'wide', 'perspective'], 'metric', 'points', '统一针孔、原始鱼眼和完整 ERP 的单图公制点图模型，以射线与径向距离解耦相机和场景；可选内参与稀疏深度，需区分纯图像与条件输入结果。')
DEPTH['omniray2026']=('OmniRay', ['panoramic', 'fisheye', 'wide', 'perspective'], 'relative', 'points', '以单调径向基底、球谐残差和自由场残差组合相机射线，统一针孔、鱼眼和完整 ERP 的单图相对三维点图；不需要相机类型或内参，但不恢复绝对米制尺度。')
CAMERAS={'panoramic_erp':'panoramic','erp':'panoramic','panoramic':'panoramic',
 'fisheye':'fisheye','wide_fov':'wide','wide-angle':'wide','wide-fov':'wide',
 'perspective':'perspective','pinhole':'perspective','multi-camera':'multi','multi_camera':'multi'}
SCALE_OVERRIDES={'p2uslam2026':'relative','odgsslam2026':'mixed','goslam2023':'mixed',
                 'monogs2024':'mixed','svo_pro':'mixed','360orbslam2024':'unknown'}
SCALE_OVERRIDES['aprilvins2026']='metric'
SCALE_OVERRIDES['omnivloc2026']='metric'
CODE_OVERRIDES={'p2uslam2026':'none','panogsslam2026':'none','panoslam2025':'none',
                'panoair2026':'none','lfvislam2023':'partial','dreamcube':'partial'}
CODE_OVERRIDES['aprilvins2026']='none'
CODE_OVERRIDES['omnipoint2026']='unverified'
CODE_OVERRIDES.update(omniray2026='none',omnivloc2026='none')
SLAM_DEPTH={'dbafusion2024':'inverse','droidslam2021':'inverse','goslam2023':'inverse',
            'mast3rslam2025':'points','splatam2024':'z','monogs2024':'z',
            'vo360_2022':'inverse','dvo360_2026':'inverse','panoloop2026':'points'}
NO_DENSE_DEPTH={'openvins2020','orbslam3_2021','stella_vslam','basalt2020','vinsfusion2019',
                'okvis2_2022','okvis2x2025','svo_pro','omnislam2020','360orbslam2024',
                'lfvislam2023','p2uslam2026','panoair2026','vio360_2024'}
NO_DENSE_DEPTH.update(['aprilvins2026','omnivloc2026'])
DEPTH_METRIC_STATUS={k:('metric_learned' if v[2]=='metric' else 'scale_invariant' if v[2]=='relative' else
                      'mixed_checkpoints' if v[2]=='mixed' else 'unknown') for k,v in DEPTH.items()}
DEPTH_METRIC_STATUS.update(unifuse='dataset_scale_only',panoformer='dataset_scale_only')
ALIASES={'depth_anything_v2':['DAv2','DA2 perspective'],'depth_anything_3':['DA3'],
         'dac':['DAC'],'unidac':['UniDAC'],'da2_panorama':['DA2','DA²'],
         'dap':['DAP'],'da360':['DA360'],'panda':['PanDA'],'depth_anywhere':['DepthAnywhere','DA'],
         'metric3d_v2':['Metric3D','Metric3Dv2'],'vggt_omega':['VGGT-Omega'],
         'video_depth_anything':['VideoDA','VDA']}


def txt(v):
    if v is None:return 'Unknown'
    if isinstance(v,dict):return '; '.join(f'{k}: {txt(x)}' for k,x in v.items())
    if isinstance(v,list):return '; '.join(txt(x) for x in v)
    return str(v)


def url(v):
    if not isinstance(v,str):return ''
    p=urlparse(v)
    return v if p.scheme in ['http','https'] and p.netloc else ''


def bool_value(v):
    if isinstance(v,bool):return v
    s=txt(v).strip().lower()
    if s.startswith(('yes','true')):return True
    if s.startswith(('no ','no:','no verified','no direct','no released')) or s=='no':return False
    return 'unknown'


def camera_list(e):
    found=[]
    for c in e.get('camera_support',[]):
        mapped=CAMERAS.get(c.lower())
        if mapped and mapped not in found:found.append(mapped)
    # Multiple source cameras are different from virtual cubemap faces.
    if 'stereo' in [x.lower() for x in e.get('camera_support',[])]:
        if 'multi' not in found:found.append('multi')
    return found


def geometry_type(e):
    values=[x.lower() for x in e.get('geometry_output',[])]
    if any('inverse' in x for x in values):return 'inverse'
    if 'radial_range' in values or 'range' in values:return 'range'
    if 'z_depth' in values:return 'z'
    if 'point_map' in values:return 'points'
    return 'unknown'


def publication_year(e):
    # Do not make a preprint year look like a formal conference year.
    if e['id']=='bifuse_pp':return 2023
    if e['id']=='stella_vslam':return e.get('year',0)  # underlying paper, not a new 2021 paper
    venue=txt(e.get('venue',''))
    match=re.search(r'(?:CVPR|ICLR|ICCV|ECCV|NeurIPS|ICRA|IROS|RSS|TPAMI)\s*(20\d{2})',venue,re.I)
    return int(match.group(1)) if match else e.get('year',0)


def depth_scale(e):
    status=e.get('metric_status','unknown')
    if status in ['metric_learned','metric_stereo_baseline']:return 'metric'
    if status in ['scale_invariant','scale_shift_invariant']:return 'relative'
    if status in ['mixed_checkpoints','dataset_scale_only']:return 'mixed'
    return 'unknown'


def slam_scale(e):
    if e['id'] in SCALE_OVERRIDES:return SCALE_OVERRIDES[e['id']]
    s=txt(e.get('metric_status',e.get('scale'))).lower()
    if e['id'] in ['mast3rslam2025','dpvo2023','dpvslam2024','d3vo2020','360orbslam2024','panogsslam2026']:
        # Stereo-trained priors or scale-aligned evaluations do not fix deployment gauge.
        return 'relative' if e['id']!='d3vo2020' else 'mixed'
    if ('monocular' in s or 'mono' in s) and ('stereo' in s or 'rgb-d' in s):return 'mixed'
    if any(x in s for x in ['up-to-scale','scale-ambiguous','arbitrary scale','not guaranteed','scale aligned','scale-aligned']):return 'relative'
    if 'metric' in s:return 'metric'
    return 'unknown'


def code_status(e):
    if e['id'] in CODE_OVERRIDES:return CODE_OVERRIDES[e['id']]
    status=txt(e.get('official_release_status','')).lower()
    if any(x in status for x in ['readme only','readme-only','only readme','announced','promised','not released','not yet released','no official code','unreleased']):return 'none'
    if any(x in status for x in ['partial','conflict','sanity','testing','coming soon','incomplete']):return 'partial'
    if url(e.get('code_url')):return 'released'
    return 'unverified'


def normalize(e,collection):
    eid=e['id'];inputs=e.get('input','Unknown');outputs=e.get('output','Unknown')
    reviewed=DEPTH.get(eid) if collection=='depth' else None
    name=reviewed[0] if reviewed else e.get('short_name',e['title'].split(':')[0])
    cameras=list(reviewed[1]) if reviewed else camera_list(e)
    if eid in ['mode','mcpdepth'] and 'multi' not in cameras:cameras.append('multi')
    scale=reviewed[2] if reviewed else depth_scale(e) if collection=='depth' else slam_scale(e)
    depth_type=reviewed[3] if reviewed else geometry_type(e) if collection=='depth' else SLAM_DEPTH.get(eid,'none' if eid in NO_DENSE_DEPTH else 'unknown')
    summary=reviewed[4] if reviewed else e.get('summary_zh',txt(e.get('innovation',e.get('limitations',''))))
    output_summary=outputs.get('primary',txt(outputs)) if isinstance(outputs,dict) else txt(outputs)
    input_summary=inputs.get('frames',txt(inputs)) if isinstance(inputs,dict) else txt(inputs)
    evidence=e.get('evidence',[])
    if not isinstance(evidence,list):evidence=[evidence]
    evidence += e.get('source_urls',[])
    evidence += [url(e.get(k)) for k in ['paper_url','project_url','code_url']]
    evidence=list(dict.fromkeys(txt(x) for x in evidence if x))
    notes=e.get('engineering_notes',[])
    if not isinstance(notes,list):notes=[notes]
    notes += [e.get('limitations')] if e.get('limitations') else []
    notes += [e['official_release_status']] if e.get('official_release_status') else []
    # Preserve full geometry definition instead of guessing meaning from variable names.
    details=outputs.copy() if isinstance(outputs,dict) else {'primary':outputs}
    details['depth_convention']=e.get('depth_convention','Unknown')
    metric_status=e.get('metric_status',DEPTH_METRIC_STATUS.get(eid,e.get('scale','Unknown')))
    details['metric_status']=metric_status
    details['pose_output']=e.get('pose_output','Unknown')
    details['runtime']=e.get('runtime','Unknown: no comparable local measurement')
    tags=e.get('category',[])
    if not isinstance(tags,list):tags=[tags]
    tags += e.get('geometry_output',[])
    aliases=ALIASES.get(eid,[])
    if 'gaussian' in txt(e.get('slam_family','')).lower():aliases=aliases+['3DGS']
    native=e.get('native_erp',e.get('native_panoramic', 'panoramic' in cameras))
    if eid=='vggt_omega':native='unknown'
    return dict(id=eid,collection=collection,name=name,title=e['title'],year=publication_year(e),firstYear=e.get('year',0),
        yearConvention='Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.',
        venue=e.get('venue','Unknown'),authors=e.get('authors','Unknown'),institutions=e.get('institutions','Unknown'),
        summary=summary,cameras=cameras,scale=scale,scaleNote=txt(e.get('scale',e.get('metric_status','Unknown'))),
        aliases=aliases,
        metricStatus=metric_status,depthType=depth_type,
        outputs=e.get('geometry_output',[]) or ([depth_type,'pose'] if collection=='slam' else [depth_type]),
        pose=bool_value(e.get('pose_output','Unknown')),inputSummary=input_summary,outputSummary=output_summary,
        inputs=inputs if isinstance(inputs,dict) else {'requirements':inputs,'imu':e.get('imu_required','Unknown')},
        outputDetails=details,codeStatus=code_status(e),codeUrl=url(e.get('code_url')),
        paperUrl=url(e.get('paper_url')),projectUrl=url(e.get('project_url')),weightsUrl=url(e.get('weights_url')),
        license=e.get('license','Unknown'),evidence=evidence,notes=[txt(x) for x in notes if x],tags=list(dict.fromkeys(tags)),
        family=e.get('slam_family',e.get('task_family','depth_and_geometry')),
        imu=e.get('imu_required',inputs.get('imu','No') if isinstance(inputs,dict) else 'Unknown'),
        loopClosure=e.get('loop_closure','Not applicable'),nativePanoramic=native,
        sourceChecked=e.get('accessed',UPDATED),publiclyVerified=True,
        verificationLevel=e.get('evidence_level','Official paper / repository review; not locally reproduced'),
        codeEntry=e.get('code_entry','Unknown'),environment=e.get('environment',e.get('hardware_notes','Unknown')))


def normalize_dataset(e):
    # Dataset capabilities and method outputs are different schemas.
    # Keep reviewed translations and access/GT provenance rather than guessing
    # depth availability from a dataset's name or camera field of view.
    record=e.copy()
    record.update(collection='datasets',summary=e['summary']['zh'],localizedSummary=e['summary'],
        datasetDetails=e['details'],datasetNotes=e['notes'],datasetLicense=e['license'],
        homepageUrl=url(e.get('homepageUrl')),paperUrl=url(e.get('paperUrl')) or url(e.get('homepageUrl')),
        downloadUrl=url(e.get('downloadUrl')),sourceChecked=e.get('checked',UPDATED),
        authors=e.get('authors','Unknown'),
        venue=e.get('venue','Dataset / benchmark'),aliases=e.get('aliases',[]))
    return record


def build():
    depth=json.loads((ROOT/'source_data/depth_models.json').read_text(encoding='utf-8'))
    added=json.loads((ROOT/'source_data/panoramic_additions.json').read_text(encoding='utf-8'))
    slam=json.loads((ROOT/'source_data/slam_survey.json').read_text(encoding='utf-8'))
    records=[normalize(e,'depth') for e in depth+added]+[normalize(e,'slam') for e in slam]
    datasets=[]
    for filename in ['datasets_depth.json','datasets_slam.json']:
        path=ROOT/'source_data'/filename
        if path.exists():datasets.extend(json.loads(path.read_text(encoding='utf-8')))
    records.extend(normalize_dataset(e) for e in datasets)
    taxonomy=json.loads((ROOT/'source_data/camera_taxonomy.json').read_text(encoding='utf-8'))
    if set(taxonomy)!={e['id'] for e in records}:raise ValueError('Camera taxonomy coverage differs from catalog')
    annotations=json.loads((ROOT/'source_data/dataset_annotations.json').read_text(encoding='utf-8'))
    if set(annotations)!={e['id'] for e in datasets}:raise ValueError('Dataset annotation coverage differs from catalog')
    for record in records:
        camera=taxonomy[record['id']]
        record['cameras']=camera['cameras']
        record['cameraSupport']=camera['cameraSupport']
        record['projectionSubtypes']=camera.get('projectionSubtypes',[])
        record['additionalSupport']=camera.get('additionalSupport',[])
        record['nativePanoramic']=any(s['geometry']=='panoramic' and s['route']=='direct' for s in camera['cameraSupport'])
        record['cameraReview']=camera.get('reviewScope','')
        if record['collection']=='datasets':record['annotations']=annotations[record['id']]
        # Keep new capability judgments traceable from the record's evidence panel.
        reviewed_urls=[u for support in camera['cameraSupport']+camera.get('additionalSupport',[]) for u in support['evidence']]
        if record['collection']=='datasets':reviewed_urls+=record['annotations']['evidence']
        existing={e if isinstance(e,str) else e.get('url','') for e in record['evidence']}
        additions=list(dict.fromkeys(u for u in reviewed_urls if u not in existing))
        record['evidence']=record['evidence']+([{'title':'Camera / annotation source','url':u,'checked':record['annotations']['checked'] if u in record['annotations']['evidence'] else camera.get('sourceChecked',UPDATED)} for u in additions] if record['collection']=='datasets' else additions)
    curation=json.loads((ROOT/'source_data/dataset_curation.json').read_text(encoding='utf-8'))
    if set(curation)!={e['id'] for e in datasets}:raise ValueError('Dataset curation coverage differs from catalog')
    for record in records:
        if record['collection']=='datasets':record['curation']=curation[record['id']]
    figures={}
    for filename in ['figures_depth.json','figures_slam.json','figures_datasets_depth.json','figures_datasets_slam.json']:
        path=ROOT/'source_data'/filename
        if path.exists():
            entries=json.loads(path.read_text(encoding='utf-8'))
            if isinstance(entries,list):entries={e['id']:e.get('figure',e) for e in entries}
            for eid,figure in entries.items():
                if eid in figures:raise ValueError('Duplicate figure ID: '+eid)
                figures[eid]=figure
    for record in records:
        if record['id'] in figures:
            record['figure']=figures[record['id']].copy()
            if record['collection']=='datasets':record['figure']['kind']='dataset-preview'
    ids=[e['id'] for e in records]
    if len(ids)!=len(set(ids)):raise ValueError('Duplicate catalog ID')
    records.sort(key=lambda e:(e['collection']!='depth',-int(str(e.get('year',0))[:4]) if str(e.get('year',0))[:4].isdigit() else 0,e['name']))
    catalog=dict(updated=UPDATED,repoUrl=REPO_URL,title='Panoramic Depth Atlas',
        description='Panoramic, fisheye and wide-FOV depth estimation and SLAM literature.',
        schemaVersion='1.4',interfaceUpdated='2026-10-26',records=records,
        stats={'depth':len(depth)+len(added),'slam':len(slam),
               'datasets':len(datasets),
               'panoramicDepth':sum(e['collection']=='depth' and 'panoramic' in e['cameras'] for e in records),
               'panoramicSLAM':sum(e['collection']=='slam' and 'panoramic' in e['cameras'] for e in records),
               'paperFigures':sum(e['collection']!='datasets' and bool(e.get('figure',{}).get('verified')) for e in records),
               'datasetFigures':sum(e['collection']=='datasets' and bool(e.get('figure',{}).get('verified')) for e in records)})
    data=ROOT/'site/data';data.mkdir(parents=True,exist_ok=True)
    serialized=json.dumps(catalog,ensure_ascii=False,indent=2)
    # Classic script loading supports both file:// previews and static hosting.
    (data/'catalog.js').write_text('window.ATLAS_DATA = '+serialized.replace('</','<\\/')+';\n',encoding='utf-8',newline='\n')
    (data/'catalog.json').write_text(serialized+'\n',encoding='utf-8',newline='\n')
    cols=['id','collection','name','title','year','venue','cameras','scale','metricStatus','scaleNote','depthType','pose',
          'nativePanoramic','codeStatus','paperUrl','projectUrl','codeUrl','weightsUrl','inputSummary','outputSummary','license','evidence','notes','sourceChecked']
    cols += ['cameraSupport','projectionSubtypes','additionalSupport','cameraReview','tasks','environment','reality','sensors','groundTruth','annotations','access','homepageUrl','downloadUrl','localizedSummary','datasetDetails','datasetLicense','datasetNotes','curation','figure']
    with (data/'catalog.csv').open('w',encoding='utf-8-sig',newline='') as f:
        writer=csv.DictWriter(f,fieldnames=cols);writer.writeheader()
        for e in records:writer.writerow({k:txt(e.get(k,'')) for k in cols})
    (ROOT/'site/.nojekyll').touch()
    # Copy-only build: no recursive deletion, no external paths or dependencies.
    for path in (ROOT/'site').rglob('*'):
        if path.is_file():
            destination=ROOT/'docs'/path.relative_to(ROOT/'site')
            destination.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(path,destination)
    sources=[]
    for e in records:
        evidence=[v if isinstance(v,str) else v.get('url','') for v in e['evidence']]
        sources.append(f"## {e['name']} ({e['year']})\n\n{e['title']}\n\n"+'\n'.join('- '+v for v in evidence if v)+'\n')
    (ROOT/'references/sources.md').write_text('# Official-source index\n\nLiterature search cutoff '+UPDATED+'. Incremental method and dataset checks: 2026-10-26; earlier per-record review dates remain distinct. Per-record dates and ledgers describe review scope; no local reproduction is claimed.\n\n'+'\n'.join(sources),encoding='utf-8',newline='\n')
    camera_lines=['# Camera taxonomy / 相机分类\n\nIncremental classification additions checked 2026-10-26; earlier per-ID review dates are preserved. Main categories describe supported input projections, not internal patches or outputs. Wide FoV and physical multi-camera rigs are independent attributes. A full ERP input can have internal cubemap processing; PAL annular images are not full ERP. Direct means no external cross-projection adapter. A rendered or stitched dataset derivative is labeled separately.\n\nPinhole 指针孔透视输入；Wide-FOV 不作为独立投影分类。名称、广角和内部切片均不能替代输入接口证据。保留既有 perspective enum 与旧链接，新 pinhole 链接为别名。\n']
    for record in records:
        camera_lines.append('## '+record['name']+'\n\n'+', '.join(record['cameras'])+'\n')
        for support in record['cameraSupport']:
            camera_lines.append(f"- {support['geometry']} / {support['route']}: {support['note']['en']} {support['note']['zh']}\n"+'\n'.join('  - '+s for s in support['evidence']))
        camera_lines.append('\nReview scope: '+str(record['cameraReview'])+'\n')
    (ROOT/'references/camera_taxonomy.md').write_text('\n'.join(camera_lines),encoding='utf-8',newline='\n')
    figure_sources=['# Paper and author project figures\n\nFigures support scholarly literature review. Copyright remains with the original authors. Full PDFs are stored locally and are not redistributed. Original author image files are kept locally; attributed web-sized copies are published. PDF page numbers count from 1; author webpage images do not claim PDF pages or PDF hashes.\n']
    for e in records:
        if e['collection']=='datasets':continue
        f=e.get('figure')
        if not f:continue
        caption=f.get('caption',{})
        if isinstance(caption,dict):caption=caption.get('en','')
        if f.get('sourceType')=='author-project-image':
            figure_sources.append(f"## {e['name']}\n\nAuthor project image, not a PDF screenshot. {caption}\n\n- Author page: {f.get('sourcePageUrl','')}\n- Original image: {f.get('sourceUrl','')}\n- Paper: {f.get('paperUrl','')}\n- Website image: [{f.get('image','')}](../site/{f.get('image','')})\n- Original image SHA-256: `{f.get('sourceSha256','unknown')}`\n")
        else:
            figure_sources.append(f"## {e['name']}\n\n{f.get('figureLabel','Figure')}, PDF page {f.get('page','?')}. {caption}\n\n- PDF: {f.get('paperUrl','')}\n- Screenshot: [{f.get('image','')}](../site/{f.get('image','')})\n- Local PDF SHA-256: `{f.get('pdfSha256',f.get('sha256','unknown'))}`\n")
    (ROOT/'references/figure_sources.md').write_text('\n'.join(figure_sources),encoding='utf-8',newline='\n')
    tiers={'established':'经典基准 / Established benchmark','common':'常用资源 / Widely used resource','specialized':'专项资源 / Specialized resource','pending':'待发布或待核实 / Awaiting release or verification'}
    priority=['# Dataset reading priority / 数据集阅读优先级\n\nReviewed 2026-10-20. Editorial ordering reflects task relevance, documented protocols and usable references, not measured citation/download counts or a performance ranking. Tags apply to the stated scope and version, not every derivative release.\n\n按任务和版本评估协议成熟度与参考资料，不以年代、新颖性或名称自动推断。待发布和获取待核实的资源保留在末尾。\n']
    for tier in tiers:
        priority.append('## '+tiers[tier]+'\n')
        for eid,c in sorted(curation.items(),key=lambda item:item[1]['rank']):
            if c['tier']!=tier:continue
            priority.append(f"### {next(r['name'] for r in datasets if r['id']==eid)}\n\n{c['scope']['zh']} / {c['scope']['en']}\n\n{c['reason']['zh']}\n\n{c['reason']['en']}\n\n"+'\n'.join('- '+s['url'] for s in c['evidence'])+'\n')
    (ROOT/'references/dataset_curation.md').write_text('\n'.join(priority),encoding='utf-8',newline='\n')
    previews=['# Dataset preview sources\n\nOfficial dataset examples, scene overviews and paper excerpts, reviewed 2026-10-20. Copyright remains with the original authors. Preview images illustrate dataset content, not results reproduced by this website.\n']
    for e in records:
        if e['collection']!='datasets' or not e.get('figure'):continue
        f=e['figure']
        previews.append(f"## {e['name']}\n\n{f.get('caption',{}).get('en','')}\n\n- Source type: {f.get('sourceType','')}\n- Page: {f.get('sourcePageUrl',f.get('paperUrl',''))}\n- Original: {f.get('sourceUrl',f.get('paperUrl',''))}\n- Identity: {f.get('figureLabel','Official sample')}; PDF page: {f.get('page','Not a PDF excerpt')}\n- Source SHA-256: `{f.get('sourceSha256',f.get('pdfSha256',''))}`\n- Preview: [image](../site/{f.get('image','')})\n- Credit: {f.get('credit',f.get('attribution',{})).get('en','')}\n")
    (ROOT/'references/dataset_figure_sources.md').write_text('\n'.join(previews),encoding='utf-8',newline='\n')
    if (ROOT/'library/pdfs').is_dir():
        local_index=['# Local paper library\n\nFull PDFs and original author webpage images are kept on this computer only. This directory is excluded from Git and GitHub Pages. Published images and attribution are indexed in ../references/figure_sources.md.\n\n| Method | Local source | Original source | Selected figure |\n|---|---|---|---|']
        for e in records:
            if e['collection']=='datasets':continue
            f=e.get('figure',{})
            if f.get('sourceType')=='author-project-image':
                local_index.append(f"| {e['name']} | [{e['id']}.webp](source_images/{e['id']}.webp) | [Author image]({f.get('sourceUrl','')}) | Author project figure; no local PDF |")
            else:
                local_index.append(f"| {e['name']} | [{e['id']}.pdf](pdfs/{e['id']}.pdf) | [Primary source]({f.get('paperUrl',e['paperUrl'])}) | {f.get('figureLabel','pending')}, p. {f.get('page','?')} |")
        (ROOT/'library/README.md').write_text('\n'.join(local_index)+'\n',encoding='utf-8',newline='\n')
    print(json.dumps({'records':len(records),**catalog['stats'],'output':'docs/'}))
    return catalog


if __name__=='__main__':build()
