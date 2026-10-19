# Weekly source audit: 2026-10-19

Search overlap: 2026-10-03 through 2026-10-19. Baseline: 94 records at commit 8ddd500. This batch adds two October preprints, one newly created dataset repository, and two older dataset omissions. Source review is distinct from local algorithm reproduction.


# Weekly depth scan: 2026-10-19

Search interval: 2026-10-03 through 2026-10-19, with the existing 30 depth entries checked for duplicates.

## New and verified paper identity

- GeoPano: Towards Geometrically Accurate 3D Reconstruction from a Single Panorama. arXiv:2610.21297v1, submitted 2026-10-15 05:42:59 UTC; no later version or formal venue verified. https://arxiv.org/abs/2610.21297
- Original method: https://arxiv.org/html/2610.21297v1 ; PDF: https://arxiv.org/pdf/2610.21297 . Sections 3.2-3.4 and 4.1 reviewed. The 10 views share one projection center; no physical stereo baseline. Equations 3 and 4 explicitly align prediction scale to GT. Do not label as metric. No official author-linked implementation/checkpoint verified.
- Paper figure: PDF page 5, Figure 3, overview. Artwork bounds plus padding [125, 69, 487, 212] PDF points. License linked by arXiv: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ . Figure is cropped and converted; credit states modifications.

## Pending historical omissions, not newly published this fortnight

- PVDepth: Panoramic Video Depth Estimation via Geometry-Aware Spatiotemporal Adaptation. ICML 2026: https://proceedings.mlr.press/v306/song26u.html . Official code: https://github.com/ChuanxinSong/PVDepth . Relative inverse-depth; official weights and PanoCARLA are linked. README documents a 2026-09-10 evaluation fix: bounded versus legacy conversion after scale-and-shift disparity alignment; results cannot be mixed. This is an old-paper backlog candidate, not a new October publication.
- DepthMaster: Unified Monocular Depth Estimation for Perspective and Panoramic Images. arXiv:2606.12368, 2026-06-10: https://arxiv.org/abs/2606.12368 . Official implementation https://github.com/PolyU-VCLab/DepthMaster announces NeurIPS 2026 acceptance in September and checkpoint VCLab-PolyU/DepthMaster. ERP to six 95-degree cubemap views. Repository advertises metric outputs but panoramic evaluator defaults to scale/affine alignment; inspect code before curating units/scale claims. Distinct from the other paper called DepthMaster (Taming Diffusion Models).
- PanoVGGT: Feed-Forward 3D Reconstruction from Panoramic Imagery. arXiv:2603.17571, 2026-03-18: https://arxiv.org/abs/2603.17571 . Official implementation https://github.com/YijingGuo-June/PanoVGGT announces pretrained checkpoints in April 2026. Requires complete independent scale/interface/source review before addition.
- Additional possible fisheye backlog: From Perspective to Fisheye Depth Estimation and Open-Vocabulary Segmentation (DEX), arXiv:2608.27860, 2026-08-28. Original abstract links https://github.com/Suchisrit/DEX . Not reviewed beyond paper identity/abstract in this scan; do not treat as a verified curated entry.

## Existing release spot checks

Official README pages inspected for DAP, DA-2, DreamCube, and PaGeR. No new dated release announcement within the scan interval was established. This is not a claim of exhaustive commit-level stability. https://github.com/Insta360-Research-Team/DAP ; https://github.com/EnVision-Research/DA-2 ; https://github.com/Yukun-Huang/DreamCube ; https://github.com/prs-eth/PaGeR .


# 2026-10-19 AprilVINS and SLAM verification

- New method: AprilVINS, arXiv:2610.09857v1, submitted 7 October 2026. https://arxiv.org/abs/2610.09857
- Paper methods IV and experiments V reviewed. Figure 4 is on PDF page 5. https://arxiv.org/pdf/2610.09857
- Official project, read directly over HTTP on 2026-10-19: https://mild-web.github.io/ . Footer says dataset, code and additional details will be released after paper acceptance. The upload pilot requires an access key and is offline/trajectory-only.
- Project-page source: https://github.com/mild-web/mild-web.github.io . Its local backend MVP uses a configurable AprilVINS command template or mock worker. This website repo is not evidence of the estimator implementation being released.
- Metric statement is conditional on calibrated IMU and known physical tag dimensions. Evaluation SE(3) alignment does not fit scale. Robot kinematics/encoders supply the executed TCP reference, rather than independent motion capture.

