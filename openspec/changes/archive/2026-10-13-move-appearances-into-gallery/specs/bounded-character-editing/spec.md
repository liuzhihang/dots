# Spec Delta

## MODIFIED Requirements

### Requirement: 模板能力必须由实际资源和可见图层声明
每个可用 Template SHALL 显式绑定适用 Character、Artwork 及其精确版本，并声明几何基底、家族适用类别可编辑属性、实际图层、支持值、revision 和来源；系列或相似标签 MUST NOT 自动授予模板能力。Change 前已批准的 24 件 Artwork 与本 change 后续获批并加入默认 Gallery 的每件 Artwork SHALL 在公开前具备逐件适配且获批的 Template，并在同一 CharacterStudio 中提供真实角色调整；不得通过删除或减少 Gallery 作品达到覆盖率。历史、pending、异常或资源校验失败的只读访问可安全降级，但不计作本 change 的全角色调整完成。复用渲染器不代表复用另一角色的素材、能力或批准；缺少精确登记资源时 MUST NOT 显示对应选项或宣称完成。Template 每一图层 SHALL 保持绑定其登记 PNG 源资源、源版本及独立图层放置；若运行时使用 WebP 传输派生，系统 MUST 将映射源路径、hash、尺寸和字节量匹配到 Template 的规范 PNG 资源，并校验派生自身的 hash、MIME、尺寸、字节量和 alpha；发布构建 SHALL 已证明无损状态与解码 RGBA 等同性。传输派生不得改变图层身份、次序、锚点、遮挡关系、兼容性或 Template revision。GalleryLook SHALL 精确绑定来源 Artwork/version、Template/version、固定 appearance 与一条合法默认配方；其编辑器 MUST NOT 将 appearance 作为可编辑 Draft 属性。除固定 appearance 外，仅当当前 GalleryLook 的已登记合法配方提供至少两个实际可达且产生不同像素结果的值时，才显示对应的 colors、face、accessories 或适用 clothing 分类；仅有一条合法配方的形象不显示可编辑分类。该入口规则不得改变 Template 原始能力、来源 Artwork、资源或批准记录，也不要求每个 GalleryLook 都具备全部分类。


未绑定 GalleryLook 的原始 Template 编辑能力 SHALL 保持以下家族范围；绑定 GalleryLook 时，外观由入口固定，实际可编辑类别按该形象的合法配方范围确定：

系统 SHALL 按家族提供以下调整范围：Dots / Grok Bot 取消服装 tab，只保留外观、配色、五官、配饰四类；Muse、动物、人物和独立机器人保留服装，共五类。Dots / Grok 的服装能力不适用，不以 None 控件充数，也不将衣物改名塞进配饰。每个适用类别仍须至少两个真实、合法可达且改变像素的结果。原有含围衣候选及检查记录保留为历史制作证据，不作为当前推荐或美术通过依据。

#### Scenario: 缺少图层或无配件基底
- **WHEN** Template 没有眼镜图层、衣料覆盖基底或其它选项所需的实际素材
- **THEN** 编辑器不提供对应选项或摘除操作，也不以预览原图、Prompt、整体滤镜或挪动现有像素假装具备该能力；缺项阻止该 Artwork 达到全角色调整完成状态

#### Scenario: 候选原图尚未拆分
- **WHEN** 任一 Gallery Artwork 候选只有完整原图而没有经过登记、逐件适配和验收的 Template 资源
- **THEN** 候选图不证明其可编辑，产品不公开该候选的本地调整入口，并在规划记录素材缺口；只有待审或异常降级访问可显示静态详情，不能计作全角色调整完成，也不能通过移除已有 Gallery 角色降低覆盖分母

#### Scenario: Template 图层通过等像素 WebP 传输
- **WHEN** 一个已批准 Template 图层在角色调整中由其已登记 PNG 源的 WebP 传输派生提供
- **THEN** 系统只在源与派生 hash、MIME、尺寸、字节量、alpha、无损标记和解码 RGBA 等同性证明均通过后载入；Template 使用原 PNG 图层身份、revision、图层顺序、锚点和遮挡关系进行编辑与导出

### Requirement: 模板选项必须遵守角色身份与合法组合
Template SHALL 只允许其显式支持的属性值和组合；不兼容组合 MUST 显示原因、保留用户当前选择并阻止应用，不得静默丢弃选项。每件完整 Artwork 的合法渲染组合 SHALL 由其精确绑定的 Template、真实素材和兼容性登记决定；必须逐个完成实际渲染及美术检查，不得把代表 Template、系列标签、色卡数量或 Prompt-only 结果当作该作品的组合批准。Template 配方和 Draft MUST NOT 增加、替代或改写 Gallery Artwork。绑定 GalleryLook 的完整配方还 MUST 保持入口固定 appearance；用户只能选择该 look 已登记且合法的其它属性值，且不能把一个形象切换成另一个 look。

