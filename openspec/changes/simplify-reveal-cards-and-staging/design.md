# Design

## Context

动机及产品边界见 [proposal.md](proposal.md)。本设计记录 2026-10-09 对原 change 的规划重写及 v98 方向补充；实施进度和验收状态以 `tasks.md` 与当次证据为准，不以设计文本代替实施记录。

| v98 实施前基线（HEAD `b22c3f0df8b010da74b99caf9a80c417157857d7`） | 当时记录 |
|---|---|
| 本地工程 | `/Users/liuzhihang/workspace/dots`；分支 `main`；HEAD `b22c3f0df8b010da74b99caf9a80c417157857d7` |
| 工作树 | 本轮写入前按展开文件计：56 modified、130 deleted、380 untracked，共 566；当前 change 为 untracked。已有变更与删除不自动回滚 |
| 技术栈 | 原生 HTML / CSS / ES modules；Vite 8.3.2；没有 React / Next.js 或运行后端 |
| 源码 / 发布 | Vite root 和 Sites static.directory 都是 `dist`；build 为 `node scripts/build-studio.mjs` 校验流程，不是可清空的打包输出 |
| 托管 | 保留 `.openai/hosting.json` 的 `appgprj_6abf8f3128308191b2f8a2a9c6003704`；本轮未改变访问设置，也未远端验证 |
| OpenSpec | 本地根、CLI 1.14.1、spec-driven、11 个主规范；唯一活跃 change 为本目录。旧 34/35 不代表新范围完成 |
| 运行入口 | `studio.js` 串联 home / gallery / game、DrawResult、reference 和 detail；原详情地址不含 Artwork ID，刷新不能直达 |
| 首页素材 | v96 使用的整幅场景和群组资产无法支持用户要求的逐角色真实热点；用户明确拒绝 v96，理由是与原型差距大、人物悬浮、角色与背景无关、缺少角色且把多页拼版当单页 |
| 资源 / 性能 | 15 个成品原图总计 18,822,311 字节；gallery 虽有 lazy img，却对全部匹配项调用 checkAsset 预取校验；暂无专门封面与真实动画 |
| 缓存 / 校验 | 入口和模块 v95，data-cache / build report 93，部分浏览器断言 94；新实现须统一当次版本而不能沿用矛盾常量 |

输入以本轮明确范围及附件为准。P01 / P02 均为多页拼版，必须识别首页、画廊、详情与手机面板后逐页对应；不能把整张拼版当首页或生产素材。P02 决定桌面首页宽幅露台，P01 决定手机、画廊与详情层级，C01–C03 约束角色身份。已读取 ChatGPT「优化角色与交互」最近四条 turn 记录；附件原字节和 SHA-256 保存在 [planning/static-experience-20261009/source-manifest.json](planning/static-experience-20261009/source-manifest.json)。旧规划、旧参考和 implementation 记录只作历史依据。

Explore 的本地浏览器观察覆盖 1440×900 与 390×844 的现状：首页白底双群像及大专题卡、画廊有明显卡片边界、详情打开后仍是 #gallery。未把这些观察记为新设计验收，也未执行 320 / 768 或真实下载的完整回归。

v96 被拒、v97 仍待确认的场景素材与评审记录均保留为历史，不计入 v98 视觉通过。v98 当前设计要求单一完整黄昏露台按屏幕尺寸自适应铺满；桌面、手机使用同一叙事的对应构图，768px 平板作为第三种响应式取景，按实际可见范围启用热点。白色原创机器人、白兔等新增角色只作为 pending 身份记录；当前由本地候选构建供审阅，详情资格按完整 `PREVIEW_*` 登记决定，使用同一稳定详情地址，不依赖 localhost、hostname 或额外路由标记。既有15件原图身份及批准范围不变。v98 场景图、候选角色和网页呈现尚未获得用户艺术批准。

## Goals / Non-Goals

**Goals:** 在同一静态工程内，以满屏自适应的完整合成露台图和固定坐标热区连接真实 Artwork 与共享详情；桌面 / 平板 / 手机按各自可视比例取景；逐页落实画廊、详情及移动层级；内容与页面代码解耦；把资源版本、缺口、工程状态及人工美术确认保持可追溯。

