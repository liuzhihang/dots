# Spec Delta

## MODIFIED Requirements

### Requirement: 完整作品必须拥有稳定的资源与提示词关联
系统 SHALL 为每张实际完整 Artwork 提供稳定 ID、名称、描述、来源、发布状态、身份、系列、八类 typed facts、原图与 Prompt 引用。首批静态 Gallery 曾以 20 件作为初始目标；截至 2026-10-11、在本 change 开始前，已批准公开目录的历史基线为 24 件独立完整 Artwork。该数量只记录历史批准范围，不是目录上限，也不批准本 change 的新增或替换版本；后续作品仍须逐件登记自身来源、素材、元数据并获得覆盖该作品版本的美术批准后，方可加入默认目录。Gallery 外观计数只计唯一、完整、独立登记的 Artwork，不计 Template/Draft 渲染、色卡、姿态资源、截图或重复副本。来自参考图的候选 SHALL 按文件重复、视觉重复、角色身份和独立完整外观分层归并；重复合照、界面缩略图、色卡、纯配色差异和同一成品的重复截图 MUST NOT 膨胀 Character 或 Gallery Artwork 数量。只有最终形成具有可辨差异、独立完整图像及自身登记资料的外观，才可作为独立 Artwork 计数；颜色变化若只是已有角色的配色选择 SHALL 留在该身份或其受控配置中，不创建新 Character。封面、展示预览、原图、Template、Template 图层、Draft 与 Prompt SHALL 有各自明确的类型、用途及版本关联。Artwork 原图像素 MUST 来自登记的完整作品；未登记组合不得成为 Artwork、已发布变体或自动生成内容，受控 Template 只在隔离 Draft 中产生明确支持的本地变化。


系统 SHALL 按家族提供以下调整范围：Dots / Grok Bot 取消服装 tab，只保留外观、配色、五官、配饰四类；Muse、动物、人物和独立机器人保留服装，共五类。Dots / Grok 的服装能力不适用，不以 None 控件充数，也不将衣物改名塞进配饰。每个适用类别仍须至少两个真实、合法可达且改变像素的结果。原有含围衣候选及检查记录保留为历史制作证据，不作为当前推荐或美术通过依据。

#### Scenario: 查看一张发布作品
- **WHEN** 用户从角色库或 CharacterStudio 查看已发布 Artwork
- **THEN** 名称、封面、facts、原图与原始 Prompt 对应同一登记版本，编辑能力不改变其资源引用

#### Scenario: 随机发现预先设计的有限变化
- **WHEN** 用户通过受控 Template 选择一组合法选项；旧随机发现入口已退役
- **THEN** 系统只生成与当前 Artwork 隔离的 Draft，不提供老虎机或随机组装，也不把未登记组合加入 Artwork 目录或发布作品集合

#### Scenario: 参考素材重复或只有配色不同
- **WHEN** 维护者归并本轮参考图中的重复截图、同一角色合照、视觉重复外观或仅有配色差异的候选
- **THEN** 重复文件与重复视觉只保留一个候选映射，色差不创建新的 Character 或 Gallery Artwork 计数；任何独立 Artwork 仍须有自己的完整图像、登记 ID、来源、资源、Prompt 和版本批准

### Requirement: 发布资格必须同时满足内容资源与批准边界
默认角色库 SHALL 仅包含已登记、来源有效、资源与 Prompt 完整且人工批准覆盖具体 Artwork 版本的作品。任何尚未获得对应版本批准的新 Artwork MUST 保持 pending，不能因规划数量、资源存在、Template 可渲染、Draft 导出、标签名称或工程测试而进入默认目录。2026-10-11 change 前 24 件已批准公开 Artwork 是本 change 的历史批准基线，不代表本 change 已新增或替换 Artwork 获批，也不固定当前待审数量。资源存在、Template 可渲染、Draft 导出、标签名称或工程测试 MUST NOT 自动授予 Artwork 批准或发布资格；Artwork、Template、图层、Draft 导出及页面呈现的状态 SHALL 分别记录。角色库必须按实际逐件批准状态动态计算。扩充图库的候选规划和参考映射不构成美术批准；新制作、透明替换版本及其展示资源必须分别绑定准确文件、版本和批准范围后才可公开。

