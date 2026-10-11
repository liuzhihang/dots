# studio-creation-experience Specification

## Purpose

规范完整 Artwork 的详情、已发布变体、Prompt 复制、资源下载和参考图辅助，让用户直接查看/带走作品而不进入旧编辑器。

## Requirements

### Requirement: 作品详情必须直接提供实际图片及带走操作
CharacterStudio SHALL 在同一 Artwork 上下文中提供真实作品、名称、facts、只读原始资料和额外要求文本框。Copy Prompt 与在 ChatGPT 中使用是主操作，Export 为次级操作。变更前 24 件已批准 Artwork 与本 change 后续获批并加入默认 Gallery 的每件 Artwork SHALL 经同一详情提供精确 Artwork/version 绑定、逐件获批的角色调整 Template；编辑区统一命名为“角色调整 / Character adjustments”，按家族包含外观、配色、五官、配饰，Muse/动物/人物/独立机器人另含服装家族适用的非空一级 tabs，各类至少提供两个可达、身份兼容且实际改变成功预览像素的结果。角色调整使用真实素材、锚点、层序和已逐件验收的合法组合，不以 Prompt-only 代替本地编辑。默认成功像素预览是同一面板直接编辑和导出的唯一预览。当前 Gallery Artwork 与角色调整只导出透明 PNG；有效透明 Artwork 的默认未改配置可返回登记原图字节，已修改配置只可导出匹配最新成功 revision 的透明 PNG。渲染进行或失败时禁止新的 Draft PNG 导出。历史、pending、异常及资源失败记录可保留静态详情与单一 Export 的登记原始字节降级；历史不透明字节须标为历史原图，不得宣称透明或计入全角色调整覆盖。统一 Prompt 为原 Prompt 或最近成功配置 Prompt 加用户额外要求；额外要求不改变本地像素，ChatGPT MUST NOT 自动附图或发送。待审 Template 仅由外部 reviewHarness 打开，资格不变。查看不得依赖获取完整原图或等待 SHA 校验。界面不提供背景设置、背景 tab 或带背景导出；展示底色只属于 UI。


系统 SHALL 按家族提供以下调整范围：Dots / Grok Bot 取消服装 tab，只保留外观、配色、五官、配饰四类；Muse、动物、人物和独立机器人保留服装，共五类。Dots / Grok 的服装能力不适用，不以 None 控件充数，也不将衣物改名塞进配饰。每个适用类别仍须至少两个真实、合法可达且改变像素的结果。原有含围衣候选及检查记录保留为历史制作证据，不作为当前推荐或美术通过依据。

#### Scenario: 从画廊或随机结果打开详情
- **WHEN** 用户从唯一角色库打开已发布 Artwork；旧随机结果入口已退役
- **THEN** CharacterStudio 先显示面板、封面、名称、facts 和可用操作；若存在精确获批 Template，则按需自动加载其默认配置与家族适用类别真实选项，并在首次成功渲染后以同一预览直接编辑；否则仅对历史、pending 或异常/资源失败条目保持完整静态详情，不将其计为全角色编辑覆盖

#### Scenario: 无适配 Template
- **WHEN** 用户查看没有已批准且可用 Template 的历史、pending 或异常 Artwork
- **THEN** 仍可查看完整静态作品详情并复制原 Prompt；唯一 Export 返回登记原图字节，若其不透明则明确标识为历史原图且不宣称透明；不出现 View/Edit 切换、mode URL、本地编辑入口或虚构控件，该静态降级不计入当前全角色调整覆盖

#### Scenario: 高清展示预览或原图加载失败
- **WHEN** 按需加载的展示预览失败，或用户对无 Template 静态作品执行 Export 时原图资源失败
- **THEN** 失败状态只影响对应资源，标题、元数据和其它可用操作保持可用；显示真实失败及重试，不伪报下载成功，也不宣称该 Artwork 已达到角色调整覆盖

#### Scenario: 每件公开 Artwork 均从同一详情进入真实角色调整
- **WHEN** 用户打开本 change 纳入默认 Gallery 的任一公开 Artwork
- **THEN** 该确切 Artwork/version 自动载入自身已批准 Template、默认选项与家族适用的非空调整 tabs；每类具有至少两个实际可达、逐件登记且经批准的不同像素结果，预览和单一 Export 遵循同一成功 revision；不得以删减 Gallery、静态降级、共享系列能力或外部 Prompt 补足覆盖

