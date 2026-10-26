# OmniVLoc weekly source audit - 2026-10-26

- [Original arXiv record](https://arxiv.org/abs/2610.27522): v1 first submitted 20 October 2026. No formal venue or acceptance verified; code and custom dataset promised upon publication.
- [Original full text](https://arxiv.org/html/2610.27522v1), Sec III-A/B: prebuilt metric pose-annotated panorama map, fixed map poses, ERP observations; no map 3D landmark storage. Scale comes from multi-map reference geometry, not unconstrained monocular inference.
- Sec III-C: MegaLoc retrieval, internal cubemap SuperPoint/LightGlue association and DAP depth. Internal cube faces are not physical stereo or another externally supported camera model.
- Sec III-D/E and Table I: full mode uses temporal and IMU priors. Global localization/retrieval is not an independently documented loop-closure/map-update module.
- Sec IV: 360Loc IMU is synthesized from GT trajectories with noise, while custom dataset references are commercial LiDAR-visual mapping poses. Query rate1Hz; ablated NoSeq disables sequence/IMU. No independent wrist tracking or cross-protocol ranking claim is made.
- [PDF](https://arxiv.org/pdf/2610.27522v1): original PDF page3 Figure2 rendered and visually inspected, crop[54,44,552,195] PDF points; final WebP preserves the complete diagram. Full PDF stays ignored locally. No model run performed.

## Other SLAM review / deferred backfill candidates

PanoAir official repository still contains README/assets/LICENSE and promises estimator code in coming months; no release upgrade. AprilVINS remains arXiv v1 with release upon acceptance. 360DVO still releases inference/checkpoint links with training coming soon; CubeSplat exposes source and ERP/PAL configs. Their established publication metadata already agrees with canonical records.

- HALO-SLAM (arXiv2608.00925, Aug2) is an older omitted ERP SLAM candidate, not a new weekly paper: https://arxiv.org/abs/2608.00925 . Requires full release/figure audit before verified addition.
- MVP-SLAM (arXiv2609.39596, Sep30) is an older omitted dual-fisheye+IMU+floorplan candidate: https://arxiv.org/abs/2609.39596 . Submitted RA-L, not confirmed acceptance.
- PanOVOcc (arXiv2609.31716, Sep21) is an older panoramicRGB-D semantic occupancy mapping candidate; https://github.com/bakereet/PanOVOcc is README/assets, release statuspending. Pan-Replica/Pan-Holo360D are announced derived benchmarks, not verified downloadable files.

Search interval:2026-10-05 through2026-10-26, overlapping the prior cutoff. Official arXiv Atom API queried panoramic/fisheye/omnidirectional with SLAM/odometry/localization/mapping sorted by lastUpdatedDate. The new in-scope localization item is OmniVLoc. Existing PanoAir v2Oct16 and AprilVINS Oct7 were deduplicated. Segmentation/teleoperation/human-pose and non-visual omnidirectional papers were excluded by task.
