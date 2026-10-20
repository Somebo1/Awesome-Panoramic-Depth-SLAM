# Official-source index

Literature search cutoff 2026-10-19. Targeted pinhole, cross-camera, benchmark and annotation checks: 2026-10-20. Per-record dates and ledgers describe review scope; no local reproduction is claimed.

## DA² (2026)

DA²: Depth Anything in Any Direction

- Paper Method and Table3 ablations inspected; outpainting/spherical embedding/normal each tested
- Official infer.py reviewed
- https://raw.githubusercontent.com/EnVision-Research/DA-2/main/infer.py
- https://openreview.net/pdf?id=323ximYcsk
- https://arxiv.org/abs/2509.26618
- https://depth-any-in-any-dir.github.io/
- https://github.com/EnVision-Research/DA-2

## Depth Any Panoramas (2026)

Depth Any Panoramas: A Foundation Model for Panoramic Depth Estimation

- Paper Method and Tables4–6 read; DAP-Test is explicitly in-domain
- Remote source audited, no model inference performed
- https://raw.githubusercontent.com/Insta360-Research-Team/DAP/main/test/infer.py
- https://github.com/Insta360-Research-Team/DAP/issues/4
- https://raw.githubusercontent.com/Insta360-Research-Team/DAP/main/depth2point.py
- https://raw.githubusercontent.com/Insta360-Research-Team/DAP/main/LICENSE
- https://arxiv.org/abs/2512.16913
- https://insta360-research-team.github.io/DAP_website/
- https://github.com/Insta360-Research-Team/DAP

## DepthMaster (2026) (2026)

DepthMaster: Unified Monocular Depth Estimation for Perspective and Panoramic Images

- https://arxiv.org/abs/2606.12368
- https://polyu-vclab.github.io/DepthMaster-page/
- https://github.com/PolyU-VCLab/DepthMaster
- https://github.com/PolyU-VCLab/DepthMaster/blob/main/depthmaster/model/model.py
- https://github.com/PolyU-VCLab/DepthMaster/blob/main/eval_panorama/eval.py
- https://github.com/PolyU-VCLab/DepthMaster/blob/main/eval_panorama/configs/eval_panorama.json
- https://github.com/PolyU-VCLab/DepthMaster/blob/main/eval_panorama/eval/utils/infer.py
- https://huggingface.co/VCLab-PolyU/DepthMaster

## GeoPano (2026)

GeoPano: Towards Geometrically Accurate 3D Reconstruction from a Single Panorama

- https://arxiv.org/abs/2610.21297
- https://arxiv.org/html/2610.21297v1
- https://arxiv.org/pdf/2610.21297
- https://creativecommons.org/licenses/by/4.0/

## MCPDepth (2026)

MCPDepth: Omnidirectional Depth Estimation via Stereo Matching from Multi-Cylindrical Panoramas

- https://arxiv.org/abs/2408.01653
- https://github.com/Qjizhi/MCPDepth
- https://github.com/Qjizhi/MCPDepth/tree/main/pretrained_model

## MoGe-3 (2026)

MoGe-3: Fine-Detail Monocular Geometry Estimation with Self-Guided Sparse Volumetric Refinement

- https://arxiv.org/abs/2607.17967
- https://qft-333.github.io/moge3page/
- https://github.com/microsoft/MoGe
- https://github.com/microsoft/MoGe/blob/main/moge/model/v3.py
- https://github.com/microsoft/MoGe/blob/main/moge/scripts/infer_panorama.py
- https://huggingface.co/Ruicheng/moge-3-vitl

## OmniPoint (2026)

OmniPoint: Universal Monocular Metric Pointcloud from Any Camera

- https://arxiv.org/abs/2609.09394
- https://botaoye.github.io/omnipoint/
- https://botaoye.github.io/omnipoint/assets/OmniPoint_ECCV2026_paper.pdf
- https://arxiv.org/html/2609.09394v1
- https://botaoye.github.io/

## PaGeR (2026)

Unified Panoramic Geometry Estimation via Multi-View Foundation Models

- https://arxiv.org/html/2605.26368
- https://pager360.github.io/
- https://github.com/prs-eth/PaGeR
- https://huggingface.co/prs-eth/PaGeR
- https://huggingface.co/prs-eth/PaGeR-metric-depth
- https://arxiv.org/pdf/2605.26368v2#page=7
- https://arxiv.org/abs/2605.26368v2
- https://github.com/prs-eth/PaGeR#pretrained-models
- https://arxiv.org/abs/2605.26368

## RePer-360 (2026)

RePer-360: Releasing Perspective Priors for 360° Depth Estimation via Self-Modulation

- https://arxiv.org/abs/2603.05999
- https://github.com/munimo/RePer360
- https://huggingface.co/ZSBD/RePer-360

## UniDAC (2026)

UniDAC: Universal Metric Depth Estimation for Any Camera

- Paper Method §3–4, Experiments §5 and scale/encoder/shift ablations read
- https://raw.githubusercontent.com/girish1511/UniDAC/master/unidac/models/unidac.py
- https://raw.githubusercontent.com/girish1511/UniDAC/master/demo/demo_unidac.py
- README main branch URL404; master verified
- https://arxiv.org/abs/2603.27105
- https://girish1511.github.io/UniDAC/
- https://github.com/girish1511/UniDAC

## VGGT-Ω (2026)

VGGT-Ω

- Official project method description, current README and model forward inspected; paper experimental sections not fully read
- https://raw.githubusercontent.com/facebookresearch/vggt-omega/main/README.md
- https://arxiv.org/abs/2605.15195
- https://vggt-omega.github.io/
- https://github.com/facebookresearch/vggt-omega

