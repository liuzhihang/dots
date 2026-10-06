# character-creation-modes Specification

## Purpose

定义完整模板和受信任模块 2D 组合如何共用角色设定与解算；规定 project v2 / VERSION 10 的严格读写、真实输出和结构诊断边界，旧格式明确拒绝。

## Requirements

### Requirement: 整图与组合模式必须共用同一份角色设定
`artwork` 与 `composer` SHALL 作为当前项目 v2 内的两种内部模式保留，不显示技术模式页签。两种模式 SHALL 编辑同一份角色 VERSION 10 配置，并共用当前身份、颜色、表情、姿态、配饰、背景、来源和禁止项。整图参数变化 SHALL 更新当前设定的 Prompt；除非实际解析并绘制出新图，静态整图 SHALL 保持原样并明确标记为固定素材，不能声称代表当前未渲染配置。

#### Scenario: 在整图模式中更改角色设定
- **WHEN** 用户在整图模式切换颜色、表情、姿态或配饰
- **THEN** 当前角色设定和 Prompt 更新，静态整图保持原文件并标明不随未支持设定变化

#### Scenario: 两种模式使用同一角色设定
- **WHEN** 用户从整图切到组合，或从组合切回整图
- **THEN** 角色配置与 Prompt 语义保持一致；模式切换不重置角色、配饰意图、参考文字或输出设置

### Requirement: 项目 JSON 必须包装模式状态且保持现有角色 schema
所有新保存、自动保存、导出和随机应用结果 SHALL 使用 `{format:"dot-studio-project", version:2}`，并包含现有角色 VERSION 10 结构。`creation.mode` 可保留内部的 `artwork` / `composer` 流程状态；`creation.composition` MUST 为 `null` 或共享 resolver 实际生成的可信组合引用对象，非 null 对象以 `kind` 区分 `template` 与 `modular`。当没有实际 Canvas 输出时 composition MUST 为 null；角色 VERSION 10 的 allowlisted Prompt-only 字段继续可保存，resolver 在导入/恢复后重新计算不支持原因，不得伪造渲染引用或阻止保存。完整模板仍引用实际登记 PNG、版本、哈希和配方；模块组合引用实际基底与模块素材。项目图片输出不能由内嵌位图、任意本机路径、任意 URL 或 JSON 直接提供的图层清单指定。旧包装、裸角色 JSON（包括裸 VERSION 10）、VERSION 10 之前的角色 schema、旧 alias 和旧恢复副本 MUST 明确提示当前格式不支持；系统 MUST NOT 自动迁移、恢复 `legacy.originalConfig`、Muse/Pets alias 或将旧字段映射到新标签/素材。拒绝输入时原始 JSON 和旧存储草稿保持未覆盖，提示 MUST NOT 声称数据已删除。包装 v2 MUST 进行严格字段白名单校验，且 MUST 拒绝 `legacy.originalConfig`、Muse/Pets alias 绕行字段。当前会话中的有效角色草稿、模板、背景、模式、撤销和重做 SHALL 在 v2 保存/恢复中保持一致；角色 VERSION 10 中的当前 canonical `family` 身份字段按现有含义保留，不全局改名为 tag。

#### Scenario: 保存并重新导入项目
- **WHEN** 用户将仅含现有模板/姿态配方的任一模式角色导出为项目 JSON，之后重新导入
- **THEN** 文档使用包装 version 2 与非 null 的 `creation.composition.kind: template`，保存完整模板/姿态 PNG 的登记 ID、版本、哈希和配方引用；角色 VERSION 10、模式与实际画面保持一致

#### Scenario: 保存并重新导入模块项目
- **WHEN** 用户将包含模块素材的角色导出并重新导入
- **THEN** 文档使用包装 version 2 且 `creation.composition` 为非 null、`kind: modular`，角色仍为 VERSION 10，模块素材 ID/版本/哈希、槽位输入和解析指纹经可信目录重新验证后恢复

#### Scenario: 保存并重新导入真实模板随机结果
- **WHEN** 用户将随机得到的完整模板组合导出并重新导入
- **THEN** 文档使用包装 version 2 且 `creation.composition` 为非 null、`kind: template`，保存的实际模板/状态素材 ID、版本、哈希和配方经可信目录重新验证后恢复为同一结果，不只保存 seed

