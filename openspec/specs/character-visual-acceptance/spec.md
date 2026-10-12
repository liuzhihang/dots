# character-visual-acceptance Specification

## Purpose

规定如何独立记录 Artwork/Asset 工程状态、用户艺术确认、目标平台验证和实际发布状态，并以真实页面/文件证据判断其具体范围。

## Requirements

### Requirement: 作品资源工程状态、美术批准、目标验证和发布状态必须分别记录
每个 Artwork、Template、图层、透明替换资源、Draft 与页面呈现 MUST 分别记录文件存在与读取、来源、版本/hash/alpha、实际用途、工程状态、美术批准范围及发布状态。24 件 change 前已批准 Artwork 是历史批准基线；本 change 新增 Artwork、透明替换版本、Template、每个 Template 选项与合法组合、Draft 样例及页面呈现需各自按准确资源和用途记录，不得继承其它对象的批准。静态 Draft 不属于目标包；任一工程检查不得代替用户艺术确认，历史批准只覆盖其明确记录的范围。


系统 SHALL 按家族提供以下调整范围：Dots / Grok Bot 取消服装 tab，只保留外观、配色、五官、配饰四类；Muse、动物、人物和独立机器人保留服装，共五类。Dots / Grok 的服装能力不适用，不以 None 控件充数，也不将衣物改名塞进配饰。每个适用类别仍须至少两个真实、合法可达且改变像素的结果。原有含围衣候选及检查记录保留为历史制作证据，不作为当前推荐或美术通过依据。

#### Scenario: 资源存在但没有人工批准
- **WHEN** 候选 Template 图层通过文件检查但没有对应用户美术确认
- **THEN** 工程状态可记为可读取，艺术状态仍待确认，不能展示为批准能力或默认模板选项

#### Scenario: Draft 导出成功
- **WHEN** Template 生成并导出 Draft PNG
- **THEN** 仅记录该 Draft 的渲染与文件检查结果，不扩大原 Artwork、Template 图层或页面的批准状态

#### Scenario: 已批准作品缺失资源
- **WHEN** 已批准原图、透明替换版本、Template 图层或登记封面缺失或 hash 不符
- **THEN** 对应资源状态显示缺失/不匹配，不伪报下载成功，原批准记录保持原值及范围

### Requirement: 页面和资源验收必须绑定本次实际版本与观察范围
页面验收 MUST 记录源码和静态资源版本、浏览器与 CSS 视口、实际观察路径和结果。角色库、全角色 CharacterStudio 直接编辑、历史/异常静态降级、未修改透明原图下载及修改后透明 Draft 导出的功能、视觉与文件结果 SHALL 分开记录；模拟视口、截图、构建或渲染脚本 MUST NOT 自动代表用户艺术确认或实体设备验证。Change 前 24 件已批准作品与本 change 后续拟公开的每件作品均 SHALL 纳入本轮覆盖矩阵；不能以抽样代表模板或静态降级条目证明全覆盖。

#### Scenario: 检查桌面及响应式页面
- **WHEN** 验收者在真实浏览器检查 1440×900、390×844、320×700 和 768×1024 页面，以及角色库、作品查看、编辑和返回路径
- **THEN** 记录实际源码/资源版本、浏览器、视口、截图、交互和已覆盖的错误路径；模拟尺寸明确标为模拟，并覆盖当前 Gallery 全部角色而非只选代表角色

#### Scenario: 验证下载 PNG 与 Prompt
- **WHEN** 验收者检查登记原图下载、未修改作品导出、当前调整 Draft 导出及配置 Prompt
- **THEN** 分别回读原图登记字节、未修改透明原图字节、Draft PNG 内容/尺寸/透明 alpha/Artwork 与 Template 版本/成功 revision/当前家族适用类别选项，以及剪贴板文本或官方 ChatGPT 链接中的实际 Prompt；未回读的输出保持未验证

#### Scenario: 验收直接编辑与静态详情边界
- **WHEN** 验收者打开 change 前 24 件及本 change 拟公开的每件精确获批 Artwork，另打开无可用 Template 的历史、pending、异常记录及外部 reviewHarness 中的 pending Template
- **THEN** 对每件可公开角色验证 Template 自动载入、家族适用的非空调整 tabs、每类至少两个真实可达结果、合法组合、操作状态、预览像素、配置 Prompt 与透明导出绑定成功 revision；历史/异常访问保持正确静态降级，pending 只由 reviewHarness 审阅且不能算全覆盖。检查无 View/Edit tabs 或 mode URL、原作品资料独立收纳及全部 dirty guards，并分别记录工程结果与确切 Artwork、Template、选项、组合和页面艺术批准范围

