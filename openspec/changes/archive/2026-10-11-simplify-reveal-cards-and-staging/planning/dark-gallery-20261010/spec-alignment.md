# 当前规范标题映射与替代关系

## 对齐基线

本 change 沿用活跃 ID `simplify-reveal-cards-and-staging`。对照当前 `openspec/specs/` 的 11 个 capability、54 个准确 Requirement 标题：39 项 `MODIFIED`、15 项 `REMOVED`，没有未处理的主规范标题；新增行为共 17 项 `ADDED`（其中 `bounded-character-editing` 为唯一新 capability）。所有 `MODIFIED` / `REMOVED` 标题均逐字对应当前主规范，不把历史 delta 标题伪装为主规范 requirement。

两套已冻结历史规范 `character-creation-modes` 与 `modular-2d-composition` 不在当前 11 份主规范中，只存在于 `historical-runtime/immersive-home-v98/pre-refactor-specs/` 及其历史归档副本。本 change 不复活 capability，也不沿用其“所有运行时编辑 / Canvas 都必须退出”的过宽边界。当前 `character-contact-and-motion` 的身份与接触规则改为：原 Artwork 不变，只允许资源、合法组合、revision 与批准范围齐全的受控 Template 在隔离 Draft 中编辑；原图下载继续返回登记原字节，Draft 可由本地受控 renderer 导出透明 PNG。旧随机组装、旧 schema / reader、旧 storage / route 兼容仍退出，不迁移旧项目。

## 当前主规范逐项映射