#### Scenario: 保存不可绘制的 Prompt-only 设定
- **WHEN** 用户保存包含当前 Canvas 不支持的参数或未解决组件的角色设定
- **THEN** 项目仍使用包装 v2 和角色 VERSION 10，但 `creation.composition` 为 null；allowlisted Prompt-only 配置可保存并导出，系统不伪造 PNG/素材引用，能力原因由 resolver 重新计算

#### Scenario: 撤销模式或作品选择
- **WHEN** 用户切换模式、受信任整图作品或模块槽位选择后执行撤销和重做
- **THEN** 模式、作品 ID、标准化组合输入及同一份角色设定按操作历史一起恢复，当前活动会话草稿不丢失，不保留新旧两次解析的混合图层

#### Scenario: 导入未知或不匹配的作品 ID
- **WHEN** v2 项目包含未登记或不匹配的模板/状态素材 ID、基底 ID、模块 ID、素材版本、哈希或配方引用
- **THEN** 系统拒绝该导入成为有效当前组合并明确报错，保留此前有效项目；不回退到其他角色组的图片，也不解析 JSON 提供的 URL、路径或直接图层定义

#### Scenario: 导入旧包装、裸角色或旧恢复别名
- **WHEN** 用户导入项目包装 v1、裸角色 JSON（包括 VERSION 10）、VERSION 10 之前的 schema，或包含 `legacy.originalConfig`、Muse/Pets alias 的数据
- **THEN** 系统显示当前格式不支持，不自动迁移、映射 alias 或恢复旧配置；源文本与旧存储草稿不被覆盖，也不宣称已删除

### Requirement: 整图模式只展示并原样下载本地登记的完整作品
整图模式 SHALL 只允许从站点本地登记的作品清单选择固定完整图；记录 SHALL 包含稳定 ID、所属角色组、作品名、素材来源说明和历史/原创/官方身份状态。整图导出 SHALL 下载所选文件的原始字节，不按当前参数重新裁切、重绘或合成。没有已登记作品的角色组 SHALL 如实显示无整图。历史样张 MUST NOT 被称为官方资产、当前参数生成结果、新基准角色或网页美术验收通过。

#### Scenario: 下载历史整图示例
- **WHEN** 用户选择一张登记为历史示例的整图并下载
- **THEN** 页面清楚标示所属组及历史示例状态，下载文件与本地来源文件字节一致，Prompt 则根据当前角色配置生成

#### Scenario: 切换到没有整图的角色组
- **WHEN** 用户为没有登记完整图的角色组选择整图模式
- **THEN** 页面显示该组没有可用整图，仍可编辑设定和复制 Prompt，不能显示别组作品作为替代

### Requirement: 组合模式必须由可信分层图真实合成当前输出
现有组合模式 SHALL 继续只读取应用随站点发布并在受信任清单登记的 `layered-2d` 资产包。每个旧包 MUST 绑定角色组、来源和版本，声明其固定视角、可支持配置值、图层次序、遮挡/接触关系与输出边界。影响主体、轮廓、表情结构或配饰结构的非颜色字段 MUST 由完整配方声明：`pack.variants` 是 `{id, values, layerIds}` 数组；`values` MUST 绑定所有非颜色可编辑字段，配方间不得有重复的 `values` 绑定，并且 MUST 恰有一个基准配方。合成时 MUST 只绘制当前匹配配方所列的 `layerIds`，不得自动附带基础图层或上一配方图层。颜色能力 MUST 通过当前匹配配方实际选中的每个图层的 `tintPath` 验证，且解析颜色与实际像素 MUST 一致。若旧包没有 `variants`，只可对固定图层进行已声明的染色，不能开放结构字段或角色背景编辑。角色背景字段只作为严格校验的惰性元数据，不得进入 Canvas、Prompt 或渲染计划；当前角色 Canvas 和 PNG MUST 保持透明。所有非颜色的图层集合或结构差异 MUST 由完整配方明确声明。现有实现 MUST 继续拒绝包含任一 `layer.when` 的旧资产包，不支持条件层显隐。旧包 `editablePaths` 声明 `camera`、`aspect`、`output`、`motionStyle` 或 `motionSpeed` 中任一项时，系统 MUST 拒绝该包。系统 MUST 对真实图层执行合成，并且只在完整 Canvas 已成功渲染且当前配置完全落在对应包声明能力内时，显示或导出当前角色 PNG。

