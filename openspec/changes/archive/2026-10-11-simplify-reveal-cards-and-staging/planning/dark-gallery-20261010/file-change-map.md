# 文件级变更建议

此表基于当前 `HEAD=b84e3db203a525755a839c100ec5bca8238f3fa3` 与 `dist/` 发布闭包。它是后续 apply 的文件计划，不代表业务实现已经发生，也不授权部署。重构期间要按逐文件清单增删 `dist/`，保留15件现行批准原图、其 hash/来源、构建与验收历史；不能清空整个 `dist/`。旧运行代码和待审素材的现有存档留在 `historical-runtime/`、OpenSpec history/archive 与 `design/acceptance/`，新运行不导入它们。

## 页面与状态

| 路径 | 处置 | 实施建议与验收重点 |
|---|---|---|
| `dist/index.html` | 重构 | 页面根入口改成 Dots 角色库；移除宣传 Hero、独立 Home/Gallery 门户和重复入口。保留主导航仅角色库、指南、语言。为 CharacterStudio 只保留一个共享容器/面板；用户选择 Artwork 后进入 View，再在同一根元素、同一 artwork/version 与 draft 状态下切换 Edit。默认英文、简体中文继续可用。站点标题、品牌文案、meta、aria 名称同步为 Dots；canonical 与 og:url 明确登记用户给定的 `https://dots.liuzhihang.chatgpt.site`，浏览器 head 回读确认，不能为此改 hosting 身份或访问设置。 |
| `dist/studio.js` | 重构 | 改为 Gallery-first 的应用协调器；默认路由为 `#/?q=&series=&sort=`，角色库就是首页。只负责搜索/筛选、选择 Artwork、打开/关闭共享 CharacterStudio、返回与语言状态。卡片点击 push 一条详情 history；打开面板时先提交身份/版本和来源状态；不在主入口静态 import 编辑器。View/Edit 切换用 URL replace 更新 `mode`，不新增 history。保留路由回返的滚动、查询、筛选和焦点恢复。 |
| `dist/studio-router.js` | 重构 | 使用角色库 `#/?q=&series=&sort=`、指南 `#/guide`、详情 `#/artwork/<id>?v=<version>`；详情可追加 `mode=edit` 请求同一 CharacterStudio 的 Edit 状态，未指定时为 View。View/Edit 状态变化以 replace 更新 URL，不另建路由或 history entry。旧 `#/home`、随机/工作台路径不做别名、迁移或兼容；坏链接明确到未找到页。 |
| `dist/studio-detail.js` | 改造成共享 CharacterStudio 或拆出单一控制器 | 当前模块包含 detail DOM、Prompt-only 修改表单、下载/复制和变体；改为一个控制器拥有 `View`、`Edit` 两个视图状态。Artwork snapshot 固定同一 ID/version；Draft 只在内存中。View 首先呈现 poster、元数据和各自可用的操作。Edit 按需加载模板能力与编辑器，不创建第二 dialog、第二页面或第二份 artwork 状态。无合格模板时只显示真实已有能力及 ChatGPT 修改意图入口，不能把修改 Prompt 当本地编辑完成。 |
| `dist/studio-detail.css` | 重构 | 以 D01 CharacterStudio 面板为准，保持 View/Edit 的预览位置和壳层一致；编辑控件围绕明确的模板能力矩阵呈现，unsupported / 组合冲突可读且不静默丢弃。手机版按 D02 使用单一全屏面板和单列滚动，不生成第二层弹窗。 |
| `dist/studio-overlay.js` | 保留焦点/返回能力并缩窄职责，或随页面壳合并 | 原生 dialog 的 inert、键盘焦点约束和滚动恢复可复用，但仅包装那一个 CharacterStudio。删除当前双重 back/close 路径或重复 dialog 状态；View↔Edit 只 replace 详情 URL 的 `mode`，不新增 history、不重置 Artwork identity。 |
| `dist/studio.css` | 大幅重构 | 替换露台/页面浅色 CSS 为 D01 深色数字画布、局部烟黑玻璃和开放角色网格；D02 仅补手机与 Guide。删除露台 scene、热点轮廓、巨型 Hero、旧透明场景错误回退以及与旧页面结构绑定的规则。保留明确的键盘焦点、减少动态、响应式边界、44px 触控和高对比语义状态。 |
| `dist/studio-home.js` | 删除活动引用；记录到文件退休清单 | 该模块只管理露台热区、场景图、轮廓 SVG 和露台失败回退。新 Gallery 不使用，不能保留独立活动首页或为旧首页添加适配层。移除前确认没有其它活动 import。 |
| `dist/studio-scenes.js` | 从活动图删除 | 仅登记三种 v98 terrace scene 和热点；与新数字画布方向冲突。保存现有源和 3 张资源的 SHA/验收记录，避免覆盖 v98 evidence。 |
| `dist/studio-tag-browser.js` | 保留行为、重写呈现 | 仍提供五种系列的单系列选择；改成深色画布上轻量筛选条，无 Home overlay 与重复筛选导航。明确无匹配/清除操作。 |
| `dist/studio-tags.js` | 保留并检查内容 | 延用规范化搜索、多词 AND、系列与文本 AND；保证只返回当前可发布 Artwork，不把 `previewOnly` 候选加入默认画廊或搜索。 |
| `dist/studio-i18n.js` | 保留并更新文案 | EN/zh-CN 字典继续是唯一 UI 文案源；删改 Home/Hero 专用文案，补 Gallery/View/Edit、真实能力/冲突提示、导出和加载状态。不要让 DOM 里残留旧品牌标题。 |
| `dist/studio-prompt.js` | 保留基础 Prompt；调整修改意图出口 | 原始 Prompt 绑定 Artwork/version。仅当请求超出当前模板的本地能力时，将清晰标注的二创意图交给 ChatGPT；不能继续把现有 fact 改写表单作为所有作品的“编辑器”。Canvas Draft 不通过 Prompt 变化冒充预览。 |
| `dist/studio-actions.js` | 保留并扩展明确分开的动作 | 继续复制当前原始 Prompt、手动打开 ChatGPT 和下载源 Artwork 原字节。新增 Draft 导出由 renderer 输出透明 PNG，使用不同的操作名与文件名；任何本地动作不能隐式上传、发起模型调用或发送消息。 |

