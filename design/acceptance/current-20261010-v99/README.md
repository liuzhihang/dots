# Dots v99 本地验收

2026-10-10。活动 change：`simplify-reveal-cards-and-staging`，OpenSpec 1.14.1 / spec-driven。实现以最新深色图库裁决为准，继续原 ID；未 sync 或 archive。当前工程结果供本地审阅，艺术批准独立记录。

此前整轮进度为42/43。用户随后追加两件基础 Characters 与无网格展示，当前进度45/46，仅用户艺术确认未完成；追加证据见 [补充验收](builtins-no-grid-20261010/README.md)；任务状态以当前 tasks.md 为准，用户艺术确认仍独立保持未完成。完整[最终编辑报告与录屏](editor/README.md)、[精确艺术审阅范围](art-approval-review.md)和[最终保护检查](verification/safety-final.json)均可回读；这不是发布完成声明。

## 直接审阅

- 运行 `npm run dev` 后，首页：`http://127.0.0.1:5180/#/`。
- 运行 `npm run dev:review` 后，Dots 编辑：`http://127.0.0.1:5182/__dots_review__/#/artwork/candidate-dots-20261005?v=v2&mode=edit`。
- 同一审阅服务器的 Grok 编辑：`http://127.0.0.1:5182/__dots_review__/#/artwork/candidate-grok-20261005?v=v2&mode=edit`。
- 审阅入口仅由 `scripts/serve-review.mjs` 提供，位于发布树之外。正式入口不借助 query 或 storage 绕过模板批准。
- [五个新增外观的深/白底审阅图](visual/new-artworks-review.png)、[D01 对照](visual/D01-combined-comparison.png)、[D02 对照](visual/D02-combined-comparison.png)。
- [精确艺术审阅清单](art-approval-review.md)分别记录新页面、五件成品、两套默认 Draft 和全部合法配方；批准不从技术测试推断。
- [角色新增规范和流程](../../character-authoring/README.md)、[组件契约](../../character-authoring/components.md)支持后续会话逐件扩展。

## 完成范围

角色库即首页；五系列文本搜索/筛选/排序；同一 CharacterStudio 的 View/Edit；双语轻量指南。详情点击先显示封面、事实和操作，再按需加载展示预览。两套模板真实支持颜色、眼型、眼镜及指定配件，Shape 明确固定；Draft 与 Artwork 隔离，透明 PNG 导出与原图下载是两条操作。

编辑选项采用实际颜色色块与真实图层缩略图，文字只作辅助；无文字下拉框，透明素材缩略图使用纯色底，不显示棋盘网格。选中、键盘焦点、加载失败和重试都有明确状态，四种视口与双语下均保留可达操作。Dots 与 Grok 的所有外观和 Prompt 均保持无手脚；用户提供的[十张身份参考](identity-reference-20261010/README.md)已按用途和来源登记。

15 个既有批准作品保持原图字节。新增五件作品各属于一个系列，不把换色配方当作独立作品；其后追加青柠蛙领结、粉心墨镜两件基础外观，连同原有两个候选，共九件 pending。每系列原有三个独立外观，五件新作通过艺术批准后每系列四个。两套 pending 模板有 Dots 12 / Grok 16 合法配方，Dots 耳机加眼镜四种组合明确拒绝，不能静默删除选项。

## 验证证据

| 检查 | 结果与证据 |
|---|---|
| 基线及保护 | [apply-baseline.json](apply-baseline.json)，保护 HEAD、配置、15 原图和历史；59 个旧源码文件逐字节保留，六条明确退役路径可追溯 |
| 构建闭包 | [最终构建](verification/build-final.json)：146 个文件、14 个真实模板源图层，manifest 与 dist 精确相等；`deploymentReady: false` |
| 完整工程测试 | [npm test](verification/npm-test-final.json)：目录、查询、18 个详情场景、8 个 motion 原因、发布闭包、路由、7 个 History 场景、模板、Draft/Canvas、loader、8 个新增角色扩展用例及保护检查 |
| 页面与下载 | [最终浏览器命令](verification/browser-final.json)、[浏览器报告](browser/report.json)，四视口 × 双语、25 张截图、22 份实际原图下载；[下载验证](verification/downloads-final.json)记录原始 PNG 的字节与 alpha |
| 无障碍与可视选项 | [contrast.json](accessibility/contrast.json)：48 项真实合成背景检查；[编辑布局](editor-layout/report.json)：16 个布局、48 张截图及128项选项文案/边界对比度检查。文字达到 4.5:1，边界/焦点达到 3:1；实际缩略图、键盘 Space、44px 操作可达 |
| 普通查看性能 | [最终性能命令](verification/performance-final.json)、[performance/report.json](performance/report.json)：桌面/受控慢网手机各冷/热五样本，20 次开关循环；普通 View 不请求原图或编辑模块；销毁后 leases、请求、Bitmap、Blob URL 与解码字节归零 |
| 真实模板 | [最终工程/录屏索引](editor/README.md)、[最终命令](verification/editing-final.json)：28 张真实图层合成透明 PNG，全部预览/导出hash相同；两套连续录屏、20 次循环、竞态与重试通过，错误日志0 |
| 规范与最终回读 | [change 严格校验](verification/openspec-change-final.json)、[全部规范严格校验](verification/openspec-all-final.json)、[最终发布闭包](verification/final-closure-readback.json)；源登记、构建和146个文件的字节/hash相符 |
| 原型逐区复核 | [design-qa.md](../../../design-qa.md)：D01 为唯一主稿，D02 只补手机和指南；所有原型非需求按裁决移除 |

性能是实验室 click-to-panel，不是现场 INP。最终桌面冷/热中位数约 6.3/2.1ms；4 倍 CPU 限速、150ms 延迟、1.6Mbps 手机冷/热约 23.8/9.0ms。慢网高清预览中位约 2.2 秒，操作先可用。资源缓存上限 64MiB、16 个空闲条目、四并发；缓存保留和最终销毁分别检查。

## 批准和未测边界

新五件 Artwork、新默认 Draft、28 配方及新页面均需按精确版本单独艺术确认。母图的历史批准不自动扩展到这些对象；`deploymentReady: false`。静态 Draft 不产生动画、变体目录或 Pet 包。生产目录没有可伪称为已有动画的资源。

源素材登记和 Template 资格仍保持冻结时的 `engineeringStatus: pending`、`artApproval: pending`，未自动晋升公开编辑资格。工程执行结果由绑定精确来源 manifest SHA 的最终报告记录；它与源登记时的状态、用户艺术批准是不同证据。以后授予公开资格时须引用对应报告并明确更新状态，不能只改一个按钮或 URL。

实际本地 Chrome 和 Codex 内嵌浏览器已检查。Safari、Firefox、实体 iOS/Android、安全区硬件与线上域名本轮未测。没有提交、推送、部署、同步规范或归档；Sites 身份/访问设置、OpenSpec 根配置与依赖版本保持。

## 执行记录补充

编辑录屏使用 Playwright 的真实浏览器视频。执行过程中为录屏下载了 Playwright 官方 FFmpeg 辅助缓存到 `~/Library/Caches/ms-playwright/ffmpeg-1011`；不属于项目依赖，未修改 lockfile，未擅自清理共享缓存。素材修正试验中被拒绝的输出保存在 `materials/unselected/`，未覆盖已登记候选。失败记录、旧验收和原型来源均保留。