#### Scenario: 已批准 Artwork 生成本地 Draft
- **WHEN** 用户通过已批准 Template 为 Artwork 生成 Draft
- **THEN** 原 Artwork 保持原发布与批准状态，Draft 不作为新 Artwork、变体或默认角色库内容

#### Scenario: Pending 候选在普通详情中打开
- **WHEN** 用户通过已登记地址查看 pending Artwork
- **THEN** CharacterStudio 明确显示待确认状态并保持只读，不进入默认角色库、搜索、系列或已批准作品计数，也不自动开放 pending Template 编辑

#### Scenario: 当前发布批准范围与后续候选
- **WHEN** 系统读取 2026-10-11 change 开始前的目录基线，或登记本 change 新作品和透明替换版本
- **THEN** 24 件只记录 change 前逐件批准的历史 Artwork；本 change 每件新增、替换或变更版本均须取得自身批准，pending 数量按实际状态动态计算，不能继承历史批准

#### Scenario: Pending Template 进入审阅 harness
- **WHEN** 维护者明确在审阅 harness 中检查 pending Template
- **THEN** Artwork、Template 与 Draft 均持续标注待确认，不因此进入发布清单或获得批准

#### Scenario: 已批准成品关联待确认线索
- **WHEN** 已批准 Artwork 与待确认候选在内容清单或人工审阅中有关联
- **THEN** 不生成旧揭晓线索；待确认候选只可通过各自显式登记的详情只读查看，批准状态不从已批准 Artwork 继承，候选不进入默认角色库

#### Scenario: 资源缺失或 hash 不匹配
- **WHEN** 已批准 Artwork 的必要原图或展示资源缺失、hash 不匹配或解码失败
- **THEN** 系统显示对应资源不可用并提供恢复路径，不用另一作品替换，原 Artwork 的历史批准记录保持不变

#### Scenario: 未批准的参考候选不能进入覆盖率
- **WHEN** 维护者在规划中登记候选 ID、参考图来源或建议去重关系，但尚未取得对应最终 Artwork 和适配模板的批准
- **THEN** 候选保持规划或 pending 状态，不进入默认画廊，也不计作已完成全角色调整覆盖

### Requirement: 作品资源必须来自可校验的登记引用
Artwork、封面、展示预览、Template 图层、Draft 输出及动态资源 SHALL 有登记类型、MIME、尺寸、字节量、版本、内容 hash、来源、用途和状态；原图下载 SHALL 返回当前 Artwork 登记的原始字节。图库中的当前角色原图和成功 Draft SHALL 是透明 PNG；若既有不透明 Artwork 由新的透明版本替换，替换图必须作为独立版本与资源登记，原文件、原 hash、历史来源及批准记录保持不变。历史不透明版本只可作为准确标注的历史资源提供原始字节，不得作为当前透明角色 Artwork 或透明成品宣称。界面底色仅用于 CSS 展示，不得写入角色原图、Template 图层、Draft 或导出；用户不可配置、导出或通过 Prompt 改变背景。单一 Export 入口只导出当前成功版本的透明 PNG，不得写回、覆盖或取代 Artwork 原图。所有 Template 图层和派生输出 MUST 有登记用途、精确源版本与 hash，且不得由任意资源路径或 URL 注入。路由与用户输入 MUST NOT 注入任意资源路径、URL、Template 图层或作品 Prompt；Draft 只能由受信任目录引用渲染。

