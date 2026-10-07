# Spec Delta

## REMOVED Requirements

### Requirement: 模块素材必须登记完整且可校验的素材契约
**Reason**: 新产品不登记可任意运行时穿戴/拼装的角色模块；有限设计组合以独立完整 Artwork 表达，不需要可运行模块。
**Migration**: 不迁移模块槽位、profile 或切片契约；已有批准完整作品按 Artwork/Asset 保留。

### Requirement: 组合解算必须先满足硬约束再应用美术推荐规则
**Reason**: 通用组件解算器及推荐系统退出产品；已登记的完整作品仍可涵盖预先设计的特征搭配。
**Migration**: 不保留 resolver 双轨或新目录解算步骤；筛选硬条件只用于完整 Artwork 候选池。

### Requirement: 动态组件必须根据受信任基底几何逐件解算
**Reason**: 不提供任意基底的动态配饰适配或 FitProfile；有限搭配须先作为完整成品设计。
**Migration**: 组件适配关系不迁移；真实完整图中已有的配饰仅作事实 Feature。

### Requirement: 所有工作台入口必须生成同一种真实可渲染组合
**Reason**: 工作台和当前角色组合输出一并退出。
**Migration**: 无新组装入口；用户从图库详情直接查看和带走完整 Artwork。

### Requirement: 默认随机必须从真实可行且已批准的组合中选取
**Reason**: 随机结果从组合配方改为完整作品。
**Migration**: 把可确认的完整 Artwork 纳入新发布目录；未批准模块组合不迁移为随机作品。

### Requirement: 所有新项目必须用 v2 区分真实组合与 Prompt-only 配置
**Reason**: 项目序列化和 Prompt-only 角色项目不再属于产品。
**Migration**: 无项目版本迁移或兼容 reader；保留历史文件和项目证据原状。

### Requirement: 染色能力必须与实际解析颜色和像素输出一致
**Reason**: 角色素材染色/组合输出作为运行时能力已退出。
**Migration**: 保留各完整 Artwork 已制作的颜色版本作为独立作品资源，不生成动态染色或别名。

### Requirement: 每项新适配必须独立记录人工美术批准
**Reason**: 任意基底×组件适配审批不再是交付单位。
**Migration**: 对新完整 Artwork/变体绑定人工批准；旧适配批准保存在历史记录，不转移或批量继承。

### Requirement: 内置素材目录不得引入用户上传或不明来源图像
**Reason**: 该合同描述模块素材输入。参考图只提供文字模板，图片由用户在 ChatGPT 上传，不加入公共图库。
**Migration**: 来源与公开目录资格改由 Artwork/参考图合同规定；用户本地参考图片不上传或登记为目录素材。

### Requirement: 2D角色渲染计划必须固定使用透明背景
**Reason**: 新产品没有运行时 2D 渲染计划。
**Migration**: 透明输出转由完整 Artwork 的真实文件及下载校验合同承接，不保留 renderer 或其计划状态。

## ADDED Requirements

### Requirement: 旧组件组装能力必须退出普通运行和发布路径
工作台、装备操作、模块选择、旧项目 JSON 读写、角色恢复、FitProfile、组合 resolver、Canvas composer、组合图鉴及 3D/结构诊断产品入口 SHALL 从新产品导航、可达交互及普通浏览/随机发布依赖中退出。新产品 MUST NOT 加载旧 schema reader、迁移代码或新旧双模式兼容路径。历史素材、批准记录和 Git 历史 SHALL 保留；`dist/` 不得被作为可整体删除的纯构建目录。

#### Scenario: 普通访问首页或图库
- **WHEN** 用户打开首页、画廊、作品详情或随机发现
- **THEN** 产品不呈现工作台/组装/诊断入口，普通页面资源依赖不加载 Fit、组合 resolver 或 3D renderer

#### Scenario: 访问旧路由或提供旧项目文件
- **WHEN** 用户打开旧 `#workspace` 路径或尝试提供 v1/v2 项目文件
- **THEN** 产品不加载旧工作台或项目 reader；未知路径采用普通 fallback/未找到处理，且没有迁移或兼容声明

#### Scenario: 移除运行模块时保存历史证据
- **WHEN** 实施者删除无用运行模块或发布依赖
- **THEN** 保留已批准完整 Artwork、来源/历史记录和 Git 归档；发布清单按具体文件处理，不清空整个 `dist/`

### Requirement: 有限设计组合必须以完整作品登记
角色颜色、形状、五官、衣物、头部配饰、身体饰品或道具可以存在有限的预先设计变化。每一项进入随机池的变化 SHALL 是独立完整 Artwork，持有自身真实图像、Feature、Prompt、资源状态与对应批准；Feature 只能用于检索、筛选、说明和卡片揭晓。系统 MUST NOT 依据组件/Feature 笛卡尔积临时创建图像，也 MUST NOT 将配件适配到任意基底。随机动画可以滚动展示不同已登记作品的真实线索，最终必须停在一个已登记完整作品。

#### Scenario: 随机选择已设计组合
- **WHEN** 用户随机发现一件包含已设计颜色与配饰搭配的完整作品
- **THEN** 结果直接引用该 Artwork 的原图与数据记录；不在浏览器中按独立 Feature 即时合成或替换配饰

#### Scenario: 组合清单尚无某交叉搭配
- **WHEN** 用户可能从现有颜色值和配饰值推测出一个未登记交叉组合
- **THEN** 该组合不会仅因每个 Feature 各自存在而进入结果池；需先制作、登记并审核对应完整 Artwork
