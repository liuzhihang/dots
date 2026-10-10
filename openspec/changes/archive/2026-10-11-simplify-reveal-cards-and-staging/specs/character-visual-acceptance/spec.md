# Spec Delta

## MODIFIED Requirements

### Requirement: 作品资源工程状态、美术批准、目标验证和发布状态必须分别记录
每个 Artwork、Template、图层、Draft 与页面呈现 MUST 分别记录文件存在与读取、来源、版本/hash/alpha、实际用途、工程状态、美术批准范围及发布状态。静态 Draft 不属于目标包；任一工程检查不得代替用户艺术确认，历史批准只覆盖其明确记录的范围。

#### Scenario: 资源存在但没有人工批准
- **WHEN** 候选 Template 图层通过文件检查但没有对应用户美术确认
- **THEN** 工程状态可记为可读取，艺术状态仍待确认，不能展示为批准能力或默认模板选项

#### Scenario: Draft 导出成功
- **WHEN** Template 生成并导出 Draft PNG
- **THEN** 仅记录该 Draft 的渲染与文件检查结果，不扩大原 Artwork、Template 图层或页面的批准状态

#### Scenario: 已批准作品缺失资源
- **WHEN** 已批准原图或其登记封面缺失或 hash 不符
- **THEN** 对应资源状态显示缺失/不匹配，不伪报下载成功，原批准记录保持原值及范围

### Requirement: 页面和资源验收必须绑定本次实际版本与观察范围
页面验收 MUST 记录源码和静态资源版本、浏览器与 CSS 视口、实际观察路径和结果。角色库、CharacterStudio 静态详情/直接编辑、原图下载和 Draft 导出的功能、视觉与文件结果 SHALL 分开记录；模拟视口、截图、构建或渲染脚本 MUST NOT 自动代表用户艺术确认或实体设备验证。

#### Scenario: 检查桌面及响应式页面
- **WHEN** 验收者在浏览器检查 1440×900、390×844、320×700 和 768×1024 页面，以及作品查看、编辑和返回路径
- **THEN** 记录实际源码/资源版本、浏览器、视口、截图、交互和已覆盖的错误路径；模拟尺寸明确标为模拟

#### Scenario: 验证下载 PNG 与 Prompt
- **WHEN** 验收者检查原图下载、当前 Draft 导出及用户选择的 Prompt
- **THEN** 分别回读原图登记字节、Draft PNG 内容/尺寸/透明 alpha/Template revision/当前选项，以及剪贴板文本或官方 ChatGPT 链接中的实际 Prompt；未回读的输出保持未验证

#### Scenario: 验收直接编辑与静态详情边界
- **WHEN** 验收者打开精确获批 Template 作品、无 Template 作品及外部 reviewHarness 中的 pending Template
- **THEN** 验证获批模板自动载入，只有 reviewHarness 可检查 pending Template，无 Template 作品保留完整静态详情；检查无 View/Edit tabs 或 mode URL、分类 tabs 的键盘操作、选项操作和预览状态、原作品资料独立收纳、配置 Prompt/导出与成功预览绑定及全部 dirty guards，并分别记录工程结果与 7.4 所覆盖的确切 Artwork、Template、组合和页面艺术批准范围

#### Scenario: 验收 2026-10-10 CR 简化流程
- **WHEN** 验收者使用最新版角色库与 CharacterStudio
- **THEN** 在 `design/acceptance/current-20261010-v99/cr-simplification-20261010/` 记录全站语言继承、`#/guide` not-found、无 Guide 导航、D01 左侧大标题/右侧真实角色群像 banner、240px 短介绍约束不限制整体 banner 高度、相关角色常显于预览下方、三项主操作、无 Reset/Cancel/重复原图按钮、静态 Export 原字节与编辑 Export 最新成功 PNG、统一 Prompt 和额外要求不改像素、ChatGPT 不自动附图/发送；确认 header 固定、body 滚动、tabs 不 sticky、手机自然滚动且首次完整角色可见；核对命中区域与实际按钮矩形一致、至少44px且滚动不遮挡。无需要求编辑期间固定预览，也不新增手机软件键盘验收门槛。

### Requirement: 取消范围和历史缺证不得转换为验收通过
被取消、失败或待确认的历史工作 SHALL 保持原状态，缺失证据不得补写为通过。当前通过状态只由本次范围对应的工程证据、来源、人工批准或目标验证产生；新版本规划 MUST NOT 覆盖 v96、v97、v98 或历史 change 记录。

#### Scenario: 已取消工作不作为当前通过项
- **WHEN** 当前范围不再包含一项历史工作，且原记录为取消、失败或待确认
- **THEN** 保留原状态，不因本次角色库重构将其改写为通过

