# Spec Delta

## Purpose

定义静态角色模板可在浏览器中支持的有限编辑、隔离草稿、确定性预览与透明 PNG 导出边界。模板只开放已有真实资源和图层能够实现、并通过相应工程及美术验收的选项。

## ADDED Requirements

### Requirement: 模板能力必须由实际资源和可见图层声明
每个可用 Template SHALL 显式绑定适用 Character、Artwork 及其版本，并声明几何基底、可编辑属性、实际图层、支持值、revision 和来源；系列或相似标签 MUST NOT 自动授予模板能力。首批只规划 Dots 与 Grok Bot 两套代表编辑试点，其余系列及新加入的 Character/Artwork 默认是静态查看内容，只有经过独立资源、适配和艺术验收并显式绑定后才提供 Edit；缺少对应资源时 MUST NOT 显示该编辑能力。

#### Scenario: 缺少图层或无配件基底
- **WHEN** Template 没有眼镜图层、无帽基底或其它选项所需的实际素材
- **THEN** 编辑器不提供对应选项或摘除操作，也不以预览原图、Prompt、整体滤镜或挪动现有像素假装具备该能力

#### Scenario: 候选原图尚未拆分
- **WHEN** Dots 或 Grok Bot 候选只有完整原图而没有经过登记与验收的 Template 资源
- **THEN** 候选图不证明其可编辑，产品不公开本地 Edit 入口，并在规划记录素材缺口；该 Artwork 的静态 Gallery 资格仍只由自己的资源和批准决定，不能因有或无模板而增减图库外观计数

### Requirement: 模板选项必须遵守角色身份与合法组合
Template SHALL 只允许其显式支持的属性值和组合；不兼容组合 MUST 显示原因、保留用户当前选择并阻止应用，不得静默丢弃选项。Dots/Grok Bot 的两套编辑试点及其合法渲染配置与静态 Gallery 外观目录彼此独立，Draft、颜色/眼型色卡、姿态资源或配方数量 MUST NOT 用来增加 Artwork 计数或替代独立完整 Artwork。

#### Scenario: 请求不兼容的选项组合
- **WHEN** 用户选择缺少对应基底或互相冲突的颜色、形状、眼睛、眼镜或配件组合
- **THEN** 系统说明具体不支持原因，不把任一选择静默移除，也不生成与选择不符的预览或导出

#### Scenario: 保留 Dots 与 Grok Bot 身份
- **WHEN** 用户编辑 Dots 或 Grok Bot Template
- **THEN** Dots 保持短密绒，Grok Bot 保持软几何形体与成对胶囊眼；两类角色均无手脚，所有成品与编辑配置不得新增肢体、屏幕脸或其它身份特征

#### Scenario: 首批代表模板覆盖全部计划组合
- **WHEN** Dots 与 Grok Bot 两套首批 Template 被声明为可用
- **THEN** Dots 的 12 个和 Grok Bot 的 16 个合法组合均须真实改变预览并可按同一 revision 导出；本轮 2 个精确 Template 版本及其 28 个组合已通过工程与用户美术确认，但这些配方不是 Gallery Artwork，不增加或替代独立完整作品。未来新增 Template 版本或组合须重新完成其自身验收与批准

### Requirement: 编辑选项必须提供真实可视素材选择
编辑器 SHALL 按 Template 能力数据只显示真实非空一级 tabs：Appearance（外观）、Face（五官）、Clothing（服装）、Accessories（配饰）、Objects（物品）。当前两模板仅有 Appearance/Color、Face/Eyes、Accessories 两个子组 Glasses 与 Accessory；原 option field key 不变。不得显示空组或未登记能力。选择项使用真实色块或图层，tabs 不是 View/Edit 模式，须支持 roving tabindex 与方向/Home/End 键，不改 Draft/session/revision。点击选项启动同一预览渲染；选中状态清晰、命中区至少44px、支持双语。

#### Scenario: 打开后直接编辑真实预览
- **WHEN** 用户打开精确获批 Artwork/Template 绑定的作品
- **THEN** CharacterStudio 自动载入 Template 默认配置与实际选项；首个成功像素预览就是所见即所得的可编辑和可导出预览，不提供 View/Edit tabs 或 mode URL

