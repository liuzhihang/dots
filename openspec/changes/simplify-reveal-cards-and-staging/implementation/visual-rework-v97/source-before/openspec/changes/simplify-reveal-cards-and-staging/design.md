# Design

## Context

动机及产品边界见 [proposal.md](proposal.md)。本设计是 2026-10-09 对原 change 的规划重写，不是实施或发布记录。

| 已核对项目 | 当前事实 |
|---|---|
| 本地工程 | `/Users/liuzhihang/workspace/dots`；分支 `main`；HEAD `b22c3f0df8b010da74b99caf9a80c417157857d7` |
| 工作树 | 本轮写入前按展开文件计：56 modified、130 deleted、380 untracked，共 566；当前 change 为 untracked。已有变更与删除不自动回滚 |
| 技术栈 | 原生 HTML / CSS / ES modules；Vite 8.3.2；没有 React / Next.js 或运行后端 |
| 源码 / 发布 | Vite root 和 Sites static.directory 都是 `dist`；build 为 `node scripts/build-studio.mjs` 校验流程，不是可清空的打包输出 |
| 托管 | 保留 `.openai/hosting.json` 的 `appgprj_6abf8f3128308191b2f8a2a9c6003704`；本轮未改变访问设置，也未远端验证 |
| OpenSpec | 本地根、CLI 1.14.1、spec-driven、11 个主规范；唯一活跃 change 为本目录。旧 34/35 不代表新范围完成 |
| 运行入口 | `studio.js` 串联 home / gallery / game、DrawResult、reference 和 detail；原详情地址不含 Artwork ID，刷新不能直达 |
| 首页素材 | 两张 Hero 和五张 family 场景都是完整插画，登记为 unreviewed；没有分离角色层，首页场景角色不可逐只点击 |
| 资源 / 性能 | 15 个成品原图总计 18,822,311 字节；gallery 虽有 lazy img，却对全部匹配项调用 checkAsset 预取校验；暂无专门封面与真实动画 |
| 缓存 / 校验 | 入口和模块 v95，data-cache / build report 93，部分浏览器断言 94；新实现须统一当次版本而不能沿用矛盾常量 |

输入以本轮明确范围及附件为准。已读取 ChatGPT「优化角色与交互」最近四条 turn 记录，包含第三张 / 最后一张分工及远景疏密修正；不声明读完整个历史会话。P01、P02、C01–C03 已作视觉对照，附件四份文档完整读取；原字节和 SHA-256 保存在 [planning/static-experience-20261009/source-manifest.json](planning/static-experience-20261009/source-manifest.json)。旧规划、旧参考和 implementation 记录只作历史依据。

Explore 的本地浏览器观察覆盖 1440×900 与 390×844 的现状：首页白底双群像及大专题卡、画廊有明显卡片边界、详情打开后仍是 #gallery。未把这些观察记为新设计验收，也未执行 320 / 768 或真实下载的完整回归。

## Goals / Non-Goals

**Goals:** 在同一静态工程内，让独立可点击的露台角色、画廊卡片和直达地址使用同一作品详情；内容与页面代码解耦；把缺素材、工程状态及人工美术确认保持可追溯。

**Non-Goals:** 不增加 Provider、后端、内容库或上传路径；不迁移旧产品数据或 URL。新路由、缺资源、剪贴板、响应式及 reduced-motion 的容错属于当前产品正常能力。具体排除项以 proposal 为准。

## Decisions

### 1. 单场景采用分层静态合成，动画按真实资源逐项接入

只比较两种方案：

| 方案 | 能力与代价 | 结论 |
|---|---|---|
| 背景 / 家具遮挡层 / 独立角色或局部互动单元 / 固定热区 | 能逐角色命中、调整移动构图和按需播放；需新背景、遮挡层及适用姿态，不能直接复用整幅群像 | **推荐**，先完成静态分层，真实动画可为空 |
| 单张合成图 + 固定热区 | 可实现点击详情，制作量较小；角色不能独立变表情、动作或改变遮挡，移动取景易丢角色 | 仅用于明确标注的构图评审，不作为最终逐角色交互资源方案 |