| 当前 capability | `MODIFIED` 的当前准确标题 | `REMOVED` 的当前准确标题 | 新增行为 |
|---|---|---|---|
| `artwork-catalog` | `完整作品必须拥有稳定的资源与提示词关联`；`事实特征不得与未来创作要求混淆`；`发布资格必须同时满足内容资源与批准边界`；`作品资源必须来自可校验的登记引用`；`同角色变体必须由明确关系与真实作品构成`；`扩充作品与标签不得要求组件适配`；`所有结果操作必须使用同一冻结作品快照` | `Artwork 必须记录八类事实并派生有效揭晓卡片`；`Artwork 独立登记六类揭晓说明视觉` | 八类 typed facts 保留为详情和搜索数据；卡片派生及线索图退出。首批静态 Gallery 目标为20件（五系列各4件：冻结15件每系列3件，另每系列1件新候选），20不是永久上限；5件新候选须逐件完成内容和美术批准才进入默认目录。计数只包含唯一完整 Artwork，不含 Draft、色卡、pose、截图或重复图。pending Artwork 普通详情只读，pending Template 只能进显式审阅 harness。 |
| `catalog-tags` | `发布资格和来源必须独立于标签名称`；`当前确认状态必须绑定实际批准范围`；`已发布 Artwork 必须按事实标签和特征建立可扩展目录`；`画廊搜索必须组合标签、事实特征和文本条件`；`展示标签必须与搜索索引和规格分离` | `首页专题必须进入图库查询且不固定标签架构` | 保留五个系列；角色库使用单文本、单系列与 Curated/Name 排序。详情精选事实标签为静态文本，不保留旧点击标签多维过滤。 |
| `character-contact-and-motion` | `已发布完整作品必须符合身份和画面中的真实接触关系`；`角色 Artwork 和透明导出必须保持真实 alpha`；`静态图片不得冒充角色动画或未制作动作` | — | 支持真实静态眼型 Draft，但不自动获得已批准表情变体或动画资格；已有真实动画仍按资源清单展示，独立暂停条件叠加生效。 |
| `character-families` | `首批视觉身份必须保留差异且不构成固定家族模型`；`原创身份、来源和角色特征必须能分别核对`；`美术确认必须绑定明确 Artwork 和资源范围` | — | 目标是每个系列有4个独立静态外观，不形成永久固定上限；现有15件冻结基线和新增5件逐件待制/待审候选分别记录。Dots / Grok / Muse / 人物 / 动物身份边界维持；模板、Draft 与页面美术批准分别跟踪。 |
| `character-visual-acceptance` | `作品资源工程状态、美术批准、目标验证和发布状态必须分别记录`；`页面和资源验收必须绑定本次实际版本与观察范围`；`取消范围和历史缺证不得转换为验收通过` | `特征卡视觉材料必须可追溯且达到展示质量`；`候选线索只能进入明确的审阅预览` | 验收 D01 唯一主稿、D02 指定补充；对 Dots 12 与 Grok 16 个计划合法组合逐项真实预览、导出回读并按组合范围取得美术确认。 |
| `family-navigation` | `关闭作品详情必须恢复图库浏览位置和筛选`；`全站弹窗必须由单一活动 overlay 协调`；`新页面与筛选必须适配窄屏和平板` | `主导航必须提供首页、画廊和灵感游戏` | 根路径即唯一角色库，指南独立轻量访问；有效 Artwork 直链在同一 Studio 支持 View/Edit。旧 route、schema、storage 不提供 alias、迁移 reader 或持久化 Draft。dirty 只由配置/外部意图偏离基线决定；导出不清洁 Draft，切 View/Edit 保留内存 Draft且不 guard，离开作品才触发可取消确认。 |
| `fullscreen-randomizer` | — | `抽取必须从有限设计的完整 Artwork 池选定一张作品`；`卡片必须按顺序揭晓同一作品的真实特征`；`抽取状态必须处理资源、取消、去重和重启`；`弹窗和灵感游戏必须共用抽取模型与结果`；`揭晓特征、作品图、Prompt 与下载必须绑定同一快照`；`随机容器必须保持简洁操作并在结果后允许扩展条件`；`特征卡必须简洁表达实际线索且不提前展示完整成品` | 随机、揭晓及其独立运行状态彻底退出；历史素材、源码、来源和验收只留历史，不迁移 DrawResult。 |
| `reference-creation` | `参考图入口只提供描述与模板辅助`；`模板必须使用条件式参考图要求`；`ChatGPT入口应携带当前Prompt并由用户发送`；`复制和快捷打开失败必须可恢复` | — | 原作品 Prompt、最近一次完整成功渲染的配置 Prompt、外部二创意图分离；官方 `https://chatgpt.com/?prompt=...` 携带同一选中 Prompt，由用户发送。空 replace 不等于 remove；未成功 requested revision 不进入当前配置 Prompt。 |
| `studio-creation-experience` | `作品详情必须直接提供实际图片及带走操作`；`详情变体必须原子切换已发布作品版本`；`详情信息层级必须优先作品与直接操作` | — | 首屏先出现封面、元数据和可用操作；展示高清预览、Template 图层、原图下载分层；原图与展示衍生图不混用。无合格变体时隐藏变体区；稳定标题焦点不造成正文跳动。 |
| `studio-visual-experience` | `首页只能承诺真实存在的作品发现能力`；`新产品页面必须在桌面和指定模拟视口可读可操作`；`发布静态页面资源必须与作品清单版本一致` | `首页必须保留图 1 的品牌、构图和轻盈氛围`；`首页、画廊和游戏必须分别呈现各自的真实任务` | D01 深色角色库为唯一主稿；首页 banner 保留左文右群像，左侧两行标题更新为“Make It / Your Dot.”（中文“创造 / 你的 Dot。”），群像包括机器人、戴耳机并系领带的兔子、人物与 Meta Muse，1440px约440–500px高。机器人为独立身份，Grok仍为软几何胶囊眼角色，Dots/Grok无手脚；短介绍文案的240px空间建议不限制整体banner。D01暗色展示台/微光仅进入单独登记的待审UI Hero插画，不作Artwork，也不为图中角色授予Artwork状态或作为编辑/导出像素；不恢复旧露台/庭院/城市/房间等真实场景或独立宣传首页。D02仅补手机指南外的缺项；品牌Dots，界面EN/zh-CN。显式登记的pending Artwork可通过可信详情只读查看，但不得进入默认角色库、搜索、标签或公开Edit；`manifest.files`精确匹配`dist/`闭包，`previewOnlyFiles`是闭包中的pending文件子集，含pending时`deploymentReady: false`，不声称这些文件已从Sites目录物理隔离。 |
| `target-resources` | `资源类型与动态能力必须如实区分`；`目标格式资料必须记录来源端版本与验证状态`；`普通PNG不得标为已验证的Dot或Pet安装包`；`本期不得制作或开放未经授权的目标包`；`页面底色作品背景与目标alpha必须分开` | — | 下载原图不重绘；Draft 导出是独立静态透明 PNG，不继承 Artwork、动作、动画或 Pet 资格；深色画布、烟黑玻璃和棋盘格仅属 UI。 |

