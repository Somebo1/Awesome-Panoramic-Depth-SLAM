window.ATLAS_DATA = {
  "updated": "2026-10-17",
  "repoUrl": "https://github.com/Somebo1/Awesome-Panoramic-Depth-SLAM",
  "title": "Panoramic Depth Atlas",
  "description": "Panoramic, fisheye and wide-FOV depth estimation and SLAM literature.",
  "schemaVersion": "1.0",
  "records": [
    {
      "id": "da2_panorama",
      "collection": "depth",
      "name": "DA²",
      "title": "DA²: Depth Anything in Any Direction",
      "year": 2026,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ICLR 2026; arXiv2025",
      "authors": [
        "Haodong Li",
        "Wangguangdong Zheng",
        "Jing He",
        "Yuhao Liu",
        "Xin Lin",
        "Xin Yang",
        "Ying-Cong Chen",
        "Chunchao Guo"
      ],
      "institutions": [
        "Tencent Hunyuan",
        "UC San Diego",
        "HKUST(GZ)",
        "HKUST"
      ],
      "summary": "SphereViT 显式使用球面坐标，端到端预测全景尺度不变距离；几何形状不等于公制尺度。",
      "cameras": [
        "panoramic"
      ],
      "scale": "relative",
      "scaleNote": "Unknown global positive scalar per prediction; metric GT alignment in evaluation does not give runtime meters",
      "aliases": [
        "DA2",
        "DA²"
      ],
      "metricStatus": "scale_invariant",
      "depthType": "range",
      "outputs": [
        "range"
      ],
      "pose": false,
      "inputSummary": "single 360×180 ERP RGB, optional sky/valid mask",
      "outputSummary": "Dense H×W distance up to one unknown global scale",
      "inputs": {
        "frames": "single 360×180 ERP RGB, optional sky/valid mask",
        "projection": "Full spherical ERP; raw fisheye requires calibrated mapping",
        "intrinsics": "No pinhole K for standard full ERP; ERP orientation and 2:1 definition matter",
        "resolution": "Training512×1024; inference per config",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "Dense H×W distance up to one unknown global scale",
        "point_map": "distance2pointcloud exports PLY",
        "normal": "Normals computed from predicted distance, not evidence of independent normal head",
        "confidence": "Optional input mask; no verified uncertainty head",
        "camera_parameters": "No",
        "depth_convention": "Euclidean radial distance; explicitly scale-invariant, not affine inverse depth",
        "metric_status": "scale_invariant",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/EnVision-Research/DA-2",
      "paperUrl": "https://arxiv.org/abs/2509.26618",
      "projectUrl": "https://depth-any-in-any-dir.github.io/",
      "weightsUrl": "https://huggingface.co/haodongli/DA-2",
      "license": {
        "code": "Apache-2.0",
        "weights": "Official model release; separate card terms should be rechecked before redistribution"
      },
      "evidence": [
        "Paper Method and Table3 ablations inspected; outpainting/spherical embedding/normal each tested",
        "Official infer.py reviewed",
        "https://raw.githubusercontent.com/EnVision-Research/DA-2/main/infer.py",
        "https://openreview.net/pdf?id=323ximYcsk",
        "https://arxiv.org/abs/2509.26618",
        "https://depth-any-in-any-dir.github.io/",
        "https://github.com/EnVision-Research/DA-2"
      ],
      "notes": [
        "Good shape-quality control against DAP metric outputs",
        "Paper explicitly documents seams and lost fine details at512×1024",
        "Python3.12 needed for nested-quote f-string in inference; do not claim ordinary3.10 works unchanged"
      ],
      "tags": [
        "monocular",
        "ERP",
        "scale-invariant-distance"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "infer.py",
        "infer.sh",
        "src/da2/",
        "configs/eval.json"
      ],
      "environment": "Official tested Ubuntu20.04 Python3.12 CUDA12.2 RTX3090; xformers0.0.28.post2"
    },
    {
      "id": "dap",
      "collection": "depth",
      "name": "Depth Any Panoramas",
      "title": "Depth Any Panoramas: A Foundation Model for Panoramic Depth Estimation",
      "year": 2026,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2026; arXiv2025",
      "authors": [
        "Xin Lin",
        "Meixi Song",
        "Dizhe Zhang",
        "Wenxuan Lu",
        "Haodong Li",
        "Bo Du",
        "Ming-Hsuan Yang",
        "Truong Nguyen",
        "Lu Qi"
      ],
      "institutions": [
        "Insta360 Research",
        "UC San Diego",
        "Wuhan University",
        "UC Merced"
      ],
      "summary": "面向不同距离范围的全景公制深度基础模型；当前 raw 输出与有效掩码必须按作者说明转换。",
      "cameras": [
        "panoramic"
      ],
      "scale": "metric",
      "scaleNote": "Metric learned prior; raw storage scale100m; PNG100m/10m only visualization. Invalid sentinel100m must be excluded, not treated as surface.",
      "aliases": [
        "DAP"
      ],
      "metricStatus": "metric_learned",
      "depthType": "range",
      "outputs": [
        "range"
      ],
      "pose": false,
      "inputSummary": "single RGB full ERP; no motion/pose/IMU required",
      "outputSummary": "Raw NPY H×W float32 normalized metric range: R_m=100*raw for current released checkpoint per author issue4",
      "inputs": {
        "frames": "single RGB full ERP; no motion/pose/IMU required",
        "projection": "ERP360×180; raw fisheye needs external conversion",
        "intrinsics": "ERP standard angular grid; no pinhole K",
        "resolution": "Config-specific; inspect inference YAML/backbone and record actual padded/resized H,W",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "Raw NPY H×W float32 normalized metric range: R_m=100*raw for current released checkpoint per author issue4",
        "point_map": "R_m times unit ERP rays; do not use visualized PNG as metric depth",
        "normal": "Derived geometric supervision/utilities; no verified independent inference normal output",
        "confidence": "pred_mask range-mask head, not calibrated uncertainty; current infer replaces masked-out pixels with1 raw (100m)",
        "camera_parameters": "No",
        "depth_convention": "Euclidean radial distance: depth2point.py uses unit spherical directions multiplied by scalar. Its z-axis is polar-up, unlike OpenCV camera z-forward.",
        "metric_status": "metric_learned",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/Insta360-Research-Team/DAP",
      "paperUrl": "https://arxiv.org/abs/2512.16913",
      "projectUrl": "https://insta360-research-team.github.io/DAP_website/",
      "weightsUrl": "https://github.com/Insta360-Research-Team/DAP#readme",
      "license": {
        "code": "CC-BY-NC-4.0 (official LICENSE observed 2026-10-17), not MIT",
        "weights": "Official checkpoint linked; separate model-card terms Unknown; DINOv3 terms separate"
      },
      "evidence": [
        "Paper Method and Tables4–6 read; DAP-Test is explicitly in-domain",
        "Remote source audited, no model inference performed",
        "https://raw.githubusercontent.com/Insta360-Research-Team/DAP/main/test/infer.py",
        "https://github.com/Insta360-Research-Team/DAP/issues/4",
        "https://raw.githubusercontent.com/Insta360-Research-Team/DAP/main/depth2point.py",
        "https://raw.githubusercontent.com/Insta360-Research-Team/DAP/main/LICENSE",
        "https://arxiv.org/abs/2512.16913",
        "https://insta360-research-team.github.io/DAP_website/",
        "https://github.com/Insta360-Research-Team/DAP"
      ],
      "notes": [
        "Preferred first ERP depth reproduction after output adapter audit",
        "depth2point.py casts float before uint dtype test so normalization branches unreachable; PNG-to-point conversion not metric-safe",
        "100m rule tied to released config/checkpoint, not all future models",
        "Weights link availability observed in official README; model download not completed",
        "HF Insta360-Research/DAP-weights is explicitly linked by official README, but direct page retrieval failed in this audit; weights_url points to verified official README instead"
      ],
      "tags": [
        "monocular",
        "metric",
        "ERP"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "test/infer.py::infer_raw",
        "test/infer.py::pred_to_vis",
        "config/infer.yaml",
        "networks/models.py",
        "depth2point.py"
      ],
      "environment": "Official Python3.12, tested torch2.7.1 torchvision0.22.1; torch>2; DINOv3-L backbone"
    },
    {
      "id": "mcpdepth",
      "collection": "depth",
      "name": "MCPDepth",
      "title": "MCPDepth: Omnidirectional Depth Estimation via Stereo Matching from Multi-Cylindrical Panoramas",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2026 OmniCV Workshop; preprint 2024",
      "authors": [
        "Feng Qiao",
        "Zhexiao Xiong",
        "Xinge Zhu",
        "Yuexin Ma",
        "Qiumeng He",
        "Nathan Jacobs"
      ],
      "institutions": [
        "Unknown"
      ],
      "summary": "以多柱面投影改善全向立体匹配，结合环形注意力和深度融合；真实多相机基线方案，非单目全景基础模型。",
      "cameras": [
        "panoramic",
        "multi"
      ],
      "scale": "metric",
      "scaleNote": "Metric scale supplied by known stereo baseline; not a single-image metric prior.",
      "aliases": [],
      "metricStatus": "metric_stereo_baseline",
      "depthType": "unknown",
      "outputs": [
        "depth_unknown_convention",
        "disparity"
      ],
      "pose": false,
      "inputSummary": "Multiple calibrated panoramas with physical stereo baselines",
      "outputSummary": "Stereo disparity maps and fused omnidirectional depth",
      "inputs": {
        "frames": "Multiple calibrated panoramas with physical stereo baselines",
        "projection": "Multiple cylindrical panoramas; spherical/ERP conversions",
        "intrinsics": "Known camera/projection mapping",
        "resolution": "Unknown; checkpoint/config dependent",
        "extrinsics": "Required calibrated stereo geometry",
        "imu": "No",
        "gravity": "No measured gravity required; gravity-alignment assumptions not audited",
        "synchronization": "Required across physical cameras"
      },
      "outputDetails": {
        "primary": "Stereo disparity maps and fused omnidirectional depth",
        "point_map": "Derived geometry only; no direct point-map head verified",
        "normal": "No verified direct head",
        "confidence": "Unknown",
        "camera_parameters": "No",
        "depth_convention": "Panoramic stereo depth derived from calibrated multi-camera geometry; precise exported array convention should be checked in predict.py before reuse.",
        "metric_status": "metric_stereo_baseline",
        "pose_output": "No online SLAM trajectory output verified",
        "runtime": "Unknown: no comparable timing or memory measurement executed locally."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/Qjizhi/MCPDepth",
      "paperUrl": "https://arxiv.org/abs/2408.01653",
      "projectUrl": "https://github.com/Qjizhi/MCPDepth",
      "weightsUrl": "https://github.com/Qjizhi/MCPDepth/tree/main/pretrained_model",
      "license": {
        "code": "BSD-3-Clause",
        "weights": "Deep360 matching/fusion tar files present; separate weight terms Unknown"
      },
      "evidence": [
        "https://arxiv.org/abs/2408.01653",
        "https://github.com/Qjizhi/MCPDepth",
        "https://github.com/Qjizhi/MCPDepth/tree/main/pretrained_model"
      ],
      "notes": [
        "Final workshop citation adds 'Practical' to the title; preprint and repository refer to the same work.",
        "Verified trained files MCPDepth_disparity_Deep360.tar and MCPDepth_fusion_Deep360.tar.",
        "code_and_weights"
      ],
      "tags": [
        "multi-view",
        "panoramic-stereo",
        "cylindrical",
        "depth-fusion",
        "depth_unknown_convention",
        "disparity"
      ],
      "family": "multi_view_stereo",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial_paper_and_official_release_metadata",
      "codeEntry": [
        "predict.py",
        "test_disparity.py",
        "test_fusion.py",
        "pretrained_model/"
      ],
      "environment": "Unknown; official requirements must be checked for the selected version."
    },
    {
      "id": "pager",
      "collection": "depth",
      "name": "PaGeR",
      "title": "Unified Panoramic Geometry Estimation via Multi-View Foundation Models",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "NeurIPS 2026 (author project); arXiv 2605.26368",
      "authors": [
        "Vukasin Bozic",
        "Isidora Slavkovic",
        "Dominik Narnhofer",
        "Nando Metzger",
        "Denis Rozumny",
        "Konrad Schindler",
        "Nikolai Kalischek"
      ],
      "institutions": [
        "ETH Zurich",
        "Google",
        "Meta",
        "Athlence Sports"
      ],
      "summary": "2026全景几何统一模型：将DA3视为六面多视图骨干，同时输出SI深度、米制深度、法线与天空；需区分三类权重和尺度头。",
      "cameras": [
        "panoramic",
        "perspective"
      ],
      "scale": "mixed",
      "scaleNote": "Unified checkpoint has separate SI and learned metric-scale branches; metric-depth-only checkpoint uses a direct metric head. Automatic indoor/outdoor CLIP routing was added after paper submission.",
      "aliases": [],
      "metricStatus": "mixed_checkpoints",
      "depthType": "range",
      "outputs": [
        "radial_range",
        "scale_invariant_depth",
        "normals",
        "sky_mask"
      ],
      "pose": false,
      "inputSummary": "single ERP RGB; paper also co-trains perspective images",
      "outputSummary": "ERP scale-invariant depth, metric depth and sky mask (unified checkpoint)",
      "inputs": {
        "frames": "single ERP RGB; paper also co-trains perspective images",
        "projection": "ERP → fixed six-face cubemap",
        "intrinsics": "Fixed virtual cubemap calibration; raw fisheye requires reprojection",
        "resolution": "Six 504×504 cube faces independent of ERP input resolution",
        "extrinsics": "Not required for single panorama",
        "imu": "No",
        "gravity": "No measured gravity required; gravity-alignment assumptions not audited",
        "synchronization": "Single panorama; real multi-camera stitching synchronization remains a system concern"
      },
      "outputDetails": {
        "primary": "ERP scale-invariant depth, metric depth and sky mask (unified checkpoint)",
        "point_map": "Derived geometry only; no direct point-map head verified",
        "normal": "Surface normals; dedicated normals-only checkpoint also released",
        "confidence": "Aleatoric depth confidence heads in paper; physically calibrated uncertainty not established",
        "camera_parameters": "No",
        "depth_convention": "Backbone heads predict per-face log planar Z. Final ERP linear depth is Euclidean range; paper Appendix C explicitly uses Euclidean ERP depths.",
        "metric_status": "mixed_checkpoints",
        "pose_output": "No online SLAM trajectory output verified",
        "runtime": "Unknown: no comparable timing or memory measurement executed locally."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/prs-eth/PaGeR",
      "paperUrl": "https://arxiv.org/abs/2605.26368",
      "projectUrl": "https://pager360.github.io/",
      "weightsUrl": "https://huggingface.co/prs-eth/PaGeR",
      "license": {
        "code": "Apache-2.0",
        "weights": "CC-BY-NC-4.0; separate dataset licenses apply"
      },
      "evidence": [
        "https://arxiv.org/html/2605.26368",
        "https://pager360.github.io/",
        "https://github.com/prs-eth/PaGeR",
        "https://huggingface.co/prs-eth/PaGeR",
        "https://huggingface.co/prs-eth/PaGeR-metric-depth",
        "https://arxiv.org/abs/2605.26368"
      ],
      "notes": [
        "Reported paper metric results force indoor/outdoor scale head per dataset; default automatic router is a later release behavior.",
        "High-resolution ERP output does not increase the fixed six-face network input detail.",
        "code_and_weights"
      ],
      "tags": [
        "monocular",
        "ERP",
        "cubemap",
        "foundation-model",
        "metric-variant",
        "depth-and-normal",
        "radial_range",
        "scale_invariant_depth",
        "normals",
        "sky_mask"
      ],
      "family": "monocular_depth",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial_paper_and_official_release_metadata",
      "codeEntry": [
        "inference.py",
        "app.py",
        "generate_point_cloud.py",
        "evaluation/depth_evaluation.py"
      ],
      "environment": "Official tested Linux, Python 3.10, PyTorch ≥2.0, CUDA ≥12.1."
    },
    {
      "id": "reper360",
      "collection": "depth",
      "name": "RePer-360",
      "title": "RePer-360: Releasing Perspective Priors for 360° Depth Estimation via Self-Modulation",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ECCV 2026 (official repository)",
      "authors": [
        "Cheng Guan",
        "Chunyu Lin",
        "Zhijie Shen",
        "Junsong Zhang",
        "Jiyuan Wang"
      ],
      "institutions": [
        "Unknown"
      ],
      "summary": "通过几何引导和自调制把透视先验适配到全景；已发布域内metric和零样本SSI权重，二者不可混为同一尺度能力。",
      "cameras": [
        "panoramic"
      ],
      "scale": "mixed",
      "scaleNote": "Matterport3D and Stanford2D3D metric models are separate from synthetic zero-shot SSI. Official validation uses scale-and-shift alignment for SSI.",
      "aliases": [],
      "metricStatus": "mixed_checkpoints",
      "depthType": "unknown",
      "outputs": [
        "depth_unknown_convention",
        "relative_depth"
      ],
      "pose": false,
      "inputSummary": "single ERP RGB with derived cubemap guidance",
      "outputSummary": "ERP metric depth for metric checkpoints; normalized [0,1] SSI depth for zero-shot checkpoint",
      "inputs": {
        "frames": "single ERP RGB with derived cubemap guidance",
        "projection": "ERP + cubemap",
        "intrinsics": "Standard ERP geometry; raw fisheye must be calibrated and reprojected",
        "resolution": "Checkpoint/config dependent",
        "extrinsics": "Not required for single panorama",
        "imu": "No",
        "gravity": "No measured gravity required; gravity-alignment assumptions not audited",
        "synchronization": "Single panorama; real multi-camera stitching synchronization remains a system concern"
      },
      "outputDetails": {
        "primary": "ERP metric depth for metric checkpoints; normalized [0,1] SSI depth for zero-shot checkpoint",
        "point_map": "Official run.py offers PLY only for metric mode",
        "normal": "No verified direct head",
        "confidence": "Unknown",
        "camera_parameters": "No",
        "depth_convention": "Metric inference has ERP point-cloud export; exact radial/Z implementation convention not fully audited. SSI output must not be interpreted as calibrated range.",
        "metric_status": "mixed_checkpoints",
        "pose_output": "No online SLAM trajectory output verified",
        "runtime": "Unknown: no comparable timing or memory measurement executed locally."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/munimo/RePer360",
      "paperUrl": "https://arxiv.org/abs/2603.05999",
      "projectUrl": "https://github.com/munimo/RePer360",
      "weightsUrl": "https://huggingface.co/ZSBD/RePer-360",
      "license": {
        "code": "Apache-2.0 repository; upstream Depth Anything V2 component terms apply",
        "weights": "Separate weight terms Unknown; upstream backbone terms also apply"
      },
      "evidence": [
        "https://arxiv.org/abs/2603.05999",
        "https://github.com/munimo/RePer360",
        "https://huggingface.co/ZSBD/RePer-360"
      ],
      "notes": [
        "Use --depth-type metric only with metric checkpoints; official code skips point cloud export for SSI.",
        "Project acceptance/release state updated beyond the original arXiv abstract.",
        "code_and_checkpoint_links"
      ],
      "tags": [
        "monocular",
        "ERP",
        "cubemap-guidance",
        "domain-adaptation",
        "metric-variant",
        "depth_unknown_convention",
        "relative_depth"
      ],
      "family": "monocular_depth",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial_paper_and_official_release_metadata",
      "codeEntry": [
        "run.py",
        "validate.py",
        "network/gag.py",
        "network/reper360.py",
        "util/ecc_loss.py"
      ],
      "environment": "Official setup uses Python 3.9 and requirements.txt."
    },
    {
      "id": "unidac",
      "collection": "depth",
      "name": "UniDAC",
      "title": "UniDAC: Universal Metric Depth Estimation for Any Camera",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2026, pp.26953–26963",
      "authors": [
        "Girish Chandar Ganesan",
        "Yuliang Guo",
        "Liu Ren",
        "Xiaoming Liu"
      ],
      "institutions": [
        "Michigan State University",
        "Bosch Research North America / BCAI",
        "University of North Carolina at Chapel Hill"
      ],
      "summary": "分解相对形状与空间变化的尺度，统一多种相机的公制距离；论文 shift 与当前代码的差异保留在证据中。",
      "cameras": [
        "panoramic",
        "fisheye",
        "wide",
        "perspective"
      ],
      "scale": "metric",
      "scaleNote": "Learned metric meters; paper Rm=S⊙Rrel+t, public master forward code observed Rm=S⊙median-normalized-Rrel without explicit +t. Checkpoint/config correspondence remains unverified.",
      "aliases": [
        "UniDAC"
      ],
      "metricStatus": "metric_learned",
      "depthType": "range",
      "outputs": [
        "range"
      ],
      "pose": false,
      "inputSummary": "single RGB canonical ERP patch plus lat/long ranges, lat grid, valid/attention mask",
      "outputSummary": "B×1×H×W metric Euclidean range in canonical ERP",
      "inputs": {
        "frames": "single RGB canonical ERP patch plus lat/long ranges, lat grid, valid/attention mask",
        "projection": "Perspective / OpenCV-Fisheye / MEI / ERP through explicit calibrated transforms",
        "intrinsics": "Required for non-ERP geometry; optional separate AnyCalib predicted parameters are a fallible estimate",
        "resolution": "Official demo MP3D512×1024; ScanNet++512×704; KITTI360704×704",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "B×1×H×W metric Euclidean range in canonical ERP",
        "point_map": "Derived R×unit ray and optional inverse remapping",
        "normal": "No verified direct head",
        "confidence": "No verified calibrated uncertainty head; valid/attention mask only",
        "camera_parameters": "No direct learned camera output; wild demo delegates to AnyCalib",
        "depth_convention": "Euclidean range: demo converts ScanNet++ Z-buffer / ray-z before ERP; follow range when converting geometry.",
        "metric_status": "metric_learned",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/girish1511/UniDAC",
      "paperUrl": "https://arxiv.org/abs/2603.27105",
      "projectUrl": "https://girish1511.github.io/UniDAC/",
      "weightsUrl": "https://huggingface.co/girish1511/UniDAC",
      "license": {
        "code": "MIT",
        "weights": "HF card has no explicit weight license metadata observed; DINOv3 upstream terms separate"
      },
      "evidence": [
        "Paper Method §3–4, Experiments §5 and scale/encoder/shift ablations read",
        "https://raw.githubusercontent.com/girish1511/UniDAC/master/unidac/models/unidac.py",
        "https://raw.githubusercontent.com/girish1511/UniDAC/master/demo/demo_unidac.py",
        "README main branch URL404; master verified",
        "https://arxiv.org/abs/2603.27105",
        "https://girish1511.github.io/UniDAC/",
        "https://github.com/girish1511/UniDAC"
      ],
      "notes": [
        "Best depth-side close-reading candidate for camera geometry and local scale error",
        "Paper/code explicit shift mismatch documented; do not silently treat as identical",
        "Local learned scale map is not a VIO observable metric-scale measurement",
        "Unmeasured on current GPU"
      ],
      "tags": [
        "monocular",
        "metric",
        "fisheye",
        "ERP",
        "camera-aware"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "demo/demo_unidac.py",
        "demo/demo_unidac_wild.py",
        "unidac/models/unidac.py::UniDAC.forward",
        "configs/test/"
      ],
      "environment": "Python3.10.18, torch2.7.0/torchvision0.22.0, cu118 official; DINOv3 ViT-L16"
    },
    {
      "id": "vggt_omega",
      "collection": "depth",
      "name": "VGGT-Ω",
      "title": "VGGT-Ω",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2026 Oral / Best Paper Finalist per official project",
      "authors": [
        "Jianyuan Wang",
        "Minghao Chen",
        "Shangzhan Zhang",
        "Nikita Karaev",
        "Johannes Schönberger",
        "Patrick Labatut",
        "Piotr Bojanowski",
        "David Novotny",
        "Andrea Vedaldi",
        "Christian Rupprecht"
      ],
      "institutions": [
        "University of Oxford",
        "Meta AI"
      ],
      "summary": "通过更高效的跨帧信息交换扩展多视图几何恢复；复现版与 in-wild checkpoint 应分别记录。",
      "cameras": [
        "perspective"
      ],
      "scale": "unknown",
      "scaleNote": "No verified metric-scale claim; treat as arbitrary common reconstruction scale",
      "aliases": [
        "VGGT-Omega"
      ],
      "metricStatus": "unknown",
      "depthType": "z",
      "outputs": [
        "z"
      ],
      "pose": true,
      "inputSummary": "N RGB images/video frames",
      "outputSummary": "depth and depth_conf plus pose_enc",
      "inputs": {
        "frames": "N RGB images/video frames",
        "projection": "Public camera decoding uses pinhole K; raw fisheye/ERP validation Unknown",
        "intrinsics": "Not required; predicts camera",
        "resolution": "512in-wild,416reproduction,256text-aligned checkpoints; balanced512 often624×416",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "depth and depth_conf plus pose_enc",
        "point_map": "Depth unprojection in demo; do not assume old VGGT direct point head persists",
        "normal": "Unknown",
        "confidence": "Depth confidence, calibration Unknown",
        "camera_parameters": "Extrinsics+intrinsics; camera/register tokens; optional text alignment embeddings",
        "depth_convention": "Camera depth intended for K unprojection; detailed axis/sign source audit incomplete—Unknown until utils geometry verified",
        "metric_status": "unknown",
        "pose_output": "Yes camera estimates; no verified online inertial trajectory guarantee",
        "runtime": "Unknown: no public comparable measurement verified."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/facebookresearch/vggt-omega",
      "paperUrl": "https://arxiv.org/abs/2605.15195",
      "projectUrl": "https://vggt-omega.github.io/",
      "weightsUrl": "https://huggingface.co/facebook/VGGT-Omega",
      "license": {
        "code": "Custom VGGT Omega license; inspect LICENSE, not Apache/MIT",
        "weights": "fair-noncommercial-research-license on verified official HF card; gated agreement/contact information required; application not completed"
      },
      "evidence": [
        "Official project method description, current README and model forward inspected; paper experimental sections not fully read",
        "https://raw.githubusercontent.com/facebookresearch/vggt-omega/main/README.md",
        "https://arxiv.org/abs/2605.15195",
        "https://vggt-omega.github.io/",
        "https://github.com/facebookresearch/vggt-omega"
      ],
      "notes": [
        "Use Sep2026 416-Reproduction checkpoint for benchmarking;512in-wild explicitly no benchmarking",
        "Project newsSep18 vs repoSep8 release-date discrepancy; cutoff existence verified",
        "Unknown: no public comparable measurement verified."
      ],
      "tags": [
        "multi-view",
        "depth-and-pose",
        "dynamic-reconstruction"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": "unknown",
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial",
      "codeEntry": [
        "vggt_omega/models/vggt_omega.py",
        "vggt_omega/utils/pose_enc.py::encoding_to_camera",
        "demo_gradio.py"
      ],
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown"
    },
    {
      "id": "dac",
      "collection": "depth",
      "name": "Depth Any Camera",
      "title": "Depth Any Camera: Zero-Shot Metric Depth Estimation from Any Camera",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2025",
      "authors": [
        "Yuliang Guo",
        "Sparsh Garg",
        "S. Mahdi H. Miangoleh",
        "Xinyu Huang",
        "Liu Ren"
      ],
      "institutions": [
        "Bosch Research North America",
        "Carnegie Mellon University",
        "Simon Fraser University"
      ],
      "summary": "将已知相机投影映射到统一 ERP 表示，研究跨视场的零样本公制距离；仍需正确标定与投影转换。",
      "cameras": [
        "panoramic",
        "fisheye",
        "wide",
        "perspective"
      ],
      "scale": "metric",
      "scaleNote": "Metric meters learned prior, domain dependent; indoor and outdoor checkpoints separate",
      "aliases": [
        "DAC"
      ],
      "metricStatus": "metric_learned",
      "depthType": "range",
      "outputs": [
        "range"
      ],
      "pose": false,
      "inputSummary": "single RGB plus camera parameters / ray lookup and valid mask",
      "outputSummary": "B×1×H×W metric Euclidean range in canonical ERP; remapping to original camera needed",
      "inputs": {
        "frames": "single RGB plus camera parameters / ray lookup and valid mask",
        "projection": "Perspective, OpenCV fisheye, MEI, ERP via canonical ERP conversion",
        "intrinsics": "Required geometry for non-ERP; camera self-calibration offered as separate model, not no-calibration ground truth",
        "resolution": "Demo ERP 512×1024; fisheye ERP crop sizes/config vary",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "B×1×H×W metric Euclidean range in canonical ERP; remapping to original camera needed",
        "point_map": "Backproject range times calibrated unit rays",
        "normal": "Unknown direct head",
        "confidence": "Attention/valid masks are not calibrated depth uncertainty",
        "camera_parameters": "Not estimated by DAC itself",
        "depth_convention": "Euclidean distance/range explicitly in paper implementation details, not Z-buffer; original Z GT divided by unit ray z.",
        "metric_status": "metric_learned",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/yuliangguo/depth_any_camera",
      "paperUrl": "https://arxiv.org/abs/2501.02464",
      "projectUrl": "https://yuliangguo.github.io/depth-any-camera/",
      "weightsUrl": "https://github.com/yuliangguo/depth_any_camera#pre-trained-models",
      "license": {
        "code": "MIT",
        "weights": "Official downloads exist; separate weight-specific terms Unknown"
      },
      "evidence": [
        "Paper §3/§4 and Euclidean implementation/appendix inspected",
        "https://raw.githubusercontent.com/yuliangguo/depth_any_camera/main/demo/demo_dac_single.py",
        "https://arxiv.org/abs/2501.02464",
        "https://yuliangguo.github.io/depth-any-camera/",
        "https://github.com/yuliangguo/depth_any_camera"
      ],
      "notes": [
        "Useful raw-fisheye metric baseline after correct calibration",
        "Cross-camera does not mean noncentral stitched camera is physically central",
        "Custom ops and old torch make native Windows reproduction harder"
      ],
      "tags": [
        "monocular",
        "metric",
        "fisheye",
        "ERP",
        "camera-aware"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "demo/demo_dac_single.py",
        "dac/utils/erp_geometry.py",
        "dac/models/ops/",
        "configs/"
      ],
      "environment": "Official conda Python3.9 torch1.13.1+cu116; custom CUDA operators; Docker alternative"
    },
    {
      "id": "depth_anything_3",
      "collection": "depth",
      "name": "Depth Anything 3",
      "title": "Depth Anything 3: Recovering the Visual Space from Any Views",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "arXiv 2511.10647; formal venue Unknown",
      "authors": [
        "Haotong Lin",
        "Sili Chen",
        "Jun Hao Liew",
        "Donny Y. Chen",
        "Zhenyu Li",
        "Guang Shi",
        "Jiashi Feng",
        "Bingyi Kang"
      ],
      "institutions": [
        "ByteDance Seed"
      ],
      "summary": "从单帧或多视图恢复深度、相机与几何；Any-view 描述视角关系，不代表原生支持全景投影。",
      "cameras": [
        "perspective"
      ],
      "scale": "mixed",
      "scaleNote": "Any-view normally common arbitrary scale; Metric-Large output requires focal_pixels*net_output/300; Nested already meters; known metric pose alignment can supply scale.",
      "aliases": [
        "DA3"
      ],
      "metricStatus": "mixed_checkpoints",
      "depthType": "z",
      "outputs": [
        "z"
      ],
      "pose": true,
      "inputSummary": "N RGB, B×N×3×H×W; single or multiple views",
      "outputSummary": "Prediction.depth N×H×W",
      "inputs": {
        "frames": "N RGB, B×N×3×H×W; single or multiple views",
        "projection": "Pinhole in public depth-ray formulation; any-view does not imply any camera projection",
        "intrinsics": "Optional K N×3×3",
        "extrinsics": "Optional known camera poses; pose-conditioned mode",
        "resolution": "process_res/API preprocessing; model-specific; exact max Unknown",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "Prediction.depth N×H×W",
        "point_map": "Derived from depth+K+extrinsics; optional world-space 3DGS export",
        "normal": "Unknown default output",
        "confidence": "conf N×H×W; calibration to physical uncertainty Unknown",
        "camera_parameters": "intrinsics N×3×3, extrinsics N×4×4, sky N×H×W, is_metric, scale_factor",
        "depth_convention": "Z-depth: paper P=R(D K^-1 p)+t, ray directions deliberately not normalized. Raw depth-ray latent N×H×W×6 includes origin and unnormalized direction.",
        "metric_status": "mixed_checkpoints",
        "pose_output": "Yes for Any-view/Nested, relative cameras in common frame; not an online inertial trajectory or global metric guarantee",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/ByteDance-Seed/Depth-Anything-3",
      "paperUrl": "https://arxiv.org/abs/2511.10647",
      "projectUrl": "https://depth-anything-3.github.io/",
      "weightsUrl": "https://github.com/ByteDance-Seed/Depth-Anything-3#readme",
      "license": {
        "code": "Apache-2.0",
        "weights": "DA3 Small/Base, Mono-Large, Metric-Large Apache-2.0; Any-view Large/Giant and Nested CC-BY-NC-4.0; prefer refreshed -1.1 where available"
      },
      "evidence": [
        "Paper §3 formulation, architecture and scale normalization inspected",
        "API/README and Prediction schema audited",
        "https://raw.githubusercontent.com/ByteDance-Seed/Depth-Anything-3/main/src/depth_anything_3/specs.py",
        "https://raw.githubusercontent.com/ByteDance-Seed/Depth-Anything-3/main/src/depth_anything_3/utils/alignment.py",
        "https://arxiv.org/abs/2511.10647",
        "https://depth-anything-3.github.io/",
        "https://github.com/ByteDance-Seed/Depth-Anything-3"
      ],
      "notes": [
        "Do not confuse camera-space Z with unit-ray range",
        "Must resize K consistently; direct metric monocular branch needs focal conversion",
        "Full ERP use not validated; rectify/tangent views and track extrinsics if used",
        "Published geometry benchmark superiority is not a wrist VIO result"
      ],
      "tags": [
        "any-view",
        "depth-and-pose",
        "relative",
        "metric-variant"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "src/depth_anything_3/api.py::DepthAnything3.inference",
        "src/depth_anything_3/specs.py::Prediction",
        "src/depth_anything_3/model/da3.py",
        "src/depth_anything_3/utils/alignment.py"
      ],
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown"
    },
    {
      "id": "da360",
      "collection": "depth",
      "name": "Depth Anything in 360°",
      "title": "Depth Anything in 360°: Towards Scale Invariance in the Wild",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "arXiv2512.22819; formal venue Unknown",
      "authors": [
        "Hualie Jiang",
        "Ziyang Song",
        "Zhiqiang Lou",
        "Rui Xu",
        "Minglang Tan"
      ],
      "institutions": [
        "Antigravity Tech",
        "Insta360 Research"
      ],
      "summary": "针对真实全景的尺度不变深度路线，提供不同大小模型；EXR 或 PLY 文件本身不证明结果以米计。",
      "cameras": [
        "panoramic"
      ],
      "scale": "relative",
      "scaleNote": "Scale-invariant, not metric; test normalization is an extra per-image scale",
      "aliases": [
        "DA360"
      ],
      "metricStatus": "scale_invariant",
      "depthType": "range",
      "outputs": [
        "range"
      ],
      "pose": false,
      "inputSummary": "single full ERP RGB2:1",
      "outputSummary": "pred_disp scale-invariant disparity; test.py reciprocal to radial depth then divide by per-image min",
      "inputs": {
        "frames": "single full ERP RGB2:1",
        "projection": "ERP",
        "intrinsics": "No pinhole K",
        "resolution": "Checkpoint stored; test default518×1036",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "pred_disp scale-invariant disparity; test.py reciprocal to radial depth then divide by per-image min",
        "point_map": "EXR raw exported normalized radial depth and PLY",
        "normal": "Unknown",
        "confidence": "No verified head",
        "camera_parameters": "No",
        "depth_convention": "Inverse radial distance/disparity with estimated shift; reciprocal gives radial distance up to scale",
        "metric_status": "scale_invariant",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/antigravity-tech/DA360",
      "paperUrl": "https://arxiv.org/abs/2512.22819",
      "projectUrl": "https://antigravity-tech.github.io/DA360/",
      "weightsUrl": "https://huggingface.co/hljiang/DA360",
      "license": {
        "code": "MIT repository; Depth Anything V2 dependency terms separate",
        "weights": "Official HF hljiang/DA360 card explicitly labels Apache-2.0; upstream Depth Anything V2 and checkpoint-specific compatibility still requires review"
      },
      "evidence": [
        "Paper Method/shift formulation read; test.py L84–87 verified",
        "https://raw.githubusercontent.com/antigravity-tech/DA360/main/test.py",
        "https://arxiv.org/abs/2512.22819",
        "https://antigravity-tech.github.io/DA360/",
        "https://github.com/antigravity-tech/DA360"
      ],
      "notes": [
        "Sep/Oct2026 demos/data released, so older code-unavailable assessments stale",
        "Original Insta360-Research-Team repo redirects to antigravity-tech",
        "Good low-cost ablation of seam-aware decoding and shift, no pose",
        "project_url explicitly declared in official repository, but direct project-page retrieval failed on final URL check; use code_url as verified access route"
      ],
      "tags": [
        "monocular",
        "ERP",
        "scale-invariant"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "test.py",
        "networks/",
        "saver.py",
        "app.py"
      ],
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown"
    },
    {
      "id": "depth_pro",
      "collection": "depth",
      "name": "Depth Pro",
      "title": "Depth Pro: Sharp Monocular Metric Depth in Less Than a Second",
      "year": 2025,
      "firstYear": 2024,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ICLR 2025; arXiv2024",
      "authors": [
        "Aleksei Bochkovskii",
        "Amaël Delaunoy",
        "Hugo Germain",
        "Marcel Santos",
        "Yichao Zhou",
        "Stephan R. Richter",
        "Vladlen Koltun"
      ],
      "institutions": [
        "Apple"
      ],
      "summary": "面向细节边界的单目公制深度与焦距预测；不直接输出连续相机轨迹。",
      "cameras": [
        "perspective"
      ],
      "scale": "metric",
      "scaleNote": "Learned metric, focal-dependent",
      "aliases": [],
      "metricStatus": "metric_learned",
      "depthType": "z",
      "outputs": [
        "z"
      ],
      "pose": false,
      "inputSummary": "single RGB; focal_pixels optional",
      "outputSummary": "Metric depth H×W meters; estimated focal length pixels",
      "inputs": {
        "frames": "single RGB; focal_pixels optional",
        "projection": "Pinhole RGB; full ERP/fisheye native support not established",
        "intrinsics": "Can estimate focal if absent; use calibrated f if available",
        "resolution": "1536×1536 internal multiscale inference, output original image shape",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "Metric depth H×W meters; estimated focal length pixels",
        "point_map": "Derived via K with assumed principal point or calibration",
        "normal": "No verified direct head",
        "confidence": "No verified default head",
        "camera_parameters": "Focal length estimate; not complete distortion calibration/pose",
        "depth_convention": "Pinhole metric optical Z after focal correction; confirm adapter with official depth_pro.py before deployment",
        "metric_status": "metric_learned",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Paper says2.25MP in0.3s on GPU; GPU/precision conditions not established in this audit, so not a deployment FPS claim"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/apple-aiml-research/ml-depth-pro",
      "paperUrl": "https://arxiv.org/abs/2410.02073",
      "projectUrl": "https://github.com/apple-aiml-research/ml-depth-pro",
      "weightsUrl": "https://huggingface.co/apple/DepthPro",
      "license": {
        "code": "Apple custom software license plus component ACKNOWLEDGEMENTS",
        "weights": "apple-amlr; not same as code; inspect model card"
      },
      "evidence": [
        "ICLR paper source and official code/model license inspected; not full Method/Ablation",
        "https://openreview.net/pdf?id=aueXfY0Clv",
        "https://github.com/apple-aiml-research/ml-depth-pro/blob/main/LICENSE",
        "https://raw.githubusercontent.com/apple-aiml-research/ml-depth-pro/main/src/depth_pro/depth_pro.py (infer1536 square, canonical inverse-depth times W/f then reciprocal)",
        "https://arxiv.org/abs/2410.02073",
        "https://github.com/apple-aiml-research/ml-depth-pro"
      ],
      "notes": [
        "Useful high-detail metric perspective reference",
        "No temporal consistency or motion estimation",
        "Do not infer exact metric accuracy from title",
        "Official apple/DepthPro HF card says released checkpoint is a retrained reference implementation and does not exactly match paper performance"
      ],
      "tags": [
        "monocular",
        "metric",
        "perspective"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial",
      "codeEntry": [
        "src/depth_pro/depth_pro.py::DepthPro.infer",
        "src/depth_pro/cli/run.py"
      ],
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown"
    },
    {
      "id": "dreamcube",
      "collection": "depth",
      "name": "DreamCube",
      "title": "DreamCube: 3D Panorama Generation via Multi-plane Synchronization",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ICCV 2025; proceedings title: DreamCube: RGB-D Panorama Generation via Multi-plane Synchronization",
      "authors": [
        "Yukun Huang",
        "Yanning Zhou",
        "Jianan Wang",
        "Kaiyi Huang",
        "Xihui Liu"
      ],
      "institutions": [
        "The University of Hong Kong",
        "Tencent",
        "Astribot"
      ],
      "summary": "生成式相关方向：把二维扩散操作同步到立方体六面，支持RGB-D全景生成和深度模型适配；生成几何不能直接当米制测量。",
      "cameras": [
        "panoramic",
        "perspective"
      ],
      "scale": "unknown",
      "scaleNote": "Do not treat diffusion-generated geometry as measured metric depth. Marigold-style adaptation inherits relative/affine ambiguity unless separately calibrated.",
      "aliases": [],
      "metricStatus": "unknown",
      "depthType": "unknown",
      "outputs": [
        "generated_depth",
        "relative_depth",
        "mesh",
        "gaussian_scene"
      ],
      "pose": false,
      "inputSummary": "Generation: single-view conditioning and text; depth adaptation: RGB panorama via synchronized perspective model",
      "outputSummary": "RGB-D cubemap/ERP generation; synchronized depth-estimation variants",
      "inputs": {
        "frames": "Generation: single-view conditioning and text; depth adaptation: RGB panorama via synchronized perspective model",
        "projection": "Synchronized cubemap planes with ERP export",
        "intrinsics": "Virtual cube geometry; generation and perception pipelines differ",
        "resolution": "Task/pipeline dependent",
        "extrinsics": "Not required for single panorama",
        "imu": "No",
        "gravity": "No measured gravity required; gravity-alignment assumptions not audited",
        "synchronization": "Single panorama; real multi-camera stitching synchronization remains a system concern"
      },
      "outputDetails": {
        "primary": "RGB-D cubemap/ERP generation; synchronized depth-estimation variants",
        "point_map": "Generated mesh / Gaussian scene export offered; generated content is not an observed measurement",
        "normal": "No verified direct head",
        "confidence": "Unknown",
        "camera_parameters": "No",
        "depth_convention": "Project viewer labels panorama depth as Euclidean distance. Perception adapters may inherit affine ambiguity from their base model.",
        "metric_status": "unknown",
        "pose_output": "No online SLAM trajectory output verified",
        "runtime": "Unknown: no comparable timing or memory measurement executed locally."
      },
      "codeStatus": "partial",
      "codeUrl": "https://github.com/Yukun-Huang/DreamCube",
      "paperUrl": "https://arxiv.org/abs/2506.17206",
      "projectUrl": "https://yukun-huang.github.io/DreamCube/",
      "weightsUrl": "https://huggingface.co/KevinHuang/DreamCube",
      "license": {
        "code": "Unknown; no top-level source license verified",
        "weights": "HF model card apache-2.0; upstream diffusion terms may also apply"
      },
      "evidence": [
        "https://arxiv.org/abs/2506.17206",
        "https://yukun-huang.github.io/DreamCube/",
        "https://github.com/Yukun-Huang/DreamCube",
        "https://huggingface.co/KevinHuang/DreamCube"
      ],
      "notes": [
        "Release conflict: website/repository announce model release, but official HF card says current weights are for sanity testing and final official weights will come later.",
        "Classify as generative/adaptation research rather than a drop-in metric sensing model.",
        "code_and_sanity_weights_release_conflict"
      ],
      "tags": [
        "panoramic-generation",
        "diffusion",
        "cubemap",
        "depth-adaptation",
        "generated_depth",
        "relative_depth",
        "mesh",
        "gaussian_scene"
      ],
      "family": "generative_rgbd_and_depth_adaptation",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial_paper_and_official_release_metadata",
      "codeEntry": [
        "app.py",
        "multi_plane_sync.ipynb",
        "notebooks/"
      ],
      "environment": "Official setup uses Python 3.11 and requirements.txt."
    },
    {
      "id": "panda",
      "collection": "depth",
      "name": "PanDA",
      "title": "PanDA: Towards Panoramic Depth Anything with Unlabeled Panoramas and Mobius Spatial Augmentation",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2025",
      "authors": [
        "Zidong Cao",
        "Jinjing Zhu",
        "Weiming Zhang",
        "Hao Ai",
        "Haotian Bai",
        "Hengshuang Zhao",
        "Lin Wang"
      ],
      "institutions": [
        "HKUST(GZ)",
        "University of Birmingham",
        "The University of Hong Kong",
        "Nanyang Technological University"
      ],
      "summary": "通过有标注与无标注全景和球面增强适配 Depth Anything；公开主权重为相对深度，metric 微调另列。",
      "cameras": [
        "panoramic"
      ],
      "scale": "mixed",
      "scaleNote": "Relative pretrained; separate metric fine-tuning directory is different capability",
      "aliases": [
        "PanDA"
      ],
      "metricStatus": "mixed_checkpoints",
      "depthType": "unknown",
      "outputs": [
        "unknown"
      ],
      "pose": false,
      "inputSummary": "single ERP RGB; video runner applies depth per frame",
      "outputSummary": "B×1×H×W normalized relative depth, official range0–1",
      "inputs": {
        "frames": "single ERP RGB; video runner applies depth per frame",
        "projection": "ERP2:1",
        "intrinsics": "No K",
        "resolution": "Default height504,width1008; multiples14",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "B×1×H×W normalized relative depth, official range0–1",
        "point_map": "saver pointcloud uses relative radial values; not metric reconstruction",
        "normal": "No verified direct head",
        "confidence": "No verified public head",
        "camera_parameters": "No",
        "depth_convention": "Relative depth trained with normalized depth; radial interpretation in provided point-cloud path does not prove metric/scale-only geometric correctness",
        "metric_status": "mixed_checkpoints",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Official warning:1008×2016 inference >40GB GPU; default504×1008 actual time/memory Unknown"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/caozidong/PanDA",
      "paperUrl": "https://openaccess.thecvf.com/content/CVPR2025/papers/Cao_PanDA_Towards_Panoramic_Depth_Anything_with_Unlabeled_Panoramas_and_Mobius_CVPR_2025_paper.pdf",
      "projectUrl": "https://caozidong.github.io/PanDA_Depth/",
      "weightsUrl": "https://github.com/caozidong/PanDA#pre-trained-models",
      "license": {
        "code": "Apache-2.0",
        "weights": "Small/Base/Large checkpoints linked; independent weight terms Unknown; inherited backbones need checking"
      },
      "evidence": [
        "Paper Method EPNL and SSL read; README and run_image output/pointcloud path inspected",
        "https://raw.githubusercontent.com/caozidong/PanDA/main/run_image.py",
        "https://openaccess.thecvf.com/content/CVPR2025/papers/Cao_PanDA_Towards_Panoramic_Depth_Anything_with_Unlabeled_Panoramas_and_Mobius_CVPR_2025_paper.pdf",
        "https://caozidong.github.io/PanDA_Depth/",
        "https://github.com/caozidong/PanDA"
      ],
      "notes": [
        "Keep as relative panoramic reference and augmentation source",
        "run_image normalizes prediction to8-bit PNG; intercept raw tensor for evaluation",
        "Video interface does not imply temporal geometric consistency"
      ],
      "tags": [
        "monocular",
        "ERP",
        "relative"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "run_image.py",
        "run_video.py",
        "networks/models.py",
        "train_metric_depth/"
      ],
      "environment": "Python3.10 torch2.0.0 CUDA11.7 cuDNN8.5 official"
    },
    {
      "id": "rpg360",
      "collection": "depth",
      "name": "RPG360",
      "title": "RPG360: Robust 360 Depth Estimation with Perspective Foundation Models and Graph Optimization",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "NeurIPS 2025",
      "authors": [
        "Dongki Jung",
        "Jaehoon Choi",
        "Yonghan Lee",
        "Dinesh Manocha"
      ],
      "institutions": [
        "Unknown"
      ],
      "summary": "先用透视基础模型估计六面深度与法线，再图优化统一面间尺度和结构；Metric3D等不同backbone必须分开解释尺度。",
      "cameras": [
        "panoramic"
      ],
      "scale": "mixed",
      "scaleNote": "Depends on the chosen upstream foundation model. Relative backbones remain scale-ambiguous; Metric3D-based variants retain a fallible learned metric prior. Graph consistency does not supply measured metric scale.",
      "aliases": [],
      "metricStatus": "mixed_checkpoints",
      "depthType": "range",
      "outputs": [
        "radial_range",
        "normals"
      ],
      "pose": false,
      "inputSummary": "single ERP RGB",
      "outputSummary": "Optimized ERP depth and normals; point geometry derived from range",
      "inputs": {
        "frames": "single ERP RGB",
        "projection": "ERP → six perspective cubemap faces → ERP",
        "intrinsics": "Standard ERP geometry; raw fisheye must be calibrated and reprojected",
        "resolution": "Paper evaluates 512×1024 and 1024×2048",
        "extrinsics": "Not required for single panorama",
        "imu": "No",
        "gravity": "No measured gravity required; gravity-alignment assumptions not audited",
        "synchronization": "Single panorama; real multi-camera stitching synchronization remains a system concern"
      },
      "outputDetails": {
        "primary": "Optimized ERP depth and normals; point geometry derived from range",
        "point_map": "Derived geometry only; no direct point-map head verified",
        "normal": "Surface normals predicted upstream and jointly refined",
        "confidence": "Unknown",
        "camera_parameters": "No",
        "depth_convention": "Paper §3.1 explicitly converts perspective Z to ERP Euclidean range with norm(K^-1 p); point P = ERP range × unit spherical ray.",
        "metric_status": "mixed_checkpoints",
        "pose_output": "No online SLAM trajectory output verified",
        "runtime": "Unknown: no comparable timing or memory measurement executed locally."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/jdk9405/RPG360",
      "paperUrl": "https://arxiv.org/abs/2509.23991",
      "projectUrl": "https://jdk9405.github.io/RPG360/",
      "weightsUrl": "",
      "license": {
        "code": "Unknown",
        "weights": "Unknown"
      },
      "evidence": [
        "https://arxiv.org/html/2509.23991",
        "https://github.com/jdk9405/RPG360",
        "https://papers.nips.cc/paper_files/paper/2025/file/fb1ea28c42fcd32bd49e68769b26028f-Paper-Conference.pdf",
        "https://arxiv.org/abs/2509.23991",
        "https://jdk9405.github.io/RPG360/"
      ],
      "notes": [
        "Strong connection to panoramic SfM/feature-matching experiments, but not a complete online SLAM system.",
        "No task-specific trained checkpoint is necessary; upstream depth/normal model licenses and weights apply.",
        "code_released_uses_upstream_weights"
      ],
      "tags": [
        "monocular",
        "ERP",
        "cubemap",
        "training-free",
        "graph-optimization",
        "radial_range",
        "normals"
      ],
      "family": "monocular_depth",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial_paper_and_official_release_metadata",
      "codeEntry": [
        "scripts/step1_initial.py",
        "scripts/step2_refine.py",
        "configs/"
      ],
      "environment": "Unknown; official requirements must be checked for the selected version."
    },
    {
      "id": "st2_360d",
      "collection": "depth",
      "name": "ST²360D",
      "title": "ST²360D: Spatial-to-Temporal Consistency for Training-free 360 Monocular Depth Estimation",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "NeurIPS 2025",
      "authors": [
        "Zidong Cao",
        "Jinjing Zhu",
        "Hao Ai",
        "Lutao Jiang",
        "Yuanhuiyi Lyu",
        "Hui Xiong"
      ],
      "institutions": [
        "HKUST (Guangzhou)",
        "University of Birmingham",
        "HKUST"
      ],
      "summary": "把单幅全景变成虚拟透视视频，用视频模型的一致性消除patch尺度漂移；输入仍是单帧，非真实时间序列SLAM。",
      "cameras": [
        "panoramic"
      ],
      "scale": "unknown",
      "scaleNote": "Inherited from the selected video depth backbone; virtual view sequencing and spatial consistency do not supply metric scale.",
      "aliases": [],
      "metricStatus": "unknown",
      "depthType": "unknown",
      "outputs": [
        "relative_depth",
        "depth_unknown_convention"
      ],
      "pose": false,
      "inputSummary": "single ERP converted to a synthetic sequence of perspective views; not a captured temporal video",
      "outputSummary": "Merged ERP depth map",
      "inputs": {
        "frames": "single ERP converted to a synthetic sequence of perspective views; not a captured temporal video",
        "projection": "ERP → spherical-uniform tangent-view sequence",
        "intrinsics": "Standard ERP geometry; raw fisheye must be calibrated and reprojected",
        "resolution": "Author project states support up to 4K",
        "extrinsics": "Not required for single panorama",
        "imu": "No",
        "gravity": "No measured gravity required; gravity-alignment assumptions not audited",
        "synchronization": "Single panorama; real multi-camera stitching synchronization remains a system concern"
      },
      "outputDetails": {
        "primary": "Merged ERP depth map",
        "point_map": "Derived geometry only; no direct point-map head verified",
        "normal": "No verified direct head",
        "confidence": "Unknown",
        "camera_parameters": "No",
        "depth_convention": "Unknown: radial range versus optical-axis Z not verified from original decoder/dataloader.",
        "metric_status": "unknown",
        "pose_output": "No online SLAM trajectory output verified",
        "runtime": "Unknown: no comparable timing or memory measurement executed locally."
      },
      "codeStatus": "unverified",
      "codeUrl": "",
      "paperUrl": "https://openreview.net/pdf?id=d0bm4upnQ8",
      "projectUrl": "https://caozidong.github.io/ST2360D_Depth/",
      "weightsUrl": "",
      "license": {
        "code": "Unknown",
        "weights": "Unknown"
      },
      "evidence": [
        "https://caozidong.github.io/ST2360D_Depth/",
        "https://openreview.net/pdf?id=d0bm4upnQ8",
        "https://haoai-1997.github.io/"
      ],
      "notes": [
        "Project/paper metadata verified; no official code or weight URL confirmed during this audit.",
        "Treat training-free panorama adaptation separately from zero-training foundation backbone.",
        "paper_and_project_code_unverified"
      ],
      "tags": [
        "monocular",
        "ERP",
        "training-free",
        "video-depth-prior",
        "high-resolution",
        "relative_depth",
        "depth_unknown_convention"
      ],
      "family": "monocular_depth",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial_paper_and_official_release_metadata",
      "codeEntry": [],
      "environment": "Unknown; official requirements must be checked for the selected version."
    },
    {
      "id": "unidepth_v2",
      "collection": "depth",
      "name": "UniDepthV2",
      "title": "UniDepthV2: Universal Monocular Metric Depth Estimation Made Simpler",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "TPAMI DOI10.1109/TPAMI.2025.3628473; arXiv2025",
      "authors": [
        "Luigi Piccinelli",
        "Christos Sakaridis",
        "Yung-Hsu Yang",
        "Mattia Segu",
        "Siyuan Li",
        "Wim Abbeloos",
        "Luc Van Gool"
      ],
      "institutions": [
        "ETH Zürich",
        "Toyota Motor Europe",
        "INSAIT; full per-author affiliations Unknown"
      ],
      "summary": "联合估计透视公制几何、相机表示与不确定性；不能由 universal 名称推断完整 ERP 支持。",
      "cameras": [
        "perspective"
      ],
      "scale": "metric",
      "scaleNote": "Learned metric meters",
      "aliases": [],
      "metricStatus": "metric_learned",
      "depthType": "points",
      "outputs": [
        "points"
      ],
      "pose": false,
      "inputSummary": "single RGB",
      "outputSummary": "Metric Z Bx1xHxW, radius=norm(points) Bx1xHxW, points Bx3xHxW",
      "inputs": {
        "frames": "single RGB",
        "projection": "Pseudo-spherical representation but original framework predominantly pinhole; library camera classes are not proof of universal ERP accuracy",
        "intrinsics": "Optional calibrated camera/K; predicts if unavailable",
        "resolution": "Adaptive resolution_level and ratio constraints",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "Metric Z Bx1xHxW, radius=norm(points) Bx1xHxW, points Bx3xHxW",
        "point_map": "Direct camera-frame metric points",
        "normal": "Unknown",
        "confidence": "Confidence / uncertainty output; calibration to noise model Unknown",
        "camera_parameters": "Predicted intrinsics/camera representation",
        "depth_convention": "Public infer depth=point-map z coordinate; use point norm for Euclidean range. Do not infer whole-sphere validity from pseudo-spherical terminology.",
        "metric_status": "metric_learned",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/lpiccinelli-eth/UniDepth",
      "paperUrl": "https://arxiv.org/abs/2502.20110",
      "projectUrl": "https://github.com/lpiccinelli-eth/UniDepth#unidepthv2",
      "weightsUrl": "https://huggingface.co/lpiccinelli/unidepth-v2-vitl14",
      "license": {
        "code": "CC-BY-NC-4.0 source header",
        "weights": "Individual HF card terms require recheck"
      },
      "evidence": [
        "Paper summary and public API/model source inspected; full ablations not read",
        "https://raw.githubusercontent.com/lpiccinelli-eth/UniDepth/main/unidepth/models/unidepthv2/unidepthv2.py",
        "https://arxiv.org/abs/2502.20110",
        "https://github.com/lpiccinelli-eth/UniDepth#unidepthv2",
        "https://github.com/lpiccinelli-eth/UniDepth"
      ],
      "notes": [
        "Use as perspective metric/confidence control",
        "Use UniK3D for explicit camera-generalization experiment",
        "No pose output"
      ],
      "tags": [
        "monocular",
        "metric",
        "point-map",
        "perspective-baseline"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial",
      "codeEntry": [
        "unidepth/models/unidepthv2/unidepthv2.py",
        "unidepth/utils/camera.py",
        "unidepth/models/unidepthv2/README.md"
      ],
      "environment": "Linux Python3.10+ CUDA11.8+ official"
    },
    {
      "id": "unik3d",
      "collection": "depth",
      "name": "UniK3D",
      "title": "UniK3D: Universal Camera Monocular 3D Estimation",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2025",
      "authors": [
        "Luigi Piccinelli",
        "Christos Sakaridis",
        "Mattia Segu",
        "Yung-Hsu Yang",
        "Siyuan Li",
        "Wim Abbeloos",
        "Luc Van Gool"
      ],
      "institutions": [
        "ETH Zürich",
        "Toyota Motor Europe",
        "INSAIT / Sofia University"
      ],
      "summary": "以通用射线和球面表示处理不同相机，输出公制点图；distance 是径向距离，depth 则是相机 Z。",
      "cameras": [
        "panoramic",
        "fisheye",
        "wide",
        "perspective"
      ],
      "scale": "metric",
      "scaleNote": "Learned metric meters",
      "aliases": [],
      "metricStatus": "metric_learned",
      "depthType": "points",
      "outputs": [
        "points"
      ],
      "pose": false,
      "inputSummary": "single RGB C×H×W or B×3×H×W",
      "outputSummary": "points B×3×H×W in camera frame meters; distance B×1×H×W=norm(points)",
      "inputs": {
        "frames": "single RGB C×H×W or B×3×H×W",
        "projection": "Pinhole, OPENCV, Fisheye624, MEI, Spherical; predicted ray pencil if unknown",
        "intrinsics": "Optional camera object / rays; set eval() to use supplied rays",
        "resolution": "Resolution_level0–9 adaptive aspect/pixels; resize intrinsics/rays consistently",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "points B×3×H×W in camera frame meters; distance B×1×H×W=norm(points)",
        "point_map": "Direct metric point map",
        "normal": "Not a verified output head",
        "confidence": "B×1×H×W learned confidence; physical variance calibration Unknown",
        "camera_parameters": "rays B×3×H×W; latent ray prediction, not necessarily parametric K",
        "depth_convention": "IMPORTANT: output depth=points[:,-1:] is signed camera Z; output distance=norm(points) is range; use distance for ERP/back hemisphere.",
        "metric_status": "metric_learned",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/lpiccinelli-eth/UniK3D",
      "paperUrl": "https://arxiv.org/abs/2503.16591",
      "projectUrl": "https://lpiccinelli-eth.github.io/pub/unik3d/",
      "weightsUrl": "https://huggingface.co/lpiccinelli/unik3d-vitl",
      "license": {
        "code": "CC-BY-NC-SA-4.0 LICENSE/source; README abbreviates BY-NC4.0 inconsistently",
        "weights": "Official HF model card no explicit separate license observed"
      },
      "evidence": [
        "Paper §3 representation and distribution-contraction analysis read",
        "Model infer L362–365 explicitly audited",
        "https://raw.githubusercontent.com/lpiccinelli-eth/UniK3D/main/unik3d/models/unik3d.py",
        "https://raw.githubusercontent.com/lpiccinelli-eth/UniK3D/main/LICENSE",
        "https://arxiv.org/abs/2503.16591",
        "https://lpiccinelli-eth.github.io/pub/unik3d/",
        "https://github.com/lpiccinelli-eth/UniK3D"
      ],
      "notes": [
        "Excellent alternative to compare known calibration vs predicted camera rays",
        "Single-camera point map has no device motion output",
        "Avoid taking README depth label literally for full sphere"
      ],
      "tags": [
        "monocular",
        "metric",
        "any-camera",
        "point-map"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "scripts/infer.py",
        "unik3d/models/unik3d.py::UniK3D.infer",
        "unik3d/utils/camera.py"
      ],
      "environment": "Linux Python3.10+ CUDA11.8+; pip install -e with cu121 official"
    },
    {
      "id": "vggt",
      "collection": "depth",
      "name": "VGGT",
      "title": "VGGT: Visual Geometry Grounded Transformer",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2025 Best Paper",
      "authors": [
        "Jianyuan Wang",
        "Minghao Chen",
        "Nikita Karaev",
        "Andrea Vedaldi",
        "Christian Rupprecht",
        "David Novotny"
      ],
      "institutions": [
        "University of Oxford",
        "Meta AI"
      ],
      "summary": "多视图联合预测相机、深度和三维几何；共享坐标中的重建仍存在尺度规范，需与连续 SLAM 区分。",
      "cameras": [
        "perspective"
      ],
      "scale": "relative",
      "scaleNote": "Common arbitrary global scale; paper training normalizes mean point distance, not physical meters",
      "aliases": [],
      "metricStatus": "scale_invariant",
      "depthType": "mixed",
      "outputs": [
        "mixed"
      ],
      "pose": true,
      "inputSummary": "N overlapping RGB; B×S×3×H×W; one frame allowed",
      "outputSummary": "depth B×S×H×W×1; depth_conf B×S×H×W",
      "inputs": {
        "frames": "N overlapping RGB; B×S×3×H×W; one frame allowed",
        "projection": "Pinhole public camera head; ERP/fisheye support not established",
        "intrinsics": "Not required; predicts K",
        "resolution": "Preprocessed long side518, multiple14, common tensor shape",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "depth B×S×H×W×1; depth_conf B×S×H×W",
        "point_map": "world_points B×S×H×W×3 in reference/first-camera frame, world_points_conf",
        "normal": "No verified head",
        "confidence": "Learned per-pixel confidence; not calibrated covariance",
        "camera_parameters": "pose_enc B×S×9→OpenCV world-to-camera extrinsics B×S×3×4 and K; optional tracking points and visibility",
        "depth_convention": "Depth map camera Z; direct world points alternative; coordinate axes OpenCV x right y down z forward",
        "metric_status": "scale_invariant",
        "pose_output": "Yes relative cameras in common first-camera frame; requires sequence association/backend for SLAM",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/facebookresearch/vggt",
      "paperUrl": "https://arxiv.org/abs/2503.11651",
      "projectUrl": "https://vgg-t.github.io/",
      "weightsUrl": "https://huggingface.co/facebook/VGGT-1B",
      "license": {
        "code": "VGGT custom commercial-use-friendly license since2025-07-29; exclusions apply",
        "weights": "Original VGGT-1B noncommercial; VGGT-1B-Commercial separate gated checkpoint/license"
      },
      "evidence": [
        "Paper §3 representations/GT normalization and BA discussion read",
        "Official model forward and README camera convention inspected",
        "https://raw.githubusercontent.com/facebookresearch/vggt/main/vggt/models/vggt.py",
        "https://raw.githubusercontent.com/facebookresearch/vggt/main/LICENSE.txt",
        "https://arxiv.org/abs/2503.11651",
        "https://vgg-t.github.io/",
        "https://github.com/facebookresearch/vggt"
      ],
      "notes": [
        "No IMU and no metric-scale guarantee; camera output not equivalent to continuous wrist trajectory",
        "May2026 repo memory bugfix means old memory numbers may be stale",
        "VGGT-Ω separate entry is current2026 update"
      ],
      "tags": [
        "multi-view",
        "depth-and-pose",
        "point-map"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "vggt/models/vggt.py::VGGT.forward",
        "vggt/utils/pose_enc.py",
        "vggt/utils/geometry.py",
        "demo_colmap.py"
      ],
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown"
    },
    {
      "id": "video_depth_anything",
      "collection": "depth",
      "name": "Video Depth Anything",
      "title": "Video Depth Anything: Consistent Depth Estimation for Super-Long Videos",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2025 Highlight",
      "authors": [
        "Sili Chen",
        "Hengkai Guo",
        "Shengnan Zhu",
        "Feihu Zhang",
        "Zilong Huang",
        "Jiashi Feng",
        "Bingyi Kang"
      ],
      "institutions": [
        "ByteDance"
      ],
      "summary": "强调长视频深度一致性；相对与 metric 权重分别核对，视频深度并不自动提供 SLAM 位姿。",
      "cameras": [
        "perspective"
      ],
      "scale": "mixed",
      "scaleNote": "Relative main models; metric models trained VirtualKITTI+IRS available2025; not all variants metric",
      "aliases": [
        "VideoDA",
        "VDA"
      ],
      "metricStatus": "mixed_checkpoints",
      "depthType": "unknown",
      "outputs": [
        "unknown"
      ],
      "pose": false,
      "inputSummary": "RGB video windows, offline32-frame example; experimental streaming cache",
      "outputSummary": "T×H×W depth sequence; relative checkpoints or distinct metric checkpoints",
      "inputs": {
        "frames": "RGB video windows, offline32-frame example; experimental streaming cache",
        "projection": "Perspective; no established native ERP/fisheye support",
        "intrinsics": "Not required by default inference API",
        "synchronization": "Ordered temporal RGB/fps; no external IMU/sensor sync",
        "resolution": "Default input_size518 max_res1280; speed benchmark1×32×518×518",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain"
      },
      "outputDetails": {
        "primary": "T×H×W depth sequence; relative checkpoints or distinct metric checkpoints",
        "point_map": "No direct shared-world point map",
        "normal": "No verified head",
        "confidence": "No verified calibrated uncertainty head",
        "camera_parameters": "No",
        "depth_convention": "Relative representation or metric perspective depth according to checkpoint; exact Z/range adapter convention remains Unknown in this audit",
        "metric_status": "mixed_checkpoints",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Official A1001×32×518²:SmallFP16 latency7.5ms,VRAM6.8GB;LargeFP16 14ms,23.6GB. Read implementation before interpreting latency as frame/window; not current-GPU result."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/DepthAnything/Video-Depth-Anything",
      "paperUrl": "https://arxiv.org/abs/2501.12375",
      "projectUrl": "https://videodepthanything.github.io/",
      "weightsUrl": "https://github.com/DepthAnything/Video-Depth-Anything#pre-trained-models",
      "license": {
        "code": "Apache-2.0 repository",
        "weights": "Small Apache-2.0; Base/Large CC-BY-NC-4.0 per README, check metric cards too"
      },
      "evidence": [
        "Official release notes, README benchmark and streaming limitation read",
        "https://raw.githubusercontent.com/DepthAnything/Video-Depth-Anything/main/README.md",
        "https://arxiv.org/abs/2501.12375",
        "https://videodepthanything.github.io/",
        "https://github.com/DepthAnything/Video-Depth-Anything"
      ],
      "notes": [
        "Temporal depth smoothing not equivalent to rigid multiview consistency or better pose",
        "Experimental streaming causes reported ScanNetδ1 0.926→0.836; do not quote offline accuracy for streaming",
        "Official project 3D visualization obtains camera and affine scale/shift from MoGe first frame; do not attribute that geometry capability to VDA alone"
      ],
      "tags": [
        "video",
        "relative",
        "metric-variant",
        "perspective"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "run.py",
        "run_streaming.py",
        "video_depth_anything/video_depth.py",
        "loss/"
      ],
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown"
    },
    {
      "id": "depth_anything_v2",
      "collection": "depth",
      "name": "Depth Anything V2",
      "title": "Depth Anything V2",
      "year": 2024,
      "firstYear": 2024,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "NeurIPS 2024",
      "authors": [
        "Lihe Yang",
        "Bingyi Kang",
        "Zilong Huang",
        "Zhen Zhao",
        "Xiaogang Xu",
        "Jiashi Feng",
        "Hengshuang Zhao"
      ],
      "institutions": [
        "The University of Hong Kong",
        "TikTok",
        "Other author affiliations: Unknown"
      ],
      "summary": "透视相对深度的重要基线；独立 metric 分支需区分权重，不能把原始鱼眼或 ERP 直接视为受支持投影。",
      "cameras": [
        "perspective"
      ],
      "scale": "mixed",
      "scaleNote": "Relative main checkpoints; separately fine-tuned Hypersim indoor / Virtual KITTI outdoor metric checkpoints",
      "aliases": [
        "DAv2",
        "DA2 perspective"
      ],
      "metricStatus": "mixed_checkpoints",
      "depthType": "inverse",
      "outputs": [
        "inverse"
      ],
      "pose": false,
      "inputSummary": "single RGB",
      "outputSummary": "H×W relative depth / inverse-depth-like scalar; not meters",
      "inputs": {
        "frames": "single RGB",
        "projection": "Perspective/pinhole; native fisheye/ERP unsupported claim",
        "intrinsics": "Not needed for relative inference",
        "resolution": "infer_image default input_size=518; aspect preserved, multiple of 14",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "H×W relative depth / inverse-depth-like scalar; not meters",
        "point_map": "No direct point map; relative output not Euclidean geometry without resolving representation/scale/shift",
        "normal": "No",
        "confidence": "No public default head",
        "camera_parameters": "No",
        "depth_convention": "Relative model should be treated as affine-ambiguous inverse-depth-like prediction; do not multiply by K^-1 before representation alignment. Separate metric_depth branch predicts metric depth with its own training domain.",
        "metric_status": "mixed_checkpoints",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/DepthAnything/Depth-Anything-V2",
      "paperUrl": "https://arxiv.org/abs/2406.09414",
      "projectUrl": "https://depth-anything-v2.github.io/",
      "weightsUrl": "https://github.com/DepthAnything/Depth-Anything-V2#pre-trained-models",
      "license": {
        "code": "Apache-2.0 repository",
        "weights": "Small Apache-2.0; Base/Large/Giant CC-BY-NC-4.0; metric variants require individual card check"
      },
      "evidence": [
        "Paper Method/training practice and repository license inspected",
        "https://github.com/DepthAnything/Depth-Anything-V2/blob/main/depth_anything_v2/dpt.py",
        "https://arxiv.org/abs/2406.09414",
        "https://depth-anything-v2.github.io/",
        "https://github.com/DepthAnything/Depth-Anything-V2"
      ],
      "notes": [
        "Fast perspective control baseline; do not feed full ERP and assume calibration",
        "run_video.py is framewise inference, not temporal fusion",
        "No wrist-pose accuracy evidence",
        "Current official README lists Giant checkpoint as Coming soon; do not infer a released Giant weight from the paper/model config alone"
      ],
      "tags": [
        "monocular",
        "relative",
        "perspective"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "run.py",
        "run_video.py",
        "depth_anything_v2/dpt.py::DepthAnythingV2.infer_image",
        "metric_depth/run.py"
      ],
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown"
    },
    {
      "id": "depth_anywhere",
      "collection": "depth",
      "name": "Depth Anywhere",
      "title": "Depth Anywhere: Enhancing 360 Monocular Depth Estimation via Perspective Distillation and Unlabeled Data Augmentation",
      "year": 2024,
      "firstYear": 2024,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "NeurIPS 2024",
      "authors": [
        "Ning-Hsu Albert Wang",
        "Yu-Lun Liu"
      ],
      "institutions": [
        "National Yang Ming Chiao Tung University"
      ],
      "summary": "把透视深度基础模型蒸馏给UniFuse、BiFuse++等全景学生，利用未标注全景和随机旋转扩大数据；尺度语义随学生与checkpoint确定。",
      "cameras": [
        "panoramic"
      ],
      "scale": "mixed",
      "scaleNote": "Student and checkpoint dependent: supervised dataset-depth signal plus affine-invariant perspective distillation; do not assume every configuration is metric.",
      "aliases": [
        "DepthAnywhere",
        "DA"
      ],
      "metricStatus": "mixed_checkpoints",
      "depthType": "unknown",
      "outputs": [
        "depth_unknown_convention"
      ],
      "pose": false,
      "inputSummary": "single ERP RGB at inference; labeled/unlabeled panoramas with derived cubemap teacher views at training",
      "outputSummary": "Panoramic student's ERP depth map; student-specific output semantics",
      "inputs": {
        "frames": "single ERP RGB at inference; labeled/unlabeled panoramas with derived cubemap teacher views at training",
        "projection": "Panoramic student, six virtual perspective cube faces for distillation",
        "intrinsics": "Standard ERP geometry; raw fisheye must be calibrated and reprojected",
        "resolution": "Student/config dependent",
        "extrinsics": "Not required for single panorama",
        "imu": "No",
        "gravity": "No measured gravity required; gravity-alignment assumptions not audited",
        "synchronization": "Single panorama; real multi-camera stitching synchronization remains a system concern"
      },
      "outputDetails": {
        "primary": "Panoramic student's ERP depth map; student-specific output semantics",
        "point_map": "Derived geometry only; no direct point-map head verified",
        "normal": "No verified direct head",
        "confidence": "Unknown",
        "camera_parameters": "No",
        "depth_convention": "Unknown: radial range versus optical-axis Z not verified from original decoder/dataloader.",
        "metric_status": "mixed_checkpoints",
        "pose_output": "No online SLAM trajectory output verified",
        "runtime": "Unknown: no comparable timing or memory measurement executed locally."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/albert100121/Depth-Anywhere",
      "paperUrl": "https://arxiv.org/abs/2406.12849",
      "projectUrl": "https://albert100121.github.io/Depth-Anywhere/",
      "weightsUrl": "https://github.com/albert100121/Depth-Anywhere#pretrained-weights",
      "license": {
        "code": "Apache-2.0",
        "weights": "Official Google Drive checkpoint link exists; separate weight terms Unknown"
      },
      "evidence": [
        "https://arxiv.org/abs/2406.12849",
        "https://albert100121.github.io/Depth-Anywhere/",
        "https://github.com/albert100121/Depth-Anywhere"
      ],
      "notes": [
        "Training framework supporting multiple panoramic students, not a single universal architecture.",
        "Released pretrained links confirmed in README; no checkpoint inference executed.",
        "code_and_checkpoint_links"
      ],
      "tags": [
        "monocular",
        "ERP",
        "perspective-distillation",
        "semi-supervised",
        "depth_unknown_convention"
      ],
      "family": "monocular_depth",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial_paper_and_official_release_metadata",
      "codeEntry": [
        "inference.py",
        "train.py",
        "configs/",
        "checkpoints/README.md"
      ],
      "environment": "Official simplified environment uses Python 3.8 plus requirements.txt; teacher/student dependencies differ."
    },
    {
      "id": "elite360d",
      "collection": "depth",
      "name": "Elite360D",
      "title": "Elite360D: Towards Efficient 360 Depth Estimation via Semantic- and Distance-Aware Bi-Projection Fusion",
      "year": 2024,
      "firstYear": 2024,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2024",
      "authors": [
        "Hao Ai",
        "Lin Wang"
      ],
      "institutions": [
        "Unknown"
      ],
      "summary": "将ERP图像与二十面体点集结合，用轻量双投影注意力补充全局球面信息；任务深度权重未核实。",
      "cameras": [
        "panoramic"
      ],
      "scale": "mixed",
      "scaleNote": "Supervised indoor dataset scale; not a verified open-world metric foundation model.",
      "aliases": [],
      "metricStatus": "dataset_scale_only",
      "depthType": "unknown",
      "outputs": [
        "depth_unknown_convention"
      ],
      "pose": false,
      "inputSummary": "single ERP RGB plus derived icosahedron point set",
      "outputSummary": "ERP depth map",
      "inputs": {
        "frames": "single ERP RGB plus derived icosahedron point set",
        "projection": "ERP + icosahedron projection (ICOSAP)",
        "intrinsics": "Standard ERP geometry; raw fisheye must be calibrated and reprojected",
        "resolution": "Unknown; selected model configuration dependent",
        "extrinsics": "Not required for single panorama",
        "imu": "No",
        "gravity": "No measured gravity required; gravity-alignment assumptions not audited",
        "synchronization": "Single panorama; real multi-camera stitching synchronization remains a system concern"
      },
      "outputDetails": {
        "primary": "ERP depth map",
        "point_map": "Derived geometry only; no direct point-map head verified",
        "normal": "No verified direct head",
        "confidence": "Unknown",
        "camera_parameters": "No",
        "depth_convention": "Unknown: radial range versus optical-axis Z not verified from original decoder/dataloader.",
        "metric_status": "dataset_scale_only",
        "pose_output": "No online SLAM trajectory output verified",
        "runtime": "Unknown: no comparable timing or memory measurement executed locally."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/haoai-1997/Elite360D",
      "paperUrl": "https://arxiv.org/abs/2403.16376",
      "projectUrl": "https://github.com/haoai-1997/Elite360D",
      "weightsUrl": "",
      "license": {
        "code": "Unknown; no repository license verified",
        "weights": "Only generic ResNet initialization files verified, not trained Elite360D depth models"
      },
      "evidence": [
        "https://arxiv.org/abs/2403.16376",
        "https://github.com/haoai-1997/Elite360D",
        "https://github.com/haoai-1997/Elite360D/tree/main/checkpoints"
      ],
      "notes": [
        "The checkpoints directory contains resnet18-5c106cde.pth and resnet34-333f7ec4.pth; these do not establish release of trained depth weights.",
        "Efficiency claims need matched backbone, resolution, precision and hardware before comparison.",
        "code_released_weights_unverified"
      ],
      "tags": [
        "monocular",
        "ERP",
        "icosahedron",
        "efficient-fusion",
        "depth_unknown_convention"
      ],
      "family": "monocular_depth",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial_paper_and_official_release_metadata",
      "codeEntry": [
        "eval_elite360d.py",
        "train_elite360d.py",
        "network/"
      ],
      "environment": "Official setup: Python 3.10, PyTorch ≥1.12.0, CUDA ≥11.3."
    },
    {
      "id": "metric3d_v2",
      "collection": "depth",
      "name": "Metric3Dv2",
      "title": "Metric3Dv2: A Versatile Monocular Geometric Foundation Model for Zero-shot Metric Depth and Surface Normal Estimation",
      "year": 2024,
      "firstYear": 2024,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "IEEE TPAMI2024 accepted per official repository",
      "authors": [
        "Mu Hu",
        "Wei Yin",
        "Chi Zhang",
        "Zhipeng Cai",
        "Xiaoxiao Long",
        "Kaixuan Wang",
        "Hao Chen",
        "Gang Yu",
        "Chunhua Shen",
        "Shaojie Shen"
      ],
      "institutions": [
        "HKUST",
        "University of Adelaide",
        "Tencent",
        "Intel",
        "The University of Hong Kong",
        "Zhejiang University"
      ],
      "summary": "利用相机规范化恢复透视公制深度和法向；焦距缩放和数据域影响实际公制几何。",
      "cameras": [
        "perspective"
      ],
      "scale": "metric",
      "scaleNote": "Metric after canonical focal rescale; raw canonical output not directly meters without conversion",
      "aliases": [
        "Metric3D",
        "Metric3Dv2"
      ],
      "metricStatus": "metric_learned",
      "depthType": "z",
      "outputs": [
        "z"
      ],
      "pose": false,
      "inputSummary": "single RGB plus calibrated focal/intrinsics for metric conversion",
      "outputSummary": "Metric Z depth; normal 3channels plus confidence channel in predicted normal tensor where model supports it",
      "inputs": {
        "frames": "single RGB plus calibrated focal/intrinsics for metric conversion",
        "projection": "Pinhole canonical camera; do not equate thousands of camera intrinsics with fisheye/ERP native support",
        "intrinsics": "Required for reliable metric focal correction",
        "resolution": "Model-specific resize/pad; update K to processed image",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "Metric Z depth; normal 3channels plus confidence channel in predicted normal tensor where model supports it",
        "point_map": "Derived via K",
        "normal": "Yes joint depth-normal model",
        "confidence": "Normal confidence where exposed; depth uncertainty Unknown",
        "camera_parameters": "Does not recover camera pose",
        "depth_convention": "Pinhole camera optical Z after canonical focal undoing; Euclidean range=Z*norm(K^-1p)",
        "metric_status": "metric_learned",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/YvanYin/Metric3D",
      "paperUrl": "https://arxiv.org/abs/2404.15506",
      "projectUrl": "https://jugghm.github.io/Metric3Dv2/",
      "weightsUrl": "https://github.com/YvanYin/Metric3D#readme",
      "license": {
        "code": "BSD-2-Clause",
        "weights": "Separate terms Unknown; official README requests commercial inquiries"
      },
      "evidence": [
        "Official repository inference usage/license and paper method synopsis; detailed benchmark/ablation not audited",
        "https://raw.githubusercontent.com/YvanYin/Metric3D/main/LICENSE",
        "https://arxiv.org/html/2404.15506v1 (Method III and Applications IV-B inspected)",
        "https://arxiv.org/abs/2404.15506",
        "https://jugghm.github.io/Metric3Dv2/",
        "https://github.com/YvanYin/Metric3D"
      ],
      "notes": [
        "Good metric+normal perspective control",
        "Using on tangent views needs correct virtual focal and conversion",
        "No pose; a normal map can supply plane constraints only after correspondence/modeling",
        "Paper IV-B/TableVII-VIII tests DROID plus predicted metric depth: translation drift improves but KITTI seq00 rotational drift worsens 0.29 to 0.37 deg/100m; not a wrist-accuracy guarantee"
      ],
      "tags": [
        "monocular",
        "metric",
        "normal",
        "perspective"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "hubconf.py",
        "mono/model/monodepth_model.py",
        "test_vit.sh",
        "mono/utils/do_test.py"
      ],
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown"
    },
    {
      "id": "bifuse_pp",
      "collection": "depth",
      "name": "BiFuse++",
      "title": "BiFuse++: Self-Supervised and Efficient Bi-Projection Fusion for 360° Depth Estimation",
      "year": 2023,
      "firstYear": 2022,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "TPAMI2023 vol45(5)5448–5460; DOI10.1109/TPAMI.2022.3203516",
      "authors": [
        "Fu-En Wang",
        "Yu-Hsuan Yeh",
        "Yi-Hsuan Tsai",
        "Wei-Chen Chiu",
        "Min Sun"
      ],
      "institutions": [
        "National Tsing Hua University",
        "National Yang Ming Chiao Tung University",
        "Phiar Technologies"
      ],
      "summary": "融合 ERP 与 cubemap 表征，包含监督与自监督方案；不同训练配置的尺度来源应分别记录。",
      "cameras": [
        "panoramic"
      ],
      "scale": "mixed",
      "scaleNote": "Supervised checkpoint dataset scale; self-supervised monocular scale ambiguous absent known motion",
      "aliases": [],
      "metricStatus": "mixed_checkpoints",
      "depthType": "unknown",
      "outputs": [
        "unknown"
      ],
      "pose": false,
      "inputSummary": "Single ERP at depth inference; neighboring video frames and pose/reprojection in self-supervised training",
      "outputSummary": "Single ERP depth map; different supervised/self-supervised modes",
      "inputs": {
        "frames": "Single ERP at depth inference; neighboring video frames and pose/reprojection in self-supervised training",
        "projection": "ERP+virtual cubemap",
        "intrinsics": "Implicit spherical geometry; no pinhole K for standardERP",
        "resolution": "Checkpoint/config-specific Unknown",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "Single ERP depth map; different supervised/self-supervised modes",
        "point_map": "Not verified direct output",
        "normal": "Unknown",
        "confidence": "Unknown",
        "camera_parameters": "Training pose network not verified as released continuous pose inference",
        "depth_convention": "Radial vs Z decoder/warper convention not audited: Unknown",
        "metric_status": "mixed_checkpoints",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/fuenwang/BiFusev2",
      "paperUrl": "https://arxiv.org/abs/2209.02952",
      "projectUrl": "https://github.com/fuenwang/BiFusev2",
      "weightsUrl": "https://github.com/fuenwang/BiFusev2#inference",
      "license": {
        "code": "MIT",
        "weights": "README says code/models MIT; download terms not separately inspected"
      },
      "evidence": [
        "Original arXiv metadata and official README/license/pretrained inference reviewed; detailed Method source not audited",
        "https://arxiv.org/pdf/2209.02952 (paper Fig1 confirms 3-frame PoseNet during training)",
        "https://arxiv.org/abs/2209.02952",
        "https://github.com/fuenwang/BiFusev2"
      ],
      "notes": [
        "Compare supervised vs self-supervised modes explicitly",
        "Training ego-motion is not evidence of deployable SLAM trajectory"
      ],
      "tags": [
        "monocular",
        "ERP-and-cubemap",
        "self-supervised-video-training"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "run_inference.py --mode supervised/selfsupervised",
        "BasePhotometric.py"
      ],
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown"
    },
    {
      "id": "hrdfuse",
      "collection": "depth",
      "name": "HRDFuse",
      "title": "HRDFuse: Monocular 360° Depth Estimation by Collaboratively Learning Holistic-with-Regional Depth Distributions",
      "year": 2023,
      "firstYear": 2023,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2023",
      "authors": [
        "Hao Ai",
        "Zidong Cao",
        "Yan-Pei Cao",
        "Ying Shan",
        "Lin Wang"
      ],
      "institutions": [
        "Unknown"
      ],
      "summary": "同时学习ERP全局和切平面局部的深度分布，代表全景双投影融合路线；官方代码已公开，任务权重仍待核实。",
      "cameras": [
        "panoramic"
      ],
      "scale": "mixed",
      "scaleNote": "Supervised indoor dataset scale; units/convention require source audit before geometry integration.",
      "aliases": [],
      "metricStatus": "dataset_scale_only",
      "depthType": "unknown",
      "outputs": [
        "depth_unknown_convention"
      ],
      "pose": false,
      "inputSummary": "single ERP RGB plus derived tangent patches",
      "outputSummary": "ERP depth map",
      "inputs": {
        "frames": "single ERP RGB plus derived tangent patches",
        "projection": "ERP + tangent projection",
        "intrinsics": "Standard ERP geometry; raw fisheye must be calibrated and reprojected",
        "resolution": "Paper tests tangent patch sizes 128×128 and 256×256",
        "extrinsics": "Not required for single panorama",
        "imu": "No",
        "gravity": "No measured gravity required; gravity-alignment assumptions not audited",
        "synchronization": "Single panorama; real multi-camera stitching synchronization remains a system concern"
      },
      "outputDetails": {
        "primary": "ERP depth map",
        "point_map": "Derived geometry only; no direct point-map head verified",
        "normal": "No verified direct head",
        "confidence": "Unknown",
        "camera_parameters": "No",
        "depth_convention": "Unknown: radial range versus optical-axis Z not verified from original decoder/dataloader.",
        "metric_status": "dataset_scale_only",
        "pose_output": "No online SLAM trajectory output verified",
        "runtime": "Unknown: no comparable timing or memory measurement executed locally."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/haoai-1997/HRDFuse",
      "paperUrl": "https://arxiv.org/abs/2303.11616",
      "projectUrl": "https://github.com/haoai-1997/HRDFuse",
      "weightsUrl": "",
      "license": {
        "code": "MIT",
        "weights": "Unknown; public README is minimal and no task-specific pretrained download was verified"
      },
      "evidence": [
        "https://arxiv.org/abs/2303.11616",
        "https://openaccess.thecvf.com/content/CVPR2023/papers/Ai_HRDFuse_Monocular_360deg_Depth_Estimation_by_Collaboratively_Learning_Holistic-With-Regional_Depth_CVPR_2023_paper.pdf",
        "https://github.com/haoai-1997/HRDFuse",
        "https://haoai-1997.github.io/"
      ],
      "notes": [
        "Repository is linked by the first author's homepage; current README provides almost no reproduction guidance.",
        "Published comparisons use dataset-specific training; do not read them as universal metric transfer.",
        "code_released_weights_unverified"
      ],
      "tags": [
        "monocular",
        "ERP",
        "tangent-views",
        "depth-distribution",
        "depth_unknown_convention"
      ],
      "family": "monocular_depth",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial_paper_and_official_release_metadata",
      "codeEntry": [
        "train_fusion.py",
        "model/"
      ],
      "environment": "Unknown; official requirements must be checked for the selected version."
    },
    {
      "id": "360monodepth",
      "collection": "depth",
      "name": "360MonoDepth",
      "title": "360MonoDepth: High-Resolution 360° Monocular Depth Estimation",
      "year": 2022,
      "firstYear": 2022,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2022",
      "authors": [
        "Manuel Rey-Area",
        "Mingze Yuan",
        "Christian Richardt"
      ],
      "institutions": [
        "University of Bath"
      ],
      "summary": "高分辨率全景经典基线：切成切平面，预测并全局对齐视差，再用Poisson融合；原始MiDaS版本没有米制尺度。",
      "cameras": [
        "panoramic"
      ],
      "scale": "relative",
      "scaleNote": "Original MiDaS pipeline is affine-ambiguous inverse depth. Cross-patch alignment removes patch disagreement without recovering metric scale.",
      "aliases": [],
      "metricStatus": "scale_shift_invariant",
      "depthType": "inverse",
      "outputs": [
        "inverse_radial_range",
        "relative_depth"
      ],
      "pose": false,
      "inputSummary": "single ERP RGB",
      "outputSummary": "ERP spherical disparity (inverse radial range) and relative depth derived from it",
      "inputs": {
        "frames": "single ERP RGB",
        "projection": "ERP → overlapping icosahedron tangent perspective images",
        "intrinsics": "Standard ERP geometry; raw fisheye must be calibrated and reprojected",
        "resolution": "Paper evaluates 1024×2048 ERP; supports high-resolution decomposition",
        "extrinsics": "Not required for single panorama",
        "imu": "No",
        "gravity": "No measured gravity required; gravity-alignment assumptions not audited",
        "synchronization": "Single panorama; real multi-camera stitching synchronization remains a system concern"
      },
      "outputDetails": {
        "primary": "ERP spherical disparity (inverse radial range) and relative depth derived from it",
        "point_map": "Derived geometry only; no direct point-map head verified",
        "normal": "No verified direct head",
        "confidence": "Unknown",
        "camera_parameters": "No",
        "depth_convention": "Paper §3.2 explicitly defines spherical disparity as inverse radial Euclidean distance; predictions retain affine ambiguity in disparity.",
        "metric_status": "scale_shift_invariant",
        "pose_output": "No online SLAM trajectory output verified",
        "runtime": "Unknown: no comparable timing or memory measurement executed locally."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/manurare/360monodepth",
      "paperUrl": "https://arxiv.org/abs/2111.15669",
      "projectUrl": "https://manurare.github.io/360monodepth/",
      "weightsUrl": "",
      "license": {
        "code": "MIT",
        "weights": "Uses separately licensed upstream MiDaS / BoostingMonocularDepth weights; no native trained checkpoint required"
      },
      "evidence": [
        "https://arxiv.org/html/2111.15669",
        "https://github.com/manurare/360monodepth",
        "https://raw.githubusercontent.com/manurare/360monodepth/main/code/python/src/main.py",
        "https://arxiv.org/abs/2111.15669",
        "https://manurare.github.io/360monodepth/"
      ],
      "notes": [
        "Useful 2K/4K projection-and-stitching reference; several perspective predictions and optimization stages per panorama.",
        "C++ Ceres/Eigen bindings increase installation work. Replacing the backbone changes the experiment and does not by itself remove disparity ambiguity.",
        "code_released_uses_upstream_weights"
      ],
      "tags": [
        "monocular",
        "ERP",
        "tangent-views",
        "training-free",
        "relative",
        "inverse_radial_range",
        "relative_depth"
      ],
      "family": "monocular_depth",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial_paper_and_official_release_metadata",
      "codeEntry": [
        "code/python/src/main.py",
        "code/cpp/"
      ],
      "environment": "Official setup: Python ≥3.8 plus C++ Ceres/Eigen/OpenCV/pybind11; Docker recommended."
    },
    {
      "id": "mode",
      "collection": "depth",
      "name": "MODE",
      "title": "MODE: Multi-view Omnidirectional Depth Estimation with 360° Cameras",
      "year": 2022,
      "firstYear": 2022,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ECCV 2022",
      "authors": [
        "Ming Li",
        "Xueqian Jin",
        "Xuejiao Hu",
        "Jingzhao Dai",
        "Sidan Du",
        "Yang Li"
      ],
      "institutions": [
        "Unknown"
      ],
      "summary": "四台360相机、多组真实立体基线：Cassini域匹配后融合深度；尺度来自已知基线，区别于单全景的多投影视图。",
      "cameras": [
        "panoramic",
        "multi"
      ],
      "scale": "metric",
      "scaleNote": "Metric geometry follows calibrated physical baseline units; learned matching errors and calibration errors remain.",
      "aliases": [],
      "metricStatus": "metric_stereo_baseline",
      "depthType": "range",
      "outputs": [
        "radial_range",
        "disparity",
        "confidence"
      ],
      "pose": false,
      "inputSummary": "Multiple synchronized 360° cameras; paper uses four cameras on a square rig and six stereo pairs",
      "outputSummary": "Stereo disparity/confidence maps and fused omnidirectional depth",
      "inputs": {
        "frames": "Multiple synchronized 360° cameras; paper uses four cameras on a square rig and six stereo pairs",
        "projection": "Rectified Cassini/spherical panoramas for stereo matching",
        "intrinsics": "Known omnidirectional projection and calibrated stereo geometry",
        "resolution": "Unknown; checkpoint/config dependent",
        "extrinsics": "Required known camera baseline/relative poses",
        "imu": "No",
        "gravity": "No measured gravity required; gravity-alignment assumptions not audited",
        "synchronization": "Required across physical cameras for dynamic scenes"
      },
      "outputDetails": {
        "primary": "Stereo disparity/confidence maps and fused omnidirectional depth",
        "point_map": "Derived geometry only; no direct point-map head verified",
        "normal": "No verified direct head",
        "confidence": "Stereo-stage confidence maps; not calibrated physical uncertainty",
        "camera_parameters": "No",
        "depth_convention": "Paper §3.1 defines rho as Euclidean camera-center-to-point range, with stereo conversion proportional to known baseline B.",
        "metric_status": "metric_stereo_baseline",
        "pose_output": "No online SLAM trajectory output verified",
        "runtime": "Unknown: no comparable timing or memory measurement executed locally."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/nju-ee/MODE-2022",
      "paperUrl": "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf",
      "projectUrl": "https://github.com/nju-ee/MODE-2022",
      "weightsUrl": "https://github.com/nju-ee/MODE-2022#pretrained-models",
      "license": {
        "code": "BSD-3-Clause",
        "weights": "README links ModeDisparity / ModeFusion / ModeFusion_soiled; separate terms Unknown"
      },
      "evidence": [
        "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf",
        "https://github.com/nju-ee/MODE-2022",
        "https://raw.githubusercontent.com/nju-ee/MODE-2022/main/README.md"
      ],
      "notes": [
        "Physical multi-camera acquisition and calibration required; not drop-in monocular inference.",
        "Legacy spherical convolution requires custom compilation.",
        "code_and_checkpoint_links"
      ],
      "tags": [
        "multi-view",
        "panoramic-stereo",
        "Cassini",
        "depth-fusion",
        "radial_range",
        "disparity",
        "confidence"
      ],
      "family": "multi_view_stereo",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial_paper_and_official_release_metadata",
      "codeEntry": [
        "test_disparity.py",
        "save_output_disparity_stage.py",
        "test_fusion.py",
        "models/basic/spherical_conv/"
      ],
      "environment": "Official PyTorch ≥1.5.0, gcc/g++ ≤7.5.0 for spherical convolution."
    },
    {
      "id": "omnifusion",
      "collection": "depth",
      "name": "OmniFusion",
      "title": "OmniFusion: 360 Monocular Depth Estimation via Geometry-Aware Fusion",
      "year": 2022,
      "firstYear": 2022,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2022 Oral",
      "authors": [
        "Yuyan Li",
        "Yuliang Guo",
        "Zhixin Yan",
        "Xinyu Huang",
        "Ye Duan",
        "Liu Ren"
      ],
      "institutions": [
        "Unknown"
      ],
      "summary": "以切平面减轻ERP畸变，并融合球面几何和全局上下文；适合研究局部视图融合与全景接缝。",
      "cameras": [
        "panoramic"
      ],
      "scale": "mixed",
      "scaleNote": "Supervised dataset depth scale; broad zero-shot metric transfer is not established by the official release.",
      "aliases": [],
      "metricStatus": "dataset_scale_only",
      "depthType": "unknown",
      "outputs": [
        "depth_unknown_convention"
      ],
      "pose": false,
      "inputSummary": "single ERP RGB with derived tangent images",
      "outputSummary": "Fused ERP depth; official evaluation can save point clouds",
      "inputs": {
        "frames": "single ERP RGB with derived tangent images",
        "projection": "ERP → multiple perspective tangent patches",
        "intrinsics": "Standard ERP geometry; raw fisheye must be calibrated and reprojected",
        "resolution": "Paper: 512×1024 on Matterport3D/Stanford2D3D; 256×512 on 360D",
        "extrinsics": "Not required for single panorama",
        "imu": "No",
        "gravity": "No measured gravity required; gravity-alignment assumptions not audited",
        "synchronization": "Single panorama; real multi-camera stitching synchronization remains a system concern"
      },
      "outputDetails": {
        "primary": "Fused ERP depth; official evaluation can save point clouds",
        "point_map": "Derived geometry only; no direct point-map head verified",
        "normal": "No verified direct head",
        "confidence": "Unknown",
        "camera_parameters": "No",
        "depth_convention": "Unknown: radial range versus optical-axis Z not verified from original decoder/dataloader.",
        "metric_status": "dataset_scale_only",
        "pose_output": "No online SLAM trajectory output verified",
        "runtime": "Unknown: no comparable timing or memory measurement executed locally."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/yuliangguo/OmniFusion",
      "paperUrl": "https://arxiv.org/abs/2203.00838",
      "projectUrl": "https://github.com/yuliangguo/OmniFusion",
      "weightsUrl": "https://github.com/yuliangguo/OmniFusion#pre-trained-models",
      "license": {
        "code": "MIT",
        "weights": "Official README links pretrained evaluation models; separate weight terms Unknown"
      },
      "evidence": [
        "https://arxiv.org/abs/2203.00838",
        "https://openaccess.thecvf.com/content/CVPR2022/papers/Li_OmniFusion_360_Monocular_Depth_Estimation_via_Geometry-Aware_Fusion_CVPR_2022_paper.pdf",
        "https://github.com/yuliangguo/OmniFusion"
      ],
      "notes": [
        "Pretrained availability is model/dataset specific; the official repository provides a pretrained section.",
        "Tangent patches share one camera center and are not a stereo baseline.",
        "code_and_checkpoint_links"
      ],
      "tags": [
        "monocular",
        "ERP",
        "tangent-views",
        "geometry-aware-fusion",
        "depth_unknown_convention"
      ],
      "family": "monocular_depth",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial_paper_and_official_release_metadata",
      "codeEntry": [
        "test.py",
        "network_test.py",
        "train_erp_depth.py",
        "train_erp_depth_iterative.py"
      ],
      "environment": "Official tested Python 3.7.4, PyTorch 1.9.0, CUDA 11.6."
    },
    {
      "id": "panoformer",
      "collection": "depth",
      "name": "PanoFormer",
      "title": "PanoFormer: Panorama Transformer for Indoor 360° Depth Estimation",
      "year": 2022,
      "firstYear": 2022,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ECCV2022",
      "authors": [
        "Zhijie Shen",
        "Chunyu Lin",
        "Kang Liao",
        "Lang Nie",
        "Zishuo Zheng",
        "Yao Zhao"
      ],
      "institutions": [
        "Beijing Jiaotong University",
        "Max Planck Institute for Informatics"
      ],
      "summary": "在球面切平面上构造 token 的室内全景 Transformer；数据集监督精度不代表开放域公制保证。",
      "cameras": [
        "panoramic"
      ],
      "scale": "mixed",
      "scaleNote": "Supervised indoor depth dataset scale; zero-shot metric generalization not established",
      "aliases": [],
      "metricStatus": "dataset_scale_only",
      "depthType": "unknown",
      "outputs": [
        "unknown"
      ],
      "pose": false,
      "inputSummary": "single ERP RGB",
      "outputSummary": "ERP depth map H×W",
      "inputs": {
        "frames": "single ERP RGB",
        "projection": "ERP with tangent-domain patch sampling",
        "intrinsics": "Standard ERP geometry; no pinhole K",
        "resolution": "Model/data specific, commonly512×1024; exact inference config to verify",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "ERP depth map H×W",
        "point_map": "No direct verified output",
        "normal": "Unknown",
        "confidence": "Unknown",
        "camera_parameters": "No",
        "depth_convention": "Radial vs Z not source-verified in this audit: Unknown",
        "metric_status": "dataset_scale_only",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/zhijieshen-bjtu/PanoFormer",
      "paperUrl": "https://arxiv.org/abs/2203.09283",
      "projectUrl": "https://github.com/zhijieshen-bjtu/PanoFormer",
      "weightsUrl": "https://github.com/zhijieshen-bjtu/PanoFormer#to-start",
      "license": {
        "code": "License SPDX Unknown in this audit",
        "weights": "Official pretrained links existence to inspect; separate terms Unknown"
      },
      "evidence": [
        "ECCV official paper first page/Method introduction and official repository inspected; ablations and code path incomplete",
        "https://arxiv.org/abs/2203.09283",
        "https://github.com/zhijieshen-bjtu/PanoFormer"
      ],
      "notes": [
        "Useful geometry-aware transformer historical baseline",
        "Do not cite uninspected predicted units as meters"
      ],
      "tags": [
        "monocular",
        "ERP",
        "indoor-baseline"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_or_L3_code_as_specified",
      "codeEntry": [
        "README.md",
        "networks/; exact inference function Unknown"
      ],
      "environment": "Official PyTorch1.7.1 Python3.8 CUDA10.1 RTX3090"
    },
    {
      "id": "unifuse",
      "collection": "depth",
      "name": "UniFuse",
      "title": "UniFuse: Unidirectional Fusion for 360° Panorama Depth Estimation",
      "year": 2021,
      "firstYear": 2021,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "IEEE RA-L + ICRA2021",
      "authors": [
        "Hualie Jiang",
        "Zhe Sheng",
        "Siyu Zhu",
        "Zilong Dong",
        "Rui Huang"
      ],
      "institutions": [
        "Shenzhen Institute of Artificial Intelligence and Robotics for Society",
        "The Chinese University of Hong Kong, Shenzhen",
        "Alibaba Cloud A.I. Lab"
      ],
      "summary": "用同一张全景的 ERP 与 cubemap 特征单向融合；这是双投影，不是增加一个真实立体相机。",
      "cameras": [
        "panoramic"
      ],
      "scale": "mixed",
      "scaleNote": "Supervised depth in dataset conventions; no justified open-world metric guarantee",
      "aliases": [],
      "metricStatus": "dataset_scale_only",
      "depthType": "unknown",
      "outputs": [
        "unknown"
      ],
      "pose": false,
      "inputSummary": "single ERP RGB plus cubemap deterministically derived from same image",
      "outputSummary": "ERP-aligned depth B×1×H×W; supervised checkpoint tied to dataset metric/range",
      "inputs": {
        "frames": "single ERP RGB plus cubemap deterministically derived from same image",
        "projection": "ERP+six virtual perspective cubemap faces; not six independent sensors",
        "intrinsics": "Implicit cubemap/ERP geometry, no physical K",
        "resolution": "512×1024 standard",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity required by public interface; training orientation prior may remain",
        "synchronization": "Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics"
      },
      "outputDetails": {
        "primary": "ERP-aligned depth B×1×H×W; supervised checkpoint tied to dataset metric/range",
        "point_map": "Not verified direct output",
        "normal": "No verified head",
        "confidence": "No verified head",
        "camera_parameters": "No",
        "depth_convention": "Radial vs Z not verified from original decoder/dataloader in this audit: Unknown; must inspect before comparing geometry",
        "metric_status": "dataset_scale_only",
        "pose_output": "No released depth inference camera-pose output verified; depth map alone is not a trajectory",
        "runtime": "Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/alibaba/UniFuse-Unidirectional-Fusion",
      "paperUrl": "https://arxiv.org/abs/2102.03550",
      "projectUrl": "https://github.com/alibaba/UniFuse-Unidirectional-Fusion",
      "weightsUrl": "https://github.com/alibaba/UniFuse-Unidirectional-Fusion#pre-trained-models",
      "license": {
        "code": "MIT (official LICENSE inspected)",
        "weights": "Unknown"
      },
      "evidence": [
        "Original paper abstract and official repository training/evaluation instructions; full source convention not audited",
        "https://arxiv.org/pdf/2102.03550",
        "https://raw.githubusercontent.com/alibaba/UniFuse-Unidirectional-Fusion/main/LICENSE",
        "https://arxiv.org/abs/2102.03550",
        "https://github.com/alibaba/UniFuse-Unidirectional-Fusion"
      ],
      "notes": [
        "Domain baseline, lower priority than foundation models for open-world",
        "One scene image in two projections is no stereo baseline"
      ],
      "tags": [
        "monocular",
        "ERP-and-cubemap",
        "in-domain-baseline"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial",
      "codeEntry": [
        "UniFuse/evaluate.py",
        "UniFuse/networks/",
        "PretrainedModels/"
      ],
      "environment": "Official legacyPython3.6 torch>=1.0 CUDA>=9; modern compatibility not tested"
    },
    {
      "id": "odgsslam2026",
      "collection": "slam",
      "name": "ODGS-SLAM",
      "title": "ODGS-SLAM: Omnidirectional Gaussian Splatting SLAM",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2026, pp. 26114-26123",
      "authors": "Stefan Spiss; Joey Hieronimy; Marcel Ritter; Matthias Harders",
      "institutions": "Unknown",
      "summary": "2026年原生ERP高斯SLAM，同时处理跟踪和建图，提供官方代码与专门数据集。",
      "cameras": [
        "panoramic"
      ],
      "scale": "mixed",
      "scaleNote": "RGB mono scale ambiguous; metric RGB-D supplies scale",
      "aliases": [
        "3DGS"
      ],
      "metricStatus": "conditional metric: RGB-D metric; RGB up to scale",
      "depthType": "unknown",
      "outputs": [
        "unknown",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Equirectangular RGB or RGB-D panoramic sequence",
      "outputSummary": "Camera trajectory and renderable 3D Gaussian map",
      "inputs": {
        "requirements": "Equirectangular RGB or RGB-D panoramic sequence",
        "imu": false
      },
      "outputDetails": {
        "primary": "Camera trajectory and renderable 3D Gaussian map",
        "depth_convention": "ERP ray depth/range must match rasterizer; exact dataset export/scaling needs implementation check",
        "metric_status": "conditional metric: RGB-D metric; RGB up to scale",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/odgs-slam/odgs-slam",
      "paperUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Spiss_ODGS-SLAM_Omnidirectional_Gaussian_Splatting_SLAM_CVPR_2026_paper.html",
      "projectUrl": "https://odgs-slam.github.io/",
      "weightsUrl": "",
      "license": "Non-commercial academic research only; Imperial MonoGS LICENSE.md applies",
      "evidence": [
        "Official CVF/project confirm CVPR 2026; README explicitly accepts ERP RGB/RGB-D and academic-only license.",
        "https://openaccess.thecvf.com/content/CVPR2026/html/Spiss_ODGS-SLAM_Omnidirectional_Gaussian_Splatting_SLAM_CVPR_2026_paper.html",
        "https://odgs-slam.github.io/",
        "https://github.com/odgs-slam/odgs-slam"
      ],
      "notes": [
        "Do not infer global loops or fast-motion robustness from rendering. ERP stitching and RGB-D conventions require checks.",
        "Official source, dataset and CVPR paper available"
      ],
      "tags": [],
      "family": "panoramic Gaussian SLAM",
      "imu": false,
      "loopClosure": "Unknown",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "CUDA omnidirectional rasterizer; graph-based keyframe removal reduces memory; no local benchmark."
    },
    {
      "id": "p2uslam2026",
      "collection": "slam",
      "name": "P2U-SLAM",
      "title": "P2U-SLAM: A Monocular Wide-FoV SLAM System Based on Point Uncertainty and Pose Uncertainty",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "Accepted IEEE T-ITS per arXiv v2 Jan 2026; v1 Sep 2024",
      "authors": "Yufan Zhang; Kailun Yang; Ze Wang; Kaiwei Wang",
      "institutions": "Unknown",
      "summary": "建模历史路标和关键帧协方差，改善宽视场长时重复观测弱约束；完整代码未发布。",
      "cameras": [
        "fisheye",
        "wide"
      ],
      "scale": "relative",
      "scaleNote": "Monocular visual scale ambiguous; no IMU in proposed method",
      "aliases": [],
      "metricStatus": "up to scale",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Monocular PAL/Taylor or Kannala-Brandt fisheye sequence",
      "outputSummary": "Trajectory, sparse map, covariance-aware tracking/local BA and loop/map reuse",
      "inputs": {
        "requirements": "Monocular PAL/Taylor or Kannala-Brandt fisheye sequence",
        "imu": false
      },
      "outputDetails": {
        "primary": "Trajectory, sparse map, covariance-aware tracking/local BA and loop/map reuse",
        "depth_convention": "Sparse 3D landmarks and unit bearings; no dense predictor",
        "metric_status": "up to scale",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "none",
      "codeUrl": "https://github.com/BambValley/P2U-SLAM",
      "paperUrl": "https://arxiv.org/abs/2409.10143",
      "projectUrl": "https://github.com/BambValley/P2U-SLAM",
      "weightsUrl": "",
      "license": "Unknown: no full source/license verified",
      "evidence": [
        "arXiv v2 confirms T-ITS acceptance; III explicitly Taylor/KB models; official repository tree lacks implementation.",
        "https://arxiv.org/abs/2409.10143",
        "https://github.com/BambValley/P2U-SLAM"
      ],
      "notes": [
        "Official repo contains README/figures only. Taylor/KB support is not native ERP.",
        "Accepted paper; official repository documentation/figures only"
      ],
      "tags": [],
      "family": "uncertainty-aware wide-FoV feature SLAM",
      "imu": false,
      "loopClosure": true,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "CPU feature-based architecture; full source unavailable for profiling."
    },
    {
      "id": "panoair2026",
      "collection": "slam",
      "name": "PanoAir",
      "title": "PanoAir: A Panoramic Visual-Inertial SLAM with Cross-Time Real-World UAV Dataset",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "arXiv preprint 2604.00852 (1 Apr 2026)",
      "authors": "Yiyang Wu; Xiaohu Zhang; Yanjin Du; Tongsu Zhang; Chujun Li; Siyang Chen; Guoyi Zhang; Xiangpeng Xu",
      "institutions": "Unknown",
      "summary": "2026年原生ERP视觉惯性SLAM，结合混合特征与全景回环，提供跨时段无人机数据集线索。",
      "cameras": [
        "panoramic"
      ],
      "scale": "metric",
      "scaleNote": "Metric via observable IMU fusion",
      "aliases": [],
      "metricStatus": "metric via inertial fusion",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Full ERP frames plus synchronized IMU; camera-IMU transform and timing calibration",
      "outputSummary": "Visual-inertial state, sparse map and panoramic loop-closed trajectory",
      "inputs": {
        "requirements": "Full ERP frames plus synchronized IMU; camera-IMU transform and timing calibration",
        "imu": true
      },
      "outputDetails": {
        "primary": "Visual-inertial state, sparse map and panoramic loop-closed trajectory",
        "depth_convention": "Sparse spherical landmarks; no dense depth predictor",
        "metric_status": "metric via inertial fusion",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "unverified",
      "codeUrl": "https://drive.google.com/file/d/1lG1Upn6yi-N6tYpEHAt6dfR1uhzNtWbT/view",
      "paperUrl": "https://arxiv.org/abs/2604.00852",
      "projectUrl": "https://arxiv.org/html/2604.00852v1",
      "weightsUrl": "",
      "license": "Unknown: author-linked archive not unpacked/inspected",
      "evidence": [
        "IV model is ERP; abstract links release; V-C specifies embedded 10Hz setting.",
        "https://arxiv.org/abs/2604.00852",
        "https://arxiv.org/html/2604.00852v1",
        "https://drive.google.com/file/d/1lG1Upn6yi-N6tYpEHAt6dfR1uhzNtWbT/view"
      ],
      "notes": [
        "Drive release is advertised but archive/code/license/checkpoint completeness not audited. UAV evidence is not wrist precision validation.",
        "Authors advertise source+dataset on Drive; archive not executed/audited"
      ],
      "tags": [],
      "family": "panoramic hybrid-feature visual-inertial SLAM",
      "imu": true,
      "loopClosure": true,
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "Paper: C++/ONNX; Jetson Orin NX TensorRT 10Hz with stride 3; no local result."
    },
    {
      "id": "panogsslam2026",
      "collection": "slam",
      "name": "PanoGS-SLAM",
      "title": "PanoGS-SLAM: Panoramic 3D Gaussian Splatting SLAM",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "arXiv preprint 2609.17387 (15 Sep 2026)",
      "authors": "Yongqi Mao; Hao Shi; Yufan Zhang; Zhonghua Yi; Xiangfei Guo; Kaiwei Wang",
      "institutions": "Unknown",
      "summary": "2026年9月：球面面积加权光度损失、等面积采样与深度引导高斯初始化；尺度和代码状态需保留限定。",
      "cameras": [
        "panoramic"
      ],
      "scale": "relative",
      "scaleNote": "Paper aligns trajectories to account for scale ambiguity; learned initialization does not prove absolute metric scale",
      "aliases": [
        "3DGS"
      ],
      "metricStatus": "up to scale; learned prior does not certify absolute metric trajectory",
      "depthType": "unknown",
      "outputs": [
        "unknown",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Monocular ERP sequence; pretrained panoramic depth (BiFuse citation) initializes map",
      "outputSummary": "Camera poses and Gaussian map",
      "inputs": {
        "requirements": "Monocular ERP sequence; pretrained panoramic depth (BiFuse citation) initializes map",
        "imu": false
      },
      "outputDetails": {
        "primary": "Camera poses and Gaussian map",
        "depth_convention": "Spherical/ERP geometry; initial depth export/normalization unverified without code",
        "metric_status": "up to scale; learned prior does not certify absolute metric trajectory",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "none",
      "codeUrl": "",
      "paperUrl": "https://arxiv.org/abs/2609.17387",
      "projectUrl": "https://arxiv.org/html/2609.17387v1",
      "weightsUrl": "",
      "license": "Unknown",
      "evidence": [
        "Method uses native ERP; IV-A aligns trajectories for scale ambiguity; abstract promises future source.",
        "https://arxiv.org/abs/2609.17387",
        "https://arxiv.org/html/2609.17387v1"
      ],
      "notes": [
        "Preprint with future code promise; no explicit loop closure established. Resampled sensing FoV and ATE alignment affect comparisons.",
        "Paper available; source will be made public per authors"
      ],
      "tags": [],
      "family": "panoramic Gaussian SLAM",
      "imu": false,
      "loopClosure": "Unknown",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "Paper RTX 4090; runtime not locally reproduced."
    },
    {
      "id": "mast3rslam2025",
      "collection": "slam",
      "name": "MASt3R-SLAM",
      "title": "MASt3R-SLAM: Real-Time Dense SLAM with 3D Reconstruction Priors",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2025; arXiv v1 2024",
      "authors": "Riku Murai; Eric Dexheimer; Andrew J. Davison",
      "institutions": "Imperial College London",
      "summary": "利用配对3D点图进行稠密SLAM，支持可选标定与回环；绝对尺度仍须单独验证。",
      "cameras": [
        "perspective"
      ],
      "scale": "relative",
      "scaleNote": "Sim(3) optimization explicitly handles inter-pair scale inconsistency; paper trajectory evaluation uses scaled alignment; metric checkpoint is not a global metric guarantee",
      "aliases": [],
      "metricStatus": "scale ambiguous / Sim(3)",
      "depthType": "points",
      "outputs": [
        "points",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Monocular RGB sequence; optional calibration; generic central camera assumption; learned prior originally trained on pinhole images",
      "outputSummary": "Pair pointmaps HxWx3; confidences/matching features internally; continuous poses, dense map, loop closure/relocalization",
      "inputs": {
        "requirements": "Monocular RGB sequence; optional calibration; generic central camera assumption; learned prior originally trained on pinhole images",
        "imu": false
      },
      "outputDetails": {
        "primary": "Pair pointmaps HxWx3; confidences/matching features internally; continuous poses, dense map, loop closure/relocalization",
        "depth_convention": "3D camera-frame pointmaps; normalized point vectors define rays; not just optical-axis Z-depth",
        "metric_status": "scale ambiguous / Sim(3)",
        "pose_output": "Yes: SLAM back-end, not raw pointmap alone",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/rmurai0610/MASt3R-SLAM",
      "paperUrl": "https://arxiv.org/pdf/2412.12392",
      "projectUrl": "https://edexheim.github.io/mast3r-slam/",
      "weightsUrl": "https://download.europe.naverlabs.com/ComputerVision/MASt3R/MASt3R_ViTLarge_BaseDecoder_512_catmlpdpt_metric.pth",
      "license": "CC BY-NC-SA 4.0 code; checkpoints separately subject to naver/mast3r CHECKPOINTS_NOTICE",
      "evidence": [
        "Method 3.1, Components Tables4-7, Limitations5, evaluation alignment and official source/license read; paper ~15FPS RTX4090 long-side512, not local measurement",
        "https://arxiv.org/pdf/2412.12392",
        "https://edexheim.github.io/mast3r-slam/",
        "https://github.com/rmurai0610/MASt3R-SLAM"
      ],
      "notes": [
        "General central-camera formulation is not ready-to-run full-ERP support. Metric checkpoint does not certify absolute trajectory scale.",
        "Official code/backbone model available"
      ],
      "tags": [],
      "family": "foundation-model dense SLAM",
      "imu": false,
      "loopClosure": true,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "CUDA; paper RTX 4090 result is not local measurement."
    },
    {
      "id": "okvis2x2025",
      "collection": "slam",
      "name": "OKVIS2-X",
      "title": "OKVIS2-X: Open Keyframe-Based Visual-Inertial SLAM Configurable With Dense Depth or LiDAR, and GNSS",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "IEEE Transactions on Robotics 41:6064-6083",
      "authors": "Simon Boche; Jaehyung Jung; Sebastián Barbas Laina; Stefan Leutenegger",
      "institutions": "Unknown",
      "summary": "2025年扩展：把VI-SLAM与稠密深度、LiDAR、GNSS组合，输出因果与回环后轨迹。",
      "cameras": [
        "multi",
        "perspective",
        "fisheye"
      ],
      "scale": "metric",
      "scaleNote": "Metric sensor-fusion state constrained by calibrated depth/LiDAR/GNSS configuration",
      "aliases": [],
      "metricStatus": "metric multi-sensor fusion",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated cameras+IMU; optional RGB-D, stereo-network/MVS depth, LiDAR and GNSS",
      "outputSummary": "Causal/final/BA trajectory CSV; volumetric submaps and PLY meshes",
      "inputs": {
        "requirements": "Calibrated cameras+IMU; optional RGB-D, stereo-network/MVS depth, LiDAR and GNSS",
        "imu": true
      },
      "outputDetails": {
        "primary": "Causal/final/BA trajectory CSV; volumetric submaps and PLY meshes",
        "depth_convention": "Metric depth required; reader applies explicit scaling; neural stereo/MVS are configured modules",
        "metric_status": "metric multi-sensor fusion",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/ethz-mrl/OKVIS2-X",
      "paperUrl": "https://arxiv.org/abs/2510.04612",
      "projectUrl": "https://github.com/ethz-mrl/OKVIS2-X",
      "weightsUrl": "https://github.com/ethz-mrl/OKVIS2-X#how-do-i-get-set-up",
      "license": "BSD-3-Clause; model/dependency terms separate",
      "evidence": [
        "Official README provides T-RO citation/DOI, depth-fusion apps, metric scaling and causal/final trajectory files.",
        "https://arxiv.org/abs/2510.04612",
        "https://github.com/ethz-mrl/OKVIS2-X"
      ],
      "notes": [
        "Configured calibrated fusion does not mean arbitrary mono depth can be substituted. ERP loader/model unverified.",
        "Official source and dataset-specific configurations available"
      ],
      "tags": [],
      "family": "multi-sensor visual-inertial dense SLAM",
      "imu": true,
      "loopClosure": true,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "Ubuntu C++/CMake; neural stereo/MVS and dense mapping add compute."
    },
    {
      "id": "panoslam2025",
      "collection": "slam",
      "name": "PanoSLAM (Panoptic)",
      "title": "PanoSLAM: Panoptic 3D Scene Reconstruction via Gaussian SLAM",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "arXiv:2501.00352; submitted 31 Dec 2024; peer-reviewed venue Unknown",
      "authors": "Runnan Chen; Zhaoqing Wang; Jiepeng Wang; Yuexin Ma; Mingming Gong; Wenping Wang; Tongliang Liu",
      "institutions": "Unknown",
      "summary": "名称易混淆：Pano指Panoptic语义与实例分割，输入是RGB-D，不是360度全景相机。",
      "cameras": [
        "perspective"
      ],
      "scale": "metric",
      "scaleNote": "RGB-D provides metric scale",
      "aliases": [
        "3DGS"
      ],
      "metricStatus": "metric from RGB-D",
      "depthType": "unknown",
      "outputs": [
        "unknown",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Sequential perspective RGB-D and 2D panoptic predictions",
      "outputSummary": "Camera tracking, geometric Gaussian map, 3D semantic and instance labels",
      "inputs": {
        "requirements": "Sequential perspective RGB-D and 2D panoptic predictions",
        "imu": false
      },
      "outputDetails": {
        "primary": "Camera tracking, geometric Gaussian map, 3D semantic and instance labels",
        "depth_convention": "Perspective RGB-D; not native ERP range",
        "metric_status": "metric from RGB-D",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "none",
      "codeUrl": "https://github.com/runnanchen/PanoSLAM",
      "paperUrl": "https://arxiv.org/abs/2501.00352",
      "projectUrl": "https://github.com/runnanchen/PanoSLAM",
      "weightsUrl": "",
      "license": "Unknown: official repository README-only",
      "evidence": [
        "Official abstract explicitly specifies sequential RGB-D panoptic reconstruction; repository tree is README-only.",
        "https://arxiv.org/abs/2501.00352",
        "https://github.com/runnanchen/PanoSLAM"
      ],
      "notes": [
        "Pano means panoptic, not panoramic. Official repository contains README only; no full code/license verified.",
        "Paper available; linked official repository README-only"
      ],
      "tags": [],
      "family": "panoptic Gaussian RGB-D SLAM",
      "imu": false,
      "loopClosure": "Unknown",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "Gaussian optimization plus panoptic vision models; runtime unverified."
    },
    {
      "id": "360orbslam2024",
      "collection": "slam",
      "name": "360ORB-SLAM",
      "title": "360ORB-SLAM: A Visual SLAM System for Panoramic Images with Depth Completion Network",
      "year": 2024,
      "firstYear": 2024,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "arXiv preprint 2401.10560; conference metadata not independently verified here",
      "authors": "Yichen Chen; Yuqi Pan (HTML; abstract metadata spells Yiqi); Ruyu Liu; Haoyu Zhang; Guodao Zhang; Bo Sun; Jianhua Zhang",
      "institutions": "Unknown",
      "summary": "全景三角化与深度补全接入ORB式SLAM，直接关联全景深度和定位。",
      "cameras": [
        "panoramic"
      ],
      "scale": "unknown",
      "scaleNote": "Learned completion reduces scale drift in experiments; arbitrary-scene metric scale not guaranteed",
      "aliases": [],
      "metricStatus": "learned scale prior; metric generalization unverified",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Monocular ERP panorama; sparse triangulated depth goes to learned completion",
      "outputSummary": "Trajectory, sparse map, dense completed panoramic depth",
      "inputs": {
        "requirements": "Monocular ERP panorama; sparse triangulated depth goes to learned completion",
        "imu": false
      },
      "outputDetails": {
        "primary": "Trajectory, sparse map, dense completed panoramic depth",
        "depth_convention": "Euclidean range: Eq. (3) backprojects d times a unit spherical ray",
        "metric_status": "learned scale prior; metric generalization unverified",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "unverified",
      "codeUrl": "",
      "paperUrl": "https://arxiv.org/abs/2401.10560",
      "projectUrl": "https://arxiv.org/html/2401.10560v1",
      "weightsUrl": "",
      "license": "Unknown",
      "evidence": [
        "Paper II Eq. (3) defines spherical range; introduction lists tracking/mapping/loop threads.",
        "https://arxiv.org/abs/2401.10560",
        "https://arxiv.org/html/2401.10560v1"
      ],
      "notes": [
        "Complete official code/weights not confirmed; synthetic evidence is not wrist precision validation.",
        "Paper available; complete official code and weights Unknown"
      ],
      "tags": [],
      "family": "panoramic feature / learned completion SLAM",
      "imu": false,
      "loopClosure": true,
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "ORB-SLAM2-style threads plus depth network; CARLA evaluation."
    },
    {
      "id": "dbafusion2024",
      "collection": "slam",
      "name": "DBA-Fusion",
      "title": "DBA-Fusion: Tightly Integrating Deep Dense Visual Bundle Adjustment with Multiple Sensors for Large-Scale Localization and Mapping",
      "year": 2024,
      "firstYear": 2024,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "IEEE Robotics and Automation Letters 2024; official repository label verified",
      "authors": "Yuxuan Zhou; Xingxing Li; Shengyu Li; Xuanbin Wang; Shaoquan Feng; Yuxuan Tan",
      "institutions": "Wuhan University",
      "summary": "把DROID式稠密视觉BA与IMU等传感器紧耦合，是深度/对应与惯性融合的参考。",
      "cameras": [
        "perspective",
        "multi"
      ],
      "scale": "metric",
      "scaleNote": "Metric through IMU; optional GNSS constrains drift/georeference but is not required for VIO-only mode",
      "aliases": [],
      "metricStatus": "metric with inertial initialization",
      "depthType": "inverse",
      "outputs": [
        "inverse",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Images, intrinsics, synchronized IMU and camera-IMU calibration; optional GNSS/wheel speed; stereo/RGB-D support stated by code",
      "outputSummary": "Real-time navigation text; keyframe poses and point clouds in pkl; metric visual-inertial state",
      "inputs": {
        "requirements": "Images, intrinsics, synchronized IMU and camera-IMU calibration; optional GNSS/wheel speed; stereo/RGB-D support stated by code",
        "imu": true
      },
      "outputDetails": {
        "primary": "Real-time navigation text; keyframe poses and point clouds in pkl; metric visual-inertial state",
        "depth_convention": "Dense inverse-depth state in DROID-like pinhole reprojection; not an arbitrary pretrained single-frame depth prior",
        "metric_status": "metric with inertial initialization",
        "pose_output": "Yes",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/GREAT-WHU/DBA-Fusion",
      "paperUrl": "https://arxiv.org/pdf/2403.13714",
      "projectUrl": "https://github.com/GREAT-WHU/DBA-Fusion",
      "weightsUrl": "https://github.com/princeton-vl/DROID-SLAM#demos",
      "license": "GPL-3.0 code; DROID weights and dependencies separately governed",
      "evidence": [
        "Method III and Experiments IV read; Schur Hessian fusion with IMU; TUM-VI uses start/end GT and DROID initial GT scale; inference settings 5Hz around384x512; not executed",
        "https://arxiv.org/pdf/2403.13714",
        "https://github.com/GREAT-WHU/DBA-Fusion"
      ],
      "notes": [
        "Pinhole-like dense reprojection; native ERP and complete global loop closure not established.",
        "Official code available"
      ],
      "tags": [],
      "family": "learned dense multi-sensor VIO",
      "imu": true,
      "loopClosure": "Unknown",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "CUDA/PyTorch plus optimization backend."
    },
    {
      "id": "dpvslam2024",
      "collection": "slam",
      "name": "DPV-SLAM",
      "title": "Deep Patch Visual SLAM",
      "year": 2024,
      "firstYear": 2024,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ECCV 2024",
      "authors": "Lahav Lipson; Zachary Teed; Jia Deng",
      "institutions": "Unknown",
      "summary": "在DPVO上加入两种回环机制，可比较学习型局部VO与完整SLAM。",
      "cameras": [
        "perspective"
      ],
      "scale": "relative",
      "scaleNote": "Monocular visual scale ambiguous",
      "aliases": [],
      "metricStatus": "up to scale",
      "depthType": "unknown",
      "outputs": [
        "unknown",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated monocular pinhole RGB",
      "outputSummary": "Globally corrected trajectory and sparse patch geometry",
      "inputs": {
        "requirements": "Calibrated monocular pinhole RGB",
        "imu": false
      },
      "outputDetails": {
        "primary": "Globally corrected trajectory and sparse patch geometry",
        "depth_convention": "Pinhole patch inverse depth; not dense single-image depth",
        "metric_status": "up to scale",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/princeton-vl/DPVO",
      "paperUrl": "https://arxiv.org/abs/2408.01654",
      "projectUrl": "https://github.com/princeton-vl/DPVO",
      "weightsUrl": "https://github.com/princeton-vl/DPVO#demos",
      "license": "MIT code; model/dependency terms separate",
      "evidence": [
        "ECCV paper and official repository verify two loop mechanisms and shared source release.",
        "https://arxiv.org/abs/2408.01654",
        "https://github.com/princeton-vl/DPVO"
      ],
      "notes": [
        "No native ERP/fisheye verified; speed and memory depend on published configuration.",
        "Official implementation in DPVO repository"
      ],
      "tags": [],
      "family": "learned sparse patch SLAM",
      "imu": false,
      "loopClosure": true,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "Single CUDA GPU; paper reports 5-7GB VRAM configurations, not local measurement."
    },
    {
      "id": "monogs2024",
      "collection": "slam",
      "name": "MonoGS",
      "title": "Gaussian Splatting SLAM",
      "year": 2024,
      "firstYear": 2024,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2024 (Highlight)",
      "authors": "Hidenobu Matsuki; Riku Murai; Paul H. J. Kelly; Andrew J. Davison",
      "institutions": "Unknown",
      "summary": "单目高斯SLAM代表，支持RGB-D和实验性双目；渲染质量不等同快速运动定位。",
      "cameras": [
        "perspective",
        "multi"
      ],
      "scale": "mixed",
      "scaleNote": "Mono up to scale; RGB-D/stereo scale follows calibrated input",
      "aliases": [
        "3DGS"
      ],
      "metricStatus": "conditional metric; mono ambiguous",
      "depthType": "z",
      "outputs": [
        "z",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated mono/RGB-D perspective images; stereo experimental",
      "outputSummary": "Camera poses, dense Gaussian map, rendered RGB/depth",
      "inputs": {
        "requirements": "Calibrated mono/RGB-D perspective images; stereo experimental",
        "imu": false
      },
      "outputDetails": {
        "primary": "Camera poses, dense Gaussian map, rendered RGB/depth",
        "depth_convention": "Pinhole Gaussian renderer; RGB-D uses sensor depth, mono optimizes geometry",
        "metric_status": "conditional metric; mono ambiguous",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/muskie82/MonoGS",
      "paperUrl": "https://arxiv.org/abs/2312.06741",
      "projectUrl": "https://rmurai.co.uk/projects/GaussianSplattingSLAM/",
      "weightsUrl": "",
      "license": "Non-commercial academic research only; Imperial LICENSE.md and dependency notices",
      "evidence": [
        "Official README verifies modes, experimental stereo and initialization cautions; ODGS README verifies inherited academic-only license.",
        "https://arxiv.org/abs/2312.06741",
        "https://rmurai.co.uk/projects/GaussianSplattingSLAM/",
        "https://github.com/muskie82/MonoGS"
      ],
      "notes": [
        "README avoids aggressive motion before initial BA. Local keyframe optimization is not explicit global loop closure; no native ERP.",
        "Official code available; stereo experimental"
      ],
      "tags": [],
      "family": "Gaussian visual SLAM",
      "imu": false,
      "loopClosure": false,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "Authors use RTX 4090; speed-up branch and CUDA rasterizer."
    },
    {
      "id": "splatam2024",
      "collection": "slam",
      "name": "SplaTAM",
      "title": "SplaTAM: Splat, Track & Map 3D Gaussians for Dense RGB-D SLAM",
      "year": 2024,
      "firstYear": 2024,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2024",
      "authors": "Nikhil Keetha; Jay Karhade; Krishna Murthy Jatavallabhula; Gengshan Yang; Sebastian Scherer; Deva Ramanan; Jonathon Luiten",
      "institutions": "Carnegie Mellon University; additional affiliations Unknown in this extraction",
      "summary": "RGB-D跟踪与高斯建图联合优化代表；输入深度提供尺度，替换成单目预测后的可靠性须另测。",
      "cameras": [
        "perspective"
      ],
      "scale": "metric",
      "scaleNote": "Provided by input RGB-D depth",
      "aliases": [
        "3DGS"
      ],
      "metricStatus": "metric from input RGB-D depth",
      "depthType": "z",
      "outputs": [
        "z",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Unposed RGB-D frames; camera intrinsics; physical/synthetic depth rather than assumed monocular learned metric prior",
      "outputSummary": "Camera trajectory; dense 3D Gaussian map; rendered color and depth; exported PLY splats",
      "inputs": {
        "requirements": "Unposed RGB-D frames; camera intrinsics; physical/synthetic depth rather than assumed monocular learned metric prior",
        "imu": false
      },
      "outputDetails": {
        "primary": "Camera trajectory; dense 3D Gaussian map; rendered color and depth; exported PLY splats",
        "depth_convention": "Camera-specific RGB-D depth with explicit dataset scale/intrinsics; renderer expects consistent camera geometry",
        "metric_status": "metric from input RGB-D depth",
        "pose_output": "Yes",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/spla-tam/SplaTAM",
      "paperUrl": "https://spla-tam.github.io/assets/SplaTAM.pdf",
      "projectUrl": "https://spla-tam.github.io/",
      "weightsUrl": "",
      "license": "BSD-3-Clause main code; Gaussian rasterization dependencies separately governed",
      "evidence": [
        "Official paper system definition and repository inspected; RGB-D success cannot be substituted as evidence predicted depth improves VIO; not executed",
        "https://spla-tam.github.io/assets/SplaTAM.pdf",
        "https://spla-tam.github.io/",
        "https://github.com/spla-tam/SplaTAM"
      ],
      "notes": [
        "No native ERP or explicit global loop closure; render quality does not establish fast-motion tracking robustness.",
        "Official code available"
      ],
      "tags": [],
      "family": "RGB-D Gaussian SLAM",
      "imu": false,
      "loopClosure": false,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "PyTorch/CUDA Gaussian rasterizer; scene-dependent optimization."
    },
    {
      "id": "dpvo2023",
      "collection": "slam",
      "name": "DPVO",
      "title": "Deep Patch Visual Odometry",
      "year": 2023,
      "firstYear": 2023,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "NeurIPS 2023; arXiv v1 2022",
      "authors": "Zachary Teed; Lahav Lipson; Jia Deng",
      "institutions": "Unknown",
      "summary": "学习稀疏patch对应与可微BA，提供较轻量的学习型VO对照。",
      "cameras": [
        "perspective"
      ],
      "scale": "relative",
      "scaleNote": "Monocular geometry up to scale",
      "aliases": [],
      "metricStatus": "up to scale",
      "depthType": "unknown",
      "outputs": [
        "unknown",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated monocular RGB with pinhole intrinsics",
      "outputSummary": "6DoF trajectory and sparse patch inverse-depth structure",
      "inputs": {
        "requirements": "Calibrated monocular RGB with pinhole intrinsics",
        "imu": false
      },
      "outputDetails": {
        "primary": "6DoF trajectory and sparse patch inverse-depth structure",
        "depth_convention": "Pinhole inverse depth on tracked patches",
        "metric_status": "up to scale",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/princeton-vl/DPVO",
      "paperUrl": "https://arxiv.org/abs/2208.04726",
      "projectUrl": "https://github.com/princeton-vl/DPVO",
      "weightsUrl": "https://github.com/princeton-vl/DPVO#demos",
      "license": "MIT code; model terms follow distribution",
      "evidence": [
        "Official repository separates DPVO NeurIPS 2023 and DPV-SLAM ECCV 2024 papers.",
        "https://arxiv.org/abs/2208.04726",
        "https://github.com/princeton-vl/DPVO"
      ],
      "notes": [
        "Original DPVO is VO; explicit loops belong to DPV-SLAM extension. No native ERP.",
        "Official code/models available"
      ],
      "tags": [],
      "family": "learned sparse patch VO",
      "imu": false,
      "loopClosure": false,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "CUDA/PyTorch; official Ubuntu 20/22 and CUDA 11/12 setup."
    },
    {
      "id": "goslam2023",
      "collection": "slam",
      "name": "GO-SLAM",
      "title": "GO-SLAM: Global Optimization for Consistent 3D Instant Reconstruction",
      "year": 2023,
      "firstYear": 2023,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ICCV 2023",
      "authors": "Youmin Zhang; Fabio Tosi; Stefano Mattoccia; Matteo Poggi",
      "institutions": "Unknown",
      "summary": "以全历史位姿优化、快速回环和隐式表面更新实现一致性稠密重建。",
      "cameras": [
        "perspective",
        "multi"
      ],
      "scale": "mixed",
      "scaleNote": "Mono up to scale; stereo/RGB-D can be metric",
      "aliases": [],
      "metricStatus": "conditional metric by input",
      "depthType": "inverse",
      "outputs": [
        "inverse",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated mono/stereo/RGB-D perspective sequence",
      "outputSummary": "Globally optimized trajectory and neural implicit surface/mesh",
      "inputs": {
        "requirements": "Calibrated mono/stereo/RGB-D perspective sequence",
        "imu": false
      },
      "outputDetails": {
        "primary": "Globally optimized trajectory and neural implicit surface/mesh",
        "depth_convention": "DROID-like pinhole inverse depth plus implicit surface; RGB-D requires calibration",
        "metric_status": "conditional metric by input",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/youmi-zym/GO-SLAM",
      "paperUrl": "https://arxiv.org/abs/2309.02436",
      "projectUrl": "https://youmi-zym.github.io/projects/GO-SLAM/",
      "weightsUrl": "https://github.com/youmi-zym/GO-SLAM#code",
      "license": "Unknown: inspect code/dependency/model terms before reuse",
      "evidence": [
        "Official ICCV repo confirms mono/stereo/RGB-D and parallel frontend/backend/instant mapper.",
        "https://arxiv.org/abs/2309.02436",
        "https://youmi-zym.github.io/projects/GO-SLAM/",
        "https://github.com/youmi-zym/GO-SLAM"
      ],
      "notes": [
        "Native ERP/fisheye not verified; neural map quality and tracking robustness are separate. Repository notes ongoing development.",
        "Official code and trained-model links available"
      ],
      "tags": [],
      "family": "learned dense SLAM / neural implicit mapping",
      "imu": false,
      "loopClosure": true,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "CUDA/PyTorch plus tiny-cuda-nn; parallel tracking/backend/mapper."
    },
    {
      "id": "lfvislam2023",
      "collection": "slam",
      "name": "LF-VISLAM",
      "title": "LF-VISLAM: A SLAM Framework for Large Field-of-View Cameras With Negative Imaging Plane on Mobile Agents",
      "year": 2023,
      "firstYear": 2023,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "IEEE T-ASE (repository citation 2023); arXiv v1 2022",
      "authors": "Ze Wang; Kailun Yang; Hao Shi; Peng Li; Fei Gao; Jian Bai; Kaiwei Wang",
      "institutions": "Unknown",
      "summary": "处理超过180度、含负成像平面的宽视场惯性SLAM；需区分PAL环形图与ERP。",
      "cameras": [
        "fisheye",
        "wide"
      ],
      "scale": "metric",
      "scaleNote": "Metric through observable IMU fusion",
      "aliases": [],
      "metricStatus": "metric via IMU",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated ultra-wide/PAL images with negative-half-plane rays plus IMU",
      "outputSummary": "Visual-inertial trajectory and sparse map; attitude-guided panoramic loop correction in paper",
      "inputs": {
        "requirements": "Calibrated ultra-wide/PAL images with negative-half-plane rays plus IMU",
        "imu": true
      },
      "outputDetails": {
        "primary": "Visual-inertial trajectory and sparse map; attitude-guided panoramic loop correction in paper",
        "depth_convention": "Unit bearings permit z<0; sparse geometry, not dense ERP depth",
        "metric_status": "metric via IMU",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "partial",
      "codeUrl": "https://github.com/flysoaryun/LF-VISLAM",
      "paperUrl": "https://arxiv.org/abs/2209.05167",
      "projectUrl": "https://github.com/flysoaryun/LF-VISLAM",
      "weightsUrl": "",
      "license": "GPL-3.0",
      "evidence": [
        "Official paper defines unit-vector features/loops; README gives Scaramuzza PAL config and pending-loop note.",
        "https://arxiv.org/abs/2209.05167",
        "https://github.com/flysoaryun/LF-VISLAM"
      ],
      "notes": [
        "PAL annular images are not ERP. README says loop closure will be updated later: paper capability differs from code completeness.",
        "Official source present; loop-closure completeness requires audit"
      ],
      "tags": [],
      "family": "wide-FoV visual-inertial SLAM",
      "imu": true,
      "loopClosure": true,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "ROS1/C++ VINS-derived system with PAL calibration."
    },
    {
      "id": "okvis2_2022",
      "collection": "slam",
      "name": "OKVIS2",
      "title": "OKVIS2: Realtime Scalable Visual-Inertial SLAM with Loop Closure",
      "year": 2022,
      "firstYear": 2022,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "arXiv preprint 2202.09199",
      "authors": "Stefan Leutenegger",
      "institutions": "Unknown",
      "summary": "通过可逆边缘化与异步大回环优化构建可扩展VI-SLAM。",
      "cameras": [
        "multi",
        "perspective",
        "fisheye"
      ],
      "scale": "metric",
      "scaleNote": "Metric through inertial/stereo constraints under observability and calibration",
      "aliases": [],
      "metricStatus": "metric VIO/SLAM",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated mono/stereo or multicamera visual streams plus IMU",
      "outputSummary": "Causal and globally optimized inertial trajectories and sparse map",
      "inputs": {
        "requirements": "Calibrated mono/stereo or multicamera visual streams plus IMU",
        "imu": true
      },
      "outputDetails": {
        "primary": "Causal and globally optimized inertial trajectories and sparse map",
        "depth_convention": "Sparse landmark geometry; no learned dense depth",
        "metric_status": "metric VIO/SLAM",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/ethz-mrl/okvis2",
      "paperUrl": "https://arxiv.org/abs/2202.09199",
      "projectUrl": "https://github.com/ethz-mrl/okvis2",
      "weightsUrl": "",
      "license": "BSD-3-Clause",
      "evidence": [
        "Official paper describes bounded factor graph and reversible marginalization; README confirms author implementation/BSD.",
        "https://arxiv.org/abs/2202.09199",
        "https://github.com/ethz-mrl/okvis2"
      ],
      "notes": [
        "No native ERP verified. Causal pose differs from asynchronous loop-optimized output.",
        "Official author implementation available"
      ],
      "tags": [],
      "family": "optimization visual-inertial SLAM",
      "imu": true,
      "loopClosure": true,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "C++/CMake; optional LibTorch segmentation and ROS2."
    },
    {
      "id": "codevio2021",
      "collection": "slam",
      "name": "CodeVIO",
      "title": "CodeVIO: Visual-Inertial Odometry with Learned Optimizable Dense Depth",
      "year": 2021,
      "firstYear": 2021,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ICRA 2021; arXiv v1 2020",
      "authors": "Xingxing Zuo; Nathaniel Merrill; Wei Li; Yong Liu; Marc Pollefeys; Guoquan Huang",
      "institutions": "ETH Zurich; Zhejiang University; University of Delaware; additional affiliations see paper",
      "summary": "通过低维可优化深度码联合更新视觉惯性状态与局部稠密深度。",
      "cameras": [
        "perspective"
      ],
      "scale": "metric",
      "scaleNote": "Metric inertial VIO; learned depth codes jointly updated with states",
      "aliases": [],
      "metricStatus": "metric through inertial VIO",
      "depthType": "unknown",
      "outputs": [
        "unknown",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated RGB monocular video; IMU; sparse depth/features from VIO; learned CVAE depth model",
      "outputSummary": "Visual-inertial state trajectory and optimized local dense depth from compact codes",
      "inputs": {
        "requirements": "Calibrated RGB monocular video; IMU; sparse depth/features from VIO; learned CVAE depth model",
        "imu": true
      },
      "outputDetails": {
        "primary": "Visual-inertial state trajectory and optimized local dense depth from compact codes",
        "depth_convention": "Dense decoder depth for calibrated image grid; exact export convention requires implementation verification",
        "metric_status": "metric through inertial VIO",
        "pose_output": "Yes",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "unverified",
      "codeUrl": "",
      "paperUrl": "https://arxiv.org/pdf/2012.10133",
      "projectUrl": "",
      "weightsUrl": "",
      "license": "Unknown",
      "evidence": [
        "Paper IV and experiment definitions read; demonstrates joint optimized depth/state but not arbitrary foundation-model prior causing universal pose improvement; no local execution",
        "https://arxiv.org/pdf/2012.10133"
      ],
      "notes": [
        "No native ERP; paper evidence is not a verified deployable implementation.",
        "Paper available; complete official code/checkpoints Unknown"
      ],
      "tags": [],
      "family": "learned depth-code VIO",
      "imu": true,
      "loopClosure": false,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "Learned decoder plus VIO; complete official release not established."
    },
    {
      "id": "droidslam2021",
      "collection": "slam",
      "name": "DROID-SLAM",
      "title": "DROID-SLAM: Deep Visual SLAM for Monocular, Stereo, and RGB-D Cameras",
      "year": 2021,
      "firstYear": 2021,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "NeurIPS 2021",
      "authors": "Zachary Teed; Jia Deng",
      "institutions": "Princeton University",
      "summary": "学习稠密对应与可微BA的经典单目/双目/RGB-D系统，是后续学习型SLAM基线。",
      "cameras": [
        "perspective",
        "multi"
      ],
      "scale": "mixed",
      "scaleNote": "Monocular visual mode up to scale; stereo baseline/RGB-D can supply metric scale",
      "aliases": [],
      "metricStatus": "mono up to scale; stereo/RGB-D can be metric",
      "depthType": "inverse",
      "outputs": [
        "inverse",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated mono/stereo/RGB-D sequence; no IMU in original system; repository calibration format pinhole plus optional distortion",
      "outputSummary": "Camera trajectory and dense inverse-depth reconstruction; learned dense correspondences and weights internally",
      "inputs": {
        "requirements": "Calibrated mono/stereo/RGB-D sequence; no IMU in original system; repository calibration format pinhole plus optional distortion",
        "imu": false
      },
      "outputDetails": {
        "primary": "Camera trajectory and dense inverse-depth reconstruction; learned dense correspondences and weights internally",
        "depth_convention": "Pinhole inverse depth in dense BA; RGB-D mode adds physical depth information",
        "metric_status": "mono up to scale; stereo/RGB-D can be metric",
        "pose_output": "Yes",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/princeton-vl/DROID-SLAM",
      "paperUrl": "https://arxiv.org/abs/2108.10869",
      "projectUrl": "https://github.com/princeton-vl/DROID-SLAM",
      "weightsUrl": "https://github.com/princeton-vl/DROID-SLAM#demos",
      "license": "BSD-3-Clause code; weight terms separately check distribution",
      "evidence": [
        "Official paper metadata and repository inspected; repository says demo inference >=11GB, some evaluation24GB; learned DBA differs from feeding arbitrary single-frame depth; not run",
        "https://arxiv.org/abs/2108.10869",
        "https://github.com/princeton-vl/DROID-SLAM"
      ],
      "notes": [
        "Pinhole reprojection cannot directly accept ERP; nonlocal optimization differs from explicit place recognition.",
        "Official code/models available"
      ],
      "tags": [],
      "family": "learned dense SLAM",
      "imu": false,
      "loopClosure": "Implicit nonlocal graph/global BA; no standalone place-recognition claim",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "CUDA; official README documents substantial GPU memory needs."
    },
    {
      "id": "orbslam3_2021",
      "collection": "slam",
      "name": "ORB-SLAM3",
      "title": "ORB-SLAM3: An Accurate Open-Source Library for Visual, Visual-Inertial and Multi-Map SLAM",
      "year": 2021,
      "firstYear": 2021,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "IEEE Transactions on Robotics 37(6):1874-1890; arXiv v1 2020",
      "authors": "Carlos Campos; Richard Elvira; Juan J. Gomez Rodriguez; Jose M. M. Montiel; Juan D. Tardos",
      "institutions": "Universidad de Zaragoza",
      "summary": "单目、双目、RGB-D与惯性多地图SLAM基线；鱼眼支持不代表直接处理ERP。",
      "cameras": [
        "perspective",
        "fisheye",
        "multi"
      ],
      "scale": "mixed",
      "scaleNote": "Monocular visual-only up to scale; stereo/RGB-D/valid inertial modes metric under calibration and observability assumptions",
      "aliases": [],
      "metricStatus": "conditional: stereo/RGB-D/observable VI metric; mono visual up to scale",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Mono/stereo/RGB-D visual modes; mono/stereo inertial modes; calibrated pinhole/fisheye camera models; IMU where enabled",
      "outputSummary": "Camera/keyframe trajectory; sparse map; relocalization and multi-map capabilities",
      "inputs": {
        "requirements": "Mono/stereo/RGB-D visual modes; mono/stereo inertial modes; calibrated pinhole/fisheye camera models; IMU where enabled",
        "imu": false
      },
      "outputDetails": {
        "primary": "Camera/keyframe trajectory; sparse map; relocalization and multi-map capabilities",
        "depth_convention": "Sparse triangulated geometry; RGB-D mode consumes camera-specific depth convention and scale, not a general predicted range network",
        "metric_status": "conditional: stereo/RGB-D/observable VI metric; mono visual up to scale",
        "pose_output": "Yes",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/UZ-SLAMLab/ORB_SLAM3",
      "paperUrl": "https://arxiv.org/abs/2007.11898",
      "projectUrl": "https://github.com/UZ-SLAMLab/ORB_SLAM3",
      "weightsUrl": "",
      "license": "GPL-3.0 code",
      "evidence": [
        "Official repository explicitly provides EuRoC and TUM-VI mono/stereo/fisheye/IMU examples; paper claims dataset performance, not verified on handheld robotics",
        "https://arxiv.org/abs/2007.11898",
        "https://github.com/UZ-SLAMLab/ORB_SLAM3"
      ],
      "notes": [
        "Kannala-Brandt fisheye support does not establish native ERP.",
        "Official code available"
      ],
      "tags": [],
      "family": "feature visual / visual-inertial SLAM",
      "imu": false,
      "loopClosure": true,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "CPU C++; IMU optional by sensor mode."
    },
    {
      "id": "basalt2020",
      "collection": "slam",
      "name": "Basalt",
      "title": "Visual-Inertial Mapping with Non-Linear Factor Recovery",
      "year": 2020,
      "firstYear": 2020,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "IEEE RA-L / ICRA 2020; arXiv v1 2019",
      "authors": "Vladyslav Usenko; Nikolaus Demmel; David Schubert; Jörg Stückler; Daniel Cremers",
      "institutions": "Unknown",
      "summary": "以非线性因子恢复连接局部VIO与全局建图，适合宽视场惯性定位基线。",
      "cameras": [
        "perspective",
        "fisheye",
        "wide",
        "multi"
      ],
      "scale": "metric",
      "scaleNote": "Metric under calibrated stereo/inertial observability",
      "aliases": [],
      "metricStatus": "metric from calibrated stereo / IMU",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated stereo/wide-angle cameras and IMU; VO mode and reusable camera tools also provided",
      "outputSummary": "Visual-inertial state, sparse landmarks and global mapping with recovered factors",
      "inputs": {
        "requirements": "Calibrated stereo/wide-angle cameras and IMU; VO mode and reusable camera tools also provided",
        "imu": true
      },
      "outputDetails": {
        "primary": "Visual-inertial state, sparse landmarks and global mapping with recovered factors",
        "depth_convention": "Sparse inverse-distance landmarks on calibrated rays; not dense predicted depth",
        "metric_status": "metric from calibrated stereo / IMU",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://gitlab.com/VladyslavUsenko/basalt",
      "paperUrl": "https://arxiv.org/abs/1904.06504",
      "projectUrl": "https://cvg.cit.tum.de/research/vslam/basalt",
      "weightsUrl": "",
      "license": "BSD-3-Clause",
      "evidence": [
        "Official TUM page confirms RA-L/ICRA venue and components; official source/header docs provide calibration tools.",
        "https://arxiv.org/abs/1904.06504",
        "https://cvg.cit.tum.de/research/vslam/basalt",
        "https://gitlab.com/VladyslavUsenko/basalt"
      ],
      "notes": [
        "Full ERP not verified. Local VIO differs from global factor-recovery mapping; arbitrary multi-camera deployment not assumed.",
        "Official GitLab source and GitHub mirror available"
      ],
      "tags": [],
      "family": "optimization VIO / mapping",
      "imu": true,
      "loopClosure": true,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "CPU C++; current official installation has CMake and binary routes."
    },
    {
      "id": "d3vo2020",
      "collection": "slam",
      "name": "D3VO",
      "title": "D3VO: Deep Depth, Deep Pose and Deep Uncertainty for Monocular Visual Odometry",
      "year": 2020,
      "firstYear": 2020,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2020",
      "authors": "Nan Yang; Lukas von Stumberg; Rui Wang; Daniel Cremers",
      "institutions": "Technical University of Munich; Artisense",
      "summary": "把学习深度、位姿和不确定性融入直接法单目VO，适合研究深度先验与运动优化耦合。",
      "cameras": [
        "perspective"
      ],
      "scale": "mixed",
      "scaleNote": "Learned metric-depth prior trained from calibrated stereo; domain/scale robustness requires evaluation",
      "aliases": [],
      "metricStatus": "learned stereo-supervised scale prior",
      "depthType": "unknown",
      "outputs": [
        "unknown",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated monocular video at inference; stereo/temporal videos used for self-supervised training; no IMU required",
      "outputSummary": "Predicted depth, relative pose, photometric uncertainty/brightness-related parameters; direct VO trajectory and local geometry",
      "inputs": {
        "requirements": "Calibrated monocular video at inference; stereo/temporal videos used for self-supervised training; no IMU required",
        "imu": false
      },
      "outputDetails": {
        "primary": "Predicted depth, relative pose, photometric uncertainty/brightness-related parameters; direct VO trajectory and local geometry",
        "depth_convention": "Pinhole depth used in camera backprojection and virtual-stereo disparity constraints; not panoramic Euclidean range",
        "metric_status": "learned stereo-supervised scale prior",
        "pose_output": "Yes: hybrid direct VO plus learned initialization/priors",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "unverified",
      "codeUrl": "",
      "paperUrl": "https://arxiv.org/pdf/2003.01060",
      "projectUrl": "https://cvg.cit.tum.de/research/vslam/d3vo",
      "weightsUrl": "",
      "license": "Unknown for complete original implementation/weights",
      "evidence": [
        "Method section and Tables 4/6 component ablations read; KITTI/EuRoC training/test conditions constrain interpretation; not reproduced",
        "https://arxiv.org/pdf/2003.01060",
        "https://cvg.cit.tum.de/research/vslam/d3vo"
      ],
      "notes": [
        "Official complete code/checkpoints not confirmed; pinhole and training-domain limits.",
        "Paper/project available; complete official code Unknown"
      ],
      "tags": [],
      "family": "hybrid learned direct VO",
      "imu": false,
      "loopClosure": false,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "Learned inference plus direct optimizer; no local runtime benchmark."
    },
    {
      "id": "omnislam2020",
      "collection": "slam",
      "name": "OmniSLAM",
      "title": "OmniSLAM: Omnidirectional Localization and Dense Mapping for Wide-baseline Multi-camera Systems",
      "year": 2020,
      "firstYear": 2020,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ICRA 2020",
      "authors": "Changhee Won; Hochang Seok; Zhaopeng Cui; Marc Pollefeys; Jongwoo Lim",
      "institutions": "Unknown",
      "summary": "多鱼眼立体深度辅助VO，加入回环与TSDF融合；硬件与单目ERP方案不同。",
      "cameras": [
        "multi",
        "fisheye",
        "wide"
      ],
      "scale": "metric",
      "scaleNote": "Metric from calibrated stereo baseline",
      "aliases": [],
      "metricStatus": "metric from known rig baseline",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated wide-baseline multi-fisheye stereo rig with 360-degree observation coverage",
      "outputSummary": "Rig trajectory, learned omnidirectional stereo depth, dense TSDF map",
      "inputs": {
        "requirements": "Calibrated wide-baseline multi-fisheye stereo rig with 360-degree observation coverage",
        "imu": false
      },
      "outputDetails": {
        "primary": "Rig trajectory, learned omnidirectional stereo depth, dense TSDF map",
        "depth_convention": "Omnidirectional stereo depth on rig/camera rays; exported range convention must be checked in implementation",
        "metric_status": "metric from known rig baseline",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "unverified",
      "codeUrl": "",
      "paperUrl": "https://arxiv.org/abs/2003.08056",
      "projectUrl": "https://sites.google.com/view/chwon",
      "weightsUrl": "",
      "license": "Unknown: complete official implementation not confirmed",
      "evidence": [
        "ICRA paper specifies multi-fisheye wide-baseline stereo, depth-guided matching, loop closing and TSDF fusion.",
        "https://arxiv.org/abs/2003.08056",
        "https://sites.google.com/view/chwon"
      ],
      "notes": [
        "A calibrated 360-degree rig is not a stitched ERP mono camera. Complete official code/weights not confirmed.",
        "Paper available; complete public official implementation Unknown"
      ],
      "tags": [],
      "family": "omnidirectional multi-camera depth-assisted SLAM",
      "imu": false,
      "loopClosure": true,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "Multiple synchronized cameras plus learned omnidirectional stereo; not locally tested."
    },
    {
      "id": "openvins2020",
      "collection": "slam",
      "name": "OpenVINS",
      "title": "OpenVINS: A Research Platform for Visual-Inertial Estimation",
      "year": 2020,
      "firstYear": 2020,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ICRA 2020",
      "authors": "Patrick Geneva; Kevin Eckenhoff; Woosik Lee; Yulin Yang; Guoquan Huang",
      "institutions": "University of Delaware",
      "summary": "基于滤波的视觉惯性估计平台，适合同步、标定与定位精度基线；核心不提供全局回环。",
      "cameras": [
        "perspective",
        "fisheye",
        "multi"
      ],
      "scale": "metric",
      "scaleNote": "Metric through inertial measurements under sufficiently excited non-degenerate motion; global translation and yaw gauge remain",
      "aliases": [],
      "metricStatus": "metric with IMU observability",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Monocular or synchronized stereo/binocular images; calibrated camera model and IMU; image/IMU timestamps; spatial/time calibration and noise parameters",
      "outputSummary": "IMU 6DoF pose; velocity; gyro/accelerometer biases; covariance; sparse features; optional calibration states",
      "inputs": {
        "requirements": "Monocular or synchronized stereo/binocular images; calibrated camera model and IMU; image/IMU timestamps; spatial/time calibration and noise parameters",
        "imu": true
      },
      "outputDetails": {
        "primary": "IMU 6DoF pose; velocity; gyro/accelerometer biases; covariance; sparse features; optional calibration states",
        "depth_convention": "Sparse landmarks or inverse-depth feature representations; no per-pixel predicted depth map",
        "metric_status": "metric with IMU observability",
        "pose_output": "Yes: continuous visual-inertial state; TCP requires extrinsics; no core loop-closure global SLAM",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/rpng/open_vins",
      "paperUrl": "https://pgeneva.com/downloads/papers/Geneva2020ICRA.pdf",
      "projectUrl": "https://docs.openvins.com/",
      "weightsUrl": "",
      "license": "GPL-3.0 code and documentation",
      "evidence": [
        "Official paper and documentation; FEJ/propagation/calibration derivations; launch and source entries inspected; not executed in this collection",
        "https://pgeneva.com/downloads/papers/Geneva2020ICRA.pdf",
        "https://docs.openvins.com/",
        "https://github.com/rpng/open_vins",
        "https://docs.openvins.com/classov__core_1_1CamEqui.html"
      ],
      "notes": [
        "Core estimator is VIO without global loop closure; equidistant fisheye is not ERP.",
        "Official code/documentation available"
      ],
      "tags": [],
      "family": "filter VIO",
      "imu": true,
      "loopClosure": false,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "CPU; camera/IMU synchronization and calibration required."
    },
    {
      "id": "stella_vslam",
      "collection": "slam",
      "name": "stella_vslam",
      "title": "stella_vslam / OpenVSLAM: A Versatile Visual SLAM Framework",
      "year": 2019,
      "firstYear": 2019,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ACM Multimedia 2019 underlying paper; community continuation since 2021",
      "authors": "Shinya Sumikura; Mikiya Shibuya; Ken Sakurada (OpenVSLAM); stella-cv contributors",
      "institutions": "Unknown",
      "summary": "可直接运行ERP全景的传统稀疏SLAM起点；支持地图保存与重定位。",
      "cameras": [
        "perspective",
        "fisheye",
        "panoramic",
        "multi"
      ],
      "scale": "mixed",
      "scaleNote": "Monocular visual up to scale; stereo/RGB-D scale from calibrated input",
      "aliases": [],
      "metricStatus": "conditional metric in stereo/RGB-D; monocular ERP up to scale",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated mono/stereo/RGB-D sequences; perspective, fisheye or equirectangular model",
      "outputSummary": "Sparse map, camera/keyframe trajectory, relocalization and reusable saved maps",
      "inputs": {
        "requirements": "Calibrated mono/stereo/RGB-D sequences; perspective, fisheye or equirectangular model",
        "imu": false
      },
      "outputDetails": {
        "primary": "Sparse map, camera/keyframe trajectory, relocalization and reusable saved maps",
        "depth_convention": "Sparse 3D points; no learned dense depth",
        "metric_status": "conditional metric in stereo/RGB-D; monocular ERP up to scale",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/stella-cv/stella_vslam",
      "paperUrl": "https://arxiv.org/abs/1910.01122",
      "projectUrl": "https://stella-cv.readthedocs.io/en/latest/",
      "weightsUrl": "",
      "license": "BSD-2-Clause current code; versions before 0.3 deprecated and treated as GPL derivative per README",
      "evidence": [
        "Official README explicitly lists equirectangular support, license/version caveats and future IMU integration.",
        "https://arxiv.org/abs/1910.01122",
        "https://stella-cv.readthedocs.io/en/latest/",
        "https://github.com/stella-cv/stella_vslam"
      ],
      "notes": [
        "ERP support does not make mono metric. IMU integration is future work. Use current maintained version due to historical OpenVSLAM license issues.",
        "Community fork with source and ERP examples available"
      ],
      "tags": [],
      "family": "feature visual SLAM",
      "imu": false,
      "loopClosure": true,
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "CPU C++; Docker and ROS wrappers documented."
    },
    {
      "id": "vinsfusion2019",
      "collection": "slam",
      "name": "VINS-Fusion",
      "title": "VINS-Fusion: An Optimization-based Multi-sensor State Estimator",
      "year": 2018,
      "firstYear": 2019,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "Software project; related VINS-Mono T-RO 2018 and temporal-calibration IROS 2018 papers differ from released code",
      "authors": "Tong Qin; Shaozu Cao; Jie Pan; Peiliang Li; Shaojie Shen",
      "institutions": "Unknown",
      "summary": "提供单目惯性、双目惯性与纯双目定位，可验证传感器融合和回环收益。",
      "cameras": [
        "perspective",
        "fisheye",
        "multi"
      ],
      "scale": "metric",
      "scaleNote": "Known stereo baseline or observable inertial fusion supplies scale",
      "aliases": [],
      "metricStatus": "metric conditional on sensor mode",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Mono+IMU, stereo+IMU or stereo-only; pinhole/Mei/equidistant calibration; optional GPS",
      "outputSummary": "VIO/VO trajectory, optional visual loop correction and GPS global fusion",
      "inputs": {
        "requirements": "Mono+IMU, stereo+IMU or stereo-only; pinhole/Mei/equidistant calibration; optional GPS",
        "imu": "Optional: required for mono, optional for stereo"
      },
      "outputDetails": {
        "primary": "VIO/VO trajectory, optional visual loop correction and GPS global fusion",
        "depth_convention": "Sparse geometry; no dense-depth predictor",
        "metric_status": "metric conditional on sensor mode",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/HKUST-Aerial-Robotics/VINS-Fusion",
      "paperUrl": "https://arxiv.org/abs/1708.03852",
      "projectUrl": "https://github.com/HKUST-Aerial-Robotics/VINS-Fusion",
      "weightsUrl": "",
      "license": "GPL-3.0",
      "evidence": [
        "Official README verifies sensor modes, camera models, license and paper/code distinction.",
        "https://arxiv.org/abs/1708.03852",
        "https://github.com/HKUST-Aerial-Robotics/VINS-Fusion"
      ],
      "notes": [
        "Mei/equidistant is not ERP support. Linked paper is related VINS-Mono rather than a standalone VINS-Fusion paper.",
        "Official code with optional loop_fusion/global_fusion nodes"
      ],
      "tags": [],
      "family": "optimization multi-sensor VIO / SLAM",
      "imu": "Optional: required for mono, optional for stereo",
      "loopClosure": true,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "Official ROS1/Ceres implementation; authors recommend hardware sync and global shutter."
    },
    {
      "id": "svo_pro",
      "collection": "slam",
      "name": "SVO Pro",
      "title": "SVO Pro / SVO: Semi-Direct Visual Odometry for Monocular and Multi-Camera Systems",
      "year": 2017,
      "firstYear": 2017,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "IEEE T-RO 2017 foundation paper; SVO Pro integrates later software extensions",
      "authors": "Christian Forster; Zichao Zhang; Michael Gassner; Manuel Werlberger; Davide Scaramuzza; RPG contributors",
      "institutions": "Unknown",
      "summary": "半直接法支持鱼眼与折反射相机，提供可选惯性后端、全局BA和回环。",
      "cameras": [
        "perspective",
        "fisheye",
        "multi"
      ],
      "scale": "mixed",
      "scaleNote": "Pure mono VO up to scale; stereo or observable VI supplies metric scale",
      "aliases": [],
      "metricStatus": "conditional metric by mode",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Mono/stereo perspective or fisheye/catadioptric images; IMU for VI modes",
      "outputSummary": "VO/VIO trajectory, sparse global map, optional iSAM2/global BA and loop closure",
      "inputs": {
        "requirements": "Mono/stereo perspective or fisheye/catadioptric images; IMU for VI modes",
        "imu": "Optional: required for VI modes"
      },
      "outputDetails": {
        "primary": "VO/VIO trajectory, sparse global map, optional iSAM2/global BA and loop closure",
        "depth_convention": "Sparse depth-filter landmarks on calibrated rays",
        "metric_status": "conditional metric by mode",
        "pose_output": "Yes: estimated 6DoF trajectory; wrist/TCP additionally needs extrinsics",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/uzh-rpg/rpg_svo_pro_open",
      "paperUrl": "https://rpg.ifi.uzh.ch/svo_pro.html",
      "projectUrl": "https://rpg.ifi.uzh.ch/svo_pro.html",
      "weightsUrl": "",
      "license": "GPL-3.0; retained OKVIS backend notices; commercial contact in README",
      "evidence": [
        "Official project and README enumerate camera models and VO/VIO/VI-SLAM/loop configurations.",
        "https://rpg.ifi.uzh.ch/svo_pro.html",
        "https://github.com/uzh-rpg/rpg_svo_pro_open"
      ],
      "notes": [
        "Camera support is not native ERP. No single standalone SVO Pro publication asserted.",
        "Official RPG open-source implementation available"
      ],
      "tags": [],
      "family": "semi-direct VO / visual-inertial SLAM",
      "imu": "Optional: required for VI modes",
      "loopClosure": true,
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "C++ ROS1; window backend, iSAM2 and DBoW2 dependencies."
    }
  ],
  "stats": {
    "depth": 30,
    "slam": 26,
    "panoramicDepth": 22,
    "panoramicSLAM": 5
  }
};
