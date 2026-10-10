# Proposal

## Why

用户最新裁决取消露台首页与纯 Prompt 修改：Dots 以深色角色库为首页，在同一角色面板内查看和真实有限编辑。当前 v98 的实体场景、独立画廊入口，以及详情等待原图校验的链路不满足这一方向。

## What Changes

- **BREAKING**：角色库成为唯一页面与导航入口，D01 是唯一主稿，D02 仅补手机细节；移除 Guide 页面与导航。首页 banner 保持 D01 左文右群像、大角色约占60%的构图，左侧标题为两行渐变文案“Make It / Your Dot.”；中文两行为“创造”/“你的Dot.”，浏览器标题精确为“创造你的Dot.”。短介绍为英文“Pick a character. Make it yours in ChatGPT.”、中文“挑选角色，在 ChatGPT 中创作。”，Hero 不显示通用 Copy Dots Prompt 按钮。1440px 桌面高度约440–500px；D03 只更新 Hero 标语与群像要求，不覆盖 D01 其他页面或 D02 手机补充。最终群像包含独立机器人、戴紫色耳机并系黄色领带的兔子、人物与 Meta Muse；机器人为独立身份，不将 Grok Bot 改成屏幕脸，Dots/Grok 仍无手脚。专用 Hero 插画可含 D01 暗色展示台与微光，只作为待审 UI 装饰素材，不登记为 Artwork、不为图中角色授予 Artwork pending/approved 状态，也不进入角色卡、Studio 或 PNG 导出；不得恢复旧露台、庭院、城市、台阶、实体房间、独立宣传首页、场景型长 Hero 或独立工作台。
- 品牌改为 **Dots**，目标地址采用用户提供的 `https://dots.liuzhihang.chatgpt.site`；保持原 Sites 项目身份及访问设置，本轮不操作远端。
- 单一 CharacterStudio 承载静态详情或直接编辑；桌面一个面板，手机一个全屏面板，Artwork 直链不带 mode，面板继承网站语言。打开精确获批 Template 作品后自动载入真实模板与可视选项，同一成功像素预览直接编辑/导出；不设 View/Edit 标签。整个面板为烟色玻璃，header 轻薄无独立底色和分隔线；相关角色紧跟预览、紧凑固定宽度左对齐。Copy Prompt 与 ChatGPT 为主操作，Export 为次级操作；无 Template 时 Export 返回原始字节，编辑时只返回最新成功 PNG，不另设原图按钮或 Reset/Cancel 控件。
- 编辑区标题为“微调作品”，简短说明预览与 Prompt 随选择同步更新；一级能力分类为 Appearance（外观）、Face（五官）、Clothing（服装）、Accessories（配饰）、Objects（物品），只呈现真实非空组。当前模板仅有 Appearance/Color、Face/Eyes、Accessories/{Glasses,Accessory}；不改 option field key 或 recipe。待审长文案移除，pending 状态与资格仍由作品元数据/外部 reviewHarness 管理，不要求新增编辑器 badge。角色显示名去掉重复系列后缀，Meta Muse 显示为 Muse，系列描边标签与名字同行。
- 新增受控 Template 与独立内存 Draft：真实更改已适配选项，预览和透明 PNG 导出绑定同一配方与 revision。先完成一套 Dots、一套 Grok 代表模板，素材缺口与美术确认独立跟踪。
- 保留五系列、搜索与单系列筛选、原始 Prompt、实际已有变体/动画、EN/zh-CN。一个额外要求文本框替代逐项 keep/remove/replace 与折叠二创区；统一 Prompt 为原 Prompt 或最近成功配置 Prompt 加用户额外要求，额外要求不改变本地像素。ChatGPT 不自动附图或发送。
- 五系列均提供多个独立外观：首批目标各4件、共20件（冻结现有15件，每类新增1件）。新5件分别制作、登记、验收和批准；20不是未来上限，两套模板的28个Draft配方不计入作品数。沉淀角色新增规范、Brief、来源/艺术标准和共用组件契约，后续增加作品以资源与静态内容为主，不添加专用页面或角色分支。
- **BREAKING**：旧随机、揭晓、万能组装、场景运行模块和旧路由/schema/storage 兼容退出活动依赖；批准原图、来源和历史证据保留。
- 删除原型误生的收藏、统计、额外导航、底座及虚假能力，按批准母版纠正 Grok/Muse/Dots 身份。

