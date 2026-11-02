# Weekly incremental source audit — 2026-11-02

Previous successful cutoff: **2026-10-26**. Search overlap: **2026-10-12 through 2026-11-02**. Clean baseline commit: `2b8e322e8dbd9a9e181114faa7d8bcb9e1e662b7` (109 records). This is scoped incremental research, not an exhaustive census or local algorithm reproduction.

## Verified method additions

- **Any3R**, [original v1](https://arxiv.org/abs/2610.36150v1), submitted October26 after the preceding run: calibrated unit-ray inputs support complete ERP, raw fisheye and pinhole views in one reconstruction. Depth is radial and geometry remains up to scale. Actual inference/evaluation/demo code and an ungated checkpoint listing were verified, with October31 release news. The original utilities are MIT, while the inherited trunk/aggregator and weights are restricted by the FAIR Noncommercial Research License. See [full evidence](any3r_20261102_sources.md).
- **HoloRecon**, [original v1](https://arxiv.org/abs/2610.36876v1), submitted October27: ERP tracking/sparse mapping plus local feed-forward geometry, long-range Sim(3) connection verification and global correction. No IMU, metric guarantee or real-time claim; implementation/checkpoint release unverified. Internal co-centered perspective views do not establish a separate pinhole interface or stereo baseline. See [full evidence](holorecon_20261102_sources.md).
- **DEX**, [revised v2](https://arxiv.org/abs/2608.27860v2), [ECCV publication](https://link.springer.com/chapter/10.1007/978-3-032-37627-5_14): earlier August work, backfilled following its October26 revision. Raw-fisheye adaptation with base-dependent scale and radial distance; no fullERP interface verified. The author repository remains LICENSE-only despite the abstract's availability wording. See [full evidence](dex_20261102_sources.md).

All three original PDFs remain local/ignored. Each real original method diagram and final WebP was visually inspected; provenance stores page, figure, crop and PDF/image hashes. No full papers or weights are published by this atlas.

## Dataset additions and actual availability

- **SynPano**: the [official file host](https://huggingface.co/datasets/gxfzju/SynPano) was created October26 13:04 UTC, after the preceding 01:20 UTC verified run. Current pinned release has **5364 PNGs + eight pose texts + two metadata files**; all image names match nine-column pose rows. Eight Blender ERP scenes include indoor/outdoor environments; depth images are absent. Current island_lake has611 frames, distinct from old incomplete copies and intermediate documentation. GitHub CC BY-NC-SA4.0 and HF MIT declarations conflict; preserve both instead of selecting a permissive license. Accessible specialized resource, rendered pose annotations, no depth truth.
- **PanoRecon**: paper-described HoloRecon companion, seven real outdoor ERP routes. Geometry comes from separate RTK-assisted LiDAR sessions; ERP references are estimated through registration, not independent tracking truth. 0.1917px is reprojection residual, not positional accuracy. The [official project](https://zhuoxiaoli.github.io/HoloRecon_page/) exposes previews/viewers but no confirmed complete archive or dataset terms. Explicitly **pending**, with unknown depth/trajectory file availability, placed after mature resources.

Both use genuine official previews, visually checked with bilingual attribution and source hashes. A paper-described reference product is not presented as a downloadable file. Full modality, license, convention and release evidence is in the [dataset audit](datasets_20261102_sources.md).

## Existing records and provenance

- **VGGT-Ω v2**, October25: compare original v1/v2 PDFs; only Ours-1B benchmark values in Tables1/2 and associated header/note change, not architecture, 10B rows, projection support or a model release. Update the existing identity; pin its retained original figure to v1/hash. See [depth audit](depth_20261102_sources.md).
- **OmniRay**: code button now links project-page source and a precomputed cloud viewer. README explicitly says model implementation remains planned upon publication. Linked HF endpoint returned401; no inference/weight release is verified. Correct the stale old link description; retain code=none and paper-only camera availability.
- **AprilVINS/MILD v2**, October27: first-page copyright/layout/version change, no substantive method or dataset release change established. Retain pending access, pin the old method figure to v1. Hilti2026, PanoAir, 360DVO, Holo360D, TartanAirV2 and RPGMulti-FoV retain previous capabilities/access caveats; unchanged per-record review dates are preserved.
- **CubeSplat October27 commit** is documentation-only; SynPano inventory is independently checked rather than adopting stale totals.

## Coverage and limits

The [metadata snapshot](weekly_20261102_metadata.json) records authenticated official API checks for **54 existing code repositories** and official arXiv histories for **81 identities**. Commit windows began October12; release metadata was inspected. No request failures remained after one transient arXiv SSL-EOF retry. Existing repo changes were CubeSplat October27 and the already-reviewed PanoAir October16; no new GitHub release object justified upgrading existing status. New Any3R source/model availability was reviewed separately.

Dedicated official Atom discovery queries returned HTTP429; retries stopped, and no successful feed result total is invented. General-web searches were used for discovery followed by original papers, publisher and author project/source/model metadata. This access limitation reduces discovery completeness; it does not invalidate the independently verified additions. Known candidates remain explicit follow-up records.

GOFish (2610.37818) is a promising new calibrated/posed fisheye scene reconstruction and mesh method; full figure/scale audit is deferred, and it is not mislabeled unposed monocular depth or established SLAM. RoSAMDepth and STATIC remain pinhole/video backfill candidates. Previously pending PVDepth, PanoVGGT/VGGT-360, FSG, Argus/Realsee3D, HALO-SLAM, MVP-SLAM, PanOVOcc and WideDepth remain outside verified additions. PanoHK360 is an older gated resource with unresolved full annotation/access review; current promotion is not a new release. NaviGS/PanoGraphGS depth may be rendered from reconstructed Gaussians, not measured truth; panoptic naming does not prove ERP support.

## Validation and publication scope

Canonical records, camera maps, dataset annotations/curation, bilingual method maps and real image manifests are maintained together. The black/white interface and all existing filtering/comparison/favorite/export behavior are preserved. Build, data/provenance/security validation, JavaScript syntax and frontend functional checks must pass before publication. Only a matching Pages build and byte-verified public output authorize writing the local successful checkpoint; this ledger alone does not claim deployment success.
