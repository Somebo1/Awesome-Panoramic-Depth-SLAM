# Panoramic Depth Atlas

**简体中文（当前）** | [English](README.en.md)

面向机器人视觉研究的文献与数据集索引，整理**全景、鱼眼和广视场深度估计、视觉里程计、SLAM 及相关数据集**。

**[浏览网站 →](https://somebo1.github.io/Awesome-Panoramic-Depth-SLAM/?lang=zh)** · [全景定位与建图](https://somebo1.github.io/Awesome-Panoramic-Depth-SLAM/?collection=slam&category=panoramic&lang=zh) · [数据集](https://somebo1.github.io/Awesome-Panoramic-Depth-SLAM/?collection=datasets&category=all&lang=zh) · [完整 JSON](docs/data/catalog.json) · [CSV](docs/data/catalog.csv)

检索与来源核查截点：**2026-10-19**。界面与说明更新：**2026-10-20**。当前 **102** 条记录：深度与几何 **31** 项（23 项包含全景流程）、SLAM / VO / VIO **33** 项（11 项有明确 ERP 输入证据）、数据集 **38** 项（17 项涉及全景数据或明确的渲染、重采样协议）。分类可重叠；这是一份按研究任务组织的人工核验索引，不是性能排行榜或穷尽性综述。

## 使用方式

- 在深度估计、定位与建图、数据集三个集合间切换，按全景、鱼眼、广视场、透视和多相机分类。
- 组合关键词、年份、尺度和代码发布状态筛选；地址栏保留查询，链接可以分享。
- 打开详情查看输入输出、形状与单位、几何约定、标定和 IMU 要求、源码入口、运行环境、许可及官方证据。
- 勾选最多 4 项进行比较；用本机收藏维护阅读清单。
- 将当前筛选导出为 JSON、CSV 或 BibTeX 草稿；引用前核对作者和正式出版信息。
- 数据集另有任务、室内外、真实或合成来源、获取方式筛选，可比较传感器、真值、标定与同步、划分及许可。

网站页眉可选择中文或 English，切换整站界面、摘要及详情并记住本机选择；`?lang=en` 可以分享英语视图。方法名、论文标题和代码标识保留原始写法。本说明也可通过页首链接切换语言。

## 数据集浏览

数据集卡片提供来源明确的预览图，帮助辨认场景、相机配置或标注形式；图片用于介绍资源，不表示本站重新采集数据或运行了算法。数据集原始文件以作者提供的下载入口和条款为准。

默认按阅读优先级排列，优先展示在相应研究方向中使用较成熟、评测协议较清楚的资源；筛选相机类别后仍保留这一顺序。标注包括**经典基准、常用资源、专项资源、待发布／待核实**，每项另附适用范围、排序理由和官方证据。同类资源按编辑次序展示，也可切换为按年份或名称排序。

这个顺序是按任务范围给出的编辑建议，不是按下载量或引用量计算的客观排名，也不意味着成熟的透视基准天然适合完整 ERP 输入。版本支持与原生 ERP 支持仍需分别核查。

当前 38 项覆盖全景实测与渲染基准、鱼眼视觉惯性序列和常见透视对照。部分已介绍的资源尚未开放；“已收录”不等于“数据可下载”。每条记录分别说明实际传感器、公开标注、深度或距离定义、轨迹来源、标定与同步、划分、许可及访问条件。

阅读时尤其注意：

- **TartanAir V2** 区分原始透视 Z-depth 与定制鱼眼、ERP 的射线距离；原始论文年份不冒充 V2 的发布日期。**Hilti 2026** 收录 30 段室内楼层序列，参考轨迹来自 LiDAR-inertial 系统，公开原始序列不含 LiDAR，也不把轨迹当作稠密深度真值。见[来源核验](references/tartanair_v2_hilti2026_sources.md)。
- **MILD** 关联 AprilVINS，包含真实 X5、Insight9 和 MILD-Sim 的介绍；机器人运动学 TCP 参考具有特定适用范围。官网仍声明数据、代码及更多细节待论文录用后发布，许可、完整划分及公开下载均保留待核实状态。预览视频和受限上传服务不代表数据已经开放。见[MILD 来源核验](references/mild_dataset_sources.md)。
- **UZH RPG Multi-FoV** 提供城市与室内合成场景及透视、鱼眼、折反射模型；`.depth` 是沿射线距离。360° 折反射环形像面不等于完整 ERP，城市深度文件的覆盖限制单列说明。数据许可为 CC BY-NC-SA 3.0。见[格式与来源核验](references/rpg_fov_sources.md)。
- **360DVO Dataset** 使用 SfM 伪真值；**ODGS-SLAM Dataset** 的真实 Pro 深度为立体估计，X4 没有深度，合成子集另列；**PanoCARLA-Static** 与动态版不逐帧共享位姿。见[每周核验记录](references/weekly_20261019_sources.md)。
- **360Loc** 的定位位姿不等于稠密深度真值；**TUM VI** 并非所有片段都有全程动作捕捉；**RobotCar** 的 VO 不是地面真值；**Holo360D** 包含优化轨迹和填洞深度；部分派生 ERP 集可能复用训练建筑。

原始记录在 `source_data/datasets_depth.json` 和 `source_data/datasets_slam.json`。逐项官方来源见[深度数据集核验](references/datasets_depth_sources.md)、[定位建图数据集核验](references/datasets_slam_sources.md)及上述补充记录。本项目整理公开元数据和获取入口，不重新分发大型数据集。

## 技术地图

| 路线 | 代表方法 |
|---|---|
| 全景基础模型与跨相机 | DAP、UniDAC、DAC、DA²、DA360、PanDA、UniK3D、PaGeR、RePer-360 |
| 全景投影与融合 | 360MonoDepth、OmniFusion、HRDFuse、Elite360D、RPG360、ST²360D |
| 全景监督与自监督 | UniFuse、PanoFormer、BiFuse++、Depth Anywhere |
| 真实多相机立体 | MODE、MCPDepth |
| 视频与多视图几何对照 | Video Depth Anything、Depth Anything 3、VGGT、VGGT-Ω |
| 透视深度基线 | Depth Anything V2、UniDepthV2、Metric3Dv2、Depth Pro |
| ERP 输入定位与建图 | stella_vslam、360VO、360-VIO、360DVO、PatchMatch-Stereo-Panorama、Cube-Splat、PanoLoop、360ORB-SLAM、ODGS-SLAM、PanoGS-SLAM、PanoAir |
| 鱼眼、广视场与惯性 | OpenVINS、ORB-SLAM3、Basalt、VINS-Fusion、OKVIS2/2-X、SVO Pro、OmniSLAM、LF-VISLAM、P2U-SLAM |
| 学习式 VO 与 SLAM | DROID-SLAM、DPVO、DPV-SLAM、MASt3R-SLAM、DBA-Fusion、D3VO、CodeVIO |
| RGB-D、神经隐式与高斯地图 | SplaTAM、GO-SLAM、MonoGS、PanoSLAM |

完整标题、作者、机构、发表信息和原始来源见[网站](https://somebo1.github.io/Awesome-Panoramic-Depth-SLAM/?lang=zh)及[证据索引](references/sources.md)。

360VO、360-VIO 和 360DVO 是里程计，不能据此宣称具备全局回环；PatchMatch-Stereo-Panorama 是 OpenVSLAM 的稠密化扩展；Cube-Splat 的虚拟视图共享光心与位姿，不产生物理立体基线；PanoLoop 使用整段序列的离线检索和 Sim(3) 校正，不能标为实时在线公制 SLAM。见[经典方法核验](references/slam_candidates_classics_sources.md)和[近期方法核验](references/slam_candidates_recent_sources.md)。该轮按选题要求未加入两篇 Sensors（MDPI）候选。

## 分类与证据口径

相机支持、深度定义、尺度来源、位姿输出和发布状态是独立维度。

- **全景（Panoramic）**：作者流程明确接受完整 ERP 或球面输入。鱼眼、全向 rig、PAL 镜头、Any-view 或 Panoptic 名称不能自动得到该标签；PAL 与 rig 按实际输入分类。
- **完整全景输入支持**：已核实的接口或论文流程接受完整全景，不代表所有内部计算都直接在球面上完成；ERP 转 cubemap 或切平面的步骤单独记录。
- **多相机（Multi-camera）**：真实多相机或立体系统。将单张 ERP 切成 cubemap 或多个 tangent view 不会增加真实基线。
- **射线距离（Range）**：沿单位射线的欧氏距离，`X = range × unit_ray`；**Z-depth** 是光轴分量。完整 ERP 后半球可有负 Z，不能把正值 Z 当作全球面距离。
- **公制（Metric）**：原方法有公制来源，例如学习先验、已知基线、IMU 或深度传感器，来源写在 `scaleNote` / `metricStatus`。该标签不表示本站独立验证过绝对精度。
- **相对尺度（Relative）**：存在尺度或尺度与平移不确定性；**混合（Mixed）**：不同输入模式、权重、监督域或分支具有不同尺度条件；**未知（Unknown）**：证据不足。数据集监督尺度不外推为零样本公制保证。
- **代码已发布**：官方可见实现；**部分发布**：存在已知组件或发布限制；**待核实**：链接或源码完整性仍待审计；**未发现公开代码**：作者承诺或文档仓库不能当作完整实现。权重许可与可用性另列。
- 展示年份优先采用明确的正式发表年份，否则保留预印本或软件年份；原始记录年份、arXiv 版本与正式会议差异一并保存。软件延续项目可能引用基础论文，不代表产生了一篇同名新论文。

例如，PanoSLAM 是 **Panoptic RGB-D** 建图，不属于 ERP 类别；PanoGS-SLAM 的尺度对齐结果不证明绝对米制轨迹；UniK3D 的 distance 和 depth 分别指 range 与 Z；DAP 当前 raw 单位换算必须与 checkpoint 和有效掩码核对。各判断附原始证据，未知项保留。

## 更新记录与配图来源

64 项方法均提供经过核验的论文配图；数据集预览图另行注明来源。

最近一次文献检索见 [2026-10-19 核验记录](references/weekly_20261019_sources.md)，包括 GeoPano、AprilVINS / MILD、PanoCARLA-Static，以及补录的 360DVO 和 ODGS-SLAM 数据集。GeoPano 的点图为尺度对齐输出；AprilVINS 是鱼眼、IMU、AprilTag 配置下的有条件公制 VIO，算法与 MILD 数据仍待发布。旧遗漏的补录不称为当周新成果，未核实的新代码发布也不会标为完整实现。

方法卡片优先展示原论文方法总览，其次是 teaser 或代表性结果，可点击放大。这些图片不是本站重新运行模型得到的结果，原色予以保留；网站界面采用白底、黑字、中性灰边框和少量语义色，首页为文字介绍。

`source_data/figures_depth.json` 和 `source_data/figures_slam.json` 保存方法配图的来源与目视核验状态：PDF 截图记录页码、图号、裁剪框、图注和 PDF SHA-256；`sourceType: author-project-image` 则保存作者页面、原图 URL、原图 SHA-256 及署名，不编造 PDF 页码或指纹。逐项记录见[论文配图来源索引](references/figure_sources.md)，网页图在 `site/assets/papers/`。

完整论文及选图预览仅保存在已忽略的 `library/` 目录，论文通常按方法 ID 存于 `library/pdfs/`；受限论文的获取缺口保留。例如，360-VIO 使用作者官网的真实方法图，未将其标为已取得完整 PDF 或 PDF 截图。下载和裁剪工具为 `tools/acquire_depth_figures.py`、`tools/acquire_slam_figures.py`；增量维护不要用初始化选项覆盖已有配图清单。仓库不上传完整论文、模型权重、数据集或凭据。

## 更新数据与构建

```text
source_data/             原始结构化记录与配图来源清单
site/                    HTML / CSS / JavaScript 网站源文件
site/data/catalog.*      规范化的前端数据与导出文件
docs/                    GitHub Pages 发布目录
references/              原始来源与核验说明
tools/build_site.py      数据适配与复制发布构建
tests/                   数据检查和真实目录的 DOM 功能测试
```

1. 在 `source_data/` 新增或修订记录，附官方论文、代码或数据集链接和核查日期，保持稳定唯一 ID。方法摘要、详情和规格还需维护 `site/i18n.js` 的逐 ID 翻译；数据集的双语字段直接保存在源记录中。
2. 在 `tools/build_site.py` 中维护有证据的相机、尺度和发布状态映射，不通过名称或关键词猜测支持范围。新增方法应核验真实配图和来源，不用通用示意图代替。
3. 运行 `python tools/build_site.py`（Python 3.10+，仅标准库）及 `python tools/validate_data.py`，检查规范数据、来源和 `site/` 与 `docs/` 一致性。
4. 检查 JavaScript 语法并运行 `node tests/frontend.test.cjs`。DOM 测试使用 Node 24+ 和锁定的 jsdom 30.1.3，先在 `tools/test-runtime` 安装锁定依赖；浏览器布局和截图检查另外进行。
数据集配图维护在 `source_data/figures_datasets_depth.json` 与 `source_data/figures_datasets_slam.json`，阅读优先级维护在 `source_data/dataset_curation.json`。新增数据集需补齐真实预览及双语图注、出处和分级依据。

5. 提交源数据、网站源文件和生成的 `docs/`。GitHub Pages 从 `main:/docs` 发布；不要仅修改生成的目录数据。

本地预览：`python -m http.server 8766 --bind 127.0.0.1 --directory site`，打开 `http://127.0.0.1:8766/`。也可以直接打开 `site/index.html`，经典脚本方式支持 file URL。阅读网站无需 Node、npm 或模型环境；本项目没有执行所收录的深度网络、SLAM 或真实设备精度评测。

## 贡献与使用条款

欢迎提交带一手来源的纠错或新记录。请区分论文能力、实际发布接口与自己的复现结果，缺失信息标为 Unknown；不同相机、尺度对齐、分辨率和硬件的数字不直接排列为精度或速度榜。

交互形式参考 [Awesome-Ego-Robotics](https://chang-xinhai.github.io/Awesome-Ego-Robotics/)，本站界面与代码为独立实现。论文及数据集预览图用于资源介绍与评论，著作权归原作者；使用完整论文、图片、模型和数据须遵循原始来源的许可及获取条件。

[数据集排序依据](references/dataset_curation.md) · [数据集配图出处](references/dataset_figure_sources.md)
