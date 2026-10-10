# Proposal

## Why

当前五组目录同时承担浏览分类、角色默认值和草稿恢复，限制持续添加内容；运行时候选文案也没有解析 v83 后追加的美术确认。本阶段先解耦目录与创作身份，保留全部已登记模板和当前编辑能力。用户最新决定取消旧版数据兼容，首页设计保持不变。

## What Changes

- 增加有类型的维护者标签目录与 Look—Tag 多对多关系，保留当前 family 结构职责、artworkId、presetId，不保留旧 schema 或旧身份别名迁移。
- 图库和工作台内容区提供常用标签、可搜索的更多标签；同维度 OR、跨维度 AND，浏览不修改作品。
- 首页布局、群像、五张卡片、主导航、首页文案与现有搜索/场景筛选保持现状；卡片仅在内部映射到图库查询，现有随机入口继续打开全局弹窗。仅随旧代码删除全局项目菜单的废弃兼容导出项，不改变菜单容器或其他首页设计。新标签在图库使用登记 look 的缩略图与内容数量，无内容不发布。
- 移除现行规范中的旧配置迁移要求；新版项目 v2/角色 VERSION 10 的唯一读写与旧输入拒绝由 `add-modular-2d-composition` 的格式基础任务实施，不新增迁移或降级路径。
- 根据绑定素材和版本的确认记录计算当前有效状态，保留所有冻结证据原值。
- 后续实施时更新 AGENTS、DESIGN、设计规则及 README 的固定数量合同；本轮只记录 delta，不同步主 specs。

## Capabilities

### New Capabilities

- `catalog-tags`：类型化目录、查询、发布资格和当前确认状态。

### Modified Capabilities

- `family-navigation`：标签浏览与身份载入解耦，保留当前编辑会话草稿。
- `character-families`：首批身份持续保留，五组不再是内容分类上限，移除旧配置迁移要求。
- `studio-visual-experience`：冻结首页设计，新标签只扩展图库和工作台内容区。

## Impact

涉及 dist/studio-looks.js、studio-home.js 中图库逻辑、studio.js、studio-creation-assets.js、studio-creation.js，新增 dist/studio-tags.js；图库/工作台样式与相关 scripts 随实现更新，不修改首页呈现。标签只属于目录数据，不写入项目；所有项目读写消费第二项定义的唯一 v2/角色 VERSION 10 合同，不新增框架或服务。后续 composition 和 randomizer 消费相同查询结果；浏览标签本身不授予渲染能力。

## Non-goals

不实现账号、用户上传、自定义公共标签、投稿审核和公开发布；不添加空系列或未获来源许可的角色，不重做首页或已有美术，不重开旧 3D，不发布 Sites、不改变 Private/owner-only 配置。不提供旧格式迁移、兼容恢复、旧格式导出或降级。四个方案的实施任务未执行。
