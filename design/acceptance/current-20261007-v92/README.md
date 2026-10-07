# cache92 有限组合与即时随机候选

日期：2026-10-07。基线：`main@de9a030d8353821b098210c1f6ca5feb2c26662f` + 当前未提交工作树。当前 change 继续验收，不归档。

## 本轮变化

- 首页/画廊随机单击即开场。后台准备图片时显示卡背洗牌；资源就绪后六类实际候选依次停止，再揭晓同一完整作品。
- 不再向用户解释“已选定/校验原图/六类真实特征”等内部步骤。减少动态时不洗牌、不滚动，六张静态特征之后由“揭晓伙伴”进入结果。
- 有限设计组合以已登记完整 Artwork 为单位。当前15套成品，Dots和Grok各3套；不将颜色、形状、眼型、服饰的交叉排列假算成已有作品。[逐件盘点](../../../openspec/changes/refocus-studio-on-gallery-and-card-reveal/planning/bounded-combinations.md)记录实际覆盖与内容缺口。
- 手机缩短首页留白、收起次级筛选、自然排列详情标签，保留完整预览及靠前的复制/下载；随机六项摘要仍在角色上方，主次操作分明。
- 57个发布资源与v91字节完全一致。本轮没有重画角色；34个独立特征说明资源仍是候选，等待用户艺术确认。

## 证据和边界

- [输入](input-boundary.json)：本轮6张用户参考图的路径与hash；未复制为产品素材。
- [发布源文件](source-manifest.json)：78个明确路径，含57个资源与hosting配置；不是整个仓库打包。
- [构建](build/report.json)、[最终单测](tests/npm-test.log)、[OpenSpec](tests/openspec-final.log)。
- [实页审查](ui-review.md)：修改前后证据及本轮UI问题，不替代用户视觉签字。
- [即刻开场](instant-random/report.json)：390 CSS px，真实资源延迟3秒；卡背轨道已运动、结果隐藏，图库查询/详情返回/Reduce一致。
- [参考图和详情](reference-detail/report.json)：文字模板、错误反馈、原图/Prompt绑定及测试变体；测试fixture不是新增公开作品。
- [独立复核](closeout/independent-review.md)、[保护范围](closeout/source-protection.json)。

## 最终工程与发布状态

| 范围 | 本轮结果 | 证据 |
| --- | --- | --- |
| 目录、查询、draw、状态机、参考图/详情 | 最终 `npm test` 通过；参考图/详情专项15项 | `tests/npm-test.log`、`reference-detail/report.json` |
| 构建 | 最终CSS修正后重新通过；15 Artwork / 57资源 / 20模块及样式入口 | `tests/build-final.log`、`build/report.json` |
| 单击即刻随机、慢网、查询恢复、reduce | 4项通过 | `instant-random/report.json` |
| 完整浏览器回归 | 28项、4种模拟视口通过；页面/console错误0，退休资源45条不被加载且直接请求404 | `browser/report.json` |
| 实际下载 | 15张浏览器下载原图的字节、hash、尺寸和真实alpha通过；另保留3份完整过程下载PNG | `browser/download-alpha.json`、`process/steps.json` |
| 最终布局 | 1440/1280/768/390/320 × modal/game = 10组通过；手机背景铺满，重抽归零 | `layout/reveal-layout-report.json`、`tests/layout-final.log` |
| 最终全过程 | 390×844，A–G、normal/reduce/skip三条路径通过；D六停仍隐藏，E才出现成品，reduce等手动揭晓 | `process/steps.json`、`tests/process-final.log` |
| OpenSpec | 15项strict通过；任务55/64，9项人工/完整验收仍pending | `tests/openspec-final.log`、`closeout/openspec-state.json` |
| 原站发布 | **Site43/cache92 succeeded**，原访问策略完全不变 | `closeout/deployment.json` |

站点：[Dot Icon Studio](https://dot.liuzhihang.chatgpt.site)。Sites源commit `8dea7e06dbbf39e982959a0897db2f6f700963e3`；本地上传归档78项逐文件与最终source manifest匹配，原生保存版本回读的source commit及文件数量一致。服务端 `content_hash` 不等同本地原始tar字节哈希，未将不同归档表示作伪等值断言，边界记录在部署收据。

线上内嵌浏览器停在原有 **Log in to access** 入口，见 `closeout/live-access-gate.jpg`；没有修改权限，也没有声称完成登录后的线上点击回归。页面回归与截图来自本地真实网页；390/320/768是模拟CSS视口，不是实体iPhone。历史v90/v91记录没有被本轮通过状态覆盖。

过程录屏：[普通动画](process/normal-390.mp4) · [减少动态](process/reduced-motion-390.mp4) · [主动跳过](process/skip-390.mp4)。每段均有同名timeline，记录phase、activeSlot、result可见性、各层scrollTop与motion偏好；`steps.json`对应A–G截图和冻结作品/原图/Prompt。

## 测试调整记录

`tests/npm-test-attempt01.log` 保留旧空池文案断言失败；后续断言改用新用户文案，硬锁AND测试保留。`tests/npm-test-attempt02.log` 保留目标资料移入折叠区后旧可见文本断言失败；后续先验证初始折叠，再展开验证准确文本。最终 `npm-test.log` 为通过记录，不隐藏这两次失败。

`tests/layout-attempt01.log` 保留未提供视口环境变量时的测试参数解析错误；已修正空字符串转0的问题。完整browser前两次在等待卡DOM结构旧断言处停止，日志及局部画面保留；后续断言按实页的6个窗口/18个卡背节点检查，空池无动画/无结果的断言仍在。

首次过程/布局截图发现手机等待态底部背景接缝，最终只将手机随机面板的 `min-height:100%` 改为 `100dvh`。修改前证据保存在 `process-before-surface-fix/`、`layout-before-surface-fix/`；最终构建和重新采集的过程/布局在主目录。`closeout/source-manifest-before-surface-fix.json` 绑定修改前快照，最终 `source-manifest.json` 与它仅此CSS文件不同，JS和57个资源均不变；完整browser功能回归对应修改前快照，最终布局/过程覆盖该CSS修正。

若要重验15张作品的浏览器下载原字节与透明通道，先运行 `npm run test:browser`，再运行 `npm run test:downloads`。Browser 会把 Playwright 实际下载文件保留在 Git 忽略的 `.tmp/cache92-browser-downloads-*` 中，并将相对路径写入本目录 `browser/report.json`；下载检查从这些文件读取字节，不根据 JSON 中的哈希声明替代文件验证。成功后结果写入 `browser/download-alpha.json`。不要在两条命令之间清除对应 `.tmp` 目录。

## 未确认项目

工程、文件存在、真实资源、用户美术批准、目标平台验证和发布是分别记录的状态。34个候选特征视觉、更多有限组合、实体Safari和用户最终视觉签字仍待完成；未新做Pet包、动画或站内视觉模型分析。GitHub未提交，主规格未同步，change未归档。
