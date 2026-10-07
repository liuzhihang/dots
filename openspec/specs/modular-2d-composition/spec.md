# modular-2d-composition Specification

## Purpose

记录旧组件装配、角色编辑和适配系统从当前运行及发布产品退出的边界，确保新 Artwork 工作流不加载旧 reader、resolver 或迁移兼容。

## Requirements

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
