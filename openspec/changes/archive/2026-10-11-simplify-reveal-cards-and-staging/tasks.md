# Tasks

2026-10-10 暗色角色库 / CharacterStudio 重构实施清单。**用户已显式调用 openspec-apply-change，本轮正在本地实施；仅已勾选任务完成其条件。** 用户随后明确授权由Codex根据参考图制作素材；[首批素材试作](planning/material-production-20261010/README.md)已提供两套基底/外观候选，属于第2组部分准备，不等于图层、模板或页面完成，也不要求用户补交生产素材。网站apply已获授权，素材与页面艺术批准仍单独保持pending。旧 v98 的46/48任务及两项未完成美术确认原字节留存于 [历史快照](history/2026-10-10-before-dark-gallery/README.md)，不继承勾选。任务依据 [design](design.md)、当前12份delta和[完整验收计划](planning/dark-gallery-20261010/acceptance-plan.md)。

> **2026-10-11 本轮确认覆盖：** 用户已确认当前发布范围：24 件 Artwork 均获批公开；2 个精确 Template 版本、共 28 个合法组合均通过工程与美术确认；Hero 插画获批，仅作为 UI 装饰。当前确认范围没有 pending 项，未来新作品、变更版本或能力仍须各自取得相应批准。本轮已另获用户明确授权 Sites 发布、代码提交和 OpenSpec 归档，因此本段及后文的“本地实施/发布未授权/美术仍 pending”只记录当时状态，当前发布按本说明执行。7.4 的复选框保持未勾选，待审批记录代理完成精确范围登记；不得把历史任务勾选改写为本轮批准证据。

## 1. Apply 基线、活动规则与性能基线

- [x] 1.1 确认本轮apply授权后回读HEAD/dirty、当前change和原型校验和，冻结本次允许路径及15原图、pending和历史hash；完成条件：新baseline明确保护清单，外部dirty未覆盖，不checkout旧远端。
- [x] 1.2 为新实现锁定统一cache（建议v99，先核对无冲突）和独立acceptance目录，更新AGENTS.md、DESIGN.md、.agents/rules/design.md、README.md、design/studio-visual-interaction-system.md当前合同；完成条件：活动文档不再要求露台/纯Prompt/全面禁Canvas，hosting/OpenSpec配置/依赖版本不改，旧证据不覆盖。
- [x] 1.3 在v98当前浏览器记录click→panel→metadata/actions→preview时间线及原图/解码/下载请求；完成条件：冷/热各≥5原始样本、环境/缓存/字节和视频入新基线，不把审计推断写成耗时结论。
- [x] 1.4 修订scripts/build-studio.mjs及verify-publish-inventory.mjs维护增量闭包，准备逐路径退役清单；完成条件：孤儿/缺文件/越权pending负例拒绝，dist不整体重建，原图及历史基线独立保持。

## 2. 模板与多外观资源制作（可与第3–4组并行）

- [x] 2.1 在新素材记录中锁定candidate-dots-20261005@v2与candidate-grok-20261005@v2基准、模板画布和12/16合法配置；完成条件：每个拟开放选项有具体gap/来源/输出路径，Shape固定，不把历史bare/wink当已批准图层。
- [x] 2.2 制作Dots无耳机无脸主体、颜色mask及材质/光影层到assets/templates/dots-orb-v1；完成条件：真实完整隐藏区、短密绒、无肢体，alpha/尺寸/hash登记，默认身份并排审阅并保留pending。
- [x] 2.3 制作Dots两眼型、round眼镜前后层/遮挡及耳机前后层；完成条件：默认重建、摘耳机、新眼型和无耳机眼镜接触正确，耳机+眼镜4种冲突不列合法；每层来源与检查图齐全。
- [x] 2.4 制作Grok软几何主体、颜色mask/光影与两组成对胶囊眼到assets/templates/grok-orb-v1；完成条件：无屏幕脸/毛绒/肢体，原紫色及mint变化不染眼睛，alpha/版本记录齐全。
- [x] 2.5 制作Grok round眼镜/soft cap前后层与交叉遮挡；完成条件：无帽基底完整，帽子+眼镜为真实适配而非通用贴图，16合法配置所需文件全可读，缺口不得静默删选项。
- [x] 2.6 制作首批作品的512/1024详情display preview（assets/previews），保留/新增256 poster；完成条件：现有15件及新5件逐件登记实际尺寸/字节/hash/用途、完整轮廓与色彩对照，15张原图字节不变，新作逐件候选/批准状态准确，preview不充当export layer。
- [x] 2.7 交付两模板基底、材质、眼型和配件图层的身份/素材初审；完成条件：来源与单项素材的批准/拒绝/pending记录准确，静态制作参考不充当最终Draft组合批准。精确配方审阅图待5.8使用真实renderer生成，最终公开组合艺术确认在7.4，之前不授予公开Editable。

