# Design

## Context

动机和范围见 [proposal.md](proposal.md)。当前仓库是原生 ES Modules、CSS 与静态素材网站，基线 HEAD 为 `e6d21b4`、页面 cache 为110；本轮起始工作树干净，OpenSpec 根位于本仓库且没有其他活动 change。

已核对的实现与约束：

- `dist/index.html` 的页头顺序为品牌、唯一 `.studio-nav`（Characters）、搜索挂载点、语言下拉；页脚仅有品牌与短标语。
- `dist/studio.js` 只拦截 `a[href^="#/"]`，现有 HTTPS 外链无需接入 router；语言渲染已有 `[data-i18n]` 支持。
- `dist/studio.css` 的桌面搜索绝对居中，600px及以下搜索移到图库。增加右侧控件需核对中等宽度是否与搜索重叠。
- `dist/studio-overlay.js` 只移动唯一语言下拉到模态并在关闭时归位；`#pageShell` 在模态期间不可交互。
- 两份主规范分别限制“导航只提供 Characters”和“额外导航”；本 change 的两个 MODIFIED delta 已保留原 requirement 及原场景，只澄清两个真实外链的例外，现行主规范本轮不直接修改。
- 同一会话已核对 `liuzhihang/dots` 为公开仓库、Issues已启用、默认分支为main，尚无Issue模板。当前只读标签查询确认已有 `bug`、`enhancement`；不需要新增远端标签。

本设计需要覆盖页头布局、双语、GitHub表单与两个发布面的衔接，因此保留design文档。上轮首页截图只是现状证据，不是新增入口完成后的验收。

## Goals / Non-Goals

**Goals:**

- 用普通外链和三个短表单完成反馈交接，减少站内状态和维护成本。
- 保留唯一站内导航、单一模态、语言控件身份和角色浏览流程；明确本地、GitHub远端、Site三个验收面。

**Non-Goals:**

- 不建立站内反馈页、弹窗、登录、数据库、邮件、Discussions或自动提交服务；不自动携带搜索词、角色配置、Prompt、日志或图片。
- 不新增角色、美术素材或批准记录，不把形象需求当作制作授权；不改变Hero、图库、角色编辑与导出层级。
- 本阶段不写业务代码或实际Issue模板，不修改主规范、托管配置、依赖、Git分支或线上状态。

## Decisions

### 1. 将外链放在站内导航之外的辅助组

在 `#topbarSearchMount` 后、`#languagePreference` 前增加辅助外链组，`.studio-nav` 继续仅含Characters。外链用真实 `a` 元素、固定HTTPS目标、`target="_blank"` 和 `rel="noopener noreferrer"`；不提供 `data-page`、hash路由或点击处理器。页脚提供同样的两个目标。

这样可保留 `.studio-nav a` 数量为1的既有断言以及语言控件的归位顺序。相比把外链并入内部导航或另建反馈页，辅助组能明确站外用途，避免路由、当前页高亮和模态控制耦合。

Studio打开时外链仍在 `#pageShell` 内，不复制到模态标题栏、不进入焦点圈定。反馈发生在关闭Studio后；本次不承诺在编辑面板内直接反馈。

### 2. 按已有断点控制空间与双语

| 宽度 | 页头入口 | 布局 |
| --- | --- | --- |
| 大于1100px | GitHub、反馈建议 / Feedback | 辅助组紧邻语言下拉；核对居中搜索的可用空间 |
| 601–1100px | 反馈建议 / Feedback | 隐藏页头GitHub，页脚仍可访问；保留搜索与语言 |
| 351–600px | 反馈 / Feedback | 60px单行紧凑页头；隐藏品牌图片，仅保留Dots.文字字标与44px点击区；搜索沿现有逻辑置于图库 |
| 350px及以下 | 反馈 / Feedback | 保持60px单行；品牌、Characters、反馈、语言从左到右排列，保留12px页边距和20px字标 |

沿用已有颜色、字体、边框与focus样式；链接为次级文本入口，所有页头/页脚链接的实际目标至少44×44px，正文对比度至少4.5:1。页脚允许换行，不把说明挤入固定宽度。

外链组的文字及可访问说明接入 `dist/studio-i18n.js` 与已有 `[data-i18n]`，避免新增独立语言状态。每个外链提供“在新标签页打开 / Opens in a new tab”的可感知说明。页脚可见短说明为“通过 GitHub 提交，需登录；内容公开。” / “Submit on GitHub. Sign-in required; submissions are public.”；反馈链接的辅助说明也包含登录和公开性质，不依赖hover。

相比只放页脚，此方案让访客在首屏能发现反馈；相比Hero加按钮，它不与唯一浏览角色主操作竞争。移动端隐藏品牌图片以保留60px单行、完整反馈入口和44px点击区；最窄宽度继续使用12px页边距及20px字标。

### 3. 用三个YAML表单及一个选择器配置

后续apply创建以下文件，不在本轮创建实际配置：

| 文件 | 必填 | 选填 | 默认标题 / 标签 |
| --- | --- | --- | --- |
| `.github/ISSUE_TEMPLATE/01-bug.yml` | 实际表现、预期表现、复现步骤 | 页面/角色链接、环境、附件 | `[Bug] ` / `bug` |
| `.github/ISSUE_TEMPLATE/02-character-request.yml` | 想要的形象、关键外观特征 | 配色、服装/配饰、用途、参考链接/图片 | `[Character] ` / `enhancement` |
| `.github/ISSUE_TEMPLATE/03-suggestion.yml` | 当前问题或机会、期望结果 | 类别、页面、截图 | `[Suggestion] ` / `enhancement` |
| `.github/ISSUE_TEMPLATE/config.yml` | 不适用 | 不增加额外联系渠道 | `blank_issues_enabled: false` |

