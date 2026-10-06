# Proposal

## Why

当前 15 个 look 与附加状态是完整 PNG，不能将其中帽子、衣物或道具直接算作独立组件。需要独立制作适配素材，并将所有入口接到同一组合解算，才能提供真实可见的静态 2D 组合。

## What Changes

- 保留旧 fixed-image-2d/layered-2d 包及严格完整配方校验，新增版本化 modular-2d 合同。
- 分离身份、风格、布局基底、姿态、抓握、表情和能力；共享解算生成 ResolvedComposition。
- 登记素材 ID、版本/哈希、槽位、适配、依赖、遮挡、染色、来源和验收状态；区分硬兼容与推荐规则。
- 所有组件适配都依据已登记基底几何动态解算；同一显式 recipe 可逐件解算多组件并保存各自 fit refs 与聚合指纹。保留耳机×Dots、人形耳机、眼镜×人形、围巾×柴犬四项初始单件适配和一条人形耳机+眼镜组合 recipe；新增范围要求同一耳机 kit 分别适配四个已登记人形状态（栗发 classic、栗发 wave、黄色卫衣丸子头人物、金发眼镜人物），后三个状态新增独立单件 recipe。提案目标矩阵为 8 条 recipe/7 项单件适配；实际交付数量以 tasks 和绑定源码的真实 Canvas/PNG 报告为准，登记/工程可用不表示独立美术批准。
- v2 用 `creation.composition: null | {kind: template|modular, ...}` 区分真实已解算结果与可保存的 Prompt-only 配置；null 不伪造素材引用，默认随机只应用非 null 的真实可绘制候选。
- 几何、人形、动物三类先做小批验证；24 基础设计仅是后续分批目标，未经制作不算库存。
- **BREAKING**：所有新保存、导出和随机应用结果统一使用项目包装 v2；可绘制的完整模板、模板随机与模块组合保存非 null `creation.composition`（`kind: template|modular`）及实际素材 ID、版本、哈希和配方引用，没有可绘制结果时保存 `composition: null` 并保留 allowlisted Prompt-only 角色字段。角色保持 VERSION 10。只接受包装 v2 内的角色 VERSION 10；旧包装、裸角色 JSON（包括裸 VERSION 10）、旧角色 schema、`legacy.originalConfig` 和 Muse/Pets alias 均提示当前格式不支持，不自动迁移或转换。

## Capabilities

### New Capabilities

- `modular-2d-composition`：素材注册、约束解算、Canvas、能力与模块作品持久化。

### Modified Capabilities

- `character-creation-modes`：并行的新合同与项目 v2，旧完整配方安全边界继续有效。
- `studio-creation-experience`：真实组件控制、模板/模块能力说明和一致导出。
- `character-contact-and-motion`：基底几何驱动的静态动态适配、抓握与遮挡合同覆盖模块素材。

## Impact

项目 v2 与现有模板格式基础可先独立建立，不等待标签 UI 或新组件 PNG；图库/工作台标签查询只消费 `evolve-catalog-tags` 的 Look—Tag/TagQuery 接口（任务 1.3–1.4），不等待该 change 全部完成。当前模板捕获可与 `add-composition-visual-regression` 的基础清单及回读并行；模块覆盖设施在新适配产生后接入。`upgrade-randomizer-to-rendered-recipes` 可在本 change 的任务 1.1–1.6 与任务 2.4 交付、且 stage4 当前模板基础捕获完成后，先用已登记模板候选推进真实模板随机，不等待任务组 3 的模块素材。新增 `dist/studio-composition-catalog.js`、`dist/studio-composition-resolver.js`，接入 `dist/studio-creation-assets.js`、`dist/studio-creation.js`、`dist/studio-model.js`、`dist/studio-composer.js`、`dist/studio.js`、真实素材目录和验证 scripts。`buildCreationPrompt` 位于 `dist/studio-creation.js`，`buildPrompt` 位于 `dist/studio-model.js`。保留现有完整 PNG 配方的安全校验；移除全局项目菜单中废弃的 `save-character` 兼容角色 JSON 项及 handler。图库/工作台承载新增标签和素材编辑界面；`index.html` 如需调整，只改工作台 DOM 及该废弃菜单项，首页 hero、群像、卡片、主导航、版式和文案保持不变。

## Non-goals

不切碎现有整图冒充组件、不一次做满24/70款、不让无肢体角色长出手脚、不支持任意视角/任意姿态、连续角色动画或 3D 成品；不从各自单件可用推断任意多组件交叉组合，只有明确登记的 recipe 才能组合。不做上传、账号、审核、云存储和线上发布。旧格式迁移不在范围内，旧输入显示不支持状态且不自动迁移。首页设计不重做，新增标签和素材 UI 只放在图库/工作台。新素材批准和本方案确认是不同关卡。

## 本轮实施记录（cache 86）

本轮已从可信目录解算并真实捕获 8 条 recipe、7 项单件适配，其中同一耳机 kit 使用四个精确人形状态 profile。22 个模板输出也完成字节回归。工程证据见 [cache 86 验收索引](../../../../design/acceptance/current-20261006-v86/README.md)；0 项组件用户美术批准、0 项默认随机资格，仍需逐适配审阅。本次没有 Git push 或 Sites 发布。
