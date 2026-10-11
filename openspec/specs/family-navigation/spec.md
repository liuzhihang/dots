# family-navigation Specification

## Purpose

定义 Dot Icon Studio 首页、画廊与灵感游戏导航，以及随机结果、作品详情和参考图在单一 overlay 中的进入、返回、焦点恢复、筛选和滚动状态管理，保证不同容器共用同一作品快照。

## Requirements

### Requirement: 关闭作品详情必须恢复图库浏览位置和筛选
从角色库打开 CharacterStudio 时，系统 SHALL 保留文本、series、sort、滚动位置和触发作品焦点；关闭或返回 SHALL 恢复这些状态。Draft dirty SHALL 仅表示配置或额外要求偏离其初始基线，是否导出不改变 dirty 状态。离开作品的操作 MUST 在丢弃 dirty Draft 前请求确认，并允许取消。

#### Scenario: 打开并关闭作品详情
- **WHEN** 用户输入搜索、选择 series 与 sort 并滚动到一个作品后打开 CharacterStudio，再关闭或按 Escape
- **THEN** 恢复原查询、series、sort、滚动位置和触发作品焦点

#### Scenario: 离开 dirty Draft
- **WHEN** 用户关闭 Studio、切换 Artwork 或变体、按浏览器 Back、导航至其它地址或以其它方式离开当前作品，且 Draft 配置或额外要求偏离初始基线
- **THEN** 系统允许继续编辑或放弃修改；取消时留在同一作品、Draft、URL 和焦点，放弃时只执行一次原定离开操作

#### Scenario: 导出后仍未离开作品
- **WHEN** 用户导出 Draft 后请求关闭、切换作品或导航，且配置或外部意图仍偏离初始基线
- **THEN** dirty guard 仍生效；导出不保存、清空或持久化 Draft

#### Scenario: 浏览器返回离开详情
- **WHEN** 用户从角色库打开 CharacterStudio，Draft 未偏离初始基线，随后按浏览器 Back
- **THEN** 关闭 Studio 并恢复先前的查询、series、sort、滚动位置与焦点，不打开工作台或清空条件

#### Scenario: 直接访问作品
- **WHEN** 用户直接打开一个作品详情 URL 后返回角色库
- **THEN** 提供角色库入口，不伪造之前的搜索状态或移出本站

### Requirement: 全站弹窗必须由单一活动 overlay 协调
作品操作 SHALL 在唯一 CharacterStudio 面板中完成；桌面为一个面板，手机为一个全屏面板。每个当前已批准 Artwork SHALL 绑定精确、获批且适配自身形体的 Template；打开已批准作品后，同一面板自动载入该模板并直接编辑同一成功像素预览。历史、pending 或异常作品，以及模板或资源校验失败的只读访问，按其访问资格显示完整静态详情，不虚构编辑能力；新公开作品缺少精确获批 Template 时不得进入默认目录。产品 MUST NOT 提供 View/Edit 标签、模式切换或 mode URL，也不得建立第二页、嵌套弹窗或第二套角色状态。编辑器 SHALL 以“角色调整 / Character adjustments”命名调整区，并提供外观、配色、五官、配饰及适用家族的服装家族适用的 tab；tab 只切换当前 Artwork Template 中真实存在且经确认的选项，不是详情/编辑模式。所有适用 tab MUST 各自提供至少两个可达、符合角色身份并能产生不同预览结果的有效选项；不得显示空 tab、装饰性假控件、无效选项或不兼容图层；不得提供背景调整 tab 或将界面底色作为角色选项。pending Template 只可由外部 reviewHarness 打开并持续标识待确认。活动面板 SHALL 管理背景交互、滚动、焦点进入/圈定、关闭及焦点恢复。


系统 SHALL 按家族提供以下调整范围：Dots / Grok Bot 取消服装 tab，只保留外观、配色、五官、配饰四类；Muse、动物、人物和独立机器人保留服装，共五类。Dots / Grok 的服装能力不适用，不以 None 控件充数，也不将衣物改名塞进配饰。每个适用类别仍须至少两个真实、合法可达且改变像素的结果。原有含围衣候选及检查记录保留为历史制作证据，不作为当前推荐或美术通过依据。

#### Scenario: 在详情中打开参考图入口
- **WHEN** 用户在 CharacterStudio 的唯一额外要求文本框中写入外部创作意图
- **THEN** 文本留在当前 Studio 并只附加到统一 Prompt，不触发本地像素修改或第二个对话框；面板关闭/返回仍按 Draft dirty guard 处理

#### Scenario: 从随机结果查看详情并返回
- **WHEN** 用户从角色库打开 Artwork 并关闭 CharacterStudio；旧随机结果入口已退役，不再产生可打开的随机结果
- **THEN** 回到原角色库查询、series、sort、滚动位置和触发作品，不打开随机器、游戏页或第二套详情

#### Scenario: 键盘关闭 overlay
- **WHEN** overlay 获取焦点后用户按 Escape 或以键盘操作关闭
- **THEN** 仅活动 overlay 关闭，焦点恢复到触发控件且页面滚动恢复

#### Scenario: 浏览器 Back 先关闭 overlay
- **WHEN** 用户在 CharacterStudio 中按浏览器 Back，且唯一活动 overlay 尚未关闭
- **THEN** 先关闭当前 Studio 并恢复角色库状态；若 dirty guard 被取消，则继续留在当前 Studio、URL、Draft 和焦点，不执行后续导航

