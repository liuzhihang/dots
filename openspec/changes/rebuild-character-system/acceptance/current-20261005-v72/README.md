# v72 本地中间快照（Muse 修订前）

v72 是 2026-10-05 本地中间快照，不是最终版本，也不表示可直接发布。它冻结 113 个文件、cache revision 72，sourceId `ca8b4f7310d7ce85b1e9e5520c27d278500fd70321385354a50f9f4acd649020`。逐文件路径和 SHA-256 见 [source-snapshot.json](source-snapshot.json)；其中 `gitHead` 只表示基线提交，不代表 dirty 源码已提交。本记录不声明 v72 有新的 Site 发布版本。

用户当前已选择 R01 首页布局，并要求优先完善 Meta Muse；因此 v72 仅是 Muse 修订前的本地页面基线。后续应先完成这一轮定向实现与验收，不把 v72 当作等待直接发布的最终候选。

## 页面构图与右缘截图记录

v72 沿用 R01 风格的标题、两侧主视觉和五组家族卡版式，封面选用 [hero-left-wide-v3.png](../../../../../design/scene-refinement-20261005/assets/hero-left-wide-v3.png) 与 [hero-right-wide-v3.png](../../../../../design/scene-refinement-20261005/assets/hero-right-wide-v3.png)，并原样复制到运行时 `hero-left-v2.png` / `hero-right-v2.png` 路径。较早的窄版 root v2 图仅保留为 [生成过程记录](../../../../../design/scene-refinement-20261005/assets/hero-v2-provenance.json)。运行时七张 RGBA 图的路径、尺寸、alpha 和 SHA-256 见[选中资产记录](../../../../../design/scene-refinement-20261005/selected-assets.json)，与本地冻结清单一致。

此前 fullPage 截图曾让右缘看起来接近裁切；该图像边界与真实 native viewport 的捕获及测量不一致。native viewport 未复现同样的缺裁，故不能把它记为 v71 的真实边距缺陷。v72 代码包含当时采用的局部 8 px 内缩样式，但这不证明修复了可复现的真实裁切。

## v72 native viewport 基线

真实 viewport 捕获索引为 [native-viewport-pages-v72.json](../../../../../design/scene-refinement-20261005/page/native-viewport-pages-v72.json)，捕获方式是 stable accessibility 状态后的 native target screenshot，未使用 fullPage。它关联实际页面截图：1280 px 首页，以及 768、390、320 px 首页和向下滚动至卡片区域的画面。各尺寸首页 `bodyTop` 为 0，`bodyWidth` 等于 `scrollWidth`（1280 视口为 1265；768 为 753；390 为 375；320 为 305）；检查视口无水平溢出。滚动状态的负 `bodyTop` 反映页面已滚动，不是裁切证据。

较早的 `home-*-v72.png` fullPage 截图仅作为过程记录，不与 native viewport 图混用来判断边缘安全范围。截图对应 Muse 修订前的 v72 源码，后续 Meta Muse 修改后必须以新 source ID 重新捕获、评审；此基线不能充当修改后证据。

## 程序检查与适用范围

v71 构建退出码为 0，六项相关程序检查全部退出码为 0，且 `dist/live-runtime.js` 与 v70 字节相同；检查边界见 [v71 程序记录](../current-20261005-v71/README.md)及[程序检查清单](../../../../../design/scene-refinement-20261005/program-checks.json)。v72 只更新局部样式和模块 cache revision，统一缓存检查已重跑；本记录不把复用项冒称 v72 全量重跑。v71 的实际减少动态 UI 检查覆盖 `body[data-reduced-motion="true"]` 下图像 `transform:none`、transition 为 0、sparkle 不播放且保留问候反馈；本次没有改动角色 renderer。

v72 没有新增 3798 条 WebGL/CPU 角色矩阵。v70 矩阵和页面记录只绑定 v70 冻结源，不能证明 v72 或后续 Muse 修改的页面艺术通过。此次没有修改 Three.js/WebGL/CPU runtime；未来真实 3D 成品仍须满足原 WebGL/CPU、多视角、动作和配饰接触合同。

## 当前未完成门槛

下一步是在已选的 R01 页面构图内完善 Meta Muse：保留米白包覆头罩与躯干、暖色内嵌脸面和清楚厚度、短圆肢体、细腻哑光布面/短纤维，并让配饰或植物道具自然接触而不遮脸、不穿插。Muse 修改后的实际页面、独立美术评审和用户明确确认均未完成。

v72 `userArtApproved` 为 `false`，见 native viewport 索引。人物与动物仍须遵循原创设计边界；展示群像不扩充图库、工作台、单体 PNG 或 Prompt。实体手机尚未测试。source freeze、构建/模块检查、图像 RGBA/SHA、native viewport 几何或任务执行均不能自动标记美术验收通过。
