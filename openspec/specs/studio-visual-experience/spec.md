# studio-visual-experience Specification

## Purpose

规定 Dot Icon Studio 首页、图库、灵感游戏与揭晓/详情的视觉层级，保留图 1 构图和批准身份并真实呈现产品能力。

## Requirements

### Requirement: 首页只能承诺真实存在的作品发现能力
唯一页面 SHALL 是可搜索和筛选的角色库，主导航只提供 Characters；`#/guide` MUST 按未知路由显示 not-found。Change 前已批准的 24 件 Artwork 与本 change 后续获批并进入默认 Gallery 的每件 Artwork SHALL 由同一 CharacterStudio 提供真实的家族适用类别角色调整，按家族包含外观、配色、五官、配饰，Muse/动物/人物/独立机器人另含服装；每类必须有至少两个可达、身份兼容且实际改变成功预览像素的已登记结果，并使用逐件验收的图层、锚点、层序和合法组合。Copy Prompt 和在 ChatGPT 中使用为主操作，单一 Export 为次级操作：已批准有效透明 Artwork 未改配置时返回登记原始透明 PNG，角色调整使用最近成功 revision 导出透明 PNG；静态降级只可用于历史、pending、异常或资源失败条目，返回登记原始字节，若不透明必须清楚标为历史原图，不宣称透明或计入全角色调整覆盖。Hero MUST NOT 显示通用 Copy Dots Prompt 按钮。网站 MUST NOT 展示虚构统计、收藏、点赞、额外导航、现场生图、万能组装或未验证 Pet 安装；额外要求只加入保留角色身份及透明输出要求的统一 Prompt，不改变本地像素。Gallery 和角色调整只处理透明角色图像；展示画布仅为 CSS 界面背景，不提供背景设置、背景 tab 或带背景导出。


系统 SHALL 按家族提供以下调整范围：Dots / Grok Bot 取消服装 tab，只保留外观、配色、五官、配饰四类；Muse、动物、人物和独立机器人保留服装，共五类。Dots / Grok 的服装能力不适用，不以 None 控件充数，也不将衣物改名塞进配饰。每个适用类别仍须至少两个真实、合法可达且改变像素的结果。原有含围衣候选及检查记录保留为历史制作证据，不作为当前推荐或美术通过依据。

#### Scenario: 使用首页随机入口
- **WHEN** 用户打开网站根路径；旧首页随机入口已退役
- **THEN** 直接浏览已登记角色和真实查询操作，不显示随机器、宣传指标、收藏入口或另一个首页跳转

#### Scenario: 进入动作或参考图入口
- **WHEN** 用户提出当前 Template 无法实现的变化
- **THEN** 界面只列出已登记的真实静态变体或动画；超出 Template 的变化明确转为外部二创 Prompt，不伪造动作、改动本地预览或声称网站已生成新图，Prompt 仍明确目标角色身份和透明角色输出

### Requirement: 新产品页面必须在桌面和指定模拟视口可读可操作
角色库与 CharacterStudio 静态详情/直接角色调整界面 SHALL 在 1440×900、390×844、320×700 与 768×1024 CSS 视口分别可读可操作。窄屏按主要内容重排，不裁切角色、搜索、系列、家族适用的调整 tabs、选项或两项主操作与单一次级 Export；内部滚动 MUST NOT 遮挡额外要求文本框、预览或操作；透明 Artwork 的 CSS 展示背景不得写入角色图或 Export。截图和模拟视口 MUST NOT 代替实体设备验收或美术确认。

#### Scenario: 在 320/390px 浏览和使用核心路径
- **WHEN** 用户在 320px 或 390px 视口搜索角色并打开 CharacterStudio
- **THEN** 作品身份、静态详情或直接角色调整预览、主要操作与家族适用的非空 tabs 中的可用模板控件可见可达，不出现阻断交互的横向溢出

#### Scenario: 在 768px 使用灵感游戏
- **WHEN** 用户在 768px 视口打开适配作品或调整视口方向
- **THEN** 同一个 Studio 与当前成功像素预览保持可读，外观、配色、五官、配饰及适用家族的服装调整及关闭操作不被遮挡，透明素材保持真实 alpha

### Requirement: 发布静态页面资源必须与作品清单版本一致
发布页面引用的角色清单、封面、透明原图、Template 家族适用类别图层、合法配方和静态代码 SHALL 来自同一有效发布版本；每个公开 Artwork/version 均 SHALL 精确绑定自己的获批 Template 与素材，不得混用其它作品的身份能力、图层、锚点、层序、选项或批准，也不得将未批准候选纳入默认角色库、搜索、标签或公开角色调整。变更前 24 件已批准 Artwork 与本 change 后续获批并拟加入默认 Gallery 的每件 Artwork 均须通过精确模板支持家族适用的非空 tabs、每类至少两个实际可达的不同透明像素结果；pending、异常及资源失败降级不计为全覆盖。已显式登记并可通过受信任详情地址打开的 pending Artwork 可随静态资源树保留，但详情必须只读并明确标记待确认。动态 Draft 只在本地生成，不自动进入静态发布闭包。静态发布 manifest 的 `files` SHALL 精确列出 `dist/` 文件闭包，`previewOnlyFiles` SHALL 是该闭包中待确认候选文件的显式子集；若闭包含 pending 候选，构建报告 MUST 标记 `deploymentReady: false`。此状态表示本轮不具备发布就绪条件，不代表候选已从 Sites static.directory 物理隔离。

