# Panoramic Depth Atlas

A curated visual atlas of **panoramic, fisheye and wide-FOV depth models, visual odometry, SLAM and datasets**.

**[Explore the website →](https://somebo1.github.io/Awesome-Panoramic-Depth-SLAM/)** · [Panoramic SLAM](https://somebo1.github.io/Awesome-Panoramic-Depth-SLAM/?collection=slam&category=panoramic) · [Full JSON](docs/data/catalog.json) · [CSV](docs/data/catalog.csv)

检索与来源核查截点：**2026-10-17**。当前 **88** 条：Depth/Geometry **30** 项（22项包含全景流程），SLAM/VO/VIO **26** 项（5项有明确原生ERP输入证据），数据集 **32** 项（13项涉及全景数据或明确的渲染/重采样协议）。分类可重叠；这是一份任务导向的人工核验资料索引，不是性能排行榜或穷尽性综述。

## 使用方式

- 在 **Depth**、**SLAM** 与 **Datasets** 集合间切换，按 Panoramic、Fisheye、Wide-FOV、Perspective 和 Multi-camera 分类。
- 用关键词、年份、尺度和代码发布状态组合筛选；地址栏保留查询，链接可以分享。
- 打开方法详情查看输入输出、形状/单位、几何约定、标定/IMU要求、源码入口、环境、许可和官方证据。
- 勾选最多4个方法，横向比较相同字段；用本机收藏维护阅读清单。
- 将当前筛选导出为JSON、CSV或BibTeX草稿；引用前核对作者和正式出版信息。
- 数据集另有任务、室内外、真实/合成来源和获取方式筛选，可比较传感器、真值来源、标定/时间、评测划分及许可。

卡片展示带出处的论文方法图或代表性结果，点击可查看大图与 PDF 页码；完整论文保存在本地。页眉可选择中文或 English，避免同屏重复展示双语。论文、数据和模型以作者原始来源与各自条款为准。

## 本版技术地图

| 路线 | 代表方法 |
|---|---|
| 全景基础模型/跨相机 | DAP、UniDAC、DAC、DA²、DA360、PanDA、UniK3D、PaGeR、RePer-360 |
| 全景投影与融合 | 360MonoDepth、OmniFusion、HRDFuse、Elite360D、RPG360、ST²360D |
| 全景监督/自监督 | UniFuse、PanoFormer、BiFuse++、Depth Anywhere |
| 真实多相机立体 | MODE、MCPDepth |
| 视频/多视图几何对照 | Video Depth Anything、Depth Anything 3、VGGT、VGGT-Ω |
| 透视深度基线 | Depth Anything V2、UniDepthV2、Metric3Dv2、Depth Pro |
| 原生ERP定位/建图 | stella_vslam、360ORB-SLAM、ODGS-SLAM、PanoGS-SLAM、PanoAir |
| 鱼眼/广视场惯性 | OpenVINS、ORB-SLAM3、Basalt、VINS-Fusion、OKVIS2/2-X、SVO Pro、OmniSLAM、LF-VISLAM、P2U-SLAM |
| 学习式VO/SLAM | DROID-SLAM、DPVO、DPV-SLAM、MASt3R-SLAM、DBA-Fusion、D3VO、CodeVIO |
| RGB-D/神经隐式/高斯地图 | SplaTAM、GO-SLAM、MonoGS、PanoSLAM |

完整标题、作者、机构、会议/期刊和原始来源见[可筛选网站](https://somebo1.github.io/Awesome-Panoramic-Depth-SLAM/)及[证据索引](references/sources.md)。

## 数据集

[打开数据集栏目](https://somebo1.github.io/Awesome-Panoramic-Depth-SLAM/?collection=datasets&category=all&lang=zh)。首批32项包括全景实测与渲染基准、鱼眼视觉惯性序列和常见透视对照；新增ToF-360、Holo360D、Oxford Spires等资料。

每条区分实际采集的传感器、公开标注、深度/距离定义与单位、轨迹来源、标定与同步、划分及访问条件。360Loc的定位位姿不等于稠密深度真值，TUM VI并非所有片段都有全程动作捕捉，RobotCar的VO不是地面真值，Holo360D包含优化轨迹和填洞深度，相关派生ERP集可能复用训练建筑。这些限制在中英文详情中分别展示。

原始记录为`source_data/datasets_depth.json`和`source_data/datasets_slam.json`；逐项官方来源见[深度数据集核验](references/datasets_depth_sources.md)与[定位建图数据集核验](references/datasets_slam_sources.md)。本次整理公开元数据与获取入口，没有下载或重新分发大型数据集。

界面采用白底、黑字与中性灰边框；少量语义标签保留颜色，方法论文原图保持原色。首页为纯文字介绍。

## 分类与证据口径

相机支持、深度定义、尺度来源、位姿输出和发布状态是独立维度。

- **Panoramic**：作者流程明确接受完整ERP/球面输入。鱼眼、全向rig、PAL镜头、Any-view或Panoptic名称不能自动得到该标签。PAL/rig按实际相机输入分类。
- **Multi-camera**：真实多相机/立体系统。单张ERP切成cubemap或多个tangent view不会凭空增加真实基线。
- **Range**：沿单位射线的欧氏距离，`X = range × unit_ray`；**Z-depth**是光轴分量。完整ERP后半球可有负Z，不可拿正值Z当全球面距离。
- **Metric**：原方法有公制来源，例如学习先验、已知基线或IMU/深度传感器；其来源写在scaleNote/metricStatus。标签不表示独立验证过绝对精度。
- **Relative**：尺度或尺度/平移不确定性；**Mixed**：不同输入模式、权重、监督域或分支具有不同尺度条件；**Unknown**：证据不足。数据集监督尺度不外推为零样本公制保证。
- **代码已发布**：官方可见实现；**部分发布**：存在已知组件/发布限制；**待核实**：链接/源码完整性仍待审计；**未发现公开代码**：作者承诺或文档仓库不能当完整实现。权重许可与可用性在详情另列。
- 展示年份优先采用明确的正式发表年份，否则保留预印本/软件年份；原始记录年份、arXiv版本与正式会议差异一并保存。软件延续项目可能引用基础论文，并不代表项目产生了一篇同名新论文。

例子：PanoSLAM是**Panoptic RGB-D**建图，不属于ERP类别；PanoGS-SLAM的尺度对齐结果不证明绝对米制轨迹；UniK3D的distance和depth分别指range与Z；DAP当前raw单位换算必须跟checkpoint和有效掩码核对。各判断附原始证据，未知项保留。

## 更新数据与构建

```text
source_data/             原始结构化文献记录（公开信息）
site/                    无构建依赖的 HTML / CSS / JavaScript
site/data/catalog.*      规范化的前端数据与导出文件
docs/                    GitHub Pages 发布目录
references/              原始来源与核验说明
tools/build_site.py      数据适配与 copy-only 发布构建
tests/                   数据与真实目录的 DOM 功能测试
```

1. 在`source_data/`新增或修订记录，附官方论文/代码链接与核查日期；使用稳定唯一ID。
2. 在`tools/build_site.py`中维护有证据的相机/尺度/发布状态映射；不要通过关键词猜支持范围。
3. 运行`python tools/build_site.py`（Python3.10+，仅标准库），再运行`python tools/validate_data.py`。
4. 提交source、site和生成的docs；GitHub Pages从`main:/docs`发布。无需Node、npm或模型环境来阅读网站。

本地预览：`python -m http.server 8766 --bind 127.0.0.1 --directory site`，打开`http://127.0.0.1:8766/`。也可以直接打开site/index.html，经典脚本方式的数据加载支持file URL。

可选DOM测试使用Node24+和锁定的jsdom30.1.3：在`tools/test-runtime`安装锁定依赖，再运行`node tests/frontend.test.cjs`。该测试验证功能，浏览器布局与截图检查单独记录。没有在此网站执行深度网络、SLAM或真实设备精度评测。

## 贡献

欢迎提交有一手来源的记录纠错或新方法。请区分论文能力、实际发布接口和自己的复现结果；缺失信息写Unknown。不同相机、尺度对齐、分辨率和硬件的数字不直接排列为精度/速度榜。

交互形式参考[Awesome-Ego-Robotics](https://chang-xinhai.github.io/Awesome-Ego-Robotics/)，本网站界面和代码为独立实现。论文卡片使用原论文的局部配图，供文献介绍与评论，著作权归原作者；逐项出处、图号、PDF页码与原文件指纹见[配图来源索引](references/figure_sources.md)。本仓库不重新分发完整论文 PDF、模型权重或数据集。

## 语言与论文配图

页眉的“中文 / English”选项切换整站界面、方法摘要及详情说明，记住本机选择；`?lang=en` 可以分享英语视图。方法名称、原论文标题和代码标识保留原始写法。

卡片配图优先采用论文方法总览，其次采用 teaser 或代表性结果。配图保持完整裁剪范围，点击可放大，弹窗附原论文链接与 PDF 页码；这不是网站重新运行模型得到的结果。`source_data/figures_depth.json` 和 `source_data/figures_slam.json` 记录来源、图号、裁剪框、图注、PDF SHA-256 与核验状态。`site/assets/papers/` 保存网页小图和可放大图。

完整论文保存在本地 `library/pdfs/`（按方法 ID 命名），下载和选图预览位于 `library/`；该目录已被 Git 忽略，不会上传 GitHub。论文配图的下载与裁剪脚本在 `tools/acquire_depth_figures.py` 和 `tools/acquire_slam_figures.py`；修改选图后重新构建和核验网站。
