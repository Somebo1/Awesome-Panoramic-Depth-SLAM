# Weekly incremental source audit — 2026-10-26

Previous broad cutoff: 2026-10-19. Overlap searched: 2026-10-05 through the current 2026-10-26 run. Baseline commit: a07f0d7b333138eb879324e3f633be1dad96b5ad (107 records). This is a scoped incremental review, not an exhaustive survey or local algorithm reproduction.

## Verified additions

- **OmniRay**, first submitted 2026-10-22: [original arXiv v1](https://arxiv.org/abs/2610.31645v1), [official project](https://nam1410.github.io/omniray/). Complete ERP, fisheye and pinhole support is explicitly evaluated; output remains up to scale. Per-image median alignment is not absolute metric accuracy. Code and models are TBD. See the [full source and figure review](omniray_20261026_sources.md).
- **OmniVLoc**, first submitted 2026-10-20: [original arXiv v1](https://arxiv.org/abs/2610.27522), [paper](https://arxiv.org/html/2610.27522v1). ERP query localization against fixed metric reference poses, with IMU/temporal priors in full mode; no standalone metric SLAM or independent dense-depth output is claimed. Code/custom dataset are promised upon publication. See the [full source and figure review](omnivloc_20261026_sources.md).

Both original PDFs remain local/ignored. Original Figure 2 on PDF page 3 was visually inspected for each method; only attributed WebP crops and thumbnails are published. No model weights or datasets were downloaded.

## Existing-record changes

- **Hilti–Trimble–Oxford 2026 v2**, posted October 21: update the existing dataset rather than duplicate it. Preserve `trajectory=reference` / `depth=no`. Independent surveyed truth was unavailable; earlier challenges' centimetre errors do not measure these references. PNGs have 1–3 px annotation uncertainty at 1 cm/px, DXF is not registered to PNG, and few-centimetre method differences should not be overinterpreted. The author's accepted manuscript records RA-L acceptance on October 11; final DOI/pages are unverified. See the [dataset audit](datasets_20261026_sources.md).

## Existing version/release coverage

The [metadata snapshot](weekly_20261026_metadata.json) records authenticated official GitHub API checks of 54 unique code repositories and official arXiv abstract histories for 79 identities, with no request errors. Repository commit windows started October 5 and latest release metadata was inspected. Only already-reviewed CubeSplat (October 12) and PanoAir (October 16) commits were in that window; no new release object justified upgrading an existing code status. Metadata timestamps are not a complete semantic audit of every implementation.

Video Depth Anything v4 was posted October 14, within the overlap window. Its PDF SHA-256 matches the already-reviewed local figure source exactly, so this was already the image/source version in the October17 catalog. The v3/v4 differences inspected affect ChronoDepth baseline table values rather than a new model architecture or release. The figure URL is now pinned to v4 to preserve provenance; no new VDA capability is claimed.

The existing GeoPano/AprilVINS identities were deduplicated. OmniPoint remains code/weights unverified; MILD remains pending release. PanoAir's estimator code roadmap, 360DVO's partial training release and existing CubeSplat ERP/PAL distinction remain unchanged. Gibson's October 20 revision integrates supplementary material and does not establish a new GibsonV2 data release. Per-record full review dates were not bulk-reset by metadata checks.

Official arXiv Atom searches combined panoramic/fisheye/360/wide-FoV terms and SLAM/odometry/localization/mapping terms, sorted by last update. Abstracts and primary projects were then read for candidate identity and scope. General search results were discovery aids only; no secondary summary was used to establish capabilities. The [depth scan ledger](depth_20261026_sources.md) records two overlapping arXiv searches (32 and 40 results; these are not additive unique-paper counts) and lower-priority unverified pinhole candidates.

## Deferred backfill and out-of-scope candidates

Older uncurated candidates include PVDepth, PanoVGGT/VGGT-360, DEX, FSG, Argus/Realsee3D, HALO-SLAM, MVP-SLAM, PanOVOcc, WideDepth and SynPano. Their dates and access limitations are separate from new work this week. Realsee3D's official release events predate the window; social-media promotion is not a release. LynxScenes/VR180/Holi-Spatial360 need full task/GT/access checks before verified depth/SLAM inclusion. Do not mark an unreviewed candidate as a verified catalog entry.

## Validation and publication

Canonical records, per-ID camera taxonomy, bilingual method maps and Hilti annotations are updated together. Build, schema/provenance/security validation, JavaScript syntax and functional regressions must pass before committing. A verified publication checkpoint is written locally only after the matching Pages commit and public files are confirmed; this source ledger alone does not claim deployment success.