场景容器内底层为不含角色的环境，家具按前后关系拆层；角色图像本身 pointer-events none，语义按钮位于固定命中层。按层登记 z-order 和遮挡，不全局把家具压在脸上。可以把角色与其紧密接触的道具作为一个局部单元，不能由此推导可穿戴组件。静态图和动作共用固定占位框，动作不得改变按钮几何。

热区以角色可见轮廓的合理外扩为基准，触控建议至少 44×44 CSS px，远景空间不足时调整构图，不能让大透明热区相互覆盖。重叠区域只属于可见前层角色；Tab 顺序按页面阅读与空间分组而非 z-index 排列。各按钮有作品名、focus-visible；鼠标短提示不抢焦点、不拦截点击、不遮住相邻热点，Escape 可收起提示。DOM 中渲染标题与操作，不将文字烘焙进背景。

### 2. 原型到页面的映射及尺寸起点

| 区域 | 参考与尺寸起点 | 与现状 / 原型的必要修正 |
|---|---|---|
| 首页桌面 | P02 构图；1440×900，约 64px 导航，Hero 520–580px；左侧约三分之一为标题，场景横向展开 | 去掉双 Hero、五张大专题卡、随机 CTA；不将拼版缩略面板比例当成原生尺寸 |
| 首页光色 | P01 暖灰 / 奶油基底、低饱和黄昏，导航融合环境 | 不套统一紫色滤镜；城市退后，道具仅解释活动，保留空台阶 |
| 首页移动 | P01 信息顺序，同一个露台重新取景和放置角色 | 文案 / 按钮 / 场景自然纵向；不整体缩桌面、不拖地图、不另造主题 |
| 画廊 | P01 浅色开放网格，桌面 5 列、768px 3 列、390/320px 2 列为起点 | 无展柜 / 底座 / 每卡小场景；完整 contain 与光学尺寸单独校正，卡上只保留名称、系列 |
| 详情 | P01，大图优先；桌面约 960–1040px 上限，窄屏全屏自然滚动 | 直接操作靠前；无目标格式教育面板、工程术语、假变体 / 许可 / 安装徽标 |
| 指南 | 轻量静态内容页，沿用同一导航和字阶 | 不增加营销段落或演示上传表单 |

首页英文文案采用 “Small Dots. Big Ideas.”、 “Pick a character. Create your version in ChatGPT.”，操作为 Copy Prompt / Explore Gallery，提示 “Click a character to explore.”；中文提供等义文案。首页主复制绑定 `candidate-dots-20261005@v2`，对应耳机 Dots 原始创作 Prompt；hover 不偷偷换主操作对象。

群组以 12 个现有作品身份试排，人数不是验收配额，所有新场景姿态待制作 / 复核：

| 位置 | 现有作品身份 | 活动 / 留白 |
|---|---|---|
| 近景 2 | candidate-animals-20261005、dots-rose-glasses | 柴犬与 Dots 围绕一个小玩具；保留轮廓与空前景 |
| 中景合作 4 | candidate-dots-20261005、candidate-grok-20261005、candidate-humans-20261005、human-bun-yellow | 共看一张草图 / 桌面；Dots 无肢体基准不长手脚 |
| 中景阅读 2 | candidate-meta-muse-20261005、animal-white-cat | 共看一本书，人物 / Muse 的真实短肢承托，不临时改变动物结构 |
| 远景 2 | dots-lilac-bucket、grok-green-cloud | 较小但清晰的伙伴；保留台阶与通道 |
| 远景独处 2 | muse-sage-reading、grok-teal-square | 分散安静停留；有书的静态作品不宣称翻书动画 |

近 / 中 / 远约 1 / 0.75 / 0.55 仅作为光学试排起点。其余 rose Muse、blond human、husky 留在画廊；不为填满台阶发布新角色。批准的母图不等于新场景动作已批准。

身份检查：Dots 细密短绒、清晰轮廓；Grok 光滑软几何、成对胶囊眼；Muse 按 C01 奶油包覆体、内嵌脸和短圆肢体；柴犬立耳、橙白、清楚口鼻、四足与卷尾。人物发丝 / 衣料 / 皮肤保持不同材质。P01 中贝雷帽等未登记示例不自动新增为作品。

### 3. 最小模块、路由和状态

沿用现有原生 ES modules，不增加框架、数据库、Provider 或后端。必要时新增小模块 `studio-router.js`、`studio-i18n.js`、`studio-guide.js`、`studio-motion.js`、`studio-prompt-editor.js`，分别承担纯路由、词条、静态页、动画控制和 Prompt 意图；不做通用平台抽象。

