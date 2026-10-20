# Dataset reading priority / 数据集阅读优先级

Reviewed 2026-10-20. Editorial ordering reflects task relevance, documented protocols and usable references, not measured citation/download counts or a performance ranking. Tags apply to the stated scope and version, not every derivative release.

按任务和版本评估协议成熟度与参考资料，不以年代、新颖性或名称自动推断。待发布和获取待核实的资源保留在末尾。

## 经典基准 / Established benchmark

### Matterport3D

全景室内深度 / Panoramic indoor depth

已有全景深度方法提供固定预处理、训练与测试流程。

Panoramic depth methods provide established preprocessing and evaluation recipes.

- https://niessner.github.io/Matterport/
- https://github.com/alibaba/UniFuse-Unidirectional-Fusion

### Stanford2D3D / 2D-3D-S

全景室内深度 / Panoramic indoor depth

全景深度工作常用的区域划分对照；须沿用具体论文协议。

A recurring area-split control in panoramic depth; follow the selected paper protocol.

- https://github.com/alexsax/2D-3D-Semantics
- https://github.com/alibaba/UniFuse-Unidirectional-Fusion

### 3D60

全景立体与深度 / Panoramic stereo / depth

专门面向全景立体与深度的公开基准，已有方法提供评测入口。

A dedicated panoramic stereo/depth benchmark with published evaluation routes.

- https://vcl3d.github.io/3D60/
- https://github.com/alibaba/UniFuse-Unidirectional-Fusion

### Structured3D

合成室内几何 / Synthetic indoor geometry

提供结构化场景与多种几何标注，可建立可重复的室内对照。

Structured scenes and geometry annotations support reproducible indoor controls.

- https://structured3d-dataset.org/

### EuRoC MAV

双目惯性里程计 / Stereo-inertial odometry

稳定的传感器标定与参考轨迹，是视觉惯性系统的经典对照。

Established calibration and trajectory references support standard VIO comparisons.

- https://projects.asl.ethz.ch/datasets/euroc-mav/

### TUM VI

鱼眼惯性里程计 / Fisheye-inertial odometry

明确的鱼眼标定和惯性协议；动作捕捉覆盖须逐段核查。

Established fisheye calibration and inertial protocol; check mocap coverage per sequence.

- https://cvg.cit.tum.de/data/datasets/visual-inertial-dataset

### TUM RGB-D

RGB-D SLAM / RGB-D SLAM

提供公开轨迹评测工具和成熟的 RGB-D 序列协议。

Public trajectory evaluation tools and established RGB-D sequence protocols.

- https://cvg.cit.tum.de/data/datasets/rgbd-dataset

### KITTI Odometry

车载视觉里程计 / Driving visual odometry

具有固定序列和公开评测协议的长期车载 VO 基准。

A longstanding driving VO benchmark with fixed sequences and evaluation protocols.

- https://www.cvlibs.net/datasets/kitti/eval_odometry.php

### NYU Depth V2

室内透视深度 / Indoor perspective depth

室内单目深度的经典透视对照，须注明划分与裁剪。

A standard indoor depth control; specify split and crop.

- https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html

### KITTI Depth

室外透视深度 / Outdoor perspective depth

车载深度评测常用对照；稀疏 LiDAR 监督与稠密深度须区分。

Established driving-depth evaluation; distinguish sparse LiDAR from dense targets.

- https://www.cvlibs.net/datasets/kitti/eval_depth.php?benchmark=depth_prediction

### Replica

室内渲染与建图 / Indoor rendering / mapping

高质量静态场景广泛支持可控渲染和 RGB-D 建图对照。

High-quality static scenes support controlled rendering and RGB-D mapping comparisons.

- https://github.com/facebookresearch/Replica-Dataset

### WoodScape

真实鱼眼感知 / Real fisheye perception

专门面向车载鱼眼的多任务资源；各任务标注范围分别核对。

A dedicated automotive fisheye resource; verify annotations per task.

- https://github.com/valeoai/WoodScape

## 常用资源 / Widely used resource

### Pano3D

全景深度 / Panoramic depth

专门定义全景深度任务与划分；保留源场景和监督协议。

Dedicated panoramic depth protocol and splits; retain source-scene provenance.

- https://vcl3d.github.io/Pano3D/

### Hypersim

合成室内深度 / Synthetic indoor depth

提供渲染几何、公开划分与处理工具，适合深度训练对照。

Rendered geometry, public splits and tools support depth-training comparisons.

- https://github.com/apple-aiml-research/ml-hypersim

### Gibson / GibsonV2

仿真与重投影 / Simulation / reprojection

已有仿真生态与实景重建资源；全景接口按具体发布核查。

An established simulation ecosystem; check panorama interfaces for the chosen release.

- https://gibsonenv.github.io/

### HM3D

室内扫描场景 / Scanned indoor scenes

成熟的室内场景资源；相机轨迹与深度通常由派生渲染提供。

An established indoor scene resource; trajectories and depth often come from derivative rendering.

- https://aihabitat.org/datasets/hm3d/

### DIODE

跨室内外深度 / Indoor / outdoor depth

适合检验跨环境深度泛化，须保留扫描有效掩码。

Useful for cross-environment depth evaluation with scan-validity masks.

- https://diode-dataset.org/

### TartanAir V2

合成深度与 VO / Synthetic depth / VO

延续成熟的 TartanAir 数据生态；V2 与原始版本的相机和格式须分别核对。

