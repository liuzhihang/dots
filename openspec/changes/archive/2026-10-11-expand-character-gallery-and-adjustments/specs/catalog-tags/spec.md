# Spec Delta

## MODIFIED Requirements

### Requirement: 已发布 Artwork 必须按事实标签和特征建立可扩展目录
系统 SHALL 为标签和系列提供稳定 ID、类型和双语名称，并允许 Artwork 关联已核实的事实标签。角色库 SHALL 保留 Dots、Grok Bot、Meta Muse、人物、动物五个系列入口；不得新增独立原创系列筛选，独立原创角色仍以自身身份在全部角色的 Curated 排序中列于人物之后。系列只帮助组织已批准作品，不是固定身份 schema 或渲染能力。Artwork facts 必须与实际画面一致，none、notApplicable 与 unknown MUST 区分；标签 MUST NOT 授予渲染、穿戴、动作或平台安装能力。

#### Scenario: 浏览五个系列
- **WHEN** 用户查看角色库系列筛选
- **THEN** Dots、Grok Bot、Meta Muse、人物和动物均以英文及简体中文可辨识，系列内只显示符合发布资格的 Artwork

#### Scenario: 一件作品属于多个目录范围
- **WHEN** 已发布 Artwork 同时具有系列、风格、配件和道具等已核实标签
- **THEN** 全部事实仍绑定同一 Artwork 和资源，单文本查询可匹配其真实名称、别名、描述或 facts；标签不复制 Artwork，也不改变其像素或编辑能力

#### Scenario: 只登记图中真实可见的特征
- **WHEN** 某 Artwork 的事实尚未核实
- **THEN** 该事实保持 unknown，不会被当成无值或作为已存在的筛选结果

### Requirement: 画廊搜索必须组合标签、事实特征和文本条件
角色库 SHALL 提供一个文本搜索、一次仅选一个系列的筛选及 Curated/Name 两种排序。系列筛选保持五个现有系列。Curated SHALL 按 Dots、Grok Bot、Meta Muse、动物、人物的固定优先顺序分组，并在组内保持登记的精选顺序；未归入五个系列的独立原创作品排在这些分组之后；Name SHALL 继续按角色名称排序。文本按规范化后的名称、别名、描述和已登记真实 facts 进行多词 AND；文本与系列采用 AND。默认搜索 MUST 排除 pending、缺资源、退役和 Draft 项，清除一个条件 MUST 保留另一个条件，无结果 SHALL 明示且不得自动放宽条件。

#### Scenario: 组合多维过滤
- **WHEN** 用户输入多个中英文名称、别名或事实词，并选择一个系列
- **THEN** 只显示同时包含全部搜索词且属于该系列的已发布 Artwork

#### Scenario: 清除部分筛选或遇到空结果
- **WHEN** 用户清除文本或系列、切换 Curated/Name 排序，或组合条件没有匹配作品
- **THEN** 切换排序时查询条件保持不变；清除单个条件时另一条件保持不变；无结果时提供修改或清除操作，不静默改宽查询

#### Scenario: Curated 按指定系列优先顺序展示
- **WHEN** 用户选择 Curated 排序查看多个系列中的已发布 Artwork
- **THEN** Dots、Grok Bot、Meta Muse、动物、人物依次成组，独立原创作品排在五组之后，组内沿用稳定登记顺序，筛选条件和作品数量不被排序改变

#### Scenario: Name 继续按角色名称排序
- **WHEN** 用户选择 Name 排序
- **THEN** 所有符合当前文本和系列条件的已发布 Artwork 按规范化角色名称排序，不应用 Curated 系列优先级