**Non-Goals:** 不增加 Provider、后端、内容库或上传路径；不迁移旧产品数据或 URL。新路由、缺资源、剪贴板、响应式及 reduced-motion 的容错属于当前产品正常能力。具体排除项以 proposal 为准。

## Decisions

### 1. 单一露台以完整静态图呈现，热区只标记图中真实角色

只比较两种方案：

| 方案 | 能力与代价 | 结论 |
|---|---|---|
| 桌面 / 平板 / 手机按各自比例呈现同一露台的完整合成静态图 + 固定角色热区 | 人物、动物、道具、台阶、接触阴影和遮挡关系在同一图像中统一透视与光照；每个视口资源配自己的 Artwork ID / 版本和命中轮廓。平板是第三种取景，不得让裁切后的热点指向不可见或被截断角色 | **推荐**；场景图与页面呈现待用户艺术批准，点击仅打开 Artwork 详情 |
| 环境图加透明角色 / 群组覆盖层 | 可单独替换角色，但容易再次出现悬浮、光照不一致、重影与遮挡错误；桌面和手机还需维护多套叠放关系 | 不采用；本轮不叠加角色图层，不把“可独立点选”误解成“独立绘制” |

桌面、平板和手机使用同一个黄昏露台叙事的对应取景，不是两套主题、轮播或页面拼版。每个实际登记的 `SCENE_ART` 视口资源记录 `src`、SHA-256、尺寸与用途；`SCENE_CHARACTERS` 逐项登记 Artwork ID / 版本及相对对应图像的固定热区与轮廓，某视口未出现的角色不得有热区。每个视口使用与其屏幕比例相符的完整构图；命中坐标按最终实际渲染尺寸映射，不能将桌面坐标套到手机图或让平板裁切截断角色后仍保持可点击。图像本身包含角色与场景的接触、家具、阴影和遮挡，不另叠透明角色或家具群组。

每个热区须对应图中可见的单个真实角色轮廓，不覆盖邻近角色或通道；触控目标建议至少 44×44 CSS px，狭小远景先调整构图和点击范围。热区是无障碍 HTML 控件，不是透明角色图；Tab 顺序按画面阅读顺序，各按钮有作品名和 focus-visible。Hover / focus 显示简短名称提示，并沿该角色真实轮廓绘制 UI 描边动画；reduced-motion 使用静态描边。点击、Enter / Space 或手机一次轻点直接打开共用详情，不等待描边动画。完整合成图是静态图，不能声称单个角色独立眨眼、换表情或移动；只有未来存在登记的真实动画文件时，动画规则才适用。

### 2. 原型到页面的映射及尺寸起点

| 区域 | 参考与尺寸起点 | 与现状 / 原型的必要修正 |
|---|---|---|
| 桌面首页 | P02 首页面板优先构图：1440×900，露台背景自适应铺满可视屏幕；宽幅台阶向远处延伸 | P01 克制黄昏光色；场景叠加短标题、说明、Copy Prompt、Explore Gallery 和类别控件；不保留 Featured 作品区、大分类卡或第二主题 |
| 平板首页 | 768px CSS 宽度下同一露台的第三种响应式取景 | 对照实际平板画面确定构图 / 可见角色；被裁断角色不得保留热点；类别控件只作为场景 overlay |
| 手机首页 | P01 手机首页竖幅层级；390×844 单行导航和同场景手机构图 | 按手机图实际可见身份建立热区，不缩放 / 任意裁切桌面合成图；不增加 Featured 作品区或身份宣传条 |
| 画廊 | P01 对应画廊面板的浅色开放网格；1440px 目标 6 列、768px 3 列、390/320px 2 列 | 无展柜 / 底座 / 每卡小场景；完整 contain 与光学尺寸单独校正，弱化卡片边界，名称和系列简短 |
| 详情 | P01 对应详情面板；桌面大图与操作列平衡，窄屏全屏自然滚动 | 直接操作靠前；无目标格式教育面板、工程术语、假变体 / 许可 / 安装徽标 |
| 指南 | 轻量静态内容页，沿用同一导航和字阶 | 不增加营销段落或演示上传表单 |

