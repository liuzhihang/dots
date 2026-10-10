# studio-creation-experience Specification

## Purpose

规范完整 Artwork 的详情、已发布变体、Prompt 复制、资源下载和参考图辅助，让用户直接查看/带走作品而不进入旧编辑器。

## Requirements

### Requirement: 作品详情必须直接提供实际图片及带走操作
CharacterStudio SHALL 在同一 Artwork 上下文中提供真实作品、名称、facts、只读原始资料和额外要求文本框。Copy Prompt 与在 ChatGPT 中使用是主操作，Export 为次级操作。精确获批 Template 打开后 SHALL 自动载入真实模板与可视选项；默认成功像素预览是同一面板直接编辑和导出的唯一预览。无 Template 时 Export 返回登记原图字节，适配编辑时仅返回最新成功 revision 的 PNG；渲染进行或失败时禁止新的 PNG 导出。统一 Prompt 为原 Prompt 或最近成功配置 Prompt 加用户额外要求；额外要求不改变本地像素，ChatGPT MUST NOT 自动附图或发送。无 Template 时保持完整静态详情，不显示虚构编辑项。pending Template 仅由外部 reviewHarness 打开，资格不变。查看不得依赖获取完整原图或等待 SHA 校验。

#### Scenario: 从画廊或随机结果打开详情
- **WHEN** 用户从唯一角色库打开已发布 Artwork；旧随机结果入口已退役
- **THEN** CharacterStudio 先显示面板、封面、名称、facts 和可用操作；若存在精确获批 Template，则按需自动加载其默认配置和可视选项，并在首次成功渲染后以同一预览直接编辑；否则保持完整静态详情

#### Scenario: 无适配 Template
- **WHEN** 用户查看没有已批准且可用 Template 的 Artwork
- **THEN** 仍可查看完整静态作品详情并复制原 Prompt；唯一 Export 返回登记原图字节；不出现 View/Edit 切换、mode URL、本地编辑入口或虚构控件

#### Scenario: 高清展示预览或原图加载失败
- **WHEN** 按需加载的展示预览失败，或用户对无 Template 作品执行 Export 时原图资源失败
- **THEN** 失败状态只影响对应资源，标题、元数据和其它可用操作保持可用；显示真实失败及重试，不伪报下载成功

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
CharacterStudio SHALL 在静态详情中优先显示原作品预览、名称、最多四个真实 facts 与原始资料；完整 Prompt 可展开并可复制。适配作品打开后在同一面板显示默认成功预览、可视选项、当前配置 Prompt 与 Export。`.studio-original` 只读且编辑作品默认收起、无 Template 静态作品默认展开。相关角色常显在主预览下方，以紧凑固定宽度左对齐。Copy Prompt 与在 ChatGPT 中使用是主操作，Export 为次级操作；不提供 Reset/Cancel 或重复原图按钮。静态 Export 返回原图原字节，适配编辑 Export 绑定最新成功 revision。额外要求只进入 Prompt，不改变像素；渲染中/失败时禁用 PNG Export。不得要求动态生成编辑后的 facts/描述。标题稳定，未经登记的规格、许可、统计、Pet 能力或动作 MUST NOT 展示。

#### Scenario: 首次打开和重开详情
- **WHEN** 用户首次打开或重新打开 Artwork
- **THEN** 面板先展示已登记摘要和可用操作；若绑定精确获批 Template，自动载入默认配置并在成功后直接编辑同一预览；无 Template 时显示完整静态详情，不创建第二套详情

#### Scenario: 查看无证据能力
- **WHEN** 清单没有证明某项许可、尺寸、配件或目标平台能力
- **THEN** 界面不编造徽标、数值、Template 控件、动画或安装入口

#### Scenario: 打开和切换状态时保持标题焦点
- **WHEN** CharacterStudio 首次打开、重新打开或切换 Artwork
- **THEN** 稳定的静态标题栏与正文层级保持可辨，初始焦点不导致正文滚动跳动，角色完整可见，键盘 focus-visible 保持清楚；界面不提供模式切换

#### Scenario: 展开与复制完整 Prompt
- **WHEN** 用户在静态详情检查原始 Artwork Prompt，或在编辑区复制配置 Prompt
- **THEN** 完整双语 Prompt 和全文操作可达；可编辑作品的原Prompt位于独立 `.studio-original` 折叠区，当前配置 Prompt 遵循最近一次成功渲染 revision

