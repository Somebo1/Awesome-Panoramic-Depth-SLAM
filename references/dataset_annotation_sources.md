# Dataset depth and trajectory annotation audit

Reviewed: 2026-10-20. Scope: the 38 dataset IDs in `datasets_depth.json` and `datasets_slam.json`. Canonical filter metadata is stored in `source_data/dataset_annotations.json`; each record includes bilingual notes, annotation provenance and its official evidence URLs. Existing verified source descriptions were reviewed alongside the live primary-source checks listed below. Large dataset archives were not downloaded for this audit.

## Status policy

| Value | English label | 中文 | Interpretation |
|---|---|---|---|
| `yes` | Provided | 已提供 | Released measured or simulator/rendered annotation is documented. Sparse measured depth remains `yes`; sparsity and projection needs are explained in the note. |
| `partial` | Partial / conditional | 部分／有条件 | Coverage is limited by sequence, subset or interval, or the resource requires a specified generator/export. Static registered view poses belong here rather than being presented as continuous motion trajectories. |
| `reference` | Estimated reference | 估计参考 | An estimated SfM, SLAM or map-registration reference is supplied. This is distinct from independently tracked motion or simulator states. |
| `no` | Not provided | 未提供 | The documented release inventory does not provide that annotation product. This is a release-scope statement, not a claim that deriving another product is impossible. |
| `unknown` | Unverified | 待核实 | Annotation availability, archive contents or a pending release has not been established. An announced reference is not silently promoted to available ground truth. |

Provenance values are `measured`, `rendered`, `estimated` and `kinematic`. Multiple values can apply. Status describes the documented product and coverage, while provenance explains how it was made; neither is a universal accuracy score. All depth products still need the dataset-specific range/Z convention, calibration, units and valid-pixel masks. Pose products require frame, time and evaluation-interval checks.

## Important distinctions

- **Sparse depth:** KITTI odometry/KITTI-360, Hilti 2021/2022, Newer College, Oxford RobotCar, LaFiDa and Oxford Spires include calibrated measured range data; sparse depth can be projected. Their `yes` depth status does not imply native dense image-depth maps. EuRoC's static structure scan alone is not a per-frame depth target.
- **Assets and static views:** Matterport3D, Stanford2D3D, Structured3D, Replica, 3D60 and Gibson have view poses or configurable simulated trajectories. Their trajectory status is conditional rather than an assertion of one continuous physical reference stream. HM3D requires an explicit simulator export for depth and poses.
- **Continuous estimated references:** Holo360D, KITTI-360, Hilti 2026, Newer College and Oxford Spires use reconstructed or map-registered poses. The `reference` filter keeps these separate from measured mocap or simulated trajectories. 360Loc is a localization reference product generated through image/LiDAR mapping.
- **Limited measured motion:** TUM VI is full mocap only for room sequences and start/end-only elsewhere. Hilti 2021/2022 contain sparse surveyed positions with selected 6DoF recordings. LaFiDa's large outdoor loop leaves the mocap volume. KITTI odometry exposes 00–10 references while 11–21 remain withheld. RobotCar RTK validity and coverage must be respected.
- **Mixed supervision:** ODGS-SLAM synthetic depth is rendered truth, real Pro depth is stereo-estimated, and real X4 lists no depth. Its dataset-level depth status is `partial`; real OptiTrack and synthetic pose annotations are both available. Holo360D separately releases point-cloud and mesh depth; mesh filling is not an extra physical measurement.
- **Unverified/pending:** PanoAir announces 5 Hz RTK files, but archive contents and position/orientation coverage were not unpacked or validated. MILD's datasets and manifests remain pending; kinematic TCP references and simulation states are described without establishing current downloadable availability. Deep360's stereo geometry does not by itself establish a released continuous pose annotation stream.
- **RPG Multi-FoV:** Room depth associations cover all three optics; the reviewed Urban info files list only one depth association per optic. Full Urban depth coverage remains conditional. Simulator poses are explicitly provided per frame.

## Primary-source checks and source corrections

### PanoAir roadmap correction

[Current official README](https://github.com/YYWumm/PanoAir), checked 2026-10-20, states the dataset and calibration are available on Google Drive and that source code is expected in the coming months. The canonical record's earlier `details.en['Release status']` text said source code would follow acceptance. Both dataset languages and the method's release-status fields have been corrected; the dataset-download claim remains author-reported rather than a complete archive validation. The README's release inventory lists image streams, IMU, calibration and RTK references, without image-depth labels. The method's project/code link now points to the official repository, whose GPL-3.0 declaration does not establish a separate dataset licence or a released estimator implementation.

### OmniScenes pose provenance

[PICCOLO supplementary material, Section C](https://openaccess.thecvf.com/content/ICCV2021/supplemental/Kim_PICCOLO_Point_Cloud-Centric_ICCV_2021_supplemental.pdf) explains that COLMAP/OpenMVG SfM reconstructions are manually aligned to Matterport scans; invalid poses are removed by manual inspection. This establishes `trajectory.status=reference` and `estimated` provenance. The [current official repository](https://github.com/82magnolia/piccolo) provides per-query pose files and cautions through the companion library that old and expanded releases differ. The canonical record's labels, summaries, ground-truth descriptions and notes now identify the SfM reference explicitly and include the supplementary source.

### Other live confirmations

- [EuRoC official available-data inventory](https://projects.asl.ethz.ch/datasets/euroc-mav/) distinguishes Vicon 6DoF, Leica 3D positions and a static structure scan; it does not list per-frame depth maps.
- [KITTI odometry official downloads](https://www.cvlibs.net/datasets/kitti/eval_odometry.php) separately list Velodyne scans, calibration and public training poses, with test poses withheld.
- [360Loc official project](https://huajianup.github.io/research/360Loc/) describes image/LiDAR mapping to generate 6DoF localization references, rather than an independent motion tracker or depth benchmark.
- [Holo360D official release inventory](https://github.com/Jou719/Holo360D) lists both point-cloud and mesh depth, masks and continuous poses. Its paper/source record explains LiDAR, SLAM and bundle-adjustment refinement.
- [ADT official overview](https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset) states motion-capture-based reference generation; [ADT data format](https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format) separates `aria_trajectory.csv` from MPS estimates and defines rendered Z-depth in millimetres.
- [WoodScape official release inventory](https://github.com/valeoai/WoodScape) lists released task labels without image-depth or independent trajectory annotations.

Remaining per-dataset official URLs and the existing depth/pose convention evidence are included directly in every `dataset_annotations.json` record and in the original canonical dataset records. This audit introduces no new dataset identities and does not change their existing real/synthetic or indoor/outdoor fields.