新的 `modular-2d` 合同 SHALL 作为独立、版本化的受信任资产类型运行，并 SHALL 遵守 `modular-2d-composition` delta 的素材契约、硬约束、锚点/遮挡/抓握和项目引用校验。模块适配 MUST 由同一共享解算结果确定完整图层集合，不得使用自由路径、任意几何变形、未登记条件图层或旧模板 PNG 裁切来假装有模块。旧 `layered-2d` 与 `fixed-image-2d` 的拒绝规则 MUST NOT 被模块合同放宽。图层资产目前没有声明视角、参数、动作或接触能力时，界面 MUST NOT 暴露这些能力。MUST NOT 通过任意变形整图或使用诊断渲染器冒充该 Canvas。

#### Scenario: 使用当前配置成功合成
- **WHEN** 当前角色组有受信任的 `layered-2d` 分层包，且用户选取包明确支持的参数
- **THEN** 页面将声明的图层实际合成为透明 Canvas，并从该 Canvas 显示和导出保持透明的当前 PNG

#### Scenario: 缺少组合包或参数不受支持
- **WHEN** 当前角色组没有受信任分层包，或当前配置超出其支持范围
- **THEN** 页面不显示或导出新的当前角色图，不把历史整图或三维诊断图当成合成结果；角色设定、Prompt、项目 JSON 仍可用，并说明缺少支持资产或参数

#### Scenario: 只支持固定正面视角
- **WHEN** 旧分层包声明仅支持 front 视角
- **THEN** 组合结果仅提供该视角，不显示侧面/四分之三自由旋转或未经制作的动作；共享 Prompt 设定仍可表达其他视角或动作，但须说明该设定不能合成并禁用组合 PNG

#### Scenario: 整体轮廓由配方替换而非叠加
- **WHEN** 某旧包尝试用 `layer.when` 在球形主体上追加一张心形图层来表示主体变成心形
- **THEN** 含 `layer.when` 的包被拒绝；要支持心形主体，包须由唯一匹配配方的 `values` 明确绑定心形结构，并且其 `layerIds` 仅绘制该心形主体及其配套部件、不遗留球形主体

#### Scenario: 无变体的固定图层只开放染色和背景
- **WHEN** 某旧包没有 `variants`，或当前颜色字段不在选中图层的 `tintPath` 中
- **THEN** 无变体包不得把结构选项标示为可合成能力，也不提供背景编辑；当前配方不能对不支持的颜色宣称可合成，仍可编辑共享 Prompt 设定，但不得生成超出包能力的当前 PNG，实际图像保持透明

#### Scenario: 拒绝不支持的输出或运动路径
- **WHEN** 某旧包在 `editablePaths` 中声明 `camera`、`aspect`、`output`、`motionStyle` 或 `motionSpeed`
- **THEN** 系统拒绝该包的合成与导出，不把这些参数标示为组合支持能力；共享 Prompt 设定仍可编辑

#### Scenario: 使用经解算的模块配方合成
- **WHEN** 用户选择一个受信任且满足基底、姿态、槽位、遮挡和抓握约束的模块配方
- **THEN** 系统从该完整 `ResolvedComposition` 绘制确定的本地素材层，并且仅在完整透明 Canvas 成功且当前输入指纹匹配时提供 PNG

#### Scenario: 模块解析冲突或资源版本不匹配
- **WHEN** 模块输入有硬约束冲突，或本地素材 ID/版本/哈希与项目引用不同
- **THEN** 系统拒绝输出为当前组合，说明不兼容项或资源不匹配；不得降级成 Prompt-only 的“成品随机”，也不得静默替换锁定素材

