# Spec Delta

## MODIFIED Requirements

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

