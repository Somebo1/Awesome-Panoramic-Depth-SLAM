# DEX original-source review — 2026-11-02

## Identity and publication

Backfill selected during this incremental review: **Distortion Extenders (DEX)**, not a newly first-published November paper. [arXiv v1](https://arxiv.org/abs/2608.27860v1) was submitted 2026-08-28; [v2](https://arxiv.org/abs/2608.27860v2) was posted 2026-10-26 21:50:37 UTC. [Springer](https://link.springer.com/chapter/10.1007/978-3-032-37627-5_14) confirms ECCV 2026, pp. 245–265, DOI10.1007/978-3-032-37627-5_14, first online September10. No duplicate entry is created for the conference/arXiv versions.

## Verified scope

[Original full paper](https://arxiv.org/html/2608.27860v2), especially Sections3–4 and AppendixC–D, supports a lightweight feature modulator attached to a frozen model. Training uses calibrated perspective RGB, synthetic Kannala–Brandt distortion and alignment to a frozen perspective teacher. DEX itself does not require GT-depth supervision. Raw fisheye RGB enters inference directly, without measured calibration or input rectification. This does not establish a released unified pinhole+ERP interface: the DEX entry is classified **Fisheye** with auxiliary Wide-FOV, not full panoramic input.

The depth branch predicts Euclidean range **R**, not optical-axis **Z**. AppendixD evaluates ScanNet++ at462×616 after calibratedR→Z conversion and KITTI-360 at700×700 inR. Back-projecting the scalar output requires valid ray geometry. The tested bases include MiDaS, DepthAnything and UniDepthV2, so scale must remain **base/teacher dependent**; this adapter is not assigned a universal standalone metric guarantee. The paper's additional open-vocabulary segmentation task is separate from depth output. No continuous pose/trajectory output, independent normal head or DAP comparison was verified.

## Availability, independently checked

Despite the abstract's code-available wording, [author-linked GitHub repository](https://github.com/Suchisrit/DEX) contains **LICENSE only**, shows two commits and describes its release as coming soon. The missing README endpoint returns404. Apache2.0 applies to the current repository license; executable DEX code, checkpoints, installable requirements and checkpoint terms are not verified. Preserve code status **none**, not released/partial. Paper AppendixC also says code and checkpoints will be released.

## Genuine paper figure

Downloaded official v2 PDF locally to ignored `library/pdfs/dex2026.pdf`; SHA256`deb48b857da324f46899956fb65ce191faccd24be3328e5af9c789850a2ab468`. The entire PDFpage7 and final crop were visually inspected. **Figure2** contains both the training flow and extender mechanism; crop in PDFpoints`[167,114,446,303]`, rendered216dpi. Final WebP837×567, thumbnail720×488. ImageSHA256`7d6bba9b056d64a0b478a7e2109333ae83919ecab4202593f8bcb1731c2f944d`. Original arXiv v2 is CC-BY4.0; retained author credit is separate from unreleased checkpoint terms. No fullPDF is published.

## Review limits

No model training/inference or independent benchmark was performed. Original PDF text extraction gives several harmless font/string warnings but the actual page and final image render correctly and have been visually checked. The cropped original method figure is not generic artwork or a ground-truth data sample.
