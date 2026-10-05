# 本轮本地回归与验收边界

2026-10-05，基于 Git HEAD `6040ab200836697768160283b9e37cf794fe4048`（已有 v32 发布记录）继续本地修复。接手时 7 处修改保留；没有新增角色、生成资产、升级依赖/OpenSpec、提交、推送或部署。本轮未回读线上版本，以下均为当前本地源码证据。

## Review 与修复

1. 减少动态偏好曾被应用内 false 覆盖。现按系统 OR 应用设置合并；打开/重抽重新读取。抽取途中启用系统偏好会停止计时器并立即完成临时候选，仍需明确应用；关闭、dispose 和下一轮使旧回调失效。
2. 诊断捕获曾用继续增长的 elapsed 时间，CPU 下一帧尚未画完时会导出不同动作状态。现记录 actual painted frame 的时间和组装状态，点击时冻结配置/revision/帧，串行导出，在排队、绘制、编码后核对有效性。更新/关闭拒绝旧结果；失败不阻塞后续导出。2D 合成也冻结配置，解码/编码后的更新或 dispose 会取消旧结果。
3. 桌面 flex shrink 将高级设定挤成 2 px，鼠标点击失效。控制区和 details 现保持内容高度，inspector 可纵向滚动；桌面/平板高级内容最多 360 px 内滚动，手机自然页面流。实际鼠标能展开 summary、切到“动作”，Prompt 操作可滚动触达。
4. 导航合同对齐：首页家族卡进入筛选图库；浏览、搜索、清除只改浏览范围；明确“用这个形象定制”才选择作品/进入工作台。各组草稿在当前页面会话独立保留，不改变 schema 10 / 项目文档 v1。图库仍为既有 15 项，每组一只 canonical 加两只 gallery 候选。

缓存号统一 v64，实时 bundle 已重建。QA fixture 不在发布目录，模拟偏好脚本没有进入产品。

## 实际浏览器证据

使用 Codex in-app browser 与页面 WebMCP，本地 origin `http://127.0.0.1:59912`，只使用合成测试数据。

| 检查 | 结果 | 证据 |
| --- | --- | --- |
| 浏览保留草稿 | 自定义 Dots 名称、补充文字、背景；进入 Muse 图库、搜索鼠尾草、无结果清除，项目 JSON 不变 | `01-draft-workbench.png`；导航生产事件回归 |
| 明确选择/分组恢复 | Enter 选择 Muse 捧书，家族/作品正确，名称/文字/背景按合同保留；切回 Dots/Muse，各自项目快照完全恢复 | 导航回归及真实页面 JSON 比较 |
| 应用减少动态 | 本机系统偏好 false，真实勾选应用开关后随机直接出现可应用结果；取消/焦点恢复有效 | `03-native-app-reduced-random.png`、`04-advanced-prompt-usable.png` |
| 系统偏好模拟 | 应用 false，模拟系统 false → 抽取中 true，滚动 4 → 0，应用立即可用；关闭后切换并重开仍用新值 | `05-simulated-system-change.png` |
| 键盘/无障碍树 | 键盘打开，焦点在 dialog 内，槽位/锁定名称可读；Escape/返回关闭，焦点回到随机入口，取消保留配置 | DOM/无障碍树与生产回归 |
| 四宽度 | 首页/图库/工作台/随机在 1280/768/390/320 px 无页面级水平溢出；五组入口、筛选、主要操作可达；高级设定可鼠标展开/切页签 | `responsive-evidence.json` 与各宽度截图 |
| 五组基准 | 五组 Canvas ready，家族/可信作品 ID 正确，schema 10 / 文档 v1 不变；五组完整 Prompt 回读逐字匹配 | `baseline-browser-evidence.json`、`baseline-*.png` |
| 控制台 | 本轮 QA 页未发现 error/warn | browser console 回读 |

原始截图与 JSON 在 [followup-qa-20261005](followup-qa-20261005/)。截图是实际浏览器画面；响应式宽度以 JSON 的 `innerWidth` 为准，截图内容区域会扣除滚动条。桌面首页在布局稳定后重新采集。

系统 true/变化由受控 fixture 模拟，**未修改 macOS 设置**；应用开关为真实操作。使用无障碍树，未做语音屏幕阅读器检查。320/390 px 为浏览器视口，**未做实体手机验收**。

## 实际诊断 PNG

在 Grok 基准、透明背景、正面、暂停动作下，分别点击下载 WebGL/CPU PNG。均为 1600×1600 RGBA，alpha 0–255，四角 alpha 0；肉眼查看无独立地面影层，主体有留白、未裁切。暂停时刻不同，不声称两图像素相同或完整动作矩阵已通过。

| 路径 | 字节 | 主体 alpha 边界 | SHA-256 |
| --- | --- | --- | --- |
| WebGL | 352293 | (261,254)–(1339,1338) | `100b397cfeb97a9dc08fdb46de8b5ab6cde19d384e34d8bfbcd84847ac07b49b` |
| CPU | 564010 | (261,265)–(1339,1338) | `f53fb94fcc865b0889dbc9e2b61de4d3fe3076d8396403a5094cc59c18bab2d8` |

