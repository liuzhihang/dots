# Spec Delta

## MODIFIED Requirements

### Requirement: 关闭作品详情必须恢复图库浏览位置和筛选
从角色库打开 CharacterStudio 时，系统 SHALL 保留文本、series、sort、滚动位置和触发作品焦点；关闭或返回 SHALL 恢复这些状态。Draft dirty SHALL 仅表示配置或额外要求偏离其初始基线，是否导出不改变 dirty 状态。关闭面板、返回角色库和离开网页 MUST 直接退出，不弹出放弃修改确认或 beforeunload 提示；仅切换另一 Artwork 或变体仍请求确认并允许取消。

#### Scenario: 打开并关闭作品详情
- **WHEN** 用户输入搜索、选择 series 与 sort 并滚动到一个作品后打开 CharacterStudio，再关闭或按 Escape
- **THEN** 恢复原查询、series、sort、滚动位置和触发作品焦点

#### Scenario: 离开 dirty Draft
- **WHEN** 用户切换另一 Artwork 或变体，且 Draft 配置或额外要求偏离初始基线
- **THEN** 系统允许继续编辑或放弃修改；取消时留在同一作品、Draft、URL 和焦点，放弃时只执行一次原定离开操作

#### Scenario: 导出后仍未离开作品
- **WHEN** 用户导出 Draft 后请求切换另一作品或变体，且配置或外部意图仍偏离初始基线
- **THEN** dirty guard 仍生效；导出不保存、清空或持久化 Draft

#### Scenario: 浏览器返回离开详情
- **WHEN** 用户从角色库打开 CharacterStudio，随后按浏览器 Back，无论 Draft 是否偏离初始基线
- **THEN** 关闭 Studio 并恢复先前的查询、series、sort、滚动位置与焦点，不打开工作台或清空条件

#### Scenario: 直接访问作品
- **WHEN** 用户直接打开一个作品详情 URL 后返回角色库
- **THEN** 提供角色库入口，不伪造之前的搜索状态或移出本站

### Requirement: 全站弹窗必须由单一活动 overlay 协调
作品操作 SHALL 在唯一 CharacterStudio 面板中完成；桌面为一个面板，手机为一个全屏面板。每个当前已批准 Artwork SHALL 绑定精确、获批且适配自身形体的 Template；打开已批准作品后，同一面板自动载入该模板并直接编辑同一成功像素预览。历史、pending 或异常作品，以及模板或资源校验失败的只读访问，按其访问资格显示完整静态详情，不虚构编辑能力；新公开作品缺少精确获批 Template 时不得进入默认目录。产品 MUST NOT 提供 View/Edit 标签、模式切换或 mode URL，也不得建立第二页、嵌套弹窗或第二套角色状态。编辑器 SHALL 以“角色调整 / Character adjustments”命名调整区，并提供外观、配色、五官、配饰及适用家族的服装家族适用的 tab；tab 只切换当前 Artwork Template 中真实存在且经确认的选项，不是详情/编辑模式。所有适用 tab MUST 各自提供至少两个可达、符合角色身份并能产生不同预览结果的有效选项；不得显示空 tab、装饰性假控件、无效选项或不兼容图层；不得提供背景调整 tab 或将界面底色作为角色选项。pending Template 只可由外部 reviewHarness 打开并持续标识待确认。活动面板 SHALL 管理背景交互、滚动、焦点进入/圈定、关闭及焦点恢复。


系统 SHALL 按家族提供以下调整范围：Dots / Grok Bot 取消服装 tab，只保留外观、配色、五官、配饰四类；Muse、动物、人物和独立机器人保留服装，共五类。Dots / Grok 的服装能力不适用，不以 None 控件充数，也不将衣物改名塞进配饰。每个适用类别仍须至少两个真实、合法可达且改变像素的结果。原有含围衣候选及检查记录保留为历史制作证据，不作为当前推荐或美术通过依据。

#### Scenario: 在详情中打开参考图入口
- **WHEN** 用户在 CharacterStudio 的唯一额外要求文本框中写入外部创作意图
- **THEN** 文本留在当前 Studio 并只附加到统一 Prompt，不触发本地像素修改或第二个对话框；面板关闭/返回直接退出，不弹出确认；再次打开从默认基线开始

#### Scenario: 从随机结果查看详情并返回
- **WHEN** 用户从角色库打开 Artwork 并关闭 CharacterStudio；旧随机结果入口已退役，不再产生可打开的随机结果
- **THEN** 回到原角色库查询、series、sort、滚动位置和触发作品，不打开随机器、游戏页或第二套详情

#### Scenario: 键盘关闭 overlay
- **WHEN** overlay 获取焦点后用户按 Escape 或以键盘操作关闭
- **THEN** 仅活动 overlay 关闭，焦点恢复到触发控件且页面滚动恢复

#### Scenario: 浏览器 Back 先关闭 overlay
- **WHEN** 用户在 CharacterStudio 中按浏览器 Back，且唯一活动 overlay 尚未关闭
- **THEN** 直接关闭当前 Studio 并恢复角色库状态，不弹出 dirty 确认，也不重复遍历历史

#### Scenario: 已批准作品直接打开角色调整
- **WHEN** 用户打开任一当前已批准 Artwork 的详情
- **THEN** 同一 CharacterStudio 显示“角色调整 / Character adjustments”，载入该 Artwork/version 的精确获批 Template，并直接展示家族适用的调整 tab 与同一成功预览；不出现“微调作品”或 View/Edit 模式入口

#### Scenario: 每个调整 tab 都有真实有效选项
- **WHEN** 用户切换外观、配色、五官、服装或配饰 tab 并选择当前 Template 提供的选项
- **THEN** 每个 tab 均为该角色登记有至少两个可达且符合真实形体、事实与美术规范的选项结果，并使同一 Artwork 的成功预览可见地改变；适用的服装或配饰可用“无”与适配物件形成两种结果，不得显示空 tab、假选项或背景配置

#### Scenario: 界面底色不得成为角色调整
- **WHEN** CharacterStudio 以 CSS 底色展示透明角色或用户打开任一调整 tab
- **THEN** 底色仅参与屏幕合成，不进入角色像素、调整选项或 Prompt，且用户不能设置或导出该底色

#### Scenario: 修改后直接关闭或离开页面
- **WHEN** 用户修改角色或额外要求后选择关闭、返回、Escape、导航回角色库、刷新或关闭网页
- **THEN** 不弹出放弃修改确认或 beforeunload 提示，当前内存会话释放；重新打开同一作品从已批准默认配置开始