- [x] 2.8 完成每系列新增1件独立Artwork的制作、透明边缘修整、来源、八类facts及双语内容；完成条件：五个系列各4件的20件目标有独立真实作品清单，5件新作及未选迭代留存、逐件pending/批准准确，不用28个Draft配方/色卡/姿态充数；现已生成的[五件候选](planning/gallery-expansion-20261010/README.md)不等于本项验收通过。

## 3. 静态目录与深色唯一角色库

- [x] 3.1 更新studio-artwork-catalog.js / studio-content.js中displayPreview引用、模板binding与能力状态；完成条件：verify-artwork-catalog.mjs覆盖15原图hash不变、两pending独立、缺资源/未知路径/unknown事实负例，维护文档说明新增完整作品不需角色专用分支。
- [x] 3.2 在index.html、studio.js、studio.css、studio-i18n.js实现Dots品牌/深色tokens/短介绍与唯一角色库，在index.html登记用户给定的 https://dots.liuzhihang.chatgpt.site canonical与og:url；完成条件：源码及浏览器head回读新地址、hosting身份和访问设置保持，1440×900首屏一整排真实作品、无旧实体场景/场景型长营销Hero/假统计/收藏/额外导航，D01逐区截图入新目录。
- [x] 3.3 重构studio-tag-browser.js / studio-tags.js及路由参数为文本+单系列+curated/name排序；完成条件：verify-artwork-query.mjs覆盖多词AND、系列AND、部分/全部清除、未知条件/空结果、不包含Draft/pending，双语词条一致。
- [x] 3.4 在studio-content.js及Prompt清单登记双语通用Dots Prompt，接入Copy Dots Prompt与同页Browse；完成条件：真实剪贴板内容/失败回退正确，不随机引用pending作品，不自动附图/发送。
- [x] 3.5 完成390/320两列、768三列、双语与无blur/reduce重排；完成条件：verify-studio-browser对应G01–G03/A01–A02用例和截图证明帽/耳/脚/尾完整、44px操作可达、无横向溢出；回读最终合成背景下正文/次级文案≥4.5:1、大字≥3:1及控件/focus状态对比度，更新当前设计说明。
- [x] 3.6 落实角色新增规范及共用组件扩展契约，解耦Character身份与seriesId；完成条件：静态内容/资源新增的隔离Artwork fixture无需角色专用分支即可查询、展示卡片、查看详情、复制Prompt与下载，无Template时不开放Edit；pending排除默认查询。将catalog/build/query/browser/download的固定15/30/89/2全量断言改为当前合格目录导出的完整性检查，冻结15原图子集继续独立验证；维护design/character-authoring，使下次新增无需重构页面。

## 4. 单一 Studio View、路由与加载

