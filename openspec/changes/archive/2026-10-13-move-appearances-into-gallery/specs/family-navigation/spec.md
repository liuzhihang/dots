# Spec Delta

## MODIFIED Requirements

### Requirement: 关闭作品详情必须恢复图库浏览位置和筛选
从角色库打开 CharacterStudio 时，系统 SHALL 保留文本、series、sort、滚动位置和触发作品焦点；关闭或返回 SHALL 恢复这些状态。Draft dirty SHALL 仅表示当前 Artwork/GalleryLook 配置或额外要求偏离其对应初始基线，是否导出不改变 dirty 状态。直接 Close、Escape、关闭当前 Studio 的浏览器 Back、返回图库以及页面卸载 MUST 直接关闭或离开且不得弹出 dirty 确认；切换相关角色、另一Artwork/GalleryLook/Figure或变体及详情历史导航同样MUST直接载入目标，不使用原生dirty确认阻断浏览。

#### Scenario: 打开并关闭作品详情
- **WHEN** 用户输入搜索、选择 series 与 sort 并滚动到一个作品后打开 CharacterStudio，再关闭或按 Escape
- **THEN** 恢复原查询、series、sort、滚动位置和触发作品焦点

#### Scenario: 离开 dirty Draft
- **WHEN** 用户从当前形象选择另一 Artwork、GalleryLook 或变体，且 Draft 配置或额外要求偏离初始基线
- **THEN** 系统直接切换目标角色并释放当前临时Draft；目标标题、URL与成功预览一致，旧额外要求不带入新角色，不弹出原生确认

#### Scenario: 导出后仍未离开作品
- **WHEN** 用户导出 Draft 后请求切换到另一 Artwork、GalleryLook 或变体，且配置或外部意图仍偏离初始基线
- **THEN** 导出不保存、清空或持久化 Draft，也不影响下一次直接切换角色

#### Scenario: 浏览器返回离开详情
- **WHEN** 用户从角色库打开 CharacterStudio，Draft 无论是否偏离初始基线，随后按浏览器 Back 关闭 Studio 并返回图库
- **THEN** 不弹出确认而关闭 Studio，并恢复先前的查询、series、sort、滚动位置与焦点；不打开工作台或清空条件

#### Scenario: 直接访问作品
- **WHEN** 用户直接打开一个作品详情 URL 后返回角色库
- **THEN** 提供角色库入口，不伪造之前的搜索状态或移出本站

### Requirement: 全站弹窗必须由单一活动 overlay 协调
作品操作 SHALL 在唯一 CharacterStudio 面板中完成；桌面为一个面板，手机为一个全屏面板。每个当前已批准 Artwork SHALL 绑定精确、获批且适配自身形体的 Template；打开已批准作品后，同一面板自动载入该模板并直接编辑同一成功像素预览。历史、pending 或异常作品，以及模板或资源校验失败的只读访问，按其访问资格显示完整静态详情，不虚构编辑能力；新公开作品缺少精确获批 Template 时不得进入默认目录。产品 MUST NOT 提供 View/Edit 标签、模式切换或 mode URL，也不得建立第二页、嵌套弹窗或第二套角色状态。编辑器 SHALL 以“角色调整 / Character adjustments”命名调整区。未绑定 GalleryLook 的原始 Template 编辑保持既有类别；绑定 GalleryLook 时 appearance 是固定身份而非编辑 tab，编辑器只显示当前 look 合法配方中至少有两个可达、符合角色身份并能产生不同预览结果的 colors、face、accessories 及适用 clothing 分类。单配方 look 不显示可编辑 tab；该固定形象规则不要求每个 GalleryLook 都具备所有类别。tab 只切换当前 Template/look 中真实存在且经确认的选项，不是详情/编辑模式。不得显示空 tab、装饰性假控件、无效选项或不兼容图层；不得提供背景调整 tab 或将界面底色作为角色选项。pending Template 只可由外部 reviewHarness 打开并持续标识待确认。活动面板 SHALL 管理背景交互、滚动、焦点进入/圈定、关闭及焦点恢复。


未绑定 GalleryLook 的原始 Template 编辑 SHALL 按家族提供以下调整范围；固定 GalleryLook 只显示当前外观内至少两个真实可达值的非外观分类，单配方形象不显示分类：Dots / Grok Bot 取消服装 tab，只保留外观、配色、五官、配饰四类；Muse、动物、人物和独立机器人保留服装，共五类。Dots / Grok 的服装能力不适用，不以 None 控件充数，也不将衣物改名塞进配饰。每个适用类别仍须至少两个真实、合法可达且改变像素的结果。原有含围衣候选及检查记录保留为历史制作证据，不作为当前推荐或美术通过依据。

