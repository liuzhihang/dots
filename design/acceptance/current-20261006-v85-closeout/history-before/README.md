# v83 历史 before 证据

本目录记录的是冻结 v83 实现的历史源码回放。全部浏览器捕获与 PNG 回读在 2026-10-06 本轮完成；它们不是当时实施前执行的捕获记录，不代表新实现通过，也不构成新的美术批准。

## 源码边界

- 冻结快照：[`source-snapshot.v83.json`](source-snapshot.v83.json)，原 archive 快照路径为 `openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/source-snapshot.json`。
- 源码核验：[`source-manifest.v83.json`](source-manifest.v83.json) 记录 cache 83、schema 10、renderer `atelier-4`、source ID `30c3dfa7bb709a2eda4dd4ebfdf4df0390a4e5f5291998defcb178cc7cc9d451`、历史 Site 35/source commit `041171998469a568e8647db9a66dedd84bfb469c` 及重放方法。冻结清单 128/128 路径与内容哈希匹配，重算 source ID 一致，运行时 `character-source` manifest 一致。
- 原快照记录的 `gitHead` `a70c73a7ce94350d49c1b82108e6be760ba4c29e` 只表示基线提交，不涵盖工作树；source ID 本身覆盖冻结清单中的 128 个路径和内容。没有把它误称为完整仓库树哈希，也没有独立的 v83 dirty-snapshot hash。另存的当前主工作树 before snapshot 为 HEAD `4d952b907ef4823db7b5e9792726c80a4226eeb8`、133 个文件、source ID `sha256:f74e8bf212b40048e397bd7b068fb7231832abc5b00c87a69a028d3440b48978`、dirty hash `b8a922e650ea850a7a9a8ae7b5904e95a7a0922c754c2e045fd5256570f4d0d0`；它不是 v83 Site35 源码，也不是本次回放输入。
- 回放使用独立临时目录中的精确历史源码副本，旧 checkout 保持只读；没有用当前 resolver 生成 before，也没有在当前工作树重新启用旧背景功能。

## 捕获结果

- [`r2/capture-v83.json`](r2/capture-v83.json) 绑定每个用例的完整配置、配方/图层、实际素材路径与 SHA-256、预览状态/尺寸/像素、PNG 路径/字节数/hash 和浏览器信息。
- 共覆盖 22 个登记状态 × 3 个 v83 背景模式（浅色棚拍、自定义纯色、透明）= 66 个真实浏览器 Canvas 导出：12 个基准配方状态、10 个固定图库 look 状态；每项都有 1:1 实际输出。真实原始 PNG 共 21 个唯一输入，均保存于 [`r2/resources/`](r2/resources/) 并逐项绑定资源 hash。
- Canvas PNG 保存在 [`r2/canvas/`](r2/canvas/)，实际工作台页面截图为 [`r2/workbench-page-v83.png`](r2/workbench-page-v83.png)。截图只用于确认历史页面已运行，不代替 66 个导出文件的字节验收。
- [`r2/png-byte-verification.json`](r2/png-byte-verification.json) 记录对 66 个导出 PNG 与 21 个源 PNG 的 87 项实际字节、SHA-256 和 PNG 解码核验：尺寸与 resolver pack 一致；棚拍/纯色输出不透明且角像素符合 v83 背景；透明输出角像素 alpha 为 0；Canvas 预览与导出角像素相符；22 个状态均具备全部 3 种模式。所有核对项通过，浏览器 console/page errors 均为空。
- 第一轮驱动顺序触发了旧模型的 pose/action 联动，失败说明与清理边界见 [`attempt-1/README.md`](attempt-1/README.md)。完整结果位于 `r2/`，没有将未冻结的部分产物并入结果。

这些文件只为 tasks 1.2/1.7 提供可复核的历史 before 源码及输出基线；它们不能替代 task 1.11 的新实现最终捕获、视觉协调性检查或人工美术确认。
