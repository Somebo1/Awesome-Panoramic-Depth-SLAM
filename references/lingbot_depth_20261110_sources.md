# LingBot-Depth targeted source review — 2026-11-10

This is a user-requested backfill of the original LingBot-Depth, not a new November release or a full weekly survey. The atlas-wide research cutoff stays **2026-11-09**. One depth record is added: `lingbot_depth2026`. No dataset or model weights are redistributed.

## Identity and versions

- [Original paper, arXiv2601.17895v1](https://arxiv.org/abs/2601.17895v1): first submitted2026-01-25; 19-page technical report, Masked Depth Modeling for Spatial Perception.
- [Formal ECCV2026 publication](https://link.springer.com/chapter/10.1007/978-3-032-37035-8_25): LNCS17009, pp.453–470, DOI10.1007/978-3-032-37035-8_25, first online2026-09-09. Publisher author and affiliation fields identify Robbyant and Ant Group.
- [Official project](https://technology.robbyant.com/lingbot-depth) and [repository](https://github.com/Robbyant/lingbot-depth). Public API HEAD checked at `f3a237e434ae987bc38281476d6cfb5df3e4d739` (2026-07-08). The reviewed tree has99 paths; no training script was found. This records the review scope rather than claiming a permanently absent implementation.
- [Subsequent LingBot-Vision project](https://github.com/Robbyant/lingbot-vision) and [Vision Pretraining for Dense Spatial Perception](https://arxiv.org/abs/2607.05247) describe LingBot-Depth2.0. Its reviewed model zoo lists backbone-only weights. A full2.0 completion checkpoint was not established; do not relabel v0.5 or `model/v2.py` as Depth2.0. This follow-up remains separate from the verified original method record.

## Actual released input and geometry

The following are implementation findings, rather than implications of a method name:

- [Pinned MDMModel source](https://github.com/Robbyant/lingbot-depth/blob/f3a237e434ae987bc38281476d6cfb5df3e4d739/mdm/model/v2.py): `infer(image, depth_in, intrinsics)` accepts an RGB tensor and aligned depth in metres. Although the signature defaults `depth_in` to None, `forward` asserts depth is not None. Missing samples within a supplied map differ from omitting the tensor. This is an RGB-D completion/refinement entry, not a verified released RGB-only inference entry.
- [Pinned encoder](https://github.com/Robbyant/lingbot-depth/blob/f3a237e434ae987bc38281476d6cfb5df3e4d739/mdm/model/encoder.py): separate RGB/depth patch embeddings, joint attention, and contextual RGB tokens; invalid/nonfinite depth masking is a preprocessing rule, not independent supervision.
- [Pinned geometry source](https://github.com/Robbyant/lingbot-depth/blob/f3a237e434ae987bc38281476d6cfb5df3e4d739/mdm/utils/geo.py): the default depth_scale is1.0 despite a stale explanatory docstring. `Z=depth`, `X=(u-cx)Z/fx`, `Y=(v-cy)Z/fy`. The output is optical-axis Z, not radial range. K is normalized by image width/height, optional for depth and necessary for points; points are a derived backprojection, not an independent point-map head.
- [Pinned README](https://github.com/Robbyant/lingbot-depth/blob/f3a237e434ae987bc38281476d6cfb5df3e4d739/README.md): sample uint16 millimetre depth is divided by1000. The reviewed model returns an optional binary validity mask; no calibrated confidence, camera estimate, trajectory or normal output is verified in `infer`. Invalid outputs may become positive infinity when masking is enabled.
- Paper Section4.2 replaces the MoGe encoder with the pretrained representation and removes depth embedding/decoder branches for monocular transfer. Reconstruction, tracking, grasping and monocular transfer experiments do not establish a standalone SLAM interface. A30FPS video acquisition rate is not measured model throughput. No matched direct comparison to RGB-only DAP is established by this completion protocol.
- Taxonomy is **Pinhole / perspective only**, direct/released. No verified full-ERP or raw-fisheye route was found. A sensor's internal stereo implementation is not a multi-view input requirement for this model. Metric scale is conditioned on input sensor depth and metric supervision, without a local accuracy claim.

## Public artifacts, environment and licenses

Public API metadata and file listings were checked without downloading model.pt:

| Official model listing | Reviewed revision | Access and scope |
|---|---|---|
| [Recommended pretrain v0.5](https://huggingface.co/robbyant/lingbot-depth-pretrain-vitl-14-v0.5) | `79204ed6b837f4fdd192cf563e59481fecfa0295` | Ungated, model.pt listed, Apache-2.0 model card |
| [Original pretrain v0.1](https://huggingface.co/robbyant/lingbot-depth-pretrain-vitl-14) | `8a4b1682b966eced55a0edf5d2d8ac9b0db50740` | Ungated, separate older checkpoint, Apache-2.0 model card |
| [Sparse depth-completion checkpoint](https://huggingface.co/robbyant/lingbot-depth-postrain-dc-vitl14) | `d1b06f7538d4b56387412799c528542c795df169` | Ungated, separate completion specialization, Apache-2.0 model card |

The author README recommends v0.5 after fixing the older checkpoint. These revision labels and the source path `mdm/model/v2.py` do not identify Depth2.0.

[pyproject.toml](https://github.com/Robbyant/lingbot-depth/blob/f3a237e434ae987bc38281476d6cfb5df3e4d739/pyproject.toml) pins Python>=3.9, torch2.6.0 and xformers0.0.29.post2; source `use_fp16` actually enables bfloat16 autocast. [LICENSE](https://github.com/Robbyant/lingbot-depth/blob/f3a237e434ae987bc38281476d6cfb5df3e4d739/LICENSE) is Apache-2.0. [LEGAL.md](https://github.com/Robbyant/lingbot-depth/blob/f3a237e434ae987bc38281476d6cfb5df3e4d739/LEGAL.md) states Chinese code comments govern over translations. Dependencies and original data remain separately governed. No local model environment, inference, training or benchmark was run.

Paper training references include FoundationStereo-estimated real depth and ideal rendered synthetic depth; estimated pseudo labels do not become independent measured truth. The later Vision/Depth2.0 training scale is not substituted into the original model's record.

## Actual paper figure

- [Downloaded original arXiv PDF](https://arxiv.org/pdf/2601.17895v1), SHA-256 `480937fc369c02535a6eac4a69ccb47566e394bc898e8911cdbc63cbeeb30896`.
- Figure2 on PDF page3, crop `[88,68,520,288]` in PDF points. Complete original PDF page and final1296x660 WebP were individually viewed; all RGB/depth inputs, encoder, output, legend and reference inset are visible. Thumbnail960x489.
- The arXiv version links to [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). Attribution, source, crop/resize notice and bilingual explanatory captions are retained in `source_data/figures_depth.json`. The actual screenshot and thumbnail are in `site/assets/papers/`; full PDF stays in ignored local storage.

## Integration and validation scope

Canonical depth data, explicit camera/scale/code-status mappings, full English/Chinese details, true figure provenance, and both README statistics are updated together. The comprehensive search cutoff and prior weekly records are retained. Validation covers data/provenance, syntax, current-catalog DOM integration and a regression distinguishing required observed depth, optional K, Z-versus-range and v0.5-versus-Depth2.0. Publication is reported only after verifying the GitHub Pages commit and live catalog/assets.
