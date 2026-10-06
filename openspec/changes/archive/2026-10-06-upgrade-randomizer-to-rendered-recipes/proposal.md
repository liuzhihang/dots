# Proposal

## Why

现有全局 dialog 已处理临时候选、锁定、取消、焦点和减少动态，但候选来自配置数组，结果只显示家族基准参考图。默认随机必须从真实可渲染配方抽取，并展示实际组合结果。

## What Changes

- 保留首页现有随机入口和 `familySearch/homeFamilies` 搜索/五组场景过滤呈现与范围，接入同一全局弹窗；不新增 typed-tag 控件、首页插画或布局/群像/卡片/导航/文案变化。标签搜索和多选 UI 位于图库和工作台，弹窗简洁提供“切回全部”动作并使用入口传来的范围；该动作不清锁且不提交作品。
- 初始突出“随机一款”；结果后展开锁定和局部重抽，最多六个真实缩略图揭晓阶段。
- 先共同解算合法候选并预加载，再播放逐列减速/组件组装，最后显示一个实际 Canvas。
- 支持跳过动画、静态揭晓、资源失败和无解说明；锁定不静默替换。
- 所有新项目、保存、项目 JSON 导出及已应用随机结果统一使用 dot-studio-project v2 与角色 VERSION 10；旧格式明确提示不支持且不自动转换。一次应用仍只产生一条撤销记录并保留当前草稿可恢复性；Prompt-only 留作明确的高级功能。

## Capabilities

### New Capabilities

无。

### Modified Capabilities

- `fullscreen-randomizer`：真实候选、分阶段揭晓、查询继承、持久化与异步安全。

## Impact

首个基础报告依赖 evolve-catalog-tags 的图库/工作台标签查询与页面切片、add-modular-2d-composition 的 foundation 1.1–1.6（当前模板共享 resolver/adapter、唯一 v2 + VERSION 10 合同、旧路径移除和跨入口 PNG 一致），以及 add-composition-visual-regression 的 group 1 当前模板/PNG 基础报告。该报告尚未覆盖真实随机池时须明确记为 deferred/blocked，不得当作通过，也不阻塞后续真实随机接线。随机集成消费 stage2 任务2.4提供的当前模板候选接口，可先用已登记 15 个模板与实际支持的 PNG 配方完成闭环，再按需开放经批准的模块组合；不等待 stage2 或视觉回归整个 change 完成。主要改随机弹窗、入口接线和相关 scripts；首页代码如需调整，仅接通现有随机入口，不改变首页布局、群像、卡片、导航、文案或插画。老虎机消费第 2 change 的 v2/角色 VERSION 10 API，不另建旧格式兼容层。

## Non-goals

不重建 dialog 基础，不调用图片生成，不让动画决定实际抽样，不将 Prompt-only 混入默认成品池，不实现连续角色动画、3D、上传或社区，不发布站点。
