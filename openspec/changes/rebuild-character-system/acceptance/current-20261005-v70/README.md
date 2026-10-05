# v70 冻结矩阵与实际页面检查

**v70 是 2026-10-05 冻结的完整过程验收快照，不代表五组角色美术通过，也没有用户逐组批准。** 矩阵完整、图片实际下载、Prompt 剪贴板一致、浏览器布局通过，均只说明对应的工程检查完成。

## 冻结源码与矩阵

- `source-snapshot.json` 固定 `sourceId=9181d019add9fe9892dc4af770d85650ee99bc52b9bcb3db755ad0979d961826`、cache revision 70、角色 schema 10、renderer `atelier-4` 和 106 个文件的路径、字节数及 SHA-256。
- 快照中的 `gitHead=6040ab200836697768160283b9e37cf794fe4048` 仅是 Git baseline commit；它不代表当时 dirty/untracked 工作树被提交。`sourceId` 才是这 106 个冻结文件内容的摘要。
- `frames/raw-source-index.json` 登记 10 份原始完整矩阵，均为 `section=all`、`status=recorded`，共 3,798 条：WebGL 1,899 条、software/CPU 1,899 条。Dots、Grok Bot、Meta Muse、人物各路径 378 条；动物各路径 387 条。每个原始文件都按 source snapshot、完整记录数、SHA-256 和字节数登记。
- 提取帧与矩阵 JSON 在 [`frames/`](frames/)。本地原始下载在 index 记录的 Downloads 路径中；大体积 base64 原文件不复制进 Git。

记录状态中所有矩阵的 `userArtApproved` 都是 `false`。样本数量、渲染路径覆盖与指标记录不构成视觉质量结论。

## 实际网页与导出检查

- [`page/main-static-and-pose-actual-downloads.json`](page/main-static-and-pose-actual-downloads.json) 记录每组 2 张、共 10 张 main artwork 实际下载；10 条 Prompt 剪贴板检查均为 `clipboardExact=true`。
- [`page/diagnostic-actual-pngs.json`](page/diagnostic-actual-pngs.json) 记录每组 4 张、共 20 张诊断 PNG 实际下载，覆盖 WebGL/software × studio/transparent；20 条剪贴板检查均为 `clipboardExact=true`。
- [`page/actual-png-independent-checks.json`](page/actual-png-independent-checks.json) 对上述 30 个本地 PNG 做了实际文件检查：29 张为 1600×1600，Meta Muse classic main 一张为 1551×1600；15 张角点 alpha 全不透明、15 张角点 alpha 全透明。记录包括字节数和 SHA-256。角点检查不等于对整张图的视觉、透明边缘或美术质量验收。
- [`page/responsive-actual-pages.json`](page/responsive-actual-pages.json) 记录真实网页在 320、390、768 CSS px 视口的 30 次检查：5 组 × main/diagnostic × 3 宽度。重新拍摄的各项 `top=0`、`headerTop=0`、`overflow=false`。这是浏览器视口证据，不是实体手机测试。

页面截图例子：[桌面首页](page/home-desktop.png)、[桌面图库](page/gallery-desktop.png)、[390 px 首页](page/home-390-final.png)、[390 px 图库](page/gallery-390-final.png)。每组 main/diagnostic 的 320/390/768 px 页面截图按 `{family}-{mode}-{width}.png` 命名并与响应式记录对应。每组 desktop 和实际导出 PNG 也保留在 `page/`。

## 视觉状态与下一步门槛

v70 是修正过程中的最新冻结快照。相对于 v69，样张中记录了 Dots/Grok 桶帽、Meta Muse 镜腿和工作镜头遮脸问题的定向修订；修订图及不同来源的范围在[代表图和相机修复记录](../representatives-20261005-v70/README.md)中分开说明。修正样张只能证明修订被实际渲染与下载，不能据此通过五组的身份、材质、比例、配饰接触、动作、构图或统一视觉精度验收。

五组仍没有通过网页美术验收，用户没有批准任何一组，人物与动物素材仍必须原创且不得使用动漫截图作运行图、贴图或可识别复刻。实体手机未测试。共同接触/渲染要求和身份/逐组确认要求仍以 [OpenSpec tasks](../../tasks.md) 中未完成项为准；工程矩阵不替代逐组真实页面美术复核。
