# 验收计划（全部待 apply 执行）

本轮仅文档与严格规范校验；以下工程/浏览器/性能/美术/设备/部署没有因规划而通过。旧v98证据只作基线。apply时创建新 `design/acceptance/current-20261010-v99/`（若日期/revision变化先登记新目录），不写入v96/v97/v98。

## 环境与证据

记录HEAD/dirty、scope manifest、cache、全部资源hash、浏览器/版本、OS/CPU/内存、viewport CSS与DPR、网络/CPU限速、缓存状态、是否实体设备、是否实际部署。建议本机Chrome与Safari各跑核心行为，Chrome作可重复限速性能环境；若Safari/实体设备不可用明确未测，不把模拟器当真机。证据包含截图、交互录屏、原始性能样本、Network、下载/导出文件回读和manifest；不只截图或build。

## 功能/视觉矩阵

| ID | 操作/输入 | 完成条件 | 证据 |
|---|---|---|---|
| G01 | 1440×900首次打开#/? | 品牌Dots，canonical/og:url为用户给定Dots地址；D01 banner左侧多行大标题、右侧约60%大角色群像，桌面约440–500px高；短介绍区域保持紧凑但不限制整体banner；首屏完整一排真实作品；无旧实体场景/卡片或Studio底座/假统计/收藏/额外导航。D01展示台与微光仅可出现在单独pending UI Hero插画 | 实页逐区对照D01截图 |
| G02 | EN/zh-CN，search+series+sort，空结果与部分清空 | 五系列保留，多词AND、单系列AND；仅实际curated/name；无自动放宽 | 查询断言+实页操作 |
| G03 | 首批 20 个独立完整静态外观（五系列各4件：冻结15件每系列3件，加每系列1件新候选）及现有 pending 候选 | 保留冻结15件原图与批准范围；逐项检查 `dots-butter-beret`、`grok-coral-drop`、`muse-lavender-lantern`、`human-rust-jacket`、`animal-cocoa-bear` 五件新候选的来源、完整资源、元数据和独立美术批准；它们均无 Template，只有获批后才计入默认 Gallery，未完成/未批准时不混入默认 catalog、搜索或 tags。20是本轮目标而非永久上限；只按实际完整、批准、唯一的 Artwork 计数，排除 Draft、色卡、pose、截图和重复图。原2件 pending（白机器人/白兔）可信详情标待确认、机器人非Grok | catalog清单、逐件来源/批准记录、计数断言+截图 |
| G04 | data-only 新 Character + 完整 Artwork fixture（含 Asset、来源、双语元数据与 Prompt），不绑定 Template；另含 pending fixture | 新角色经共用数据模型即进入共用卡片、详情、搜索与 Prompt，无角色专用页面/条件分支；无 Template 时仍可静态查看、复制 Prompt、下载原图且不显示 Edit。pending fixture 不进入默认 catalog、搜索/tags或公开 Edit。动态批准目录计数随 fixture 增减，不依赖固定15条或硬编码20条 | fixture/目录断言+真实浏览器卡片、详情、搜索、Prompt、下载操作 |
| V01 | 点击、复开、同角色切态 | 一份Studio壳/身份/预览位置，图库未销毁；文字/操作不等原图 | DOM身份+录屏+时间线 |
| V02 | overlay/直链/刷新/关闭/Esc/Back/Forward | 无第二工作台；恢复query/series/sort/scroll/focus；缺触发器焦点安全落点 | router/浏览器测试 |
| V03 | 原图延迟10s、preview404/损坏、编辑模块失败 | 壳/metadata/Prompt可用，thumbnail保留；错误局部可重试；下载不伪成功 | 拦截请求与真实UI |
| E01 | 两套代表View→Edit→View→Edit | Original/Draft清楚，草稿同会话保留，语言切换不丢配置 | 两套录屏 |
| E02 | 改每个公开Color/Eyes/Glasses/Accessory | 真实像素变化局部正确，原Artwork/facts/Prompt/hash不变 | 文件与像素比较 |
| E03 | Dots 4种耳机+眼镜冲突、未知option/template、跨系列层 | 原配置保持，说明并确认合法替换；不静默丢选项/强贴 | 合法性负例+实页 |
| E04 | Dots摘耳机，Grok摘帽、恢复默认 | 真无配件基底，遮挡区域完整；default重建已单独批准 | 浅/深/棋盘格放大人工对照 |
| E05 | A→B→A、快速换选项+慢资源乱序、导出途中变化 | session/revision隔离；最新未成功禁导出；已开始导出固定点击时版本 | 可控延迟E2E+下载回读 |
| E06 | Reset/Cancel/View后关闭/切变体/Back/去Guide，dirty guard取消和放弃 | 所有出口一致；取消不丢草稿和URL；放弃只导航一次，释放对象 | 历史栈与焦点断言 |
| E07 | 无模板角色、无模板mode=edit直链 | 保留View/原下载/外部Prompt，不显示假Edit；两套试点仍必须实际完成 | catalog fixture+实页 |
| D01 | View原图下载，编辑后回View再次下载 | 冻结15件实际原字节/hash/尺寸/alpha均不变，不经重绘；另以当前动态已批准目录检查新增作品，不把15写成目录上限 | 下载文件回读+冻结基线与动态目录检查 |
| D02 | 两套编辑试点共28合法配方+交互导出 | 12个Dots与16个Grok合法配方逐项验证；这是Template编辑覆盖，不作为20件 Gallery 外观计数。当前成功recipe/revision正确，PNG有真实alpha和实际改动，无UI/棋盘格/地面影 | 自动渲染/文件回读+关键人工审阅 |
| D03 | 原Prompt/当前配置/ChatGPT-only，复制被拒、弹窗被阻止 | keep/remove/replace正确；原文不污染；失败可选全文/手动链接，不自动附图/发送 | 真实剪贴板/失败注入 |
| M01 | 真实动画fixture、offscreen/pageHidden/detailOpen/userPause/reduce | 暂停原因合并；未登记播放入口隐藏，生产0动画不虚增 | motion测试，fixture不发布 |
| M02 | Draft改配件后动作/目标包 | 无精确匹配则不继承动画/Pet资格；静态输出明确 | 能力断言+实页 |
| A01 | 1440×900、390×844、320×700、768×1024 × EN/zh-CN | 完整轮廓/可读文案/单滚动；safe-area/底栏/键盘焦点不遮挡；手机一次点开 | 8组核心视口语言截图+操作 |
| A02 | 键盘、reduce、减少透明/无blur、放大文本 | focus/Tab/Enter/Space/Esc可靠；背景inert、Dialog命名；合成背景正文/muted≥4.5:1、大字≥3:1，控件/focus各状态可辨且记录计算；操作不依赖动画 | 实页键盘与降级记录 |
| B01 | import graph/manifest/旧route/storage | 旧scene/random/workspace/compat不进入运行与发布；不读不删旧storage；无上传/DB/模型 | 静态图与网络/存储检查 |
| B02 | source/cache/原图/历史/hosting | manifest精确闭包，cache全一致；pending阻发布就绪；原图历史hosting版本不改 | 差异与hash回读 |