首页英文文案采用 “Small Dots. Big Ideas.”、 “Pick a character. Create your version in ChatGPT.”，操作为 Copy Prompt / Explore Gallery；中文提供等义文案。首页主复制绑定 `candidate-dots-20261005@v2`，对应耳机 Dots 原始创作 Prompt；hover / focus 只反馈当前角色，不更换主操作对象。

已批准 Artwork 保持15件及原有 ID/version、原图字节和批准分母。v98场景可同时呈现这些已批准作品与新增白色原创机器人、白兔等候选身份；新增候选各自使用 `PREVIEW_*` 清单，通过同一稳定详情地址显示真实资源及 `Preview · 待确认` 标识，不能进入默认图库、搜索、tags 或发布资格。详情资格按静态登记校验，不依赖 localhost、hostname、路由来源标记或专用 query。各视口热区只绑定场景中真实可见的角色 ID / 版本；人物姿态是整景内容，不成为下载变体。v97 的 15/15 场景 roster 是历史候选记录，不是 v98 新构图的内容上限或批准记录。

桌面验收检查近 / 中 / 远尺度、角色群组、独处者、开放台阶及过道是否与 P02 面板关系一致；允许使用已登记的 pending 候选身份作本地场景审阅，但不把候选写成获批新作品。不得复制角色来凑数或给 Dots 临时加肢体。静态图中的家具、书和人物 / 动物接触须在图像本身自然成立；不把静止画面称为读书、敲键盘等动画。

身份检查：Dots 细密短绒、清晰轮廓；Grok 光滑软几何、成对胶囊眼；Muse 按 C01 奶油包覆体、内嵌脸和短圆肢体；柴犬立耳、橙白、清楚口鼻、四足与卷尾。人物发丝 / 衣料 / 皮肤保持不同材质。新增白色原创机器人不得冒充 Grok，白兔不得复用白猫身份；只从实际候选资源登记新事实。P01 中贝雷帽等未登记示例不自动新增为作品。

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
- 仅对画廊 / 详情中实际登记的动画使用暂停原因；首页完整静态场景图不参与单角色动画状态。删除 DrawResult、activeDraw、硬锁 Feature、reveal phase。
- 仅语言与减少动态偏好轻量持久化；storage 抛错不阻断会话，不存图片、草稿或用户内容。

### 4. 状态与异常处理

| 区域 | 状态 / 触发 | 结果 |
|---|---|---|
| 首页 | idle → hover / focus | 角色名 + 沿场景内真实角色轮廓的描边动画；只反馈焦点目标，不改变全局选中对象。reduced-motion 下显示静态描边 |
| 首页 | click / Enter / Space / touch | 立即打开该 ID / 版本详情；点击命中完整静态图上的固定热区，不等待或触发角色动画 |
| 首页 | 背景缺失 | 保留文字、CTA、真实可用角色入口和重试；标为资源失败，不自动启用旧场景 |
| 首页 | 场景图中某角色的热点引用、版本或位置缺失 / 不符 | 禁用该错误热点并提示当前场景无法打开该角色；不得把热点移给邻近角色或叠加透明图补齐。有效热点仍可打开对应作品原图详情 |
| 画廊 | loading / ready / empty | 封面占位稳定；空结果由当前文本 AND 系列决定，允许分别清除或全部清除 |
| 画廊 | 单封面失败 | 该卡保留名称及重试，不使全部结果失败，不更换作品 |
| 详情 | opening / loading / ready / error | 壳立即显示，允许关闭；失败重试同一资源，已验证文本可独立使用，下载不得伪报成功 |
| 详情 | variant pending / success / error | 成功一次性切 ID / 版本、图、事实、Prompt、下载与 URL；失败维持上个成功版本 |
| Prompt 修改 | collapsed / unchanged / edited / invalid | 默认全部保留；替换但未输入说明提示补全，不当成移除；独立复制修改文本 |
| 复制 / ChatGPT | copying / copied / denied / blocked | 真实结果反馈，失败显示全文和手动入口；不自动发送 / 附图 |
| 下载 | validating / downloading / failed / cancelled | 校验真实字节后原 Blob 下载；错误 / 取消不成功，异步回调不得写入其他作品 |
| 语言 | en / zh-CN | 界面和模板一起切换，作品和查询不变；自由文本不擅自翻译 |
| 真实预览动画 | static / requested / playing / paused / failed（仅真实登记的画廊 / 详情资源） | 默认 poster；用户明确触发当前一项播放；失败回静态图并提示，不能影响复制 / 下载；首页整景保持静态 |

