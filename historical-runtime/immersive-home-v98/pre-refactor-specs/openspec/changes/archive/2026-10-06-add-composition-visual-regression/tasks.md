# Tasks

## 1. 准备当前基线与完成首个模板闭环

- [x] 1.1 定义覆盖用例清单与报告字段，分别记录 look 身份、配方状态、唯一 PNG 文件、背景、声明应检分母、硬约束排除、可解算数量和 pass/fail/blocked；用目录盘点核对 15 个 look、12 个基准状态、10 个固定模板状态（22 个配方状态）及 22×3=66 个背景输出用例，并确认 Dots 两个耳机状态虽共用 PNG 仍分别计为状态。
- [x] 1.2 可在实现前为 22 个登记状态及三种背景捕获旧实现 before PNG/Canvas 对照；记录配置、画面、尺寸、alpha、SHA-256 与 source/resource manifest。该证据只说明旧实现状态，MUST NOT 计作新行为通过，也不替代 task 1.11 的最终 22×3=66 输出捕获。历史 before 输出于 2026-10-06 从冻结 v83 源码回放，非原实施时执行；记录与逐字节校验见 `design/acceptance/current-20261006-v85-closeout/history-before/`。
- [x] 1.3 准备 Prompt 实际剪贴板或 TXT 回读方法，并可记录实现前 source 的 before 结果；验证报告区分 before 与最终证据，最终 Prompt readback 使用 task 1.11 的冻结 source/resource manifest。
- [x] 1.4 待 stage2 项目 v2/VERSION 10 序列化、模板 adapter 和导入 API 代码可调用后，回归模板作品保存、导出、自动保存、恢复、撤销和重做；验证 `composition.kind: template` 保存实际素材稳定 ID/版本/hash、解算输入和解析指纹，往返恢复同一输出。与 task 1.11 的最终捕获联合使用同一 source/resource 版本，不等待 stage2 输出验收 checkbox 完成。
- [x] 1.5 待上游 nullable contract 的实现/API 可调用后回归 Prompt-only 编辑态的 v2 往返、自动保存、恢复、撤销和重做；验证角色设定及 Prompt 配置完整保留、`creation.composition: null`，且 UI/导出不伪称存在渲染结果。与 task 1.11 使用同一冻结 source/resource 版本。
- [x] 1.6 待上游 importer 实现/API 可调用后为旧 project v1、纯角色 JSON、角色 schema 6–9 和旧角色别名建立拒绝用例；验证每种输入返回明确停用错误且不会改变当前有效作品，不含旧格式迁移或正向兼容 fixture。与 task 1.11 联合验收，不等待 stage2 依赖本报告的验收 checkbox。
- [x] 1.7 准备实现前 source/resource 的 before 证据索引：记录 source ID/manifest、cache/module 与资源版本；若源码未提交或 source ID 未覆盖工作树，附 dirty-source snapshot hash 与变更路径/文件 hash 清单。验证记录明确标作 before，不计作新实现通过，同名目录不会覆盖、旧 archive 哈希不变。v83 source ID 可复算并覆盖冻结的 128 个工作树路径，重放逐项 128/128 匹配；当前主工作树的独立 dirty snapshot 也已登记。时间边界与哈希范围见 `design/acceptance/current-20261006-v85-closeout/history-before/source-manifest.v83.json`。
- [x] 1.8 预先核对 v83 用户美术确认记录的 `registeredLooks`、`supportedStateBoundary` 与当前姿态素材映射；验证不能逐项映射的状态为“确认范围待核定”，且新 source/resource hash 变化后需重新核定，不推断用户批准或否决。
- [x] 1.9 待 `evolve-catalog-tags` 完成目录与 Gallery/Workbench 页面切片、stage2 页面代码/API 可调用后，在固定浏览器与桌面/320/390/768 px 视口回归标签查询和首页冻结；验证首页现有搜索、`homeFamilies` 五组场景、布局、群像、卡片、导航和文案不变，标签控件只在 Gallery/Workbench，首页卡片映射到对应图库筛选且不改作品。与其余最终验收绑定同一 source/resource manifest。
- [x] 1.10 待 stage2 移除兼容导出并提供 v2 项目导出入口的代码/API 可调用后，检查工作台项目菜单；验证 `save-character` 旧角色 JSON 导出项消失、v2 项目导出/菜单容器/其他功能可用，并将此项记录为唯一预期菜单功能差异。无需等待 stage2 验收 checkbox。
- [x] 1.11 待 stage1 目录/页面切片及 stage2 v2/template/import API 代码可调用，并完成 tasks 1.4–1.10 的最终检查后，冻结单一 source/resource manifest，和 stage2 模板入口联合捕获一次最终 22×3=66 个模板/背景输出；回读原始 PNG、Canvas PNG 的画面、尺寸、alpha、SHA-256 与配置，再汇总 Prompt、项目格式、旧格式拒绝和页面结果，创建全新唯一冻结目录并交付首个基础模板报告。stage2 模板输出验收复用这次捕获，不另跑第二份；API 接线可用即可执行，不等 stage2 依赖本报告的验收 checkbox。所有 66 项均须有 pass/fail/blocked 结果，失败项不排除；tasks 1.2/1.3/1.7 的 before 证据只作对照，不计新实现通过。此报告不等待全部 group 2 atlas 检查或 group 3 模块/随机接线；未接线范围明示 deferred/blocked、不计通过。stage3 可在此基础报告交付后开始，不需要等待本 change 全部任务完成。