## Depth Any Camera (2025)

Depth Any Camera: Zero-Shot Metric Depth Estimation from Any Camera

- Paper §3/§4 and Euclidean implementation/appendix inspected
- https://raw.githubusercontent.com/yuliangguo/depth_any_camera/main/demo/demo_dac_single.py
- https://arxiv.org/abs/2501.02464
- https://yuliangguo.github.io/depth-any-camera/
- https://github.com/yuliangguo/depth_any_camera

## Depth Anything 3 (2025)

Depth Anything 3: Recovering the Visual Space from Any Views

- Paper §3 formulation, architecture and scale normalization inspected
- API/README and Prediction schema audited
- https://raw.githubusercontent.com/ByteDance-Seed/Depth-Anything-3/main/src/depth_anything_3/specs.py
- https://raw.githubusercontent.com/ByteDance-Seed/Depth-Anything-3/main/src/depth_anything_3/utils/alignment.py
- https://arxiv.org/abs/2511.10647
- https://depth-anything-3.github.io/
- https://github.com/ByteDance-Seed/Depth-Anything-3

## Depth Anything in 360° (2025)

Depth Anything in 360°: Towards Scale Invariance in the Wild

- Paper Method/shift formulation read; test.py L84–87 verified
- https://raw.githubusercontent.com/antigravity-tech/DA360/main/test.py
- https://arxiv.org/abs/2512.22819
- https://antigravity-tech.github.io/DA360/
- https://github.com/antigravity-tech/DA360

## Depth Pro (2025)

Depth Pro: Sharp Monocular Metric Depth in Less Than a Second

- ICLR paper source and official code/model license inspected; not full Method/Ablation
- https://openreview.net/pdf?id=aueXfY0Clv
- https://github.com/apple-aiml-research/ml-depth-pro/blob/main/LICENSE
- https://raw.githubusercontent.com/apple-aiml-research/ml-depth-pro/main/src/depth_pro/depth_pro.py (infer1536 square, canonical inverse-depth times W/f then reciprocal)
- https://arxiv.org/abs/2410.02073
- https://github.com/apple-aiml-research/ml-depth-pro

## DreamCube (2025)

DreamCube: 3D Panorama Generation via Multi-plane Synchronization

- https://arxiv.org/abs/2506.17206
- https://yukun-huang.github.io/DreamCube/
- https://github.com/Yukun-Huang/DreamCube
- https://huggingface.co/KevinHuang/DreamCube

## MoGe-2 (2025)

MoGe-2: Accurate Monocular Geometry with Metric Scale and Sharp Details

- https://arxiv.org/abs/2507.02546
- https://wangrc.site/MoGe2Page/
- https://github.com/microsoft/MoGe
- https://github.com/microsoft/MoGe/blob/main/moge/model/v2.py
- https://github.com/microsoft/MoGe/blob/main/moge/scripts/infer_panorama.py
- https://huggingface.co/Ruicheng/moge-2-vitl-normal

## PanDA (2025)

PanDA: Towards Panoramic Depth Anything with Unlabeled Panoramas and Mobius Spatial Augmentation

- Paper Method EPNL and SSL read; README and run_image output/pointcloud path inspected
- https://raw.githubusercontent.com/caozidong/PanDA/main/run_image.py
- https://openaccess.thecvf.com/content/CVPR2025/papers/Cao_PanDA_Towards_Panoramic_Depth_Anything_with_Unlabeled_Panoramas_and_Mobius_CVPR_2025_paper.pdf
- https://caozidong.github.io/PanDA_Depth/
- https://github.com/caozidong/PanDA

## RPG360 (2025)

RPG360: Robust 360 Depth Estimation with Perspective Foundation Models and Graph Optimization

- https://arxiv.org/html/2509.23991
- https://github.com/jdk9405/RPG360
- https://papers.nips.cc/paper_files/paper/2025/file/fb1ea28c42fcd32bd49e68769b26028f-Paper-Conference.pdf
- https://arxiv.org/abs/2509.23991
- https://jdk9405.github.io/RPG360/

## ST²360D (2025)

ST²360D: Spatial-to-Temporal Consistency for Training-free 360 Monocular Depth Estimation

- https://caozidong.github.io/ST2360D_Depth/
- https://openreview.net/pdf?id=d0bm4upnQ8
- https://haoai-1997.github.io/

## UniDepthV2 (2025)

UniDepthV2: Universal Monocular Metric Depth Estimation Made Simpler

- Paper summary and public API/model source inspected; full ablations not read
- https://raw.githubusercontent.com/lpiccinelli-eth/UniDepth/main/unidepth/models/unidepthv2/unidepthv2.py
- https://arxiv.org/abs/2502.20110
- https://github.com/lpiccinelli-eth/UniDepth#unidepthv2
- https://github.com/lpiccinelli-eth/UniDepth

## UniK3D (2025)

UniK3D: Universal Camera Monocular 3D Estimation

- Paper §3 representation and distribution-contraction analysis read
- Model infer L362–365 explicitly audited
- https://raw.githubusercontent.com/lpiccinelli-eth/UniK3D/main/unik3d/models/unik3d.py
- https://raw.githubusercontent.com/lpiccinelli-eth/UniK3D/main/LICENSE
- https://arxiv.org/abs/2503.16591
- https://lpiccinelli-eth.github.io/pub/unik3d/
- https://github.com/lpiccinelli-eth/UniK3D

## VGGT (2025)

VGGT: Visual Geometry Grounded Transformer

