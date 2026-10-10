# Spec Delta

## MODIFIED Requirements

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

## ADDED Requirements

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