## 2. 并行建设声明能力覆盖与图鉴

- [x] 2.1 对齐 `add-modular-2d-composition` 的素材/基底/槽位/姿态/依赖/互斥/邻接合同，建立覆盖输入；用代表性合同确认每个声明支持的基底/姿态生成单素材必检用例，明确不支持项有可追溯硬约束。
- [x] 2.2 实现分层组合用例生成：全部有效 pairwise、声明的高风险三/四因素关系、全部批准精选配方、固定 seed 性质检查及参数代表值/边界值；用固定 fixture 核对分母、覆盖类目和实际用例数，不以随机截图声称穷尽。
- [x] 2.3 分别输出声明应检分母、硬约束排除、可解算、执行 pass/fail/blocked；用故障注入验证声明支持但 PNG 缺失、来源/版本/hash/尺寸不符或渲染失败仍留在分母且不能计 pass，并验证所有资源失败时报告不会产生空分母 100% 通过。
- [x] 2.4 按基底、槽位、姿态和邻接素材建立影响依赖图；用变更样例验证新增素材只触及声明基底/姿态与邻接用例，公共布局/合成器/染色/基底变化扩大到所有引用项，标签筛选变更检查过滤与默认随机池，主题美术规则变更检查对应配方。
- [x] 2.5 基于同一用例目录实现内部组合图鉴分页、筛选、完整配置回查和问题标注；用浏览器检查至少一个分页和单格详情，验证穿插、悬空、遮脸、比例、风格、画布、导出问题能绑定用例，模块适配另有比例、贴合/接触、遮挡层序、材质/光照、配色五项协调性复核，并在详情中回看每个动态组件的实际解算元数据；内部状态不得变为用户美术批准。
- [x] 2.6 实现报告环境冻结与来源绑定 API；用干净 source ID 和 dirty-source snapshot fixture 验证 manifest、视口、画布、资源版本/hash、配置、seed、静态帧和证据链接均可复现，且差异图只能进入待审查状态。该代码/API可与 group 1 联合验收并行准备；stage2 可在接口可用后消费，不等模块素材或完整图鉴验收勾选。
- [x] 2.7 将单格 localStorage 问题标注和适配级协调性复核随捕获包导出，并由冻结报告原样保留；浏览器编辑一格后核对精确基底资源、组件资源数组、geometry profile 引用、每个动态组件的 fitPolicy/sourceParts、配方版本/指纹、姿态和视角绑定。对多动态组件配方逐件验证其素材 hash、已解算子层数、变换、层序、遮挡及独立 fitVersion/fingerprint；resolver 有提供时另核聚合 fingerprint，不将单个组件值冒充聚合值。旧版本 sidecar 不得继承，pending/rejected 不得移出工程分母或改变工程 pass/fail/blocked、美术批准与发布统计。

## 3. 延后接入真实模块适配与随机候选

- [x] 3.1 在 `add-modular-2d-composition` 提供真实素材配方后接入增量生成器；用几何角色、人形、动物代表基底及声明姿态验证单素材全量、已声明可共存的多组件 recipe 及 Canvas 输出，渲染失败仍留在必检分母。报告分别派生唯一素材数、单组件基底/姿态适配数、recipe 数和背景输出数，不用其中任一数量替代其他分母。未交付配方期间标记 deferred/blocked，不影响 task 1.11 的基础模板报告。
- [x] 3.2 在统一 v2 合同落地后分别验证 null Prompt-only 项目和 `composition.kind: template|modular` 解算作品；确认前者恢复完整角色/Prompt 配置，后者恢复稳定素材 ID、版本/hash、配方引用与 resolved refs，角色保持 VERSION 10。
- [x] 3.3 仅在 `upgrade-randomizer-to-rendered-recipes` 将默认候选池接到真实可渲染配方后检查随机范围；验证候选筛选、锁定、资源失败、取消和应用后的 resolved refs/撤销行为，并确认 null/Prompt-only 项不进入默认成品池。该检查不得作为首个基础模板报告前置；未接线时标记 deferred/blocked，不计通过。
- [ ] 3.4 在模块与随机依赖接线后汇总全量增量覆盖、图鉴、v2 往返/旧格式拒绝和候选池结果；用 strict OpenSpec 校验与实际报告核对每类分母、执行数、失败/阻塞和人工批准边界，另行记录用户美术确认；该最终汇总可晚于 task 1.11，且不要求 stage3 全部完成才交付基础模板报告。工程汇总与当前增量检查已交付 [cache 85 收口报告](../../../../design/acceptance/current-20261006-v85-closeout/summary.md)，用户确认仍待实际回复，故本项暂不勾选。
