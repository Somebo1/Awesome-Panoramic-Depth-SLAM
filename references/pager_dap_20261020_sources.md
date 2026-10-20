# PaGeR / DAP targeted audit - 2026-10-20

PaGeR already exists as `pager`; update that record rather than add a second item.

## Primary evidence

- [arXiv abstract/version history](https://arxiv.org/abs/2605.26368v2): v1 2026-05-25, v2 2026-05-27. The current abstract exposes no later version.
- [Original paper, PDF page 7, Table 2 and Sec. 3.2](https://arxiv.org/pdf/2605.26368v2#page=7): metric depth, three datasets, three metrics. The complete page was rendered and visually checked locally. Table values match the official project. Raw HTML inserts formatting zeroes in some cells; use the PDF/project numbers.
- [Official project, Metric Depth](https://pager360.github.io/): explicit table units: AbsRel and delta1 in percent, RMSE in centimetres. The header states NeurIPS 2026; repository citation still says arXiv. Existing venue wording attributes the conference claim to authors and remains accurate.
- [Official repository, Pretrained Models](https://github.com/prs-eth/PaGeR#pretrained-models): three checkpoints. Unified PaGeR rescales SI depth with a domain head; the metric-only checkpoint has a different direct head. The CLIP automatic router was added after submission; paper scores force indoor/outdoor per dataset.
- [Official repository, Evaluation](https://github.com/prs-eth/PaGeR#evaluation): metric predictions use `alignment_type metric`; scale alignment belongs to SI evaluation.

## Result

The user's 8-of-9 claim is supported within Table 2. The only loss is Matterport3D360 delta1: 69.50% (PaGeR), 80.19% (DAP). Full numeric rows, units, range and head settings are in [structured comparison](pager_dap_20261020_comparison.json). These are author-reported values; no local model benchmark was executed. Do not transfer the ranking to another paper's datasets/ranges, other checkpoints, or automatic scene routing.

## Existing record / figure

The existing camera/depth conventions, licenses, three checkpoint variants and fixed six-face input summary need no substantive correction. The unified primary-output text is clarified to name normals explicitly. Existing Figure 2 at PDF page 4 and final `pager.webp` were visually checked: the crop includes the complete method overview and is still appropriate. Existing PDF SHA-256: `88cf2516fac672870f10dc364c14742a87f7501dae6ce2122507561725868193`. No replacement image was created.