#### Scenario: 在详情中打开参考图入口
- **WHEN** 用户在 CharacterStudio 的唯一额外要求文本框中写入外部创作意图
- **THEN** 文本留在当前 Studio 并只附加到统一 Prompt，不触发本地像素修改或第二个对话框；面板直接关闭/返回图库不弹窗，跨形象切换直接替换当前临时会话，不弹原生确认

#### Scenario: 从随机结果查看详情并返回
- **WHEN** 用户从角色库打开 Artwork 并关闭 CharacterStudio；旧随机结果入口已退役，不再产生可打开的随机结果
- **THEN** 回到原角色库查询、series、sort、滚动位置和触发作品，不打开随机器、游戏页或第二套详情

#### Scenario: 键盘关闭 overlay
- **WHEN** overlay 获取焦点后用户按 Escape 或以键盘操作关闭
- **THEN** 仅活动 overlay 关闭，焦点恢复到触发控件且页面滚动恢复

#### Scenario: 浏览器 Back 先关闭 overlay
- **WHEN** 用户在 CharacterStudio 中按浏览器 Back 关闭当前唯一活动 overlay
- **THEN** 直接关闭当前 Studio 并恢复角色库状态，不显示 dirty 确认；选择另一 Artwork、GalleryLook、Figure或变体也直接导航，不弹原生确认

#### Scenario: 已批准作品直接打开角色调整
- **WHEN** 用户打开任一当前已批准 Artwork 的详情
- **THEN** 同一 CharacterStudio 显示“角色调整 / Character adjustments”，载入该 Artwork/version 的精确获批 Template，并直接展示家族适用的调整 tab 与同一成功预览；不出现“微调作品”或 View/Edit 模式入口

#### Scenario: 每个调整 tab 都有真实有效选项
- **WHEN** 用户在原始 Template 编辑器切换现有分类，或在固定 GalleryLook 编辑器切换一个当前显示的分类并选择其选项
- **THEN** 原始 Template 编辑器继续遵守原类别合同；GalleryLook 中每个显示的非外观分类均有至少两个当前 look 合法配方内可达且符合真实形体、事实与美术规范的选项结果，并使同一固定形象的成功预览可见地改变；单配方 look 无编辑 tab，不得显示空 tab、假选项或背景配置

#### Scenario: 界面底色不得成为角色调整
- **WHEN** CharacterStudio 以 CSS 底色展示透明角色或用户打开任一调整 tab
- **THEN** 底色仅参与屏幕合成，不进入角色像素、调整选项或 Prompt，且用户不能设置或导出该底色

#### Scenario: 修改后直接关闭或离开页面
- **WHEN** 用户修改角色或额外要求后选择关闭、返回、Escape、导航回角色库、刷新或关闭网页
- **THEN** 不弹出放弃修改确认或 beforeunload 提示，当前内存会话释放；重新打开同一作品从已批准默认配置开始

### Requirement: 新页面与筛选必须适配窄屏和平板
角色库与 CharacterStudio 静态详情/直接编辑界面 SHALL 在 1440×900、390×844、320×700 与 768×1024 CSS 视口可读、可触达。窄屏 Studio 可全屏显示；键盘和触控 MUST 能完成查看、搜索、系列选择、适用的角色调整、复制/使用 Prompt 和单一透明 PNG Export，不以横向溢出或固定遮挡阻断内容。

#### Scenario: 使用移动窄屏搜索和筛选
- **WHEN** 用户在 390×844 或 320px 视口搜索、筛选并打开角色进入适用的直接编辑
- **THEN** 查询、series、角色预览、当前形象可编辑的真实类别调整项、额外要求文本框和三项主操作可达；按钮至少44px且对齐，内容滚动不遮挡输入、预览或主要操作

#### Scenario: 在 768px 游戏视口揭晓作品
- **WHEN** 用户在 768px 视口打开 Studio 并改变横竖尺寸；旧游戏揭晓界面已退役
- **THEN** 同一 Studio 保持当前 Artwork、静态详情或直接编辑预览，不重复挂载游戏或面板，也不丢失焦点上下文

#### Scenario: 窄屏访问家族适用类别调整 tab
- **WHEN** 用户在 320px 或 390px 宽度的窄屏 Studio 中依次查看当前形象可编辑的角色调整 tab（不含 Appearance）
- **THEN** 当前实际显示的配色、五官、配饰及适用服装分类均能辨认、键盘或触控操作及滚动到至少两个合法结果；固定形象仍可查看、复制 Prompt 和导出，不出现横向页面溢出或被固定面板遮挡

