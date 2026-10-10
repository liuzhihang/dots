# CharacterStudio 实现索引

此文档只用来定位组件和规范，不另行定义产品合同。交互、资格、页面结构、资源加载与验收均以链接的 OpenSpec 主规范为准；实现细节以 `dist/` 当前源码为准。

## 规范入口

- [Studio 视觉与页面结构](../openspec/specs/studio-visual-experience/spec.md)
- [详情、导航与会话行为](../openspec/specs/studio-creation-experience/spec.md) 与 [系列导航](../openspec/specs/family-navigation/spec.md)
- [Artwork、Asset 和 Template 资格](../openspec/specs/artwork-catalog/spec.md)
- [搜索与系列筛选](../openspec/specs/catalog-tags/spec.md)
- [有界模板编辑](../openspec/specs/bounded-character-editing/spec.md)
- [角色身份与视觉验收](../openspec/specs/character-families/spec.md)、[角色视觉验收](../openspec/specs/character-visual-acceptance/spec.md)

## 代码组件地图

| 区域 | 主要入口 | 职责 |
|---|---|---|
| 应用与路由 | `studio.js`、`studio-router.js` | 唯一图库入口、hash 路由与详情导航 |
| 目录与查询 | `studio-content.js`、`studio-artwork-catalog.js`、`studio-tags.js`、`studio-tag-browser.js` | 双语内容、作品/资源资格、标签和筛选 |
| 卡片与 Studio | `studio-card.js`、`studio-detail.js`、`studio-overlay.js` | 角色卡、统一详情/编辑面板、会话和返回焦点 |
| 编辑闭环 | `studio-edit-templates.js`、`studio-draft.js`、`studio-editor.js`、`studio-renderer.js`、`studio-actions.js` | 精确模板绑定、内存 Draft、真实渲染、Prompt 与导出 |
| 资源加载 | `studio-asset-loader.js`、`studio-preview-loader.js`、`studio-display-assets.js` | 登记资源解析、原图下载和按需展示预览 |
| 动画资源 | `studio-motion.js` | 仅处理真实登记的动作资源 |

## 验收与证据

按 `package.json` 中现存脚本运行受影响的构建、目录、浏览器、下载、编辑和性能检查。临时日志、截图及测试输出写入 `.artifacts/`；精选版本结论记入 `design/releases/`；`design/acceptance/` 中已冻结的报告原文保持不变。工程检查、真实页面视觉、用户美术批准、设备和线上部署分别记录。

角色制作和共用组件扩展入口见 [`character-authoring/README.md`](character-authoring/README.md) 与 [`character-authoring/components.md`](character-authoring/components.md)。发布站点的当前摘要见 [`design/releases/`](releases/)。