### Requirement: 详情变体必须原子切换已发布作品版本
CharacterStudio SHALL 只显示同身份、实际制作、已发布且获对应批准的动作或表情变体；切换时图像、名称、facts、Prompt、原图引用和 URL MUST 一起更新。无合格变体时隐藏该区块；静态编辑结果不作为变体。切换 Artwork 或变体时，只在 Draft 配置或外部意图偏离基线的情况下触发可取消的 dirty guard。

#### Scenario: 切换真实动作变体
- **WHEN** 用户在 CharacterStudio 中选择已登记且批准的真实变体并成功加载
- **THEN** 同一 Studio 更新至该 Artwork 版本，图像、facts、Prompt、原图操作和版本保持一致；仅在该版本明确关联 Template 时提供相应本地编辑能力

#### Scenario: 没有变体或变体加载失败
- **WHEN** 当前作品没有合格变体，或选择的变体展示资源缺失、校验失败或解码失败
- **THEN** 无变体时隐藏整个变体区块；加载失败时保留当前成功版本、Prompt、下载和 URL，不显示旧图配新描述

#### Scenario: 切换作品或变体时 Draft dirty
- **WHEN** Draft 配置或外部意图偏离初始基线，且用户选择另一 Artwork 或变体
- **THEN** 先提供可取消的继续编辑或放弃修改；取消时保留当前 Artwork 与 Draft，放弃后才切换

### Requirement: 详情信息层级必须优先作品与直接操作
CharacterStudio SHALL 在静态详情中优先显示原作品预览、名称、最多四个真实 facts 与原始资料；完整 Prompt 可展开并可复制。适配作品打开后在同一面板显示默认成功预览、家族适用类别真实可视选项、当前配置 Prompt 与单一 Export。`.studio-original` 只读且编辑作品默认收起、无 Template 静态作品默认展开。相关角色常显在主预览下方，以紧凑固定宽度左对齐。Copy Prompt 与在 ChatGPT 中使用是主操作，Export 为次级操作；不提供 Reset/Cancel 或重复原图按钮。有效透明 Gallery Artwork 默认配置未变时 Export 返回登记透明原图原字节，已修改配置的 Export 绑定最新成功 revision 的透明 PNG。无 Template 的历史、pending 或异常静态 Export 返回登记原图原字节；不透明历史资源必须明确标识为历史原图，不得宣称透明。额外要求只进入 Prompt，不改变像素；渲染中/失败时禁用 Draft PNG Export。家族适用的调整 tabs 只提供精确登记并符合身份的真实选项，不提供背景配置。不得要求动态生成编辑后的 facts/描述。标题稳定，未经登记的规格、许可、统计、Pet 能力或动作 MUST NOT 展示。

#### Scenario: 首次打开和重开详情
- **WHEN** 用户首次打开或重新打开 Artwork
- **THEN** 面板先展示已登记摘要和可用操作；若绑定精确获批 Template，自动载入默认配置并在成功后直接编辑同一预览；无可用 Template 时仅对历史、pending 或异常/资源失败作品显示完整静态详情，不创建第二套详情，也不将静态降级计为全覆盖

#### Scenario: 查看无证据能力
- **WHEN** 清单没有证明某项许可、尺寸、配件或目标平台能力
- **THEN** 界面不编造徽标、数值、Template 控件、动画或安装入口

#### Scenario: 打开和切换状态时保持标题焦点
- **WHEN** CharacterStudio 首次打开、重新打开或切换 Artwork
- **THEN** 稳定的静态标题栏与正文层级保持可辨，初始焦点不导致正文滚动跳动，角色完整可见，键盘 focus-visible 保持清楚；界面不提供模式切换

#### Scenario: 展开与复制完整 Prompt
- **WHEN** 用户在静态详情检查原始 Artwork Prompt，或在编辑区复制配置 Prompt
- **THEN** 完整双语 Prompt 和全文操作可达；可编辑作品的原 Prompt 位于独立 `.studio-original` 折叠区，当前配置 Prompt 遵循最近一次成功渲染 revision

#### Scenario: 编辑期保留原作资料
- **WHEN** 用户打开已适配作品并展开 `.studio-original`
- **THEN** 可检查登记原图、原始 Prompt、原描述和原 tags；编辑区显示当前成功像素预览和对应配置 Prompt，原作品只读资料与单一 PNG Export 的用途语义清楚区分，不提供额外原图下载操作；原始描述与 tags 不冒充编辑后结果

