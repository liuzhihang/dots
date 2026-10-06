# Design

## Context

本轮基线为 2026-10-06 的 main / `4d952b907ef4823db7b5e9792726c80a4226eeb8`。`git ls-remote` 回读 origin HEAD/main 同一 commit；开始时无 tracked/staged 改动，已有607条未跟踪文件，位于 design/assets 与归档验收目录，全部保留。Node v23.11.0，OpenSpec 1.13.1，项目根已存在、起始无活动 change。`npm run dev -- --host 127.0.0.1` 使用 Vite 的 dist 根，默认5173；依赖未安装时才 npm ci。`npm run build` 只重新生成 live-runtime.js，不是整站验证，本轮未构建或启动浏览器。

已读取会话“优化角色与交互”的指定范围：从用户 review 站点/仓库消息到交接 Prompt 请求，4 turns/8条消息，无截断；起点之前仅作背景。用户后续明确的标签可扩展、上传与自由标签后置覆盖旧五家族建议。源码和现行8个主spec已核对，历史归档未改。线上只读HTTP返回401，本轮没有线上页面/Sites版本验收；Git远端可读不证明线上可访问。

用户最新范围修正：旧版无需兼容；实施阶段移除项目 v1、纯角色 JSON、角色 schema 6–9 及旧身份别名的读写、迁移和恢复路径，统一使用项目 v2 + 当前角色 VERSION 10。当前15个完整模板、登记配方和当前编辑会话草稿保留。首页布局、群像、卡片、导航、文案冻结，新标签操作位于图库和工作台。以下 Audit Baseline 是修改前核对事实，不是保留旧格式的要求。

### Audit Baseline

| 能力/库存 | 核对结果 | 边界 |
| --- | --- | --- |
| Gallery身份与完整图 | 15（5基准+10完整搭配） | 每个legacy体系3款，是现库存 |
| 附加状态整图 | 5 | Dots/Grok眨眼、Muse/人物挥手、柴犬抬爪；非组件/连续动画 |
| Dots裸形备选 | 1 | 和耳机整图互斥，不新增look |
| 独立组合组件/色材变体 | 0 / 0 | 枚举、整图配饰及QA遮罩不计库存 |
| 现有包与配方 | 5基准包+10固定图包；12基准状态+10固定模板状态 | 22配置状态，21个当前角色PNG源；Dots闲置/聆听共图 |
| 历史整图/展示场景 | 2 / 7 | 兼容/scene-only，不进新组件库 |
| 人工批准 | v83追加记录列15 registeredLooks | 不推断5状态图逐图批准、全部适配或导出通过 |
| 当前真实输出验收 | 历史仅莓粉眼镜Dots一张字节核验 | 本轮未查实际Canvas/下载/实体手机 |
| Prompt/项目/撤销/旧导入 | 已实现；严格v1外层+角色v10 | 参考图在ChatGPT另附，本站无上传/识别/生图 |
| 随机 | 全局dialog、4文字槽、配置/Prompt候选、家族基准参考图 | 无真实组合候选绑定、Gallery入口或标签继承 |

本轮实际执行且exit 0：verify-studio、verify-creation、verify-creation-ui、verify-look-gallery、verify-family-navigation、verify-fullscreen-random、verify-module-cache。它们覆盖配置、迁移、文件/alpha、缓存与Fake DOM流程，不证明真实页面/像素/下载/美术。本轮 tintPath 纯内存复现由两个独立审计交叉确认：传入非背景颜色与可用状态，resolveCompositionConfig仍返回基准蓝。现行资产无tintPath，因此是新能力接入前修复项。

## Goals / Non-Goals

**Goals:** 目录查询、身份载入和渲染能力分离；15个已有作品保持原ID/素材/草稿，维护者可以持续登记有内容的标签。见proposal及catalog-tags delta。

**Non-Goals:** 不实现旧格式兼容或迁移、不把标签写入作品、不通过标签改变形态或素材、不做新身份美术、不把新系列名当授权、不修改首页设计。本轮文件只描述后续实现，主spec与业务代码保持原样。

