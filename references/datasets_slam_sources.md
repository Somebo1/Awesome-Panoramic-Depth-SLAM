# SLAM / localisation / mapping datasets: primary-source register

Checked: **2026-10-17**. Scope: 16 dataset families, prioritising native panorama, fisheye and wide-FoV systems plus established perspective-camera controls. This is a metadata and documentation audit; full dataset archives were not downloaded.

The card field `access` describes the documented acquisition route, not an open-source licence. `open` means an official download route is published; it does not certify that every large archive was transferred successfully. `registration` means registration or a dataset agreement is documented. PanoAir remains `unknown` because its Drive archive has not been verified.

The raw `sensors` and `groundTruth` arrays are concise technical identifiers; the corresponding `sensorLabels` / `groundTruthLabels`, summaries, details and caveats have separate English/Chinese text.

Important editorial distinctions:
- KITTI-360, Hilti, LaFiDa, Newer College and Oxford Spires camera rigs are not relabelled as stitched ERP recordings.
- 360Loc and OmniScenes are primarily pose/localisation resources; availability of panoramas or point clouds does not establish complete dense image-depth ground truth.
- Measured depth, scan-projected sparse depth and digital-twin rendered depth are stated separately in each record.
- Mocap, RTK, sparse survey control points and map-registration-derived references are not treated as interchangeable.
- Published benchmark examples are not reproduced or independently evaluated here.

Follow-up on **2026-10-19**: the existing TartanAir record now explicitly describes V2, and a separate Hilti 2026 indoor record has been added. The original 2026-10-17 register below is historical; current sensor, geometry, reference and access evidence is recorded in the [TartanAir V2 / Hilti 2026 audit](tartanair_v2_hilti2026_sources.md) and the generated [current source index](sources.md). Hilti 2026 provides raw fisheye observations; ERP is an optional official stitching pipeline, not native recorded panoramas.

Additional follow-up on **2026-10-19**: [MILD](mild_dataset_sources.md) is indexed as an announced real/synthetic fisheye and stereo localization dataset, with public dataset download and licence still unverified. The associated AprilVINS method remains a separate paper record.

## Source records

### EuRoC MAV (`ds_euroc`)