- Paper §3 representations/GT normalization and BA discussion read
- Official model forward and README camera convention inspected
- https://raw.githubusercontent.com/facebookresearch/vggt/main/vggt/models/vggt.py
- https://raw.githubusercontent.com/facebookresearch/vggt/main/LICENSE.txt
- https://arxiv.org/abs/2503.11651
- https://vgg-t.github.io/
- https://github.com/facebookresearch/vggt

## Video Depth Anything (2025)

Video Depth Anything: Consistent Depth Estimation for Super-Long Videos

- Official release notes, README benchmark and streaming limitation read
- https://raw.githubusercontent.com/DepthAnything/Video-Depth-Anything/main/README.md
- https://arxiv.org/abs/2501.12375
- https://videodepthanything.github.io/
- https://github.com/DepthAnything/Video-Depth-Anything

## Depth Anything V2 (2024)

Depth Anything V2

- Paper Method/training practice and repository license inspected
- https://github.com/DepthAnything/Depth-Anything-V2/blob/main/depth_anything_v2/dpt.py
- https://arxiv.org/abs/2406.09414
- https://depth-anything-v2.github.io/
- https://github.com/DepthAnything/Depth-Anything-V2

## Depth Anywhere (2024)

Depth Anywhere: Enhancing 360 Monocular Depth Estimation via Perspective Distillation and Unlabeled Data Augmentation

- https://arxiv.org/abs/2406.12849
- https://albert100121.github.io/Depth-Anywhere/
- https://github.com/albert100121/Depth-Anywhere

## Elite360D (2024)

Elite360D: Towards Efficient 360 Depth Estimation via Semantic- and Distance-Aware Bi-Projection Fusion

- https://arxiv.org/abs/2403.16376
- https://github.com/haoai-1997/Elite360D
- https://github.com/haoai-1997/Elite360D/tree/main/checkpoints

## Marigold (2024)

Marigold: Repurposing Diffusion-Based Image Generators for Monocular Depth Estimation

- https://arxiv.org/abs/2312.02145
- https://openaccess.thecvf.com/content/CVPR2024/html/Ke_Repurposing_Diffusion-Based_Image_Generators_for_Monocular_Depth_Estimation_CVPR_2024_paper.html
- https://marigoldmonodepth.github.io/
- https://github.com/prs-eth/Marigold
- https://github.com/prs-eth/Marigold/blob/main/marigold/marigold_depth_pipeline.py
- https://huggingface.co/prs-eth/marigold-depth-v1-1

## Metric3Dv2 (2024)

Metric3Dv2: A Versatile Monocular Geometric Foundation Model for Zero-shot Metric Depth and Surface Normal Estimation

- Official repository inference usage/license and paper method synopsis; detailed benchmark/ablation not audited
- https://raw.githubusercontent.com/YvanYin/Metric3D/main/LICENSE
- https://arxiv.org/html/2404.15506v1 (Method III and Applications IV-B inspected)
- https://arxiv.org/abs/2404.15506
- https://jugghm.github.io/Metric3Dv2/
- https://github.com/YvanYin/Metric3D

## BiFuse++ (2023)

BiFuse++: Self-Supervised and Efficient Bi-Projection Fusion for 360° Depth Estimation

- Original arXiv metadata and official README/license/pretrained inference reviewed; detailed Method source not audited
- https://arxiv.org/pdf/2209.02952 (paper Fig1 confirms 3-frame PoseNet during training)
- https://arxiv.org/abs/2209.02952
- https://github.com/fuenwang/BiFusev2

## HRDFuse (2023)

HRDFuse: Monocular 360° Depth Estimation by Collaboratively Learning Holistic-with-Regional Depth Distributions

- https://arxiv.org/abs/2303.11616
- https://openaccess.thecvf.com/content/CVPR2023/papers/Ai_HRDFuse_Monocular_360deg_Depth_Estimation_by_Collaboratively_Learning_Holistic-With-Regional_Depth_CVPR_2023_paper.pdf
- https://github.com/haoai-1997/HRDFuse
- https://haoai-1997.github.io/

## 360MonoDepth (2022)

360MonoDepth: High-Resolution 360° Monocular Depth Estimation

- https://arxiv.org/html/2111.15669
- https://github.com/manurare/360monodepth
- https://raw.githubusercontent.com/manurare/360monodepth/main/code/python/src/main.py
- https://arxiv.org/abs/2111.15669
- https://manurare.github.io/360monodepth/

## MODE (2022)

MODE: Multi-view Omnidirectional Depth Estimation with 360° Cameras

- https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf
- https://github.com/nju-ee/MODE-2022
- https://raw.githubusercontent.com/nju-ee/MODE-2022/main/README.md

## OmniFusion (2022)

OmniFusion: 360 Monocular Depth Estimation via Geometry-Aware Fusion

- https://arxiv.org/abs/2203.00838
- https://openaccess.thecvf.com/content/CVPR2022/papers/Li_OmniFusion_360_Monocular_Depth_Estimation_via_Geometry-Aware_Fusion_CVPR_2022_paper.pdf
- https://github.com/yuliangguo/OmniFusion

## PanoFormer (2022)

PanoFormer: Panorama Transformer for Indoor 360° Depth Estimation

- ECCV official paper first page/Method introduction and official repository inspected; ablations and code path incomplete
- https://arxiv.org/abs/2203.09283
- https://github.com/zhijieshen-bjtu/PanoFormer

## UniFuse (2021)

UniFuse: Unidirectional Fusion for 360° Panorama Depth Estimation

- Original paper abstract and official repository training/evaluation instructions; full source convention not audited
- https://arxiv.org/pdf/2102.03550
- https://raw.githubusercontent.com/alibaba/UniFuse-Unidirectional-Fusion/main/LICENSE
- https://arxiv.org/abs/2102.03550
- https://github.com/alibaba/UniFuse-Unidirectional-Fusion

