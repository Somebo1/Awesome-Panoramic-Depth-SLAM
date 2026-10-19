# TartanAir V2 and Hilti 2026: requested dataset update

Checked **2026-10-19**. This metadata update expands the existing `ds_tartanair` record and adds a separate Hilti 2026 indoor record. Existing Hilti 2021/2022 identities are retained. Official documentation and small source/metadata files were inspected; full dataset archives were not downloaded or redistributed.

## TartanAir V2

# TartanAir V2 metadata recheck — 2026-10-19

Update the existing stable ID `ds_tartanair`; name becomes TartanAir V2 and aliases preserve the previous family name. Keep year 2020 solely as the original IROS paper year, with an explicit venue/version note. No authoritative separate V2 release date was established. No full dataset was downloaded.

## First-party evidence

- [V2 homepage](https://tartanair.org/): V2 identity; customizable pinhole, fisheye and equirectangular cameras; dataset CC BY 4.0 and toolkit MIT.
- [V2 modalities](https://tartanair.org/modalities.html): two 6-direction stereo centres; 0.25 m baseline; raw 640×640 90° views at 10 Hz; aligned float32 depth packed losslessly in four-channel PNG. Sky can be very far. Panorama and fisheye are derived from raw pinhole data. IMU derives from spline pose derivatives; depth-derived LiDAR. Event RGB is re-collected at 1000 Hz, with possible dynamic-scene inconsistency. Current flow is generated locally; the old packed flow format is separately described.
- [V2 examples](https://tartanair.org/examples.html): API exposes fish/equirect camera names, environment/difficulty/trajectory selection, and custom model parameters. Do not call the example 195° DoubleSphere camera the default downloadable fisheye model. Availability is selection-specific; this recheck does not claim to have downloaded every modality.
- [Official V2 toolkit](https://github.com/castacks/tartanairpy): current main ref was queried read-only with `git ls-remote`, yielding commit `158a6844d782942110967325ca3082f50ab2bfc7`.
- [reader.py at that commit](https://github.com/castacks/tartanairpy/blob/158a6844d782942110967325ca3082f50ab2bfc7/tartanair/reader.py#L112-L153): `read_dist` calls `depth_to_dist`. The conversion multiplies raw depth by `sqrt(u*u+v*v+f*f)/f`, with half-pixel coordinates. This establishes the raw-Z to range conversion in the reviewed path, rather than guessing from PNG naming.
- [customizer.py](https://github.com/castacks/tartanairpy/blob/158a6844d782942110967325ca3082f50ab2bfc7/tartanair/customizer.py#L126-L130): maps depth to `read_dist`, resamples the distance scalar field, writes float PNG. Thus **this customizer path produces range even for custom pinhole output**. This is an implementation-based conclusion. The reviewed code does not establish the historical generation revision of every already-hosted fish/equirect archive.
- [customizer.py pose transform](https://github.com/castacks/tartanairpy/blob/158a6844d782942110967325ca3082f50ab2bfc7/tartanair/customizer.py#L232-L259): transforms the sampling rotation from EDN to NED, then composes camera-to-world rotation and writes quaternions using SciPy default `xyzw` order. Keep new pose files and camera configuration together.
- [original official pose format](https://github.com/castacks/tartanair_tools/blob/master/data_type.md#pose-file): `tx ty tz qx qy qz qw`, camera position/orientation with respect to world; V2 modalities explicitly says pose format is retained. Do **not** carry over that V1 page's 640×480 camera intrinsics to V2.
- [original AirLab paper page](https://theairlab.org/tartanair-dataset/): IROS 2020 citation. This anchors only the base paper year.

## Editorial implications

- Camera filter membership panoramic/fisheye/wide is justified by documented resampling and customization, not by assuming the raw capture is ERP.
- Treat the two stereo centres as the two translated viewpoints; their six facing directions are not six independent baselines.
- Keep all views/custom camera outputs from a trajectory in one split; report scene-level split. This is an evaluation recommendation, not a claimed official fixed V2 split.
- Use positive finite depth and camera-valid-ray masks plus explicit sky/range clipping policy. No universal sky cutoff was established. The current customizer prints a valid-mask filename without an evident write at that point; do not promise a saved standalone mask solely from that code comment.
- Do not run current pinhole Z conversion a second time on already-range custom output. Pin hosted archive conventions separately where required.
- No claim that all raw/derived modalities are universally downloadable or identically synchronized. Current flow docs supersede older precomputed examples; simulated event re-recordings can disagree with the raw sequence in dynamic scenes.

## Hilti 2026 indoor sequences

# Hilti 2026 indoor dataset addition — verified 2026-10-19

The record `ds_hilti2026` documents this separate 2026 dataset; Hilti 2021/2022 remain independent records. The audit covers public documentation, calibration files and metadata, without downloading large recordings.

## Access and identity

- User-requested release: [official Hugging Face dataset](https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026).
- Live unauthenticated [official API](https://huggingface.co/api/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026) returned `private=false`, `gated=false`, 173 files, SHA `ac5fd207e10a7a45438f04d1dbc96a529b1088be`; lastModified `2026-09-17T13:10:14Z`. The API lists 30 top-level reference trajectory files and the two Kalibr calibration chains.
- Dataset card declares CC BY-NC-SA 3.0. An open-download label does not imply commercial reuse permission.
- [Official repository](https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026) reports IEEE RA-L acceptance; [arXiv:2607.06464](https://arxiv.org/abs/2607.06464) v1 is dated 2026-07-07. No unverified final journal volume, issue, DOI or pages were invented.

## Primary evidence and integration decisions

- [Sequence guide](https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/dataset.md): all 30 published runs are floor-labelled construction sequences. The record's indoor scope uses that official list. README's illustrative “Outdoor View” does not establish a separate downloadable outdoor sequence.
- [Sensors](https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/sensors.md): two 30 Hz RGB fisheyes, 1472×1440 each, approximately 200° each; 1000 Hz six-axis IMU; rolling shutters. [Readout configuration](https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/config/hilti_openvins/rs_config.yaml) gives top-to-bottom readout and 31.05122184753418 ms.
- [Calibration chain](https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/camera_calibration/kalibr_imucam_chain.yaml): distinct cam0/cam1 `T_cam_imu`, EUCM parameters and fitted equidistant intrinsics; time shifts approximately −6.57 ms. Record does not round these into a universal zero time shift or invent a shared optical centre.
- [Image tools](https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/challenge-tools.md): original dual fisheyes only; official `image_stitching.py` derives ERP using a large-radius sphere. [Stella example](https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/stella-vslam.md) consumes those stitched images. Thus `panoramic` is a documented derived-workflow filter, not native-ERP release. The card/details explicitly explain nonzero physical baseline, different optical centres and unresolved near-field parallax.
- [Reference and clock synchronization](https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/ground-truth.md): reference from LiDAR-inertial SLAM, transformed into cam0; reference device PPS does not hardware-sync the independent camera. Gyro norms align offset, clock scale and biases. Keep +10000 s convention and exclude unsupported first approximately 5 seconds.
- [Floorplans](https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/floorplans.md): intended finished-building prior differs from as-built construction; UG2 has no floorplan. Masks/PNG/DXF are priors, not measured depth targets.
- [README news, 2026-03-03](https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026#news) explicitly cautions: “These floor plans are not officially registered.” The record now repeats that limitation in both languages. The note does not name a target registration frame; do not expand it into a claim that no map-frame initialization/aligned example exists, since the floorplan guide supplies both.
- [Evaluation](https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026/blob/main/docs/challenge-evaluation.md): TUM columns, metric translation, at least 99% coverage, no scale correction, 25 SLAM and 24 localization runs in original challenge. Localization ignores z. Now-public references for all 30 must not be mislabeled as a new train/val split; the HF auto-converted text “train” view is not the benchmark split.
- `tasks=[slam]`, `groundTruth=[LiDAR-inertial reference poses]`; no dense depth labels, raw reference LiDAR input, MoCap, total station, exact stitched geometry or “millimetre ground truth” are claimed.

## Exact run folders

Append each path below to the official HF tree base `https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026/tree/main/`. Download the complete `rosbag/` folder including `rosbag.db3` and `metadata.yaml`, rather than one `.db3` in isolation. Original sensor streams are `/cam0/image_raw/compressed`, `/cam1/image_raw/compressed` and `/imu/data_raw`.

1. `data/floor_1/2025-05-05/run_1/rosbag`
2. `data/floor_1/2025-07-07/run_1/rosbag`
3. `data/floor_1/2025-12-02/run_1/rosbag`
4. `data/floor_2/2025-05-05/run_1/rosbag`
5. `data/floor_2/2025-10-28/run_1/rosbag`
6. `data/floor_2/2025-10-28/run_2/rosbag`
7. `data/floor_2/2025-12-02/run_1/rosbag`
8. `data/floor_2/2025-12-03/run_1/rosbag`
9. `data/floor_3/2025-05-19/run_1/rosbag`
10. `data/floor_3/2025-12-02/run_1/rosbag`
11. `data/floor_4/2025-05-19/run_1/rosbag`
12. `data/floor_4/2025-12-02/run_1/rosbag`
13. `data/floor_5/2025-12-02/run_1/rosbag`
14. `data/floor_6/2025-06-18/run_1/rosbag`
15. `data/floor_6/2025-07-07/run_1/rosbag`
16. `data/floor_6/2025-12-02/run_1/rosbag`
17. `data/floor_6/2025-12-02/run_2/rosbag`
18. `data/floor_7/2025-12-02/run_1/rosbag`
19. `data/floor_7/2025-12-02/run_2/rosbag`
20. `data/floor_7/2025-12-03/run_1/rosbag`
21. `data/floor_EG/2025-10-16/run_1/rosbag`
22. `data/floor_EG/2025-12-02/run_1/rosbag`
23. `data/floor_EG/2025-12-02/run_2/rosbag`
24. `data/floor_UG1/2025-05-19/run_1/rosbag`
25. `data/floor_UG1/2025-06-18/run_1/rosbag`
26. `data/floor_UG1/2025-10-16/run_1/rosbag`
27. `data/floor_UG1/2025-12-02/run_1/rosbag`
28. `data/floor_UG1/2025-12-02/run_2/rosbag`
29. `data/floor_UG1/2025-12-03/run_1/rosbag`
30. `data/floor_UG2/2025-12-02/run_1/rosbag`