#### Scenario: 条件输入含未知资源引用
- **WHEN** 路由、Template 选项或 Draft 输入引用目录外 ID、路径或 URL
- **THEN** 系统拒绝该引用并显示可恢复状态，不读取或导出未登记资源

#### Scenario: 导出资源缺少校验资料
- **WHEN** Template 图层或 Draft 输出缺少登记的版本、来源或必要图像信息
- **THEN** 系统不把它作为有效可导出资源，且不以缺失资源替换当前有效 Artwork

#### Scenario: 默认导出透明角色 PNG
- **WHEN** 用户通过单一 Export 入口导出成功的角色调整
- **THEN** 输出为登记画布尺寸的透明 PNG，不合成界面底色，输出绑定本次成功的 Artwork、Template、选项和 revision

#### Scenario: 界面展示底色不得进入透明角色文件
- **WHEN** 界面使用 CSS 底色展示透明角色、Template 图层或成功 Draft
- **THEN** 底色仅用于屏幕合成，不出现在原图、Prompt、Draft 像素或透明 PNG 导出中，也不提供背景配置或带背景导出

#### Scenario: 透明替换资源不覆盖不透明原图
- **WHEN** 维护者为既有不透明作品制作透明替换版本
- **THEN** 替换资源具有新的明确 Artwork/Asset 版本、来源、hash 和独立批准；旧原图、历史字节及历史批准记录仍可核对，未批准替换版本不得公开

### Requirement: 同角色变体必须由明确关系与真实作品构成
动作、表情和已发布变体 SHALL 仅关联已确认身份下真实制作、单独登记且获对应批准的 Artwork/Asset。相似系列作品、仅有颜色区别的重复角色图或受控 Template 静态 Draft MUST NOT 自动成为独立 Character 或发布变体；没有合格变体时详情隐藏该区块。仅改变配色且未形成独立、可辨识完整外观的选择 SHALL 作为同一 Character 的颜色配置处理，不另增 Character 或图库数量。

#### Scenario: 同一已确认角色有可用眨眼版本
- **WHEN** 用户选择同身份、已登记且批准覆盖的真实变体
- **THEN** CharacterStudio 的图像、facts、Prompt、原图下载和版本一起切换到该变体

#### Scenario: 模板导出静态 Draft
- **WHEN** 用户编辑并导出静态 Draft
- **THEN** 它不出现在动作或变体列表，也不显示动画或 Pet 能力

#### Scenario: 已有姿态文件但确认范围待核定
- **WHEN** 姿态 PNG 已存在且工程检查通过，但没有覆盖该文件和用途的明确艺术批准
- **THEN** 该资源保持候选状态，不成为详情可下载的已发布变体

#### Scenario: 仅配色变化不创建新身份
- **WHEN** 一个参考候选与现有 Character 的轮廓、五官和外观结构相同，差别只有颜色
- **THEN** 系统将颜色作为该 Character 的可用配色或受控 Template 选择处理，不创建重复 Character；只有另有独立完整且具有可辨差异的成品并获单独批准时，才可登记为同一身份下的 Artwork 变体

### Requirement: 扩充作品与标签不得要求组件适配
维护者 SHALL 通过 Character 与完整 Artwork、真实 facts、双语名称/描述/Prompt、版本、原图及展示资源、来源和逐件批准记录扩充角色库。新增 Character/Artwork 仅需符合现有静态数据与资源合同，即自动进入共用卡片、详情、搜索和 Prompt 流程；系统 MUST NOT 增加角色专用页面、角色 ID 条件分支或专属渲染组件。Change 前 24 件已批准 Artwork 基线及本 change 后续获批并接入的公开 Artwork SHALL 具备精确绑定到 Artwork/version 的角色调整 Template，并能在共用详情中实际调整。Template 仅在逐角色资源、来源、层级、锚点、遮挡、兼容性、合法组合与美术批准均齐备时提供能力；家族适用类别调整为外观、配色、五官、配饰及适用家族的服装，物品归入配饰。每个 Artwork 的家族适用类别调整 MUST 均提供符合该角色身份、可见且真实改变成功预览的选项，不得提供空 tab、装饰性假控件、无效选项或跨角色不兼容图层。Dots 与 Grok Bot 必须保持无手脚；配件不得造成穿插、遮挡错误或图层顺序错误。Artwork 原始身份事实、Prompt 和原图与 Draft 配置保持隔离。未具备准确有效 Template 的历史、待审、异常或资源失败 Artwork SHALL 安全降级为静态详情与原字节下载，不显示虚假 Edit；其存在不得用于宣称全覆盖完成。

