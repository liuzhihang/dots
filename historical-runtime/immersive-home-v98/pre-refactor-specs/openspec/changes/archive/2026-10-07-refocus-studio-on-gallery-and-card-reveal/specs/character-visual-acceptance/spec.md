# Spec Delta

## REMOVED Requirements

### Requirement: 模板能力检查与人工美术确认必须分开
**Reason**: 该要求的主要能力轴是模板、工作台 Canvas、组合目录和结构诊断。
**Migration**: 已有用户批准和历史检查记录按原范围保存；新作品的状态由本 delta 的 Artwork/Asset 验收合同记录，不推导旧组合批准。

### Requirement: 五组保留canonical基准且新增身份须独立验收
**Reason**: 固定 canonical 基准和每组身份三只的旧家族目录架构已退出。
**Migration**: 保留目前经确认的作品作为目录内容，不要求每个身份补成 canonical 编辑基准。

### Requirement: 美术验收必须检查真实页面和实际受支持合成
**Reason**: 受支持合成、Canvas 和工作台不再是验收对象。
**Migration**: 验收实际首页、画廊、详情、随机及导出资源；历史组合/结构诊断结论不重标为通过。

### Requirement: 响应式与设备检查必须注明实际覆盖范围
**Reason**: 原要求限定首页、图库和工作台，不涵盖新游戏、详情、参考图与单 overlay。
**Migration**: 320/390/768 CSS px 和桌面模拟记录用作新页面验收；不得把模拟视口说成实体设备验证。

### Requirement: 视角与动作验收必须遵循素材实际能力
**Reason**: 原要求将状态能力放入模板姿态/3D成品规范。
**Migration**: 静态变体、实际动画文件和目标包分别记录；没有资源的动作只可作创作要求，不是已提供状态。

### Requirement: PNG下载与Prompt回读结论必须对应实际产物
**Reason**: 原文绑定 Canvas/组合/结构诊断输出。
**Migration**: 对 Artwork 原始文件、直接下载、变体和 DrawResult Prompt 做字节回读；不迁移诊断输出结论。

### Requirement: 任务完成、范围取消和用户确认必须独立留档
**Reason**: 旧措辞将已取消的 3D 与组件工程清单作为特定交付合同。
**Migration**: 保留原归档和取消状态；本 change 的工程完成、资源存在、批准、目标验证和发布按独立状态记录。

### Requirement: 捕获调用不能覆盖角色透明输出
**Reason**: 该捕获约束专指 Canvas、组合图鉴和诊断 renderer。
**Migration**: 对实际 Artwork 和下载文件核实真实 alpha；不保留已退役捕获入口以提供兼容。

## ADDED Requirements

### Requirement: 作品资源工程状态、美术批准、目标验证和发布状态必须分别记录
每个 Artwork/Asset MUST 分别记录文件存在与读取、版本/hash/尺寸/alpha、来源资格、用户美术批准范围、目标平台验证及发布状态。任一状态不得代替另一个状态。目录资格与资源有效性按具体版本检查；历史批准只覆盖其有证据的范围。

#### Scenario: 资源存在但没有人工批准
- **WHEN** 一张图通过格式和 alpha 检查，但没有绑定的用户美术批准
- **THEN** 工程状态可记为可读取，美术状态仍待确认，该图不得显示为已批准或因此进入精选/随机池

#### Scenario: 已批准作品缺失资源
- **WHEN** 用户批准记录存在但引用的 Artwork 文件缺失或 hash 不符
- **THEN** 资源状态显示缺失/不匹配，作品不可下载或抽取，批准记录原值及范围仍保留

### Requirement: 页面和资源验收必须绑定本次实际版本与观察范围
页面验收 MUST 记录实际站点/本地版本、源码/静态资源清单、浏览器视口、检查路径与结果。PNG 和 Prompt 的通过状态 MUST 基于实际下载字节/剪贴板或文件回读。屏幕模拟、脚本、概念图、截图 diff 或构建结果 MUST NOT 自动代表视觉批准或实体设备验证。冻结证据写入唯一新目录，不覆盖历史证据。