#### Scenario: Template 首次载入和配置 Prompt 一致
- **WHEN** 用户打开精确获批 Template 作品，或更改任一受支持选项
- **THEN** 在首次 Template 默认渲染成功前显示明确加载状态；之后预览、配置 Prompt 与 Export 绑定同一 Artwork、Template 和成功 revision，渲染未完成/失败时保留上一成功像素并禁止 Draft Export，不要求动态改写原始 facts/描述

#### Scenario: 详情继承网站语言
- **WHEN** 用户在网站切换英文或简体中文后打开或继续查看 CharacterStudio
- **THEN** 面板使用当前网站语言且不提供独立 detailLanguage 控件；Artwork、Draft 选项、额外要求文本和 revision 不变

#### Scenario: 相关角色位于主预览下方
- **WHEN** CharacterStudio 展示相关角色
- **THEN** 相关角色紧跟主预览、常显、不折叠，并以紧凑固定宽度左对齐；未进入可见范围时不请求缩略图

#### Scenario: 单一主操作和静态/编辑 Export 语义
- **WHEN** 用户查看无 Template 的历史、pending 或异常作品，或编辑适配作品
- **THEN** Copy Prompt 与在 ChatGPT 中使用显示为主操作，单一 Export 显示为次级操作；静态降级返回登记原图原始字节，不透明历史资源明确标识为历史原图且不宣称透明；有效透明作品默认配置未改时返回登记原始透明 PNG，编辑配置时仅使用最新成功透明 PNG；没有重复原图按钮或 Reset/Cancel 控件，静态降级不计入全角色调整覆盖

#### Scenario: 编辑区标题和说明
- **WHEN** 用户打开支持直接编辑的作品
- **THEN** 中文编辑区标题为“角色调整”，说明为“预览与 Prompt 随选择同步更新。”；英文显示“Character adjustments”及“Preview and Prompt update with each selection.”；不显示长篇审阅说明

#### Scenario: 统一 Prompt 附加一个额外要求
- **WHEN** 用户填写额外要求并复制 Prompt 或在 ChatGPT 中使用
- **THEN** 输出为原始 Artwork Prompt（静态）或最近成功 Template 配置 Prompt（编辑）加额外要求；额外要求不进入本地渲染或导出，ChatGPT 不自动附图或发送

### Requirement: 详情资源必须分层加载并避免过时结果
封面、缩略图和基础元数据 SHALL 优先满足首屏查看；高清展示预览、精确 Template 的外观、配色、五官、配饰及适用家族的服装图层与选项，以及相关推荐仅按需加载。完整原图 SHALL 仅在实际 Export 需要登记原始字节时读取：包括历史、pending、异常或资源失败作品的静态降级，以及有效 Template 作品未修改默认基线时的原图 Export；仅查看作品、加载 Template 或导出已修改 Draft MUST NOT 提前读取完整原图。同一登记资源的并发请求 SHALL 去重；资源使用者之间的取消和释放 MUST 安全，过时响应不得改写当前 Studio。所有公开角色均具备其自身获批 Template；静态降级只适用于历史、pending、异常或资源失败，不代表全覆盖。

#### Scenario: 打开详情但展示预览尚未返回
- **WHEN** 用户打开 Artwork 且高清展示预览或 Template 图层尚未返回
- **THEN** CharacterStudio 先显示已有封面、元数据和操作，普通静态详情不请求或等待原图完整字节及其 SHA

#### Scenario: 请求高分辨率展示资源
- **WHEN** 用户打开高清展示预览或打开绑定精确获批 Template 的作品
- **THEN** 系统按需读取对应登记展示预览或该 Artwork/version 精确绑定的完整家族适用类别 Template 资源；只有用户实际 Export 且该状态需要原始字节时，才按需读取登记原图，包括静态降级与有效 Template 未修改默认基线的 Export；仅查看、加载 Template 或导出已修改 Draft 不提前读取完整原图，也不把展示衍生图当作原图

#### Scenario: 同一资源被多个状态请求
- **WHEN** 面板、预览、调整选项或其它消费者需要同一登记资源或请求同一版本
- **THEN** 同一 key 的在途请求合并或复用有效缓存；一个消费者取消不使其他活动消费者失效，已无消费者的资源可安全中止或释放

#### Scenario: 快速切换和释放资源
- **WHEN** 用户从 Artwork A 快速切换到 B，关闭仍在加载的面板，或重开 A 后旧回调才到达
- **THEN** 旧请求、解码结果或已释放对象不得覆盖当前 Studio；操作中的消费者继续持有其版本快照，不再引用的资源可安全释放