## 资源、目录与渲染

| 路径 | 处置 | 实施建议与验收重点 |
|---|---|---|
| `dist/studio-artwork-catalog.js` | 保留批准目录；增加明确的模板引用边界 | 保留15个当前批准 Artwork 的 ID/version、来源、原图 hash/alpha、事实状态和 Prompt 引用；不重编码原图。为受控编辑新增显式 template reference 时，不能把能力写回原 Artwork facts 或下载记录。两件当前 preview 候选仍与 approved catalog 隔离；五件新外观逐件登记真实来源/批准，新 Character 身份与 seriesId 分开，不借用 v83 的 makeApproval。 |
| `dist/studio-content.js` | 保留真实静态内容，清除非活动页面字段 | 保留五种 series、15件作品双语标题/描述、来源与 poster 清单；新增每系列1件作品的双语、facts、展示资源及Prompt，20件是首批目标，不是固定上限；白兔与白色胶囊脸机器人保留在独立 `PREVIEW_*` 内容及同一详情路径，仍标 pending。按产品裁决更新 Dots 品牌文案与 Guide。仅清除退役 terrace scenes 的活动内容引用，不把任何候选改成 approved。 |
| `dist/studio-edit-templates.js`（新增） | 增加静态模板能力与层引用清单 | 登记 `dots-orb-v1` (`candidate-dots-20261005@v2`) 和 `grok-orb-v1` (`candidate-grok-20261005@v2`) 的 revision、资源、配方与资格。有限选项为颜色、眼睛、眼镜、配件；Dots 12、Grok 16 个合法配置共 28 个，Dots 眼镜+耳机的 4 种冲突拒绝，Grok 帽+眼镜须专用遮挡层与艺术批准。不是仅颜色 palette；缺资源/未批准时模板保持 pending。进入 Edit 后按需 import。 |
| `dist/studio-draft.js`（新增） | 增加会话内 Draft 与合法性检查 | Draft 绑定 Artwork/version、template/version、选项与 revision，仅内存存在。按模板白名单及组合规则先验证再提交状态；冲突保留原配置并解释，未渲染结果不能冒充成功预览/Prompt。原始 Artwork 不可变。 |
| `dist/studio-renderer.js`（新增） | 增加受控本地渲染 | 一个确定性 Canvas recipe 同时服务实时预览与透明 PNG 导出。Draft 每次改变时检查模板允许值和 layer 冲突；不合法组合显式失败。导出的 PNG 必须与当前屏幕 recipe revision、Draft revision 匹配且有真实 alpha；计划画布 1024×1024（锁定值待素材验收），不改变各 catalog 原图的实际尺寸/字节或生成 Pet/动作记录。 |
| `dist/studio-editor.js`（新增，按需 import） | 增加首批模板编辑 UI | Edit 状态才 lazy import 编辑器和所需 template assets；仅在 Dots/Grok 所需素材、renderer 验证和艺术验收齐备后展示四类有限能力。Dots 可选原/闭眼、圆眼镜或原耳机（眼镜与耳机互斥）；Grok 可选两种成对胶囊眼、圆眼镜、软帽（帽+眼镜经专用遮挡批准才合法）。不提供任意形变、通用配件或未适配作品的虚假编辑。 |
| `dist/studio-preview-loader.js`（新增，独立模块） | 拆分快速预览请求 | Gallery poster 和 View 封面用低体积、同源、版本绑定的显示路径。高分辨率预览只在 View 按需请求；编辑图层只在进入 Edit 后请求。并发相同资源应去重并使用上限明确的缓存/租约；session/version/Draft revision 防止迟到结果。普通 View 不做整 PNG SHA/alpha/hash 前置。 |
| `dist/studio-asset-loader.js` | 缩窄为原图读取/下载，补资源租约规则 | 只在用户明确下载原图时读取登记的完整原 PNG，并保留精确字节语义；与 Draft PNG 导出分开。View 走 `studio-preview-loader.js` 的 display preview，不请求 full original。对同一用途的同源版本化资源定义缓存、并发去重、取消订阅和 lease dispose；缓存不得无限增长，Blob URL、`ImageBitmap` 在释放条件满足时清理。普通查看不做原图全文件 hash。 |
| `dist/assets/characters/*`、`dist/assets/looks/*` | 逐文件保留批准原图 | 15件 Artwork 原图是用户内容和下载来源，按当前 manifest/catalog hash 对照逐文件保留。模板资产新增为独立文件，不覆盖这些 PNG。 |
| `dist/assets/posters/*` | 保留批准 poster；按使用处维护 | 已登记缩略图服务 Gallery 卡片和初始 View 封面，不能当作透明 PNG 导出源或局部模板层。仅在逐项确认不再引用后删除对应 poster。 |
| `dist/assets/templates/dots-orb-v1/`、`dist/assets/templates/grok-orb-v1/`（新增目录） | 仅放两套模板经确认的具体层和 mask | 新制目标画布 1024×1024 的无配件基底、颜色 mask/shading、两种眼型、眼镜层，以及 Dots 耳机或 Grok 软帽的前后层和遮挡。两套绑定的球形原图均为1254×1254，其他作品按实际尺寸（奶油Muse为1235×1274）逐字节保留，不从原图裁配件或覆盖。逐项参照 [template-capability-matrix.md](template-capability-matrix.md) 登记来源、尺寸/alpha/hash、锚点、层序和艺术批准覆盖；历史截图、整张 UI 导出和 display-only SVG 不得进入。 |
| `dist/assets/terrace/v98/*` | 从新活动发布闭包逐文件退役 | 三张 v98 terrace WebP 均在当前 `previewOnlyFiles`，与当前深色数字画布目标不符。保留字节、hash、v98 视觉证据和拒绝/替代记录于现有历史位置；不再由新入口加载。 |
| `dist/assets/companions/v98/*` | 保留独立 pending 候选及其来源记录 | 白兔和白色胶囊脸机器人继续在 `PREVIEW_*` 集合，通过同一受信任详情路径访问；保持 pending，不进入默认 Gallery、搜索或 tags。不得把机器人标为 Grok。它们不因两套代表模板重构而退役。 |
| `design/static-publish-manifest.json` | 精确更新 files 闭包 | 移除退役页面与 terrace scene 文件，保留两件 pending companion 及其 `previewOnlyFiles` 身份；逐项加入新源模块和 template layer。保持 `files` 与新 dist 实际闭包精确一致，`previewOnlyFiles` 精确反映仍在树内的 pending 项。它不提供物理隔离。模板或新页面仍 pending 时构建状态不得报告 deployment-ready。 |