## Existing release checks

- P2U-SLAM: https://github.com/BambValley/P2U-SLAM still exposes fig/ and README.md, not estimator source. https://arxiv.org/abs/2409.10143 still v2 3 January 2026 and accepted T-ITS metadata. No verified implementation release change.
- PanoSLAM: https://github.com/runnanchen/PanoSLAM still has one README.md, one commit; https://arxiv.org/abs/2501.00352 remains v1 31 December 2024. Pano here means panoptic RGB-D, not panoramic ERP.
- PanoGS-SLAM: https://arxiv.org/abs/2609.17387 remains v1 15 September 2026; source is still promised in the official abstract. https://wangkaiwei.org/publications/ lists arXiv and no implementation link. No verified new release found.
- 360-VIO: https://github.com/Gatsby23/360-VIO returned HTTP 404 via web tool on 2026-10-19. Do not upgrade source availability.
- 360DVO: https://github.com/chris1004336379/360DVO still exposes inference source, checkpoint and Training coming soon. No verified training release.
- Cube-Splat: https://github.com/guoxf304/CubeSplat retains source and ERP/PAL configurations. Existing record already describes this; no new verified release event.
- GitHub API rate limit prevented authoritative latest-commit timestamps. Some web commit-page cache snapshots were old, so no claim of complete real-time repository inactivity is made.

## Integration mapping suggestions

- Add aprilvins2026 to NO_DENSE_DEPTH; geometry none.
- Add SCALE_OVERRIDES aprilvins2026: metric with detailed conditions retained.
- Add CODE_OVERRIDES aprilvins2026: none. Do not misclassify a project website as algorithm code.
- Camera support fisheye only; native_erp/native_panoramic false. Do not add panoramic or physical stereo from Insta360 product naming.
- loop_closure unknown; manuscript does not establish a global loop module.


# Dataset audit, 2026-10-19

Research overlap: 2026-10-03 through 2026-10-19; initial catalog contains 32 datasets. This sub-audit prepared records separately for integration. No image datasets, model weights or ZIP archives were downloaded. The associated JSON contains three reviewed records for parent integration.

## New repository in the requested interval: PanoCARLA-Static

- Official card: https://huggingface.co/datasets/Soon122/PanoCARLA-Static
- Official API: https://huggingface.co/api/datasets/Soon122/PanoCARLA-Static
- Current API values read 2026-10-19: createdAt=2026-10-07T06:57:14Z; lastModified=2026-10-08T13:42:45Z; private=false; gated=false; licence=cc-by-4.0.
- This proves the current static dataset repository creation/update dates, not first authorship/publication or the date every payload became public.
- The original PanoCARLA API currently differs: createdAt=2026-05-23T12:27:38Z; lastModified=2026-10-08T13:39:15Z; gated=auto; licence=cc-by-4.0.
- Official shared collection repository: https://github.com/ChuanxinSong/PanoCARLA
- Stage 2 instructions: https://github.com/ChuanxinSong/PanoCARLA/blob/main/stage2/README.md
- Depth conversion inspected: https://github.com/ChuanxinSong/PanoCARLA/blob/main/stage2/equi_extract_for_fov100_multiprocess.py
- Depth capture inspected: https://github.com/ChuanxinSong/PanoCARLA/blob/main/stage2/record_2stage.py
- Important: source depth decoding multiplies normalized CARLA depth by 1000. Stitching divides optical-axis depth by cosine(angle) before ERP projection. Therefore a 1000-meter source scale must not be casually treated as the final radial-depth mask. No exact universal sky/far-plane validity mask is claimed here.
- Static trajectories regenerate height variations. Shared route/frame names do not establish camera-pose matching to dynamic PanoCARLA.
- Associated older publication: https://proceedings.mlr.press/v306/song26u.html (ICML 2026 PVDepth).

## Older omission: 360DVO Dataset

- Official card/API: https://huggingface.co/datasets/chris1004336379/360DVO and https://huggingface.co/api/datasets/chris1004336379/360DVO
- Current API: createdAt=2026-01-04T15:01:28Z; lastModified=2026-03-25T04:38:43Z; private=false; gated=false; licence=cc-by-nc-sa-4.0.
- API lists twenty GroundTruth text files and Sequences/ JPEGs; the viewer train split/8500-row preview is not the paper protocol.
- Paper sections IV and V-B: https://arxiv.org/html/2601.02309v1
- Source videos are real, but pose references are reconstructed by Agisoft Metashape SfM. No independent absolute scale calibration or measured dense depth is established.
- Paper reports Sim(3) aligned ATE in meters and RPE in m/frame and deg/frame, not unaligned drift under a verified external metric calibration.
- Associated project: https://chris1004336379.github.io/360DVO-homepage/
- Code README refers to evaluation but the guessed main/eval.py path returned 404; no guessed eval script link is included in the public record.

