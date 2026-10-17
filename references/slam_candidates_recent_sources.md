# Reviewed recent panoramic localization additions

Checked 2026-10-17. These three papers have confirmed non-MDPI publication records. No model was executed locally. Performance values remain the authors' measurements under their protocols.

## 360DVO — `dvo360_2026`

- **Publication:** [author project and complete BibTeX](https://chris1004336379.github.io/360DVO-homepage/) and [official repository](https://github.com/chris1004336379/360DVO) identify IEEE RA-L **11(3), 3079–3086 (2026)**, [DOI 10.1109/LRA.2026.3655280](https://doi.org/10.1109/LRA.2026.3655280).
- **Method evidence:** [paper](https://arxiv.org/pdf/2601.02309), III and equations (1)–(3): ERP pixels map to spherical rays, and `d=1/||X||` is **inverse radial distance**. DAS-Feat/SphereResNet and sparse patch ODBA jointly estimate poses and local geometry. This is VO without an explicit global loop-closure stage, not dense monocular depth prediction.
- **Scale/evaluation:** V-B explicitly applies Sim(3)-Umeyama alignment. Synthetic training with depth/pose supervision does not establish absolute-scale observability of monocular deployment. The real-world benchmark uses Agisoft Metashape **pseudo** trajectories; do not label them motion-capture ground truth.
- **Implementation:** [demo.py](https://raw.githubusercontent.com/chris1004336379/360DVO/master/demo.py) computes spherical intrinsics from `H,W`; exports TUM trajectory and PLY. [LICENSE](https://raw.githubusercontent.com/chris1004336379/360DVO/master/LICENSE) is MIT. [environment.yml](https://raw.githubusercontent.com/chris1004336379/360DVO/master/environment.yml) specifies Python 3.12, torch 2.3.1, CUDA 12.2. README links [360dvo.pth](https://drive.google.com/file/d/17x0V5DnXye5f1qlWLK80yRG6luInPmid/view); link inspected, checkpoint not downloaded. README has no training pipeline. Inference release can be recorded as available while documenting this limitation; independent checkpoint terms are unknown.
- **Runtime:** V-D reports about 2 FPS default and 5 FPS fast on Jetson Orin. Do not apply desktop speed or call this embedded real time.

## Cube-Splat — `cubesplat2026`

- **Publication:** [Springer chapter](https://link.springer.com/chapter/10.1007/978-3-032-37255-0_12) independently confirms **ECCV 2026**, LNCS 17053, pp. 213–231, online 15 September 2026. [Author lab publications](https://wangkaiwei.org/publications/) agree. [Author preprint](https://arxiv.org/pdf/2609.21347) submitted 18 September 2026.
- **Representation:** Paper 3.1–3.3 and Figure 2 use **four**, not a default six, fixed-orientation virtual pinhole views. They share one center and one primary pose; adjoint maps combine pose gradients. These are resamplings of one panorama, not physical stereo or a four-camera rig.
- **Depth and scale:** Depth Anywhere initializes/inserts Gaussians; its prediction is not a persistent tracking constraint. The appendix describes a learned depth prediction as metric, but no independently verified cross-domain metric guarantee follows. Paper/README do not provide a sufficiently audited ERP range-to-Z convention, normalization, or evaluation alignment protocol here. Keep these unknown. Do not infer metric scale from four virtual faces.
- **Release:** [Official repository README](https://github.com/guoxf304/CubeSplat) lists source/setup and `configs/ERP/SynPano/example_scene.yaml`, `configs/ERP/OmniBlender/example_scene.yaml`, and PAL configurations. ERP uses `UniFuse_SpatialAudioGen.pth` from Depth Anywhere. The README reports Ubuntu 22.04/Python 3.9/torch 2.0.1/CUDA 11.8/RTX 3090. It flags third-party research/non-commercial restrictions. Individual raw-file requests returned 404 and the anonymous API was rate limited; complete source/license, normalization and alignment audit is pending. No inference was run.
- **Limits:** Supplementary limitations discuss stitching/calibration, dynamics, weak texture and lack of IMU/depth-sensor fusion. Explicit global loop closure is unverified. The paper measures about 1.53 FPS on **RTX 4070 Ti SUPER**, distinct from the README's environment-test GPU.
- **Catalog convention:** full ERP input is supported (`native_erp=true` in the historical schema), but the record explicitly identifies its **internal cubemap** representation. Do not describe the method as direct ERP rasterization.

## PanoLoop — `panoloop2026`

- **Publication:** [Eurographics item](https://diglib7.eg.org/items/288b7b5d-7f87-4f03-b700-fc683d0c60e2), [DOI 10.1111/cgf.70607](https://doi.org/10.1111/cgf.70607), and the [full paper](https://diglib7.eg.org/bitstreams/55a9089c-0201-403e-bd17-e58872d044fd/download) confirm **Computer Graphics Forum 45(7), e70607**, Pacific Graphics 2026. Read authors from paper front page, not collection-page appended editor lists. The front-page footer says `CGF 45-2` but its volume/number header and publisher collection identify 45(7); use the latter.
- **Method:** 3.1–3.3: frozen **PanoVGGT**, confidence-weighted single-shot Sim(3) chunk alignment, **YIP → SCS → MSV**, and a global Sim(3) pose graph. YIP Fourier magnitudes are exact for integer token-column shifts, only approximate for physical yaw; no general pitch/roll invariance.
- **Inputs:** 4.4: full ERP at **518×1036**, chunks of **60** with overlap **30**. There is no requirement for IMU or a physical stereo baseline.
- **Scale:** 4.3 explicitly says feed-forward depth is **non-metric**. All trajectory evaluation uses Sim(3)-Umeyama; dense reconstruction is Sim(3)+ICP aligned. Meter-labeled ATE is an aligned benchmark error, not a metric-output guarantee.
- **Operating mode:** 4.4 and 4.10 explicitly use complete-sequence **offline** loop retrieval. 4.9–4.10 report median **0.60 FPS on one RTX 4090** and explicitly reject a real-time interpretation. Do not market this as online real-time SLAM.
- **Release/limits:** PDF hyperlinks and publisher item have no confirmed official implementation URL. [Supplementary PDF](https://diglib7.eg.org/bitstreams/8f7f04ff-aeaf-4c8e-bbaf-0068bee7a665/download) is linked, but does not establish source availability. Code, dedicated checkpoint release and implementation license remain unknown. 360Loc is the only evaluated benchmark; cross-dataset, multi-session, large outdoor and highly dynamic performance remains untested.

## Local materials

PDFs are saved only in ignored `library/pdfs/{dvo360_2026,cubesplat2026,panoloop2026}.pdf`. They are not intended to be committed. Per-paper reviewed figures and provenance are maintained separately by the figure workflow.