## Capabilities

### New Capabilities

- `bounded-character-editing`：有资源及批准边界的有限模板编辑、Draft 生命周期、合法组合与透明导出。

### Modified Capabilities

- `artwork-catalog`：静态内容版本、八类事实、原图与 Draft 隔离、发布与候选资格。
- `catalog-tags`：角色库单文本与单系列查询、最多四个精选事实、无独立首页专题。
- `family-navigation`：唯一角色库页面与共用 Studio、语言继承、直链/返回/脏草稿保护。
- `studio-creation-experience`：单一 CharacterStudio 的直接编辑/静态详情、两项主操作与次级 Export、渐进加载、请求生命周期与相关角色位置。
- `studio-visual-experience`：D01 深色数字画布、左侧多行渐变标题与右侧角色群像 banner、专用 pending Hero 插画内的暗色展示台/微光、半透明烟色玻璃及可读降级、D02 手机补充、无 Guide 页面、响应式与发布闭包。
- `reference-creation`：组合 Prompt、单一额外要求字段、用户控制的 ChatGPT 交接及失败恢复。
- `character-contact-and-motion`：受控编辑接触/遮挡、透明导出、真实动态边界。
- `character-families`：五系列身份与独立模板/页面艺术批准。
- `character-visual-acceptance`：原型裁决、模板和页面证据、性能实验、候选及历史状态。
- `target-resources`：原图与新 Draft PNG 分流、静态结果不继承动画或 Pet 资格。
- `fullscreen-randomizer`：保留全量退出 delta，不再运行随机或揭晓。

## Non-goals

无用户上传/站内选图、数据库/IndexedDB 内容库、账号/收藏、后台 CMS/MCP、模型调用/聊天、公共投稿、万能配件适配、3D、全量成品穷举、旧数据/路由迁移。不上新框架，不升级依赖或 OpenSpec。

## Impact

沿用现有 ESM/Vite 静态项目，按文件表修订 `dist/` 页面、目录、详情、路由、加载和测试，新增受控模板/渲染模块；`dist/` 是源码，不能整体清空。15 张批准原图保持原字节；旧场景和历史审阅保留到历史范围。

沿用 change ID `simplify-reveal-cards-and-staging`，本轮主题为“暗色角色库与统一角色面板”。旧 v98 规划已原字节留存于 [history/2026-10-10-before-dark-gallery](history/2026-10-10-before-dark-gallery/README.md)，46/48 不继承为新实现进度。完整裁决、内容模型、能力/缺口、文件表及原验收见 [planning/dark-gallery-20261010](planning/dark-gallery-20261010/README.md)。用户已授权本地 apply 与验证；新增第11组 CR 任务全部保持未勾选，7.4 用户美术确认仍未完成，旧历史验收不覆盖。本 change 不授权提交、推送、Sites保存/部署、改访问设置、sync 或 archive。

素材制作与本地 apply 已获用户授权；保留候选、未选迭代、原15件批准素材与D01/D02裁决。当前最新 UI CR 在第11组跟踪，相关任务与验收仍未完成；本 change 不授权提交、推送、Sites保存/部署、访问设置更改、sync 或 archive。

多外观及长期维护补充授权：已制作[五件独立外观候选](planning/gallery-expansion-20261010/README.md)，并建立项目内[角色新增规范](../../../design/character-authoring/README.md)与 `dots-add-character` skill。新增候选是否进入默认目录及每件作品/页面/模板的批准范围仍按独立验收记录判断；组件文档随当前 CR 修订。
