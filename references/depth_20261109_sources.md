# Depth and geometry incremental audit - 2026-11-09

Previous successful cutoff2026-11-02; overlap targeted2026-10-19 through2026-11-09. The main weekly metadata audit separately checks existing repository and arXiv histories. This is scoped incremental curation, not an exhaustive literature census.

## Verified addition: PVDepth

[PVDepth arXiv v1](https://arxiv.org/abs/2611.07873v1) was deposited November5 11:47:33UTC, but it is already [ICML2026/PMLR306:114962-114986](https://proceedings.mlr.press/v306/song26u.html). The [official conference program](https://icml.cc/Downloads/2026) lists its exact title and poster64995. This is a previously deferred method now fully reviewed, not a November first publication or new checkpoint release. The [official UNet listing](https://huggingface.co/Soon122/PVDepth) is ungated and dates toJuly23, reviewed revisione30dc79a1f0c4a028b78efba94642b49a3c853c7.

Actual [inference/training/evaluation source](https://github.com/ChuanxinSong/PVDepth) is present despite future-tense wording in the paper abstract. FullERP is the only verified external projection; internal cubemap features do not imply standalone pinhole or rawfisheye support. Output is affine-ambiguous inverse radial distance, no pose, no IMU and no absolute metric deployment. Current default bounded and paper-reproduction legacy evaluation share clip-level LAD2 disparity scale/shift fitting but differ in reciprocal conversion; scores must name the protocol. Original standalone code isApache2.0, while DepthCrafter-derived inference/weights and SVD components retain separate restrictions. Original Figure3/page4 and final crop individually visually inspected. Full source/geometry/license/provenance review: [PVDepth audit](pvdepth_20261109_sources.md).

Companion dynamic PanoCARLA is reviewed separately from the already existing Static variant; method metrics do not turn estimator outputs into data truth. RealGenEx consistency tests use estimated ViPE references, plus an alternative MapAnything front-cubemap pose/depth route, not independent tracking or depth truth. No direct DAP comparison established.

## Existing identity: strengthened PaGeR publication evidence

[Official NeurIPS2026 program](https://neurips.cc/Downloads/2026) independently lists the exact title *Unified Panoramic Geometry Estimation via Multi-View Foundation Models* and links poster149348. The [November4 README commit](https://github.com/prs-eth/PaGeR/commit/c465ffb6bc7ed6ea395de2f3ea3852c852cec5d5) and [official project](https://pager360.github.io/) provide corroborating identity. Existing catalog venue was already author-reportedNeurIPS2026, so this strengthens verification rather than claiming new acceptance. README dates the actual acceptance news toSeptember24, notNovember4. Final proceedings DOI/pages unverified. No duplicate, capability, checkpoint or camera-support upgrade.

## Other existing release checks

- [Any3R README](https://raw.githubusercontent.com/Jingong-Chen/Any3R/main/README.md) is byte-identical to the cachedNovember2 reviewed copy. The October31 source/model release and calibrated-ray/relative-scale/FAIR-license caveats remain unchanged.
- [DEX repository](https://github.com/Suchisrit/DEX) still lists onlyLICENSE. A missingREADME request returned404, then the directory itself was checked. Do not mark released from the paper's abstract or an Apache2.0license file.
- [OmniRay repository README](https://raw.githubusercontent.com/nam1410/omniray/main/README.md) still describes project-page source and planned code/model release upon publication. The linked [HF model endpoint](https://huggingface.co/gnam8991/omniray) returned401; this establishes an access failure, not private/deleted status and not a verified weight release.
- [OmniPoint project](https://botaoye.github.io/omnipoint/) still exposes paper/poster/BibTeX; its only GitHub credit is the Nerfies site template, not a verified model implementation.
- [DepthMaster README](https://raw.githubusercontent.com/PolyU-VCLab/DepthMaster/main/README.md) retains existing code/checkpoints andSeptemberNeurIPSacceptance already present in the canonical record. No new release fact established.

Unchanged items retain prior per-record dates; metadata checks are not a full implementation re-audit or local reproduction.

## Discovery limits and deferred candidates

Generalweb discovery queries for panoramic/fisheye/universal depth and currentNovemberdates were followed with original papers, publisher records, official projects and actual code/model listings. One targeted official export.arxiv.org Atom query for Oct19-Nov9 was attempted and timed out after35seconds; no successful feed result count is claimed and repeated requests were avoided. Its exact query/error remain locally inarxiv_query.json. Some narrow search queries yielded empty results; this does not prove that no other work exists.

[PanoWorld2605.15391v2](https://arxiv.org/abs/2605.15391v2), revisedNovember4, is panoramic video world generation with pseudo-depth/trajectory consistency supervision, rather than a newly verified depth estimator. [MetricTrail2611.07555](https://arxiv.org/abs/2611.07555), November5, was referred to the SLAM review; specific ERP support must not be inferred from a linked ViPE project. [Visibility-Aware Reference Generation2611.05361](https://arxiv.org/abs/2611.05361) was referred to the dataset review; no verified addition claimed here.

Previously deferred PVDepth is now resolved by the full review. PanoVGGT/VGGT-360, FSG, Argus/Realsee3D, WideDepth, RoSAMDepth, STATIC, MTDv2, MaSS and SAP-Depth remain full follow-up candidates unless independently resolved elsewhere in this week's audit. Search result snippets are not used to establish model capabilities, quantitative rankings or release status.

Complete PDFs and model weights are not published by this atlas. No inference, code execution from third-party repositories or benchmark reproduction was performed.