#### Scenario: 验收 2026-10-10 CR 简化流程
- **WHEN** 验收者使用本 change 的 Gallery 与 CharacterStudio
- **THEN** 在本轮 `.artifacts/` 证据中记录全站语言继承、`#/guide` not-found、无 Guide 导航、D01 左侧标题/右侧真实角色群像 banner、相关角色常显于预览下方、Copy Prompt/ChatGPT/Export 操作、无 View/Edit、无 Reset/Cancel/重复原图按钮、未修改透明原图与已修改透明 Draft 的正确 Export、统一 Prompt 和额外要求不改本地像素及 ChatGPT 不自动附图/发送；确认 header、body 滚动、tabs 不 sticky、手机自然滚动和完整角色可见；核对实际按钮矩形、至少 44px 命中区域和滚动无遮挡。不得改写 `design/acceptance/` 中冻结的历史报告，模拟视口不得宣称为实体设备验收

### Requirement: 取消范围和历史缺证不得转换为验收通过
被取消、失败或待确认的历史工作 SHALL 保持原状态，缺失证据不得补写为通过。当前通过状态只由本次范围对应的工程证据、来源、人工批准或目标验证产生；新版本规划 MUST NOT 覆盖 v96、v97、v98 或历史 change 记录。

#### Scenario: 已取消工作不作为当前通过项
- **WHEN** 当前范围不再包含一项历史工作，且原记录为取消、失败或待确认
- **THEN** 保留原状态，不因本次角色库重构将其改写为通过

#### Scenario: 新增变体没有确认记录
- **WHEN** Template 或图层通过工程验证但没有对应用户美术确认
- **THEN** 工程状态与艺术状态分别显示，不能以渲染成功替代批准

### Requirement: 原型裁决必须分别遵循 D01 主稿与 D02 补充稿
视觉验收 SHALL 以 D01-main-third-dark-gallery-studio.png 作为唯一主稿，并只以 D02-support-first-mobile-guide.png 补充手机细节。D02 的 Guide 面板和导航不属于网站产品。旧露台、阶梯、城市或实体房间概念不得作为本次页面依据；原型图像只提供设计参考，不作为生产像素资源。

#### Scenario: 验收桌面角色库
- **WHEN** 验收桌面首页、角色网格或 CharacterStudio
- **THEN** 按 D01 检查深色数字画布、轻量烟黑玻璃、角色层级和同一 Studio 状态；不混入旧露台方案或原型截图像素

#### Scenario: 验收手机细节
- **WHEN** 验收手机页面
- **THEN** 只按 D02 的手机页面面板补充核对，不将 Guide 面板实现为页面，也不将 D02 扩展为第二主稿

### Requirement: 代表 Template 必须完成素材、能力和美术边界验收
每件拟公开的 Template SHALL 对应其 Artwork/version 精确绑定的真实基底、家族适用类别调整资源、来源、合法配方和美术批准；Change 前 24 件已批准 Artwork 与本 change 后续获批并公开的所有 Artwork SHALL 逐件完成覆盖。首批 Dots 与 Grok Bot 代表作品继续验证家族身份，但代表作品不得替代其它角色的独立素材、Template、组合或批准。候选作品图不证明编辑图层存在；任一素材、支持值、合法配方或批准缺失都 SHALL 作为明确缺口，不宣称对应编辑能力已完成。

#### Scenario: 核验 Dots 代表 Template
- **WHEN** 维护者规划蓝色耳机 Dots 代表 Template
- **THEN** 核对该精确 Artwork/version 的短密绒、成对眼和无肢体身份，逐项列出外观、配色、五官、配饰及适用家族的服装的基底/图层、锚点、层序、合法组合和来源；服装不得新增手脚，没有对应资产的选项保持不可用并等待制作与美术确认

#### Scenario: 核验 Grok Bot 代表 Template
- **WHEN** 维护者规划紫色软几何 Grok Bot 代表 Template
- **THEN** 核对该精确 Artwork/version 的软几何主体、成对胶囊眼和无肢体身份，列出实际拥有的基底、家族适用类别调整图层、属性值、组合和来源；不得以屏幕脸、配件贴图或候选整图冒充可编辑资源