## 校验脚本与项目约定

| 路径 | 处置 | 实施建议与验收重点 |
|---|---|---|
| `scripts/build-studio.mjs` | 重构静态闭包验证 | 继续只校验，不清理或重写整个 `dist/`；解除固定15件总数，保留15件历史完整性子集。将原场景/热点注册合同替换为 Artwork、poster、template registry、模板层 hash/alpha、renderer recipe revision 与精确 manifest 闭包检查；错误引用或未批准新资源应阻止 deployment-ready。 |
| `scripts/verify-artwork-catalog.mjs` | 保留并更新 | 继续验证冻结15件原图子集的字节、hash、alpha、来源；当前总量从合格目录求值，不固定15或20。增加新Artwork data-only fixture贯通查询/卡片/详情/Prompt，pending/无Template负例，保证Draft/renderer不改原图记录。 |
| `scripts/verify-artwork-query.mjs`、`scripts/verify-router.mjs` | 保留并更新 | 覆盖 Gallery 搜索/系列筛选，以及 `#/?q=&series=&sort=`、详情 `?v=<version>&mode=edit`、卡片 push 与 View/Edit replace/no-new-history 路由状态；删除旧 home/random alias 断言，验证旧 schema/URL/storage 不迁移。 |
| `scripts/verify-reference-detail.mjs` | 改写为 CharacterStudio 旅程 | 覆盖同一面板 View↔Edit、ID/version 不变、回返状态恢复、Prompt/原图下载/Draft 导出各自操作边界、未适配 Artwork 不伪称本地编辑。 |
| `scripts/verify-studio-browser.mjs` | 替换 terrace/hotspot 假设 | 覆盖 D01 桌面 Gallery 和 CharacterStudio、D02 手机上的单面板与 Guide，以及键盘、焦点、错误图片、语言、viewport。移除背景 scene 点击坐标和 15+2 热区断言，卡片/下载总数按当前合格目录计算。 |
| `scripts/verify-motion.mjs` | 以真实能力为准 | 不生成占位动画数据。若批准资源清单仍无动画，断言 UI 无播放按钮；若查到已批准动画，检查仅有真实 asset 的播放器、减少动态与释放行为。 |
| `scripts/verify-transparent-output.mjs` | 保留原图原字节检查并补新用例 | 现脚本的原图下载断言不能覆盖 Draft。另测 Canvas 导出 PNG 的 alpha、尺寸、正确文件名、当前 renderer/Draft revision 与预览像素一致；编辑导出不能冒充原图下载。 |
| `scripts/verify-edit-templates.mjs`、`scripts/verify-draft-renderer.mjs`、`scripts/verify-studio-performance.mjs`（新增） | 增加确定性覆盖 | Template registry 检查非法组合和 supported matrix；renderer 验证预览/导出同 recipe 和 revision；延迟网络 fixture 证明首屏元数据/可用操作不等完整原图，检测同一 asset 请求去重、缓存上限/失效、abort、URL/bitmap dispose 和快速切换迟到回调。另以真实浏览器做条件化性能实测，不把受控 mock 数字表述为线上 INP。 |
| `package.json`、`package-lock.json`、`vite.config.mjs`、`.openai/hosting.json` | 保持当前基础设施 | 不新增框架、不升级依赖、不改 Vite root、Sites static.directory 身份/访问设置或 OpenSpec 配置。通过更新脚本参数接入新校验，不让 build 自动收纳孤儿资源。 |
| `README.md`、`DESIGN.md`、`AGENTS.md`、`.agents/rules/design.md` | 在后续 apply 统一修订 | 替换当前露台/浅色 Gallery/Prompt-only 编辑约定，写入 Dark Gallery、共享 View/Edit、本地受控 Draft、透明导出、资源门槛与新验收边界。删除旧随机和万能组装作为活动产品要求；明确原图不变与 Draft 可本地渲染是不同边界。 |
| `openspec/specs/*` 与现有未归档 change | 先由 delta 对齐，再按用户确认实施 | 旧活动 requirement 逐条按本地精确标题修改或移除；不能仅新增一组相反的 ADDED requirement。保留 archive/history 与旧证据。change 的 proposal/design/tasks/spec delta 经本轮用户确认前不进入业务 apply；不 sync/archive。 |
| `historical-runtime/`、`design/acceptance/`、现存 OpenSpec archives/history | 保留为历史和来源证据 | 不加入 Vite 入口、`dist` 发布清单或新 template registry。旧 UI/renderer、截图、候选素材和失败记录保留在各自历史位置以便追溯；不因“无需旧兼容”而删掉审计来源。 |