- [x] 4.1 重构studio-router.js为#/?q=&series=&sort=、#/artwork/id?v=&mode=、#/guide；完成条件：verify-router.mjs覆盖mode默认/显式edit、未知ID/version/旧home/gallery/random路径not-found，不读取/清理旧storage，回图库有明确入口。
- [x] 4.2 在studio-detail.js重构单一CharacterStudio会话、View/Edit宿主及studio-overlay.js焦点/滚动；完成条件：同一DOM壳与预览位置，背景图库不销毁，桌面单面板/手机全屏，静态标题初始focus不跳动。
- [x] 4.3 建立studio-preview-loader.js分离thumbnail/detailPreview与original下载，移除普通查看Promise.all原图barrier；完成条件：慢原图10s时封面/metadata/复制/下载入口即时可用，普通View无original fetch/hash/编辑模块请求，局部失败可重试。
- [x] 4.4 在preview/asset loader实现版本key、in-flight共享、consumer lease和有界LRU/并发；完成条件：两消费者取消其一仍完成、全取消/错误可重试、版本不串、bitmap/Blob URL清理负例通过，预算/策略写入当前文档。
- [x] 4.5 保留原始Prompt与原图独立下载操作及当前版本freeze；完成条件：更新verify-reference-detail.mjs / verify-transparent-output.mjs，真实复制/拒绝剪贴板/窗口阻止/404/hash错/decode错/下载后切角色均不伪成功、不重绘原字节。
- [x] 4.6 实现原子变体选择与按需相关内容，未登记变体/动画隐藏；完成条件：隔离fixture证明失败保留上一成功版本与URL/操作，生产仍按实数报告，fixture不写入发布清单。
- [x] 4.7 完成source context与所有出口dirty guard（对接第5组Draft）；完成条件：关闭/Esc/Back/Forward/导航/切Artwork取消保留URL和草稿，确认只导航一次；Edit↔View不触发丢弃，恢复筛选/滚动/焦点，直链回规范角色库，浏览器用例通过。

## 5. Template、Draft、预览与导出闭环

- [x] 5.1 新增studio-edit-templates.js，登记两套候选资源及能力/冲突/批准规则；完成条件：scripts/verify-edit-templates.mjs对12+16合法及Dots4非法组合、缺层/错误版本/未批准公开模板运行正反例，pending审阅harness不进入生产。
- [x] 5.2 新增studio-draft.js，绑定Artwork/Template版本、请求/成功revision、脏状态与外部意图；完成条件：Reset/Cancel/View↔Edit/语言切换/关闭释放单测验证内存生命周期，导出不清除dirty、原Artwork对象与facts不变，不持久化草稿。
- [x] 5.3 新增studio-renderer.js统一配方与Canvas透明像素输出；完成条件：scripts/verify-draft-renderer.mjs验证颜色只影响mask范围、眼/饰真实变化、层序/alpha正确、预览与export同recipe/revision，非模板任意组合拒绝。
- [x] 5.4 在studio-editor.js按需实现模板实际可视控件、合法替换确认及Original/Draft标签；完成条件：Color真实色块，Eyes/Glasses/Accessories真实图层缩略图与明确选中/焦点/失败状态，不使用文字下拉框；44px、键盘、双语与320px可达，选项真实改变预览，Shape不提供假控制，无模板View保留且edit直链明确提示，无第二工作台。
- [x] 5.5 实现session+template+recipe+revision异步归属及render错误状态；完成条件：A→B→A、连续选项乱序、关闭晚回调不覆盖新状态；最新revision未完成/失败时禁导出，保留旧预览明确标旧状态而非伪完成。
- [x] 5.6 在renderer/actions接入独立Export current PNG；完成条件：toBlob期间改选项仅输出点击时冻结成功版本或明确取消，实际PNG回读尺寸/alpha/内容无底色/棋盘格/UI/底座，不自动注册Artwork/动画/Pet。
- [x] 5.7 在studio-prompt.js明确原Prompt/成功配置Prompt/ChatGPT-only意图；完成条件：keep/remove/replace空值、非法替换、外部动作意图与当前像素区分，copy失败可恢复，语言变化不翻译用户文本或污染原始Prompt。
- [x] 5.8 跑两模板全部28合法配方工程检查及关键组合美术对照；完成条件：每份recipe/revision/输出hash/alpha证据齐全，以真实renderer产出默认重建、所有单项和关键交叉组合审阅图，交7.4确认精确配置范围；2.7素材初审不替代此确认，不把自动检查写成艺术确认。
- [x] 5.9 在浏览器完成Dots/Grok各一套View→Edit→真实改色/眼/配件→导出并打开文件→View下载原图旅程；完成条件：两份完整录屏、导出文件内容和原图hash回读，任何一套不足则bounded-editing不完成；更新README实际使用说明。

## 6. 指南、动态与旧运行清理