路由使用 hash，适合现有静态托管，无服务器 rewrite：

- `#/home`
- `#/gallery?q=<text>&series=<id>`
- `#/artwork/<id>?v=<version>`
- `#/guide`

初始无 hash 进入 home；只接受可信 ID 和白名单参数，非法 ID / 版本提供不可用页面和画廊入口，不自动替换 latest。未知路由统一未找到，不为 #game / 旧 query 单独建立适配。搜索条件写入 URL；连续输入用 replaceState，不为每个字符制造返回历史。

```text
route + query + locale
       │
       ├── Home Scene ── artworkId/version ─┐
       ├── Gallery ──── artworkId/version ─┤
       └── Direct detail URL ──────────────┤
                                          ▼
                               shared detail selection
                               ├─ verified original/Prompt/download
                               ├─ actual variant selection
                               └─ ephemeral PromptEditIntent
```

站内打开前，将来源路由 / query / scrollY / triggerId 序列化到对应 history entry，再 push 详情 entry；Back / Forward 驱动视图，不靠临时 overlay 注册 ID。直接打开或刷新详情时无可靠来源则使用同一详情内容的独立壳和“返回画廊”；不要 history.back() 跳去外站。站内关闭消费自己创建的 entry；无站内来源时导航画廊。变体加载成功后 replace 当前详情地址，避免 Back 逐个撤销变体而无法回来源；失败保留旧地址和旧成功版本。

`studio-overlay.js` 保留滚动锁定、焦点圈定、Escape 和焦点恢复，移除随机 / reference overlay 栈。详情进入时背景 inert；直达独立详情没有虚构背景对话框。关闭后下一次渲染再恢复滚动与触发节点，节点不存在则聚焦来源标题。

状态拆分：
- 全局只有 route、locale、motionPreference、当前 gallery query。
- detail session 只有 selection、loading/error、来源、各操作请求 token、Prompt 展开和修改意图。
- scene / gallery animation 使用暂停原因集合；删除 DrawResult、activeDraw、硬锁 Feature、reveal phase。
- 仅语言与减少动态偏好轻量持久化；storage 抛错不阻断会话，不存图片、草稿或用户内容。

### 4. 状态与异常处理

| 区域 | 状态 / 触发 | 结果 |
|---|---|---|
| 首页 | idle → hover / focus | 角色名 + 查看提示；无整幅详情弹窗，不改变全局选中对象 |
| 首页 | click / Enter / Space / touch | 立即打开该 ID / 版本详情；角色动画不能吞掉点击 |
| 首页 | 背景缺失 | 保留文字、CTA、真实可用角色入口和重试；标为资源失败，不自动启用旧场景 |
| 首页 | 某角色层缺失 | 显示带名称的可访问失败入口 / 提示，详情原图独立可用时仍可进入；不能显示错角色或假动画 |
| 画廊 | loading / ready / empty | 封面占位稳定；空结果由当前文本 AND 系列决定，允许分别清除或全部清除 |
| 画廊 | 单封面失败 | 该卡保留名称及重试，不使全部结果失败，不更换作品 |
| 详情 | opening / loading / ready / error | 壳立即显示，允许关闭；失败重试同一资源，已验证文本可独立使用，下载不得伪报成功 |
| 详情 | variant pending / success / error | 成功一次性切 ID / 版本、图、事实、Prompt、下载与 URL；失败维持上个成功版本 |
| Prompt 修改 | collapsed / unchanged / edited / invalid | 默认全部保留；替换但未输入说明提示补全，不当成移除；独立复制修改文本 |
| 复制 / ChatGPT | copying / copied / denied / blocked | 真实结果反馈，失败显示全文和手动入口；不自动发送 / 附图 |
| 下载 | validating / downloading / failed / cancelled | 校验真实字节后原 Blob 下载；错误 / 取消不成功，异步回调不得写入其他作品 |
| 语言 | en / zh-CN | 界面和模板一起切换，作品和查询不变；自由文本不擅自翻译 |
| 动画 | static / requested / playing / paused / failed | 默认 poster；用户明确触发当前一项播放；失败回静态图并提示，不能影响复制 / 下载 |