#### Scenario: 请求不兼容的选项组合
- **WHEN** 用户选择缺少对应基底或互相冲突的配色、五官、服装或配饰组合，或试图更改 GalleryLook 固定的外观
- **THEN** 系统说明具体不支持原因，不把任一选择静默移除，也不生成与选择不符的预览或导出

#### Scenario: Dots 与 Grok Bot 不提供服装
- **WHEN** 用户打开 Dots 或 Grok Bot 的未绑定 GalleryLook Template 编辑，或打开绑定其固定外观的 GalleryLook，或请求应用服装配置
- **THEN** 原始 Template 编辑仍只显示外观、配色、五官、配饰四个非空 tab；GalleryLook 编辑不显示外观 tab，只按固定 look 的合法配方提供至少两个真实可达结果的配色、五官或配饰分类，模板不登记服装能力，非 none 服装请求被拒绝，当前成功 Prompt 不输出服装类别，资源读取与导出不引用衣物层；不得将围衣移入配饰规避这一范围

#### Scenario: 保留 Dots 与 Grok Bot 身份
- **WHEN** 用户编辑 Dots 或 Grok Bot Template
- **THEN** Dots 保持其登记的短密绒特征，Grok Bot 保持其登记的软几何形体与成对胶囊眼；两类角色均无手脚或其它肢体，不提供服装 tab、服装选项或服装图层；GalleryLook 中固定的外观必须是该角色登记的真实形体，所有可编辑结果不得新增肢体、屏幕脸或其它身份特征

#### Scenario: 首批代表模板覆盖全部计划组合
- **WHEN** 某 Artwork/version 的 Template 声明合法组合并进入公开角色调整
- **THEN** 该作品每个声明组合均使用其实际登记的基底、图层、锚点和层序完成真实预览与透明 PNG 验收及对应美术确认；未登记或未验收组合不可选，不以固定 12/16 配方、另一 Artwork 的批准或完整笛卡尔积推定其有效

### Requirement: 编辑选项必须提供真实可视素材选择
未绑定 GalleryLook 的原始 Template 编辑器 SHALL 保持其真实能力分类：Appearance（外观）、Colors（配色）、Face（五官）、Clothing（服装）、Accessories（配饰）；背景和 Objects 不属于可编辑类别，所有物品均归入 Accessories。原始 Template 的既有类别合同不因本 change 改变。绑定 GalleryLook 时，appearance 是不可变形象身份，编辑器 MUST NOT 提供 Appearance 控件；只显示当前合法配方中至少有两个可达、身份兼容且像素结果不同值的 Colors、Face、Accessories 及适用 Clothing 分类，单配方形象显示固定预览且不显示可编辑分类。GalleryLook 分类数量可以为零，且不再要求每个固定形象都具备所有类别；这不改变来源 Artwork 与 Template 的登记能力。类别选项使用真实色块或图层，不得显示空组、假选项、背景配置或未登记能力；tabs 不是 View/Edit 模式，须支持 roving tabindex 与方向/Home/End 键，不改 Draft/session/revision。点击选项启动同一预览渲染；选中状态清晰、命中区至少 44px、支持双语。Appearance 必须在原始 Template 编辑器中改变真实轮廓或切换已登记的等价真实外观资源，不能只重命名同一图像、整体拉伸或染色。原有逐 Artwork 能力与美术验收规则继续适用，不把 90 个 GalleryLook 视作新增 Artwork 或要求每个 look 都逐项覆盖全部类别。

#### Scenario: 打开后直接编辑真实预览
- **WHEN** 用户打开公开资格有效且绑定精确获批 Artwork/Template 版本的作品
- **THEN** CharacterStudio 自动载入该 Artwork 的默认 GalleryLook；其 appearance 与完整默认配方固定，首个成功像素预览就是所见即所得的可编辑和可导出预览，只显示该 look 至少有两个真实可达值的非外观分类，不提供 View/Edit tabs 或 mode URL

#### Scenario: 选择实际配件
- **WHEN** 用户在已自动加载的原始 Template 编辑器或固定 GalleryLook 编辑器中浏览调整分类
- **THEN** 用户能看到每项真实素材缩略图及选中状态；原始 Template 编辑器遵守现有类别合同，GalleryLook 仅显示至少有两个可达、身份兼容且具有不同像素结果的合法选项之分类，点击或键盘选择后立即为同一预览启动 Draft 合法性校验与真实渲染；固定 appearance 不可切换，不兼容项说明原因并要求明确替换，不静默移除已有选择