详情不把整个 UI 状态冻结成不可更新对象；冻结的是每次复制 / 下载所使用的 Artwork / Asset / Prompt 版本。使用请求 token 或 AbortController 抑制已退出会话回调，底层 Blob / URL 在合适时机释放。

实际动态资源统一由 `pauseReasons = {user, offscreen, pageHidden, detailOpen, reducedMotion}` 控制；`detailOpen` 只作用于当前含真实动画的背景内容，详情自己的实际预览仍可由用户启动。解除一个原因不得清除其他原因；临时暂停恢复需此前有播放意图且全部原因解除，用户主动暂停或开启 reduced-motion 后需再次主动启动。首页完整静态合成图仅提供稳定热点、短提示和 focus 样式，不触发角色表情或移动动画。GIF 无逐帧 pause API 时暂停切回静态 poster，恢复可从头播放并如实定义；不宣称保持精确帧。无实际动画资源时不注册播放器；隔离夹具只验证控制逻辑，不计为生产作品或视觉验收。

### 5. 静态内容模型及维护者流程

优先整理 `studio-artwork-catalog.js` 和 `studio-scenes.js` 为声明式 ES-module 数据，避免为了拆文件建立多套加载器。关系如下，名称是模型职责，不要求实现成五个 class：

| 模型 | 最小数据及边界 |
|---|---|
| Character | 稳定身份 ID、双语名称、身份约束、系列；作品之间相似不自动视为同一角色 |
| Artwork | ID / version、characterId、双语短描述、seriesIds、真实 facts / tags、originalAssetId、posterAssetId、promptId、显式 variant 关系、状态与批准引用 |
| Asset | type / purpose、local path、MIME、尺寸、bytes、hash、alpha、version、来源、工程状态、艺术批准及覆盖用途；integrated scene / preview / original 不互换 |
| SceneArt | 完整静态合成图的 desktop / tablet / mobile Asset 引用，分别登记来源、版本、MIME、尺寸、bytes、hash 和待确认批准；各比例表达同一露台，不是两套主题 |
| ScenePlacement | artworkId/version、desktop / tablet / mobile 相对图像的热区和真实轮廓路径；各视口未显示的角色不得命中。只保存命中位置和 UI 描边数据，不引用单独角色图、姿态叠层或角色运动文件 |
| Prompt + EditIntent | 双语原始模板；独立 keep / remove / replace 操作和说明，以当前作品为起点，仅在详情会话内存在 |

保留八类作品事实及 known / none / notApplicable / unknown；不再为卡片派生展示清单，也不让无值事实产生素材负担。图库公开筛选仅一个文本框 + 单选系列（含全部）；搜索覆盖中英名称、别名、描述及真实 facts，全部词 AND、文本与系列 AND。内部 typed tags 继续为搜索提供信息；详情 3–4 个标签为静态描述，不维持旧多维筛选面板和 Feature 锁定。

封面使用从批准原图派生的静态优化资源，完整保留轮廓并独立登记 hash / 尺寸 / 用途；不能用拼版裁片。原图字节不重新编码。列表只加载当前 / 临近视口封面；原图在详情或下载时加载校验。移除列表对所有 found Artwork 的原图 checkAsset。性能预算作为首轮目标：封面约 ≤100 KiB、移动首屏媒体约 ≤1.5 MiB、桌面约 ≤2.5 MiB；达不到时先查看真实清晰度与网络数据，调整尺寸 / 压缩 / 预载，不能牺牲身份或把目标冒充测量结果。

维护者新增流程：
1. 将完整原图及可选 poster、完整桌面 / 平板 / 手机场景图和真实动画加入仓库，记录来源、用途、版本与 hash；新身份先进入单独 pending preview 集合。场景图须是同一环境的完整构图；没有真实动画字段就不展示播放。
2. 登记身份、Artwork / Asset、双语名称 / Prompt、实际 facts、系列；新分类从清单派生，不写每角色页面分支。新增候选可以通过明确的本地审阅入口查看，不进入 approved 公共集合或默认查询。
3. 本地检查 ID 引用、重复版本、文件 MIME / 尺寸 / bytes / hash / alpha、事实与 Prompt 一致、来源及批准覆盖；错误必须阻断发布。
4. 新原图、新身份与完整场景构图分别呈现待确认素材 / 实页；用户确认具体身份、场景图和页面呈现后记录各自覆盖范围。场景热点表必须依据每种比例的实际图像复核；旧批准不能自动提升。
5. 构建闭合 dist 树；manifest 的 `files` 是实际完整发布树，`previewOnlyFiles` 是其中明确登记 pending 文件的子集。含 pending 文件的本地构建必须报告 `deploymentReady: false`；不得声称这些文件被物理排除于 Sites static.directory。部署仍需另行授权。

