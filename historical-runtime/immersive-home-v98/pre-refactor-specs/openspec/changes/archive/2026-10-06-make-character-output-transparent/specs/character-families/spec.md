# Spec Delta

## MODIFIED Requirements

### Requirement: 五个角色分组必须独立可选且保持身份
系统 SHALL 保留 Dots、Grok Bot、Meta Muse、人物、动物首批身份及其可浏览的预置标签；五者 MUST NOT 作为标签或内容目录的永久上限。标签组织 SHALL 与角色身份、风格、布局和素材能力分离；每组 SHALL 通过已登记 PNG 模板保持独立的角色轮廓、五官、材质与适用组件，不能通过同一模型仅更换颜色或标签来冒充不同分组。新增标签 SHALL 仅引用已有登记身份，不自动赋予素材、结构或随机成品能力。现有 family 默认值、结构适配和当前会话草稿 SHALL 保持，MUST NOT 全局改名为 tag；这些当前职责 MUST NOT 被用于保留旧项目格式、旧 schema 或旧身份别名迁移。各组背景字段不再是创作能力；角色 Prompt、Canvas、随机结果及 PNG 均 SHALL 忽略合法背景元数据并保持透明。

#### Scenario: 用户逐一选择五组角色
- **WHEN** 用户在当前编辑器逐一选择五个分组
- **THEN** 每组显示符合自身身份合同的模板，只有已登记完整配方、姿态或组件实际改变角色；背景不作为选项，所有角色输出保持透明，其余不支持字段只编辑 Prompt，Grok Bot 不会遗漏，Meta Muse 不会显示卷发人物，人物和动物不混入 Dots