#### Scenario: 分类 tabs 的键盘操作
- **WHEN** 用户用键盘操作 Template 能力分类
- **THEN** 原始 Template 编辑器的外观、配色、五官、配饰及适用服装分类继续以 roving tabindex 工作并支持 ArrowLeft/ArrowRight/Home/End；GalleryLook 仅对实际显示的非外观分类使用同一键盘行为；切换分类不改已选项或成功 revision；不存在背景或 Objects tab

#### Scenario: 能力分组只映射实际注册选项
- **WHEN** Template 能力数据被映射到分类
- **THEN** 原始 Template 编辑器中 Appearance 映射真实轮廓或完整外观资源；GalleryLook 把 appearance 作为固定身份，不提供该映射为编辑分类；Colors 映射有各自真实配色依据的色区，Face 映射眼睛或静态表情，Clothing 仅在 Muse、动物、人物和独立机器人中映射真实衣物及覆盖层，Accessories 映射眼镜、帽子、耳机、首饰或符合接触关系的物品；GalleryLook 仅在当前 look 配方有至少两种可达合法视觉结果时显示相应分类，物品不另设 Objects 类别

#### Scenario: 无配件与固定能力
- **WHEN** 当前能力支持 None，或某个属性具有固定基底
- **THEN** None 使用明确的无该类配件标识及文字，并且只有在同类另有至少一种有效实物时才可作为两种视觉结果之一；原始 Template 固定属性仅作说明，不冒充调整选项；GalleryLook 若只有一条合法配方，则所有固定属性（包括 appearance）仅作说明，不显示假选项或可编辑分类。不得借视觉控件参考增加随机、背景或其它未登记能力

#### Scenario: 素材缩略图加载失败
- **WHEN** 某个选项的缩略图读取失败
- **THEN** 显示可理解的失败状态和已有文字标识，不以虚构图片代替；真实渲染仍独立校验完整配方，最新渲染失败时禁止导出

#### Scenario: 选择后预览尚未成功
- **WHEN** 选项已改变且最新 requestedRevision 尚未完成或失败
- **THEN** 保留上一成功像素预览，明确标注更新状态并禁用导出；配置 Prompt 只能对应最近成功渲染，不得把新选项文字与旧预览冒充所见即所得结果

#### Scenario: 透明素材在页面中展示
- **WHEN** 用户查看角色预览或任一选项缩略图
- **THEN** 页面 SHALL 不显示棋盘网格或灰色方块缩略图底；真实图层缩略图可置于统一 CSS 界面底色上，但底色 MUST NOT 写入 Artwork、Draft、Prompt 或导出。界面图标使用居中的几何 SVG/CSS，不得代替角色素材；角色 PNG 保持真实 alpha，编辑器不提供背景选项

#### Scenario: 配饰分类包含现有选项组
- **WHEN** 用户打开任一角色调整 Template
- **THEN** 原始 Template 的 Accessories 一级 tab 仅包含该 Artwork 精确登记的配件与适配物品子组；GalleryLook 只呈现其固定 appearance 下合法配方登记且至少有两个真实可达结果的子组；每件 Artwork 与每个 look 的选项、合法配置与 renderer recipe 均以各自登记为准，不因共享字段或其它角色能力推定支持

### Requirement: 编辑草稿必须与原 Artwork 和已发布目录隔离
用户操作 SHALL 为当前精确 Artwork 或 GalleryLook 与浏览会话生成仅驻留内存的 Draft；GalleryLook Draft MUST 绑定 look id/version、来源 Artwork/version、Template revision、固定 appearance 与默认 recipe，且只能编辑该 look 暴露的合法属性。Draft MUST NOT 改写 GalleryLook 登记、Artwork、原始事实、原图、原始 Prompt、标签、批准记录、已发布目录或持久化存储。Draft 配置、session 与 dirty状态 SHALL 绑定当前 look 的完整默认配方基线（未绑定 look 的 Template Draft 仍绑定原 Template 基线）；固定 appearance 保留于渲染配置，但不可作为编辑选项或产生 dirty 变化。外部二创意图与本地像素配置分离。

#### Scenario: 编辑已批准 Artwork
- **WHEN** 用户修改已批准 Artwork 所解析的 GalleryLook 中受支持角色调整选项
- **THEN** 原 Artwork、登记原图字节、事实、原始 Prompt、hash 与批准范围保持不变，编辑结果只作为当前 Draft 显示或导出