#### Scenario: 新增变体没有确认记录
- **WHEN** Template 或图层通过工程验证但没有对应用户美术确认
- **THEN** 工程状态与艺术状态分别显示，不能以渲染成功替代批准

## ADDED Requirements

### Requirement: 原型裁决必须分别遵循 D01 主稿与 D02 补充稿
视觉验收 SHALL 以 D01-main-third-dark-gallery-studio.png 作为唯一主稿，并只以 D02-support-first-mobile-guide.png 补充手机细节。D02 的 Guide 面板和导航不属于网站产品。旧露台、阶梯、城市或实体房间概念不得作为本次页面依据；原型图像只提供设计参考，不作为生产像素资源。

#### Scenario: 验收桌面角色库
- **WHEN** 验收桌面首页、角色网格或 CharacterStudio
- **THEN** 按 D01 检查深色数字画布、轻量烟黑玻璃、角色层级和同一 Studio 状态；不混入旧露台方案或原型截图像素

#### Scenario: 验收手机细节
- **WHEN** 验收手机页面
- **THEN** 只按 D02 的手机页面面板补充核对，不将 Guide 面板实现为页面，也不将 D02 扩展为第二主稿

### Requirement: 代表 Template 必须完成素材、能力和美术边界验收
首批 Template SHALL 分别以 Dots 与 Grok Bot 代表作品完成真实浏览器端到端验收；能力声明必须引用真实基底、图层、来源、版本和合法组合。候选作品图不证明编辑图层存在；任一素材、支持值或批准缺失都 SHALL 作为明确缺口，不宣称对应编辑能力已完成。

#### Scenario: 核验 Dots 代表 Template
- **WHEN** 维护者规划蓝色耳机 Dots 代表 Template
- **THEN** 核对蓝色耳机候选 v2 的短密绒、成对眼和无肢体身份，逐项列出基底、颜色/形状/眼睛/眼镜/配件图层、组合和来源；没有对应资产的选项保持不可用并等待制作与美术确认

#### Scenario: 核验 Grok Bot 代表 Template
- **WHEN** 维护者规划紫色软几何 Grok Bot 代表 Template
- **THEN** 核对紫色软几何候选 v2 的软几何主体和成对胶囊眼，列出实际拥有的基底、图层、属性值、组合和来源；不得以屏幕脸、配件贴图或候选整图冒充可编辑资源

#### Scenario: 验收首批合法组合和批准范围
- **WHEN** 两套 Template 准备标记为首批可用
- **THEN** 在真实 CharacterStudio 中逐个完成 Dots 的 12 个和 Grok Bot 的 16 个矩阵合法组合的预览与透明 PNG 回读；艺术批准明确覆盖实际配置集合，未完成的组合和素材继续保持阻塞，不得以 Prompt-only 或单项批准代替全部组合验收

### Requirement: 模板视觉验收必须逐项对比预览与导出
对每个支持的属性和合法组合，验收 SHALL 确认选择实际改变预览像素，导出 PNG 与同一 Artwork 基线、Template revision 和选项一致，且未改变批准原图。素材缺失、不支持组合、取消或快速切换时 MUST 不输出旧预览配新状态。

#### Scenario: 对比受支持选项的预览和导出
- **WHEN** 验收者选择一个受支持的颜色、形状、眼睛、眼镜或配件并导出
- **THEN** 保存预览与 PNG 对照，确认二者使用相同 revision 和选择，原 Artwork 字节不变

#### Scenario: 错误或过时资源到达
- **WHEN** 资源失败、Template revision 改变或用户快速切换作品后旧请求返回
- **THEN** 当前预览和导出只使用当前已确认 revision；错误和过时响应不会覆盖当前内容

#### Scenario: 最新预览失败时阻止导出
- **WHEN** 最新 requestedRevision 尚未渲染完成或渲染失败，而界面还留有上一张成功预览
- **THEN** 导出保持禁用，上一张图不得作为最新选项的成功导出

## REMOVED Requirements

### Requirement: 特征卡视觉材料必须可追溯且达到展示质量
**Reason**: 随机揭晓卡、结果摘要及其视觉素材不再属于产品。
**Migration**: 保留已制作素材的来源和历史记录；本次验收只检查 Artwork、Template、Draft 与页面，不迁移揭晓卡或保留旧指南页面。

### Requirement: 候选线索只能进入明确的审阅预览
**Reason**: 原要求约束的是揭晓线索候选，不再符合角色库中的 pending Artwork 与 Template 素材模型。
**Migration**: pending Artwork、Template 图层和页面按各自资源用途与批准范围记录；不把旧线索状态映射为模板批准或 Artwork 发布资格。
