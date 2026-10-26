# Dataset incremental checks — 2026-10-26

Window: 2026-10-05 through 2026-10-26; last broad search cutoff was 2026-10-19. No full dataset archives were downloaded in this read-only review.

## Hilti–Trimble–Oxford 2026: update the existing record

- Official [arXiv version history](https://arxiv.org/abs/2607.06464v2) confirms v2 posted 2026-10-21; [accepted manuscript](https://arxiv.org/html/2607.06464v2) front matter records RA-L acceptance 2026-10-11. Do not invent a final publisher DOI or pagination.
- Relative to [v1](https://arxiv.org/html/2607.06464v1), v2 corrects the abstract to ten floors and the site to eight ground/above-ground levels plus two underground levels; the existing 30-run/floor inventory remains valid. It adds poor texture as a fifth difficulty factor and revises its characterization table.
- Section IV-B adds 1–3 px manual PNG annotation uncertainty at 1 px = 1 cm. DXF remains unregistered to PNG; this is separate from manually/ICP aligning reference geometry with floor plans.
- Section V-B explicitly states independent surveyed truth could not be obtained at this active site. References remain LiDAR-inertial SLAM estimates; 3.94 cm and 0.7 cm concern prior challenges, not an independent error measurement of these 30 sequences.
- Section V-D retains the approximately 2 cm LiDAR/map discrepancy and adds that method gaps of a few centimetres should not be overinterpreted. It is not a trajectory accuracy bound. Existing GT status stays reference; no new dense-depth product was found.
- Sensor inventory, clock mapping, 99% coverage, initial 5 s exclusion, and 25/24 scored sequence counts remain consistent with the existing record.

## Other existing dataset checks

- [MILD official page source](https://github.com/mild-web/mild-web.github.io/blob/main/index.html), fetched directly from its official raw source on 2026-10-26, still states that dataset, code and details will be released after acceptance. A changed project-page README and upload-MVP/visualization assets do not establish a full dataset or estimator release. Leave access/GT uncertainty intact.
- [PanoAir official README](https://github.com/YYWumm/PanoAir): the Drive data/calibration link and future-months estimator-code roadmap match the 2026-10-20 reviewed record. The archive was not downloaded/unpacked; do not upgrade access or 6DoF RTK coverage.
- [Holo360D official README](https://github.com/Jou719/Holo360D): latest dated news remains 2026-07-04 mask correction, 2026-07-01 Pi3 inference, and 2026-06-27 full data. Existing real indoor/outdoor depth/estimated-pose distinctions remain appropriate.
- [TartanAir V2 docs](https://tartanair.org/), [modalities](https://tartanair.org/modalities.html), and [TartanGround docs](https://tartanair.org/tartanground.html): V2 license remains CC BY 4.0 and toolkit MIT; no verified Oct release event. TartanGround is a separate older dataset candidate, not a new V2 version.

## Gibson paper revision: archival, not a new dataset release

The [arXiv v2](https://arxiv.org/abs/1808.10654v2) was posted 2026-10-20. [HTML v2](https://arxiv.org/html/1808.10654v2) integrates supplementary view-synthesis, semantic-modality and reinforcement-learning details; [v1](https://arxiv.org/html/1808.10654v1) lacks those appended supplement sections. Its underlying inventory remains 572 buildings / 1447 floors / 211k square metres, and publication remains CVPR 2018. No new scene-asset release, ground-truth change, access change, or connection to the separately named GibsonV2 package was established. Do not change the dataset year to 2026 or add a duplicate.

## Backlog, not new this week

[Realsee3D official changelog](https://dataset.realsee.ai/) dates Phase I to 2025-12-05, Phase II segmentation to 2026-06-25, and Argus release to 2026-07-01. Realsee3D is mixed real/synthetic and indoor; real poses are globally optimized scan registrations rather than independently tracked continuous trajectories. Real semantics are model predictions. Data access requires application and a signed usage agreement; this is not ungated public download. Oct social-media promotion does not establish a new paper or data release.

Search also surfaced PanoInfinigen/ZüriPano, M2DGR, PAIR360, TartanGround and other older resources; these are future backfill candidates rather than new Oct5–26 releases. The M2DGR author page dated 2026-10-22 says old links are down and migration is in progress; M2DGR is not presently in this catalog.

## Verification limits

Public GitHub REST commit queries returned anonymous rate-limit 403 and were stopped; no repeated bypass was attempted. Parent performed an authenticated metadata scan separately. Official raw MILD source, arXiv versioned papers and other public project pages remained readable. No claim of a newly downloadable corpus is made from an untested link.
