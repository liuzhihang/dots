# Spec Delta

## REMOVED Requirements

### Requirement: 抽取必须从有限设计的完整 Artwork 池选定一张作品
**Reason**: 随机抽取及其候选池已从当前产品移除。
**Migration**: 无运行时或用户数据迁移；历史代码、数据、资源和验收保存在历史目录。当前使用角色库搜索和系列筛选，不提供旧抽取路由。

### Requirement: 卡片必须按顺序揭晓同一作品的真实特征
**Reason**: 逐卡揭晓交互及其特征卡不属于当前产品。
**Migration**: facts 保留在静态 Artwork 目录，用于描述和搜索；不生成或迁移揭晓卡。

### Requirement: 抽取状态必须处理资源、取消、去重和重启
**Reason**: 抽取过程、重抽与其运行状态已退出活动产品。
**Migration**: 无产品状态迁移；静态角色查看和 Template 编辑各自按当前 Studio 的资源与 Draft 契约执行，旧状态仅供历史审阅。

### Requirement: 弹窗和灵感游戏必须共用抽取模型与结果
**Reason**: 首页随机弹窗与灵感游戏均已移除。
**Migration**: 当前主路径为唯一角色库和共用 CharacterStudio；Guide 页面与导航均已移除，`#/guide` 按普通未知路由处理，不建立旧入口或双版本开关。

### Requirement: 揭晓特征、作品图、Prompt 与下载必须绑定同一快照
**Reason**: 结果卡和 DrawResult 上下文已不存在。
**Migration**: 作品详情、原图下载及 Template Draft 分别遵循当前 Artwork 版本与 Template revision 契约；不迁移 DrawResult。

### Requirement: 随机容器必须保持简洁操作并在结果后允许扩展条件
**Reason**: 随机容器与结果后的条件扩展已移除。
**Migration**: 用户在角色库使用单文本搜索和单系列筛选；旧条件不映射至新 URL 或存储。

### Requirement: 特征卡必须简洁表达实际线索且不提前展示完整成品
**Reason**: 特征卡、卡片节奏和延迟揭晓均已从产品移除。
**Migration**: Artwork 详情直接展示完整登记作品；历史卡片视觉与审核状态只留在历史记录，不转为 Template 图层。
