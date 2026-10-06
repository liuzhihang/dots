# 页面与模块人工确认清单

## 版本与范围

本清单对应本地 source `sha256:9bcd516a91b2d366f1921073962909ee801b9bf75d765c83c2bdc1b200daa672`、dirty snapshot `4c37dad3da764723de9a6125b420ade4bfe93bcc12996d698e1ca53aab3c0be2`（main 基线 `4d952b907ef4823db7b5e9792726c80a4226eeb8`，cache 85）。这是供用户回看的工程证据索引；本文件不记录用户批准。

“完成所有 change 任务”授权继续实施，不等于用户已经检查当前页面或逐项批准新的组件组合。OpenSpec 当前仍有未完成的确认任务：`evolve-catalog-tags` 3.4（11/12）、`add-modular-2d-composition` 3.4/5.4（22/24）、`upgrade-randomizer-to-rendered-recipes` 5.4/5.5（16/18）；`add-composition-visual-regression` 3.4（21/22）的工程覆盖总览已整理在本轮收口报告中，尚待记录版本绑定的用户确认。不要仅凭构建、Canvas 捕获、既有模板确认或先前对耳机旧版的反馈勾选它们。

## 工程实现与证据边界

- 标签目录和图库/工作台筛选已实现。v84 `browser-core/report.json` 记录桌面及 320/390/768 px 的标签查询、隔离和焦点行为，绑定 cache 84/source `sha256:b25be9f918395b4113d1ab11a3a3b84e60306d72352812ddca894612a4843f9f`。cache 85 当前本地页面复查现已完成并冻结：1440/320/390/768 px 均通过，确认图库 15 项、筛选结果 3 项、空结果态、浏览时作品不变、关闭后焦点恢复及无溢出。见 [browser report](browser/report.json)、[截图目录](browser/)及 [source-after manifest](../source-after.json)。
- v84 随机器浏览器记录覆盖首页、图库、工作台入口以及候选预载/锁定/应用流程；cache 85 随机弹窗也完成四视口本地页面检查。冻结的 v85 `random-applied.png` 是 Grok 青绿方形完整模板，证明默认模板随机能产出真实透明 PNG；它不是模块拼装结果。当前代码仍使用共享 resolver；模块候选必须同时满足适配批准、发布资格和 `defaultEligible=true`。
- 当前模块目录是 3 个基础设计、4 个单件适配、5 条配方（其中 1 条为耳机与眼镜共存组合）。v85 模块 Canvas 图鉴 5/5 工程捕获通过；人工协调检查和批准分别记录，当前 `approvedRecipeCount=0`、`eligibleDefaultRecipeCount=0`，故模块候选没有进入默认随机池。工程 pass 仅证明登记配方能解算并生成透明 Canvas。
- 即使用户稍后批准某条配方，批准本身也不会自动把它放入默认随机池：该配方目前 `defaultEligible=false`，素材发布状态为 `internal`。只有明确更新默认资格/发布状态并重新核对实际随机结果后，模块才可加入默认池；不能把美术批准等同于公开/随机发布。
- 已保存的 `module-atlas-page.png` 曾显示空白的围巾卡片，而对应输出 `module-004.png` 有柴犬与围巾。cache 85 的本地页面复查已正式记录且未复现空白缩略图；五条 Canvas 均已就绪，实际透明合成没有发现光晕。当前截图在 [browser/](browser/)；旧截图只保留为捕获时的记录，不据此断定当前页面存在缺陷。五条配方的美术批准仍为 pending。Chrome 154.0.8037.98，页面错误与功能控制台错误均为 0；favicon 404 是单列开发告警，见 [network-probe.json](browser/network-probe.json)。
- 旧版蓝白 Dots 耳机组合的拒绝记录绑定耳机 v1.1.0/SHA `95da32…`; 当前耳机适配使用 v2.0.0/SHA `752814…`。旧意见不自动批准或否决新版本；新版本需基于实际输出重新确认。

## 建议一次查看的最小页面与结果

