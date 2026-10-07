# Spec Delta

## MODIFIED Requirements

### Requirement: 素材与规则变更必须生成对应的增量影响范围
增量范围 MUST 根据变更的 Artwork、Asset、Tag/Feature、Prompt 和用户可见消费路径识别受影响范围。新增或更新作品资源 MUST 检查其目录记录、详情显示、变体关系、随机资格、Prompt 绑定和下载消费路径；公共 Artwork 查询/发布资格变化 MUST 检查画廊筛选、首页专题映射及随机候选；揭晓字段变化 MUST 检查卡片特征与最终作品一致性。与已退出组件几何、Canvas、染色或基底适配无关的变更 MUST NOT 扩大为旧组合回归。

#### Scenario: 修改公共合成或染色逻辑
- **WHEN** 维护者从旧公共合成/染色能力迁出，并变更当前共享 Artwork 资源读取或展示逻辑
- **THEN** 增量范围涵盖所有受影响的作品索引、缩略图/详情、随机候选、Prompt 与下载消费路径，不生成旧组件配方回归

#### Scenario: 只修改标签浏览或筛选规则
- **WHEN** 变更只涉及标签/Feature 元数据、别名或查询语义
- **THEN** 检查图库筛选、首页专题映射、空结果和随机候选池的发布资格，不执行无关像素渲染或旧 Fit 回归

#### Scenario: 修改主题组合规则
- **WHEN** 维护者调整主题专题与真实 Artwork 标签/揭晓特征的映射
- **THEN** 检查受影响的画廊查询和随机候选，确认特征来自已发布 Artwork；不执行几何或配饰组合适配回归

#### Scenario: 更新随机揭晓字段
- **WHEN** 新增或调整要展示的角色/外形/配饰/动作揭晓特征
- **THEN** 检查其来源为已发布 Artwork 的真实特征，并验证停止卡、结果图、Prompt 和下载均引用同一作品版本

### Requirement: 冻结覆盖证据必须可复现且不得自动接受新基准
每份冻结报告 MUST 固定源码提交、静态资源清单/hash、cache/module 版本、source ID、浏览器及视口、Artwork/Asset ID 与版本/hash、查询/锁定条件、DrawResult、实际下载文件与 Prompt 回读证据。若源码工作树未提交或 source ID 未覆盖工作树，报告 MUST 固定 dirty-source snapshot hash 与变更文件 hash；单记录 HEAD/cache 不足以绑定源码。新证据 MUST 写入 `design/acceptance/current-<本机日期>-v<cache版本>/` 下未存在的新目录。既有冻结和归档记录 MUST 保持原样；视觉差异、构建/脚本通过 MUST NOT 自动接受新基准或替代人工美术确认。

#### Scenario: 固定环境并冻结本次结果
- **WHEN** 维护者冻结一轮发布作品、随机一致性和下载检查
- **THEN** 报告记录源码/资源 manifest、作品及资源版本、候选范围、实际 PNG/Prompt 证据和无法执行项，不写入已存在目录

#### Scenario: 冻结源码包含未提交文件
- **WHEN** 被检查页面含有 source ID 未覆盖的工作树文件
- **THEN** 报告包含 dirty-source snapshot 与路径/hash 清单，不只记录 HEAD 与 cache

#### Scenario: 目标冻结目录已存在
- **WHEN** 当前日期和 cache 版本对应的冻结证据目录已经存在
- **THEN** 新证据不得覆盖旧目录，须使用另一个唯一版本目录

#### Scenario: 图像差异产生候选截图
- **WHEN** 自动图像比较产生候选截图或标记差异
- **THEN** 截图保持待人工审核，不自动记为视觉批准或已接受基准

