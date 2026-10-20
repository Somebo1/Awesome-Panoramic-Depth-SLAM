# Camera taxonomy / 相机分类

Reviewed 2026-10-20. Main categories describe supported input projections, not internal patches or outputs. Wide FoV and physical multi-camera rigs are independent attributes. A full ERP input can have internal cubemap processing; PAL annular images are not full ERP. Direct means no external cross-projection adapter. A rendered or stitched dataset derivative is labeled separately.

Pinhole 指针孔透视输入；Wide-FOV 不作为独立投影分类。名称、广角和内部切片均不能替代输入接口证据。保留既有 perspective enum 与旧链接，新 pinhole 链接为别名。

## DA²

panoramic

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://raw.githubusercontent.com/EnVision-Research/DA-2/main/infer.py
  - https://openreview.net/pdf?id=323ximYcsk
  - https://arxiv.org/abs/2509.26618

Review scope: carried_forward_from_existing_source_review

## Depth Any Panoramas

panoramic

- panoramic / direct: Documented panoramic depth model; raw fisheye requires a separate calibrated conversion and is not tagged as native input. 已记录的全景深度模型；原始鱼眼需外部标定转换，不标成原生输入。
  - https://insta360-research-team.github.io/DAP_website/

Review scope: focused_primary_source_recheck_2026-10-20

## GeoPano

panoramic

- panoramic / direct: The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs. 外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。
  - https://arxiv.org/abs/2610.21297
  - https://arxiv.org/html/2610.21297v1
  - https://arxiv.org/pdf/2610.21297

Review scope: carried_forward_from_existing_source_review

## MCPDepth

panoramic, multi

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://arxiv.org/abs/2408.01653
  - https://github.com/Qjizhi/MCPDepth
  - https://github.com/Qjizhi/MCPDepth/tree/main/pretrained_model

Review scope: carried_forward_from_existing_source_review

## MoGe-3

perspective

- perspective / direct: Single pinhole RGB input. No verified raw fisheye or full-ERP entrance for this model version. 单张针孔 RGB 输入；未核实此模型版本的原始鱼眼或完整 ERP 入口。
  - https://qft-333.github.io/moge3page/
  - https://github.com/microsoft/MoGe

Review scope: focused_primary_source_recheck_2026-10-20

## PaGeR

panoramic, perspective

- panoramic / direct: ERP is the released panorama inference entrance; the six cube faces are internal shared-center views. 已发布全景推理以 ERP 为入口；六个立方体面为内部共心视图。
  - https://pager360.github.io/
  - https://github.com/prs-eth/PaGeR
- perspective / direct: The paper explicitly includes perspective-image geometry prediction; the current public CLI is centered on ERP panoramas. 论文明示同时预测透视图像几何；当前公开命令行主要面向 ERP 全景。
  - https://pager360.github.io/
  - https://github.com/prs-eth/PaGeR

Review scope: focused_primary_source_recheck_2026-10-20

## RePer-360

panoramic

- panoramic / direct: The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs. 外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。
  - https://arxiv.org/abs/2603.05999
  - https://github.com/munimo/RePer360
  - https://huggingface.co/ZSBD/RePer-360

Review scope: carried_forward_from_existing_source_review

## UniDAC

panoramic, fisheye, wide, perspective

- panoramic / direct: Accepts ERP panoramas in its canonical ERP representation. 以规范 ERP 表示接收 ERP 全景。
  - https://girish1511.github.io/UniDAC/
- fisheye / reprojected: The calibrated input is mapped to ERP before prediction; an ERP model entrance does not mean uncalibrated raw-lens support. 标定输入先映射至 ERP 再预测；ERP 模型入口不意味着免标定处理原始镜头图像。
  - https://girish1511.github.io/UniDAC/
- perspective / reprojected: The calibrated input is mapped to ERP before prediction; an ERP model entrance does not mean uncalibrated raw-lens support. 标定输入先映射至 ERP 再预测；ERP 模型入口不意味着免标定处理原始镜头图像。
  - https://girish1511.github.io/UniDAC/

Review scope: focused_primary_source_recheck_2026-10-20

## VGGT-Ω

perspective

- perspective / direct: Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support. 已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。
  - https://raw.githubusercontent.com/facebookresearch/vggt-omega/main/README.md
  - https://arxiv.org/abs/2605.15195
  - https://vggt-omega.github.io/

Review scope: carried_forward_from_existing_source_review

## Depth Any Camera

panoramic, fisheye, wide, perspective

- panoramic / direct: Accepts ERP panoramas in its canonical ERP representation. 以规范 ERP 表示接收 ERP 全景。
  - https://yuliangguo.github.io/depth-any-camera/
- fisheye / reprojected: The calibrated input is mapped to ERP before prediction; an ERP model entrance does not mean uncalibrated raw-lens support. 标定输入先映射至 ERP 再预测；ERP 模型入口不意味着免标定处理原始镜头图像。
  - https://yuliangguo.github.io/depth-any-camera/
- perspective / reprojected: The calibrated input is mapped to ERP before prediction; an ERP model entrance does not mean uncalibrated raw-lens support. 标定输入先映射至 ERP 再预测；ERP 模型入口不意味着免标定处理原始镜头图像。
  - https://yuliangguo.github.io/depth-any-camera/

Review scope: focused_primary_source_recheck_2026-10-20

## Depth Anything 3

perspective

- perspective / direct: Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support. 已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。
  - https://raw.githubusercontent.com/ByteDance-Seed/Depth-Anything-3/main/src/depth_anything_3/specs.py
  - https://raw.githubusercontent.com/ByteDance-Seed/Depth-Anything-3/main/src/depth_anything_3/utils/alignment.py
  - https://arxiv.org/abs/2511.10647