## 360DVO (2026)

360DVO: Deep Visual Odometry for Monocular 360-Degree Camera

- Paper III: spherical model and patch ODBA; V-B: Sim(3)-Umeyama trajectory alignment; V-D: embedded speed. Official demo computes spherical intrinsics and exports trajectory/points. Official LICENSE is MIT; no local model execution.
- https://chris1004336379.github.io/360DVO-homepage/
- https://arxiv.org/html/2601.02309v1
- https://arxiv.org/pdf/2601.02309
- https://doi.org/10.1109/LRA.2026.3655280
- https://github.com/chris1004336379/360DVO
- https://raw.githubusercontent.com/chris1004336379/360DVO/master/demo.py
- https://raw.githubusercontent.com/chris1004336379/360DVO/master/LICENSE
- https://raw.githubusercontent.com/chris1004336379/360DVO/master/environment.yml

## 360DVO Dataset (2026)

360DVO: Deep Visual Odometry for Monocular 360-Degree Camera — real-world benchmark

- https://huggingface.co/datasets/chris1004336379/360DVO
- https://huggingface.co/api/datasets/chris1004336379/360DVO
- https://arxiv.org/html/2601.02309v1
- https://chris1004336379.github.io/360DVO-homepage/

## AprilVINS (2026)

Towards Accurate End-Effector Localization for UMI-Style Robotic Manipulation Teaching

- Paper IV defines ray residuals, local tag layout and guarded output; V uses SE(3) without scale fitting. Official project footer confirms release after acceptance; public website backend is a pilot/template, not verified estimator source. No local estimator reproduction.
- https://arxiv.org/abs/2610.09857
- https://arxiv.org/html/2610.09857v1
- https://arxiv.org/pdf/2610.09857
- https://mild-web.github.io/
- https://github.com/mild-web/mild-web.github.io

## Cube-Splat (2026)

Cube-Splat: High-Fidelity 360° Gaussian Splatting SLAM via Cubemap Factorization and Adjoint-Consistent Optimization

- Springer confirms ECCV 2026 publication. Paper 3.1-3.3 explains four co-centered views and depth-prior initialization, 4 gives evaluation and speed, supplementary limitations distinguish absent sensor fusion. Official README lists ERP SynPano/OmniBlender configs and UniFuse_SpatialAudioGen checkpoint. Individual raw source fetches did not resolve; conversion/alignment details remain unknown.
- https://link.springer.com/chapter/10.1007/978-3-032-37255-0_12
- https://arxiv.org/abs/2609.21347
- https://arxiv.org/html/2609.21347v1
- https://arxiv.org/pdf/2609.21347
- https://github.com/guoxf304/CubeSplat
- https://wangkaiwei.org/publications/

## Hilti–Trimble–Oxford 2026 · Indoor (2026)

Hilti-Trimble-Oxford Dataset: 360 Visual-Inertial Benchmark with Floor Plan Priors for SLAM and Localization

- https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026
- https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/dataset.md
- https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/sensors.md
- https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/ground-truth.md
- https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/challenge-tools.md
- https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/floorplans.md
- https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/challenge-evaluation.md
- https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/config/hilti_openvins/rs_config.yaml
- https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/camera_calibration/kalibr_imucam_chain.yaml
- https://arxiv.org/abs/2607.06464
- https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026
- https://huggingface.co/api/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026

## Holo360D (2026)

Holo360D: A Large-Scale Real-World Dataset with Continuous Trajectories for Advancing Panoramic 3D Reconstruction and Beyond

- https://github.com/Jou719/Holo360D
- https://arxiv.org/html/2604.22482v2
- https://huggingface.co/datasets/ouou123/Holo360D
- https://jou719.github.io/Holo360D_homepage/

## MILD / MILD-Sim (2026)

Towards Accurate End-Effector Localization for UMI-Style Robotic Manipulation Teaching

- https://mild-web.github.io/
- https://arxiv.org/abs/2610.09857

## ODGS-SLAM (2026)

ODGS-SLAM: Omnidirectional Gaussian Splatting SLAM

- Official CVF/project confirm CVPR 2026; README explicitly accepts ERP RGB/RGB-D and academic-only license.
- https://openaccess.thecvf.com/content/CVPR2026/html/Spiss_ODGS-SLAM_Omnidirectional_Gaussian_Splatting_SLAM_CVPR_2026_paper.html
- https://odgs-slam.github.io/
- https://github.com/odgs-slam/odgs-slam

## ODGS-SLAM Dataset (2026)

ODGS-SLAM Dataset: synthetic and real omnidirectional motion sequences

- https://researchdata.uibk.ac.at/records/z6f6r-sjc65
- https://researchdata.uibk.ac.at/api/records/z6f6r-sjc65
- https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_real_world_README.md?download=1
- https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_room_synthetic_README.md?download=1
- https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/outdoor_synthetic_README.md?download=1

## P2U-SLAM (2026)

P2U-SLAM: A Monocular Wide-FoV SLAM System Based on Point Uncertainty and Pose Uncertainty

- arXiv v2 confirms T-ITS acceptance; III explicitly Taylor/KB models; official repository tree lacks implementation.
- https://arxiv.org/abs/2409.10143
- https://github.com/BambValley/P2U-SLAM
- https://arxiv.org/html/2409.10143v1

## PanoAir (2026)

PanoAir: A Panoramic Visual-Inertial SLAM with Cross-Time Real-World UAV Dataset