详情不把整个 UI 状态冻结成不可更新对象；冻结的是每次复制 / 下载所使用的 Artwork / Asset / Prompt 版本。使用请求 token 或 AbortController 抑制已退出会话回调，底层 Blob / URL 在合适时机释放。

动画统一由 `pauseReasons = {user, offscreen, pageHidden, detailOpen, reducedMotion}` 控制，其中 detailOpen 只作用于首页 / 画廊背景，详情自己的实际预览仍可由用户启动。解除一个原因不得清除其他原因；临时暂停恢复需此前有播放意图且全部原因解除，用户主动暂停或开启 reduced-motion 后需再次主动启动。首页真实短回应可在 hover / focus 触发一次并受相同控制，所有循环均需明确控制。GIF 无逐帧 pause API 时暂停切回静态 poster，恢复可从头播放并如实定义；不宣称保持精确帧。无动画资源时不注册播放器，测试用隔离夹具验证控制器，但不将夹具计入生产作品或视觉验收。

### 5. 静态内容模型及维护者流程

优先整理 `studio-artwork-catalog.js` 和 `studio-scenes.js` 为声明式 ES-module 数据，避免为了拆文件建立多套加载器。关系如下，名称是模型职责，不要求实现成五个 class：

| 模型 | 最小数据及边界 |
|---|---|
| Character | 稳定身份 ID、双语名称、身份约束、系列；作品之间相似不自动视为同一角色 |
| Artwork | ID / version、characterId、双语短描述、seriesIds、真实 facts / tags、originalAssetId、posterAssetId、promptId、显式 variant 关系、状态与批准引用 |
| Asset | type / purpose、local path、MIME、尺寸、bytes、hash、alpha、version、来源、工程状态、艺术批准及覆盖用途；scene pose / preview / original 不互换 |
| ScenePlacement | artworkId/version、scenePoseAssetId、desktop / mobile placement、z-order、固定 hit region、可选 motionAssetId；scene-only 成员不能假装可下载成品 |
| Prompt + EditIntent | 双语原始模板；独立 keep / remove / replace 操作和说明，以当前作品为起点，仅在详情会话内存在 |

保留八类作品事实及 known / none / notApplicable / unknown；不再为卡片派生展示清单，也不让无值事实产生素材负担。图库公开筛选仅一个文本框 + 单选系列（含全部）；搜索覆盖中英名称、别名、描述及真实 facts，全部词 AND、文本与系列 AND。内部 typed tags 继续为搜索提供信息；详情 3–4 个标签为静态描述，不维持旧多维筛选面板和 Feature 锁定。

封面使用从批准原图派生的静态优化资源，完整保留轮廓并独立登记 hash / 尺寸 / 用途；不能用拼版裁片。原图字节不重新编码。列表只加载当前 / 临近视口封面；原图在详情或下载时加载校验。移除列表对所有 found Artwork 的原图 checkAsset。性能预算作为首轮目标：封面约 ≤100 KiB、移动首屏媒体约 ≤1.5 MiB、桌面约 ≤2.5 MiB；达不到时先查看真实清晰度与网络数据，调整尺寸 / 压缩 / 预载，不能牺牲身份或把目标冒充测量结果。

维护者新增流程：
1. 将完整原图及可选 poster / scene pose / 实际动画加入仓库，记录来源和具体用途；没有动画字段就不展示播放。
2. 登记身份、Artwork / Asset、双语名称 / Prompt、实际 facts、系列；新分类从清单派生，不写每角色页面分支。
3. 本地检查 ID 引用、重复版本、文件 MIME / 尺寸 / bytes / hash / alpha、事实与 Prompt 一致、来源及批准覆盖；错误必须阻断发布。
4. 新原图、新姿态或新场景用途分别呈现待确认样张 / 实页，用户确认具体版本后记录覆盖范围；旧批准不能自动提升。
5. 构建闭合发布树并执行对应浏览器 / 下载验证；维护者在另行授权后静态部署。新增清单不会自动远程上线。

### 6. 资源清单与缺口