#### Scenario: 编辑控件不显示 Reset 或 Cancel
- **WHEN** 用户使用精确获批 Template 的 CharacterStudio
- **THEN** 界面不显示 Reset/Cancel 按钮；用户可用真实选项恢复当前 GalleryLook 的登记默认配置，dirty 按实际配置与外部要求相对当前固定外观形象基线判断

#### Scenario: Draft dirty 状态
- **WHEN** Draft 配置或外部二创意图相对当前 GalleryLook 基线发生变化，或用户成功导出已修改 Draft
- **THEN** dirty 只由配置或外部意图是否偏离基线决定；导出不保存 Draft、不使其变为 clean，恢复当前 Artwork 基线则不再 dirty

#### Scenario: 审阅 pending Template
- **WHEN** pending Artwork 或 Template 需要检查编辑能力
- **THEN** 只有明确的外部 reviewHarness 可以打开并自动载入编辑界面；pending 状态由 Artwork 元数据或 reviewHarness 保留，不能进入普通公开角色调整或计入全覆盖

#### Scenario: 原始作品资料与配置 Prompt 分离
- **WHEN** 用户在固定 GalleryLook 中调整配色、五官、服装或配饰，导致预览的可见特征变化
- **THEN** 当前配置 Prompt 与透明导出只对应最近成功预览并描述当前 GalleryLook；来源 Artwork 图、原 Prompt、原描述及原 tags 保存在只读 `.studio-original` 区，不冒充固定形象或编辑后的事实，也不提供重复原图下载按钮；外部方向要求不得声称改变本地预览或透明输出

#### Scenario: GalleryLook 外观保持固定
- **WHEN** 用户在 GalleryLook 编辑器查看或操作编辑分类
- **THEN** 当前 appearance 始终来自该入口登记，不显示 Appearance 控件，不因编辑或导出改变；用户切换到另一形象时直接替换临时会话，不弹原生dirty确认

### Requirement: 预览与 Draft 导出必须使用同一渲染配方
Draft 预览与透明 PNG SHALL 绑定相同 GalleryLook id/version（若未绑定 look 则绑定 Artwork/version）基线、来源 Artwork/version、Template revision、固定 appearance、完整有效选项、登记图层引用与渲染器配方 revision；成功预览 SHALL 保留真实 alpha，导出只能使用当前已完成渲染的冻结像素快照。用户界面 CSS 底色 MUST NOT 成为 Draft 或 Export 输入。

#### Scenario: 导出当前已渲染 Draft
- **WHEN** 用户导出已修改 Draft 且 requestedRevision 等于 renderedRevision
- **THEN** 透明 PNG 与成功预览使用相同 Artwork/version、Template、选项和 revision，经校验保留真实 alpha 并标记为本地静态 Draft

#### Scenario: 渲染仍在进行或失败
- **WHEN** requestedRevision 与 renderedRevision 不同，或最新预览渲染失败
- **THEN** 导出不可用；不得把旧像素作为新选项的成功结果，也不得以旧渲染 revision 冒充当前 Draft

#### Scenario: 导出准备期间更改选择
- **WHEN** 用户在导出准备完成前更改任一角色选项
- **THEN** 已启动导出固定其开始时的 Artwork、Template、完整选项和成功像素快照，或被取消并要求重新导出最新 revision；不得混合旧图像与新选项

### Requirement: 单一 Export 控件必须按作品状态返回正确资源
CharacterStudio SHALL 只提供一个 Export 主操作；原有 Artwork 静态详情及未绑定 GalleryLook 的 Template 编辑语义保持不变。无精确可用 Template 的历史、pending 或异常静态作品 Export SHALL 返回当前 Artwork/version 登记的原始字节且 MUST NOT 经 Canvas、Template 渲染或页面底色重绘；若登记原图不透明，必须明确标识为历史原图，不得宣称透明，且不计入当前 Gallery 全角色调整覆盖。有效透明 Artwork 默认形象的原始字节导出语义保持不变。GalleryLook 的来源默认形象在用户未改变任何选项且预览有效时可返回与该来源 Artwork/version 完全一致的登记透明 PNG 原始字节；其它派生形象即使保持其默认配置，也 SHALL 返回与成功预览相同的 renderer 透明 PNG，不得返回来源 Artwork 的原图。GalleryLook 配置发生变化后 Export SHALL 返回最近成功渲染快照的透明 Draft PNG；最新 revision 渲染中或失败时禁用 Draft Export。原始元数据折叠区只读且不提供重复 Export/原图按钮。