### 6. 资源清单与缺口

| 资源组 | 当前数量 / 状态 | 本次处理 |
|---|---|---|
| 品牌标记 | `dist/assets/characters/brand-mark.png` | 保留原文件 |
| 成品母图 | 15 个 PNG，RGBA；14 个 1254×1254、cream Muse 1235×1274；原图 hash 与目录 / v83 核对 | 保留路径、ID 和字节；沿用明确的图库批准范围，新页面呈现另验收 |
| 现有场景 | v96 Hero、family、露台分组资源；用户因人物悬浮、背景关系不成立、角色缺失及拼版误用拒绝 | 逐项按 hash 留历史并退出当前发布；不得将其记作 v97 或 v98 视觉通过 |
| v97 场景候选 | v97 evidence 中的桌面整景与用户审阅记录 | 保留为 pending 历史，不覆盖、不宣称批准，也不作为 v98 完成证据 |
| v98 桌面 / 平板 / 手机场景 | 同一黄昏露台的完整合成候选；各资源最终路径、hash、尺寸以实际登记核实 | 可供本地视觉审阅；页面呈现仍 pending。三种比例分别核对角色可见性与热点 |
| v98 新身份候选 | 白色原创机器人、白兔及后续明确加入的伙伴；资源和身份以实际登记为准 | 使用 `PREVIEW_*` 集合、同一稳定详情地址和 pending 状态；不影响原15件批准分母，不进入发布资格 |
| 揭晓说明素材 | 39 个 reveal PNG 及对应模块 | 新产品不使用；按文件清单移出发布并保存来源 / 审阅状态 |
| 已有真实动画 | 当前运行清单 0 | 默认全静态；不渲染假播放，不承诺变表情 |
| P01 / P02 / C01–C03 | 5 个设计参考文件，已登记原始 hash | 仅规划与身份对照，不能裁作生产 |
| 新场景构图 / 热点 | v98 桌面、平板和手机整景、逐身份热区需按最终资源实查；场景与页面批准 pending | 每视口采用完整静态合成图，关系由图内光照、承托和遮挡表达；热点只引用同版 approved 或明确 pending 的 Artwork，不叠透明角色 |
| 优化封面 | 缺独立清单 | 从 15 母图生成静态衍生物，原图原字节保留；检查轮廓 / 色彩 / alpha |
| 新动作单元 | 首页整景为静态图；未登记可用的角色独立动画 | 不加 CSS 假表情；仅当未来存在真实登记动画时才显示相应控制，不阻塞静态交付 |

现有成品 ID：
- characters：candidate-dots-20261005（v2）、candidate-grok-20261005（v2）、candidate-meta-muse-20261005（v1）、candidate-humans-20261005（v1）、candidate-animals-20261005（v1）。
- looks（均 v1）：dots-rose-glasses、dots-lilac-bucket、grok-green-cloud、grok-teal-square、muse-rose-flowers、muse-sage-reading、human-bun-yellow、human-blond-glasses、animal-white-cat、animal-gray-husky。

批准证据来自 `openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json` 和相邻 `source-snapshot.json`。它覆盖 15 个特定原图在当时图库 / 工作台呈现，不能推导当前露台、动作、下载工程或实体手机通过。本轮不扩大批准分母或重写历史。

### 7. 文件级保留、重构和退役

所有操作均是后续 apply 范围；本轮只改此 change 内规划。