| 资源组 | 当前数量 / 状态 | 本次处理 |
|---|---|---|
| 品牌标记 | `dist/assets/characters/brand-mark.png` | 保留原文件 |
| 成品母图 | 15 个 PNG，RGBA；14 个 1254×1254、cream Muse 1235×1274；原图 hash 与目录 / v83 核对 | 保留路径、ID 和字节；沿用明确的图库批准范围，新页面呈现另验收 |
| 现有场景 | 2 Hero + 5 family 群像；unreviewed，非独立角色层 | 退出新运行树，按 hash 保留历史，不作可独立动角色 |
| 静态姿态候选 | 5 个旧 poses，在 historical-runtime 退役目录；当前 path=null，无可发布变体关系 | 保留候选，不解禁为真实动作，不计新首页已完成 |
| 揭晓说明素材 | 39 个 reveal PNG 及对应模块 | 新产品不使用；按文件清单移出发布并保存来源 / 审阅状态 |
| 已有真实动画 | 当前运行清单 0 | 默认全静态；不渲染假播放，不承诺变表情 |
| P01 / P02 / C01–C03 | 5 个设计参考文件，已登记原始 hash | 仅规划与身份对照，不能裁作生产 |
| 新露台环境 | 缺背景、台阶 / 坐凳 / 桌面遮挡层及适当影子 | 后续制作、登记并用户复核；环境不含重复角色 |
| 新场景角色单元 | 试排 12 个身份的适用姿态缺独立资源 / 用途批准 | 先用批准母图做明确标记的工程排位，最终须有真实自然接触与新用途批准 |
| 优化封面 | 缺独立清单 | 从 15 母图生成静态衍生物，原图原字节保留；检查轮廓 / 色彩 / alpha |
| 新动作单元 | 可选，全部待制作 / 批准 | 逐个登记实际资源，缺失不阻塞静态版，不能勾选为已完成动画 |

现有成品 ID：
- characters：candidate-dots-20261005（v2）、candidate-grok-20261005（v2）、candidate-meta-muse-20261005（v1）、candidate-humans-20261005（v1）、candidate-animals-20261005（v1）。
- looks（均 v1）：dots-rose-glasses、dots-lilac-bucket、grok-green-cloud、grok-teal-square、muse-rose-flowers、muse-sage-reading、human-bun-yellow、human-blond-glasses、animal-white-cat、animal-gray-husky。

批准证据来自 `openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json` 和相邻 `source-snapshot.json`。它覆盖 15 个特定原图在当时图库 / 工作台呈现，不能推导当前露台、动作、下载工程或实体手机通过。本轮不扩大批准分母或重写历史。

### 7. 文件级保留、重构和退役

所有操作均是后续 apply 范围；本轮只改此 change 内规划。

| 路径 | 后续动作 |
|---|---|
| `dist/index.html`、`studio.js` | 重构首页 / 画廊 / 指南入口与共享详情路由；删 game DOM / DrawResult / reference 全局入口 |
| `dist/studio-home.js`、`studio-scenes.js` | 单一分层场景清单、固定可访问热区、响应式 placement |
| `dist/studio.css` | 按 P01 / P02 重排；删除旧 Hero / topic / random / workbench 专用样式，保留适用基础控件 |
| `dist/studio-artwork-catalog.js` | 保留 15 原图数据 / 来源 / facts，移除 reveal imports / eligibility；明确 poster / scene / preview / original |
| `dist/studio-tags.js`、`studio-tag-browser.js` | 保留索引与安全查询，前台简化单文本 + 系列；无结果和清除 |
| `dist/studio-detail.js`、`studio-detail.css`、`studio-overlay.js` | 共用详情与路由恢复；去 Pet / 工程面板 / 嵌套参考弹窗，增加内联 Prompt 修改 |
| `dist/studio-prompt.js`、`studio-actions.js`、`studio-asset-loader.js` | 保留原 Prompt、复制降级、原字节下载；加语言 / 意图隔离与按需资源加载，去揭晓专用依赖 |
| `dist/studio-reference.js` | 旧独立辅助视图退出，必要文字模板能力并入新 Prompt editor；不保留 wrapper adapter |
| `dist/studio-draw.js`、`studio-fullscreen-random.js/css` | 从运行和发布退役，保留历史 |
| `dist/studio-feature-visuals.js`、`studio-reveal-visual-assets.js`、`studio-style-visual-assets.js`、`studio-appearance-visual-assets.js`、`studio-palette-visual-assets.js`、`studio-object-visual-assets.js`、`studio-runtime-config.js` | 退役 reveal 事实映射与 candidate-preview 开关，清除全部 import graph 引用 |
| `dist/assets/characters/*.png`、`dist/assets/looks/*.png` | 保留批准原图与品牌字节；新衍生文件分路径登记 |
| `dist/assets/reveal/**`、当前七张 `dist/assets/scenes/*.png` | 精确列项移出新发布树，以新 retirement manifest 保存 hash、来源与旧批准状态，不通配破坏性删除 |
| `scripts/build-studio.mjs` | 更新模块白名单、HTML / import graph / asset 闭包；分开冻结历史验证和当前发布清单 |
| `vite.config.mjs`、`package.json` | 后续仅撤掉 DOTS_REVIEW reveal transform、更新脚本入口；保留现有 Vite / 依赖版本与开发能力 |
| `AGENTS.md`、`DESIGN.md`、`.agents/rules/design.md`、`README.md`、`design/studio-visual-interaction-system.md` | 后续改为当前产品与验收合同，避免旧游戏规则继续指导实施 |
| `historical-runtime/**`、OpenSpec archive、旧 design/acceptance、旧 implementation / planning | 保留；不运行、不发布，不覆盖失败 / 取消 / pending |
| `.openai/hosting.json`、`openspec/config.yaml`、依赖锁文件 | 保持；不升级、不重建 Site、不自动 sync / archive |