## 性能实验条件与门槛

1. **先测v98，再测新实现同环境。** 应用壳/目录已加载的可重复基线：1440×900、DPR1、无CPU限速/无网络限速；补390×844、DPR2、CPU4×与1.6Mbps下行/750Kbps上行/150ms RTT。记录工具实际可施加值，不用名称“慢网”替代参数。冷缓存清当前测试会话缓存而非用户数据，热缓存重复同key；各至少5次，报告所有样本/中位数/范围，若给p95明确小样本实验。
2. 时间点：click→panel-mounted→metadata/actions-ready→thumbnail-visible→detail-preview-ready→edit-ready；并报告首屏媒体字节、请求数、fetch/decode/compose长任务。panel-mounted目标≤100ms，任何>200ms定位修复后复验；操作与metadata不得依赖original请求。高清完成耗时单独报告，不混作INP。
3. 普通View不触发original fetch/hash、编辑模块、全部配件、全部变体/相关推荐；请求日志须能证明。复开同版本无不必要重复fetch/验证/decode；版本变更不复用旧内容。不能预载全部图库换热缓存成绩。
4. 20次开关/切角色/编辑，记录每轮活跃lease、pending请求、BlobURL、bitmap数量与JS/decoded内存；关闭并idle后活跃消费者/会话资源归零，保留缓存≤预算；不得随轮数单调无界增长。可缓存对象与泄漏分开解释。
5. 两消费者共享同key，取消一个另一个完成；全部取消后abort；失败/abort项可重新请求；晚到decode回收。模拟导出与下载持有lease时关闭面板，已启动操作版本仍固定且不提前revoke。

## 实施检查命令与新增覆盖

沿用 `npm run build`、`npm test`、`npm run test:browser`、`npm run test:downloads`，先按文件表更新硬编码v98/露台/禁止全部Canvas的断言，不降低真实验证。新增 `scripts/verify-edit-templates.mjs`、`verify-draft-renderer.mjs`、`verify-studio-performance.mjs` 及相关browser场景，接入现有package scripts，不升级依赖。模板完整性/合法配置/异步导出必须测试，不写仅镜像实现的断言。

运行 `openspec validate simplify-reveal-cards-and-staging --strict` 与 `openspec validate --all --strict`，检查准确标题引用和候选主规范语义，不以CLI通过代替冲突检查。主规范sync另行授权。

## 完成门槛

- 工程：上述核心路径/负例通过，28合法配方渲染/alpha/导出回读及两套真实交互闭环完成，性能目标达成；失败先修后复验。
- 视觉：D01逐区实页对照、D02手机指南、身份/短绒/接触/无底座核对；概念图与本地生成图不是实页证据。
- 美术：两套Template默认/新增选项/组合范围、新页面明确用户确认；保留pending直到确认，旧15件原图批准不扩大。
- 设备/目标/部署：各单独报告；当前未安排真实Pet制作。模拟通过不等于实体设备通过，Git提交不等于Sites部署。部署需另行授权。
- 一套模板失败或素材阻塞时总重构未完成；可交付独立已测工作，不把全站Prompt-only视为实现成功。