#### Scenario: 已批准作品直接打开角色调整
- **WHEN** 用户打开任一当前已批准 Artwork 的详情
- **THEN** 同一 CharacterStudio 显示“角色调整 / Character adjustments”，载入该 Artwork/version 的精确获批 Template，并直接展示家族适用的调整 tab 与同一成功预览；不出现“微调作品”或 View/Edit 模式入口

#### Scenario: 每个调整 tab 都有真实有效选项
- **WHEN** 用户切换外观、配色、五官、服装或配饰 tab 并选择当前 Template 提供的选项
- **THEN** 每个 tab 均为该角色登记有至少两个可达且符合真实形体、事实与美术规范的选项结果，并使同一 Artwork 的成功预览可见地改变；适用的服装或配饰可用“无”与适配物件形成两种结果，不得显示空 tab、假选项或背景配置

#### Scenario: 界面底色不得成为角色调整
- **WHEN** CharacterStudio 以 CSS 底色展示透明角色或用户打开任一调整 tab
- **THEN** 底色仅参与屏幕合成，不进入角色像素、调整选项或 Prompt，且用户不能设置或导出该底色

### Requirement: 新页面与筛选必须适配窄屏和平板
角色库与 CharacterStudio 静态详情/直接编辑界面 SHALL 在 1440×900、390×844、320×700 与 768×1024 CSS 视口可读、可触达。窄屏 Studio 可全屏显示；键盘和触控 MUST 能完成查看、搜索、系列选择、适用的角色调整、复制/使用 Prompt 和单一透明 PNG Export，不以横向溢出或固定遮挡阻断内容。

#### Scenario: 使用移动窄屏搜索和筛选
- **WHEN** 用户在 390×844 或 320px 视口搜索、筛选并打开角色进入适用的直接编辑
- **THEN** 查询、series、角色预览、支持的家族适用类别调整项、额外要求文本框和三项主操作可达；按钮至少44px且对齐，内容滚动不遮挡输入、预览或主要操作

#### Scenario: 在 768px 游戏视口揭晓作品
- **WHEN** 用户在 768px 视口打开 Studio 并改变横竖尺寸；旧游戏揭晓界面已退役
- **THEN** 同一 Studio 保持当前 Artwork、静态详情或直接编辑预览，不重复挂载游戏或面板，也不丢失焦点上下文

#### Scenario: 窄屏访问家族适用类别调整 tab
- **WHEN** 用户在 320px 或 390px 宽度的窄屏 Studio 中依次查看家族适用的角色调整 tab
- **THEN** 外观、配色、五官、配饰及适用家族的服装均能辨认、键盘或触控操作及滚动到至少两个合法结果，不出现横向页面溢出或被固定面板遮挡

### Requirement: 角色库必须作为唯一页面与导航入口
根路径 SHALL 直接呈现完整角色库，导航只提供 Characters。产品 MUST NOT 提供 Guide 页面、`#/guide` 路由、独立宣传首页、重复角色目录入口、收藏、统计、用户空间或独立工作台；未知路由按 not-found 处理，不保留隐藏页面或兼容 alias。

#### Scenario: 打开根路径
- **WHEN** 用户访问应用根路径
- **THEN** 直接显示包含 D01 banner 的角色库、文本搜索及五个 series 筛选；不进入独立宣传首页或第二个图库页面

#### Scenario: 已移除的 Guide 地址
- **WHEN** 用户访问 `#/guide`
- **THEN** 显示普通可恢复的 not-found 状态，不加载隐藏页面、别名或跳转状态

### Requirement: 角色库与作品详情必须使用明确的新路由
角色库 SHALL 使用 #/?q=&series=&sort=；受信任 Artwork SHALL 使用 #/artwork/<id>?v=<version>，不得添加或消费 mode 参数。Guide 路径不属于有效路由。直接打开、刷新、复制链接及浏览器前进 MUST 在同一 CharacterStudio 恢复登记 Artwork 版本；若绑定精确获批 Template，则自动载入直接编辑界面，否则显示完整静态详情。pending Template 只由外部 reviewHarness 启用，不改变公开资格。

#### Scenario: 打开角色库和作品详情
- **WHEN** 用户访问角色库或有效 Artwork 详情地址
- **THEN** 前者呈现唯一角色库，后者打开目标 Artwork 版本的同一 CharacterStudio

#### Scenario: 直接打开适配作品
- **WHEN** 用户打开已登记 Artwork 地址且其版本绑定精确获批的可用 Template
- **THEN** 同一 CharacterStudio 自动加载可视选项并直接编辑默认成功预览；无 Template 时维持静态详情，不显示虚构控件，pending Template 只能由明确的外部 reviewHarness 开启

#### Scenario: 路由引用无效 Artwork 或版本
- **WHEN** Artwork ID 或 version 未登记
- **THEN** 显示可恢复的未找到状态，不回退到其它作品或版本

### Requirement: 旧路由与旧存储不得隐式迁移
旧 home/gallery、随机或工作台路由、旧 schema、组件项目和 storage 格式 MUST NOT 被自动适配或迁移到新角色库、Template 或 Draft。未知旧路由 SHALL 显示可恢复的未找到状态；本地 Draft 不写入持久存储。

#### Scenario: 访问旧路由
- **WHEN** 用户打开旧 #/home、旧 #/gallery 或旧随机/工作台地址
- **THEN** 系统显示未找到状态并提供新角色库入口，不重定向、不加载旧游戏、不提供别名或转换 URL 参数

#### Scenario: 浏览器含旧项目数据
- **WHEN** 浏览器本地存在旧 schema 或旧组件项目数据
- **THEN** 应用不读取、不迁移或自动删除该数据；当前会话仍可查看 Artwork 并编辑具备真实适配能力的 Template