- [x] 6.1 更新双语Guide为选择/复制、本地有限编辑或ChatGPT附图、按真实目标使用；完成条件：D02指南层级实页核对，不发明安装/许可/尺寸或自动附图，不增加视频/账号/上传入口。
- [x] 6.2 按精确manifest将studio-home.js、studio-scenes.js、terrace/v98三图及不再使用场景规则退役到历史；完成条件：源字节/来源/历史验收不变，活动HTML/import graph无露台/热点/随机/旧workspace/compat，两pending伙伴继续独立保留。
- [x] 6.3 保留studio-motion.js的真实资源暂停管理、删除场景专用调用；完成条件：verify-motion.mjs验证offscreen/pageHidden/detailOpen/userPause/reduce合并，生产无资源就无播放，不以CSS位移冒充角色动画。
- [x] 6.4 更新package scripts连接新增验证、清除旧场景测试依赖，统一HTML/CSS/module/catalog/report cache并精确维护static-publish-manifest；完成条件：版本一致、fixture/旧运行不发布、依赖版本不变，源码与当前文档无旧产品承诺。

## 7. 跨模块验收与用户交付

- [x] 7.1 在冻结新版本运行npm run build、npm test、test:browser、test:downloads和新增模板/渲染检查；完成条件：记录每条命令与passed/failed/unrun，不覆盖旧证据，失败先修再复验。
- [x] 7.2 以scripts/verify-studio-performance.mjs执行acceptance-plan性能合同；完成条件：冷/热样本、受控慢网、点击壳目标≤100ms且>200ms解决、原图不阻塞、20次切换/释放/内存与请求预算证据齐全，不称现场INP。
- [x] 7.3 完成四视口×双语、键盘/reduce/透明降级/手机安全区、错误与竞态联合检查；完成条件：真实页面截图逐区对照D01/D02与裁决，交互和资源回读覆盖验收矩阵，未测浏览器/实体设备明确记录。
- [x] 7.4 用户确认当前发布版本；精确范围与证据见 [`design/acceptance/current-20261010-v99/release-20261011/approval.json`](../../../../design/acceptance/current-20261010-v99/release-20261011/approval.json)：24 件 Artwork（含原15件、新5件及追加2件，并含此前机器人/兔子2件）、Hero UI 插画、Dots/Grok 两套 Template 与28种合法配置。记录逐件绑定版本和 SHA-256，28种配置绑定真实渲染/透明度及预览-导出一致性证据；15件历史原图及所有获批原图像素未因本次审批更改。所有本轮范围均已批准，没有 pending；其他作品/后续版本/新增能力仍须独立审核，不因本项自动获批。
- [x] 7.5 运行OpenSpec change与all严格校验并回读最终diff/发布闭包/保护hash；完成条件：业务实现、功能、视觉、艺术、设备、目标和部署各自报告，素材阻塞不被Prompt-only掩盖，无范围外改动。

## 8. 用户追加：基础 Characters 与无网格展示

- [x] 8.1 按新增角色流程制作并登记青柠蛙领结、粉心墨镜两件独立 Dots 候选；完成条件：参考/精确提示词/原始输出/实测 alpha/双语 facts 与 Prompt 齐全，无手脚、无 Template 能力，pending 只在可信详情可看，原15件不变，不穷举配饰组合。
- [x] 8.2 去掉页面透明素材的棋盘网格；完成条件：真实眼型/配件缩略图为纯色底，色块仍显示选项颜色，页面与下载 PNG 的透明像素分离，四视口双语和键盘可用。
- [x] 8.3 验证新增候选的详情、复制、原字节下载、默认查询排除与精确发布闭包，回读无网格截图、透明 alpha 与保护文件；完成条件：新证据独立留存，刷新精确待审范围，工程通过不授予美术确认或部署。

两件补充作品只扩展静态目录；更多眼型和配件后续按真实适配资源增加。7.4 的待审范围同时包含这两件补充候选和本次页面版本。用户未确认之前仍不得勾选7.4。

## 9. CharacterStudio 透明玻璃与直接所见即所得编辑

