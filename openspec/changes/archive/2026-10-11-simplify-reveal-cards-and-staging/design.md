# Design

## Context

见 [proposal.md](proposal.md) 的动机与范围。实际基线是 `main@b84e3db203a525755a839c100ec5bca8238f3fa3`，开始时 clean，cache98；附件远端 b22c3f0 不作为回退点。Node ESM、Vite 8.3.2、OpenSpec 1.14.1 / spec-driven 保持不变，dist 同时是源码与发布树。

当前 15 件批准成品和两件独立 pending 候选均有真实静态资源；没有当前生产编辑模板、已登记变体或动画。详情壳已先打开，但 `studio-detail.js` 的 open 等待 Prompt 与原图 Promise 一起完成才启用复制/下载，原图经过完整 fetch/hash/decode，随后重复解码。证据及文件表见 [source-audit](planning/dark-gallery-20261010/source-audit.md)。本轮未跑浏览器性能实验，不能把静态调用链推断当作实测秒数。

旧 change 文档及 46/48 任务已原字节留存 [历史快照](history/2026-10-10-before-dark-gallery/README.md)。旧 3.7/8.3 未获艺术确认，不转为新版通过。初始规划只修改 change 内文件；后续用户授权素材制作和长期角色新增规范，因此增加独立候选、design/character-authoring与根README入口及本机skill。主规范和其余活动规则留待相应授权阶段，业务尚未apply。

## Goals / Non-Goals

**Goals:** 同一个静态内容源、一个角色库入口、一个 CharacterStudio 上下文；将 Original、可编辑 Template、内存 Draft、外部意图区分清楚；D01 逐区落实；两套代表模板有真实闭环与可检查的素材门槛。

**Non-Goals:** 不建立通用适配器、不读取旧项目、不做数据库或服务端、后台/模型/上传、不自动扩大原素材批准。不将原型像素作为网页或生产角色素材，不重新发散视觉方案。

## Decisions

### 1. 入口、品牌与选稿

品牌采用 **Dots**；站址为用户提供的 `https://dots.liuzhihang.chatgpt.site`。沿用 `.openai/hosting.json` 的 Site ID，不创建新站、不改访问设置。本轮未独立核实远端站址或部署版本，名称与 canonical 文案改动列入 apply，hosting 文件保留。

唯一角色库规范路由 `#/?q=&series=&sort=`，是网站唯一页面和导航入口；不提供 `#/guide` 或 Guide 导航，`#/guide` 与其它未知路由一样显示可恢复的 not-found。Artwork 使用 `#/artwork/<id>?v=<version>`，不接受或生成 `mode` 参数，也不另建 `/workspace`。打开精确获批 Template 作品后，CharacterStudio 自动按默认配置载入真实编辑模板和可视选项；首个成功像素预览就是直接编辑与导出的唯一预览。没有 Template 的作品展示完整静态详情和原作品预览，不生成编辑入口。pending Template 仍只能由外部 reviewHarness 显式启用并显示待确认状态。旧 `#/home`、`#/gallery`、随机/参考工作台路由按当前 not-found 处理，提供显式返回角色库，不添加 alias/重定向/迁移 reader。保留当前合理 Artwork 路径不是旧路径适配。

用户在 apply 中追加的 [十张身份参考](../../../design/acceptance/current-20261010-v99/identity-reference-20261010/README.md)明确 Dots 与 Grok Bot 均无手脚，补充多轮廓与可视配件标准；不自动扩大当前模板 Shape 支持。D01 决定角色库和同一面板的静态详情/直接编辑；D02 仅补手机细节。首页 banner 保留 D01 左文右群像，左侧两行大字号渐变标题为“Make It / Your Dot.”；中文Hero两行精确为“创造”/“你的Dot.”，浏览器标题为“创造你的Dot.”，右侧群像约占60%；1440px 桌面高度约440–500px。短介绍精确为英文“Pick a character. Make it yours in ChatGPT.”、中文“挑选角色，在 ChatGPT 中创作。”，Hero 不显示通用 Copy Dots Prompt 按钮。群像包含独立机器人、戴紫色耳机并系黄色领带的兔子、人物与 Meta Muse；机器人不代表Grok，Grok仍是软几何胶囊眼角色。用户补充原型 [D03](planning/dark-gallery-20261010/source-package/references/D03-hero-ensemble-20261010.png) 仅覆盖Hero标语和群像要求，不替代D01其他页面或D02手机补充。最终Hero群像插画已接入本地[资源清单](../../../design/acceptance/current-20261010-v99/cr-simplification-20261010/hero/ensemble/manifest.json)，仍待用户美术确认；它只作UI装饰，不登记为Artwork、不为插画中角色创建或授予Artwork pending/approved状态，也不进入角色卡、Studio预览或PNG导出。不得恢复旧露台、庭院、城市、台阶、实体房间或场景型长宣传Hero。文字裁决及C01–C03/批准母版优先于概念图误画。详见[prototype-decisions.md](planning/dark-gallery-20261010/prototype-decisions.md)。拒绝沿用旧P01/P02露台、黑色庭院或双工作台。