#### Scenario: 选择实际配件
- **WHEN** 用户在已自动加载的 Template 编辑器中浏览眼睛、眼镜或配件
- **THEN** 用户能直接看到实际素材缩略图及选中状态，点击或键盘选择后立即为同一预览启动 Draft 合法性校验与真实渲染流程；不兼容项说明原因并要求明确替换，不静默移除已有选项

#### Scenario: 分类 tabs 的键盘操作
- **WHEN** 用户用键盘操作 Template 能力分类
- **THEN** 真实非空一级分类 Appearance、Face、Clothing、Accessories、Objects 以 roving tabindex 工作并支持 ArrowLeft/ArrowRight/Home/End；当前仅有 Appearance、Face、Accessories。Clothing 与 Objects 无当前选项，因此不显示空 tab；切换分类不改已选项或成功 revision

#### Scenario: 能力分组只映射实际注册选项
- **WHEN** Template 能力数据被映射到分类
- **THEN** Appearance 可承载形状、配色及未来真实材质/发型；Face 可承载眼睛、嘴巴与表情；Clothing 可承载上装、下装或套装；Accessories 可承载眼镜、帽子、耳机、首饰；Objects 可承载电脑、书本或花束。当前两模板只映射已有 Color、Eyes、Glasses、Accessory，不新增字段或 recipe

#### Scenario: 无配件与固定能力
- **WHEN** 当前能力支持 None，或 Shape 只有一个固定基底
- **THEN** None 使用明确的无配件标识及文字，固定 Shape 仅作说明；不借视觉控件参考增加随机、尺寸、背景、形状或其它未登记能力

#### Scenario: 素材缩略图加载失败
- **WHEN** 某个选项的缩略图读取失败
- **THEN** 显示可理解的失败状态和已有文字标识，不以虚构图片代替；真实渲染仍独立校验完整配方，最新渲染失败时禁止导出

#### Scenario: 选择后预览尚未成功
- **WHEN** 选项已改变且最新 requestedRevision 尚未完成或失败
- **THEN** 保留上一成功像素预览，明确标注更新状态并禁用导出；配置 Prompt 只能对应最近成功渲染，不得把新选项文字与旧预览冒充所见即所得结果

#### Scenario: 透明素材在页面中展示
- **WHEN** 用户查看角色预览或眼型、眼镜、配件缩略图
- **THEN** 页面 SHALL 不显示棋盘网格或灰色方块缩略图底；眼型、眼镜和配件使用真实图层置于统一纯色背景，背景 MUST NOT 写入原图或 Draft。界面图标使用居中的几何 SVG/CSS，不得代替角色素材；PNG 保持真实 alpha

#### Scenario: 配饰分类包含现有选项组
- **WHEN** 用户打开任一当前球形编辑模板
- **THEN** Accessories 一级 tab 仅包含已登记的 Glasses 与 Accessory 两组；Template 原 option field key、12/16 个合法配置及 renderer recipe 均保持不变

### Requirement: 编辑草稿必须与原 Artwork 和已发布目录隔离
用户操作 SHALL 生成仅属于当前作品与浏览会话的内存 Draft；Draft MUST NOT 改写 Artwork、原始事实、原图、Prompt、标签、批准记录、已发布目录或持久化存储。

#### Scenario: 编辑已批准 Artwork
- **WHEN** 用户修改已批准 Artwork 的受支持选项
- **THEN** 原 Artwork、登记原图字节、事实、Prompt、hash 与批准范围保持不变，编辑结果只作为当前 Draft 显示或导出

#### Scenario: 编辑控件不显示 Reset 或 Cancel
- **WHEN** 用户使用精确获批 Template 的 CharacterStudio
- **THEN** 界面不显示 Reset/Cancel 按钮；用户可继续用真实选项手动恢复需要的默认值，dirty 仍按实际配置与额外要求相对基线判断