#### Scenario: 验收当前与新增 Artwork 的 Template 覆盖
- **WHEN** 维护者准备发布或声明本 change 的全角色调整完成
- **THEN** 逐一核对 change 前 24 件 Artwork 与所有已获批新增 Artwork 的确切版本均绑定自身获批 Template，家族适用类别调整均有至少两个真实可达结果；无 Template、pending 或失败降级角色不计作完成，不能收缩 Gallery 规避缺口

#### Scenario: 验收首批合法组合和批准范围
- **WHEN** 任一 Artwork 的 Template 准备公开使用
- **THEN** 在真实 CharacterStudio 中逐个完成该 Template 全部声明合法组合的预览、透明 PNG 回读与逐项视觉检查；美术批准明确覆盖该 Artwork/version、实际图层和组合集合，未完成的组合与素材继续保持阻塞，不得以 Prompt-only、单个代表模板或单项批准代替

### Requirement: 模板视觉验收必须逐项对比预览与导出
对每个已登记 Template 的每个受支持属性结果和全部合法组合，验收 SHALL 确认用户选择实际改变成功预览像素，配置 Prompt 描述同一最终角色，透明 PNG 与同一 Artwork/version 基线、Template revision、完整选项、图层配方和成功快照一致，alpha 真实且未改变批准原图。工程配方验证、逐组合视觉检查与用户美术批准分别记录；QA 生成图层不能替代生产资源。素材缺失、不支持组合、取消或快速切换时 MUST 不输出旧预览配新状态。

#### Scenario: 对比受支持选项的预览和导出
- **WHEN** 验收者为当前 Gallery 任一可编辑 Artwork 选择家族适用类别调整中一个受支持选项并导出
- **THEN** 保存预览、配置 Prompt 与 PNG 对照，确认至少两个选项结果有真实像素差异，输出使用相同 Artwork/version、Template revision、选项及层配方，原 Artwork 字节不变且 PNG 保留真实 alpha；对应美术确认仍单独记录

#### Scenario: 错误或过时资源到达
- **WHEN** 资源失败、Template revision 改变或用户快速切换作品后旧请求返回
- **THEN** 当前预览和导出只使用当前 Artwork 与已确认 revision；错误和过时响应不会覆盖当前内容，也不使缺失素材获得批准

#### Scenario: 最新预览失败时阻止导出
- **WHEN** 最新 requestedRevision 尚未渲染完成或渲染失败，而界面还留有上一张成功预览
- **THEN** Draft 导出保持禁用，上一张图不得作为最新选项的成功导出；恢复有效资源后必须重新获得匹配当前配置的成功快照

#### Scenario: 未修改基线与编辑后的透明输出分别验收
- **WHEN** 验收者分别导出未修改的有效透明 Artwork 和至少一项已修改的成功 Draft
- **THEN** 未修改导出与登记原 PNG 字节逐字节一致；修改后 PNG 与当前成功预览使用同一冻结快照且 alpha 保持透明，二者均不含 CSS 底色或背景图层，Artwork 原始字节、发布记录与批准状态均不变

### Requirement: 无损传输派生的工程证明与美术批准分别记录
PNG 源资产及其 WebP 传输派生 SHALL 分别记录工程状态；派生证明 SHALL 绑定源路径、源 hash、尺寸和字节量，并单独记录派生 hash、MIME、alpha、无损状态及源/派生解码 RGBA 等同性。RGBA 等同只证明传输像素未改变，不扩大、取代或重置 PNG 源资产的美术批准范围。

#### Scenario: 核验等像素 WebP 传输派生
- **WHEN** 已批准的 PNG 源资产登记一个供详情预览或 Template 图层传输的 WebP 派生
- **THEN** 工程验收记录精确源路径、hash、宽高、字节量，以及派生文件 hash、`image/webp` MIME、宽高、字节量、alpha、无损标记和源/派生解码 RGBA hash 相等；原 PNG 的 Artwork/Asset 版本、美术批准和用途保持原范围

#### Scenario: WebP 派生工程证明不通过
- **WHEN** 派生资源的源绑定、派生 hash、格式、alpha、无损状态或解码 RGBA 等同性验证失败
- **THEN** 派生资源记为不可用并阻止传输使用；工程失败不改写 PNG 源资产的批准记录，也不能把派生资源记为已批准内容