见 `grok-webgl-diagnostic.png`、`grok-cpu-diagnostic.png`、`diagnostic-export-evidence.json`。这是 2.5/2.6 的部分证据；未完成五组接触/构图/动作/比例/双路径矩阵，两任务保持未完成。

## 五组当前验收清单

| 组 | 实际显示的基准 / 已有能力 | 待确认 |
| --- | --- | --- |
| Dots | 蓝色短绒圆球、耳机；裸形/耳机互斥配方、眨眼静态 PNG、背景、Prompt | 绒面、眼形与耳机接触用户确认；完整原多视角/比例/动作/双路径矩阵 |
| Grok Bot | 紫色圆形、同向斜白胶囊眼；经典/眨眼静态 PNG、背景；本轮双路径诊断下载 | 软胶、眼形、轮廓用户确认；完整原矩阵 |
| Meta Muse | 奶油包覆头罩、内嵌暖色脸面、短臂双脚；经典/挥手静态 PNG、背景、Prompt | 头罩内缘、脸面层次、比例/接触用户确认；完整原矩阵 |
| 人物 | 原创栗发青绿服装；经典/挥手静态 PNG、背景、Prompt | 发束、眉眼、衣物/手部用户确认；完整原矩阵 |
| 动物 | 原创暖橙柴犬、立耳/口鼻/卷尾；经典/抬前爪静态 PNG、背景、Prompt | 物种、短绒、爪数/支撑用户确认；完整原矩阵 |

五组均为待真实网页美术验收、未获用户逐组批准。范围仍为 15 项，无第 4 项、新物种或进一步扩展。关系场景仅展示；眨眼/问好为完整静态单帧，不是连续动画。高级 Prompt 设定不自动改变 PNG。构建、脚本、下载、截图和任务完成都不等于艺术批准。

## 验证与规范收尾

`npm run build` 和 11 个 verify 脚本通过：studio、recreations、atelier、character-system、creation、creation-ui、module-cache、look-gallery、family-navigation、fullscreen-random、preview-capture。既有覆盖为 62 个预设旅程、468 个来源/迁移断言、7 个 atelier 检查、57 个历史预设 / 24 个迁移样本 / 200 个单基准随机结果，图库 15 项。

捕获回归调用生产类与真实 CPU raster kernel，覆盖 painted metadata、已绘制帧与 elapsed 不同、组装冻结、RAF 之前更新、排队/编码中 dispose、失败恢复，以及 2D 解码更新/关闭。`verify-preview-capture.mjs --baseline` 用 HEAD 旧类复现 `9 !== 0.35`；当前类通过。导航回归调用生产 `createHomePortal`、`createWorkbenchLook`、`startLook` 的真实处理；随机回归覆盖六种系统/应用组合、同一面板重开、偏好变化和计时器清理。

本次主 specs 的明确同步范围：

- `refactor-family-navigation`：全部 `family-navigation` delta。
- `add-fullscreen-randomizer`：全部 `fullscreen-randomizer` delta。
- `refresh-studio-visual-design`：全部 `studio-visual-experience`、`studio-creation-experience` 已交付合同；候选/用户确认门槛保留。
- `rebuild-character-system`：只选完整条目 `/Users/liuzhihang/workspace/dots/openspec/changes/rebuild-character-system/specs/character-creation-modes/spec.md`。其余角色、接触、视觉验收 delta 未同步，完整实现/验收尚未达成。

导航 12/12、随机 14/14 在主 specs 同步、逐项比较一致并 strict 校验后归档。视觉 change 继续待用户反馈；角色 change 保持 15/36，21 项未完成。归档只代表导航/随机行为已交付，不解除角色验收门槛。

最终校验：同步后 strict 为 9 项通过 / 0 失败；归档后 5 份主 specs + 2 个 active changes 为 7 项通过 / 0 失败，2 个 archived task lint 通过 / 0 失败。新增/修改文档和归档相对链接已检查，`git diff --check` 通过。源码/验证脚本的当前 SHA 见 `source-evidence.json`；没有提交、推送或发布。

## 最终 v70 当前状态

此前 v64 本地状态是历史快照。最终源码缓存 v70 与 sourceId 9181d019add9fe9892dc4af770d85650ee99bc52b9bcb3db755ad0979d961826 已冻结；10 份五组双路径全矩阵共 3798 实际记录、30 份实际 PNG/Prompt 回读、30 张从页面顶部重新捕获的响应式页面已完成，结果见[最终 v70](../openspec/changes/rebuild-character-system/acceptance/current-20261005-v70/README.md)。12 项回归检查和构建通过，五项矩阵执行任务已勾选，角色 change **20/36**。所有记录仍 userArtApproved:false；记录成功不等于角色美术通过，人物/绒毛/配饰自然性缺陷及实体手机、逐组用户批准仍未完成。界面实施 change 可按其已完成的合同归档，角色 change 保持 active。最终 Git 与 Site 发布另存 receipt。
