# v71 本地场景冻结记录（历史中间版本）

v71 是 2026-10-05 本地冻结的中间证据，不是发布版或美术通过记录。它冻结了 113 个源码/资产文件，sourceId 为 `54d843f1f5ebdff1d53d452fa88e94805fd4f8c32f50ea37cb65726adeecdca0`，cache revision 71。完整文件路径及 SHA-256 见 [source-snapshot.json](source-snapshot.json)。快照中的 `gitHead` 只标记基线提交，不代表 dirty working tree 源码已提交。

## 代码与素材证据

构建退出码为 0，`dist/live-runtime.js` 与 v70 字节相同；v71 的六项程序检查全部退出码为 0，具体范围和结果见[程序检查记录](../../../../../design/scene-refinement-20261005/program-checks.json)。这批检查覆盖模块缓存、15 项图库、家族导航、创作 UI、全屏随机和预览捕获逻辑，不等于美术验收。

选中七张 RGBA 场景 PNG 的尺寸、alpha 边界及 SHA-256 见[选中资产清单](../../../../../design/scene-refinement-20261005/selected-assets.json)。最终封面生成输出是 `design/scene-refinement-20261005/assets/hero-left-wide-v3.png` 与 `hero-right-wide-v3.png`，原样复制至运行时 `dist/assets/scenes/hero-left-v2.png` 与 `hero-right-v2.png` 路径；二者 hash 与 v71 冻结快照一致。较早的 `hero-*-v2.png` 狭窄构图仅保留在 [hero-v2-provenance.json](../../../../../design/scene-refinement-20261005/assets/hero-v2-provenance.json) 作过程证据，不是选中主图。新图详细来源与图像级检查见 [hero-wide-v3-manifest.json](../../../../../design/scene-refinement-20261005/assets/hero-wide-v3-manifest.json)。

## v71 页面检查与截图口径更正

v71 实际捕获四种首页视口：1280、768、390、320 CSS px；首页 JSON 记录 bodyTop 为 0、没有横向溢出，hero 高度依次为 270、390、360、350 px。另捕获五组家族画廊的 390 px 页面；均保留三只图库候选和显式 `startLookId`。页面图与索引原样保存在 [scene-refinement-20261005/page](../../../../../design/scene-refinement-20261005/page)。root 实际查看了四张首页截图。

较早的 `home-*-v71.png` fullPage 捕获中，右缘看起来接近裁切；该捕获边界与 native viewport 的捕获方式/实际视口测量不一致，真实 viewport 未显示同样缺裁。因此，不能把 v71 记为存在已证实的真实页面右侧安全边缺陷，也不能称 v72 的局部 8 px 内缩修复了可复现缺陷。v71 与 v72 均仅是历史/中间过程证据，保留其原 sourceId 和截图，不互相覆盖。v72 native 实际页面基线及截图来源见 [v72 记录](../current-20261005-v72/README.md) 与 [native viewport 索引](../../../../../design/scene-refinement-20261005/page/native-viewport-pages-v72.json)。

v71 还记录了实际 UI 下的 app-level 减少动态检查：`body[data-reduced-motion="true"]` 状态下，主视觉/家族图变换为 `none`、transition 为 0、闪光效果不播放，同时保留问候提示。该检查只覆盖应用界面反馈，没有改动角色 renderer 或 3D 动作逻辑。

v71 没有新建 3798 条角色矩阵；旧 v70 矩阵仍只绑定其 v70 冻结源。用户已选择 R01 首页布局，并将 Meta Muse 指为下一步重点；此反馈由 [场景构图 change](../../../archive/2026-10-06-refine-family-scene-composition/proposal.md) 跟踪，v71/v72 都早于这次 Muse 定向迭代。v71 页面图不代表新群像构图已经通过用户确认或五组美术验收。实体手机、独立最终评审和用户 art confirmation 均未完成。