- [x] 9.1 将 CharacterStudio 改为半透明烟色玻璃面板，保留后方背景轮廓；浏览器不支持 blur 或用户启用降低透明度时，降级为不透明且对比度合格的实底。验证文字、焦点、控件仍可读，玻璃与背景不进入 Artwork/Draft PNG。
- [x] 9.2 移除 View/Edit 标签、状态切换与 `mode` URL。精确获批 Template 在打开作品后自动载入真实模板和 Color/Eyes/Glasses/Accessory 分类 tabs；只显示模板实际能力，不新增 Head/Hair/Outfit/Backdrop/Frame/Randomize/SVG。tab 使用 roving tabindex 与 ArrowLeft/ArrowRight/Home/End，切换不改 Draft/session/revision；选项点击立即对同一预览启动渲染。当前配置 Prompt 与 PNG 导出绑定最新成功预览，渲染未完成或失败时不允许导出；原图、原Prompt、原描述和原 tags 置于 `.studio-original`（可编辑作品默认折叠，无 Template 的静态详情默认展开），不将原始描述/tags 作为编辑后事实。Reset/Cancel 在同一界面恢复默认预览；pending 资格不变，只有外部 reviewHarness 可直接打开 pending Template。无 Template 作品保留完整静态详情、原 Prompt 和原字节下载。
- [x] 9.3 验收透明玻璃/背景可见与无 blur/降低透明度降级；验证获批 Template 自动进入直接编辑、无 Template 静态详情、reviewHarness pending 标识、没有 View/Edit 或 mode URL、分类 tabs 键盘与移动端预览/导出可达、选项渲染状态与成功预览一致、Reset/Cancel 留在同一界面，以及关闭/Esc/Back/Forward/导航/切 Artwork 全部 dirty guard。回读原图原字节、当前配置 Prompt 与同 revision PNG；确认原描述/tags 仅代表源作品，不要求生成编辑后事实；功能和工程结果不得代替用户美术确认，7.4 保持未完成。

## 10. 用户 CR：精简 CharacterStudio 操作与网站导航

本组覆盖本次新确认的产品合同，并取代此前已完成任务中与之冲突的界面要求；旧任务及验收的完成勾选保持历史状态，不重写、不覆盖。7.4 用户美术确认继续未完成。

- [x] 10.1 更新站点语言和页面入口：移除独立 detailLanguage，CharacterStudio 继承全站语言；移除 Guide 页面和导航，`#/guide` 显示普通 not-found；首页 banner 保留 D01 左文右群像、大角色约占60%的构图，左侧使用两行大字号渐变标题“Make It / Your Dot.”（中文：“创造 / 你的 Dot。”），1440px桌面高约440–500px。群像展示机器人、戴耳机并系领带的兔子、人物与 Meta Muse；机器人是独立身份，不将 Grok Bot 改成屏幕脸，Dots/Grok 仍无手脚。短介绍文案区域可控制在240px内，但这不限制整体 banner 高度。专用待审 Hero 插画允许暗色展示台与微光，只作为UI装饰，不登记为Artwork或给图中角色赋予Artwork pending/approved状态；不进入角色卡、Studio、导出，不恢复露台/庭院/城市等旧场景、带UI拼版或场景型长营销Hero。最新用户参考路径见 [prototype-decisions.md](planning/dark-gallery-20261010/prototype-decisions.md)。
- [x] 10.2 统一详情层级、滚动与操作：相关角色常显在主预览正下方且不可折叠；弹窗 header 固定、body 独立滚动、编辑分类 tabs 不 sticky。移除独立原图按钮、Reset/Cancel 控件；主操作只保留 Copy Prompt、在 ChatGPT 中使用、Export。静态作品 Export 返回登记原图原字节，适配编辑 Export 使用当前最新成功 PNG。
- [x] 10.3 简化 Prompt 输入：保留一个额外要求文本框，移除 keep/remove/replace 逐项控件与折叠二创区。统一 Prompt 为静态原 Prompt 或模板最近成功配置 Prompt，再附加用户额外要求；该文字只影响 Prompt，不修改本地像素。ChatGPT 链接不得自动附图或发送。
- [x] 10.4 完成可视选项与移动端可达性：主操作视觉对齐、至少44px，真实点击命中区域与实际可见按钮矩形一致；滚动与固定 header 不得遮挡当前选项、完整角色、额外要求框或操作。手机使用自然滚动，首次打开完整角色可见；不要求预览在整个编辑过程中 fixed/sticky。
- [x] 10.5 在 `design/acceptance/current-20261010-v99/cr-simplification-20261010/` 验证四视口/双语、语言继承、无 Guide 路由/导航、最新用户原型中的 Make It / Your Dot.（中文“创造 / 你的 Dot。”）两行标题、D01左文右群像且角色群像约占60%、机器人/戴紫色耳机并系黄色领带的兔子/人物/Meta Muse构成、1440px hero高度约440–500px、短介绍区域不超过240px但不限制整体hero。按[D03](planning/dark-gallery-20261010/source-package/references/D03-hero-ensemble-20261010.png)仅核对Hero标语与群像要求，不将其当作其他页面的设计合同；最终本地Hero插画仅为UI装饰且仍待用户美术确认，不登记Artwork、不授予图中角色Artwork状态、不进入Studio/导出的边界。核对Grok仍为软几何胶囊眼而非屏幕脸、Dots/Grok无手脚、相关角色位置、真实可点击区域及无滚动遮挡。回读Copy Prompt/ChatGPT组合文本和无自动附图/发送、静态Export原字节与编辑Export成功revision PNG。保留已要求的键盘导航检查，不新增手机软件键盘验证。工程验证不代替7.4用户美术确认。