#### Scenario: 加载新发布的目录
- **WHEN** 浏览器载入角色库或 CharacterStudio
- **THEN** 页面模块、角色清单、透明作品资源及其 Template 引用对应同一发布版本，不启动旧随机或旧编辑器；未批准候选不进入默认发现和公开角色调整

#### Scenario: 打开显式登记的 pending 详情
- **WHEN** 用户通过登记的受信任地址打开 pending Artwork
- **THEN** 同一 CharacterStudio 显示真实登记资源和待确认状态，保持只读，不开放角色调整，也不将候选加入默认角色库、搜索或标签

#### Scenario: 校验静态发布清单
- **WHEN** 构建器生成静态发布报告
- **THEN** `manifest.files` 与 `dist/` 闭包完全一致，`previewOnlyFiles` 是其中 pending 候选文件的显式子集；只要闭包包含 pending 候选，`deploymentReady` 即为 `false`，且报告不声称候选已从 Sites 目录物理隔离

#### Scenario: 发布清单缺少 Template 资源
- **WHEN** 已发布 Template 引用缺失、版本不符或未登记的任一类别图层或合法配方
- **THEN** 对应 Artwork 的角色调整能力不可用并说明资源失败，不从其它版本或角色静默替换；该降级不计入全角色调整覆盖

### Requirement: Dots 首页必须以 D01 深色角色库为唯一主视觉
品牌 SHALL 使用 Dots；角色库首页 MUST 以 D01-main-third-dark-gallery-studio.png 为唯一主稿，呈现深色数字画布、局部半透明烟色玻璃和真实角色网格。首页 banner MUST 保留 D01 左文右群像构图；1440px 桌面高度约440–500px。页面 MUST NOT 恢复场景型长营销 Hero。透明角色 Artwork SHALL 以原始 alpha 显示在深色 UI 画布上；界面色只属于展示层。

#### Scenario: 桌面首页视觉
- **WHEN** 用户在桌面访问首页
- **THEN** 首屏是深色角色库，1440px 桌面 banner 约440–500px高，左侧显示两行大字号渐变标题“Make It / Your Dot.”，右侧以约60%宽度呈现已要求的角色群像。其后角色和搜索/系列控件清楚可用；短介绍保持简短且不显示通用 Copy Dots Prompt 按钮，240px 约束不限制整体 banner 高度。

#### Scenario: 首页中英文标题与简介
- **WHEN** 用户切换首页语言
- **THEN** 简体中文的浏览器标题精确为“创造你的Dot.”，Hero 两行精确为“创造”与“你的Dot.”，短介绍精确为“挑选角色，在 ChatGPT 中创作。”；英文标题仍为“Make It / Your Dot.”，短介绍为“Pick a character. Make it yours in ChatGPT.”

#### Scenario: 角色显示名与系列标签
- **WHEN** 角色卡或 CharacterStudio 显示角色身份
- **THEN** 显示名不重复附带同一系列后缀；Meta Muse 的显示名为“Muse”。角色图与底部信息共用完整卡片背景、外框和点击区域；底部名称靠左、描边系列标签靠右，二者垂直居中且上下留白一致。不改 Character/Artwork 的身份 ID 或 seriesId

#### Scenario: 窄屏首页 banner
- **WHEN** 用户在 390px 或 320px 视口打开角色库
- **THEN** 标题与角色群像按窄屏重排且均可辨认，短介绍仍简短，不以240px固定总高度裁切群像或标题，也不产生横向溢出；Hero装饰仍与Artwork分离

#### Scenario: 专用 Hero 插画与角色资源边界
- **WHEN** 首页使用带角色群像的 Hero 插画
- **THEN** 插画 MAY 使用 D01 暗色展示台与微光，但 MUST 仅作为已获用户美术批准的 UI 装饰，不登记为 Artwork，也不为图中角色创建或授予 Artwork pending/approved 状态；插画不得进入角色卡、CharacterStudio 预览或 PNG 导出，不得直接采用带 UI 的概念拼版，也不得恢复旧露台、庭院、城市、房间或台阶场景。图中的机器人不代表 Grok，最终群像中的兔子戴紫色耳机并系黄色领带。用户补充原型 D03（仓库路径 `openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/dark-gallery-20261010/source-package/references/D03-hero-ensemble-20261010.png`） 只更新Hero标语与群像要求，不覆盖D01其他页面或D02手机补充。本地Hero插画已获得用户对 UI 装饰用途的美术批准；批准不扩展到 Artwork 或导出素材。