#### Scenario: 登记一种新的已批准完整角色图
- **WHEN** 维护者按项目根目录 design/character-authoring/README.md 的角色创建流程登记 Character 和一件独立完整 Artwork，并补齐 Artwork/Asset/Prompt 所需字段、精确兼容 Template 与批准
- **THEN** 作品由共用卡片、详情、搜索和 Prompt 组件发现，不要求新增角色专用页面、角色条件分支或渲染组件；Artwork 作为一个独立静态外观计数，不因新增 Character 自动生成其它 Artwork

#### Scenario: 每件当前已批准作品都能进行角色调整
- **WHEN** 用户从默认角色库打开任一当前已批准 Artwork
- **THEN** 唯一 CharacterStudio 载入该 Artwork/version 精确绑定的获批 Template，并以符合身份且真实生效的选项提供外观、配色、五官、配饰及适用家族的服装调整；成功预览与透明导出使用同一合法配置

#### Scenario: 不同家族的调整必须匹配真实资源
- **WHEN** 用户在 Dots、Grok Bot、Meta Muse、人物或动物的已批准 Artwork 中操作某个调整类别
- **THEN** 只呈现有真实图层、事实或已验证能力支撑的家族兼容选项；Dots/Grok 不出现手脚，衣物和配件不悬浮、不穿插、不落错层，缺少实际选项的类别不伪装成有效控件

#### Scenario: 新作品没有适配模板
- **WHEN** 新作品仍处于 pending、审阅中，或其精确版本 Template 缺失、失效、未获批
- **THEN** 它不满足全角色调整覆盖，也不得作为可编辑的默认发布 Artwork；在符合各自访问资格的只读详情中安全呈现并可下载登记原图字节，不提供空编辑入口或虚构选项

#### Scenario: 历史或异常 Artwork 无模板时安全降级
- **WHEN** 历史、待审或异常 Artwork 没有精确可用的 Template，或其原图、层、hash 或兼容登记失败
- **THEN** 详情按资源状态安全降级，原图下载返回可校验的登记原始字节；不替换成别的角色、不伪造编辑能力，也不把该作品计作全角色调整覆盖完成

### Requirement: 所有结果操作必须使用同一冻结作品快照
CharacterStudio 的查看、Prompt、原图下载及透明 Draft 导出 SHALL 绑定启动操作时冻结的 Artwork、Asset、Prompt 或 Template revision。异步加载、编辑或切换作品 MUST NOT 使已启动操作输出另一版本的内容，界面 CSS 底色不得成为 Draft 配置或导出输入，且任何导出 MUST NOT 修改或替换已登记的 Artwork 原图。

#### Scenario: 下载期间开始下一次抽取
- **WHEN** 用户对 Artwork A 发起原图下载后切换查看 Artwork B；旧抽取操作不再存在
- **THEN** 已发起下载仍返回 A 登记的原始文件，B 的图像、facts 或 Prompt 不混入该操作，切换查看不会启动随机发现

#### Scenario: Draft 导出期间更新配置
- **WHEN** 用户在透明 PNG 导出开始后继续修改角色选项
- **THEN** 导出只使用开始时固定的 Artwork 基线、Template revision、选项及渲染快照，或明确取消并要求对最新 revision 重新导出；原 Artwork 字节和 hash 不变