Review scope: carried_forward_from_existing_source_review

## Depth Anything in 360°

panoramic

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://raw.githubusercontent.com/antigravity-tech/DA360/main/test.py
  - https://arxiv.org/abs/2512.22819
  - https://antigravity-tech.github.io/DA360/

Review scope: carried_forward_from_existing_source_review

## Depth Pro

perspective

- perspective / direct: Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support. 已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。
  - https://openreview.net/pdf?id=aueXfY0Clv
  - https://github.com/apple-aiml-research/ml-depth-pro/blob/main/LICENSE
  - https://raw.githubusercontent.com/apple-aiml-research/ml-depth-pro/main/src/depth_pro/depth_pro.py (infer1536 square, canonical inverse-depth times W/f then reciprocal)

Review scope: carried_forward_from_existing_source_review

## DreamCube

panoramic

- panoramic / direct: The surveyed depth-estimation application synchronizes panorama cubemap faces. A perspective RGB-D condition belongs to its panorama-generation task, not a separate pinhole depth-estimation interface. 此处调研的深度估计应用同步全景 cubemap 各面；透视 RGB-D 条件属于全景生成任务，不是独立针孔深度估计入口。
  - https://yukun-huang.github.io/DreamCube/
  - https://github.com/Yukun-Huang/DreamCube

Review scope: focused_primary_source_recheck_2026-10-20

## MoGe-2

perspective

- perspective / direct: Single pinhole RGB input. No verified raw fisheye or full-ERP entrance for this model version. 单张针孔 RGB 输入；未核实此模型版本的原始鱼眼或完整 ERP 入口。
  - https://wangrc.site/MoGe2Page/
  - https://github.com/microsoft/MoGe

Review scope: focused_primary_source_recheck_2026-10-20

## PanDA

panoramic

- panoramic / direct: Documented panoramic depth model; raw fisheye requires a separate calibrated conversion and is not tagged as native input. 已记录的全景深度模型；原始鱼眼需外部标定转换，不标成原生输入。
  - https://caozidong.github.io/PanDA_Depth/

Review scope: focused_primary_source_recheck_2026-10-20

## RPG360

panoramic

- panoramic / direct: The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs. 外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。
  - https://arxiv.org/html/2509.23991
  - https://github.com/jdk9405/RPG360
  - https://papers.nips.cc/paper_files/paper/2025/file/fb1ea28c42fcd32bd49e68769b26028f-Paper-Conference.pdf

Review scope: carried_forward_from_existing_source_review

## ST²360D

panoramic

- panoramic / direct: The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs. 外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。
  - https://caozidong.github.io/ST2360D_Depth/
  - https://openreview.net/pdf?id=d0bm4upnQ8
  - https://haoai-1997.github.io/

Review scope: carried_forward_from_existing_source_review

## UniDepthV2

perspective

- perspective / direct: Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support. 已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。
  - https://raw.githubusercontent.com/lpiccinelli-eth/UniDepth/main/unidepth/models/unidepthv2/unidepthv2.py
  - https://arxiv.org/abs/2502.20110
  - https://github.com/lpiccinelli-eth/UniDepth#unidepthv2

Review scope: carried_forward_from_existing_source_review

## UniK3D

panoramic, fisheye, wide, perspective

- panoramic / direct: Direct image inference predicts a camera-independent ray representation and metric points; explicit fisheye, panoramic and pinhole evaluation supports the overlap. 直接从图像预测通用射线表示与公制点；论文明确评测鱼眼、全景与针孔，故允许多类别重叠。
  - https://lpiccinelli-eth.github.io/pub/unik3d/
  - https://github.com/lpiccinelli-eth/UniK3D
- fisheye / direct: Direct image inference predicts a camera-independent ray representation and metric points; explicit fisheye, panoramic and pinhole evaluation supports the overlap. 直接从图像预测通用射线表示与公制点；论文明确评测鱼眼、全景与针孔，故允许多类别重叠。
  - https://lpiccinelli-eth.github.io/pub/unik3d/
  - https://github.com/lpiccinelli-eth/UniK3D
- perspective / direct: Direct image inference predicts a camera-independent ray representation and metric points; explicit fisheye, panoramic and pinhole evaluation supports the overlap. 直接从图像预测通用射线表示与公制点；论文明确评测鱼眼、全景与针孔，故允许多类别重叠。
  - https://lpiccinelli-eth.github.io/pub/unik3d/
  - https://github.com/lpiccinelli-eth/UniK3D

Review scope: focused_primary_source_recheck_2026-10-20

## VGGT

perspective

- perspective / direct: Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support. 已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。
  - https://raw.githubusercontent.com/facebookresearch/vggt/main/vggt/models/vggt.py
  - https://raw.githubusercontent.com/facebookresearch/vggt/main/LICENSE.txt
  - https://arxiv.org/abs/2503.11651

Review scope: carried_forward_from_existing_source_review

## Video Depth Anything

perspective

- perspective / direct: Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support. 已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。
  - https://raw.githubusercontent.com/DepthAnything/Video-Depth-Anything/main/README.md
  - https://arxiv.org/abs/2501.12375
  - https://videodepthanything.github.io/

Review scope: carried_forward_from_existing_source_review

## Depth Anything V2

perspective

- perspective / direct: Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support. 已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。
  - https://github.com/DepthAnything/Depth-Anything-V2/blob/main/depth_anything_v2/dpt.py
  - https://arxiv.org/abs/2406.09414
  - https://depth-anything-v2.github.io/

Review scope: carried_forward_from_existing_source_review