### Requirement: 发布作品覆盖必须验证实际资源及其全部消费路径
覆盖清单 MUST 从实际发布 Artwork 目录派生，不得固定作品数量。每项适用 Artwork 至少覆盖登记数据、真实缩略图/原图、变体和 Prompt 绑定、画廊/详情、抽取候选资格及直接下载；缺失资源、版本/hash 不符、Prompt 指向错作品或下载字节不符 MUST 作为失败/阻塞报告，不得静默替换。真实 PNG 输出 MUST 回读尺寸、画面、alpha 和 hash。有限设计组合的覆盖分母是目录中明确登记的完整 Artwork 集合；测试 MUST 验证每个当前登记组合及真实 Feature 到资源/Prompt 的映射，不得从 Feature 值推导无限交叉覆盖，也不得把组合可能性误读成禁止完整作品拥有多项搭配特征。

#### Scenario: 资源缺失或与清单不符
- **WHEN** 发布 Artwork 引用的文件缺失，或实际 hash/尺寸/alpha 与登记信息不符
- **THEN** 该 Artwork 标为不可发布/不可抽取并保留失败证据，不以相似图片补位

#### Scenario: 核对随机结果的一致性
- **WHEN** 覆盖检查对一个 DrawResult 执行卡片揭晓、详情、Prompt 复制与 PNG 下载
- **THEN** 每项输出绑定同一 artworkId 和资源版本，下载回读与该作品原始发布字节相符

#### Scenario: 目录增添真实作品
- **WHEN** 目录新增一件已登记且通过发布资格的 Artwork
- **THEN** 新覆盖用例从实际目录生成并加入图库、变体/Prompt/下载与适用随机路径检查，不要求组件适配或背景笛卡尔积

#### Scenario: 覆盖有限的已设计组合
- **WHEN** 目录中某风格新增一个经过制作、登记和批准的颜色/形状/五官/衣物/配饰搭配 Artwork
- **THEN** 覆盖检查把它作为新的完整抽取结果验证；尚未登记的交叉搭配不自动加入分母或随机池

## REMOVED Requirements

### Requirement: 当前有限模板与输出路径必须全量列入覆盖
**Reason**: 该矩阵固定列举 15 looks、22 模板状态、背景统计、Canvas 和组合输出。
**Migration**: 以本 delta 新增的 Artwork/Asset 消费路径覆盖合同为准；现有 PNG 文件按新目录盘点，不迁移旧模板计数。

### Requirement: 模块化素材覆盖必须遵循声明能力并分层生成
**Reason**: 动态模块、fitRef 和组件组合已退出。
**Migration**: 不迁移 fitProfile、fitPolicy、sourceParts 或组件矩阵；历史覆盖证据留在归档。

### Requirement: 覆盖分母必须保留声明支持但执行失败的用例
**Reason**: “声明支持的组件组合”不再构成运行能力或组合矩阵。
**Migration**: 文件缺失、hash 错误或解码失败改按 Artwork/Asset 资源状态记录，不生成旧组合排除分母。

### Requirement: 内部组合图鉴必须支持分页与完整配置回查
**Reason**: 组合图鉴是旧研发工具，不属于新图库。
**Migration**: 不迁移图鉴页或 localStorage 适配标注；保留既有历史记录，不进入新发布路径。

### Requirement: 模块适配协调性复核必须绑定精确版本并与批准分开
**Reason**: 对组件/基底/FitProfile 的内部协调复核与产品能力一同退出。
**Migration**: Artwork 美术审批与工程资源状态按新验收合同登记；旧 fit 复核仅保留历史，不转成作品批准。

### Requirement: 新版项目往返与旧输入拒绝必须分别验证
**Reason**: 新产品不读写项目 JSON，也无需提供旧版兼容或拒绝导入产品路径。
**Migration**: 删除新旧项目序列化/恢复和旧格式测试；不迁移存储草稿，历史文件保持原样。

### Requirement: 新增模块配方继续使用单一透明输出
**Reason**: 不再生成模块配方或 Canvas 组合输出。
**Migration**: 透明要求由实际角色 Artwork/Asset 下载合同验证；不提供配方转换或双轨 renderer。

## ADDED Requirements
