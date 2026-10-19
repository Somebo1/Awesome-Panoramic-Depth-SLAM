# MILD dataset-family verification — 2026-10-19

## Primary sources

- Official project: https://mild-web.github.io/ . Live check returned HTTP 200 and confirmed sensor-comparison views, normalized-progress comparison alignment, and the footer's pending data/code/detail release statement. The trajectory-upload pilot is not a dataset download.
- Paper: https://arxiv.org/abs/2610.09857 (v1, submitted 2026-10-07), *Towards Accurate End-Effector Localization for UMI-Style Robotic Manipulation Teaching*.
- PDF: https://arxiv.org/pdf/2610.09857 . Existing local PDF `library/pdfs/aprilvins2026.pdf` was read as text for Sections III and V and Table I. It remains ignored and is not redistributed.

## Verified dataset facts

- Paper Section III-B: 86 indexed real sensor recordings = 67 Insta360 X5 + 19 Insight9, across 15 repeated tabletop tasks on AGIbot G2. Workspace variants include uninstrumented, tablecloth/textured, ArUco and AprilTag with two/four markers.
- Section III-A/B and page 3: references are per-execution logged robot end-effector/TCP poses from kinematics and encoder feedback, with residual calibration/timing/robot-state uncertainty. They are not external MoCap truth; markers are not a globally surveyed ground-truth pose map.
- X5 fisheye and Insight9 stereo/RGB-D routes; project shows dual fisheye X5, left/right grayscale Insight9, and MILD-Sim simulated fisheye stereo/RGB. No exact FoV/resolution/rate or raw full-sphere ERP data release is inferred from hardware names.
- Calibration assets are described for conversion to TCP frame; downloadable calibration/timing manifests and exact clock/hardware-sync specifications remain unconfirmed. Project comparison clips use normalized reference trajectory progress across separate recordings, not shared absolute time.
- Table I: nine listed MILD-Sim task entries, not nine extra real sensor recordings. Isaac Sim replay studies use observable robot/object/trajectory states. Real/sim entries have different counting units, so the record does not advertise 95 sensor sequences.
- Table I's 145.3 minutes and 307.83 GB are described as accumulated real-world TUM/bag inventory, while the abstract and project still promise release upon acceptance. These values are not used to imply an already downloadable corpus.
- Evaluation uses SE(3)-aligned TCP-relative APE RMSE alongside time completion and continuity. Marker detection or nominal command replay is not the reference trajectory.
- No released dense image-depth GT convention/mask/split is established, so tasks contains `slam` only. RGB-D device terminology alone is insufficient to classify as an available depth-GT benchmark.

## Access, license and curation decision

- Dataset/code/evaluation manifests remain announced for acceptance as checked on 2026-10-19; no full corpus download, reuse license or official train/validation/test split is confirmed.
- `access: unknown`, with explicit bilingual pending-release explanation. Homepage as download/status URL; not a fabricated direct archive.
- Restricted trajectory-upload pilot, its maximum duration and public ten-second excerpts are not evidence of released dataset access, complete sequence lengths or clock synchronization.
- One family record `ds_mild2026` covers real and simulation subsets; existing AprilVINS method record stays separate. Cameras are fisheye, wide and multi, without claiming native panoramic ERP support.