## Depth Anywhere

panoramic

- panoramic / direct: The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs. 外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。
  - https://arxiv.org/abs/2406.12849
  - https://albert100121.github.io/Depth-Anywhere/
  - https://github.com/albert100121/Depth-Anywhere

Review scope: carried_forward_from_existing_source_review

## Elite360D

panoramic

- panoramic / direct: The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs. 外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。
  - https://arxiv.org/abs/2403.16376
  - https://github.com/haoai-1997/Elite360D
  - https://github.com/haoai-1997/Elite360D/tree/main/checkpoints

Review scope: carried_forward_from_existing_source_review

## Marigold

perspective

- perspective / direct: Single pinhole RGB input. No verified raw fisheye or full-ERP entrance for this model version. 单张针孔 RGB 输入；未核实此模型版本的原始鱼眼或完整 ERP 入口。
  - https://marigoldmonodepth.github.io/
  - https://github.com/prs-eth/Marigold

Review scope: focused_primary_source_recheck_2026-10-20

## Metric3Dv2

perspective

- perspective / direct: Documented pinhole/perspective inference; an any-view/universal name or trying a 360 image does not validate native fisheye/ERP support. 已记录针孔/透视推理；any-view、universal 名称或尝试输入360图不构成原生鱼眼/ERP支持证据。
  - https://raw.githubusercontent.com/YvanYin/Metric3D/main/LICENSE
  - https://arxiv.org/html/2404.15506v1 (Method III and Applications IV-B inspected)
  - https://arxiv.org/abs/2404.15506

Review scope: carried_forward_from_existing_source_review

## BiFuse++

panoramic

- panoramic / direct: The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs. 外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。
  - https://arxiv.org/pdf/2209.02952 (paper Fig1 confirms 3-frame PoseNet during training)
  - https://arxiv.org/abs/2209.02952
  - https://github.com/fuenwang/BiFusev2

Review scope: carried_forward_from_existing_source_review

## HRDFuse

panoramic

- panoramic / direct: The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs. 外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。
  - https://arxiv.org/abs/2303.11616
  - https://openaccess.thecvf.com/content/CVPR2023/papers/Ai_HRDFuse_Monocular_360deg_Depth_Estimation_by_Collaboratively_Learning_Holistic-With-Regional_Depth_CVPR_2023_paper.pdf
  - https://github.com/haoai-1997/HRDFuse

Review scope: carried_forward_from_existing_source_review

## 360MonoDepth

panoramic

- panoramic / direct: The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs. 外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。
  - https://arxiv.org/html/2111.15669
  - https://github.com/manurare/360monodepth
  - https://raw.githubusercontent.com/manurare/360monodepth/main/code/python/src/main.py

Review scope: carried_forward_from_existing_source_review

## MODE

panoramic, multi

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf
  - https://github.com/nju-ee/MODE-2022
  - https://raw.githubusercontent.com/nju-ee/MODE-2022/main/README.md

Review scope: carried_forward_from_existing_source_review

## OmniFusion

panoramic

- panoramic / direct: The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs. 外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。
  - https://arxiv.org/abs/2203.00838
  - https://openaccess.thecvf.com/content/CVPR2022/papers/Li_OmniFusion_360_Monocular_Depth_Estimation_via_Geometry-Aware_Fusion_CVPR_2022_paper.pdf
  - https://github.com/yuliangguo/OmniFusion

Review scope: carried_forward_from_existing_source_review

## PanoFormer

panoramic

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://arxiv.org/abs/2203.09283
  - https://github.com/zhijieshen-bjtu/PanoFormer

Review scope: carried_forward_from_existing_source_review

## UniFuse

panoramic

- panoramic / direct: The external input is ERP; cubemap/tangent/icosahedron views are internally derived, not separately supported physical pinhole/fisheye inputs. 外部输入为 ERP；cubemap、切平面或二十面体视图是内部派生表示，不是额外支持的真实针孔/鱼眼输入。
  - https://arxiv.org/pdf/2102.03550
  - https://raw.githubusercontent.com/alibaba/UniFuse-Unidirectional-Fusion/main/LICENSE
  - https://arxiv.org/abs/2102.03550

Review scope: carried_forward_from_existing_source_review

## 360DVO

panoramic

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://chris1004336379.github.io/360DVO-homepage/
  - https://arxiv.org/html/2601.02309v1
  - https://arxiv.org/pdf/2601.02309

Review scope: carried_forward_from_existing_source_review

## 360DVO Dataset

panoramic, perspective

- panoramic / direct: Released videos are standardized full-sphere ERP RGB. 发布视频为标准化整球ERP RGB。
  - https://huggingface.co/datasets/chris1004336379/360DVO
  - https://huggingface.co/api/datasets/chris1004336379/360DVO
  - https://arxiv.org/html/2601.02309v1
- perspective / reprojected: The paper evaluates 90-degree virtual perspective reprojections, not additional physical camera streams. 论文评测90度虚拟透视重投影，并非额外物理相机流。
  - https://huggingface.co/datasets/chris1004336379/360DVO
  - https://huggingface.co/api/datasets/chris1004336379/360DVO
  - https://arxiv.org/html/2601.02309v1

Review scope: carried_forward_from_existing_source_review

## AprilVINS

fisheye

- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://arxiv.org/abs/2610.09857
  - https://arxiv.org/html/2610.09857v1
  - https://arxiv.org/pdf/2610.09857

Review scope: carried_forward_from_existing_source_review

## Cube-Splat

panoramic, wide