- Paper IV uses ERP; V-C specifies the embedded 10 Hz setting. Official repository README checked 2026-10-20 separates the advertised dataset/calibration download from the still-pending source-code release. No archive execution or local estimator reproduction.
- https://arxiv.org/abs/2604.00852
- https://arxiv.org/html/2604.00852v1
- https://github.com/YYWumm/PanoAir
- https://drive.google.com/file/d/1lG1Upn6yi-N6tYpEHAt6dfR1uhzNtWbT/view

## PanoAir (2026)

PanoAir: A Panoramic Visual-Inertial SLAM with Cross-Time Real-World UAV Dataset

- https://github.com/YYWumm/PanoAir
- https://arxiv.org/abs/2604.00852

## PanoCARLA-Static (2026)

PanoCARLA-Static: static-scene panoramic RGB-D video with moving virtual cameras

- https://huggingface.co/datasets/Soon122/PanoCARLA-Static
- https://huggingface.co/api/datasets/Soon122/PanoCARLA-Static
- https://github.com/ChuanxinSong/PanoCARLA
- https://github.com/ChuanxinSong/PanoCARLA/blob/main/stage2/equi_extract_for_fov100_multiprocess.py
- https://github.com/ChuanxinSong/PanoCARLA/blob/main/stage2/record_2stage.py
- https://proceedings.mlr.press/v306/song26u.html

## PanoGS-SLAM (2026)

PanoGS-SLAM: Panoramic 3D Gaussian Splatting SLAM

- Method uses native ERP; IV-A aligns trajectories for scale ambiguity; abstract promises future source.
- https://arxiv.org/abs/2609.17387
- https://arxiv.org/html/2609.17387v1

## PanoLoop (2026)

PanoLoop: Yaw-Invariant Loop Closure for Feed-Forward Panoramic SLAM

- Official PDF front page confirms eight authors and CGF 45(7). Sections 3.1-3.3 define chunk inference and loop closure; 4.3 explicitly says non-metric depth and Sim(3) evaluation; 4.4 and 4.9-4.10 specify resolution, offline sequence retrieval, 0.60 FPS and limitations. No official source URL found in paper links or publisher metadata; not reproduced locally.
- https://doi.org/10.1111/cgf.70607
- https://diglib7.eg.org/items/288b7b5d-7f87-4f03-b700-fc683d0c60e2
- https://diglib7.eg.org/bitstreams/55a9089c-0201-403e-bd17-e58872d044fd/download
- https://diglib7.eg.org/bitstreams/8f7f04ff-aeaf-4c8e-bbaf-0068bee7a665/download
- https://pacificgraphics2026.github.io/full-program.html?format=video

## MASt3R-SLAM (2025)

MASt3R-SLAM: Real-Time Dense SLAM with 3D Reconstruction Priors

- Method 3.1, Components Tables4-7, Limitations5, evaluation alignment and official source/license read; paper ~15FPS RTX4090 long-side512, not local measurement
- https://arxiv.org/pdf/2412.12392
- https://edexheim.github.io/mast3r-slam/
- https://github.com/rmurai0610/MASt3R-SLAM

## OKVIS2-X (2025)

OKVIS2-X: Open Keyframe-Based Visual-Inertial SLAM Configurable With Dense Depth or LiDAR, and GNSS

- Official README provides T-RO citation/DOI, depth-fusion apps, metric scaling and causal/final trajectory files.
- https://arxiv.org/abs/2510.04612
- https://github.com/ethz-mrl/OKVIS2-X

## Oxford Spires (2025)

The Oxford Spires Dataset: Benchmarking Large-Scale LiDAR-Visual Localisation, Reconstruction and Radiance Field Methods

- https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/
- https://github.com/ori-drs/oxford_spires_dataset
- https://arxiv.org/abs/2411.10546

## PanoSLAM (Panoptic) (2025)

PanoSLAM: Panoptic 3D Scene Reconstruction via Gaussian SLAM

- Official abstract explicitly specifies sequential RGB-D panoptic reconstruction; repository tree is README-only.
- https://arxiv.org/abs/2501.00352
- https://github.com/runnanchen/PanoSLAM

## ToF-360 (2025)

ToF-360: A Panoramic Time-of-flight RGB-D Dataset for Single Capture Indoor Semantic 3D Reconstruction

- https://huggingface.co/datasets/COLE-Ricoh/ToF-360
- https://openaccess.thecvf.com/content/CVPR2025W/PBVS/papers/Kanayama_ToF-360_-_A_Panoramic_Time-of-flight_RGB-D_Dataset_for_Single_Capture_CVPRW_2025_paper.pdf
- https://www.dfki.de/en/web/research/projects-and-publications/publication/15783
- https://huggingface.co/datasets/COLE-Ricoh/ToF-360/tree/main/Hospital
- https://huggingface.co/datasets/COLE-Ricoh/ToF-360/tree/main/Office_Room_1

## 360-VIO (2024)

360-VIO: A Robust Visual–Inertial Odometry Using a 360° Camera

- Author-uploaded manuscript, coauthor publication pages and IEEE metadata reviewed; no local reproduction
- https://ieeexplore.ieee.org/document/10373205/
- https://shengyang93.github.io/publication/2023-360-vio/
- https://chen-xieyuanli.github.io/_pages/includes/pub/
- https://www.researchgate.net/profile/Qi-Wu-42/publication/376825456_360-VIO_A_Robust_Visual-Inertial_Odometry_Using_a_360_Camera/links/6594b0b56f6e450f19c49549/360-VIO-A-Robust-Visual-Inertial-Odometry-Using-a-360-Camera.pdf

## 360Loc (2024)

360Loc: A Dataset and Benchmark for Omnidirectional Visual Localization with Cross-device Queries

