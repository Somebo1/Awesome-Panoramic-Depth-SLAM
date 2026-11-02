# HoloRecon and SLAM incremental review - 2026-11-02

Research window: 2026-10-12 through 2026-11-02, overlapping the previous 2026-10-26 cutoff. Canonical records, translations and mapping distinctions are maintained together.

## Verified new method: HoloRecon

- [Original abstract/version](https://arxiv.org/abs/2610.36876v1): submitted 27 October 2026. Preprint; no formal venue acceptance verified. Identity is distinct from Holo360D (training/reference dataset) and the paired PanoRecon benchmark.
- [Original paper](https://arxiv.org/pdf/2610.36876v1), sections 3 and B.1: full ERP sequence is the external entry. The ORB frontend supplies poses and sparse landmarks. Pi3, fine-tuned on Holo360D, operates on internally rendered, known-intrinsics perspective views with one shared optical centre per panorama. Those views establish neither a physical stereo baseline nor independent raw-fisheye/pinhole entry points.
- Equations 1 and B.1 distinguish optical-axis virtual-view Z-depth from ERP radial distance: d = s * Z * norm(K^-1 p). Local/window scales fit the monocular sparse landmarks. Appendix B.1 explicitly says metric scale is recovered through alignment for evaluation; B.3 fixes root pose while monocular scale remains unconstrained. Mark relative/points, not metric.
- Sections 3.2/3.3 verify long-range connections using cross-view depth-supported ORB correspondences, then Sim(3) graph correction, observation fusion and ERP BA. This supports a genuine global-connection/loop-correction tag. No IMU input is required. Dense geometry is updated from cached predictions after corrected poses/scales, without rerunning Pi3.
- Sections 5 and C.1 report a single RTX PRO 6000 Blackwell and 181.38 minutes of key stages on YUTO MMS C, excluding separate preprocessing/export. Global refinement pauses frame input. The authors explicitly say the system is not real time; no live wrist-rate or independent metric accuracy claim is made here. Different sampling and excluded stages prevent a controlled end-to-end runtime ratio against COLMAP.
- Evaluation uses one global Umeyama Sim(3) trajectory alignment; dense evaluation permits ICP refinement. Motion blur, weak-texture tracking/calibration and unmodeled dynamics remain limitations.
- [Official project](https://zhuoxiaoli.github.io/HoloRecon_page/) was fetched directly and inspected: scene viewers/videos, benchmark statistics and contact links. No author-linked installable code, fine-tuned checkpoint or software license verified. Project visibility is not a source-code release.

### Figure provenance

The original 33-page PDF is local/ignored at library/pdfs/holorecon2026.pdf. SHA-256: 014ff6bddd528454a18e15ee374aafda8f56fd10237df241b09f8bc0da5bc7c7.

PDF page 4, Figure 2, crop [70,77,542,255] PDF points. Original page and final 1416x534 WebP were individually visually inspected; the complete five-column method diagram and re-alignment arrow are preserved, with source caption stored separately. The arXiv HTML calls this Figure 1 because it omits the teaser from numbering; the manifest follows the actual PDF Figure 2. Paper distribution is CC BY-NC-SA 4.0, separate from unverified software licensing.

Payloads (record, full bilingual maps, taxonomy, figure and mapping hints) and WebP/thumbnail are isolated under library/weekly_20261102/slam; no generated catalog-only update.

## Existing papers / releases

- [AprilVINS / MILD v2](https://arxiv.org/abs/2610.09857v2), posted 27 October: original v1 and v2 PDFs downloaded and text compared. The IEEE possible-publication copyright notice is removed from page 1 and the date/version changes; this reflows the first two pages. Pages 3-9 have identical normalized text, including the actual Figure 4 page 5 method content. No new estimator capability, acceptance or source/data release follows from this omission. Retain pending release; dataset access is checked separately. Preserve the old figure hash by pinning its paper source to v1 rather than silently following the new default PDF.
- AprilVINS PDF v1 SHA-256 c55449b7590f8959e584f156d3e98f197489c72e0f7980398b5ecc709d98a9fc; v2 SHA-256 390432cccfc2042beb9338978531f1911dca8ad3b5f3f4171e5628e86f411600. A v2 date does not make a new catalog identity.
- [CubeSplat Oct27 documentation commit](https://github.com/guoxf304/CubeSplat/commit/eaea1a1688e99e45ab566302026b6e7432d99799) removes the outdated 5,206 SynPano total and replaces an incomplete island_lake image warning. No estimator algorithm or formal release change. The dataset source audit reviews the newer official SynPano listing; the commit's intermediate 610-frame wording must not override a subsequently verified 611-frame release.
- The weekly repository metadata scan checks existing official code repositories. PanoAir/360DVO/OmniVLoc/PanoLoop release status must not be upgraded merely from metadata or project page presence.

## Deferred candidates and scan limits

- [GOFish](https://arxiv.org/abs/2610.37818v1), 27 October, and [official repository](https://github.com/tuallen/GOFish) are a promising new fisheye scene-reconstruction candidate. The official README documents COLMAP-calibrated OPENCV_FISHEYE/PINHOLE posed inputs, per-scene train/render/mesh commands, source files and mixed CC BY-NC 4.0 / non-commercial Gaussian-Splatting / Apache dependencies. It must not be described as an unposed monocular depth predictor or established VO/SLAM. Full paper/calibration/scale and original figure audit is deferred; no verified catalog entry this run.
- HALO-SLAM, MVP-SLAM and PanOVOcc remain previously recorded older backfill candidates. No unsupported acceptance or release upgrade.
- Official arXiv abstract/full paper and author project searches found HoloRecon in the current window. A dedicated official Atom query for panoramic/fisheye SLAM over Oct12-Nov2 returned HTTP429; retries stopped. This failed query is not counted as successful coverage. Complementary depth and metadata scans and primary-paper inspection provide complementary discovery; this is not an exhaustive survey.