### Requirement: 每个文本或图像导出动作必须绑定同一冻结状态
系统 SHALL 在复制 Prompt、下载 Prompt、打开 ChatGPT 或启动 PNG 导出时使用同一份冻结的角色配置与创作模式快照。异步导出过程中若角色组、模式、作品或配置发生变化，过期结果 MUST NOT 以当前角色名或“当前结果”下载；系统 SHALL 取消导出或清楚提示结果对应旧快照。剪贴板文本 SHALL 与页面展示的该次 Prompt 一致。

结构诊断的 PNG SHALL 捕获点击时已经绘制的动作和组装状态；未准备好、尚有配置更新未绘制或已关闭的预览 MUST NOT 开始导出。异步绘制或编码期间更新、关闭预览时，旧 PNG MUST 被取消，不能恢复已关闭预览。

#### Scenario: PNG 渲染期间切换模式
- **WHEN** Canvas 或其他允许的异步渲染仍在进行，用户切换模式、作品或角色
- **THEN** 旧异步结果不覆盖当前页面，也不会以新角色配置名义被导出

#### Scenario: CPU 预览仍有下一帧在处理
- **WHEN** 用户从已经准备好的 CPU 诊断预览导出，下一动作帧尚未绘制
- **THEN** PNG 使用点击时最后实际绘制的动作时间及组装状态，不使用继续增长的请求时间或默认静止帧

#### Scenario: 导出途中关闭或更新预览
- **WHEN** PNG 正在等待图层解码、诊断绘制或图片编码，角色配置更新或预览被关闭
- **THEN** 旧结果被拒绝，不分配后续过期绘制资源、不下载旧 PNG，也不以当前角色名导出；之后有效的新导出仍可执行

#### Scenario: 复制和下载同一 Prompt
- **WHEN** 用户从页面复制 Prompt、下载 TXT 或打开 ChatGPT
- **THEN** 三种操作均使用同一配置快照；剪贴板回读内容与该次页面 Prompt 完全一致

### Requirement: 结构诊断不得冒充整图或组合成品
现有程序化 3D/WebGL/CPU 渲染器 SHALL 保留在名称明确的“结构诊断”入口，保留视角、动作和 CPU 诊断用途与已知缺陷记录；旧三维成品精细化退出本阶段交付。诊断画面 SHALL 与整图示例和组合 Canvas 有明显不同的标记。结构诊断截图、实际 PNG、程序检查通过或 OpenSpec 任务完成 MUST NOT 被记录为角色艺术验收通过，也 MUST NOT 解锁该组扩展。若后续将真实 3D 角色作为产品成品交付，MUST 另建 change 落实原有 WebGL 与 CPU、多个视角、比例端点、动作、精细材质、配饰接触及实际导出合同；不能以该诊断入口或本地 2D 固定视角能力豁免这些条件。无论成品是整图还是组合，角色身份、材质与配饰接触均 MUST 通过真实页面美术检查及该组用户确认。当前作品保存与导出统一使用包装 v2 和角色 VERSION 10；旧格式提示 unsupported，不自动迁移或覆盖旧内容。

#### Scenario: 查看三维结构诊断
- **WHEN** 用户显式打开结构诊断并检查旧实时渲染器
- **THEN** 页面说明其用途是几何/接触/动作诊断，且不把渲染结果归入整图下载或组合成品

#### Scenario: 记录某组艺术验收
- **WHEN** 一组仍只有历史整图、空组合包或结构诊断证据
- **THEN** 该组美术验收维持未通过，原有真实页面检查和用户逐组确认门槛不变

#### Scenario: 后续交付真实 3D 成品
- **WHEN** 某组把完整三维角色作为实际可编辑成品提交验收
- **THEN** 另建 change 并通过真实身份、精细材质、接触关系、原 WebGL/CPU、多视角、比例、动作和导出要求，由用户明确确认该组；本阶段模板确认不豁免这些要求

#### Scenario: 当前模板阶段完成并归档
- **WHEN** 用户确认当前登记模板美术，并明确旧三维仅保留诊断
- **THEN** 原三维成品未完成要求按范围取消留档，不记为通过；模板/背景 Canvas、Prompt、项目包装 v2 与角色 VERSION 10 继续作为本阶段交付