- https://huajianup.github.io/research/360Loc/
- https://github.com/HuajianUP/360Loc
- https://openaccess.thecvf.com/content/CVPR2024/html/Huang_360Loc_A_Dataset_and_Benchmark_for_Omnidirectional_Visual_Localization_with_CVPR_2024_paper.html

## 360ORB-SLAM (2024)

360ORB-SLAM: A Visual SLAM System for Panoramic Images with Depth Completion Network

- Paper II Eq. (3) defines spherical range; introduction lists tracking/mapping/loop threads.
- https://arxiv.org/abs/2401.10560
- https://arxiv.org/html/2401.10560v1

## DBA-Fusion (2024)

DBA-Fusion: Tightly Integrating Deep Dense Visual Bundle Adjustment with Multiple Sensors for Large-Scale Localization and Mapping

- Method III and Experiments IV read; Schur Hessian fusion with IMU; TUM-VI uses start/end GT and DROID initial GT scale; inference settings 5Hz around384x512; not executed
- https://arxiv.org/pdf/2403.13714
- https://github.com/GREAT-WHU/DBA-Fusion

## DPV-SLAM (2024)

Deep Patch Visual SLAM

- ECCV paper and official repository verify two loop mechanisms and shared source release.
- https://arxiv.org/abs/2408.01654
- https://github.com/princeton-vl/DPVO

## MonoGS (2024)

Gaussian Splatting SLAM

- Official README verifies modes, experimental stereo and initialization cautions; ODGS README verifies inherited academic-only license.
- https://arxiv.org/abs/2312.06741
- https://rmurai.co.uk/projects/GaussianSplattingSLAM/
- https://github.com/muskie82/MonoGS

## SplaTAM (2024)

SplaTAM: Splat, Track & Map 3D Gaussians for Dense RGB-D SLAM

- Official paper system definition and repository inspected; RGB-D success cannot be substituted as evidence predicted depth improves VIO; not executed
- https://spla-tam.github.io/assets/SplaTAM.pdf
- https://spla-tam.github.io/
- https://github.com/spla-tam/SplaTAM

## Aria Digital Twin (2023)

Aria Digital Twin: A New Benchmark Dataset for Egocentric 3D Machine Perception

- https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset
- https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format
- https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download
- https://openaccess.thecvf.com/content/ICCV2023/html/Pan_Aria_Digital_Twin_A_New_Benchmark_Dataset_for_Egocentric_3D_ICCV_2023_paper.html

## DPVO (2023)

Deep Patch Visual Odometry

- Official repository separates DPVO NeurIPS 2023 and DPV-SLAM ECCV 2024 papers.
- https://arxiv.org/abs/2208.04726
- https://github.com/princeton-vl/DPVO

## GO-SLAM (2023)

GO-SLAM: Global Optimization for Consistent 3D Instant Reconstruction

- Official ICCV repo confirms mono/stereo/RGB-D and parallel frontend/backend/instant mapper.
- https://arxiv.org/abs/2309.02436
- https://youmi-zym.github.io/projects/GO-SLAM/
- https://github.com/youmi-zym/GO-SLAM

## LF-VISLAM (2023)

LF-VISLAM: A SLAM Framework for Large Field-of-View Cameras With Negative Imaging Plane on Mobile Agents

- Official paper defines unit-vector features/loops; README gives Scaramuzza PAL config and pending-loop note.
- https://arxiv.org/abs/2209.05167
- https://github.com/flysoaryun/LF-VISLAM
- https://arxiv.org/html/2209.05167v3

## 360VO (2022)

360VO: Visual Odometry Using A Single 360 Camera

- Author PDF sections III-IV and author project page reviewed; no local reproduction
- https://huajianup.github.io/research/360VO/360VO_ICRA2022.pdf
- https://huajianup.github.io/research/360VO/
- https://researchportal.hkust.edu.hk/en/publications/360vo-visual-odometry-using-a-single-360-camera/

## Deep360 (2022)

MODE: Multi-view Omnidirectional Depth Estimation with 360° Cameras

- https://github.com/nju-ee/MODE-2022
- https://link.springer.com/chapter/10.1007/978-3-031-19827-4_12
- https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf

## Hilti-Oxford 2022 (2022)

Hilti-Oxford Dataset: A Millimeter-Accurate Benchmark for Simultaneous Localization and Mapping

- https://hilti-challenge.com/dataset-2022
- https://arxiv.org/abs/2208.09825

## KITTI-360 (2022)

KITTI-360: A Novel Dataset and Benchmarks for Urban Scene Understanding in 2D and 3D

- https://www.cvlibs.net/datasets/kitti-360/
- https://www.cvlibs.net/datasets/kitti-360/documentation.php
- https://arxiv.org/abs/2109.13410

## OKVIS2 (2022)

OKVIS2: Realtime Scalable Visual-Inertial SLAM with Loop Closure

- Official paper describes bounded factor graph and reversible marginalization; README confirms author implementation/BSD.
- https://arxiv.org/abs/2202.09199
- https://github.com/ethz-mrl/okvis2

## PatchMatch-Stereo-Panorama (2022)

PatchMatch-Stereo-Panorama, a fast dense reconstruction from 360° video images

- Author manuscript, official repository README, LICENSE and release notice reviewed; loop closure inherited from OpenVSLAM; no local reproduction
- https://arxiv.org/abs/2211.16266
- https://github.com/RoblabWh/PatchMatch
- https://github.com/RoblabWh/PatchMatch/blob/main/LICENSE
- https://github.com/RoblabWh/stella_vslam_dense
- https://doi.org/10.1109/SSRR56537.2022.10018698

## CodeVIO (2021)

CodeVIO: Visual-Inertial Odometry with Learned Optimizable Dense Depth