- panoramic / direct: Official ERP configurations consume panoramas and internally produce four shared-center virtual pinhole views. The separate PAL route is annular. 官方ERP配置接收全景，内部生成四个共心虚拟针孔视图；另有环形PAL路线。
  - https://github.com/guoxf304/CubeSplat

Review scope: focused_primary_source_recheck_2026-10-20

## Hilti–Trimble–Oxford 2026 · Indoor

fisheye, wide, multi, panoramic

- fisheye / direct: Raw front/back fisheye streams are released; use the supplied EUCM or fitted equidistant calibration. 发布原始前后鱼眼流；使用配套EUCM或拟合等距标定。
  - https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026
  - https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/dataset.md
  - https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/sensors.md
- panoramic / stitched: Only raw fisheyes are downloaded. The official stitching tool derives ERP, using a large-sphere assumption with parallax limitations. 下载内容为原始鱼眼；官方拼接工具生成ERP，采用大球面假设并受视差限制。
  - https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026
  - https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/dataset.md
  - https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/sensors.md

Review scope: carried_forward_from_existing_source_review

## Holo360D

panoramic

- panoramic / direct: Released RGB archives contain panoramas; raw fisheye lens streams are not inferred from capture-camera hardware. 发布RGB压缩包包含全景；不依据采集相机硬件推断原始鱼眼流。
  - https://github.com/Jou719/Holo360D
  - https://arxiv.org/html/2604.22482v2
  - https://huggingface.co/datasets/ouou123/Holo360D

Review scope: carried_forward_from_existing_source_review

## MILD / MILD-Sim

fisheye, wide, multi

- fisheye / direct: Real X5 and simulated fisheye routes are described, but the dataset release is announced for acceptance; no raw ERP release is established. 描述真实X5和仿真鱼眼路线，但数据仍计划录用后发布；未确立原始ERP发布。
  - https://mild-web.github.io/
  - https://arxiv.org/abs/2610.09857

Review scope: carried_forward_from_existing_source_review

## ODGS-SLAM

panoramic

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://openaccess.thecvf.com/content/CVPR2026/html/Spiss_ODGS-SLAM_Omnidirectional_Gaussian_Splatting_SLAM_CVPR_2026_paper.html
  - https://odgs-slam.github.io/
  - https://github.com/odgs-slam/odgs-slam

Review scope: carried_forward_from_existing_source_review

## ODGS-SLAM Dataset

panoramic, fisheye, wide, perspective, multi

- panoramic / stitched: Real Pro/X4 sequences provide stitched ERP; synthetic ERP renders form separate subsets. 真实Pro/X4序列提供拼接ERP；另有合成ERP渲染子集。
  - https://researchdata.uibk.ac.at/records/z6f6r-sjc65
  - https://researchdata.uibk.ac.at/api/records/z6f6r-sjc65
  - https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_real_world_README.md?download=1
- fisheye / direct: Real Pro supplies six lens streams, while X4 release is ERP-only; synthetic versions simulate the rig. 真实Pro提供六路镜头流，X4发布仅ERP；合成版本模拟相机装置。
  - https://researchdata.uibk.ac.at/records/z6f6r-sjc65
  - https://researchdata.uibk.ac.at/api/records/z6f6r-sjc65
  - https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_real_world_README.md?download=1
- perspective / rendered: The synthetic subset additionally provides a 113-degree perspective camera; it is a separate synthetic protocol. 合成子集另提供113度透视相机，属于独立合成协议。
  - https://researchdata.uibk.ac.at/records/z6f6r-sjc65
  - https://researchdata.uibk.ac.at/api/records/z6f6r-sjc65
  - https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_real_world_README.md?download=1

Review scope: carried_forward_from_existing_source_review

## P2U-SLAM

fisheye, wide

- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://arxiv.org/abs/2409.10143
  - https://github.com/BambValley/P2U-SLAM

Review scope: focused_primary_source_recheck_2026-10-20

## PanoAir

panoramic

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://arxiv.org/abs/2604.00852
  - https://arxiv.org/html/2604.00852v1
  - https://drive.google.com/file/d/1lG1Upn6yi-N6tYpEHAt6dfR1uhzNtWbT/view

Review scope: carried_forward_from_existing_source_review

## PanoAir

panoramic, fisheye, wide, perspective, multi

- panoramic / stitched: The documented ERP stream is stitched from a dual-fisheye camera. 所记录ERP流由双鱼眼相机拼接。
  - https://github.com/YYWumm/PanoAir
  - https://arxiv.org/abs/2604.00852
- fisheye / direct: Dual-fisheye ROS recordings are separately documented. 文档另列双鱼眼ROS录制。
  - https://github.com/YYWumm/PanoAir
  - https://arxiv.org/abs/2604.00852
- perspective / reprojected: Virtual pinhole streams are derived from the panoramic capture. 虚拟针孔流由全景采集派生。
  - https://github.com/YYWumm/PanoAir
  - https://arxiv.org/abs/2604.00852

Review scope: carried_forward_from_existing_source_review

## PanoCARLA-Static

panoramic

- panoramic / rendered: Six synchronized virtual views are combined into ERP; the delivered depth is radial range. 六个同步虚拟视图组合为ERP，提供径向距离深度。
  - https://huggingface.co/datasets/Soon122/PanoCARLA-Static
  - https://huggingface.co/api/datasets/Soon122/PanoCARLA-Static
  - https://github.com/ChuanxinSong/PanoCARLA

Review scope: carried_forward_from_existing_source_review

## PanoGS-SLAM

panoramic

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://arxiv.org/abs/2609.17387
  - https://arxiv.org/html/2609.17387v1

Review scope: carried_forward_from_existing_source_review

## PanoLoop