## Decisions

### 1. 目录是多对多关系，family保留当前结构职责

新增Tag记录：`id, dimension, label, aliases, order, status, sourceScope`；维度为style/object-type/series/content/theme/material，按有证据的内容实际登记。LookTag关联使用稳定artworkId，不复制look、不把标签写入character或creation。身份/模板引用仍为artworkId/presetId；后续模块分别使用identityId/styleProfileId/baseId/poseId/capabilities。不采用全局family改名，因为FAMILIES、默认值、pack归属和familyDrafts均依赖它。

查询为`{tagsByDimension, text}`；空维度不约束，同维多值OR、跨维AND，文本按现有全半角/大小写/多词语义继续求交。标签没有真实published look则隐藏。已知15个look可增加实际类型/材质等事实标签；不发布Naruto等占位系列。

### 2. 浏览状态与创作状态独立

studio-home.js的图库activeFamily筛选适配到新目录查询；当前首页五张卡片入口内部映射到预置tag，外观与文案不变。点击卡片或图库标签只更新route/query；明确startLook才进入现有commit。familyDrafts继续按当前能力体系保留本会话草稿，不建立tagDrafts，多个标签指向同一作品时仍只有一个活动项目。工作台身份选择是当前编辑功能，不是旧JSON兼容层，不能把标签选择接到switchFamily；不再接受旧muse/pets身份别名或旧schema。

### 3. 首页设计不变，标签扩展图库与工作台

首页品牌栏、标题、主操作、左右群像、五张卡片、创作引导、主导航及首页文案保持现状，不添加首页标签区、新卡片或插画。现有familySearch在首页继续搜索五张场景的展示元数据，homeFamilies保持原场景筛选；它们只描述首页展示库存，不是全局标签上限。现有首页随机按钮继续打开升级后的全局dialog，不改按钮设计。常用标签与“更多标签”只放在图库和工作台相关内容区，后者支持搜索/键盘，窄屏可抽屉。新标签在图库以有资格的look缩略图加标题/数量呈现；不把scene-only成员登记到图库。随第二项删除全局项目菜单的save-character废弃兼容导出功能项与handler，菜单容器和其余功能保持，不以首页冻结为由保留旧功能。原场景构图约束继续对这7张既有场景有效，页面验收记录首页设计不变及这项预期菜单功能差异。

### 4. 当前确认状态采用显式受信任映射

维护者整理只包含已登记素材ID、hash、批准记录引用和范围的运行时确认清单；来源、内容发布资格、工程可用、用户美术批准、字节/设备检查分开。当前15look有v83关联记录，但5附加状态未见逐文件批准：运行时不能继承扩展批准。冻结记录里的unreviewed/false不改。仅改变素材名称或保留candidate字样ID不会自动改变批准；更新文件hash后旧确认失效，提示需复核。替代“把所有unreviewed改approved”的做法，避免扩张历史范围。

### File Map

| 文件 | 后续必要修改 |
| --- | --- |
| AGENTS.md / DESIGN.md / .agents/rules/design.md / README.md | 固定五分组改首批可扩展标签；保留dist、来源、当前模板与发布边界，移除旧数据兼容要求；增加配置合法不等于可渲染、默认随机真实配方及首页设计不变；素材细则另文档 |
| dist/studio-tags.js（新） / studio-looks.js | Tag目录、多对多、统一查询、当前family入口到预置tag适配，不引入旧身份别名 |
| dist/studio-home.js:5、41 | 图库标签、查询、常用/更多/无结果、无场景封面回退；首页卡片仅内部路由映射，首页呈现不改 |
| dist/studio.js:71、113 / index.html / studio-refresh.css / studio-layout.css | 浏览与commit隔离、保留当前会话草稿、图库/工作台DOM/CSS与模块缓存引用；首页呈现不改，仅第二项删除全局项目菜单的旧兼容导出功能项 |
| dist/studio-creation-assets.js:16 / studio-creation.js:273 | 显式当前确认记录及范围，修正已确认模板说明 |
| scripts/verify-family-navigation.mjs / verify-look-gallery.mjs / verify-module-cache.mjs | 删除固定数量上限断言，保留当前库存与安全断言；新增tag查询与状态测试 |
| openspec/specs相关现行规范 | 按delta同步行为；过时Purpose在获准实施时窄范围更新，归档证据不改 |