## 唯一新 capability

`bounded-character-editing` 定义 Template 能力清单、合法选项及冲突、身份边界、隔离内存 Draft、Reset / Cancel edits、dirty 基线、请求与成功渲染 revision、透明 PNG 导出和外部修改边界。首批只规划 `candidate-dots-20261005 @ v2` 与 `candidate-grok-20261005 @ v2`：Dots 12 个、Grok 16 个合法组合都必须通过实际同一 Studio 预览、透明 PNG 回读和组合范围美术确认。这两套编辑试点及28个配方独立于20件静态 Gallery 目标，不能以 Draft、色卡、pose、截图、重复统计充数。新增静态 Artwork 不必绑定 Template；只有实际完成资源制作、工程登记和逐件批准后才进入默认 Gallery。两张候选整图不证明已有图层；当前没有公开可用 Template，素材和美术缺口不得以 Prompt-only 代替完成。

## 被替代的旧 change-only `ADDED` 标题

下列标题仅存在于 2026-10-10 修订前的活动 delta，并非当前主规范标题；已从新活动 delta 移除，故不对它们伪用 `MODIFIED` 或 `REMOVED`。旧文本原字节保存在 `history/2026-10-10-before-dark-gallery/specs/`。

| 旧 delta capability | 已移除的旧 `ADDED` 标题 | 当前承接或裁决 |
|---|---|---|
| `artwork-catalog` | `完整作品必须在静态目录中关联稳定资源与基础 Prompt` | 并入当前主标题 `完整作品必须拥有稳定的资源与提示词关联` 和 `作品资源必须来自可校验的登记引用`。 |
| `artwork-catalog` | `已发布作品与首页场景必须分别满足资源和批准条件` | 并入 `发布资格必须同时满足内容资源与批准边界`；场景审批对象退出。 |
| `artwork-catalog` | `详情操作必须绑定同一 Artwork 资源版本` | 并入 `所有结果操作必须使用同一冻结作品快照` 与详情资源规范。 |
| `artwork-catalog` | `静态目录必须区分身份、作品、资源与场景摆位` | 场景摆位删除；Artwork/Asset/Template/Draft 的静态关系见 content-model 规划，Template/Draft 行为由新 capability 定义。 |
| `artwork-catalog` | `Pending preview 与已发布目录必须分离` | 并入 `发布资格必须同时满足内容资源与批准边界`；pending 普通 View 只读，Template Edit 仅显式 harness。 |
| `artwork-catalog` | `修改意图只影响待复制 Prompt` | 被真实 Template Draft 和 ChatGPT 外部意图边界取代，见 `bounded-character-editing` 与 `reference-creation`。 |
| `artwork-catalog` | `维护者可用静态资源和目录清单扩展内容` | 并入 `扩充作品与标签不得要求组件适配`、`作品资源必须来自可校验的登记引用` 与静态发布版本规则。 |
| `catalog-tags` | `详情标签必须是少量静态的真实描述` | 并入当前主标题 `展示标签必须与搜索索引和规格分离`；标签不再点击展开多维查询。 |
| `catalog-tags` | `画廊文本搜索与系列筛选必须使用明确的合取语义` | 并入 `画廊搜索必须组合标签、事实特征和文本条件`，把实际产品收敛为文本 AND 单 series。 |
| `catalog-tags` | `首页场景角色必须引用已登记作品` | 删除首页场景、热区及场景角色引用。 |
| `character-contact-and-motion` | `场景热区必须稳定对应完整静态图中的可见角色`；`首页轮廓反馈只能描出静态角色的真实边缘` | 场景与热区从视觉方向中移除。 |
| `character-contact-and-motion` | `角色动画必须由真实文件和用户操作提供`；`所有活动暂停原因必须独立生效` | 动画真实性并入 `静态图片不得冒充角色动画或未制作动作`；暂停条件作为其场景保留，不新增重复 requirement。 |
| `character-visual-acceptance` | `页面视觉验收必须遵循指定原型分工和角色身份` | 由新的 `原型裁决必须分别遵循 D01 主稿与 D02 补充稿` 精确承接。 |
| `character-visual-acceptance` | `缺少生产资源时必须记录缺口并保持待验收` | 并入资源/批准状态 MODIFIED 标题及代表 Template 验收要求。 |
| `family-navigation` | `主导航必须提供首页画廊和创作指南` | 由 `角色库必须作为唯一首页` 与唯一轻量指南入口承接。 |
| `family-navigation` | `作品详情必须具有可直接打开的稳定地址` | 由 `角色库与作品详情必须使用明确的新路由` 承接。 |
| `family-navigation` | `首页和画廊必须共用单一活动详情` | 并入当前精确主标题 `全站弹窗必须由单一活动 overlay 协调`。 |
| `family-navigation` | `静态角色页面必须适配窄屏和平板` | 并入当前精确主标题 `新页面与筛选必须适配窄屏和平板`。 |
| `reference-creation` | `创作我的版本必须默认保留当前作品`；`修改意图必须与作品数据和输出资源隔离` | 由同一 Studio 的 View/Edit 状态、隔离 Draft 与外部意图合同取代。 |
| `reference-creation` | `创作指南必须是轻量静态外部创作说明` | 由 D02 补充的双语轻量指南要求承接。 |
| `studio-creation-experience` | `首页与画廊详情必须直接提供真实作品及操作` | 并入当前主标题 `作品详情必须直接提供实际图片及带走操作`。 |
| `studio-visual-experience` | `首页必须呈现单一阶梯式共创露台`；`场景角色必须以稳定热区响应指针键盘和触控` | 删除阶梯露台、场景、角色热区与对应交互。 |
| `studio-visual-experience` | `画廊必须使用统一浅色开放网格` | 由 D01 深色数字画布与角色网格方向取代。 |
| `studio-visual-experience` | `界面和Prompt必须支持英文与简体中文` | 由新标题 `界面和操作提示必须支持英文与简体中文` 承接，默认英语。 |
| `studio-visual-experience` | `首页主操作必须对应已登记作品与画廊` | 并入 `首页只能承诺真实存在的作品发现能力`。 |
| `studio-visual-experience` | `单场景和静态页面必须按目标视口重排` | 并入 `新产品页面必须在桌面和指定模拟视口可读可操作`；旧场景布局已退出。 |
| `target-resources` | `页面场景与原图下载必须保持资源边界` | 并入当前主标题 `页面底色作品背景与目标alpha必须分开`：保留原图原始字节，允许 Draft 独立本地渲染。 |

