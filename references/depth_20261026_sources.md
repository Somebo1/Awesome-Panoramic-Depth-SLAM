# Depth-model incremental audit: 2026-10-05 through 2026-10-26

## Coverage

Read existing36 depth records before searching. Queried the official arXiv API for submissions in the inclusive UTC window, first with panoramic/fisheye/360-degree/wide-FoV terms (32 results), then with depth-estimation/monocular-3D/camera-agnostic/wide-angle terms restricted to cs.CV/cs.RO (40 results). These searches overlap and the counts must not be summed as unique papers. The second query and full returned abstracts are in local arxiv_depth_window.json. Root independently checks existing repository/paper metadata.

## Ready for addition

- **OmniRay**, [arXiv2610.31645v1](https://arxiv.org/abs/2610.31645v1), first submitted2026-10-22. Full standalone record/i18n/taxonomy/verified real Figure2 prepared. Direct paper-documented complete ERP, fisheye and pinhole inputs, with central-camera/annular caveats. Global-scale ambiguous ray-distance point maps, not metric. [Official project](https://nam1410.github.io/omniray/) explicitly marks code/models TBD. This is the only new depth entry selected for this weekly integration; no model benchmark has been run locally.

## Existing releases checked

- [OmniPoint](https://botaoye.github.io/omnipoint/) still exposes Paper/Poster/BibTeX; no author-linked implementation or checkpoint release found. Preserve unverified release status.
- [DAP official README](https://raw.githubusercontent.com/Insta360-Research-Team/DAP/main/README.md), [DA2 official README](https://raw.githubusercontent.com/EnVision-Research/DA-2/main/README.md), [PaGeR official README](https://raw.githubusercontent.com/prs-eth/PaGeR/main/README.md), [DepthMaster official README](https://raw.githubusercontent.com/PolyU-VCLab/DepthMaster/main/README.md) retain their previous code/model availability and domain-head/projection caveats. No new October release announcement found in these READMEs.
- [Video Depth Anything v4](https://arxiv.org/abs/2501.12375v4), revised2026-10-14: newly downloaded v4 PDF SHA256188e1aa3bc19506fa2069df3f3b30161b9aab9f67a4d020b3a8855d36642a5fb exactly matches the existing local PDF and current figure manifest from Oct17. This revision was therefore already used for the site image. Official HTML v3/v4 main-body text is99.90% alike; the content difference is several ChronoDepth baseline-table values. Supplementary text is identical. This is not a new VDA architecture, metric branch, code release or camera capability. If useful, pin the existing figure PDF link to v4 without replacing the image; do not call it a new weekly model release.

## Pending candidates, not verified catalog additions

- [VGGT-360](https://arxiv.org/abs/2603.18943v2): first Mar19, revisedMay14 2026; worthwhile older omission, not an October paper. Complete ERP to perspective reconstruction to panoramic-depth reprojection. Full software/reproduction and image audit not completed here, so no final new record.
- [MTDv2 / The Midas Touch for Metric Depth](https://arxiv.org/abs/2610.16749), Oct12: metricization of relative depth using sparse observations, followed by learned refinement. It is not image-only metric depth and no ERP/fisheye interface was verified. Paper promises code upon publication. Potential peripheral future addition, not a direct full-ERP depth candidate.
- [MaSS](https://arxiv.org/abs/2610.23600), Oct16: self-supervised depth with a scene-structure discrimination pathway; arXiv comments state acceptedNeurIPS2026. Paper claims public code but the implementation/release was not audited. Pinhole-oriented candidate; no direct raw-fisheye/full-ERP support verified.
- [SAP-Depth](https://arxiv.org/abs/2610.24506), Oct17: self-supervised monocular framework evaluated on KITTI and Make3D; lower panoramic relevance. No full-ERP or raw-fisheye inference established.
- [JetsonAGXOrin depth benchmark](https://arxiv.org/abs/2610.27199), Oct19T19:34UTC: benchmark, not a new method. Compares nine monocular/stereo families under selected Middlebury scenes, TensorRT/nativeCUDA and focal/scale conditions. Potential useful robot-deployment reference; do not transfer its relative/oracle-scale values to deployment metric claims.

## Outside this depth-entry scope / handed off

- OmniVLoc2610.27522 (Oct20) passed toSLAM agent for topology/ERP scope.
- Holi-Spatial3602610.19502 (Oct14), LynxScenes2610.18093 (Oct13), VR1802610.10607 (Oct7) passed to root/dataset auditing for generation-vs-depth and actual released annotation scope.
- Generation-only, medical/dental panoramas, segmentation-only and nonvisual panoramic uses were excluded. User-requested two-week overlap allows older omissions to be recorded honestly without calling them new publications.
