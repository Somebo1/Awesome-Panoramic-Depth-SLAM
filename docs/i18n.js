/* Reviewed display translations. Research records and exports retain source wording. */
(() => {
  'use strict';
  const ui = {
    zh: {
      skip:'跳转到文献', home:'全景深度图谱首页', header:'开放的机器人视觉文献集', eyebrow:'从像素走向空间感知', hero:'看见完整的世界', subtitle:'全景、鱼眼与广视场的深度估计与定位建图研究', description:'从投影模型到深度尺度，从输入输出到代码证据。为机器人感知研究，找到值得读、能够复现的方法。', updating:'持续整理', evidenceMotto:'依据原始来源，明确保留未知项。', depth:'深度估计', slam:'定位与建图', entries:'项文献 · 附来源证据', filters:'研究分类与筛选', geometry:'相机模型', refine:'进一步筛选', year:'发表年份', allYears:'全部年份', scale:'尺度类型', allScales:'全部尺度', code:'代码状态', allCodes:'全部代码状态', released:'已发布', partial:'部分发布', unverified:'待核实', none:'未发现公开代码', favorites:'我的阅读收藏', reset:'重置筛选', sidebarNote:'分类可重叠。支持广视场不等于原生全景；度量尺度与深度定义分别记录。详情中保留待核实项。', research:'为机器人感知研究整理', reading:'阅读、比较、复现', export:'导出文献', exportCurrent:'导出当前筛选结果', json:'完整结构化数据', csv:'表格与分析', bib:'阅读清单草稿', search:'搜索文献', placeholder:'搜索方法、论文、输入输出、关键词…', sort:'排序方式', newest:'年份：由新到旧', oldest:'年份：由旧到新', byName:'名称：A → Z', view:'结果视图', cards:'卡片视图', table:'表格视图', papers:'篇文献', compareHint:'勾选方法，比较输入、输出与尺度', activeFilters:'当前筛选条件', empty:'没有符合条件的文献', emptyTip:'试试更短的关键词，或放宽相机、年份和代码筛选。', clearFilters:'清除筛选条件', footnote:'封面选取论文的方法概览或代表性结果，并注明来源、页码和图号；点击可放大阅读。收录表示研究相关性，性能、许可与复现条件以原文和官方仓库为准。BibTeX 为阅读清单草稿，投稿前请核对出版信息。', footer:'以证据连接研究', contribution:'数据与贡献 ↗', compare:'对比', clear:'清空', compareOpen:'横向比较', compareTitle:'方法对比', compareIntro:'按相同口径阅读输入输出；未知项保留原始状态。', closeCompare:'关闭对比', noscript:'此文献图谱需要 JavaScript 才能筛选和阅读。请启用 JavaScript，或在 GitHub 仓库中阅读数据文件。', collectionDepth:'深度估计文献集', collectionSlam:'定位、建图与里程计文献集', allRecords:'全部文献', updatePending:'待更新', unknown:'待核实', yes:'是', no:'否', notApplicable:'不适用', resultTotal:n=>`集合共 ${n} 篇`, selected:n=>`${n} 项已选`, removeFilter:s=>`移除筛选：${s}`, keyword:s=>`关键词：${s}`, missingData:'文献数据尚未载入', missingDataTip:'请检查 data/catalog.js 是否存在并正确加载，然后刷新页面。', missingLink:'尚未核实公开链接', removeFavorite:'取消收藏', addFavorite:'收藏', localFavorites:'本机阅读收藏', compareMethod:s=>`比较 ${s}`, summaryFallback:'查看论文详情、输入输出与证据链接。', venuePending:'发表信息待核实', paper:'论文', source:'发布入口', repo:'仓库', codeLink:'代码', details:'方法详情 ↗', limitCompare:'最多同时比较 4 个方法，请先取消一个已选方法。', closeDetail:'关闭文献详情', project:'项目', weights:'权重', summaryPending:'暂无研究摘要。', input:'模型输入', output:'模型输出', inputPending:'输入摘要待核实', outputPending:'输出摘要待核实', outputItems:'输出项', scaleCondition:'尺度来源与条件', depthDefinition:'深度定义', pose:'位姿输出', native:'原生全景支持', noNative:'否；参见输入假设', family:'方法族', license:'许可', verification:'验证范围', verifiedDate:'来源核查日期', metricDetail:'尺度详细状态', imu:'惯性信息', loops:'回环检测', system:'几何、尺度与复现条件', reproduction:'源码入口与环境', entry:'源码入口', environment:'运行环境', publication:'论文信息', authors:'作者', institutions:'机构', venue:'发表信息', displayYear:'展示年份', originalYear:'原始记录年份', yearRule:'年份口径', yearConvention:'优先采用已确认的正式发表年份，否则采用预印本或软件年份；具体版本见来源。', notes:'研究笔记与未知项', tags:'检索关键词', evidence:'证据与来源', originalSource:'原始来源', checked:'核查日期', evidencePending:'逐项证据待补充。请先查看上方论文与官方源码链接。', detailNote:'输入形状、单位及支持范围以对应版本的原文与官方实现为准。完整原始规格保留在结构化数据导出中。', saved:'★ 已收藏', saveReading:'☆ 加入阅读收藏', compared:'✓ 已加入对比', addCompare:'+ 加入对比', method:'方法', yearVenue:'年份与发表', camera:'相机模型', inputSpecs:'输入规格', outputSpecs:'输出规格', scaleDepth:'尺度与深度', readingCompare:'阅读与对比', official:'官方来源', noExport:'当前筛选没有可导出的文献。', exported:(n,ext)=>`已导出 ${n} 篇文献 · ${ext}`, sourceReview:'已阅读官方论文、代码或文档；未在本机复现。', partialReview:'已核对部分论文与官方发布信息；未在本机复现。', summarySpecs:'已核对的接口摘要', rawSpecs:'完整规格见导出的原始研究记录及官方实现。', sourceNumber:n=>`原始来源 ${n}`, language:'界面语言', illustration:'原创几何示意 · 非模型输出', fov:'360° 视场', spherical:'球面几何', focus:'重点'
    },
    en: {
      skip:'Skip to papers', home:'Panoramic Depth Atlas home', header:'An open robotics vision collection', eyebrow:'FROM PIXELS TO SPATIAL INTELLIGENCE', hero:'See the full picture', subtitle:'Depth estimation and SLAM for panoramic, fisheye and wide-FOV vision', description:'Explore projection assumptions, depth scale, model interfaces and code evidence. Find methods worth reading and practical to reproduce for robotics perception.', updating:'Updated', evidenceMotto:'Primary sources. Explicit unknowns.', depth:'Depth estimation', slam:'SLAM & odometry', entries:'entries · evidence linked', filters:'Categories & filters', geometry:'CAMERA GEOMETRY', refine:'REFINE COLLECTION', year:'Publication year', allYears:'All years', scale:'Scale type', allScales:'All scales', code:'Code status', allCodes:'All code statuses', released:'Released', partial:'Partially released', unverified:'Unverified', none:'No public source found', favorites:'My reading list', reset:'Reset filters', sidebarNote:'Categories may overlap. Wide-FOV support does not establish native panorama support. Metric scale and depth convention are tracked separately; unknowns remain explicit.', research:'CURATED FOR ROBOTICS RESEARCH', reading:'Read. Compare. Reproduce.', export:'Export papers', exportCurrent:'Export current results', json:'Full structured records', csv:'Tables & analysis', bib:'Reading-list draft', search:'Search papers', placeholder:'Search methods, papers, interfaces, keywords…', sort:'Sort results', newest:'Year: newest first', oldest:'Year: oldest first', byName:'Name: A → Z', view:'Results view', cards:'Card view', table:'Table view', papers:'papers', compareHint:'Select methods to compare input, output & scale', activeFilters:'Active filters', empty:'No papers match these filters', emptyTip:'Try a shorter keyword or broaden the camera, year and code filters.', clearFilters:'Clear filters', footnote:'Covers show a method overview or representative result from each paper, with source, page and figure attribution; click to enlarge. Inclusion reflects research relevance. Check the paper and official repository for performance, licensing and reproduction requirements. BibTeX is a reading-list draft; verify publication metadata before citing.', footer:'Connecting research through evidence', contribution:'Data & contributions ↗', compare:'Compare', clear:'Clear', compareOpen:'Compare methods', compareTitle:'Method comparison', compareIntro:'Read interfaces using consistent definitions; unknowns are preserved.', closeCompare:'Close comparison', noscript:'This atlas needs JavaScript for search and paper details. Enable JavaScript or read the records in the GitHub repository.', collectionDepth:'DEPTH COLLECTION', collectionSlam:'SLAM & ODOMETRY COLLECTION', allRecords:'All papers', updatePending:'Update pending', unknown:'Unverified', yes:'Yes', no:'No', notApplicable:'Not applicable', resultTotal:n=>`${n} in collection`, selected:n=>`${n} filters active`, removeFilter:s=>`Remove filter: ${s}`, keyword:s=>`Keyword: ${s}`, missingData:'The catalog has not loaded', missingDataTip:'Check that data/catalog.js exists and loads correctly, then refresh.', missingLink:'No verified public link', removeFavorite:'Remove from reading list', addFavorite:'Save', localFavorites:'Reading list on this device', compareMethod:s=>`Compare ${s}`, summaryFallback:'Open details for model interfaces and primary-source evidence.', venuePending:'Venue unverified', paper:'Paper', source:'Release', repo:'Repository', codeLink:'Code', details:'Method details ↗', limitCompare:'Compare up to 4 methods. Deselect one before adding another.', closeDetail:'Close paper details', project:'Project', weights:'Weights', summaryPending:'No research summary yet.', input:'Model input', output:'Model output', inputPending:'Input summary unverified', outputPending:'Output summary unverified', outputItems:'Outputs', scaleCondition:'Scale source & conditions', depthDefinition:'Depth convention', pose:'Pose output', native:'Native panorama support', noNative:'No; see input assumptions', family:'Method family', license:'License', verification:'Verification scope', verifiedDate:'Sources checked', metricDetail:'Detailed scale status', imu:'IMU / inertial data', loops:'Loop closure', system:'Geometry, scale & reproduction', reproduction:'Source entry points & environment', entry:'Source entry points', environment:'Runtime environment', publication:'Publication', authors:'Authors', institutions:'Institutions', venue:'Venue', displayYear:'Display year', originalYear:'First recorded year', yearRule:'Year convention', yearConvention:'Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.', notes:'Research notes & unknowns', tags:'Search keywords', evidence:'Evidence & sources', originalSource:'Primary source', checked:'Checked', evidencePending:'Itemized evidence is pending. Start with the paper and official source links above.', detailNote:'Input shapes, units and support depend on the cited version and official implementation. Complete source specifications are retained in structured exports.', saved:'★ Saved', saveReading:'☆ Add to reading list', compared:'✓ Added to comparison', addCompare:'+ Add to comparison', method:'Method', yearVenue:'Year & venue', camera:'Camera model', inputSpecs:'Input specifications', outputSpecs:'Output specifications', scaleDepth:'Scale / depth', readingCompare:'Read / compare', official:'Official sources', noExport:'There are no papers to export for the current filters.', exported:(n,ext)=>`Exported ${n} papers · ${ext}`, sourceReview:'Official paper, source or documentation reviewed; no local reproduction.', partialReview:'Partial paper and official release metadata reviewed; no local reproduction.', summarySpecs:'Reviewed interface summary', rawSpecs:'Full specifications are available in exported source records and official implementations.', sourceNumber:n=>`Primary source ${n}`, language:'Interface language', illustration:'ORIGINAL GEOMETRY ILLUSTRATION · NOT MODEL OUTPUT', fov:'360° FIELD OF VIEW', spherical:'SPHERICAL GEOMETRY', focus:'FOCUS'
    }
  };
  const summaries = {
    da2_panorama:'SphereViT explicitly models spherical coordinates to predict scale-invariant panoramic distance end to end. Shape quality does not establish metric scale.',
    dap:'A metric panoramic depth foundation model spanning different distance ranges. Convert the released raw output and valid mask using the author’s documented convention.',
    mcpdepth:'Multi-cylinder projection, ring attention and depth fusion improve omnidirectional stereo. This uses physical multi-camera baselines, rather than a monocular panoramic prior.',
    pager:'A unified 2026 panoramic geometry model using DA3 across six cube faces, with scale-invariant depth, metric depth, normals and sky. Distinguish checkpoint variants and scale heads.',
    reper360:'Geometric guidance and self-modulation adapt perspective priors to panoramas. In-domain metric checkpoints and zero-shot scale-and-shift-invariant checkpoints have different scale semantics.',
    unidac:'Separates relative shape from spatially varying scale to predict metric distance across cameras. The evidence preserves the discrepancy between the paper’s shift and current code.',
    vggt_omega:'More efficient cross-frame information exchange extends multi-view geometry recovery. Track reproduction and in-the-wild checkpoints separately.',
    dac:'Maps known camera projections into a common ERP representation for zero-shot metric distance across fields of view. Calibration and projection conversion remain necessary.',
    depth_anything_3:'Recovers depth, cameras and geometry from one or multiple views. “Any-view” describes view relationships, rather than native panoramic projection support.',
    da360:'Scale-invariant depth for real panoramas with several model sizes. An EXR or PLY output alone does not establish distances in meters.',
    depth_pro:'Monocular metric depth and focal-length prediction emphasizing fine boundaries. It does not directly estimate a continuous camera trajectory.',
    dreamcube:'Synchronizes 2D diffusion across cube faces for RGB-D panorama generation and depth-model adaptation. Generated geometry is not a measured metric observation.',
    panda:'Adapts Depth Anything using labeled and unlabeled panoramas with spherical augmentation. Main released checkpoints are relative; metric fine-tuning is a separate capability.',
    rpg360:'Predicts cube-face depth and normals with perspective foundation models, then aligns structure and scale by graph optimization. Scale depends on the chosen backbone, including Metric3D.',
    st2_360d:'Turns one panorama into a virtual perspective video and uses video consistency to reduce patch-scale drift. The input is still a single frame, rather than temporal SLAM.',
    unidepth_v2:'Jointly predicts perspective metric geometry, camera representation and uncertainty. Its universal naming does not establish full-ERP support.',
    unik3d:'Uses generic rays and a spherical representation for metric point maps across camera types. “Distance” is radial range; “depth” denotes camera-axis Z.',
    vggt:'Joint multi-view prediction of cameras, depth and 3D geometry. A shared reconstruction frame still has scale gauge freedom and differs from continuous SLAM.',
    video_depth_anything:'Emphasizes consistency in long-video depth. Check relative and metric weights separately; video depth does not automatically provide SLAM poses.',
    depth_anything_v2:'A strong perspective relative-depth baseline with separate metric branches. Raw fisheye or ERP images are not established supported projections.',
    depth_anywhere:'Distills perspective foundation models into panoramic students such as UniFuse and BiFuse++, using unlabeled panoramas and random rotations. Scale depends on the student and checkpoint.',
    elite360d:'Combines ERP images with icosahedron points and lightweight attention for global spherical information. Task-specific trained depth weights remain unverified.',
    metric3d_v2:'Canonical camera normalization supports perspective metric depth and normals. Focal rescaling and dataset domain affect practical metric geometry.',
    bifuse_pp:'Fuses ERP and cubemap features in supervised and self-supervised variants. Record the source of scale for each training configuration separately.',
    hrdfuse:'Learns global ERP and local tangent-view depth distributions for panoramic dual-projection fusion. Official code exists; task weights remain unverified.',
    '360monodepth':'A high-resolution panorama baseline: predict tangent-view disparity, align globally and apply Poisson blending. The original MiDaS pipeline has no metric scale.',
    mode:'Uses four 360° cameras and multiple physical baselines, with Cassini-domain matching and depth fusion. This differs from multiple projections of one panorama.',
    omnifusion:'Reduces ERP distortion using tangent views and fuses spherical geometry with global context. Useful for studying local-view fusion and panoramic seams.',
    panoformer:'An indoor panoramic Transformer with tokens built on spherical tangent planes. Dataset-supervised accuracy is not an open-world metric guarantee.',
    unifuse:'Unidirectionally fuses ERP and cubemap features derived from the same panorama. Dual projection does not introduce a physical stereo camera.',
    odgsslam2026:'A 2026 native-ERP Gaussian SLAM system for tracking and mapping, with official source and a dedicated dataset.',
    p2uslam2026:'Models historical landmark and keyframe covariance to improve weak constraints under repeated wide-FOV observations. Complete source has not been released.',
    panoair2026:'A 2026 native-ERP visual-inertial SLAM system with hybrid features, panoramic loop closure and cross-time UAV dataset references.',
    panogsslam2026:'September 2026 preprint using spherical-area-weighted photometric loss, equal-area sampling and depth-guided Gaussian initialization. Scale and code availability remain qualified.',
    mast3rslam2025:'Dense SLAM with paired 3D point maps, optional calibration and loop closure. Absolute scale still needs separate validation.',
    okvis2x2025:'A 2025 extension combining visual-inertial SLAM with dense depth, LiDAR and GNSS, exporting causal and loop-corrected trajectories.',
    panoslam2025:'A naming trap: “Pano” means panoptic semantic and instance segmentation. Inputs are RGB-D, rather than a 360° panoramic camera.',
    '360orbslam2024':'Combines panoramic triangulation and learned depth completion with ORB-style SLAM, directly linking panoramic depth and localization.',
    dbafusion2024:'Tightly couples DROID-style dense visual bundle adjustment with IMU and other sensors, providing a reference for learned geometry and inertial fusion.',
    dpvslam2024:'Adds two loop-closure mechanisms to DPVO, enabling comparison between learned local odometry and a complete SLAM system.',
    monogs2024:'A monocular Gaussian SLAM reference with RGB-D and experimental stereo support. Rendering quality does not establish fast-motion tracking accuracy.',
    splatam2024:'Joint RGB-D tracking and Gaussian mapping, with scale supplied by input depth. Reliability after substituting monocular predictions needs separate evaluation.',
    dpvo2023:'Learns sparse patch correspondences and differentiable bundle adjustment as a comparatively lightweight learned visual-odometry reference.',
    goslam2023:'Combines full-history pose optimization, fast loop closure and implicit surface updates for globally consistent dense reconstruction.',
    lfvislam2023:'Wide-FOV visual-inertial SLAM supporting rays beyond 180° and behind the imaging plane. PAL annular images should be distinguished from ERP.',
    okvis2_2022:'Scalable visual-inertial SLAM using reversible marginalization and asynchronous large-loop optimization.',
    codevio2021:'Jointly updates visual-inertial states and local dense depth through compact, optimizable depth codes.',
    droidslam2021:'A classic learned dense-correspondence and differentiable-BA system for mono, stereo and RGB-D, serving as a baseline for later learned SLAM.',
    orbslam3_2021:'A multi-map visual and visual-inertial SLAM baseline for mono, stereo and RGB-D. Fisheye support does not imply direct ERP processing.',
    basalt2020:'Connects local VIO and global mapping through nonlinear factor recovery; a useful wide-FOV inertial-localization baseline.',
    d3vo2020:'Integrates learned depth, pose and uncertainty into direct monocular odometry to study the coupling of depth priors and motion optimization.',
    omnislam2020:'Multi-fisheye stereo-depth-assisted odometry with loop closure and TSDF fusion. Its hardware differs from monocular ERP systems.',
    openvins2020:'A filter-based visual-inertial estimation platform for synchronization, calibration and localization baselines. The core has no global loop closure.',
    stella_vslam:'A practical traditional sparse-SLAM starting point with direct ERP support, map persistence and relocalization.',
    vinsfusion2019:'Supports monocular-inertial, stereo-inertial and stereo-only estimation to evaluate sensor fusion and loop-closure benefits.',
    svo_pro:'Semi-direct odometry for fisheye and catadioptric cameras, with optional inertial backend, global bundle adjustment and loop closure.'
  };
  // Compact Chinese interface/specification notes are reviewed separately from the
  // verbatim English source records. No automatic translation runs in the browser.
  // [input, output, scale conditions, research notes]
  const zhRecords = {
    da2_panorama:['单张 360°×180° 等距柱状投影（ERP）RGB；可选天空或有效区域掩码。','稠密 H×W 径向距离；每次预测仍有一个未知的全局尺度。','全局正比例尺度未知；评测时与真值对齐不代表推理结果具有米制单位。',['可用来对照 DAP 的几何形状与公制结果。','论文报告 512×1024 下存在接缝和细节损失。','推理中的嵌套引号 f-string 需要 Python 3.12；不能假定原始代码兼容 3.10。']],
    dap:['单张完整 ERP RGB；无需运动、位姿或 IMU。','原始 NPY 为 H×W float32 归一化公制距离；当前发布权重按作者 issue #4 转换：R_m=100×raw。','学习得到公制先验。原始存储采用 100 米尺度；100 米无效哨兵必须排除。100 米和 10 米 PNG 仅用于可视化。',['优先审计输出适配器，再进行 ERP 深度复现。','depth2point.py 在判断整数类型前已转换为浮点，部分归一化分支无法执行；不能直接用 PNG 安全恢复公制点云。','100 米规则仅对应当前发布配置与权重。官方 README 提供权重入口，未完成权重下载与推理。']],
    mcpdepth:['多台经过标定的全景相机，具有真实的立体基线。','立体视差图及融合后的全向深度。','已知物理立体基线提供公制尺度；不是单图学习的公制先验。',['正式研讨会标题增加 Practical，预印本与仓库对应同一工作。','已核实 MCPDepth_disparity_Deep360.tar 与 MCPDepth_fusion_Deep360.tar 发布文件。']],
    pager:['单张 ERP RGB；论文同时训练透视图像。','统一权重输出 ERP 尺度不变深度、公制深度及天空掩码；模型还讨论法线。','统一权重分别采用尺度不变与学习公制尺度分支；仅公制权重采用直接公制预测头。自动室内外 CLIP 路由是投稿后的更新。',['论文公制评测按数据集指定室内或室外尺度头，默认自动路由属于后续发布行为。','输出高分辨率 ERP 不会增加固定六面网络输入的真实细节。','官方代码与权重已提供。']],
    reper360:['单张 ERP RGB，配合同图生成的立方体投影引导。','公制权重输出 ERP 公制深度；零样本 SSI 权重输出归一化 [0,1] 深度。','Matterport3D 与 Stanford2D3D 公制模型和合成数据零样本 SSI 模型分开发布。SSI 评测采用尺度与偏移对齐。',['--depth-type metric 只能配合公制权重使用；官方 SSI 推理跳过点云导出。','项目接收与发布状态已超出最初预印本摘要的信息。','已核实代码及权重链接。']],
    unidac:['单张 RGB 的规范 ERP 区域；需经纬范围、纬度网格及有效或注意力掩码。','规范 ERP 下 B×1×H×W 的米制欧氏径向距离。','论文为 Rm=S⊙Rrel+t；当前公开主分支观测到 Rm=S⊙中位数归一化 Rrel，没有显式 +t。权重与配置对应关系仍待核实。',['适合重点阅读相机几何与局部尺度误差。','论文与代码的显式偏移差异必须保留。','学习局部尺度图不等于 VIO 可观测的公制尺度测量。尚未在当前 GPU 测试。']],
    vggt_omega:['N 张 RGB 图像或视频帧。','深度、深度置信度和位姿编码 pose_enc。','未核实公制尺度声明；按重建的任意公共全局尺度处理。',['基准测试应采用 2026 年 9 月的 416-Reproduction 权重；512 in-wild 明确不用于基准。','项目与仓库记录的发布日期分别为 9 月 18 日和 9 月 8 日。','未核实可公平比较的运行时间或显存条件。']],
    dac:['单张 RGB；相机参数或射线查找表，以及有效区域掩码。','规范 ERP 中 B×1×H×W 米制欧氏径向距离；原相机结果需重投影。','学习公制米制先验，受数据域影响；室内和室外权重分开。',['正确标定后可作为原始鱼眼公制基线。','跨相机适配不代表非中心拼接相机在物理上成为中心相机。','自定义算子及旧版 PyTorch 增加 Windows 原生复现难度。']],
    depth_anything_3:['一张或多张 RGB，张量 B×N×3×H×W。','Prediction.depth 为 N×H×W；相机与几何输出取决于模型变体。','Any-view 通常有任意公共尺度；Metric-Large 需 focal_pixels×net_output/300，Nested 已为米。已知公制位姿对齐也可提供尺度。',['区分相机坐标 Z 与单位射线径向距离。','缩放图像时必须同步缩放内参 K；单目公制分支需要焦距换算。','完整 ERP 未验证；采用切平面视图时须记录虚拟外参。几何榜单优势不是腕部 VIO 精度结果。']],
    da360:['单张完整 2:1 ERP RGB。','pred_disp 为尺度不变视差；test.py 取倒数得到径向深度，再除以每张图像的最小值。','尺度不变结果，不是公制；测试时的归一化又引入逐图尺度。',['2026 年 9 至 10 月已发布演示与数据，旧的代码不可用判断已过时。','原 Insta360-Research-Team 仓库重定向至 antigravity-tech。','可用来研究接缝感知解码与偏移；不提供位姿。项目直连获取失败时使用已验证代码入口。']],
    depth_pro:['单张 RGB；可选像素焦距。','H×W 米制深度及估计的像素焦距。','学习公制先验，依赖焦距。',['可作为高细节透视公制基线。','不提供时序一致性或运动估计；不能从标题推断实际公制精度。','官方模型卡注明发布权重为重新训练的参考实现，与论文性能不完全一致。']],
    dreamcube:['生成任务使用单视图条件和文本；深度适配使用同步透视模型处理 RGB 全景。','RGB-D 立方体或 ERP 生成结果，以及同步深度估计变体。','扩散生成几何不能当作测量的公制深度；Marigold 式适配通常保留相对或仿射歧义，除非单独标定。',['网站和仓库宣布模型发布，但官方模型卡称当前权重仅用于基本检查，最终权重后续发布。','归为生成与适配研究，不能直接视作可替换的公制传感器。']],
    panda:['单张 ERP RGB；视频脚本对每帧独立估计。','B×1×H×W 归一化相对深度，官方范围 0–1。','主预训练权重为相对深度；独立公制微调目录代表另一种能力。',['可用作相对全景基线和增强策略参考。','run_image 把预测归一化成 8 位 PNG；定量评测应截取原始张量。','视频接口不证明跨帧几何一致性。']],
    rpg360:['单张 ERP RGB。','图优化后的 ERP 深度和法线；可由径向距离生成点几何。','取决于上游基础模型。相对模型仍有尺度歧义；Metric3D 变体继承可能出错的学习公制先验。图一致性不提供测量尺度。',['与全景 SfM 或特征匹配实验紧密相关，但不是完整在线 SLAM。','无需专门训练的原生权重；上游深度和法线模型的许可与权重条件仍适用。']],
    st2_360d:['将单张 ERP 转为合成的透视视图序列；不是相机采集的真实时序视频。','合并的 ERP 深度图。','继承所选视频深度骨干的尺度；虚拟视图排序和空间一致性不会提供公制尺度。',['已核实论文和项目元数据，未确认官方代码或权重链接。','免训练的全景适配与免训练的基础模型是不同概念。']],
    unidepth_v2:['单张 RGB。','公制 Z 为 B×1×H×W；点图为 B×3×H×W；径向距离由点范数得到。','学习得到的米制尺度先验。',['可作为透视公制及置信度对照。','显式跨相机实验优先参考 UniK3D。','不输出位姿。']],
    unik3d:['单张 RGB，C×H×W 或 B×3×H×W。','相机坐标米制点图 B×3×H×W；distance=点图范数，B×1×H×W；depth 为 Z。','学习得到的米制尺度先验。',['适合比较已知标定与预测相机射线。','单相机点图没有设备运动输出。','完整球面结果不能直接套用 README 中含混的 depth 名称。']],
    vggt:['N 张重叠 RGB，B×S×3×H×W；允许单帧。','depth 为 B×S×H×W×1；depth_conf 为 B×S×H×W，并可输出相机几何。','任意公共全局尺度；训练归一化平均点距离，不代表物理米。',['无 IMU，也不保证公制尺度；相机输出不等于连续腕部轨迹。','2026 年 5 月显存相关修复使旧显存数值可能过时。','VGGT-Ω 为单独收录的 2026 更新。']],
    video_depth_anything:['RGB 视频窗口；离线示例为 32 帧，并有实验性流式缓存。','T×H×W 深度序列；相对权重与独立公制权重分开。','主模型为相对深度；另有 2025 年基于 VirtualKITTI 和 IRS 训练的公制模型。',['时间平滑不等于刚性多视图一致性，也不保证位姿改善。','报告的 ScanNet δ1 从离线 0.926 降至流式 0.836，不能混用精度。','项目三维演示先用 MoGe 首帧估计相机和仿射尺度偏移；不是 VDA 单独具备的能力。']],
    depth_anything_v2:['单张 RGB。','H×W 相对深度或类似逆深度的标量，不是米。','主权重为相对深度；独立公制分支分别在 Hypersim 室内或 Virtual KITTI 室外微调。',['可作为快速透视对照，不能直接将完整 ERP 当作已标定输入。','run_video.py 逐帧推理，不做时序融合。','没有腕部位姿精度证据。官方 Giant 权重仍标为即将发布，配置存在不等于权重已发布。']],
    depth_anywhere:['推理使用单张 ERP RGB；训练使用有标注与无标注全景，立方体教师视图由同图产生。','所选全景学生的 ERP 深度图；语义随学生而定。','取决于学生及权重：数据集监督深度与仿射不变透视蒸馏混合，不能假定每个配置均为公制。',['这是支持多个全景学生的训练框架，不是单一通用架构。','README 中的预训练链接已核实，未实际执行权重推理。']],
    elite360d:['单张 ERP RGB，以及由同图生成的二十面体点集。','ERP 深度图。','采用室内数据集监督尺度；未验证开放域公制基础模型能力。',['checkpoints 目录中的 ResNet18/34 文件仅为骨干初始化，不能证明任务深度权重发布。','效率比较必须统一骨干、分辨率、数值精度和硬件。']],
    metric3d_v2:['单张 RGB，加用于公制换算的已标定焦距或内参。','公制 Z 深度；支持的模型还输出三通道法线及置信度通道。','规范焦距重缩放后才得到公制值，原始规范输出不能未经转换直接当米。',['可作为透视公制深度和法线对照。','切平面视图需使用正确的虚拟焦距并做转换。','不输出位姿。论文中 DROID 加深度虽改善平移漂移，但 KITTI 00 旋转漂移由 0.29 增至 0.37 度/100米，不是腕部精度保证。']],
    bifuse_pp:['深度推理为单张 ERP；自监督训练使用相邻视频帧、位姿与重投影。','单张 ERP 深度图，监督和自监督模式分开。','监督权重继承数据集尺度；缺少已知运动时，单目自监督尺度存在歧义。',['比较时显式区分监督与自监督。','训练中的自运动估计不证明可部署的 SLAM 轨迹输出。']],
    hrdfuse:['单张 ERP RGB 及同图生成的切平面图块。','ERP 深度图。','室内监督数据集尺度；接入几何系统前仍需审计单位与深度定义。',['仓库由第一作者主页链接，当前 README 几乎没有复现指南。','论文比较采用数据集特定训练，不能解释为通用公制迁移。','代码已公开，任务预训练权重待核实。']],
    '360monodepth':['单张 ERP RGB。','ERP 球面视差，即径向距离的倒数；由此导出相对深度。','原始 MiDaS 流程为带仿射歧义的逆深度。跨图块对齐只消除分块不一致，不恢复公制尺度。',['可参考 2K/4K 投影与拼接流程，每张全景需多次透视预测和优化。','C++ 的 Ceres/Eigen 绑定增加安装工作；更换骨干会改变实验，并不会自动消除视差歧义。']],
    mode:['多台同步 360° 相机；论文使用正方形刚架上的四相机和六组立体对。','立体视差、置信度及融合的全向深度。','公制几何来自真实标定基线单位；仍受匹配与标定误差影响。',['必须具备物理多相机采集和标定，不能直接作为单目模型推理。','旧版球面卷积需要自定义编译。已提供代码与权重链接。']],
    omnifusion:['单张 ERP RGB，配合同图生成的切平面视图。','融合 ERP 深度；官方评测可以保存点云。','监督数据集深度尺度；官方发布未证明广泛零样本公制迁移。',['预训练权重与模型、数据集绑定，官方仓库有预训练说明。','切平面共享一个相机中心，不构成立体基线。']],
    panoformer:['单张 ERP RGB。','H×W 的 ERP 深度图。','室内监督数据集尺度；未证明零样本公制泛化。',['可作为几何感知 Transformer 的历史基线。','未核实的预测单位不能直接写成米。']],
    unifuse:['单张 ERP RGB 及由同一图像确定性生成的立方体投影。','与 ERP 对齐的 B×1×H×W 深度；监督权重绑定数据集尺度和范围。','遵循监督数据集的深度定义；不能据此保证开放域公制精度。',['适合作为领域基线，开放域实验优先级低于基础模型。','同一场景图的两种投影不构成真实立体基线。']],
    odgsslam2026:['等距柱状 RGB 或 RGB-D 全景序列。','相机轨迹与可渲染的三维高斯地图。','单目 RGB 有尺度歧义；公制 RGB-D 输入可提供尺度。',['渲染效果不能证明全局回环或快速运动鲁棒性；需核对 ERP 拼接与 RGB-D 定义。','官方源码、数据集和 CVPR 论文已提供。']],
    p2uslam2026:['单目 PAL/Taylor 或 Kannala–Brandt 鱼眼序列。','轨迹、稀疏地图，以及考虑协方差的跟踪、局部 BA、回环与地图复用。','纯单目视觉尺度存在歧义；所提方法无 IMU。',['官方仓库仅含 README 和图片，没有完整源码。','Taylor 或 KB 模型支持不是原生 ERP 支持。']],
    panoair2026:['完整 ERP 帧和同步 IMU；需要相机与 IMU 的外参、时间标定。','视觉惯性状态、稀疏地图，以及全景回环校正轨迹。','在可观测条件下由 IMU 融合提供公制尺度。',['作者通过 Drive 宣传源码与数据集，但未解包检查归档、许可或发布完整性。','无人机结果不是腕部高精度定位验证。']],
    panogsslam2026:['单目 ERP 序列；使用预训练全景深度初始化地图，论文引用 BiFuse。','相机位姿与高斯地图。','论文采用轨迹对齐来处理尺度歧义；学习深度初始化不证明绝对公制尺度。',['预印本承诺后续公开代码，未明确验证回环。','重采样视场及 ATE 对齐方式会影响比较。']],
    mast3rslam2025:['单目 RGB 序列；标定可选，假定通用中心相机；先验原始训练以针孔图像为主。','H×W×3 配对点图、内部置信度与匹配特征，连续位姿、稠密地图、回环和重定位。','Sim(3) 优化处理图对之间的尺度不一致，轨迹评测使用尺度对齐；公制权重不保证全局轨迹公制。',['通用中心相机公式不代表完整 ERP 已可直接运行。','官方源码和骨干模型已提供。']],
    okvis2x2025:['已标定相机与 IMU；可选 RGB-D、学习立体或 MVS 深度、LiDAR、GNSS。','因果、最终和 BA 轨迹 CSV，以及体素子地图与 PLY 网格。','公制融合状态受已标定深度、LiDAR 或 GNSS 配置约束。',['标定融合不代表可以任意替换为单目预测深度。','ERP 载入与相机模型未核实；官方有数据集配置。']],
    panoslam2025:['透视 RGB-D 序列和二维全景分割（语义与实例）预测。','相机跟踪、几何高斯地图，以及三维语义与实例标签。','输入 RGB-D 提供公制尺度。',['Pano 代表全景分割 Panoptic，而非 360° 全景投影。','官方仓库仅 README，未核实完整代码或许可。']],
    '360orbslam2024':['单目 ERP 全景；稀疏三角化深度输入学习补全模块。','轨迹、稀疏地图与稠密补全的全景深度。','学习补全在实验中减少尺度漂移，但不保证任意场景的公制尺度。',['未确认完整官方代码和权重。','合成场景结果不是腕部定位精度验证。']],
    dbafusion2024:['图像、内参、同步 IMU 及相机惯性标定；可选 GNSS、轮速，代码也声明支持双目与 RGB-D。','实时导航文本、关键帧位姿与 pkl 点云，以及公制视觉惯性状态。','IMU 提供尺度；GNSS 可约束漂移和地理参考，但纯 VIO 模式并非必须。',['稠密重投影主要采用针孔模型；未确认原生 ERP 或完整全局回环。','官方源码已提供。']],
    dpvslam2024:['已标定单目针孔 RGB。','全局校正的轨迹与稀疏图块几何。','单目视觉尺度存在歧义。',['未验证原生 ERP 或鱼眼支持；速度和显存依赖发布配置。','官方实现在 DPVO 仓库中。']],
    monogs2024:['已标定的单目或 RGB-D 透视图像；双目为实验性支持。','相机位姿、稠密高斯地图及渲染的 RGB 和深度。','单目为任意尺度；RGB-D 或双目尺度来自标定输入。',['README 建议初始 BA 完成前避免剧烈运动。','局部关键帧优化不等于明确的全局回环；无原生 ERP 支持。']],
    splatam2024:['未知位姿的 RGB-D 帧与相机内参；输入为真实或合成深度，而不是默认可靠的单目公制先验。','相机轨迹、稠密三维高斯地图、渲染色彩和深度，以及 PLY 高斯点。','由输入 RGB-D 的深度提供公制尺度。',['无原生 ERP 或明确的全局回环。','渲染质量不证明快速运动跟踪鲁棒性。官方代码已提供。']],
    dpvo2023:['带针孔内参的已标定单目 RGB。','六自由度轨迹与稀疏图块逆深度结构。','单目几何仅确定到一个未知尺度。',['原始 DPVO 是视觉里程计；明确的回环能力属于 DPV-SLAM 扩展。','无原生 ERP 支持，官方代码与模型已提供。']],
    goslam2023:['已标定单目、双目或 RGB-D 透视序列。','全局优化轨迹和神经隐式表面或网格。','单目尺度有歧义；双目或 RGB-D 可以提供公制尺度。',['原生 ERP 与鱼眼未核实；神经地图质量与跟踪鲁棒性不同。','仓库仍在开发，已提供代码和训练模型链接。']],
    lfvislam2023:['已标定超广角或 PAL 图像，包含负半平面射线，并需要 IMU。','视觉惯性轨迹、稀疏地图，以及论文中的姿态引导全景回环校正。','可观测的 IMU 融合提供公制尺度。',['PAL 环形图不等于 ERP。','README 称回环后续更新，须区分论文能力与代码完整性。']],
    okvis2_2022:['已标定单目、双目或多相机视觉流，以及 IMU。','因果轨迹、全局优化惯性轨迹与稀疏地图。','在可观测和标定条件下，惯性或立体约束提供尺度。',['无原生 ERP 验证。','因果位姿不同于异步回环优化结果，官方作者实现已公开。']],
    codevio2021:['已标定 RGB 单目视频、IMU、VIO 的稀疏深度或特征，以及学习的 CVAE 深度模型。','视觉惯性状态轨迹和通过紧凑深度码优化的局部稠密深度。','惯性 VIO 提供公制状态；学习深度码与状态联合更新。',['无原生 ERP。','论文存在不代表可部署实现已验证；完整官方源码和权重待核实。']],
    droidslam2021:['已标定单目、双目或 RGB-D 序列；原始系统无 IMU，仓库主要使用针孔内参及可选畸变。','相机轨迹和稠密逆深度重建；内部学习稠密对应与权重。','单目视觉有尺度歧义；标定立体基线或 RGB-D 可提供公制尺度。',['针孔重投影不能直接输入 ERP。','非局部优化不同于明确的地点识别；官方源码与模型可用。']],
    orbslam3_2021:['单目、双目、RGB-D 视觉模式；单目或双目惯性模式；支持已标定针孔或鱼眼，惯性模式需 IMU。','相机与关键帧轨迹、稀疏地图、重定位及多地图。','纯单目视觉有尺度歧义；双目、RGB-D 或可观测惯性模式可提供公制尺度。',['Kannala–Brandt 鱼眼支持不证明原生 ERP 支持。','官方源码已公开；IMU 是否使用取决于传感器模式。']],
    basalt2020:['已标定双目或广角相机与 IMU；也提供纯视觉里程计模式和相机工具。','视觉惯性状态、稀疏路标及基于因子恢复的全局地图。','依赖已标定双目或惯性测量的可观测性。',['完整 ERP 未核实；局部 VIO 与全局因子恢复建图需区分。','不能默认任意多相机均可部署；官方 GitLab 与 GitHub 镜像可用。']],
    d3vo2020:['推理使用已标定单目视频；自监督训练使用双目或时序视频；无需 IMU。','预测深度、相对位姿、光度不确定性或亮度相关参数，以及直接法 VO 轨迹和局部几何。','学习公制先验来自已标定立体训练；域迁移与尺度鲁棒性需评测。',['完整原始代码与权重未确认。','需注意针孔投影与训练域限制，已提供论文和项目页。']],
    omnislam2020:['已标定宽基线多鱼眼立体刚架，覆盖 360° 观测范围。','刚架轨迹、学习的全向立体深度与稠密 TSDF 地图。','已知刚架立体基线提供公制尺度。',['已标定的 360° 刚架不同于单台拼接 ERP 相机。','完整官方源码和权重未确认。']],
    openvins2020:['单目或同步双目图像、相机模型和 IMU；需要图像与 IMU 时间戳、时空标定及噪声参数。','IMU 六自由度位姿、速度、陀螺仪与加速度计偏置、协方差、稀疏特征及可选标定状态。','充分激励且非退化运动下，惯性测量提供公制尺度；全局平移和偏航规范自由度仍存在。',['核心估计器为 VIO，无全局回环。','等距鱼眼不等于 ERP；官方源码和文档可用。']],
    stella_vslam:['已标定单目、双目或 RGB-D；支持透视、鱼眼与等距柱状相机模型。','稀疏地图、相机与关键帧轨迹、重定位以及可复用的保存地图。','单目视觉仅有任意尺度；双目或 RGB-D 尺度来自标定输入。',['ERP 支持不代表单目公制；IMU 接入仍为未来工作。','历史 OpenVSLAM 许可存在问题，应采用当前维护版本。社区分支有源码和 ERP 示例。']],
    vinsfusion2019:['单目加 IMU、双目加 IMU 或纯双目；支持针孔、Mei 或等距标定，可选 GPS。','VIO 或 VO 轨迹，可选视觉回环校正及 GPS 全局融合。','已知立体基线或可观测惯性融合提供尺度。',['Mei 或等距相机支持不等于 ERP。','关联论文是 VINS-Mono，并非单独的 VINS-Fusion 论文；官方代码有可选融合节点。']],
    svo_pro:['单目或双目的透视、鱼眼或折反射图像；视觉惯性模式需要 IMU。','VO 或 VIO 轨迹、稀疏全局地图，可选 iSAM2、全局 BA 和回环。','纯单目 VO 有尺度歧义；双目或可观测视觉惯性模式提供公制尺度。',['相机支持不代表原生 ERP。','未认定存在单一独立的 SVO Pro 论文；官方 RPG 开源实现可用。']]
  };
  const families = {
    depth_and_geometry:'深度与三维几何', multi_view_stereo:'多视图立体深度', monocular_depth:'单目深度', generative_rgbd_and_depth_adaptation:'RGB-D 生成与深度适配',
    'panoramic Gaussian SLAM':'全景高斯定位与建图','uncertainty-aware wide-FoV feature SLAM':'不确定性感知广视场特征法定位建图','panoramic hybrid-feature visual-inertial SLAM':'全景混合特征视觉惯性定位建图','foundation-model dense SLAM':'基础模型稠密定位建图','multi-sensor visual-inertial dense SLAM':'多传感器视觉惯性稠密定位建图','panoptic Gaussian RGB-D SLAM':'全景分割高斯 RGB-D 定位建图','panoramic feature / learned completion SLAM':'全景特征与学习补全定位建图','learned dense multi-sensor VIO':'学习型稠密多传感器视觉惯性里程计','learned sparse patch SLAM':'学习型稀疏图块定位建图','Gaussian visual SLAM':'高斯视觉定位建图','RGB-D Gaussian SLAM':'RGB-D 高斯定位建图','learned sparse patch VO':'学习型稀疏图块视觉里程计','learned dense SLAM / neural implicit mapping':'学习型稠密定位与神经隐式建图','wide-FoV visual-inertial SLAM':'广视场视觉惯性定位建图','optimization visual-inertial SLAM':'优化式视觉惯性定位建图','learned depth-code VIO':'学习型深度码视觉惯性里程计','learned dense SLAM':'学习型稠密定位建图','feature visual / visual-inertial SLAM':'特征法视觉或视觉惯性定位建图','optimization VIO / mapping':'优化式视觉惯性里程计与建图','hybrid learned direct VO':'学习与直接法混合视觉里程计','omnidirectional multi-camera depth-assisted SLAM':'全向多相机深度辅助定位建图','filter VIO':'滤波式视觉惯性里程计','feature visual SLAM':'特征法视觉定位建图','optimization multi-sensor VIO / SLAM':'优化式多传感器视觉惯性定位建图','semi-direct VO / visual-inertial SLAM':'半直接视觉里程计与视觉惯性定位建图'
  };
  const licenses = {
    da2_panorama:{code:'Apache-2.0',weights:'官方模型已发布；再次分发前应核对独立模型卡条款。'},
    dap:{code:'CC-BY-NC-4.0（2026-10-17 核对官方 LICENSE）；不是 MIT。',weights:'官方权重入口已核实，独立模型卡条款待核实；DINOv3 上游条款另计。'},
    mcpdepth:{code:'BSD-3-Clause',weights:'已发布 Deep360 匹配与融合权重归档，独立权重条款待核实。'},
    pager:{code:'Apache-2.0',weights:'CC-BY-NC-4.0；数据集采用各自许可。'},
    reper360:{code:'Apache-2.0；上游 Depth Anything V2 组件条款仍适用。',weights:'独立权重条款待核实；还需遵守上游骨干条款。'},
    unidac:{code:'MIT',weights:'未观察到 HF 模型卡显式权重许可；DINOv3 上游条款另计。'},
    vggt_omega:{code:'VGGT Omega 自定义许可；应阅读 LICENSE，不能归为 Apache 或 MIT。',weights:'官方 HF 模型卡为 fair-noncommercial-research-license；需接受受限访问协议并提供联系信息，尚未申请。'},
    dac:{code:'MIT',weights:'官方提供下载，独立权重条款待核实。'},
    depth_anything_3:{code:'Apache-2.0',weights:'Small/Base、Mono-Large、Metric-Large 为 Apache-2.0；Any-view Large/Giant 与 Nested 为 CC-BY-NC-4.0；有更新时优先核对 -1.1。'},
    da360:{code:'MIT；Depth Anything V2 依赖条款另计。',weights:'官方 hljiang/DA360 模型卡标注 Apache-2.0；仍需核查上游与各权重兼容性。'},
    depth_pro:{code:'Apple 自定义软件许可及组件声明。',weights:'apple-amlr；与代码许可不同，应核对模型卡。'},
    dreamcube:{code:'待核实，未确认顶层源码许可。',weights:'HF 模型卡标注 Apache-2.0；上游扩散模型条款可能仍适用。'},
    panda:{code:'Apache-2.0',weights:'Small/Base/Large 提供链接；独立权重条款待核实，骨干条款也需核查。'},
    rpg360:{code:'待核实',weights:'待核实；使用上游模型权重及各自条款。'},
    st2_360d:{code:'待核实',weights:'待核实'},
    unidepth_v2:{code:'源码头部为 CC-BY-NC-4.0。',weights:'需分别核对各 HF 模型卡条款。'},
    unik3d:{code:'LICENSE 与源码为 CC-BY-NC-SA-4.0；README 的 BY-NC-4.0 简写存在不一致。',weights:'未观察到官方 HF 模型卡的独立许可。'},
    vggt:{code:'2025-07-29 起采用允许部分商业使用的 VGGT 自定义许可，存在排除条款。',weights:'原始 VGGT-1B 为非商业；VGGT-1B-Commercial 是独立受限访问权重和许可。'},
    video_depth_anything:{code:'Apache-2.0',weights:'README：Small 为 Apache-2.0，Base/Large 为 CC-BY-NC-4.0；公制模型卡需另外核对。'},
    depth_anything_v2:{code:'Apache-2.0',weights:'Small 为 Apache-2.0；Base/Large/Giant 为 CC-BY-NC-4.0；公制变体需逐卡核查。'},
    depth_anywhere:{code:'Apache-2.0',weights:'官方 Google Drive 权重链接存在，独立权重条款待核实。'},
    elite360d:{code:'待核实；未确认仓库许可。',weights:'仅确认通用 ResNet 初始化文件，未确认 Elite360D 深度任务权重。'},
    metric3d_v2:{code:'BSD-2-Clause',weights:'独立条款待核实；官方 README 要求商业用途联系作者。'},
    bifuse_pp:{code:'MIT',weights:'README 声称代码和模型均为 MIT，未单独检查下载条款。'},
    hrdfuse:{code:'MIT',weights:'待核实；公开 README 简略，未确认任务预训练下载。'},
    '360monodepth':{code:'MIT',weights:'使用独立许可的上游 MiDaS 或 BoostingMonocularDepth 权重，无需原生训练权重。'},
    mode:{code:'BSD-3-Clause',weights:'README 链接 ModeDisparity、ModeFusion、ModeFusion_soiled；独立条款待核实。'},
    omnifusion:{code:'MIT',weights:'官方 README 提供预训练评测模型，独立权重条款待核实。'},
    panoformer:{code:'本次未核实 SPDX 标识。',weights:'官方预训练链接及独立条款仍需检查。'},
    unifuse:{code:'MIT（已检查官方 LICENSE）。',weights:'待核实'},
    odgsslam2026:'仅限非商业学术研究；适用 Imperial MonoGS 的 LICENSE.md。',
    p2uslam2026:'待核实；未确认完整源码或许可。',
    panoair2026:'待核实；未解包检查作者链接的归档。',
    panogsslam2026:'待核实',
    mast3rslam2025:'代码为 CC BY-NC-SA 4.0；权重另受 naver/mast3r 的 CHECKPOINTS_NOTICE 约束。',
    okvis2x2025:'BSD-3-Clause；模型和依赖条款另计。',
    panoslam2025:'待核实；官方仓库仅 README。',
    '360orbslam2024':'待核实',
    dbafusion2024:'代码为 GPL-3.0；DROID 权重及依赖条款另计。',
    dpvslam2024:'代码为 MIT；模型和依赖条款另计。',
    monogs2024:'仅限非商业学术研究；需核对 Imperial LICENSE.md 与依赖声明。',
    splatam2024:'主代码为 BSD-3-Clause；高斯光栅化依赖条款另计。',
    dpvo2023:'代码为 MIT；模型条款按发布渠道核对。',
    goslam2023:'待核实；复用前需审计代码、依赖与模型条款。',
    lfvislam2023:'GPL-3.0',okvis2_2022:'BSD-3-Clause',codevio2021:'待核实',
    droidslam2021:'代码为 BSD-3-Clause；权重条款需核对发布渠道。',
    orbslam3_2021:'代码为 GPL-3.0',basalt2020:'BSD-3-Clause',
    d3vo2020:'完整原始实现及权重许可待核实。',
    omnislam2020:'待核实；完整官方实现未确认。',
    openvins2020:'代码与文档为 GPL-3.0。',
    stella_vslam:'当前代码为 BSD-2-Clause；README 认为 0.3 以前的废弃版本属于 GPL 衍生。',
    vinsfusion2019:'GPL-3.0',
    svo_pro:'GPL-3.0；保留 OKVIS 后端声明，商业用途见 README 联系方式。'
  };
  const environments = {
    da2_panorama:'官方测试：Ubuntu 20.04、Python 3.12、CUDA 12.2、RTX 3090；xformers 0.0.28.post2。',dap:'官方 Python 3.12；测试 torch 2.7.1、torchvision 0.22.1，要求 torch>2；DINOv3-L 骨干。',mcpdepth:'待核实；应按所选版本检查官方依赖。',pager:'官方测试 Linux、Python 3.10、PyTorch≥2.0、CUDA≥12.1。',reper360:'官方环境为 Python 3.9 与 requirements.txt。',unidac:'官方 Python 3.10.18、torch 2.7.0、torchvision 0.22.0、cu118；DINOv3 ViT-L16。',vggt_omega:'官方 PyTorch 仓库；尚未完整审计精确版本要求。',dac:'官方 conda：Python 3.9、torch 1.13.1+cu116；需自定义 CUDA 算子，另有 Docker。',depth_anything_3:'官方 PyTorch 仓库；尚未完整审计精确版本要求。',da360:'官方 PyTorch 仓库；尚未完整审计精确版本要求。',depth_pro:'官方 PyTorch 仓库；尚未完整审计精确版本要求。',dreamcube:'官方环境采用 Python 3.11 与 requirements.txt。',panda:'官方 Python 3.10、torch 2.0.0、CUDA 11.7、cuDNN 8.5。',rpg360:'待核实；应按所选版本检查官方依赖。',st2_360d:'待核实；官方实现及运行环境尚未确认。',unidepth_v2:'官方 Linux、Python≥3.10、CUDA≥11.8。',unik3d:'官方 Linux、Python≥3.10、CUDA≥11.8；安装示例采用 cu121。',vggt:'官方 PyTorch 仓库；尚未完整审计精确版本要求。',video_depth_anything:'官方 PyTorch 仓库；尚未完整审计精确版本要求。',depth_anything_v2:'官方 PyTorch 仓库；尚未完整审计精确版本要求。',depth_anywhere:'官方精简环境为 Python 3.8 与 requirements.txt；教师、学生依赖不同。',elite360d:'官方 Python 3.10、PyTorch≥1.12.0、CUDA≥11.3。',metric3d_v2:'官方 PyTorch 仓库；尚未完整审计精确版本要求。',bifuse_pp:'官方 PyTorch 仓库；尚未完整审计精确版本要求。',hrdfuse:'待核实；应按所选版本检查官方依赖。','360monodepth':'官方 Python≥3.8，加 C++ Ceres、Eigen、OpenCV、pybind11；推荐 Docker。',mode:'官方 PyTorch≥1.5.0；球面卷积编译要求 gcc/g++≤7.5.0。',omnifusion:'官方测试 Python 3.7.4、PyTorch 1.9.0、CUDA 11.6。',panoformer:'官方 PyTorch 1.7.1、Python 3.8、CUDA 10.1、RTX 3090。',unifuse:'官方旧环境 Python 3.6、torch≥1.0、CUDA≥9；未测试现代版本兼容性。',odgsslam2026:'CUDA 全向光栅化；基于图的关键帧移除减少显存，未进行本地基准。',p2uslam2026:'CPU 特征法架构；完整源码不可用，无法做性能分析。',panoair2026:'论文：C++/ONNX；Jetson Orin NX 的 TensorRT 配置为步长 3、10 Hz，非本地结果。',panogsslam2026:'论文采用 RTX 4090；未在本机复现运行效率。',mast3rslam2025:'CUDA；论文 RTX 4090 结果不是本地测量。',okvis2x2025:'Ubuntu C++/CMake；神经立体、MVS 与稠密建图增加计算量。',panoslam2025:'高斯优化与全景分割视觉模型；运行效率待核实。','360orbslam2024':'ORB-SLAM2 式多线程加深度网络；采用 CARLA 评测。',dbafusion2024:'CUDA/PyTorch 与优化后端。',dpvslam2024:'单张 CUDA GPU；论文报告的配置需 5–7 GB 显存，不是本机测量。',monogs2024:'作者采用 RTX 4090；另有加速分支与 CUDA 光栅化器。',splatam2024:'PyTorch/CUDA 高斯光栅化；优化量依场景而定。',dpvo2023:'CUDA/PyTorch；官方支持 Ubuntu 20/22 与 CUDA 11/12 环境。',goslam2023:'CUDA/PyTorch、tiny-cuda-nn；跟踪、后端与建图并行。',lfvislam2023:'基于 VINS 的 ROS1/C++ 系统，采用 PAL 标定。',okvis2_2022:'C++/CMake；可选 LibTorch 分割与 ROS2。',codevio2021:'学习深度解码器与 VIO；完整官方发布尚未确认。',droidslam2021:'CUDA；官方 README 提醒 GPU 显存需求较高。',orbslam3_2021:'CPU C++；是否使用 IMU 由传感器模式决定。',basalt2020:'CPU C++；官方安装有 CMake 与二进制路径。',d3vo2020:'学习推理与直接法优化器；无本地运行效率测试。',omnislam2020:'多台同步相机与学习全向立体；未在本地测试。',openvins2020:'CPU；需要相机与 IMU 同步及标定。',stella_vslam:'CPU C++；官方文档介绍 Docker 与 ROS 包装。',vinsfusion2019:'官方 ROS1/Ceres 实现；作者建议硬件同步与全局快门。',svo_pro:'C++ ROS1；依赖滑窗后端、iSAM2 和 DBoW2。'
  };
  const specifications = {
    da2_panorama:{input:{projection:'完整球面 ERP；原始鱼眼需经过标定后映射。',intrinsics:'标准完整 2:1 ERP 不使用针孔 K，但方位与角度定义必须一致。',resolution:'训练 512×1024，推理尺寸按配置。',gravity:'公开接口无需重力测量；训练方位先验仍可能存在。',synchronization:'单帧无需外部传感器同步；接入 VIO 时需时间戳和外参。'},output:{point_map:'distance2pointcloud 导出 PLY。',normal:'由预测距离计算，不代表独立法线预测头。',confidence:'仅可选输入掩码，未核实不确定性预测头。',depth_convention:'欧氏径向距离，明确为尺度不变；不是仿射逆深度。',pose_output:'未确认深度推理接口提供相机位姿；深度图本身不是轨迹。',runtime:'未核实可公平比较的时间、精度和峰值显存条件，未在本机测量。'}},
    dap:{input:{projection:'360°×180° ERP；原始鱼眼需外部转换。',intrinsics:'标准球面角度网格，不使用针孔 K。',resolution:'配置相关；应记录 YAML、骨干和实际填充或缩放后的 H、W。',gravity:'公开接口无需重力测量；训练方位先验仍可能存在。',synchronization:'单帧无需外部同步；接入 VIO 时需时间戳和外参。'},output:{point_map:'R_m 乘以单位 ERP 射线；可视化 PNG 不能直接作为公制深度。',normal:'存在几何监督或辅助工具，未核实独立推理法线输出。',confidence:'pred_mask 是距离有效掩码，不是标定不确定性；当前推理将无效像素设为 raw=1，即 100 米。',depth_convention:'欧氏径向距离；depth2point.py 的 z 轴为极轴向上，不同于 OpenCV 的 z 轴向前。',pose_output:'不提供已验证的连续相机轨迹。',runtime:'无本机时间或峰值显存测量。'}},
    mcpdepth:{input:{projection:'多柱面全景，并涉及球面和 ERP 转换。',intrinsics:'已知相机与投影映射。',extrinsics:'必须标定立体几何。',synchronization:'真实相机之间需要同步。'},output:{point_map:'由深度派生，未核实直接点图头。',depth_convention:'按标定多相机几何恢复；复用前应在 predict.py 核实导出数组的精确定义。',normal:'未核实直接法线头。',confidence:'待核实'}},
    pager:{input:{projection:'ERP 转为固定六面立方体。',intrinsics:'固定虚拟立方体标定；原始鱼眼需重投影。',resolution:'六面均为 504×504，与 ERP 输入分辨率无关。',extrinsics:'单张全景不需要外部外参。'},output:{depth_convention:'骨干头预测逐面平面 Z 的对数；最终 ERP 线性深度为欧氏距离，见附录 C。',normal:'支持表面法线，并单独发布法线权重。',confidence:'论文有数据噪声置信度头，但未证明具有物理标定意义。',point_map:'由深度派生，未核实直接点图头。'}},
    reper360:{input:{projection:'ERP 与同图立方体投影。',intrinsics:'标准 ERP 几何；原始鱼眼需标定和重投影。',resolution:'取决于权重和配置。'},output:{point_map:'run.py 仅在公制模式提供 PLY 导出。',depth_convention:'公制推理可导出 ERP 点云，但径向距离或 Z 的精确实现尚未完整审计；SSI 不能解释为已标定距离。',normal:'未核实直接法线头。',confidence:'待核实'}},
    unidac:{input:{projection:'通过显式标定变换支持透视、OpenCV 鱼眼、MEI 与 ERP。',intrinsics:'非 ERP 需要几何参数；独立 AnyCalib 预测标定有误差，不是真值。',resolution:'官方演示：MP3D 512×1024；ScanNet++ 512×704；KITTI360 704×704。',gravity:'公开接口无需重力测量，训练方位先验仍可能存在。',synchronization:'单帧无需外部同步；接入 VIO 需时间戳和外参。'},output:{point_map:'径向距离 R 乘单位射线，可选逆映射回原相机。',normal:'未核实直接法线头。',confidence:'有效或注意力掩码不是已标定的深度不确定性。',camera_parameters:'本模型不直接学习相机参数；野外演示调用独立 AnyCalib。',depth_convention:'欧氏径向距离。演示将 ScanNet++ 的 Z-buffer 除以单位射线 z 后映射到 ERP。',pose_output:'未核实相机位姿输出；单帧深度不构成连续轨迹。',runtime:'无本机运行时间或峰值显存测量。'}},
    vggt_omega:{input:{projection:'公开相机解码采用针孔 K；原始鱼眼与 ERP 验证待核实。',intrinsics:'不要求输入内参，可预测相机。',resolution:'512 in-wild、416 reproduction、256 text-aligned 权重；平衡 512 配置常为 624×416。'},output:{point_map:'演示由深度反投影；不能假定旧 VGGT 的直接点图头仍存在。',confidence:'深度置信度的标定性质待核实。',camera_parameters:'相机内外参、相机与寄存器标记；可选文本对齐嵌入。',depth_convention:'供 K 反投影的相机深度；坐标轴和符号尚需审计几何工具。',pose_output:'相机估计已提供，但不是已验证的在线惯性轨迹。'}},
    dac:{input:{projection:'透视、OpenCV 鱼眼、MEI 与 ERP，统一转换至规范 ERP。',intrinsics:'非 ERP 需要几何参数；自标定由独立模型提供，有预测误差。',resolution:'ERP 演示 512×1024；鱼眼 ERP 裁剪尺寸按配置。'},output:{point_map:'径向距离乘以已标定的单位射线。',depth_convention:'明确为欧氏径向距离而非 Z-buffer；原始 Z 真值除以单位射线 z。',confidence:'注意力或有效掩码不是已标定深度不确定性。',camera_parameters:'DAC 本身不估计相机参数。'}},
    depth_anything_3:{input:{projection:'公开深度射线形式采用针孔模型；任意视图不等于任意投影。',intrinsics:'可选内参 K，N×3×3。',extrinsics:'可输入已知相机位姿，启用位姿条件模式。',resolution:'取决于 process_res、API 预处理与具体模型，精确上限待核实。'},output:{point_map:'由深度、K 与外参派生；可选世界坐标三维高斯导出。',camera_parameters:'内参 N×3×3，外参 N×4×4，天空 N×H×W，以及 is_metric、scale_factor。',confidence:'conf 为 N×H×W，其物理不确定性标定待核实。',depth_convention:'光轴 Z 深度；P=R(D K^-1 p)+t，射线方向刻意不归一化。原始射线隐变量 N×H×W×6 含原点和非单位方向。',pose_output:'Any-view 或 Nested 输出公共坐标系相对相机；不等于在线惯性轨迹或全局公制保证。'}},
    da360:{input:{projection:'完整 2:1 ERP，不使用针孔 K。',resolution:'权重自带尺寸；测试默认 518×1036。'},output:{point_map:'EXR 和 PLY 使用归一化径向深度，不代表米。',depth_convention:'带估计偏移的逆径向距离或视差；倒数仍只恢复到未知尺度。',confidence:'未核实置信度头。'}},
    depth_pro:{input:{projection:'针孔 RGB；未确认原生鱼眼或完整 ERP 支持。',intrinsics:'缺少焦距时可估计，已有标定时应使用实测焦距。',resolution:'内部多尺度 1536×1536 推理，输出恢复原始图像尺寸。'},output:{point_map:'通过 K 派生，需标定或假定主点。',camera_parameters:'估计焦距，不提供完整畸变标定或位姿。',depth_convention:'焦距校正后的针孔公制光轴 Z；部署前应与 depth_pro.py 核对适配器。',runtime:'论文称 GPU 上 225 万像素约 0.3 秒，但本次未核实具体 GPU 与精度条件，不能直接作为部署帧率。'}},
    dreamcube:{input:{projection:'同步立方体平面，可导出 ERP。',intrinsics:'虚拟立方体几何，生成和感知流程不同。',resolution:'随任务和流程变化。'},output:{point_map:'可导出生成网格或高斯场景，生成内容不是观测测量。',depth_convention:'项目查看器将全景深度标为欧氏距离；感知适配器可能继承基础模型的仿射歧义。',normal:'未核实直接法线头。',confidence:'待核实'}},
    panda:{input:{projection:'2:1 ERP，不需要 K。',resolution:'默认高 504、宽 1008，均按 14 的倍数处理。'},output:{point_map:'点云工具使用相对径向值，不构成公制重建。',depth_convention:'归一化相对深度，数据集与版本的具体表示需按官方代码核实。',normal:'未核实直接法线头。'}},
    rpg360:{input:{projection:'ERP 分解为透视立方体六面。',intrinsics:'使用虚拟透视几何；由同一相机中心生成。'},output:{depth_convention:'最终全景深度按径向几何融合；尺度与上游深度模型绑定。',point_map:'由融合距离派生三维几何。',normal:'上游透视法线经图优化与融合。'}},
    st2_360d:{input:{projection:'ERP 转为虚拟透视图像序列。',intrinsics:'标准 ERP 与虚拟透视几何。'},output:{depth_convention:'精确径向或 Z 导出定义待核实，尺度继承视频骨干。',pose_output:'未核实真实在线 SLAM 轨迹输出。'}},
    unidepth_v2:{input:{projection:'透视相机；未确认原生完整 ERP 支持。',intrinsics:'可预测相机表示，也可使用已知内参；详见所选接口。'},output:{point_map:'米制相机点图 B×3×H×W。',depth_convention:'depth 为相机光轴 Z；radius 为点范数，即径向距离。',camera_parameters:'预测透视相机表示。',confidence:'提供模型不确定性，物理标定性质需另测。'}},
    unik3d:{input:{projection:'通用中心相机射线与球面表示，支持跨投影实验。',intrinsics:'可选已知相机或射线；也可由模型预测相机表示。'},output:{point_map:'相机坐标米制点图 B×3×H×W。',depth_convention:'depth=points[:,-1:] 为有符号相机 Z；distance=norm(points) 为径向距离，ERP 与后半球应使用 distance。',camera_parameters:'预测潜在射线，不一定是参数化内参 K。',confidence:'具体置信度接口与标定性质需按版本核对。'}},
    vggt:{input:{projection:'公开相机头采用针孔模型；未确认 ERP 或鱼眼。',intrinsics:'不需要输入内参，可预测 K。',resolution:'预处理长边 518，按 14 的倍数调整，并统一张量形状。'},output:{point_map:'world_points 为 B×S×H×W×3，位于参考或首帧相机坐标系，并有点图置信度。',confidence:'逐像素学习置信度，不是已标定协方差。',camera_parameters:'pose_enc B×S×9 解码为 OpenCV 世界到相机外参 B×S×3×4 与 K；可选跟踪点及可见性。',depth_convention:'相机光轴 Z；直接世界点图为另一输出。OpenCV 坐标 x 向右、y 向下、z 向前。',pose_output:'首帧公共坐标系相对相机，需要关联与后端才能构成 SLAM。'}},
    video_depth_anything:{input:{projection:'透视图像，未确认原生 ERP 或鱼眼。',intrinsics:'默认推理接口不需要内参。',synchronization:'有序 RGB 帧与帧率，不需要外部 IMU 同步。',resolution:'默认 input_size=518、max_res=1280；速度配置为 1×32×518×518。'},output:{point_map:'无直接公共世界坐标点图。',depth_convention:'相对表示或公制透视深度依权重变化；精确 Z 或径向适配约定待核实。',confidence:'未核实已标定的不确定性头。',runtime:'官方 A100、1×32×518²：Small FP16 延时 7.5 ms、显存 6.8 GB；Large 为 14 ms、23.6 GB。逐帧或窗口延时解释需查实现；非本机结果。'}},
    depth_anything_v2:{input:{projection:'透视针孔；未建立原生鱼眼或 ERP 支持。',intrinsics:'相对深度推理不需要 K。',resolution:'infer_image 默认 input_size=518，保持长宽比并按 14 的倍数处理。'},output:{point_map:'无直接点图；未解决表示、尺度和偏移前不能解释为欧氏几何。',depth_convention:'相对模型按有仿射歧义的逆深度类预测处理，不能直接乘 K^-1。独立 metric_depth 分支有自己的公制训练域。',normal:'不提供法线。',confidence:'默认接口无公开置信度头。'}},
    depth_anywhere:{input:{projection:'全景学生与六面虚拟透视教师。',intrinsics:'标准 ERP；原始鱼眼需标定后重投影。',resolution:'随学生与配置变化。'},output:{depth_convention:'未从原始解码器或数据加载器核实径向距离与光轴 Z 的区别。',normal:'未核实直接法线头。',confidence:'待核实'}},
    elite360d:{input:{projection:'ERP 与二十面体投影 ICOSAP。',intrinsics:'标准 ERP；原始鱼眼需标定和重投影。',resolution:'待核实，随所选模型配置变化。'},output:{depth_convention:'径向距离与光轴 Z 的精确解码定义未核实。',normal:'未核实直接法线头。',confidence:'待核实'}},
    metric3d_v2:{input:{projection:'针孔规范相机；大量相机内参不等于原生鱼眼或 ERP。',intrinsics:'可靠的公制焦距校正需要标定。',resolution:'缩放或填充按模型处理；相机 K 必须同步更新。'},output:{point_map:'由深度与 K 派生。',normal:'联合深度法线模型提供法线。',confidence:'部分接口暴露法线置信度，深度不确定性待核实。',depth_convention:'恢复规范焦距后为针孔光轴 Z；径向距离=Z×norm(K^-1 p)。',pose_output:'不恢复相机位姿。'}},
    bifuse_pp:{input:{projection:'ERP 与同图虚拟立方体。',intrinsics:'隐式球面几何，标准 ERP 不使用针孔 K。',resolution:'权重和配置相关，待核实。'},output:{depth_convention:'尚未审计解码器与重投影中的径向距离或 Z 定义。',camera_parameters:'训练位姿网络不代表已发布连续位姿推理。',confidence:'待核实'}},
    hrdfuse:{input:{projection:'ERP 与切平面投影。',intrinsics:'标准 ERP；原始鱼眼需标定和重投影。',resolution:'论文评测切平面图块 128×128 和 256×256。'},output:{depth_convention:'未从解码器或数据加载器核实径向距离与光轴 Z。',normal:'未核实直接法线头。',confidence:'待核实'}},
    '360monodepth':{input:{projection:'ERP 转为重叠二十面体切平面透视图。',intrinsics:'标准 ERP；原始鱼眼需标定和重投影。',resolution:'论文评测 1024×2048 ERP，支持高分辨率分解。'},output:{depth_convention:'论文 3.2 节明确球面视差为欧氏径向距离的倒数；视差预测保留仿射歧义。',normal:'未核实直接法线头。',confidence:'待核实'}},
    mode:{input:{projection:'校正后的 Cassini 或球面全景用于立体匹配。',intrinsics:'已知全向投影与标定立体几何。',extrinsics:'必须已知相机基线与相对位姿。',synchronization:'动态场景中真实相机之间必须同步。'},output:{depth_convention:'论文 3.1 节的 ρ 为相机中心到点的欧氏径向距离，立体换算与基线 B 成比例。',confidence:'立体阶段提供置信度图，不是已标定物理不确定性。'}},
    omnifusion:{input:{projection:'ERP 转为多个透视切平面图块。',intrinsics:'标准 ERP；原始鱼眼需标定和重投影。',resolution:'论文 Matterport3D/Stanford2D3D 为 512×1024，360D 为 256×512。'},output:{depth_convention:'未从原始解码器或数据加载器核实径向距离与光轴 Z。',normal:'未核实直接法线头。',confidence:'待核实'}},
    panoformer:{input:{projection:'ERP 配合切平面图块采样。',intrinsics:'标准 ERP，不采用针孔 K。',resolution:'模型和数据集相关，通常 512×1024，精确推理配置待核实。'},output:{depth_convention:'本次未从来源核实径向距离与光轴 Z。',point_map:'未核实直接点图输出。',confidence:'待核实'}},
    unifuse:{input:{projection:'ERP 加六面虚拟立方体，非六台独立传感器。',intrinsics:'隐式立方体与 ERP 几何，无物理针孔 K。',resolution:'标准配置 512×1024。'},output:{depth_convention:'未从解码器或数据加载器核实径向距离与光轴 Z；比较几何前必须检查。',point_map:'未核实直接点图输出。',normal:'未核实法线头。',confidence:'未核实置信度头。'}}
  };
  const slamDepthConventions = {
    odgsslam2026:'ERP 射线深度或径向距离必须与光栅化器一致；数据集导出与尺度换算仍需检查实现。',
    p2uslam2026:'稀疏三维路标与单位方位射线，不是稠密深度预测器。',
    panoair2026:'球面稀疏路标，不提供稠密深度预测。',
    panogsslam2026:'采用球面或 ERP 几何；由于代码未发布，初始深度的导出与归一化约定尚未核实。',
    mast3rslam2025:'相机坐标三维点图，归一化点向量定义射线；不能只按光轴 Z 深度解释。',
    okvis2x2025:'要求公制深度，读取器显式处理深度尺度；神经立体和多视图立体深度是需配置的模块。',
    panoslam2025:'透视 RGB-D 的深度约定，并非原生 ERP 径向距离。',
    '360orbslam2024':'欧氏径向距离；论文公式 (3) 用距离 d 乘单位球面射线反投影。',
    dbafusion2024:'DROID 式针孔重投影中的稠密逆深度状态；不是任意预训练单帧深度先验。',
    dpvslam2024:'针孔图块逆深度，不是稠密单图深度。',
    monogs2024:'针孔高斯渲染器；RGB-D 模式使用输入传感器深度，单目模式优化几何。',
    splatam2024:'须使用相机对应的 RGB-D 深度定义、数据集尺度和内参；渲染器要求一致的相机几何。',
    dpvo2023:'被跟踪图块上的针孔逆深度。',
    goslam2023:'DROID 式针孔逆深度结合神经隐式表面；RGB-D 输入需要标定。',
    lfvislam2023:'单位方位射线允许 z<0；输出稀疏几何，不是稠密 ERP 深度。',
    okvis2_2022:'稀疏路标几何，不提供学习稠密深度。',
    codevio2021:'在已标定图像网格上解码稠密深度；精确导出约定仍需检查实现。',
    droidslam2021:'稠密 BA 中采用针孔逆深度；RGB-D 模式额外接入物理深度信息。',
    orbslam3_2021:'稀疏三角化几何；RGB-D 模式使用特定相机的深度定义和尺度，并非通用径向距离预测网络。',
    basalt2020:'已标定射线上的稀疏逆距离路标，不是稠密预测深度。',
    d3vo2020:'用于相机反投影和虚拟立体视差约束的针孔深度，不是全景欧氏径向距离。',
    omnislam2020:'刚架或相机射线上的全向立体深度；导出的径向距离约定仍需检查实现。',
    openvins2020:'稀疏路标或逆深度特征表示，不提供逐像素预测深度图。',
    stella_vslam:'稀疏三维点，不提供学习稠密深度。',
    vinsfusion2019:'稀疏几何，没有稠密深度预测器。',
    svo_pro:'已标定射线上的稀疏深度滤波路标。'
  };
  // Keep the remaining unique depth-record constraints visible in Chinese too.
  specifications.vggt_omega.output.runtime = '待核实；没有已核实且可公平比较的公开运行效率测量。';
  specifications.dac.output.normal = '直接法线预测头待核实。';
  specifications.depth_anything_3.output.normal = '默认法线输出待核实。';
  specifications.da360.input.intrinsics = '不使用针孔内参 K。';
  specifications.depth_pro.output.confidence = '未核实默认置信度预测头。';
  specifications.panda.input.intrinsics = '无需内参 K。';
  specifications.panda.output.confidence = '未核实公开置信度预测头。';
  specifications.panda.output.runtime = '官方提醒 1008×2016 推理显存超过 40 GB；默认 504×1008 的实际耗时与显存待核实。';
  specifications.rpg360.input.resolution = '论文评测 512×1024 和 1024×2048。';
  specifications.st2_360d.input.resolution = '作者项目声明最高支持 4K。';
  specifications.unidepth_v2.input.resolution = '采用自适应 resolution_level，并受宽高比约束。';
  specifications.unik3d.input.resolution = 'resolution_level 为 0–9，按宽高比与像素量自适应；内参和射线必须同步缩放。';
  specifications.unik3d.output.normal = '未核实法线输出预测头。';
  specifications.metric3d_v2.output.camera_parameters = '不恢复相机位姿。';
  specifications.bifuse_pp.output.point_map = '未核实直接点图输出。';
  const slamPoseOutputs = {
    mast3rslam2025:'是，由 SLAM 后端输出；原始点图自身不是轨迹。',
    dbafusion2024:'是。',splatam2024:'是。',codevio2021:'是。',droidslam2021:'是。',orbslam3_2021:'是。',
    d3vo2020:'是，由直接法视觉里程计与学习初始化、先验组合输出。',
    openvins2020:'是，输出连续视觉惯性状态；转换到机器人工具中心点需外参。核心不具备带全局回环的完整 SLAM。'
  };
  const slamImu = {odgsslam2026:false,p2uslam2026:false,panoair2026:true,panogsslam2026:false,mast3rslam2025:false,okvis2x2025:true,panoslam2025:false,'360orbslam2024':false,dbafusion2024:true,dpvslam2024:false,monogs2024:false,splatam2024:false,dpvo2023:false,goslam2023:false,lfvislam2023:true,okvis2_2022:true,codevio2021:true,droidslam2021:false,orbslam3_2021:false,basalt2020:true,d3vo2020:false,omnislam2020:false,openvins2020:true,stella_vslam:false,vinsfusion2019:'单目模式必须使用；双目模式可选。',svo_pro:'可选；视觉惯性模式必须使用。'};
  for (const [id, convention] of Object.entries(slamDepthConventions)) {
    const reviewed = zhRecords[id];
    specifications[id] = {
      input:{requirements:reviewed[0],imu:slamImu[id]},
      output:{primary:reviewed[1],depth_convention:convention,metric_status:reviewed[2],pose_output:slamPoseOutputs[id] || '是，输出估计的六自由度轨迹；转换到腕部或机器人工具中心点需额外外参。',runtime:'待核实；没有可公平比较的本机运行效率测量。'}
    };
  }
  Object.assign(ui.zh,{
    header:'机器人视觉方法与数据集',eyebrow:'开放的机器人空间视觉资料库',hero:'全景深度、定位与建图',
    subtitle:'汇集全景、鱼眼与广视场的研究方法和数据集。',description:'检索论文与基准，比较模型输入输出、数据真值和复现条件。',entries:'条目 · 附原始来源',
    datasets:'数据集',collectionDatasets:'深度估计与定位建图数据集',datasetRecord:'数据集',datasetUnit:'个数据集',datasetSearch:'搜索数据集',datasetPlaceholder:'搜索数据集、传感器、真值、关键词…',datasetYear:'年份（论文或发布）',resultTotal:n=>`集合共 ${n} 项`,
    task:'适用任务',taskDepth:'深度估计',taskSlam:'定位与建图',allTasks:'全部任务',environmentType:'采集环境',allEnvironments:'全部环境',indoor:'室内',outdoor:'室外',
    reality:'数据来源',allRealities:'全部来源',real:'真实采集',synthetic:'合成渲染',mixedReality:'真实与合成',
    access:'获取方式',allAccess:'全部获取方式',openAccess:'公开下载',registrationAccess:'需注册或同意条款',requestAccess:'需申请访问',restrictedAccess:'受限访问',unknownAccess:'获取状态待核实',
    sensors:'传感器与模态',groundTruth:'真值与标注',homepage:'官方主页',download:'获取数据',datasetDetails:'数据集详情',closeDataset:'关闭数据集详情',datasetSummary:'数据集摘要',datasetOverview:'数据概览',datasetSpecs:'几何、真值与评测协议',accessLicense:'获取方式与许可',
    datasetDescription:'按相机类型、任务、采集环境和获取方式检索，核查深度、位姿与地图真值的来源和定义。',
    datasetFootnote:'区分原生采集、渲染深度和估计轨迹；相关派生集可能复用相同场景。标定、有效掩码、数据划分和访问条款以对应版本的官方说明为准。',
    datasetCompareHint:'勾选数据集，比较传感器、真值与评测协议',datasetCompareTitle:'数据集对比',datasetCompareIntro:'比较同一口径的数据来源与真值，核查任务适用性和访问条件。',exportDatasets:'导出数据集'
  });
  Object.assign(ui.en,{
    header:'Robotics methods & datasets',eyebrow:'AN OPEN SPATIAL VISION COLLECTION',hero:'Panoramic Depth & SLAM',
    subtitle:'Methods and datasets for panoramic, fisheye and wide-field perception.',description:'Explore papers and benchmarks. Compare model interfaces, ground-truth provenance and reproduction requirements.',entries:'entries · primary sources linked',
    datasets:'Datasets',collectionDatasets:'DEPTH & SLAM DATASETS',datasetRecord:'Dataset',datasetUnit:'datasets',datasetSearch:'Search datasets',datasetPlaceholder:'Search datasets, sensors, ground truth, keywords…',datasetYear:'Year (paper / release)',
    task:'Tasks',taskDepth:'Depth estimation',taskSlam:'SLAM / localization',allTasks:'All tasks',environmentType:'Environment',allEnvironments:'All environments',indoor:'Indoor',outdoor:'Outdoor',
    reality:'Data source',allRealities:'All sources',real:'Real captures',synthetic:'Synthetic renders',mixedReality:'Real & synthetic',
    access:'Access',allAccess:'All access types',openAccess:'Public download',registrationAccess:'Registration / terms',requestAccess:'Access request',restrictedAccess:'Restricted access',unknownAccess:'Access unverified',
    sensors:'Sensors & modalities',groundTruth:'Ground truth & labels',homepage:'Homepage',download:'Get data',datasetDetails:'Dataset details',closeDataset:'Close dataset details',datasetSummary:'Dataset summary',datasetOverview:'Dataset overview',datasetSpecs:'Geometry, ground truth & evaluation',accessLicense:'Access & licensing',
    datasetDescription:'Filter camera geometry, tasks, environment and access. Check how depth, poses and maps were measured or derived.',
    datasetFootnote:'Distinguish native captures, rendered depth and estimated trajectories. Derivative datasets may share scenes. Check the cited version for calibration, valid masks, splits and access terms.',
    datasetCompareHint:'Select datasets to compare sensors, ground truth & evaluation',datasetCompareTitle:'Dataset comparison',datasetCompareIntro:'Compare data provenance, ground truth, task suitability and access using consistent definitions.',exportDatasets:'Export datasets'
  });
  window.ATLAS_I18N = { ui, summaries, zhRecords, families, licenses, environments, specifications };
})();
