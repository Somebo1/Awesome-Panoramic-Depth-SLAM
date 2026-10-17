# Depth 专题来源与核验记录

统一访问日期：2026-10-17。对应报告：见本仓库结构化记录。数据库：见本仓库结构化记录。

L1：官方摘要/项目/README；L2：原文Method/实验/消融；L3：具体源码/作者答复；L4：本地模型实测。以下记录**没有L4模型推理**。引用来源优先级：正式论文正文 > 作者代码/正式模型卡 > 作者issue解释；不同来源冲突保留差别。GitHub分支内容会变化，后续复现需另存commit/checkpoint hash。

## B01 Depth Anything V2

- [论文，NeurIPS2024](https://arxiv.org/abs/2406.09414)：L1/L2训练配方；synthetic teacher、pseudo-label real bridge、metric fine-tuning与主relative分开。
- [官方仓库](https://github.com/DepthAnything/Depth-Anything-V2)：作者机构、Small/Base/Large/Giant、许可和metric子项目。
- [DPT推理类](https://github.com/DepthAnything/Depth-Anything-V2/blob/main/depth_anything_v2/dpt.py)：infer_image入口；[metric分支](https://github.com/DepthAnything/Depth-Anything-V2/tree/main/metric_depth)。
- 未核：主relative数值到具体几何的完整scale/shift适配；本机速度/显存。run_video不是几何时序网络。

## B02 Depth Anything 3

- [论文](https://arxiv.org/html/2511.10647v1)：L2，重点§3 formulation/representation、architecture和GT scale normalization；未以其摘要排行榜代替定位证据。
- [官方仓库与模型许可表](https://github.com/ByteDance-Seed/Depth-Anything-3)：Any-view/Monocular/Metric/Nested能力不同、-1.1更新。
- [API](https://github.com/ByteDance-Seed/Depth-Anything-3/blob/main/docs/API.md)：pose conditioning、align_to_input_ext_scale、use_ray_pose。
- [Prediction schema](https://github.com/ByteDance-Seed/Depth-Anything-3/blob/main/src/depth_anything_3/specs.py)：L3，depth/conf/sky/extrinsics/intrinsics/is_metric等形状。
- [alignment.py](https://github.com/ByteDance-Seed/Depth-Anything-3/blob/main/src/depth_anything_3/utils/alignment.py)、[da3.py](https://github.com/ByteDance-Seed/Depth-Anything-3/blob/main/src/depth_anything_3/model/da3.py)：focal/300与Nested定标；[geometry](https://github.com/ByteDance-Seed/Depth-Anything-3/blob/main/src/depth_anything_3/utils/geometry.py)。
- 核验：paper射线不归一化，D是pinhole Z；any-view不能推导any-camera。正式conference venue本审计未确认。

## B03 Depth Any Camera (DAC)

- [论文](https://arxiv.org/html/2501.02464v2)：L2，ERP canonical、FoV/pitch、多分辨率；Implementation明确Euclidean distance而非Z-buffer，附录转换公式。
- [官方项目](https://yuliangguo.github.io/depth-any-camera/)、[官方仓库](https://github.com/yuliangguo/depth_any_camera)：CVPR2025、MIT、indoor/outdoor ResNet101/SwinL权重与旧环境。
- [demo_dac_single.py](https://github.com/yuliangguo/depth_any_camera/blob/main/demo/demo_dac_single.py)：L3投影/GT转换与camera参数。

## B04 UniDAC

- [原文](https://arxiv.org/html/2603.27105v1)：L2，§3–4公式、§5实验与§5.3/附录scale map、RoPE、encoder、shift消融。
- [官方项目](https://girish1511.github.io/UniDAC/)、[官方仓库](https://github.com/girish1511/UniDAC)：CVPR2026 pp26953–26963、Py3.10.18/torch2.7/cu118、AnyCalib wild路径。
- [HF权重](https://huggingface.co/girish1511/UniDAC)：可见unidac.pt；模型卡缺独立许可元信息，不擅自填MIT权重。
- [model forward](https://github.com/girish1511/UniDAC/blob/master/unidac/models/unidac.py)：L3，image/lat/long/attn_mask接口；median normalize后scale_map乘relative。
- [demo](https://github.com/girish1511/UniDAC/blob/master/demo/demo_unidac.py)：L3，MP3D ERP、ScanNet++ OpenCV fisheye、KITTI360 MEI及Z→range。
- [LICENSE](https://github.com/girish1511/UniDAC/blob/master/LICENSE)：MIT代码。DINOv3上游条款另外检查。
- 冲突：论文Eq8显式+t，当前forward未见+t；保留版本/checkpoint对应Unknown。main raw链接404，master可读，不应伪造main代码证据。

## B05 DA²: Depth Anything in Any Direction

- [原文](https://arxiv.org/html/2509.26618v2)：L2，perspective-to-ERP/outpainting、SphereViT、distance+normal损失；Table3消融；§5细节与seam限制。
- [ICLR2026论文](https://openreview.net/pdf?id=323ximYcsk)：会议信息，不把arXiv2025误记成ICLR2025。
- [项目](https://depth-any-in-any-dir.github.io/)、[官方仓库](https://github.com/EnVision-Research/DA-2)：Apache2代码、Py3.12、xformers、RTX3090环境。
- [infer.py](https://github.com/EnVision-Research/DA-2/blob/main/infer.py)：L3，distances→distance2pointcloud，normal为后处理。
- [HF](https://huggingface.co/haodongli/DA-2)：权重发布。
- 核验：scale-invariant distance，不是metric；outpainting不是生成真实完整GT depth。

## B06 DAP: Depth Any Panoramas

- [CVPR2026正式论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Lin_Depth_Any_Panoramas_A_Foundation_Model_for_Panoramic_Depth_Estimation_CVPR_2026_paper.pdf)、[arXiv正文](https://arxiv.org/html/2512.16913v1)：L2，三阶段伪标签、distortion/range mask、geometry/sharpness；Tables4–6。DAP-Test对DAP是in-domain。
- [官方项目](https://insta360-research-team.github.io/DAP_website/)、[仓库](https://github.com/Insta360-Research-Team/DAP)：CVPR2026，机构与环境。
- [官方权重](https://huggingface.co/Insta360-Research/DAP-weights)：README明确链接；本任务未完成权重下载/推理。
- [test/infer.py](https://github.com/Insta360-Research-Team/DAP/blob/main/test/infer.py)：L3，raw NPY float32、PNG只是vis、pred_mask阈值和raw=1 sentinel。
- [作者issue4](https://github.com/Insta360-Research-Team/DAP/issues/4)：L3，linxin0于2025-12-22/23确认raw乘100为米；前一条“NPY本来metric”答复被后续 澄清，采用最终说明。该结论针对当前release，不泛化所有未来checkpoint。
- [depth2point.py](https://github.com/Insta360-Research-Team/DAP/blob/main/depth2point.py)：L3，球面单位射线、z极轴；float cast后uint判断不可达，PNG路径未恢复metric。
- [LICENSE](https://github.com/Insta360-Research-Team/DAP/blob/main/LICENSE)：L3，当前CC-BY-NC4.0；第三方声称MIT不作为证据。
- 未核：本机VRAM/速度、真实近距离精度、是否显著降低VIO误差。

## B07 PanDA

- [CVPR2025正式论文](https://openaccess.thecvf.com/content/CVPR2025/papers/Cao_PanDA_Towards_Panoramic_Depth_Anything_with_Unlabeled_Panoramas_and_Mobius_CVPR_2025_paper.pdf)：L2，teacher/student、Möbius、equator-aware patch normalization。
- [官方仓库](https://github.com/caozidong/PanDA)：relative0–1，metric fine-tuning另目录；Py3.10/torch2/cu117；1008×2016需>40GB。
- [run_image.py](https://github.com/caozidong/PanDA/blob/main/run_image.py)：L3，pred_depth→PLY（raw relative），PNG min-max8bit；默认504×1008。
- 未核：主relative图是否只尺度不定还是仍有shift；不因为能导PLY就认为metric或正确形状。

## B08 DA360

- [原文](https://arxiv.org/html/2512.22819v1)：L2，shift估计与circular padding。
- [官方仓库](https://github.com/antigravity-tech/DA360)：旧Insta360-Research-Team地址重定向；2026-09/10 demo、data更新，MIT仓库。
- [test.py](https://github.com/antigravity-tech/DA360/blob/main/test.py)：L3，pred_disp→1/pred_disp→divide min；EXR/PLY尺度不定。
- [权重](https://huggingface.co/hljiang/DA360)：Small/Base/Large。
- 未核：正式会议、不同checkpoint独立许可、本机显存；不标为CVPR2026以免猜测。

## B09 UniK3D

- [CVPR2025论文](https://arxiv.org/html/2503.16591v1)：L2，球面表示、spherical harmonics、angular loss与wide-FoV contraction。
- [项目](https://lpiccinelli-eth.github.io/pub/unik3d/)、[官方仓库](https://github.com/lpiccinelli-eth/UniK3D)：camera/rays条件、eval要求、camera classes。
- [模型源码](https://github.com/lpiccinelli-eth/UniK3D/blob/main/unik3d/models/unik3d.py)：L3，infer末尾distance=norm(points)，depth=Z，rays单位化，confidence/points。
- [LICENSE](https://github.com/lpiccinelli-eth/UniK3D/blob/main/LICENSE)：CC-BY-NC-SA4.0；README简写BY-NC不完整。
- [HF](https://huggingface.co/lpiccinelli/unik3d-vitl)：官方权重存在，但卡片缺独立许可说明。
- 未核：confidence到物理误差方差标定；不把camera rays当pose。

## B10 VGGT

- [CVPR2025论文](https://arxiv.org/html/2503.11651v1)：L2，representation、第一相机坐标和平均距离scale normalization；BA成本与不训练BA讨论。
- [官方仓库](https://github.com/facebookresearch/vggt)：2025-07-29许可更新；2026-05 memory修复；COLMAP+BA。
- [forward](https://github.com/facebookresearch/vggt/blob/main/vggt/models/vggt.py)：L3多head与shape；[pose转换](https://github.com/facebookresearch/vggt/blob/main/vggt/utils/pose_enc.py)。
- [license](https://github.com/facebookresearch/vggt/blob/main/LICENSE.txt)、[原始权重](https://huggingface.co/facebook/VGGT-1B)、[Commercial权重](https://huggingface.co/facebook/VGGT-1B-Commercial)：不能混为同一checkpoint许可。
- 未核：raw ERP/fisheye原生支持；全局米制尺度。

## B11 VGGT-Ω

- [项目](https://vggt-omega.github.io/)、[论文](https://arxiv.org/abs/2605.15195)：L1/L2部分，register attention、single dense head、dynamic data；本次未完整精读全部实验。
- [官方README](https://github.com/facebookresearch/vggt-omega)：L3，512in-wild不benchmark、416reproduction为benchmark参考、gated权重、A100端到端显存条件。
- [forward](https://github.com/facebookresearch/vggt-omega/blob/main/vggt_omega/models/vggt_omega.py)：L3 depth/conf/pose/tokens，无旧版独立point head推断。
- [权重](https://huggingface.co/facebook/VGGT-Omega)、[LICENSE](https://github.com/facebookresearch/vggt-omega/blob/main/LICENSE)：需申请，自定义许可，不写Apache/MIT。
- 发布记录差异：官网Sep18，仓库Sep8，保留差异；截止前公开性已确认。
- 未核：完整axes/Z-range与公制主张，实机推理、checkpoint下载。

## B12 UniDepthV2

- [论文](https://arxiv.org/abs/2502.20110)：TPAMI DOI10.1109/TPAMI.2025.3628473；L1方法/uncertainty，未完整消融。
- [官方仓库](https://github.com/lpiccinelli-eth/UniDepth)、[模型](https://github.com/lpiccinelli-eth/UniDepth/blob/main/unidepth/models/unidepthv2/unidepthv2.py)：L3，infer中radius=norm(points)，depth=Z，rays与confidence；source header CC-BY-NC4.0。
- [权重](https://huggingface.co/lpiccinelli/unidepth-v2-vitl14)。
- 未核：native ERP能力、uncertainty物理标定；pseudo-spherical不应误解any-camera guarantee。

## B13 Metric3Dv2

- [论文](https://arxiv.org/html/2404.15506v1)：L2部分，canonical focal、joint depth-normal；IV-B/TableVII-VIII实际DROID+predicted depth实验。
- [项目](https://jugghm.github.io/Metric3Dv2/)、[官方仓库](https://github.com/YvanYin/Metric3D)、[LICENSE](https://github.com/YvanYin/Metric3D/blob/main/LICENSE)：BSD2代码、TPAMI2024接受、checkpoint/ONNX。
- 关键限定：KITTI translation可改善而rotation部分恶化；不能把某指标提升概括成全部定位更准。ETH3D也有实验，GT depth仍明显优于预测。
- 未核：本机GPU性能、权重独立许可、特定normal confidence通道的完整适配审计。

## B14 Depth Pro

- [ICLR2025论文](https://openreview.net/pdf?id=aueXfY0Clv)、[arXiv](https://arxiv.org/abs/2410.02073)：L1与官方论文信息；未完整精读消融。
- [官方代码](https://github.com/apple-aiml-research/ml-depth-pro)、[infer源码](https://github.com/apple-aiml-research/ml-depth-pro/blob/main/src/depth_pro/depth_pro.py)：L3，1536内部resize、canonical inverse depth按W/f缩放、倒数输出米、focal_pixels。
- [代码LICENSE](https://github.com/apple-aiml-research/ml-depth-pro/blob/main/LICENSE)、[apple/DepthPro权重](https://huggingface.co/apple/DepthPro)：代码自定义许可、权重apple-amlr，不相同。
- 未核：本审计未核实0.3秒的完整GPU/精度条件，故不作部署FPS；无nativeERP证据。

## B15 Video Depth Anything

- [CVPR2025论文](https://arxiv.org/abs/2501.12375)、[官方项目](https://videodepthanything.github.io/)：L1/L2部分，spatial-temporal head、temporal gradient、long-video keyframes。
- [README](https://github.com/DepthAnything/Video-Depth-Anything)：metric checkpoints、run.py/run_streaming.py、A100显存/latency条件、streaming性能下降与模型许可。
- 官方点云展示借用MoGe估首帧K与scale/shift，不是VDA独立能力。
- 未核：metric输出具体Z/range、latency计时口径、本机结果。时间连续不等于rigid multiview一致性。

## B16 UniFuse

- [RA-L/ICRA2021论文](https://arxiv.org/pdf/2102.03550)：第一页面机构与Method初段projection/fusion；未完整消融审计。
- [仓库](https://github.com/alibaba/UniFuse-Unidirectional-Fusion)、[LICENSE](https://github.com/alibaba/UniFuse-Unidirectional-Fusion/blob/main/LICENSE)：MIT代码；官方预训练四数据集链接。
- 未核：原始decoder/GT loader完整range/Z接口、本机现代环境；不将in-domain scale说成open-world metric。

## B17 PanoFormer

- [ECCV2022正式论文](https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136610193.pdf)、[arXiv](https://arxiv.org/abs/2203.09283)：作者/机构、tangent patch/token flow；本次未完整读实验消融。
- [官方仓库](https://github.com/zhijieshen-bjtu/PanoFormer)：Py3.8/torch1.7.1/cu10.1/RTX3090；预训练下载链接在To start。
- 未核：range/Z、精确推理函数、LICENSE SPDX。不得填猜测的MIT。

## B18 BiFuse++

- [论文](https://arxiv.org/pdf/2209.02952)：L2部分，Fig1明确三帧PoseNet用于自监督、bi-projection和contrast-aware photometric loss。
- [官方仓库](https://github.com/fuenwang/BiFusev2)：TPAMI2023 45(5)5448–5460，DOI2022，监督/自监督run_inference模式不同，MIT。
- 不把预印本2022误填为TPAMI卷期2022；不把训练PoseNet当已发布连续SLAM轨迹。
- 未核：原始geometry warper range/Z、推理trajectory API、现代环境资源。

## 未采纳的来源与歧义处理

最终URL核查：PanDA项目地址修正为[PanDA_Depth](https://caozidong.github.io/PanDA_Depth/)；此前省略后缀的地址有误。UniDepthV2单独项目页未能确认，数据库改用已读官方仓库对应章节。DAv2未经核实的HF collection ID删除；DA3、VideoDA组织主页改成官方README权重入口；Metric3D、UniFuse使用已核实README入口。DAP的HF地址虽然由官方README明确链接，但本次直接页面读取失败，数据库weights_url回退官方README；DA360项目域名由官方明确声明但直接读取失败，代码仓库仍可访问。VGGT-Ω官方HF卡可读，许可证标注为fair-noncommercial-research-license。DA360官方HF卡可读且标注Apache-2.0；上游依赖仍需分别核。Depth Pro官方HF卡明确称发布checkpoint为重新训练的reference implementation，性能不完全等同论文。DAv2当前README将Giant权重列为Coming soon。

搜索出现的第三方博客、模型榜单、Reddit、ResearchGate、聚合论文索引仅用于发现线索，未用于核心几何/许可/实验结论。特别是：
- DAP的第三方MIT说法与官方LICENSE不符，采用官方NC。
- DA²、Depth Anything V2、Depth Any Camera不是同一模型；简称统一用da2_panorama、depth_anything_v2、dac。
- PanDA还存在同名2026全景分割域适应论文，本数据库只指CVPR2025 panoramic depth。
- “any view”“any camera”“metric”“scale invariant”分别对应不同条件，已逐字段拆开。