## 11. 用户 CR：Hero 文案与 CharacterStudio 层级精修（2026-10-11）

本组只覆盖最新 UI 文案与层级；不改模板能力、Artwork/Template 的 pending 或公开资格，不替代7.4用户美术确认。历史1–10组勾选保持原样；本组实现与工程验收见下列任务及 cr-polish-20261011 证据。

- [x] 11.1 更新首页双语文案与页面标题：移除通用 Hero Copy Dots Prompt 按钮；短介绍精确为英文“Pick a character. Make it yours in ChatGPT.”、中文“挑选角色，在 ChatGPT 中创作。”；中文 Hero 两行为“创造”/“你的Dot.”且浏览器标题精确为“创造你的Dot.”，英文 Hero 保持“Make It”/“Your Dot.”。
- [x] 11.2 精简 CharacterStudio 面板层级：全体弹窗保持烟色玻璃，header 轻薄且无独立背景/分隔线，保留语义标题、关闭/返回、至少44px操作与全部 dirty guard；相关角色在主预览下方紧凑固定宽度左对齐；Copy Prompt 与 ChatGPT 是主操作，Export 为次级操作。
- [x] 11.3 更新编辑区标题、说明和分类：标题“微调作品”，说明“预览与 Prompt 随选择同步更新。”；按 Appearance（外观）、Face（五官）、Clothing（服装）、Accessories（配饰）、Objects（物品）分组，当前仅显示 Appearance/Color、Face/Eyes、Accessories/{Glasses,Accessory}，Clothing/Objects 不显示空 tab。保留 option field key 与 12/16 recipe，不新增能力。移除长篇审阅文案，不要求新增编辑器 badge；pending 状态保留在元数据/harness，现有 Artwork 标识可留。眼型缩略图用真实层、统一纯色背景且无灰方块；几何 SVG/CSS 图标居中，不代替素材层。
- [x] 11.4 去重角色显示名并验收完整 CR：Meta Muse 显示为 Muse；角色名不重复系列后缀，描边系列标签与名称同行。验证双语页面标题/首页文案、Studio header/玻璃/按钮主次、相关角色布局、编辑标题/说明、真实分类/缩略图/图标；pending 与公开资格不变，7.4 继续未完成。证据写入 `design/acceptance/current-20261010-v99/cr-polish-20261011/`；不生成新图、不批准 Artwork/Template、不发布。

## Workflow follow-up boundaries

- 用户已明确授权本地apply；未勾选项仍待完成验收，apply不构成发布授权。
- 主规范sync及旧Purpose文字清理、Git提交/推送、Sites版本保存/部署、OpenSpec archive均须后续独立授权；不要在本change任务完成时自动执行。
- 保持原Site身份与访问设置，新地址使用用户给定Dots域名，不自动创建新站或改权限。

> **本轮最终确认（2026-10-11）：** 上述 Workflow follow-up boundaries 保留了 apply 阶段的历史授权状态；用户现已明确授权本轮发布、提交和归档。当前24件 Artwork、2个 Template 版本及28个合法组合均获批，Hero 仅获批为 UI 装饰；未来新增或变更内容仍需逐项批准。此说明不替代 7.4 的精确记录工作，7.4 仍由审批记录代理完成且在登记完成前保持未勾选。