### 2. 一份 CharacterStudio 状态

在 `studio-detail.js` 重构现有壳，`studio-overlay.js` 只负责宿主、焦点和滚动，不再复制详情/编辑状态。角色身份、Original snapshot、Template binding、Draft 与 source context 由一个会话持有。没有 Template 时面板提供静态详情；精确获批 Template 在打开后自动加载，用户直接操作同一个成功像素预览，不产生第二套 View/Edit 状态、标签或 URL 模式。面板语言继承全站语言，不显示 detailLanguage 控件。可编辑作品的原图、原 Prompt、原描述及原 tags 收入只读 `.studio-original` 折叠区，不作为单独主操作。相关角色置于主预览下方，紧凑固定宽度左对齐、直接可见且不可折叠。整个 CharacterStudio 是烟色玻璃；header 轻薄紧凑、无独立背景或分隔线，与可滚动 body 分离；编辑分类 tabs 不 sticky。手机自然滚动，初次打开完整角色可见，不要求预览在整个编辑期间固定。Copy Prompt 与在 ChatGPT 中使用为主操作，Export 为次级操作；静态作品 Export 原字节，直接编辑作品 Export 最新成功 PNG，不另设重复原图按钮或 Reset/Cancel 控件。编辑区标题为“微调作品”，说明为“预览与 Prompt 随选择同步更新。”；删除长篇审阅文案，不新增强制编辑器 badge。

```text
Gallery / Direct URL
        |
        v
Studio shell
   |-- no Template --------------------------> static detail + original preview/actions
   |-- exact approved Template --------------> auto-load -> default preview -> direct editing
   |                                             |                 |
   |                                             +--> error/retry  +--> rendering/error
   |                                                               |
   +---------------------- dirty exit guard <----------------------+
                    |
          continue / discard
                    |
              Gallery restored
```

点击卡片 push 一条角色 history；Template 自动加载与选项变化不写 URL、不增长 history。来源 context 记录 query/series/sort/scroll/trigger（内存/history.state 的当前产品导航信息，不是旧 schema）。直接链接没有可信来源则回规范角色库，不假设 previous page。Back/Forward、Esc、关闭、点外部页面导航、切换 Artwork/变体均走同一个 dirty guard；确认放弃前不释放草稿、不替换 URL/身份。Back 已发生时恢复已提交的当前 history entry 并抑制递归 popstate，取消后仍在原 Studio，确认后只执行一次目标导航。站外离开/刷新用浏览器可用的 beforeunload 提示，明确浏览器关闭不能承诺保存。

不提供 Reset/Cancel 控件或恢复按钮；Draft 选项可由用户继续操作回到原始配置，脏状态仍按配置/额外意图与基线比较，离开时使用原有 dirty guard。网站语言切换时面板继承全站语言，保持选项、revision 和用户自由文本不变。统一 Prompt 由静态作品的原 Prompt 或编辑作品最近成功配置 Prompt 加一个额外要求文本框的内容组成；额外要求只用于外部 Prompt，不进入 Draft、预览或 PNG。渲染中/失败时保留上一成功像素并禁用 PNG Export，Prompt 基础内容只对应最近成功配置。所有操作与关闭/返回至少44px；Copy Prompt、ChatGPT 为主，Export 为次级，命中区域与可见矩形一致。导出不等于保存草稿或清除脏状态。

主预览、外观控件和操作按同一列纵向排列；相关角色常显在主预览后，以紧凑固定宽度左对齐、不采用折叠 disclosure。面板 header 轻薄无独立背景或分隔线，固定于整个烟色玻璃面板；body 独立滚动，编辑分类 tabs 不 sticky。操作至少44px并按 Copy Prompt/ChatGPT 主操作、Export 次级操作呈现；滚动时选项、完整角色和操作不得被遮挡。关闭/返回维持语义、44px 命中区与原 dirty guard。手机自然滚动，初次打开显示完整角色，但不要求预览全程固定。需在 320×700、390×844、768×1024、1440×900 实测操作、聚焦、滚动与返回。

