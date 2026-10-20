# Camera input taxonomy audit — 2026-10-20

## Scope and interpretation

This audit covers the 102 catalog records present before the new pinhole-method additions. It is a targeted recheck of ambiguous geometry claims and a structured migration of existing source reviews, not a claim that every old source was newly reread. The JSON distinguishes `focused_primary_source_recheck_2026-10-20` from `carried_forward_from_existing_source_review` and preserves the old check date for the latter.

Main geometry categories should be **Pinhole / 针孔（透视）**, **Fisheye / 鱼眼**, and **Panoramic / ERP 全景**. Internal legacy enum `perspective` can remain stable. `wide` describes an auxiliary FoV attribute, and `multi` a rig attribute. A fisheye is not a panorama merely because a rig gives surrounding coverage. Conversely, one method may legitimately accept multiple projections. Raw PAL/catadioptric annuli require an explicit annotation and must not automatically become a full-sphere ERP category.

`direct` concerns the documented external input entrance: ERP-to-cubemap/tangent views **inside** a model remain direct panoramic support. `reprojected` describes an external cross-camera projection; `rendered` describes generation from scene geometry/simulation; `stitched` describes assembly from several lens/views. `availability` separates released files, derivable products, paper-only support and announced release. These are not accuracy or implementation-reproduction claims.

## Focused primary-source checks

- [DAC project](https://yuliangguo.github.io/depth-any-camera/): explicit perspective, fisheye and 360 evaluation. Canonical ERP is the inference representation; calibrated fisheye/perspective inputs are converted first. Retain its multiple geometry tags, label the conversion route.
- [UniDAC project](https://girish1511.github.io/UniDAC/) and [official repository](https://github.com/girish1511/UniDAC): explicit perspective, fisheye and 360 evaluation with a common model, ERP representation. The May 2026 wild demo adds estimated camera parameters; it does not make unknown camera geometry irrelevant.
- [UniK3D project](https://lpiccinelli-eth.github.io/pub/unik3d/) and [official code](https://github.com/lpiccinelli-eth/UniK3D): explicit conventional pinhole, fisheye and panorama evaluation, directly estimating a ray representation and metric point map. Its overlap is warranted and should be retained.
- [DAP](https://insta360-research-team.github.io/DAP_website/) and [PanDA](https://caozidong.github.io/PanDA_Depth/): documented panoramic depth routes. A standard raw-fisheye interface is not established; do not infer one from the training backbone or name.
- [PaGeR project](https://pager360.github.io/) explicitly includes both perspective and omnidirectional geometry; its [released repository](https://github.com/prs-eth/PaGeR) centers on ERP input and internal six-face cubemaps. Preserve paper-supported perspective capability but state the public CLI scope.
- [DreamCube project](https://yukun-huang.github.io/DreamCube/) and [official code](https://github.com/Yukun-Huang/DreamCube): distinguish panorama-depth adaptation from single-view-conditioned panorama generation. For this depth survey, remove the independent perspective tag: the single perspective RGB-D condition belongs to generation, not a standalone pinhole depth estimator.
- [P2U-SLAM paper](https://arxiv.org/html/2409.10143v1), especially camera-model sections: separately supports Taylor/PAL and Kannala–Brandt. A PAL image is annular rather than complete ERP. [LF-VISLAM](https://arxiv.org/html/2209.05167v3) likewise evaluates a PAL route and fisheye data; the limited vertical band must not be conflated with full-sphere coverage.
- [Cube-Splat official code](https://github.com/guoxf304/CubeSplat): separate `configs/ERP/` and `configs/PAL/` workflows. Four virtual pinhole faces share one pose; this neither adds physical multicamera support nor proves a general pinhole-video interface.
- [Hilti 2021 official calibration](https://huggingface.co/datasets/Hilti-Research/hilti-slam-challenge-2021/blob/main/calibration.yaml), linked from the [official dataset page](https://hilti-challenge.com/dataset-2021): all five cameras explicitly use `KannalaBrandt`, with `image_size: [1440, 1080]`. Add fisheye to the former wide-only classification. The [paper](https://arxiv.org/html/2109.11316) describes 10 Hz images and ~270° combined rig coverage; this is not ERP.
- [ToF-360 official card](https://huggingface.co/datasets/COLE-Ricoh/ToF-360): 179 equirectangular images and aligned products, converted from dual-fisheye capture. The inspected [Hospital](https://huggingface.co/datasets/COLE-Ricoh/ToF-360/tree/main/Hospital) and [Office_Room_1](https://huggingface.co/datasets/COLE-Ricoh/ToF-360/tree/main/Office_Room_1) trees expose ERP RGB/depth/XYZ/labels rather than an identified raw-fisheye modality. Remove the fisheye product-filter tag unless a separate downloadable raw release is identified; retain capture provenance in text.

## Preserved earlier dataset distinctions

The per-ID mapping reuses existing canonical English/Chinese source notes and URLs for the following important non-native routes:

- TartanAir V2: raw rendered pinhole cube faces, officially resampled fisheye and ERP products/custom outputs.
- Hilti 2026: downloaded raw fisheyes, ERP derived through the official stitching tool with parallax/large-sphere limitations.
- 360Loc: original panoramas and virtual smaller-FoV fisheye/pinhole queries.
- PanoAir: raw dual fisheye, stitched ERP and virtual pinhole modes.
- Matterport3D and GibsonV2: panoramic depth refers to declared derivative render protocols, unlike automatically assuming every source archive contains ERP depth.
- 3D60, Pano3D, Deep360, Structured3D and PanoCARLA: rendered image products; their virtual views are not a measured real rig.
- 360DVO: ERP release and paper-evaluated virtual perspective crops, rather than two physical sensor types.
- ODGS-SLAM: real lens/stitched products versus synthetic perspective/ERP subsets, with per-subset availability.
- MILD: announced fisheye routes; full public dataset and ERP support must not be inferred from the X5 hardware name.
- RPG Multi-FoV: distinct rendered pinhole, fisheye and catadioptric-annular optics; 360° azimuth of a mirror does not mean complete ERP.

The code-generated generic notes merely preserve explicit old source geometry labels. They should not be used to widen old camera support beyond the structured corrections and specific overrides.
