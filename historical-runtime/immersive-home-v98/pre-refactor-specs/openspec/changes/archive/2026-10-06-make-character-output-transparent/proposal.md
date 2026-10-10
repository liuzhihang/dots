# Proposal

## Why

工作台仍允许选择棚拍或纯色背景，Canvas、Prompt 和随机输出因此可能生成不透明角色图，与当前希望统一使用透明 PNG 的产品方向不一致。移除角色输出背景能力后，Gallery 原图、工作台组合与老虎机结果都采用同一透明画布，同时不改变首页既有插画和页面底色。

## What Changes

- **BREAKING**：图库定制、工作台、随机结果与 PNG 输出不再提供角色背景选择或背景染色；Prompt、Canvas、渲染计划及导出统一忽略背景元数据并保持透明。删除工作台背景面板与首页唯一的背景功能按钮。
- 新建角色默认使用透明输出。现行 project v2 / 角色 VERSION 10 中严格合法的 `background` 与 `colors.background` 值作为惰性元数据保留；现有项目恢复和编辑时继续保留其元数据、`creation.composition.inputs` 与有效指纹，不升级 schema、不引入旧格式迁移。
- 原有完整模板允许空 `editablePaths`。旧 project v1、裸角色 JSON 与旧角色 schema 仍明确拒绝。
- 覆盖基线移除多背景笛卡尔积，改为 22 个模板状态及 5 个模块配方各检查透明 PNG 实际 alpha；捕获请求 `transparent: false` 不得填入背景。
- 首页 hero、家族卡插画、页面底色及除唯一背景功能按钮外的现有首页布局保持原设计；不重绘美术、不改标签或组合能力。验证后部署到现有私有 Site，访问范围保持不变。

## Capabilities

### New Capabilities

无。

### Modified Capabilities

- `studio-creation-experience`: 工作台及当前角色 PNG 始终透明，移除角色背景编辑能力。
- `character-families`: 五组角色状态仍由各自登记配方决定，背景值不再改变角色输出。
- `character-creation-modes`: 明确 v2 / VERSION 10 背景字段的严格读取与惰性保留语义，不升级格式。
- `modular-2d-composition`: 所有实际角色合成忽略背景值并绘制透明结果，同时保留受信任组合引用兼容性。
- `character-contact-and-motion`: 模板与结构诊断 PNG 均保持真实 alpha；不重开 3D 角色或动画范围。
- `fullscreen-randomizer`: 随机候选和结果图始终透明，不提供背景阶段或背景恢复路径。
- `character-visual-acceptance`: 以透明输出为唯一背景状态，回读 22 个模板状态及 5 个模块配方的 alpha 字节证据，并保留原有人工验收边界。
- `composition-coverage`: 以透明输出为唯一背景状态，回读 22 个模板状态及 5 个模块配方的 alpha 字节证据。

## Impact

影响 `dist/studio-model.js`、`dist/studio-creation.js`、`dist/studio-composer.js`、`dist/studio-composition-resolver.js`、`src/live/` 与生成的 `dist/live-runtime.js`、工作台及随机弹窗的页面/样式、组合图鉴和相应 `scripts/verify-*.mjs`。同步修订现行 `AGENTS.md`、`DESIGN.md`、`.agents/rules/design.md`、`README.md` 与上述 OpenSpec 主规范的增量合同。部署沿用 `.openai/hosting.json` 中当前私有 Site 和访问范围；不得修改首页场景美术底色、已归档证据或另外四个未完成 change。