## 建议实现次序与合并门槛

1. 先冻结 v98 基线与现有15件批准原图；完成 Dots/Grok template capability matrix、素材制作任务、conflict rule 和 renderer revision 设计。此阶段不能用现有 poster、历史截图或 retired pose 候选假装 layer 已到位。
2. 制作并审阅 Dots/Grok 最小层资源，固定合法组合，逐层比对原身份、边缘、颜色/材质和透明边界；记录来源、审批范围、SHA、尺寸和 alpha。没有足够素材时，保持该模板 pending，其他页面任务可独立开展。
3. 先重做 Gallery、搜索和单系列筛选，再搭出一套 CharacterStudio View/Edit；View 的同步内容与 poster 首帧优先，Editor 按 Edit 动作载入。随后接入 renderer、内存 Draft 和独立 PNG 导出。
4. 分离 poster/预览/template assets/原图下载。通过可控延迟 fixture、重复打开、快速切换、失败、关闭、导出和资源 dispose 检查后，再做真实浏览器冷/热缓存及网络条件记录。
5. 逐项更新 build 闭包、当前目录和 docs/OpenSpec delta；用 1440×900、390×844、320/768 边界验收，检查 EN/zh-CN、键盘、返回、原图下载、Draft 导出和真实素材身份。功能、浏览器视觉、美术批准、设备、Site 部署分别报结论。