#### Scenario: 检查桌面及响应式页面
- **WHEN** 验收者检查桌面、320、390、768 CSS px 页面中的首页、图库、游戏、详情或参考图流程
- **THEN** 记录实际浏览器/版本和被观察路径；视口模拟明确标为模拟，不能宣称实体手机已通过

#### Scenario: 验证下载 PNG 与 Prompt
- **WHEN** 验收者检查 Artwork 下载和当次 Prompt
- **THEN** 回读下载文件尺寸、内容、alpha、hash，并回读该次剪贴板/TXT文本；未回读的输出保持未验证

### Requirement: 取消范围和历史缺证不得转换为验收通过
被明确取消的工作台/模块/3D 任务 SHALL 保持取消或退出范围状态；历史失败和缺证原样保留。新产品的通过状态仅由新合同对应的工程证据、素材登记、人工批准或平台验证分别产生。

#### Scenario: 旧组件任务不再进入新验收清单
- **WHEN** 实施者因产品方向变更移除某个旧 Fit/组件/3D 发布依赖
- **THEN** 记录其退出范围或删除，不勾选为通过，不改写归档证据

#### Scenario: 新增变体没有确认记录
- **WHEN** 变体文件存在且工程校验通过但没有对应人工确认
- **THEN** 工程检查与用户美术状态分别显示，不能因测试通过标记艺术确认

## MODIFIED Requirements

### Requirement: 特征卡视觉材料必须可追溯且达到展示质量
随机卡和结果摘要 SHALL 使用 Artwork 独立登记的 `revealVisuals.style/appearance/paletteMaterial/clothing/accessory/prop` 视觉资源，各自记录稳定 ID、来源、Asset 版本/hash、尺寸、语义用途、工程状态及独立的用户批准状态。风格可使用对应完整 Artwork 原图作为身份预览（`kind=original`）；有值的其余维度 SHALL 使用干净且语义准确的独立 `kind=dedicated-asset`；已核实 `none`/`notApplicable` SHALL 使用统一、低强调的准确 `kind=empty-value`。这些视觉只用于揭晓和特征说明，不是可佩戴组件、不参与作品合成，也不能冒充新 Artwork。原图 `sourceRect` 仅作为内部制作辅助，不得成为生产默认视觉。低清占位图、原型/网页截图裁片、动漫像素、与当前事实不符的示意和同一完整成品图重复填充多个维度 MUST NOT 冒充专属视觉。用户明确要求复核的候选界面可在预览中展示 `candidate-preview` 资源；这类资源必须记 `artApproval=pending`，不授予任何新 Artwork 发布资格，也不表示六类视觉已通过。既有 15 张获批完整 Artwork 的批准范围保持不变。资源缺失或语义/展示质量不足时必须记录素材缺口并保持验收 pending，不能用工程任务勾选替代用户美术批准。

#### Scenario: 从已批准高清图取一段特征
- **WHEN** 六卡需要表达某件成品中真实存在的帽子、耳机、材质或局部造型
- **THEN** 生产使用该 Artwork 对应的独立、来源可追溯 `dedicated-asset`；临时 `sourceRect` 只能用于内部制作，不能作为生产默认或扩展原批准范围

#### Scenario: 原图无法提供清晰特征
- **WHEN** 高分辨率源图仍无法清楚表达某项真实特征，且无独立揭晓视觉
- **THEN** 记录素材缺口并保持验收 pending，不发布模糊占位或以工程任务替代艺术批准

#### Scenario: 使用独立登记视觉作为特征线索
- **WHEN** Artwork 为真实存在的帽子、耳机、材质或局部造型登记了独立 `revealVisuals` 资源
- **THEN** 卡片使用对应 Asset 的稳定引用与来源，并且仅作为该特征的 UI 线索，不宣称其为可穿戴组件、独立成品或自动批准素材

#### Scenario: 独立揭晓视觉尚未制作
- **WHEN** 高分辨率原图仍不能清楚表达所需特征，且没有独立登记的揭晓视觉
- **THEN** 生产标记该视觉缺口并保持 pending，不用原图裁片或粗糙占位图关闭任务，也不据此更新用户艺术批准状态