Builds on the TartanAir ecosystem; verify V2 geometry and formats separately from V1.

- https://tartanair.org/

### KITTI-360

车载多相机建图 / Driving multicamera mapping

相机、轨迹与三维扫描资料完整；不是直接采集的 ERP。

Documented cameras, poses and 3D scans; native observations are not ERP.

- https://www.cvlibs.net/datasets/kitti-360/

### Oxford RobotCar

长期车载定位 / Long-term driving localization

适合长期场景变化研究，官方 VO 不能当作精密真值。

Useful for long-term change studies; official VO is not precision ground truth.

- https://robotcar-dataset.robots.ox.ac.uk/

### Hilti SLAM 2021

多传感器 SLAM / Multisensor SLAM

已有挑战评测和参考轨迹，传感器与真值覆盖需按序列匹配。

An established challenge protocol; match sensors and reference coverage per sequence.

- https://hilti-challenge.com/dataset-2021

### Hilti-Oxford 2022

多传感器 SLAM / Multisensor SLAM

公开挑战与测量参考支持困难场景对照；不套用其他年份规格。

Public challenge and survey references support difficult-scene comparisons; keep release years distinct.

- https://hilti-challenge.com/dataset-2022

### Newer College

户外建图 / Outdoor mapping

常用的大尺度多传感器资源，参考轨迹来自配准而非动作捕捉。

A useful large-scale multisensor resource with registration-derived references.

- https://ori-drs.github.io/newer-college-dataset/

### 360Loc

全景视觉定位 / Panoramic localization

针对全景定位建立基准；定位参考不等于稠密深度标注。

A dedicated panoramic localization benchmark; pose references are not dense depth.

- https://huajianup.github.io/research/360Loc/

### OmniScenes

全景定位 / Panoramic localization

提供全景场景及定位对照，真值类型按数据文档使用。

Panoramic scenes and localization controls with task-specific reference definitions.

- https://github.com/82magnolia/piccolo#downloading-omniscenes-update-new-scenes-added

### Aria Digital Twin

第一视角数字孪生 / Egocentric digital twins

工具、标定及数字孪生标注较完整，实测与渲染真值分别说明。

Documented tools and digital-twin annotations; separate measured and rendered references.

- https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset

## 专项资源 / Specialized resource

### Deep360

全景立体深度 / Panoramic stereo depth

面向特定全景立体配置的专项数据，适合对应输入条件。

A specialized panoramic stereo resource for matching input configurations.

- https://github.com/nju-ee/MODE-2022

### RPG Multi-FoV

视场与 VO 对照 / FoV / VO controls

两种场景的受控光学对照；规模较小，城市深度索引需额外核查。

Controlled optics in two small scenes; verify urban depth indexing.

- https://rpg.ifi.uzh.ch/fov.html

### LaFiDa

鱼眼建图 / Fisheye mapping

针对鱼眼与扫描参考的专项资源，注意几何和轨迹覆盖。

A specialized fisheye / scan-reference resource with geometry and coverage constraints.

- https://www.ipf.kit.edu/lafida.php

### ToF-360

真实全景深度 / Real panoramic depth

较新的专门采集方案；按作者协议使用有效区域与距离。

A newer dedicated capture; follow author validity and distance conventions.

- https://huggingface.co/datasets/COLE-Ricoh/ToF-360

### Holo360D

全景视频深度 / Panoramic video depth

面向全景视频的新资源；优化轨迹和填洞深度的来源需保留。

A recent panoramic video resource; retain optimized-pose and filled-depth provenance.

- https://jou719.github.io/Holo360D_homepage/

### Oxford Spires

多传感器建图 / Multisensor mapping

较新的多传感器场景资源，需按版本核查标注与访问要求。

A recent multisensor resource; verify annotations and access by version.

- https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/

### Hilti–Trimble–Oxford 2026 · Indoor

室内鱼眼惯性 / Indoor fisheye / inertial

新近发布的独立年份，ERP 为派生流程，参考来自 LiDAR 惯性估计。

A recent separate release; ERP is derived and reference poses are LiDAR-inertial estimates.

- https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026

### 360DVO Dataset

学习式全景 VO / Learning-based panoramic VO

方法配套的专项数据，SfM 参考不能当独立测量真值。

Method-specific data with SfM pseudo-reference rather than independent measurements.

- https://chris1004336379.github.io/360DVO-homepage/

### ODGS-SLAM Dataset

全景高斯建图 / Panoramic Gaussian mapping

方法配套数据；真实立体估深、无深度和合成子集分开使用。

Method-specific real/synthetic subsets with different depth availability.

- https://odgs-slam.github.io/

### PanoCARLA-Static

合成全景视频 / Synthetic panoramic video

新近静态场景版本；不能沿用动态版本的逐帧位姿。

A recent static-scene release; dynamic-version per-frame poses are not interchangeable.

- https://huggingface.co/datasets/Soon122/PanoCARLA-Static

## 待发布或待核实 / Awaiting release or verification

### MILD / MILD-Sim

UMI 示教定位 / UMI teaching localization

论文已介绍，完整数据、代码及评测清单仍待录用后发布。

Announced benchmark; complete data, code and evaluation manifests await acceptance.

- https://mild-web.github.io/

### PanoAir

全景空中定位 / Panoramic aerial localization

关联数据下载及真值完整性尚未核实，保留待核实标记。

Dataset acquisition and reference completeness remain unverified.

- https://github.com/YYWumm/PanoAir
