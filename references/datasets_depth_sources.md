# Depth dataset source ledger

Checked: **2026-10-17**. Entries are primary author/project, institution, benchmark, or official repository sources, opened or retrieved live during this pass.

This is a documentation review. Dataset archives were **not downloaded**, checksums were **not recomputed**, sensors were **not independently calibrated**, and benchmark performance was **not reproduced**. Access classifications describe the documented route, not a completed download. Explicitly unknown license/format details remain unknown.

The catalog separates physical measurements, rendered supervision, and derived benchmark protocols. Camera tags describe a documented capture or rendered product; they do not imply every archive includes that projection. Datasets with SLAM as a task may supply simulator or optimized reference poses rather than independent motion-capture truth. The real/mixed label is contextualized in each entry's provenance details.

## Matterport3D

Real building scans underpin many panoramic depth benchmarks; raw RGB-D capture and rendered ERP derivatives require different loaders.

- [Official project and access](https://niessner.github.io/Matterport/)
- [Official data organization](https://github.com/niessner/Matterport/blob/master/data_organization.md)
- [Official repository](https://github.com/niessner/Matterport)

Review caution: Many datasets reuse these buildings; combining derivatives does not create an independent test set.

## Stanford2D3D / 2D-3D-S

Registered indoor RGB, depth, normals, semantics and XYZ, explicitly supplied as perspective and equirectangular products.

- [Official modalities, data license and depth encoding](https://github.com/alexsax/2D-3D-Semantics)
- [Dataset paper](https://arxiv.org/abs/1702.01105)

Review caution: Do not substitute the S3DIS point-cloud-only release for the richer 2D-3D-S release.

## Structured3D

Synthetic house designs provide panoramic/perspective depth with controlled lighting and furnishing, plus rich structural annotations.

- [Official project](https://structured3d-dataset.org/)
- [Official splits and errata](https://github.com/bertjiazheng/Structured3D)
- [Official depth units and camera conventions](https://github.com/bertjiazheng/Structured3D/blob/master/data_organization.md)
- [Official Structured3D preprint](https://arxiv.org/abs/1908.00222)

Review caution: A rendered metric label does not establish transfer to real panoramic cameras.

## Replica

High-quality real indoor reconstructions serve as simulation assets; common RGB-D SLAM trajectories are separately rendered derivatives.

- [Official assets, renderer and download](https://github.com/facebookresearch/Replica-Dataset)
- [Replica research terms](https://github.com/facebookresearch/Replica-Dataset/blob/main/LICENSE)
- [Official Replica report](https://arxiv.org/abs/1906.05797)

Review caution: Replica assets, Replica360 and the popular neural-SLAM Replica trajectories are distinct releases.

## Hypersim

Photorealistic synthetic indoor baseline with explicitly documented camera-center distance, a frequent source of range-versus-Z errors.

- [Official format, range, split and license](https://github.com/apple-aiml-research/ml-hypersim)
- [Dataset paper](https://arxiv.org/abs/2011.02523)

Review caution: Perspective camera pixels can still encode radial range; projection alone does not determine the depth definition.

## 3D60

Rendered spherical panoramas and stereo offsets derived from scanned/synthetic interiors; Pano3D supersedes its monocular protocol.

- [Official modalities, stereo views, splits and lighting-bias notice](https://vcl3d.github.io/3D60/)
- [OmniDepth paper](https://arxiv.org/abs/1807.09620)

Review caution: 3D60 and Pano3D share source scenes and are not independent captures.

## Pano3D

A rendered benchmark/protocol over existing scanned scenes, emphasizing spherical metrics and cross-dataset generalization.

- [Official render protocol, access and weighted metrics](https://vcl3d.github.io/Pano3D/)
- [Pano3D paper](https://arxiv.org/abs/2109.02749)
- [Official implementation](https://github.com/VCL3D/Pano3D)

Review caution: Pano3D is both a benchmark and baseline method; its data are not a new independently captured building corpus.

## Gibson / GibsonV2

Real reconstructed indoor scenes support virtual RGB-D observations; Pano3D provides a specific GibsonV2 ERP evaluation derivative.

- [Official Gibson project](https://gibsonenv.github.io/)
- [Official current static-scene download and scan caveats](https://stanfordvl.github.io/iGibson/dataset.html)
- [Documented GibsonV2 ERP derivatives](https://vcl3d.github.io/Pano3D/)

Review caution: Gibson static scenes and interactive iGibson scene/object assets are different products.

## HM3D

Building-scale real scene meshes for embodied simulation; depth training pairs must be rendered under a declared camera protocol.

- [Official scope, access and scene-split metadata](https://aihabitat.org/datasets/hm3d/)
- [HM3D dataset paper](https://arxiv.org/abs/2109.08238)

Review caution: Keep HM3D distinct from Matterport3D and HM3D-Semantics annotation releases.

## DIODE

Dense laser-derived depth across indoor/outdoor scenes, released as rectified perspective crops rather than full panoramas.

- [Official downloads, masks, resolution and MIT license](https://diode-dataset.org/)
- [Official intrinsics and dataloader](https://github.com/diode-dataset/diode-devkit)
- [Official paper: perspective extraction and scan timing](https://arxiv.org/html/1908.00463v1)

Review caution: Laser maximum range specifications are not a guarantee that every image pixel has valid depth.

## NYU Depth V2

Standard indoor perspective RGB-D baseline; measured rawDepths and inpainted depths must be kept separate.

- [Official raw/labeled depth, timing and calibration](https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html)
- [Original dataset paper](https://cs.nyu.edu/~fergus/datasets/indoor_seg_support.pdf)

Review caution: Accelerometer values do not make this a fully calibrated IMU/VIO benchmark with independent pose GT.

## KITTI Depth

Outdoor perspective benchmark with LiDAR-derived targets; official prediction/completion and common Eigen-style splits are different protocols.

- [Official depth prediction benchmark](https://www.cvlibs.net/datasets/kitti/eval_depth.php?benchmark=depth_prediction)
- [Sparsity Invariant CNNs paper](https://arxiv.org/abs/1708.06500)

Review caution: A KITTI score cannot be directly compared with KITTI-360 fisheye or panoramic evaluation.

## WoodScape

Real surround fisheye RGB and previous frames support self-supervised geometry research; public dense-depth GT is not established by the release README.

- [Official released tasks, camera IDs, calibration and data license](https://github.com/valeoai/WoodScape)
- [Official WoodScape paper](https://arxiv.org/abs/1905.01489)

Review caution: This is included as a fisheye depth-learning input source, explicitly not as a confirmed dense-depth GT benchmark.

## Deep360

Synthetic outdoor multi-view panoramas with depth/disparity and a soiled-lens variant for mud, droplets and glare.

- [Official dataset structure, splits and download](https://github.com/nju-ee/MODE-2022)
- [Official MODE paper](https://link.springer.com/chapter/10.1007/978-3-031-19827-4_12)
- [Author paper with CARLA data generation](https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf)

Review caution: Depth360 (SegFuse) and Deep360 (MODE) are different datasets despite similar names.

## ToF-360

Real panoramic ToF RGB-D measurements, with dual-fisheye source data and ERP annotations; depth is measured per capture rather than rendered from a global mesh.

- [Official data card: units, masks and license](https://huggingface.co/datasets/COLE-Ricoh/ToF-360)
- [Official paper: capture and resolution](https://openaccess.thecvf.com/content/CVPR2025W/PBVS/papers/Kanayama_ToF-360_-_A_Panoramic_Time-of-flight_RGB-D_Dataset_for_Single_Capture_CVPRW_2025_paper.pdf)
- [Authors' publication and DOI](https://www.dfki.de/en/web/research/projects-and-publications/publication/15783)

Review caution: Useful for real panoramic depth/domain transfer; its original benchmarks emphasize semantics and layout.

## Holo360D

Continuous real indoor/outdoor panoramas with LiDAR-derived mesh/point-cloud depth and refined poses; official full data release is available.

- [Official release status, structure and corrected test masks](https://github.com/Jou719/Holo360D)
- [Paper: range definition, timing, refinement and scene splits](https://arxiv.org/html/2604.22482v2)
- [Official data release card](https://huggingface.co/datasets/ouou123/Holo360D)
- [Authors' dataset overview](https://jou719.github.io/Holo360D_homepage/)

Review caution: Mesh-filled regions and point-cloud-supported pixels provide different supervision; report which target and mask were used.

## Critical distinctions preserved

- Matterport3D native depth is camera Z, encoded at 4000 units/m. Its ERP derivatives do not automatically inherit that encoding.
- Stanford2D3D distinguishes perspective Z from panoramic camera-center distance, at 512 units/m; missing value is 65535. ToF-360 also uses 512 units/m but missing value is **0**.
- Hypersim depth_meters is Euclidean camera-center distance even though images use perspective projection; camera position units require a separate asset-to-meter scale.
- 3D60 has the official lighting-bias warning and stereo renders. Pano3D supersedes the mono benchmark with different rendering and generalization protocols.
- Replica, Gibson and HM3D are scene assets or asset families; trajectory producers and render settings must be identified for RGB-D benchmarks.
- WoodScape's inspected public README lists fisheye RGB/previous frames, calibration, CAN and semantic/motion tasks; dense depth is not listed as released, and LiDAR/dGPS remains in its coming-soon section.
- Deep360 (MODE) is distinct from Depth360 (SegFuse).
- ToF-360's official data card says 179 ERP images; the CVPRW paper reports a different collection total. The catalog does not silently equate releases.
- Holo360D publishes separate mesh and point-cloud depth and uses SLAM/bundle-adjusted reference poses plus mesh completion. The June full-release and July face-mask correction notices are newer than the paper's initial "will release" wording. The paper's 60/15 scene experiment and repository's initial test-release scene grouping are not assumed identical.

