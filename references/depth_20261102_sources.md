# Depth/geometry incremental audit — 2026-11-02

Previous successful broad cutoff:2026-10-26; overlap targeted2026-10-12 through2026-11-02. Existing arXiv/repository histories and other new methods are covered by the main weekly audit. This is an incremental scoped survey, not an exhaustive literature census.

## Verified addition

- **DEX**, [original arXivv2](https://arxiv.org/abs/2608.27860v2), [Springer conference publication](https://link.springer.com/chapter/10.1007/978-3-032-37627-5_14), [author-linked repository](https://github.com/Suchisrit/DEX). Earlier pending backfill selected after the October26 revision. Direct raw-fisheye range adapter with base-dependent scale; no native fullERP support verified. GitHub remains LICENSE-only/comingsoon, despite codeavailable in abstract. Complete canonical/bilingual/taxonomy/mapping/visually-verified Figure2 payloads are ready. See the [detailed DEX source record](dex_20261102_sources.md).

## Existing records, no duplicate additions

- **VGGT-Ωv2**, [official arXiv](https://arxiv.org/abs/2605.15195v2), postedOctober25 23:11:02UTC. Fulltext extracted and compared against the currently stored v1 PDF. Apart from the header and a results-updated note, the differences are Ours-1B values in Tables1/2 for pose/depth. Ours-10B rows and architecture text are unchanged. This is a benchmark correction, not newly validated fish/ERP support or a new release. Canonical record and Chinese note patch prepared; pin the existing Figure2 source to **v1** to match its retained PDFhash rather than silently assigning the v2 PDF to an old image. Originalv1SHA256`ffd0456e4fe0b5c42c0c95161c7e6005eb2ce3c0071b3b37de9b72955c00879b`; v2SHA256`ac0b5347e1f759d9a0e9027a3fd32dfaf5038dfb20227713607c4168f3c00abb`.
- **OmniRay**, [official project](https://nam1410.github.io/omniray/), [new Code-link target](https://github.com/nam1410/omniray), [README](https://raw.githubusercontent.com/nam1410/omniray/main/README.md). Header stillTBD. Codebutton now links project-page source and a live viewer of precomputed point clouds, not model inference code. README explicitly says project source only and modelcode planned upon publication. HF checkpointbutton targets `https://huggingface.co/gnam8991/omniray`, which returned401 during this review. Do not assert private/deleted/nonexistent from401, and do not mark released. Replace lastweek's old button-to-arXiv description while retaining code=none.
- **OmniPoint**, [official project](https://botaoye.github.io/omnipoint/), still exposes paper/poster/BibTeX without verified modelcode/weights.
- **DepthMaster**, [official README](https://raw.githubusercontent.com/PolyU-VCLab/DepthMaster/main/README.md), and **PaGeR**, [official README](https://raw.githubusercontent.com/prs-eth/PaGeR/main/README.md), retain the prior verified release and projection/domain-head caveats. No new dated release announcement was found in these READMEs.

## Discovery and deferred candidates

Official arXiv Atom queries for panoramic/fisheye/ERP and wider depth/camera-agnostic papers were attempted; two requests returned HTTP429. No successful feed result count is claimed. General-web search was used only to discover candidates, followed by original arXiv/publisher/project pages for evidence. Existing metadata auditing and original-paper reading continued. This limitation must remain in the source audit rather than pretending to complete an exhaustive API scan.

- [GOFish2610.37818](https://arxiv.org/abs/2610.37818), October27, concerns fullFoV Gaussian rendering/mesh extraction; handed to mapping reviewer, not automatically added as a monocular depth model.
- [Any3R2610.36150](https://arxiv.org/abs/2610.36150), October26, fully reviewed and included; see [Any3R source audit](any3r_20261102_sources.md).
- [RoSAMDepth2610.38587](https://arxiv.org/abs/2610.38587), October28 arXiv deposit of CVPR2026 work, pp34138–34147. Originalpaper uses SAM object priors for self-supervised adverse-weather depth; this is a potential pinhole backfill, not verified fullERP/fisheye support. Full code/figure/scale review not completed, so deferred.
- [STATIC2412.01090](https://arxiv.org/abs/2412.01090v4), October26v4 after October23v3, PatternRecognition acceptance per original arXiv. Video consistency from adjacentframes with surface-normal routing, not new panoramic support; uncurated pinhole-video backfill, not silently verified.
- Previously deferred PVDepth, PanoVGGT/VGGT-360, FSG, WideDepth, MTDv2, MaSS and SAP-Depth remain candidates unless separately reviewed. Do not promote them merely because they appeared in search.

No trained models, datasets, credentials or complete PDFs are included in publishable payloads. Paper image provenance is exact; known omissions and unavailable endpoints are retained explicitly.