#### Scenario: Draft dirty 状态
- **WHEN** Draft 配置或外部二创意图相对初始基线发生变化，或用户成功导出 Draft
- **THEN** dirty 只由配置或外部意图是否偏离基线决定；导出不保存 Draft、不使其变为 clean，恢复基线则不再 dirty

#### Scenario: 审阅 pending Template
- **WHEN** pending Artwork 或 Template 需要检查编辑能力
- **THEN** 只有明确的外部 reviewHarness 可以打开并自动载入编辑界面；pending 状态由 Artwork 元数据或 reviewHarness 保留，现有 Artwork 标识可继续显示，但不要求额外编辑器 badge 或长篇审阅说明。普通详情不开放 pending Template 编辑，公开资格不变

#### Scenario: 原始作品资料与配置 Prompt 分离
- **WHEN** 用户编辑颜色、眼型或配件，导致预览的可见特征变化
- **THEN** 当前配置 Prompt 与导出只对应最近成功预览；原作品图、原Prompt、原描述及原 tags 保存在只读 `.studio-original` 区，且不冒充编辑后的事实，不提供重复原图下载按钮

### Requirement: 预览与 Draft 导出必须使用同一渲染配方
Draft 预览与透明 PNG SHALL 绑定相同 Artwork 基线、Template revision、完整选项和渲染配方 revision；导出只能使用当前已完成渲染的快照。

#### Scenario: 导出当前已渲染 Draft
- **WHEN** 用户导出 Draft 且 requestedRevision 等于 renderedRevision
- **THEN** PNG 与可见预览使用相同 Artwork、Template、选项和 revision，alpha 经验证为透明且导出状态标记为本地 Draft

#### Scenario: 渲染仍在进行或失败
- **WHEN** requestedRevision 与 renderedRevision 不同，或最新预览渲染失败
- **THEN** 导出不可用；不得把旧像素作为新选项的成功结果，也不得以旧渲染 revision 冒充当前 Draft

#### Scenario: 导出准备期间更改选择
- **WHEN** 用户在导出准备完成前更改任一选项
- **THEN** 已启动导出固定其开始时的完整快照，或被取消并要求重新确认最新 revision；不得混合旧图像与新选项

### Requirement: 单一 Export 控件必须按作品状态返回正确资源
CharacterStudio SHALL 只提供一个 Export 主操作。无 Template 的静态作品 Export SHALL 返回当前 Artwork 版本登记的原始字节且 MUST NOT 经 Canvas、Template 渲染或页面背景重绘；适配编辑作品 Export SHALL 返回最近成功渲染的 Draft PNG，并在最新 revision 渲染中或失败时禁用。原始元数据折叠区只读且不提供重复 Export/原图按钮。

#### Scenario: 静态作品 Export 原图
- **WHEN** 用户打开没有适用 Template 的 Artwork 并选择 Export
- **THEN** 返回登记原图的原始字节；不读取 Canvas、不重绘、不添加背景或 UI

#### Scenario: 编辑作品 Export PNG
- **WHEN** 用户选择 Export 且 Draft 最新 revision 已成功
- **THEN** 导出独立透明 PNG 并绑定同一成功预览与 revision；原 Artwork 文件、发布清单和批准状态不变

### Requirement: 超出 Template 能力的修改必须转为外部二创意图
超出当前 Template 明确声明能力的修改 MUST 被标为 ChatGPT 外部二创意图，不得声称会改变本地 Draft 预览或导出。

#### Scenario: 请求不支持的动作
- **WHEN** 用户要求加入 Template 没有素材支持的动作或表情
- **THEN** 本地 Draft 保持不变，界面说明该请求需在 ChatGPT 中二创，且外部意图与原 Artwork 事实及 Draft 渲染状态分开

### Requirement: 本地 Draft 不得获得动画或目标包资格
本地静态编辑输出 MUST 保持静态 PNG 能力，不得因生成或导出而被标记为已制作动作、动画、可安装 Pet 或目标平台包。

#### Scenario: 成功导出静态 Draft
- **WHEN** 用户导出一张静态 PNG
- **THEN** 该文件只声明 Draft 静态图片能力，没有动画播放、动作变体或 Pet 安装入口