#### Scenario: 角色卡与背景
- **WHEN** 角色网格承载透明 Artwork
- **THEN** 局部玻璃与暗色画布属于 UI 背景，不烘焙进原图或 Draft 导出；角色图保留真实 alpha，不显示棋盘网格或灰色方块缩略图底，也不提供用户自定义背景，UI 底色不替代角色资源

### Requirement: CharacterStudio 烟色玻璃必须透出背景并具备可读降级
CharacterStudio 整体 SHALL 使用半透明烟色玻璃，让后方画布的轮廓仍可见；header 轻薄紧凑，不带独立背景或分隔线。浏览器支持且用户未要求降低透明度时可应用背景模糊。blur 不受支持或用户启用降低透明度时，界面 MUST 切换为不透明、对比度合格的实底；玻璃和背景 MUST NOT 烘焙进 Artwork 或 Draft PNG。

#### Scenario: 支持透明玻璃和背景模糊
- **WHEN** 浏览器支持背景模糊且未启用降低透明度
- **THEN** CharacterStudio 显示完整半透明烟色玻璃，面板外的背景轮廓可见；轻薄 header 无独立底色或分隔线，语义标题和关闭/返回操作仍清楚可读

#### Scenario: blur 不支持或降低透明度
- **WHEN** 浏览器不支持背景模糊，或用户启用降低透明度
- **THEN** CharacterStudio 使用不透明且可读的实底，不依赖模糊或透明效果承载内容；角色原图和 Draft PNG 仍保留真实 alpha

### Requirement: D02 只补充手机细节
D02-support-first-mobile-guide.png SHALL 只作为手机细节参考，不得与 D01 并列成为第二主稿或替换桌面主方向。D02 中的 Guide 页面及导航不属于本产品，网站不得实现该页面或入口。

#### Scenario: 手机页面
- **WHEN** 用户在手机查看角色库或 CharacterStudio
- **THEN** D01 已提供的手机角色库与 Studio 结构优先；D02 仅补充 D01 未覆盖的手机细节，发生冲突时遵循 D01 的层级与深色画布方向，保持角色身份、筛选和主要操作可达

### Requirement: 界面和操作提示必须支持英文与简体中文
角色库、CharacterStudio 静态详情/直接角色调整界面、状态和错误 SHALL 支持英文与简体中文，默认英文。角色调整入口在简体中文显示“角色调整”，英文显示“Character adjustments”；家族适用的一级 tabs 的中英文名称分别为“外观 / Appearance”、“配色 / Colors”、“五官 / Face”、“服装 / Clothing”及“配饰 / Accessories”。CharacterStudio SHALL 继承网站当前语言，不提供独立 detailLanguage 控件。用户内容、Artwork ID、Template revision、筛选和 Draft 选择 MUST NOT 因语言切换而改变。

#### Scenario: 切换语言
- **WHEN** 用户在搜索或 CharacterStudio 中切换语言
- **THEN** 界面及提示使用所选语言，当前 Artwork、筛选、Template 选择和 Draft revision 保持不变

#### Scenario: 网站语言切换时面板继承
- **WHEN** 用户切换全站语言或在已打开面板时切换到另一件作品
- **THEN** CharacterStudio 使用网站当前语言且不产生独立语言切换操作；自由文本保持原文，Draft/session/revision 不变

### Requirement: CharacterStudio 的主操作与滚动必须无遮挡
CharacterStudio 的 Copy Prompt 与在 ChatGPT 中使用 SHALL 为主操作，单一 Export 为次级操作；所有操作和关闭/返回控件 SHALL 至少44px，保持清晰焦点样式，命中区域 MUST 与可见按钮矩形一致。面板 header SHALL 固定且轻薄无独立底色/分隔线，body SHALL 独立滚动，家族适用的角色调整分类 tabs MUST NOT sticky。内容滚动或玻璃 MUST NOT 遮挡预览、额外要求输入、选项或操作；相关角色常显在预览下方，以紧凑固定宽度左对齐。手机采用自然滚动，首次打开需显示完整角色，但不要求预览全程固定。角色调整 tabs 只含外观、配色、五官、配饰及适用家族的服装，不提供背景配置。

#### Scenario: 触控操作并滚动详情
- **WHEN** 用户在窄屏滚动家族适用类别角色调整选项、使用主操作或查看相关角色
- **THEN** 主操作和当前目标不会被 header 或剪裁容器挡住；页面可自然滚动访问，选项和按钮可见命中区域与实际点击矩形一致，透明角色 alpha 保持完整且可读