1. **当前站点的首页与图库/工作台标签浏览**：确认首页原群像、卡片和搜索/场景筛选保持原样（背景功能入口已按要求移除），并查看图库与工作台的标签查询、结果和明确载入作品的动作。当前 source 的首页截图为 [1440](../../current-20261006-v85/browser-alpha/home-1440.png)、[390](../../current-20261006-v85/browser-alpha/home-390.png)；工作台截图为 [1440](../../current-20261006-v85/browser-alpha/workspace-ui-1440.png)、[390](../../current-20261006-v85/browser-alpha/workspace-ui-390.png)。这些工作台图显示当前 Dots 试用耳机，不代表组件已获批准。cache 85 标签页面截图：[1440](browser/tags-1440.png)、[768](browser/tags-768.png)、[390](browser/tags-390.png)、[320](browser/tags-320.png)；空结果截图：[1440](browser/empty-1440.png)、[768](browser/empty-768.png)、[390](browser/empty-390.png)、[320](browser/empty-320.png)。
2. **当前随机结果**：确认当前全局随机流程与实际结果。cache 85 随机弹窗截图：[1440](browser/random-1440.png)、[768](browser/random-768.png)、[390](browser/random-390.png)、[320](browser/random-320.png)。实际 PNG 为 [random-applied.png](../../current-20261006-v85/browser-alpha/random-applied.png)；PNG 四角透明、含可见角色像素。该文件是透明结果图，不是弹窗 UI 截图，也不是模块拼装结果。v84 随机交互页面截图（较早 source）见 [random-gallery-result-desktop.png](../../current-20261006-v84/browser-random-main/random-gallery-result-desktop.png)。
3. **五条当前模块配方**：逐项查看 cache 85 的真实 1254×1254 Canvas 输出，并对比例、接触、遮挡、材质光照、配色作接受、退回修正或暂缓决定。当前页面比较图含[浅色组装图](browser/module-grid-light.png)、[深色组装图](browser/module-grid-dark.png)、[棋盘透明背景组装图](browser/module-grid-checker.png)，单件有 light/dark/detail 截图供查看遮挡与接触：

   | 配方 | 实际组合 | 当前输出 |
   | --- | --- | --- |
   | `pilot-headphones-v1-on-candidate-dots-20261005-bare-classic` v2.0.0 | Dots 裸形 + 石墨紫绒耳机 | [module-001.png](../../current-20261006-v85/module-canvas/canvas/module-001.png) |
   | `pilot-headphones-v1-on-candidate-humans-20261005-classic` v2.0.0 | 栗发人物 + 石墨紫绒耳机 | [module-002.png](../../current-20261006-v85/module-canvas/canvas/module-002.png) |
   | `pilot-round-glasses-v1-on-candidate-humans-20261005-classic` v1.0.0 | 栗发人物 + 圆框眼镜 | [module-003.png](../../current-20261006-v85/module-canvas/canvas/module-003.png) |
   | `pilot-knit-scarf-v1-on-candidate-animals-20261005-classic` v1.0.0 | 柴犬 + 青绿围巾 | [module-004.png](../../current-20261006-v85/module-canvas/canvas/module-004.png) |
   | `pilot-headphones-and-round-glasses-on-candidate-humans-20261005-classic` v1.0.0 | 栗发人物 + 耳机 + 圆框眼镜 | [module-005.png](../../current-20261006-v85/module-canvas/canvas/module-005.png) |

   当前每项五个协调检查均为 `unreviewed`，批准记录为空；明确按配方 ID 和本次素材 hash 留下决定后，才可更新批准状态和随机池资格。接受耳机单件不自动批准耳机+眼镜共存配方。

## 人工确认记录规则

后续确认须记录用户实际检查的页面/结果、source/cache、look/配方 ID、素材 SHA、视角/姿态，以及接受、拒绝或需修改的结论。标签目录确认和五条模块配方批准是不同决定。未得到明确结论的项目保持 pending；本清单不自动勾选 OpenSpec 任务。