### Requirement: 角色库与作品详情必须使用明确的新路由
角色库 SHALL 使用 #/?q=&series=&sort=；内部来源外观 SHALL 保留 #/look/<id>?v=<version>；公开基础形象 SHALL 使用 #/figure/<id>?v=<version>；既有受信任 Artwork 路由 #/artwork/<id>?v=<version> MUST 继续有效并解析至该来源 Artwork 的登记默认 GalleryLook。新路由与旧路由均不得添加或消费 mode 参数。Guide 路径不属于有效路由。直接打开、刷新、复制链接及浏览器前进 MUST 在同一 CharacterStudio 恢复精确 GalleryLook id/version 与固定 appearance；来源 Artwork 路由解析到默认形象。未知 look、Artwork 或版本 MUST 显示可恢复的未找到状态，不回退到其它形象。pending Template 只由外部 reviewHarness 启用，不改变公开资格。

#### Scenario: 打开角色库和作品详情
- **WHEN** 用户访问角色库、有效 GalleryLook 地址或既有有效 Artwork 地址
- **THEN** 前者呈现唯一角色库，GalleryLook 地址打开目标固定形象，Artwork 地址打开该来源的默认 GalleryLook；两者均使用同一 CharacterStudio

#### Scenario: 直接打开适配作品
- **WHEN** 用户打开固定 look 地址，或打开登记 Artwork 地址并解析至其默认 look，且来源版本绑定精确获批的可用 Template
- **THEN** 同一 CharacterStudio 固定 appearance 并自动加载 look 默认成功预览及其真实可编辑分类；无可用 Template 时维持静态详情，不显示虚构控件，pending Template 只能由明确的外部 reviewHarness 开启

#### Scenario: 路由引用无效 Artwork 或版本
- **WHEN** GalleryLook ID、Artwork ID 或对应 version 未登记
- **THEN** 显示可恢复的未找到状态，不回退到其它作品或版本

#### Scenario: 既有 Artwork 链接打开默认形象
- **WHEN** 用户直接打开、刷新或分享既有 `#/artwork/<id>?v=<version>` 链接
- **THEN** 同一 CharacterStudio 解析到该来源 Artwork/version 登记的默认 GalleryLook，不显示未固定外观的编辑入口

## ADDED Requirements

### Requirement: 公开基础形象必须使用严格Figure路由
主图库与相关入口 SHALL 使用 #/figure/<id>?v=<version>，并在直接访问、刷新、前进后退恢复精确Figure版本与canonical默认状态；未知Figure或版本MUST显示可恢复的未找到状态，不回退。既有Artwork/Look地址继续遵守精确来源合同，关闭Figure后恢复查询、sort、series、滚动和触发焦点，不弹dirty确认。

#### Scenario: 打开去重图库卡片
- **WHEN** 用户从带查询和排序的图库打开dots-cloud再关闭
- **THEN** 使用Figure路由打开一次唯一面板，关闭无确认并恢复相同查询、排序和Figure卡片焦点

### Requirement: 原生下拉控件必须紧凑且完整可读
语言和排序select SHALL 保持原生语义、键盘与焦点，图库和粗指针触屏44px最小高度；精细指针弹窗语言控件按用户后续紧凑要求采用36px最小高度，宽度随当前选中文本收紧，不用固定宽度留下过大中间空白；约12px左内距、约10px文字至箭头间距及独立箭头。中文和英文各选项被选中后在桌面、390px与320px视口 MUST 不与箭头重叠、不裁切且无横向页面溢出；详情与首页共享同一原生语言控件和状态，按所在容器适用紧凑尺寸。

#### Scenario: 双语与窄屏下拉
- **WHEN** 用户在桌面或窄屏切换中文/English并选择排序
- **THEN** 控件随当前文本长度收紧，文字与箭头间距紧凑一致，原生选项与实际排序/语言生效，键盘焦点清晰

#### Scenario: 统一下拉按钮与展开菜单
- **WHEN** 用户在图库或Studio中展开语言或排序select
- **THEN** 支持原生可定制picker的浏览器显示统一深色圆角菜单、图库与触屏44px选项（精细指针弹窗为36px）、清楚的选中底色与勾选，菜单不越出视口；旧浏览器保留相同按钮和系统菜单，真实选择仍更新相应语言或排序

#### Scenario: 菜单内键盘与详情层级
- **WHEN** 用户在Studio内以键盘打开语言菜单、用方向键选择或按Escape
- **THEN** 方向键和确认只提交语言选择；首次Escape只收起菜单并保留Studio，菜单收起后Escape继续遵守Studio关闭合同，语言控件在关闭后回到页头

#### Scenario: 弹窗标题栏的双语尺寸
- **WHEN** 用户在桌面、390px或320px视口打开Studio并切换语言
- **THEN** 弹窗语言控件使用12px文字，精细指针36px高度、粗指针触屏44px高度，和返回、关闭按钮垂直对齐；标题栏采用紧凑上下间距，标题自然折行且不与相邻控件重叠