当前没有活动上传控件 / 后端；历史 Three、配置导入和组件工作台都在 historical-runtime。退出方案是确认无运行引用并保持不发布，不为“清理上传”新写替代流程。

构建当前把 v87 的 23 retained 路径集合与当前发布树耦合。实施时为本轮新建版本化发布 / retirement 清单；v83 / v87 文档和原始文件留在原处，以冻结字节检查历史，新清单检查当前路径。不能改写 v87 来接受删除，也不能因为加新资源使历史来源校验失效。每次 source / resource cache、catalog revision、HTML / CSS / module query、data-cache、报告与截图证据目录使用一致的当次 revision 合同；版本从实施时实际状态确定，不硬编码旧 93/94/95。

### 8. 规范与测试替代

| 旧规范 / 检查 | 新合同 / 验证重点 |
|---|---|
| fullscreen-randomizer 7 项；draw / card reveal / instant-random / reveal-process / reveal-layout / recording 脚本及专用 fixtures | 7 项显式 REMOVED；专用测试移入历史且退出 npm scripts；改为 scene pointer / keyboard / touch、同版详情与路由恢复验证 |
| artwork-catalog 的派卡及独立 reveal 素材；character-visual-acceptance 的线索批准 | 静态内容关系、资产用途与新场景批准；catalog 检查保留原图 hash / alpha / 事实 / 来源 |
| catalog-tags 多维控件及首页 topic 要求；`verify-artwork-query.mjs` | 单文本 + 单系列，双语名称 / 别名 / facts、AND、无结果、分别清除 / 全清 |
| family-navigation 旧 game / reference overlay 栈；`verify-studio-browser.mjs` | 同 ID/version 两入口、直达 / 刷新、Back/Forward、Escape、焦点与滚动恢复 |
| reference-creation 全局辅助；`verify-reference-detail.mjs` | 内联 keep/remove/replace、默认保留、原事实不可变、双语 Prompt、关闭重置、失败全文备用 |
| studio-visual-experience 旧双 Hero / game | P02 场景、P01 网格 / 详情 / 移动，单场景、远景、真实浏览器对照 |
| target-resources 目标格式 / Pet 资料 UI | 实际静态 / 变体 / 动画 / scene 用途，无证据能力不展示 |
| `verify-transparent-output.mjs` | 保留真实下载字节 / hash / 尺寸 / alpha / 内容；测试从新详情发起 |
| 原 reduced-motion、资源错误和复制降级 | 保留并补 pause reason 合并、offscreen / visibility、clipboard deny、popup blocked、404 / hash / decode 失败 |

变更后的主规范 Purpose 仍可能含旧抽卡描述。**本轮不改主规范**；另行获得 sync 授权时按这 11 份 delta 更新，并同步清理相应 Purpose；完全移除的 fullscreen-randomizer 不保留可执行要求。sync / archive 是独立后续操作，不列为本次实施默认权限。

## Risks / Trade-offs