## Risks / Trade-offs

- [标签被当成能力] → 目录只返回look引用；resolver独立检查，新增主题规则走单独组合验收。
- [当前family草稿被标签覆盖] → 浏览前后project/history快照断言；显式定制才commit。
- [批准范围扩大] → ID/hash/页面记录绑定，不自动批准新姿态或配色。
- [多个change争改现行规范] → 第一项负责分类与身份/视觉上限；第二项负责创作合同；第三项负责随机；第四项负责验收，按依赖顺序同步，旧标题若改名须显式迁移。

## Migration Plan

先确认方案，再实现目录查询、实际页面核对与当前确认说明，验证后提供本地预览；后续发布需用户明确授权。第二项的格式基础任务统一项目v2/角色VERSION10，并移除v1、纯角色、schema6–9、旧身份别名读写/恢复/自动迁移；旧输入给出unsupported说明，不能修改活动作品。标签浏览不需要作品字段或数据迁移。当前会话草稿、撤销重做、模板及ID保持；遇到浏览器旧存储只提示无法恢复并进入有效的当前默认项目，不自动迁移或批量删除历史数据。撤回目录UI/路由映射不重新加入旧格式兼容代码；不清理dist或既有工作区。

依赖按任务切片交付，不能将 change 名称理解为必须等待整个 change 完成。目录查询不写项目字段；当前模板的可信引用与格式基础也不需要新组件美术，因此两者可以先行建设。

依赖与推荐顺序：

```text
tags + template resolver + project v2 --> current capture / QA
                                              |
                                              v
template candidate API ----------------> rendered random

modular resolver + new assets <---------> coverage / atlas
              |
              v
approved adaptations ------------------> extended random / QA
```

第二项的基础任务1.1–1.6先交付当前模板目录、共享模板resolver/adapter、唯一v2读写、旧格式拒绝、废弃导出入口移除和跨入口一致性，不要求任何新组件PNG或真实随机器完成。图库/工作台的标签查询集成只等待本项1.3–1.4及必要页面切片，不等待本项整个change完成。

第四项group1负责首闭环基础报告；清单、before捕获和确认范围映射可并行准备，最终66项回读与v2/旧格式拒绝/页面检查须绑定基础切片接线完成后的同一source与资源版本；第二项1.6与第四项相关检查联合验收、复用同一次捕获，不等待对方依赖本报告的验收任务勾选完成。实际随机池集成属于其group3，未接线时注明deferred/blocked，不计通过，也不阻止独立模板基础报告交付。第三项消费基础报告和第二项任务2.4的当前模板候选接口，可先证明真实模板随机；不等待第二、四项的全部模块任务完成。覆盖合同/图鉴设施与新模块同步建设，24素材不是前置门槛。

## Proposed Defaults

推荐第一个最小闭环为本change的目录/页面切片、第二项1.1–1.6的共享模板resolver与项目v2基础、第四项group1的现有模板捕获基础：现15look获得多标签查询，首页设计不变，浏览/定制/当前会话草稿行为保持，当前批准说明准确；新版JSON往返及旧输入拒绝有实际验证；将22登记状态×3背景列成66个检查用例，逐项实际Canvas/PNG回读并报告未通过。暂不增加任何美术组件。第二个闭环复用已交付的模板resolver、增加模板候选接口和全局真实随机，之后再扩展新组件。

后续模块小批默认三基底为Dots、人形栗发、柴犬，首素材候选为耳机/圆框眼镜/围巾/杯子；每个只声明实际适配，杯子先验证人形抓握。此取舍待方案审阅，不是现有库存、制作完成或全部基底支持承诺。
