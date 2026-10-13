# Site 56 / v107 阶段记录

2026-10-13 部署到既有公开 Dots Site。此次收紧了弹窗标题栏、语言菜单与分类导航，并移除了相关角色及详情历史导航的原生确认框。Sites 返回部署成功，21 个变更运行文件的线上源码回读匹配；本地双语布局、相关切换和 PNG 检查通过。

此版本不是完整验收通过的最终交付。线上交互流程虽然到达相关切换、语言、关闭及 PNG 导出，实际冷加载耗时 111.8 秒；测试末尾观察到模板源 PNG 请求失败。用户随后提供配饰红叉截图，冻结发布目录复现六张配饰缩略图失败、8 次 source-only PNG 请求返回 404。完整本地 dist 保留源 PNG，先前测试因此未暴露发布目录问题。

根因是 Figure 缩略图加载器显式关闭 WebP delivery，错误请求发布清单排除的模板源 PNG。后续修复及最终验收见 [v108 发布记录](../20261013-figure-thumbnail-delivery-v108/README.md)。本目录保留当时发布、构建、布局、交互与源码一致性证据，不能用来宣称 v107 缩略图或弱网性能已通过。

- 原始线上报告：`.artifacts/modal-typography-20261013/v107/production/report.json`
- 根因复现：`.artifacts/modal-typography-20261013/v107/figure-thumbnail-qa-107-2026-10-13T07-28-22-183Z/report.json`
- GitHub 工作仓库保持原 HEAD；此处 Sites 源提交仅属于独立托管源码仓库。