panoramic

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://doi.org/10.1111/cgf.70607
  - https://diglib7.eg.org/items/288b7b5d-7f87-4f03-b700-fc683d0c60e2
  - https://diglib7.eg.org/bitstreams/55a9089c-0201-403e-bd17-e58872d044fd/download

Review scope: carried_forward_from_existing_source_review

## MASt3R-SLAM

perspective

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/pdf/2412.12392
  - https://edexheim.github.io/mast3r-slam/
  - https://github.com/rmurai0610/MASt3R-SLAM

Review scope: carried_forward_from_existing_source_review

## OKVIS2-X

multi, perspective, fisheye

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/abs/2510.04612
  - https://github.com/ethz-mrl/OKVIS2-X
- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://arxiv.org/abs/2510.04612
  - https://github.com/ethz-mrl/OKVIS2-X

Review scope: carried_forward_from_existing_source_review

## Oxford Spires

fisheye, wide, multi

- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/
  - https://github.com/ori-drs/oxford_spires_dataset
  - https://arxiv.org/abs/2411.10546

Review scope: carried_forward_from_existing_source_review

## PanoSLAM (Panoptic)

perspective

- perspective / direct: Panoptic scene reconstruction consumes perspective RGB-D; Pano in the name does not denote panoramic ERP input. 全景语义场景重建使用透视RGB-D；名称Pano不代表全景ERP输入。
  - https://arxiv.org/abs/2501.00352
  - https://github.com/runnanchen/PanoSLAM

Review scope: carried_forward_from_existing_source_review

## ToF-360

panoramic

- panoramic / stitched: The released RGB-D products are ERP converted from dual-fisheye capture. A downloadable raw-fisheye modality was not established by the current card/directories. 已发布RGB-D产品由双鱼眼采集转换为ERP；当前数据卡和目录未确立可下载的原始鱼眼模态。
  - https://huggingface.co/datasets/COLE-Ricoh/ToF-360
  - https://huggingface.co/datasets/COLE-Ricoh/ToF-360/tree/main/Hospital
  - https://huggingface.co/datasets/COLE-Ricoh/ToF-360/tree/main/Office_Room_1

Review scope: focused_primary_source_recheck_2026-10-20

## 360-VIO

panoramic

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://ieeexplore.ieee.org/document/10373205/
  - https://shengyang93.github.io/publication/2023-360-vio/
  - https://chen-xieyuanli.github.io/_pages/includes/pub/

Review scope: carried_forward_from_existing_source_review

## 360Loc

panoramic, fisheye, wide, perspective

- panoramic / direct: Original panoramic reference/query images are provided. 提供原始全景参考/查询图。
  - https://huajianup.github.io/research/360Loc/
  - https://github.com/HuajianUP/360Loc
  - https://openaccess.thecvf.com/content/CVPR2024/html/Huang_360Loc_A_Dataset_and_Benchmark_for_Omnidirectional_Visual_Localization_with_CVPR_2024_paper.html
- fisheye / reprojected: Fisheye queries are lower-FoV virtual views generated from original panoramas. 鱼眼查询是由原始全景生成的较小视场虚拟视图。
  - https://huajianup.github.io/research/360Loc/
  - https://github.com/HuajianUP/360Loc
  - https://openaccess.thecvf.com/content/CVPR2024/html/Huang_360Loc_A_Dataset_and_Benchmark_for_Omnidirectional_Visual_Localization_with_CVPR_2024_paper.html
- perspective / reprojected: Pinhole queries are virtual crops/reprojections of original panoramas, not extra physical cameras. 针孔查询为原全景的虚拟裁剪/重投影，不是额外物理相机。
  - https://huajianup.github.io/research/360Loc/
  - https://github.com/HuajianUP/360Loc
  - https://openaccess.thecvf.com/content/CVPR2024/html/Huang_360Loc_A_Dataset_and_Benchmark_for_Omnidirectional_Visual_Localization_with_CVPR_2024_paper.html

Review scope: carried_forward_from_existing_source_review

## 360ORB-SLAM

panoramic

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://arxiv.org/abs/2401.10560
  - https://arxiv.org/html/2401.10560v1

Review scope: carried_forward_from_existing_source_review

## DBA-Fusion

perspective, multi

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/pdf/2403.13714
  - https://github.com/GREAT-WHU/DBA-Fusion

Review scope: carried_forward_from_existing_source_review

## DPV-SLAM

perspective

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/abs/2408.01654
  - https://github.com/princeton-vl/DPVO

Review scope: carried_forward_from_existing_source_review

## MonoGS

perspective, multi

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/abs/2312.06741
  - https://rmurai.co.uk/projects/GaussianSplattingSLAM/
  - https://github.com/muskie82/MonoGS

Review scope: carried_forward_from_existing_source_review

## SplaTAM

perspective

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://spla-tam.github.io/assets/SplaTAM.pdf
  - https://spla-tam.github.io/
  - https://github.com/spla-tam/SplaTAM

Review scope: carried_forward_from_existing_source_review

## Aria Digital Twin

fisheye, wide, multi

- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset
  - https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format
  - https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download

Review scope: carried_forward_from_existing_source_review

## DPVO

perspective

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/abs/2208.04726
  - https://github.com/princeton-vl/DPVO

Review scope: carried_forward_from_existing_source_review

## GO-SLAM

perspective, multi

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/abs/2309.02436
  - https://youmi-zym.github.io/projects/GO-SLAM/
  - https://github.com/youmi-zym/GO-SLAM

Review scope: carried_forward_from_existing_source_review

## LF-VISLAM

fisheye, wide

- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://arxiv.org/abs/2209.05167
  - https://github.com/flysoaryun/LF-VISLAM