#### Scenario: 静态作品 Export 原图
- **WHEN** 用户打开没有精确可用 Template 的历史、pending 或异常 Artwork 并选择 Export
- **THEN** 返回该 Artwork/version 登记原图的原始字节；不读取 Canvas、不重绘、不添加界面底色，且该降级不计作全角色调整完成

#### Scenario: 未更改的角色 Export 原图
- **WHEN** 用户打开来源 Artwork 的默认 GalleryLook 并保持其完整默认配置未变，且默认预览成功
- **THEN** 单一 Export 返回与该精确 Artwork/version 登记一致的透明原始 PNG 字节；原图及批准记录不变

#### Scenario: 编辑作品 Export PNG
- **WHEN** 用户修改选项且 Draft 最新 revision 已成功
- **THEN** 单一 Export 返回独立透明 PNG，并绑定同一成功预览和 revision；原 Artwork 文件、发布清单和批准状态不变

#### Scenario: 派生 GalleryLook 默认导出成功渲染 PNG
- **WHEN** 用户打开非来源默认形象的 GalleryLook，未修改其默认配方且预览成功后 Export
- **THEN** 返回与当前完整形象预览一致的透明 renderer PNG，保留真实 alpha；不得返回来源 Artwork 的原始 PNG，Prompt 描述当前固定形象

## ADDED Requirements

### Requirement: 归并形象必须保持稳定会话和精确结果绑定
公开GalleryFigure SHALL 固定基础外观，以真实成员配方进行颜色、五官、配饰及适用服装调整，不显示Appearance或来源样式tab。跨成员切换 MUST 保持Figure会话、语言、初始dirty基线及补充要求，底层Draft与renderer仍绑定目标的精确Artwork/Template/Look，不创建合成模板。仅当前最新state的成功预览可生成配置Prompt与PNG；加载或失败期间不可导出，新state不得被旧异步结果覆盖。

#### Scenario: 跨来源云朵调整
- **WHEN** 同一Figure的合法选择从蓝色来源切到浅紫或莓粉来源
- **THEN** Figure身份与补充要求保持，成功快照绑定实际目标配方，dirty按Figure首次状态判断，PNG与Prompt均对应同一成功结果

#### Scenario: 快速跨来源操作
- **WHEN** 用户在目标预览完成前再次选择其它合法结果
- **THEN** 旧child取消或释放，旧结果不能覆盖当前state，只有最新成功state可以导出

### Requirement: 基础形象选项缩略图必须在实际发布闭包内加载
Figure 选项缩略图 SHALL 使用既有登记无损 WebP 传输与完整 coverage 校验，保留源 PNG 的身份、hash 和放置语义；MUST NOT 请求发布清单排除的模板源 PNG。缩略图错误与真实配方兼容性 SHALL 分开处理，不通过删除选项、虚构素材、扩大配方或静默改变其它字段绕过问题。

#### Scenario: 从精确发布目录打开圆球配饰
- **WHEN** 页面从不包含 source-only PNG 的发布目录运行，用户打开圆球配饰
- **THEN** 六个非空配饰均显示真实登记素材，“无配饰”保留空值图标，所有请求均在交付闭包内；蓝色闭眼时未登记的黑色墨镜及赛博眼镜组合保持禁用，切回睁眼可选择已登记组合

### Requirement: 真实选项缩略图必须清晰并说明加载状态
配饰、五官和服装缩略图 SHALL 保留真实登记素材与名称，在深色界面提供足够尺寸，并以符合当前紫蓝品牌风格的柔和CSS背景承托，使深色与浅色物件均可识别。背景 MUST 融入卡片层级，避免厚重灰色内框。CSS背景与阴影 MUST NOT 写入任何素材或PNG导出。加载等待 SHALL 显示明确的轻量指示与可访问忙碌状态；ready、empty或error后停止加载动画，用户减少动效时保持静态指示。缩略图状态不得改变配方兼容性。

#### Scenario: 深色眼镜与浅色帽子
- **WHEN** 用户打开配饰并查看黑色眼镜、厨师帽等登记素材
- **THEN** 图像尺寸与承托背景使轮廓清晰，名称完整可读；禁用的组合仍显示真实物件，不将背景合并入PNG

#### Scenario: 等待配件图片
- **WHEN** 缩略图的manifest或WebP资源尚未返回
- **THEN** 显示加载指示且保留选项名称；请求成功后显示素材并结束忙碌状态，失败后结束动画并显示错误，减少动效时不旋转