### 3. 静态内容模型与能力

继续使用显式 ES module 静态清单；不为模型名引入 Provider 或 API。新增 `studio-edit-templates.js` 清单、`studio-draft.js` 会话及合法性、`studio-renderer.js` 配方合成；仅在打开有适用资格的 Artwork 时自动按需加载。字段合同见 [content-model.md](planning/dark-gallery-20261010/content-model.md)。

`Character / Artwork / Asset / Prompt` 保留职责；`Template` 指定真实图层、遮罩、默认值、能力与适配规则；`Draft` 绑定原作品及模板版本、选项和 revision，仅当前面板会话内存。原始八类事实不因编辑更新。角色 UI 显示名去掉重复系列后缀，Meta Muse 显示为 Muse；series 作为同一行描边标签，身份ID与seriesId保持独立。能力是独立可组合的声明：view-only 基础操作、真实 variants、合格 local-edit、外部 chatgpt-intent；tag 存在不授予编辑能力。

五系列继续 Dots / Grok Bot / Meta Muse / People / Animals。原 15 件保持 ID/version/字节/批准；白机器人和白兔保留 PREVIEW_* 和同一受信任详情路径，待确认，不默认进入角色库/搜索/tags。旧场景资源退出运行清单但保留来源及历史。新 Template 候选也是显式 pending，不能用“可渲染”自动启用公开编辑。审阅同一组件的候选模板需要明确 review fixture/harness 与 pending 标识，不把 fixture 发布进目录；只有该外部 harness 可在直接打开后加载 pending Template。

### 4. 两套受控模板先闭环

这里的两套是编辑试点数量。Gallery首批目标为五系列各4件，共20件独立完整作品：原有每类3件保持，另生成每类1件新外观（黄色三角贝雷帽Dots、珊瑚水滴Grok、薰衣草灯笼Muse、铁锈夹克人物、可可棕熊）。[候选清单](planning/gallery-expansion-20261010/README.md)记录精确输出和状态，未批准时不计入默认图库；20不是长期上限。这五件不绑定球形编辑模板，也不因戴帽/持物而获得对应编辑能力。

首批模板固定为 Dots 蓝色短绒无肢体、耳机基准 `candidate-dots-20261005@v2` 和 Grok 紫色软几何胶囊眼 `candidate-grok-20261005@v2`。各一套固定形状，Shape 暂无切换；每套 2 色、2 眼型、无/一副眼镜、无/一种头饰。Dots 耳机与眼镜明确互斥，12 合法配置；Grok 帽子与眼镜专门适配，16 合法配置，共 28 配方工程检查。详见 [template-capability-matrix.md](planning/dark-gallery-20261010/template-capability-matrix.md)。此为拟制作集合，当前 0 套 ready。

图层必须新制或经明确重新审查：真实无配件基底、主体颜色区域/保留材质的光影、眼型、配件前后层与遮挡 mask。同一画布尺寸/固定透视/锚点/层序；无肢体角色不出现抓握装备。不能用原成图裁帽、CSS hue-rotate 或历史测试截图代替生产模板。默认配方在外观上重建原配置，渲染输出仍是新 Draft，不要求与原 PNG hash 相同；默认重建、新色/眼型/配件和模板范围须分别艺术确认。现有扁平图只作 Original 与身份对照。

独立图层可在可信素材清单中登记固定 placement：精确匹配的画布尺寸、canvas anchor、有限且受画布尺寸约束的 offset，以及围绕固定 pivot 的 scale、shear 与 rotationDegrees。scale 每轴限制在 `[0.25, 4]`，shear 每轴限制在 `[-2, 2]`，旋转限制在 `[-45, 45]` 度；缺失 shear 归一化为 `[0, 0]`。矩阵先由 scale 与 shear 组成，再绕 pivot 旋转并应用 offset。该映射仅用于制作时的已登记图层适配，不成为用户可操作的变形能力；renderer、透明导出及选项缩略图共用同一映射，规范化参数参与 recipeKey。素材字节、版本与布局均可追溯，布局变更后必须重新检查所有受影响组合，不能通过裁掉穿帮部分伪造适配。

合法性校验先于 state commit。冲突提交保留原配置，明确原因及建议替换，用户确认才一次应用合法新配置；无候选项不展示空 Tab。未来 Shape 只能显式允许的 Template 间切换且重新校验选项，不能拉伸成图或默默丢配件。