Review scope: focused_primary_source_recheck_2026-10-20

## 360VO

panoramic

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://huajianup.github.io/research/360VO/360VO_ICRA2022.pdf
  - https://huajianup.github.io/research/360VO/
  - https://researchportal.hkust.edu.hk/en/publications/360vo-visual-odometry-using-a-single-360-camera/

Review scope: carried_forward_from_existing_source_review

## Deep360

panoramic, multi

- panoramic / rendered: CARLA renders provide several physically separated virtual panoramic viewpoints. CARLA渲染提供多个具有空间基线的虚拟全景视点。
  - https://github.com/nju-ee/MODE-2022
  - https://link.springer.com/chapter/10.1007/978-3-031-19827-4_12
  - https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf

Review scope: carried_forward_from_existing_source_review

## Hilti-Oxford 2022

fisheye, wide, multi

- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://hilti-challenge.com/dataset-2022
  - https://arxiv.org/abs/2208.09825

Review scope: carried_forward_from_existing_source_review

## KITTI-360

fisheye, wide, perspective, multi

- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://www.cvlibs.net/datasets/kitti-360/
  - https://www.cvlibs.net/datasets/kitti-360/documentation.php
  - https://arxiv.org/abs/2109.13410
- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://www.cvlibs.net/datasets/kitti-360/
  - https://www.cvlibs.net/datasets/kitti-360/documentation.php
  - https://arxiv.org/abs/2109.13410

Review scope: carried_forward_from_existing_source_review

## OKVIS2

multi, perspective, fisheye

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/abs/2202.09199
  - https://github.com/ethz-mrl/okvis2
- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://arxiv.org/abs/2202.09199
  - https://github.com/ethz-mrl/okvis2

Review scope: carried_forward_from_existing_source_review

## PatchMatch-Stereo-Panorama

panoramic

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://arxiv.org/abs/2211.16266
  - https://github.com/RoblabWh/PatchMatch
  - https://github.com/RoblabWh/PatchMatch/blob/main/LICENSE

Review scope: carried_forward_from_existing_source_review

## CodeVIO

perspective

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/pdf/2012.10133

Review scope: carried_forward_from_existing_source_review

## DROID-SLAM

perspective, multi

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/abs/2108.10869
  - https://github.com/princeton-vl/DROID-SLAM

Review scope: carried_forward_from_existing_source_review

## HM3D

perspective

- perspective / rendered: Real scanned meshes support perspective observations rendered under an explicit Habitat camera protocol; fixed image sequences are not the source release. 真实扫描网格可依明确Habitat相机协议渲染透视观测；源发布并非固定图像序列。
  - https://aihabitat.org/datasets/hm3d/
  - https://arxiv.org/abs/2109.08238

Review scope: carried_forward_from_existing_source_review

## Hilti SLAM 2021

fisheye, wide, multi

- fisheye / direct: The official calibration declares all five raw cameras as KannalaBrandt, 1440x1080. The rig has about 270-degree combined coverage, without stitched ERP. 官方标定将五路原始相机均声明为KannalaBrandt，1440×1080；装置总覆盖约270度，没有拼接ERP。
  - https://huggingface.co/datasets/Hilti-Research/hilti-slam-challenge-2021/blob/main/calibration.yaml
  - https://arxiv.org/html/2109.11316

Review scope: focused_primary_source_recheck_2026-10-20

## Hypersim

perspective

- perspective / rendered: Synthetic perspective RGB-D products are rendered, with supplied camera metadata. 提供合成透视RGB-D渲染产品及相机元数据。
  - https://github.com/apple-aiml-research/ml-hypersim
  - https://arxiv.org/abs/2011.02523

Review scope: carried_forward_from_existing_source_review

## ORB-SLAM3

perspective, fisheye, multi

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/abs/2007.11898
  - https://github.com/UZ-SLAMLab/ORB_SLAM3
- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://arxiv.org/abs/2007.11898
  - https://github.com/UZ-SLAMLab/ORB_SLAM3

Review scope: carried_forward_from_existing_source_review

## OmniScenes

panoramic

- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://github.com/82magnolia/piccolo
  - https://github.com/82magnolia/panoramic-localization
  - https://github.com/82magnolia/piccolo#downloading-omniscenes-update-new-scenes-added

Review scope: carried_forward_from_existing_source_review

## Pano3D

panoramic

- panoramic / rendered: The released ERP benchmark re-renders Matterport3D/GibsonV2 geometry. 已发布ERP基准重新渲染Matterport3D/GibsonV2几何。
  - https://vcl3d.github.io/Pano3D/
  - https://arxiv.org/abs/2109.02749
  - https://github.com/VCL3D/Pano3D

Review scope: carried_forward_from_existing_source_review

## Basalt

perspective, fisheye, wide, multi

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/abs/1904.06504
  - https://cvg.cit.tum.de/research/vslam/basalt
  - https://gitlab.com/VladyslavUsenko/basalt
- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://arxiv.org/abs/1904.06504
  - https://cvg.cit.tum.de/research/vslam/basalt
  - https://gitlab.com/VladyslavUsenko/basalt

Review scope: carried_forward_from_existing_source_review

## D3VO

perspective

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/pdf/2003.01060
  - https://cvg.cit.tum.de/research/vslam/d3vo

Review scope: carried_forward_from_existing_source_review

## Newer College

fisheye, wide, perspective, multi

- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://ori-drs.github.io/newer-college-dataset/
  - https://ori-drs.github.io/newer-college-dataset/ground-truth/
  - https://ori-drs.github.io/newer-college-dataset/download/
- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://ori-drs.github.io/newer-college-dataset/
  - https://ori-drs.github.io/newer-college-dataset/ground-truth/
  - https://ori-drs.github.io/newer-college-dataset/download/

Review scope: carried_forward_from_existing_source_review

## OmniSLAM

multi, fisheye, wide

- fisheye / direct: A wide-baseline physical fisheye rig yields surrounding coverage; this is not a single stitched ERP input. 广基线物理鱼眼装置提供环视覆盖，不是单张拼接ERP输入。
  - https://arxiv.org/abs/2003.08056
  - https://sites.google.com/view/chwon

Review scope: carried_forward_from_existing_source_review

## OpenVINS

perspective, fisheye, multi

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://pgeneva.com/downloads/papers/Geneva2020ICRA.pdf
  - https://docs.openvins.com/
  - https://github.com/rpng/open_vins
- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://pgeneva.com/downloads/papers/Geneva2020ICRA.pdf
  - https://docs.openvins.com/
  - https://github.com/rpng/open_vins

Review scope: carried_forward_from_existing_source_review

## Structured3D

panoramic, perspective

- panoramic / rendered: Released synthetic ERP images are rendered from designed indoor geometry. 已发布合成ERP图由设计的室内几何渲染。
  - https://structured3d-dataset.org/
  - https://github.com/bertjiazheng/Structured3D
  - https://github.com/bertjiazheng/Structured3D/blob/master/data_organization.md
- perspective / rendered: Separate perspective renders are released; they are not just virtual patches created inside a depth model. 另发布独立透视渲染，并非深度模型内部生成的虚拟patch。
  - https://structured3d-dataset.org/
  - https://github.com/bertjiazheng/Structured3D
  - https://github.com/bertjiazheng/Structured3D/blob/master/data_organization.md

Review scope: carried_forward_from_existing_source_review

## TartanAir V2

panoramic, fisheye, wide, perspective, multi

- panoramic / reprojected: Official equirect products/custom ERP outputs are resampled from pinhole cube faces; record the archive/generation convention. 官方equirect产品及自定义ERP输出由针孔立方体面重采样，需固定压缩包与生成约定。
  - https://tartanair.org/
  - https://tartanair.org/modalities.html
  - https://tartanair.org/examples.html
- fisheye / reprojected: Official fish products/custom cameras are resampled from pinhole cube faces; they are not independent physical fisheye captures. 官方fish产品及自定义相机由针孔立方体面重采样，并非独立物理鱼眼采集。
  - https://tartanair.org/
  - https://tartanair.org/modalities.html
  - https://tartanair.org/examples.html
- perspective / rendered: Raw data are rendered pinhole cube faces at two stereo centers. 原始数据是在两个立体中心渲染的针孔立方体面。
  - https://tartanair.org/
  - https://tartanair.org/modalities.html
  - https://tartanair.org/examples.html

Review scope: carried_forward_from_existing_source_review

## DIODE

perspective

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://diode-dataset.org/
  - https://github.com/diode-dataset/diode-devkit
  - https://arxiv.org/html/1908.00463v1

Review scope: carried_forward_from_existing_source_review

## Replica

perspective

- perspective / rendered: The source asset is a reconstructed scene mesh; perspective RGB-D sequences depend on a chosen renderer/export protocol. 源资产是重建场景网格；透视RGB-D序列依赖所选渲染和导出协议。
  - https://github.com/facebookresearch/Replica-Dataset
  - https://github.com/facebookresearch/Replica-Dataset/blob/main/LICENSE
  - https://arxiv.org/abs/1906.05797

Review scope: carried_forward_from_existing_source_review

## WoodScape

fisheye, wide, multi

- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://github.com/valeoai/WoodScape
  - https://arxiv.org/abs/1905.01489

Review scope: carried_forward_from_existing_source_review

## stella_vslam

perspective, fisheye, panoramic, multi

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/abs/1910.01122
  - https://stella-cv.readthedocs.io/en/latest/
  - https://github.com/stella-cv/stella_vslam
- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://arxiv.org/abs/1910.01122
  - https://stella-cv.readthedocs.io/en/latest/
  - https://github.com/stella-cv/stella_vslam
- panoramic / direct: ERP/panoramic input is documented; internal virtual views do not add another input-camera category. 文档明确包含全景输入；内部虚拟视图不构成另一种外部相机输入类别。
  - https://arxiv.org/abs/1910.01122
  - https://stella-cv.readthedocs.io/en/latest/
  - https://github.com/stella-cv/stella_vslam

Review scope: carried_forward_from_existing_source_review

## 3D60

panoramic, multi

- panoramic / rendered: ERP center/right/up products are rendered from scanned or synthetic interiors; the stereo offsets are virtual camera positions. ERP中心、右侧、上方产品由扫描或合成室内场景渲染；立体偏移为虚拟相机位置。
  - https://vcl3d.github.io/3D60/
  - https://arxiv.org/abs/1807.09620

Review scope: carried_forward_from_existing_source_review

## Gibson / GibsonV2

panoramic, perspective

- panoramic / rendered: Panoramic support denotes the documented Pano3D/GV2 derivative, not all original Gibson archives. 全景指已记录的Pano3D/GV2派生版，不代表全部原始Gibson压缩包。
  - https://gibsonenv.github.io/
  - https://stanfordvl.github.io/iGibson/dataset.html
  - https://vcl3d.github.io/Pano3D/
- perspective / rendered: Perspective observations are generated through the Gibson/iGibson simulator. 透视观测由Gibson/iGibson仿真器生成。
  - https://gibsonenv.github.io/
  - https://stanfordvl.github.io/iGibson/dataset.html
  - https://vcl3d.github.io/Pano3D/

