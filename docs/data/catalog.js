window.ATLAS_DATA = {
  "updated": "2026-10-19",
  "repoUrl": "https://github.com/Somebo1/Awesome-Panoramic-Depth-SLAM",
  "title": "Panoramic Depth Atlas",
  "description": "Panoramic, fisheye and wide-FOV depth estimation and SLAM literature.",
  "schemaVersion": "1.4",
  "interfaceUpdated": "2026-10-20",
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
      "environment": "Official tested Ubuntu20.04 Python3.12 CUDA12.2 RTX3090; xformers0.0.28.post2",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://raw.githubusercontent.com/EnVision-Research/DA-2/main/infer.py",
            "https://openreview.net/pdf?id=323ximYcsk",
            "https://arxiv.org/abs/2509.26618"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/da2_panorama-thumb.webp",
        "image": "assets/papers/da2_panorama.webp",
        "paperUrl": "https://arxiv.org/pdf/2509.26618",
        "page": 5,
        "figureLabel": "Figure 4",
        "caption": {
          "zh": "SphereViT 的球面嵌入、网络结构与训练监督。",
          "en": "SphereViT spherical embeddings, architecture and training supervision."
        },
        "credit": {
          "zh": "来源：Haodong Li 等，原论文图 4。",
          "en": "Source: Haodong Li et al., Figure 4 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          108,
          75,
          506,
          260
        ],
        "originalCaption": "Figure 4: The architecture of SphereViT and training losses. By leveraging the spherical embedding E , which is explicitly derived from the spherical coordinates of",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "76bbe903e6d73b83c0066194f580f6c63472c4d0947733c63144500931938695",
        "imageSha256": "086191c134d223dd16d8a41ee6ce04efae61d6f450b222da1764a427efd9ab41",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Official Python3.12, tested torch2.7.1 torchvision0.22.1; torch>2; DINOv3-L backbone",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Documented panoramic depth model; raw fisheye requires a separate calibrated conversion and is not tagged as native input.",
            "zh": "已记录的全景深度模型；原始鱼眼需外部标定转换，不标成原生输入。"
          },
          "evidence": [
            "https://insta360-research-team.github.io/DAP_website/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/dap-thumb.webp",
        "image": "assets/papers/dap.webp",
        "paperUrl": "https://arxiv.org/pdf/2512.16913",
        "page": 5,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "DAP 的畸变感知深度解码与几何训练约束。",
          "en": "DAP distortion-aware depth decoding and geometric training constraints."
        },
        "credit": {
          "zh": "来源：Xin Lin 等，原论文图 3。",
          "en": "Source: Xin Lin et al., Figure 3 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          58,
          68,
          555,
          209
        ],
        "originalCaption": "Figure 3. Architecture of the proposed DAP network. Built upon DINOv3-Large [38] as the visual backbone, our model adopts a distortion-aware depth decoder and a",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "d8e8003a95388f671218d7a12e2f5666aaf538fca7fbaf5cd693d52a36ce66c0",
        "imageSha256": "97010ab31913bd2cadef833d10d069d8958d933900dfaefbfc73ac424161fc5f",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
    },
    {
      "id": "depthmaster2026",
      "collection": "depth",
      "name": "DepthMaster (2026)",
      "title": "DepthMaster: Unified Monocular Depth Estimation for Perspective and Panoramic Images",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "NeurIPS 2026 accepted per official repository; arXiv 2606.12368",
      "authors": [
        "Pengfei Wang",
        "Shihao Wang",
        "Liyi Chen",
        "Zhiyuan Ma",
        "Guowen Zhang",
        "Lei Zhang"
      ],
      "institutions": [
        "The Hong Kong Polytechnic University"
      ],
      "summary": "统一针孔与完整 ERP 的单图公制几何模型；全景内部转为六个重叠透视面，利用虚拟相机条件与对应一致性约束，输出径向距离和点图。",
      "cameras": [
        "perspective",
        "panoramic"
      ],
      "scale": "metric",
      "scaleNote": "Learned metric scale; one shared scale across panorama faces. Scale-/affine-invariant evaluations additionally align predictions to GT and are separate from raw metric performance.",
      "aliases": [],
      "metricStatus": "metric_learned",
      "depthType": "mixed",
      "outputs": [
        "z_depth",
        "range",
        "point_map",
        "normal",
        "intrinsics"
      ],
      "pose": false,
      "inputSummary": "One RGB perspective image or one complete ERP panorama",
      "outputSummary": "Metric pinhole Z-depth or panoramic radial range, metric 3D point maps, normals and validity mask",
      "inputs": {
        "frames": "One RGB perspective image or one complete ERP panorama",
        "projection": "Perspective directly; complete ERP through the official ERP-to-six-face 95-degree cubemap pipeline",
        "intrinsics": "Perspective: optional fov_x, otherwise recovered. ERP: fixed virtual intrinsics and rotations are generated by projection, not measured real-camera pose.",
        "resolution": "Panorama benchmark: six 518x518 faces reprojected to a 512x1024 ERP depth map; public code can project to other target dimensions",
        "extrinsics": "No measured camera extrinsics; ERP uses known virtual cubemap rotations around one shared center",
        "imu": "No",
        "gravity": "No measured gravity input",
        "synchronization": "Single-image inference; six cubemap faces are derived from the same ERP, not a temporal sequence"
      },
      "outputDetails": {
        "primary": "Metric pinhole Z-depth or panoramic radial range, metric 3D point maps, normals and validity mask",
        "point_map": "Learned global metric_scale multiplies predicted 3D points; panorama faces share a common coordinate frame and scale",
        "normal": "Predicted surface normals; panorama geometry is represented on cubemap faces before ERP fusion",
        "confidence": "Non-sky/validity mask; optional confidence channels depend on checkpoint configuration and are not calibrated uncertainty",
        "camera_parameters": "Perspective normalized K with centered principal point; no estimated real-camera extrinsics",
        "depth_convention": "Perspective infer(): depth_from_pts=points[...,2], followed by learned metric_scale, so depth is optical-axis Z. Official ERP evaluator multiplies pts3d by metric_scale, computes norm(points), and blends the six range maps back to ERP. Cubemap Z and panoramic range must not be interchanged.",
        "metric_status": "metric_learned",
        "pose_output": "No estimated camera pose or trajectory; virtual cubemap poses are known projection conditions",
        "runtime": "Paper reports 531 ms for a 1024x2048 ERP on A100 versus DAP 427 ms; no local runtime or memory measurement. Protocol-specific timings are not end-to-end SLAM benchmarks."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/PolyU-VCLab/DepthMaster",
      "paperUrl": "https://arxiv.org/abs/2606.12368",
      "projectUrl": "https://polyu-vclab.github.io/DepthMaster-page/",
      "weightsUrl": "https://huggingface.co/VCLab-PolyU/DepthMaster",
      "license": {
        "code": "MIT; third-party dependencies retain their own terms",
        "weights": "Official Hugging Face metadata declares MIT; checkpoint not downloaded"
      },
      "evidence": [
        "https://arxiv.org/abs/2606.12368",
        "https://polyu-vclab.github.io/DepthMaster-page/",
        "https://github.com/PolyU-VCLab/DepthMaster",
        "https://github.com/PolyU-VCLab/DepthMaster/blob/main/depthmaster/model/model.py",
        "https://github.com/PolyU-VCLab/DepthMaster/blob/main/eval_panorama/eval.py",
        "https://github.com/PolyU-VCLab/DepthMaster/blob/main/eval_panorama/configs/eval_panorama.json",
        "https://github.com/PolyU-VCLab/DepthMaster/blob/main/eval_panorama/eval/utils/infer.py",
        "https://huggingface.co/VCLab-PolyU/DepthMaster"
      ],
      "notes": [
        "This record is the 2026 PolyU perspective/panorama model, not the unrelated 2025 diffusion paper named DepthMaster.",
        "The official repository reports NeurIPS 2026 acceptance in September 2026; an archival proceedings record was not independently verified.",
        "Full ERP is an official external input. Internally, six overlapping 95-degree perspective faces share virtual camera conditioning and a learned global scale. These virtual faces are not a physical multi-camera rig.",
        "Table 1 on PDF page 7 reports metric AbsRel below DAP on Stanford2D3D (7.73 vs 10.89), Matterport3D (9.49 vs 17.78) and PanoSUNCG (4.54 vs 6.71), with mean 7.25 vs 11.79, using the table display values. These are author-reported indoor-benchmark results, not an independently reproduced universal ranking.",
        "For metric reproduction, set evaluation.metric_depth_eval=true: the released panorama config defaults to scale/affine-aligned evaluation. Follow eval_panorama/eval.py or the README forward-plus-metric_scale path; the convenience infer_panorama() wrapper does not itself apply metric_scale.",
        "No verified raw fisheye interface or camera trajectory output. Single-image geometry does not establish temporal consistency or SLAM accuracy.",
        "code_and_weights_released"
      ],
      "tags": [
        "monocular",
        "pinhole",
        "panoramic",
        "metric",
        "point-map",
        "cubemap",
        "z_depth",
        "range",
        "point_map",
        "normal",
        "intrinsics"
      ],
      "family": "depth_and_geometry",
      "imu": false,
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-20",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_and_L3_interface_code_review",
      "codeEntry": [
        "depthmaster/model/model.py::DepthMasterModel.infer",
        "eval_panorama/eval.py::depthmaster_predict_fn",
        "eval_panorama/eval/utils/infer.py::run_evaluation (metric_depth_eval=true)"
      ],
      "environment": "Official README tested Linux, Python 3.10, PyTorch 2.4.0 and CUDA 12.1; pin utils3d to commit 3fab839f0be9931dac7c8488eb0e1600c236e183. No local inference or compatibility test.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The public infer() accepts a pinhole RGB image, recovers or accepts fov_x, and returns metric Z-depth and camera-space points.",
            "zh": "公开 infer() 接收针孔 RGB，恢复或接收 fov_x，输出公制 Z 深度与相机坐标点图。"
          },
          "evidence": [
            "https://github.com/PolyU-VCLab/DepthMaster/blob/main/depthmaster/model/model.py",
            "https://github.com/PolyU-VCLab/DepthMaster"
          ]
        },
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The official pipeline accepts complete ERP and internally uses six overlapping 95-degree cubemap views; metric-scaled point norms are fused into ERP radial range. These are virtual views, not a physical multi-camera rig.",
            "zh": "官方流程接收完整 ERP，内部使用六个重叠 95° cubemap 透视面；点图应用公制尺度后取范数，融合为 ERP 径向距离。这些是虚拟视图，不是真实多相机设备。"
          },
          "evidence": [
            "https://github.com/PolyU-VCLab/DepthMaster/blob/main/eval_panorama/eval.py",
            "https://github.com/PolyU-VCLab/DepthMaster",
            "https://arxiv.org/abs/2606.12368"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/depthmaster2026-thumb.webp",
        "image": "assets/papers/depthmaster2026.webp",
        "paperUrl": "https://arxiv.org/pdf/2606.12368",
        "page": 4,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "DepthMaster 将针孔与 ERP 统一为透视面，联合虚拟相机条件、点图/法线预测、共享尺度与对应一致性训练。",
          "en": "DepthMaster unifies pinhole and ERP as perspective patches with virtual-camera conditioning, point/normal prediction, shared scale and correspondence-consistency training."
        },
        "credit": {
          "zh": "来源：Pengfei Wang et al.，原论文 Figure 3。",
          "en": "Source: Pengfei Wang et al., Figure 3 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          60,
          190,
          533,
          377
        ],
        "originalCaption": "Figure 3. The pipeline of DepthMaster.",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. arXiv non-exclusive distribution license does not establish a broad figure-reuse license.",
        "reviewedAt": "2026-10-20",
        "selectionNotes": "PDF page 4 and the final crop were visually inspected; the complete pipeline and both lower consistency/attention panels are included.",
        "pdfSha256": "c435b22c372b556129b6029e2446d9ee86a2f29f5069ffbcd4adc8e894e8b92e",
        "imageSha256": "3157854e8bd99a01274dcbccf73d4d938810984288203faea90965ce667c30da",
        "verification": "Original PDF page and final crop visually inspected; identity, figure number, complete boundaries and legibility checked."
      }
    },
    {
      "id": "geopano2026",
      "collection": "depth",
      "name": "GeoPano",
      "title": "GeoPano: Towards Geometrically Accurate 3D Reconstruction from a Single Panorama",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "arXiv 2610.21297 (2026-10-15); preprint",
      "authors": [
        "Jing Ou",
        "Zidong Cao",
        "Liaoyuan Fan",
        "Zhuoxiao Li",
        "Shuai Zhang",
        "Yinrui Ren",
        "Dongli Wu",
        "Haoang Li",
        "Hui Xiong",
        "Wufan Zhao"
      ],
      "institutions": [
        "The Hong Kong University of Science and Technology (Guangzhou)",
        "Sun Yat-sen University",
        "The Hong Kong University"
      ],
      "summary": "单张 ERP 拆为十个共心虚拟视图，利用球面重叠注意力融合点图；训练显式对齐尺度，不提供已核实的真实轨迹或公制输出。",
      "cameras": [
        "panoramic"
      ],
      "scale": "relative",
      "scaleNote": "Relative, up to an unknown global scale: local and panoramic losses explicitly align predicted points to ground truth with an optimal scalar (Sec. 3.4, Eqs. 3-4). Geometric consistency does not establish metric output in meters.",
      "aliases": [],
      "metricStatus": "scale_invariant",
      "depthType": "points",
      "outputs": [
        "point_map",
        "depth_unknown_convention"
      ],
      "pose": false,
      "inputSummary": "Single RGB equirectangular panorama",
      "outputSummary": "Per-view local 3D point maps fused into a global panoramic point cloud; ERP depth obtained by reprojection",
      "inputs": {
        "frames": "Single RGB equirectangular panorama",
        "projection": "Full ERP input; internally decomposed into 10 overlapping co-centered perspective views (8 horizontal, 1 upward, 1 downward)",
        "intrinsics": "Standard ERP spherical geometry and fixed virtual-view ray directions; no verified arbitrary raw-fisheye interface",
        "resolution": "Training source Holo360D has 2880x1440 panoramas; exact network resize and released inference configuration unverified",
        "extrinsics": "No measured multi-camera extrinsics; all derived views share the same projection center",
        "imu": "No",
        "gravity": "No measured gravity input documented; orientation robustness was not independently established",
        "synchronization": "Single RGB panorama; capture/stitch synchronization remains an external system concern"
      },
      "outputDetails": {
        "primary": "Per-view local 3D point maps fused into a global panoramic point cloud; ERP depth obtained by reprojection",
        "point_map": "Direct local point-map head followed by spherical reprojection and fusion",
        "normal": "No independent normal prediction head verified",
        "confidence": "No calibrated uncertainty output verified",
        "camera_parameters": "No verified deployed camera-parameter output; virtual-view orientations are derived from a single panorama",
        "depth_convention": "The paper regresses local 3D point maps and fuses them in spherical coordinates. ERP depth is reprojected from the reconstructed point cloud. The exact serialized range/Z-depth convention is unverified because no official inference implementation was verified.",
        "metric_status": "scale_invariant",
        "pose_output": "No real camera trajectory or online SLAM pose output verified; a single panorama is reconstructed",
        "runtime": "Paper uses a single NVIDIA A800 for evaluation and four A800 GPUs for training; no comparable local runtime or peak-VRAM measurement performed."
      },
      "codeStatus": "unverified",
      "codeUrl": "",
      "paperUrl": "https://arxiv.org/abs/2610.21297",
      "projectUrl": "",
      "weightsUrl": "",
      "license": {
        "code": "Unknown: no official implementation verified",
        "weights": "Unknown: no official checkpoint verified"
      },
      "evidence": [
        "https://arxiv.org/abs/2610.21297",
        "https://arxiv.org/html/2610.21297v1",
        "https://arxiv.org/pdf/2610.21297",
        "https://creativecommons.org/licenses/by/4.0/"
      ],
      "notes": [
        "New preprint submitted 2026-10-15; no formal venue verified.",
        "The 10 perspective views are virtual views from one projection center, not a physical multi-camera or stereo rig.",
        "A single-panorama reconstruction method; inherited virtual-view reasoning is not evidence of a real camera trajectory, VO, SLAM, or loop closure.",
        "No author-linked public code or pretrained checkpoint was verified as of 2026-10-19. This does not prove that none exists.",
        "Training uses Holo360D; this paper does not introduce a separately named new dataset. Evaluation uses Matterport3D, Stanford2D3D, and Deep360.",
        "implementation_status_unverified"
      ],
      "tags": [
        "monocular",
        "ERP",
        "virtual-perspective-views",
        "feed-forward",
        "point-map",
        "Pano-Attention",
        "scale-invariant",
        "point_map",
        "depth_unknown_convention"
      ],
      "family": "single-panorama feed-forward point-map reconstruction",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-19",
      "publiclyVerified": true,
      "verificationLevel": "L2_original_paper_method_review_no_implementation_verified",
      "codeEntry": [],
      "environment": "No installable official inference environment verified; paper uses DINOv2 and pi-cubed initialization.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs.",
            "zh": "外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。"
          },
          "evidence": [
            "https://arxiv.org/abs/2610.21297",
            "https://arxiv.org/html/2610.21297v1",
            "https://arxiv.org/pdf/2610.21297"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/geopano2026-thumb.webp",
        "image": "assets/papers/geopano2026.webp",
        "paperUrl": "https://arxiv.org/pdf/2610.21297",
        "page": 5,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "GeoPano：全景视图分解、球面感知注意力、局部点图预测与全局点云融合。",
          "en": "GeoPano view decomposition, panorama-aware attention, local point-map prediction and global point-cloud fusion."
        },
        "credit": {
          "zh": "来源：Jing Ou 等，GeoPano 原论文图 3（第 5 页）；CC BY 4.0：https://creativecommons.org/licenses/by/4.0/；已裁剪页边与图注并转换为 WebP。",
          "en": "Source: Jing Ou et al., GeoPano, Figure 3 (page 5); CC BY 4.0: https://creativecommons.org/licenses/by/4.0/ . Page margins/caption cropped and converted to WebP."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          125,
          69,
          487,
          212
        ],
        "originalCaption": "Figure 3: Overview of the framework. Given a panorama, we decompose it into perspective views and encode them using DINOv2.",
        "sourceLicense": "CC BY 4.0; arXiv abstract license link and HTML verified 2026-10-19. https://creativecommons.org/licenses/by/4.0/",
        "reviewedAt": "2026-10-19",
        "selectionNotes": "Original Figure 3 method overview, cropped from PDF page 5 with padding; figure artwork preserved, page caption excluded.",
        "pdfSha256": "cf64e0e5fb5c7406151dd40ba6b563e55062660b9df573b2779dea3879924cf7",
        "imageSha256": "bf7323e86a5b5ebe5285af7ca7769c543d5efbbb31d32d9daf1f6527e5592d65",
        "verification": "Original PDF page 5 and both final WebP crops visually inspected; Figure 3 identity, stage labels, full artwork boundaries and readability checked. Page caption excluded and attribution/CC BY 4.0 retained in metadata."
      }
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
      "environment": "Unknown; official requirements must be checked for the selected version.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://arxiv.org/abs/2408.01653",
            "https://github.com/Qjizhi/MCPDepth",
            "https://github.com/Qjizhi/MCPDepth/tree/main/pretrained_model"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/mcpdepth-thumb.webp",
        "image": "assets/papers/mcpdepth.webp",
        "paperUrl": "https://arxiv.org/pdf/2408.01653",
        "page": 5,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "多柱面立体匹配、置信度与深度融合流程。",
          "en": "Multicylindrical stereo matching, confidence prediction and depth fusion."
        },
        "credit": {
          "zh": "来源：Feng Qiao 等，原论文图 3。",
          "en": "Source: Feng Qiao et al., Figure 3 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          58,
          65,
          555,
          266
        ],
        "originalCaption": "Figure 3. Framework of MCPDepth. (a) represents 6 pairs of cylindrical panoramas, (b) shows the disparity and confidence maps, and (c) shows the depth and",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "87e122fedde076d5430349e4d8b327275ced54c625c7fe51f2499c5dc834d2a8",
        "imageSha256": "a0f02d3c44ee4744ccfe48387f3126e10af6b63a7e740eba584e8f04ae8d0d6c",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
    },
    {
      "id": "moge3",
      "collection": "depth",
      "name": "MoGe-3",
      "title": "MoGe-3: Fine-Detail Monocular Geometry Estimation with Self-Guided Sparse Volumetric Refinement",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "NeurIPS 2026 accepted per official project; arXiv 2607.17967",
      "authors": [
        "Lingyu Kong",
        "Ruicheng Li",
        "Ruicheng Wang",
        "Sicheng Xu",
        "Chengtang Yao",
        "Jianfeng Xiang",
        "Jiaolong Yang"
      ],
      "institutions": [
        "Tsinghua University",
        "University of Science and Technology of China",
        "Microsoft Research"
      ],
      "summary": "以 MoGe-2 为基础，将点图提升到稀疏三维体素壳中反复细化，恢复细结构；原始接口属于针孔相机的公制 Z 深度与点图模型。",
      "cameras": [
        "perspective"
      ],
      "scale": "metric",
      "scaleNote": "Learned metric scale for released MoGe-3 checkpoints, not externally measured scale or a guarantee of scene-specific accuracy.",
      "aliases": [],
      "metricStatus": "metric_learned",
      "depthType": "z",
      "outputs": [
        "z_depth",
        "point_map",
        "normal",
        "intrinsics"
      ],
      "pose": false,
      "inputSummary": "Single RGB tensor (3,H,W) or (B,3,H,W), values [0,1]",
      "outputSummary": "Metric Z-depth (H,W), metric camera-space point map (H,W,3), valid mask and normalized K; normals when the checkpoint supplies them",
      "inputs": {
        "frames": "Single RGB tensor (3,H,W) or (B,3,H,W), values [0,1]",
        "projection": "Pinhole perspective geometry; centered principal point and focal/axial-shift recovery",
        "intrinsics": "Optional horizontal field of view fov_x in degrees; otherwise inferred. Output K is normalized, with principal point (0.5,0.5).",
        "resolution": "Output maps match input H,W; resolution_level 0-9 or num_tokens controls base ViT compute, not output dimensions",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity input in the public interface",
        "synchronization": "Single-image inference; no temporal or multi-sensor synchronization input"
      },
      "outputDetails": {
        "primary": "Metric Z-depth (H,W), metric camera-space point map (H,W,3), valid mask and normalized K; normals when the checkpoint supplies them",
        "point_map": "Direct affine point prediction with sparse 3D refinement; infer() aligns it to the camera and applies learned metric scale",
        "normal": "Optional normal map (H,W,3), OpenCV camera coordinates",
        "confidence": "Predicted valid-pixel mask; not a calibrated depth uncertainty",
        "camera_parameters": "Normalized pinhole intrinsics; known fov_x can constrain recovery; no extrinsics",
        "depth_convention": "infer() sets depth=points[...,2], then multiplies points and depth by the learned metric scale. OpenCV coordinates: x right, y down, z forward. Euclidean range is norm(points), not the depth field. force_projection=True recomputes points from depth and K.",
        "metric_status": "metric_learned",
        "pose_output": "No camera pose or trajectory output",
        "runtime": "No local runtime or peak-memory measurement; do not treat repository-wide timings as version-specific benchmarks."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/microsoft/MoGe",
      "paperUrl": "https://arxiv.org/abs/2607.17967",
      "projectUrl": "https://qft-333.github.io/moge3page/",
      "weightsUrl": "https://huggingface.co/Ruicheng/moge-3-vitl",
      "license": {
        "code": "MIT; bundled DINOv2 component Apache-2.0; other dependencies retain their terms",
        "weights": "Official Ruicheng/moge-3-vitl model metadata declares MIT; model card prose is empty"
      },
      "evidence": [
        "https://arxiv.org/abs/2607.17967",
        "https://qft-333.github.io/moge3page/",
        "https://github.com/microsoft/MoGe",
        "https://github.com/microsoft/MoGe/blob/main/moge/model/v3.py",
        "https://github.com/microsoft/MoGe/blob/main/moge/scripts/infer_panorama.py",
        "https://huggingface.co/Ruicheng/moge-3-vitl"
      ],
      "notes": [
        "Official project states NeurIPS 2026 acceptance; official repository announced code and MoGe-3 checkpoints on 2026-08-18.",
        "No verified raw fisheye or complete ERP interface for v3. The repository experimental infer_panorama.py imports moge.model.v1 and defaults to MoGe-1; it does not establish v3 panorama support.",
        "Masking may store invalid depths/points as infinity; apply the valid mask before geometry processing.",
        "This is independent single-image geometry inference; fine detail does not establish temporal consistency, VIO accuracy or SLAM pose output.",
        "code_and_weights_released"
      ],
      "tags": [
        "monocular",
        "pinhole",
        "metric",
        "point-map",
        "sparse-3d-refinement",
        "z_depth",
        "point_map",
        "normal",
        "intrinsics"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-20",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_and_L3_interface_code_review",
      "codeEntry": [
        "moge/model/v3.py::MoGeModel.infer",
        "moge/scripts/infer.py --version v3 --pretrained ... --refine_steps 3",
        "moge/train/train_moge3.py"
      ],
      "environment": "Official package requires Python >=3.10 and PyTorch; v3 sparse refinement depends on FlexGEMM/Triton. Official installation notes do not support macOS. Platform compatibility was not tested locally.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Single pinhole RGB input. No verified raw fisheye or full-ERP entrance for this model version.",
            "zh": "单张针孔 RGB 输入；未核实此模型版本的原始鱼眼或完整 ERP 入口。"
          },
          "evidence": [
            "https://qft-333.github.io/moge3page/",
            "https://github.com/microsoft/MoGe"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/moge3-thumb.webp",
        "image": "assets/papers/moge3.webp",
        "paperUrl": "https://arxiv.org/pdf/2607.17967",
        "page": 4,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "MoGe-3 的基础点图模型、自引导稀疏三维细化及稀疏 U-Net。",
          "en": "MoGe-3 base point-map model, self-guided sparse 3D refinement and sparse U-Net."
        },
        "credit": {
          "zh": "来源：Lingyu Kong et al.，原论文 Figure 2。",
          "en": "Source: Lingyu Kong et al., Figure 2 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          108,
          72,
          505,
          261
        ],
        "originalCaption": "Figure 2: Method overview. (a) The Base model provides an initial point map and 2D features.",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-20",
        "selectionNotes": "Method diagram cropped from downloaded original paper; original page and final crop visually inspected. Caption stored separately.",
        "pdfSha256": "85beceed1e2ffc91db541f21f5ec07c6d596d7e90c62458ce8462bc20b4741c1",
        "imageSha256": "c2788da98fedbcfd886b853193d1391413035508f8de27afcc3951e64a7b6d49",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
    },
    {
      "id": "omnipoint2026",
      "collection": "depth",
      "name": "OmniPoint",
      "title": "OmniPoint: Universal Monocular Metric Pointcloud from Any Camera",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ECCV 2026 (official project and author pages); arXiv 2609.09394",
      "authors": [
        "Botao Ye",
        "Marc Pollefeys",
        "Ming-Hsuan Yang",
        "Abhijit Kundu"
      ],
      "institutions": [
        "Google DeepMind",
        "ETH Zurich"
      ],
      "summary": "统一针孔、原始鱼眼和完整 ERP 的单图公制点图模型，以射线与径向距离解耦相机和场景；可选内参与稀疏深度，需区分纯图像与条件输入结果。",
      "cameras": [
        "panoramic",
        "fisheye",
        "wide",
        "perspective"
      ],
      "scale": "metric",
      "scaleNote": "RGB-only prediction uses a learned global metric scale. Optional metric sparse depth supplies external scale through post-alignment; sparse-conditioned results must not be reported as image-only monocular performance.",
      "aliases": [],
      "metricStatus": "metric_learned",
      "depthType": "points",
      "outputs": [
        "radial_range",
        "point_map",
        "rays",
        "sky_mask"
      ],
      "pose": false,
      "inputSummary": "One RGB image; optional camera calibration and/or aligned sparse depth.",
      "outputSummary": "Dense metric camera-centered point map, predicted unit rays, radial distance, global metric scale and sky-region mask.",
      "inputs": {
        "frames": "One RGB image; optional camera calibration and/or aligned sparse depth.",
        "projection": "Pinhole perspective, raw fisheye and complete equirectangular panorama are explicitly documented input types; not merely virtual pinhole crops at inference.",
        "intrinsics": "Optional camera model/calibration is converted to a per-pixel ray map. RGB-only inference predicts rays without measured intrinsics.",
        "resolution": "Exact public inference resize, tensor shape and preprocessing are unverified because no author-linked implementation was located.",
        "extrinsics": "Not required for image-only inference; a sparse-depth sensor must be externally aligned to the image.",
        "imu": "No IMU input documented.",
        "gravity": "No measured gravity input documented.",
        "synchronization": "Single-image prediction. Sparse depth must correspond to the same image geometry; sensor calibration and synchronization are external integration requirements.",
        "sparse_depth": "Optional LiDAR/SfM sparse condition; normalized by its valid-value mean, Gaussian-smoothed, and supplied with a validity mask. Metric sparse conditions allow post-alignment of the prediction."
      },
      "outputDetails": {
        "primary": "Dense metric camera-centered point map, predicted unit rays, radial distance, global metric scale and sky-region mask.",
        "point_map": "P = s * d * r, where r is a unit ray, d the predicted radial distance and s a learned global metric scale.",
        "normal": "Normal consistency is a training loss; no separate normal-output head documented.",
        "confidence": "Sky-region masking head, not a calibrated depth-uncertainty output.",
        "camera_parameters": "Per-pixel ray field; optional calibrated rays condition the model. No public K recovery API or extrinsic/trajectory output verified.",
        "depth_convention": "The central representation is Euclidean radial distance along unit camera rays. Metric points are s*d*r and metric range is norm(P)=s*d. This is not inherently pinhole Z-depth; a point-map Z component is coordinate-axis dependent and does not remain a positive full-panorama depth. Serialized output conventions remain unverified without released source.",
        "metric_status": "metric_learned",
        "pose_output": "No camera pose, trajectory, VO/VIO state or loop-closure output documented.",
        "runtime": "No local inference timing or peak-memory measurement. Reported 72 A100 GPUs describe training, not inference requirements."
      },
      "codeStatus": "unverified",
      "codeUrl": "",
      "paperUrl": "https://arxiv.org/abs/2609.09394",
      "projectUrl": "https://botaoye.github.io/omnipoint/",
      "weightsUrl": "",
      "license": {
        "code": "Unknown: no author-linked public inference implementation verified.",
        "weights": "Unknown: no author-linked public checkpoint or checkpoint license verified."
      },
      "evidence": [
        "https://arxiv.org/abs/2609.09394",
        "https://botaoye.github.io/omnipoint/",
        "https://botaoye.github.io/omnipoint/assets/OmniPoint_ECCV2026_paper.pdf",
        "https://arxiv.org/html/2609.09394v1",
        "https://botaoye.github.io/"
      ],
      "notes": [
        "Official project and author pages identify ECCV 2026; a publisher chapter DOI was not independently verified.",
        "Camera support is paper-documented, not locally reproduced: the official project links paper/poster/BibTeX but no verified public inference code or checkpoint as of 2026-10-20.",
        "The panoramic baseline in Table 2 is DA-squared / Depth Anything in Any Direction, not DAP / Depth Any Panoramas. No direct DAP comparison was found in the reviewed official paper/project.",
        "Table 2 reports relative geometry on Stanford2D3D-S and PanoSUNCG; it does not establish metric panoramic superiority over DAP.",
        "Table 3 separates image-only, intrinsics-conditioned and sparse-depth-conditioned metric evaluations on six pinhole datasets. Stronger conditioned rows cannot be assigned to image-only inference.",
        "A normal consistency training loss does not prove an independent normal prediction output; sky masking is not calibrated geometric confidence.",
        "Single-image point maps do not establish temporal consistency, real camera motion or SLAM accuracy.",
        "implementation_status_unverified"
      ],
      "tags": [
        "monocular",
        "any-camera",
        "pinhole",
        "fisheye",
        "ERP",
        "metric",
        "ray-distance",
        "optional-geometric-priors",
        "radial_range",
        "point_map",
        "rays",
        "sky_mask"
      ],
      "family": "single-image universal metric point-map estimation",
      "imu": false,
      "loopClosure": "Not applicable",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-20",
      "publiclyVerified": true,
      "verificationLevel": "L2_original_paper_and_official_project_no_implementation_verified",
      "codeEntry": "Unknown",
      "environment": "Paper architecture: DINOv2 ViT-L backbone and DPT prediction heads. Public installable inference dependencies, hardware support and exact version requirements are unverified.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Complete ERP input is documented and evaluated on Stanford2D3D-S/PanoSUNCG. Bidirectional virtual-view augmentation is training, not a requirement to stitch separate inference patches.",
            "zh": "论文明确包含完整 ERP，并在 Stanford2D3D-S／PanoSUNCG 上评测。双向虚拟视图增强属于训练，不等于必须分块推理再拼接。"
          },
          "evidence": [
            "https://botaoye.github.io/omnipoint/assets/OmniPoint_ECCV2026_paper.pdf",
            "https://botaoye.github.io/omnipoint/"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Raw fisheye is explicitly evaluated on KITTI-360 using predicted rays and radial distance, rather than being inferred from an any-camera name.",
            "zh": "论文明确在 KITTI-360 评测原始鱼眼，以预测射线和径向距离恢复几何，不是由 any-camera 名称推断。"
          },
          "evidence": [
            "https://botaoye.github.io/omnipoint/assets/OmniPoint_ECCV2026_paper.pdf",
            "https://botaoye.github.io/omnipoint/"
          ]
        },
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole RGB is an explicit paper-documented input; intrinsics are optional. Public inference code/checkpoints remain unverified.",
            "zh": "论文明确包含针孔 RGB 输入，内参可选；公开推理代码和权重尚未核实。"
          },
          "evidence": [
            "https://botaoye.github.io/omnipoint/assets/OmniPoint_ECCV2026_paper.pdf",
            "https://botaoye.github.io/omnipoint/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/omnipoint2026-thumb.webp",
        "image": "assets/papers/omnipoint2026.webp",
        "paperUrl": "https://botaoye.github.io/omnipoint/assets/OmniPoint_ECCV2026_paper.pdf",
        "page": 6,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "OmniPoint 将图像与可选内参、稀疏深度条件输入 DINOv2，分别预测射线／径向距离、天空掩码与公制尺度。",
          "en": "OmniPoint combines image and optional intrinsic/sparse-depth conditions in DINOv2, with ray-distance, sky-mask and metric-scale heads."
        },
        "credit": {
          "zh": "来源：Botao Ye et al.，原论文 Figure 2。",
          "en": "Source: Botao Ye et al., Figure 2 of the original paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          134,
          114,
          482,
          206
        ],
        "originalCaption": "Fig. 2: Overview of OmniPoint.",
        "sourceLicense": "Original figure copyright remains with the paper authors/publisher; a permissive figure-reuse license was not independently verified.",
        "reviewedAt": "2026-10-20",
        "selectionNotes": "Official project PDF page 6 and final Figure 2 crop visually inspected. Complete method diagram retained; page header, caption and adjacent Figure 3 excluded.",
        "pdfSha256": "85ad75308f5f16bf48523e858d7a5f9329319e3214b6377a47fba2bf537b3a14",
        "imageSha256": "eac71ea7a7ebec8e77c42d78d7cbec16f19575b14bea9c4b14ef541e11bc2cf1",
        "verification": "Downloaded official PDF identity, page, figure label and complete crop boundaries visually confirmed; no generic replacement imagery."
      }
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
      "outputSummary": "ERP scale-invariant depth, metric depth, surface normals and sky mask from the unified checkpoint",
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
        "primary": "ERP scale-invariant depth, metric depth, surface normals and sky mask from the unified checkpoint",
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
        "https://arxiv.org/pdf/2605.26368v2#page=7",
        "https://arxiv.org/abs/2605.26368v2",
        "https://github.com/prs-eth/PaGeR#pretrained-models",
        "https://arxiv.org/abs/2605.26368"
      ],
      "notes": [
        "Reported paper metric results force indoor/outdoor scale head per dataset; default automatic router is a later release behavior.",
        "High-resolution ERP output does not increase the fixed six-face network input detail.",
        "Table 2 (arXiv v2, PDF p. 7) reports PaGeR ahead of DAP in 8 of 9 metric-depth dataset/metric cells; Matterport3D360 delta1 is the exception: 69.50% versus 80.19%. These are author-reported results, not local reproduction.",
        "Table 2, AbsRel (%)/RMSE (cm)/delta1 (%), PaGeR versus DAP: Matterport3D360 21.83/123.48/69.50 versus 30.16/168.88/80.19; Stanford2D3DS 10.94/45.43/90.94 versus 10.97/53.39/90.64; ZuriPano 31.97/530.85/39.30 versus 47.00/839.72/24.02.",
        "The paper evaluates metric predictions without GT alignment over [0,75] m. Both DAP and PaGeR have separate indoor/outdoor heads. The paper forces the domain per dataset; its numbers do not establish the accuracy of the later automatic CLIP router or superiority on a different evaluation protocol.",
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
      "sourceChecked": "2026-10-20",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial_paper_and_official_release_metadata",
      "codeEntry": [
        "inference.py",
        "app.py",
        "generate_point_cloud.py",
        "evaluation/depth_evaluation.py"
      ],
      "environment": "Official tested Linux, Python 3.10, PyTorch ≥2.0, CUDA ≥12.1.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP is the released panorama inference entrance; the six cube faces are internal shared-center views.",
            "zh": "已发布全景推理以 ERP 为入口；六个立方体面为内部共心视图。"
          },
          "evidence": [
            "https://pager360.github.io/",
            "https://github.com/prs-eth/PaGeR"
          ]
        },
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "paper",
          "note": {
            "en": "The paper explicitly includes perspective-image geometry prediction; the current public CLI is centered on ERP panoramas.",
            "zh": "论文明示同时预测透视图像几何；当前公开命令行主要面向 ERP 全景。"
          },
          "evidence": [
            "https://pager360.github.io/",
            "https://github.com/prs-eth/PaGeR"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/pager-thumb.webp",
        "image": "assets/papers/pager.webp",
        "paperUrl": "https://arxiv.org/pdf/2605.26368",
        "page": 4,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "共享几何骨干与尺度不变深度、米制深度、法线和天空预测。",
          "en": "Shared geometry backbone with scale-invariant/metric depth, normals and sky prediction."
        },
        "credit": {
          "zh": "来源：Vukasin Bozic 等，原论文图 2。",
          "en": "Source: Vukasin Bozic et al., Figure 2 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          94,
          65,
          506,
          171
        ],
        "originalCaption": "Figure 2: PaGeR Architecture. An input RGB panorama is processed by a shared geometry transformer backbone to predict a sky mask, scale-invariant (SI) depth, surface",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "88cf2516fac672870f10dc364c14742a87f7501dae6ce2122507561725868193",
        "imageSha256": "884636e4174249d78c86df1bd29ffc6a389dab86db47f2ab6ff5ebbcbf38be73",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Official setup uses Python 3.9 and requirements.txt.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs.",
            "zh": "外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。"
          },
          "evidence": [
            "https://arxiv.org/abs/2603.05999",
            "https://github.com/munimo/RePer360",
            "https://huggingface.co/ZSBD/RePer-360"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/reper360-thumb.webp",
        "image": "assets/papers/reper360.webp",
        "paperUrl": "https://arxiv.org/pdf/2603.05999",
        "page": 5,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "几何对齐引导、自调制与全景深度监督的整体框架。",
          "en": "Geometry-aligned guidance, self-modulation and panoramic depth supervision."
        },
        "credit": {
          "zh": "来源：Cheng Guan 等，原论文图 2。",
          "en": "Source: Cheng Guan et al., Figure 2 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          134,
          116,
          482,
          244
        ],
        "originalCaption": "Fig. 2: Overview of the proposed framework. Our framework takes a single panorama as input and outputs the corresponding depth map. The network leverages the",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "bf3b5ac5250340a6e7104e340749c5ed0d77f4ce5426ef8be3a54e776efdef55",
        "imageSha256": "5265810b1f9736591389d9b8e635a1ce9a91b5354f53901925888dbe961eec43",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Python3.10.18, torch2.7.0/torchvision0.22.0, cu118 official; DINOv3 ViT-L16",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Accepts ERP panoramas in its canonical ERP representation.",
            "zh": "以规范 ERP 表示接收 ERP 全景。"
          },
          "evidence": [
            "https://girish1511.github.io/UniDAC/"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "reprojected",
          "availability": "documented",
          "note": {
            "en": "The calibrated input is mapped to ERP before prediction; an ERP model entrance does not mean uncalibrated raw-lens support.",
            "zh": "标定输入先映射至 ERP 再预测；ERP 模型入口不意味着免标定处理原始镜头图像。"
          },
          "evidence": [
            "https://girish1511.github.io/UniDAC/"
          ]
        },
        {
          "geometry": "perspective",
          "route": "reprojected",
          "availability": "documented",
          "note": {
            "en": "The calibrated input is mapped to ERP before prediction; an ERP model entrance does not mean uncalibrated raw-lens support.",
            "zh": "标定输入先映射至 ERP 再预测；ERP 模型入口不意味着免标定处理原始镜头图像。"
          },
          "evidence": [
            "https://girish1511.github.io/UniDAC/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/unidac-thumb.webp",
        "image": "assets/papers/unidac.webp",
        "paperUrl": "https://arxiv.org/pdf/2603.27105",
        "page": 4,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "相对深度与深度引导尺度估计解耦的方法总览。",
          "en": "Method overview decoupling relative depth and depth-guided scale estimation."
        },
        "credit": {
          "zh": "来源：Girish Chandar Ganesan 等，原论文图 3。",
          "en": "Source: Girish Chandar Ganesan et al., Figure 3 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          58,
          65,
          560,
          263
        ],
        "originalCaption": "Figure 3. Overview of proposed method. UniDAC decouples metric depth estimation into relative depth and scale estimation. Relative depth relies on local scene information, while",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "27148fcd68a53de9266df9944a3b545711f4b9c8bb827a2a9d1690ff8417c4e8",
        "imageSha256": "6e7115456fe06bd6e1223d74a660d469c1471c3792e04903573b81792117f9d6",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "nativePanoramic": false,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "L2_partial",
      "codeEntry": [
        "vggt_omega/models/vggt_omega.py",
        "vggt_omega/utils/pose_enc.py::encoding_to_camera",
        "demo_gradio.py"
      ],
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support.",
            "zh": "已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。"
          },
          "evidence": [
            "https://raw.githubusercontent.com/facebookresearch/vggt-omega/main/README.md",
            "https://arxiv.org/abs/2605.15195",
            "https://vggt-omega.github.io/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/vggt_omega-thumb.webp",
        "image": "assets/papers/vggt_omega.webp",
        "paperUrl": "https://arxiv.org/pdf/2605.15195",
        "page": 3,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "图像、相机和场景令牌的交替注意力与几何输出。",
          "en": "Alternating attention over image, camera and scene tokens with geometry outputs."
        },
        "credit": {
          "zh": "来源：Jianyuan Wang 等，原论文图 2。",
          "en": "Source: Jianyuan Wang et al., Figure 2 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          58,
          62,
          555,
          289
        ],
        "originalCaption": "Figure 2. Architecture Overview. VGGT-Ω appends camera and scene tokens (registers) to image tokens, and then alternates between global attention (or register attention) and frame",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "ffd0456e4fe0b5c42c0c95161c7e6005eb2ce3c0071b3b37de9b72955c00879b",
        "imageSha256": "ea883de24e48c4fc93c2c3f7e23c8f9796a5d756389e95c668458ec1eda2285c",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Official conda Python3.9 torch1.13.1+cu116; custom CUDA operators; Docker alternative",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Accepts ERP panoramas in its canonical ERP representation.",
            "zh": "以规范 ERP 表示接收 ERP 全景。"
          },
          "evidence": [
            "https://yuliangguo.github.io/depth-any-camera/"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "reprojected",
          "availability": "documented",
          "note": {
            "en": "The calibrated input is mapped to ERP before prediction; an ERP model entrance does not mean uncalibrated raw-lens support.",
            "zh": "标定输入先映射至 ERP 再预测；ERP 模型入口不意味着免标定处理原始镜头图像。"
          },
          "evidence": [
            "https://yuliangguo.github.io/depth-any-camera/"
          ]
        },
        {
          "geometry": "perspective",
          "route": "reprojected",
          "availability": "documented",
          "note": {
            "en": "The calibrated input is mapped to ERP before prediction; an ERP model entrance does not mean uncalibrated raw-lens support.",
            "zh": "标定输入先映射至 ERP 再预测；ERP 模型入口不意味着免标定处理原始镜头图像。"
          },
          "evidence": [
            "https://yuliangguo.github.io/depth-any-camera/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/dac-thumb.webp",
        "image": "assets/papers/dac.webp",
        "paperUrl": "https://arxiv.org/pdf/2501.02464",
        "page": 4,
        "figureLabel": "Figure 4",
        "caption": {
          "zh": "统一 ERP 空间中的相机转换、训练增强与深度推理。",
          "en": "Camera conversion, training augmentation and depth inference in canonical ERP space."
        },
        "credit": {
          "zh": "来源：Yuliang Guo 等，原论文图 4。",
          "en": "Source: Yuliang Guo et al., Figure 4 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          58,
          70,
          555,
          313
        ],
        "originalCaption": "Figure 4. Depth Any Camera Pipeline. Our DAC framework converts data from any camera type into a canonical ERP space, enabling a model trained solely",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "5d6178faa9dd25136d166429104f3f5133b50bad32b5f4bf4e570c986eaee846",
        "imageSha256": "6a546a93456bb69be3ba9d446e2d092378216ed52286b34494906a9b62d8a884",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support.",
            "zh": "已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。"
          },
          "evidence": [
            "https://raw.githubusercontent.com/ByteDance-Seed/Depth-Anything-3/main/src/depth_anything_3/specs.py",
            "https://raw.githubusercontent.com/ByteDance-Seed/Depth-Anything-3/main/src/depth_anything_3/utils/alignment.py",
            "https://arxiv.org/abs/2511.10647"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/depth_anything_3-thumb.webp",
        "image": "assets/papers/depth_anything_3.webp",
        "paperUrl": "https://arxiv.org/pdf/2511.10647",
        "page": 5,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "单一 Transformer 与深度—射线预测的整体流程。",
          "en": "Single-transformer pipeline with depth and ray predictions."
        },
        "credit": {
          "zh": "来源：Haotong Lin 等，原论文图 2。",
          "en": "Source: Haotong Lin et al., Figure 2 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          70,
          97,
          543,
          253
        ],
        "originalCaption": "Figure 2 Pipeline of Depth Anything 3. Depth Anything 3 employs a single transformer (vanilla DINOv2 model) without any architectural modifications. To enable cross-view reasoning,",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "afa74735e20b667b91183f604224abbcd61d4f927c23a3c635015d0c9d83d083",
        "imageSha256": "3d5fa915c265dbe69756f74a22df741df25400760ca7095cf2e8b168f6ba4c10",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://raw.githubusercontent.com/antigravity-tech/DA360/main/test.py",
            "https://arxiv.org/abs/2512.22819",
            "https://antigravity-tech.github.io/DA360/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/da360-thumb.webp",
        "image": "assets/papers/da360.webp",
        "paperUrl": "https://arxiv.org/pdf/2512.22819",
        "page": 3,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "透视预训练模型适配全景的尺度不变训练框架。",
          "en": "Scale-invariant training framework adapting a perspective pretrained model to panoramas."
        },
        "credit": {
          "zh": "来源：Hualie Jiang 等，原论文图 3。",
          "en": "Source: Hualie Jiang et al., Figure 3 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          54,
          48,
          559,
          225
        ],
        "originalCaption": "Figure 3: Our framework is a generalizable panoramic depth estimation model, which fine-tunes a zero-shot pinhole depth model with synthetic panorama depth datasets to produce",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "5ed83b7d7fabd7024b13e17e32ccddb49ad2cf2932588b805d2ce23c7e5fac7f",
        "imageSha256": "3c5560734f0d129288bbc07b7ea5680ab748b5c4807ad3c4fbf178528f428c0f",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support.",
            "zh": "已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。"
          },
          "evidence": [
            "https://openreview.net/pdf?id=aueXfY0Clv",
            "https://github.com/apple-aiml-research/ml-depth-pro/blob/main/LICENSE",
            "https://raw.githubusercontent.com/apple-aiml-research/ml-depth-pro/main/src/depth_pro/depth_pro.py (infer1536 square, canonical inverse-depth times W/f then reciprocal)"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/depth_pro-thumb.webp",
        "image": "assets/papers/depth_pro.webp",
        "paperUrl": "https://arxiv.org/pdf/2410.02073",
        "page": 5,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "多尺度图像编码、特征融合与焦距估计网络。",
          "en": "Multiscale image encoding, feature fusion and focal-length estimation."
        },
        "credit": {
          "zh": "来源：Aleksei Bochkovskii 等，原论文图 3。",
          "en": "Source: Aleksei Bochkovskii et al., Figure 3 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          100,
          74,
          514,
          233
        ],
        "originalCaption": "Figure 3: Overview of the network architecture. An image is downsampled at several scales. At each scale, it is split into patches, which are processed",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "1108db233e3082286a522961a869f1c24bbf0f7b967aa85dc346809c294ac9af",
        "imageSha256": "676023d2c3d263a57676636da1c2262067f3daba5b31a5893c1c899d30eeca37",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
        "panoramic"
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
      "environment": "Official setup uses Python 3.11 and requirements.txt.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The surveyed depth-estimation application synchronizes panorama cubemap faces. A perspective RGB-D condition belongs to its panorama-generation task, not a separate pinhole depth-estimation interface.",
            "zh": "此处调研的深度估计应用同步全景 cubemap 各面；透视 RGB-D 条件属于全景生成任务，不是独立针孔深度估计入口。"
          },
          "evidence": [
            "https://yukun-huang.github.io/DreamCube/",
            "https://github.com/Yukun-Huang/DreamCube"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/dreamcube-thumb.webp",
        "image": "assets/papers/dreamcube.webp",
        "paperUrl": "https://arxiv.org/pdf/2506.17206",
        "page": 5,
        "figureLabel": "Figure 4",
        "caption": {
          "zh": "RGB-D 立方体扩散模型的训练与同步推理框架。",
          "en": "Training and synchronized inference of an RGB-D cubemap diffusion model."
        },
        "credit": {
          "zh": "来源：Yukun Huang 等，原论文图 4。",
          "en": "Source: Yukun Huang et al., Figure 4 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          58,
          65,
          555,
          311
        ],
        "originalCaption": "Figure 4. Training and inference framework of DreamCube for RGB-D cube map generation. At training time, RGB-D cube faces are encoded by synced VAE and",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "a20072f9ff0578bd2a553af7dd48336bce89911dd8fd3f886bb9bc2921b27e77",
        "imageSha256": "43d3bafd6acb2a7c932e638e7834f31b7c225608847b7b8035df8939feb2ad5d",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
    },
    {
      "id": "moge2",
      "collection": "depth",
      "name": "MoGe-2",
      "title": "MoGe-2: Accurate Monocular Geometry with Metric Scale and Sharp Details",
      "year": 2025,
      "firstYear": 2025,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "NeurIPS 2025 per official project; arXiv 2507.02546",
      "authors": [
        "Ruicheng Wang",
        "Sicheng Xu",
        "Yue Dong",
        "Yu Deng",
        "Jianfeng Xiang",
        "Zelong Lv",
        "Guangzhong Sun",
        "Xin Tong",
        "Jiaolong Yang"
      ],
      "institutions": [
        "University of Science and Technology of China",
        "Microsoft Research",
        "Tsinghua University"
      ],
      "summary": "将仿射不变点图与公制尺度预测解耦，利用合成标签细化真实训练几何；作为针孔公制点图、Z 深度及可选法线基线。",
      "cameras": [
        "perspective"
      ],
      "scale": "metric",
      "scaleNote": "Learned metric scale, decoupled from affine-invariant relative geometry; metric accuracy remains dependent on scene domain and camera recovery.",
      "aliases": [],
      "metricStatus": "metric_learned",
      "depthType": "z",
      "outputs": [
        "z_depth",
        "point_map",
        "normal",
        "intrinsics"
      ],
      "pose": false,
      "inputSummary": "Single RGB tensor (3,H,W) or (B,3,H,W), values [0,1]",
      "outputSummary": "Metric Z-depth, metric point map, normalized pinhole intrinsics and valid mask; normal map only for normal checkpoints",
      "inputs": {
        "frames": "Single RGB tensor (3,H,W) or (B,3,H,W), values [0,1]",
        "projection": "Pinhole perspective geometry; centered principal point and focal/axial-shift recovery",
        "intrinsics": "Optional fov_x in degrees; otherwise inferred. Returned K is normalized with principal point (0.5,0.5).",
        "resolution": "Adaptive num_tokens / resolution_level; public interface returns maps at input H,W",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity input in the public interface",
        "synchronization": "Single image; no temporal fusion"
      },
      "outputDetails": {
        "primary": "Metric Z-depth, metric point map, normalized pinhole intrinsics and valid mask; normal map only for normal checkpoints",
        "point_map": "Affine-invariant point-map branch aligned to a perspective camera and multiplied by the learned metric scale",
        "normal": "Available in -normal checkpoints; plain moge-2-vitl is listed without normals",
        "confidence": "Valid mask, not a calibrated depth uncertainty",
        "camera_parameters": "Normalized K; estimated focal or optional known horizontal FOV; no camera pose",
        "depth_convention": "v2 infer() recovers focal and axial shift, sets depth=points[...,2], optionally projects points using K, and applies metric_scale. Returned depth is camera Z; radial range is the norm of the 3D points.",
        "metric_status": "metric_learned",
        "pose_output": "No camera pose or trajectory output",
        "runtime": "No local runtime or peak-memory measurement; do not treat repository-wide timings as version-specific benchmarks."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/microsoft/MoGe",
      "paperUrl": "https://arxiv.org/abs/2507.02546",
      "projectUrl": "https://wangrc.site/MoGe2Page/",
      "weightsUrl": "https://huggingface.co/Ruicheng/moge-2-vitl-normal",
      "license": {
        "code": "MIT; bundled DINOv2 component Apache-2.0; other dependencies retain their terms",
        "weights": "Official Ruicheng/moge-2-vitl-normal model metadata declares MIT; model card prose is empty"
      },
      "evidence": [
        "https://arxiv.org/abs/2507.02546",
        "https://wangrc.site/MoGe2Page/",
        "https://github.com/microsoft/MoGe",
        "https://github.com/microsoft/MoGe/blob/main/moge/model/v2.py",
        "https://github.com/microsoft/MoGe/blob/main/moge/scripts/infer_panorama.py",
        "https://huggingface.co/Ruicheng/moge-2-vitl-normal"
      ],
      "notes": [
        "Distinct NeurIPS 2025 publication preceding MoGe-3; retain this baseline when evaluating sparse 3D refinement.",
        "Plain and -normal checkpoints expose different normal capabilities; do not infer all model variants output normals.",
        "No verified v2 native ERP/fisheye path. The repository experimental panorama wrapper imports v1, so it is not evidence of v2 panorama support.",
        "Single-image geometry and learned metric scale do not provide a measured trajectory or temporal consistency.",
        "code_and_weights_released"
      ],
      "tags": [
        "monocular",
        "pinhole",
        "metric",
        "point-map",
        "data-refinement",
        "z_depth",
        "point_map",
        "normal",
        "intrinsics"
      ],
      "family": "depth_and_geometry",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-20",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_and_L3_interface_code_review",
      "codeEntry": [
        "moge/model/v2.py::MoGeModel.infer",
        "moge/scripts/infer.py --version v2",
        "moge/train/train_moge12.py"
      ],
      "environment": "Official shared package uses Python >=3.10 and PyTorch; verify the selected v2 checkpoint and current dependency versions before reproduction. No local platform or inference test.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Single pinhole RGB input. No verified raw fisheye or full-ERP entrance for this model version.",
            "zh": "单张针孔 RGB 输入；未核实此模型版本的原始鱼眼或完整 ERP 入口。"
          },
          "evidence": [
            "https://wangrc.site/MoGe2Page/",
            "https://github.com/microsoft/MoGe"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/moge2-thumb.webp",
        "image": "assets/papers/moge2.webp",
        "paperUrl": "https://arxiv.org/pdf/2507.02546",
        "page": 4,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "MoGe-2 将仿射点图与 CLS 标记驱动的公制尺度预测分离。",
          "en": "MoGe-2 separates affine point maps from CLS-token-driven metric scale prediction."
        },
        "credit": {
          "zh": "来源：Ruicheng Wang et al.，原论文 Figure 2。",
          "en": "Source: Ruicheng Wang et al., Figure 2 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          108,
          73,
          506,
          161
        ],
        "originalCaption": "Figure 2: Overview of our model architecture.",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-20",
        "selectionNotes": "Method diagram cropped from downloaded original paper; original page and final crop visually inspected. Caption stored separately.",
        "pdfSha256": "346b3028857dff55f50b25d625d99a2afe0fb9ad6e1de5d08889fcd1ddadd13a",
        "imageSha256": "2c037e6936220aed81353197c06a2a235b302eef913bf1aef0558ec871f950f0",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Python3.10 torch2.0.0 CUDA11.7 cuDNN8.5 official",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Documented panoramic depth model; raw fisheye requires a separate calibrated conversion and is not tagged as native input.",
            "zh": "已记录的全景深度模型；原始鱼眼需外部标定转换，不标成原生输入。"
          },
          "evidence": [
            "https://caozidong.github.io/PanDA_Depth/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/panda-thumb.webp",
        "image": "assets/papers/panda.webp",
        "paperUrl": "https://openaccess.thecvf.com/content/CVPR2025/papers/Cao_PanDA_Towards_Panoramic_Depth_Anything_with_Unlabeled_Panoramas_and_Mobius_CVPR_2025_paper.pdf",
        "page": 5,
        "figureLabel": "Figure 8",
        "caption": {
          "zh": "联合有标签与无标签全景的半监督训练及空间增强。",
          "en": "Semi-supervised training and spatial augmentation with labeled and unlabeled panoramas."
        },
        "credit": {
          "zh": "来源：Zidong Cao 等，原论文图 8。",
          "en": "Source: Zidong Cao et al., Figure 8 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          58,
          65,
          297,
          243
        ],
        "originalCaption": "Figure 8. (a) The SSL pipeline on joint labeled and unlabeled datasets. (b) The Mo¨bius transformation-based spatial augmenta- tion (MTSA) pipeline on unlabeled datasets. Our",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "096fb1d39445a06601b0ca9831bbf6740cff11a6ad4a4738382f931263612607",
        "imageSha256": "9cbe88edd2a505acabcbd29d566641fc57aaa3722ba547dcdededab7317ad7ae",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Unknown; official requirements must be checked for the selected version.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs.",
            "zh": "外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。"
          },
          "evidence": [
            "https://arxiv.org/html/2509.23991",
            "https://github.com/jdk9405/RPG360",
            "https://papers.nips.cc/paper_files/paper/2025/file/fb1ea28c42fcd32bd49e68769b26028f-Paper-Conference.pdf"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/rpg360-thumb.webp",
        "image": "assets/papers/rpg360.webp",
        "paperUrl": "https://arxiv.org/pdf/2509.23991",
        "page": 5,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "透视基础模型初始化与图优化联合细化深度和法线。",
          "en": "Perspective foundation-model initialization and graph refinement of depth and normals."
        },
        "credit": {
          "zh": "来源：Dongki Jung 等，原论文图 3。",
          "en": "Source: Dongki Jung et al., Figure 3 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          108,
          65,
          506,
          210
        ],
        "originalCaption": "Figure 3: Overview of our depth estimation method. 1) The input equirectangular (ERP) image is projected onto a six-face cubemap, where each non-overlapping face is",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "66c712ad3cd29529e08da2e2509f265ce179657399694cb3352e47d9377548e4",
        "imageSha256": "78b5b20bef89377b1ecefd991e01ba291570c4785fe084e5c7543649b656cb96",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Unknown; official requirements must be checked for the selected version.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs.",
            "zh": "外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。"
          },
          "evidence": [
            "https://caozidong.github.io/ST2360D_Depth/",
            "https://openreview.net/pdf?id=d0bm4upnQ8",
            "https://haoai-1997.github.io/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/st2_360d-thumb.webp",
        "image": "assets/papers/st2_360d.webp",
        "paperUrl": "https://papers.nips.cc/paper_files/paper/2025/file/45c361d4117d598d4bb6568b407e9ac9-Paper-Conference.pdf",
        "page": 2,
        "figureLabel": "Figure 1",
        "caption": {
          "zh": "把单幅全景转换成虚拟视频以复用视频深度一致性。",
          "en": "Converting one panorama into a virtual video to reuse temporal depth consistency."
        },
        "credit": {
          "zh": "来源：Zidong Cao 等，原论文图 1。",
          "en": "Source: Zidong Cao et al., Figure 1 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          108,
          65,
          506,
          184
        ],
        "originalCaption": "Figure 1: Left: Our proposed training-free pipeline. We represent a 360◦ image as video frames, mimicking viewpoint adjustments in VR. The arrow → denotes the",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "4ac0dba1ee0bd7bc28ef844b3e20820f12bf08970182de13f7a0f0013d01d464",
        "imageSha256": "832386db2b82e48dee74521a7a385577963acc836064fcc99f8bf8510a232f7f",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Linux Python3.10+ CUDA11.8+ official",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support.",
            "zh": "已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。"
          },
          "evidence": [
            "https://raw.githubusercontent.com/lpiccinelli-eth/UniDepth/main/unidepth/models/unidepthv2/unidepthv2.py",
            "https://arxiv.org/abs/2502.20110",
            "https://github.com/lpiccinelli-eth/UniDepth#unidepthv2"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/unidepth_v2-thumb.webp",
        "image": "assets/papers/unidepth_v2.webp",
        "paperUrl": "https://arxiv.org/pdf/2502.20110",
        "page": 3,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "相机分支与深度分支共同恢复三维几何的网络总览。",
          "en": "Camera and depth branches for recovering 3D geometry."
        },
        "credit": {
          "zh": "来源：Luigi Piccinelli 等，原论文图 2。",
          "en": "Source: Luigi Piccinelli et al., Figure 2 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          48,
          51,
          565,
          212
        ],
        "originalCaption": "Fig. 2. Model Architecture. UniDepthV2 utilizes solely the input image to generate the 3D output (O). It bootstraps a dense camera prediction (C) from the",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "1a76d9b246451eaa9dd47b9e0cc552234b3749d7d9b87b26a582b5bbd17b4b69",
        "imageSha256": "0afa3a69d0f1669f4b06f76b0d43baf907f4870e2bd93b283027b55d19e3dc81",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Linux Python3.10+ CUDA11.8+; pip install -e with cu121 official",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Direct image inference predicts a camera-independent ray representation and metric points; explicit fisheye, panoramic and pinhole evaluation supports the overlap.",
            "zh": "直接从图像预测通用射线表示与公制点；论文明确评测鱼眼、全景与针孔，故允许多类别重叠。"
          },
          "evidence": [
            "https://lpiccinelli-eth.github.io/pub/unik3d/",
            "https://github.com/lpiccinelli-eth/UniK3D"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Direct image inference predicts a camera-independent ray representation and metric points; explicit fisheye, panoramic and pinhole evaluation supports the overlap.",
            "zh": "直接从图像预测通用射线表示与公制点；论文明确评测鱼眼、全景与针孔，故允许多类别重叠。"
          },
          "evidence": [
            "https://lpiccinelli-eth.github.io/pub/unik3d/",
            "https://github.com/lpiccinelli-eth/UniK3D"
          ]
        },
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Direct image inference predicts a camera-independent ray representation and metric points; explicit fisheye, panoramic and pinhole evaluation supports the overlap.",
            "zh": "直接从图像预测通用射线表示与公制点；论文明确评测鱼眼、全景与针孔，故允许多类别重叠。"
          },
          "evidence": [
            "https://lpiccinelli-eth.github.io/pub/unik3d/",
            "https://github.com/lpiccinelli-eth/UniK3D"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/unik3d-thumb.webp",
        "image": "assets/papers/unik3d.webp",
        "paperUrl": "https://arxiv.org/pdf/2503.16591",
        "page": 3,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "角度相机模块与径向模块联合预测三维点的网络结构。",
          "en": "Angular camera and radial modules for predicting 3D points."
        },
        "credit": {
          "zh": "来源：Luigi Piccinelli 等，原论文图 2。",
          "en": "Source: Luigi Piccinelli et al., Figure 2 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          58,
          63,
          555,
          229
        ],
        "originalCaption": "Figure 2. Model architecture. UniK3D utilizes solely the single input image to generate the 3D output point cloud (O) for any camera. The projective geometry",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "8b3016bdf88ee91588a55e6b2e140249e53a67f65b5e927a1c76ce61cf3ee71a",
        "imageSha256": "f165c82ccc54b02189d947739a923068fea80333afd0e109077b0bc0c8e937f6",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support.",
            "zh": "已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。"
          },
          "evidence": [
            "https://raw.githubusercontent.com/facebookresearch/vggt/main/vggt/models/vggt.py",
            "https://raw.githubusercontent.com/facebookresearch/vggt/main/LICENSE.txt",
            "https://arxiv.org/abs/2503.11651"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/vggt-thumb.webp",
        "image": "assets/papers/vggt.webp",
        "paperUrl": "https://arxiv.org/pdf/2503.11651",
        "page": 3,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "交替注意力骨干及相机、深度、点图与跟踪预测头。",
          "en": "Alternating-attention backbone and camera, depth, point-map and tracking heads."
        },
        "credit": {
          "zh": "来源：Jianyuan Wang 等，原论文图 2。",
          "en": "Source: Jianyuan Wang et al., Figure 2 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          58,
          68,
          562,
          252
        ],
        "originalCaption": "Figure 2. Architecture Overview. Our model first patchifies the input images into tokens by DINO, and appends camera tokens for camera prediction. It then alternates",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "5d7ab44d129172f39ef5918feb0014c4d041fd0e92f995d4dbbd7327a6e91d52",
        "imageSha256": "1e8376743ebdaf0a72ba688ebe2206c13241e01534a600f460aa49956c192025",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support.",
            "zh": "已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。"
          },
          "evidence": [
            "https://raw.githubusercontent.com/DepthAnything/Video-Depth-Anything/main/README.md",
            "https://arxiv.org/abs/2501.12375",
            "https://videodepthanything.github.io/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/video_depth_anything-thumb.webp",
        "image": "assets/papers/video_depth_anything.webp",
        "paperUrl": "https://arxiv.org/pdf/2501.12375",
        "page": 4,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "基于 Depth Anything V2 编码器与时空预测头的视频流程。",
          "en": "Video pipeline with a Depth Anything V2 encoder and spatiotemporal head."
        },
        "credit": {
          "zh": "来源：Sili Chen 等，原论文图 2。",
          "en": "Source: Sili Chen et al., Figure 2 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          50,
          67,
          546,
          192
        ],
        "originalCaption": "Figure 2. Overall pipeline and the spatio-temporal head. Left: Our model is composed of a backbone encoder from Depth Anything V2 and a newly proposed",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "188e1aa3bc19506fa2069df3f3b30161b9aab9f67a4d020b3a8855d36642a5fb",
        "imageSha256": "74d9d1fbd2bf3a4a0d8720a2bcc6778fb2f7b596729bf8a900024ce98c812fb1",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support.",
            "zh": "已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。"
          },
          "evidence": [
            "https://github.com/DepthAnything/Depth-Anything-V2/blob/main/depth_anything_v2/dpt.py",
            "https://arxiv.org/abs/2406.09414",
            "https://depth-anything-v2.github.io/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/depth_anything_v2-thumb.webp",
        "image": "assets/papers/depth_anything_v2.webp",
        "paperUrl": "https://arxiv.org/pdf/2406.09414",
        "page": 6,
        "figureLabel": "Figure 7",
        "caption": {
          "zh": "合成数据教师、真实图像伪标签与学生模型的训练流程。",
          "en": "Teacher training on synthetic images, real-image pseudo labels and student training."
        },
        "credit": {
          "zh": "来源：Lihe Yang 等，原论文图 7。",
          "en": "Source: Lihe Yang et al., Figure 7 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          108,
          65,
          506,
          184
        ],
        "originalCaption": "Figure 7: Depth Anything V2. We first train the most capable teacher on precise synthetic images. Then, to mitigate the distribution shift and limited diversity",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "b156a023aa9a5e33bda60489962af809a67e748797d4357c790d063739fed2d7",
        "imageSha256": "853ca3be5856ae05ea74a70ba1919b1f0dbcc81e9fc1ed1240518cd70bb859db",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Official simplified environment uses Python 3.8 plus requirements.txt; teacher/student dependencies differ.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs.",
            "zh": "外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。"
          },
          "evidence": [
            "https://arxiv.org/abs/2406.12849",
            "https://albert100121.github.io/Depth-Anywhere/",
            "https://github.com/albert100121/Depth-Anywhere"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/depth_anywhere-thumb.webp",
        "image": "assets/papers/depth_anywhere.webp",
        "paperUrl": "https://arxiv.org/pdf/2406.12849",
        "page": 4,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "有标签全景监督与透视模型蒸馏的联合训练流程。",
          "en": "Joint training with labeled panoramas and perspective-model distillation."
        },
        "credit": {
          "zh": "来源：Ning-Hsu Albert Wang 等，原论文图 2。",
          "en": "Source: Ning-Hsu Albert Wang et al., Figure 2 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          108,
          70,
          505,
          237
        ],
        "originalCaption": "Figure 2: Training Pipeline. Our proposed training pipeline involves joint training on both labeled 360 data with ground truth and unlabeled 360 data. (a) For",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "818d4e7c788bd696082e16571a3b561b5853db745e539122579fa46975ac3de5",
        "imageSha256": "affff6aaab2d0ae46f4ac482573a91e8ba8d0c316f4356dd9498d8d61d14f95a",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Official setup: Python 3.10, PyTorch ≥1.12.0, CUDA ≥11.3.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs.",
            "zh": "外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。"
          },
          "evidence": [
            "https://arxiv.org/abs/2403.16376",
            "https://github.com/haoai-1997/Elite360D",
            "https://github.com/haoai-1997/Elite360D/tree/main/checkpoints"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/elite360d-thumb.webp",
        "image": "assets/papers/elite360d.webp",
        "paperUrl": "https://arxiv.org/pdf/2403.16376",
        "page": 3,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "ERP 与二十面体点特征的双投影融合方法。",
          "en": "Bi-projection fusion of ERP features and icosahedral point features."
        },
        "credit": {
          "zh": "来源：Hao Ai 等，原论文图 3。",
          "en": "Source: Hao Ai et al., Figure 3 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          50,
          65,
          546,
          243
        ],
        "originalCaption": "Figure 3. (a) An overview of our Elite360D framework, comprising image-based ERP feature extraction (Sec. 3.1), point-based ICOSAP feature extraction (Sec. 3.2), and Bi-projection Bi-attention",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "856ebeb10679120ee6bed207d3f090e62862310f57f983bb511cb171253bb3fb",
        "imageSha256": "c7a2aae8a6c69f23af24f2865dee5436f2235d315ca8c14c2095d33e4986fd20",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
    },
    {
      "id": "marigold",
      "collection": "depth",
      "name": "Marigold",
      "title": "Marigold: Repurposing Diffusion-Based Image Generators for Monocular Depth Estimation",
      "year": 2024,
      "firstYear": 2024,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "CVPR 2024 (Oral); original preprint December 2023",
      "authors": [
        "Bingxin Ke",
        "Anton Obukhov",
        "Shengyu Huang",
        "Nando Metzger",
        "Rodrigo Caye Daudt",
        "Konrad Schindler"
      ],
      "institutions": [
        "ETH Zurich"
      ],
      "summary": "将 Stable Diffusion 改作单图深度预测，以合成数据微调并可集成多次采样；输出保留尺度与偏移歧义，是扩散式针孔深度的重要对照。",
      "cameras": [
        "perspective"
      ],
      "scale": "relative",
      "scaleNote": "Scale-and-shift ambiguous monocular depth. RGB-only inference supplies no metric scale.",
      "aliases": [],
      "metricStatus": "scale_shift_invariant",
      "depthType": "affine",
      "outputs": [
        "relative_depth"
      ],
      "pose": false,
      "inputSummary": "Single RGB image; PIL image or tensor according to pipeline",
      "outputSummary": "Affine-invariant H,W depth in [0,1]; normalized values are not meters",
      "inputs": {
        "frames": "Single RGB image; PIL image or tensor according to pipeline",
        "projection": "Perspective/pinhole-image depth baseline; no verified native fisheye or ERP interface",
        "intrinsics": "No intrinsics needed for affine-invariant depth inference; metric unprojection requires resolving scale/shift and calibration",
        "resolution": "Official depth-v1-1 card recommends resizing the long edge to 768 pixels for effective model resolution; supports other image sizes",
        "extrinsics": "Not required",
        "imu": "No",
        "gravity": "No measured gravity input in the public interface",
        "synchronization": "Single-image inference; no temporal state"
      },
      "outputDetails": {
        "primary": "Affine-invariant H,W depth in [0,1]; normalized values are not meters",
        "point_map": "No direct point-map head; unprojection needs valid intrinsics and resolved depth scale/shift",
        "normal": "Not from this original depth checkpoint; later separate normal models belong to the expanded Marigold family",
        "confidence": "Optional uncalibrated median-absolute-deviation uncertainty from ensembling; absent for a single prediction",
        "camera_parameters": "No camera intrinsics or poses predicted",
        "depth_convention": "Affine-invariant depth, not an inverse-depth prediction: an unknown positive scale and additive shift remain. Values in [0,1] span predicted near/far planes and are not physical Z or radial distances until aligned.",
        "metric_status": "scale_shift_invariant",
        "pose_output": "No camera pose or trajectory output",
        "runtime": "No local runtime or peak-memory measurement; do not treat repository-wide timings as version-specific benchmarks."
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/prs-eth/Marigold",
      "paperUrl": "https://arxiv.org/abs/2312.02145",
      "projectUrl": "https://marigoldmonodepth.github.io/",
      "weightsUrl": "https://huggingface.co/prs-eth/marigold-depth-v1-1",
      "license": {
        "code": "Apache-2.0",
        "weights": "CreativeML Open RAIL++-M; code and weight licenses differ"
      },
      "evidence": [
        "https://arxiv.org/abs/2312.02145",
        "https://openaccess.thecvf.com/content/CVPR2024/html/Ke_Repurposing_Diffusion-Based_Image_Generators_for_Monocular_Depth_Estimation_CVPR_2024_paper.html",
        "https://marigoldmonodepth.github.io/",
        "https://github.com/prs-eth/Marigold",
        "https://github.com/prs-eth/Marigold/blob/main/marigold/marigold_depth_pipeline.py",
        "https://huggingface.co/prs-eth/marigold-depth-v1-1"
      ],
      "notes": [
        "The entry is anchored to the original CVPR 2024 depth paper. The current official repository also contains the 2025 journal extension; the linked v1-1 checkpoint is a later same-family depth update.",
        "Denoising steps and ensemble size trade runtime for output quality. The optional uncertainty is not a calibrated metric error bound.",
        "Do not confuse normalized affine-invariant depth with inverse depth or a metric depth sensor.",
        "The original RGB-depth model has no temporal, pose, fisheye or full-panorama inference guarantee.",
        "code_and_weights_released"
      ],
      "tags": [
        "monocular",
        "pinhole",
        "relative",
        "affine-invariant-depth",
        "diffusion",
        "relative_depth"
      ],
      "family": "monocular_depth",
      "imu": "No",
      "loopClosure": "Not applicable",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-20",
      "publiclyVerified": true,
      "verificationLevel": "L2_paper_and_L3_interface_code_review",
      "codeEntry": [
        "marigold/marigold_depth_pipeline.py::MarigoldDepthPipeline",
        "run.py",
        "Diffusers MarigoldDepthPipeline"
      ],
      "environment": "Official PyTorch/Diffusers implementation; separate DDIM/LCM checkpoints and scheduler settings must match. Exact dependency versions and local performance were not audited.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Single pinhole RGB input. No verified raw fisheye or full-ERP entrance for this model version.",
            "zh": "单张针孔 RGB 输入；未核实此模型版本的原始鱼眼或完整 ERP 入口。"
          },
          "evidence": [
            "https://marigoldmonodepth.github.io/",
            "https://github.com/prs-eth/Marigold"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/marigold-thumb.webp",
        "image": "assets/papers/marigold.webp",
        "paperUrl": "https://openaccess.thecvf.com/content/CVPR2024/papers/Ke_Repurposing_Diffusion-Based_Image_Generators_for_Monocular_Depth_Estimation_CVPR_2024_paper.pdf",
        "page": 5,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "Marigold 将图像编码为潜变量，条件去噪后解码深度。",
          "en": "Marigold encodes the image, conditions latent denoising, and decodes depth."
        },
        "credit": {
          "zh": "来源：Bingxin Ke et al.，原论文 Figure 3。",
          "en": "Source: Bingxin Ke et al., Figure 3 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          49,
          70,
          294,
          184
        ],
        "originalCaption": "Figure 3. Overview of the Marigold inference scheme.",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-20",
        "selectionNotes": "Method diagram cropped from downloaded original paper; original page and final crop visually inspected. Caption stored separately.",
        "pdfSha256": "ea7d878018e2aa87efdf7116b31ed1e6568877f94cfc5486f77a1f12fa7f9522",
        "imageSha256": "52b09446c29b3abf4b4f522fa3c0c241621e871e9b13b3f9966524a2dac02cd7",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support.",
            "zh": "已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。"
          },
          "evidence": [
            "https://raw.githubusercontent.com/YvanYin/Metric3D/main/LICENSE",
            "https://arxiv.org/html/2404.15506v1 (Method III and Applications IV-B inspected)",
            "https://arxiv.org/abs/2404.15506"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/metric3d_v2-thumb.webp",
        "image": "assets/papers/metric3d_v2.webp",
        "paperUrl": "https://arxiv.org/pdf/2404.15506",
        "page": 4,
        "figureLabel": "Figure 4",
        "caption": {
          "zh": "统一米制深度与法线估计的整体方法。",
          "en": "Overall methodology for joint metric depth and surface-normal estimation."
        },
        "credit": {
          "zh": "来源：Mu Hu 等，原论文图 4。",
          "en": "Source: Mu Hu et al., Figure 4 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          54,
          45,
          559,
          310
        ],
        "originalCaption": "Fig. 4 – Overall methodology. Our method takes a single image to predict the metric depth and surface normal simultaneously. We apply large-scale data training",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "0c7c00d93c525db03f8f989a687b71ce6ac3a76089c50cb62615d738ce473463",
        "imageSha256": "87a9eb7f031a64e7484e7d81a0be16b450ce5889528bcd34f35003f7a64ffcc9",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "PyTorch official repository; exact version requirements not fully audited: Unknown",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs.",
            "zh": "外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。"
          },
          "evidence": [
            "https://arxiv.org/pdf/2209.02952 (paper Fig1 confirms 3-frame PoseNet during training)",
            "https://arxiv.org/abs/2209.02952",
            "https://github.com/fuenwang/BiFusev2"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/bifuse_pp-thumb.webp",
        "image": "assets/papers/bifuse_pp.webp",
        "paperUrl": "https://arxiv.org/pdf/2209.02952",
        "page": 2,
        "figureLabel": "Figure 1",
        "caption": {
          "zh": "双投影深度网络与位姿网络的自监督框架。",
          "en": "Self-supervised framework with bi-projection depth and pose networks."
        },
        "credit": {
          "zh": "来源：Fu-En Wang 等，原论文图 1。",
          "en": "Source: Fu-En Wang et al., Figure 1 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          44,
          38,
          591,
          227
        ],
        "originalCaption": "Fig. 1. Our BiFuse++ is a self-supervised framework of monocular 360◦ depth estimation. The depth estimation network (DepthNet) is a bi-projection architecture consisting of two",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "300c5fba0ae49983f53d796e6ba0a10fcba723d9f37785a5b21577fc7a459189",
        "imageSha256": "339184ab813c36223d6c7e55ebea50aa2b720aca7400270839938b0ea9181881",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Unknown; official requirements must be checked for the selected version.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs.",
            "zh": "外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。"
          },
          "evidence": [
            "https://arxiv.org/abs/2303.11616",
            "https://openaccess.thecvf.com/content/CVPR2023/papers/Ai_HRDFuse_Monocular_360deg_Depth_Estimation_by_Collaboratively_Learning_Holistic-With-Regional_Depth_CVPR_2023_paper.pdf",
            "https://github.com/haoai-1997/HRDFuse"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/hrdfuse-thumb.webp",
        "image": "assets/papers/hrdfuse.webp",
        "paperUrl": "https://arxiv.org/pdf/2303.11616",
        "page": 3,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "ERP 与切平面特征对齐和深度分布协作预测。",
          "en": "ERP/tangent feature alignment and collaborative depth-distribution prediction."
        },
        "credit": {
          "zh": "来源：Hao Ai 等，原论文图 3。",
          "en": "Source: Hao Ai et al., Figure 3 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          50,
          65,
          546,
          212
        ],
        "originalCaption": "Figure 3. Overview of our HRDFuse, consisting of three parts: feature extractors for both ERP and TP inputs, spatial feature alignment (SFA) module, and collaborative",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "975d4064f849ac88588f6cfe99401efd9417a3ee9e456ec4cafb50dfa492c0c1",
        "imageSha256": "b4ad7644588a955146541188578df72a0780d4a655192ecfcc9b9488410c25e7",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Official setup: Python ≥3.8 plus C++ Ceres/Eigen/OpenCV/pybind11; Docker recommended.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs.",
            "zh": "外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。"
          },
          "evidence": [
            "https://arxiv.org/html/2111.15669",
            "https://github.com/manurare/360monodepth",
            "https://raw.githubusercontent.com/manurare/360monodepth/main/code/python/src/main.py"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/360monodepth-thumb.webp",
        "image": "assets/papers/360monodepth.webp",
        "paperUrl": "https://arxiv.org/pdf/2111.15669",
        "page": 1,
        "figureLabel": "Figure 1",
        "caption": {
          "zh": "切平面预测、视差对齐与融合的高分辨率全景流程。",
          "en": "High-resolution panoramic pipeline with tangent predictions, disparity alignment and blending."
        },
        "credit": {
          "zh": "来源：Manuel Rey-Area 等，原论文图 1。",
          "en": "Source: Manuel Rey-Area et al., Figure 1 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          50,
          202,
          546,
          390
        ],
        "originalCaption": "Figure 1. We present a flexible framework for estimating high-resolution disparity maps from a single 360° input image by decomposing it into perspective tangent images,",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "2648bee5cc6f48a2454f85d9dac5f52cdcc84db572ff195678610bddfe96a8c0",
        "imageSha256": "b025736452bf639c7f716ebbaff337f841a7d1571f5f52db19699bb49f393e8a",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Official PyTorch ≥1.5.0, gcc/g++ ≤7.5.0 for spherical convolution.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf",
            "https://github.com/nju-ee/MODE-2022",
            "https://raw.githubusercontent.com/nju-ee/MODE-2022/main/README.md"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/mode-thumb.webp",
        "image": "assets/papers/mode.webp",
        "paperUrl": "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf",
        "page": 2,
        "figureLabel": "Figure 1",
        "caption": {
          "zh": "四相机装置、多视图全景深度及点云重建概览。",
          "en": "Four-camera rig, multiview omnidirectional depth and point-cloud reconstruction overview."
        },
        "credit": {
          "zh": "来源：Ming Li 等，原论文图 1。",
          "en": "Source: Ming Li et al., Figure 1 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          134,
          113,
          482,
          260
        ],
        "originalCaption": "Fig. 1. Overview of the proposed multi-view omnidirectional depth estima- tion framework. (a) shows the multiple 360◦ camera rig. (b) shows the result of our",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "2251f9c91c93ed0dee6b68a15b3207ecf220727c3898b7719cd035fb2ee8d569",
        "imageSha256": "fda6afad57287db3d844eb4b68f233b1e6b500673b22edfed9dc2d071384e612",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Official tested Python 3.7.4, PyTorch 1.9.0, CUDA 11.6.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs.",
            "zh": "外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。"
          },
          "evidence": [
            "https://arxiv.org/abs/2203.00838",
            "https://openaccess.thecvf.com/content/CVPR2022/papers/Li_OmniFusion_360_Monocular_Depth_Estimation_via_Geometry-Aware_Fusion_CVPR_2022_paper.pdf",
            "https://github.com/yuliangguo/OmniFusion"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/omnifusion-thumb.webp",
        "image": "assets/papers/omnifusion.webp",
        "paperUrl": "https://arxiv.org/pdf/2203.00838",
        "page": 3,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "切平面特征、几何嵌入与全局融合的整体流程。",
          "en": "Tangent-image features, geometric embedding and global fusion pipeline."
        },
        "credit": {
          "zh": "来源：Yuyan Li 等，原论文图 2。",
          "en": "Source: Yuyan Li et al., Figure 2 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          50,
          65,
          546,
          192
        ],
        "originalCaption": "Figure 2. Overview of our proposed OmniFusion. Our method takes a monocular ERP RGB as input, projects it onto multiple patches at multiple viewpoints, and",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "908e0dc76a7369924d4fd44292cf49df714668d7f750bf0d942c76d23427c499",
        "imageSha256": "abb67e43c3177f437a8c9ad982a11278bfde6e4708dd8d5e784715cab7b7ebb1",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Official PyTorch1.7.1 Python3.8 CUDA10.1 RTX3090",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://arxiv.org/abs/2203.09283",
            "https://github.com/zhijieshen-bjtu/PanoFormer"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/panoformer-thumb.webp",
        "image": "assets/papers/panoformer.webp",
        "paperUrl": "https://arxiv.org/pdf/2203.09283",
        "page": 4,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "全景 Transformer 编码—解码的深度估计结构。",
          "en": "Panoramic Transformer encoder-decoder architecture for depth estimation."
        },
        "credit": {
          "zh": "来源：Zhijie Shen 等，原论文图 2。",
          "en": "Source: Zhijie Shen et al., Figure 2 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          134,
          113,
          482,
          224
        ],
        "originalCaption": "Fig. 2. Our PanoFormer takes a monocular RGB panoramic image as the input and outputs the high-quality depth map",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "53ba234d5da54f199b17a093880efddb336b79e2afb7b78a31f546afbc77518c",
        "imageSha256": "6ded885831f4b2bf9b2d5c8691d3c062758b55f8925989161df2999bb4749484",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
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
      "environment": "Official legacyPython3.6 torch>=1.0 CUDA>=9; modern compatibility not tested",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs.",
            "zh": "外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。"
          },
          "evidence": [
            "https://arxiv.org/pdf/2102.03550",
            "https://raw.githubusercontent.com/alibaba/UniFuse-Unidirectional-Fusion/main/LICENSE",
            "https://arxiv.org/abs/2102.03550"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/unifuse-thumb.webp",
        "image": "assets/papers/unifuse.webp",
        "paperUrl": "https://arxiv.org/pdf/2102.03550",
        "page": 2,
        "figureLabel": "Figure 1",
        "caption": {
          "zh": "立方体与 ERP 特征的单向融合深度网络。",
          "en": "Unidirectional fusion of cubemap and ERP features for depth."
        },
        "credit": {
          "zh": "来源：Hualie Jiang 等，原论文图 1。",
          "en": "Source: Hualie Jiang et al., Figure 1 of the paper."
        },
        "kind": "method",
        "verified": true,
        "cropBox": [
          85,
          55,
          531,
          196
        ],
        "originalCaption": "Fig. 1: Our Proposed Unidirectional Fusion Framework.",
        "sourceLicense": "Original figure copyright belongs to the paper authors/publisher. Source PDF figure reuse license not independently verified.",
        "reviewedAt": "2026-10-17",
        "selectionNotes": "Method overview cropped from downloaded original paper PDF; caption stored separately.",
        "pdfSha256": "0769ca56a7f4b7ca634f17da7d7a867068f26b770d0fad65415ac82bc910ad48",
        "imageSha256": "a24b1faa52149d3c49797b17f44b966d54f3aed837d5d3c29dd949884107fa9f",
        "verification": "Original PDF page and final crop visually inspected; paper identity, figure label, and complete figure boundaries checked."
      }
    },
    {
      "id": "dvo360_2026",
      "collection": "slam",
      "name": "360DVO",
      "title": "360DVO: Deep Visual Odometry for Monocular 360-Degree Camera",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "IEEE Robotics and Automation Letters 11(3):3079-3086 (2026); DOI 10.1109/LRA.2026.3655280",
      "authors": "Xiaopeng Guo; Yinzhe Xu; Huajian Huang; Sai-Kit Yeung",
      "institutions": "The Hong Kong University of Science and Technology",
      "summary": "用畸变感知球面特征与全向可微 BA 联合估计 ERP 位姿和图块逆距离；是学习式 VO，评测采用 Sim(3) 尺度对齐。",
      "cameras": [
        "panoramic"
      ],
      "scale": "relative",
      "scaleNote": "Monocular visual up-to-scale reconstruction; paper evaluates trajectories after Sim(3)-Umeyama alignment; learned training does not establish absolute deployment scale",
      "aliases": [],
      "metricStatus": "up-to-scale monocular visual odometry; Sim(3)-aligned evaluation",
      "depthType": "inverse",
      "outputs": [
        "inverse",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Monocular full-sphere ERP RGB video or image sequence; spherical intrinsics computed from image H and W; no IMU or physical stereo baseline",
      "outputSummary": "6DoF camera trajectory; jointly optimized sparse feature-patch inverse distances and 3D points; official demo saves TUM-format trajectory and PLY point cloud",
      "inputs": {
        "requirements": "Monocular full-sphere ERP RGB video or image sequence; spherical intrinsics computed from image H and W; no IMU or physical stereo baseline",
        "imu": false
      },
      "outputDetails": {
        "primary": "6DoF camera trajectory; jointly optimized sparse feature-patch inverse distances and 3D points; official demo saves TUM-format trajectory and PLY point cloud",
        "depth_convention": "Equation (2): d=1/sqrt(x^2+y^2+z^2), inverse radial distance along the unit spherical ray; sparse patch geometry rather than a dense monocular depth map",
        "metric_status": "up-to-scale monocular visual odometry; Sim(3)-aligned evaluation",
        "pose_output": "Yes: visual odometry trajectory, not a loop-corrected global SLAM trajectory",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/chris1004336379/360DVO",
      "paperUrl": "https://arxiv.org/pdf/2601.02309",
      "projectUrl": "https://chris1004336379.github.io/360DVO-homepage/",
      "weightsUrl": "https://drive.google.com/file/d/17x0V5DnXye5f1qlWLK80yRG6luInPmid/view",
      "license": "MIT main inference code; separately distributed checkpoint terms not confirmed",
      "evidence": [
        "Paper III: spherical model and patch ODBA; V-B: Sim(3)-Umeyama trajectory alignment; V-D: embedded speed. Official demo computes spherical intrinsics and exports trajectory/points. Official LICENSE is MIT; no local model execution.",
        "https://chris1004336379.github.io/360DVO-homepage/",
        "https://arxiv.org/html/2601.02309v1",
        "https://arxiv.org/pdf/2601.02309",
        "https://doi.org/10.1109/LRA.2026.3655280",
        "https://github.com/chris1004336379/360DVO",
        "https://raw.githubusercontent.com/chris1004336379/360DVO/master/demo.py",
        "https://raw.githubusercontent.com/chris1004336379/360DVO/master/LICENSE",
        "https://raw.githubusercontent.com/chris1004336379/360DVO/master/environment.yml"
      ],
      "notes": [
        "VO without an explicit loop-closure back-end. Training pipeline is not provided in the current README. The real-world benchmark uses SfM pseudo ground truth, not motion-capture truth; scale-aligned benchmark errors do not certify wrist precision.",
        "Official inference code and checkpoint link available; training pipeline not provided"
      ],
      "tags": [],
      "family": "learned panoramic sparse-patch VO",
      "imu": false,
      "loopClosure": false,
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper, author project, inference source and license read; no local reproduction",
      "codeEntry": "demo.py; environment.yml; README.md",
      "environment": "Official environment: Python 3.12, PyTorch 2.3.1, CUDA 12.2, custom CUDA/Eigen components. Paper Jetson Orin: default 2 FPS, fast 5 FPS; not local measurements.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://chris1004336379.github.io/360DVO-homepage/",
            "https://arxiv.org/html/2601.02309v1",
            "https://arxiv.org/pdf/2601.02309"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "paperUrl": "https://arxiv.org/pdf/2601.02309",
        "page": 1,
        "figureLabel": "Figure 1",
        "cropBox": [
          311,
          150,
          565,
          364
        ],
        "caption": {
          "zh": "畸变感知球面特征与全向可微 BA 联合估计位姿和局部图像块深度。",
          "en": "Distortion-aware spherical features and omnidirectional differentiable BA jointly estimate poses and patch depths."
        },
        "originalCaption": "Fig. 1: Framework overview of 360DVO.",
        "image": "assets/papers/dvo360_2026.webp",
        "thumbnail": "assets/papers/dvo360_2026-thumb.webp",
        "credit": {
          "zh": "来源：论文作者，2026；Figure 1 原文截图。",
          "en": "Source: paper authors (2026), Figure 1 crop."
        },
        "kind": "method",
        "verified": true,
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected the full source PDF page and final crop. Actual paper method overview, not a generated illustration.",
        "imageSize": [
          846,
          713
        ],
        "pdfSha256": "6fecb6905dad129ecf0d989b6ea6bed777d34d45451e89ab0566f15dae53afc0"
      }
    },
    {
      "id": "ds_360dvo",
      "name": "360DVO Dataset",
      "title": "360DVO: Deep Visual Odometry for Monocular 360-Degree Camera — real-world benchmark",
      "year": 2026,
      "cameras": [
        "panoramic",
        "perspective"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "indoor",
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "Heterogeneous 360-degree RGB video"
      ],
      "sensorLabels": {
        "en": [
          "Heterogeneous 360-degree RGB video"
        ],
        "zh": [
          "不同来源的 360° RGB 视频"
        ]
      },
      "groundTruth": [
        "SfM pseudo-reference trajectories"
      ],
      "groundTruthLabels": {
        "en": [
          "SfM pseudo-reference trajectories"
        ],
        "zh": [
          "SfM 伪参考轨迹"
        ]
      },
      "access": "open",
      "homepageUrl": "https://chris1004336379.github.io/360DVO-homepage/",
      "paperUrl": "https://arxiv.org/abs/2601.02309",
      "downloadUrl": "https://huggingface.co/datasets/chris1004336379/360DVO",
      "license": {
        "en": "CC BY-NC-SA 4.0, as declared by the official Hugging Face dataset card; original video provenance remains documented in the paper.",
        "zh": "官方 Hugging Face 数据卡声明 CC BY-NC-SA 4.0；原始视频来源仍需参考论文。"
      },
      "summary": "包含 20 段 Easy/Hard 真实全景视频及 Agisoft Metashape 参考轨迹；位姿属于 SfM 伪真值，不是独立跟踪测量。",
      "details": {
        "en": {
          "Projection and timing": "ERP RGB frames are standardized to 3840×1920 at 10 FPS. The paper also evaluates derived 90-degree, 640×640 perspective views; these are crops/reprojections, not extra physical cameras.",
          "Capture provenance": "Three sequences come from 360VOTS, fifteen from internet videos, and two from Hong Kong tram recordings. A common physical camera/IMU rig and shared hardware calibration are not established.",
          "Pose reference": "Agisoft Metashape SfM produces the pseudo-reference trajectories. No independent motion capture, RTK, or dense measured depth is claimed.",
          "Evaluation and scale": "Easy and Hard each contain ten sequences. The paper uses Sim(3) Umeyama alignment, reports ATE in meters and RPE in m/frame and deg/frame, and evaluates overlapping trajectory segments. Independent absolute metric calibration of each real sequence is not established.",
          "Access and version": "The official HF repository is public and ungated, with Sequences/ and twenty GroundTruth/ files listed. Full image payloads were not downloaded. HF createdAt is 2026-01-04; this is an older omission, not an October release."
        },
        "zh": {
          "投影与时间": "ERP RGB 统一为 3840×1920、10 FPS。论文另评估 90°、640×640 的派生透视视图；它们是裁剪/重投影，不是额外真实相机。",
          "采集来源": "3 段来自 360VOTS，15 段来自网络视频，2 段为香港电车实录；未建立共同的相机/IMU 机架或统一硬件标定。",
          "位姿参考": "参考轨迹由 Agisoft Metashape SfM 产生；不宣称独立动作捕捉、RTK 或稠密实测深度。",
          "评测与尺度": "Easy/Hard 各 10 段。论文采用 Sim(3) Umeyama 对齐，ATE 用米、平移/旋转 RPE 用米/帧和度/帧，仅评估轨迹重叠段。各真实序列的独立绝对公制标定未获证实。",
          "获取与版本": "官方 HF 仓库公开、无门控，列有 Sequences/ 及 20 个 GroundTruth/ 文件；未下载完整图像。HF 创建于 2026-01-04，本轮属于补漏，不能称为十月新发布。"
        }
      },
      "notes": {
        "en": [
          "HF's automatic train split and viewer row count are storage/viewer artifacts, not the paper's Easy/Hard evaluation protocol.",
          "No dense depth GT is inferred from the VO method's internal patch depths; pose serialization, timestamps and scale must be checked before using a new loader."
        ],
        "zh": [
          "HF 自动生成的 train 划分和预览行数是存储/预览产物，不等于论文的 Easy/Hard 评测协议。",
          "不根据 VO 方法内部的图像块深度推断稠密深度真值；使用新加载器前需核对位姿文件格式、时间戳和尺度。"
        ]
      },
      "evidence": [
        {
          "url": "https://huggingface.co/datasets/chris1004336379/360DVO",
          "title": "Official dataset card: release, SfM reference, sequence groups and licence"
        },
        {
          "url": "https://huggingface.co/api/datasets/chris1004336379/360DVO",
          "title": "Official HF API: ungated public access, creation date and twenty reference files"
        },
        {
          "url": "https://arxiv.org/html/2601.02309v1",
          "title": "Paper sections IV and V-B: source videos, pseudo GT and Sim(3) evaluation"
        },
        {
          "url": "https://chris1004336379.github.io/360DVO-homepage/",
          "title": "Official method and dataset project"
        }
      ],
      "checked": "2026-10-19",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Real panoramic video benchmark with 20 Easy/Hard sequences and Agisoft Metashape trajectory references; these are SfM pseudo ground truth, not independent tracking measurements.",
        "zh": "包含 20 段 Easy/Hard 真实全景视频及 Agisoft Metashape 参考轨迹；位姿属于 SfM 伪真值，不是独立跟踪测量。"
      },
      "datasetDetails": {
        "en": {
          "Projection and timing": "ERP RGB frames are standardized to 3840×1920 at 10 FPS. The paper also evaluates derived 90-degree, 640×640 perspective views; these are crops/reprojections, not extra physical cameras.",
          "Capture provenance": "Three sequences come from 360VOTS, fifteen from internet videos, and two from Hong Kong tram recordings. A common physical camera/IMU rig and shared hardware calibration are not established.",
          "Pose reference": "Agisoft Metashape SfM produces the pseudo-reference trajectories. No independent motion capture, RTK, or dense measured depth is claimed.",
          "Evaluation and scale": "Easy and Hard each contain ten sequences. The paper uses Sim(3) Umeyama alignment, reports ATE in meters and RPE in m/frame and deg/frame, and evaluates overlapping trajectory segments. Independent absolute metric calibration of each real sequence is not established.",
          "Access and version": "The official HF repository is public and ungated, with Sequences/ and twenty GroundTruth/ files listed. Full image payloads were not downloaded. HF createdAt is 2026-01-04; this is an older omission, not an October release."
        },
        "zh": {
          "投影与时间": "ERP RGB 统一为 3840×1920、10 FPS。论文另评估 90°、640×640 的派生透视视图；它们是裁剪/重投影，不是额外真实相机。",
          "采集来源": "3 段来自 360VOTS，15 段来自网络视频，2 段为香港电车实录；未建立共同的相机/IMU 机架或统一硬件标定。",
          "位姿参考": "参考轨迹由 Agisoft Metashape SfM 产生；不宣称独立动作捕捉、RTK 或稠密实测深度。",
          "评测与尺度": "Easy/Hard 各 10 段。论文采用 Sim(3) Umeyama 对齐，ATE 用米、平移/旋转 RPE 用米/帧和度/帧，仅评估轨迹重叠段。各真实序列的独立绝对公制标定未获证实。",
          "获取与版本": "官方 HF 仓库公开、无门控，列有 Sequences/ 及 20 个 GroundTruth/ 文件；未下载完整图像。HF 创建于 2026-01-04，本轮属于补漏，不能称为十月新发布。"
        }
      },
      "datasetNotes": {
        "en": [
          "HF's automatic train split and viewer row count are storage/viewer artifacts, not the paper's Easy/Hard evaluation protocol.",
          "No dense depth GT is inferred from the VO method's internal patch depths; pose serialization, timestamps and scale must be checked before using a new loader."
        ],
        "zh": [
          "HF 自动生成的 train 划分和预览行数是存储/预览产物，不等于论文的 Easy/Hard 评测协议。",
          "不根据 VO 方法内部的图像块深度推断稠密深度真值；使用新加载器前需核对位姿文件格式、时间戳和尺度。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY-NC-SA 4.0, as declared by the official Hugging Face dataset card; original video provenance remains documented in the paper.",
        "zh": "官方 Hugging Face 数据卡声明 CC BY-NC-SA 4.0；原始视频来源仍需参考论文。"
      },
      "sourceChecked": "2026-10-19",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Released videos are standardized full-sphere ERP RGB.",
            "zh": "发布视频为标准化整球ERP RGB。"
          },
          "evidence": [
            "https://huggingface.co/datasets/chris1004336379/360DVO",
            "https://huggingface.co/api/datasets/chris1004336379/360DVO",
            "https://arxiv.org/html/2601.02309v1"
          ]
        },
        {
          "geometry": "perspective",
          "route": "reprojected",
          "availability": "paper",
          "note": {
            "en": "The paper evaluates 90-degree virtual perspective reprojections, not additional physical camera streams.",
            "zh": "论文评测90度虚拟透视重投影，并非额外物理相机流。"
          },
          "evidence": [
            "https://huggingface.co/datasets/chris1004336379/360DVO",
            "https://huggingface.co/api/datasets/chris1004336379/360DVO",
            "https://arxiv.org/html/2601.02309v1"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": true,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "The dataset releases RGB sequences and pose references, not dense image-depth truth. The method internal patch depths are predictions.",
            "zh": "数据集发布 RGB 序列和位姿参考，不提供稠密图像深度真值；方法内部图像块深度属于预测。"
          }
        },
        "trajectory": {
          "status": "reference",
          "provenance": [
            "estimated"
          ],
          "note": {
            "en": "Agisoft Metashape SfM supplies pseudo-reference trajectories; independent measured metric scale is not established and evaluation uses Sim(3) alignment.",
            "zh": "Agisoft Metashape SfM 提供伪参考轨迹；未建立独立实测米制尺度，评测采用 Sim(3) 对齐。"
          }
        },
        "evidence": [
          "https://huggingface.co/datasets/chris1004336379/360DVO",
          "https://huggingface.co/api/datasets/chris1004336379/360DVO",
          "https://arxiv.org/html/2601.02309v1",
          "https://chris1004336379.github.io/360DVO-homepage/"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "specialized",
        "rank": 8,
        "scope": {
          "zh": "学习式全景 VO",
          "en": "Learning-based panoramic VO"
        },
        "reason": {
          "zh": "方法配套的专项数据，SfM 参考不能当独立测量真值。",
          "en": "Method-specific data with SfM pseudo-reference rather than independent measurements."
        },
        "evidence": [
          {
            "url": "https://chris1004336379.github.io/360DVO-homepage/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_360dvo.webp",
        "thumbnail": "assets/datasets/ds_360dvo-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://chris1004336379.github.io/360DVO-homepage/",
        "sourceUrl": "https://chris1004336379.github.io/360DVO-homepage/static/images/dataset/easy-00.PNG",
        "paperUrl": "https://arxiv.org/abs/2601.02309",
        "sourceTitle": "360DVO Dataset official dataset preview",
        "caption": {
          "en": "Official easy-00 dataset preview with example panoramas and reference trajectory.",
          "zh": "360DVO 数据集 easy-00 官方预览，展示全景样例与参考轨迹。"
        },
        "credit": {
          "en": "Source: 360DVO Dataset authors, official project preview.",
          "zh": "来源：360DVO Dataset 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: 360DVO Dataset authors, official project preview.",
          "zh": "来源：360DVO Dataset 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          1100,
          373
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "9e3a69796ea5d72702099a2d3c73728f4f49da8c796c956694e1fb84d1647402"
      }
    },
    {
      "id": "aprilvins2026",
      "collection": "slam",
      "name": "AprilVINS",
      "title": "Towards Accurate End-Effector Localization for UMI-Style Robotic Manipulation Teaching",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "arXiv preprint 2610.09857v1, 7 October 2026; submitted to IEEE, acceptance not established",
      "authors": "Junjie Zhang; Deteng Zhang; Zhisong Xu; Bo Sun; Liuyang Li; Yihong Tian; Jie Yin",
      "institutions": "Chongqing University; Northwestern Polytechnical University; The University of Tokyo; Jiaxing University; Sichuan University; Beijing Institute of Technology; Shanghai Jiao Tong University",
      "summary": "将鱼眼 VIO 与序列局部 AprilTag 几何结合，分别控制位姿先验接纳和联合状态导出，面向 UMI 近距离示教定位；代码与 MILD 数据待录用后发布。",
      "cameras": [
        "fisheye"
      ],
      "scale": "metric",
      "scaleNote": "Metric constraints from calibrated IMU and known physical tag sizes; requires calibration, synchronization and suitable observations. Reported TCP error uses SE(3) alignment without scale fitting.",
      "aliases": [],
      "metricStatus": "metric with calibrated IMU, known tag sizes and valid geometry; SE(3)-aligned evaluation",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Calibrated fisheye images and synchronized IMU; known AprilTag IDs and physical sizes; camera-body and TCP extrinsics. Sequence-local tag poses are estimated, without a pre-surveyed tag map.",
      "outputSummary": "Visual-inertial body poses, velocity and IMU biases; guarded TCP trajectory after calibrated frame conversion; sequence-local fiducial geometry",
      "inputs": {
        "requirements": "Calibrated fisheye images and synchronized IMU; known AprilTag IDs and physical sizes; camera-body and TCP extrinsics. Sequence-local tag poses are estimated, without a pre-surveyed tag map.",
        "imu": true
      },
      "outputDetails": {
        "primary": "Visual-inertial body poses, velocity and IMU biases; guarded TCP trajectory after calibrated frame conversion; sequence-local fiducial geometry",
        "depth_convention": "Sparse geometric feature/tag constraints; no dense range or camera-axis Z-depth prediction",
        "metric_status": "metric with calibrated IMU, known tag sizes and valid geometry; SE(3)-aligned evaluation",
        "pose_output": "Yes: guarded visual-inertial body and TCP trajectory; an exported sample requires an accepted joint solution",
        "runtime": "Unknown: no comparable local measurement or verified full estimator release"
      },
      "codeStatus": "none",
      "codeUrl": "",
      "paperUrl": "https://arxiv.org/abs/2610.09857",
      "projectUrl": "https://mild-web.github.io/",
      "weightsUrl": "",
      "license": "Unknown: estimator and dataset release terms not yet verified; public paper and website do not establish a software license",
      "evidence": [
        "Paper IV defines ray residuals, local tag layout and guarded output; V uses SE(3) without scale fitting. Official project footer confirms release after acceptance; public website backend is a pilot/template, not verified estimator source. No local estimator reproduction.",
        "https://arxiv.org/abs/2610.09857",
        "https://arxiv.org/html/2610.09857v1",
        "https://arxiv.org/pdf/2610.09857",
        "https://mild-web.github.io/",
        "https://github.com/mild-web/mild-web.github.io"
      ],
      "notes": [
        "The paired MILD benchmark is announced; its dataset download, license and manifests remain pending acceptance.",
        "The public X5 upload pilot requires an access key and processes offline; it is not evidence of an open-source estimator release.",
        "Close-range marker-assisted teaching; no established native ERP or global loop closure. TCP reference comes from robot kinematics/encoders, not independent motion capture. Millimeter SE(3)-aligned error is conditional on the tested AprilTag4 recordings and sequence-specific profiles; not an absolute precision guarantee.",
        "Paper and public project available; code, datasets and evaluation manifests promised after acceptance, not released as verified artifacts"
      ],
      "tags": [],
      "family": "fiducial-assisted fisheye VIO",
      "imu": true,
      "loopClosure": "Unknown: no global loop-closure module established by this paper",
      "nativePanoramic": false,
      "sourceChecked": "2026-10-19",
      "publiclyVerified": true,
      "verificationLevel": "Official paper and public project reviewed; method figure visually inspected; estimator and data not locally reproduced",
      "codeEntry": "Unknown",
      "environment": "VINS-Fisheye sliding window plus AprilTag front end; installable implementation and dependency versions not released as verified artifacts",
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://arxiv.org/abs/2610.09857",
            "https://arxiv.org/html/2610.09857v1",
            "https://arxiv.org/pdf/2610.09857"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/aprilvins2026-thumb.webp",
        "image": "assets/papers/aprilvins2026.webp",
        "paperUrl": "https://arxiv.org/pdf/2610.09857",
        "page": 5,
        "figureLabel": "Figure 4",
        "caption": {
          "zh": "鱼眼与 IMU 滑窗估计、序列局部标签几何、先验接纳和联合状态导出门控。",
          "en": "Fisheye/IMU sliding-window estimation, sequence-local tag geometry, prior admission and guarded joint-state output."
        },
        "credit": {
          "zh": "来源：Zhang 等，2026；论文第 5 页图 4 截图。",
          "en": "Source: Zhang et al. (2026), Figure 4 crop from PDF page 5."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 4. AprilVINS pipeline.",
        "cropBox": [
          54,
          48,
          558,
          258
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Public access is not a figure reuse license.",
        "verificationNote": "Visually inspected full PDF page 5 and final WebP crop after extending its lower margin. Entire Figure 4 overview retained with source diagram labels; original figure, not generated artwork.",
        "pdfSha256": "c55449b7590f8959e584f156d3e98f197489c72e0f7980398b5ecc709d98a9fc",
        "imageSize": [
          1540,
          641
        ]
      }
    },
    {
      "id": "cubesplat2026",
      "collection": "slam",
      "name": "Cube-Splat",
      "title": "Cube-Splat: High-Fidelity 360° Gaussian Splatting SLAM via Cubemap Factorization and Adjoint-Consistent Optimization",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ECCV 2026, LNCS 17053, pp.213-231; first online 15 September 2026; DOI 10.1007/978-3-032-37255-0_12",
      "authors": "Xiangfei Guo; Hao Shi; Yufan Zhang; Zhonghua Yi; Yongqi Mao; Xiaoting Yin; Kaiwei Wang",
      "institutions": "Zhejiang University; Ant Group",
      "summary": "将 ERP/PAL 转为四个共心虚拟视图，用伴随一致的梯度优化共享位姿和高斯地图；学习深度用于初始化，公制尺度与全局回环仍需单独核查。",
      "cameras": [
        "panoramic",
        "wide"
      ],
      "scale": "relative",
      "scaleNote": "Monocular photometric geometry with learned initialization; four co-centered virtual faces add no metric baseline. Paper calls initialization depth metric, but cross-domain absolute scale and evaluation alignment/normalization are not established here",
      "aliases": [
        "3DGS"
      ],
      "metricStatus": "absolute metric scale not guaranteed; monocular learned-depth initialization",
      "depthType": "unknown",
      "outputs": [
        "unknown",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Monocular ERP or calibrated PAL sequence; four fixed-orientation virtual pinhole views share one optical center and one primary camera pose. Depth Anywhere/UniFuse depth priors initialize Gaussians; these views are not physical stereo cameras",
      "outputSummary": "Camera trajectory; dense anisotropic 3D Gaussian map; rendered views and Gaussian PLY outputs; multi-face photometric tracking with adjoint-consistent pose updates",
      "inputs": {
        "requirements": "Monocular ERP or calibrated PAL sequence; four fixed-orientation virtual pinhole views share one optical center and one primary camera pose. Depth Anywhere/UniFuse depth priors initialize Gaussians; these views are not physical stereo cameras",
        "imu": false
      },
      "outputDetails": {
        "primary": "Camera trajectory; dense anisotropic 3D Gaussian map; rendered views and Gaussian PLY outputs; multi-face photometric tracking with adjoint-consistent pose updates",
        "depth_convention": "Panoramic learned depth is resampled for virtual pinhole Gaussian initialization; exact ERP radial-distance to face Z-depth conversion, normalization and exported units remain unverified in source",
        "metric_status": "absolute metric scale not guaranteed; monocular learned-depth initialization",
        "pose_output": "Yes: estimated panoramic camera trajectory and dense Gaussian mapping; explicit global loop closure not established",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/guoxf304/CubeSplat",
      "paperUrl": "https://arxiv.org/pdf/2609.21347",
      "projectUrl": "https://github.com/guoxf304/CubeSplat",
      "weightsUrl": "https://github.com/albert100121/Depth-Anywhere",
      "license": "Official README flags third-party research/non-commercial restrictions; a distinct top-level source license and complete dependency terms were not confirmed",
      "evidence": [
        "Springer confirms ECCV 2026 publication. Paper 3.1-3.3 explains four co-centered views and depth-prior initialization, 4 gives evaluation and speed, supplementary limitations distinguish absent sensor fusion. Official README lists ERP SynPano/OmniBlender configs and UniFuse_SpatialAudioGen checkpoint. Individual raw source fetches did not resolve; conversion/alignment details remain unknown.",
        "https://link.springer.com/chapter/10.1007/978-3-032-37255-0_12",
        "https://arxiv.org/abs/2609.21347",
        "https://arxiv.org/html/2609.21347v1",
        "https://arxiv.org/pdf/2609.21347",
        "https://github.com/guoxf304/CubeSplat",
        "https://wangkaiwei.org/publications/"
      ],
      "notes": [
        "ERP is accepted at the interface but optimization/rendering operate on four virtual perspective views. Depth priors initialize geometry rather than persistently constrain tracking. Sensitive to stitching/calibration, dynamics and weak texture; no IMU/depth-sensor fusion. Complete license and scale-conversion source audit pending.",
        "Official repository exposes source, setup and ERP/PAL configurations; local execution and complete source/license audit not performed"
      ],
      "tags": [],
      "family": "cubemap panoramic Gaussian SLAM",
      "imu": false,
      "loopClosure": "Unknown: no explicit loop-detection/global loop-correction module verified",
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper, publisher and repository README read; selected implementation details unverified; no local reproduction",
      "codeEntry": "slam.py --config configs/ERP/SynPano/example_scene.yaml; configs/ERP/OmniBlender/example_scene.yaml; scripts/build_extensions.sh",
      "environment": "Official README tested Ubuntu 22.04, Python 3.9, PyTorch 2.0.1, CUDA 11.8, RTX 3090. Paper uses RTX 4070 Ti SUPER and reports about 1.53 FPS; not local measurements.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Official ERP configurations consume panoramas and internally produce four shared-center virtual pinhole views. The separate PAL route is annular.",
            "zh": "官方ERP配置接收全景，内部生成四个共心虚拟针孔视图；另有环形PAL路线。"
          },
          "evidence": [
            "https://github.com/guoxf304/CubeSplat"
          ]
        }
      ],
      "projectionSubtypes": [
        "annular"
      ],
      "additionalSupport": [
        {
          "geometry": "annular",
          "route": "direct",
          "note": {
            "en": "ERP and PAL have separate official configurations; four virtual pinhole faces share a single pose and do not establish physical multicamera or general pinhole-video support.",
            "zh": "ERP与PAL有独立官方配置；四个虚拟针孔面共享一个位姿，不构成物理多相机或通用针孔视频输入支持。"
          },
          "evidence": [
            "https://github.com/guoxf304/CubeSplat"
          ]
        }
      ],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "paperUrl": "https://arxiv.org/pdf/2609.21347",
        "page": 6,
        "figureLabel": "Figure 2",
        "cropBox": [
          134,
          118,
          482,
          378
        ],
        "caption": {
          "zh": "ERP 或 PAL 全景转换为 cubemap，进行共享位姿跟踪和高斯地图优化。",
          "en": "ERP or PAL panoramas are factorized into cubemap views for shared-pose tracking and Gaussian-map optimization."
        },
        "originalCaption": "Fig. 2: Pipeline of Cube-Splat.",
        "image": "assets/papers/cubesplat2026.webp",
        "thumbnail": "assets/papers/cubesplat2026-thumb.webp",
        "credit": {
          "zh": "来源：论文作者，2026；Figure 2 原文截图。",
          "en": "Source: paper authors (2026), Figure 2 crop."
        },
        "kind": "method",
        "verified": true,
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected the full source PDF page and final crop. Actual paper method overview, not a generated illustration.",
        "imageSize": [
          1160,
          866
        ],
        "pdfSha256": "03cf13240d68f267d2c79f3eabe7c4c3784d9e914337811e384580e0984acf8c"
      }
    },
    {
      "id": "ds_hilti2026",
      "name": "Hilti–Trimble–Oxford 2026 · Indoor",
      "title": "Hilti-Trimble-Oxford Dataset: 360 Visual-Inertial Benchmark with Floor Plan Priors for SLAM and Localization",
      "year": 2026,
      "cameras": [
        "fisheye",
        "wide",
        "multi",
        "panoramic"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "real",
      "sensors": [
        "Dual fisheye RGB",
        "IMU"
      ],
      "sensorLabels": {
        "en": [
          "Dual fisheye RGB",
          "IMU"
        ],
        "zh": [
          "双鱼眼 RGB",
          "IMU"
        ]
      },
      "groundTruth": [
        "LiDAR-inertial reference poses"
      ],
      "groundTruthLabels": {
        "en": [
          "LiDAR-inertial reference poses"
        ],
        "zh": [
          "LiDAR 惯性参考位姿"
        ]
      },
      "access": "open",
      "homepageUrl": "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026",
      "paperUrl": "https://arxiv.org/abs/2607.06464",
      "downloadUrl": "https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026",
      "license": {
        "en": "Dataset: CC BY-NC-SA 3.0, as declared by the official Hugging Face card. Open access does not remove its non-commercial and share-alike conditions.",
        "zh": "数据集采用官方 Hugging Face 卡片声明的 CC BY-NC-SA 3.0；开放下载仍须遵守非商业使用和相同方式共享等条件。"
      },
      "summary": "30 条室内施工楼层序列，提供双约 200° 鱼眼、IMU、平面图先验及 LiDAR 惯性参考位姿；ERP 需用官方工具派生，原始发布为双鱼眼。",
      "details": {
        "en": {
          "Indoor scope": "The official sequence guide lists 30 floor-labelled runs from May to December 2025: floors 1–7, EG, UG1 and UG2. Download by floor/date/run; this entry covers those indoor construction sequences.",
          "Released sensor streams": "Insta360 ONE RS 1-Inch 360 Edition: two 1472×1440 RGB fisheye streams at 30 Hz and a six-axis IMU at 1000 Hz. Lenses cover approximately 200° each. The cameras use rolling shutters; the supplied configuration gives a 31.0512 ms frame readout.",
          "Panoramic representation": "Only raw front/back fisheyes are released. The official image_stitching.py tool derives ERP, with a Stella-VSLAM example. Distinct optical centres and nonzero baseline introduce parallax; the large-sphere stitching assumption is not an exact central panorama without depth.",
          "Calibration": "Kalibr camera–IMU extrinsics, per-camera time offsets, IMU configuration, calibration bags and AprilGrid files are available. EUCM is calibrated directly; the provided pinhole-equidistant intrinsics are fitted to EUCM. Use the matching camera model and retain the original image orientation for rolling-shutter correction.",
          "Time synchronization": "All runs retain a +10000 s timestamp shift. Reference LiDAR and its IMU use hardware PPS; the independent camera system is aligned through gyro-norm correlation and nonlinear refinement of time offset, linear clock scale and gyro biases. This is not common hardware synchronization of every sensor.",
          "Reference pose provenance": "Hesai XT32 LiDAR-inertial SLAM, rigidly attached to the camera, generates estimated reference trajectories transformed into cam0 using extrinsics and time alignment. They are not independent motion-capture or total-station measurements. Raw reference LiDAR is absent from released ROS 2 bags.",
          "Pose format and valid interval": "Reference poses express cam0 in the map frame (cam0→map). TUM text uses timestamp tx ty tz qx qy qz qw, with translations in metres. Approximately the first 5 seconds lack LiDAR reference coverage; the initial localization pose is near t=10005 s.",
          "Floor-plan priors": "PNG, DXF and binary masks with/without windows are provided. They describe the planned completed building and can differ from the changing as-built scene. The repository cautions that these floor plans are not officially registered; use the documented map frame and supplied initial poses. floor_UG2_2025-12-02_run_1 has no floor plan; it remains usable for SLAM but is excluded from floor-plan localization.",
          "Evaluation protocol": "All 30 references are now public. The original challenge scored 25 SLAM runs and 24 localization runs, excluding five early-release runs and additionally UG2 for localization. It requires at least 99% trajectory coverage and preserves metric scale; localization scoring ignores z.",
          "Download and publication": "Official Hugging Face API checked on 2026-10-19: public, gated=false. Fetch each complete data/floor_X/YYYY-MM-DD/run_Z/rosbag/ directory, including rosbag.db3 and metadata.yaml. The repository reports RA-L acceptance; its current citation remains arXiv:2607.06464 without a verified final volume or pages."
        },
        "zh": {
          "室内范围": "官方序列指南列有 30 条楼层序列，采集于 2025 年 5–12 月，覆盖 1–7 层、EG、UG1 和 UG2；按楼层/日期/run 选择下载。本条整理这些室内施工序列。",
          "实际传感器输入": "Insta360 ONE RS 1-Inch 360 Edition：两路 30 Hz、1472×1440 RGB 鱼眼，以及 1000 Hz 六轴 IMU；每个镜头约 200°。相机为卷帘快门，随附配置给出的整帧读出时间为 31.0512 ms。",
          "全景表示": "原始数据仅发布前后双鱼眼；官方 image_stitching.py 可生成 ERP，并给出 Stella-VSLAM 示例。两个镜头光心不同且存在非零基线，拼接会有视差；大半径球面假设不等同于有深度支持的精确中心全景。",
          "标定": "提供 Kalibr 相机–IMU 外参、各相机时间偏移、IMU 配置、标定 bag 和 AprilGrid。EUCM 直接标定，pinhole-equidistant 内参由 EUCM 拟合。须使用匹配的相机模型，并为卷帘校正保留原始图像方向。",
          "时间同步": "各 run 保留 +10000 s 的时间戳平移。参考 LiDAR 与其 IMU 通过 PPS 硬件同步；独立运行的相机系统先用陀螺仪模长相关对齐，再联合优化时间偏移、线性时钟尺度和陀螺仪偏置，不能理解为全部传感器共用硬同步。",
          "参考位姿来源": "与相机刚性连接的 Hesai XT32 LiDAR 惯性 SLAM 产生参考估计轨迹，再经外参和时间对齐变换到 cam0；不是独立动作捕捉或全站仪测量。发布的 ROS 2 bag 不包含生成参考轨迹的原始 LiDAR。",
          "位姿格式与有效区间": "参考轨迹为 cam0 在 map 中的位姿（cam0→map）；TUM 文本依次为 timestamp tx ty tz qx qy qz qw，平移单位为米。约前 5 秒没有 LiDAR 参考覆盖；初始平面图定位位姿在 t=10005 s 附近。",
          "平面图先验": "提供 PNG、DXF 及带窗/不带窗二值掩码。它们对应完工规划，可能与施工中的实际墙柱不一致。仓库特别注明这些平面图未经过官方配准；应按文档定义的 map 坐标系及随附初始位姿使用。floor_UG2_2025-12-02_run_1 无平面图，可用于 SLAM，但不参加平面图定位。",
          "评测协议": "目前 30 条参考轨迹均已公开。原挑战对 25 条 SLAM、24 条定位序列计分：排除 5 条早期公开序列，定位另排除 UG2。至少要求 99% 轨迹覆盖，不优化尺度；定位分数忽略 z。",
          "下载与发表": "2026-10-19 核验官方 Hugging Face API：public、gated=false。逐条下载完整 data/floor_X/YYYY-MM-DD/run_Z/rosbag/ 目录，包含 rosbag.db3 与 metadata.yaml。仓库声明论文已获 RA-L 接收；当前引用仍为 arXiv:2607.06464，未补写未经核实的卷期页码。"
        }
      },
      "notes": {
        "en": [
          "The panoramic filter denotes an explicitly documented derived ERP workflow; downloaded imagery remains dual fisheye.",
          "No dense per-pixel depth labels or raw reference LiDAR are claimed.",
          "This 2026 dataset is a separate release from the Hilti 2021 and Hilti–Oxford 2022 benchmarks."
        ],
        "zh": [
          "全景筛选表示存在官方说明的 ERP 派生流程；下载的原始图像仍是双鱼眼。",
          "不将其标为逐像素稠密深度真值集，也不声称发布了参考 LiDAR。",
          "这是独立的 2026 发布，与 Hilti 2021、Hilti–Oxford 2022 基准分别收录。"
        ]
      },
      "evidence": [
        {
          "url": "https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026",
          "title": "Official Hilti 2026 dataset card, download and CC BY-NC-SA 3.0 declaration"
        },
        {
          "url": "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/dataset.md",
          "title": "Official 30-sequence guide and individual indoor rosbag folders"
        },
        {
          "url": "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/sensors.md",
          "title": "Official camera, IMU, rolling-shutter, calibration and timestamp specifications"
        },
        {
          "url": "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/ground-truth.md",
          "title": "Official cam0-to-map convention, reference provenance and clock synchronization"
        },
        {
          "url": "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/challenge-tools.md",
          "title": "Official raw-fisheye release and derived ERP stitching assumptions"
        },
        {
          "url": "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/floorplans.md",
          "title": "Official planned-floorplan priors and missing UG2 floorplan"
        },
        {
          "url": "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/challenge-evaluation.md",
          "title": "Official TUM format, metric scale, coverage and challenge exclusions"
        },
        {
          "url": "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/config/hilti_openvins/rs_config.yaml",
          "title": "Official rolling-shutter readout configuration"
        },
        {
          "url": "https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/camera_calibration/kalibr_imucam_chain.yaml",
          "title": "Official EUCM and fitted equidistant calibration, extrinsics and time offsets"
        },
        {
          "url": "https://arxiv.org/abs/2607.06464",
          "title": "Hilti–Trimble–Oxford 2026 dataset paper"
        },
        {
          "url": "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026",
          "title": "Official publication status: IEEE RA-L acceptance"
        },
        {
          "url": "https://huggingface.co/api/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026",
          "title": "Official API: current public and non-gated access checked on 2026-10-19"
        }
      ],
      "checked": "2026-10-19",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Thirty indoor construction runs with dual approximately 200° fisheyes, IMU, floor-plan priors and LiDAR-inertial reference poses; ERP is derived using official stitching tools, not the native release.",
        "zh": "30 条室内施工楼层序列，提供双约 200° 鱼眼、IMU、平面图先验及 LiDAR 惯性参考位姿；ERP 需用官方工具派生，原始发布为双鱼眼。"
      },
      "datasetDetails": {
        "en": {
          "Indoor scope": "The official sequence guide lists 30 floor-labelled runs from May to December 2025: floors 1–7, EG, UG1 and UG2. Download by floor/date/run; this entry covers those indoor construction sequences.",
          "Released sensor streams": "Insta360 ONE RS 1-Inch 360 Edition: two 1472×1440 RGB fisheye streams at 30 Hz and a six-axis IMU at 1000 Hz. Lenses cover approximately 200° each. The cameras use rolling shutters; the supplied configuration gives a 31.0512 ms frame readout.",
          "Panoramic representation": "Only raw front/back fisheyes are released. The official image_stitching.py tool derives ERP, with a Stella-VSLAM example. Distinct optical centres and nonzero baseline introduce parallax; the large-sphere stitching assumption is not an exact central panorama without depth.",
          "Calibration": "Kalibr camera–IMU extrinsics, per-camera time offsets, IMU configuration, calibration bags and AprilGrid files are available. EUCM is calibrated directly; the provided pinhole-equidistant intrinsics are fitted to EUCM. Use the matching camera model and retain the original image orientation for rolling-shutter correction.",
          "Time synchronization": "All runs retain a +10000 s timestamp shift. Reference LiDAR and its IMU use hardware PPS; the independent camera system is aligned through gyro-norm correlation and nonlinear refinement of time offset, linear clock scale and gyro biases. This is not common hardware synchronization of every sensor.",
          "Reference pose provenance": "Hesai XT32 LiDAR-inertial SLAM, rigidly attached to the camera, generates estimated reference trajectories transformed into cam0 using extrinsics and time alignment. They are not independent motion-capture or total-station measurements. Raw reference LiDAR is absent from released ROS 2 bags.",
          "Pose format and valid interval": "Reference poses express cam0 in the map frame (cam0→map). TUM text uses timestamp tx ty tz qx qy qz qw, with translations in metres. Approximately the first 5 seconds lack LiDAR reference coverage; the initial localization pose is near t=10005 s.",
          "Floor-plan priors": "PNG, DXF and binary masks with/without windows are provided. They describe the planned completed building and can differ from the changing as-built scene. The repository cautions that these floor plans are not officially registered; use the documented map frame and supplied initial poses. floor_UG2_2025-12-02_run_1 has no floor plan; it remains usable for SLAM but is excluded from floor-plan localization.",
          "Evaluation protocol": "All 30 references are now public. The original challenge scored 25 SLAM runs and 24 localization runs, excluding five early-release runs and additionally UG2 for localization. It requires at least 99% trajectory coverage and preserves metric scale; localization scoring ignores z.",
          "Download and publication": "Official Hugging Face API checked on 2026-10-19: public, gated=false. Fetch each complete data/floor_X/YYYY-MM-DD/run_Z/rosbag/ directory, including rosbag.db3 and metadata.yaml. The repository reports RA-L acceptance; its current citation remains arXiv:2607.06464 without a verified final volume or pages."
        },
        "zh": {
          "室内范围": "官方序列指南列有 30 条楼层序列，采集于 2025 年 5–12 月，覆盖 1–7 层、EG、UG1 和 UG2；按楼层/日期/run 选择下载。本条整理这些室内施工序列。",
          "实际传感器输入": "Insta360 ONE RS 1-Inch 360 Edition：两路 30 Hz、1472×1440 RGB 鱼眼，以及 1000 Hz 六轴 IMU；每个镜头约 200°。相机为卷帘快门，随附配置给出的整帧读出时间为 31.0512 ms。",
          "全景表示": "原始数据仅发布前后双鱼眼；官方 image_stitching.py 可生成 ERP，并给出 Stella-VSLAM 示例。两个镜头光心不同且存在非零基线，拼接会有视差；大半径球面假设不等同于有深度支持的精确中心全景。",
          "标定": "提供 Kalibr 相机–IMU 外参、各相机时间偏移、IMU 配置、标定 bag 和 AprilGrid。EUCM 直接标定，pinhole-equidistant 内参由 EUCM 拟合。须使用匹配的相机模型，并为卷帘校正保留原始图像方向。",
          "时间同步": "各 run 保留 +10000 s 的时间戳平移。参考 LiDAR 与其 IMU 通过 PPS 硬件同步；独立运行的相机系统先用陀螺仪模长相关对齐，再联合优化时间偏移、线性时钟尺度和陀螺仪偏置，不能理解为全部传感器共用硬同步。",
          "参考位姿来源": "与相机刚性连接的 Hesai XT32 LiDAR 惯性 SLAM 产生参考估计轨迹，再经外参和时间对齐变换到 cam0；不是独立动作捕捉或全站仪测量。发布的 ROS 2 bag 不包含生成参考轨迹的原始 LiDAR。",
          "位姿格式与有效区间": "参考轨迹为 cam0 在 map 中的位姿（cam0→map）；TUM 文本依次为 timestamp tx ty tz qx qy qz qw，平移单位为米。约前 5 秒没有 LiDAR 参考覆盖；初始平面图定位位姿在 t=10005 s 附近。",
          "平面图先验": "提供 PNG、DXF 及带窗/不带窗二值掩码。它们对应完工规划，可能与施工中的实际墙柱不一致。仓库特别注明这些平面图未经过官方配准；应按文档定义的 map 坐标系及随附初始位姿使用。floor_UG2_2025-12-02_run_1 无平面图，可用于 SLAM，但不参加平面图定位。",
          "评测协议": "目前 30 条参考轨迹均已公开。原挑战对 25 条 SLAM、24 条定位序列计分：排除 5 条早期公开序列，定位另排除 UG2。至少要求 99% 轨迹覆盖，不优化尺度；定位分数忽略 z。",
          "下载与发表": "2026-10-19 核验官方 Hugging Face API：public、gated=false。逐条下载完整 data/floor_X/YYYY-MM-DD/run_Z/rosbag/ 目录，包含 rosbag.db3 与 metadata.yaml。仓库声明论文已获 RA-L 接收；当前引用仍为 arXiv:2607.06464，未补写未经核实的卷期页码。"
        }
      },
      "datasetNotes": {
        "en": [
          "The panoramic filter denotes an explicitly documented derived ERP workflow; downloaded imagery remains dual fisheye.",
          "No dense per-pixel depth labels or raw reference LiDAR are claimed.",
          "This 2026 dataset is a separate release from the Hilti 2021 and Hilti–Oxford 2022 benchmarks."
        ],
        "zh": [
          "全景筛选表示存在官方说明的 ERP 派生流程；下载的原始图像仍是双鱼眼。",
          "不将其标为逐像素稠密深度真值集，也不声称发布了参考 LiDAR。",
          "这是独立的 2026 发布，与 Hilti 2021、Hilti–Oxford 2022 基准分别收录。"
        ]
      },
      "datasetLicense": {
        "en": "Dataset: CC BY-NC-SA 3.0, as declared by the official Hugging Face card. Open access does not remove its non-commercial and share-alike conditions.",
        "zh": "数据集采用官方 Hugging Face 卡片声明的 CC BY-NC-SA 3.0；开放下载仍须遵守非商业使用和相同方式共享等条件。"
      },
      "sourceChecked": "2026-10-19",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Raw front/back fisheye streams are released; use the supplied EUCM or fitted equidistant calibration.",
            "zh": "发布原始前后鱼眼流；使用配套EUCM或拟合等距标定。"
          },
          "evidence": [
            "https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026",
            "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/dataset.md",
            "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/sensors.md"
          ]
        },
        {
          "geometry": "panoramic",
          "route": "stitched",
          "availability": "derivable",
          "note": {
            "en": "Only raw fisheyes are downloaded. The official stitching tool derives ERP, using a large-sphere assumption with parallax limitations.",
            "zh": "下载内容为原始鱼眼；官方拼接工具生成ERP，采用大球面假设并受视差限制。"
          },
          "evidence": [
            "https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026",
            "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/dataset.md",
            "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/sensors.md"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "The released bags contain dual-fisheye images and IMU, without reference LiDAR or image-depth targets.",
            "zh": "发布的包包含双鱼眼图像与 IMU，不包含参考 LiDAR 或图像深度目标。"
          }
        },
        "trajectory": {
          "status": "reference",
          "provenance": [
            "estimated"
          ],
          "note": {
            "en": "LiDAR-inertial SLAM yields cam0-in-map reference poses. These are estimates rather than independent mocap/total-station truth; the first five seconds lack coverage.",
            "zh": "LiDAR 惯性 SLAM 生成 cam0 在地图中的参考位姿；属于估计参考而非独立动捕、全站仪真值，前约五秒缺少覆盖。"
          }
        },
        "evidence": [
          "https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026",
          "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/dataset.md",
          "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/sensors.md",
          "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/ground-truth.md",
          "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/challenge-tools.md",
          "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/floorplans.md",
          "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/challenge-evaluation.md",
          "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/config/hilti_openvins/rs_config.yaml",
          "https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/camera_calibration/kalibr_imucam_chain.yaml",
          "https://arxiv.org/abs/2607.06464",
          "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026",
          "https://huggingface.co/api/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "specialized",
        "rank": 7,
        "scope": {
          "zh": "室内鱼眼惯性",
          "en": "Indoor fisheye / inertial"
        },
        "reason": {
          "zh": "新近发布的独立年份，ERP 为派生流程，参考来自 LiDAR 惯性估计。",
          "en": "A recent separate release; ERP is derived and reference poses are LiDAR-inertial estimates."
        },
        "evidence": [
          {
            "url": "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_hilti2026.webp",
        "thumbnail": "assets/datasets/ds_hilti2026-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026",
        "sourceUrl": "https://raw.githubusercontent.com/Hilti-Research/hilti-trimble-slam-challenge-2026/main/media/indoor_1.jpeg",
        "paperUrl": "https://arxiv.org/abs/2607.06464",
        "sourceTitle": "Hilti–Trimble–Oxford 2026 · Indoor official dataset preview",
        "caption": {
          "en": "Official Hilti 2026 indoor construction-site preview; not a decoded sensor frame.",
          "zh": "Hilti 2026 官方室内施工场景预览，并非解码后的传感器帧。"
        },
        "credit": {
          "en": "Source: Hilti–Trimble–Oxford 2026 · Indoor authors, official project preview.",
          "zh": "来源：Hilti–Trimble–Oxford 2026 · Indoor 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: Hilti–Trimble–Oxford 2026 · Indoor authors, official project preview.",
          "zh": "来源：Hilti–Trimble–Oxford 2026 · Indoor 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          768,
          1024
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "f6336b86470b796fea9ddd76d35c0b865e376ae9486960af8c6ad03241f9cf9d"
      }
    },
    {
      "id": "ds_holo360d",
      "name": "Holo360D",
      "title": "Holo360D: A Large-Scale Real-World Dataset with Continuous Trajectories for Advancing Panoramic 3D Reconstruction and Beyond",
      "year": 2026,
      "cameras": [
        "panoramic"
      ],
      "tasks": [
        "depth",
        "slam"
      ],
      "environment": [
        "indoor",
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "360° RGB camera",
        "LiDAR scanner",
        "IMU / RTK-GNSS capture rig"
      ],
      "sensorLabels": {
        "en": [
          "360° RGB camera",
          "LiDAR scanner",
          "IMU / RTK-GNSS capture rig"
        ],
        "zh": [
          "360° RGB 相机",
          "激光扫描器",
          "含 IMU / RTK-GNSS 的采集装置"
        ]
      },
      "groundTruth": [
        "Mesh/point-cloud depth",
        "Refined camera poses",
        "Validity masks"
      ],
      "groundTruthLabels": {
        "en": [
          "Mesh/point-cloud depth",
          "Refined camera poses",
          "Validity masks"
        ],
        "zh": [
          "网格与点云深度",
          "优化后的相机位姿",
          "有效性掩码"
        ]
      },
      "access": "open",
      "homepageUrl": "https://jou719.github.io/Holo360D_homepage/",
      "paperUrl": "https://arxiv.org/abs/2604.22482",
      "downloadUrl": "https://huggingface.co/datasets/ouou123/Holo360D/tree/main",
      "license": {
        "en": "Repository code has MIT; the inspected dataset card has no explicit dataset license metadata. Confirm data terms with authors before redistribution.",
        "zh": "仓库代码为 MIT；核对的数据卡未注明明确数据许可元信息，重新分发前需向作者确认数据条款。"
      },
      "summary": "连续真实室内外全景，提供激光派生网格、点云深度和优化位姿，官方已发布完整数据。",
      "details": {
        "en": {
          "Projection and inputs": "360° camera records 5760×2880 panoramas at 24 FPS; published archives separate RGB, mesh_depth, pointcloud_depth, masks and poses.",
          "Depth and validity": "Mesh depth is camera-center Euclidean distance, EXR; point depth uses mesh visibility filtering. Numeric unit/mask encoding should be confirmed in loaders.",
          "Ground truth provenance": "LiDAR, online/offline SLAM and bundle adjustment produce references; meshes undergo denoising and hole filling. Poses are not independent motion-capture GT.",
          "Timing and calibration": "Scanner and rigidly mounted camera share software start/stop triggering. Do not infer that all raw IMU/RTK streams are included in RGB-D archives.",
          "Evaluation and versions": "Paper uses scene-disjoint 60/15 train/test; release news describes a different initial test grouping. Pin release scene lists; re-download test masks predating July 2026 fix."
        },
        "zh": {
          "投影与输入": "360° 相机以 24 FPS 记录 5760×2880 全景；发布包分开存储 RGB、mesh_depth、pointcloud_depth、掩码和位姿。",
          "深度与有效性": "网格深度是相机中心欧氏距离，以 EXR 存储；点云深度利用网格处理可见性。数值单位和掩码编码需进一步核对加载器。",
          "真值来源": "参考值来自激光、在线离线 SLAM 与束调整，网格经去噪和补洞；位姿并非独立动捕真值。",
          "时间与标定": "扫描器与刚性安装相机共享软件启停触发；不能据此推断 RGB-D 压缩包包含所有原始 IMU、RTK 流。",
          "评测与版本": "论文采用场景隔离的 60/15 训练测试划分，发布新闻的初始测试分组不同。需固定场景清单，旧测试掩码应更新至 2026 年 7 月修正版。"
        }
      },
      "notes": {
        "en": [
          "Mesh-filled regions and point-cloud-supported pixels provide different supervision; report which target and mask were used."
        ],
        "zh": [
          "网格补洞区域与点云实测支持像素提供不同监督，需报告所用目标与掩码。"
        ]
      },
      "evidence": [
        {
          "url": "https://github.com/Jou719/Holo360D",
          "title": "Official release status, structure and corrected test masks"
        },
        {
          "url": "https://arxiv.org/html/2604.22482v2",
          "title": "Paper: range definition, timing, refinement and scene splits"
        },
        {
          "url": "https://huggingface.co/datasets/ouou123/Holo360D",
          "title": "Official data release card"
        },
        {
          "url": "https://jou719.github.io/Holo360D_homepage/",
          "title": "Authors' dataset overview"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Continuous real indoor/outdoor panoramas with LiDAR-derived mesh/point-cloud depth and refined poses; official full data release is available.",
        "zh": "连续真实室内外全景，提供激光派生网格、点云深度和优化位姿，官方已发布完整数据。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "360° camera records 5760×2880 panoramas at 24 FPS; published archives separate RGB, mesh_depth, pointcloud_depth, masks and poses.",
          "Depth and validity": "Mesh depth is camera-center Euclidean distance, EXR; point depth uses mesh visibility filtering. Numeric unit/mask encoding should be confirmed in loaders.",
          "Ground truth provenance": "LiDAR, online/offline SLAM and bundle adjustment produce references; meshes undergo denoising and hole filling. Poses are not independent motion-capture GT.",
          "Timing and calibration": "Scanner and rigidly mounted camera share software start/stop triggering. Do not infer that all raw IMU/RTK streams are included in RGB-D archives.",
          "Evaluation and versions": "Paper uses scene-disjoint 60/15 train/test; release news describes a different initial test grouping. Pin release scene lists; re-download test masks predating July 2026 fix."
        },
        "zh": {
          "投影与输入": "360° 相机以 24 FPS 记录 5760×2880 全景；发布包分开存储 RGB、mesh_depth、pointcloud_depth、掩码和位姿。",
          "深度与有效性": "网格深度是相机中心欧氏距离，以 EXR 存储；点云深度利用网格处理可见性。数值单位和掩码编码需进一步核对加载器。",
          "真值来源": "参考值来自激光、在线离线 SLAM 与束调整，网格经去噪和补洞；位姿并非独立动捕真值。",
          "时间与标定": "扫描器与刚性安装相机共享软件启停触发；不能据此推断 RGB-D 压缩包包含所有原始 IMU、RTK 流。",
          "评测与版本": "论文采用场景隔离的 60/15 训练测试划分，发布新闻的初始测试分组不同。需固定场景清单，旧测试掩码应更新至 2026 年 7 月修正版。"
        }
      },
      "datasetNotes": {
        "en": [
          "Mesh-filled regions and point-cloud-supported pixels provide different supervision; report which target and mask were used."
        ],
        "zh": [
          "网格补洞区域与点云实测支持像素提供不同监督，需报告所用目标与掩码。"
        ]
      },
      "datasetLicense": {
        "en": "Repository code has MIT; the inspected dataset card has no explicit dataset license metadata. Confirm data terms with authors before redistribution.",
        "zh": "仓库代码为 MIT；核对的数据卡未注明明确数据许可元信息，重新分发前需向作者确认数据条款。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Released RGB archives contain panoramas; raw fisheye lens streams are not inferred from capture-camera hardware.",
            "zh": "发布RGB压缩包包含全景；不依据采集相机硬件推断原始鱼眼流。"
          },
          "evidence": [
            "https://github.com/Jou719/Holo360D",
            "https://arxiv.org/html/2604.22482v2",
            "https://huggingface.co/datasets/ouou123/Holo360D"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": true,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured",
            "rendered",
            "estimated"
          ],
          "note": {
            "en": "Both point-cloud depth and mesh depth are released. LiDAR-supported pixels differ from reconstructed or hole-filled mesh supervision.",
            "zh": "同时发布点云深度与网格深度；LiDAR 支撑像素与重建、补洞网格监督须区分。"
          }
        },
        "trajectory": {
          "status": "reference",
          "provenance": [
            "estimated"
          ],
          "note": {
            "en": "Continuous camera references are refined through LiDAR/SLAM and bundle adjustment, not independently measured by motion capture.",
            "zh": "连续相机参考通过 LiDAR/SLAM 与束调整细化，并非独立动作捕捉测量。"
          }
        },
        "evidence": [
          "https://github.com/Jou719/Holo360D",
          "https://arxiv.org/html/2604.22482v2",
          "https://huggingface.co/datasets/ouou123/Holo360D",
          "https://jou719.github.io/Holo360D_homepage/"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "specialized",
        "rank": 5,
        "scope": {
          "zh": "全景视频深度",
          "en": "Panoramic video depth"
        },
        "reason": {
          "zh": "面向全景视频的新资源；优化轨迹和填洞深度的来源需保留。",
          "en": "A recent panoramic video resource; retain optimized-pose and filled-depth provenance."
        },
        "evidence": [
          {
            "url": "https://jou719.github.io/Holo360D_homepage/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_holo360d.webp",
        "thumbnail": "assets/datasets/ds_holo360d-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://jou719.github.io/Holo360D_homepage/",
        "sourceTitle": "Holo360D official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "Official Holo360D overview of reconstructed scenes, continuous trajectories and panoramic depth examples.",
          "zh": "官方 Holo360D 总览中的重建场景、连续轨迹及全景深度示例。"
        },
        "attribution": {
          "en": "Source: Holo360D project authors, official dataset preview.",
          "zh": "来源：Holo360D 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: Holo360D project authors, official dataset preview.",
          "zh": "来源：Holo360D 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "7960e66e4e9eb3c0fd191434e6447d67a6a623afce470565e7b7e7c9e265c021",
        "thumbnailSha256": "e1acdc3694f77c55cf778190a10c26e3b000999baa088dc3918170db466bc083",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://jou719.github.io/Holo360D_homepage/assets/images/eccv_coverfigure.jpg",
        "sourceSha256": "1bbe0024dbd5972d3917b0d5e4970171703715a8ed9a3c569c5eb8a00799b2e5",
        "selectionNotes": "Official project image converted to WebP and proportionally resized without changing its content."
      }
    },
    {
      "id": "ds_mild2026",
      "name": "MILD / MILD-Sim",
      "title": "Towards Accurate End-Effector Localization for UMI-Style Robotic Manipulation Teaching",
      "year": 2026,
      "aliases": [
        "MILD",
        "MILD-Sim",
        "Manipulation-Interface Localization Dataset",
        "Towards Accurate End-Effector Localization for UMI-Style Robotic Manipulation Teaching",
        "AprilVINS dataset"
      ],
      "cameras": [
        "fisheye",
        "wide",
        "multi"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "mixed",
      "sensors": [
        "Dual fisheye",
        "Stereo / RGB-D",
        "IMU",
        "Robot encoders",
        "Simulated cameras"
      ],
      "sensorLabels": {
        "en": [
          "Dual fisheye",
          "Stereo / RGB-D",
          "IMU",
          "Robot encoders",
          "Simulated cameras"
        ],
        "zh": [
          "双鱼眼",
          "双目 / RGB-D",
          "IMU",
          "机器人编码器",
          "仿真相机"
        ]
      },
      "groundTruth": [
        "Executed robot TCP reference",
        "Simulation states"
      ],
      "groundTruthLabels": {
        "en": [
          "Executed robot TCP reference",
          "Simulation states"
        ],
        "zh": [
          "实际执行的机器人 TCP 参考轨迹",
          "仿真状态"
        ]
      },
      "access": "unknown",
      "homepageUrl": "https://mild-web.github.io/",
      "paperUrl": "https://arxiv.org/abs/2610.09857",
      "downloadUrl": "https://mild-web.github.io/",
      "license": {
        "en": "A dataset reuse license is not specified on the public project page or in the paper. Dataset, code and evaluation-manifest release is announced for acceptance; the paper's arXiv license does not establish a dataset license.",
        "zh": "公开项目页与论文尚未明确数据集再利用许可。数据、代码与评测清单计划于论文录用后发布；论文的 arXiv 许可不能视为数据集许可。"
      },
      "summary": "面向近距离操作定位的已公布基准：包含 Insta360 X5 与 Insight9 的 86 段真实录制、实际执行的机器人 TCP 参考轨迹，以及 Isaac Sim 仿真子集；完整数据待论文录用后发布。",
      "details": {
        "en": {
          "Scope and coverage": "Real-world subset: 86 sensor recordings, comprising 67 Insta360 X5 and 19 Insight9 recordings across 15 repeated tabletop tasks on an AGIbot G2. The paper also lists nine MILD-Sim task entries; these are not nine additional real sensor recordings.",
          "Imaging and inputs": "X5 provides dual-fisheye observations and inertial measurements; Insight9 is described as a stereo/RGB-D sensing route. MILD-Sim uses Isaac Sim, with simulated fisheye stereo and RGB views shown on the project page. A raw ERP panorama release, exact lens FoV, resolutions and sampling rates are not established by the public release description.",
          "Reference provenance": "Each real execution has its own end-effector/TCP reference derived from logged robot kinematics and encoder feedback. It is not an external motion-capture reference or an AprilTag-surveyed global trajectory; residual robot-state, extrinsic-calibration and timing uncertainty remains.",
          "Calibration and synchronization": "The paper describes calibration assets for converting camera or visual-inertial estimates to the robot TCP frame. A downloadable manifest of sensor transforms, clock alignment and synchronization specifications is not yet available. Project comparison clips align separate recordings by normalized reference-trajectory progress, which does not establish hardware synchronization between devices.",
          "Scenes and evaluation": "Plain, textured/tablecloth, ArUco and AprilTag workspaces isolate feature scarcity, occlusion and marker-layout effects. Known marker IDs and sizes do not imply pre-surveyed marker poses. Evaluate SE(3)-aligned TCP-relative APE together with time completion and continuity, using each recording's executed reference rather than a shared command trajectory.",
          "Simulation and depth": "MILD-Sim supplies controlled robot/object/trajectory states and manipulation replay studies. Public descriptions do not establish a downloadable dense image-depth ground-truth release, depth convention, validity masks or a depth-estimation split; RGB-D hardware naming alone does not establish those annotations.",
          "Release and splits": "As checked on 2026-10-19, the paper and project page announce code, datasets and evaluation manifests upon acceptance. A complete public data-download endpoint, official train/validation/test split and dataset license are not confirmed. The restricted trajectory-upload pilot is an evaluation interface rather than a dataset download."
        },
        "zh": {
          "范围与规模": "真实子集由 AGIbot G2 执行 15 项重复桌面任务，录制 86 段传感器序列，其中 Insta360 X5 为 67 段、Insight9 为 19 段。论文另列 9 项 MILD-Sim 任务条目，不应将其理解为另外 9 段真实传感器录制。",
          "成像与输入": "X5 提供双鱼眼观测和惯性测量；Insight9 被描述为双目/RGB-D 感知路线。MILD-Sim 使用 Isaac Sim，项目页展示仿真鱼眼双目和 RGB 视图。公开发布说明尚未确认原始 ERP 全景数据、准确单镜头视场角、分辨率与采样率。",
          "参考轨迹来源": "每次真实执行均有独立的末端执行器/TCP 参考，由机器人运动学日志与编码器反馈得到。它不是外部动作捕捉真值，也不是经全局测量的 AprilTag 轨迹；仍包含机器人状态、外参标定与同步的残余不确定性。",
          "标定与同步": "论文描述了将相机或视觉惯性估计转换到机器人 TCP 坐标系的标定资产。传感器变换、时钟对齐和同步规格的可下载清单尚未公开。项目页的跨设备对比片段按参考轨迹的归一化进度对齐，不能据此推断设备之间硬件同步。",
          "场景与评测": "无标记、纹理桌布、ArUco 与 AprilTag 工作区用于区分特征稀缺、遮挡和标记布局影响。已知标记 ID 与尺寸不代表已测量标记全局位姿。以各次执行自己的参考轨迹进行 SE(3) 对齐的 TCP 相对 APE 评测，并同时考察时间完成率与连续性，而不是共用指令轨迹。",
          "仿真与深度": "MILD-Sim 提供可观测的机器人、物体与轨迹状态及操作回放研究。公开说明尚未确认可下载的稠密图像深度真值、深度定义、有效掩码或深度估计划分；不能仅凭 RGB-D 硬件名称推断这些标注已发布。",
          "发布与划分": "截至 2026-10-19，论文和项目页仍声明代码、数据集与评测清单于录用后发布。完整公开下载入口、官方训练/验证/测试划分及数据许可尚未确认。受限轨迹上传试点是评测接口，不是数据集下载入口。"
        }
      },
      "notes": {
        "en": [
          "Relevant to fisheye/wide-FoV visual-inertial localization for UMI-style manipulation; full-sphere ERP support is not inferred from the Insta360 product name.",
          "Public video excerpts and upload-duration limits do not specify the complete dataset's sequence durations."
        ],
        "zh": [
          "适用于 UMI 式操作的鱼眼/广视场视觉惯性定位研究；不从 Insta360 产品名称推断原生完整球面 ERP 支持。",
          "公开展示片段与上传时长限制不代表完整数据集的序列时长。"
        ]
      },
      "evidence": [
        {
          "url": "https://mild-web.github.io/",
          "title": "MILD official project page: real/simulation views and pending release statement"
        },
        {
          "url": "https://arxiv.org/abs/2610.09857",
          "title": "MILD and AprilVINS paper, arXiv 2610.09857v1, Sections III and V"
        }
      ],
      "checked": "2026-10-19",
      "authors": "Junjie Zhang; Deteng Zhang; Zhisong Xu; Bo Sun; Liuyang Li; Yihong Tian; Jie Yin",
      "venue": "arXiv preprint 2610.09857v1, 7 October 2026; submitted to IEEE, acceptance not established",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Announced close-range manipulation-localization benchmark: 86 real recordings with Insta360 X5 and Insight9, executed robot TCP references, and an Isaac Sim companion subset. Full data release is pending acceptance.",
        "zh": "面向近距离操作定位的已公布基准：包含 Insta360 X5 与 Insight9 的 86 段真实录制、实际执行的机器人 TCP 参考轨迹，以及 Isaac Sim 仿真子集；完整数据待论文录用后发布。"
      },
      "datasetDetails": {
        "en": {
          "Scope and coverage": "Real-world subset: 86 sensor recordings, comprising 67 Insta360 X5 and 19 Insight9 recordings across 15 repeated tabletop tasks on an AGIbot G2. The paper also lists nine MILD-Sim task entries; these are not nine additional real sensor recordings.",
          "Imaging and inputs": "X5 provides dual-fisheye observations and inertial measurements; Insight9 is described as a stereo/RGB-D sensing route. MILD-Sim uses Isaac Sim, with simulated fisheye stereo and RGB views shown on the project page. A raw ERP panorama release, exact lens FoV, resolutions and sampling rates are not established by the public release description.",
          "Reference provenance": "Each real execution has its own end-effector/TCP reference derived from logged robot kinematics and encoder feedback. It is not an external motion-capture reference or an AprilTag-surveyed global trajectory; residual robot-state, extrinsic-calibration and timing uncertainty remains.",
          "Calibration and synchronization": "The paper describes calibration assets for converting camera or visual-inertial estimates to the robot TCP frame. A downloadable manifest of sensor transforms, clock alignment and synchronization specifications is not yet available. Project comparison clips align separate recordings by normalized reference-trajectory progress, which does not establish hardware synchronization between devices.",
          "Scenes and evaluation": "Plain, textured/tablecloth, ArUco and AprilTag workspaces isolate feature scarcity, occlusion and marker-layout effects. Known marker IDs and sizes do not imply pre-surveyed marker poses. Evaluate SE(3)-aligned TCP-relative APE together with time completion and continuity, using each recording's executed reference rather than a shared command trajectory.",
          "Simulation and depth": "MILD-Sim supplies controlled robot/object/trajectory states and manipulation replay studies. Public descriptions do not establish a downloadable dense image-depth ground-truth release, depth convention, validity masks or a depth-estimation split; RGB-D hardware naming alone does not establish those annotations.",
          "Release and splits": "As checked on 2026-10-19, the paper and project page announce code, datasets and evaluation manifests upon acceptance. A complete public data-download endpoint, official train/validation/test split and dataset license are not confirmed. The restricted trajectory-upload pilot is an evaluation interface rather than a dataset download."
        },
        "zh": {
          "范围与规模": "真实子集由 AGIbot G2 执行 15 项重复桌面任务，录制 86 段传感器序列，其中 Insta360 X5 为 67 段、Insight9 为 19 段。论文另列 9 项 MILD-Sim 任务条目，不应将其理解为另外 9 段真实传感器录制。",
          "成像与输入": "X5 提供双鱼眼观测和惯性测量；Insight9 被描述为双目/RGB-D 感知路线。MILD-Sim 使用 Isaac Sim，项目页展示仿真鱼眼双目和 RGB 视图。公开发布说明尚未确认原始 ERP 全景数据、准确单镜头视场角、分辨率与采样率。",
          "参考轨迹来源": "每次真实执行均有独立的末端执行器/TCP 参考，由机器人运动学日志与编码器反馈得到。它不是外部动作捕捉真值，也不是经全局测量的 AprilTag 轨迹；仍包含机器人状态、外参标定与同步的残余不确定性。",
          "标定与同步": "论文描述了将相机或视觉惯性估计转换到机器人 TCP 坐标系的标定资产。传感器变换、时钟对齐和同步规格的可下载清单尚未公开。项目页的跨设备对比片段按参考轨迹的归一化进度对齐，不能据此推断设备之间硬件同步。",
          "场景与评测": "无标记、纹理桌布、ArUco 与 AprilTag 工作区用于区分特征稀缺、遮挡和标记布局影响。已知标记 ID 与尺寸不代表已测量标记全局位姿。以各次执行自己的参考轨迹进行 SE(3) 对齐的 TCP 相对 APE 评测，并同时考察时间完成率与连续性，而不是共用指令轨迹。",
          "仿真与深度": "MILD-Sim 提供可观测的机器人、物体与轨迹状态及操作回放研究。公开说明尚未确认可下载的稠密图像深度真值、深度定义、有效掩码或深度估计划分；不能仅凭 RGB-D 硬件名称推断这些标注已发布。",
          "发布与划分": "截至 2026-10-19，论文和项目页仍声明代码、数据集与评测清单于录用后发布。完整公开下载入口、官方训练/验证/测试划分及数据许可尚未确认。受限轨迹上传试点是评测接口，不是数据集下载入口。"
        }
      },
      "datasetNotes": {
        "en": [
          "Relevant to fisheye/wide-FoV visual-inertial localization for UMI-style manipulation; full-sphere ERP support is not inferred from the Insta360 product name.",
          "Public video excerpts and upload-duration limits do not specify the complete dataset's sequence durations."
        ],
        "zh": [
          "适用于 UMI 式操作的鱼眼/广视场视觉惯性定位研究；不从 Insta360 产品名称推断原生完整球面 ERP 支持。",
          "公开展示片段与上传时长限制不代表完整数据集的序列时长。"
        ]
      },
      "datasetLicense": {
        "en": "A dataset reuse license is not specified on the public project page or in the paper. Dataset, code and evaluation-manifest release is announced for acceptance; the paper's arXiv license does not establish a dataset license.",
        "zh": "公开项目页与论文尚未明确数据集再利用许可。数据、代码与评测清单计划于论文录用后发布；论文的 arXiv 许可不能视为数据集许可。"
      },
      "sourceChecked": "2026-10-19",
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "announced",
          "note": {
            "en": "Real X5 and simulated fisheye routes are described, but the dataset release is announced for acceptance; no raw ERP release is established.",
            "zh": "描述真实X5和仿真鱼眼路线，但数据仍计划录用后发布；未确立原始ERP发布。"
          },
          "evidence": [
            "https://mild-web.github.io/",
            "https://arxiv.org/abs/2610.09857"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "unknown",
          "provenance": [],
          "note": {
            "en": "Public descriptions do not establish downloadable dense depth labels, formats or masks. RGB-D hardware or simulator naming alone is not proof of released depth truth.",
            "zh": "公开描述尚未建立可下载的稠密深度标签、格式及掩码；RGB-D 硬件或仿真器名称不能证明已发布深度真值。"
          }
        },
        "trajectory": {
          "status": "unknown",
          "provenance": [
            "kinematic",
            "rendered"
          ],
          "note": {
            "en": "Real TCP references from logged robot kinematics and simulation states are announced; dataset and manifests remain pending release, so availability is unconfirmed.",
            "zh": "已声明由机器人运动学日志生成真实 TCP 参考及仿真状态，但数据与清单仍待发布，可获取性尚未确认。"
          }
        },
        "evidence": [
          "https://mild-web.github.io/",
          "https://arxiv.org/abs/2610.09857"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "pending",
        "rank": 1,
        "scope": {
          "zh": "UMI 示教定位",
          "en": "UMI teaching localization"
        },
        "reason": {
          "zh": "论文已介绍，完整数据、代码及评测清单仍待录用后发布。",
          "en": "Announced benchmark; complete data, code and evaluation manifests await acceptance."
        },
        "evidence": [
          {
            "url": "https://mild-web.github.io/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_mild2026.webp",
        "thumbnail": "assets/datasets/ds_mild2026-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://mild-web.github.io/",
        "sourceUrl": "https://mild-web.github.io/assets/videos/supplementary/hero-v8-poster.jpg",
        "paperUrl": "https://arxiv.org/abs/2610.09857",
        "sourceTitle": "MILD / MILD-Sim official dataset preview",
        "caption": {
          "en": "Official MILD video-poster montage of 20 X5 recording excerpts; a preview subset, not the full dataset count or a data-release confirmation.",
          "zh": "MILD 官方视频封面，拼合 20 段 X5 录制片段；仅为展示子集，不能据此推断完整数据量或数据已发布。"
        },
        "credit": {
          "en": "Source: MILD / MILD-Sim authors, official project preview.",
          "zh": "来源：MILD / MILD-Sim 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: MILD / MILD-Sim authors, official project preview.",
          "zh": "来源：MILD / MILD-Sim 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          1100,
          619
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "e6038804470b87340532d78d3bdaa4d9eaa1fba4a5efefbf114df1cba62d1368"
      }
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
      "environment": "CUDA omnidirectional rasterizer; graph-based keyframe removal reduces memory; no local benchmark.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://openaccess.thecvf.com/content/CVPR2026/html/Spiss_ODGS-SLAM_Omnidirectional_Gaussian_Splatting_SLAM_CVPR_2026_paper.html",
            "https://odgs-slam.github.io/",
            "https://github.com/odgs-slam/odgs-slam"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/odgsslam2026-thumb.webp",
        "image": "assets/papers/odgsslam2026.webp",
        "paperUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Spiss_ODGS-SLAM_Omnidirectional_Gaussian_Splatting_SLAM_CVPR_2026_paper.pdf",
        "page": 1,
        "figureLabel": "Figure 1",
        "caption": {
          "zh": "全景跟踪、关键帧管理与球面高斯地图概览。",
          "en": "Panoramic tracking, keyframe management and spherical Gaussian mapping."
        },
        "credit": {
          "zh": "来源：论文作者，2026；1 号图截图。",
          "en": "Source: paper authors (2026), Figure 1 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Figure 1. (Left:) Overview of the ODGS-SLAM system.",
        "cropBox": [
          55,
          208,
          564,
          340
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "a3a8faefdf2e09e09aa961625e55f692344da8ab185ce2f5ed05220b87e92213",
        "imageSize": [
          1272,
          330
        ]
      }
    },
    {
      "id": "ds_odgs_slam",
      "name": "ODGS-SLAM Dataset",
      "title": "ODGS-SLAM Dataset: synthetic and real omnidirectional motion sequences",
      "year": 2026,
      "cameras": [
        "panoramic",
        "fisheye",
        "wide",
        "perspective",
        "multi"
      ],
      "tasks": [
        "depth",
        "slam"
      ],
      "environment": [
        "indoor",
        "outdoor"
      ],
      "reality": "mixed",
      "sensors": [
        "Insta360 Pro",
        "Insta360 X4",
        "OptiTrack",
        "Blender Cycles virtual cameras"
      ],
      "sensorLabels": {
        "en": [
          "Insta360 Pro",
          "Insta360 X4",
          "OptiTrack",
          "Blender Cycles virtual cameras"
        ],
        "zh": [
          "Insta360 Pro",
          "Insta360 X4",
          "OptiTrack",
          "Blender Cycles 虚拟相机"
        ]
      },
      "groundTruth": [
        "Rendered depth and poses",
        "Motion-capture reference poses",
        "Estimated real-panorama stereo depth"
      ],
      "groundTruthLabels": {
        "en": [
          "Rendered depth and poses",
          "Motion-capture reference poses",
          "Estimated real-panorama stereo depth"
        ],
        "zh": [
          "渲染深度与位姿",
          "动作捕捉参考位姿",
          "真实全景的立体估计深度"
        ]
      },
      "access": "open",
      "homepageUrl": "https://odgs-slam.github.io/",
      "paperUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Spiss_ODGS-SLAM_Omnidirectional_Gaussian_Splatting_SLAM_CVPR_2026_paper.html",
      "downloadUrl": "https://researchdata.uibk.ac.at/records/z6f6r-sjc65",
      "license": {
        "en": "CC BY-NC-SA 4.0, explicitly recorded in the official University of Innsbruck repository API metadata.",
        "zh": "因斯布鲁克大学官方数据仓库 API 元数据明确声明 CC BY-NC-SA 4.0。"
      },
      "summary": "公开的合成室内/室外与真实室内 SLAM 序列，对比 ERP、六鱼眼机架及透视输入；需区分渲染深度、动作捕捉位姿和真实图像的估计深度。",
      "details": {
        "en": {
          "Subsets and provenance": "Indoor room and outdoor urban subsets are fully synthetic Blender Cycles renders, not photogrammetric real scans. The real subset records a myAGV robot indoors; five Insta360 Pro and eight X4 sequences are documented.",
          "Physical camera outputs": "Real Pro data includes six 1440×1920 fisheye streams at 30 FPS and 1920×960 stitched ERP. X4 provides 3840×1920 stitched ERP at 60 FPS, without separate physical lens images in this release.",
          "Depth provenance": "Synthetic ERP/pinhole EXR depths are rendered; real Pro panorama EXR depths come from sphere-sweeping stereo and are estimates. The real X4 listing contains RGB, poses and robot masks, not depth. Depth encoding units and range-versus-Z are not settled by the inspected READMEs.",
          "Pose and synchronization": "Real OptiTrack tracks three markers with the reference origin at the camera mount; video alignment is manual. Apply the documented mount-specific Y rotation. Synthetic poses use Blender coordinates; both versions store XYZ Euler angles in radians. Translation units and a synchronization error bound are not specified in the inspected READMEs.",
          "Calibration and protocols": "MC-Calib YAML provides the Pro multicamera calibration. Synthetic views simulate that rig and also offer a 113-degree perspective camera. Choose the documented subset/sequence: some retracing data has only Camera_0; no universal train/validation/test split is asserted.",
          "Access and version": "University archive DOI 10.48323/z6f6r-sjc65, v1.0.0, published 2026-04-17. Three ZIPs and their separate small READMEs are publicly listed; only READMEs/API metadata were read. This is an older omission, not a new October dataset."
        },
        "zh": {
          "子集与来源": "室内房间及室外城市子集均由 Blender Cycles 完全合成，并非真实扫描后摄影测量的场景；真实子集在室内记录 myAGV，列有 5 段 Pro 和 8 段 X4 序列。",
          "真实相机输出": "Pro 包含 6 路 1440×1920、30 FPS 鱼眼及 1920×960 拼接 ERP；X4 提供 3840×1920、60 FPS 拼接 ERP，本发布不含独立镜头图像。",
          "深度来源": "合成 ERP/透视 EXR 深度来自渲染；真实 Pro 全景 EXR 深度由球面扫描立体算法估计。真实 X4 列表包含 RGB、位姿和机器人掩码，不含深度。所读 README 未确定深度编码单位及径向距离/Z 定义。",
          "位姿与同步": "真实 OptiTrack 跟踪三个标记点，参考原点为相机安装位置；视频按运动模式手工对时，并需应用各安装配置的 Y 轴补偿旋转。合成位姿采用 Blender 坐标；两者 XYZ 欧拉角均为弧度。所读 README 未说明平移单位或同步误差界限。",
          "标定与协议": "MC-Calib YAML 提供 Pro 多相机标定；合成视图模拟该机架，另含 113° 透视相机。按明确子集/序列选择数据；部分折返数据仅含 Camera_0，不宣称统一训练/验证/测试划分。",
          "获取与版本": "大学仓库 DOI 为 10.48323/z6f6r-sjc65，v1.0.0 发布于 2026-04-17。公开列出 3 个 ZIP 和各自小型 README；仅阅读说明/API，未下载完整数据。本轮属于旧遗漏补充。"
        }
      },
      "notes": {
        "en": [
          "Do not score the real stereo-estimated depth as an independent measured depth ground truth.",
          "Synthetic camera-to-world uses Blender +Z up and optical axis −Z; real data uses world +Y up plus mount offsets. A single unchanged pose parser is unsafe across subsets.",
          "A public archive listing establishes an access route, not a completed integrity or full-download test."
        ],
        "zh": [
          "不能把真实序列的立体估计深度当作独立实测深度真值。",
          "合成相机到世界采用 Blender 的 +Z 向上、光轴 −Z；真实数据世界 +Y 向上且有安装旋转。不同子集不能未经转换共用位姿解析器。",
          "公开归档列表证明存在获取入口，不代表已完成全量下载和完整性校验。"
        ]
      },
      "evidence": [
        {
          "url": "https://researchdata.uibk.ac.at/records/z6f6r-sjc65",
          "title": "Official university dataset archive, DOI, versions and files"
        },
        {
          "url": "https://researchdata.uibk.ac.at/api/records/z6f6r-sjc65",
          "title": "Official metadata API including explicit CC BY-NC-SA 4.0 rights"
        },
        {
          "url": "https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_real_world_README.md?download=1",
          "title": "Official real recording README: cameras, estimated depth, mocap and manual alignment"
        },
        {
          "url": "https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_room_synthetic_README.md?download=1",
          "title": "Official synthetic indoor README: rendering, calibration and pose coordinates"
        },
        {
          "url": "https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/outdoor_synthetic_README.md?download=1",
          "title": "Official synthetic outdoor README: urban Blender renders and camera modalities"
        }
      ],
      "checked": "2026-10-19",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Public synthetic indoor/outdoor and real indoor SLAM sequences compare ERP, six-fisheye rigs and perspective inputs; rendered depths, mocap poses and estimated real depths have distinct provenance.",
        "zh": "公开的合成室内/室外与真实室内 SLAM 序列，对比 ERP、六鱼眼机架及透视输入；需区分渲染深度、动作捕捉位姿和真实图像的估计深度。"
      },
      "datasetDetails": {
        "en": {
          "Subsets and provenance": "Indoor room and outdoor urban subsets are fully synthetic Blender Cycles renders, not photogrammetric real scans. The real subset records a myAGV robot indoors; five Insta360 Pro and eight X4 sequences are documented.",
          "Physical camera outputs": "Real Pro data includes six 1440×1920 fisheye streams at 30 FPS and 1920×960 stitched ERP. X4 provides 3840×1920 stitched ERP at 60 FPS, without separate physical lens images in this release.",
          "Depth provenance": "Synthetic ERP/pinhole EXR depths are rendered; real Pro panorama EXR depths come from sphere-sweeping stereo and are estimates. The real X4 listing contains RGB, poses and robot masks, not depth. Depth encoding units and range-versus-Z are not settled by the inspected READMEs.",
          "Pose and synchronization": "Real OptiTrack tracks three markers with the reference origin at the camera mount; video alignment is manual. Apply the documented mount-specific Y rotation. Synthetic poses use Blender coordinates; both versions store XYZ Euler angles in radians. Translation units and a synchronization error bound are not specified in the inspected READMEs.",
          "Calibration and protocols": "MC-Calib YAML provides the Pro multicamera calibration. Synthetic views simulate that rig and also offer a 113-degree perspective camera. Choose the documented subset/sequence: some retracing data has only Camera_0; no universal train/validation/test split is asserted.",
          "Access and version": "University archive DOI 10.48323/z6f6r-sjc65, v1.0.0, published 2026-04-17. Three ZIPs and their separate small READMEs are publicly listed; only READMEs/API metadata were read. This is an older omission, not a new October dataset."
        },
        "zh": {
          "子集与来源": "室内房间及室外城市子集均由 Blender Cycles 完全合成，并非真实扫描后摄影测量的场景；真实子集在室内记录 myAGV，列有 5 段 Pro 和 8 段 X4 序列。",
          "真实相机输出": "Pro 包含 6 路 1440×1920、30 FPS 鱼眼及 1920×960 拼接 ERP；X4 提供 3840×1920、60 FPS 拼接 ERP，本发布不含独立镜头图像。",
          "深度来源": "合成 ERP/透视 EXR 深度来自渲染；真实 Pro 全景 EXR 深度由球面扫描立体算法估计。真实 X4 列表包含 RGB、位姿和机器人掩码，不含深度。所读 README 未确定深度编码单位及径向距离/Z 定义。",
          "位姿与同步": "真实 OptiTrack 跟踪三个标记点，参考原点为相机安装位置；视频按运动模式手工对时，并需应用各安装配置的 Y 轴补偿旋转。合成位姿采用 Blender 坐标；两者 XYZ 欧拉角均为弧度。所读 README 未说明平移单位或同步误差界限。",
          "标定与协议": "MC-Calib YAML 提供 Pro 多相机标定；合成视图模拟该机架，另含 113° 透视相机。按明确子集/序列选择数据；部分折返数据仅含 Camera_0，不宣称统一训练/验证/测试划分。",
          "获取与版本": "大学仓库 DOI 为 10.48323/z6f6r-sjc65，v1.0.0 发布于 2026-04-17。公开列出 3 个 ZIP 和各自小型 README；仅阅读说明/API，未下载完整数据。本轮属于旧遗漏补充。"
        }
      },
      "datasetNotes": {
        "en": [
          "Do not score the real stereo-estimated depth as an independent measured depth ground truth.",
          "Synthetic camera-to-world uses Blender +Z up and optical axis −Z; real data uses world +Y up plus mount offsets. A single unchanged pose parser is unsafe across subsets.",
          "A public archive listing establishes an access route, not a completed integrity or full-download test."
        ],
        "zh": [
          "不能把真实序列的立体估计深度当作独立实测深度真值。",
          "合成相机到世界采用 Blender 的 +Z 向上、光轴 −Z；真实数据世界 +Y 向上且有安装旋转。不同子集不能未经转换共用位姿解析器。",
          "公开归档列表证明存在获取入口，不代表已完成全量下载和完整性校验。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY-NC-SA 4.0, explicitly recorded in the official University of Innsbruck repository API metadata.",
        "zh": "因斯布鲁克大学官方数据仓库 API 元数据明确声明 CC BY-NC-SA 4.0。"
      },
      "sourceChecked": "2026-10-19",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "stitched",
          "availability": "released",
          "note": {
            "en": "Real Pro/X4 sequences provide stitched ERP; synthetic ERP renders form separate subsets.",
            "zh": "真实Pro/X4序列提供拼接ERP；另有合成ERP渲染子集。"
          },
          "evidence": [
            "https://researchdata.uibk.ac.at/records/z6f6r-sjc65",
            "https://researchdata.uibk.ac.at/api/records/z6f6r-sjc65",
            "https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_real_world_README.md?download=1"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Real Pro supplies six lens streams, while X4 release is ERP-only; synthetic versions simulate the rig.",
            "zh": "真实Pro提供六路镜头流，X4发布仅ERP；合成版本模拟相机装置。"
          },
          "evidence": [
            "https://researchdata.uibk.ac.at/records/z6f6r-sjc65",
            "https://researchdata.uibk.ac.at/api/records/z6f6r-sjc65",
            "https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_real_world_README.md?download=1"
          ]
        },
        {
          "geometry": "perspective",
          "route": "rendered",
          "availability": "released",
          "note": {
            "en": "The synthetic subset additionally provides a 113-degree perspective camera; it is a separate synthetic protocol.",
            "zh": "合成子集另提供113度透视相机，属于独立合成协议。"
          },
          "evidence": [
            "https://researchdata.uibk.ac.at/records/z6f6r-sjc65",
            "https://researchdata.uibk.ac.at/api/records/z6f6r-sjc65",
            "https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_real_world_README.md?download=1"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "partial",
          "provenance": [
            "rendered",
            "estimated"
          ],
          "note": {
            "en": "Synthetic subsets have rendered depth. Real Pro depth is stereo-estimated, while the real X4 listing has no depth; real estimates are not measured depth truth.",
            "zh": "合成子集有渲染深度；真实 Pro 深度来自立体估计，真实 X4 目录不含深度；真实估计不属于实测深度真值。"
          }
        },
        "trajectory": {
          "status": "yes",
          "provenance": [
            "rendered",
            "measured"
          ],
          "note": {
            "en": "Synthetic trajectories and real OptiTrack reference poses are supplied. Real camera/mocap alignment is manual and uses mount-specific transforms.",
            "zh": "提供合成轨迹与真实 OptiTrack 参考位姿；真实相机与动捕手动对齐，且需按安装方式应用变换。"
          }
        },
        "evidence": [
          "https://researchdata.uibk.ac.at/records/z6f6r-sjc65",
          "https://researchdata.uibk.ac.at/api/records/z6f6r-sjc65",
          "https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_real_world_README.md?download=1",
          "https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_room_synthetic_README.md?download=1",
          "https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/outdoor_synthetic_README.md?download=1"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "specialized",
        "rank": 9,
        "scope": {
          "zh": "全景高斯建图",
          "en": "Panoramic Gaussian mapping"
        },
        "reason": {
          "zh": "方法配套数据；真实立体估深、无深度和合成子集分开使用。",
          "en": "Method-specific real/synthetic subsets with different depth availability."
        },
        "evidence": [
          {
            "url": "https://odgs-slam.github.io/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_odgs_slam.webp",
        "thumbnail": "assets/datasets/ds_odgs_slam-thumb.webp",
        "sourceType": "paper-pdf",
        "sourcePageUrl": "https://odgs-slam.github.io/",
        "sourceUrl": "https://odgs-slam.github.io/data/ODGS-SLAM_CVPR26_supplement.pdf",
        "paperUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Spiss_ODGS-SLAM_Omnidirectional_Gaussian_Splatting_SLAM_CVPR_2026_paper.html",
        "sourceTitle": "ODGS-SLAM Dataset official dataset preview",
        "caption": {
          "en": "Real Insta360 Pro panorama from the ODGS-SLAM dataset; RGB input panel from supplementary Figure S3.",
          "zh": "ODGS-SLAM 数据集的真实 Insta360 Pro 全景；截自补充材料图 S3 的 RGB 输入子图。"
        },
        "credit": {
          "en": "Source: Spiss et al., ODGS-SLAM supplementary material, Figure S3 (RGB panel).",
          "zh": "来源：Spiss 等，ODGS-SLAM 补充材料图 S3（RGB 子图）。"
        },
        "attribution": {
          "en": "Source: Spiss et al., ODGS-SLAM supplementary material, Figure S3 (RGB panel).",
          "zh": "来源：Spiss 等，ODGS-SLAM 补充材料图 S3（RGB 子图）。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          987,
          496
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "pdfSha256": "d99cb0a93bcf75e5e6fdd205112867cc3076a4b93ff8296a9dc37cf06dccb343",
        "page": 4,
        "figureLabel": "Figure S3, top RGB panorama panel",
        "cropBox": [
          317,
          72,
          554,
          191
        ],
        "originalCaption": "Figure S3. Example images from the Insta360 Pro sequences."
      }
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
        "https://github.com/BambValley/P2U-SLAM",
        "https://arxiv.org/html/2409.10143v1"
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
      "environment": "CPU feature-based architecture; full source unavailable for profiling.",
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://arxiv.org/abs/2409.10143",
            "https://github.com/BambValley/P2U-SLAM"
          ]
        }
      ],
      "projectionSubtypes": [
        "annular"
      ],
      "additionalSupport": [
        {
          "geometry": "annular",
          "route": "direct",
          "note": {
            "en": "Taylor/PAL annular images and Kannala-Brandt fisheyes are supported; PAL coverage is not a full-sphere ERP image.",
            "zh": "支持 Taylor/PAL 环形成像与 Kannala-Brandt 鱼眼；PAL 覆盖不等于整球 ERP 图。"
          },
          "evidence": [
            "https://arxiv.org/html/2409.10143v1"
          ]
        }
      ],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/p2uslam2026-thumb.webp",
        "image": "assets/papers/p2uslam2026.webp",
        "paperUrl": "https://arxiv.org/pdf/2409.10143",
        "page": 6,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "点不确定性贯穿初始化、跟踪、局部 BA 和回环。",
          "en": "Point uncertainty used across initialization, tracking, local BA and loop closure."
        },
        "credit": {
          "zh": "来源：论文作者，2026；3 号图截图。",
          "en": "Source: paper authors (2026), Figure 3 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 3: The pipeline of P2U-SLAM.",
        "cropBox": [
          120,
          47,
          491,
          219.5
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "93061c430925d768b0a5908c29e84e1300dd14b83caba4797a166b443fea8356",
        "imageSize": [
          927,
          431
        ]
      }
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
      "codeStatus": "none",
      "codeUrl": "https://github.com/YYWumm/PanoAir",
      "paperUrl": "https://arxiv.org/abs/2604.00852",
      "projectUrl": "https://github.com/YYWumm/PanoAir",
      "weightsUrl": "",
      "license": "Official repository declares GPL-3.0; estimator source remains pending. A separate dataset licence was not verified.",
      "evidence": [
        "Paper IV uses ERP; V-C specifies the embedded 10 Hz setting. Official repository README checked 2026-10-20 separates the advertised dataset/calibration download from the still-pending source-code release. No archive execution or local estimator reproduction.",
        "https://arxiv.org/abs/2604.00852",
        "https://arxiv.org/html/2604.00852v1",
        "https://github.com/YYWumm/PanoAir",
        "https://drive.google.com/file/d/1lG1Upn6yi-N6tYpEHAt6dfR1uhzNtWbT/view"
      ],
      "notes": [
        "The official README advertises dataset/calibration on Drive but estimator source is still being prepared for release in the coming months. Dataset archive contents, a separate data licence and checkpoints were not audited. UAV evidence is not wrist precision validation.",
        "Dataset and calibration are linked on Drive; official README says estimator code is being prepared and expected in the coming months (checked 2026-10-20)"
      ],
      "tags": [],
      "family": "panoramic hybrid-feature visual-inertial SLAM",
      "imu": true,
      "loopClosure": true,
      "nativePanoramic": true,
      "sourceChecked": "2026-10-20",
      "publiclyVerified": true,
      "verificationLevel": "Official paper/repository/documentation read; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "Paper: C++/ONNX; Jetson Orin NX TensorRT 10Hz with stride 3; no local result.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://arxiv.org/abs/2604.00852",
            "https://arxiv.org/html/2604.00852v1",
            "https://drive.google.com/file/d/1lG1Upn6yi-N6tYpEHAt6dfR1uhzNtWbT/view"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/panoair2026-thumb.webp",
        "image": "assets/papers/panoair2026.webp",
        "paperUrl": "https://arxiv.org/pdf/2604.00852",
        "page": 4,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "无人机全景与 IMU 输入的混合特征视觉惯性 SLAM。",
          "en": "Hybrid-feature visual-inertial SLAM from UAV panoramas and IMU."
        },
        "credit": {
          "zh": "来源：论文作者，2026；2 号图截图。",
          "en": "Source: paper authors (2026), Figure 2 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 2. Overview of the proposed panoramic visual-inertial SLAM framework.",
        "cropBox": [
          312,
          52,
          564,
          280
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "7f036c6c38defbe62264938d8875bf55384243d3a7db1a56d35bfac64692f801",
        "imageSize": [
          630,
          570
        ]
      }
    },
    {
      "id": "ds_panoair",
      "name": "PanoAir",
      "title": "PanoAir: A Panoramic Visual-Inertial SLAM with Cross-Time Real-World UAV Dataset",
      "year": 2026,
      "cameras": [
        "panoramic",
        "fisheye",
        "wide",
        "perspective",
        "multi"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "ERP / dual fisheye",
        "IMU",
        "RTK"
      ],
      "sensorLabels": {
        "en": [
          "ERP / dual fisheye",
          "IMU",
          "RTK"
        ],
        "zh": [
          "ERP/双鱼眼",
          "IMU",
          "RTK"
        ]
      },
      "groundTruth": [
        "Announced RTK trajectory reference"
      ],
      "groundTruthLabels": {
        "en": [
          "Announced RTK trajectory reference"
        ],
        "zh": [
          "已声明的 RTK 轨迹参考"
        ]
      },
      "access": "unknown",
      "homepageUrl": "https://github.com/YYWumm/PanoAir",
      "paperUrl": "https://arxiv.org/abs/2604.00852",
      "downloadUrl": "https://github.com/YYWumm/PanoAir#-download",
      "license": {
        "en": "Repository is GPL-3.0; a separate dataset licence was not verified. Do not infer data rights from the code licence.",
        "zh": "仓库标为 GPL-3.0；未核验单独数据许可，不根据代码许可推断数据权利。"
      },
      "summary": "跨光照和飞行条件的真实无人机全景惯性序列；官方提供 Drive 数据链接，但本次未核验归档访问。",
      "details": {
        "en": {
          "Inputs": "30 Hz stitched ERP; dual-fisheye ROS1 recordings and virtual pinhole sequences; 1000 Hz IMU.",
          "Reference": "README lists 5 Hz RTK trajectories. Inspect files/paper for position versus orientation coverage and antenna/body transforms before 6DoF evaluation.",
          "Calibration": "Camera intrinsics, IMU intrinsics, camera–IMU extrinsics and virtual-pinhole parameters are listed.",
          "Release status": "The official README checked on 2026-10-20 states that data and calibration are available on Google Drive; estimator source code is still being prepared and is expected in the coming months. The linked data archive was not downloaded or unpacked in this audit.",
          "Evidence limit": "No dense depth GT, complete-download check, or measured synchronization-error bound is asserted here."
        },
        "zh": {
          "输入": "30 Hz 拼接 ERP、双鱼眼 ROS1 记录、虚拟透视序列，以及 1000 Hz IMU。",
          "参考": "README 列出 5 Hz RTK 轨迹；六自由度评测前需检查文件/论文，核对位置与姿态覆盖及天线/机体变换。",
          "标定": "列出相机内参、IMU 内参、相机–IMU 外参及虚拟透视参数。",
          "发布状态": "2026-10-20 核查的官方 README 声称数据与标定可从 Google Drive 下载；估计器源码仍在整理，预计未来数月发布。本次未下载或解包链接的数据归档。",
          "证据限制": "本条目不宣称稠密深度真值、完整下载验证或已测同步误差界限。"
        }
      },
      "notes": {
        "en": [
          "Access marked unknown because the linked Drive archive was not downloaded or unpacked.",
          "A linked dataset release does not imply the full SLAM code is released."
        ],
        "zh": [
          "由于未下载和解包 Drive 归档，获取状态标为未知。",
          "链接数据发布不代表完整 SLAM 代码已经发布。"
        ]
      },
      "evidence": [
        {
          "url": "https://github.com/YYWumm/PanoAir",
          "title": "PanoAir official README, sensor rates and release roadmap"
        },
        {
          "url": "https://arxiv.org/abs/2604.00852",
          "title": "PanoAir 2026 preprint"
        }
      ],
      "checked": "2026-10-20",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Real UAV panoramic-inertial sequences across illumination and flight conditions; the official Drive release is linked but archive access remains unverified.",
        "zh": "跨光照和飞行条件的真实无人机全景惯性序列；官方提供 Drive 数据链接，但本次未核验归档访问。"
      },
      "datasetDetails": {
        "en": {
          "Inputs": "30 Hz stitched ERP; dual-fisheye ROS1 recordings and virtual pinhole sequences; 1000 Hz IMU.",
          "Reference": "README lists 5 Hz RTK trajectories. Inspect files/paper for position versus orientation coverage and antenna/body transforms before 6DoF evaluation.",
          "Calibration": "Camera intrinsics, IMU intrinsics, camera–IMU extrinsics and virtual-pinhole parameters are listed.",
          "Release status": "The official README checked on 2026-10-20 states that data and calibration are available on Google Drive; estimator source code is still being prepared and is expected in the coming months. The linked data archive was not downloaded or unpacked in this audit.",
          "Evidence limit": "No dense depth GT, complete-download check, or measured synchronization-error bound is asserted here."
        },
        "zh": {
          "输入": "30 Hz 拼接 ERP、双鱼眼 ROS1 记录、虚拟透视序列，以及 1000 Hz IMU。",
          "参考": "README 列出 5 Hz RTK 轨迹；六自由度评测前需检查文件/论文，核对位置与姿态覆盖及天线/机体变换。",
          "标定": "列出相机内参、IMU 内参、相机–IMU 外参及虚拟透视参数。",
          "发布状态": "2026-10-20 核查的官方 README 声称数据与标定可从 Google Drive 下载；估计器源码仍在整理，预计未来数月发布。本次未下载或解包链接的数据归档。",
          "证据限制": "本条目不宣称稠密深度真值、完整下载验证或已测同步误差界限。"
        }
      },
      "datasetNotes": {
        "en": [
          "Access marked unknown because the linked Drive archive was not downloaded or unpacked.",
          "A linked dataset release does not imply the full SLAM code is released."
        ],
        "zh": [
          "由于未下载和解包 Drive 归档，获取状态标为未知。",
          "链接数据发布不代表完整 SLAM 代码已经发布。"
        ]
      },
      "datasetLicense": {
        "en": "Repository is GPL-3.0; a separate dataset licence was not verified. Do not infer data rights from the code licence.",
        "zh": "仓库标为 GPL-3.0；未核验单独数据许可，不根据代码许可推断数据权利。"
      },
      "sourceChecked": "2026-10-20",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "stitched",
          "availability": "released",
          "note": {
            "en": "The documented ERP stream is stitched from a dual-fisheye camera.",
            "zh": "所记录ERP流由双鱼眼相机拼接。"
          },
          "evidence": [
            "https://github.com/YYWumm/PanoAir",
            "https://arxiv.org/abs/2604.00852"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Dual-fisheye ROS recordings are separately documented.",
            "zh": "文档另列双鱼眼ROS录制。"
          },
          "evidence": [
            "https://github.com/YYWumm/PanoAir",
            "https://arxiv.org/abs/2604.00852"
          ]
        },
        {
          "geometry": "perspective",
          "route": "reprojected",
          "availability": "released",
          "note": {
            "en": "Virtual pinhole streams are derived from the panoramic capture.",
            "zh": "虚拟针孔流由全景采集派生。"
          },
          "evidence": [
            "https://github.com/YYWumm/PanoAir",
            "https://arxiv.org/abs/2604.00852"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "The documented release inventory lists camera streams, IMU, calibration and RTK trajectories, without image-depth targets.",
            "zh": "已记录发布目录列出相机流、IMU、标定及 RTK 轨迹，不含图像深度目标。"
          }
        },
        "trajectory": {
          "status": "unknown",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Official README announces 5 Hz RTK trajectories, but linked archive contents, position/orientation coverage and frame transforms have not been validated.",
            "zh": "官方 README 声明有 5 Hz RTK 轨迹，但链接归档内容、位置与方向覆盖及坐标变换尚未验证。"
          }
        },
        "evidence": [
          "https://github.com/YYWumm/PanoAir",
          "https://arxiv.org/abs/2604.00852"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "pending",
        "rank": 2,
        "scope": {
          "zh": "全景空中定位",
          "en": "Panoramic aerial localization"
        },
        "reason": {
          "zh": "关联数据下载及真值完整性尚未核实，保留待核实标记。",
          "en": "Dataset acquisition and reference completeness remain unverified."
        },
        "evidence": [
          {
            "url": "https://github.com/YYWumm/PanoAir",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_panoair.webp",
        "thumbnail": "assets/datasets/ds_panoair-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://github.com/YYWumm/PanoAir",
        "sourceUrl": "https://raw.githubusercontent.com/YYWumm/PanoAir/main/assets/overview_pdf-1.png",
        "paperUrl": "https://arxiv.org/abs/2604.00852",
        "sourceTitle": "PanoAir official dataset preview",
        "caption": {
          "en": "PanoAir dataset overview with acquisition platform, trajectory distribution and panoramic observations.",
          "zh": "PanoAir 数据集总览，包含采集平台、轨迹分布和全景观测。"
        },
        "credit": {
          "en": "Source: PanoAir authors, official project preview.",
          "zh": "来源：PanoAir 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: PanoAir authors, official project preview.",
          "zh": "来源：PanoAir 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          1100,
          825
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "97953400065222a3a0771acae8dceb2c8aea48cb96ec5b120f5b237c7cb3f2f3"
      }
    },
    {
      "id": "ds_panocarla_static2026",
      "name": "PanoCARLA-Static",
      "title": "PanoCARLA-Static: static-scene panoramic RGB-D video with moving virtual cameras",
      "year": 2026,
      "cameras": [
        "panoramic"
      ],
      "tasks": [
        "depth",
        "slam"
      ],
      "environment": [
        "outdoor"
      ],
      "reality": "synthetic",
      "sensors": [
        "CARLA 0.9.16 virtual RGB/depth/semantic cameras"
      ],
      "sensorLabels": {
        "en": [
          "CARLA 0.9.16 virtual RGB/depth/semantic cameras"
        ],
        "zh": [
          "CARLA 0.9.16 虚拟 RGB/深度/语义相机"
        ]
      },
      "groundTruth": [
        "Rendered radial depth",
        "Simulator camera position and yaw",
        "Rendered semantic labels"
      ],
      "groundTruthLabels": {
        "en": [
          "Rendered radial depth",
          "Simulator camera position and yaw",
          "Rendered semantic labels"
        ],
        "zh": [
          "渲染径向深度",
          "仿真相机位置与偏航角",
          "渲染语义标签"
        ]
      },
      "access": "open",
      "homepageUrl": "https://huggingface.co/datasets/Soon122/PanoCARLA-Static",
      "paperUrl": "https://proceedings.mlr.press/v306/song26u.html",
      "downloadUrl": "https://huggingface.co/datasets/Soon122/PanoCARLA-Static/tree/main",
      "license": {
        "en": "CC BY 4.0 for the dataset, stated in the official card. Cite PVDepth; the collection repository's MIT code licence is separate.",
        "zh": "官方数据卡声明数据为 CC BY 4.0；使用时引用 PVDepth，采集仓库的 MIT 代码许可单独适用。"
      },
      "summary": "2026 年 10 月发布到 HF 的 CARLA 静态场景全景序列，含移动相机、径向公制深度和仿真位姿；同名路线并不与动态 PanoCARLA 逐帧同位姿。",
      "details": {
        "en": {
          "Release and access": "Official HF API records creation on 2026-10-07 and update on 2026-10-08, with private=false and gated=false at this check. These dates describe this data repository, not the first publication date of the ICML 2026 PVDepth paper. Large data files were not downloaded.",
          "Coverage and capture": "The card lists 127,334 frames, 127 clips, 67 routes and eight towns at 20 FPS. Vehicles/pedestrians are removed while the camera moves with varying height. Six synchronized virtual views produce ERP; they are not a physical stereo rig or measured baseline.",
          "Depth and validity": "HDF5 depth is float16 [T,1200,2400,1] radial distance in meters. Capture code decodes CARLA depth with a 1000-meter scale; stitching converts optical-axis depth to ray distance. Check finite/positive validity and sky/far-plane masking for the selected evaluation; the 1000-meter source scale is not an ERP valid-depth cutoff.",
          "Pose and coordinates": "Float32 poses store x,y,z in CARLA world meters and yaw in degrees; pitch and roll are fixed at zero and omitted. Use each release's supplied poses, not a newly generated path or a dynamic-release trajectory.",
          "Formats and indexing": "RGB is uint8 [T,1200,2400,3]; segmentation uses uint8 CARLA IDs. setting_static.json maps frame IDs to HDF5 paths/indices. Collision/gap filtering creates clip boundaries; preview videos include excluded frames and do not share HDF5 indexing.",
          "Evaluation and relation": "Static and dynamic variants reuse overall routes but regenerate camera-height motion, so they are not pixel/pose-aligned pairs. Preserve town/route identity when splitting data; the card does not define a separate static train/validation/test benchmark."
        },
        "zh": {
          "发布与获取": "官方 HF API 记录仓库于 2026-10-07 创建、10-08 更新，本次核验 private=false、gated=false。这是该数据仓库的日期，不是 ICML 2026 PVDepth 论文首发日期；未下载完整大文件。",
          "覆盖与采集": "数据卡列出 127334 帧、127 个片段、67 条路线、8 个城镇，20 FPS。移除车辆和行人，相机仍移动且高度变化；6 个同步虚拟视图生成 ERP，不是真实立体机架或实测基线。",
          "深度与有效性": "HDF5 深度为 float16 [T,1200,2400,1]、米制径向距离。采集代码以 1000 米缩放解码 CARLA 深度，拼接时将光轴深度转为射线距离。按选定评测检查有限/正值、天空和远平面掩码；1000 米源缩放不能直接当作 ERP 有效深度上限。",
          "位姿与坐标": "float32 位姿存储 CARLA 世界坐标的米制 x,y,z 和角度制 yaw；pitch、roll 固定为零而省略。几何计算应使用本版本位姿，不能借用新生成路线或动态版轨迹。",
          "格式与索引": "RGB 为 uint8 [T,1200,2400,3]，语义为 uint8 CARLA 类别。setting_static.json 将源帧号映射到 HDF5 路径/索引；碰撞和帧号空隙决定片段边界，预览视频包含被剔除帧，不可与 HDF5 索引混用。",
          "评测与关联": "静态/动态版复用大致路线，但重新随机生成相机高度，因此不是逐像素、逐位姿对齐的数据对。划分应保留城镇/路线身份；数据卡未定义单独的静态版训练/验证/测试基准。"
        }
      },
      "notes": {
        "en": [
          "This is synthetic annotation, not measured physical depth or independently tracked real poses; yaw-only orientation limits motion diversity.",
          "The original dynamic PanoCARLA repository is currently gated; access policies must be checked separately for each release.",
          "HF viewer failure does not establish missing downloadable files; access=open is based on current public ungated repository metadata."
        ],
        "zh": [
          "标注由仿真生成，并非物理深度测量或真实独立跟踪位姿；仅偏航角变化限制了运动多样性。",
          "原始动态 PanoCARLA 当前有访问门控，不能把其政策套用到静态版；各发布需分别核对。",
          "HF 预览器失败不代表文件无法下载；公开获取状态以当前无门控仓库元数据为据。"
        ]
      },
      "evidence": [
        {
          "url": "https://huggingface.co/datasets/Soon122/PanoCARLA-Static",
          "title": "Official static dataset card: dimensions, depth convention, poses, clips and CC BY 4.0"
        },
        {
          "url": "https://huggingface.co/api/datasets/Soon122/PanoCARLA-Static",
          "title": "Official API: 2026-10-07 creation, 2026-10-08 update and ungated public access"
        },
        {
          "url": "https://github.com/ChuanxinSong/PanoCARLA",
          "title": "Official shared collection pipeline; six virtual views and dataset licence separation"
        },
        {
          "url": "https://github.com/ChuanxinSong/PanoCARLA/blob/main/stage2/equi_extract_for_fov100_multiprocess.py",
          "title": "Official conversion: optical-axis to radial distance and face-selection stitching"
        },
        {
          "url": "https://github.com/ChuanxinSong/PanoCARLA/blob/main/stage2/record_2stage.py",
          "title": "Official capture: CARLA depth decoding, six views, pose and collision processing"
        },
        {
          "url": "https://proceedings.mlr.press/v306/song26u.html",
          "title": "PVDepth ICML 2026 publication associated with PanoCARLA"
        }
      ],
      "checked": "2026-10-19",
      "collection": "datasets",
      "localizedSummary": {
        "en": "October 2026 HF release of static-scene CARLA panoramas with moving cameras, radial metric depth and simulator poses; shared route names do not make it pose-matched to dynamic PanoCARLA.",
        "zh": "2026 年 10 月发布到 HF 的 CARLA 静态场景全景序列，含移动相机、径向公制深度和仿真位姿；同名路线并不与动态 PanoCARLA 逐帧同位姿。"
      },
      "datasetDetails": {
        "en": {
          "Release and access": "Official HF API records creation on 2026-10-07 and update on 2026-10-08, with private=false and gated=false at this check. These dates describe this data repository, not the first publication date of the ICML 2026 PVDepth paper. Large data files were not downloaded.",
          "Coverage and capture": "The card lists 127,334 frames, 127 clips, 67 routes and eight towns at 20 FPS. Vehicles/pedestrians are removed while the camera moves with varying height. Six synchronized virtual views produce ERP; they are not a physical stereo rig or measured baseline.",
          "Depth and validity": "HDF5 depth is float16 [T,1200,2400,1] radial distance in meters. Capture code decodes CARLA depth with a 1000-meter scale; stitching converts optical-axis depth to ray distance. Check finite/positive validity and sky/far-plane masking for the selected evaluation; the 1000-meter source scale is not an ERP valid-depth cutoff.",
          "Pose and coordinates": "Float32 poses store x,y,z in CARLA world meters and yaw in degrees; pitch and roll are fixed at zero and omitted. Use each release's supplied poses, not a newly generated path or a dynamic-release trajectory.",
          "Formats and indexing": "RGB is uint8 [T,1200,2400,3]; segmentation uses uint8 CARLA IDs. setting_static.json maps frame IDs to HDF5 paths/indices. Collision/gap filtering creates clip boundaries; preview videos include excluded frames and do not share HDF5 indexing.",
          "Evaluation and relation": "Static and dynamic variants reuse overall routes but regenerate camera-height motion, so they are not pixel/pose-aligned pairs. Preserve town/route identity when splitting data; the card does not define a separate static train/validation/test benchmark."
        },
        "zh": {
          "发布与获取": "官方 HF API 记录仓库于 2026-10-07 创建、10-08 更新，本次核验 private=false、gated=false。这是该数据仓库的日期，不是 ICML 2026 PVDepth 论文首发日期；未下载完整大文件。",
          "覆盖与采集": "数据卡列出 127334 帧、127 个片段、67 条路线、8 个城镇，20 FPS。移除车辆和行人，相机仍移动且高度变化；6 个同步虚拟视图生成 ERP，不是真实立体机架或实测基线。",
          "深度与有效性": "HDF5 深度为 float16 [T,1200,2400,1]、米制径向距离。采集代码以 1000 米缩放解码 CARLA 深度，拼接时将光轴深度转为射线距离。按选定评测检查有限/正值、天空和远平面掩码；1000 米源缩放不能直接当作 ERP 有效深度上限。",
          "位姿与坐标": "float32 位姿存储 CARLA 世界坐标的米制 x,y,z 和角度制 yaw；pitch、roll 固定为零而省略。几何计算应使用本版本位姿，不能借用新生成路线或动态版轨迹。",
          "格式与索引": "RGB 为 uint8 [T,1200,2400,3]，语义为 uint8 CARLA 类别。setting_static.json 将源帧号映射到 HDF5 路径/索引；碰撞和帧号空隙决定片段边界，预览视频包含被剔除帧，不可与 HDF5 索引混用。",
          "评测与关联": "静态/动态版复用大致路线，但重新随机生成相机高度，因此不是逐像素、逐位姿对齐的数据对。划分应保留城镇/路线身份；数据卡未定义单独的静态版训练/验证/测试基准。"
        }
      },
      "datasetNotes": {
        "en": [
          "This is synthetic annotation, not measured physical depth or independently tracked real poses; yaw-only orientation limits motion diversity.",
          "The original dynamic PanoCARLA repository is currently gated; access policies must be checked separately for each release.",
          "HF viewer failure does not establish missing downloadable files; access=open is based on current public ungated repository metadata."
        ],
        "zh": [
          "标注由仿真生成，并非物理深度测量或真实独立跟踪位姿；仅偏航角变化限制了运动多样性。",
          "原始动态 PanoCARLA 当前有访问门控，不能把其政策套用到静态版；各发布需分别核对。",
          "HF 预览器失败不代表文件无法下载；公开获取状态以当前无门控仓库元数据为据。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY 4.0 for the dataset, stated in the official card. Cite PVDepth; the collection repository's MIT code licence is separate.",
        "zh": "官方数据卡声明数据为 CC BY 4.0；使用时引用 PVDepth，采集仓库的 MIT 代码许可单独适用。"
      },
      "sourceChecked": "2026-10-19",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "rendered",
          "availability": "released",
          "note": {
            "en": "Six synchronized virtual views are combined into ERP; the delivered depth is radial range.",
            "zh": "六个同步虚拟视图组合为ERP，提供径向距离深度。"
          },
          "evidence": [
            "https://huggingface.co/datasets/Soon122/PanoCARLA-Static",
            "https://huggingface.co/api/datasets/Soon122/PanoCARLA-Static",
            "https://github.com/ChuanxinSong/PanoCARLA"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Rendered ERP radial distance is supplied in metres with synthetic semantic labels; sky and far-plane masks remain task-specific.",
            "zh": "提供米制渲染 ERP 径向距离及合成语义标签；天空和远平面掩码须按任务确定。"
          }
        },
        "trajectory": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Simulator position and yaw are released per frame; pitch and roll are fixed to zero, so the motion is not arbitrary 6DoF.",
            "zh": "逐帧发布仿真位置与偏航，俯仰、滚转固定为零，因此并非任意六自由度运动。"
          }
        },
        "evidence": [
          "https://huggingface.co/datasets/Soon122/PanoCARLA-Static",
          "https://huggingface.co/api/datasets/Soon122/PanoCARLA-Static",
          "https://github.com/ChuanxinSong/PanoCARLA",
          "https://github.com/ChuanxinSong/PanoCARLA/blob/main/stage2/equi_extract_for_fov100_multiprocess.py",
          "https://github.com/ChuanxinSong/PanoCARLA/blob/main/stage2/record_2stage.py",
          "https://proceedings.mlr.press/v306/song26u.html"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "specialized",
        "rank": 10,
        "scope": {
          "zh": "合成全景视频",
          "en": "Synthetic panoramic video"
        },
        "reason": {
          "zh": "新近静态场景版本；不能沿用动态版本的逐帧位姿。",
          "en": "A recent static-scene release; dynamic-version per-frame poses are not interchangeable."
        },
        "evidence": [
          {
            "url": "https://huggingface.co/datasets/Soon122/PanoCARLA-Static",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_panocarla_static2026.webp",
        "thumbnail": "assets/datasets/ds_panocarla_static2026-thumb.webp",
        "sourceType": "author-video-frame",
        "sourcePageUrl": "https://huggingface.co/datasets/Soon122/PanoCARLA-Static",
        "sourceUrl": "https://huggingface.co/datasets/Soon122/PanoCARLA-Static/resolve/main/vis_mp4/town06_path6_rz_dynamic_2.0_20.0_fov120_no_car_PanoVideo.mp4",
        "paperUrl": "https://proceedings.mlr.press/v306/song26u.html",
        "sourceTitle": "PanoCARLA-Static official dataset preview",
        "caption": {
          "en": "Town06 path6 official static-scene preview at 1.00 s: RGB panorama above the depth visualization. Preview frames are not HDF5 frame indices.",
          "zh": "Town06 path6 官方静态场景预览视频第 1.00 秒：上方为 RGB 全景，下方为深度可视化；预览帧号不等于 HDF5 索引。"
        },
        "credit": {
          "en": "Source: Chuanxin Song / Soon122, PanoCARLA-Static official preview video, Town06 path6, 1.00 s.",
          "zh": "来源：Chuanxin Song / Soon122，PanoCARLA-Static 官方 Town06 path6 预览视频，第 1.00 秒。"
        },
        "attribution": {
          "en": "Source: Chuanxin Song / Soon122, PanoCARLA-Static official preview video, Town06 path6, 1.00 s.",
          "zh": "来源：Chuanxin Song / Soon122，PanoCARLA-Static 官方 Town06 path6 预览视频，第 1.00 秒。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          1024,
          1024
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "7a92e3a1f8d48b42cda9a5189ba968fd3e870f8fbb7448fb8a278a067deafb28",
        "frameSeconds": 1.0
      }
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
      "environment": "Paper RTX 4090; runtime not locally reproduced.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://arxiv.org/abs/2609.17387",
            "https://arxiv.org/html/2609.17387v1"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/panogsslam2026-thumb.webp",
        "image": "assets/papers/panogsslam2026.webp",
        "paperUrl": "https://arxiv.org/pdf/2609.17387",
        "page": 4,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "全景图像预处理、跟踪与 3D 高斯建图模块。",
          "en": "Panoramic preprocessing, tracking and 3D Gaussian mapping modules."
        },
        "credit": {
          "zh": "来源：论文作者，2026；2 号图截图。",
          "en": "Source: paper authors (2026), Figure 2 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 2. PanoGS-SLAM Pipeline.",
        "cropBox": [
          54,
          48,
          564,
          248
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "12968b32c8b404ef3a74154510d37ccde9f6739218418f86f25b71fef688936a",
        "imageSize": [
          1275,
          500
        ]
      }
    },
    {
      "id": "panoloop2026",
      "collection": "slam",
      "name": "PanoLoop",
      "title": "PanoLoop: Yaw-Invariant Loop Closure for Feed-Forward Panoramic SLAM",
      "year": 2026,
      "firstYear": 2026,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "Computer Graphics Forum 45(7), e70607; Pacific Graphics 2026; DOI 10.1111/cgf.70607",
      "authors": "Shiming Song; Yuanze Wang; Yongjun Zhang; Yuetian Wang; Haikuo Peng; Mengzhu Wang; Chunping Qiu; Dianxi Shi",
      "institutions": "Intelligent Game and Decision Lab; Shanghai Jiao Tong University; National Innovation Institute of Defense Technology; National University of Defense Technology; Hebei University of Technology",
      "summary": "用偏航不变检索、候选抑制与几何验证修正前馈全景重建的回环；采用 Sim(3)，完整序列离线运行，论文报告 RTX 4090 中位数 0.60 FPS。",
      "cameras": [
        "panoramic"
      ],
      "scale": "relative",
      "scaleNote": "Non-metric feed-forward geometry; Sim(3) chunk registration and pose graph. Paper explicitly evaluates trajectory after Sim(3)-Umeyama and dense reconstruction after Sim(3)+ICP alignment",
      "aliases": [],
      "metricStatus": "scale-ambiguous non-metric feed-forward geometry; Sim(3)-aligned evaluation",
      "depthType": "points",
      "outputs": [
        "points",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Monocular full ERP video, processed offline using the complete sequence; frozen PanoVGGT at 518x1036, 60-frame chunks with 30-frame overlap; no IMU or calibrated physical baseline",
      "outputSummary": "Globally loop-corrected camera trajectory and dense point-cloud reconstruction; per-chunk pointmaps and confidence proxy internally; YIP retrieval, spatial candidate suppression (SCS), multi-signal verification (MSV), and global Sim(3) pose graph",
      "inputs": {
        "requirements": "Monocular full ERP video, processed offline using the complete sequence; frozen PanoVGGT at 518x1036, 60-frame chunks with 30-frame overlap; no IMU or calibrated physical baseline",
        "imu": false
      },
      "outputDetails": {
        "primary": "Globally loop-corrected camera trajectory and dense point-cloud reconstruction; per-chunk pointmaps and confidence proxy internally; YIP retrieval, spatial candidate suppression (SCS), multi-signal verification (MSV), and global Sim(3) pose graph",
        "depth_convention": "Frozen panoramic backbone predicts two per-pixel 3D point estimates in chunk coordinates; their disagreement supplies confidence. This is not an independently calibrated dense metric-depth predictor",
        "metric_status": "scale-ambiguous non-metric feed-forward geometry; Sim(3)-aligned evaluation",
        "pose_output": "Yes: offline loop-corrected trajectory; not online streaming visual odometry",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "unverified",
      "codeUrl": "",
      "paperUrl": "https://diglib7.eg.org/bitstreams/55a9089c-0201-403e-bd17-e58872d044fd/download",
      "projectUrl": "https://diglib7.eg.org/items/288b7b5d-7f87-4f03-b700-fc683d0c60e2",
      "weightsUrl": "",
      "license": "Implementation/weight license unknown; paper copyright retained by authors/Eurographics/Wiley, not an open-source code license",
      "evidence": [
        "Official PDF front page confirms eight authors and CGF 45(7). Sections 3.1-3.3 define chunk inference and loop closure; 4.3 explicitly says non-metric depth and Sim(3) evaluation; 4.4 and 4.9-4.10 specify resolution, offline sequence retrieval, 0.60 FPS and limitations. No official source URL found in paper links or publisher metadata; not reproduced locally.",
        "https://doi.org/10.1111/cgf.70607",
        "https://diglib7.eg.org/items/288b7b5d-7f87-4f03-b700-fc683d0c60e2",
        "https://diglib7.eg.org/bitstreams/55a9089c-0201-403e-bd17-e58872d044fd/download",
        "https://diglib7.eg.org/bitstreams/8f7f04ff-aeaf-4c8e-bbaf-0068bee7a665/download",
        "https://pacificgraphics2026.github.io/full-program.html?format=video"
      ],
      "notes": [
        "Offline complete-sequence loop retrieval; median 0.60 FPS. YIP is exactly invariant to integer token-column shifts, only approximately invariant to physical yaw, with no pitch/roll invariance guarantee. Evaluated only on 360Loc; multi-session, large outdoor and highly dynamic regimes untested. Code/checkpoint release unconfirmed.",
        "Official paper and supplementary PDF available; implementation release unverified"
      ],
      "tags": [],
      "family": "offline feed-forward panoramic loop-closure SLAM",
      "imu": false,
      "loopClosure": true,
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official publisher metadata and full paper read; implementation and checkpoints unverified; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "Paper reports median 0.60 FPS on one RTX 4090, offline whole-sequence loop retrieval; not real time or a local measurement.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://doi.org/10.1111/cgf.70607",
            "https://diglib7.eg.org/items/288b7b5d-7f87-4f03-b700-fc683d0c60e2",
            "https://diglib7.eg.org/bitstreams/55a9089c-0201-403e-bd17-e58872d044fd/download"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "paperUrl": "https://diglib7.eg.org/bitstreams/55a9089c-0201-403e-bd17-e58872d044fd/download",
        "page": 4,
        "figureLabel": "Figure 2",
        "cropBox": [
          46,
          90,
          545,
          250
        ],
        "caption": {
          "zh": "分块全景重建与对齐，结合偏航稳健检索、候选抑制、几何验证和 Sim(3) 位姿图。",
          "en": "Chunked panoramic reconstruction with yaw-robust retrieval, candidate suppression, geometric verification and a Sim(3) pose graph."
        },
        "originalCaption": "Figure 2: PanoLoop pipeline.",
        "image": "assets/papers/panoloop2026.webp",
        "thumbnail": "assets/papers/panoloop2026-thumb.webp",
        "credit": {
          "zh": "来源：论文作者，2026；Figure 2 原文截图。",
          "en": "Source: paper authors (2026), Figure 2 crop."
        },
        "kind": "method",
        "verified": true,
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected the full source PDF page and final crop. Actual paper method overview, not a generated illustration.",
        "imageSize": [
          1663,
          533
        ],
        "pdfSha256": "afe4c6ca289ce4f28d31a5ef1e7635698f8d0e6ea51080a70edd1a2acfb353db"
      }
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
      "environment": "CUDA; paper RTX 4090 result is not local measurement.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/pdf/2412.12392",
            "https://edexheim.github.io/mast3r-slam/",
            "https://github.com/rmurai0610/MASt3R-SLAM"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/mast3rslam2025-thumb.webp",
        "image": "assets/papers/mast3rslam2025.webp",
        "paperUrl": "https://arxiv.org/pdf/2412.12392",
        "page": 4,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "MASt3R 点图匹配、跟踪融合、回环及全局优化。",
          "en": "MASt3R pointmap matching, tracking/fusion, loop closure and global optimization."
        },
        "credit": {
          "zh": "来源：论文作者，2025；3 号图截图。",
          "en": "Source: paper authors (2025), Figure 3 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Figure 3. System diagram of MASt3R-SLAM.",
        "cropBox": [
          58,
          67,
          564,
          210
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "b3e4adb81aa713bc091a9e9d9a28d96881000f04931f0fea23f3d5c758436760",
        "imageSize": [
          1265,
          357
        ]
      }
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
      "environment": "Ubuntu C++/CMake; neural stereo/MVS and dense mapping add compute.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/abs/2510.04612",
            "https://github.com/ethz-mrl/OKVIS2-X"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://arxiv.org/abs/2510.04612",
            "https://github.com/ethz-mrl/OKVIS2-X"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/okvis2x2025-thumb.webp",
        "image": "assets/papers/okvis2x2025.webp",
        "paperUrl": "https://arxiv.org/pdf/2510.04612",
        "page": 3,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "扩展 OKVIS2 的多传感器状态估计和子地图接口。",
          "en": "Multi-sensor state estimation and submapping extensions to OKVIS2."
        },
        "credit": {
          "zh": "来源：论文作者，2025；2 号图截图。",
          "en": "Source: paper authors (2025), Figure 2 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 2. System architecture of our proposed multi-sensor state-estimator OKVIS2-X.",
        "cropBox": [
          49,
          54,
          563,
          351
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "a44d892f35e9a71f9100d573fdf6439749ea4a6364f478dfbc0d071908dc69eb",
        "imageSize": [
          1285,
          742
        ]
      }
    },
    {
      "id": "ds_oxford_spires",
      "name": "Oxford Spires",
      "title": "The Oxford Spires Dataset: Benchmarking Large-Scale LiDAR-Visual Localisation, Reconstruction and Radiance Field Methods",
      "year": 2025,
      "cameras": [
        "fisheye",
        "wide",
        "multi"
      ],
      "tasks": [
        "depth",
        "slam"
      ],
      "environment": [
        "indoor",
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "Three colour fisheye cameras",
        "LiDAR",
        "IMU",
        "Survey TLS"
      ],
      "sensorLabels": {
        "en": [
          "Three colour fisheye cameras",
          "LiDAR",
          "IMU",
          "Survey TLS"
        ],
        "zh": [
          "三彩色鱼眼相机",
          "LiDAR",
          "IMU",
          "地面激光测量"
        ]
      },
      "groundTruth": [
        "Survey 3D map",
        "Map-registered metric poses",
        "Projected sparse depth"
      ],
      "groundTruthLabels": {
        "en": [
          "Survey 3D map",
          "Map-registered metric poses",
          "Projected sparse depth"
        ],
        "zh": [
          "测量三维地图",
          "地图配准米制位姿",
          "投影稀疏深度"
        ]
      },
      "access": "open",
      "homepageUrl": "https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/",
      "paperUrl": "https://arxiv.org/abs/2411.10546",
      "downloadUrl": "https://github.com/ori-drs/oxford_spires_dataset#download",
      "license": {
        "en": "CC BY-NC-SA 4.0; intended for non-commercial academic use.",
        "zh": "CC BY-NC-SA 4.0，面向非商业学术用途。"
      },
      "summary": "三路彩色鱼眼与测量地图构成的大尺度定位/重建基准，官方工具可由 LiDAR 生成图像稀疏深度。",
      "details": {
        "en": {
          "Inputs": "Three global-shutter colour fisheyes at 20 Hz, Hesai QT64 LiDAR at 10 Hz and camera-synchronized IMU at 400 Hz.",
          "Independent map": "Leica RTC360 TLS provides millimetre-accurate reference geometry.",
          "Pose reference": "Core sequences have centimetre-accurate LiDAR poses registered to the TLS map; poses give base-to-world transforms.",
          "Derived depth": "Official script projects undistorted LiDAR clouds into cameras. These are scan-derived sparse depths, not dense independent depth labels.",
          "Data hygiene": "Calibration and raw recordings are supplied. Keep VILENS-SLAM/COLMAP outputs separate from survey GT."
        },
        "zh": {
          "输入": "三路 20 Hz 全局快门彩色鱼眼、10 Hz Hesai QT64 LiDAR，以及与相机同步的 400 Hz IMU。",
          "独立地图": "Leica RTC360 地面激光扫描提供毫米级参考几何。",
          "位姿参考": "核心序列提供配准到测量地图的厘米级 LiDAR 位姿，为基座到世界变换。",
          "推导深度": "官方脚本将去畸变 LiDAR 点云投到相机，所得为扫描推导的稀疏深度，并非稠密独立深度标签。",
          "数据区分": "提供标定与原始记录；VILENS-SLAM/COLMAP 输出需与测量真值分开。"
        }
      },
      "notes": {
        "en": [
          "Not all sequences have the core localisation ground-truth trajectory.",
          "TLS map accuracy and trajectory-registration accuracy are different quantities.",
          "2025 denotes public release/acceptance; the preprint first appeared in 2024."
        ],
        "zh": [
          "并非所有序列都具有核心定位基准的真值轨迹。",
          "地面扫描地图精度与轨迹配准精度是不同指标。",
          "2025 对应公开发布/接收年份；预印本首发于 2024 年。"
        ]
      },
      "evidence": [
        {
          "url": "https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/",
          "title": "Oxford Spires official sensors, references, core sequences and licence"
        },
        {
          "url": "https://github.com/ori-drs/oxford_spires_dataset",
          "title": "Oxford Spires official downloader and depth-image generation"
        },
        {
          "url": "https://arxiv.org/abs/2411.10546",
          "title": "Oxford Spires dataset paper"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Three colour fisheye views and survey maps for large-scale localisation/reconstruction; official tools can derive sparse image depth from LiDAR.",
        "zh": "三路彩色鱼眼与测量地图构成的大尺度定位/重建基准，官方工具可由 LiDAR 生成图像稀疏深度。"
      },
      "datasetDetails": {
        "en": {
          "Inputs": "Three global-shutter colour fisheyes at 20 Hz, Hesai QT64 LiDAR at 10 Hz and camera-synchronized IMU at 400 Hz.",
          "Independent map": "Leica RTC360 TLS provides millimetre-accurate reference geometry.",
          "Pose reference": "Core sequences have centimetre-accurate LiDAR poses registered to the TLS map; poses give base-to-world transforms.",
          "Derived depth": "Official script projects undistorted LiDAR clouds into cameras. These are scan-derived sparse depths, not dense independent depth labels.",
          "Data hygiene": "Calibration and raw recordings are supplied. Keep VILENS-SLAM/COLMAP outputs separate from survey GT."
        },
        "zh": {
          "输入": "三路 20 Hz 全局快门彩色鱼眼、10 Hz Hesai QT64 LiDAR，以及与相机同步的 400 Hz IMU。",
          "独立地图": "Leica RTC360 地面激光扫描提供毫米级参考几何。",
          "位姿参考": "核心序列提供配准到测量地图的厘米级 LiDAR 位姿，为基座到世界变换。",
          "推导深度": "官方脚本将去畸变 LiDAR 点云投到相机，所得为扫描推导的稀疏深度，并非稠密独立深度标签。",
          "数据区分": "提供标定与原始记录；VILENS-SLAM/COLMAP 输出需与测量真值分开。"
        }
      },
      "datasetNotes": {
        "en": [
          "Not all sequences have the core localisation ground-truth trajectory.",
          "TLS map accuracy and trajectory-registration accuracy are different quantities.",
          "2025 denotes public release/acceptance; the preprint first appeared in 2024."
        ],
        "zh": [
          "并非所有序列都具有核心定位基准的真值轨迹。",
          "地面扫描地图精度与轨迹配准精度是不同指标。",
          "2025 对应公开发布/接收年份；预印本首发于 2024 年。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY-NC-SA 4.0; intended for non-commercial academic use.",
        "zh": "CC BY-NC-SA 4.0，面向非商业学术用途。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/",
            "https://github.com/ori-drs/oxford_spires_dataset",
            "https://arxiv.org/abs/2411.10546"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "An official script projects calibrated LiDAR into cameras to form sparse depth; millimetre-accuracy TLS maps are a separate geometry reference.",
            "zh": "官方脚本将标定 LiDAR 投影为相机稀疏深度；毫米精度 TLS 地图是另一类几何参考。"
          }
        },
        "trajectory": {
          "status": "reference",
          "provenance": [
            "estimated"
          ],
          "note": {
            "en": "Core-sequence LiDAR poses are registered to the surveyed map; references are map-derived and not available for every sequence.",
            "zh": "核心序列 LiDAR 位姿配准至测绘地图；参考由地图派生，并非每个序列均提供。"
          }
        },
        "evidence": [
          "https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/",
          "https://github.com/ori-drs/oxford_spires_dataset",
          "https://arxiv.org/abs/2411.10546"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "specialized",
        "rank": 6,
        "scope": {
          "zh": "多传感器建图",
          "en": "Multisensor mapping"
        },
        "reason": {
          "zh": "较新的多传感器场景资源，需按版本核查标注与访问要求。",
          "en": "A recent multisensor resource; verify annotations and access by version."
        },
        "evidence": [
          {
            "url": "https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_oxford_spires.webp",
        "thumbnail": "assets/datasets/ds_oxford_spires-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/",
        "sourceUrl": "https://dynamic.robots.ox.ac.uk/projects/images/oxford-spires/hero_fig.png",
        "paperUrl": "https://arxiv.org/abs/2411.10546",
        "sourceTitle": "Oxford Spires official dataset preview",
        "caption": {
          "en": "Official Oxford Spires overview of reconstructed college environments.",
          "zh": "Oxford Spires 官方学院环境重建总览。"
        },
        "credit": {
          "en": "Source: Oxford Spires authors, official project preview.",
          "zh": "来源：Oxford Spires 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: Oxford Spires authors, official project preview.",
          "zh": "来源：Oxford Spires 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          1100,
          942
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "893906bd20653176422c548682177b1e0feac70624fee4bdfe95a1f0336ff755"
      }
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
      "environment": "Gaussian optimization plus panoptic vision models; runtime unverified.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Panoptic scene reconstruction consumes perspective RGB-D; Pano in the name does not denote panoramic ERP input.",
            "zh": "全景语义场景重建使用透视RGB-D；名称Pano不代表全景ERP输入。"
          },
          "evidence": [
            "https://arxiv.org/abs/2501.00352",
            "https://github.com/runnanchen/PanoSLAM"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/panoslam2025-thumb.webp",
        "image": "assets/papers/panoslam2025.webp",
        "paperUrl": "https://arxiv.org/pdf/2501.00352",
        "page": 3,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "RGB-D 全景分割（Panoptic，非 360° 全景）建图：相机跟踪、语义推断与时空提升。",
          "en": "RGB-D panoptic mapping: camera tracking, panoptic inference and spatial-temporal lifting."
        },
        "credit": {
          "zh": "来源：论文作者，2025；2 号图截图。",
          "en": "Source: paper authors (2025), Figure 2 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Figure 2. Overview of the PanoSLAM framework for panoptic 3D scene reconstruction from unlabeled RGB-D videos.",
        "cropBox": [
          58,
          68,
          565,
          282
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "3eb13fed49d4ffdba5e020c4de17d24a200b57fc4324efb1d7fa7c0cb8e46ca2",
        "imageSize": [
          1267,
          535
        ]
      }
    },
    {
      "id": "ds_tof360",
      "name": "ToF-360",
      "title": "ToF-360: A Panoramic Time-of-flight RGB-D Dataset for Single Capture Indoor Semantic 3D Reconstruction",
      "year": 2025,
      "cameras": [
        "panoramic"
      ],
      "tasks": [
        "depth"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "real",
      "sensors": [
        "360° ToF RGB-D sensor"
      ],
      "sensorLabels": {
        "en": [
          "360° ToF RGB-D sensor"
        ],
        "zh": [
          "360° ToF RGB-D 传感器"
        ]
      },
      "groundTruth": [
        "Measured radial depth",
        "Normals and XYZ",
        "Semantic/layout labels"
      ],
      "groundTruthLabels": {
        "en": [
          "Measured radial depth",
          "Normals and XYZ",
          "Semantic/layout labels"
        ],
        "zh": [
          "实测径向深度",
          "法向与 XYZ",
          "语义及布局标注"
        ]
      },
      "access": "open",
      "homepageUrl": "https://huggingface.co/datasets/COLE-Ricoh/ToF-360",
      "paperUrl": "https://openaccess.thecvf.com/content/CVPR2025W/PBVS/html/Kanayama_ToF-360_-_A_Panoramic_Time-of-flight_RGB-D_Dataset_for_Single_Capture_CVPRW_2025_paper.html",
      "downloadUrl": "https://huggingface.co/datasets/COLE-Ricoh/ToF-360/tree/main",
      "license": {
        "en": "CC BY-NC-SA 4.0 according to the official Hugging Face card.",
        "zh": "官方 Hugging Face 数据卡标注 CC BY-NC-SA 4.0。"
      },
      "summary": "真实全景 ToF RGB-D 测量，以双鱼眼采集转换的 ERP 产品发布；尚未核实可下载的原始鱼眼模态。深度来自每次测量，而非全局网格渲染。",
      "details": {
        "en": {
          "Projection and inputs": "Paper describes 5792×2896 ERP color/depth/XYZ products and raw fisheye capture. Bottom blind regions require masking.",
          "Depth and validity": "16-bit PNG radial distance: meters = value / 512; zero means missing. XYZ NumPy data uses millimeter precision.",
          "Ground truth": "ToF sensor measurements, with normals, XYZ/HHA products and manual pixel semantics/layout. No independent continuous trajectory GT is claimed.",
          "Evaluation": "The official card lists 179 ERP images across four scenes; the workshop paper reports a different collection total. Pin the actual release and scene split.",
          "Calibration": "Use the supplied fisheye-to-ERP processing and pixel-aligned products; do not apply a pinhole Z backprojection to radial ERP depth."
        },
        "zh": {
          "投影与输入": "论文描述 5792×2896 ERP 彩色、深度、XYZ 产品与原始鱼眼采集；底部盲区需掩码处理。",
          "深度与有效性": "16 位 PNG 存径向距离：米数＝数值 / 512，0 表示缺失；XYZ NumPy 数据具有毫米精度。",
          "真值来源": "ToF 传感器测量，提供法向、XYZ、HHA 及人工逐像素语义、布局；此条不声称含独立连续轨迹真值。",
          "评测协议": "官方卡片列四个场景、179 幅 ERP 图，而研讨会论文报告的采集总数不同；评测需固定具体发布与场景划分。",
          "标定": "使用配套鱼眼转 ERP 处理与像素对齐产品，不能用针孔 Z 反投影处理 ERP 径向深度。"
        }
      },
      "notes": {
        "en": [
          "Useful for real panoramic depth/domain transfer; its original benchmarks emphasize semantics and layout."
        ],
        "zh": [
          "可用于真实全景深度和域迁移，原论文基准主要强调语义与布局。"
        ]
      },
      "evidence": [
        {
          "url": "https://huggingface.co/datasets/COLE-Ricoh/ToF-360",
          "title": "Official data card: units, masks and license"
        },
        {
          "url": "https://openaccess.thecvf.com/content/CVPR2025W/PBVS/papers/Kanayama_ToF-360_-_A_Panoramic_Time-of-flight_RGB-D_Dataset_for_Single_Capture_CVPRW_2025_paper.pdf",
          "title": "Official paper: capture and resolution"
        },
        {
          "url": "https://www.dfki.de/en/web/research/projects-and-publications/publication/15783",
          "title": "Authors' publication and DOI"
        },
        {
          "title": "Camera / annotation source",
          "url": "https://huggingface.co/datasets/COLE-Ricoh/ToF-360/tree/main/Hospital",
          "checked": "2026-10-20"
        },
        {
          "title": "Camera / annotation source",
          "url": "https://huggingface.co/datasets/COLE-Ricoh/ToF-360/tree/main/Office_Room_1",
          "checked": "2026-10-20"
        }
      ],
      "checked": "2026-10-20",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Real panoramic ToF RGB-D measurements released as ERP products derived from dual-fisheye capture; a downloadable raw fisheye modality is not verified. Depth is measured per capture rather than rendered from a global mesh.",
        "zh": "真实全景 ToF RGB-D 测量，以双鱼眼采集转换的 ERP 产品发布；尚未核实可下载的原始鱼眼模态。深度来自每次测量，而非全局网格渲染。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "Paper describes 5792×2896 ERP color/depth/XYZ products and raw fisheye capture. Bottom blind regions require masking.",
          "Depth and validity": "16-bit PNG radial distance: meters = value / 512; zero means missing. XYZ NumPy data uses millimeter precision.",
          "Ground truth": "ToF sensor measurements, with normals, XYZ/HHA products and manual pixel semantics/layout. No independent continuous trajectory GT is claimed.",
          "Evaluation": "The official card lists 179 ERP images across four scenes; the workshop paper reports a different collection total. Pin the actual release and scene split.",
          "Calibration": "Use the supplied fisheye-to-ERP processing and pixel-aligned products; do not apply a pinhole Z backprojection to radial ERP depth."
        },
        "zh": {
          "投影与输入": "论文描述 5792×2896 ERP 彩色、深度、XYZ 产品与原始鱼眼采集；底部盲区需掩码处理。",
          "深度与有效性": "16 位 PNG 存径向距离：米数＝数值 / 512，0 表示缺失；XYZ NumPy 数据具有毫米精度。",
          "真值来源": "ToF 传感器测量，提供法向、XYZ、HHA 及人工逐像素语义、布局；此条不声称含独立连续轨迹真值。",
          "评测协议": "官方卡片列四个场景、179 幅 ERP 图，而研讨会论文报告的采集总数不同；评测需固定具体发布与场景划分。",
          "标定": "使用配套鱼眼转 ERP 处理与像素对齐产品，不能用针孔 Z 反投影处理 ERP 径向深度。"
        }
      },
      "datasetNotes": {
        "en": [
          "Useful for real panoramic depth/domain transfer; its original benchmarks emphasize semantics and layout."
        ],
        "zh": [
          "可用于真实全景深度和域迁移，原论文基准主要强调语义与布局。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY-NC-SA 4.0 according to the official Hugging Face card.",
        "zh": "官方 Hugging Face 数据卡标注 CC BY-NC-SA 4.0。"
      },
      "sourceChecked": "2026-10-20",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "stitched",
          "availability": "released",
          "note": {
            "en": "The released RGB-D products are ERP converted from dual-fisheye capture. A downloadable raw-fisheye modality was not established by the current card/directories.",
            "zh": "已发布RGB-D产品由双鱼眼采集转换为ERP；当前数据卡和目录未确立可下载的原始鱼眼模态。"
          },
          "evidence": [
            "https://huggingface.co/datasets/COLE-Ricoh/ToF-360",
            "https://huggingface.co/datasets/COLE-Ricoh/ToF-360/tree/main/Hospital",
            "https://huggingface.co/datasets/COLE-Ricoh/ToF-360/tree/main/Office_Room_1"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "ToF radial depth is released with zero marking missing pixels; bottom blind regions require masking.",
            "zh": "发布 ToF 径向深度，零值表示缺失像素；底部盲区需遮罩。"
          }
        },
        "trajectory": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "The released static panoramic depth collection does not include an independent continuous camera trajectory reference.",
            "zh": "该静态全景深度集合不包含独立连续相机轨迹参考。"
          }
        },
        "evidence": [
          "https://huggingface.co/datasets/COLE-Ricoh/ToF-360",
          "https://openaccess.thecvf.com/content/CVPR2025W/PBVS/papers/Kanayama_ToF-360_-_A_Panoramic_Time-of-flight_RGB-D_Dataset_for_Single_Capture_CVPRW_2025_paper.pdf",
          "https://www.dfki.de/en/web/research/projects-and-publications/publication/15783"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "specialized",
        "rank": 4,
        "scope": {
          "zh": "真实全景深度",
          "en": "Real panoramic depth"
        },
        "reason": {
          "zh": "较新的专门采集方案；按作者协议使用有效区域与距离。",
          "en": "A newer dedicated capture; follow author validity and distance conventions."
        },
        "evidence": [
          {
            "url": "https://huggingface.co/datasets/COLE-Ricoh/ToF-360",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_tof360.webp",
        "thumbnail": "assets/datasets/ds_tof360-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://huggingface.co/datasets/COLE-Ricoh/ToF-360",
        "sourceTitle": "ToF-360 official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "Official ToF-360 overview with panoramic RGB, measured depth, instances, semantics, point cloud and room layout.",
          "zh": "官方 ToF-360 总览：全景 RGB、实测深度、实例、语义、点云及房间布局。"
        },
        "attribution": {
          "en": "Source: ToF-360 project authors, official dataset preview.",
          "zh": "来源：ToF-360 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: ToF-360 project authors, official dataset preview.",
          "zh": "来源：ToF-360 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "665b78c848eceee40f1e455510f08c07bcf39e31b7c75041836813d44013638f",
        "thumbnailSha256": "2863bf203d17f5ad38193943a756915a395862ae8de6a08c1162135d14c59cd5",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://huggingface.co/datasets/COLE-Ricoh/ToF-360/resolve/main/assets/figure/figure_1.png",
        "sourceSha256": "dddb6e0a2fa37e0a76fa0615021ffc5ea5f75ff79a71c19324daad87478551f0",
        "selectionNotes": "Official project image converted to WebP and proportionally resized without changing its content."
      }
    },
    {
      "id": "vio360_2024",
      "collection": "slam",
      "name": "360-VIO",
      "title": "360-VIO: A Robust Visual–Inertial Odometry Using a 360° Camera",
      "year": 2024,
      "firstYear": 2024,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "IEEE Transactions on Industrial Electronics 71(9):11136-11145, September 2024; online 25 December 2023",
      "authors": "Qi Wu; Xiangyu Xu; Xieyuanli Chen; Ling Pei; Chao Long; Junyuan Deng; Guoqing Liu; Sheng Yang; Shilei Wen; Wenxian Yu",
      "institutions": "Shanghai Jiao Tong University; ByteDance; National University of Defense Technology; Cainiao, Alibaba Group",
      "summary": "在 HybVIO 的 EKF 中融合 ERP 与 IMU，以球面切平面重投影误差及特征不确定性抑制投影畸变；适合作为全景惯性定位基线，源码发布状态待核实。",
      "cameras": [
        "panoramic"
      ],
      "scale": "metric",
      "scaleNote": "Metric through calibrated inertial fusion when scale is observable; no useful stereo baseline is recovered from the stitched 360-degree camera alone",
      "aliases": [],
      "metricStatus": "metric with calibrated IMU and observable motion",
      "depthType": "none",
      "outputs": [
        "none",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Equirectangular 360-degree image sequence and synchronized IMU; camera-to-IMU extrinsic and sensor calibration",
      "outputSummary": "Visual-inertial body poses, velocity and IMU bias estimates; covariance and triangulated feature constraints in an EKF estimator",
      "inputs": {
        "requirements": "Equirectangular 360-degree image sequence and synchronized IMU; camera-to-IMU extrinsic and sensor calibration",
        "imu": true
      },
      "outputDetails": {
        "primary": "Visual-inertial body poses, velocity and IMU bias estimates; covariance and triangulated feature constraints in an EKF estimator",
        "depth_convention": "Triangulated sparse landmarks on spherical bearing rays; no per-pixel dense depth prediction",
        "metric_status": "metric with calibrated IMU and observable motion",
        "pose_output": "Yes: visual-inertial state and trajectory; not a global loop-corrected map",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "none",
      "codeUrl": "",
      "paperUrl": "https://ieeexplore.ieee.org/document/10373205/",
      "projectUrl": "https://shengyang93.github.io/publication/2023-360-vio/",
      "weightsUrl": "",
      "license": "Unknown: complete official implementation and its license not verified",
      "evidence": [
        "Author-uploaded manuscript, coauthor publication pages and IEEE metadata reviewed; no local reproduction",
        "https://ieeexplore.ieee.org/document/10373205/",
        "https://shengyang93.github.io/publication/2023-360-vio/",
        "https://chen-xieyuanli.github.io/_pages/includes/pub/",
        "https://www.researchgate.net/profile/Qi-Wu-42/publication/376825456_360-VIO_A_Robust_Visual-Inertial_Odometry_Using_a_360_Camera/links/6594b0b56f6e450f19c49549/360-VIO-A-Robust-Visual-Inertial-Odometry-Using-a-360-Camera.pdf"
      ],
      "notes": [
        "VIO without a described global loop-closure module; stitched-camera optical center and camera-IMU calibration matter; promised code is not a verified runnable release",
        "Announced code and calibration tool; linked repository unavailable during verification"
      ],
      "tags": [],
      "family": "filter panoramic VIO",
      "imu": true,
      "loopClosure": false,
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Author paper and primary publication metadata reviewed; official code unavailable; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "HybVIO-based EKF; paper extends Kalibr for the panoramic optical center; no local runtime test",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://ieeexplore.ieee.org/document/10373205/",
            "https://shengyang93.github.io/publication/2023-360-vio/",
            "https://chen-xieyuanli.github.io/_pages/includes/pub/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/vio360_2024-thumb.webp",
        "image": "assets/papers/vio360_2024.webp",
        "paperUrl": "https://ieeexplore.ieee.org/document/10373205/",
        "sourceType": "author-project-image",
        "sourceUrl": "https://shengyang93.github.io/publication/2023-360-vio/featured_hu17281690602998133915.webp",
        "sourcePageUrl": "https://shengyang93.github.io/publication/2023-360-vio/",
        "sourceSha256": "8e96e50d850d85c8ca22e393300836ac48addc56ce2f77b7106dc5fca7105d31",
        "figureLabel": "Author method overview",
        "caption": {
          "zh": "球面特征切平面重投影误差与惯性传播／测量更新示意；作者官方项目页方法图，非 PDF 截图。",
          "en": "Spherical-feature tangent-plane reprojection and inertial propagation/measurement updates; an official author-page method image, not a PDF crop."
        },
        "credit": {
          "zh": "来源：作者官方项目页（Sheng Yang）；原始方法图，非 PDF 截图。",
          "en": "Source: official author project page (Sheng Yang); original method image, not a PDF screenshot."
        },
        "kind": "method",
        "verified": true,
        "imageSize": [
          720,
          314
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected the original image linked by the official author project page. No PDF page, crop box or PDF hash is claimed. This diagram illustrates spherical tangent-plane measurement updates; it is not the Figure 2 EKF flowchart."
      }
    },
    {
      "id": "ds_360loc",
      "name": "360Loc",
      "title": "360Loc: A Dataset and Benchmark for Omnidirectional Visual Localization with Cross-device Queries",
      "year": 2024,
      "cameras": [
        "panoramic",
        "fisheye",
        "wide",
        "perspective"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "indoor",
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "360° RGB",
        "LiDAR-assisted mapping"
      ],
      "sensorLabels": {
        "en": [
          "360° RGB",
          "LiDAR-assisted mapping"
        ],
        "zh": [
          "360° RGB",
          "LiDAR 辅助建图"
        ]
      },
      "groundTruth": [
        "Metric 6DoF poses"
      ],
      "groundTruthLabels": {
        "en": [
          "Metric 6DoF poses"
        ],
        "zh": [
          "米制六自由度位姿"
        ]
      },
      "access": "open",
      "homepageUrl": "https://huajianup.github.io/research/360Loc/",
      "paperUrl": "https://openaccess.thecvf.com/content/CVPR2024/html/Huang_360Loc_A_Dataset_and_Benchmark_for_Omnidirectional_Visual_Localization_with_CVPR_2024_paper.html",
      "downloadUrl": "https://github.com/HuajianUP/360Loc",
      "license": {
        "en": "No explicit dataset reuse licence located in the inspected official page/README; confirm with authors.",
        "zh": "本次查看的官方页面/README 未找到明确数据复用许可，需向作者确认。"
      },
      "summary": "提供原生全景参考/查询图像及 LiDAR 辅助六自由度位姿，用于跨相机定位，并可生成虚拟鱼眼和透视查询。",
      "details": {
        "en": {
          "Task": "Absolute 6DoF visual localisation against a mapped scene; not primarily a dense-depth benchmark.",
          "Query generation": "Official release keeps original 360° images and generates lower-FoV fisheye/pinhole queries with supplied camera configurations.",
          "Pose provenance": "360° imagery and LiDAR mapping jointly establish metric reference poses.",
          "Pose format": "JSON stores camera-to-world transforms; text uses x y z qw qx qy qz. Follow the toolkit's COLMAP conventions.",
          "Access": "Official toolkit links downloads and supplies processing scripts; archive contents were not fully downloaded here."
        },
        "zh": {
          "任务": "已建图场景中的绝对六自由度视觉定位，主要目标不是稠密深度评测。",
          "查询生成": "官方保留原始 360° 图像，使用相机配置生成较小视场的鱼眼/透视查询。",
          "位姿来源": "结合 360° 图像与 LiDAR 建图生成米制参考位姿。",
          "位姿格式": "JSON 存储相机到世界变换；文本采用 x y z qw qx qy qz，遵循工具中的 COLMAP 约定。",
          "获取": "官方工具链接数据并提供处理脚本；本次未完整下载和解包归档。"
        }
      },
      "notes": {
        "en": [
          "No complete dense per-pixel depth GT is claimed.",
          "Virtual fisheye queries are resampled views, not separate physical fisheye recordings."
        ],
        "zh": [
          "不宣称具有完整逐像素深度真值。",
          "虚拟鱼眼查询是重采样视图，不是另外采集的实体鱼眼图像。"
        ]
      },
      "evidence": [
        {
          "url": "https://huajianup.github.io/research/360Loc/",
          "title": "360Loc official project and mapping provenance"
        },
        {
          "url": "https://github.com/HuajianUP/360Loc",
          "title": "360Loc release, virtual cameras and pose formats"
        },
        {
          "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Huang_360Loc_A_Dataset_and_Benchmark_for_Omnidirectional_Visual_Localization_with_CVPR_2024_paper.html",
          "title": "360Loc CVPR 2024 paper"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Native panoramic reference/query images and LiDAR-assisted 6DoF poses for cross-camera localisation, including virtual fisheye and pinhole queries.",
        "zh": "提供原生全景参考/查询图像及 LiDAR 辅助六自由度位姿，用于跨相机定位，并可生成虚拟鱼眼和透视查询。"
      },
      "datasetDetails": {
        "en": {
          "Task": "Absolute 6DoF visual localisation against a mapped scene; not primarily a dense-depth benchmark.",
          "Query generation": "Official release keeps original 360° images and generates lower-FoV fisheye/pinhole queries with supplied camera configurations.",
          "Pose provenance": "360° imagery and LiDAR mapping jointly establish metric reference poses.",
          "Pose format": "JSON stores camera-to-world transforms; text uses x y z qw qx qy qz. Follow the toolkit's COLMAP conventions.",
          "Access": "Official toolkit links downloads and supplies processing scripts; archive contents were not fully downloaded here."
        },
        "zh": {
          "任务": "已建图场景中的绝对六自由度视觉定位，主要目标不是稠密深度评测。",
          "查询生成": "官方保留原始 360° 图像，使用相机配置生成较小视场的鱼眼/透视查询。",
          "位姿来源": "结合 360° 图像与 LiDAR 建图生成米制参考位姿。",
          "位姿格式": "JSON 存储相机到世界变换；文本采用 x y z qw qx qy qz，遵循工具中的 COLMAP 约定。",
          "获取": "官方工具链接数据并提供处理脚本；本次未完整下载和解包归档。"
        }
      },
      "datasetNotes": {
        "en": [
          "No complete dense per-pixel depth GT is claimed.",
          "Virtual fisheye queries are resampled views, not separate physical fisheye recordings."
        ],
        "zh": [
          "不宣称具有完整逐像素深度真值。",
          "虚拟鱼眼查询是重采样视图，不是另外采集的实体鱼眼图像。"
        ]
      },
      "datasetLicense": {
        "en": "No explicit dataset reuse licence located in the inspected official page/README; confirm with authors.",
        "zh": "本次查看的官方页面/README 未找到明确数据复用许可，需向作者确认。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Original panoramic reference/query images are provided.",
            "zh": "提供原始全景参考/查询图。"
          },
          "evidence": [
            "https://huajianup.github.io/research/360Loc/",
            "https://github.com/HuajianUP/360Loc",
            "https://openaccess.thecvf.com/content/CVPR2024/html/Huang_360Loc_A_Dataset_and_Benchmark_for_Omnidirectional_Visual_Localization_with_CVPR_2024_paper.html"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "reprojected",
          "availability": "released",
          "note": {
            "en": "Fisheye queries are lower-FoV virtual views generated from original panoramas.",
            "zh": "鱼眼查询是由原始全景生成的较小视场虚拟视图。"
          },
          "evidence": [
            "https://huajianup.github.io/research/360Loc/",
            "https://github.com/HuajianUP/360Loc",
            "https://openaccess.thecvf.com/content/CVPR2024/html/Huang_360Loc_A_Dataset_and_Benchmark_for_Omnidirectional_Visual_Localization_with_CVPR_2024_paper.html"
          ]
        },
        {
          "geometry": "perspective",
          "route": "reprojected",
          "availability": "released",
          "note": {
            "en": "Pinhole queries are virtual crops/reprojections of original panoramas, not extra physical cameras.",
            "zh": "针孔查询为原全景的虚拟裁剪/重投影，不是额外物理相机。"
          },
          "evidence": [
            "https://huajianup.github.io/research/360Loc/",
            "https://github.com/HuajianUP/360Loc",
            "https://openaccess.thecvf.com/content/CVPR2024/html/Huang_360Loc_A_Dataset_and_Benchmark_for_Omnidirectional_Visual_Localization_with_CVPR_2024_paper.html"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": true,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "The released localization products document images and pose references, not an image-depth annotation benchmark; mapping LiDAR alone is insufficient evidence.",
            "zh": "发布的定位产品记录图像和位姿参考，并非图像深度标注基准；仅有建图 LiDAR 不能证明提供深度标签。"
          }
        },
        "trajectory": {
          "status": "reference",
          "provenance": [
            "estimated"
          ],
          "note": {
            "en": "Image/LiDAR mapping generates metric 6DoF reference poses for localization queries; independent continuous motion tracking is not established.",
            "zh": "图像与 LiDAR 建图生成定位查询的米制六自由度参考位姿，未建立独立连续运动跟踪真值。"
          }
        },
        "evidence": [
          "https://huajianup.github.io/research/360Loc/",
          "https://github.com/HuajianUP/360Loc",
          "https://openaccess.thecvf.com/content/CVPR2024/html/Huang_360Loc_A_Dataset_and_Benchmark_for_Omnidirectional_Visual_Localization_with_CVPR_2024_paper.html"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 12,
        "scope": {
          "zh": "全景视觉定位",
          "en": "Panoramic localization"
        },
        "reason": {
          "zh": "针对全景定位建立基准；定位参考不等于稠密深度标注。",
          "en": "A dedicated panoramic localization benchmark; pose references are not dense depth."
        },
        "evidence": [
          {
            "url": "https://huajianup.github.io/research/360Loc/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_360loc.webp",
        "thumbnail": "assets/datasets/ds_360loc-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://huajianup.github.io/research/360Loc/",
        "sourceUrl": "https://huajianup.github.io/thumbnails/360Loc.png",
        "paperUrl": "https://openaccess.thecvf.com/content/CVPR2024/html/Huang_360Loc_A_Dataset_and_Benchmark_for_Omnidirectional_Visual_Localization_with_CVPR_2024_paper.html",
        "sourceTitle": "360Loc official dataset preview",
        "caption": {
          "en": "360Loc capture, panoramic reference/query imagery and reference-generation overview.",
          "zh": "360Loc 采集、全景参考／查询图像及参考数据生成总览。"
        },
        "credit": {
          "en": "Source: 360Loc authors, official project preview.",
          "zh": "来源：360Loc 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: 360Loc authors, official project preview.",
          "zh": "来源：360Loc 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          1100,
          517
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "85460188d1cdb55b45b73d971dcbc283a7b3f40db7913168f601bbf4b7ed0ed2"
      }
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
      "environment": "ORB-SLAM2-style threads plus depth network; CARLA evaluation.",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://arxiv.org/abs/2401.10560",
            "https://arxiv.org/html/2401.10560v1"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/360orbslam2024-thumb.webp",
        "image": "assets/papers/360orbslam2024.webp",
        "paperUrl": "https://arxiv.org/pdf/2401.10560",
        "page": 3,
        "figureLabel": "Figure 4",
        "caption": {
          "zh": "从 RGB 和稀疏深度生成稠密深度的补全网络。",
          "en": "Depth-completion network converting RGB and sparse depth into dense depth."
        },
        "credit": {
          "zh": "来源：论文作者，2024；4 号图截图。",
          "en": "Source: paper authors (2024), Figure 4 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 4. Deep completion network framework diagram",
        "cropBox": [
          48,
          48,
          563,
          209
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "f930fdc7b7ce447eb106b6d7a1617a930c4f20747ef6d136d44954620a6cf9ce",
        "imageSize": [
          1287,
          402
        ]
      }
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
      "environment": "CUDA/PyTorch plus optimization backend.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/pdf/2403.13714",
            "https://github.com/GREAT-WHU/DBA-Fusion"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/dbafusion2024-thumb.webp",
        "image": "assets/papers/dbafusion2024.webp",
        "paperUrl": "https://arxiv.org/pdf/2403.13714",
        "page": 3,
        "figureLabel": "Figure 3",
        "caption": {
          "zh": "深度束调整的分层优化、边缘化与 GPU/CPU 工作流。",
          "en": "Hierarchical deep bundle-adjustment optimization, marginalization and GPU/CPU workflow."
        },
        "credit": {
          "zh": "来源：论文作者，2024；3 号图截图。",
          "en": "Source: paper authors (2024), Figure 3 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 3. Workflow of DBA in the optimization framework, which employs a hierarchical elimination structure.",
        "cropBox": [
          311,
          54,
          560,
          187
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "4e173d947088f7e331ebcc105f6a55a04af249427464dd6bd75f86d2df9c497d",
        "imageSize": [
          622,
          332
        ]
      }
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
      "environment": "Single CUDA GPU; paper reports 5-7GB VRAM configurations, not local measurement.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/abs/2408.01654",
            "https://github.com/princeton-vl/DPVO"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/dpvslam2024-thumb.webp",
        "image": "assets/papers/dpvslam2024.webp",
        "paperUrl": "https://arxiv.org/pdf/2408.01654",
        "page": 5,
        "figureLabel": "Figure 1",
        "caption": {
          "zh": "以图块图连接局部束调整、全局束调整和回环。",
          "en": "A patch graph links local/global bundle adjustment and loop closure."
        },
        "credit": {
          "zh": "来源：论文作者，2024；1 号图截图。",
          "en": "Source: paper authors (2024), Figure 1 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 1: Overview of DPV-SLAM.",
        "cropBox": [
          135,
          119,
          477,
          287
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "d3e810851f1202ca67cff5dca7b4b0e90e5aa50db266735c8e31f6cacbafd8ab",
        "imageSize": [
          855,
          420
        ]
      }
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
      "environment": "Authors use RTX 4090; speed-up branch and CUDA rasterizer.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/abs/2312.06741",
            "https://rmurai.co.uk/projects/GaussianSplattingSLAM/",
            "https://github.com/muskie82/MonoGS"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/monogs2024-thumb.webp",
        "image": "assets/papers/monogs2024.webp",
        "paperUrl": "https://arxiv.org/pdf/2312.06741",
        "page": 4,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "统一 3D 高斯表示下的相机跟踪、关键帧管理与建图。",
          "en": "Camera tracking, keyframe management and mapping with a unified 3D Gaussian representation."
        },
        "credit": {
          "zh": "来源：论文作者，2024；2 号图截图。",
          "en": "Source: paper authors (2024), Figure 2 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Figure 2. SLAM System Overview:",
        "cropBox": [
          50,
          72,
          561,
          255
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "d7a1ef9b7f313156c61f23ea76423eecd3f8f7d2a795a74774dfbaf23f7a803e",
        "imageSize": [
          1277,
          457
        ]
      }
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
      "environment": "PyTorch/CUDA Gaussian rasterizer; scene-dependent optimization.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://spla-tam.github.io/assets/SplaTAM.pdf",
            "https://spla-tam.github.io/",
            "https://github.com/spla-tam/SplaTAM"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/splatam2024-thumb.webp",
        "image": "assets/papers/splatam2024.webp",
        "paperUrl": "https://spla-tam.github.io/assets/SplaTAM.pdf",
        "page": 3,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "RGB-D 输入驱动相机跟踪、高斯增密与地图更新。",
          "en": "RGB-D input drives camera tracking, Gaussian densification and map updates."
        },
        "credit": {
          "zh": "来源：论文作者，2024；2 号图截图。",
          "en": "Source: paper authors (2024), Figure 2 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Figure 2. Overview of SplaTAM.",
        "cropBox": [
          55,
          66,
          566,
          282
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "ef045e06941ecb0be69aa0d8d46cd764bcfa5fdf3ad0c21c80cacdab297db1bb",
        "imageSize": [
          1277,
          540
        ]
      }
    },
    {
      "id": "ds_adt",
      "name": "Aria Digital Twin",
      "title": "Aria Digital Twin: A New Benchmark Dataset for Egocentric 3D Machine Perception",
      "year": 2023,
      "cameras": [
        "fisheye",
        "wide",
        "multi"
      ],
      "tasks": [
        "depth",
        "slam"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "mixed",
      "sensors": [
        "RGB",
        "Stereo monochrome",
        "IMU",
        "Motion capture",
        "Digital twin"
      ],
      "sensorLabels": {
        "en": [
          "RGB",
          "Stereo monochrome",
          "IMU",
          "Motion capture",
          "Digital twin"
        ],
        "zh": [
          "RGB",
          "双路灰度",
          "IMU",
          "动作捕捉",
          "数字孪生"
        ]
      },
      "groundTruth": [
        "Rendered Z-depth",
        "GT device poses",
        "Object poses"
      ],
      "groundTruthLabels": {
        "en": [
          "Rendered Z-depth",
          "GT device poses",
          "Object poses"
        ],
        "zh": [
          "渲染 Z 深度",
          "设备真值位姿",
          "物体位姿"
        ]
      },
      "access": "registration",
      "homepageUrl": "https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset",
      "paperUrl": "https://openaccess.thecvf.com/content/ICCV2023/html/Pan_Aria_Digital_Twin_A_New_Benchmark_Dataset_for_Egocentric_3D_ICCV_2023_paper.html",
      "downloadUrl": "https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download",
      "license": {
        "en": "Aria Digital Twin Dataset License Agreement; download implies acceptance. Tooling licences do not replace dataset terms.",
        "zh": "遵循 Aria Digital Twin 数据集许可协议；下载即表示接受。工具许可不替代数据条款。"
      },
      "summary": "真实第一视角鱼眼记录配合动作捕捉/数字孪生真值，明确区分渲染深度与 MPS 估计产物。",
      "details": {
        "en": {
          "Geometry and data": "Aria raw RGB, two monochrome camera streams, IMUs, calibrations and synchronized ground-truth products in VRS/CSV.",
          "Depth convention": "ADT depth_images.vrs stores camera-Z depth in millimetres, unlike ASE ray distances; convert units before backprojection.",
          "Pose provenance": "aria_trajectory.csv is generated by the ADT GT system. MPS open/closed-loop trajectories and semidense points are estimates.",
          "Coordinates and time": "Ground truth and aligned MPS outputs use the ADT scene frame; use stream timestamps and alignment metadata.",
          "Dynamic coverage": "Select body-mesh-occlusion versus no-body depth consistently; not every sequence has body-skeleton GT."
        },
        "zh": {
          "成像与数据": "Aria 原始 RGB、两路灰度相机、IMU、标定与同步真值，以 VRS/CSV 提供。",
          "深度约定": "ADT 的 depth_images.vrs 为毫米单位的相机 Z 深度，区别于 ASE 的射线距离；反投影前先换算单位。",
          "位姿来源": "aria_trajectory.csv 来自 ADT 真值系统；MPS 开/闭环轨迹及半稠密点云是估计结果。",
          "坐标与时间": "真值及对齐后的 MPS 数据使用 ADT 场景坐标系；按各流时间戳及对齐元数据读取。",
          "动态覆盖": "一致选择包含人体网格遮挡或不含人体的深度；并非每个序列都有骨架真值。"
        }
      },
      "notes": {
        "en": [
          "Mixed means real observations plus rendered digital-twin annotations, not measured RGB-D depth.",
          "Do not count MPS estimates as independent pose GT; website/paper sequence totals vary with release version."
        ],
        "zh": [
          "“混合”指真实观测加数字孪生渲染标签，不是实测 RGB-D 深度。",
          "MPS 估计不能当作独立位姿真值；网页与论文序列总数随发布版本变化。"
        ]
      },
      "evidence": [
        {
          "url": "https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset",
          "title": "ADT official dataset overview"
        },
        {
          "url": "https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format",
          "title": "ADT Z-depth units, GT/MPS separation and coordinates"
        },
        {
          "url": "https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download",
          "title": "ADT download, sign-up and licence agreement"
        },
        {
          "url": "https://openaccess.thecvf.com/content/ICCV2023/html/Pan_Aria_Digital_Twin_A_New_Benchmark_Dataset_for_Egocentric_3D_ICCV_2023_paper.html",
          "title": "ADT ICCV 2023 dataset paper"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Real egocentric fisheye recordings paired with motion-capture/digital-twin ground truth; rendered depth and estimated MPS products are explicitly distinct.",
        "zh": "真实第一视角鱼眼记录配合动作捕捉/数字孪生真值，明确区分渲染深度与 MPS 估计产物。"
      },
      "datasetDetails": {
        "en": {
          "Geometry and data": "Aria raw RGB, two monochrome camera streams, IMUs, calibrations and synchronized ground-truth products in VRS/CSV.",
          "Depth convention": "ADT depth_images.vrs stores camera-Z depth in millimetres, unlike ASE ray distances; convert units before backprojection.",
          "Pose provenance": "aria_trajectory.csv is generated by the ADT GT system. MPS open/closed-loop trajectories and semidense points are estimates.",
          "Coordinates and time": "Ground truth and aligned MPS outputs use the ADT scene frame; use stream timestamps and alignment metadata.",
          "Dynamic coverage": "Select body-mesh-occlusion versus no-body depth consistently; not every sequence has body-skeleton GT."
        },
        "zh": {
          "成像与数据": "Aria 原始 RGB、两路灰度相机、IMU、标定与同步真值，以 VRS/CSV 提供。",
          "深度约定": "ADT 的 depth_images.vrs 为毫米单位的相机 Z 深度，区别于 ASE 的射线距离；反投影前先换算单位。",
          "位姿来源": "aria_trajectory.csv 来自 ADT 真值系统；MPS 开/闭环轨迹及半稠密点云是估计结果。",
          "坐标与时间": "真值及对齐后的 MPS 数据使用 ADT 场景坐标系；按各流时间戳及对齐元数据读取。",
          "动态覆盖": "一致选择包含人体网格遮挡或不含人体的深度；并非每个序列都有骨架真值。"
        }
      },
      "datasetNotes": {
        "en": [
          "Mixed means real observations plus rendered digital-twin annotations, not measured RGB-D depth.",
          "Do not count MPS estimates as independent pose GT; website/paper sequence totals vary with release version."
        ],
        "zh": [
          "“混合”指真实观测加数字孪生渲染标签，不是实测 RGB-D 深度。",
          "MPS 估计不能当作独立位姿真值；网页与论文序列总数随发布版本变化。"
        ]
      },
      "datasetLicense": {
        "en": "Aria Digital Twin Dataset License Agreement; download implies acceptance. Tooling licences do not replace dataset terms.",
        "zh": "遵循 Aria Digital Twin 数据集许可协议；下载即表示接受。工具许可不替代数据条款。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset",
            "https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format",
            "https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Digital-twin-rendered Z-depth is provided in millimetres; choose the matching body-occlusion variant. It is not a physical depth-sensor measurement.",
            "zh": "提供数字孪生渲染的毫米制 Z 深度；应选取匹配的人体遮挡版本，并非物理深度传感器测量。"
          }
        },
        "trajectory": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "The ADT ground-truth system supplies aria_trajectory.csv. MPS open/closed-loop trajectories remain separate estimates and must not replace that reference.",
            "zh": "ADT 真值系统提供 aria_trajectory.csv；MPS 开闭环轨迹仍是独立估计，不可替代该参考。"
          }
        },
        "evidence": [
          "https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset",
          "https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format",
          "https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download",
          "https://openaccess.thecvf.com/content/ICCV2023/html/Pan_Aria_Digital_Twin_A_New_Benchmark_Dataset_for_Egocentric_3D_ICCV_2023_paper.html"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 14,
        "scope": {
          "zh": "第一视角数字孪生",
          "en": "Egocentric digital twins"
        },
        "reason": {
          "zh": "工具、标定及数字孪生标注较完整，实测与渲染真值分别说明。",
          "en": "Documented tools and digital-twin annotations; separate measured and rendered references."
        },
        "evidence": [
          {
            "url": "https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_adt.webp",
        "thumbnail": "assets/datasets/ds_adt-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/visualizers",
        "sourceUrl": "https://facebookresearch.github.io/projectaria_tools/assets/images/AdtViewer-b0ad6de9956ec3ec4f34423238fcbc3d.png",
        "paperUrl": "https://openaccess.thecvf.com/content/ICCV2023/html/Pan_Aria_Digital_Twin_A_New_Benchmark_Dataset_for_Egocentric_3D_ICCV_2023_paper.html",
        "sourceTitle": "Aria Digital Twin official dataset preview",
        "caption": {
          "en": "Official Aria Digital Twin viewer example with camera images and annotation visualizations.",
          "zh": "Aria Digital Twin 官方查看器样例，展示相机图像及标注可视化。"
        },
        "credit": {
          "en": "Source: Aria Digital Twin authors, official project preview.",
          "zh": "来源：Aria Digital Twin 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: Aria Digital Twin authors, official project preview.",
          "zh": "来源：Aria Digital Twin 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          958,
          1100
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "5c1ae27d30d268ea868cc110ef5d8da7213b18815e1dc76385a705d67ce270cf"
      }
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
      "environment": "CUDA/PyTorch; official Ubuntu 20/22 and CUDA 11/12 setup.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/abs/2208.04726",
            "https://github.com/princeton-vl/DPVO"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/dpvo2023-thumb.webp",
        "image": "assets/papers/dpvo2023.webp",
        "paperUrl": "https://arxiv.org/pdf/2208.04726",
        "page": 5,
        "figureLabel": "Figure 4",
        "caption": {
          "zh": "通过相关特征、消息传递与束调整更新稀疏图块。",
          "en": "Correlation features, message passing and bundle adjustment update sparse patches."
        },
        "credit": {
          "zh": "来源：论文作者，2023；4 号图截图。",
          "en": "Source: paper authors (2023), Figure 4 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Figure 4: Schematic of the update operator.",
        "cropBox": [
          95,
          69,
          500,
          201
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "c6ac8e33f75b4504a3ba36c4e03b9dbf2fbfdeb507be1431070c501ea210d29c",
        "imageSize": [
          1012,
          330
        ]
      }
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
      "environment": "CUDA/PyTorch plus tiny-cuda-nn; parallel tracking/backend/mapper.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/abs/2309.02436",
            "https://youmi-zym.github.io/projects/GO-SLAM/",
            "https://github.com/youmi-zym/GO-SLAM"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/goslam2023-thumb.webp",
        "image": "assets/papers/goslam2023.webp",
        "paperUrl": "https://arxiv.org/pdf/2309.02436",
        "page": 3,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "前端跟踪、全局束调整与即时神经建图三线程结构。",
          "en": "Three threads for frontend tracking, global bundle adjustment and instant neural mapping."
        },
        "credit": {
          "zh": "来源：论文作者，2023；2 号图截图。",
          "en": "Source: paper authors (2023), Figure 2 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Figure 2: Architecture Overview.",
        "cropBox": [
          57,
          68,
          565,
          190
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "5379925bfdda9988aca47fda13289a9781282a850dd4250005368a565c9ac641",
        "imageSize": [
          1270,
          305
        ]
      }
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
        "https://github.com/flysoaryun/LF-VISLAM",
        "https://arxiv.org/html/2209.05167v3"
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
      "environment": "ROS1/C++ VINS-derived system with PAL calibration.",
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://arxiv.org/abs/2209.05167",
            "https://github.com/flysoaryun/LF-VISLAM"
          ]
        }
      ],
      "projectionSubtypes": [
        "annular"
      ],
      "additionalSupport": [
        {
          "geometry": "annular",
          "route": "direct",
          "note": {
            "en": "PALVIO uses 360-degree azimuth with a limited vertical band; public fisheye evaluation is distinct from that annular camera.",
            "zh": "PALVIO为360度方位但有限垂直带；公共鱼眼评测与该环形相机是不同模式。"
          },
          "evidence": [
            "https://arxiv.org/html/2209.05167v3"
          ]
        }
      ],
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "figure": {
        "thumbnail": "assets/papers/lfvislam2023-thumb.webp",
        "image": "assets/papers/lfvislam2023.webp",
        "paperUrl": "https://arxiv.org/pdf/2209.05167",
        "page": 4,
        "figureLabel": "Figure 4",
        "caption": {
          "zh": "大视场 VIO 初始化、跟踪与回环位姿图流程。",
          "en": "Large-FoV VIO initialization, tracking and loop-closure pose-graph pipeline."
        },
        "credit": {
          "zh": "来源：论文作者，2023；4 号图截图。",
          "en": "Source: paper authors (2023), Figure 4 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 4: Overview of our SLAM system with all blocks online.",
        "cropBox": [
          49,
          62,
          563,
          200
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "7cb83c606510fb203ea5277ba3596adf3a9482b493a91995650b3c6d4d7f5e91",
        "imageSize": [
          1285,
          345
        ]
      }
    },
    {
      "id": "vo360_2022",
      "collection": "slam",
      "name": "360VO",
      "title": "360VO: Visual Odometry Using A Single 360 Camera",
      "year": 2022,
      "firstYear": 2022,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "ICRA 2022, pp. 5594-5600",
      "authors": "Huajian Huang; Sai-Kit Yeung",
      "institutions": "The Hong Kong University of Science and Technology",
      "summary": "将 DSO 扩展到原生 ERP：沿球面极线搜索，并在局部滑窗联合优化位姿、逆径向距离、内参与亮度；纯视觉尺度不确定，无全局回环。",
      "cameras": [
        "panoramic"
      ],
      "scale": "relative",
      "scaleNote": "Monocular arbitrary scale; an external metric reference is needed for physical units",
      "aliases": [],
      "metricStatus": "arbitrary scale; monocular visual-only",
      "depthType": "inverse",
      "outputs": [
        "inverse",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Monocular equirectangular video from one 360-degree camera; photometric image measurements; no IMU",
      "outputSummary": "6DoF camera trajectory and local semi-dense point geometry; optimized spherical intrinsics, inverse distances and affine brightness parameters",
      "inputs": {
        "requirements": "Monocular equirectangular video from one 360-degree camera; photometric image measurements; no IMU",
        "imu": false
      },
      "outputDetails": {
        "primary": "6DoF camera trajectory and local semi-dense point geometry; optimized spherical intrinsics, inverse distances and affine brightness parameters",
        "depth_convention": "Inverse Euclidean distance to the spherical camera center, not pinhole Z; selected photometric points rather than a dense single-image predictor",
        "metric_status": "arbitrary scale; monocular visual-only",
        "pose_output": "Yes: local-window visual odometry; camera-to-wrist/TCP extrinsics remain external",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "none",
      "codeUrl": "",
      "paperUrl": "https://huajianup.github.io/research/360VO/360VO_ICRA2022.pdf",
      "projectUrl": "https://huajianup.github.io/research/360VO/",
      "weightsUrl": "",
      "license": "Unknown: official implementation license not verified",
      "evidence": [
        "Author PDF sections III-IV and author project page reviewed; no local reproduction",
        "https://huajianup.github.io/research/360VO/360VO_ICRA2022.pdf",
        "https://huajianup.github.io/research/360VO/",
        "https://researchportal.hkust.edu.hk/en/publications/360vo-visual-odometry-using-a-single-360-camera/"
      ],
      "notes": [
        "Local VO without a described global loop-closure module; stitching and photometric changes require care; public implementation availability unverified",
        "No official code linked on author project; implementation availability unverified"
      ],
      "tags": [],
      "family": "direct panoramic VO",
      "imu": false,
      "loopClosure": false,
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper and author project reviewed; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "Photometric local-window optimization; no verified installable official code or local benchmark",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://huajianup.github.io/research/360VO/360VO_ICRA2022.pdf",
            "https://huajianup.github.io/research/360VO/",
            "https://researchportal.hkust.edu.hk/en/publications/360vo-visual-odometry-using-a-single-360-camera/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "paperUrl": "https://huajianup.github.io/research/360VO/360VO_ICRA2022.pdf",
        "page": 2,
        "figureLabel": "Figure 2",
        "cropBox": [
          312,
          54,
          559,
          185
        ],
        "caption": {
          "zh": "ERP 全景输入、初始化和滑动窗口直接法优化的系统流程。",
          "en": "ERP input, initialization and sliding-window direct optimization pipeline."
        },
        "originalCaption": "Fig. 2. System overview.",
        "image": "assets/papers/vo360_2022.webp",
        "thumbnail": "assets/papers/vo360_2022-thumb.webp",
        "credit": {
          "zh": "来源：论文作者，2022；Figure 2 原文截图。",
          "en": "Source: paper authors (2022), Figure 2 crop."
        },
        "kind": "method",
        "verified": true,
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected the full source PDF page and final crop. Actual paper method overview, not a generated illustration.",
        "imageSize": [
          823,
          436
        ],
        "pdfSha256": "040d4573158e8f8571c71e47b5905d8a451337ae09cf0711dc35ae8618a8922d"
      }
    },
    {
      "id": "ds_deep360",
      "name": "Deep360",
      "title": "MODE: Multi-view Omnidirectional Depth Estimation with 360° Cameras",
      "year": 2022,
      "cameras": [
        "panoramic",
        "multi"
      ],
      "tasks": [
        "depth"
      ],
      "environment": [
        "outdoor"
      ],
      "reality": "synthetic",
      "sensors": [
        "CARLA virtual cameras"
      ],
      "sensorLabels": {
        "en": [
          "CARLA virtual cameras"
        ],
        "zh": [
          "CARLA 虚拟相机"
        ]
      },
      "groundTruth": [
        "Rendered depth",
        "Stereo disparity"
      ],
      "groundTruthLabels": {
        "en": [
          "Rendered depth",
          "Stereo disparity"
        ],
        "zh": [
          "渲染深度",
          "立体视差"
        ]
      },
      "access": "open",
      "homepageUrl": "https://github.com/nju-ee/MODE-2022",
      "paperUrl": "https://link.springer.com/chapter/10.1007/978-3-031-19827-4_12",
      "downloadUrl": "https://drive.google.com/drive/folders/1YJIaqDGWMTmGF0tyW8ktfG26xk-jSntg?usp=sharing",
      "license": {
        "en": "Repository BSD-3-Clause is code licensing; an explicit dataset-wide license was not verified from the overview.",
        "zh": "仓库 BSD-3-Clause 属代码许可；概览未核实明确的数据集统一许可。"
      },
      "summary": "合成室外多视全景，配套深度、视差及泥点、水滴、眩光污染镜头版本。",
      "details": {
        "en": {
          "Projection and inputs": "CARLA-generated multi-camera road panoramas; the paper uses four 360° views. Preserve camera placement/baseline from the archive README.",
          "Depth and validity": "Rendered depth and disparity are separate targets. File scale, range convention and invalid masks must follow archive README and official dataloader.",
          "Splits": "Official repository lists 2100 train, 300 validation and 600 test frames across six episode archives; preserve the provided partitions.",
          "Robustness evaluation": "Clean and soiled versions share underlying scenes; never put one version in training and its counterpart in test.",
          "Calibration and access": "Known synthetic geometry provides stereo scale; it is not a measured real-rig benchmark. Official Drive folder and checksums are published."
        },
        "zh": {
          "投影与输入": "CARLA 生成多相机道路全景；论文使用四路 360° 视图，需保留压缩包说明中的相机布局和基线。",
          "深度与有效性": "渲染深度与视差是不同目标；文件缩放、距离约定与无效掩码必须按压缩包说明及官方加载器处理。",
          "数据划分": "官方列出 2100 训练、300 验证、600 测试帧，分为六个片段压缩包；应保留现成划分。",
          "鲁棒性评测": "干净和污染版本共享源场景，不能把同帧不同版本分别放入训练和测试。",
          "标定与获取": "已知合成几何提供立体尺度，不是真实装置实测基准；官方发布 Drive 文件夹与校验和。"
        }
      },
      "notes": {
        "en": [
          "Depth360 (SegFuse) and Deep360 (MODE) are different datasets despite similar names."
        ],
        "zh": [
          "Depth360（SegFuse）与 Deep360（MODE）名称相近但为不同数据集。"
        ]
      },
      "evidence": [
        {
          "url": "https://github.com/nju-ee/MODE-2022",
          "title": "Official dataset structure, splits and download"
        },
        {
          "url": "https://link.springer.com/chapter/10.1007/978-3-031-19827-4_12",
          "title": "Official MODE paper"
        },
        {
          "url": "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf",
          "title": "Author paper with CARLA data generation"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Synthetic outdoor multi-view panoramas with depth/disparity and a soiled-lens variant for mud, droplets and glare.",
        "zh": "合成室外多视全景，配套深度、视差及泥点、水滴、眩光污染镜头版本。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "CARLA-generated multi-camera road panoramas; the paper uses four 360° views. Preserve camera placement/baseline from the archive README.",
          "Depth and validity": "Rendered depth and disparity are separate targets. File scale, range convention and invalid masks must follow archive README and official dataloader.",
          "Splits": "Official repository lists 2100 train, 300 validation and 600 test frames across six episode archives; preserve the provided partitions.",
          "Robustness evaluation": "Clean and soiled versions share underlying scenes; never put one version in training and its counterpart in test.",
          "Calibration and access": "Known synthetic geometry provides stereo scale; it is not a measured real-rig benchmark. Official Drive folder and checksums are published."
        },
        "zh": {
          "投影与输入": "CARLA 生成多相机道路全景；论文使用四路 360° 视图，需保留压缩包说明中的相机布局和基线。",
          "深度与有效性": "渲染深度与视差是不同目标；文件缩放、距离约定与无效掩码必须按压缩包说明及官方加载器处理。",
          "数据划分": "官方列出 2100 训练、300 验证、600 测试帧，分为六个片段压缩包；应保留现成划分。",
          "鲁棒性评测": "干净和污染版本共享源场景，不能把同帧不同版本分别放入训练和测试。",
          "标定与获取": "已知合成几何提供立体尺度，不是真实装置实测基准；官方发布 Drive 文件夹与校验和。"
        }
      },
      "datasetNotes": {
        "en": [
          "Depth360 (SegFuse) and Deep360 (MODE) are different datasets despite similar names."
        ],
        "zh": [
          "Depth360（SegFuse）与 Deep360（MODE）名称相近但为不同数据集。"
        ]
      },
      "datasetLicense": {
        "en": "Repository BSD-3-Clause is code licensing; an explicit dataset-wide license was not verified from the overview.",
        "zh": "仓库 BSD-3-Clause 属代码许可；概览未核实明确的数据集统一许可。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "rendered",
          "availability": "released",
          "note": {
            "en": "CARLA renders provide several physically separated virtual panoramic viewpoints.",
            "zh": "CARLA渲染提供多个具有空间基线的虚拟全景视点。"
          },
          "evidence": [
            "https://github.com/nju-ee/MODE-2022",
            "https://link.springer.com/chapter/10.1007/978-3-031-19827-4_12",
            "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "CARLA-generated panoramic depth and stereo disparity targets are released; they are different target quantities.",
            "zh": "发布 CARLA 生成的全景深度与立体视差目标，两者是不同的监督量。"
          }
        },
        "trajectory": {
          "status": "unknown",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Synthetic camera placement and stereo baselines are documented; a downloadable continuous trajectory annotation product was not established.",
            "zh": "已记录仿真相机布置与立体基线，但尚未确认可下载的连续轨迹标注产品。"
          }
        },
        "evidence": [
          "https://github.com/nju-ee/MODE-2022",
          "https://link.springer.com/chapter/10.1007/978-3-031-19827-4_12",
          "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "specialized",
        "rank": 1,
        "scope": {
          "zh": "全景立体深度",
          "en": "Panoramic stereo depth"
        },
        "reason": {
          "zh": "面向特定全景立体配置的专项数据，适合对应输入条件。",
          "en": "A specialized panoramic stereo resource for matching input configurations."
        },
        "evidence": [
          {
            "url": "https://github.com/nju-ee/MODE-2022",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_deep360.webp",
        "thumbnail": "assets/datasets/ds_deep360-thumb.webp",
        "sourceType": "paper-pdf",
        "sourcePageUrl": "https://github.com/nju-ee/MODE-2022",
        "sourceTitle": "Deep360 official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "Deep360 outdoor synthetic examples: four panoramic camera views, two disparity maps and a ground-truth omnidirectional depth map.",
          "zh": "Deep360 室外合成示例：四幅全景相机图、两幅视差图与全向深度真值。"
        },
        "attribution": {
          "en": "Source: Ming Li et al., MODE, Figure 7.",
          "zh": "来源：Ming Li 等，MODE 原论文图 7。"
        },
        "credit": {
          "en": "Source: Ming Li et al., MODE, Figure 7.",
          "zh": "来源：Ming Li 等，MODE 原论文图 7。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "7d489a13349a60b0f075de8f6a4fc0eb44661c737fd0fb6175c467b4878d259e",
        "thumbnailSha256": "3a3214c9c171f590a287885e1721c491faf5d45440a8a60cc49197673530fd56",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "paperUrl": "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf",
        "sourceUrl": "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf",
        "pdfSha256": "2251f9c91c93ed0dee6b68a15b3207ecf220727c3898b7719cd035fb2ee8d569",
        "page": 10,
        "figureLabel": "Figure 7",
        "cropBox": [
          170,
          321,
          445,
          478
        ],
        "selectionNotes": "Original PDF page and final crop visually checked; crop excludes the caption, which is described bilingually in this manifest.",
        "originalCaption": "Fig. 7. Examples of the proposed Deep360 dataset. Each row shows an outdoor road scene. From left: four panoramas captured by 360° cameras, two disparity maps of 1-2 and 3-4 camera pairs, and one ground truth omnidirectional depth map"
      }
    },
    {
      "id": "ds_hilti2022",
      "name": "Hilti-Oxford 2022",
      "title": "Hilti-Oxford Dataset: A Millimeter-Accurate Benchmark for Simultaneous Localization and Mapping",
      "year": 2022,
      "cameras": [
        "fisheye",
        "wide",
        "multi"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "indoor",
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "Five fisheye cameras",
        "LiDAR",
        "IMU",
        "Survey control"
      ],
      "sensorLabels": {
        "en": [
          "Five fisheye cameras",
          "LiDAR",
          "IMU",
          "Survey control"
        ],
        "zh": [
          "五鱼眼相机",
          "LiDAR",
          "IMU",
          "测量控制点"
        ]
      },
      "groundTruth": [
        "Sparse metric positions",
        "Selected 6DoF"
      ],
      "groundTruthLabels": {
        "en": [
          "Sparse metric positions",
          "Selected 6DoF"
        ],
        "zh": [
          "稀疏米制位置",
          "部分六自由度真值"
        ]
      },
      "access": "open",
      "homepageUrl": "https://hilti-challenge.com/dataset-2022",
      "paperUrl": "https://arxiv.org/abs/2208.09825",
      "downloadUrl": "https://hilti-challenge.com/dataset-2022",
      "license": {
        "en": "CC BY-NC-SA 3.0 dataset and benchmark.",
        "zh": "数据与基准采用 CC BY-NC-SA 3.0。"
      },
      "summary": "五个同步鱼眼相机、Hesai LiDAR 与 IMU，覆盖施工现场和谢尔登剧院，以毫米级测量控制点评估。",
      "details": {
        "en": {
          "Inputs": "Five 40 Hz global-shutter fisheye streams, 400 Hz IMU and 10 Hz Hesai LiDAR.",
          "Ground truth": "Challenge data uses sparse surveyed 3DoF positions; selected additional sequences provide denser 6DoF references.",
          "Reference frame": "All released ground-truth data is expressed in the IMU frame.",
          "Calibration": "Kalibr-like equidistant camera models, camera–IMU calibration recordings, noise data and rig CAD are provided.",
          "Protocol": "Respect the challenge control-point evaluation; do not assume every frame has millimetre-accurate orientation."
        },
        "zh": {
          "输入": "五路 40 Hz 全局快门鱼眼、400 Hz IMU 与 10 Hz Hesai LiDAR。",
          "真值": "挑战序列采用稀疏测量三维位置；部分附加序列另有更密的六自由度参考。",
          "参考坐标系": "发布的真值统一位于 IMU 坐标系。",
          "标定": "提供类似 Kalibr 的等距畸变参数、相机–IMU 标定记录、噪声资料和机架 CAD。",
          "协议": "采用挑战控制点评测；不能假设每帧都有毫米级姿态。"
        }
      },
      "notes": {
        "en": [
          "2022 denotes challenge release; the journal citation is RA-L 2023.",
          "Five fisheye views are a camera rig, not a single ERP panorama."
        ],
        "zh": [
          "2022 为挑战发布年份，期刊引用为 RA-L 2023。",
          "五路鱼眼是相机组，不是单幅 ERP 全景。"
        ]
      },
      "evidence": [
        {
          "url": "https://hilti-challenge.com/dataset-2022",
          "title": "Hilti-Oxford official ground-truth coverage and licence"
        },
        {
          "url": "https://arxiv.org/abs/2208.09825",
          "title": "Hilti-Oxford camera model, synchronization and reference methodology"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Five synchronized fisheye cameras, Hesai LiDAR and IMU in construction sites and the Sheldonian Theatre; surveyed control points target millimetre accuracy.",
        "zh": "五个同步鱼眼相机、Hesai LiDAR 与 IMU，覆盖施工现场和谢尔登剧院，以毫米级测量控制点评估。"
      },
      "datasetDetails": {
        "en": {
          "Inputs": "Five 40 Hz global-shutter fisheye streams, 400 Hz IMU and 10 Hz Hesai LiDAR.",
          "Ground truth": "Challenge data uses sparse surveyed 3DoF positions; selected additional sequences provide denser 6DoF references.",
          "Reference frame": "All released ground-truth data is expressed in the IMU frame.",
          "Calibration": "Kalibr-like equidistant camera models, camera–IMU calibration recordings, noise data and rig CAD are provided.",
          "Protocol": "Respect the challenge control-point evaluation; do not assume every frame has millimetre-accurate orientation."
        },
        "zh": {
          "输入": "五路 40 Hz 全局快门鱼眼、400 Hz IMU 与 10 Hz Hesai LiDAR。",
          "真值": "挑战序列采用稀疏测量三维位置；部分附加序列另有更密的六自由度参考。",
          "参考坐标系": "发布的真值统一位于 IMU 坐标系。",
          "标定": "提供类似 Kalibr 的等距畸变参数、相机–IMU 标定记录、噪声资料和机架 CAD。",
          "协议": "采用挑战控制点评测；不能假设每帧都有毫米级姿态。"
        }
      },
      "datasetNotes": {
        "en": [
          "2022 denotes challenge release; the journal citation is RA-L 2023.",
          "Five fisheye views are a camera rig, not a single ERP panorama."
        ],
        "zh": [
          "2022 为挑战发布年份，期刊引用为 RA-L 2023。",
          "五路鱼眼是相机组，不是单幅 ERP 全景。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY-NC-SA 3.0 dataset and benchmark.",
        "zh": "数据与基准采用 CC BY-NC-SA 3.0。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://hilti-challenge.com/dataset-2022",
            "https://arxiv.org/abs/2208.09825"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Calibrated Hesai LiDAR supplies sparse measured ranges that can be projected; no native dense depth target is implied.",
            "zh": "标定后的 Hesai LiDAR 提供可投影稀疏实测距离，不代表具有原生稠密深度目标。"
          }
        },
        "trajectory": {
          "status": "partial",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Challenge references are sparse surveyed positions; selected additional sequences supply denser 6DoF references.",
            "zh": "挑战参考主要是稀疏测绘位置；部分附加序列提供较稠密六自由度参考。"
          }
        },
        "evidence": [
          "https://hilti-challenge.com/dataset-2022",
          "https://arxiv.org/abs/2208.09825"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 10,
        "scope": {
          "zh": "多传感器 SLAM",
          "en": "Multisensor SLAM"
        },
        "reason": {
          "zh": "公开挑战与测量参考支持困难场景对照；不套用其他年份规格。",
          "en": "Public challenge and survey references support difficult-scene comparisons; keep release years distinct."
        },
        "evidence": [
          {
            "url": "https://hilti-challenge.com/dataset-2022",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_hilti2022.webp",
        "thumbnail": "assets/datasets/ds_hilti2022-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://hilti-challenge.com/dataset-2022",
        "sourceUrl": "https://hilti-challenge.com/assets/2022/construction_sheldonian.jpg",
        "paperUrl": "https://arxiv.org/abs/2208.09825",
        "sourceTitle": "Hilti-Oxford 2022 official dataset preview",
        "caption": {
          "en": "Construction-site and Sheldonian environments shown by Hilti-Oxford 2022.",
          "zh": "Hilti-Oxford 2022 展示的施工场地与 Sheldonian 采集环境。"
        },
        "credit": {
          "en": "Source: Hilti-Oxford 2022 authors, official project preview.",
          "zh": "来源：Hilti-Oxford 2022 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: Hilti-Oxford 2022 authors, official project preview.",
          "zh": "来源：Hilti-Oxford 2022 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          1000,
          500
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "595b1f4ebd730c61337055ea5070fab9bef5aa4309cb23856365c05354363178"
      }
    },
    {
      "id": "ds_kitti360",
      "name": "KITTI-360",
      "title": "KITTI-360: A Novel Dataset and Benchmarks for Urban Scene Understanding in 2D and 3D",
      "year": 2022,
      "cameras": [
        "fisheye",
        "wide",
        "perspective",
        "multi"
      ],
      "tasks": [
        "depth",
        "slam"
      ],
      "environment": [
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "Stereo",
        "Fisheye",
        "LiDAR",
        "GPS/IMU"
      ],
      "sensorLabels": {
        "en": [
          "Stereo",
          "Fisheye",
          "LiDAR",
          "GPS/IMU"
        ],
        "zh": [
          "双目",
          "鱼眼",
          "LiDAR",
          "GPS/IMU"
        ]
      },
      "groundTruth": [
        "Optimized metric poses",
        "3D maps",
        "Sparse LiDAR"
      ],
      "groundTruthLabels": {
        "en": [
          "Optimized metric poses",
          "3D maps",
          "Sparse LiDAR"
        ],
        "zh": [
          "优化米制位姿",
          "三维地图",
          "稀疏 LiDAR"
        ]
      },
      "access": "registration",
      "homepageUrl": "https://www.cvlibs.net/datasets/kitti-360/",
      "paperUrl": "https://arxiv.org/abs/2109.13410",
      "downloadUrl": "https://www.cvlibs.net/datasets/kitti-360/download.php",
      "license": {
        "en": "CC BY-NC-SA 3.0; registration and intended-use declaration required.",
        "zh": "CC BY-NC-SA 3.0；需注册并说明用途。"
      },
      "summary": "前向透视双目加两侧 180° 鱼眼的城市建图数据；360° 覆盖来自相机组，不是拼接 ERP 图像。",
      "details": {
        "en": {
          "Ground truth": "Georegistered poses are optimized using SfM with GPS and LiDAR constraints, not raw OXTS alone.",
          "Coordinates": "poses.txt is IMU-to-world; cam0_to_world.txt is rectified camera-0-to-world. Some slowly moving frames lack entries.",
          "Depth use": "Laser scans and 3D geometry can be projected with the supplied models; this does not guarantee dense per-pixel depth.",
          "Calibration": "Perspective intrinsics/rectification, fisheye YAMLs and sensor extrinsics are provided.",
          "Protocol": "Use the localisation/mapping task split; avoid treating derived pose optimization as independent motion capture."
        },
        "zh": {
          "真值": "地理配准位姿由 SfM 加 GPS/LiDAR 约束优化得到，并不等同于原始 OXTS。",
          "坐标约定": "poses.txt 为 IMU 到世界；cam0_to_world.txt 为校正后相机 0 到世界；低速运动时部分帧无位姿条目。",
          "深度使用": "可利用官方相机模型投影扫描与三维几何，但不能据此假设每像素都有稠密深度。",
          "标定": "提供透视内参/校正、鱼眼 YAML 和传感器外参。",
          "协议": "按定位/建图任务的划分使用；优化位姿不能当作独立动作捕捉测量。"
        }
      },
      "notes": {
        "en": [
          "No native panoramic camera tag: the source release is multi-camera.",
          "Depth sparsity, occlusions and scan timing require explicit masks."
        ],
        "zh": [
          "不标为原生全景：源数据发布形式是多相机。",
          "投影深度需显式处理稀疏性、遮挡和扫描时间。"
        ]
      },
      "evidence": [
        {
          "url": "https://www.cvlibs.net/datasets/kitti-360/",
          "title": "KITTI-360 official sensors, licence and tasks"
        },
        {
          "url": "https://www.cvlibs.net/datasets/kitti-360/documentation.php",
          "title": "KITTI-360 optimized poses and calibration conventions"
        },
        {
          "title": "Camera / annotation source",
          "url": "https://arxiv.org/abs/2109.13410",
          "checked": "2026-10-17"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Urban mapping with front perspective stereo plus side 180° fisheye cameras; 360° coverage comes from a rig, not stitched ERP frames.",
        "zh": "前向透视双目加两侧 180° 鱼眼的城市建图数据；360° 覆盖来自相机组，不是拼接 ERP 图像。"
      },
      "datasetDetails": {
        "en": {
          "Ground truth": "Georegistered poses are optimized using SfM with GPS and LiDAR constraints, not raw OXTS alone.",
          "Coordinates": "poses.txt is IMU-to-world; cam0_to_world.txt is rectified camera-0-to-world. Some slowly moving frames lack entries.",
          "Depth use": "Laser scans and 3D geometry can be projected with the supplied models; this does not guarantee dense per-pixel depth.",
          "Calibration": "Perspective intrinsics/rectification, fisheye YAMLs and sensor extrinsics are provided.",
          "Protocol": "Use the localisation/mapping task split; avoid treating derived pose optimization as independent motion capture."
        },
        "zh": {
          "真值": "地理配准位姿由 SfM 加 GPS/LiDAR 约束优化得到，并不等同于原始 OXTS。",
          "坐标约定": "poses.txt 为 IMU 到世界；cam0_to_world.txt 为校正后相机 0 到世界；低速运动时部分帧无位姿条目。",
          "深度使用": "可利用官方相机模型投影扫描与三维几何，但不能据此假设每像素都有稠密深度。",
          "标定": "提供透视内参/校正、鱼眼 YAML 和传感器外参。",
          "协议": "按定位/建图任务的划分使用；优化位姿不能当作独立动作捕捉测量。"
        }
      },
      "datasetNotes": {
        "en": [
          "No native panoramic camera tag: the source release is multi-camera.",
          "Depth sparsity, occlusions and scan timing require explicit masks."
        ],
        "zh": [
          "不标为原生全景：源数据发布形式是多相机。",
          "投影深度需显式处理稀疏性、遮挡和扫描时间。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY-NC-SA 3.0; registration and intended-use declaration required.",
        "zh": "CC BY-NC-SA 3.0；需注册并说明用途。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://www.cvlibs.net/datasets/kitti-360/",
            "https://www.cvlibs.net/datasets/kitti-360/documentation.php",
            "https://arxiv.org/abs/2109.13410"
          ]
        },
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://www.cvlibs.net/datasets/kitti-360/",
            "https://www.cvlibs.net/datasets/kitti-360/documentation.php",
            "https://arxiv.org/abs/2109.13410"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Calibrated LiDAR scans provide sparse measured depth after projection; occlusion and scan timing must be handled.",
            "zh": "标定后的 LiDAR 扫描经投影可提供稀疏实测深度，需处理遮挡与扫描时序。"
          }
        },
        "trajectory": {
          "status": "reference",
          "provenance": [
            "estimated"
          ],
          "note": {
            "en": "Georegistered metric poses are optimized with SfM, GPS and LiDAR constraints; some slow-motion frames lack poses.",
            "zh": "地理配准米制位姿由 SfM、GPS 和 LiDAR 约束优化获得；部分慢速运动帧缺少位姿。"
          }
        },
        "evidence": [
          "https://www.cvlibs.net/datasets/kitti-360/",
          "https://www.cvlibs.net/datasets/kitti-360/documentation.php"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 7,
        "scope": {
          "zh": "车载多相机建图",
          "en": "Driving multicamera mapping"
        },
        "reason": {
          "zh": "相机、轨迹与三维扫描资料完整；不是直接采集的 ERP。",
          "en": "Documented cameras, poses and 3D scans; native observations are not ERP."
        },
        "evidence": [
          {
            "url": "https://www.cvlibs.net/datasets/kitti-360/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_kitti360.webp",
        "thumbnail": "assets/datasets/ds_kitti360-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://www.cvlibs.net/datasets/kitti-360/",
        "sourceUrl": "https://www.cvlibs.net/datasets/kitti-360/images/example/2d/semantic/0000002161.jpg",
        "paperUrl": "https://arxiv.org/abs/2109.13410",
        "sourceTitle": "KITTI-360 official dataset preview",
        "caption": {
          "en": "KITTI-360 urban street example with semantic annotation overlay.",
          "zh": "KITTI-360 城市道路样例及语义标注叠加。"
        },
        "credit": {
          "en": "Source: KITTI-360 authors, official project preview.",
          "zh": "来源：KITTI-360 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: KITTI-360 authors, official project preview.",
          "zh": "来源：KITTI-360 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          1100,
          294
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "05ccc44ccabea342cc1355b9b3a171a91c34ff087fc71248ea58b1f55d25738c"
      }
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
      "environment": "C++/CMake; optional LibTorch segmentation and ROS2.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/abs/2202.09199",
            "https://github.com/ethz-mrl/okvis2"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://arxiv.org/abs/2202.09199",
            "https://github.com/ethz-mrl/okvis2"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/okvis2_2022-thumb.webp",
        "image": "assets/papers/okvis2_2022.webp",
        "paperUrl": "https://arxiv.org/pdf/2202.09199",
        "page": 3,
        "figureLabel": "Figure 1",
        "caption": {
          "zh": "前端、实时估计器与全图估计器的视觉惯性流程。",
          "en": "Visual-inertial frontend, real-time estimator and full-graph estimator."
        },
        "credit": {
          "zh": "来源：论文作者，2022；1 号图截图。",
          "en": "Source: paper authors (2022), Figure 1 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 1: Overview of OKVIS2",
        "cropBox": [
          54,
          54,
          297,
          204
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "d66d18c87f1ceb65bca0435af3e6a66bfc5af9052283c776bffab9aff55a734c",
        "imageSize": [
          607,
          375
        ]
      }
    },
    {
      "id": "patchmatch_panorama2022",
      "collection": "slam",
      "name": "PatchMatch-Stereo-Panorama",
      "title": "PatchMatch-Stereo-Panorama, a fast dense reconstruction from 360° video images",
      "year": 2022,
      "firstYear": 2022,
      "yearConvention": "Formal publication year when identified; otherwise preprint/software year. Check venue/version notes.",
      "venue": "IEEE SSRR 2022, pp. 366-372",
      "authors": "Hartmut Surmann; Marc Thurow; Dominik Slomma",
      "institutions": "Westphalian University of Applied Sciences, Gelsenkirchen; German Rescue Robotics Center, Dortmund",
      "summary": "把 ERP PatchMatch 稠密化接入 OpenVSLAM：利用相邻关键帧、多视一致性与平面传播生成稠密点云。适合研究传统几何建图；单目尺度仍不确定，原仓库已归档。",
      "cameras": [
        "panoramic"
      ],
      "scale": "relative",
      "scaleNote": "Monocular arbitrary scale inherited from OpenVSLAM; densification does not supply a metric baseline",
      "aliases": [],
      "metricStatus": "arbitrary scale; monocular geometric reconstruction",
      "depthType": "unknown",
      "outputs": [
        "unknown",
        "pose"
      ],
      "pose": true,
      "inputSummary": "Monocular ERP video, camera configuration and optional mask; OpenVSLAM keyframe poses and neighboring images feed the densifier",
      "outputSummary": "Camera trajectory, per-keyframe dense depth maps and filtered fused dense point cloud; map database and PLY export",
      "inputs": {
        "requirements": "Monocular ERP video, camera configuration and optional mask; OpenVSLAM keyframe poses and neighboring images feed the densifier",
        "imu": false
      },
      "outputDetails": {
        "primary": "Camera trajectory, per-keyframe dense depth maps and filtered fused dense point cloud; map database and PLY export",
        "depth_convention": "ERP multi-view stereo geometry; exact exported scalar radial-distance convention not independently audited",
        "metric_status": "arbitrary scale; monocular geometric reconstruction",
        "pose_output": "Yes, provided by the underlying OpenVSLAM tracker and mapper",
        "runtime": "Unknown: no comparable local measurement"
      },
      "codeStatus": "released",
      "codeUrl": "https://github.com/RoblabWh/PatchMatch",
      "paperUrl": "https://arxiv.org/abs/2211.16266",
      "projectUrl": "https://github.com/RoblabWh/PatchMatch",
      "weightsUrl": "",
      "license": "BSD-2-Clause top-level license; bundled dependencies have separate notices",
      "evidence": [
        "Author manuscript, official repository README, LICENSE and release notice reviewed; loop closure inherited from OpenVSLAM; no local reproduction",
        "https://arxiv.org/abs/2211.16266",
        "https://github.com/RoblabWh/PatchMatch",
        "https://github.com/RoblabWh/PatchMatch/blob/main/LICENSE",
        "https://github.com/RoblabWh/stella_vslam_dense",
        "https://doi.org/10.1109/SSRR56537.2022.10018698"
      ],
      "notes": [
        "A dense-mapping extension to OpenVSLAM, not a new standalone odometry frontend or learned single-image depth model; dense-map behavior after loop correction not independently audited; original repository archived",
        "Official code available; original repository archived March 2024 and points to stella_vslam_dense successor"
      ],
      "tags": [],
      "family": "panoramic SLAM / geometric dense mapping",
      "imu": false,
      "loopClosure": true,
      "nativePanoramic": true,
      "sourceChecked": "2026-10-17",
      "publiclyVerified": true,
      "verificationLevel": "Official paper, repository and license reviewed; no local reproduction",
      "codeEntry": "Unknown",
      "environment": "C++/CUDA with NVIDIA Container Toolkit and Docker examples; official demo configuration and video available",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://arxiv.org/abs/2211.16266",
            "https://github.com/RoblabWh/PatchMatch",
            "https://github.com/RoblabWh/PatchMatch/blob/main/LICENSE"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "paperUrl": "https://arxiv.org/pdf/2211.16266",
        "page": 4,
        "figureLabel": "Figure 3",
        "cropBox": [
          68,
          52,
          546,
          317
        ],
        "caption": {
          "zh": "OpenVSLAM 上增加全景 PatchMatch 深度计算与稠密点云线程。",
          "en": "Panoramic PatchMatch depth and dense-point-cloud threads added to OpenVSLAM."
        },
        "originalCaption": "Fig. 3. Overview of the proposed approach.",
        "image": "assets/papers/patchmatch_panorama2022.webp",
        "thumbnail": "assets/papers/patchmatch_panorama2022-thumb.webp",
        "credit": {
          "zh": "来源：论文作者，2022；Figure 3 原文截图。",
          "en": "Source: paper authors (2022), Figure 3 crop."
        },
        "kind": "method",
        "verified": true,
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected the full source PDF page and final crop. Actual paper method overview, not a generated illustration.",
        "imageSize": [
          1593,
          883
        ],
        "pdfSha256": "53c91d436ebee8403588ed2774dc82394f955ccd2631e4994e45d918d925491e"
      }
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
      "environment": "Learned decoder plus VIO; complete official release not established.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/pdf/2012.10133"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/codevio2021-thumb.webp",
        "image": "assets/papers/codevio2021.webp",
        "paperUrl": "https://arxiv.org/pdf/2012.10133",
        "page": 2,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "用于深度推断和编码的条件变分自编码器结构。",
          "en": "Conditional variational autoencoder architecture for depth inference and encoding."
        },
        "credit": {
          "zh": "来源：论文作者，2021；2 号图截图。",
          "en": "Source: paper authors (2021), Figure 2 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 2: The architecture of the conditional variational auto-encoder (CVAE)",
        "cropBox": [
          313,
          51,
          561,
          194
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "57356860f687fc346d7c39b7b8c24eae08a3ab71774d53a732b85b1a3dfdf911",
        "imageSize": [
          620,
          357
        ]
      }
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
      "environment": "CUDA; official README documents substantial GPU memory needs.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/abs/2108.10869",
            "https://github.com/princeton-vl/DROID-SLAM"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/droidslam2021-thumb.webp",
        "image": "assets/papers/droidslam2021.webp",
        "paperUrl": "https://arxiv.org/pdf/2108.10869",
        "page": 4,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "循环更新算子结合稠密束调整修正位姿与深度。",
          "en": "A recurrent update operator with dense bundle adjustment revises pose and depth."
        },
        "credit": {
          "zh": "来源：论文作者，2021；2 号图截图。",
          "en": "Source: paper authors (2021), Figure 2 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Figure 2: Illustration of the update operator.",
        "cropBox": [
          172,
          65,
          458,
          200
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "0e15f20bff5f7ceac468c2899baafc8c114a3018c7a7b213eed7c402e5ccec90",
        "imageSize": [
          715,
          337
        ]
      }
    },
    {
      "id": "ds_hm3d",
      "name": "HM3D",
      "title": "Habitat-Matterport 3D Dataset: 1000 Large-scale 3D Environments for Embodied AI",
      "year": 2021,
      "cameras": [
        "perspective"
      ],
      "tasks": [
        "depth",
        "slam"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "real",
      "sensors": [
        "Matterport scene scans",
        "Habitat simulator"
      ],
      "sensorLabels": {
        "en": [
          "Matterport scene scans",
          "Habitat simulator"
        ],
        "zh": [
          "Matterport 场景扫描",
          "Habitat 仿真器"
        ]
      },
      "groundTruth": [
        "Scanned meshes",
        "Renderer-dependent depth"
      ],
      "groundTruthLabels": {
        "en": [
          "Scanned meshes",
          "Renderer-dependent depth"
        ],
        "zh": [
          "扫描网格",
          "依赖渲染配置的深度"
        ]
      },
      "access": "registration",
      "homepageUrl": "https://aihabitat.org/datasets/hm3d/",
      "paperUrl": "https://arxiv.org/abs/2109.08238",
      "downloadUrl": "https://aihabitat.org/datasets/hm3d/",
      "license": {
        "en": "Free for academic non-commercial research under HM3D/Matterport access terms.",
        "zh": "依 HM3D、Matterport 获取条款供学术非商业研究免费使用。"
      },
      "summary": "面向具身仿真的建筑级真实场景网格；深度训练图像对需依据明确的相机协议另行渲染。",
      "details": {
        "en": {
          "Release and projection": "The official release is 3D scene scans, not fixed RGB-D videos or native ERP depth pairs. Perspective is a simulation use case; ERP is not claimed here.",
          "Depth and validity": "Depth derives from simulator geometry. Resolution, camera model, units, clipping, range/Z and invalid masks must be specified by the generated benchmark.",
          "Reference poses": "Rendered camera poses are generated references. They do not establish physical IMU timing or independent trajectory ground truth.",
          "Evaluation": "Respect official train/validation scene identities. Official metadata says test scenes are held out and not publicly released.",
          "Quality and access": "Scene-quality ratings and navigability metadata aid filtering. Download depends on Matterport research access; asset quality is not sensor-depth accuracy."
        },
        "zh": {
          "发布与投影": "官方发布为三维场景扫描，不是固定 RGB-D 视频或原生 ERP 深度对。透视属于仿真用途，此条不声称自带 ERP。",
          "深度与有效性": "深度来自仿真几何；生成基准必须注明分辨率、相机模型、单位、截断、径向距离或 Z 及无效掩码。",
          "参考位姿": "渲染相机位姿是生成参考，不代表包含物理 IMU 时间或独立轨迹真值。",
          "评测协议": "遵守官方训练、验证场景身份；官方元数据说明测试场景保留，不公开发布。",
          "质量与获取": "场景质量评分与可通行元数据可辅助筛选；下载依赖 Matterport 研究访问权限，资产质量不等同于传感器深度精度。"
        }
      },
      "notes": {
        "en": [
          "Keep HM3D distinct from Matterport3D and HM3D-Semantics annotation releases."
        ],
        "zh": [
          "HM3D、Matterport3D 与 HM3D-Semantics 标注发布需分别记录。"
        ]
      },
      "evidence": [
        {
          "url": "https://aihabitat.org/datasets/hm3d/",
          "title": "Official scope, access and scene-split metadata"
        },
        {
          "url": "https://arxiv.org/abs/2109.08238",
          "title": "HM3D dataset paper"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Building-scale real scene meshes for embodied simulation; depth training pairs must be rendered under a declared camera protocol.",
        "zh": "面向具身仿真的建筑级真实场景网格；深度训练图像对需依据明确的相机协议另行渲染。"
      },
      "datasetDetails": {
        "en": {
          "Release and projection": "The official release is 3D scene scans, not fixed RGB-D videos or native ERP depth pairs. Perspective is a simulation use case; ERP is not claimed here.",
          "Depth and validity": "Depth derives from simulator geometry. Resolution, camera model, units, clipping, range/Z and invalid masks must be specified by the generated benchmark.",
          "Reference poses": "Rendered camera poses are generated references. They do not establish physical IMU timing or independent trajectory ground truth.",
          "Evaluation": "Respect official train/validation scene identities. Official metadata says test scenes are held out and not publicly released.",
          "Quality and access": "Scene-quality ratings and navigability metadata aid filtering. Download depends on Matterport research access; asset quality is not sensor-depth accuracy."
        },
        "zh": {
          "发布与投影": "官方发布为三维场景扫描，不是固定 RGB-D 视频或原生 ERP 深度对。透视属于仿真用途，此条不声称自带 ERP。",
          "深度与有效性": "深度来自仿真几何；生成基准必须注明分辨率、相机模型、单位、截断、径向距离或 Z 及无效掩码。",
          "参考位姿": "渲染相机位姿是生成参考，不代表包含物理 IMU 时间或独立轨迹真值。",
          "评测协议": "遵守官方训练、验证场景身份；官方元数据说明测试场景保留，不公开发布。",
          "质量与获取": "场景质量评分与可通行元数据可辅助筛选；下载依赖 Matterport 研究访问权限，资产质量不等同于传感器深度精度。"
        }
      },
      "datasetNotes": {
        "en": [
          "Keep HM3D distinct from Matterport3D and HM3D-Semantics annotation releases."
        ],
        "zh": [
          "HM3D、Matterport3D 与 HM3D-Semantics 标注发布需分别记录。"
        ]
      },
      "datasetLicense": {
        "en": "Free for academic non-commercial research under HM3D/Matterport access terms.",
        "zh": "依 HM3D、Matterport 获取条款供学术非商业研究免费使用。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "rendered",
          "availability": "derivable",
          "note": {
            "en": "Real scanned meshes support perspective observations rendered under an explicit Habitat camera protocol; fixed image sequences are not the source release.",
            "zh": "真实扫描网格可依明确Habitat相机协议渲染透视观测；源发布并非固定图像序列。"
          },
          "evidence": [
            "https://aihabitat.org/datasets/hm3d/",
            "https://arxiv.org/abs/2109.08238"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "partial",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "The release contains scene scans, not fixed image/depth pairs. Depth supervision requires an explicitly specified simulator export.",
            "zh": "发布内容是场景扫描而非固定图像—深度对；深度监督需要明确指定仿真器导出协议。"
          }
        },
        "trajectory": {
          "status": "partial",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "A generated simulator sequence can have known poses, but continuous trajectory files are not an intrinsic product of this asset release.",
            "zh": "生成的仿真序列可具有已知位姿，但连续轨迹文件并非该资产发布的固有产品。"
          }
        },
        "evidence": [
          "https://aihabitat.org/datasets/hm3d/",
          "https://arxiv.org/abs/2109.08238"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 4,
        "scope": {
          "zh": "室内扫描场景",
          "en": "Scanned indoor scenes"
        },
        "reason": {
          "zh": "成熟的室内场景资源；相机轨迹与深度通常由派生渲染提供。",
          "en": "An established indoor scene resource; trajectories and depth often come from derivative rendering."
        },
        "evidence": [
          {
            "url": "https://aihabitat.org/datasets/hm3d/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_hm3d.webp",
        "thumbnail": "assets/datasets/ds_hm3d-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://aihabitat.org/datasets/hm3d/",
        "sourceTitle": "HM3D official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "Dollhouse visualization of HM3D scene 00000-kfPV7w3FaU5 from the official scene explorer.",
          "zh": "官方 HM3D 场景浏览器中 00000-kfPV7w3FaU5 的娃娃屋视图。"
        },
        "attribution": {
          "en": "Source: HM3D project authors, official dataset preview.",
          "zh": "来源：HM3D 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: HM3D project authors, official dataset preview.",
          "zh": "来源：HM3D 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "3f81a5d8776813551027bb112104496f1a30f9a6ca0dcd926ce1c17c0c525c9e",
        "thumbnailSha256": "4710c92b16be3eb85b8846f85d00d5614e88f5bc98ebf49091c97824c0c23027",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://habitatwebsite.s3.amazonaws.com/website-visualization/00000-kfPV7w3FaU5/dollhouse.jpg",
        "sourceSha256": "649d25985d9602fd45672d11b5efcdf82c7c874fbb41b37ecb1347e6901f9859",
        "selectionNotes": "Official project image converted to WebP and proportionally resized without changing its content."
      }
    },
    {
      "id": "ds_hilti2021",
      "name": "Hilti SLAM 2021",
      "title": "The Hilti SLAM Challenge Dataset",
      "year": 2021,
      "cameras": [
        "fisheye",
        "wide",
        "multi"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "indoor",
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "Multi-camera",
        "LiDAR",
        "IMU",
        "Total station",
        "MoCap"
      ],
      "sensorLabels": {
        "en": [
          "Multi-camera",
          "LiDAR",
          "IMU",
          "Total station",
          "MoCap"
        ],
        "zh": [
          "多相机",
          "LiDAR",
          "IMU",
          "全站仪",
          "动作捕捉"
        ]
      },
      "groundTruth": [
        "Sparse metric positions",
        "Selected 6DoF"
      ],
      "groundTruthLabels": {
        "en": [
          "Sparse metric positions",
          "Selected 6DoF"
        ],
        "zh": [
          "稀疏米制位置",
          "部分六自由度真值"
        ]
      },
      "access": "open",
      "homepageUrl": "https://hilti-challenge.com/dataset-2021",
      "paperUrl": "https://arxiv.org/abs/2109.11316",
      "downloadUrl": "https://hilti-challenge.com/dataset-2021",
      "license": {
        "en": "CC BY-NC-SA 3.0 dataset and benchmark.",
        "zh": "数据与基准采用 CC BY-NC-SA 3.0。"
      },
      "summary": "广视场多相机、双 LiDAR 与惯性的施工环境基准；需区分稀疏测量位置和完整位姿轨迹。",
      "details": {
        "en": {
          "Geometry": "Five Alphasense cameras cover approximately 270° in total; a physical stereo pair is included. Not a stitched ERP sensor.",
          "Ground truth": "Most sequences: stationary total-station 3DoF positions. Lab/arena sequences: OptiTrack 6DoF.",
          "Accuracy and frame": "Official reference accuracy is better than 5 mm; filenames identify the reference frame, e.g. prism.",
          "Synchronization": "FPGA and PTP synchronization; sensor TF tree, calibration and noise resources are supplied.",
          "Evaluation": "Compare the correctly transformed reference point at surveyed timestamps; sparse control points cannot support dense trajectory ATE."
        },
        "zh": {
          "成像模型": "五个 Alphasense 相机总覆盖约 270°，包含真实双目；不是拼接 ERP 传感器。",
          "真值": "大多数序列为全站仪在静止时测量的三自由度位置；实验室/测试场序列提供 OptiTrack 六自由度真值。",
          "精度与坐标系": "官方给出参考精度优于 5 毫米；文件名标明参考坐标系，例如棱镜。",
          "同步": "采用 FPGA 和 PTP，同步资料、TF 树、标定及噪声资源随数据提供。",
          "评测": "在测量时刻比较正确变换后的参考点；稀疏控制点不能用于全程稠密轨迹 ATE。"
        }
      },
      "notes": {
        "en": [
          "Year denotes the 2021 challenge; the journal paper is RA-L 2022.",
          "LiDAR scans are measurements, not complete dense image-depth labels."
        ],
        "zh": [
          "年份对应 2021 挑战；期刊论文发表于 RA-L 2022。",
          "LiDAR 扫描是测量数据，并非完整稠密图像深度标签。"
        ]
      },
      "evidence": [
        {
          "url": "https://hilti-challenge.com/dataset-2021",
          "title": "Hilti 2021 official downloads, truth dimensions and licence"
        },
        {
          "url": "https://arxiv.org/abs/2109.11316",
          "title": "Hilti SLAM sensor and calibration paper"
        },
        {
          "title": "Camera / annotation source",
          "url": "https://huggingface.co/datasets/Hilti-Research/hilti-slam-challenge-2021/blob/main/calibration.yaml",
          "checked": "2026-10-20"
        },
        {
          "title": "Camera / annotation source",
          "url": "https://arxiv.org/html/2109.11316",
          "checked": "2026-10-20"
        }
      ],
      "checked": "2026-10-20",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Wide-FoV multicamera, dual-LiDAR and inertial construction benchmark; sparse surveyed positions must be distinguished from full pose trajectories.",
        "zh": "广视场多相机、双 LiDAR 与惯性的施工环境基准；需区分稀疏测量位置和完整位姿轨迹。"
      },
      "datasetDetails": {
        "en": {
          "Geometry": "Five Alphasense cameras cover approximately 270° in total; a physical stereo pair is included. Not a stitched ERP sensor.",
          "Ground truth": "Most sequences: stationary total-station 3DoF positions. Lab/arena sequences: OptiTrack 6DoF.",
          "Accuracy and frame": "Official reference accuracy is better than 5 mm; filenames identify the reference frame, e.g. prism.",
          "Synchronization": "FPGA and PTP synchronization; sensor TF tree, calibration and noise resources are supplied.",
          "Evaluation": "Compare the correctly transformed reference point at surveyed timestamps; sparse control points cannot support dense trajectory ATE."
        },
        "zh": {
          "成像模型": "五个 Alphasense 相机总覆盖约 270°，包含真实双目；不是拼接 ERP 传感器。",
          "真值": "大多数序列为全站仪在静止时测量的三自由度位置；实验室/测试场序列提供 OptiTrack 六自由度真值。",
          "精度与坐标系": "官方给出参考精度优于 5 毫米；文件名标明参考坐标系，例如棱镜。",
          "同步": "采用 FPGA 和 PTP，同步资料、TF 树、标定及噪声资源随数据提供。",
          "评测": "在测量时刻比较正确变换后的参考点；稀疏控制点不能用于全程稠密轨迹 ATE。"
        }
      },
      "datasetNotes": {
        "en": [
          "Year denotes the 2021 challenge; the journal paper is RA-L 2022.",
          "LiDAR scans are measurements, not complete dense image-depth labels."
        ],
        "zh": [
          "年份对应 2021 挑战；期刊论文发表于 RA-L 2022。",
          "LiDAR 扫描是测量数据，并非完整稠密图像深度标签。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY-NC-SA 3.0 dataset and benchmark.",
        "zh": "数据与基准采用 CC BY-NC-SA 3.0。"
      },
      "sourceChecked": "2026-10-20",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "The official calibration declares all five raw cameras as KannalaBrandt, 1440x1080. The rig has about 270-degree combined coverage, without stitched ERP.",
            "zh": "官方标定将五路原始相机均声明为KannalaBrandt，1440×1080；装置总覆盖约270度，没有拼接ERP。"
          },
          "evidence": [
            "https://huggingface.co/datasets/Hilti-Research/hilti-slam-challenge-2021/blob/main/calibration.yaml",
            "https://arxiv.org/html/2109.11316"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "focused_primary_source_recheck_2026-10-20",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Calibrated LiDAR scans provide sparse measured ranges for projection, not complete dense image-depth targets.",
            "zh": "标定后的 LiDAR 扫描提供可投影的稀疏实测距离，并非完整稠密图像深度目标。"
          }
        },
        "trajectory": {
          "status": "partial",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Most sequences have sparse surveyed 3DoF positions; selected lab/arena recordings have OptiTrack 6DoF coverage.",
            "zh": "多数序列具有稀疏测绘三自由度位置；部分实验室、场地记录具有 OptiTrack 六自由度覆盖。"
          }
        },
        "evidence": [
          "https://hilti-challenge.com/dataset-2021",
          "https://arxiv.org/abs/2109.11316"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 9,
        "scope": {
          "zh": "多传感器 SLAM",
          "en": "Multisensor SLAM"
        },
        "reason": {
          "zh": "已有挑战评测和参考轨迹，传感器与真值覆盖需按序列匹配。",
          "en": "An established challenge protocol; match sensors and reference coverage per sequence."
        },
        "evidence": [
          {
            "url": "https://hilti-challenge.com/dataset-2021",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_hilti2021.webp",
        "thumbnail": "assets/datasets/ds_hilti2021-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://hilti-challenge.com/dataset-2021",
        "sourceUrl": "https://hilti-challenge.com/assets/2021/sequences/IC_OFFICE.jpg",
        "paperUrl": "https://arxiv.org/abs/2109.11316",
        "sourceTitle": "Hilti SLAM 2021 official dataset preview",
        "caption": {
          "en": "Office recording environment shown on the official Hilti 2021 sequence page.",
          "zh": "Hilti 2021 官方序列页展示的办公室采集环境。"
        },
        "credit": {
          "en": "Source: Hilti SLAM 2021 authors, official project preview.",
          "zh": "来源：Hilti SLAM 2021 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: Hilti SLAM 2021 authors, official project preview.",
          "zh": "来源：Hilti SLAM 2021 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          873,
          655
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "e4f14e280ba1aebb7bc12250e58660a35c9d03e2696a48868925f5cb85ac249c"
      }
    },
    {
      "id": "ds_hypersim",
      "name": "Hypersim",
      "title": "Hypersim: A Photorealistic Synthetic Dataset for Holistic Indoor Scene Understanding",
      "year": 2021,
      "cameras": [
        "perspective"
      ],
      "tasks": [
        "depth"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "synthetic",
      "sensors": [
        "V-Ray renderer"
      ],
      "sensorLabels": {
        "en": [
          "V-Ray renderer"
        ],
        "zh": [
          "V-Ray 渲染器"
        ]
      },
      "groundTruth": [
        "Euclidean range",
        "Normals and semantics",
        "Camera poses"
      ],
      "groundTruthLabels": {
        "en": [
          "Euclidean range",
          "Normals and semantics",
          "Camera poses"
        ],
        "zh": [
          "欧氏径向距离",
          "法向与语义",
          "相机位姿"
        ]
      },
      "access": "open",
      "homepageUrl": "https://github.com/apple-aiml-research/ml-hypersim",
      "paperUrl": "https://arxiv.org/abs/2011.02523",
      "downloadUrl": "https://github.com/apple-aiml-research/ml-hypersim#downloading-the-hypersim-dataset",
      "license": {
        "en": "Dataset CC BY-SA 3.0; original scene mesh assets require separate purchase.",
        "zh": "数据集 CC BY-SA 3.0；原始场景网格资产需另外购买。"
      },
      "summary": "照片级合成室内基线，明确记录相机中心距离，是容易出现径向距离与 Z 混用的典型数据集。",
      "details": {
        "en": {
          "Projection and inputs": "Perspective HDR/color renders; camera intrinsics vary, including tilt-shift parameters. This is not a native panoramic release.",
          "Depth and validity": "depth_meters HDF5 stores Euclidean distance in meters, not camera Z. Apply finite/valid geometric masks and the exact evaluation depth limits.",
          "Geometry and scale": "Normals, semantics, instances and camera trajectories accompany renders. Camera positions remain in asset units: convert using meters_per_asset_unit.",
          "Evaluation": "Use scene-level metadata_images_split_scene_v1.csv. Objects may be reused across different scenes; do not imply strict object-disjoint evaluation.",
          "Access": "Public image/annotation download script; preview JPEGs are for inspection, not a substitute for lossless HDR data."
        },
        "zh": {
          "投影与输入": "透视 HDR、彩色渲染；内参按场景变化，并包含移轴参数；不是原生全景发布。",
          "深度与有效性": "depth_meters HDF5 存储米制欧氏距离，不是相机 Z。需应用有限、有效几何掩码及所选评测深度范围。",
          "几何与尺度": "提供法向、语义、实例和相机轨迹。相机位置仍用资产单位，需用 meters_per_asset_unit 转换。",
          "评测协议": "使用场景级 metadata_images_split_scene_v1.csv。不同场景可能复用物体，不能声称严格物体隔离。",
          "获取方式": "提供公开图像、标注下载脚本；预览 JPEG 用于检查，不能替代无损 HDR 数据。"
        }
      },
      "notes": {
        "en": [
          "Perspective camera pixels can still encode radial range; projection alone does not determine the depth definition."
        ],
        "zh": [
          "透视图像也可以存储径向距离，不能仅凭投影判断深度定义。"
        ]
      },
      "evidence": [
        {
          "url": "https://github.com/apple-aiml-research/ml-hypersim",
          "title": "Official format, range, split and license"
        },
        {
          "url": "https://arxiv.org/abs/2011.02523",
          "title": "Dataset paper"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Photorealistic synthetic indoor baseline with explicitly documented camera-center distance, a frequent source of range-versus-Z errors.",
        "zh": "照片级合成室内基线，明确记录相机中心距离，是容易出现径向距离与 Z 混用的典型数据集。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "Perspective HDR/color renders; camera intrinsics vary, including tilt-shift parameters. This is not a native panoramic release.",
          "Depth and validity": "depth_meters HDF5 stores Euclidean distance in meters, not camera Z. Apply finite/valid geometric masks and the exact evaluation depth limits.",
          "Geometry and scale": "Normals, semantics, instances and camera trajectories accompany renders. Camera positions remain in asset units: convert using meters_per_asset_unit.",
          "Evaluation": "Use scene-level metadata_images_split_scene_v1.csv. Objects may be reused across different scenes; do not imply strict object-disjoint evaluation.",
          "Access": "Public image/annotation download script; preview JPEGs are for inspection, not a substitute for lossless HDR data."
        },
        "zh": {
          "投影与输入": "透视 HDR、彩色渲染；内参按场景变化，并包含移轴参数；不是原生全景发布。",
          "深度与有效性": "depth_meters HDF5 存储米制欧氏距离，不是相机 Z。需应用有限、有效几何掩码及所选评测深度范围。",
          "几何与尺度": "提供法向、语义、实例和相机轨迹。相机位置仍用资产单位，需用 meters_per_asset_unit 转换。",
          "评测协议": "使用场景级 metadata_images_split_scene_v1.csv。不同场景可能复用物体，不能声称严格物体隔离。",
          "获取方式": "提供公开图像、标注下载脚本；预览 JPEG 用于检查，不能替代无损 HDR 数据。"
        }
      },
      "datasetNotes": {
        "en": [
          "Perspective camera pixels can still encode radial range; projection alone does not determine the depth definition."
        ],
        "zh": [
          "透视图像也可以存储径向距离，不能仅凭投影判断深度定义。"
        ]
      },
      "datasetLicense": {
        "en": "Dataset CC BY-SA 3.0; original scene mesh assets require separate purchase.",
        "zh": "数据集 CC BY-SA 3.0；原始场景网格资产需另外购买。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "rendered",
          "availability": "released",
          "note": {
            "en": "Synthetic perspective RGB-D products are rendered, with supplied camera metadata.",
            "zh": "提供合成透视RGB-D渲染产品及相机元数据。"
          },
          "evidence": [
            "https://github.com/apple-aiml-research/ml-hypersim",
            "https://arxiv.org/abs/2011.02523"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Rendered depth_meters stores Euclidean ray distance in metres; use finite geometry masks.",
            "zh": "渲染的 depth_meters 存储米制射线距离，需使用有限值与几何有效掩码。"
          }
        },
        "trajectory": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Rendered camera trajectories and intrinsics are provided; convert asset coordinates using meters_per_asset_unit.",
            "zh": "提供渲染相机轨迹与内参；资产坐标需通过 meters_per_asset_unit 转换为米。"
          }
        },
        "evidence": [
          "https://github.com/apple-aiml-research/ml-hypersim",
          "https://arxiv.org/abs/2011.02523"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 2,
        "scope": {
          "zh": "合成室内深度",
          "en": "Synthetic indoor depth"
        },
        "reason": {
          "zh": "提供渲染几何、公开划分与处理工具，适合深度训练对照。",
          "en": "Rendered geometry, public splits and tools support depth-training comparisons."
        },
        "evidence": [
          {
            "url": "https://github.com/apple-aiml-research/ml-hypersim",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_hypersim.webp",
        "thumbnail": "assets/datasets/ds_hypersim-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://github.com/apple-aiml-research/ml-hypersim",
        "sourceTitle": "Hypersim official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "Photorealistic RGB, geometry/semantic annotations and rendering components from the official Hypersim teaser.",
          "zh": "官方 Hypersim 示例中的照片级 RGB、几何与语义标注及渲染分量。"
        },
        "attribution": {
          "en": "Source: Hypersim project authors, official dataset preview.",
          "zh": "来源：Hypersim 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: Hypersim project authors, official dataset preview.",
          "zh": "来源：Hypersim 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "585567c6810240c6eccd939d17a27ea0f44cc33ca147c12445ea28eb03d000ce",
        "thumbnailSha256": "1cd470bcb310396691ee18ec4037196c22ffa87778332c8f22bd2b04d693ccc4",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://raw.githubusercontent.com/apple-aiml-research/ml-hypersim/main/docs/teaser_web.jpg",
        "sourceSha256": "c4ba0d6d6e8ce168a5c2020431e33f85b21c60e6ae8879d3aafc6a70e651abab",
        "selectionNotes": "Official project image converted to WebP and proportionally resized without changing its content."
      }
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
      "environment": "CPU C++; IMU optional by sensor mode.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/abs/2007.11898",
            "https://github.com/UZ-SLAMLab/ORB_SLAM3"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://arxiv.org/abs/2007.11898",
            "https://github.com/UZ-SLAMLab/ORB_SLAM3"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/orbslam3_2021-thumb.webp",
        "image": "assets/papers/orbslam3_2021.webp",
        "paperUrl": "https://arxiv.org/pdf/2007.11898",
        "page": 5,
        "figureLabel": "Figure 1",
        "caption": {
          "zh": "跟踪、Atlas 多地图、回环与地图合并的系统组成。",
          "en": "Tracking, Atlas multi-map management, loop closure and map merging."
        },
        "credit": {
          "zh": "来源：论文作者，2021；1 号图截图。",
          "en": "Source: paper authors (2021), Figure 1 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Figure 1: Main system components of ORB-SLAM3.",
        "cropBox": [
          308,
          54,
          561,
          282
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "4d119517be7565c9651fbf1e36a330d605b7a534d738558858c96feca7b99156",
        "imageSize": [
          632,
          570
        ]
      }
    },
    {
      "id": "ds_omniscenes",
      "name": "OmniScenes",
      "title": "OmniScenes (PICCOLO panoramic localisation dataset)",
      "year": 2021,
      "cameras": [
        "panoramic"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "real",
      "sensors": [
        "Panoramic RGB",
        "Point-cloud map"
      ],
      "sensorLabels": {
        "en": [
          "Panoramic RGB",
          "Point-cloud map"
        ],
        "zh": [
          "全景 RGB",
          "点云地图"
        ]
      },
      "groundTruth": [
        "SfM-aligned query poses",
        "Reference point clouds"
      ],
      "groundTruthLabels": {
        "en": [
          "SfM-aligned query poses",
          "Reference point clouds"
        ],
        "zh": [
          "SfM 对齐查询位姿",
          "参考点云"
        ]
      },
      "access": "open",
      "homepageUrl": "https://github.com/82magnolia/piccolo#downloading-omniscenes-update-new-scenes-added",
      "paperUrl": "https://openaccess.thecvf.com/content/ICCV2021/html/Kim_PICCOLO_Point_Cloud-Centric_Omnidirectional_Localization_ICCV_2021_paper.html",
      "downloadUrl": "https://github.com/82magnolia/piccolo#downloading-omniscenes-update-new-scenes-added",
      "license": {
        "en": "Official code is GPL-3.0; a separate explicit dataset licence was not located in the inspected README.",
        "zh": "官方代码为 GPL-3.0；查看的 README 未找到单独明确的数据许可。"
      },
      "summary": "室内查询全景与点云地图，附经场景配准的 SfM 位姿参考，用于手持、机器人及场景变化条件下的定位。",
      "details": {
        "en": {
          "Versions": "Official repository links an original release and a newer expanded release; the consolidated localisation library explicitly uses the older version.",
          "Geometry": "Panoramic images and scene point clouds; not a synchronized multi-sensor VIO benchmark.",
          "Pose convention": "The current README gives the point transformation X_camera = R(X_world − t). Match parser to release version.",
          "Ground truth": "PICCOLO supplement Section C describes COLMAP/OpenMVG SfM reconstructions manually aligned to Matterport scans, followed by manual removal of invalid poses. Released per-query poses are estimated localization references, not independently measured motion-capture trajectories.",
          "Depth use": "Projecting the point cloud produces map-derived depths with holes/occlusions; no complete measured depth GT is assumed."
        },
        "zh": {
          "版本": "官方仓库同时链接原始和扩展发布；综合定位库明确使用旧版，比较时需统一版本。",
          "成像模型": "全景图像与场景点云，不是同步多传感器 VIO 基准。",
          "位姿约定": "当前 README 给出 X_camera = R(X_world − t)；解析器需匹配版本。",
          "真值": "PICCOLO 补充材料 C 节说明：先用 COLMAP/OpenMVG 建立 SfM 重建，再手动对齐 Matterport 扫描，并人工剔除无效位姿。发布的逐查询位姿属于估计定位参考，并非独立动作捕捉测量轨迹。",
          "深度使用": "投影点云得到的是带空洞/遮挡的地图推导深度，不假设完整实测深度真值。"
        }
      },
      "notes": {
        "en": [
          "Keep original/new scene splits separate in reported results.",
          "Download links are present; full cloud archives were not downloaded in this audit.",
          "SfM alignment to a scanned map establishes a scene reference; it does not establish an independent motion-tracking accuracy bound."
        ],
        "zh": [
          "报告结果时区分原始/新增场景划分。",
          "官方提供下载链接，本次未下载完整点云归档。",
          "SfM 对齐扫描地图建立的是场景参考，并不建立独立运动跟踪精度界限。"
        ]
      },
      "evidence": [
        {
          "url": "https://github.com/82magnolia/piccolo",
          "title": "PICCOLO official OmniScenes release and pose convention"
        },
        {
          "url": "https://github.com/82magnolia/panoramic-localization",
          "title": "Consolidated library: old OmniScenes version warning"
        },
        {
          "url": "https://openaccess.thecvf.com/content/ICCV2021/supplemental/Kim_PICCOLO_Point_Cloud-Centric_ICCV_2021_supplemental.pdf",
          "title": "PICCOLO official supplement Section C: COLMAP/OpenMVG SfM, manual alignment to Matterport scans and pose inspection"
        },
        {
          "title": "Camera / annotation source",
          "url": "https://github.com/82magnolia/piccolo#downloading-omniscenes-update-new-scenes-added",
          "checked": "2026-10-17"
        }
      ],
      "checked": "2026-10-20",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Indoor query panoramas and point-cloud maps with scene-registered SfM pose references, for handheld/robot localisation under scene changes.",
        "zh": "室内查询全景与点云地图，附经场景配准的 SfM 位姿参考，用于手持、机器人及场景变化条件下的定位。"
      },
      "datasetDetails": {
        "en": {
          "Versions": "Official repository links an original release and a newer expanded release; the consolidated localisation library explicitly uses the older version.",
          "Geometry": "Panoramic images and scene point clouds; not a synchronized multi-sensor VIO benchmark.",
          "Pose convention": "The current README gives the point transformation X_camera = R(X_world − t). Match parser to release version.",
          "Ground truth": "PICCOLO supplement Section C describes COLMAP/OpenMVG SfM reconstructions manually aligned to Matterport scans, followed by manual removal of invalid poses. Released per-query poses are estimated localization references, not independently measured motion-capture trajectories.",
          "Depth use": "Projecting the point cloud produces map-derived depths with holes/occlusions; no complete measured depth GT is assumed."
        },
        "zh": {
          "版本": "官方仓库同时链接原始和扩展发布；综合定位库明确使用旧版，比较时需统一版本。",
          "成像模型": "全景图像与场景点云，不是同步多传感器 VIO 基准。",
          "位姿约定": "当前 README 给出 X_camera = R(X_world − t)；解析器需匹配版本。",
          "真值": "PICCOLO 补充材料 C 节说明：先用 COLMAP/OpenMVG 建立 SfM 重建，再手动对齐 Matterport 扫描，并人工剔除无效位姿。发布的逐查询位姿属于估计定位参考，并非独立动作捕捉测量轨迹。",
          "深度使用": "投影点云得到的是带空洞/遮挡的地图推导深度，不假设完整实测深度真值。"
        }
      },
      "datasetNotes": {
        "en": [
          "Keep original/new scene splits separate in reported results.",
          "Download links are present; full cloud archives were not downloaded in this audit.",
          "SfM alignment to a scanned map establishes a scene reference; it does not establish an independent motion-tracking accuracy bound."
        ],
        "zh": [
          "报告结果时区分原始/新增场景划分。",
          "官方提供下载链接，本次未下载完整点云归档。",
          "SfM 对齐扫描地图建立的是场景参考，并不建立独立运动跟踪精度界限。"
        ]
      },
      "datasetLicense": {
        "en": "Official code is GPL-3.0; a separate explicit dataset licence was not located in the inspected README.",
        "zh": "官方代码为 GPL-3.0；查看的 README 未找到单独明确的数据许可。"
      },
      "sourceChecked": "2026-10-20",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://github.com/82magnolia/piccolo",
            "https://github.com/82magnolia/panoramic-localization",
            "https://github.com/82magnolia/piccolo#downloading-omniscenes-update-new-scenes-added"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": true,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "Official products are panoramas, query poses and scene point clouds. A complete image-depth annotation release is not listed.",
            "zh": "官方产品为全景、查询位姿和场景点云，未列出完整图像深度标注发布。"
          }
        },
        "trajectory": {
          "status": "reference",
          "provenance": [
            "estimated"
          ],
          "note": {
            "en": "COLMAP/OpenMVG SfM poses are manually aligned to Matterport scans, with invalid estimates manually removed. These are estimated localization references, not independent motion tracking.",
            "zh": "COLMAP/OpenMVG SfM 位姿手动对齐到 Matterport 扫描，并人工剔除无效估计；属于估计定位参考，而非独立运动跟踪。"
          }
        },
        "evidence": [
          "https://github.com/82magnolia/piccolo",
          "https://github.com/82magnolia/panoramic-localization",
          "https://openaccess.thecvf.com/content/ICCV2021/supplemental/Kim_PICCOLO_Point_Cloud-Centric_ICCV_2021_supplemental.pdf"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 13,
        "scope": {
          "zh": "全景定位",
          "en": "Panoramic localization"
        },
        "reason": {
          "zh": "提供全景场景及定位对照，真值类型按数据文档使用。",
          "en": "Panoramic scenes and localization controls with task-specific reference definitions."
        },
        "evidence": [
          {
            "url": "https://github.com/82magnolia/piccolo#downloading-omniscenes-update-new-scenes-added",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_omniscenes.webp",
        "thumbnail": "assets/datasets/ds_omniscenes-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://github.com/82magnolia/piccolo#downloading-omniscenes-update-new-scenes-added",
        "sourceUrl": "https://raw.githubusercontent.com/82magnolia/piccolo/main/omniscenes.png",
        "paperUrl": "https://openaccess.thecvf.com/content/ICCV2021/html/Kim_PICCOLO_Point_Cloud-Centric_Omnidirectional_Localization_ICCV_2021_paper.html",
        "sourceTitle": "OmniScenes official dataset preview",
        "caption": {
          "en": "Official OmniScenes examples: handheld, robot-mounted and scene-change recordings.",
          "zh": "OmniScenes 官方样例：手持、机器人搭载及场景变化录制。"
        },
        "credit": {
          "en": "Source: OmniScenes authors, official project preview.",
          "zh": "来源：OmniScenes 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: OmniScenes authors, official project preview.",
          "zh": "来源：OmniScenes 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          1100,
          234
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "eb16bfa34ecdc052fe9112fe3a1c703650ef637bc59f4ae47ed234aaa532cd8b"
      }
    },
    {
      "id": "ds_pano3d",
      "name": "Pano3D",
      "title": "Pano3D: A Holistic Benchmark and a Solid Baseline for 360° Depth Estimation",
      "year": 2021,
      "cameras": [
        "panoramic"
      ],
      "tasks": [
        "depth"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "mixed",
      "sensors": [
        "Matterport3D / GibsonV2 meshes",
        "Panoramic renderer"
      ],
      "sensorLabels": {
        "en": [
          "Matterport3D / GibsonV2 meshes",
          "Panoramic renderer"
        ],
        "zh": [
          "Matterport3D / GibsonV2 网格",
          "全景渲染器"
        ]
      },
      "groundTruth": [
        "Rendered range/depth",
        "Normals"
      ],
      "groundTruthLabels": {
        "en": [
          "Rendered range/depth",
          "Normals"
        ],
        "zh": [
          "渲染距离与深度",
          "法向"
        ]
      },
      "access": "request",
      "homepageUrl": "https://vcl3d.github.io/Pano3D/",
      "paperUrl": "https://arxiv.org/abs/2109.02749",
      "downloadUrl": "https://vcl3d.github.io/Pano3D/#download",
      "license": {
        "en": "Matterport3D and GibsonV2 terms, request form and individual Zenodo access requests.",
        "zh": "遵守 Matterport3D、GibsonV2 条款，填写表单并向对应 Zenodo 资源申请访问。"
      },
      "summary": "基于已有扫描场景渲染的基准与协议，重点考察球面评测及跨数据集泛化。",
      "details": {
        "en": {
          "Projection and inputs": "ERP RGB, depth and normals at 1024×512 or 512×256 (width×height); mono rather than 3D60 stereo offsets.",
          "Ground truth": "Matterport3D and GibsonV2 geometry are re-rendered. Keep renderer invalid masks; the overview alone does not fix every file's scaling convention.",
          "Evaluation": "M3D training / GV2 test enables transfer tests with depth-distribution, scene-context and camera-domain shifts. Use spherical-area weighted metrics.",
          "Leakage and variants": "Released non-test GV2 scenes may augment training; exclude the exact GV2 test split and overlapping source buildings.",
          "Calibration": "ERP rays and generated poses define geometry. No synchronized physical IMU stream is implied by these renders."
        },
        "zh": {
          "投影与输入": "ERP RGB、深度与法向，分辨率为 1024×512 或 512×256（宽×高）；提供单目而非 3D60 的立体偏移。",
          "真值来源": "重新渲染 Matterport3D 与 GibsonV2 几何。需保留渲染无效掩码；概览页不足以确定每类文件的缩放约定。",
          "评测协议": "M3D 训练、GV2 测试用于深度分布、场景内容与相机域偏移评测；应采用球面面积加权指标。",
          "泄漏与变体": "发布的非测试 GV2 场景可补充训练；必须排除相应 GV2 测试划分与重复源建筑。",
          "标定": "几何由 ERP 射线与生成位姿决定，渲染发布不意味着包含同步的物理 IMU 流。"
        }
      },
      "notes": {
        "en": [
          "Pano3D is both a benchmark and baseline method; its data are not a new independently captured building corpus."
        ],
        "zh": [
          "Pano3D 同时是基准与基线方法，其数据不是新独立采集的建筑语料。"
        ]
      },
      "evidence": [
        {
          "url": "https://vcl3d.github.io/Pano3D/",
          "title": "Official render protocol, access and weighted metrics"
        },
        {
          "url": "https://arxiv.org/abs/2109.02749",
          "title": "Pano3D paper"
        },
        {
          "url": "https://github.com/VCL3D/Pano3D",
          "title": "Official implementation"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "A rendered benchmark/protocol over existing scanned scenes, emphasizing spherical metrics and cross-dataset generalization.",
        "zh": "基于已有扫描场景渲染的基准与协议，重点考察球面评测及跨数据集泛化。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "ERP RGB, depth and normals at 1024×512 or 512×256 (width×height); mono rather than 3D60 stereo offsets.",
          "Ground truth": "Matterport3D and GibsonV2 geometry are re-rendered. Keep renderer invalid masks; the overview alone does not fix every file's scaling convention.",
          "Evaluation": "M3D training / GV2 test enables transfer tests with depth-distribution, scene-context and camera-domain shifts. Use spherical-area weighted metrics.",
          "Leakage and variants": "Released non-test GV2 scenes may augment training; exclude the exact GV2 test split and overlapping source buildings.",
          "Calibration": "ERP rays and generated poses define geometry. No synchronized physical IMU stream is implied by these renders."
        },
        "zh": {
          "投影与输入": "ERP RGB、深度与法向，分辨率为 1024×512 或 512×256（宽×高）；提供单目而非 3D60 的立体偏移。",
          "真值来源": "重新渲染 Matterport3D 与 GibsonV2 几何。需保留渲染无效掩码；概览页不足以确定每类文件的缩放约定。",
          "评测协议": "M3D 训练、GV2 测试用于深度分布、场景内容与相机域偏移评测；应采用球面面积加权指标。",
          "泄漏与变体": "发布的非测试 GV2 场景可补充训练；必须排除相应 GV2 测试划分与重复源建筑。",
          "标定": "几何由 ERP 射线与生成位姿决定，渲染发布不意味着包含同步的物理 IMU 流。"
        }
      },
      "datasetNotes": {
        "en": [
          "Pano3D is both a benchmark and baseline method; its data are not a new independently captured building corpus."
        ],
        "zh": [
          "Pano3D 同时是基准与基线方法，其数据不是新独立采集的建筑语料。"
        ]
      },
      "datasetLicense": {
        "en": "Matterport3D and GibsonV2 terms, request form and individual Zenodo access requests.",
        "zh": "遵守 Matterport3D、GibsonV2 条款，填写表单并向对应 Zenodo 资源申请访问。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "rendered",
          "availability": "released",
          "note": {
            "en": "The released ERP benchmark re-renders Matterport3D/GibsonV2 geometry.",
            "zh": "已发布ERP基准重新渲染Matterport3D/GibsonV2几何。"
          },
          "evidence": [
            "https://vcl3d.github.io/Pano3D/",
            "https://arxiv.org/abs/2109.02749",
            "https://github.com/VCL3D/Pano3D"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "ERP depth and normals are rendered from Matterport3D/GibsonV2 geometry; preserve the renderer masks.",
            "zh": "ERP 深度与法线由 Matterport3D/GibsonV2 几何渲染，需保留渲染器掩码。"
          }
        },
        "trajectory": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "The documented benchmark provides independent rendered panoramas, depth and normals, not a released continuous trajectory benchmark.",
            "zh": "已记录的基准提供独立渲染全景、深度和法线，并未发布连续轨迹评测序列。"
          }
        },
        "evidence": [
          "https://vcl3d.github.io/Pano3D/",
          "https://arxiv.org/abs/2109.02749",
          "https://github.com/VCL3D/Pano3D"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 1,
        "scope": {
          "zh": "全景深度",
          "en": "Panoramic depth"
        },
        "reason": {
          "zh": "专门定义全景深度任务与划分；保留源场景和监督协议。",
          "en": "Dedicated panoramic depth protocol and splits; retain source-scene provenance."
        },
        "evidence": [
          {
            "url": "https://vcl3d.github.io/Pano3D/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_pano3d.webp",
        "thumbnail": "assets/datasets/ds_pano3d-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://vcl3d.github.io/Pano3D/",
        "sourceTitle": "Pano3D official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "A Matterport3D-derived equirectangular example displayed by the official Pano3D dataset page.",
          "zh": "官方 Pano3D 数据集页面展示的 Matterport3D 派生 ERP 全景示例。"
        },
        "attribution": {
          "en": "Source: Pano3D project authors, official dataset preview.",
          "zh": "来源：Pano3D 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: Pano3D project authors, official dataset preview.",
          "zh": "来源：Pano3D 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "831d930dc01edbe257807b0aec6af63f29c8d548da7fd897a1a665d184344e55",
        "thumbnailSha256": "607b242061fc4b466937fa06fa4e24c6043bbff31fb495fc42ac41d31fc4a2ce",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://vcl3d.github.io/Pano3D/images/dataset/pano3d.png",
        "sourceSha256": "56eb3ab3fdf8b77ec03d14a2584287dd2accae0e1a93fd7c8ec2c814a150e1eb",
        "selectionNotes": "Official project image converted to WebP and proportionally resized without changing its content."
      }
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
      "environment": "CPU C++; current official installation has CMake and binary routes.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/abs/1904.06504",
            "https://cvg.cit.tum.de/research/vslam/basalt",
            "https://gitlab.com/VladyslavUsenko/basalt"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://arxiv.org/abs/1904.06504",
            "https://cvg.cit.tum.de/research/vslam/basalt",
            "https://gitlab.com/VladyslavUsenko/basalt"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/basalt2020-thumb.webp",
        "image": "assets/papers/basalt2020.webp",
        "paperUrl": "https://arxiv.org/pdf/1904.06504",
        "page": 5,
        "figureLabel": "Figure 4",
        "caption": {
          "zh": "视觉惯性子系统的跟踪投影、局部束调整与估计轨迹。",
          "en": "VIO feature projections, local bundle adjustment and estimated trajectory."
        },
        "credit": {
          "zh": "来源：论文作者，2020；4 号图截图。",
          "en": "Source: paper authors (2020), Figure 4 crop."
        },
        "kind": "result",
        "verified": true,
        "originalCaption": "Fig. 4: Visual-inertial odometry subsystem proposed in Section IV.",
        "cropBox": [
          49,
          51,
          563,
          166
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "a9d3337eec82737e27adfa73e30dbaeb3c02b2376e615ec12aade76200e4ba73",
        "imageSize": [
          1285,
          287
        ]
      }
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
      "environment": "Learned inference plus direct optimizer; no local runtime benchmark.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/pdf/2003.01060",
            "https://cvg.cit.tum.de/research/vslam/d3vo"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/d3vo2020-thumb.webp",
        "image": "assets/papers/d3vo2020.webp",
        "paperUrl": "https://arxiv.org/pdf/2003.01060",
        "page": 1,
        "figureLabel": "Figure 1",
        "caption": {
          "zh": "深度、位姿与不确定性预测接入直接视觉里程计。",
          "en": "Depth, pose and uncertainty prediction integrated with direct visual odometry."
        },
        "credit": {
          "zh": "来源：论文作者，2020；1 号图截图。",
          "en": "Source: paper authors (2020), Figure 1 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Figure 1: We propose D3VO – a novel monocular visual odometry (VO) framework",
        "cropBox": [
          306,
          213,
          561,
          420
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "e8835fd6acfe90f8731e04eaf1894635af2803033041d9fc43e23a88c6d5700f",
        "imageSize": [
          637,
          517
        ]
      }
    },
    {
      "id": "ds_newer_college",
      "name": "Newer College",
      "title": "The Newer College Dataset: Handheld LiDAR, Inertial and Vision with Ground Truth",
      "year": 2020,
      "cameras": [
        "fisheye",
        "wide",
        "perspective",
        "multi"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "indoor",
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "Stereo / multi-camera",
        "LiDAR",
        "IMU",
        "Survey map"
      ],
      "sensorLabels": {
        "en": [
          "Stereo / multi-camera",
          "LiDAR",
          "IMU",
          "Survey map"
        ],
        "zh": [
          "双目/多相机",
          "LiDAR",
          "IMU",
          "测量地图"
        ]
      },
      "groundTruth": [
        "Map-registered metric poses",
        "Reference 3D map"
      ],
      "groundTruthLabels": {
        "en": [
          "Map-registered metric poses",
          "Reference 3D map"
        ],
        "zh": [
          "地图配准米制位姿",
          "参考三维地图"
        ]
      },
      "access": "open",
      "homepageUrl": "https://ori-drs.github.io/newer-college-dataset/",
      "paperUrl": "https://doi.org/10.1109/IROS45743.2020.9340849",
      "downloadUrl": "https://ori-drs.github.io/newer-college-dataset/download/",
      "license": {
        "en": "CC BY-NC-SA 4.0; intended for non-commercial academic use.",
        "zh": "CC BY-NC-SA 4.0，面向非商业学术用途。"
      },
      "summary": "手持建图数据系列，包括原始双目和 2021 年多相机扩展，利用独立测量地图建立米制轨迹参考。",
      "details": {
        "en": {
          "Versions": "Original: RealSense D435i and Ouster OS1. Extension: four Alphasense cameras and Ouster OS0-128; do not mix their calibrations.",
          "Reference provenance": "Ouster scans are registered by ICP to a Leica BLK360 survey map; poses are centimetre-level map-derived references, not mocap.",
          "Coordinates": "Original pose frame: RS_C1; multicamera extension: Base. CSV quaternions are x y z w.",
          "Calibration and time": "Version-specific Kalibr files include equidistant distortion for the multicamera extension; that extension uses hardware/PTP synchronization.",
          "Evaluation": "Suitable for SLAM, map reconstruction and relocalization; report map-registration dependence."
        },
        "zh": {
          "版本": "原始版为 RealSense D435i 与 Ouster OS1；扩展为四个 Alphasense 相机与 OS0-128，不可混用标定。",
          "参考来源": "Ouster 扫描经 ICP 配准到 Leica BLK360 测量地图；位姿为厘米级地图推导参考，不是动作捕捉。",
          "坐标约定": "原始位姿坐标系为 RS_C1，多相机版为 Base；CSV 四元数顺序为 x y z w。",
          "标定与时间": "对应版本的 Kalibr 文件分别使用；多相机扩展采用等距畸变模型和硬件/PTP 同步。",
          "评测": "适合 SLAM、地图重建和重定位；需说明参考位姿对地图配准的依赖。"
        }
      },
      "notes": {
        "en": [
          "A point cloud is not automatically a dense per-pixel depth map.",
          "The 2025 Oxford Spires successor is catalogued separately."
        ],
        "zh": [
          "点云不能自动等同于逐像素稠密深度。",
          "2025 年后继数据 Oxford Spires 另有独立条目。"
        ]
      },
      "evidence": [
        {
          "url": "https://ori-drs.github.io/newer-college-dataset/",
          "title": "Newer College official version overview"
        },
        {
          "url": "https://ori-drs.github.io/newer-college-dataset/ground-truth/",
          "title": "Newer College ICP references and pose frames"
        },
        {
          "url": "https://ori-drs.github.io/newer-college-dataset/download/",
          "title": "Newer College download and licence"
        },
        {
          "url": "https://arxiv.org/abs/2112.08854",
          "title": "Multicamera extension paper"
        },
        {
          "url": "https://ori-drs.github.io/newer-college-dataset/multi-cam/calibration-multi/",
          "title": "Newer College multicamera distortion and synchronization"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Hand-carried mapping family with original stereo and a 2021 multicamera extension; independent survey maps anchor metric trajectory references.",
        "zh": "手持建图数据系列，包括原始双目和 2021 年多相机扩展，利用独立测量地图建立米制轨迹参考。"
      },
      "datasetDetails": {
        "en": {
          "Versions": "Original: RealSense D435i and Ouster OS1. Extension: four Alphasense cameras and Ouster OS0-128; do not mix their calibrations.",
          "Reference provenance": "Ouster scans are registered by ICP to a Leica BLK360 survey map; poses are centimetre-level map-derived references, not mocap.",
          "Coordinates": "Original pose frame: RS_C1; multicamera extension: Base. CSV quaternions are x y z w.",
          "Calibration and time": "Version-specific Kalibr files include equidistant distortion for the multicamera extension; that extension uses hardware/PTP synchronization.",
          "Evaluation": "Suitable for SLAM, map reconstruction and relocalization; report map-registration dependence."
        },
        "zh": {
          "版本": "原始版为 RealSense D435i 与 Ouster OS1；扩展为四个 Alphasense 相机与 OS0-128，不可混用标定。",
          "参考来源": "Ouster 扫描经 ICP 配准到 Leica BLK360 测量地图；位姿为厘米级地图推导参考，不是动作捕捉。",
          "坐标约定": "原始位姿坐标系为 RS_C1，多相机版为 Base；CSV 四元数顺序为 x y z w。",
          "标定与时间": "对应版本的 Kalibr 文件分别使用；多相机扩展采用等距畸变模型和硬件/PTP 同步。",
          "评测": "适合 SLAM、地图重建和重定位；需说明参考位姿对地图配准的依赖。"
        }
      },
      "datasetNotes": {
        "en": [
          "A point cloud is not automatically a dense per-pixel depth map.",
          "The 2025 Oxford Spires successor is catalogued separately."
        ],
        "zh": [
          "点云不能自动等同于逐像素稠密深度。",
          "2025 年后继数据 Oxford Spires 另有独立条目。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY-NC-SA 4.0; intended for non-commercial academic use.",
        "zh": "CC BY-NC-SA 4.0，面向非商业学术用途。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://ori-drs.github.io/newer-college-dataset/",
            "https://ori-drs.github.io/newer-college-dataset/ground-truth/",
            "https://ori-drs.github.io/newer-college-dataset/download/"
          ]
        },
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://ori-drs.github.io/newer-college-dataset/",
            "https://ori-drs.github.io/newer-college-dataset/ground-truth/",
            "https://ori-drs.github.io/newer-college-dataset/download/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Released LiDAR ranges support sparse depth projection with the version-specific calibration; they are not dense per-pixel targets.",
            "zh": "发布的 LiDAR 距离结合对应版本标定可生成稀疏深度投影，并非稠密逐像素目标。"
          }
        },
        "trajectory": {
          "status": "reference",
          "provenance": [
            "estimated"
          ],
          "note": {
            "en": "ICP registration to a surveyed Leica map supplies map-derived pose references, not independent motion capture.",
            "zh": "通过 ICP 对齐 Leica 测绘地图获得地图派生位姿参考，并非独立动作捕捉。"
          }
        },
        "evidence": [
          "https://ori-drs.github.io/newer-college-dataset/",
          "https://ori-drs.github.io/newer-college-dataset/ground-truth/",
          "https://ori-drs.github.io/newer-college-dataset/download/",
          "https://arxiv.org/abs/2112.08854",
          "https://ori-drs.github.io/newer-college-dataset/multi-cam/calibration-multi/"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 11,
        "scope": {
          "zh": "户外建图",
          "en": "Outdoor mapping"
        },
        "reason": {
          "zh": "常用的大尺度多传感器资源，参考轨迹来自配准而非动作捕捉。",
          "en": "A useful large-scale multisensor resource with registration-derived references."
        },
        "evidence": [
          {
            "url": "https://ori-drs.github.io/newer-college-dataset/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_newer_college.webp",
        "thumbnail": "assets/datasets/ds_newer_college-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://ori-drs.github.io/newer-college-dataset/",
        "sourceUrl": "https://ori-drs.github.io/newer-college-dataset/assets/figures/new_college_small.jpg",
        "paperUrl": "https://doi.org/10.1109/IROS45743.2020.9340849",
        "sourceTitle": "Newer College official dataset preview",
        "caption": {
          "en": "New College courtyard environment photographed for the Newer College dataset page.",
          "zh": "Newer College 数据集官网展示的新学院庭院环境。"
        },
        "credit": {
          "en": "Source: Newer College authors, official project preview.",
          "zh": "来源：Newer College 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: Newer College authors, official project preview.",
          "zh": "来源：Newer College 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          1000,
          568
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "f5922438c37de172748cc3cb0597be911be5c60330b09b7b228d18f6a8d85f9c"
      }
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
      "environment": "Multiple synchronized cameras plus learned omnidirectional stereo; not locally tested.",
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "A wide-baseline physical fisheye rig yields surrounding coverage; this is not a single stitched ERP input.",
            "zh": "广基线物理鱼眼装置提供环视覆盖，不是单张拼接ERP输入。"
          },
          "evidence": [
            "https://arxiv.org/abs/2003.08056",
            "https://sites.google.com/view/chwon"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/omnislam2020-thumb.webp",
        "image": "assets/papers/omnislam2020.webp",
        "paperUrl": "https://arxiv.org/pdf/2003.08056",
        "page": 2,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "多鱼眼深度估计、视觉里程计、回环与稠密融合。",
          "en": "Multi-fisheye depth estimation, visual odometry, loop closure and dense fusion."
        },
        "credit": {
          "zh": "来源：论文作者，2020；2 号图截图。",
          "en": "Source: paper authors (2020), Figure 2 crop."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 2: Flowchart of the proposed system.",
        "cropBox": [
          313,
          48,
          561,
          133
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "40dc580ff03855ab526820e8619075e397187060bd5490d10b98883d92ba9307",
        "imageSize": [
          620,
          212
        ]
      }
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
      "environment": "CPU; camera/IMU synchronization and calibration required.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://pgeneva.com/downloads/papers/Geneva2020ICRA.pdf",
            "https://docs.openvins.com/",
            "https://github.com/rpng/open_vins"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://pgeneva.com/downloads/papers/Geneva2020ICRA.pdf",
            "https://docs.openvins.com/",
            "https://github.com/rpng/open_vins"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/openvins2020-thumb.webp",
        "image": "assets/papers/openvins2020.webp",
        "paperUrl": "https://pgeneva.com/downloads/papers/Geneva2020ICRA.pdf",
        "page": 5,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "相机与 IMU 在线标定参数误差及置信界限。",
          "en": "Camera/IMU online calibration errors and confidence bounds."
        },
        "credit": {
          "zh": "来源：论文作者，2020；2 号图截图。",
          "en": "Source: paper authors (2020), Figure 2 crop."
        },
        "kind": "result",
        "verified": true,
        "originalCaption": "Fig. 2: Camera intrinsic projection and distortion along with extrinsic orientation and positions parameters error",
        "cropBox": [
          56,
          55,
          558,
          205
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "194e432eda4462dfb831108c62a486ca72becc03c90dc53db81087a04e683a11",
        "imageSize": [
          1255,
          375
        ]
      }
    },
    {
      "id": "ds_structured3d",
      "name": "Structured3D",
      "title": "Structured3D: A Large Photo-realistic Dataset for Structured 3D Modeling",
      "year": 2020,
      "cameras": [
        "panoramic",
        "perspective"
      ],
      "tasks": [
        "depth"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "synthetic",
      "sensors": [
        "Photorealistic renderer"
      ],
      "sensorLabels": {
        "en": [
          "Photorealistic renderer"
        ],
        "zh": [
          "照片级真实渲染器"
        ]
      },
      "groundTruth": [
        "Rendered depth",
        "Layout and semantics",
        "Camera metadata"
      ],
      "groundTruthLabels": {
        "en": [
          "Rendered depth",
          "Layout and semantics",
          "Camera metadata"
        ],
        "zh": [
          "渲染深度",
          "布局与语义",
          "相机元数据"
        ]
      },
      "access": "request",
      "homepageUrl": "https://structured3d-dataset.org/",
      "paperUrl": "https://arxiv.org/abs/1908.00222",
      "downloadUrl": "https://structured3d-dataset.org/#download",
      "license": {
        "en": "Structured3D Terms of Use and agreement form; code MIT is separate.",
        "zh": "需遵守 Structured3D 数据条款并填写协议表；代码 MIT 与数据许可分开。"
      },
      "summary": "合成房屋设计提供全景和透视深度，可控制照明、家具，并包含丰富结构标注。",
      "details": {
        "en": {
          "Projection and inputs": "Separate panorama and perspective folders contain RGB, depth, normals, albedo and semantic labels. Panorama cameras are gravity-aligned.",
          "Depth and validity": "Unsigned 16-bit PNG in millimeters; 1000 = 1 m; zero invalid. The format page does not explicitly settle range versus Z for every projection.",
          "Ground truth": "Dense labels are rendered from designed geometry, not measured by a physical depth sensor; junction/line/plane relations and layouts are provided.",
          "Calibration": "Panorama camera_xyz uses millimeters, looks toward negative Y, with Z up. Perspective poses additionally include view/up and FOV.",
          "Evaluation": "Official scene IDs: 00000–02999 train, 03000–03249 validation, 03250–03499 test. Keep furniture/light variants together; use published invalid-case list."
        },
        "zh": {
          "投影与输入": "panorama 与 perspective 分目录存放 RGB、深度、法向、反照率和语义；全景相机与重力方向对齐。",
          "深度与有效性": "无符号 16 位 PNG，单位毫米；1000＝1 米，0 无效。格式页未明确解释所有投影的径向距离与 Z 区别。",
          "真值来源": "稠密标注由设计几何渲染，不是物理深度传感器实测；提供角点、线、平面关系与布局。",
          "标定": "全景 camera_xyz 使用毫米，朝向负 Y，Z 向上；透视位姿另含视线、上方向和 FOV。",
          "评测协议": "官方场景编号：00000–02999 训练，03000–03249 验证，03250–03499 测试。家具、照明变体不得跨集，使用官方无效样本列表。"
        }
      },
      "notes": {
        "en": [
          "A rendered metric label does not establish transfer to real panoramic cameras."
        ],
        "zh": [
          "具有公制渲染标签不代表能直接迁移到真实全景相机。"
        ]
      },
      "evidence": [
        {
          "url": "https://structured3d-dataset.org/",
          "title": "Official project"
        },
        {
          "url": "https://github.com/bertjiazheng/Structured3D",
          "title": "Official splits and errata"
        },
        {
          "url": "https://github.com/bertjiazheng/Structured3D/blob/master/data_organization.md",
          "title": "Official depth units and camera conventions"
        },
        {
          "url": "https://arxiv.org/abs/1908.00222",
          "title": "Official Structured3D preprint"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Synthetic house designs provide panoramic/perspective depth with controlled lighting and furnishing, plus rich structural annotations.",
        "zh": "合成房屋设计提供全景和透视深度，可控制照明、家具，并包含丰富结构标注。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "Separate panorama and perspective folders contain RGB, depth, normals, albedo and semantic labels. Panorama cameras are gravity-aligned.",
          "Depth and validity": "Unsigned 16-bit PNG in millimeters; 1000 = 1 m; zero invalid. The format page does not explicitly settle range versus Z for every projection.",
          "Ground truth": "Dense labels are rendered from designed geometry, not measured by a physical depth sensor; junction/line/plane relations and layouts are provided.",
          "Calibration": "Panorama camera_xyz uses millimeters, looks toward negative Y, with Z up. Perspective poses additionally include view/up and FOV.",
          "Evaluation": "Official scene IDs: 00000–02999 train, 03000–03249 validation, 03250–03499 test. Keep furniture/light variants together; use published invalid-case list."
        },
        "zh": {
          "投影与输入": "panorama 与 perspective 分目录存放 RGB、深度、法向、反照率和语义；全景相机与重力方向对齐。",
          "深度与有效性": "无符号 16 位 PNG，单位毫米；1000＝1 米，0 无效。格式页未明确解释所有投影的径向距离与 Z 区别。",
          "真值来源": "稠密标注由设计几何渲染，不是物理深度传感器实测；提供角点、线、平面关系与布局。",
          "标定": "全景 camera_xyz 使用毫米，朝向负 Y，Z 向上；透视位姿另含视线、上方向和 FOV。",
          "评测协议": "官方场景编号：00000–02999 训练，03000–03249 验证，03250–03499 测试。家具、照明变体不得跨集，使用官方无效样本列表。"
        }
      },
      "datasetNotes": {
        "en": [
          "A rendered metric label does not establish transfer to real panoramic cameras."
        ],
        "zh": [
          "具有公制渲染标签不代表能直接迁移到真实全景相机。"
        ]
      },
      "datasetLicense": {
        "en": "Structured3D Terms of Use and agreement form; code MIT is separate.",
        "zh": "需遵守 Structured3D 数据条款并填写协议表；代码 MIT 与数据许可分开。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "rendered",
          "availability": "released",
          "note": {
            "en": "Released synthetic ERP images are rendered from designed indoor geometry.",
            "zh": "已发布合成ERP图由设计的室内几何渲染。"
          },
          "evidence": [
            "https://structured3d-dataset.org/",
            "https://github.com/bertjiazheng/Structured3D",
            "https://github.com/bertjiazheng/Structured3D/blob/master/data_organization.md"
          ]
        },
        {
          "geometry": "perspective",
          "route": "rendered",
          "availability": "released",
          "note": {
            "en": "Separate perspective renders are released; they are not just virtual patches created inside a depth model.",
            "zh": "另发布独立透视渲染，并非深度模型内部生成的虚拟patch。"
          },
          "evidence": [
            "https://structured3d-dataset.org/",
            "https://github.com/bertjiazheng/Structured3D",
            "https://github.com/bertjiazheng/Structured3D/blob/master/data_organization.md"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Synthetic scenes provide rendered depth with camera metadata and geometric validity constraints.",
            "zh": "合成场景提供渲染深度、相机元数据及几何有效性约束。"
          }
        },
        "trajectory": {
          "status": "partial",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Camera positions and orientations accompany rendered views; the release is a scene/view benchmark rather than a continuous odometry sequence.",
            "zh": "渲染视图附有相机位置与方向；该发布以场景和视图为单位，并非连续里程计序列。"
          }
        },
        "evidence": [
          "https://structured3d-dataset.org/",
          "https://github.com/bertjiazheng/Structured3D",
          "https://github.com/bertjiazheng/Structured3D/blob/master/data_organization.md",
          "https://arxiv.org/abs/1908.00222"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "established",
        "rank": 4,
        "scope": {
          "zh": "合成室内几何",
          "en": "Synthetic indoor geometry"
        },
        "reason": {
          "zh": "提供结构化场景与多种几何标注，可建立可重复的室内对照。",
          "en": "Structured scenes and geometry annotations support reproducible indoor controls."
        },
        "evidence": [
          {
            "url": "https://structured3d-dataset.org/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_structured3d.webp",
        "thumbnail": "assets/datasets/ds_structured3d-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://structured3d-dataset.org/",
        "sourceTitle": "Structured3D official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "House designs, structure annotations and photorealistic indoor renders in the official Structured3D overview.",
          "zh": "官方 Structured3D 总览中的房屋设计、结构标注及照片级室内渲染。"
        },
        "attribution": {
          "en": "Source: Structured3D project authors, official dataset preview.",
          "zh": "来源：Structured3D 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: Structured3D project authors, official dataset preview.",
          "zh": "来源：Structured3D 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "f37b2ff6d1058185b67c574e19333d32f25a4726315ba760a5d38eba98abd099",
        "thumbnailSha256": "2966eb84d31466d529aafc8d89edc6e7e5c4b7f09db2c7dab6c16d224f855386",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://structured3d-dataset.org/static/img/teaser.png",
        "sourceSha256": "0ae1993ab87e345326425104ab313568901de922b0c68d0efb91e243ca8955f9",
        "selectionNotes": "Official project image converted to WebP and proportionally resized without changing its content."
      }
    },
    {
      "id": "ds_tartanair",
      "name": "TartanAir V2",
      "title": "TartanAir: A Dataset to Push the Limits of Visual SLAM",
      "year": 2020,
      "venue": "V2 dataset / toolkit; original paper: IROS 2020",
      "aliases": [
        "TartanAir",
        "TartanAir / V2",
        "TartanAir-V2",
        "TartanAir 2"
      ],
      "cameras": [
        "panoramic",
        "fisheye",
        "wide",
        "perspective",
        "multi"
      ],
      "tasks": [
        "depth",
        "slam"
      ],
      "environment": [
        "indoor",
        "outdoor"
      ],
      "reality": "synthetic",
      "sensors": [
        "Stereo cubeface RGB",
        "Rendered depth and semantics",
        "Pose-derived IMU",
        "Depth-derived LiDAR",
        "Simulated events (subset)"
      ],
      "sensorLabels": {
        "en": [
          "Stereo cubeface RGB",
          "Rendered depth and semantics",
          "Pose-derived IMU",
          "Depth-derived LiDAR",
          "Simulated events (subset)"
        ],
        "zh": [
          "双目六面 RGB",
          "渲染深度与语义",
          "由位姿合成的 IMU",
          "由深度合成的 LiDAR",
          "仿真事件（部分数据）"
        ]
      },
      "groundTruth": [
        "Simulation metric depth / resampled range",
        "Simulation camera poses",
        "Semantic labels"
      ],
      "groundTruthLabels": {
        "en": [
          "Simulation metric depth / resampled range",
          "Simulation camera poses",
          "Semantic labels"
        ],
        "zh": [
          "仿真米制深度／重采样径向距离",
          "仿真相机位姿",
          "语义标注"
        ]
      },
      "access": "open",
      "homepageUrl": "https://tartanair.org/",
      "paperUrl": "https://arxiv.org/abs/2003.14338",
      "downloadUrl": "https://tartanair.org/examples.html#download-example",
      "license": {
        "en": "V2 dataset: CC BY 4.0; tartanairpy toolkit: MIT. Attribute the data and state modifications; the software licence does not replace the data licence.",
        "zh": "V2 数据为 CC BY 4.0，tartanairpy 工具为 MIT。使用数据须署名并注明修改；软件许可不能替代数据许可。"
      },
      "summary": "用于深度与 SLAM 的合成双目、全景及鱼眼数据：同步六面视图可重采样 RGB／深度／语义，并提供米制位姿及派生 IMU、LiDAR。",
      "details": {
        "en": {
          "Version and year": "2020 and the linked paper refer to the original TartanAir publication, not a verified V2 release year. This record documents the current V2 dataset/toolkit; its separate release date was not established.",
          "Raw cameras and baseline": "Two simulated optical centres, 0.25 m apart; six 90° pinhole directions per centre cover a sphere. Each raw view is 640×640 at 10 Hz (f=320, principal point=(320,320)); the six directions do not create six stereo baselines.",
          "Panorama and fisheye": "Official download/API names include lcam/rcam_fish and lcam/rcam_equirect for RGB, depth and semantics. These are resampled pinhole data, not independently captured fisheye/ERP sensors. Inspect actual availability for the chosen environment and trajectory.",
          "Custom camera models": "ta.customize() supports pinhole, DoubleSphere, LinearSphere and Equirectangular at the reviewed tartanairpy commit 158a684; save raw_side, R_raw_new and model parameters. A custom 195° DoubleSphere example is not the default downloaded fisheye specification.",
          "Depth format and meaning": "Decode four-channel PNG bytes as little-endian float32 without integer scaling. Raw pinhole depth is Z; reviewed reader.read_dist() converts it to ray distance before ta.customize() resampling. That custom output is range, including custom pinhole output; do not apply the raw-Z conversion twice to ERP/fisheye files. Pin precomputed archives to their own generation convention.",
          "Valid depth": "Exclude invalid/nonpositive or nonfinite values, invalid camera rays and far-sky returns; the official modality documentation warns that sky depths can be very large. Publish the task-specific maximum range and mask instead of assuming a universal valid cutoff.",
          "Poses and calibration": "Pose rows are tx ty tz qx qy qz qw, describing camera-to-world position/orientation with NED conventions (forward, right, down). Keep metric translation, per-view rotations and stereo extrinsics. Customizer rotates quaternion orientation when R_raw_new changes; transformed views are not new physical trajectories.",
          "Timing and derived sensors": "Raw RGB/depth are aligned and synchronized. IMU is synthesized by differentiating interpolated poses, with configurable rate/noise; LiDAR is sampled from depth. Events use separately recollected 1000 Hz RGB and may differ in dynamic scenes. These are simulated signals, not measured sensor ground truth.",
          "Flow and access": "Use pip install tartanair and ta.download() to select environments, easy/hard trajectories, cameras and modalities. Current documentation moves flow labels to local generation; do not infer every modality is precomputed from an older all-modality example.",
          "Evaluation and split": "Report the exact environments, trajectories, camera sampler and depth masks. Keep all resampled views of one trajectory in the same split; easy/hard folders alone are not an independent scene split. For ATE/RPE, state alignment and whether scale correction was enabled; synthetic accuracy does not establish real-camera robustness."
        },
        "zh": {
          "版本与年份": "2020 与论文链接对应原始 TartanAir 论文，不能视为已核实的 V2 发布年份。本条整理当前 V2 数据与工具，尚未确证其单独发布日期。",
          "原始相机与基线": "两个相距 0.25 m 的仿真光心，每个光心有六个朝向的 90° 透视图以覆盖球面。原图为 640×640、10 Hz，焦距 320、主点 (320,320)；六个朝向不是六组独立双目基线。",
          "全景与鱼眼": "官方下载/API 为 RGB、深度和语义列出 lcam/rcam_fish 与 lcam/rcam_equirect。它们由透视数据重采样，不是独立采集的鱼眼／ERP 传感器；应按目标环境和轨迹核对实际可用项。",
          "自定义相机模型": "核验的 tartanairpy 提交 158a684 中，ta.customize() 支持 pinhole、DoubleSphere、LinearSphere 与 Equirectangular；需保存 raw_side、R_raw_new 和模型参数。示例的 195° DoubleSphere 不能当作默认下载鱼眼的规格。",
          "深度格式与语义": "四通道 PNG 的字节应按小端 float32 解码，不作整数缩放。原始透视深度为 Z；核验的 reader.read_dist() 先转为射线距离，再由 ta.customize() 重采样。因此该入口的自定义输出为 range，连自定义透视输出也如此；ERP／鱼眼文件不能重复做原始 Z 转换。预计算压缩包仍须核对其生成约定。",
          "深度有效性": "排除非正数、非有限值、模型无效射线与远处天空；官方说明天空可能返回极大深度。应记录任务使用的距离上限和掩码，不假设统一有效阈值。",
          "位姿与标定": "位姿每行为 tx ty tz qx qy qz qw，表示相机到世界的位置／朝向，采用 NED 约定（前、右、下）。保留米制平移、逐视图旋转与双目外参。改变 R_raw_new 后 customizer 会同步旋转四元数；重采样视图不是新增物理轨迹。",
          "时序与派生传感器": "原始 RGB／深度对齐且同步。IMU 对插值位姿求导合成，频率和噪声可配；LiDAR 由深度采样。事件以另行重采的 1000 Hz RGB 生成，在动态场景可能与其他模态不一致。这些均为仿真信号，不能表述成实测传感器真值。",
          "光流与获取": "通过 pip install tartanair 与 ta.download() 选择环境、easy/hard 轨迹、相机和模态。当前文档将光流转为本地生成，不能从旧的全模态示例推断都可直接下载。",
          "评测与划分": "注明具体环境、轨迹、相机采样器与深度掩码；同一轨迹的重采样视图必须归入同一划分，easy/hard 目录本身不是独立场景划分。ATE/RPE 需注明对齐与是否校正尺度；仿真精度不等于对真实相机的鲁棒性。"
        }
      },
      "notes": {
        "en": [
          "The linked IROS 2020 paper documents the original dataset. Version-specific claims above are checked against the V2 documentation and toolkit."
        ],
        "zh": [
          "链接的 IROS 2020 论文描述原始数据集；上述 V2 特性以当前 V2 文档和工具实现为证据。"
        ]
      },
      "evidence": [
        {
          "url": "https://tartanair.org/",
          "title": "Official V2 identity, camera customization and CC BY 4.0 data / MIT toolkit licence"
        },
        {
          "url": "https://tartanair.org/modalities.html",
          "title": "V2 raw stereo geometry, depth packing, resampled modalities and derived sensors"
        },
        {
          "url": "https://tartanair.org/examples.html",
          "title": "Official V2 downloads, fish/equirect camera names and customization examples"
        },
        {
          "url": "https://github.com/castacks/tartanairpy/blob/158a6844d782942110967325ca3082f50ab2bfc7/tartanair/reader.py#L112-L153",
          "title": "Pinned official implementation: raw Z-depth to radial distance"
        },
        {
          "url": "https://github.com/castacks/tartanairpy/blob/158a6844d782942110967325ca3082f50ab2bfc7/tartanair/customizer.py#L126-L130",
          "title": "Pinned official customizer reads distance before camera resampling"
        },
        {
          "url": "https://github.com/castacks/tartanairpy/blob/158a6844d782942110967325ca3082f50ab2bfc7/tartanair/customizer.py#L232-L259",
          "title": "Pinned official customizer rotates camera-to-world quaternion for the new camera"
        },
        {
          "url": "https://github.com/castacks/tartanair_tools/blob/master/data_type.md#pose-file",
          "title": "Original pose row format retained by V2 documentation; not V2 camera intrinsics"
        },
        {
          "url": "https://theairlab.org/tartanair-dataset/",
          "title": "Original TartanAir IROS 2020 citation; separate from current V2 metadata"
        }
      ],
      "checked": "2026-10-19",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Synthetic stereo, panoramic and fisheye data for depth and SLAM: synchronized cubefaces, resampled RGB/depth/semantics, metric poses and derived inertial/LiDAR signals.",
        "zh": "用于深度与 SLAM 的合成双目、全景及鱼眼数据：同步六面视图可重采样 RGB／深度／语义，并提供米制位姿及派生 IMU、LiDAR。"
      },
      "datasetDetails": {
        "en": {
          "Version and year": "2020 and the linked paper refer to the original TartanAir publication, not a verified V2 release year. This record documents the current V2 dataset/toolkit; its separate release date was not established.",
          "Raw cameras and baseline": "Two simulated optical centres, 0.25 m apart; six 90° pinhole directions per centre cover a sphere. Each raw view is 640×640 at 10 Hz (f=320, principal point=(320,320)); the six directions do not create six stereo baselines.",
          "Panorama and fisheye": "Official download/API names include lcam/rcam_fish and lcam/rcam_equirect for RGB, depth and semantics. These are resampled pinhole data, not independently captured fisheye/ERP sensors. Inspect actual availability for the chosen environment and trajectory.",
          "Custom camera models": "ta.customize() supports pinhole, DoubleSphere, LinearSphere and Equirectangular at the reviewed tartanairpy commit 158a684; save raw_side, R_raw_new and model parameters. A custom 195° DoubleSphere example is not the default downloaded fisheye specification.",
          "Depth format and meaning": "Decode four-channel PNG bytes as little-endian float32 without integer scaling. Raw pinhole depth is Z; reviewed reader.read_dist() converts it to ray distance before ta.customize() resampling. That custom output is range, including custom pinhole output; do not apply the raw-Z conversion twice to ERP/fisheye files. Pin precomputed archives to their own generation convention.",
          "Valid depth": "Exclude invalid/nonpositive or nonfinite values, invalid camera rays and far-sky returns; the official modality documentation warns that sky depths can be very large. Publish the task-specific maximum range and mask instead of assuming a universal valid cutoff.",
          "Poses and calibration": "Pose rows are tx ty tz qx qy qz qw, describing camera-to-world position/orientation with NED conventions (forward, right, down). Keep metric translation, per-view rotations and stereo extrinsics. Customizer rotates quaternion orientation when R_raw_new changes; transformed views are not new physical trajectories.",
          "Timing and derived sensors": "Raw RGB/depth are aligned and synchronized. IMU is synthesized by differentiating interpolated poses, with configurable rate/noise; LiDAR is sampled from depth. Events use separately recollected 1000 Hz RGB and may differ in dynamic scenes. These are simulated signals, not measured sensor ground truth.",
          "Flow and access": "Use pip install tartanair and ta.download() to select environments, easy/hard trajectories, cameras and modalities. Current documentation moves flow labels to local generation; do not infer every modality is precomputed from an older all-modality example.",
          "Evaluation and split": "Report the exact environments, trajectories, camera sampler and depth masks. Keep all resampled views of one trajectory in the same split; easy/hard folders alone are not an independent scene split. For ATE/RPE, state alignment and whether scale correction was enabled; synthetic accuracy does not establish real-camera robustness."
        },
        "zh": {
          "版本与年份": "2020 与论文链接对应原始 TartanAir 论文，不能视为已核实的 V2 发布年份。本条整理当前 V2 数据与工具，尚未确证其单独发布日期。",
          "原始相机与基线": "两个相距 0.25 m 的仿真光心，每个光心有六个朝向的 90° 透视图以覆盖球面。原图为 640×640、10 Hz，焦距 320、主点 (320,320)；六个朝向不是六组独立双目基线。",
          "全景与鱼眼": "官方下载/API 为 RGB、深度和语义列出 lcam/rcam_fish 与 lcam/rcam_equirect。它们由透视数据重采样，不是独立采集的鱼眼／ERP 传感器；应按目标环境和轨迹核对实际可用项。",
          "自定义相机模型": "核验的 tartanairpy 提交 158a684 中，ta.customize() 支持 pinhole、DoubleSphere、LinearSphere 与 Equirectangular；需保存 raw_side、R_raw_new 和模型参数。示例的 195° DoubleSphere 不能当作默认下载鱼眼的规格。",
          "深度格式与语义": "四通道 PNG 的字节应按小端 float32 解码，不作整数缩放。原始透视深度为 Z；核验的 reader.read_dist() 先转为射线距离，再由 ta.customize() 重采样。因此该入口的自定义输出为 range，连自定义透视输出也如此；ERP／鱼眼文件不能重复做原始 Z 转换。预计算压缩包仍须核对其生成约定。",
          "深度有效性": "排除非正数、非有限值、模型无效射线与远处天空；官方说明天空可能返回极大深度。应记录任务使用的距离上限和掩码，不假设统一有效阈值。",
          "位姿与标定": "位姿每行为 tx ty tz qx qy qz qw，表示相机到世界的位置／朝向，采用 NED 约定（前、右、下）。保留米制平移、逐视图旋转与双目外参。改变 R_raw_new 后 customizer 会同步旋转四元数；重采样视图不是新增物理轨迹。",
          "时序与派生传感器": "原始 RGB／深度对齐且同步。IMU 对插值位姿求导合成，频率和噪声可配；LiDAR 由深度采样。事件以另行重采的 1000 Hz RGB 生成，在动态场景可能与其他模态不一致。这些均为仿真信号，不能表述成实测传感器真值。",
          "光流与获取": "通过 pip install tartanair 与 ta.download() 选择环境、easy/hard 轨迹、相机和模态。当前文档将光流转为本地生成，不能从旧的全模态示例推断都可直接下载。",
          "评测与划分": "注明具体环境、轨迹、相机采样器与深度掩码；同一轨迹的重采样视图必须归入同一划分，easy/hard 目录本身不是独立场景划分。ATE/RPE 需注明对齐与是否校正尺度；仿真精度不等于对真实相机的鲁棒性。"
        }
      },
      "datasetNotes": {
        "en": [
          "The linked IROS 2020 paper documents the original dataset. Version-specific claims above are checked against the V2 documentation and toolkit."
        ],
        "zh": [
          "链接的 IROS 2020 论文描述原始数据集；上述 V2 特性以当前 V2 文档和工具实现为证据。"
        ]
      },
      "datasetLicense": {
        "en": "V2 dataset: CC BY 4.0; tartanairpy toolkit: MIT. Attribute the data and state modifications; the software licence does not replace the data licence.",
        "zh": "V2 数据为 CC BY 4.0，tartanairpy 工具为 MIT。使用数据须署名并注明修改；软件许可不能替代数据许可。"
      },
      "sourceChecked": "2026-10-19",
      "authors": "Unknown",
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "reprojected",
          "availability": "released",
          "note": {
            "en": "Official equirect products/custom ERP outputs are resampled from pinhole cube faces; record the archive/generation convention.",
            "zh": "官方equirect产品及自定义ERP输出由针孔立方体面重采样，需固定压缩包与生成约定。"
          },
          "evidence": [
            "https://tartanair.org/",
            "https://tartanair.org/modalities.html",
            "https://tartanair.org/examples.html"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "reprojected",
          "availability": "released",
          "note": {
            "en": "Official fish products/custom cameras are resampled from pinhole cube faces; they are not independent physical fisheye captures.",
            "zh": "官方fish产品及自定义相机由针孔立方体面重采样，并非独立物理鱼眼采集。"
          },
          "evidence": [
            "https://tartanair.org/",
            "https://tartanair.org/modalities.html",
            "https://tartanair.org/examples.html"
          ]
        },
        {
          "geometry": "perspective",
          "route": "rendered",
          "availability": "released",
          "note": {
            "en": "Raw data are rendered pinhole cube faces at two stereo centers.",
            "zh": "原始数据是在两个立体中心渲染的针孔立方体面。"
          },
          "evidence": [
            "https://tartanair.org/",
            "https://tartanair.org/modalities.html",
            "https://tartanair.org/examples.html"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Simulator depth and resampled range are supplied; raw pinhole Z and customized ray-distance products must be distinguished.",
            "zh": "提供仿真深度与重采样距离；须区分原始针孔 Z 深度和自定义射线距离产品。"
          }
        },
        "trajectory": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Simulator camera-to-world pose trajectories are available; transformed camera views share the same underlying motion.",
            "zh": "提供仿真相机到世界位姿轨迹；变换后的相机视图共享底层运动。"
          }
        },
        "evidence": [
          "https://tartanair.org/",
          "https://tartanair.org/modalities.html",
          "https://tartanair.org/examples.html",
          "https://github.com/castacks/tartanairpy/blob/158a6844d782942110967325ca3082f50ab2bfc7/tartanair/reader.py#L112-L153",
          "https://github.com/castacks/tartanairpy/blob/158a6844d782942110967325ca3082f50ab2bfc7/tartanair/customizer.py#L126-L130",
          "https://github.com/castacks/tartanairpy/blob/158a6844d782942110967325ca3082f50ab2bfc7/tartanair/customizer.py#L232-L259",
          "https://github.com/castacks/tartanair_tools/blob/master/data_type.md#pose-file",
          "https://theairlab.org/tartanair-dataset/"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 6,
        "scope": {
          "zh": "合成深度与 VO",
          "en": "Synthetic depth / VO"
        },
        "reason": {
          "zh": "延续成熟的 TartanAir 数据生态；V2 与原始版本的相机和格式须分别核对。",
          "en": "Builds on the TartanAir ecosystem; verify V2 geometry and formats separately from V1."
        },
        "evidence": [
          {
            "url": "https://tartanair.org/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_tartanair.webp",
        "thumbnail": "assets/datasets/ds_tartanair-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://tartanair.org/modalities.html",
        "sourceUrl": "https://tartanair.org/_images/cameras2.png",
        "paperUrl": "https://arxiv.org/abs/2003.14338",
        "sourceTitle": "TartanAir V2 official dataset preview",
        "caption": {
          "en": "V2 camera layout, six-face source imagery and derived ERP/fisheye projections.",
          "zh": "V2 相机布局、六面源图像及由其重采样的 ERP／鱼眼表示。"
        },
        "credit": {
          "en": "Source: TartanAir V2 authors, official project preview.",
          "zh": "来源：TartanAir V2 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: TartanAir V2 authors, official project preview.",
          "zh": "来源：TartanAir V2 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          1100,
          496
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "dd72d274cdc91536620446349f788e6c356d24c4adae9075ceb029030c6d0528"
      }
    },
    {
      "id": "ds_diode",
      "name": "DIODE",
      "title": "DIODE: A Dense Indoor and Outdoor DEpth Dataset",
      "year": 2019,
      "cameras": [
        "perspective"
      ],
      "tasks": [
        "depth"
      ],
      "environment": [
        "indoor",
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "FARO Focus S350",
        "Coaxial RGB camera"
      ],
      "sensorLabels": {
        "en": [
          "FARO Focus S350",
          "Coaxial RGB camera"
        ],
        "zh": [
          "FARO Focus S350",
          "同轴 RGB 相机"
        ]
      },
      "groundTruth": [
        "Laser-derived depth",
        "Validity masks",
        "Normals"
      ],
      "groundTruthLabels": {
        "en": [
          "Laser-derived depth",
          "Validity masks",
          "Normals"
        ],
        "zh": [
          "激光测量深度",
          "有效性掩码",
          "法向"
        ]
      },
      "access": "open",
      "homepageUrl": "https://diode-dataset.org/",
      "paperUrl": "https://arxiv.org/abs/1908.00463",
      "downloadUrl": "https://diode-dataset.org/",
      "license": {
        "en": "MIT for dataset and code according to the official page.",
        "zh": "官方页面注明数据与代码均为 MIT。"
      },
      "summary": "覆盖室内外的稠密激光深度，以校正透视裁剪图发布，并非整幅全景。",
      "details": {
        "en": {
          "Projection and inputs": "1024×768 RGB crops, 60° horizontal ×45° vertical FOV, extracted from scanner panoramas. Full scanner capture does not imply a public ERP benchmark.",
          "Depth and validity": "NumPy depth and binary validity arrays; mask 1 means valid return. Paper derives samples along scanner rays; range/Z should be checked before reprojection.",
          "Measurement and timing": "FARO laser measurements provide depth; RGB is collected after the scan, so moving objects can disagree despite manual curation.",
          "Calibration and annotations": "Official devkit supplies camera intrinsics and normal/metric utilities. Normals are derived from neighboring 3D samples.",
          "Evaluation": "Public train/validation depth and normals are documented; do not treat validation as unseen test after tuning. Keep crops from the same scan together."
        },
        "zh": {
          "投影与输入": "从扫描器全景提取 1024×768 RGB 裁剪图，水平 60°、垂直 45°；扫描过程为全景不代表公开版本是 ERP 基准。",
          "深度与有效性": "NumPy 深度与二值有效掩码，1 表示有效回波。论文沿扫描射线生成样本，重投影前仍需核对径向距离与 Z 约定。",
          "测量与时间": "FARO 激光测量提供深度；RGB 在扫描后采集，尽管经过人工筛选，动态物体仍可能造成不一致。",
          "标定与标注": "官方工具提供相机内参、法向及评测工具，法向由邻域三维采样估计。",
          "评测协议": "官方明确发布训练、验证深度和法向；调参后不能把验证集称为未见测试集，同一扫描的裁剪图应保持同组。"
        }
      },
      "notes": {
        "en": [
          "Laser maximum range specifications are not a guarantee that every image pixel has valid depth."
        ],
        "zh": [
          "激光器最大量程指标不保证每个图像像素均有有效深度。"
        ]
      },
      "evidence": [
        {
          "url": "https://diode-dataset.org/",
          "title": "Official downloads, masks, resolution and MIT license"
        },
        {
          "url": "https://github.com/diode-dataset/diode-devkit",
          "title": "Official intrinsics and dataloader"
        },
        {
          "url": "https://arxiv.org/html/1908.00463v1",
          "title": "Official paper: perspective extraction and scan timing"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Dense laser-derived depth across indoor/outdoor scenes, released as rectified perspective crops rather than full panoramas.",
        "zh": "覆盖室内外的稠密激光深度，以校正透视裁剪图发布，并非整幅全景。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "1024×768 RGB crops, 60° horizontal ×45° vertical FOV, extracted from scanner panoramas. Full scanner capture does not imply a public ERP benchmark.",
          "Depth and validity": "NumPy depth and binary validity arrays; mask 1 means valid return. Paper derives samples along scanner rays; range/Z should be checked before reprojection.",
          "Measurement and timing": "FARO laser measurements provide depth; RGB is collected after the scan, so moving objects can disagree despite manual curation.",
          "Calibration and annotations": "Official devkit supplies camera intrinsics and normal/metric utilities. Normals are derived from neighboring 3D samples.",
          "Evaluation": "Public train/validation depth and normals are documented; do not treat validation as unseen test after tuning. Keep crops from the same scan together."
        },
        "zh": {
          "投影与输入": "从扫描器全景提取 1024×768 RGB 裁剪图，水平 60°、垂直 45°；扫描过程为全景不代表公开版本是 ERP 基准。",
          "深度与有效性": "NumPy 深度与二值有效掩码，1 表示有效回波。论文沿扫描射线生成样本，重投影前仍需核对径向距离与 Z 约定。",
          "测量与时间": "FARO 激光测量提供深度；RGB 在扫描后采集，尽管经过人工筛选，动态物体仍可能造成不一致。",
          "标定与标注": "官方工具提供相机内参、法向及评测工具，法向由邻域三维采样估计。",
          "评测协议": "官方明确发布训练、验证深度和法向；调参后不能把验证集称为未见测试集，同一扫描的裁剪图应保持同组。"
        }
      },
      "datasetNotes": {
        "en": [
          "Laser maximum range specifications are not a guarantee that every image pixel has valid depth."
        ],
        "zh": [
          "激光器最大量程指标不保证每个图像像素均有有效深度。"
        ]
      },
      "datasetLicense": {
        "en": "MIT for dataset and code according to the official page.",
        "zh": "官方页面注明数据与代码均为 MIT。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://diode-dataset.org/",
            "https://github.com/diode-dataset/diode-devkit",
            "https://arxiv.org/html/1908.00463v1"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Laser-derived image depth and validity masks are released; valid return masks remain necessary.",
            "zh": "发布激光测量生成的图像深度及有效掩码，评测仍须使用有效回波掩码。"
          }
        },
        "trajectory": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "The release is a static RGB/depth benchmark with scanner-derived views, not a continuous trajectory benchmark.",
            "zh": "该发布是由扫描仪视图构成的静态 RGB/深度基准，并非连续轨迹基准。"
          }
        },
        "evidence": [
          "https://diode-dataset.org/",
          "https://github.com/diode-dataset/diode-devkit",
          "https://arxiv.org/html/1908.00463v1"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 5,
        "scope": {
          "zh": "跨室内外深度",
          "en": "Indoor / outdoor depth"
        },
        "reason": {
          "zh": "适合检验跨环境深度泛化，须保留扫描有效掩码。",
          "en": "Useful for cross-environment depth evaluation with scan-validity masks."
        },
        "evidence": [
          {
            "url": "https://diode-dataset.org/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_diode.webp",
        "thumbnail": "assets/datasets/ds_diode-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://diode-dataset.org/",
        "sourceTitle": "DIODE official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "An indoor RGB image and its corresponding depth visualization from the official DIODE gallery.",
          "zh": "官方 DIODE 图库中的一幅室内 RGB 及对应深度可视化。"
        },
        "attribution": {
          "en": "Source: DIODE project authors, official dataset preview.",
          "zh": "来源：DIODE 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: DIODE project authors, official dataset preview.",
          "zh": "来源：DIODE 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "8765002cce14bbca84143eb22565fe56463e33f261552d5b5abca579f8bd2696",
        "thumbnailSha256": "8765002cce14bbca84143eb22565fe56463e33f261552d5b5abca579f8bd2696",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://diode-dataset.org/images/thumbnails/thumbnail_00004_00034_indoors_150_000.jpg",
        "sourceSha256": "4dfce1e4c9b83910a9b90818b037b9733bae1c302d27ab260ceb9fdf5aca6883",
        "selectionNotes": "Official gallery RGB thumbnail and matching depth thumbnail placed side by side, RGB left and depth right; no image synthesis or depth estimation applied.",
        "additionalSources": [
          {
            "url": "https://diode-dataset.org/images/thumbnails/thumbnail_00004_00034_indoors_150_000_depth.jpg",
            "sha256": "1fcf70c650195d968f90d6be6dcd396f552577c15cfdfae1263e59a71f929be1"
          }
        ]
      }
    },
    {
      "id": "ds_replica",
      "name": "Replica",
      "title": "The Replica Dataset: A Digital Replica of Indoor Spaces",
      "year": 2019,
      "cameras": [
        "perspective"
      ],
      "tasks": [
        "depth",
        "slam"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "mixed",
      "sensors": [
        "Real scanned scene assets",
        "Replica renderer"
      ],
      "sensorLabels": {
        "en": [
          "Real scanned scene assets",
          "Replica renderer"
        ],
        "zh": [
          "真实扫描场景资产",
          "Replica 渲染器"
        ]
      },
      "groundTruth": [
        "Meshes",
        "Rendered RGB-D",
        "Synthetic camera poses"
      ],
      "groundTruthLabels": {
        "en": [
          "Meshes",
          "Rendered RGB-D",
          "Synthetic camera poses"
        ],
        "zh": [
          "网格",
          "渲染 RGB-D",
          "合成相机位姿"
        ]
      },
      "access": "open",
      "homepageUrl": "https://github.com/facebookresearch/Replica-Dataset",
      "paperUrl": "https://arxiv.org/abs/1906.05797",
      "downloadUrl": "https://github.com/facebookresearch/Replica-Dataset#download-on-mac-os-and-linux",
      "license": {
        "en": "Replica Dataset Research Terms: non-commercial / not-for-profit research or educational purposes.",
        "zh": "Replica 数据研究条款：用于非商业、非营利研究或教育目的。"
      },
      "summary": "高质量真实室内重建作为仿真资产；常见 RGB-D SLAM 轨迹是另外渲染的派生产品。",
      "details": {
        "en": {
          "Projection and inputs": "Official release centers on textured meshes and a renderer, not one fixed RGB-D sequence. Perspective frame resolution/intrinsics depend on the chosen renderer.",
          "Depth and validity": "Depth is rendered from reconstructed geometry. Serialization scale, range/Z and invalid pixels must be checked for the specific trajectory export.",
          "Ground truth": "Dense meshes, semantic/instance and plane annotations; glass/mirror metadata. Rendered poses are simulator references, not physical tracking measurements.",
          "Calibration and timing": "Trajectory and camera calibration are renderer inputs. No physical IMU synchronization guarantee follows from the asset release.",
          "Evaluation": "Name the exact sequence producer, scene list, coordinate convention and depth scale. Avoid training on the same underlying room through another derivative."
        },
        "zh": {
          "投影与输入": "官方以纹理网格和渲染器为主，不是固定的一套 RGB-D 序列；透视帧分辨率、内参由渲染配置决定。",
          "深度与有效性": "深度来自重建几何渲染。序列导出的数值缩放、径向距离或 Z、无效像素规则必须逐版本核对。",
          "真值来源": "提供稠密网格、语义实例、平面及玻璃镜面信息；渲染位姿是仿真参考，不是物理跟踪测量。",
          "标定与时间": "轨迹和相机标定由渲染者设置；资产发布本身不包含物理 IMU 同步保证。",
          "评测协议": "注明序列生成者、场景清单、坐标约定和深度缩放；避免通过其他派生集训练到相同房间。"
        }
      },
      "notes": {
        "en": [
          "Replica assets, Replica360 and the popular neural-SLAM Replica trajectories are distinct releases."
        ],
        "zh": [
          "Replica 资产、Replica360 和常用神经 SLAM 的 Replica 轨迹是不同发布。"
        ]
      },
      "evidence": [
        {
          "url": "https://github.com/facebookresearch/Replica-Dataset",
          "title": "Official assets, renderer and download"
        },
        {
          "url": "https://github.com/facebookresearch/Replica-Dataset/blob/main/LICENSE",
          "title": "Replica research terms"
        },
        {
          "url": "https://arxiv.org/abs/1906.05797",
          "title": "Official Replica report"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "High-quality real indoor reconstructions serve as simulation assets; common RGB-D SLAM trajectories are separately rendered derivatives.",
        "zh": "高质量真实室内重建作为仿真资产；常见 RGB-D SLAM 轨迹是另外渲染的派生产品。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "Official release centers on textured meshes and a renderer, not one fixed RGB-D sequence. Perspective frame resolution/intrinsics depend on the chosen renderer.",
          "Depth and validity": "Depth is rendered from reconstructed geometry. Serialization scale, range/Z and invalid pixels must be checked for the specific trajectory export.",
          "Ground truth": "Dense meshes, semantic/instance and plane annotations; glass/mirror metadata. Rendered poses are simulator references, not physical tracking measurements.",
          "Calibration and timing": "Trajectory and camera calibration are renderer inputs. No physical IMU synchronization guarantee follows from the asset release.",
          "Evaluation": "Name the exact sequence producer, scene list, coordinate convention and depth scale. Avoid training on the same underlying room through another derivative."
        },
        "zh": {
          "投影与输入": "官方以纹理网格和渲染器为主，不是固定的一套 RGB-D 序列；透视帧分辨率、内参由渲染配置决定。",
          "深度与有效性": "深度来自重建几何渲染。序列导出的数值缩放、径向距离或 Z、无效像素规则必须逐版本核对。",
          "真值来源": "提供稠密网格、语义实例、平面及玻璃镜面信息；渲染位姿是仿真参考，不是物理跟踪测量。",
          "标定与时间": "轨迹和相机标定由渲染者设置；资产发布本身不包含物理 IMU 同步保证。",
          "评测协议": "注明序列生成者、场景清单、坐标约定和深度缩放；避免通过其他派生集训练到相同房间。"
        }
      },
      "datasetNotes": {
        "en": [
          "Replica assets, Replica360 and the popular neural-SLAM Replica trajectories are distinct releases."
        ],
        "zh": [
          "Replica 资产、Replica360 和常用神经 SLAM 的 Replica 轨迹是不同发布。"
        ]
      },
      "datasetLicense": {
        "en": "Replica Dataset Research Terms: non-commercial / not-for-profit research or educational purposes.",
        "zh": "Replica 数据研究条款：用于非商业、非营利研究或教育目的。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "rendered",
          "availability": "derivable",
          "note": {
            "en": "The source asset is a reconstructed scene mesh; perspective RGB-D sequences depend on a chosen renderer/export protocol.",
            "zh": "源资产是重建场景网格；透视RGB-D序列依赖所选渲染和导出协议。"
          },
          "evidence": [
            "https://github.com/facebookresearch/Replica-Dataset",
            "https://github.com/facebookresearch/Replica-Dataset/blob/main/LICENSE",
            "https://arxiv.org/abs/1906.05797"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Depth can be rendered from the released reconstructed meshes. The chosen renderer/export determines scale, clipping and validity.",
            "zh": "可由发布的重建网格渲染深度；尺度、截断及有效性由所用渲染器和导出协议决定。"
          }
        },
        "trajectory": {
          "status": "partial",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Simulator camera poses are known for generated trajectories. The asset release does not prescribe one fixed trajectory set.",
            "zh": "生成轨迹的仿真相机位姿已知；原始资产发布不规定统一的固定轨迹集。"
          }
        },
        "evidence": [
          "https://github.com/facebookresearch/Replica-Dataset",
          "https://github.com/facebookresearch/Replica-Dataset/blob/main/LICENSE",
          "https://arxiv.org/abs/1906.05797"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "established",
        "rank": 11,
        "scope": {
          "zh": "室内渲染与建图",
          "en": "Indoor rendering / mapping"
        },
        "reason": {
          "zh": "高质量静态场景广泛支持可控渲染和 RGB-D 建图对照。",
          "en": "High-quality static scenes support controlled rendering and RGB-D mapping comparisons."
        },
        "evidence": [
          {
            "url": "https://github.com/facebookresearch/Replica-Dataset",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_replica.webp",
        "thumbnail": "assets/datasets/ds_replica-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://github.com/facebookresearch/Replica-Dataset",
        "sourceTitle": "Replica official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "Official Replica scene visualization showing textured geometry and semantic/instance annotations.",
          "zh": "官方 Replica 场景可视化：纹理几何及语义、实例标注。"
        },
        "attribution": {
          "en": "Source: Replica project authors, official dataset preview.",
          "zh": "来源：Replica 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: Replica project authors, official dataset preview.",
          "zh": "来源：Replica 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "76348b8bf7140ec669fa5300ce3c3553b20bf4ec17c11f8ac07313dbbcb9b92d",
        "thumbnailSha256": "a40b29fbf100594bd6101f5f78826a34364fa6abfe26d958b83dc93b31fa8d35",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://raw.githubusercontent.com/facebookresearch/Replica-Dataset/main/assets/ReplicaModalities.png",
        "sourceSha256": "00fddd82efb47e679eb39636585817a3331433169a09c47a9e7db0c031f7b51d",
        "selectionNotes": "Official project image converted to WebP and proportionally resized without changing its content."
      }
    },
    {
      "id": "ds_woodscape",
      "name": "WoodScape",
      "title": "WoodScape: A Multi-Task, Multi-Camera Fisheye Dataset for Autonomous Driving",
      "year": 2019,
      "cameras": [
        "fisheye",
        "wide",
        "multi"
      ],
      "tasks": [
        "depth"
      ],
      "environment": [
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "Four fisheye cameras",
        "Vehicle CAN"
      ],
      "sensorLabels": {
        "en": [
          "Four fisheye cameras",
          "Vehicle CAN"
        ],
        "zh": [
          "四路鱼眼相机",
          "车辆 CAN"
        ]
      },
      "groundTruth": [
        "Semantics and motion masks",
        "No released dense depth listed"
      ],
      "groundTruthLabels": {
        "en": [
          "Semantics and motion masks",
          "No released dense depth listed"
        ],
        "zh": [
          "语义与运动掩码",
          "未列出已发布稠密深度"
        ]
      },
      "access": "restricted",
      "homepageUrl": "https://github.com/valeoai/WoodScape",
      "paperUrl": "https://arxiv.org/abs/1905.01489",
      "downloadUrl": "https://github.com/valeoai/WoodScape#dataset-contents",
      "license": {
        "en": "Proprietary dataset agreement; repository MIT explicitly covers code only.",
        "zh": "数据适用专有协议；仓库 MIT 明确仅适用于代码。"
      },
      "summary": "真实环视鱼眼 RGB 与前一帧可支持自监督几何研究；发布说明未确立公开的稠密深度真值。",
      "details": {
        "en": {
          "Projection and inputs": "Front, rear, mirror-left and mirror-right fisheye cameras. RGB, previous images, per-image calibration and CAN information are listed.",
          "Depth availability": "Released content lists semantic/instance/motion labels and boxes, not dense depth maps. LiDAR/dGPS scenes remain marked coming soon in this README.",
          "Use in depth research": "Suitable as fisheye image-pair input for self-supervised objectives; do not report supervised metric-depth accuracy without a separate released GT source.",
          "Calibration and timing": "Calibration and vehicle information are provided, but do not assume previous frames form fully synchronized multi-camera SLAM sequences.",
          "Evaluation": "Respect held-out test samples and camera/sequence identities. State the actual available task labels, rather than planned paper modalities."
        },
        "zh": {
          "投影与输入": "包含前、后、左后视、右后视鱼眼相机；列出 RGB、前一帧、逐图标定及 CAN 信息。",
          "深度可用性": "已发布内容列有语义、实例、运动标签与框，未列稠密深度。此 README 的 LiDAR、dGPS 场景仍标为即将发布。",
          "深度研究用途": "可作为鱼眼图像对用于自监督目标；若无额外公开真值，不能报告有监督公制深度精度。",
          "标定与时间": "提供标定与车辆信息，但不能假定前一帧构成完全同步的多相机 SLAM 序列。",
          "评测协议": "遵守留出测试样本及相机、序列身份；注明实际可用标签，而不是论文计划提供的模态。"
        }
      },
      "notes": {
        "en": [
          "This is included as a fisheye depth-learning input source, explicitly not as a confirmed dense-depth GT benchmark."
        ],
        "zh": [
          "此条作为鱼眼深度学习输入来源收录，明确不作为已确认具备稠密深度真值的基准。"
        ]
      },
      "evidence": [
        {
          "url": "https://github.com/valeoai/WoodScape",
          "title": "Official released tasks, camera IDs, calibration and data license"
        },
        {
          "url": "https://arxiv.org/abs/1905.01489",
          "title": "Official WoodScape paper"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Real surround fisheye RGB and previous frames support self-supervised geometry research; public dense-depth GT is not established by the release README.",
        "zh": "真实环视鱼眼 RGB 与前一帧可支持自监督几何研究；发布说明未确立公开的稠密深度真值。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "Front, rear, mirror-left and mirror-right fisheye cameras. RGB, previous images, per-image calibration and CAN information are listed.",
          "Depth availability": "Released content lists semantic/instance/motion labels and boxes, not dense depth maps. LiDAR/dGPS scenes remain marked coming soon in this README.",
          "Use in depth research": "Suitable as fisheye image-pair input for self-supervised objectives; do not report supervised metric-depth accuracy without a separate released GT source.",
          "Calibration and timing": "Calibration and vehicle information are provided, but do not assume previous frames form fully synchronized multi-camera SLAM sequences.",
          "Evaluation": "Respect held-out test samples and camera/sequence identities. State the actual available task labels, rather than planned paper modalities."
        },
        "zh": {
          "投影与输入": "包含前、后、左后视、右后视鱼眼相机；列出 RGB、前一帧、逐图标定及 CAN 信息。",
          "深度可用性": "已发布内容列有语义、实例、运动标签与框，未列稠密深度。此 README 的 LiDAR、dGPS 场景仍标为即将发布。",
          "深度研究用途": "可作为鱼眼图像对用于自监督目标；若无额外公开真值，不能报告有监督公制深度精度。",
          "标定与时间": "提供标定与车辆信息，但不能假定前一帧构成完全同步的多相机 SLAM 序列。",
          "评测协议": "遵守留出测试样本及相机、序列身份；注明实际可用标签，而不是论文计划提供的模态。"
        }
      },
      "datasetNotes": {
        "en": [
          "This is included as a fisheye depth-learning input source, explicitly not as a confirmed dense-depth GT benchmark."
        ],
        "zh": [
          "此条作为鱼眼深度学习输入来源收录，明确不作为已确认具备稠密深度真值的基准。"
        ]
      },
      "datasetLicense": {
        "en": "Proprietary dataset agreement; repository MIT explicitly covers code only.",
        "zh": "数据适用专有协议；仓库 MIT 明确仅适用于代码。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://github.com/valeoai/WoodScape",
            "https://arxiv.org/abs/1905.01489"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "The current release inventory lists semantic/motion labels, not supervised image-depth targets; LiDAR/dGPS material remains planned.",
            "zh": "当前发布目录列出语义、运动等标签，未提供图像深度监督目标；LiDAR/dGPS 材料仍属计划内容。"
          }
        },
        "trajectory": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "The released previous images, calibration and CAN data do not include a verified independent trajectory ground-truth product.",
            "zh": "已发布的前帧、标定和 CAN 数据不包含经确认的独立轨迹真值产品。"
          }
        },
        "evidence": [
          "https://github.com/valeoai/WoodScape",
          "https://arxiv.org/abs/1905.01489"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "established",
        "rank": 12,
        "scope": {
          "zh": "真实鱼眼感知",
          "en": "Real fisheye perception"
        },
        "reason": {
          "zh": "专门面向车载鱼眼的多任务资源；各任务标注范围分别核对。",
          "en": "A dedicated automotive fisheye resource; verify annotations per task."
        },
        "evidence": [
          {
            "url": "https://github.com/valeoai/WoodScape",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_woodscape.webp",
        "thumbnail": "assets/datasets/ds_woodscape-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://github.com/valeoai/WoodScape",
        "sourceTitle": "WoodScape official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "Official WoodScape overview showing the surround fisheye camera views, LiDAR and semantic annotations.",
          "zh": "官方 WoodScape 总览：环车鱼眼视图、激光与语义标注。"
        },
        "attribution": {
          "en": "Source: WoodScape project authors, official dataset preview.",
          "zh": "来源：WoodScape 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: WoodScape project authors, official dataset preview.",
          "zh": "来源：WoodScape 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "1414e9c21af1ad5264bba15515253fab7135d4f47793672303552de848091a7e",
        "thumbnailSha256": "5362ea5495e093a69befe9419ec74eadd8fee38736868d82aa71eb3aeeb58c58",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://raw.githubusercontent.com/valeoai/WoodScape/master/teaser.png",
        "sourceSha256": "8c1660414553012a8ec5d37dca262939539b68ba772849a5b6e6327a29ca2c3e",
        "selectionNotes": "Official project image converted to WebP and proportionally resized without changing its content."
      }
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
      "environment": "CPU C++; Docker and ROS wrappers documented.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/abs/1910.01122",
            "https://stella-cv.readthedocs.io/en/latest/",
            "https://github.com/stella-cv/stella_vslam"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://arxiv.org/abs/1910.01122",
            "https://stella-cv.readthedocs.io/en/latest/",
            "https://github.com/stella-cv/stella_vslam"
          ]
        },
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "ERP/panoramic input is documented; internal virtual views do not add another input-camera category.",
            "zh": "文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。"
          },
          "evidence": [
            "https://arxiv.org/abs/1910.01122",
            "https://stella-cv.readthedocs.io/en/latest/",
            "https://github.com/stella-cv/stella_vslam"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/stella_vslam-thumb.webp",
        "image": "assets/papers/stella_vslam.webp",
        "paperUrl": "https://arxiv.org/pdf/1910.01122",
        "page": 3,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "其基础 OpenVSLAM 的跟踪、建图和全局优化模块。",
          "en": "Tracking, mapping and global optimization in the underlying OpenVSLAM system."
        },
        "credit": {
          "zh": "来源：论文作者，2019；2 号图截图。 图来自基础 OpenVSLAM 论文，不代表 stella_vslam 单独发表了论文。",
          "en": "Source: paper authors (2019), Figure 2 crop. Figure from the underlying OpenVSLAM paper; not a separate stella_vslam publication."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Figure 2: Main modules of OpenVSLAM: tracking, mapping, and global optimization modules.",
        "cropBox": [
          50,
          78,
          302,
          217
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "3656563d5fac79c32e25994420707191c29f582cec7af8e7155b1a16d5920239",
        "imageSize": [
          630,
          347
        ]
      }
    },
    {
      "id": "ds_3d60",
      "name": "3D60",
      "title": "OmniDepth / 3D60 spherical RGB-D benchmark",
      "year": 2018,
      "cameras": [
        "panoramic",
        "multi"
      ],
      "tasks": [
        "depth"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "mixed",
      "sensors": [
        "Mesh ray tracing"
      ],
      "sensorLabels": {
        "en": [
          "Mesh ray tracing"
        ],
        "zh": [
          "网格光线追踪"
        ]
      },
      "groundTruth": [
        "Rendered panoramic depth",
        "Normals",
        "Stereo viewpoints"
      ],
      "groundTruthLabels": {
        "en": [
          "Rendered panoramic depth",
          "Normals",
          "Stereo viewpoints"
        ],
        "zh": [
          "渲染全景深度",
          "法向",
          "立体视点"
        ]
      },
      "access": "request",
      "homepageUrl": "https://vcl3d.github.io/3D60/",
      "paperUrl": "https://arxiv.org/abs/1807.09620",
      "downloadUrl": "https://vcl3d.github.io/3D60/#download",
      "license": {
        "en": "Underlying source-dataset agreements plus access requests; available variants have different source assets.",
        "zh": "需遵守上游数据协议并申请访问；不同发布变体使用不同源资产。"
      },
      "summary": "从扫描及合成室内场景渲染球面全景与立体偏移视点；单目协议已由 Pano3D 更新。",
      "details": {
        "en": {
          "Projection and inputs": "Spherical/ERP RGB with center, right and up views. Real-only variant uses Matterport3D and Stanford2D3D; original also included SunCG.",
          "Depth and validity": "Floating-point single-channel EXR depth; infinity denotes holes. Normal invalids include zero/NaN. Verify meter/range conversion in the selected loader.",
          "Ground truth": "Depth/normal supervision comes from ray tracing geometry, not an independent full-sphere sensor capture.",
          "Calibration": "Stereo placements are controlled rendering offsets. Cite the particular center/right/up subset and baseline; physical timing/IMU is not supplied.",
          "Evaluation": "Use source-scene splits. Official notice flags a rendering lighting bias; Pano3D fixes it, but currently lacks 3D60 stereo renders."
        },
        "zh": {
          "投影与输入": "球面 ERP RGB，包含中心、右侧和上方视点。真实域版本用 Matterport3D 与 Stanford2D3D，早期版本还含 SunCG。",
          "深度与有效性": "单通道浮点 EXR 深度，以无穷值表示空洞；法向的无效值包括零和 NaN。米制、径向转换需核对所用加载器。",
          "真值来源": "深度、法向监督来自几何光线追踪，不是独立的整球传感器实测。",
          "标定": "立体布局是受控渲染偏移，需注明中心、右侧、上方子集与基线；不提供物理时间同步或 IMU。",
          "评测协议": "使用源场景划分。官方指出渲染照明偏差；Pano3D 修复该问题，但目前不提供 3D60 的立体渲染。"
        }
      },
      "notes": {
        "en": [
          "3D60 and Pano3D share source scenes and are not independent captures."
        ],
        "zh": [
          "3D60 与 Pano3D 共用源场景，不能作为独立采集数据。"
        ]
      },
      "evidence": [
        {
          "url": "https://vcl3d.github.io/3D60/",
          "title": "Official modalities, stereo views, splits and lighting-bias notice"
        },
        {
          "url": "https://arxiv.org/abs/1807.09620",
          "title": "OmniDepth paper"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Rendered spherical panoramas and stereo offsets derived from scanned/synthetic interiors; Pano3D supersedes its monocular protocol.",
        "zh": "从扫描及合成室内场景渲染球面全景与立体偏移视点；单目协议已由 Pano3D 更新。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "Spherical/ERP RGB with center, right and up views. Real-only variant uses Matterport3D and Stanford2D3D; original also included SunCG.",
          "Depth and validity": "Floating-point single-channel EXR depth; infinity denotes holes. Normal invalids include zero/NaN. Verify meter/range conversion in the selected loader.",
          "Ground truth": "Depth/normal supervision comes from ray tracing geometry, not an independent full-sphere sensor capture.",
          "Calibration": "Stereo placements are controlled rendering offsets. Cite the particular center/right/up subset and baseline; physical timing/IMU is not supplied.",
          "Evaluation": "Use source-scene splits. Official notice flags a rendering lighting bias; Pano3D fixes it, but currently lacks 3D60 stereo renders."
        },
        "zh": {
          "投影与输入": "球面 ERP RGB，包含中心、右侧和上方视点。真实域版本用 Matterport3D 与 Stanford2D3D，早期版本还含 SunCG。",
          "深度与有效性": "单通道浮点 EXR 深度，以无穷值表示空洞；法向的无效值包括零和 NaN。米制、径向转换需核对所用加载器。",
          "真值来源": "深度、法向监督来自几何光线追踪，不是独立的整球传感器实测。",
          "标定": "立体布局是受控渲染偏移，需注明中心、右侧、上方子集与基线；不提供物理时间同步或 IMU。",
          "评测协议": "使用源场景划分。官方指出渲染照明偏差；Pano3D 修复该问题，但目前不提供 3D60 的立体渲染。"
        }
      },
      "datasetNotes": {
        "en": [
          "3D60 and Pano3D share source scenes and are not independent captures."
        ],
        "zh": [
          "3D60 与 Pano3D 共用源场景，不能作为独立采集数据。"
        ]
      },
      "datasetLicense": {
        "en": "Underlying source-dataset agreements plus access requests; available variants have different source assets.",
        "zh": "需遵守上游数据协议并申请访问；不同发布变体使用不同源资产。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "rendered",
          "availability": "released",
          "note": {
            "en": "ERP center/right/up products are rendered from scanned or synthetic interiors; the stereo offsets are virtual camera positions.",
            "zh": "ERP中心、右侧、上方产品由扫描或合成室内场景渲染；立体偏移为虚拟相机位置。"
          },
          "evidence": [
            "https://vcl3d.github.io/3D60/",
            "https://arxiv.org/abs/1807.09620"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Rendered panoramic depth is supplied; infinite values denote holes and source-scene geometry can be incomplete.",
            "zh": "提供渲染全景深度；无穷值表示空洞，源场景几何也可能不完整。"
          }
        },
        "trajectory": {
          "status": "partial",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Controlled centre/right/up stereo viewpoint offsets are available, rather than a continuous physical motion trajectory.",
            "zh": "提供受控的中心、右侧和上方立体视点偏移，并非连续的物理运动轨迹。"
          }
        },
        "evidence": [
          "https://vcl3d.github.io/3D60/",
          "https://arxiv.org/abs/1807.09620"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "established",
        "rank": 3,
        "scope": {
          "zh": "全景立体与深度",
          "en": "Panoramic stereo / depth"
        },
        "reason": {
          "zh": "专门面向全景立体与深度的公开基准，已有方法提供评测入口。",
          "en": "A dedicated panoramic stereo/depth benchmark with published evaluation routes."
        },
        "evidence": [
          {
            "url": "https://vcl3d.github.io/3D60/",
            "title": "Official dataset protocol and release documentation"
          },
          {
            "url": "https://github.com/alibaba/UniFuse-Unidirectional-Fusion",
            "title": "UniFuse official dataset preparation and evaluation recipes"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_3d60.webp",
        "thumbnail": "assets/datasets/ds_3d60-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://vcl3d.github.io/3D60/",
        "sourceTitle": "3D60 official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "Spherical RGB, depth and normals at the three stereo viewpoints in the official 3D60 modality overview.",
          "zh": "官方 3D60 模态总览：三个立体视点的球面 RGB、深度与法向。"
        },
        "attribution": {
          "en": "Source: 3D60 project authors, official dataset preview.",
          "zh": "来源：3D60 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: 3D60 project authors, official dataset preview.",
          "zh": "来源：3D60 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "342177447f156e3037b9be3ed2167c77d24af5972230e4dbedca26ee7d16a656",
        "thumbnailSha256": "9b1205114c4b0e883fa6a4f1b026363697b5b3ea0df03bcdc914941dc05fea90",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://vcl3d.github.io/3D60/assets/img/Modalities.png",
        "sourceSha256": "ac21872a0bf97ce6a3b4adfcd9433a28d00f26e6dfd9bf6f889a9e83ff9319bd",
        "selectionNotes": "Official project image converted to WebP and proportionally resized without changing its content."
      }
    },
    {
      "id": "ds_gibson",
      "name": "Gibson / GibsonV2",
      "title": "Gibson Env: Real-World Perception for Embodied Agents",
      "year": 2018,
      "cameras": [
        "panoramic",
        "perspective"
      ],
      "tasks": [
        "depth",
        "slam"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "mixed",
      "sensors": [
        "Real RGB-D scene scans",
        "Gibson / iGibson renderer"
      ],
      "sensorLabels": {
        "en": [
          "Real RGB-D scene scans",
          "Gibson / iGibson renderer"
        ],
        "zh": [
          "真实 RGB-D 场景扫描",
          "Gibson / iGibson 渲染器"
        ]
      },
      "groundTruth": [
        "Reconstructed meshes",
        "Rendered RGB-D"
      ],
      "groundTruthLabels": {
        "en": [
          "Reconstructed meshes",
          "Rendered RGB-D"
        ],
        "zh": [
          "重建网格",
          "渲染 RGB-D"
        ]
      },
      "access": "registration",
      "homepageUrl": "https://gibsonenv.github.io/",
      "paperUrl": "https://arxiv.org/abs/1808.10654",
      "downloadUrl": "https://stanfordvl.github.io/iGibson/dataset.html",
      "license": {
        "en": "Scene download requires license agreement; do not equate simulator code licensing with scene-data rights.",
        "zh": "场景下载需同意许可协议；仿真器代码许可不等于场景数据使用权。"
      },
      "summary": "真实重建室内场景支持虚拟 RGB-D 观测；Pano3D 提供明确的 GibsonV2 ERP 评测派生版本。",
      "details": {
        "en": {
          "Projection and inputs": "Perspective observations are simulator-configured; panoramic depth here refers to the documented Pano3D/GV2 derivative, not every Gibson archive.",
          "Depth and validity": "Depth is rendered from reconstructed meshes. Units, clipping, range/Z and resolution belong to the simulator/export protocol and must be recorded.",
          "Scene quality": "Static scans retain measured textures; reflective surfaces and thin structures may contain geometry irregularities.",
          "Evaluation": "GibsonV2 all-scenes and quality-filtered 4+ packages differ. Identify scene subset and scene-level splits; avoid overlap with Pano3D test assets.",
          "Poses and timing": "Simulated trajectories provide reference poses, not independently measured motion-capture GT. Physical synchronization is not an asset-level property."
        },
        "zh": {
          "投影与输入": "透视观测由仿真器配置；这里的全景深度指已记录的 Pano3D/GV2 派生版，不代表所有 Gibson 压缩包均含 ERP。",
          "深度与有效性": "深度由重建网格渲染；单位、截断、径向距离或 Z、分辨率属于仿真与导出协议，需逐项记录。",
          "场景质量": "静态扫描保留实测纹理；反光表面和细结构可能存在几何瑕疵。",
          "评测协议": "GibsonV2 全场景包与质量筛选 4+ 包不同，需注明子集和场景级划分，并排除与 Pano3D 测试资产重叠。",
          "位姿与时间": "仿真轨迹提供参考位姿，不是独立动捕真值；物理同步不属于场景资产本身的属性。"
        }
      },
      "notes": {
        "en": [
          "Gibson static scenes and interactive iGibson scene/object assets are different products."
        ],
        "zh": [
          "Gibson 静态场景与交互式 iGibson 场景、物体资产属于不同产品。"
        ]
      },
      "evidence": [
        {
          "url": "https://gibsonenv.github.io/",
          "title": "Official Gibson project"
        },
        {
          "url": "https://stanfordvl.github.io/iGibson/dataset.html",
          "title": "Official current static-scene download and scan caveats"
        },
        {
          "url": "https://vcl3d.github.io/Pano3D/",
          "title": "Documented GibsonV2 ERP derivatives"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Real reconstructed indoor scenes support virtual RGB-D observations; Pano3D provides a specific GibsonV2 ERP evaluation derivative.",
        "zh": "真实重建室内场景支持虚拟 RGB-D 观测；Pano3D 提供明确的 GibsonV2 ERP 评测派生版本。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "Perspective observations are simulator-configured; panoramic depth here refers to the documented Pano3D/GV2 derivative, not every Gibson archive.",
          "Depth and validity": "Depth is rendered from reconstructed meshes. Units, clipping, range/Z and resolution belong to the simulator/export protocol and must be recorded.",
          "Scene quality": "Static scans retain measured textures; reflective surfaces and thin structures may contain geometry irregularities.",
          "Evaluation": "GibsonV2 all-scenes and quality-filtered 4+ packages differ. Identify scene subset and scene-level splits; avoid overlap with Pano3D test assets.",
          "Poses and timing": "Simulated trajectories provide reference poses, not independently measured motion-capture GT. Physical synchronization is not an asset-level property."
        },
        "zh": {
          "投影与输入": "透视观测由仿真器配置；这里的全景深度指已记录的 Pano3D/GV2 派生版，不代表所有 Gibson 压缩包均含 ERP。",
          "深度与有效性": "深度由重建网格渲染；单位、截断、径向距离或 Z、分辨率属于仿真与导出协议，需逐项记录。",
          "场景质量": "静态扫描保留实测纹理；反光表面和细结构可能存在几何瑕疵。",
          "评测协议": "GibsonV2 全场景包与质量筛选 4+ 包不同，需注明子集和场景级划分，并排除与 Pano3D 测试资产重叠。",
          "位姿与时间": "仿真轨迹提供参考位姿，不是独立动捕真值；物理同步不属于场景资产本身的属性。"
        }
      },
      "datasetNotes": {
        "en": [
          "Gibson static scenes and interactive iGibson scene/object assets are different products."
        ],
        "zh": [
          "Gibson 静态场景与交互式 iGibson 场景、物体资产属于不同产品。"
        ]
      },
      "datasetLicense": {
        "en": "Scene download requires license agreement; do not equate simulator code licensing with scene-data rights.",
        "zh": "场景下载需同意许可协议；仿真器代码许可不等于场景数据使用权。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "rendered",
          "availability": "derivable",
          "note": {
            "en": "Panoramic support denotes the documented Pano3D/GV2 derivative, not all original Gibson archives.",
            "zh": "全景指已记录的Pano3D/GV2派生版，不代表全部原始Gibson压缩包。"
          },
          "evidence": [
            "https://gibsonenv.github.io/",
            "https://stanfordvl.github.io/iGibson/dataset.html",
            "https://vcl3d.github.io/Pano3D/"
          ]
        },
        {
          "geometry": "perspective",
          "route": "rendered",
          "availability": "derivable",
          "note": {
            "en": "Perspective observations are generated through the Gibson/iGibson simulator.",
            "zh": "透视观测由Gibson/iGibson仿真器生成。"
          },
          "evidence": [
            "https://gibsonenv.github.io/",
            "https://stanfordvl.github.io/iGibson/dataset.html",
            "https://vcl3d.github.io/Pano3D/"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Simulator depth can be rendered from reconstructed geometry; format and masks depend on the selected simulator or derivative.",
            "zh": "可由重建几何渲染仿真深度；格式与掩码取决于所用仿真器或派生版本。"
          }
        },
        "trajectory": {
          "status": "partial",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Generated simulator trajectories have known poses; the static scene assets alone do not define a fixed recorded trajectory set.",
            "zh": "生成的仿真轨迹位姿已知；静态场景资产本身不定义固定的记录轨迹集。"
          }
        },
        "evidence": [
          "https://gibsonenv.github.io/",
          "https://stanfordvl.github.io/iGibson/dataset.html",
          "https://vcl3d.github.io/Pano3D/"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 3,
        "scope": {
          "zh": "仿真与重投影",
          "en": "Simulation / reprojection"
        },
        "reason": {
          "zh": "已有仿真生态与实景重建资源；全景接口按具体发布核查。",
          "en": "An established simulation ecosystem; check panorama interfaces for the chosen release."
        },
        "evidence": [
          {
            "url": "https://gibsonenv.github.io/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_gibson.webp",
        "thumbnail": "assets/datasets/ds_gibson-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://gibsonenv.github.io/",
        "sourceTitle": "Gibson / GibsonV2 official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "Scanned indoor environments and rendered visual modalities in the official Gibson overview.",
          "zh": "官方 Gibson 总览中的扫描室内环境与渲染视觉模态。"
        },
        "attribution": {
          "en": "Source: Gibson / GibsonV2 project authors, official dataset preview.",
          "zh": "来源：Gibson / GibsonV2 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: Gibson / GibsonV2 project authors, official dataset preview.",
          "zh": "来源：Gibson / GibsonV2 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "7b5b6ae5cc3556394c1b48dad83699be32c52b1885f851aa31cdf32a19c49ee4",
        "thumbnailSha256": "c3ff6d6a6a1d7f37c9b17f164a84376423dce9e5596381729673ae4eb0e8ad00",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://gibsonenv.github.io/public/img/figure0.png",
        "sourceSha256": "5714051c6c6642e8aa44ea1c4d5266640d9a5427ab2051ef3895438b94239c33",
        "selectionNotes": "Official project image converted to WebP and proportionally resized without changing its content."
      }
    },
    {
      "id": "ds_tum_vi",
      "name": "TUM VI",
      "title": "The TUM VI Benchmark for Evaluating Visual-Inertial Odometry",
      "year": 2018,
      "cameras": [
        "fisheye",
        "wide",
        "multi"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "indoor",
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "Stereo fisheye",
        "IMU",
        "MoCap"
      ],
      "sensorLabels": {
        "en": [
          "Stereo fisheye",
          "IMU",
          "MoCap"
        ],
        "zh": [
          "双目鱼眼",
          "IMU",
          "动作捕捉"
        ]
      },
      "groundTruth": [
        "Metric poses",
        "Partial trajectory"
      ],
      "groundTruthLabels": {
        "en": [
          "Metric poses",
          "Partial trajectory"
        ],
        "zh": [
          "米制位姿",
          "部分轨迹真值"
        ]
      },
      "access": "open",
      "homepageUrl": "https://cvg.cit.tum.de/data/datasets/visual-inertial-dataset",
      "paperUrl": "https://arxiv.org/abs/1804.06120",
      "downloadUrl": "https://cvg.cit.tum.de/data/datasets/visual-inertial-dataset#dataset",
      "license": {
        "en": "CC BY 4.0 data; accompanying code BSD-2-Clause.",
        "zh": "数据为 CC BY 4.0；附带代码为 BSD-2-Clause。"
      },
      "summary": "硬件同步的 195° 双目鱼眼与 IMU，附光度标定；房间序列有完整参考，其他序列通常只有起终段。",
      "details": {
        "en": {
          "Inputs": "1024×1024 16-bit linear images at 20 Hz; IMU at 200 Hz. Downsampled exports are also provided.",
          "Ground-truth coverage": "Room sequences: full motion capture. Corridor, magistrale, outdoors and slides: start/end segments only.",
          "Reference frame": "Calibrated ground truth is in the IMU frame; corrected timestamps and IMU scaling are already applied.",
          "Calibration": "Geometric, camera–IMU, exposure/vignette and IMU-noise resources are supplied.",
          "Evaluation": "Evaluate only reference-covered intervals; endpoint drift is not full-route ATE."
        },
        "zh": {
          "输入": "1024×1024、16 位线性图像，20 Hz；IMU 为 200 Hz，另提供降采样版本。",
          "真值覆盖": "room 序列有完整动作捕捉；corridor、magistrale、outdoors、slides 仅起终段有真值。",
          "参考坐标系": "标定版本真值已转到 IMU 坐标系，并已校正时间戳与 IMU 比例。",
          "标定": "提供几何、相机–IMU、曝光/暗角和 IMU 噪声资料。",
          "评测": "仅在真值覆盖区间计算对应误差；端点漂移不等于全程 ATE。"
        }
      },
      "notes": {
        "en": [
          "No dense depth labels; this is a VIO/SLAM benchmark.",
          "Do not apply raw-clock offsets again to calibrated exports."
        ],
        "zh": [
          "没有稠密深度标签，主要用于 VIO/SLAM。",
          "不要对标定后导出数据重复应用原始时钟偏移。"
        ]
      },
      "evidence": [
        {
          "url": "https://cvg.cit.tum.de/data/datasets/visual-inertial-dataset",
          "title": "TUM VI official sequences, calibration, coverage and licence"
        },
        {
          "url": "https://arxiv.org/abs/1804.06120",
          "title": "TUM VI paper"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Hardware-synchronized 195° stereo fisheye and IMU with photometric calibration; full room trajectories but partial reference elsewhere.",
        "zh": "硬件同步的 195° 双目鱼眼与 IMU，附光度标定；房间序列有完整参考，其他序列通常只有起终段。"
      },
      "datasetDetails": {
        "en": {
          "Inputs": "1024×1024 16-bit linear images at 20 Hz; IMU at 200 Hz. Downsampled exports are also provided.",
          "Ground-truth coverage": "Room sequences: full motion capture. Corridor, magistrale, outdoors and slides: start/end segments only.",
          "Reference frame": "Calibrated ground truth is in the IMU frame; corrected timestamps and IMU scaling are already applied.",
          "Calibration": "Geometric, camera–IMU, exposure/vignette and IMU-noise resources are supplied.",
          "Evaluation": "Evaluate only reference-covered intervals; endpoint drift is not full-route ATE."
        },
        "zh": {
          "输入": "1024×1024、16 位线性图像，20 Hz；IMU 为 200 Hz，另提供降采样版本。",
          "真值覆盖": "room 序列有完整动作捕捉；corridor、magistrale、outdoors、slides 仅起终段有真值。",
          "参考坐标系": "标定版本真值已转到 IMU 坐标系，并已校正时间戳与 IMU 比例。",
          "标定": "提供几何、相机–IMU、曝光/暗角和 IMU 噪声资料。",
          "评测": "仅在真值覆盖区间计算对应误差；端点漂移不等于全程 ATE。"
        }
      },
      "datasetNotes": {
        "en": [
          "No dense depth labels; this is a VIO/SLAM benchmark.",
          "Do not apply raw-clock offsets again to calibrated exports."
        ],
        "zh": [
          "没有稠密深度标签，主要用于 VIO/SLAM。",
          "不要对标定后导出数据重复应用原始时钟偏移。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY 4.0 data; accompanying code BSD-2-Clause.",
        "zh": "数据为 CC BY 4.0；附带代码为 BSD-2-Clause。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://cvg.cit.tum.de/data/datasets/visual-inertial-dataset",
            "https://arxiv.org/abs/1804.06120"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "The official VIO release provides cameras and IMU without image-depth ground-truth targets.",
            "zh": "官方 VIO 发布提供相机与 IMU，不提供图像深度真值目标。"
          }
        },
        "trajectory": {
          "status": "partial",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Room sequences have full mocap coverage; corridor, magistrale, outdoors and slides sequences have start/end references only.",
            "zh": "Room 序列具有完整动捕；corridor、magistrale、outdoors 和 slides 序列仅覆盖起止片段。"
          }
        },
        "evidence": [
          "https://cvg.cit.tum.de/data/datasets/visual-inertial-dataset",
          "https://arxiv.org/abs/1804.06120"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "established",
        "rank": 6,
        "scope": {
          "zh": "鱼眼惯性里程计",
          "en": "Fisheye-inertial odometry"
        },
        "reason": {
          "zh": "明确的鱼眼标定和惯性协议；动作捕捉覆盖须逐段核查。",
          "en": "Established fisheye calibration and inertial protocol; check mocap coverage per sequence."
        },
        "evidence": [
          {
            "url": "https://cvg.cit.tum.de/data/datasets/visual-inertial-dataset",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_tum_vi.webp",
        "thumbnail": "assets/datasets/ds_tum_vi-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://cvg.cit.tum.de/data/datasets/visual-inertial-dataset",
        "sourceUrl": "https://cvg.cit.tum.de/_media/data/datasets/vi-dataset/thumbs.png",
        "paperUrl": "https://arxiv.org/abs/1804.06120",
        "sourceTitle": "TUM VI official dataset preview",
        "caption": {
          "en": "Official montage of fisheye image samples across TUM VI environments.",
          "zh": "TUM VI 官方鱼眼图像样例拼图，覆盖不同采集环境。"
        },
        "credit": {
          "en": "Source: TUM VI authors, official project preview.",
          "zh": "来源：TUM VI 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: TUM VI authors, official project preview.",
          "zh": "来源：TUM VI 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          1100,
          825
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "430bf200a57dbf3d331edcb7a48a46ae1408fe1850591f6ee3bf620f9d1d4a56"
      }
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
      "environment": "Official ROS1/Ceres implementation; authors recommend hardware sync and global shutter.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://arxiv.org/abs/1708.03852",
            "https://github.com/HKUST-Aerial-Robotics/VINS-Fusion"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://arxiv.org/abs/1708.03852",
            "https://github.com/HKUST-Aerial-Robotics/VINS-Fusion"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/vinsfusion2019-thumb.webp",
        "image": "assets/papers/vinsfusion2019.webp",
        "paperUrl": "https://arxiv.org/pdf/1708.03852",
        "page": 3,
        "figureLabel": "Figure 2",
        "caption": {
          "zh": "基础 VINS-Mono 的初始化、滑窗 VIO、重定位与位姿图。",
          "en": "Initialization, sliding-window VIO, relocalization and pose graph in underlying VINS-Mono."
        },
        "credit": {
          "zh": "来源：论文作者，2018；2 号图截图。 图来自基础 VINS-Mono 论文，不是 VINS-Fusion 独立论文。",
          "en": "Source: paper authors (2018), Figure 2 crop. Figure from the underlying VINS-Mono paper, not a dedicated VINS-Fusion publication."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 2. A block diagram illustrating the full pipeline of the proposed monocular visual-inertial state estimator.",
        "cropBox": [
          55,
          53,
          563,
          270
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "1f44f92f057cbb05a6570f14d2fe5cae2b9736198a8eeca7c93438adbc38a087",
        "imageSize": [
          1270,
          542
        ]
      }
    },
    {
      "id": "ds_kitti_depth",
      "name": "KITTI Depth",
      "title": "Sparsity Invariant CNNs / KITTI Depth Prediction and Completion",
      "year": 2017,
      "cameras": [
        "perspective"
      ],
      "tasks": [
        "depth"
      ],
      "environment": [
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "Stereo RGB",
        "Velodyne LiDAR"
      ],
      "sensorLabels": {
        "en": [
          "Stereo RGB",
          "Velodyne LiDAR"
        ],
        "zh": [
          "双目 RGB",
          "Velodyne 激光雷达"
        ]
      },
      "groundTruth": [
        "Accumulated LiDAR depth",
        "Sparse input depth"
      ],
      "groundTruthLabels": {
        "en": [
          "Accumulated LiDAR depth",
          "Sparse input depth"
        ],
        "zh": [
          "累积激光深度",
          "稀疏输入深度"
        ]
      },
      "access": "registration",
      "homepageUrl": "https://www.cvlibs.net/datasets/kitti/eval_depth.php?benchmark=depth_prediction",
      "paperUrl": "https://arxiv.org/abs/1708.06500",
      "downloadUrl": "https://www.cvlibs.net/datasets/kitti/eval_depth.php?benchmark=depth_completion",
      "license": {
        "en": "KITTI download registration and dataset terms apply; evaluation submissions have separate eligibility rules.",
        "zh": "适用 KITTI 下载注册及数据条款，评测提交另有资格限制。"
      },
      "summary": "采用激光派生目标的室外透视基准；官方预测、补全与常见 Eigen 式划分是不同协议。",
      "details": {
        "en": {
          "Projection and inputs": "Depth maps align with KITTI raw left/right perspective images; raw LiDAR and corresponding RGB are separate inputs.",
          "Depth and validity": "Depth targets combine LiDAR observations; they remain sparse/occlusion-sensitive. Verify PNG scaling and valid-pixel rules in the downloaded official devkit.",
          "Calibration": "Use raw-data camera/LiDAR calibration and frame mapping. A depth benchmark is not a replacement for odometry ground truth.",
          "Evaluation": "Separate depth prediction (RGB) from depth completion (RGB plus sparse depth). Specify split, crop, depth cap and scale alignment explicitly.",
          "Access": "Official downloads require login. Hidden test targets are evaluated by the benchmark; site eligibility rules restrict routine submissions."
        },
        "zh": {
          "投影与输入": "深度图对应 KITTI 原始左右透视图，原始激光与对应 RGB 需分别加载。",
          "深度与有效性": "深度目标融合激光观测，仍受稀疏性与遮挡影响；PNG 缩放和有效像素规则需以下载的官方工具为准。",
          "标定": "需用原始相机、激光标定及帧映射；深度基准不能代替里程计位姿真值。",
          "评测协议": "区分深度预测（RGB）与深度补全（RGB 加稀疏深度），明确划分、裁剪、深度上限及尺度对齐。",
          "获取方式": "官方下载需登录；隐藏测试标签由官方评测，常规提交受网站资格规则约束。"
        }
      },
      "notes": {
        "en": [
          "A KITTI score cannot be directly compared with KITTI-360 fisheye or panoramic evaluation."
        ],
        "zh": [
          "KITTI 分数不能与 KITTI-360 鱼眼或全景评测直接比较。"
        ]
      },
      "evidence": [
        {
          "url": "https://www.cvlibs.net/datasets/kitti/eval_depth.php?benchmark=depth_prediction",
          "title": "Official depth prediction benchmark"
        },
        {
          "url": "https://arxiv.org/abs/1708.06500",
          "title": "Sparsity Invariant CNNs paper"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Outdoor perspective benchmark with LiDAR-derived targets; official prediction/completion and common Eigen-style splits are different protocols.",
        "zh": "采用激光派生目标的室外透视基准；官方预测、补全与常见 Eigen 式划分是不同协议。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "Depth maps align with KITTI raw left/right perspective images; raw LiDAR and corresponding RGB are separate inputs.",
          "Depth and validity": "Depth targets combine LiDAR observations; they remain sparse/occlusion-sensitive. Verify PNG scaling and valid-pixel rules in the downloaded official devkit.",
          "Calibration": "Use raw-data camera/LiDAR calibration and frame mapping. A depth benchmark is not a replacement for odometry ground truth.",
          "Evaluation": "Separate depth prediction (RGB) from depth completion (RGB plus sparse depth). Specify split, crop, depth cap and scale alignment explicitly.",
          "Access": "Official downloads require login. Hidden test targets are evaluated by the benchmark; site eligibility rules restrict routine submissions."
        },
        "zh": {
          "投影与输入": "深度图对应 KITTI 原始左右透视图，原始激光与对应 RGB 需分别加载。",
          "深度与有效性": "深度目标融合激光观测，仍受稀疏性与遮挡影响；PNG 缩放和有效像素规则需以下载的官方工具为准。",
          "标定": "需用原始相机、激光标定及帧映射；深度基准不能代替里程计位姿真值。",
          "评测协议": "区分深度预测（RGB）与深度补全（RGB 加稀疏深度），明确划分、裁剪、深度上限及尺度对齐。",
          "获取方式": "官方下载需登录；隐藏测试标签由官方评测，常规提交受网站资格规则约束。"
        }
      },
      "datasetNotes": {
        "en": [
          "A KITTI score cannot be directly compared with KITTI-360 fisheye or panoramic evaluation."
        ],
        "zh": [
          "KITTI 分数不能与 KITTI-360 鱼眼或全景评测直接比较。"
        ]
      },
      "datasetLicense": {
        "en": "KITTI download registration and dataset terms apply; evaluation submissions have separate eligibility rules.",
        "zh": "适用 KITTI 下载注册及数据条款，评测提交另有资格限制。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://www.cvlibs.net/datasets/kitti/eval_depth.php?benchmark=depth_prediction",
            "https://arxiv.org/abs/1708.06500"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Accumulated LiDAR depth targets and sparse input depth are provided. Targets remain sparse and require official masks.",
            "zh": "提供累积 LiDAR 深度目标与稀疏输入深度；目标仍然稀疏，需使用官方掩码。"
          }
        },
        "trajectory": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "This depth challenge release does not itself provide an odometry trajectory benchmark; related KITTI raw/odometry products are separate.",
            "zh": "该深度挑战发布本身不提供里程计轨迹基准；相关 KITTI raw/odometry 产品另行提供。"
          }
        },
        "evidence": [
          "https://www.cvlibs.net/datasets/kitti/eval_depth.php?benchmark=depth_prediction",
          "https://arxiv.org/abs/1708.06500"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "established",
        "rank": 10,
        "scope": {
          "zh": "室外透视深度",
          "en": "Outdoor perspective depth"
        },
        "reason": {
          "zh": "车载深度评测常用对照；稀疏 LiDAR 监督与稠密深度须区分。",
          "en": "Established driving-depth evaluation; distinguish sparse LiDAR from dense targets."
        },
        "evidence": [
          {
            "url": "https://www.cvlibs.net/datasets/kitti/eval_depth.php?benchmark=depth_prediction",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_kitti_depth.webp",
        "thumbnail": "assets/datasets/ds_kitti_depth-thumb.webp",
        "sourceType": "paper-pdf",
        "sourcePageUrl": "https://www.cvlibs.net/datasets/kitti/eval_depth.php?benchmark=depth_prediction",
        "sourceTitle": "KITTI Depth official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "KITTI depth dataset construction: generated depth annotations compared with raw/accumulated LiDAR and stereo; bottom row includes RGB and error maps.",
          "zh": "KITTI 深度数据构建：生成标注与原始、累积激光及立体匹配对比，底行含 RGB 与误差图。"
        },
        "attribution": {
          "en": "Source: Jonas Uhrig et al., Sparsity Invariant CNNs, Figure 3.",
          "zh": "来源：Jonas Uhrig 等，Sparsity Invariant CNNs 原论文图 3。"
        },
        "credit": {
          "en": "Source: Jonas Uhrig et al., Sparsity Invariant CNNs, Figure 3.",
          "zh": "来源：Jonas Uhrig 等，Sparsity Invariant CNNs 原论文图 3。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "a1b85af1e86504087a7a7ea259f25559524baa5d13449acab98721945af134a5",
        "thumbnailSha256": "a0b9a7fa7d9060904c17ec9ba0d8daf7830f82137ddd3146aae4d9a1ea861cbb",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "paperUrl": "https://arxiv.org/pdf/1708.06500",
        "sourceUrl": "https://arxiv.org/pdf/1708.06500",
        "pdfSha256": "41dffacbe74db184ac14d3ba9feb839d2d6040e887b7b0a7e86df99a3b23860e",
        "page": 5,
        "figureLabel": "Figure 3",
        "cropBox": [
          51,
          70,
          546,
          211
        ],
        "selectionNotes": "Original PDF page and final crop visually checked; crop excludes the caption, which is described bilingually in this manifest.",
        "originalCaption": "Figure 3: Large-scale Dataset. Qualitative results of our depth annotated dataset. From left to right we compare: depth maps of the manually curated KITTI 2015 dataset, our automatically generated data, raw and accumulated LiDaR scans, and SGM [26] results. Differences to the KITTI 2015 depth maps are shown in the last row from 0 (green) to 2 (red) meters."
      }
    },
    {
      "id": "ds_lafida",
      "name": "LaFiDa",
      "title": "LaFiDa – A Laserscanner Multi-Fisheye Camera Dataset",
      "year": 2017,
      "cameras": [
        "fisheye",
        "wide",
        "multi"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "indoor",
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "Three fisheye cameras",
        "Laser scanner",
        "Motion capture"
      ],
      "sensorLabels": {
        "en": [
          "Three fisheye cameras",
          "Laser scanner",
          "Motion capture"
        ],
        "zh": [
          "三鱼眼相机",
          "激光扫描仪",
          "动作捕捉"
        ]
      },
      "groundTruth": [
        "Metric trajectory",
        "Laser point cloud"
      ],
      "groundTruthLabels": {
        "en": [
          "Metric trajectory",
          "Laser point cloud"
        ],
        "zh": [
          "米制轨迹",
          "激光点云"
        ]
      },
      "access": "open",
      "homepageUrl": "https://www.ipf.kit.edu/lafida.php",
      "paperUrl": "https://doi.org/10.3390/jimaging3010005",
      "downloadUrl": "https://www.ipf.kit.edu/lafida_datasets.php",
      "license": {
        "en": "CC BY 4.0, as stated by KIT IPF.",
        "zh": "KIT IPF 声明采用 CC BY 4.0。"
      },
      "summary": "头盔式三鱼眼/激光基准，提供动作捕捉参考和明确的相机/机架标定。",
      "details": {
        "en": {
          "Geometry": "Three divergent physical fisheye cameras and a laser scanner; not an ERP panorama stream.",
          "Reference provenance": "OptiTrack tracks a rigid-body marker bar; apply its measured camera/scanner transforms for sensor-frame evaluation.",
          "Accuracy": "Official description distinguishes stable submillimetre position precision from dynamic errors of a few millimetres.",
          "Calibration and time": "Ocam-Toolbox intrinsics, multicamera/laser/rigid-body extrinsics and per-image/scan timestamps are documented.",
          "Task": "SLAM trajectory ATE/RPE and mapping on indoor/outdoor static/dynamic sequences; laser returns are not complete image-depth GT."
        },
        "zh": {
          "成像模型": "三个朝向不同的真实鱼眼相机和激光扫描仪，不是 ERP 全景流。",
          "参考来源": "OptiTrack 跟踪刚性标记杆；评估传感器轨迹时需应用相机/扫描仪到刚体的标定变换。",
          "精度": "官方区分静态亚毫米级位置精度与动态数毫米误差。",
          "标定与时间": "说明 Ocam-Toolbox 内参、多相机/激光/刚体外参及逐图像/扫描时间戳。",
          "任务": "室内外静态/动态序列的 SLAM 轨迹 ATE/RPE 和建图；激光回波不等于完整图像深度真值。"
        }
      },
      "notes": {
        "en": [
          "The outdoor large-loop sequence leaves the tracking volume; its full path does not have continuous mocap.",
          "Full archives were not downloaded; download entry points are linked from the official project."
        ],
        "zh": [
          "室外大回环序列离开动作捕捉范围，全程并非都有连续动作捕捉真值。",
          "本次未下载完整归档；下载入口由官方项目页提供。"
        ]
      },
      "evidence": [
        {
          "url": "https://www.ipf.kit.edu/english/code_1842.php",
          "title": "KIT IPF official LaFiDa release and CC BY 4.0 licence"
        },
        {
          "url": "https://www.ipf.kit.edu/lafida.php",
          "title": "LaFiDa motion capture, calibration and synchronization"
        },
        {
          "url": "https://www.ipf.kit.edu/lafida_datasets.php",
          "title": "LaFiDa downloads, units and outdoor tracking-volume limitation"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Helmet-mounted three-fisheye/laser benchmark with motion-capture references and explicit camera/rig calibration.",
        "zh": "头盔式三鱼眼/激光基准，提供动作捕捉参考和明确的相机/机架标定。"
      },
      "datasetDetails": {
        "en": {
          "Geometry": "Three divergent physical fisheye cameras and a laser scanner; not an ERP panorama stream.",
          "Reference provenance": "OptiTrack tracks a rigid-body marker bar; apply its measured camera/scanner transforms for sensor-frame evaluation.",
          "Accuracy": "Official description distinguishes stable submillimetre position precision from dynamic errors of a few millimetres.",
          "Calibration and time": "Ocam-Toolbox intrinsics, multicamera/laser/rigid-body extrinsics and per-image/scan timestamps are documented.",
          "Task": "SLAM trajectory ATE/RPE and mapping on indoor/outdoor static/dynamic sequences; laser returns are not complete image-depth GT."
        },
        "zh": {
          "成像模型": "三个朝向不同的真实鱼眼相机和激光扫描仪，不是 ERP 全景流。",
          "参考来源": "OptiTrack 跟踪刚性标记杆；评估传感器轨迹时需应用相机/扫描仪到刚体的标定变换。",
          "精度": "官方区分静态亚毫米级位置精度与动态数毫米误差。",
          "标定与时间": "说明 Ocam-Toolbox 内参、多相机/激光/刚体外参及逐图像/扫描时间戳。",
          "任务": "室内外静态/动态序列的 SLAM 轨迹 ATE/RPE 和建图；激光回波不等于完整图像深度真值。"
        }
      },
      "datasetNotes": {
        "en": [
          "The outdoor large-loop sequence leaves the tracking volume; its full path does not have continuous mocap.",
          "Full archives were not downloaded; download entry points are linked from the official project."
        ],
        "zh": [
          "室外大回环序列离开动作捕捉范围，全程并非都有连续动作捕捉真值。",
          "本次未下载完整归档；下载入口由官方项目页提供。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY 4.0, as stated by KIT IPF.",
        "zh": "KIT IPF 声明采用 CC BY 4.0。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://www.ipf.kit.edu/english/code_1842.php",
            "https://www.ipf.kit.edu/lafida.php",
            "https://www.ipf.kit.edu/lafida_datasets.php"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Laser scans and extrinsic calibration allow sparse depth supervision after projection; they are not complete image-depth targets.",
            "zh": "激光扫描及外参标定经投影可提供稀疏深度监督，并非完整图像深度目标。"
          }
        },
        "trajectory": {
          "status": "partial",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "OptiTrack tracks a rigid marker body with calibrated sensor transforms. The outdoor large loop leaves the mocap volume, so full-route coverage is absent.",
            "zh": "OptiTrack 跟踪带传感器外参的刚性标记体；室外大回环离开动捕空间，因而缺少全程覆盖。"
          }
        },
        "evidence": [
          "https://www.ipf.kit.edu/english/code_1842.php",
          "https://www.ipf.kit.edu/lafida.php",
          "https://www.ipf.kit.edu/lafida_datasets.php"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "specialized",
        "rank": 3,
        "scope": {
          "zh": "鱼眼建图",
          "en": "Fisheye mapping"
        },
        "reason": {
          "zh": "针对鱼眼与扫描参考的专项资源，注意几何和轨迹覆盖。",
          "en": "A specialized fisheye / scan-reference resource with geometry and coverage constraints."
        },
        "evidence": [
          {
            "url": "https://www.ipf.kit.edu/lafida.php",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_lafida.webp",
        "thumbnail": "assets/datasets/ds_lafida-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://www.ipf.kit.edu/lafida.php",
        "sourceUrl": "https://www.ipf.kit.edu/img/ProjektCV2015/impression_outdoor_1_rdax_1200x674s.JPG",
        "paperUrl": "https://doi.org/10.3390/jimaging3010005",
        "sourceTitle": "LaFiDa official dataset preview",
        "caption": {
          "en": "Outdoor multi-camera capture session photographed on the official LaFiDa project page.",
          "zh": "LaFiDa 官方项目页展示的室外多相机采集现场。"
        },
        "credit": {
          "en": "Source: LaFiDa authors, official project preview.",
          "zh": "来源：LaFiDa 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: LaFiDa authors, official project preview.",
          "zh": "来源：LaFiDa 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          1100,
          618
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "6a9432c645244d71c9f03cd6b9740f5240f820e51f8704803b6bea53ddc22188"
      }
    },
    {
      "id": "ds_matterport3d",
      "name": "Matterport3D",
      "title": "Matterport3D: Learning from RGB-D Data in Indoor Environments",
      "year": 2017,
      "cameras": [
        "panoramic",
        "perspective",
        "multi"
      ],
      "tasks": [
        "depth"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "real",
      "sensors": [
        "Matterport Pro RGB-D"
      ],
      "sensorLabels": {
        "en": [
          "Matterport Pro RGB-D"
        ],
        "zh": [
          "Matterport Pro RGB-D"
        ]
      },
      "groundTruth": [
        "Measured depth",
        "Camera poses",
        "Meshes and semantics"
      ],
      "groundTruthLabels": {
        "en": [
          "Measured depth",
          "Camera poses",
          "Meshes and semantics"
        ],
        "zh": [
          "实测深度",
          "相机位姿",
          "网格与语义"
        ]
      },
      "access": "request",
      "homepageUrl": "https://niessner.github.io/Matterport/",
      "paperUrl": "https://arxiv.org/abs/1709.06158",
      "downloadUrl": "https://niessner.github.io/Matterport/#download",
      "license": {
        "en": "Matterport3D Terms of Use; signed agreement and institutional-email access request. Repository MIT applies to code.",
        "zh": "数据适用 Matterport3D 使用条款；签署协议并通过机构邮箱申请。仓库 MIT 仅适用于代码。"
      },
      "summary": "真实建筑扫描是许多全景深度基准的基础；原始 RGB-D 采集与渲染 ERP 派生集需要分别处理。",
      "details": {
        "en": {
          "Projection and inputs": "Three RGB-D sensors capture 18 views per tripod station; skyboxes and calibrated perspective images are provided. Published ERP depth protocols are derived products.",
          "Depth and validity": "Original 16-bit depth is camera Z: meters = value / 4000; zero is invalid. Do not copy this scale or Z convention to rendered ERP range.",
          "Geometry and annotations": "Sensor depth, reconstructed meshes, region/object semantics, intrinsics and camera-to-world poses; pose translations are meters.",
          "Timing and calibration": "Per-view intrinsics/extrinsics are supplied. Rotating static scan stations are not continuous synchronized VIO sequences.",
          "Evaluation": "Keep building identities separated. State whether using native depth, 3D60, Pano3D, or another ERP renderer and its mask/crop."
        },
        "zh": {
          "投影与输入": "每站由三个 RGB-D 传感器采集 18 个视图，提供天空盒及标定透视图。论文常用的 ERP 深度协议属于派生产品。",
          "深度与有效性": "原始 16 位深度是相机 Z：米数＝数值 / 4000；0 无效。不能直接把该缩放和 Z 定义套用于渲染 ERP 径向深度。",
          "几何与标注": "包含传感器深度、重建网格、区域和物体语义、内参与相机到世界位姿；位姿平移使用米。",
          "时间与标定": "提供逐视图内外参；旋转式静态扫描站不是连续同步的 VIO 序列。",
          "评测协议": "按建筑隔离训练和测试；注明使用原始深度、3D60、Pano3D 或其他 ERP 渲染版本及掩码、裁剪。"
        }
      },
      "notes": {
        "en": [
          "Many datasets reuse these buildings; combining derivatives does not create an independent test set."
        ],
        "zh": [
          "多个派生集复用这些建筑，合并后不能视为独立测试集。"
        ]
      },
      "evidence": [
        {
          "url": "https://niessner.github.io/Matterport/",
          "title": "Official project and access"
        },
        {
          "url": "https://github.com/niessner/Matterport/blob/master/data_organization.md",
          "title": "Official data organization"
        },
        {
          "url": "https://github.com/niessner/Matterport",
          "title": "Official repository"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Real building scans underpin many panoramic depth benchmarks; raw RGB-D capture and rendered ERP derivatives require different loaders.",
        "zh": "真实建筑扫描是许多全景深度基准的基础；原始 RGB-D 采集与渲染 ERP 派生集需要分别处理。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "Three RGB-D sensors capture 18 views per tripod station; skyboxes and calibrated perspective images are provided. Published ERP depth protocols are derived products.",
          "Depth and validity": "Original 16-bit depth is camera Z: meters = value / 4000; zero is invalid. Do not copy this scale or Z convention to rendered ERP range.",
          "Geometry and annotations": "Sensor depth, reconstructed meshes, region/object semantics, intrinsics and camera-to-world poses; pose translations are meters.",
          "Timing and calibration": "Per-view intrinsics/extrinsics are supplied. Rotating static scan stations are not continuous synchronized VIO sequences.",
          "Evaluation": "Keep building identities separated. State whether using native depth, 3D60, Pano3D, or another ERP renderer and its mask/crop."
        },
        "zh": {
          "投影与输入": "每站由三个 RGB-D 传感器采集 18 个视图，提供天空盒及标定透视图。论文常用的 ERP 深度协议属于派生产品。",
          "深度与有效性": "原始 16 位深度是相机 Z：米数＝数值 / 4000；0 无效。不能直接把该缩放和 Z 定义套用于渲染 ERP 径向深度。",
          "几何与标注": "包含传感器深度、重建网格、区域和物体语义、内参与相机到世界位姿；位姿平移使用米。",
          "时间与标定": "提供逐视图内外参；旋转式静态扫描站不是连续同步的 VIO 序列。",
          "评测协议": "按建筑隔离训练和测试；注明使用原始深度、3D60、Pano3D 或其他 ERP 渲染版本及掩码、裁剪。"
        }
      },
      "datasetNotes": {
        "en": [
          "Many datasets reuse these buildings; combining derivatives does not create an independent test set."
        ],
        "zh": [
          "多个派生集复用这些建筑，合并后不能视为独立测试集。"
        ]
      },
      "datasetLicense": {
        "en": "Matterport3D Terms of Use; signed agreement and institutional-email access request. Repository MIT applies to code.",
        "zh": "数据适用 Matterport3D 使用条款；签署协议并通过机构邮箱申请。仓库 MIT 仅适用于代码。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "rendered",
          "availability": "derivable",
          "note": {
            "en": "Panoramic depth uses a declared derivative such as 3D60/Pano3D; native calibrated perspective RGB-D/skyboxes should not be confused with every ERP export.",
            "zh": "全景深度依赖3D60/Pano3D等明确派生协议；原始标定透视RGB-D/skybox不等于任意ERP导出。"
          },
          "evidence": [
            "https://niessner.github.io/Matterport/",
            "https://github.com/niessner/Matterport/blob/master/data_organization.md",
            "https://github.com/niessner/Matterport"
          ]
        },
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://niessner.github.io/Matterport/",
            "https://github.com/niessner/Matterport/blob/master/data_organization.md",
            "https://github.com/niessner/Matterport"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Native RGB-D depth is measured; zero denotes missing returns. Rendered ERP derivatives have their own definitions and masks.",
            "zh": "原始 RGB-D 深度来自测量，零值为缺失；渲染 ERP 派生集采用各自的定义与掩码。"
          }
        },
        "trajectory": {
          "status": "partial",
          "provenance": [
            "estimated"
          ],
          "note": {
            "en": "Registered camera-to-world poses are provided for static scan views, not a continuous tracked motion sequence.",
            "zh": "提供静态扫描视图的配准相机位姿，并非连续运动的独立跟踪轨迹。"
          }
        },
        "evidence": [
          "https://niessner.github.io/Matterport/",
          "https://github.com/niessner/Matterport/blob/master/data_organization.md",
          "https://github.com/niessner/Matterport"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "established",
        "rank": 1,
        "scope": {
          "zh": "全景室内深度",
          "en": "Panoramic indoor depth"
        },
        "reason": {
          "zh": "已有全景深度方法提供固定预处理、训练与测试流程。",
          "en": "Panoramic depth methods provide established preprocessing and evaluation recipes."
        },
        "evidence": [
          {
            "url": "https://niessner.github.io/Matterport/",
            "title": "Official dataset protocol and release documentation"
          },
          {
            "url": "https://github.com/alibaba/UniFuse-Unidirectional-Fusion",
            "title": "UniFuse official dataset preparation and evaluation recipes"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_matterport3d.webp",
        "thumbnail": "assets/datasets/ds_matterport3d-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://niessner.github.io/Matterport/",
        "sourceTitle": "Matterport3D official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "Textured building reconstruction, panoramic RGB-D and object annotations from the official Matterport3D overview.",
          "zh": "官方 Matterport3D 总览：建筑纹理重建、全景 RGB-D 与物体标注。"
        },
        "attribution": {
          "en": "Source: Matterport3D project authors, official dataset preview.",
          "zh": "来源：Matterport3D 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: Matterport3D project authors, official dataset preview.",
          "zh": "来源：Matterport3D 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "c2a65c6740e6418d254ac633e7dea432bbd8d4078cc522546de019761c9734c5",
        "thumbnailSha256": "6fbaf654e538d8eb5b5c47908330c8e20ba6dbb1b7ba4e46f36cedbc15af5e0c",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://niessner.github.io/Matterport/teaser.png",
        "sourceSha256": "c6490a56dd712fecc932bb2ba4bf639e5c46c5ddb59244a1b03fc7c2cbf0d59e",
        "selectionNotes": "Official project image converted to WebP and proportionally resized without changing its content."
      }
    },
    {
      "id": "ds_robotcar",
      "name": "Oxford RobotCar",
      "title": "1 Year, 1000km: The Oxford RobotCar Dataset",
      "year": 2017,
      "cameras": [
        "fisheye",
        "wide",
        "perspective",
        "multi"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "Trinocular stereo",
        "Fisheye",
        "LiDAR",
        "GPS/INS"
      ],
      "sensorLabels": {
        "en": [
          "Trinocular stereo",
          "Fisheye",
          "LiDAR",
          "GPS/INS"
        ],
        "zh": [
          "三目立体",
          "鱼眼",
          "LiDAR",
          "GPS/INS"
        ]
      },
      "groundTruth": [
        "RTK reference",
        "GPS/INS"
      ],
      "groundTruthLabels": {
        "en": [
          "RTK reference",
          "GPS/INS"
        ],
        "zh": [
          "RTK 参考",
          "GPS/INS"
        ]
      },
      "access": "registration",
      "homepageUrl": "https://robotcar-dataset.robots.ox.ac.uk/",
      "paperUrl": "https://doi.org/10.1177/0278364916679498",
      "downloadUrl": "https://robotcar-dataset.robots.ox.ac.uk/downloads/",
      "license": {
        "en": "CC BY-NC-SA 4.0; registration is required for downloads.",
        "zh": "CC BY-NC-SA 4.0；下载需注册。"
      },
      "summary": "跨天气、季节反复采集的城市路线，含双目与 180° 鱼眼视图，适合长期定位研究。",
      "details": {
        "en": {
          "Geometry": "Forward trinocular stereo plus left/right/rear fisheye cameras; source images are unrectified Bayer PNGs.",
          "Reference quality": "Use the separate 2020 RTK release and its validity flags for global evaluation; original GPS/INS quality varies.",
          "Not ground truth": "vo.csv is a drifting local visual-odometry reference, explicitly not global or relative-pose ground truth.",
          "Calibration and timing": "Intrinsics, rectification lookup tables, extrinsics and per-sensor timestamps are supplied; sensors have different rates.",
          "Year and evaluation": "2017 is the journal volume year (online publication 2016). Specify traversal split, RTK coverage and the coordinate transform."
        },
        "zh": {
          "成像模型": "前向三目加左/右/后三个鱼眼相机；原图为未经校正的 Bayer PNG。",
          "参考质量": "全局评测采用单独发布的 2020 年 RTK 参考及有效标记；原始 GPS/INS 的质量随场景变化。",
          "非真值数据": "vo.csv 只是会漂移的局部视觉里程计参考，官方明确不把它当作相对或全局位姿真值。",
          "标定与时间": "提供内参、校正查找表、外参与各传感器时间戳；不同传感器采样率不同。",
          "年份与评测": "2017 为期刊卷年，2016 年在线发表；需说明路线划分、RTK 覆盖与坐标变换。"
        }
      },
      "notes": {
        "en": [
          "Do not merge this release with the Radar RobotCar extension without stating the version.",
          "LiDAR projection is sparse supervision, not native dense-depth GT."
        ],
        "zh": [
          "与 Radar RobotCar 扩展一起使用时需明确版本。",
          "LiDAR 投影只能提供稀疏监督，并非原生稠密深度真值。"
        ]
      },
      "evidence": [
        {
          "url": "https://robotcar-dataset.robots.ox.ac.uk/",
          "title": "Oxford RobotCar overview, licence and registration"
        },
        {
          "url": "https://robotcar-dataset.robots.ox.ac.uk/documentation/",
          "title": "RobotCar sensor models and VO reference warning"
        },
        {
          "url": "https://arxiv.org/abs/2002.10152",
          "title": "2020 RTK ground-truth release"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Repeated urban traversals across weather and seasons with stereo and 180° fisheye views, useful for long-term localisation.",
        "zh": "跨天气、季节反复采集的城市路线，含双目与 180° 鱼眼视图，适合长期定位研究。"
      },
      "datasetDetails": {
        "en": {
          "Geometry": "Forward trinocular stereo plus left/right/rear fisheye cameras; source images are unrectified Bayer PNGs.",
          "Reference quality": "Use the separate 2020 RTK release and its validity flags for global evaluation; original GPS/INS quality varies.",
          "Not ground truth": "vo.csv is a drifting local visual-odometry reference, explicitly not global or relative-pose ground truth.",
          "Calibration and timing": "Intrinsics, rectification lookup tables, extrinsics and per-sensor timestamps are supplied; sensors have different rates.",
          "Year and evaluation": "2017 is the journal volume year (online publication 2016). Specify traversal split, RTK coverage and the coordinate transform."
        },
        "zh": {
          "成像模型": "前向三目加左/右/后三个鱼眼相机；原图为未经校正的 Bayer PNG。",
          "参考质量": "全局评测采用单独发布的 2020 年 RTK 参考及有效标记；原始 GPS/INS 的质量随场景变化。",
          "非真值数据": "vo.csv 只是会漂移的局部视觉里程计参考，官方明确不把它当作相对或全局位姿真值。",
          "标定与时间": "提供内参、校正查找表、外参与各传感器时间戳；不同传感器采样率不同。",
          "年份与评测": "2017 为期刊卷年，2016 年在线发表；需说明路线划分、RTK 覆盖与坐标变换。"
        }
      },
      "datasetNotes": {
        "en": [
          "Do not merge this release with the Radar RobotCar extension without stating the version.",
          "LiDAR projection is sparse supervision, not native dense-depth GT."
        ],
        "zh": [
          "与 Radar RobotCar 扩展一起使用时需明确版本。",
          "LiDAR 投影只能提供稀疏监督，并非原生稠密深度真值。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY-NC-SA 4.0; registration is required for downloads.",
        "zh": "CC BY-NC-SA 4.0；下载需注册。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://robotcar-dataset.robots.ox.ac.uk/",
            "https://robotcar-dataset.robots.ox.ac.uk/documentation/",
            "https://arxiv.org/abs/2002.10152"
          ]
        },
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://robotcar-dataset.robots.ox.ac.uk/",
            "https://robotcar-dataset.robots.ox.ac.uk/documentation/",
            "https://arxiv.org/abs/2002.10152"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "LiDAR measurements and calibration support sparse image-depth projection; they do not provide native dense depth maps.",
            "zh": "LiDAR 测量与标定可用于稀疏图像深度投影，不提供原生稠密深度图。"
          }
        },
        "trajectory": {
          "status": "partial",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Use the separate RTK release and its validity flags; original GPS/INS quality varies, while vo.csv is an estimated drifting reference, not pose truth.",
            "zh": "应使用单独 RTK 发布及其有效标记；原始 GPS/INS 质量不一，而 vo.csv 是会漂移的估计参考，并非位姿真值。"
          }
        },
        "evidence": [
          "https://robotcar-dataset.robots.ox.ac.uk/",
          "https://robotcar-dataset.robots.ox.ac.uk/documentation/",
          "https://arxiv.org/abs/2002.10152"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "common",
        "rank": 8,
        "scope": {
          "zh": "长期车载定位",
          "en": "Long-term driving localization"
        },
        "reason": {
          "zh": "适合长期场景变化研究，官方 VO 不能当作精密真值。",
          "en": "Useful for long-term change studies; official VO is not precision ground truth."
        },
        "evidence": [
          {
            "url": "https://robotcar-dataset.robots.ox.ac.uk/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_robotcar.webp",
        "thumbnail": "assets/datasets/ds_robotcar-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://robotcar-dataset.robots.ox.ac.uk/",
        "sourceUrl": "https://robotcar-dataset.robots.ox.ac.uk/images/broad_st.png",
        "paperUrl": "https://doi.org/10.1177/0278364916679498",
        "sourceTitle": "Oxford RobotCar official dataset preview",
        "caption": {
          "en": "Broad Street driving image from the Oxford RobotCar project page.",
          "zh": "Oxford RobotCar 官网展示的 Broad Street 行驶图像。"
        },
        "credit": {
          "en": "Source: Oxford RobotCar authors, official project preview.",
          "zh": "来源：Oxford RobotCar 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: Oxford RobotCar authors, official project preview.",
          "zh": "来源：Oxford RobotCar 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          400,
          300
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "eff5e63d84793d6e7ff9e69faeb90805aa968974c9fe210bf0f1716109b4b710"
      }
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
      "environment": "C++ ROS1; window backend, iSAM2 and DBoW2 dependencies.",
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://rpg.ifi.uzh.ch/svo_pro.html",
            "https://github.com/uzh-rpg/rpg_svo_pro_open"
          ]
        },
        {
          "geometry": "fisheye",
          "route": "direct",
          "availability": "documented",
          "note": {
            "en": "Fisheye observations are documented; camera-specific calibration and valid image domains still apply.",
            "zh": "文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。"
          },
          "evidence": [
            "https://rpg.ifi.uzh.ch/svo_pro.html",
            "https://github.com/uzh-rpg/rpg_svo_pro_open"
          ]
        }
      ],
      "projectionSubtypes": [
        "annular"
      ],
      "additionalSupport": [
        {
          "geometry": "annular",
          "route": "direct",
          "note": {
            "en": "Catadioptric cameras are an additional calibrated mode; they are not implicitly a full-sphere ERP panorama.",
            "zh": "折反射相机为另一种标定模式，不能据此推断整球ERP全景。"
          },
          "evidence": [
            "https://rpg.ifi.uzh.ch/svo_pro.html"
          ]
        }
      ],
      "cameraReview": "carried_forward_from_existing_source_review",
      "figure": {
        "thumbnail": "assets/papers/svo_pro-thumb.webp",
        "image": "assets/papers/svo_pro.webp",
        "paperUrl": "https://rpg.ifi.uzh.ch/docs/TRO17_Forster-SVO.pdf",
        "page": 3,
        "figureLabel": "Figure 1",
        "caption": {
          "zh": "基础 SVO 的半直接运动估计与深度滤波建图流程。",
          "en": "Semi-direct motion estimation and depth-filter mapping in the underlying SVO system."
        },
        "credit": {
          "zh": "来源：论文作者，2017；1 号图截图。 图来自官方链接的 SVO 2017 基础论文，不是 SVO Pro 独立论文。",
          "en": "Source: paper authors (2017), Figure 1 crop. Figure from the officially linked SVO 2017 foundational paper, not a separate SVO Pro paper."
        },
        "kind": "method",
        "verified": true,
        "originalCaption": "Fig. 1: Tracking and mapping pipeline",
        "cropBox": [
          58,
          52,
          292,
          291.5
        ],
        "sourceLicense": "Unknown figure reuse license; copyright remains with the paper authors/publisher. Repository code license does not cover these figures.",
        "verificationNote": "Visually inspected full source page and final labeled contact-sheet crop; corrected diagram borders and labels. Actual paper figure, not a generated illustration.",
        "pdfSha256": "5c6033a40cb20686a1fc16baec94c8ca19cfbd6e19f2f1860c87fd6b82b9d9ce",
        "imageSize": [
          585,
          598
        ]
      }
    },
    {
      "id": "ds_stanford2d3ds",
      "name": "Stanford2D3D / 2D-3D-S",
      "title": "Joint 2D-3D-Semantic Data for Indoor Scene Understanding",
      "year": 2017,
      "cameras": [
        "panoramic",
        "perspective"
      ],
      "tasks": [
        "depth"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "mixed",
      "sensors": [
        "Matterport RGB-D scans"
      ],
      "sensorLabels": {
        "en": [
          "Matterport RGB-D scans"
        ],
        "zh": [
          "Matterport RGB-D 扫描"
        ]
      },
      "groundTruth": [
        "Rendered depth",
        "Camera poses",
        "Semantics and XYZ"
      ],
      "groundTruthLabels": {
        "en": [
          "Rendered depth",
          "Camera poses",
          "Semantics and XYZ"
        ],
        "zh": [
          "渲染深度",
          "相机位姿",
          "语义与 XYZ"
        ]
      },
      "access": "registration",
      "homepageUrl": "https://github.com/alexsax/2D-3D-Semantics",
      "paperUrl": "https://arxiv.org/abs/1702.01105",
      "downloadUrl": "https://github.com/alexsax/2D-3D-Semantics#download",
      "license": {
        "en": "Dataset license agreement required; repository Apache-2.0 covers software only.",
        "zh": "下载需同意数据集协议；仓库 Apache-2.0 仅覆盖软件。"
      },
      "summary": "室内配准 RGB、深度、法向、语义与 XYZ，明确提供透视和等距柱状全景版本。",
      "details": {
        "en": {
          "Projection and inputs": "The release has data/ perspective images and pano/ ERP modalities plus raw scan views. Perspective images are 1080×1080.",
          "Depth and validity": "16-bit PNG: meters = value / 512, invalid = 65535. Perspective depth is Z; panoramic depth is camera-center Euclidean distance.",
          "Ground truth": "Real scanned meshes generate registered 2D/2.5D products. Normals, global XYZ and semantic instances accompany depth.",
          "Calibration": "Pose JSON contains K, camera location and rotations. ERP metadata may say 90° FOV although the image is 360°.",
          "Evaluation": "Preserve area/building splits and disclose the exact fold. Panorama rotations and perspective crops from one station must remain together."
        },
        "zh": {
          "投影与输入": "发布包含 data/ 透视图、pano/ ERP 各模态及原始扫描视图；透视图分辨率为 1080×1080。",
          "深度与有效性": "16 位 PNG：米数＝数值 / 512，65535 无效。透视深度是 Z；全景深度是相机中心到表面的欧氏距离。",
          "真值来源": "真实扫描网格生成配准二维及 2.5D 产品，同时提供法向、全局 XYZ 和语义实例。",
          "标定": "位姿 JSON 包含 K、相机位置和旋转。ERP 元数据可能写 90° FOV，但图像实际为 360°。",
          "评测协议": "保留区域、建筑级划分并注明具体折次；同一扫描站的全景旋转与透视裁剪必须放在同一集合。"
        }
      },
      "notes": {
        "en": [
          "Do not substitute the S3DIS point-cloud-only release for the richer 2D-3D-S release."
        ],
        "zh": [
          "不能用仅点云的 S3DIS 发布替代包含丰富二维模态的 2D-3D-S。"
        ]
      },
      "evidence": [
        {
          "url": "https://github.com/alexsax/2D-3D-Semantics",
          "title": "Official modalities, data license and depth encoding"
        },
        {
          "url": "https://arxiv.org/abs/1702.01105",
          "title": "Dataset paper"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Registered indoor RGB, depth, normals, semantics and XYZ, explicitly supplied as perspective and equirectangular products.",
        "zh": "室内配准 RGB、深度、法向、语义与 XYZ，明确提供透视和等距柱状全景版本。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "The release has data/ perspective images and pano/ ERP modalities plus raw scan views. Perspective images are 1080×1080.",
          "Depth and validity": "16-bit PNG: meters = value / 512, invalid = 65535. Perspective depth is Z; panoramic depth is camera-center Euclidean distance.",
          "Ground truth": "Real scanned meshes generate registered 2D/2.5D products. Normals, global XYZ and semantic instances accompany depth.",
          "Calibration": "Pose JSON contains K, camera location and rotations. ERP metadata may say 90° FOV although the image is 360°.",
          "Evaluation": "Preserve area/building splits and disclose the exact fold. Panorama rotations and perspective crops from one station must remain together."
        },
        "zh": {
          "投影与输入": "发布包含 data/ 透视图、pano/ ERP 各模态及原始扫描视图；透视图分辨率为 1080×1080。",
          "深度与有效性": "16 位 PNG：米数＝数值 / 512，65535 无效。透视深度是 Z；全景深度是相机中心到表面的欧氏距离。",
          "真值来源": "真实扫描网格生成配准二维及 2.5D 产品，同时提供法向、全局 XYZ 和语义实例。",
          "标定": "位姿 JSON 包含 K、相机位置和旋转。ERP 元数据可能写 90° FOV，但图像实际为 360°。",
          "评测协议": "保留区域、建筑级划分并注明具体折次；同一扫描站的全景旋转与透视裁剪必须放在同一集合。"
        }
      },
      "datasetNotes": {
        "en": [
          "Do not substitute the S3DIS point-cloud-only release for the richer 2D-3D-S release."
        ],
        "zh": [
          "不能用仅点云的 S3DIS 发布替代包含丰富二维模态的 2D-3D-S。"
        ]
      },
      "datasetLicense": {
        "en": "Dataset license agreement required; repository Apache-2.0 covers software only.",
        "zh": "下载需同意数据集协议；仓库 Apache-2.0 仅覆盖软件。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "panoramic",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "The official pano modality provides ERP products alongside separate perspective products.",
            "zh": "官方pano模态提供ERP产品，同时有独立透视产品。"
          },
          "evidence": [
            "https://github.com/alexsax/2D-3D-Semantics",
            "https://arxiv.org/abs/1702.01105"
          ]
        },
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://github.com/alexsax/2D-3D-Semantics",
            "https://arxiv.org/abs/1702.01105"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": true,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Perspective and panoramic depths are rendered from real scanned geometry; preserve projection-specific depth definitions and invalid masks.",
            "zh": "透视与全景深度由实扫几何渲染；需保留不同投影的深度定义及无效掩码。"
          }
        },
        "trajectory": {
          "status": "partial",
          "provenance": [
            "estimated"
          ],
          "note": {
            "en": "Per-view registered camera metadata is released; these scan viewpoints do not constitute a continuous motion trajectory.",
            "zh": "提供逐视图配准相机元数据；这些扫描视点并不构成连续运动轨迹。"
          }
        },
        "evidence": [
          "https://github.com/alexsax/2D-3D-Semantics",
          "https://arxiv.org/abs/1702.01105"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "established",
        "rank": 2,
        "scope": {
          "zh": "全景室内深度",
          "en": "Panoramic indoor depth"
        },
        "reason": {
          "zh": "全景深度工作常用的区域划分对照；须沿用具体论文协议。",
          "en": "A recurring area-split control in panoramic depth; follow the selected paper protocol."
        },
        "evidence": [
          {
            "url": "https://github.com/alexsax/2D-3D-Semantics",
            "title": "Official dataset protocol and release documentation"
          },
          {
            "url": "https://github.com/alibaba/UniFuse-Unidirectional-Fusion",
            "title": "UniFuse official dataset preparation and evaluation recipes"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_stanford2d3ds.webp",
        "thumbnail": "assets/datasets/ds_stanford2d3ds-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://github.com/alexsax/2D-3D-Semantics",
        "sourceTitle": "Stanford2D3D / 2D-3D-S official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "Aligned panoramic RGB, depth, semantic labels, mesh and normals from the official 2D-3D-S release.",
          "zh": "官方 2D-3D-S 发布展示的配准全景 RGB、深度、语义、网格及法向。"
        },
        "attribution": {
          "en": "Source: Stanford2D3D / 2D-3D-S project authors, official dataset preview.",
          "zh": "来源：Stanford2D3D / 2D-3D-S 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: Stanford2D3D / 2D-3D-S project authors, official dataset preview.",
          "zh": "来源：Stanford2D3D / 2D-3D-S 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "eab91ab75507fcf4f3eb6fdd64cca917601306f038bf389a63333c7e1ee0518c",
        "thumbnailSha256": "9e2094957287b5f35c02cce6d36450901ff49b68adf1dae77299d4bd6f8e1413",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://raw.githubusercontent.com/alexsax/2D-3D-Semantics/master/assets/figure_1.jpg",
        "sourceSha256": "2fc6cd759b59e3cd3df7109cceefb1f52cb3588c9cfc40d203c8064c8d13c919",
        "selectionNotes": "Official project image converted to WebP and proportionally resized without changing its content."
      }
    },
    {
      "id": "ds_euroc",
      "name": "EuRoC MAV",
      "title": "The EuRoC micro aerial vehicle datasets",
      "year": 2016,
      "cameras": [
        "perspective",
        "multi"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "real",
      "sensors": [
        "Stereo",
        "IMU",
        "Laser tracker",
        "MoCap"
      ],
      "sensorLabels": {
        "en": [
          "Stereo",
          "IMU",
          "Laser tracker",
          "MoCap"
        ],
        "zh": [
          "双目",
          "IMU",
          "激光跟踪仪",
          "动作捕捉"
        ]
      },
      "groundTruth": [
        "Metric poses",
        "3D structure"
      ],
      "groundTruthLabels": {
        "en": [
          "Metric poses",
          "3D structure"
        ],
        "zh": [
          "米制位姿",
          "三维结构"
        ]
      },
      "access": "open",
      "homepageUrl": "https://projects.asl.ethz.ch/datasets/euroc-mav/",
      "paperUrl": "https://doi.org/10.1177/0278364915620033",
      "downloadUrl": "https://doi.org/10.3929/ethz-b-000690084",
      "license": {
        "en": "Consult the ETH Research Collection record; dataset licence was not independently verified in this audit.",
        "zh": "以 ETH Research Collection 条目许可为准；本次未独立核验数据许可。"
      },
      "summary": "经典双目惯性无人机基准，提供米制运动参考，可作为广视场 VIO 的透视相机对照。",
      "details": {
        "en": {
          "Geometry": "Monochrome stereo, 20 Hz; IMU, 200 Hz. Not a panoramic or fisheye release.",
          "Ground-truth provenance": "Vicon 6DoF pose or Leica laser-tracker 3D position, depending on sequence; structure scans are also available.",
          "Calibration and time": "Camera intrinsics, camera–IMU extrinsics and aligned references are supplied. Separate reference recording systems leave documented synchronization limits.",
          "Evaluation": "Use the supplied sensor/body transforms and timestamps; position-only laser measurements do not independently observe every orientation.",
          "Download": "Official hosting moved to ETH Research Collection."
        },
        "zh": {
          "成像模型": "20 Hz 灰度双目与 200 Hz IMU；不是全景或鱼眼数据。",
          "真值来源": "不同序列采用 Vicon 六自由度位姿或 Leica 激光跟踪三维位置，并提供结构扫描。",
          "标定与时间": "提供相机内参、相机–IMU 外参和已对齐参考；独立参考采集系统仍有文档说明的同步限制。",
          "评测": "使用数据所定义的传感器/机体变换与时间戳；激光仪的纯位置测量不能独立观测所有姿态。",
          "下载": "官方文件已迁移至 ETH Research Collection。"
        }
      },
      "notes": {
        "en": [
          "No per-frame dense image-depth ground truth is assumed.",
          "Aggressive motion can degrade the laser-tracker reference."
        ],
        "zh": [
          "不将其视为逐帧稠密图像深度真值集。",
          "剧烈运动可能降低激光跟踪参考质量。"
        ]
      },
      "evidence": [
        {
          "url": "https://projects.asl.ethz.ch/datasets/euroc-mav/",
          "title": "ETH ASL: EuRoC MAV dataset and known issues"
        },
        {
          "url": "https://doi.org/10.1177/0278364915620033",
          "title": "EuRoC dataset paper"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Canonical stereo-inertial MAV benchmark with metric motion references; a perspective-camera baseline for wide-FoV VIO studies.",
        "zh": "经典双目惯性无人机基准，提供米制运动参考，可作为广视场 VIO 的透视相机对照。"
      },
      "datasetDetails": {
        "en": {
          "Geometry": "Monochrome stereo, 20 Hz; IMU, 200 Hz. Not a panoramic or fisheye release.",
          "Ground-truth provenance": "Vicon 6DoF pose or Leica laser-tracker 3D position, depending on sequence; structure scans are also available.",
          "Calibration and time": "Camera intrinsics, camera–IMU extrinsics and aligned references are supplied. Separate reference recording systems leave documented synchronization limits.",
          "Evaluation": "Use the supplied sensor/body transforms and timestamps; position-only laser measurements do not independently observe every orientation.",
          "Download": "Official hosting moved to ETH Research Collection."
        },
        "zh": {
          "成像模型": "20 Hz 灰度双目与 200 Hz IMU；不是全景或鱼眼数据。",
          "真值来源": "不同序列采用 Vicon 六自由度位姿或 Leica 激光跟踪三维位置，并提供结构扫描。",
          "标定与时间": "提供相机内参、相机–IMU 外参和已对齐参考；独立参考采集系统仍有文档说明的同步限制。",
          "评测": "使用数据所定义的传感器/机体变换与时间戳；激光仪的纯位置测量不能独立观测所有姿态。",
          "下载": "官方文件已迁移至 ETH Research Collection。"
        }
      },
      "datasetNotes": {
        "en": [
          "No per-frame dense image-depth ground truth is assumed.",
          "Aggressive motion can degrade the laser-tracker reference."
        ],
        "zh": [
          "不将其视为逐帧稠密图像深度真值集。",
          "剧烈运动可能降低激光跟踪参考质量。"
        ]
      },
      "datasetLicense": {
        "en": "Consult the ETH Research Collection record; dataset licence was not independently verified in this audit.",
        "zh": "以 ETH Research Collection 条目许可为准；本次未独立核验数据许可。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://projects.asl.ethz.ch/datasets/euroc-mav/",
            "https://doi.org/10.1177/0278364915620033"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "The release provides a surveyed structure scan, not per-frame image-depth annotations; stereo images alone are not depth truth.",
            "zh": "发布中有测绘结构扫描，但无逐帧图像深度标注；双目图像本身不等于深度真值。"
          }
        },
        "trajectory": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Vicon 6DoF poses or Leica 3D positions provide measured references, depending on sequence; do not infer every orientation from laser positions.",
            "zh": "按序列提供 Vicon 六自由度位姿或 Leica 三维位置测量；不可从激光位置推断每个方向量均被独立观测。"
          }
        },
        "evidence": [
          "https://projects.asl.ethz.ch/datasets/euroc-mav/",
          "https://doi.org/10.1177/0278364915620033"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "established",
        "rank": 5,
        "scope": {
          "zh": "双目惯性里程计",
          "en": "Stereo-inertial odometry"
        },
        "reason": {
          "zh": "稳定的传感器标定与参考轨迹，是视觉惯性系统的经典对照。",
          "en": "Established calibration and trajectory references support standard VIO comparisons."
        },
        "evidence": [
          {
            "url": "https://projects.asl.ethz.ch/datasets/euroc-mav/",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_euroc.webp",
        "thumbnail": "assets/datasets/ds_euroc-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://projects.asl.ethz.ch/datasets/euroc-mav/",
        "sourceUrl": "https://projects.asl.ethz.ch/assets/datasets/euroc/overview_ml.jpg",
        "paperUrl": "https://doi.org/10.1177/0278364915620033",
        "sourceTitle": "EuRoC MAV official dataset preview",
        "caption": {
          "en": "ETH machine-hall recording environment from the EuRoC project page.",
          "zh": "EuRoC 官网展示的 ETH 机械大厅采集环境。"
        },
        "credit": {
          "en": "Source: EuRoC MAV authors, official project preview.",
          "zh": "来源：EuRoC MAV 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: EuRoC MAV authors, official project preview.",
          "zh": "来源：EuRoC MAV 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          230,
          153
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "fb499ff73a6516915af0943e190e9be3226d904acfd077751b3e663425316a5b"
      }
    },
    {
      "id": "ds_rpg_fov",
      "name": "RPG Multi-FoV",
      "title": "Benefit of Large Field-of-View Cameras for Visual Odometry",
      "year": 2016,
      "cameras": [
        "fisheye",
        "wide",
        "perspective"
      ],
      "tasks": [
        "depth",
        "slam"
      ],
      "environment": [
        "indoor",
        "outdoor"
      ],
      "reality": "synthetic",
      "sensors": [
        "Rendered camera images"
      ],
      "sensorLabels": {
        "en": [
          "Rendered camera images"
        ],
        "zh": [
          "合成相机图像"
        ]
      },
      "groundTruth": [
        "Rendered range",
        "Simulator poses"
      ],
      "groundTruthLabels": {
        "en": [
          "Rendered range",
          "Simulator poses"
        ],
        "zh": [
          "渲染射线距离",
          "仿真位姿"
        ]
      },
      "access": "open",
      "homepageUrl": "https://rpg.ifi.uzh.ch/fov.html",
      "paperUrl": "https://rpg.ifi.uzh.ch/docs/ICRA16_Zhang.pdf",
      "downloadUrl": "https://rpg.ifi.uzh.ch/fov.html",
      "license": {
        "en": "CC BY-NC-SA 3.0 for the dataset and Blender patch; attribution, non-commercial use and share-alike conditions apply.",
        "zh": "数据集及 Blender 补丁采用 CC BY-NC-SA 3.0，须署名、限非商业用途并遵守相同方式共享条件。"
      },
      "summary": "以城市和室内合成序列对比透视、鱼眼及折反射成像，提供标定、相机位姿和射线距离深度，适合研究视场对 VO 与深度估计的影响。",
      "details": {
        "en": {
          "Scenes and release scope": "Blender Cycles renders two environments, Urban Canyon (a vehicle moving through a city) and Room/Indoor (a hovering or circularly moving camera in a confined room), each with three optics. The requested download page currently exposes these synthetic releases; real Flyroom and Zurich experiments in the paper are not assumed to be included.",
          "Optics and representation": "The paper reports nominal 90° perspective, 180° fisheye and 360° catadioptric configurations. The catadioptric view is an annular omnidirectional image with 360° azimuth, not a full-sphere 2:1 ERP panorama. The catadioptric camera faces upward toward its mirror; other synthetic camera orientations differ by scene.",
          "Sampling and size": "Official info archives list 2500 images/poses per Urban Canyon optic and 200 per Room optic, with image timestamps at approximately 30 Hz. Fisheye/catadioptric calibration files explicitly specify 640×480; the project holds sensor image resolution constant across optics. These are alternative rendered runs, not a synchronized physical multicamera or inertial rig.",
          "Calibration": "intrinsics.txt supplies a pinhole K matrix for perspective images and OCamCalib polynomial omnidirectional parameters for fisheye/catadioptric images. Backproject using that model and retain circular/annular validity masks; the supplied C++ model checks only rectangular image boundaries.",
          "Pose format and association": "groundtruth.txt stores image_id tx ty tz qx qy qz qw and T_world_camera, transforming camera coordinates into the world frame. Join image_id to images.txt for the timestamp in seconds; the first ground-truth column is a frame identifier, not a timestamp. These are simulator references, not estimated SLAM trajectories or motion capture.",
          "Depth meaning and encoding": "The optional .depth maps contain floating-point ASCII values separated by spaces, row-major and at image size. They store Euclidean distance along the optical ray, including the perspective release. With a unit bearing f, Z-depth = range × f_z; do not interpret the stored range as optical-axis Z.",
          "Depth coverage check": "The Room info archives enumerate 200 depth associations for each optic. Each Urban Canyon info archive lists only the first depth association despite 2500 image/pose entries. The larger depth archives are publicly reachable but were not fully downloaded in this audit; complete urban per-frame depth coverage must be checked in the chosen archive before evaluation.",
          "Evaluation and splits": "This is a controlled FoV/VO comparison with two scenes, not an official large-scale train/validation/test depth benchmark. No standard learning split is stated on the reviewed page or archive README. Avoid splitting corresponding optics of the same scene/trajectory across training and testing; use the appropriate camera orientation, model and valid pixel domain.",
          "Access and provenance": "Official image, depth, calibration/trajectory info and Blender-scene archives are linked without registration. Download endpoints responded successfully on 2026-10-19; only the six small info archives were downloaded. An IMU stream or hardware synchronization is not established by this synthetic release."
        },
        "zh": {
          "场景与收录范围": "Blender Cycles 渲染两个环境：Urban Canyon 模拟车辆穿行城市，Room/Indoor 模拟狭小房间中悬停或绕圆运动的相机；每个环境有三种光学配置。用户提供的下载页当前展示这些合成数据，不据论文中的实验推定真实 Flyroom 和 Zurich 序列也在此发布。",
          "光学与图像表示": "论文给出标称 90° 透视、180° 鱼眼及 360° 折反射配置。折反射图像是覆盖 360° 方位角的环形全向像面，不是覆盖完整球面的 2∶1 ERP 全景。折反射相机朝上面向镜面；其他合成相机的朝向随场景而异。",
          "采样与规模": "官方 info 小包中，Urban Canyon 每种光学配置含 2500 条图像/位姿，Room 每种含 200 条；图像时间戳间隔约为 1/30 秒。鱼眼/折反射标定文件明确写 640×480，项目固定各配置的传感器图像分辨率。这些是不同光学配置的渲染序列，不是同步的真实多相机或惯性设备。",
          "标定": "intrinsics.txt 对透视图像提供针孔 K 矩阵，对鱼眼/折反射图像提供 OCamCalib 多项式全向模型参数。按对应模型反投影并保留圆形/环形有效掩码；官方 C++ 实现的可见性检查仅判断矩形边界。",
          "位姿格式与关联": "groundtruth.txt 格式为 image_id tx ty tz qx qy qz qw，变换为 T_world_camera，将相机坐标变到世界坐标。通过 image_id 与 images.txt 关联获取秒制时间戳；真值首列是帧 ID，不是时间戳。这些是仿真参考，不是 SLAM 估计轨迹或动作捕捉测量。",
          "深度语义与编码": "可选 .depth 文件以空格分隔的浮点 ASCII 编码，逐行存储，尺寸与图像相同。各配置（包括透视）存储的都是沿光学射线的欧氏距离 range。对单位视线 f，Z-depth = range × f_z；不能把文件内的距离直接当光轴 Z。",
          "深度覆盖核查": "Room 的 info 包为每种配置列出 200 条深度关联；Urban Canyon 虽有 2500 条图像/位姿，但各 info 包的深度关联表仅列第一帧。本次确认大深度包可公开访问，未完整下载；正式评测前须在所选数据包中核查城市序列逐帧深度是否齐全。",
          "评测与划分": "这是两个场景的受控视场/VO 对比数据，不是官方大型深度学习训练基准。已核网页及包内 README 未规定统一训练/验证/测试划分。避免将同场景、同轨迹的不同光学配置拆到训练与测试两侧，并使用对应相机朝向、模型及有效像素域。",
          "获取与来源": "官方提供无需注册的图像、深度、标定/轨迹 info 及 Blender 场景包链接，2026-10-19 检查下载端点成功。本次仅下载六个小型 info 包；该合成发布未确立 IMU 数据流或硬件同步信息。"
        }
      },
      "notes": {
        "en": [
          "The 360° catadioptric release is not classified as an ERP/full-sphere panoramic dataset in this atlas.",
          "Depth and poses are generated by simulation; they do not measure real-scene sensor noise or generalization.",
          "Photorealism was not the original release's main objective."
        ],
        "zh": [
          "本图谱不将 360° 折反射环视数据归入 ERP/完整球面全景数据集筛选。",
          "深度与位姿来自仿真，不能表征真实传感器噪声或真实场景泛化。",
          "原始发布以几何条件下的 VO 对比为主，并非以完美照片真实感为目标。"
        ]
      },
      "evidence": [
        {
          "url": "https://rpg.ifi.uzh.ch/fov.html",
          "title": "UZH RPG Multi-FoV synthetic datasets, archive links and licence"
        },
        {
          "url": "https://rpg.ifi.uzh.ch/docs/ICRA16_Zhang.pdf",
          "title": "ICRA 2016 paper, synthetic optics and scene/trajectory setup"
        },
        {
          "url": "https://rpg.ifi.uzh.ch/datasets/rpg_urban_pinhole_info.tar.gz",
          "title": "Official Urban Canyon info: image IDs, poses, calibration and optical-ray depth README"
        },
        {
          "url": "https://rpg.ifi.uzh.ch/datasets/rpg_urban_fisheye_info.tar.gz",
          "title": "Official Urban Canyon fisheye calibration and association files"
        },
        {
          "url": "https://rpg.ifi.uzh.ch/datasets/rpg_urban_cata_info.tar.gz",
          "title": "Official Urban Canyon catadioptric calibration and association files"
        },
        {
          "url": "https://rpg.ifi.uzh.ch/datasets/rpg_vfr_pinhole_info.tar.gz",
          "title": "Official Room perspective info and association files"
        },
        {
          "url": "https://rpg.ifi.uzh.ch/datasets/rpg_vfr_fisheye_info.tar.gz",
          "title": "Official Room fisheye calibration and association files"
        },
        {
          "url": "https://rpg.ifi.uzh.ch/datasets/rpg_vfr_cata_info.tar.gz",
          "title": "Official Room catadioptric calibration and association files"
        },
        {
          "url": "https://github.com/zhangzichao/omni_cam",
          "title": "Author's polynomial omnidirectional camera model and image-mask warning"
        },
        {
          "url": "https://github.com/uzh-rpg/rpg_blender_omni_camera",
          "title": "Official Cycles omnidirectional camera patch and model parameters"
        }
      ],
      "checked": "2026-10-19",
      "authors": "Zichao Zhang; Henri Rebecq; Christian Forster; Davide Scaramuzza",
      "venue": "ICRA 2016",
      "aliases": [
        "Multi-FoV",
        "Multi-FOV",
        "RPG Multi-FoV",
        "UZH RPG Multi-FoV",
        "Urban Canyon",
        "Room",
        "Indoor",
        "Benefit of Large Field-of-View Cameras for Visual Odometry"
      ],
      "collection": "datasets",
      "localizedSummary": {
        "en": "Controlled synthetic urban and room sequences compare perspective, fisheye and catadioptric optics, with calibration, camera poses and optical-ray depth for FoV-aware VO and depth research.",
        "zh": "以城市和室内合成序列对比透视、鱼眼及折反射成像，提供标定、相机位姿和射线距离深度，适合研究视场对 VO 与深度估计的影响。"
      },
      "datasetDetails": {
        "en": {
          "Scenes and release scope": "Blender Cycles renders two environments, Urban Canyon (a vehicle moving through a city) and Room/Indoor (a hovering or circularly moving camera in a confined room), each with three optics. The requested download page currently exposes these synthetic releases; real Flyroom and Zurich experiments in the paper are not assumed to be included.",
          "Optics and representation": "The paper reports nominal 90° perspective, 180° fisheye and 360° catadioptric configurations. The catadioptric view is an annular omnidirectional image with 360° azimuth, not a full-sphere 2:1 ERP panorama. The catadioptric camera faces upward toward its mirror; other synthetic camera orientations differ by scene.",
          "Sampling and size": "Official info archives list 2500 images/poses per Urban Canyon optic and 200 per Room optic, with image timestamps at approximately 30 Hz. Fisheye/catadioptric calibration files explicitly specify 640×480; the project holds sensor image resolution constant across optics. These are alternative rendered runs, not a synchronized physical multicamera or inertial rig.",
          "Calibration": "intrinsics.txt supplies a pinhole K matrix for perspective images and OCamCalib polynomial omnidirectional parameters for fisheye/catadioptric images. Backproject using that model and retain circular/annular validity masks; the supplied C++ model checks only rectangular image boundaries.",
          "Pose format and association": "groundtruth.txt stores image_id tx ty tz qx qy qz qw and T_world_camera, transforming camera coordinates into the world frame. Join image_id to images.txt for the timestamp in seconds; the first ground-truth column is a frame identifier, not a timestamp. These are simulator references, not estimated SLAM trajectories or motion capture.",
          "Depth meaning and encoding": "The optional .depth maps contain floating-point ASCII values separated by spaces, row-major and at image size. They store Euclidean distance along the optical ray, including the perspective release. With a unit bearing f, Z-depth = range × f_z; do not interpret the stored range as optical-axis Z.",
          "Depth coverage check": "The Room info archives enumerate 200 depth associations for each optic. Each Urban Canyon info archive lists only the first depth association despite 2500 image/pose entries. The larger depth archives are publicly reachable but were not fully downloaded in this audit; complete urban per-frame depth coverage must be checked in the chosen archive before evaluation.",
          "Evaluation and splits": "This is a controlled FoV/VO comparison with two scenes, not an official large-scale train/validation/test depth benchmark. No standard learning split is stated on the reviewed page or archive README. Avoid splitting corresponding optics of the same scene/trajectory across training and testing; use the appropriate camera orientation, model and valid pixel domain.",
          "Access and provenance": "Official image, depth, calibration/trajectory info and Blender-scene archives are linked without registration. Download endpoints responded successfully on 2026-10-19; only the six small info archives were downloaded. An IMU stream or hardware synchronization is not established by this synthetic release."
        },
        "zh": {
          "场景与收录范围": "Blender Cycles 渲染两个环境：Urban Canyon 模拟车辆穿行城市，Room/Indoor 模拟狭小房间中悬停或绕圆运动的相机；每个环境有三种光学配置。用户提供的下载页当前展示这些合成数据，不据论文中的实验推定真实 Flyroom 和 Zurich 序列也在此发布。",
          "光学与图像表示": "论文给出标称 90° 透视、180° 鱼眼及 360° 折反射配置。折反射图像是覆盖 360° 方位角的环形全向像面，不是覆盖完整球面的 2∶1 ERP 全景。折反射相机朝上面向镜面；其他合成相机的朝向随场景而异。",
          "采样与规模": "官方 info 小包中，Urban Canyon 每种光学配置含 2500 条图像/位姿，Room 每种含 200 条；图像时间戳间隔约为 1/30 秒。鱼眼/折反射标定文件明确写 640×480，项目固定各配置的传感器图像分辨率。这些是不同光学配置的渲染序列，不是同步的真实多相机或惯性设备。",
          "标定": "intrinsics.txt 对透视图像提供针孔 K 矩阵，对鱼眼/折反射图像提供 OCamCalib 多项式全向模型参数。按对应模型反投影并保留圆形/环形有效掩码；官方 C++ 实现的可见性检查仅判断矩形边界。",
          "位姿格式与关联": "groundtruth.txt 格式为 image_id tx ty tz qx qy qz qw，变换为 T_world_camera，将相机坐标变到世界坐标。通过 image_id 与 images.txt 关联获取秒制时间戳；真值首列是帧 ID，不是时间戳。这些是仿真参考，不是 SLAM 估计轨迹或动作捕捉测量。",
          "深度语义与编码": "可选 .depth 文件以空格分隔的浮点 ASCII 编码，逐行存储，尺寸与图像相同。各配置（包括透视）存储的都是沿光学射线的欧氏距离 range。对单位视线 f，Z-depth = range × f_z；不能把文件内的距离直接当光轴 Z。",
          "深度覆盖核查": "Room 的 info 包为每种配置列出 200 条深度关联；Urban Canyon 虽有 2500 条图像/位姿，但各 info 包的深度关联表仅列第一帧。本次确认大深度包可公开访问，未完整下载；正式评测前须在所选数据包中核查城市序列逐帧深度是否齐全。",
          "评测与划分": "这是两个场景的受控视场/VO 对比数据，不是官方大型深度学习训练基准。已核网页及包内 README 未规定统一训练/验证/测试划分。避免将同场景、同轨迹的不同光学配置拆到训练与测试两侧，并使用对应相机朝向、模型及有效像素域。",
          "获取与来源": "官方提供无需注册的图像、深度、标定/轨迹 info 及 Blender 场景包链接，2026-10-19 检查下载端点成功。本次仅下载六个小型 info 包；该合成发布未确立 IMU 数据流或硬件同步信息。"
        }
      },
      "datasetNotes": {
        "en": [
          "The 360° catadioptric release is not classified as an ERP/full-sphere panoramic dataset in this atlas.",
          "Depth and poses are generated by simulation; they do not measure real-scene sensor noise or generalization.",
          "Photorealism was not the original release's main objective."
        ],
        "zh": [
          "本图谱不将 360° 折反射环视数据归入 ERP/完整球面全景数据集筛选。",
          "深度与位姿来自仿真，不能表征真实传感器噪声或真实场景泛化。",
          "原始发布以几何条件下的 VO 对比为主，并非以完美照片真实感为目标。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY-NC-SA 3.0 for the dataset and Blender patch; attribution, non-commercial use and share-alike conditions apply.",
        "zh": "数据集及 Blender 补丁采用 CC BY-NC-SA 3.0，须署名、限非商业用途并遵守相同方式共享条件。"
      },
      "sourceChecked": "2026-10-19",
      "cameraSupport": [
        {
          "geometry": "fisheye",
          "route": "rendered",
          "availability": "released",
          "note": {
            "en": "A rendered 180-degree fisheye run is separate from perspective and catadioptric optics.",
            "zh": "180度鱼眼渲染运行与透视、折反射光学运行独立。"
          },
          "evidence": [
            "https://rpg.ifi.uzh.ch/fov.html",
            "https://rpg.ifi.uzh.ch/docs/ICRA16_Zhang.pdf",
            "https://rpg.ifi.uzh.ch/datasets/rpg_urban_pinhole_info.tar.gz"
          ]
        },
        {
          "geometry": "perspective",
          "route": "rendered",
          "availability": "released",
          "note": {
            "en": "A rendered 90-degree perspective run is separately released with calibration, poses and optical-ray depth.",
            "zh": "另发布90度透视渲染运行，配套标定、位姿及沿光线深度。"
          },
          "evidence": [
            "https://rpg.ifi.uzh.ch/fov.html",
            "https://rpg.ifi.uzh.ch/docs/ICRA16_Zhang.pdf",
            "https://rpg.ifi.uzh.ch/datasets/rpg_urban_pinhole_info.tar.gz"
          ]
        }
      ],
      "projectionSubtypes": [
        "annular"
      ],
      "additionalSupport": [
        {
          "geometry": "annular",
          "route": "direct",
          "note": {
            "en": "The 360-degree catadioptric release is annular with limited elevation, distinct from the 180-degree fisheye and 90-degree perspective runs.",
            "zh": "360度折反射发布为有限俯仰的环形图，与180度鱼眼和90度透视运行不同。"
          },
          "evidence": [
            "https://rpg.ifi.uzh.ch/fov.html"
          ]
        }
      ],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "partial",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Room depth associations are confirmed for all three optics. Urban info archives list one depth association each; full urban frame coverage was not verified.",
            "zh": "Room 三种成像模型的深度关联已确认；Urban 信息归档每种仅列一条深度关联，尚未验证完整城市逐帧覆盖。"
          }
        },
        "trajectory": {
          "status": "yes",
          "provenance": [
            "rendered"
          ],
          "note": {
            "en": "Simulator camera-to-world poses are supplied per image; associate frame IDs with image timestamps rather than reading IDs as seconds.",
            "zh": "逐图像提供仿真相机到世界位姿；须将帧 ID 关联至图像时间戳，不可将 ID 当作秒。"
          }
        },
        "evidence": [
          "https://rpg.ifi.uzh.ch/fov.html",
          "https://rpg.ifi.uzh.ch/docs/ICRA16_Zhang.pdf",
          "https://rpg.ifi.uzh.ch/datasets/rpg_urban_pinhole_info.tar.gz",
          "https://rpg.ifi.uzh.ch/datasets/rpg_urban_fisheye_info.tar.gz",
          "https://rpg.ifi.uzh.ch/datasets/rpg_urban_cata_info.tar.gz",
          "https://rpg.ifi.uzh.ch/datasets/rpg_vfr_pinhole_info.tar.gz",
          "https://rpg.ifi.uzh.ch/datasets/rpg_vfr_fisheye_info.tar.gz",
          "https://rpg.ifi.uzh.ch/datasets/rpg_vfr_cata_info.tar.gz",
          "https://github.com/zhangzichao/omni_cam",
          "https://github.com/uzh-rpg/rpg_blender_omni_camera"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "specialized",
        "rank": 2,
        "scope": {
          "zh": "视场与 VO 对照",
          "en": "FoV / VO controls"
        },
        "reason": {
          "zh": "两种场景的受控光学对照；规模较小，城市深度索引需额外核查。",
          "en": "Controlled optics in two small scenes; verify urban depth indexing."
        },
        "evidence": [
          {
            "url": "https://rpg.ifi.uzh.ch/fov.html",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_rpg_fov.webp",
        "thumbnail": "assets/datasets/ds_rpg_fov-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://rpg.ifi.uzh.ch/fov.html",
        "sourceUrl": "https://rpg.ifi.uzh.ch/img/projects/benefit_fov_vo/urban_canyon_fisheye.png",
        "paperUrl": "https://rpg.ifi.uzh.ch/docs/ICRA16_Zhang.pdf",
        "sourceTitle": "RPG Multi-FoV official dataset preview",
        "caption": {
          "en": "Official Urban Canyon fisheye rendering from the RPG Multi-FoV release.",
          "zh": "RPG Multi-FoV 官方 Urban Canyon 鱼眼渲染样例。"
        },
        "credit": {
          "en": "Source: RPG Multi-FoV authors, official project preview.",
          "zh": "来源：RPG Multi-FoV 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: RPG Multi-FoV authors, official project preview.",
          "zh": "来源：RPG Multi-FoV 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          640,
          480
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "7e3466e302a313c53b67cde07b8e8687f3f972bc94e4cf0f5086ecbab235eabc"
      }
    },
    {
      "id": "ds_kitti_odom",
      "name": "KITTI Odometry",
      "title": "KITTI Visual Odometry / SLAM Evaluation",
      "year": 2012,
      "cameras": [
        "perspective",
        "multi"
      ],
      "tasks": [
        "slam"
      ],
      "environment": [
        "outdoor"
      ],
      "reality": "real",
      "sensors": [
        "Stereo",
        "LiDAR",
        "GPS/INS"
      ],
      "sensorLabels": {
        "en": [
          "Stereo",
          "LiDAR",
          "GPS/INS"
        ],
        "zh": [
          "双目",
          "LiDAR",
          "GPS/INS"
        ]
      },
      "groundTruth": [
        "Metric trajectories",
        "Held-out test"
      ],
      "groundTruthLabels": {
        "en": [
          "Metric trajectories",
          "Held-out test"
        ],
        "zh": [
          "米制轨迹",
          "测试真值不公开"
        ]
      },
      "access": "registration",
      "homepageUrl": "https://www.cvlibs.net/datasets/kitti/eval_odometry.php",
      "paperUrl": "https://doi.org/10.1109/CVPR.2012.6248074",
      "downloadUrl": "https://www.cvlibs.net/datasets/kitti/eval_odometry.php",
      "license": {
        "en": "CC BY-NC-SA 3.0; download registration and KITTI terms apply.",
        "zh": "CC BY-NC-SA 3.0；下载需注册并遵循 KITTI 条款。"
      },
      "summary": "经典车载双目/LiDAR 里程计基准，提供米制参考轨迹及成熟的分段误差评测协议。",
      "details": {
        "en": {
          "Split": "22 stereo sequences: 00–10 expose reference trajectories; 11–21 withhold them for server evaluation.",
          "Geometry": "Perspective stereo and Velodyne scans. This entry is separate from KITTI depth prediction/completion.",
          "Pose and scale": "GPS/OXTS-based metric reference; use the official devkit coordinate and pose conventions.",
          "Protocol": "Translation/rotation drift over 100–800 m subsequences; report scale alignment explicitly for monocular estimates.",
          "Access": "Downloads require login; leaderboard submissions have publication and novelty policies."
        },
        "zh": {
          "划分": "22 段双目序列：00–10 公开参考轨迹，11–21 的真值由服务器保留。",
          "成像模型": "透视双目和 Velodyne 扫描；此条目与 KITTI 深度预测/补全分开。",
          "位姿与尺度": "GPS/OXTS 米制参考；采用官方开发工具的坐标与位姿约定。",
          "协议": "在 100–800 米子轨迹上评估平移/旋转漂移；单目结果是否对齐尺度需明确报告。",
          "获取": "下载需要登录；榜单提交另有论文及创新性要求。"
        }
      },
      "notes": {
        "en": [
          "Not native panoramic or fisheye imagery.",
          "Use official training splits for local experiments when server submission criteria do not apply."
        ],
        "zh": [
          "不是原生全景或鱼眼图像。",
          "本地实验可采用公开训练集划分，服务器另有提交条件。"
        ]
      },
      "evidence": [
        {
          "url": "https://www.cvlibs.net/datasets/kitti/eval_odometry.php",
          "title": "KITTI odometry benchmark splits and evaluation protocol"
        },
        {
          "url": "https://www.cvlibs.net/datasets/kitti/",
          "title": "KITTI official dataset suite"
        },
        {
          "title": "Camera / annotation source",
          "url": "https://doi.org/10.1109/CVPR.2012.6248074",
          "checked": "2026-10-17"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Driving stereo/LiDAR odometry baseline with metric reference trajectories and an established subsequence-error protocol.",
        "zh": "经典车载双目/LiDAR 里程计基准，提供米制参考轨迹及成熟的分段误差评测协议。"
      },
      "datasetDetails": {
        "en": {
          "Split": "22 stereo sequences: 00–10 expose reference trajectories; 11–21 withhold them for server evaluation.",
          "Geometry": "Perspective stereo and Velodyne scans. This entry is separate from KITTI depth prediction/completion.",
          "Pose and scale": "GPS/OXTS-based metric reference; use the official devkit coordinate and pose conventions.",
          "Protocol": "Translation/rotation drift over 100–800 m subsequences; report scale alignment explicitly for monocular estimates.",
          "Access": "Downloads require login; leaderboard submissions have publication and novelty policies."
        },
        "zh": {
          "划分": "22 段双目序列：00–10 公开参考轨迹，11–21 的真值由服务器保留。",
          "成像模型": "透视双目和 Velodyne 扫描；此条目与 KITTI 深度预测/补全分开。",
          "位姿与尺度": "GPS/OXTS 米制参考；采用官方开发工具的坐标与位姿约定。",
          "协议": "在 100–800 米子轨迹上评估平移/旋转漂移；单目结果是否对齐尺度需明确报告。",
          "获取": "下载需要登录；榜单提交另有论文及创新性要求。"
        }
      },
      "datasetNotes": {
        "en": [
          "Not native panoramic or fisheye imagery.",
          "Use official training splits for local experiments when server submission criteria do not apply."
        ],
        "zh": [
          "不是原生全景或鱼眼图像。",
          "本地实验可采用公开训练集划分，服务器另有提交条件。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY-NC-SA 3.0; download registration and KITTI terms apply.",
        "zh": "CC BY-NC-SA 3.0；下载需注册并遵循 KITTI 条款。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://www.cvlibs.net/datasets/kitti/eval_odometry.php",
            "https://www.cvlibs.net/datasets/kitti/",
            "https://doi.org/10.1109/CVPR.2012.6248074"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Raw Velodyne ranges and sensor calibration allow sparse image-depth projection; these are not native dense depth maps.",
            "zh": "原始 Velodyne 测距与传感器标定可生成稀疏图像深度投影，并非原生稠密深度图。"
          }
        },
        "trajectory": {
          "status": "partial",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Metric GPS/OXTS-based trajectories are public for 00–10; 11–21 references are withheld for server evaluation.",
            "zh": "00–10 公开基于 GPS/OXTS 的米制轨迹；11–21 的参考轨迹由服务器保留评测。"
          }
        },
        "evidence": [
          "https://www.cvlibs.net/datasets/kitti/eval_odometry.php",
          "https://www.cvlibs.net/datasets/kitti/"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "established",
        "rank": 8,
        "scope": {
          "zh": "车载视觉里程计",
          "en": "Driving visual odometry"
        },
        "reason": {
          "zh": "具有固定序列和公开评测协议的长期车载 VO 基准。",
          "en": "A longstanding driving VO benchmark with fixed sequences and evaluation protocols."
        },
        "evidence": [
          {
            "url": "https://www.cvlibs.net/datasets/kitti/eval_odometry.php",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_kitti_odom.webp",
        "thumbnail": "assets/datasets/ds_kitti_odom-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://www.cvlibs.net/datasets/kitti/eval_odometry.php",
        "sourceUrl": "https://www.cvlibs.net/datasets/kitti/images/header_odometry.jpg",
        "paperUrl": "https://doi.org/10.1109/CVPR.2012.6248074",
        "sourceTitle": "KITTI Odometry official dataset preview",
        "caption": {
          "en": "Official KITTI odometry route overview; these are trajectories, not image-depth labels.",
          "zh": "KITTI 里程计官方路线总览；展示轨迹，而非图像深度标签。"
        },
        "credit": {
          "en": "Source: KITTI Odometry authors, official project preview.",
          "zh": "来源：KITTI Odometry 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: KITTI Odometry authors, official project preview.",
          "zh": "来源：KITTI Odometry 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          935,
          140
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "5fa2124a2673efcf5694a9f632f36df76248d4ce21693c0ba7b6b24e4e163297"
      }
    },
    {
      "id": "ds_nyuv2",
      "name": "NYU Depth V2",
      "title": "Indoor Segmentation and Support Inference from RGBD Images",
      "year": 2012,
      "cameras": [
        "perspective"
      ],
      "tasks": [
        "depth"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "real",
      "sensors": [
        "Microsoft Kinect RGB-D",
        "Accelerometer"
      ],
      "sensorLabels": {
        "en": [
          "Microsoft Kinect RGB-D",
          "Accelerometer"
        ],
        "zh": [
          "Microsoft Kinect RGB-D",
          "加速度计"
        ]
      },
      "groundTruth": [
        "Measured/inpainted depth",
        "Semantic instances"
      ],
      "groundTruthLabels": {
        "en": [
          "Measured/inpainted depth",
          "Semantic instances"
        ],
        "zh": [
          "实测与补全深度",
          "语义实例"
        ]
      },
      "access": "open",
      "homepageUrl": "https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html",
      "paperUrl": "https://cs.nyu.edu/~fergus/datasets/indoor_seg_support.pdf",
      "downloadUrl": "https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html",
      "license": {
        "en": "Public downloads; a dataset-wide license was not stated on the inspected official overview. Check archive terms before reuse.",
        "zh": "可公开下载；本次核对的官方概览未注明统一数据许可，使用前需核对压缩包条款。"
      },
      "summary": "标准室内透视 RGB-D 基线；需严格区分实测 rawDepths 与补全后的 depths。",
      "details": {
        "en": {
          "Projection and inputs": "Kinect RGB/depth videos plus synchronized labeled RGB-D pairs in a MATLAB file; not fisheye or ERP.",
          "Depth and validity": "Both depths and aligned rawDepths are expressed in meters. depths fills missing values; rawDepths preserves holes before filling.",
          "Ground truth": "Structured-light sensor depth and semantic/instance labels. Inpainted pixels are processed supervision, not additional physical measurements.",
          "Timing and calibration": "Raw RGB and depth streams are unsynchronized with varying 20–30 FPS; timestamps and toolbox synchronization/calibration functions are supplied.",
          "Evaluation": "Disclose labeled/raw training subset, official split file, crop, depth cap and mask. Avoid using held-out scene raw frames for training."
        },
        "zh": {
          "投影与输入": "Kinect RGB、深度视频及 MATLAB 文件中的同步标注 RGB-D 图像对，不是鱼眼或 ERP。",
          "深度与有效性": "depths 与对齐后的 rawDepths 均以米表示；depths 填补缺失值，rawDepths 保留补全前空洞。",
          "真值来源": "结构光传感器深度与语义实例标注；补全像素属于处理后监督，不是新增物理测量。",
          "时间与标定": "原始 RGB、深度不同步，帧率在 20–30 FPS 间变化；提供时间戳、同步及标定工具。",
          "评测协议": "说明标注、原始训练子集、划分文件、裁剪、深度上限和掩码；不能用留出场景的原始帧训练。"
        }
      },
      "notes": {
        "en": [
          "Accelerometer values do not make this a fully calibrated IMU/VIO benchmark with independent pose GT."
        ],
        "zh": [
          "包含加速度计数据不代表它是具备独立位姿真值和完整 IMU 标定的 VIO 基准。"
        ]
      },
      "evidence": [
        {
          "url": "https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html",
          "title": "Official raw/labeled depth, timing and calibration"
        },
        {
          "url": "https://cs.nyu.edu/~fergus/datasets/indoor_seg_support.pdf",
          "title": "Original dataset paper"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Standard indoor perspective RGB-D baseline; measured rawDepths and inpainted depths must be kept separate.",
        "zh": "标准室内透视 RGB-D 基线；需严格区分实测 rawDepths 与补全后的 depths。"
      },
      "datasetDetails": {
        "en": {
          "Projection and inputs": "Kinect RGB/depth videos plus synchronized labeled RGB-D pairs in a MATLAB file; not fisheye or ERP.",
          "Depth and validity": "Both depths and aligned rawDepths are expressed in meters. depths fills missing values; rawDepths preserves holes before filling.",
          "Ground truth": "Structured-light sensor depth and semantic/instance labels. Inpainted pixels are processed supervision, not additional physical measurements.",
          "Timing and calibration": "Raw RGB and depth streams are unsynchronized with varying 20–30 FPS; timestamps and toolbox synchronization/calibration functions are supplied.",
          "Evaluation": "Disclose labeled/raw training subset, official split file, crop, depth cap and mask. Avoid using held-out scene raw frames for training."
        },
        "zh": {
          "投影与输入": "Kinect RGB、深度视频及 MATLAB 文件中的同步标注 RGB-D 图像对，不是鱼眼或 ERP。",
          "深度与有效性": "depths 与对齐后的 rawDepths 均以米表示；depths 填补缺失值，rawDepths 保留补全前空洞。",
          "真值来源": "结构光传感器深度与语义实例标注；补全像素属于处理后监督，不是新增物理测量。",
          "时间与标定": "原始 RGB、深度不同步，帧率在 20–30 FPS 间变化；提供时间戳、同步及标定工具。",
          "评测协议": "说明标注、原始训练子集、划分文件、裁剪、深度上限和掩码；不能用留出场景的原始帧训练。"
        }
      },
      "datasetNotes": {
        "en": [
          "Accelerometer values do not make this a fully calibrated IMU/VIO benchmark with independent pose GT."
        ],
        "zh": [
          "包含加速度计数据不代表它是具备独立位姿真值和完整 IMU 标定的 VIO 基准。"
        ]
      },
      "datasetLicense": {
        "en": "Public downloads; a dataset-wide license was not stated on the inspected official overview. Check archive terms before reuse.",
        "zh": "可公开下载；本次核对的官方概览未注明统一数据许可，使用前需核对压缩包条款。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html",
            "https://cs.nyu.edu/~fergus/datasets/indoor_seg_support.pdf"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured",
            "estimated"
          ],
          "note": {
            "en": "Raw measured Kinect depth and inpainted depth are both provided. Filled pixels are processed supervision, not extra measurements.",
            "zh": "同时提供 Kinect 原始实测深度与填补深度；填补像素属于处理后的监督，并非新增测量。"
          }
        },
        "trajectory": {
          "status": "no",
          "provenance": [],
          "note": {
            "en": "The documented release does not supply an independent camera trajectory reference; accelerometer readings alone are not pose truth.",
            "zh": "已记录的发布不提供独立相机轨迹参考；仅有加速度计读数不等于位姿真值。"
          }
        },
        "evidence": [
          "https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html",
          "https://cs.nyu.edu/~fergus/datasets/indoor_seg_support.pdf"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "established",
        "rank": 9,
        "scope": {
          "zh": "室内透视深度",
          "en": "Indoor perspective depth"
        },
        "reason": {
          "zh": "室内单目深度的经典透视对照，须注明划分与裁剪。",
          "en": "A standard indoor depth control; specify split and crop."
        },
        "evidence": [
          {
            "url": "https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_nyuv2.webp",
        "thumbnail": "assets/datasets/ds_nyuv2-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html",
        "sourceTitle": "NYU Depth V2 official dataset preview",
        "sourceChecked": "2026-10-20",
        "caption": {
          "en": "Official NYU Depth V2 overview of indoor RGB, depth and semantic annotations.",
          "zh": "官方 NYU Depth V2 总览中的室内 RGB、深度及语义标注。"
        },
        "attribution": {
          "en": "Source: NYU Depth V2 project authors, official dataset preview.",
          "zh": "来源：NYU Depth V2 项目作者，官方数据集预览。"
        },
        "credit": {
          "en": "Source: NYU Depth V2 project authors, official dataset preview.",
          "zh": "来源：NYU Depth V2 项目作者，官方数据集预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "reviewedAt": "2026-10-20",
        "imageSha256": "5e21e07a69fa093a9e1bfb0f2159f94774ffcf14746d732e98aeb9a537d1caef",
        "thumbnailSha256": "c4b7c433493b854065546f3eec5034595305d38dd0f2a8e60655fda5f9afc0c1",
        "sourceLicense": "Original preview copyright belongs to the dataset/project authors or publisher. Dataset terms do not independently establish the preview image reuse license.",
        "verification": "Official source identity and the final image were visually inspected; the preview depicts this dataset. Labels describe source imagery rather than model predictions unless explicitly stated.",
        "sourceUrl": "https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2_web.jpg",
        "sourceSha256": "16011a4615e0d1de0c84c0b1ac5e78fb07ff7df318c7692f0debe00dad44735c",
        "selectionNotes": "Official project image converted to WebP and proportionally resized without changing its content."
      }
    },
    {
      "id": "ds_tum_rgbd",
      "name": "TUM RGB-D",
      "title": "A Benchmark for the Evaluation of RGB-D SLAM Systems",
      "year": 2012,
      "cameras": [
        "perspective"
      ],
      "tasks": [
        "depth",
        "slam"
      ],
      "environment": [
        "indoor"
      ],
      "reality": "real",
      "sensors": [
        "RGB-D",
        "Accelerometer",
        "MoCap"
      ],
      "sensorLabels": {
        "en": [
          "RGB-D",
          "Accelerometer",
          "MoCap"
        ],
        "zh": [
          "RGB-D",
          "加速度计",
          "动作捕捉"
        ]
      },
      "groundTruth": [
        "Measured depth",
        "Metric poses"
      ],
      "groundTruthLabels": {
        "en": [
          "Measured depth",
          "Metric poses"
        ],
        "zh": [
          "实测深度",
          "米制位姿"
        ]
      },
      "access": "open",
      "homepageUrl": "https://cvg.cit.tum.de/data/datasets/rgbd-dataset",
      "paperUrl": "https://doi.org/10.1109/IROS.2012.6385773",
      "downloadUrl": "https://cvg.cit.tum.de/data/datasets/rgbd-dataset/download",
      "license": {
        "en": "CC BY 4.0 data unless otherwise stated; accompanying code BSD-2-Clause.",
        "zh": "除另有说明，数据为 CC BY 4.0；附带代码为 BSD-2-Clause。"
      },
      "summary": "真实 Kinect RGB-D 序列与独立动作捕捉位姿，适合米制 RGB-D SLAM 和重建对照。",
      "details": {
        "en": {
          "Inputs": "640×480 RGB and measured depth, nominally 30 Hz; timestamps are provided separately.",
          "Depth convention": "16-bit PNG values divided by 5000 give metres; zero indicates missing depth. Released RGB/depth are registered.",
          "Pose reference": "Motion-capture trajectories at 100 Hz; pose format is timestamp tx ty tz qx qy qz qw in the reference world.",
          "Calibration": "Use the per-camera parameters and dataset notes; do not apply a second distortion correction to already registered depth.",
          "Evaluation": "Associate timestamps and apply the published ATE/RPE tools; retain depth holes and masks."
        },
        "zh": {
          "输入": "640×480 RGB 与实测深度，标称 30 Hz；各自提供时间戳。",
          "深度约定": "16 位 PNG 除以 5000 得到米，零值表示缺测；发布的 RGB/深度已经配准。",
          "位姿参考": "100 Hz 动作捕捉轨迹；格式为时间戳、平移 tx ty tz 和四元数 qx qy qz qw。",
          "标定": "使用各相机参数及数据说明；不要对已经配准的深度再次做畸变校正。",
          "评测": "先关联时间戳，再用官方 ATE/RPE 工具；保留深度空洞及有效掩码。"
        }
      },
      "notes": {
        "en": [
          "Measured Kinect depth is noisy and incomplete, not perfect dense geometry.",
          "Kinect accelerometer data is not a full gyro–accelerometer IMU."
        ],
        "zh": [
          "Kinect 实测深度有噪声和缺测，并非完美稠密几何。",
          "Kinect 加速度数据不是完整的陀螺仪–加速度计 IMU。"
        ]
      },
      "evidence": [
        {
          "url": "https://cvg.cit.tum.de/data/datasets/rgbd-dataset",
          "title": "TUM RGB-D benchmark overview and licence"
        },
        {
          "url": "https://cvg.cit.tum.de/data/datasets/rgbd-dataset/file_formats",
          "title": "TUM RGB-D image, depth and pose formats"
        },
        {
          "title": "Camera / annotation source",
          "url": "https://doi.org/10.1109/IROS.2012.6385773",
          "checked": "2026-10-17"
        }
      ],
      "checked": "2026-10-17",
      "collection": "datasets",
      "localizedSummary": {
        "en": "Real Kinect RGB-D sequences with independent motion capture, useful for metric RGB-D SLAM and reconstruction baselines.",
        "zh": "真实 Kinect RGB-D 序列与独立动作捕捉位姿，适合米制 RGB-D SLAM 和重建对照。"
      },
      "datasetDetails": {
        "en": {
          "Inputs": "640×480 RGB and measured depth, nominally 30 Hz; timestamps are provided separately.",
          "Depth convention": "16-bit PNG values divided by 5000 give metres; zero indicates missing depth. Released RGB/depth are registered.",
          "Pose reference": "Motion-capture trajectories at 100 Hz; pose format is timestamp tx ty tz qx qy qz qw in the reference world.",
          "Calibration": "Use the per-camera parameters and dataset notes; do not apply a second distortion correction to already registered depth.",
          "Evaluation": "Associate timestamps and apply the published ATE/RPE tools; retain depth holes and masks."
        },
        "zh": {
          "输入": "640×480 RGB 与实测深度，标称 30 Hz；各自提供时间戳。",
          "深度约定": "16 位 PNG 除以 5000 得到米，零值表示缺测；发布的 RGB/深度已经配准。",
          "位姿参考": "100 Hz 动作捕捉轨迹；格式为时间戳、平移 tx ty tz 和四元数 qx qy qz qw。",
          "标定": "使用各相机参数及数据说明；不要对已经配准的深度再次做畸变校正。",
          "评测": "先关联时间戳，再用官方 ATE/RPE 工具；保留深度空洞及有效掩码。"
        }
      },
      "datasetNotes": {
        "en": [
          "Measured Kinect depth is noisy and incomplete, not perfect dense geometry.",
          "Kinect accelerometer data is not a full gyro–accelerometer IMU."
        ],
        "zh": [
          "Kinect 实测深度有噪声和缺测，并非完美稠密几何。",
          "Kinect 加速度数据不是完整的陀螺仪–加速度计 IMU。"
        ]
      },
      "datasetLicense": {
        "en": "CC BY 4.0 data unless otherwise stated; accompanying code BSD-2-Clause.",
        "zh": "除另有说明，数据为 CC BY 4.0；附带代码为 BSD-2-Clause。"
      },
      "sourceChecked": "2026-10-17",
      "authors": "Unknown",
      "venue": "Dataset / benchmark",
      "aliases": [],
      "cameraSupport": [
        {
          "geometry": "perspective",
          "route": "direct",
          "availability": "released",
          "note": {
            "en": "Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support.",
            "zh": "文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。"
          },
          "evidence": [
            "https://cvg.cit.tum.de/data/datasets/rgbd-dataset",
            "https://cvg.cit.tum.de/data/datasets/rgbd-dataset/file_formats",
            "https://doi.org/10.1109/IROS.2012.6385773"
          ]
        }
      ],
      "projectionSubtypes": [],
      "additionalSupport": [],
      "nativePanoramic": false,
      "cameraReview": "carried_forward_from_existing_source_review",
      "annotations": {
        "depth": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Registered Kinect depth images are measured, noisy and incomplete; zero is invalid.",
            "zh": "配准后的 Kinect 深度来自测量，具有噪声与空洞；零值无效。"
          }
        },
        "trajectory": {
          "status": "yes",
          "provenance": [
            "measured"
          ],
          "note": {
            "en": "Motion-capture pose trajectories are provided with timestamps; associate RGB/depth/pose streams explicitly.",
            "zh": "提供带时间戳的动作捕捉位姿轨迹，需明确关联 RGB、深度与位姿流。"
          }
        },
        "evidence": [
          "https://cvg.cit.tum.de/data/datasets/rgbd-dataset",
          "https://cvg.cit.tum.de/data/datasets/rgbd-dataset/file_formats"
        ],
        "checked": "2026-10-20"
      },
      "curation": {
        "tier": "established",
        "rank": 7,
        "scope": {
          "zh": "RGB-D SLAM",
          "en": "RGB-D SLAM"
        },
        "reason": {
          "zh": "提供公开轨迹评测工具和成熟的 RGB-D 序列协议。",
          "en": "Public trajectory evaluation tools and established RGB-D sequence protocols."
        },
        "evidence": [
          {
            "url": "https://cvg.cit.tum.de/data/datasets/rgbd-dataset",
            "title": "Official dataset protocol and release documentation"
          }
        ],
        "checked": "2026-10-20"
      },
      "figure": {
        "image": "assets/datasets/ds_tum_rgbd.webp",
        "thumbnail": "assets/datasets/ds_tum_rgbd-thumb.webp",
        "sourceType": "author-project-image",
        "sourcePageUrl": "https://cvg.cit.tum.de/data/datasets/rgbd-dataset",
        "sourceUrl": "https://cvg.cit.tum.de/_media/data/datasets/rgbd-dataset/mocap.jpg",
        "paperUrl": "https://doi.org/10.1109/IROS.2012.6385773",
        "sourceTitle": "TUM RGB-D official dataset preview",
        "caption": {
          "en": "Kinect with motion-capture markers in the TUM RGB-D capture environment.",
          "zh": "TUM RGB-D 采集环境中带动作捕捉标记的 Kinect。"
        },
        "credit": {
          "en": "Source: TUM RGB-D authors, official project preview.",
          "zh": "来源：TUM RGB-D 作者，官方项目预览。"
        },
        "attribution": {
          "en": "Source: TUM RGB-D authors, official project preview.",
          "zh": "来源：TUM RGB-D 作者，官方项目预览。"
        },
        "kind": "dataset-preview",
        "verified": true,
        "sourceChecked": "2026-10-20",
        "imageSize": [
          800,
          533
        ],
        "sourceLicense": "Copyright remains with the original authors. Dataset and software licenses do not automatically establish preview-image reuse terms.",
        "verificationNote": "Visually inspected the actual official image or source PDF page, then inspected the labeled contact sheet. No generated illustration; no full dataset download.",
        "sourceSha256": "a606db1f8c112008ee9ab94e6284c27befd7436336fdd162dd2fd9b3e05ca5e6"
      }
    }
  ],
  "stats": {
    "depth": 36,
    "slam": 33,
    "datasets": 38,
    "panoramicDepth": 25,
    "panoramicSLAM": 11,
    "paperFigures": 69,
    "datasetFigures": 38
  }
};
