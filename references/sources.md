# Official-source index

Checked 2026-10-17. Bibliographic and interface evidence; no local reproduction is claimed.

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

## MCPDepth (2026)

MCPDepth: Omnidirectional Depth Estimation via Stereo Matching from Multi-Cylindrical Panoramas

- https://arxiv.org/abs/2408.01653
- https://github.com/Qjizhi/MCPDepth
- https://github.com/Qjizhi/MCPDepth/tree/main/pretrained_model

## PaGeR (2026)

Unified Panoramic Geometry Estimation via Multi-View Foundation Models

- https://arxiv.org/html/2605.26368
- https://pager360.github.io/
- https://github.com/prs-eth/PaGeR
- https://huggingface.co/prs-eth/PaGeR
- https://huggingface.co/prs-eth/PaGeR-metric-depth
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

## ODGS-SLAM (2026)

ODGS-SLAM: Omnidirectional Gaussian Splatting SLAM

- Official CVF/project confirm CVPR 2026; README explicitly accepts ERP RGB/RGB-D and academic-only license.
- https://openaccess.thecvf.com/content/CVPR2026/html/Spiss_ODGS-SLAM_Omnidirectional_Gaussian_Splatting_SLAM_CVPR_2026_paper.html
- https://odgs-slam.github.io/
- https://github.com/odgs-slam/odgs-slam

## P2U-SLAM (2026)

P2U-SLAM: A Monocular Wide-FoV SLAM System Based on Point Uncertainty and Pose Uncertainty

- arXiv v2 confirms T-ITS acceptance; III explicitly Taylor/KB models; official repository tree lacks implementation.
- https://arxiv.org/abs/2409.10143
- https://github.com/BambValley/P2U-SLAM

## PanoAir (2026)

PanoAir: A Panoramic Visual-Inertial SLAM with Cross-Time Real-World UAV Dataset

- IV model is ERP; abstract links release; V-C specifies embedded 10Hz setting.
- https://arxiv.org/abs/2604.00852
- https://arxiv.org/html/2604.00852v1
- https://drive.google.com/file/d/1lG1Upn6yi-N6tYpEHAt6dfR1uhzNtWbT/view

## PanoGS-SLAM (2026)

PanoGS-SLAM: Panoramic 3D Gaussian Splatting SLAM

- Method uses native ERP; IV-A aligns trajectories for scale ambiguity; abstract promises future source.
- https://arxiv.org/abs/2609.17387
- https://arxiv.org/html/2609.17387v1

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

## PanoSLAM (Panoptic) (2025)

PanoSLAM: Panoptic 3D Scene Reconstruction via Gaussian SLAM

- Official abstract explicitly specifies sequential RGB-D panoptic reconstruction; repository tree is README-only.
- https://arxiv.org/abs/2501.00352
- https://github.com/runnanchen/PanoSLAM

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

## OKVIS2 (2022)

OKVIS2: Realtime Scalable Visual-Inertial SLAM with Loop Closure

- Official paper describes bounded factor graph and reversible marginalization; README confirms author implementation/BSD.
- https://arxiv.org/abs/2202.09199
- https://github.com/ethz-mrl/okvis2

## CodeVIO (2021)

CodeVIO: Visual-Inertial Odometry with Learned Optimizable Dense Depth

- Paper IV and experiment definitions read; demonstrates joint optimized depth/state but not arbitrary foundation-model prior causing universal pose improvement; no local execution
- https://arxiv.org/pdf/2012.10133

## DROID-SLAM (2021)

DROID-SLAM: Deep Visual SLAM for Monocular, Stereo, and RGB-D Cameras

- Official paper metadata and repository inspected; repository says demo inference >=11GB, some evaluation24GB; learned DBA differs from feeding arbitrary single-frame depth; not run
- https://arxiv.org/abs/2108.10869
- https://github.com/princeton-vl/DROID-SLAM

## ORB-SLAM3 (2021)

ORB-SLAM3: An Accurate Open-Source Library for Visual, Visual-Inertial and Multi-Map SLAM

- Official repository explicitly provides EuRoC and TUM-VI mono/stereo/fisheye/IMU examples; paper claims dataset performance, not verified on handheld robotics
- https://arxiv.org/abs/2007.11898
- https://github.com/UZ-SLAMLab/ORB_SLAM3

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

## stella_vslam (2019)

stella_vslam / OpenVSLAM: A Versatile Visual SLAM Framework

- Official README explicitly lists equirectangular support, license/version caveats and future IMU integration.
- https://arxiv.org/abs/1910.01122
- https://stella-cv.readthedocs.io/en/latest/
- https://github.com/stella-cv/stella_vslam

## VINS-Fusion (2018)

VINS-Fusion: An Optimization-based Multi-sensor State Estimator

- Official README verifies sensor modes, camera models, license and paper/code distinction.
- https://arxiv.org/abs/1708.03852
- https://github.com/HKUST-Aerial-Robotics/VINS-Fusion

## SVO Pro (2017)

SVO Pro / SVO: Semi-Direct Visual Odometry for Monocular and Multi-Camera Systems

- Official project and README enumerate camera models and VO/VIO/VI-SLAM/loop configurations.
- https://rpg.ifi.uzh.ch/svo_pro.html
- https://github.com/uzh-rpg/rpg_svo_pro_open