- Paper IV and experiment definitions read; demonstrates joint optimized depth/state but not arbitrary foundation-model prior causing universal pose improvement; no local execution
- https://arxiv.org/pdf/2012.10133

## DROID-SLAM (2021)

DROID-SLAM: Deep Visual SLAM for Monocular, Stereo, and RGB-D Cameras

- Official paper metadata and repository inspected; repository says demo inference >=11GB, some evaluation24GB; learned DBA differs from feeding arbitrary single-frame depth; not run
- https://arxiv.org/abs/2108.10869
- https://github.com/princeton-vl/DROID-SLAM

## HM3D (2021)

Habitat-Matterport 3D Dataset: 1000 Large-scale 3D Environments for Embodied AI

- https://aihabitat.org/datasets/hm3d/
- https://arxiv.org/abs/2109.08238

## Hilti SLAM 2021 (2021)

The Hilti SLAM Challenge Dataset

- https://hilti-challenge.com/dataset-2021
- https://arxiv.org/abs/2109.11316
- https://huggingface.co/datasets/Hilti-Research/hilti-slam-challenge-2021/blob/main/calibration.yaml
- https://arxiv.org/html/2109.11316

## Hypersim (2021)

Hypersim: A Photorealistic Synthetic Dataset for Holistic Indoor Scene Understanding

- https://github.com/apple-aiml-research/ml-hypersim
- https://arxiv.org/abs/2011.02523

## ORB-SLAM3 (2021)

ORB-SLAM3: An Accurate Open-Source Library for Visual, Visual-Inertial and Multi-Map SLAM

- Official repository explicitly provides EuRoC and TUM-VI mono/stereo/fisheye/IMU examples; paper claims dataset performance, not verified on handheld robotics
- https://arxiv.org/abs/2007.11898
- https://github.com/UZ-SLAMLab/ORB_SLAM3

## OmniScenes (2021)

OmniScenes (PICCOLO panoramic localisation dataset)

- https://github.com/82magnolia/piccolo
- https://github.com/82magnolia/panoramic-localization
- https://openaccess.thecvf.com/content/ICCV2021/supplemental/Kim_PICCOLO_Point_Cloud-Centric_ICCV_2021_supplemental.pdf
- https://github.com/82magnolia/piccolo#downloading-omniscenes-update-new-scenes-added

## Pano3D (2021)

Pano3D: A Holistic Benchmark and a Solid Baseline for 360° Depth Estimation

- https://vcl3d.github.io/Pano3D/
- https://arxiv.org/abs/2109.02749
- https://github.com/VCL3D/Pano3D

## Basalt (2020)

Visual-Inertial Mapping with Non-Linear Factor Recovery

- Official TUM page confirms RA-L/ICRA venue and components; official source/header docs provide calibration tools.
- https://arxiv.org/abs/1904.06504
- https://cvg.cit.tum.de/research/vslam/basalt
- https://gitlab.com/VladyslavUsenko/basalt

## D3VO (2020)

D3VO: Deep Depth, Deep Pose and Deep Uncertainty for Monocular Visual Odometry

- Method section and Tables 4/6 component ablations read; KITTI/EuRoC training/test conditions constrain interpretation; not reproduced
- https://arxiv.org/pdf/2003.01060
- https://cvg.cit.tum.de/research/vslam/d3vo

## Newer College (2020)

The Newer College Dataset: Handheld LiDAR, Inertial and Vision with Ground Truth

- https://ori-drs.github.io/newer-college-dataset/
- https://ori-drs.github.io/newer-college-dataset/ground-truth/
- https://ori-drs.github.io/newer-college-dataset/download/
- https://arxiv.org/abs/2112.08854
- https://ori-drs.github.io/newer-college-dataset/multi-cam/calibration-multi/

## OmniSLAM (2020)

OmniSLAM: Omnidirectional Localization and Dense Mapping for Wide-baseline Multi-camera Systems

- ICRA paper specifies multi-fisheye wide-baseline stereo, depth-guided matching, loop closing and TSDF fusion.
- https://arxiv.org/abs/2003.08056
- https://sites.google.com/view/chwon

## OpenVINS (2020)

OpenVINS: A Research Platform for Visual-Inertial Estimation

- Official paper and documentation; FEJ/propagation/calibration derivations; launch and source entries inspected; not executed in this collection
- https://pgeneva.com/downloads/papers/Geneva2020ICRA.pdf
- https://docs.openvins.com/
- https://github.com/rpng/open_vins
- https://docs.openvins.com/classov__core_1_1CamEqui.html

## Structured3D (2020)

Structured3D: A Large Photo-realistic Dataset for Structured 3D Modeling

- https://structured3d-dataset.org/
- https://github.com/bertjiazheng/Structured3D
- https://github.com/bertjiazheng/Structured3D/blob/master/data_organization.md
- https://arxiv.org/abs/1908.00222

## TartanAir V2 (2020)

TartanAir: A Dataset to Push the Limits of Visual SLAM

- https://tartanair.org/
- https://tartanair.org/modalities.html
- https://tartanair.org/examples.html
- https://github.com/castacks/tartanairpy/blob/158a6844d782942110967325ca3082f50ab2bfc7/tartanair/reader.py#L112-L153
- https://github.com/castacks/tartanairpy/blob/158a6844d782942110967325ca3082f50ab2bfc7/tartanair/customizer.py#L126-L130
- https://github.com/castacks/tartanairpy/blob/158a6844d782942110967325ca3082f50ab2bfc7/tartanair/customizer.py#L232-L259
- https://github.com/castacks/tartanair_tools/blob/master/data_type.md#pose-file
- https://theairlab.org/tartanair-dataset/

## DIODE (2019)

