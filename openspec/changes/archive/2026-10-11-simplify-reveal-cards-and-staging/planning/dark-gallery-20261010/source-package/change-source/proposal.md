# Proposal: 暗色角色库首页与统一查看/编辑面板

> 交接草案。结合实际本地change与主规范形成正式proposal；本文件未写入用户仓库。

## Why

现有庭院/阶梯首页增加了场景制作负担，角色发现路径不够直接；用户反馈详情响应慢、交互割裂。最新方向已明确为深色数字画布，角色库直接作为首页；在同一个角色上下文中完成查看与有限编辑。此前“完全禁止运行时编辑”的规则已不再适用，但跨风格万能组装仍不在范围内。

## What Changes

- **BREAKING**：取消实体场景型首页和独立画廊入口，提供一个短介绍＋搜索筛选＋角色网格的角色库首页。
- **BREAKING**：取消独立工作台/随机发现/六卡揭晓/游戏与旧兼容依赖，保留历史证据而非运行代码。
- 引入同一CharacterStudio的View/Edit状态，支持站内浮层与直接链接的同一组件；移动端全屏。
- 新增基于受控模板的真实本地编辑与透明PNG导出，Draft和批准Artwork隔离。
- 保留原图下载、作品Prompt、ChatGPT二创入口、真实已有变体/动画、简短指南和EN/zh-CN。
- 重构预览与原图加载链路：即刻View、按需高清和Edit资源、有界缓存、取消迟到任务。
- 同步设计规则/AGENTS与回归测试，使有限编辑不再与旧“禁止Canvas”条款冲突。

## Capabilities

### New Capabilities

以下为推荐能力边界，最终先复用本地同义capability，避免重复规范。

- `bounded-character-editing`：模板能力、合法配置、Draft生命周期、真实预览与导出。
- `unified-character-studio`：统一查看/编辑面板、路由、返回、渐进加载和移动端交互。

### Modified Capabilities

远端快照中已确认的capability包括`character-creation-modes`、`modular-2d-composition`、`artwork-catalog`、`catalog-tags`、`family-navigation`、`fullscreen-randomizer`。
由Codex读取本地全量主规范后填写准确的新增/修改/移除归属，特别修订其中对所有runtime editing的禁止并明确旧随机的退出。不得把本段占位直接当作已完成的delta。

## Non-goals

无用户上传/站内选图、账号/收藏、数据库/远程对象存储接入、后台API/CMS、MCP、模型调用、站内聊天、公共投稿、万能换装、3D、所有风格统一模板、全量角色动画制作、Pet包制作、兼容/迁移旧数据。

## Impact

预计涉及入口/导航、列表、详情/overlay、路由、资源加载、Prompt、静态目录、编辑模板/渲染器、下载导出、样式、语言、构建检查及端到端测试。
不预设换框架；确认dist是否仍为源代码后以实际路径做变更。保留Site项目ID与访问设置；本次规划不等于提交、部署或归档授权。

## Success Criteria

用户不经过独立宣传页即可选择作品；点击即看到详情与可用操作；有合格模板的角色可在同一面板真实修改并导出对应透明PNG，原始作品不受影响；没有模板的角色不虚报编辑能力。至少规划并验证一个Dots和一个Grok代表模板的闭环，不能将全站Prompt-only当成该能力完成。设计、资源、美术批准与工程验证各自记录。