| 路径 | 后续动作 |
|---|---|
| `dist/index.html`、`studio.js` | 重构首页 / 画廊 / 指南入口与共享详情路由；删 game DOM / DrawResult / reference 全局入口 |
| `dist/studio-home.js`、`studio-scenes.js` | 满屏自适应露台、desktop / tablet / mobile 构图、pending 候选热点与逐角色真实轮廓反馈；不加载透明角色 / 家具叠层 |
| `dist/studio.css` | 按 P01 / P02 重排；删除旧 Hero / topic / random / workbench 专用样式，保留适用基础控件 |
| `dist/studio-artwork-catalog.js` | 保留 15 原图数据 / 来源 / facts，移除 reveal imports / eligibility；明确 poster / scene / preview / original |
| `dist/studio-tags.js`、`studio-tag-browser.js` | 保留索引与安全查询，前台简化单文本 + 系列；无结果和清除 |
| `dist/studio-detail.js`、`studio-detail.css`、`studio-overlay.js` | 共用详情与路由恢复；去 Pet / 工程面板 / 嵌套参考弹窗，增加内联 Prompt 修改 |
| `dist/studio-prompt.js`、`studio-actions.js`、`studio-asset-loader.js` | 保留原 Prompt、复制降级、原字节下载；加语言 / 意图隔离与按需资源加载，去揭晓专用依赖 |
| `dist/studio-reference.js` | 旧独立辅助视图退出，必要文字模板能力并入新 Prompt editor；不保留 wrapper adapter |
| `dist/studio-draw.js`、`studio-fullscreen-random.js/css` | 从运行和发布退役，保留历史 |
| `dist/studio-feature-visuals.js`、`studio-reveal-visual-assets.js`、`studio-style-visual-assets.js`、`studio-appearance-visual-assets.js`、`studio-palette-visual-assets.js`、`studio-object-visual-assets.js`、`studio-runtime-config.js` | 退役 reveal 事实映射与 candidate-preview 开关，清除全部 import graph 引用 |
| `dist/assets/characters/*.png`、`dist/assets/looks/*.png` | 保留批准原图与品牌字节；新衍生文件分路径登记 |
| `dist/assets/reveal/**`、v96 场景图及群组文件 | 精确列项移出新发布树，以 v97 retirement manifest 保存 hash、来源和原批准状态；新整景资源另行登记，旧 scene files 不原位覆写 |
| `scripts/build-studio.mjs` | cache 98；校验 approved / pending 静态目录、模块与资源闭包、manifest previewOnly 子集；允许本地预览候选并报告 `deploymentReady: false`，不代替发布授权 |
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
| studio-visual-experience 旧双 Hero / game | P02 桌面宽幅构图、P01 手机竖幅与画廊 / 详情页面；同一露台的桌面 / 平板 / 手机静态整景、图像坐标热区、真实浏览器对照 |
| target-resources 目标格式 / Pet 资料 UI | 实际静态 / 变体 / 动画 / scene 用途，无证据能力不展示 |
| `verify-transparent-output.mjs` | 保留真实下载字节 / hash / 尺寸 / alpha / 内容；测试从新详情发起 |
| 原 reduced-motion、资源错误和复制降级 | 保留并补 pause reason 合并、offscreen / visibility、clipboard deny、popup blocked、404 / hash / decode 失败 |

变更后的主规范 Purpose 仍可能含旧抽卡描述。**本轮不改主规范**；另行获得 sync 授权时按这 11 份 delta 更新，并同步清理相应 Purpose；完全移除的 fullscreen-randomizer 不保留可执行要求。sync / archive 是独立后续操作，不列为本次实施默认权限。

## Risks / Trade-offs

- [v98场景或新增角色候选仍可能与原型或身份有差异] → 场景、每个新身份和页面呈现分别保持 pending；按 1440×900、768px、390×844 及 320px 实际浏览器核对，每项用户批准只覆盖被确认的具体版本与呈现。
- [静态整景不能提供独立动作] → 首页只使用固定热点打开绑定版本详情；不叠人物透明群组、不通过 CSS 改表情。只有真实动画资源可另行登记并按通用动态规则处理。
- [概念图中的重绘身份误导] → 原身份与 C01–C03 优先；P01 / P02 只按指定分工使用。
- [共享详情变成新旧双运行层] → 原详情组件直接改写，取消旧随机 / reference adapters，并检查发布目录而非仅 DOM 隐藏。
- [搜索更简洁导致历史筛选消失] → 明确 BREAKING，保留事实索引和新文本 / 系列语义，不做旧 query 转换。
- [大量 PNG 与动画拖慢首屏] → poster 按需加载、原图详情时取；实测媒体请求数 / 字节，动画仅当前一项播放。
- [dirty 工作树 / 历史来源丢失] → apply 开始时重新冻结字节清单，对授权路径逐项修改；没有 reset / clean 或宽范围暂存，保护本轮之外既有变更。
- [外部 ChatGPT 行为变化] → 官方页面手动入口和复制全文始终可用，不依赖预填成功承诺产品闭环。
- [OpenSpec 文件 done 被误当实施完成] → 每项勾选只代表相应任务证据已完成；当前状态以 `tasks.md` 和版本证据为准，用户美术确认与发布仍分别报告。