### Requirement: 创建能力不得要求账号、上传或自动代发
两种模式 SHALL 无需登录、注册或用户空间；图像与项目 JSON MUST 不作为图片上传或生成服务输入。打开 ChatGPT 时 SHALL 只提供用户当前 Prompt 并打开 ChatGPT，用户自行粘贴、另附图片并发送。系统 MUST NOT 自动上传图片、自动附图或替用户发送消息。

#### Scenario: 使用自己的图片生成
- **WHEN** 用户希望以自己的图片为参考
- **THEN** 页面说明用户应在 ChatGPT 中自行附加图片；本站的 Prompt 与项目 JSON 不携带该图片

### Requirement: 用户界面必须区分内置形象画廊和创作工作台
面向用户的主路径 SHALL 是目的明确的图库与创作工作台，不显示 Artwork 与 Composer 技术模式页签。图库 SHALL 使用可扩展的标签和登记 look 组织内容，不宣称固定家族或作品数量；明确选择“用这个形象定制”才载入活动模板。标签和素材编辑控件 SHALL 放在图库/工作台内容区，不能加到首页主导航。首页 hero、群像、卡片、主导航、版式和文案保持当前设计；允许只移除全局项目菜单中废弃的“导出兼容角色 JSON”项及其 handler，菜单容器与其余首页内容保持不变。工作台只能把共享 resolver 已证明可绘制的模板、模块和背景显示为影响 PNG 的选项。新标签/素材界面与项目保存均按当前 v2 合同，不提供旧格式迁移。

#### Scenario: 在内置形象和工作台间切换
- **WHEN** 用户从任一图库形象选择“用这个形象定制”
- **THEN** 工作台载入相同角色身份、当前 v2 项目设定和可信素材引用；页面展示的是同一已组装形象，不将技术模式切换误作另一只角色

#### Scenario: 找不到支持当前参数的真实 Canvas 配方
- **WHEN** 用户在工作台选择的配置不匹配任何完整姿态模板或受信任配方
- **THEN** 当前 PNG 不能宣称已包含该配置；Prompt 与 v2 项目设定可继续使用，界面说明该项尚不改变画面

#### Scenario: 首页布局保持不变
- **WHEN** 新增标签和素材编辑入口后查看网站首页
- **THEN** 首页 hero、群像、卡片、主导航、版式与文案保持原样；只移除全局项目菜单内废弃的兼容角色 JSON 导出项及 handler

### Requirement: 现行项目背景字段只能作为惰性元数据
项目解析 SHALL 继续只接受 dot-studio-project v2 与角色 VERSION 10。现行格式中经白名单验证的 `background`（`studio`、`solid`、`transparent`）和 `colors.background` SHALL 可被严格读取和原样保留，但只作为惰性元数据，不得形成 UI 编辑能力、Prompt 文本、Canvas 填充或非透明 render plan。新建角色 SHALL 将 `background` 设为 `transparent`。对原本合法且已解算的 v2 作品，系统 SHALL 保留其原有 `creation.composition.inputs` 与对应历史指纹；不得仅因其背景元数据不再影响绘制而拒绝或改写该引用。移除背景能力不是项目 schema 升级、旧版本迁移或旧字段别名恢复；project v1、裸角色 JSON 和角色旧 schema 仍 MUST 明确拒绝。

#### Scenario: 恢复现行 v2 项目中的历史背景值
- **WHEN** 用户导入一个合法 v2 / VERSION 10 项目，其中保存了已登记的 `studio` 或 `solid` 背景输入及有效组合引用
- **THEN** 系统按现行白名单严格读取并保留背景元数据与组合引用指纹，恢复角色时仍以透明 Canvas 显示；元数据不改变 Prompt 或导出 PNG

#### Scenario: 创建角色或编辑已恢复作品
- **WHEN** 用户创建新角色，或编辑已恢复的合法 v2 / VERSION 10 作品
- **THEN** 新角色默认记录 `background: transparent`；背景和 `colors.background` 不提供用户编辑路径，角色预览、Prompt 与 PNG 输出始终透明

#### Scenario: 拒绝旧项目格式
- **WHEN** 用户导入 v1 项目包装、裸角色 JSON 或 VERSION 10 之前的角色 schema
- **THEN** 系统按既有合同提示格式不支持，不迁移、不回退；本次保留现行 v2 背景元数据不扩大到旧格式
