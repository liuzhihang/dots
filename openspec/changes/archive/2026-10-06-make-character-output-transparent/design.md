# Design

## Context

当前完整模板与模块共享 Canvas 合成器，但角色配置仍带有背景枚举，Prompt、工作台背景面板和 capture 参数可请求不透明像素。结构诊断另有 3D 场景与共享 2D PNG 捕获路径。本变更保留角色身份、动态适配、素材来源和项目版本合同，具体行为见各 delta spec。

## Goals / Non-Goals

**Goals:** 所有角色预览、默认随机结果、Canvas/PNG 与 2D、3D 诊断捕获都只输出角色像素和真实透明 alpha；严格恢复当前有效 v2 / VERSION 10 项目。

**Non-Goals:** 不改首页插画、卡片底色或整体布局；不重建 3D 角色、材质或动画；不扩展组件、美术库存、schema 或旧格式迁移，不改变归档证据或其他活动 change。

## Decisions

- 新角色默认 `background: transparent`。当前 v2 / VERSION 10 已合法的 `background` 与 `colors.background` 作为只读惰性元数据保留；恢复或继续编辑时保留原元数据、`creation.composition.inputs` 与有效指纹，不归一化输入或引入迁移分支。旧 schema 仍拒绝。这样不使 Site 36 以来的合法组合引用失效。
- 工作台移除背景面板与唯一的首页背景功能入口；角色 setter、Prompt 与 render plan 不开放/消费背景值。旧 `studio`、`solid` 和透明字段仍经现行白名单读取并保留；完整模板 `editablePaths: []` 合法。页面预览容器及首页艺术底色属于界面/插画，不进入角色 PNG。验证后继续发布到原私有 Site，保留现有访问范围。
- 共享 Canvas 渲染只清空透明画布后绘制可信角色层，忽略背景字段；capture 必须维持透明，即使调用方传 `transparent: false`。随机弹窗与图鉴沿用同一合成规则。
- 结构诊断保持既有模型与用途，只将 WebGL 场景背景设为 `null`，其 PNG 与共享 2D 诊断捕获检查实际 alpha；重新构建项目生成的 `dist/live-runtime.js`。不将诊断成功记为角色重建或美术批准。
- 验收固定实际 4 个视口，逐项回读 22 个模板状态与 5 个当前模块配方的 PNG 字节/尺寸/alpha/SHA，并复测现行 v2 精确恢复、旧格式拒绝及 `transparent: false`。自动检查不能接受新截图或替代人工美术确认。

## Risks / Trade-offs

- [历史背景元数据可能被误当作可编辑能力] → UI、Prompt 和 render plan 均忽略它；测试旧项目仍可精确恢复引用与指纹。
- [浏览器或 WebGL 捕获路径回填不透明底色] → 分别检查共享 Canvas、诊断 PNG 和 `transparent: false` 故障输入的实际 alpha 字节。
- [样式预览容器底色进入角色捕获] → UI 容器与角色画布分离，并以 PNG 回读确认只导出角色像素。
