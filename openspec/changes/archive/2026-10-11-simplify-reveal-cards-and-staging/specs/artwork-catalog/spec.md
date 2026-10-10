# Spec Delta

## MODIFIED Requirements

### Requirement: 完整作品必须拥有稳定的资源与提示词关联
系统 SHALL 为每张实际完整 Artwork 提供稳定 ID、名称、描述、来源、发布状态、身份、系列、八类 typed facts、原图与 Prompt 引用。首批静态 Gallery 曾以 20 件作为初始目标；截至 2026-10-11，本轮用户批准公开的目录含 24 件独立完整 Artwork。该数量描述当前批准版本，不是目录上限；后续作品仍须逐件登记自身来源、素材、元数据并获得覆盖该作品版本的美术批准后，方可加入默认目录。Gallery 外观计数只计唯一、完整、独立登记的 Artwork，不计 Template/Draft 渲染、色卡、姿态资源、截图或重复副本。封面、展示预览、原图、Template、Template 图层、Draft 与 Prompt SHALL 有各自明确的类型、用途及版本关联。Artwork 原图像素 MUST 来自登记的完整作品；未登记组合不得成为 Artwork、已发布变体或自动生成内容，受控 Template 只在隔离 Draft 中产生明确支持的本地变化。

#### Scenario: 查看一张发布作品
- **WHEN** 用户从角色库或 CharacterStudio 查看已发布 Artwork
- **THEN** 名称、封面、facts、原图与原始 Prompt 对应同一登记版本，编辑能力不改变其资源引用

#### Scenario: 随机发现预先设计的有限变化
- **WHEN** 用户通过受控 Template 选择一组合法选项；旧随机发现入口已退役
- **THEN** 系统只生成与当前 Artwork 隔离的 Draft，不提供老虎机或随机组装，也不把未登记组合加入 Artwork 目录或发布作品集合

### Requirement: 事实特征不得与未来创作要求混淆
Artwork SHALL 只记录原图实际呈现的八类 typed facts 和已制作动作/表情；none、notApplicable 与 unknown MUST 明确区分。用户的 Template 选择与外部 ChatGPT 二创意图 SHALL 与 Artwork facts、标签、原始 Prompt、原图和批准状态隔离。

#### Scenario: 图中没有帽子但参考 Prompt 要求新增帽子
- **WHEN** Artwork 原图没有帽子且 Template 明确支持合法的加帽配置
- **THEN** Draft 可按受控模板呈现该变化，Artwork facts、基础 Prompt、原图及原图下载仍描述和返回没有帽子的源作品

#### Scenario: 无道具与尚未核实道具
- **WHEN** 一个 Artwork 已确认没有某项事实，另一个 Artwork 对同一事实尚未核实
- **THEN** 前者保留 none 或 notApplicable，后者保留 unknown；Draft 选择不得推断或覆盖任一 Artwork 的事实

### Requirement: 发布资格必须同时满足内容资源与批准边界
默认角色库 SHALL 仅包含已登记、来源有效、资源与 Prompt 完整且人工批准覆盖具体 Artwork 版本的作品。任何尚未获得对应版本批准的新 Artwork MUST 保持 pending，不能因规划数量、资源存在、Template 可渲染、Draft 导出、标签名称或工程测试而进入默认目录。本轮 2026-10-11 发布批准范围为 24 件公开 Artwork，当前没有待确认 Artwork；该记录不自动批准后续新增或变更版本。资源存在、Template 可渲染、Draft 导出、标签名称或工程测试 MUST NOT 自动授予 Artwork 批准或发布资格；Artwork、Template、图层、Draft 导出及页面呈现的状态 SHALL 分别记录。当前已批准目录必须按实际逐件批准状态动态计算。

#### Scenario: 已批准 Artwork 生成本地 Draft
- **WHEN** 用户通过已批准 Template 为 Artwork 生成 Draft
- **THEN** 原 Artwork 保持原发布与批准状态，Draft 不作为新 Artwork、变体或默认角色库内容

#### Scenario: Pending 候选在普通详情中打开
- **WHEN** 用户通过已登记地址查看 pending Artwork
- **THEN** CharacterStudio 明确显示待确认状态并保持只读，不进入默认角色库、搜索、系列或已批准作品计数，也不自动开放 pending Template 编辑

#### Scenario: 当前发布批准范围与后续候选
- **WHEN** 系统组装 2026-10-11 本轮已确认的发布目录，或登记后续新作品
- **THEN** 当前目录包含 24 件逐件获批的公开 Artwork，当前没有待确认 Artwork；任何后续新作品或变更版本仍须取得其自身批准，不能继承此轮批准

#### Scenario: Pending Template 进入审阅 harness
- **WHEN** 维护者明确在审阅 harness 中检查 pending Template
- **THEN** Artwork、Template 与 Draft 均持续标注待确认，不因此进入发布清单或获得批准

#### Scenario: 已批准成品关联待确认线索
- **WHEN** 已批准 Artwork 与待确认候选在内容清单或人工审阅中有关联
- **THEN** 不生成旧揭晓线索；待确认候选只可通过各自显式登记的详情只读查看，批准状态不从已批准 Artwork 继承，候选不进入默认角色库

#### Scenario: 资源缺失或 hash 不匹配
- **WHEN** 已批准 Artwork 的必要原图或展示资源缺失、hash 不匹配或解码失败
- **THEN** 系统显示对应资源不可用并提供恢复路径，不用另一作品替换，原 Artwork 的历史批准记录保持不变

