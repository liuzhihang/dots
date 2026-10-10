# Spec Delta

## MODIFIED Requirements

### Requirement: 发布资格和来源必须独立于标签名称
系统 MUST 仅在角色库展示有实际作品、来源和批准资格成立的 Artwork 与系列。系列名称不构成素材许可；原创人物和动物来源 SHALL 可追溯。本项目不接收用户上传或投稿，标签与系列 SHALL 只用于已登记作品的组织和查找。参考图输入仅按 reference-creation 规则交给用户自行处理，不进入目录。

#### Scenario: 只有系列名没有合格素材
- **WHEN** 维护者登记一个系列名但没有来源、资源、事实和批准齐备的作品
- **THEN** 角色库不显示空系列，不把候选、用户图片或参考截图登记成公开作品

### Requirement: 当前确认状态必须绑定实际批准范围
系统 SHALL 记录具体 Artwork/Asset 版本、Template、其来源和适用范围、工程状态、美术批准范围及发布状态。对新版本或新用途的批准 MUST NOT 从旧素材或相似标签继承；Template 与 Draft 的工程可用性不得代替其基底 Artwork、图层或页面呈现的艺术确认。

#### Scenario: v83之后追加模板确认
- **WHEN** 已批准 Artwork 用作新的 Template 基底、编辑图层或页面呈现
- **THEN** 原批准只覆盖其明确记录的文件与用途；新用途状态单独记录，未确认时保持 pending

#### Scenario: 静态 Draft 生成后检查批准
- **WHEN** Template 成功预览或导出静态 Draft
- **THEN** 只记录该次工程结果，不扩展 Artwork、Template 图层或页面展示的美术批准范围

#### Scenario: 已确认模板派生新素材
- **WHEN** Template 基底或图层的 hash、几何、支持组合或用途发生变化
- **THEN** 受影响的资源与配置范围重新待审；已有 Template 和 Artwork 批准不自动覆盖新版本

### Requirement: 已发布 Artwork 必须按事实标签和特征建立可扩展目录
系统 SHALL 为标签和系列提供稳定 ID、类型和双语名称，并允许 Artwork 关联已核实的事实标签。角色库 SHALL 保留 Dots、Grok Bot、Meta Muse、人物、动物五个系列入口；系列只帮助组织已批准作品，不是固定身份 schema 或渲染能力。Artwork facts 必须与实际画面一致，none、notApplicable 与 unknown MUST 区分；标签 MUST NOT 授予渲染、穿戴、动作或平台安装能力。

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
角色库 SHALL 提供一个文本搜索、一次仅选一个系列的筛选及 Curated/Name 两种排序。文本按规范化后的名称、别名、描述和已登记真实 facts 进行多词 AND；文本与系列采用 AND。默认搜索 MUST 排除 pending、缺资源、退役和 Draft 项，清除一个条件 MUST 保留另一个条件，无结果 SHALL 明示且不得自动放宽条件。

#### Scenario: 组合多维过滤
- **WHEN** 用户输入多个中英文名称、别名或事实词，并选择一个系列
- **THEN** 只显示同时包含全部搜索词且属于该系列的已发布 Artwork

#### Scenario: 清除部分筛选或遇到空结果
- **WHEN** 用户清除文本或系列、切换 Curated/Name 排序，或组合条件没有匹配作品
- **THEN** 切换排序时查询条件保持不变；清除单个条件时另一条件保持不变；无结果时提供修改或清除操作，不静默改宽查询

### Requirement: 展示标签必须与搜索索引和规格分离
完整 typed facts 与搜索索引 SHALL 保留全部核实事实；详情默认最多展示四个精简、可区分且真实的事实标签。无配饰、无道具、通用规格和未核实信息不得伪装成特征；真实 alpha、尺寸和静态能力仅在有证据时作为规格呈现。

#### Scenario: 显示精简事实标签
- **WHEN** CharacterStudio 展示作品的详情状态
- **THEN** 最多展示四个能区分当前 Artwork 的真实事实标签，底层目录仍保留完整 facts 和搜索字段

#### Scenario: 显示未核实或不存在的能力
- **WHEN** Artwork 没有对应事实或目标能力证据
- **THEN** 系统不生成相应标签、编辑选项、动画或安装能力徽标

#### Scenario: 点击详情精选标签
- **WHEN** 用户在 CharacterStudio 查看精选事实标签或普通规格
- **THEN** 标签与规格作为静态文字显示，不提供旧的点击标签多维筛选；角色库只通过文本、单系列和 Curated/Name 完成当前查询

## REMOVED Requirements

### Requirement: 首页专题必须进入图库查询且不固定标签架构
**Reason**: 角色库本身就是首页，已没有独立宣传专题或专题入口。
**Migration**: 用户从角色库直接搜索或选择一个系列；不保留专题首页路由、宣传卡或专题查询迁移。
