# OmniPoint focused source review

Checked: 2026-10-20. Identifier: `omnipoint2026` / arXiv `2609.09394`. This is a targeted addition, not a new broad literature cutoff.

## Primary sources

- [Official project](https://botaoye.github.io/omnipoint/): author identity, Google DeepMind / ETH Zurich, ECCV 2026, explicit pinhole/fisheye/ERP capability, optional intrinsics and sparse depth. Project has paper/poster/BibTeX links, no verified code/checkpoint link.
- [Original paper, official project PDF](https://botaoye.github.io/omnipoint/assets/OmniPoint_ECCV2026_paper.pdf): downloaded to ignored `library/pdfs/omnipoint2026.pdf`, 18 PDF pages, SHA-256 `85ad75308f5f16bf48523e858d7a5f9329319e3214b6377a47fba2bf537b3a14`.
- [arXiv identity and submission](https://arxiv.org/abs/2609.09394): v1 dated 2026-09-08. The comments contain an apparent year typo; use the official project and author venue statements.
- [arXiv full HTML](https://arxiv.org/html/2609.09394v1): Method 3.1, optional inputs 3.4, Tables 1-4 inspected.
- [Botao Ye official author page](https://botaoye.github.io/): independently names ECCV 2026 and links the official project and paper, with no OmniPoint implementation link.
- [Ming-Hsuan Yang publications](https://faculty.ucmerced.edu/mhyang/pubs.html): ECCV September 2026 venue. Its older project link `omnipoint.github.io` failed to open; the current author-linked `botaoye.github.io/omnipoint/` is retained.
- [ECCV accepted-paper list](https://eccv.ecva.net/Conferences/2026/AcceptedPapers): search result corroborates paper title and all four authors. Full-page opening timed out, so do not claim a verified publisher chapter DOI from this list.

## Research conclusions

输入是单张 RGB，论文明确支持针孔、原始鱼眼及完整 ERP。内参条件先生成逐像素射线；稀疏深度条件按有效均值归一化，再平滑并提供有效掩码。公制稀疏条件的后对齐会引入外部尺度。相机模式来自正文和实际评测，而非名称推断；无代码复现核验。

Point construction is `P = s*d*r`: unit ray, radial distance, global learned metric scale. This is not inherently Z-depth. Sky masking is documented; a normal consistency loss does not prove a separate normal output. No trajectory or SLAM output is documented.

截至核验日未在已查作者链接中找到公开推理代码、权重或对应许可，因此保持 unverified，而不是断言“绝不存在”。未运行模型，不编造安装环境、张量尺寸、推理计时或显存。

## DAP comparison boundary

论文 Table 2 的全景对照是 **DA² / Depth Anything in Any Direction**，不是 **DAP / Depth Any Panoramas**。在已查原论文及官方项目中未找到 DAP 直接比较，因此不加入“已证实超过 DAP”的结论。

Table 2 reports relative geometry on Stanford2D3D-S and PanoSUNCG; the OmniPoint/DA² depth Rel values are 5.79/6.65 percent. This is not a metric panoramic DAP comparison. Table 3 is a separate metric evaluation across six pinhole datasets, with image-only and conditioned inputs separated; do not assign the sparse-conditioned gain to the image-only model.

Both table pages were visually inspected: Table 2 is on original PDF page 10 and Table 3 is on original PDF page 12. Table 3 gives mean 98.0 for sparse depth; the nearby prose has an inconsistent 97.5, so structured comparison preserves the actual table value with its explicit input condition.

## Figure verification

Applied the PDF skill for read-only inspection. Visually inspected original PDF pages 1 and 6, then the final cropped asset. Figure 2 on PDF page 6 is the true method overview. Crop `[134,114,482,206]` in top-left PDF points includes the full diagram, excludes page header, caption and Figure 3. Created full WebP at 1208×319 and thumbnail 960×254; no generated substitute imagery. Copyright remains with the authors/publisher; permissive figure reuse was not independently established.