#### Scenario: 编辑期保留原作资料
- **WHEN** 用户打开已适配作品并展开 `.studio-original`
- **THEN** 可检查登记原图、原始 Prompt、原描述和原 tags；编辑区显示当前成功像素预览和对应配置 Prompt，原始内容下载与本地 PNG 导出保持独立，原始描述与 tags 不冒充编辑后结果

#### Scenario: Template 首次载入和配置 Prompt 一致
- **WHEN** 用户打开精确获批 Template 作品，或更改任一受支持选项
- **THEN** 在首次 Template 默认渲染成功前显示明确加载状态；之后预览、配置 Prompt 与导出绑定同一 Artwork、Template 和成功 revision，渲染未完成/失败时保留上一成功像素并禁止导出，不要求动态改写原始 facts/描述

#### Scenario: 详情继承网站语言
- **WHEN** 用户在网站切换英文或简体中文后打开或继续查看 CharacterStudio
- **THEN** 面板使用当前网站语言且不提供独立 detailLanguage 控件；Artwork、Draft 选项、额外要求文本和 revision 不变

#### Scenario: 相关角色位于主预览下方
- **WHEN** CharacterStudio 展示相关角色
- **THEN** 相关角色紧跟主预览、常显、不折叠，并以紧凑固定宽度左对齐；未进入可见范围时不请求缩略图

#### Scenario: 单一主操作和静态/编辑 Export 语义
- **WHEN** 用户查看无 Template 作品或编辑适配作品
- **THEN** Copy Prompt 与在 ChatGPT 中使用显示为主操作，Export 显示为次级操作；无 Template 时 Export 返回原图原始字节，适配编辑时仅使用最新成功 PNG；没有重复原图按钮或 Reset/Cancel 控件

#### Scenario: 编辑区标题和说明
- **WHEN** 用户打开支持直接编辑的作品
- **THEN** 中文编辑区标题为“微调作品”，说明为“预览与 Prompt 随选择同步更新。”；英文显示“Refine this character”及“Preview and Prompt update with each selection.”；不显示长篇审阅说明

#### Scenario: 统一 Prompt 附加一个额外要求
- **WHEN** 用户填写额外要求并复制 Prompt 或在 ChatGPT 中使用
- **THEN** 输出为原始 Artwork Prompt（静态）或最近成功 Template 配置 Prompt（编辑）加额外要求；额外要求不进入本地渲染或导出，ChatGPT 不自动附图或发送

### Requirement: 详情资源必须分层加载并避免过时结果
封面、缩略图和基础元数据 SHALL 优先满足首屏查看；高清展示预览、Template 图层、配件选项和相关推荐仅按需加载，完整原图只在用户明确下载时读取。同一登记资源的并发请求 SHALL 去重；资源使用者之间的取消和释放 MUST 安全，过时响应不得改写当前 Studio。

#### Scenario: 打开详情但展示预览尚未返回
- **WHEN** 用户打开 Artwork 且高清展示预览或 Template 图层尚未返回
- **THEN** CharacterStudio 先显示已有封面、元数据和操作，普通静态详情不请求或等待原图完整字节及其 SHA

#### Scenario: 请求高分辨率展示资源
- **WHEN** 用户打开高清展示预览或打开绑定精确获批 Template 的作品
- **THEN** 系统按需读取对应登记展示预览或 Template 资源；只有无 Template 作品使用唯一 Export 操作读取原图原始字节，不把展示衍生图当作原图

#### Scenario: 同一资源被多个状态请求
- **WHEN** 面板、预览、分类选项或其它消费者需要同一登记资源或请求同一版本
- **THEN** 同一 key 的在途请求合并或复用有效缓存；一个消费者取消不使其他活动消费者失效，已无消费者的资源可安全中止或释放

#### Scenario: 快速切换和释放资源
- **WHEN** 用户从 Artwork A 快速切换到 B，关闭仍在加载的面板，或重开 A 后旧回调才到达
- **THEN** 旧请求、解码结果或已释放对象不得覆盖当前 Studio；操作中的消费者继续持有其版本快照，不再引用的资源可安全释放
