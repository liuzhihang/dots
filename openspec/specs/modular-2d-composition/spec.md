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