#### 可视素材选择（2026-10-10 apply 中用户补充）

眼睛、眼镜、配件使用当前模板真实图层缩略图，颜色使用色块；文字仅作辅助。一级分类由 Template 能力数据组织为 Appearance（外观）、Face（五官）、Clothing（服装）、Accessories（配饰）、Objects（物品），只显示真实非空能力。当前两模板只有 Appearance/Color、Face/Eyes、Accessories/{Glasses,Accessory}，option field key 与 12/16 recipe 不变。未来形状、材质、发型、嘴巴、表情、衣物和物品只有在 Template 有真实资源与规则时才能显示，不为本轮新增能力。tabs 只切换选择组，不是详情/编辑模式；使用 roving tabindex，支持 ArrowLeft/ArrowRight/Home/End，切换时保留 Artwork/Draft/session/revision。选择后为同一预览启动渲染，预览与配置 Prompt 随成功渲染同步更新；渲染中/失败时不将新选择描述为成功。缩略图使用真实层、统一纯色背景且无灰色方块底；界面几何图标用居中 SVG/CSS，不替代真实素材。其它焦点、键盘、冲突、资格和按需加载要求保持不变。

用户提供的 botpfp 手机图只裁决选择控件的可视化，不替换 D01 的整体方向，不引入随机、撤销、尺寸、背景、SVG 或额外角色能力。实际附件与摘要见 [可视选择裁决](../../../design/acceptance/current-20261010-v99/visual-controls.md)。

### 5. 一份渲染配方与导出

使用浏览器 Canvas 2D 完成固定图层合成；无需 WebGL 或旧 compositor。主体颜色仅作用到模板标明的区域，保留细绒/光影，眼睛/配饰各独立。顺序从 rear accessory、body/material/shading、eyes、glasses rear/front、accessory front 到模板指定的遮挡；具体 z-order 与 mask 必须来自资源合同，不能所有角色硬套同一坐标。

每次合法改动生成递增 requestedRevision。渲染任务捕获 sessionId + Artwork/version + Template/version + recipe hash + revision；只有完整成功且仍当前的 revision 可原子替换 preview 与 renderedSnapshot。导出使用该不可变 snapshot 的同一个完整透明像素面（预览按 CSS 缩放），避免两个算法或二次配方漂移；导出点击时冻结版本。新 requestedRevision 未就绪/失败则禁用新导出并显示错误，旧成功画面保留但明确不是当前选项结果。toBlob 期间再修改，只能下载点击时冻结的版本或明确取消，不读可变 Canvas。

页面中的透明素材由深色画布或纯色缩略图底衬托，不显示棋盘网格；CharacterStudio 使用半透明烟色玻璃，让背景轮廓透出。支持时使用背景模糊；浏览器不支持 blur 或用户启用降低透明度时，降级为不透明且对比度合格的实底。底色与玻璃只属于 CSS，不进入角色像素，导出无 UI、玻璃、底座或独立地面影。离线素材检查可以使用深浅底，不能把检查底加入网站素材。输出尺寸来自 Template（计划 1024×1024，制作验收锁定后才显示），PNG alpha 与实际改动必须回读。只读原始资料置于 `.studio-original`；唯一 Export 控件在无 Template 时读取登记原始 Blob 并原样输出，在直接编辑时输出成功冻结的透明 PNG，不使用 Canvas 重绘原 Artwork。输出文件名包含对应资源或模板/作品及 revision，不称为已批准作品或 Pet。

### 6. 渐进加载与有界资源生命周期

点击同步挂载同一壳，填入已知目录元数据、Prompt 和已见封面；Copy Prompt 与 ChatGPT 主操作、次级 Export 均不等待高清图片。列表用 256px thumbnail，详情按显示/DPR选 512/1024 预览，原始资料只在显式展开 `.studio-original` 时按需读取。有精确获批 Template 时自动按需加载默认配置与实际选项，以成功模板预览作为唯一可编辑像素面；无 Template 作品保持静态详情。当前仅 256 poster，新增 display preview 是明确素材任务。高清失败局部重试，保留 thumbnail/文本。相关角色紧跟主预览、紧凑固定宽度左对齐，并仅在该区域可见时按需加载；模板图层与真实动画按资格和可见区域后置，不启动全图库/全部配件预取。