Review scope: carried_forward_from_existing_source_review

## TUM VI

fisheye, wide, multi

- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://cvg.cit.tum.de/data/datasets/visual-inertial-dataset
  - https://arxiv.org/abs/1804.06120

Review scope: carried_forward_from_existing_source_review

## VINS-Fusion

perspective, fisheye, multi

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://arxiv.org/abs/1708.03852
  - https://github.com/HKUST-Aerial-Robotics/VINS-Fusion
- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://arxiv.org/abs/1708.03852
  - https://github.com/HKUST-Aerial-Robotics/VINS-Fusion

Review scope: carried_forward_from_existing_source_review

## KITTI Depth

perspective

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://www.cvlibs.net/datasets/kitti/eval_depth.php?benchmark=depth_prediction
  - https://arxiv.org/abs/1708.06500

Review scope: carried_forward_from_existing_source_review

## LaFiDa

fisheye, wide, multi

- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://www.ipf.kit.edu/english/code_1842.php
  - https://www.ipf.kit.edu/lafida.php
  - https://www.ipf.kit.edu/lafida_datasets.php

Review scope: carried_forward_from_existing_source_review

## Matterport3D

panoramic, perspective, multi

- panoramic / rendered: Panoramic depth uses a declared derivative such as 3D60/Pano3D; native calibrated perspective RGB-D/skyboxes should not be confused with every ERP export. 全景深度依赖3D60/Pano3D等明确派生协议；原始标定透视RGB-D/skybox不等于任意ERP导出。
  - https://niessner.github.io/Matterport/
  - https://github.com/niessner/Matterport/blob/master/data_organization.md
  - https://github.com/niessner/Matterport
- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://niessner.github.io/Matterport/
  - https://github.com/niessner/Matterport/blob/master/data_organization.md
  - https://github.com/niessner/Matterport

Review scope: carried_forward_from_existing_source_review

## Oxford RobotCar

fisheye, wide, perspective, multi

- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://robotcar-dataset.robots.ox.ac.uk/
  - https://robotcar-dataset.robots.ox.ac.uk/documentation/
  - https://arxiv.org/abs/2002.10152
- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://robotcar-dataset.robots.ox.ac.uk/
  - https://robotcar-dataset.robots.ox.ac.uk/documentation/
  - https://arxiv.org/abs/2002.10152

Review scope: carried_forward_from_existing_source_review

## SVO Pro

perspective, fisheye, multi

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://rpg.ifi.uzh.ch/svo_pro.html
  - https://github.com/uzh-rpg/rpg_svo_pro_open
- fisheye / direct: Fisheye observations are documented; camera-specific calibration and valid image domains still apply. 文档明确包含鱼眼观测，仍需使用对应标定与有效成像区域。
  - https://rpg.ifi.uzh.ch/svo_pro.html
  - https://github.com/uzh-rpg/rpg_svo_pro_open

Review scope: carried_forward_from_existing_source_review

## Stanford2D3D / 2D-3D-S

panoramic, perspective

- panoramic / direct: The official pano modality provides ERP products alongside separate perspective products. 官方pano模态提供ERP产品，同时有独立透视产品。
  - https://github.com/alexsax/2D-3D-Semantics
  - https://arxiv.org/abs/1702.01105
- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://github.com/alexsax/2D-3D-Semantics
  - https://arxiv.org/abs/1702.01105

Review scope: carried_forward_from_existing_source_review

## EuRoC MAV

perspective, multi

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://projects.asl.ethz.ch/datasets/euroc-mav/
  - https://doi.org/10.1177/0278364915620033

Review scope: carried_forward_from_existing_source_review

## RPG Multi-FoV

fisheye, wide, perspective

- fisheye / rendered: A rendered 180-degree fisheye run is separate from perspective and catadioptric optics. 180度鱼眼渲染运行与透视、折反射光学运行独立。
  - https://rpg.ifi.uzh.ch/fov.html
  - https://rpg.ifi.uzh.ch/docs/ICRA16_Zhang.pdf
  - https://rpg.ifi.uzh.ch/datasets/rpg_urban_pinhole_info.tar.gz
- perspective / rendered: A rendered 90-degree perspective run is separately released with calibration, poses and optical-ray depth. 另发布90度透视渲染运行，配套标定、位姿及沿光线深度。
  - https://rpg.ifi.uzh.ch/fov.html
  - https://rpg.ifi.uzh.ch/docs/ICRA16_Zhang.pdf
  - https://rpg.ifi.uzh.ch/datasets/rpg_urban_pinhole_info.tar.gz

Review scope: carried_forward_from_existing_source_review

## KITTI Odometry

perspective, multi

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://www.cvlibs.net/datasets/kitti/eval_odometry.php
  - https://www.cvlibs.net/datasets/kitti/
  - https://doi.org/10.1109/CVPR.2012.6248074

Review scope: carried_forward_from_existing_source_review

## NYU Depth V2

perspective

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html
  - https://cs.nyu.edu/~fergus/datasets/indoor_seg_support.pdf

Review scope: carried_forward_from_existing_source_review

## TUM RGB-D

perspective

- perspective / direct: Pinhole/perspective observations are documented; this does not establish raw fisheye or ERP support. 文档明确包含针孔/透视观测；这不等于支持原始鱼眼或 ERP。
  - https://cvg.cit.tum.de/data/datasets/rgbd-dataset
  - https://cvg.cit.tum.de/data/datasets/rgbd-dataset/file_formats
  - https://doi.org/10.1109/IROS.2012.6385773

Review scope: carried_forward_from_existing_source_review