## Migration Plan

这里描述新范围接替旧运行代码的实施顺序，不提供旧产品迁移或兼容层。各阶段进度以当前 `tasks.md` 勾选及证据目录为准。

1. **A：冻结实施基线与资产合同。** 新请求进入 apply 后检查实际 HEAD / dirty 与规划是否漂移；记录具体授权文件、母图和历史证据 hash，确定当次 cache / evidence 目录。先使新发布清单与冻结历史清单职责分离。
2. **B：目标视口与场景素材。** 依据 P02、P01 分别给出桌面、平板和手机同一露台的满屏取景，记录各视口实际可见角色的版本 / 热区 / 轮廓。原15个作品的身份与批准范围保持不变；白色原创机器人、白兔等新身份以独立 `PREVIEW_*` pending 候选供本地审阅。核对真实承托、光照、疏密与热点定位；新身份、场景与页面呈现保持 pending，直至用户批准具体版本。
3. **C：一个真实作品贯穿闭环。** 用一个已批准原图完成首页热区 → 共用详情 → URL / 返回 → 复制 / 真实下载，包含键盘 / 触控及错误路径，然后扩充所有登记作品。
4. **D：完整画廊与内容能力。** 搜索 / 系列、优化封面、15 原图详情、双语、静态指南、默认折叠 Prompt 修改；接入桌面、平板和手机的完整静态场景及固定角色热点。无实际动画时保持静态，不伪造变体或单角色表情。
5. **E：退出旧运行与按需动态。** 精确归档旧 reveal / scene 资源和运行脚本，更新文档与测试图；若有实际批准的动画，再接入暂停和加载控制，没有则以隔离 fixture 验证控制器并记录生产为 0 动画。
6. **F：分开验收。** 执行内容 / 构建 / 功能测试；保存 1440×900、390×844、320 / 768 实际浏览器截图及交互证据，逐项比对 P01 / P02 和角色参考；用户美术确认仍为独立关口。

验收清单至少包含：P02 对应的桌面台阶纵深、前中后景和留白；1440×900、768px、390×844 与 320px 的满屏适配和角色可见性；完整整景中角色与露台的接触 / 光照 / 遮挡；原15个已批准身份与新增 pending 候选各自身份正确；类别只作为场景 overlay、没有 Featured；每个热区严格映射图中真实 Artwork ID/version 和轮廓；hover / 键盘焦点描边、reduced-motion 静态反馈及一次点击立即进入详情；P01 对应画廊 / 详情层级；直接 URL / 刷新 / 无效 ID、Back/Forward / Escape / 焦点、查询 / 系列 / 无结果 / 清除、语言及存储拒绝、原始 / 修改 Prompt 隔离、剪贴板 / 新窗口失败、原字节下载、变体失败原子性，以及资源失败。画廊若有真实动画，仍需验证 offscreen / visibility / 详情打开 / 手动暂停 / reduced-motion；不把首页静态图当动画或用户艺术通过。

证据写入唯一新 `design/acceptance/current-<实际日期>-v<当次cache>/`，绑定源码及资源 hash，旧 v93 / v95 不覆盖。build 通过不代表视觉通过；生成图不替代实页截图；模拟手机不代表实体手机，线上状态本轮不验收。

部署、提交、sync 和 archive 都需后续具体授权。本计划不自动发布；将来发布时保持原 Site 身份 / 访问设置。需要回退时使用另行授权的已知发布包或精确文件恢复；保留新成果和历史，不 reset / clean，不引入双版本开关。