三个表单的名称、说明、字段标签用中文和英文同列；字段内容由用户自行选择语言。网站语言不驱动GitHub表单语言，不复制六个模板。用 `input`、`textarea`、可选 `dropdown` 与 `upload`；附件不设必填，建议类别可不选，形象不强制映射现有家族。

登录、公开提交、参考素材可公开分享、需求不保证采纳的说明放在GitHub表单可见的Markdown说明中。不增加必填邮箱、代码hash、开发日志、项目分配或自动assignee。`bug`、`enhancement` 复用已存在标签，表单种类通过标题和类别区分；不为细分统计新增远端设置。

反馈主入口固定到 `/issues/new/choose`，让用户按意图分类。无需额外网站菜单或三组首页按钮；将来若需要直达某一模板，可按文件名使用GitHub支持的模板参数，但本次不增加该交互。

依据：[GitHub模板与选择器配置](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)、[表单语法](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)。本会话核对的官方文档支持YAML、必填、下拉及upload；实际显示以远端验收为准。

### 4. 使用现有实现入口与检查

| 路径 | 后续实现用途 |
| --- | --- |
| `dist/index.html` | 页头/页脚链接、短说明和可访问描述 |
| `dist/studio.css` | 辅助组、断点隐藏、600px及以下60px单行页头、最窄宽度边距/字标及页脚换行 |
| `dist/studio-i18n.js` | 反馈完整/简短标签、外链提示和登录/公开文案 |
| 上表中的四个 `.github/ISSUE_TEMPLATE/` 文件 | GitHub表单与选择器，不属于网站静态资源 |
| `scripts/verify-studio-browser.mjs`、`scripts/verify-editor-layout.mjs` | 补充双语、外链目标与新标签页、布局/命中区、原图库状态不变断言；保留唯一内部导航及Hero断言 |
| `scripts/verify-studio-contrast.mjs` | 按现有结构将新文本入口纳入相关对比度核对 |
| `README.md`、`DEVELOPMENT.md` | 将已有反馈指引连接到分类入口，说明三个类别与登录/公开性质 |

默认无需修改 `dist/studio.js`、router或overlay。只使用现有本地化机制；若检查暴露必须修改属性本地化的具体缺口，再将该最小修补列明，不改路由或会话架构。

不新增本地图片或图标资源，使用文本外链。仅修改已有发布文件不改变 `design/static-publish-manifest.json` 的文件集合；四个GitHub配置、规划和QA输出不得加入manifest。缓存编号按真实交付阶段的既有统一流程处理，不在本提案指定新线上版本。

### 5. 验收分层

- 本地配置：使用当前环境已可用的Python/PyYAML解析四个文件，检查名称、说明、字段类型/ID、必填/选填、标签和选择器；不新增项目依赖或配置验证框架。解析通过不等于GitHub实际接受。
- 工程：后续apply运行 `npm test`、`npm run build`、`npm run test:browser` 和本change严格校验，处理受影响失败后重跑。既有浏览器自动化用于回归；实际页面观察优先内置Browser，不为本变更安装依赖。
- 页面：English/中文分别核对1440×900、768×1024、390×844、320×700；另核对1100/1101、600/601与350/351断点两侧，确认移动页头60px单行及品牌/Characters/反馈/语言顺序、反馈可见、44px目标、无重叠和横向溢出，并核对页脚、键盘焦点、外链新标签页及返回原图库状态。打开/关闭Studio时核对语言唯一性、背景外链不可交互及触发卡片焦点恢复。
- GitHub远端：只有在模板进入远端默认分支后，才检查实际选择器、三个表单、必填校验与附件入口，停在提交之前，不创建测试Issue。
- Site：只有在独立部署授权执行后，才核对线上入口、双语与目标；实体手机未测试就保留未覆盖说明。

## Risks / Trade-offs

- [GitHub账号和网络门槛] → 网站和表单明确登录/公开性质；原图库留在原标签页，本次不引入另一套反馈系统。
- [中间宽度搜索与新增入口重叠] → 1100px及以下隐藏页头GitHub，并核对断点两侧与两种语言；600px及以下隐藏品牌图片，以60px单行保留完整入口和触控目标。
- [模板先于或晚于网站上线] → 将模板和Site分别回读；正式发布顺序先让默认分支模板生效，再发布网站入口，避免宣称入口已具备尚不存在的分类能力。
- [形象参考图被误当作批准/授权] → 表单明确只是需求记录；Issue附件不进入素材目录、批准记录或发布树。
- [GitHub文档或表单行为变化] → 本地结构检查之外，保留默认分支实际页面验收，不靠文档或文件存在断言已上线。

## Migration Plan

本轮到规划就绪为止。收到新的apply请求后，先完成本地网站和配置实现、工程与页面验证；不因apply自动执行远端写入。

若之后获得Git发布与Site发布授权，先将四个模板配置送入远端main并回读三个表单，再按现有manifest准备并发布网站静态闭包。GitHub提交与Site版本分别记录；不修改 `.openai/hosting.json` 的站点身份或访问设置。

回退时用可审阅的反向变更撤回网站入口或恢复上一授权版本，不删除用户已提交Issue；GitHub表单的回退与Site回退分开核对。规范sync/archive按后续明确请求执行，不改冻结历史验收原文。