资源键包括 asset id/version/hash、purpose、尺寸；版本化同源路径，路径只从可信清单解析。构建校验 hash/MIME/尺寸/alpha/依赖，普通预览不执行原图全校验。缓存分开管理 display/editor/original；初始设计预算为最大 4 个并行图像请求、后台最多 1，decoded 预算 64 MiB，闲置最多 16 项，按 LRU 淘汰零消费者项目；这些是起点，实际实验调整但不改行为合同。正在被当前视图/导出持有的 lease 不淘汰，若 pin 后越限则禁止额外预取并报告内存峰值。

同 key 共享进行中 Promise 与引用计数；消费者取消只释放自己的 lease，最后消费者离开才 abort。失败/abort 移除缓存项，重试可再请求。Blob URL 仅在最后引用释放且淘汰/关闭时 revoke，ImageBitmap.close 与画布内存、监听器一起清理；异步解码即使不能真正取消，结果也须检查会话令牌后回收。下载租约不因面板切换提前 revoke；由下载完成/超时安全清理策略释放。不得更改 Sites 受众或把私有响应改公共缓存。

性能合同：壳/目录已载入的参考环境 click→panel-mounted 目标 ≤100ms，>200ms 阻塞；高清另测，冷/热各至少5次，原始样本与中位数，20次切换后的请求/URL/bitmap/内存记录。不是现场 INP，也不是所有设备保证。

### 7. 实施顺序与文档契约

后续增加角色遵循[稳定制作规范](../../../design/character-authoring/README.md)与[组件契约](../../../design/character-authoring/components.md)，复用静态目录、查询、卡片、Studio及Prompt动作。当前characterId=series slug的派生应在apply中解耦成真实身份与seriesId，保留现有Artwork ID/version及批准范围，不引入旧模型迁移。测试保留冻结15原图的子集检查，当前总量从实际合格目录求值，不换成固定20；隔离新增Artwork fixture证明只加数据可贯通共用流程。无Template Artwork显示完整静态详情，精确获批 Template 在打开后直接进入同一预览编辑流程。

apply 后先冻结 v98 运行/原图/历史、测旧链路基线并更新活动规则；并行制作 Dots/Grok 素材与重构唯一角色库/CharacterStudio/加载器。再集成模板、Draft、渲染与导出，最后做联合验收。详细依赖、文件路径与每项完成条件见 [tasks.md](tasks.md)。材料未就绪时可完成静态界面和独立性能任务，但本地编辑与整体完成不能勾选，不能以全站 Prompt-only 替代承诺。

2026-10-11 UI CR 进一步精修 Hero 文案、CharacterStudio 玻璃 header、相关角色紧凑布局、主次操作、编辑标题与能力分类、缩略图背景和图标；旧任务 1–10 的勾选为历史记录，第 11 组新增验收保持未勾选。修改不增加模板能力、不改变 Artwork/Template 的 pending 或公开资格，也不批准页面艺术。

## Risks / Trade-offs

- [扁平成品缺失拆层/隐藏区域] → 单独制作两套候选，记录 gap 与用户艺术确认；不抠历史图凑数。
- [深色隐藏黑帽/黑猫边缘] → UI preview 检查深浅底，保留原像素与材质；实页对照，不全局染紫。
- [浏览器返回与脏草稿竞态] → 单 guard、一次 pending navigation、乱序/取消 E2E；不堆第二工作台。
- [默认模板重建与批准原图不完全一致] → Original 永远原文件，Draft 标识明确；默认重建纳入新素材艺术验收。
- [新版规范与未 sync 的旧主规范并存] → 当前 delta 明确 MODIFIED/REMOVED 对齐；规则更新在 apply，主规范 sync 另行授权，历史不删除。
- [资源缓存改善未能改善真实设备体验] → 报告具体浏览器/网络/设备，仅已测范围通过；实体设备与部署独立。

## Migration Plan

无旧产品数据迁移。apply 按精确文件清单逐项替换活动代码/资源引用，退役源字节与历史清单保留，不能清空 dist。确定新的 cache revision（建议99，仅在 apply 基线再次核对后锁定）和新 acceptance 目录，HTML/CSS/模块/catalog/报告一致，不覆盖 v96/v97/v98。若需要回退，仅在用户授权下按冻结清单恢复本次路径，不能 git reset/clean 或回退到远端旧提交。

主规范 Purpose 中的旧产品文字已列入 spec-alignment 的后续 sync 清理清单，本轮不直接改主规范。用户已授权本地 apply，按 tasks 执行构建、浏览器和素材验收；不提交、不部署、不 sync/archive。严格 OpenSpec 通过只代表规范结构有效，不替代业务验证或用户艺术确认。