- [ETH ASL: EuRoC MAV dataset and known issues](https://projects.asl.ethz.ch/datasets/euroc-mav/)
- [EuRoC dataset paper](https://doi.org/10.1177/0278364915620033)

### TUM RGB-D (`ds_tum_rgbd`)

- [TUM RGB-D benchmark overview and licence](https://cvg.cit.tum.de/data/datasets/rgbd-dataset)
- [TUM RGB-D image, depth and pose formats](https://cvg.cit.tum.de/data/datasets/rgbd-dataset/file_formats)

### TUM VI (`ds_tum_vi`)

- [TUM VI official sequences, calibration, coverage and licence](https://cvg.cit.tum.de/data/datasets/visual-inertial-dataset)
- [TUM VI paper](https://arxiv.org/abs/1804.06120)

### KITTI Odometry (`ds_kitti_odom`)

- [KITTI odometry benchmark splits and evaluation protocol](https://www.cvlibs.net/datasets/kitti/eval_odometry.php)
- [KITTI official dataset suite](https://www.cvlibs.net/datasets/kitti/)

### KITTI-360 (`ds_kitti360`)

- [KITTI-360 official sensors, licence and tasks](https://www.cvlibs.net/datasets/kitti-360/)
- [KITTI-360 optimized poses and calibration conventions](https://www.cvlibs.net/datasets/kitti-360/documentation.php)

### TartanAir / V2 (`ds_tartanair`)

- [TartanAir V2 official documentation and licence](https://tartanair.org/)
- [V2 modalities, depth packing and camera poses](https://tartanair.org/modalities.html)
- [Original TartanAir 2020 paper](https://arxiv.org/abs/2003.14338)

### Hilti SLAM 2021 (`ds_hilti2021`)

- [Hilti 2021 official downloads, truth dimensions and licence](https://hilti-challenge.com/dataset-2021)
- [Hilti SLAM sensor and calibration paper](https://arxiv.org/abs/2109.11316)

### Hilti-Oxford 2022 (`ds_hilti2022`)

- [Hilti-Oxford official ground-truth coverage and licence](https://hilti-challenge.com/dataset-2022)
- [Hilti-Oxford camera model, synchronization and reference methodology](https://arxiv.org/abs/2208.09825)

### Newer College (`ds_newer_college`)

- [Newer College official version overview](https://ori-drs.github.io/newer-college-dataset/)
- [Newer College ICP references and pose frames](https://ori-drs.github.io/newer-college-dataset/ground-truth/)
- [Newer College download and licence](https://ori-drs.github.io/newer-college-dataset/download/)
- [Multicamera extension paper](https://arxiv.org/abs/2112.08854)
- [Newer College multicamera distortion and synchronization](https://ori-drs.github.io/newer-college-dataset/multi-cam/calibration-multi/)

### Oxford RobotCar (`ds_robotcar`)

- [Oxford RobotCar overview, licence and registration](https://robotcar-dataset.robots.ox.ac.uk/)
- [RobotCar sensor models and VO reference warning](https://robotcar-dataset.robots.ox.ac.uk/documentation/)
- [2020 RTK ground-truth release](https://arxiv.org/abs/2002.10152)

### 360Loc (`ds_360loc`)

- [360Loc official project and mapping provenance](https://huajianup.github.io/research/360Loc/)
- [360Loc release, virtual cameras and pose formats](https://github.com/HuajianUP/360Loc)
- [360Loc CVPR 2024 paper](https://openaccess.thecvf.com/content/CVPR2024/html/Huang_360Loc_A_Dataset_and_Benchmark_for_Omnidirectional_Visual_Localization_with_CVPR_2024_paper.html)

### OmniScenes (`ds_omniscenes`)

- [PICCOLO official OmniScenes release and pose convention](https://github.com/82magnolia/piccolo)
- [Consolidated library: old OmniScenes version warning](https://github.com/82magnolia/panoramic-localization)

### PanoAir (`ds_panoair`)

- [PanoAir official README, sensor rates and release roadmap](https://github.com/YYWumm/PanoAir)
- [PanoAir 2026 preprint](https://arxiv.org/abs/2604.00852)

### Aria Digital Twin (`ds_adt`)

- [ADT official dataset overview](https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset)
- [ADT Z-depth units, GT/MPS separation and coordinates](https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format)
- [ADT download, sign-up and licence agreement](https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download)
- [ADT ICCV 2023 dataset paper](https://openaccess.thecvf.com/content/ICCV2023/html/Pan_Aria_Digital_Twin_A_New_Benchmark_Dataset_for_Egocentric_3D_ICCV_2023_paper.html)

### LaFiDa (`ds_lafida`)

- [KIT IPF official LaFiDa release and CC BY 4.0 licence](https://www.ipf.kit.edu/english/code_1842.php)
- [LaFiDa motion capture, calibration and synchronization](https://www.ipf.kit.edu/lafida.php)
- [LaFiDa downloads, units and outdoor tracking-volume limitation](https://www.ipf.kit.edu/lafida_datasets.php)

### Oxford Spires (`ds_oxford_spires`)

- [Oxford Spires official sensors, references, core sequences and licence](https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/)
- [Oxford Spires official downloader and depth-image generation](https://github.com/ori-drs/oxford_spires_dataset)
- [Oxford Spires dataset paper](https://arxiv.org/abs/2411.10546)

## Open checks and version notes

- EuRoC: the official page has moved downloads to ETH Research Collection. The repository landing/DOI access was blocked by the web fetcher; no independent dataset licence claim is made.
- OmniScenes and 360Loc: a separate explicit data licence was not located in the inspected official README/project page. Repository code licences are not substituted for dataset terms.
- PanoAir: README download and code roadmap are reported separately. The paper's broad availability statement does not verify that the linked archive contains complete SLAM source.
- Aria Digital Twin: the official download guide and format docs were readable; the separate agreement landing page could not be fetched. Cards link the official guide rather than interpreting agreement clauses.
- Aria Digital Twin: current overview, original paper and per-scene counts are not fully consistent; no fixed total sequence count is used. ADT Z-depth is in millimetres, while ASE uses ray distance.
- TartanAir: `year: 2020` is the family/original-paper year. Current camera-model and licence notes are explicitly V2; no unsupported V2 first-release year is invented.
- Hilti: years identify the 2021/2022 challenges; formal paper years are 2022/2023.
- Oxford RobotCar: year 2017 follows the journal-volume citation, with 2016 online publication disclosed.
- Oxford Spires: year 2025 follows the official public release/acceptance announcement, with the 2024 preprint disclosed. Not every sequence has a core localisation reference trajectory.
- LaFiDa: the outdoor large loop leaves the motion-capture volume; no continuous full-loop mocap GT claim is made.