### Requirement: 作品资源必须来自可校验的登记引用
Artwork、封面、展示预览、Template 图层、Draft 输出及动态资源 SHALL 有登记类型、MIME、尺寸、字节量、版本、内容 hash、来源、用途和状态；原图下载 SHALL 返回当前 Artwork 登记的原始字节。路由与用户输入 MUST NOT 注入任意资源路径、URL、Template 图层或作品 Prompt；Draft 只能由受信任目录引用渲染。

#### Scenario: 条件输入含未知资源引用
- **WHEN** 路由、Template 选项或 Draft 输入引用目录外 ID、路径或 URL
- **THEN** 系统拒绝该引用并显示可恢复状态，不读取或导出未登记资源

#### Scenario: 导出资源缺少校验资料
- **WHEN** Template 图层或 Draft 输出缺少登记的版本、来源或必要图像信息
- **THEN** 系统不把它作为有效可导出资源，且不以缺失资源替换当前有效 Artwork

### Requirement: 同角色变体必须由明确关系与真实作品构成
动作、表情和已发布变体 SHALL 仅关联已确认身份下真实制作、单独登记且获对应批准的 Artwork/Asset。相似系列作品或受控 Template 静态 Draft MUST NOT 自动成为变体；没有合格变体时详情隐藏该区块。

#### Scenario: 同一已确认角色有可用眨眼版本
- **WHEN** 用户选择同身份、已登记且批准覆盖的真实变体
- **THEN** CharacterStudio 的图像、facts、Prompt、原图下载和版本一起切换到该变体

#### Scenario: 模板导出静态 Draft
- **WHEN** 用户编辑并导出静态 Draft
- **THEN** 它不出现在动作或变体列表，也不显示动画或 Pet 能力

#### Scenario: 已有姿态文件但确认范围待核定
- **WHEN** 姿态 PNG 已存在且工程检查通过，但没有覆盖该文件和用途的明确艺术批准
- **THEN** 该资源保持候选状态，不成为详情可下载的已发布变体

### Requirement: 扩充作品与标签不得要求组件适配
维护者 SHALL 通过 Character 与完整 Artwork、真实 facts、双语名称/描述/Prompt、版本、原图及展示资源、来源和逐件批准记录扩充角色库。新增 Character/Artwork 仅需符合现有静态数据与资源合同，即自动进入共用卡片、详情、搜索和 Prompt 流程；系统 MUST NOT 增加角色专用页面、角色 ID 条件分支或专属渲染组件。每件 Artwork MUST 显式关联 Character 与系列；Template 只能显式绑定适用的 Artwork/版本，并在确有资源、来源、能力规则和验收时提供有限本地编辑。无 Template 的新增作品仍可作为静态作品查看、搜索、复制 Prompt 和下载原图；不得把新作品自动纳入 Dots/Grok 试点模板。

#### Scenario: 登记一种新的已批准完整角色图
- **WHEN** 维护者按项目根目录 `design/character-authoring/README.md` 的角色创建流程登记 Character 和一件独立完整 Artwork，并补齐 Artwork/Asset/Prompt 所需字段与批准
- **THEN** 作品由共用卡片、详情、搜索和 Prompt 组件发现，不要求新增角色专用页面、角色条件分支或渲染组件；Artwork 作为一个独立静态外观计数，不因新增 Character 自动生成 Template

#### Scenario: 新作品没有适配模板
- **WHEN** 新 Character 或 Artwork 未显式关联具备真实资源与验收范围的 Template
- **THEN** 已获 Artwork 批准的静态作品仍可查看、搜索、复制 Prompt 和下载原图，不提供本地 Edit 入口；pending 候选仍不进入默认目录，显式 Edit 请求显示未适配提示

### Requirement: 所有结果操作必须使用同一冻结作品快照
CharacterStudio 的查看、Prompt、原图下载和 Draft 导出 SHALL 绑定启动操作时冻结的 Artwork、Asset、Prompt 或 Template revision；异步加载、编辑或切换作品 MUST NOT 使已启动操作输出另一版本的内容。

#### Scenario: 下载期间开始下一次抽取
- **WHEN** 用户对 Artwork A 发起原图下载后切换查看 Artwork B；旧抽取操作不再存在
- **THEN** 已发起下载仍返回 A 登记的原始文件，B 的图像、facts 或 Prompt 不混入该操作，切换查看不会启动随机发现

#### Scenario: Draft 导出期间更新配置
- **WHEN** 用户在 Draft PNG 导出开始后继续修改配置
- **THEN** 导出只使用开始时固定的 Artwork 基线、Template revision、选项及渲染快照，或明确取消并要求对最新 revision 重新导出

## REMOVED Requirements

### Requirement: Artwork 必须记录八类事实并派生有效揭晓卡片
**Reason**: 逐卡揭晓和卡片派生已退出产品，八类 Artwork facts 继续由“事实特征不得与未来创作要求混淆”及目录查询规范保留。
**Migration**: 不迁移揭晓卡或 DrawResult；保留事实值供静态描述和搜索，不再据其生成揭晓展示卡。

### Requirement: Artwork 独立登记六类揭晓说明视觉
**Reason**: 独立揭晓说明图不再是角色库、CharacterStudio 或本地 Draft 的产品资源类型。
**Migration**: 保留既有来源和历史验收记录；不得将旧揭晓图自动当成 Template 图层或 Draft 素材。