- [新露台资产不足] → 先交付目标尺寸构图 / 分层需求及静态原型验证，再制作对应场景单元；美术批准前不宣称完成视觉交付，动画可缺省。
- [人物与动物原图本身并非场景动作] → 母图用于绑定身份，新姿态单独审查，不让 Dots 临时生手脚，也不把原图机械贴上去冒充自然合作。
- [概念图中的重绘身份误导] → 原身份与 C01–C03 优先；P01 / P02 只按指定分工使用。
- [共享详情变成新旧双运行层] → 原详情组件直接改写，取消旧随机 / reference adapters，并检查发布目录而非仅 DOM 隐藏。
- [搜索更简洁导致历史筛选消失] → 明确 BREAKING，保留事实索引和新文本 / 系列语义，不做旧 query 转换。
- [大量 PNG 与动画拖慢首屏] → poster 按需加载、原图详情时取；实测媒体请求数 / 字节，动画仅当前一项播放。
- [dirty 工作树 / 历史来源丢失] → apply 开始时重新冻结字节清单，对授权路径逐项修改；没有 reset / clean 或宽范围暂存，保护本轮之外既有变更。
- [外部 ChatGPT 行为变化] → 官方页面手动入口和复制全文始终可用，不依赖预填成功承诺产品闭环。
- [OpenSpec 文件 done 被误当实施完成] → tasks 全部新建未完成；规划校验、实现测试、用户美术和发布分别报告。

## Migration Plan

这里指新范围接替旧运行代码的实施顺序，不提供旧产品迁移或兼容层。本轮到规划完成为止。

1. **A：冻结实施基线与资产合同。** 新请求进入 apply 后检查实际 HEAD / dirty 与规划是否漂移；记录具体授权文件、母图和历史证据 hash，确定当次 cache / evidence 目录。先使新发布清单与冻结历史清单职责分离。
2. **B：目标视口与场景素材。** 给出 1440×900 和 390×844 页面级构图、角色 placement / 遮挡 / 命中表及需要补作的资产。制作真实背景和静态角色单元、核对身份 / 光照 / 疏密，记录具体版本待确认；用户批准新场景范围后才具备正式素材资格。
3. **C：一个真实作品贯穿闭环。** 用一个已批准原图完成首页热区 → 共用详情 → URL / 返回 → 复制 / 真实下载，包含键盘 / 触控及错误路径，然后扩充所有登记作品。
4. **D：完整画廊与内容能力。** 搜索 / 系列、优化封面、15 原图详情、双语、静态指南、默认折叠 Prompt 修改；完成批准场景静态合成。无实际动画时保留静态，不伪造变体。
5. **E：退出旧运行与按需动态。** 精确归档旧 reveal / scene 资源和运行脚本，更新文档与测试图；若有实际批准的动画，再接入暂停和加载控制，没有则以隔离 fixture 验证控制器并记录生产为 0 动画。
6. **F：分开验收。** 执行内容 / 构建 / 功能测试；保存 1440×900、390×844、320 / 768 实际浏览器截图及交互证据，逐项比对 P01 / P02 和角色参考；用户美术确认仍为独立关口。

验收清单至少包含：场景前中后景与空台阶、五类身份、稳定热区、hover 提示 / 单次点击、两入口同版详情、直接 URL / 刷新 / 无效 ID、Back/Forward / Escape / 焦点、查询 / 系列 / 无结果 / 清除、语言及存储拒绝、原始 / 修改 Prompt 隔离、剪贴板 / 新窗口失败、原字节下载、变体失败原子性、offscreen / visibility / 详情打开 / 手动暂停 / reduced-motion、背景 / 单封面 / 原图资源失败。没有真实变体或动画时明确生产缺省；隔离夹具只证明代码合同，不能替代生产素材验收。

证据写入唯一新 `design/acceptance/current-<实际日期>-v<当次cache>/`，绑定源码及资源 hash，旧 v93 / v95 不覆盖。build 通过不代表视觉通过；生成图不替代实页截图；模拟手机不代表实体手机，线上状态本轮不验收。

部署、提交、sync 和 archive 都需后续具体授权。本计划不自动发布；将来发布时保持原 Site 身份 / 访问设置。需要回退时使用另行授权的已知发布包或精确文件恢复；保留新成果和历史，不 reset / clean，不引入双版本开关。
