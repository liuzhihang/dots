# Dots

Dots 是深色角色库与统一 CharacterStudio。查看作品、复制 Prompt、在 ChatGPT 中使用或导出图片。产品行为以 [`openspec/specs/`](openspec/specs/) 为准；设计入口见 [`DESIGN.md`](DESIGN.md)。

## 本地开发

新克隆后先运行 `npm ci`。项目使用 OpenSpec CLI 1.14.1 的 `spec-driven` 工作流，不需服务端：

```sh
npm run dev -- --host 127.0.0.1 --port 5180 --strictPort
npm run dev:review
npm run build
npm test
npm run test:browser
npm run test:downloads
npm run test:editing
npm run test:performance
npm run verify:release-safety
openspec validate --specs
```

`npm run dev:review` 在 `127.0.0.1:5182/__dots_review__/` 提供本地审阅入口。候选 fixture 仅供本地 harness 审阅，不改变 Artwork 或 Template 的批准状态，也不进入公开资格。浏览器检查优先使用本地 Playwright，缺少时自动解析 Codex bundled runtime；需要时可用 `DOTS_PLAYWRIGHT_MODULE` 和 `DOTS_CHROME_PATH` 指定运行时或浏览器。更新命令以 `package.json` 的 scripts 为准。`npm test` 运行当前功能检查；需要 Git 完整历史的仓库保留验证单独运行 `npm run verify:release-safety`。

## 代码与内容入口

- `dist/`：应用源码与 Sites 发布树；发布闭包由 [`design/static-publish-manifest.json`](design/static-publish-manifest.json) 精确维护。
- `openspec/specs/`：当前产品及实现合同；`openspec/changes/`：尚未完成的变更提案；已完成 change 保存在 `openspec/changes/archive/`。
- `design/character-authoring/`：新角色制作和组件扩展流程。
- `historical-runtime/`：精选历史源码和来源/hash 记录；完整历史文件按仓库恢复清单取回。
- 仓库保留、QA 输出和历史恢复流程见 [`design/repository-maintenance.md`](design/repository-maintenance.md)，逐路径历史清单见 `design/repository-history.json`。
- `.artifacts/`：本地临时构建、测试与 QA 输出；不作为发布素材。
- `design/releases/`：精选发布摘要与当前版本入口；`design/acceptance/` 保留精选审批、来源和验收记录。更早的历史 QA 文件按 `design/repository-history.json` 从 Git 恢复，历史原文不回写。

当前生产站点及本轮精选回执见 [Site 47 / v99 发布记录](design/releases/20261011-site47-v99/README.md)。该摘要链接到完整审批、归档、部署与验证回执。

## 维护提示

角色身份、Artwork/Asset/Template 资格及可编辑能力以主规范和当前审批记录为准；README 不维护可变作品数量。制作候选、版本/hash、工程验证和用户美术确认分开记录。Sites 发布、代码提交和 OpenSpec 归档是不同操作，分别依据本轮授权执行。
