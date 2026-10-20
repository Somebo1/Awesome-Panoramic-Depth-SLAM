# Pinhole depth additions: source review, 2026-10-20

Scope: add three distinct published/released method identities, `moge3`, `moge2`, and `marigold`. The method counts increase by three. Each has a real diagram cropped from its original paper, not a synthetic placeholder. No model inference or weight download was performed.

## MoGe-3 (`moge3`)

- [Official project](https://qft-333.github.io/moge3page/): identifies the authors/affiliations and states acceptance at NeurIPS 2026. The project explains the sparse 3D refiner. This does not establish proceedings page numbers, which remain unclaimed.
- [Original paper](https://arxiv.org/abs/2607.17967), downloaded [PDF](https://arxiv.org/pdf/2607.17967): sparse voxel-shell refinement of a MoGe-2-initialized point map, rather than an independently trained ERP model. PDF SHA-256: `85beceed1e2ffc91db541f21f5ec07c6d596d7e90c62458ce8462bc20b4741c1`.
- [Official repository](https://github.com/microsoft/MoGe): news dated 2026-08-18 announces MoGe-3 release. [v3 inference implementation](https://github.com/microsoft/MoGe/blob/main/moge/model/v3.py) accepts a single RGB tensor and optional horizontal FOV, defaults to three refinement iterations, recovers centered pinhole intrinsics, sets `depth=points[...,2]`, applies the learned metric scale, and returns points/depth/mask/K with optional normals.
- [Official ViT-L model metadata](https://huggingface.co/Ruicheng/moge-3-vitl): metadata declares MIT. The prose model card is empty; do not invent documented performance or compatibility statements from it.
- Image: original PDF page 4, Figure 2, crop `[108,72,505,261]` in PDF points from the page top-left. Full page and the final image were visually inspected. The complete method diagram is preserved; the original caption is stored separately.

## MoGe-2 (`moge2`)

- [Official project](https://wangrc.site/MoGe2Page/): states NeurIPS 2025, with USTC, Microsoft Research and Tsinghua affiliations.
- [Original paper](https://arxiv.org/abs/2507.02546), downloaded [PDF](https://arxiv.org/pdf/2507.02546): distinct paper preceding MoGe-3, with decoupled relative geometry/metric-scale supervision and training-data refinement. PDF SHA-256: `346b3028857dff55f50b25d625d99a2afe0fb9ad6e1de5d08889fcd1ddadd13a`.
- [v2 inference implementation](https://github.com/microsoft/MoGe/blob/main/moge/model/v2.py): optional FOV or focal/shift recovery; normalized K with principal point `(0.5,0.5)`; `depth=points[...,2]` then metric scaling; optional projection enforcement. This is Z-depth, not point norm/range.
- [Official model metadata](https://huggingface.co/Ruicheng/moge-2-vitl-normal): MIT; the official repository distinguishes the plain checkpoint (no normals) from `-normal` variants.
- Image: original PDF page 4, Figure 2, crop `[108,73,506,161]`. Full page and final crop visually inspected; the network, scale branch and complete point/depth outputs remain visible.

## Shared MoGe camera limitation

The official [experimental panorama script](https://github.com/microsoft/MoGe/blob/main/moge/scripts/infer_panorama.py) splits ERP into perspective views and merges radial distance, but currently **imports `moge.model.v1`** and defaults to `Ruicheng/moge-vitl`. It is not evidence that v2/v3 checkpoints can execute this path. Both new records therefore use only `perspective` camera support and `native_panoramic:false`. Raw fisheye/full-ERP compatibility requires an independently verified adapter.

Known/estimated horizontal FOV and variable aspect ratio do not constitute a fisheye camera model. MoGe-2/3 produce single-image metric geometry; neither provides a continuous trajectory or temporal fusion.

## Marigold (`marigold`)

- [Original CVPR 2024 paper](https://openaccess.thecvf.com/content/CVPR2024/html/Ke_Repurposing_Diffusion-Based_Image_Generators_for_Monocular_Depth_Estimation_CVPR_2024_paper.html) and [arXiv record](https://arxiv.org/abs/2312.02145): first preprint December 2023, formal year 2024. Original depth paper is distinct from later same-family extensions and completion applications.
- Downloaded [CVF paper PDF](https://openaccess.thecvf.com/content/CVPR2024/papers/Ke_Repurposing_Diffusion-Based_Image_Generators_for_Monocular_Depth_Estimation_CVPR_2024_paper.pdf), SHA-256: `ea7d878018e2aa87efdf7116b31ed1e6568877f94cfc5486f77a1f12fa7f9522`.
- [Official repository](https://github.com/prs-eth/Marigold) and [depth pipeline](https://github.com/prs-eth/Marigold/blob/main/marigold/marigold_depth_pipeline.py): affine-invariant depth, optional uncalibrated ensemble median absolute deviation; RGB-only output does not recover metric scale or camera intrinsics. The original depth checkpoint is not a normal-estimation model.
- [Official depth-v1-1 card](https://huggingface.co/prs-eth/marigold-depth-v1-1): a later update from the same depth family, [0,1] affine-invariant predictions, effective long-edge resolution around 768, CreativeML Open RAIL++-M weights. The code is separately Apache-2.0.
- Image: original PDF page 5 (printed CVPR page 9496), Figure 3, crop `[49,70,294,184]`. Original page and final crop visually inspected. Final crop was widened after checking the right-hand predicted-depth label; no label is clipped.

## Integration notes

- Merge `records.json` into `source_data/depth_models.json`; no duplicate identities were found in existing depth records.
- Merge each map in `i18n.json` into the corresponding `summaries`, `zhRecords`, `specifications`, `licenses`, and `environments` maps. English source records are complete and contain no Chinese text; `summary_zh` is intentional Chinese source summary.
- Merge `figures.json` into `source_data/figures_depth.json`. Three full images and three thumbnails are already prepared under `site/assets/papers/`. Complete PDFs and temporary page images remain ignored in `library/`.
- Reviewed build labels: `moge3` and `moge2`: cameras `['perspective']`, scale `metric`, depth convention `z`, metric status `metric_learned`. `marigold`: cameras `['perspective']`, scale `relative`, scalar convention is affine depth rather than inverse depth; metric status `scale_shift_invariant`. All have released code and weights.
- No claims of robot wrist accuracy, SLAM trajectories, native ERP/fisheye support or local inference performance were added.
