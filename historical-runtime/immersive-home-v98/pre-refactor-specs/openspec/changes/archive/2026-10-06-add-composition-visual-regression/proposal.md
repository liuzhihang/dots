# Proposal

## Why

历史工程矩阵和单张导出记录无法证明当前 2D 模板的完整 PNG 输出，也无法持续发现新增素材的接触、遮挡与渲染失败。需要把覆盖目录、真实产物回读和人工批准分开记录，并为统一 project v2 / 角色 VERSION 10 建立可重复的正向与旧格式拒绝验收。

## What Changes

- 全量覆盖当前 15 个图库 look、22 个登记配方状态与 3 种背景，形成 66 个模板/背景基线用例并回读适用的原始 PNG、Canvas PNG 与 Prompt。
- 按素材声明生成全量单素材适配、有效两因素、高风险三/四因素、精选配方、固定 seed 与参数边界覆盖；声明支持但资源缺失或渲染失败的用例保留在必检分母。
- 建立内部分页组合图鉴、问题标注、依赖影响范围和绑定 source manifest 的冻结报告。
- 验证上游统一 project v2 / 角色 VERSION 10 合同：已解算作品保存可重现的模板或模块组合引用，Prompt-only 编辑态允许 `creation.composition: null` 并可往返恢复；project v1、纯角色 JSON、角色 schema 6–9 和旧别名列为拒绝用例，不提供迁移或兼容承诺。**BREAKING**
- 保持已确认模板资产与首页布局、群像、卡片、导航和文案不变；保留首页现有搜索及五组场景入口，标签 UI 位于图库与工作台。项目菜单移除旧角色 JSON 导出项并保留 v2 项目导出，其他菜单功能不变。浏览器回归覆盖首页现状和现有全局随机入口。

## Capabilities

### New Capabilities

- `composition-coverage`：覆盖清单、内部图鉴、真实捕获、增量影响和可追溯报告。

### Modified Capabilities

- `character-visual-acceptance`：扩展模块适配和首页/工作台真实页面回归，并保留批准证据边界。


## Impact

首个基础报告依赖 `evolve-catalog-tags` 的 Gallery/Workbench 目录与页面切片、`add-modular-2d-composition` 的统一 v2/VERSION 10 和当前模板 adapter/API 已可调用，以及本 change 的旧格式拒绝与输出回读；stage2 模板入口代码/API 接线可用即可联合验收，不等待对方依赖本报告的验收 checkbox。stage2 模板输出验收与本 change 的 66 输出及项目回归复用同一 source/resource 捕获。before 捕获仅作旧实现对照。模块真实适配和 `upgrade-randomizer-to-rendered-recipes` 的候选池回归可延期并标 deferred/blocked，不阻止基础模板报告。图鉴/生成器可并行建设并由 stage2 后续消费。冻结结果写入新的 `design/acceptance/current-<本机日期>-v<cache版本>/` 目录。本轮仅更新 OpenSpec 方案，不删代码、不删除任何已批准素材、不发布站点或更改仓库/Sites 访问范围。

## Non-goals

不预生成笛卡尔积成品、不声称连续空间穷尽、不以 Fake DOM/几何/截图差异代替人工美术、不把浏览器窄屏称为实体手机、不自动接受截图基准、不保留旧格式迁移或兼容、不更改首页视觉设计、不删除已批准资产、不移除项目菜单容器或其他功能、不实现用户上传、公共标签发布、账号、存储或审核系统，也不发布站点。