## 关键行为裁决

- OpenSpec CLI 1.14.1 对 `MODIFIED` requirement 的 Scenario 标题执行严格 diff；未提供逐条移除 Scenario 的语法，改名会被视为删除旧标题并新增新标题而阻断 change 校验。因此保留现有主规范的 Scenario 标题作为稳定对齐锚点，正文按本次方向重写：旧随机、旧上传入口、浅色卡片和实体场景等标题只用于验证旧行为已退役或由新 Gallery / Studio / 外部 ChatGPT 操作承接，不代表旧功能继续存在。整个旧 requirement 废弃时仍以精确主标题 `REMOVED` 并写迁移原因。

- 首选视图是角色库，页面方向只有 D01 主稿；D02 是手机补充，不能覆盖 D01 已有结构。D01首页 banner 保留左文右群像、左侧两行新标题“Make It / Your Dot.”（中文“创造 / 你的 Dot。”），右侧约60%群像并约440–500px桌面高度；群像兔子戴紫色耳机并系黄色领带，机器人独立于Grok，Dots/Grok无手脚。用户补充原型 [D03](source-package/references/D03-hero-ensemble-20261010.png) 仅更新Hero标语和群像，不覆盖D01其他页面或D02手机补充。240px只作为短介绍文案区的空间建议，不是banner高度上限。最终Hero插画已接入本地，但仍待用户美术确认；它仅是UI装饰，不进入Artwork、卡片、Studio或导出，也不为插画人物授予Artwork状态；不恢复独立宣传首页或真实场景环境。
- View/Edit 是同一 CharacterStudio：View 显示登记原作品；Edit 显示最近一次成功渲染 Draft。普通 View/Edit 切换保留内存 Draft，不触发离开确认；只有配置或外部意图偏离基线才 dirty，导出不等于保存/clean。Cancel edits 清回 Template 默认值并返回 View；Reset 清回默认值并留在 Edit。切 Artwork、关闭、Back 或导航离开才触发可取消 guard。
- 未适配 Artwork 不展示伪 Edit 入口；直接请求 Edit 显示未适配提示并停在 View。pending Template 不由普通可信详情自动编辑，只能在明确审阅 harness 使用。
- 显式登记的 pending Artwork 可通过受信任详情地址在同一 CharacterStudio 只读查看并显示待确认状态，不进入默认角色库、搜索、标签或公开 Edit。静态 manifest 精确列出 `dist/` 文件闭包，`previewOnlyFiles` 是其中 pending 文件的子集；闭包含 pending 候选时构建报告标记 `deploymentReady: false`，这表示本轮发布未就绪，不表示候选已从 Sites static.directory 物理排除。
- 普通查看先显示封面、元数据与操作；展示预览、原图下载、Template 图层和相关推荐分层按需。普通 View 不获取完整原图、不等待原图 SHA。去重请求的消费者可独立取消，过时回调不得覆盖新/重开 Studio，对象仅在不再引用时释放。
- Draft 只接受真实图层、基底与已声明合法组合；unsupported choices 不静默丢弃。preview 与 export 使用同一 Artwork 基线、Template/recipe revision 和选择；requestedRevision 未成功渲染时禁导出，不以旧像素冒充成功。原图下载原字节且不重绘；Draft 导出独立透明 PNG，不自动登记为 Artwork/动作/动画/Pet。
- 新 Character 与完整 Artwork 通过共享 schema、资源和清单进入通用卡片、详情、搜索及 Prompt，不增加角色专用页面或角色条件分支。静态内容无需 Template；只有显式绑定并完成适配/审批的作品才显示 Edit。首批五个新增静态候选按每系列一个制作并逐件审批；Gallery 数量按唯一完整且已批准的 Artwork 动态计算，15是冻结基线、20是首批目标，二者都不是永久上限。
- 首批模板基准候选为蓝色耳机 Dots v2 和紫色软几何 Grok v2；所有计划合法集合 12/16 项须实际闭环，候选整图不证明可编辑。两套模板和28个配方独立于20件静态 Gallery 目标，不能使用Draft、色卡、pose、截图或重复统计凑数。材料/工程/美术批准未齐时明确阻塞，不能改成 Prompt-only 并宣布完成。
