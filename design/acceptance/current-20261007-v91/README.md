# Cache 91 验收修复证据

**状态：** 本轮 P0 交互修复的工程验证通过；视觉/美术验收仍待用户确认。当前记录不是完整端到端验收签字。

证据绑定到基线提交 `de9a030d8353821b098210c1f6ca5feb2c26662f`（Site 41 / cache 90）之上的 dirty source cache 91。`source-manifest.json` 记录了 78 个输入文件；构建快照组装了 77 个 `dist/` 文件及原 Site hosting 配置。原有 15 张 Artwork 未被替换；新增的揭晓展示资源与它们分开登记。源码和构建记录见 [source manifest](source-manifest.json)、[build report](build/report.json) 和 [Site assembly receipt](closeout/site-assembly.json)。

本轮页面证据来自 Chromium 的 **390 × 844 CSS 模拟视口**，不是实体 iPhone Safari。交互错误记录为空，但这不能代替用户对角色图、展示示意图和页面截图的视觉批准。Site 42 / cache91 已部署成功，回执见 [deployment](closeout/deployment.json)；实体 Safari 复测和目标平台导入验证仍待完成；当前 OpenSpec change 保持验收阶段，不归档。本轮没有提交 GitHub。

## 修复结果

- **普通动画：** 六张特征卡按 1→6 顺序停止；进入无结果的 `awaiting-reveal` 边界后才显示完整作品。A–D 阶段结果始终隐藏。
- **减少动态：** 静态呈现同一组六张特征卡，不运行滚动动画；结果保持隐藏，用户操作“揭晓伙伴”后才出现。
- **主动跳过：** 仍使用已经冻结的 Artwork 和特征，只结束动画；不重新抽取。六卡停止后仍经过 `awaiting-reveal`，再显示结果。
- **结果层级：** 揭晓摘要在完整角色与操作之前保留；主操作是复制 Prompt、下载图片，次级操作为再来一款、详情和 ChatGPT。
- **重抽滚动复位：** 直接对真实滚动容器复位，且不因焦点跳转到旧结果。390 × 844 CSS 视口实测：灵感游戏横向轨道 `418 → 0`；弹窗横向轨道 `384 → 0`，弹窗正文 `overlayBody.scrollTop 134 → 0`，dialog 与 view 均为 `0`。
- **异步隔离与下载：** close/reopen、重抽和资源取消测试未见迟到回调污染；剪贴板 Prompt 和原图下载与各自冻结 Artwork 绑定。测试记录包括目录/抽取/揭晓、构建、浏览器和实际 PNG alpha 检查，详见 [测试索引](tests/npm-test.log)、[浏览器报告](browser/report.json)、[步骤状态](process/steps.json) 和 [下载 alpha 检查](tests/download-alpha-report.log)。

这些是工程行为证据，不表示新视觉素材已获批准，新示意资源的视觉批准仍待用户确认；Site 发布状态由独立回执证明。

## 390 × 844 CSS 视口的逐步证据

每张截图及录屏都绑定到本目录的 dirty-source cache 91。字段 `data-display-result` 对应页面状态属性；`result.hidden / computed display` 分别记录隐藏属性和计算样式。A–G 的 overlay body、dialog、view 垂直滚动位置均为 0；动态模式下 `prefers-reduced-motion` 为 `false`，F 为 `true`。

| 步骤 | 证据 | phase / activeSlot | data-display-result | result.hidden / computed display | reduce |
|---|---|---|---|---|---|
| A 等待卡 | [截图](process/A-ready.png) | `ready` / `-1` | `false` | `true` / `none` | `false` |
| B 第一张揭晓 | [截图](process/B-first-revealing.png) | `revealing` / `0` | `false` | `true` / `none` | `false` |
| C 三张停止、第四张揭晓 | [截图](process/C-three-stopped-fourth-revealing.png) | `revealing` / `3` | `false` | `true` / `none` | `false` |
| D 六张全停，结果仍隐藏 | [截图](process/D-six-stopped-result-hidden.png) | `awaiting-reveal` / `-1` | `false` | `true` / `none` | `false` |
| E 揭晓伙伴 | [截图](process/E-partner-revealed.png) | `result` / `-1` | `true` | `false` / `flex` | `false` |
| F Reduce 静态六卡 | [截图](process/F-reduced-motion-static-six.png) | `awaiting-reveal` / `-1` | `false` | `true` / `none` | `true` |
| G 再来一款回到舞台 | [截图](process/G-reroll-stage.png) | `revealing` / `0` | `false` | `true` / `none` | `false` |

完整状态字段、滚动读数、冻结结果和下载绑定见 [steps.json](process/steps.json)；滚动轨道前后读数见 [reroll horizontal report](layout/reroll-horizontal-report.json)。G 截取于新一轮进入预载后开始滚动的阶段，reset 后舞台及弹窗正文滚动位置已归零。

同一视口的完整录屏：

- [普通动画（98 帧，7.821 秒）](process/normal-390.mp4)
- [Reduced Motion（21 帧，1.631 秒）](process/reduced-motion-390.mp4)
- [主动跳过（16 帧，1.264 秒）](process/skip-390.mp4)

## 素材、身份与目标能力边界

- 构建目录仍含 15 张 Artwork；本轮没有修改现存作品原图。普通图片下载核对实际来源字节，浏览器报告记录了 15 张下载的字节/hash 检查；独立下载-alpha 检查核验了 15 张 PNG 的 alpha。
- 目录登记了 **34 个老虎机揭晓展示资源**。它们是用于说明特征的展示图，不是可佩戴组件，也不参与合成最终角色。`revealVisualArtApproval` 为 `pending-user-review`；候选展示图不等同于艺术批准，截图和自动测试也不能替代用户审阅。
- 5 个候选动作姿态资源仍待逐项批准和登记为作品变体；当前已发布变体数为 0。没有真实可播放动画文件，也没有 Pet sprite sheet 或目标安装包。无对应资源时不宣称已具备动作/动画能力。
- 目标资料只支持已记录的文档级事实；Dot/Pet 的实际导入、格式兼容和运行行为本轮均未在目标环境验证。普通静态 PNG 下载通过不等于 Dot/Pet 安装验证。详细状态见 [reference/detail report](reference-detail/report.json)。
- 本地参考图入口仍是提示词模板/用户在 ChatGPT 上传图片的路径；未使用视觉模型，也未自动附加或发送图片。

## 未完成项与验收状态

1. 用户确认 34 个揭晓展示资源及页面视觉；候选素材始终标为待审。
2. 实体 iPhone Safari 的地址栏、焦点、滚动和快速重开检查尚未执行；当前移动端数据仅为 CSS 模拟视口。
3. Dot/Pet 目标环境的导入与安装未测试；实际动作变体未逐项批准，真实动画包不存在。
4. 原 Site 已部署成功：**Site42 / cache91**，源提交 `d04f68f23a6425a46c81329587aa9fa1d2359b70`；原身份与访问范围保持。78项发布输入字节对应当前冻结源码；GitHub工作树仍未提交本轮改动。
5. OpenSpec change 未归档；没有 GitHub 提交。

机器可读汇总见 [closeout/acceptance-matrix.json](closeout/acceptance-matrix.json)。旧失败尝试保存在 `.tmp/cache91-qa-debug`，原因记于 [failure history](tests/failure-history.json)；本记录不复制那些失败尝试的截图或下载文件，也不将它们改记为通过。