当前基线和附件资产完整性均可从该 change 的 `baseline.json`、`source-package/CHECKSUMS.json`、`dist/studio-artwork-catalog.js`、`dist/studio-content.js` 和 `design/static-publish-manifest.json` 追溯。本轮没有改动 `dist/`、执行 `build`/测试、提交、部署、spec sync 或 archive。

## 已交付的素材与长期维护文档（无业务apply）

| 路径 | 状态 | 后续使用 |
|---|---|---|
| `planning/gallery-expansion-20261010/` | 五件独立外观候选、参考映射、提示词、实测metadata | 每类新增1件，逐件修整和艺术批准后才接入；与两编辑模板制作分开 |
| `design/character-authoring/README.md`、`components.md`、`templates/character-brief.yaml` | 本轮已写维护流程、系列标准、数据/组件合同与Brief | 组件代码仍待apply；未来会话查当前实现，避免角色专用分支 |
| `README.md` | 本轮仅增加维护文档入口及当前/目标状态说明 | 其余旧运行说明在apply时统一更新 |
| `~/.codex/skills/dots-add-character/SKILL.md` | 本机可发现skill，项目外文件 | 引用项目内唯一指南，支持独立候选及已授权接入 |

制作候选不自动进入dist；原素材与运行保持。新静态资源接入后逐路径加入原图/poster/displayPreview清单和来源记录，无模板时不添加Editor能力。
