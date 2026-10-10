# 协作与保护约定

- 默认用中文协作，先检查 `README.md`、`DESIGN.md`、`.agents/rules/design.md`、相关 OpenSpec 主规范及当前 change。
- OpenSpec 主规范是产品行为合同；设计索引说明视觉参考与实现入口。以当前工作树和用户本轮范围为准，不从历史报告推断新的同步、归档、提交或发布授权。
- `dist/` 同时包含可编辑源码与 Sites 发布树。按 `design/static-publish-manifest.json` 精确维护发布闭包；不得整体清空 `dist/`。
- 保留已批准素材、来源/版本/hash、用户批准记录及被选入当前树的历史原文。可恢复历史文件的范围以 `design/repository-history.json` 为准；不得用候选覆盖批准文件或改写历史记录来匹配当前状态。
- 保护 `.openai/hosting.json`、`openspec/config.yaml`、`package-lock.json`、`vite.config.mjs` 与现有依赖版本，除非本轮明确涉及这些路径。
- 临时 QA 输出写入 `.artifacts/`；精选发布报告放在 `design/releases/`；已冻结的 `design/acceptance/` 历史报告保持原文。
- 按改动范围验证；明确区分工程、真实页面视觉、人工美术确认、设备、目标包与线上部署证据。未运行或未观察的项目不得标为通过。