## Older omission: ODGS-SLAM dataset

- Public university archive: https://researchdata.uibk.ac.at/records/z6f6r-sjc65
- Official metadata API: https://researchdata.uibk.ac.at/api/records/z6f6r-sjc65
- API explicitly records rights[0].id=cc-by-nc-sa-4.0, publication_date=2026-04-17, version=1.0.0. HTML rights region was blank in text extraction; use actual JSON metadata rather than guessing the licence.
- Three small README files read directly, without downloading their 126.9/193.4/138.0 GB ZIPs:
  - https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_real_world_README.md?download=1
  - https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/indoor_room_synthetic_README.md?download=1
  - https://researchdata.uibk.ac.at/records/z6f6r-sjc65/files/outdoor_synthetic_README.md?download=1
- Synthetic room/urban subsets are fully rendered Blender scenes, not real photogrammetry. Real Pro depth is sphere-sweeping stereo estimation; X4 has no released depth.
- Real OptiTrack/video synchronization is manually matched. Radians and camera/world axes are documented; no authoritative translation-unit or EXR range-versus-Z encoding statement was found in these READMEs.
- Official project confirms paper and dataset association: https://odgs-slam.github.io/
- CVF HTML/PDF URLs are linked by the official project, but this web client got 403. The official supplement was readable: https://odgs-slam.github.io/data/ODGS-SLAM_CVPR26_supplement.pdf
- Supplement sections S3.1 and S3.2 corroborate camera setups, estimated Pro depth, no X4 depth, and virtual rendering. The README is preferred for current mount/sequence layout.

## Pending / not included

- SynPano: https://github.com/guoxf304/SynPano-Dataset says 2026-02 open source but HF/Drive/Baidu links remain literal placeholders. CubeSplat current README asks readers to contact guoxf@zju.edu.cn for dataset access: https://github.com/guoxf304/CubeSplat . Do not mark publicly downloadable. No email sent.
- Hilti-Trimble-Oxford 2026: valuable older omission, deliberately left outside this batch. Official https://github.com/Hilti-Research/hilti-trimble-slam-challenge-2026 and https://huggingface.co/datasets/Hilti-Research/hilti-trimble-slam-challenge-2026 . README dates: all GT released June 16; HF August 6; sync explanation September 21. Raw front/back 1472x1440@30Hz, IMU1000Hz, 200-degree lenses; LiDAR-inertial reference camera-to-map poses; no LiDAR in ROS bags. Current docs distinguish IMU-correlation/clock-scale alignment and first-5-second exclusion. HF card declares CC BY-NC-SA3.0.
- WideDepth: older relevant omission, not integrated in this batch: https://github.com/IlyaInd/WideDepth and https://huggingface.co/datasets/IlyaInd/WideDepth . Loader distinguishes dense indoor benchmark from outdoor sparse LiDAR training; no dataset licence was found in the inspected benchmark card. Do not copy the code's absent licence or a third-party mirror's licence.
- Camera-native Stereo VR180 (arXiv 2610.10607, submitted Oct 7): https://arxiv.org/abs/2610.10607 and https://huggingface.co/datasets/lulinxuan/VR180 . Real, calibrated stereo-fisheye/half-ERP video, but inspected abstract/card does not establish depth or pose GT; not added to this depth/SLAM benchmark collection.
- PanoCARLA dynamic release is useful for a future joint record, but this batch only integrates the new static variant. If combining releases, preserve different gating, different poses, and changed evaluation protocols.


## Additional uncurated scope candidates

The dated arXiv SLAM scan also identified LynxScenes (https://arxiv.org/abs/2610.18093 ; dataset release planned), EgoWholeView (https://arxiv.org/abs/2610.16256 ; egocentric multi-camera capture, not a new general SLAM estimator), and GS-PRM (https://arxiv.org/abs/2610.19541 ; planning on a Gaussian map, not a new depth model). These are not verified public catalog entries in this batch.