DIODE: A Dense Indoor and Outdoor DEpth Dataset

- https://diode-dataset.org/
- https://github.com/diode-dataset/diode-devkit
- https://arxiv.org/html/1908.00463v1

## Replica (2019)

The Replica Dataset: A Digital Replica of Indoor Spaces

- https://github.com/facebookresearch/Replica-Dataset
- https://github.com/facebookresearch/Replica-Dataset/blob/main/LICENSE
- https://arxiv.org/abs/1906.05797

## WoodScape (2019)

WoodScape: A Multi-Task, Multi-Camera Fisheye Dataset for Autonomous Driving

- https://github.com/valeoai/WoodScape
- https://arxiv.org/abs/1905.01489

## stella_vslam (2019)

stella_vslam / OpenVSLAM: A Versatile Visual SLAM Framework

- Official README explicitly lists equirectangular support, license/version caveats and future IMU integration.
- https://arxiv.org/abs/1910.01122
- https://stella-cv.readthedocs.io/en/latest/
- https://github.com/stella-cv/stella_vslam

## 3D60 (2018)

OmniDepth / 3D60 spherical RGB-D benchmark

- https://vcl3d.github.io/3D60/
- https://arxiv.org/abs/1807.09620

## Gibson / GibsonV2 (2018)

Gibson Env: Real-World Perception for Embodied Agents

- https://gibsonenv.github.io/
- https://stanfordvl.github.io/iGibson/dataset.html
- https://vcl3d.github.io/Pano3D/

## TUM VI (2018)

The TUM VI Benchmark for Evaluating Visual-Inertial Odometry

- https://cvg.cit.tum.de/data/datasets/visual-inertial-dataset
- https://arxiv.org/abs/1804.06120

## VINS-Fusion (2018)

VINS-Fusion: An Optimization-based Multi-sensor State Estimator

- Official README verifies sensor modes, camera models, license and paper/code distinction.
- https://arxiv.org/abs/1708.03852
- https://github.com/HKUST-Aerial-Robotics/VINS-Fusion

## KITTI Depth (2017)

Sparsity Invariant CNNs / KITTI Depth Prediction and Completion

- https://www.cvlibs.net/datasets/kitti/eval_depth.php?benchmark=depth_prediction
- https://arxiv.org/abs/1708.06500

## LaFiDa (2017)

LaFiDa – A Laserscanner Multi-Fisheye Camera Dataset

- https://www.ipf.kit.edu/english/code_1842.php
- https://www.ipf.kit.edu/lafida.php
- https://www.ipf.kit.edu/lafida_datasets.php

## Matterport3D (2017)

Matterport3D: Learning from RGB-D Data in Indoor Environments

- https://niessner.github.io/Matterport/
- https://github.com/niessner/Matterport/blob/master/data_organization.md
- https://github.com/niessner/Matterport

## Oxford RobotCar (2017)

1 Year, 1000km: The Oxford RobotCar Dataset

- https://robotcar-dataset.robots.ox.ac.uk/
- https://robotcar-dataset.robots.ox.ac.uk/documentation/
- https://arxiv.org/abs/2002.10152

## SVO Pro (2017)

SVO Pro / SVO: Semi-Direct Visual Odometry for Monocular and Multi-Camera Systems

- Official project and README enumerate camera models and VO/VIO/VI-SLAM/loop configurations.
- https://rpg.ifi.uzh.ch/svo_pro.html
- https://github.com/uzh-rpg/rpg_svo_pro_open

## Stanford2D3D / 2D-3D-S (2017)

Joint 2D-3D-Semantic Data for Indoor Scene Understanding

- https://github.com/alexsax/2D-3D-Semantics
- https://arxiv.org/abs/1702.01105

## EuRoC MAV (2016)

The EuRoC micro aerial vehicle datasets

- https://projects.asl.ethz.ch/datasets/euroc-mav/
- https://doi.org/10.1177/0278364915620033

## RPG Multi-FoV (2016)

Benefit of Large Field-of-View Cameras for Visual Odometry

- https://rpg.ifi.uzh.ch/fov.html
- https://rpg.ifi.uzh.ch/docs/ICRA16_Zhang.pdf
- https://rpg.ifi.uzh.ch/datasets/rpg_urban_pinhole_info.tar.gz
- https://rpg.ifi.uzh.ch/datasets/rpg_urban_fisheye_info.tar.gz
- https://rpg.ifi.uzh.ch/datasets/rpg_urban_cata_info.tar.gz
- https://rpg.ifi.uzh.ch/datasets/rpg_vfr_pinhole_info.tar.gz
- https://rpg.ifi.uzh.ch/datasets/rpg_vfr_fisheye_info.tar.gz
- https://rpg.ifi.uzh.ch/datasets/rpg_vfr_cata_info.tar.gz
- https://github.com/zhangzichao/omni_cam
- https://github.com/uzh-rpg/rpg_blender_omni_camera

## KITTI Odometry (2012)

KITTI Visual Odometry / SLAM Evaluation

- https://www.cvlibs.net/datasets/kitti/eval_odometry.php
- https://www.cvlibs.net/datasets/kitti/
- https://doi.org/10.1109/CVPR.2012.6248074

## NYU Depth V2 (2012)

Indoor Segmentation and Support Inference from RGBD Images

- https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html
- https://cs.nyu.edu/~fergus/datasets/indoor_seg_support.pdf

## TUM RGB-D (2012)

A Benchmark for the Evaluation of RGB-D SLAM Systems

- https://cvg.cit.tum.de/data/datasets/rgbd-dataset
- https://cvg.cit.tum.de/data/datasets/rgbd-dataset/file_formats
- https://doi.org/10.1109/IROS.2012.6385773
