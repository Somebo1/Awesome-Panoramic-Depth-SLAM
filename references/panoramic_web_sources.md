# Panoramic depth 扩充来源与标签策略

检索日期：2026-10-17（Asia/Shanghai）。本轮只使用作者论文、官方项目页、作者仓库与官方模型卡作事实来源。新增 12 条记录保存在 `papers/panoramic_additions.json`，未修改原始 `depth_models.json`。本轮未运行网络推理、未下载模型，也未测量精度或速度。

## 收录与去重

- Any360D 与现有 PanDA 对应同一 arXiv 2406.13378 的早期/修订标题，不新增一条重复论文。现有记录仍可通过 Any360D 别名检索。[arXiv 当前记录](https://arxiv.org/abs/2406.13378)
- MCPDepth 的 2024 预印本与 CVPR 2026 OmniCV Workshop 为同一工作；正式引用标题含 Practical，方法 ID 保持单一。[官方仓库](https://github.com/Qjizhi/MCPDepth)
- DreamCube 属于生成式 RGB-D 与模型适配相关方向，不能把生成的未观测场景当成机器人传感器测量。

## 一手来源清单

| 方法 | 论文 | 官方项目/代码 | 权重证据与审计边界 |
|---|---|---|---|
| 360MonoDepth | [论文](https://arxiv.org/abs/2111.15669) | [项目/仓库](https://github.com/manurare/360monodepth) | 无需新增训练；依赖上游 MiDaS 等权重。原论文 §3.2 明确球面视差为 inverse radial range，保留视差仿射不确定性。 |
| OmniFusion | [论文](https://arxiv.org/abs/2203.00838) | [项目/仓库](https://github.com/yuliangguo/OmniFusion) | [权重入口](https://github.com/yuliangguo/OmniFusion#pre-trained-models)；官方 README 提供 pretrained evaluation models 链接；数据集版本须单独确认。输入多个切平面来自同一图像，不是多相机立体。 |
| HRDFuse | [论文](https://arxiv.org/abs/2303.11616) | [项目/仓库](https://github.com/haoai-1997/HRDFuse) | 作者主页确认官方仓库。当前 README 极简；未验证任务预训练权重，保留 null。 |
| Elite360D | [论文](https://arxiv.org/abs/2403.16376) | [项目/仓库](https://github.com/haoai-1997/Elite360D) | checkpoints 目录只确认 ResNet18/34 初始化文件，不能据此宣称已发布训练后的 Elite360D 深度权重。 |
| Depth Anywhere | [论文](https://arxiv.org/abs/2406.12849) | [项目/仓库](https://github.com/albert100121/Depth-Anywhere) | [权重入口](https://github.com/albert100121/Depth-Anywhere#pretrained-weights)；官方 README 的 Pretrained weights 段提供 Google Drive 下载。尺度与所选全景学生/checkpoint相关。 |
| MODE | [论文](https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930192.pdf) | [项目/仓库](https://github.com/nju-ee/MODE-2022) | [权重入口](https://github.com/nju-ee/MODE-2022#pretrained-models)；官方 README 提供 ModeDisparity、ModeFusion、ModeFusion_soiled 链接。论文 §3.1 定义 rho 为光心到点的欧氏距离，尺度来自标定基线。 |
| MCPDepth | [论文](https://arxiv.org/abs/2408.01653) | [项目/仓库](https://github.com/Qjizhi/MCPDepth) | [权重入口](https://github.com/Qjizhi/MCPDepth/tree/main/pretrained_model)；pretrained_model 目录确认两个 MCPDepth Deep360 tar checkpoint。深度推导依赖真实立体基线。 |
| RPG360 | [论文](https://arxiv.org/abs/2509.23991) | [项目/仓库](https://github.com/jdk9405/RPG360) | 代码公开；深度和法线依赖上游模型。论文 §3.1 明确透视Z到ERP径向距离转换，图优化本身不恢复测量尺度。 |
| ST²360D | [论文](https://openreview.net/pdf?id=d0bm4upnQ8) | [项目/仓库](https://caozidong.github.io/ST2360D_Depth/) | 作者项目页与 NeurIPS/OpenReview 论文确认；未找到可确认的官方代码/权重链接。虚拟视角序列并非真实时间视频。 |
| PaGeR | [论文](https://arxiv.org/abs/2605.26368) | [项目/仓库](https://github.com/prs-eth/PaGeR) | [权重入口](https://huggingface.co/prs-eth/PaGeR)；代码、统一/metric-only/normals-only 三种 HF 权重公开。统一模型 SI 与 metric 输出分开；默认 CLIP 室内外路由为论文投稿后的新增行为。 |
| RePer-360 | [论文](https://arxiv.org/abs/2603.05999) | [项目/仓库](https://github.com/munimo/RePer360) | [权重入口](https://huggingface.co/ZSBD/RePer-360)；官方 README 与 HF mirror 可访问；metric 和 zero-shot SSI checkpoint 分开。SSI 使用 scale-and-shift 对齐评价。 |
| DreamCube | [论文](https://arxiv.org/abs/2506.17206) | [项目/仓库](https://github.com/Yukun-Huang/DreamCube) | [权重入口](https://huggingface.co/KevinHuang/DreamCube)；官网和 README 宣布权重发布，但官方 HF 卡仍说明现有权重用于 sanity testing，最终正式权重待发布；因此标记 partial/conflicting。 |

### 需要保留的发布状态细节

- Elite360D：[checkpoint 文件清单](https://github.com/haoai-1997/Elite360D/tree/main/checkpoints)。只有通用 ImageNet 编码器文件，任务模型权重标为未核实。
- DreamCube：[项目发布说明](https://yukun-huang.github.io/DreamCube/)、[官方 HF 模型卡](https://huggingface.co/KevinHuang/DreamCube)。二者发布说明存在不一致，避免仅凭一个链接就标记“正式权重齐全”。
- PaGeR：[README](https://github.com/prs-eth/PaGeR)、[metric-only 模型卡](https://huggingface.co/prs-eth/PaGeR-metric-depth)、[论文 HTML](https://arxiv.org/html/2605.26368)。统一模型的自动场景分类路由不等同于论文评测时按数据集强制选择室内/外头；网络头的 planar Z 与导出 ERP range 应区分。
- RePer-360：[官方仓库](https://github.com/munimo/RePer360)。域内米制模型与归一化 SSI 零样本模型都已列出，筛选器应标记 mixed_checkpoints。

## 网站统一标签建议

将相机/投影、几何输出、尺度能力分成独立字段。不要把 Any View 自动解释为 Any Camera；不要把前端可显示的伪彩深度等同于可直接反投影的几何量。

### camera_support

- `panoramic_erp`：作者流程明确接受完整 360° × 180° ERP。
- `fisheye`：作者原生标定/训练/演示支持非线性鱼眼模型，不是先裁剪成透视之后的一般可用性。
- `wide_fov`：明确的广视场适配。
- `perspective`、`cubemap`、`cassini`、`cylindrical`：分别记录输入/内部表示；如区分更细，可额外添加 `internal_projection`。
- `native_panoramic=true`：作者方法明确支持完整球面输入，包括官方 ERP→cubemap/tangent pipeline；这不等于网络单次直接处理 ERP。

### geometry_output

推荐数组：`radial_range`、`inverse_radial_range`、`z_depth`、`relative_depth`、`scale_invariant_depth`、`point_map`、`normals`、`pose`、`sky_mask`、`confidence`、`depth_unknown_convention`。生成式相关项另用 `generated_depth` / `mesh` / `gaussian_scene`。

`radial_range` 是 r=||P||，单位射线反投影 P=r·u；`z_depth` 是光轴分量 Z，反投影 P=Z·K⁻¹p。ERP 不能直接套 pinhole K⁻¹；含平移/仿射不确定性的 relative inverse depth 不能仅乘一个尺度就当作 radial range。

### metric_status

| 标签 | 网站说明 |
|---|---|
| `metric_learned` | 学得米制尺度，存在训练域/标定依赖 |
| `metric_stereo_baseline` | 尺度来自已知真实立体基线 |
| `scale_invariant` | 保留一个全局尺度不确定性 |
| `scale_shift_invariant` | 在指定深度/视差表示中存在尺度与平移不确定性 |
| `mixed_checkpoints` | 同名方法不同分支/权重有不同尺度语义 |
| `dataset_scale_only` | 仅确认监督数据集尺度，广泛零样本米制能力未建立 |
| `unknown` | 官方证据不足，不能从标题猜测 |

评价方法也应单独记录：`none` / `scale_align` / `scale_shift_align`。AbsRel 数字没有对齐方式、测试域、范围截断和 mask 说明时不做跨论文排行榜。

## 原始 18 项的建议映射

下表只根据原始数据库已有的审计内容作统一映射；未在本轮重新审计全部权重。保留现有长文本中的版本限定。

| ID | 相机支持 | 原生全景 | 尺度标签 | 主要输出说明 |
|---|---|---|---|---|
| depth_anything_v2 | perspective | 否 | mixed_checkpoints | relative 主模型与独立 metric 微调分支 |
| depth_anything_3 | perspective | 否 | mixed_checkpoints | 多视图 depth/pose；Any-view 不等于全景投影 |
| dac | perspective, fisheye, wide_fov, panoramic_erp | 是 | metric_learned | 标定射线与 canonical ERP range |
| unidac | perspective, fisheye, wide_fov, panoramic_erp | 是 | metric_learned | canonical ERP metric range，保留论文/代码 shift 差异说明 |
| da2_panorama | panoramic_erp | 是 | scale_invariant | scale-invariant distance，不是米制 |
| dap | panoramic_erp | 是 | metric_learned | metric range 与距离有效掩码 |
| panda | panoramic_erp | 是 | mixed_checkpoints | 主权重 relative；metric 微调需分开标记 |
| da360 | panoramic_erp | 是 | scale_invariant | 形状尺度不变性不等于米制尺度 |
| unik3d | perspective, fisheye, wide_fov, panoramic_erp | 是 | metric_learned | metric point map / ray-based geometry |
| vggt | perspective | 否 | scale_invariant | shared-frame depth / pose / point geometry，尺度任意 |
| vggt_omega | 以原始记录逐项确定 | 需保守核验 | unknown | 不从 Omega 名称推断投影与尺度 |
| unidepth_v2 | perspective | 否 | metric_learned | perspective metric depth / camera estimation |
| metric3d_v2 | perspective | 否 | metric_learned | metric depth / normals；需要相机归一化 |
| depth_pro | perspective | 否 | metric_learned | perspective Z 与 focal estimate |
| video_depth_anything | perspective | 否 | mixed_checkpoints | relative / metric 视频权重分别标记 |
| unifuse | panoramic_erp, cubemap | 是 | dataset_scale_only | ERP深度；radial/Z 在原审计中仍 Unknown |
| panoformer | panoramic_erp | 是 | dataset_scale_only | ERP深度；radial/Z 在原审计中仍 Unknown |
| bifuse_pp | panoramic_erp, cubemap | 是 | mixed_checkpoints | 监督数据集尺度 / 自监督单目尺度模糊 |

## 使用优先级（本轮判断）

复现候选优先考虑已有 DAC/UniDAC、DA²/PanDA/DAP 加新增 PaGeR 与 RePer-360，分别覆盖跨相机、相对全景、米制全景和域适配。360MonoDepth / RPG360 提供可解释的投影与跨面一致性基线；MODE / MCPDepth 适合有多相机标定与同步条件的真实立体方案。生成式 DreamCube 单列为探索路线。此优先级是基于已检查接口和发布完整性的工程判断，不是经过同硬件精度评测后的排名。
