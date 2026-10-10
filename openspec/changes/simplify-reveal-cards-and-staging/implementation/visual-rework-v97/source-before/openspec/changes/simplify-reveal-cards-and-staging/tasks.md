# Tasks

用户已通过 $openspec-apply-change 授权实施。依据当前 [proposal.md](proposal.md)、[design.md](design.md) 和 11 份 delta 执行；本次 cache96、证据目录 current-20261009-v96。旧 34/35 项原字节记录位于 [history/2026-10-09-before-static-refocus](history/2026-10-09-before-static-refocus/README.md)，旧 5.4 美术确认仍未通过。本清单只按当次实现与证据更新，不继承旧勾选。

## 1. 实施基线与当前合同

- [x] 1.1 在新请求进入 apply 后回读 HEAD、dirty、OpenSpec 1.14.1 与现行 change，冻结授权文件、15 原图、品牌及 v83/v87/旧 planning/implementation 的路径和 hash 清单；以差异清单验证本轮之外的改动不被回滚或覆盖。
- [x] 1.2 在 AGENTS.md、DESIGN.md、.agents/rules/design.md 和 README 更新单场景 / 画廊 / 共用详情 / 指南边界及旧随机退出说明；搜索核对现行文档不再要求游戏、上传、工作台或旧 URL 兼容，历史文档保持原样。
- [x] 1.3 为当次实现确定统一 cache revision 与唯一新 acceptance 目录合同，列出 HTML/CSS/module query、data-cache、catalog revision、build report、测试断言的对应值；验证不会写入旧 v93/v95 或改动 hosting / OpenSpec 根配置 / 依赖版本。
- [x] 1.4 先建立与当前 dist 活动树一一对应的新版发布清单，将 build-studio 的当前路径闭包与冻结 v83/v87 历史来源校验分开；以当前树及孤儿 / 缺失文件反例验证双方独立有效，旧证据 hash 不变，并在 README 写明后续各组新增 / 退役资源需增量维护新清单。

## 2. 静态内容与原图边界

- [x] 2.1 重构 studio-artwork-catalog.js，保留 15 个 Artwork 的 ID、原图路径、字节、事实和批准引用，分离 Character / Artwork / Asset / Prompt；更新 verify-artwork-catalog.mjs 并以实际 hash、none/notApplicable/unknown、来源缺失和错误版本反例验证。
- [x] 2.2 声明 poster、场景姿态、预览、下载文件的独立用途与版本，保留显式变体关系；验证现有 15 件无变体时不产生假动作，场景姿态不进入下载或搜索，类似外观不会自动连为变体。
- [x] 2.3 从批准母图制作并登记完整轮廓的优化静态封面，原图不重新编码；逐项核对尺寸、hash、alpha、色彩 / 轮廓和光学大小，记录衍生资源与原批准范围的关系，不把缩略图当原图。
- [x] 2.4 整理双语名称、别名、短描述、基础 Prompt 与 series 清单，去掉 reveal 素材资格对画廊的依赖；目录检查验证 15 原图仍可对应同版 Prompt，未知 ID / 路径注入 / 缺失翻译不会静默发布。
- [x] 2.5 在 README 记录“维护者增加资源和清单 → 校验 → 构建 → 授权静态部署”及资源批准流程；用隔离新增作品 fixture 验证无需页面角色分支即可被目录、查询和详情发现，fixture 不进入生产清单。

## 3. 新首页分层素材与构图

- [x] 3.1 按 P02 构图及 P01 光色给出 1440×900 与 390×844 页面级布局和 ScenePlacement 表，标注前中后景、家具遮挡、稳定热区与空台阶；对照两原型确认导航约 64px、Hero 520–580px、单场景且非拼版比例。
- [x] 3.2 制作不含角色的露台背景与必要家具遮挡层，单独登记来源、版本、hash 及待确认状态；检查没有原型截图像素、烘焙文字、重复角色、大宣传卡或第二主题。
- [x] 3.3 制作或登记近景互动组的适用静态单元，锁定柴犬立耳橙白四足卷尾与 Dots 无肢体基准；按真实接触、光照和透明边缘逐项回看，缺图不得以叠放重复母图关闭任务。
- [x] 3.4 制作或登记中景共创 / 阅读组的适用静态单元，保持 Grok 胶囊眼、Muse C01 形体和人物材质；回看脸部遮挡、道具承托、群组留白及母图 ID 对应，未核定姿态保留 pending。
- [x] 3.5 制作或登记远景与独处伙伴单元，并在目标尺寸下核对较小但清楚、留有空台阶、不过度朝镜头；移动端重新取景 / 摆位，检查不是全部挤前排或桌面整体缩小。
- [x] 3.6 将静态场景接入 studio-home.js / studio-scenes.js，使用固定语义按钮热区及简短 hover / focus 提示；浏览器验证鼠标、Tab、Enter / Space、一次 touch 均能立即选择相同 ID/version，热区不漂移、不相互抢点击、不 hover 自动开详情。
- [ ] 3.7 在新证据目录交付以上场景的源文件清单、实际页面截图与身份 / 疏密 / 遮挡对照，记录用户对具体资源版本与呈现范围的美术确认；未收到确认保持本项未完成，不用生成图、原图旧批准或构建通过替代。

## 4. 共用详情、路由与真实操作

- [x] 4.1 改写 studio.js 及必要的 router，建立 #/home、#/gallery?q=&series=、#/artwork/<id>?v=、#/guide；用真实浏览器验证详情直达 / 刷新 / 未知 ID / 版本和未知路由恢复，不建立旧路由适配。
- [x] 4.2 让首页角色和画廊卡片复用 studio-detail.js，同一 Artwork/version 使用同一图、Prompt 与资源；先以一个批准作品跑通两入口对照，再核对其余 14 件，不保留两个详情实现。
- [x] 4.3 改写 overlay 与 history 来源状态，完成桌面浮窗 / 窄屏全屏、inert、焦点圈定、Escape、Back/Forward、关闭后 query / series / scroll / trigger 焦点恢复；浏览器验证直达页返回画廊且不会误跳外站、触发节点缺失有稳定焦点落点。
- [x] 4.4 按 P01 重排 detail.css 和内容顺序，保留完整原图、名称、短描述、少量静态标签及主操作，删除 Pet / 工程面板 / 假规格；截图检查 1440、390、320、768 下角色完整、标题不重复、操作可达、无变体区块不占位。
- [x] 4.5 保留并完善 actions / asset-loader 的原始 Prompt 复制与原字节下载，原图失败时文本独立可用；扩展 verify-reference-detail.mjs 和 verify-transparent-output.mjs，回读真实剪贴板及下载 bytes / hash / 尺寸 / alpha / 内容，并覆盖拒绝权限、弹窗拦截、404 / hash / decode 错误和 A→B 迟到回调。
- [x] 4.6 保留真实变体的原子切换，成功后一次更新图 / 事实 / Prompt / 下载 / URL，失败保留旧成功版本；用隔离双变体 fixture 验证，生产当前无变体时隐藏区域；将来源恢复和操作版本合同写入 design/studio-visual-interaction-system.md。

## 5. 画廊、语言与指南

- [x] 5.1 重构 studio-tags.js / studio-tag-browser.js 为单文本搜索与单系列筛选，内部保留 typed facts；更新 verify-artwork-query.mjs，验证中英文名 / 别名 / 真实 facts、多词 AND、文本与系列 AND、无结果、分别清除和全部清除。
- [x] 5.2 按 P01 实现浅色开放网格、完整 contain、光学尺寸、简短名称与系列；在 1440 / 768 / 390 / 320 实页检查网格、搜索、筛选、无结果与失败卡，没有底座、展柜、每角色小场景或标签按钮堆叠。
- [x] 5.3 移除 renderGallery 对所有 found 原图的 checkAsset 预取，封面按当前 / 临近视口加载，原图在详情 / 下载加载校验；用网络记录验证列表不下载全部 18.8MB 原图，记录实际媒体请求与首屏字节并对照设计预算。
- [x] 5.4 加入 en / zh-CN 全站词条和基础 Prompt 切换，默认英文，轻量保存语言与减少动态偏好；浏览器验证界面 / aria / 错误提示 / Prompt 一致，切换不丢查询、当前详情和修改意图，storage 拒绝仍可工作。
- [x] 5.5 实现轻量静态指南并更新 README 中公开操作说明；逐步检查选择角色、复制 / 下载、在 ChatGPT 自行附图和发送的文案及链接，无站内选图、上传、预览、账号或模型调用入口，两个语言版本均可读。

## 6. 详情内创作 Prompt

- [x] 6.1 将独立 studio-reference.js 的适用文字能力整合为详情内默认折叠的修改区，以当前 Artwork 版本初始化全部保留；验证无 Dots 通用换形套用人物 / 动物 / Muse，无独立工作台、全局 reference 弹窗或文件输入。
- [x] 6.2 实现独立 PromptEditIntent 的 keep / remove / replace 和必要文字，替换空值有明确提示；更新 reference-detail 检查，通过独立预期文本验证三种意图、条件式 ChatGPT 附图说明以及未附图时仍可使用。
- [x] 6.3 隔离原始与修改 Prompt 操作，明确提示“仅修改 Prompt，图片尚未改变”；以修改前后对象 / hash / DOM 比较验证原事实、标签、基础 Prompt、原图和下载不变，复制修改文本不会污染主操作。
- [x] 6.4 完成折叠 / 展开保留、语言切换保留意图但不翻译自由文本、关闭或成功变体切换清空草稿；浏览器验证重复打开默认保留且没有 localStorage / IndexedDB 草稿或用户图片。
- [x] 6.5 验证原始和修改区的 Open in ChatGPT 使用各自全文；拒绝复制 / 拦截窗口 / 外部未预填时可选择全文和手动打开，不自动附图或发送；把该失败路径及模板边界写入当前设计说明。

## 7. 动态控制与旧运行退出

- [x] 7.1 按实际资源登记能力建立静态 poster 默认和最小暂停控制；只有已登记真实动画时才显示入口。用隔离动画 fixture 验证 offscreen、pageHidden、detailOpen 仅暂停背景、userPause 与 reduced-motion 原因合并，关闭详情不越过手动暂停；无生产动画时记录“0，静态交付”，不把 fixture 计为角色资源。
- [x] 7.2 验证背景 / 角色层 / 封面 / 动画失败时的重试和静态降级，动画中的稳定热区仍立即响应，移动端单次轻点无 hover 前置；截图 / DOM / 请求记录证明不出现重复角色、全画廊 GIF 循环或 CSS 假表情，相关测试随控制器落地。
- [x] 7.3 按 design 文件表将 draw、fullscreen-random、feature/reveal/style/appearance/palette/object visual modules、runtime-config 和旧 reference 视图退出 HTML/import graph 及 dist；核对逐文件历史保存 hash，运行发布闭包检查证明不是仅 CSS 隐藏，原图及无关 dirty 不受影响。
- [x] 7.4 将 39 个 reveal PNG 和七张旧 scene 图按精确清单保存到新的历史目录，创建新 retirement inventory 并更新 1.4 建立的当前发布清单；以正反例验证新增合法资源可构建、孤儿 / 缺失 / 越权发布资源被拒绝，冻结 v83/v87 仍原字节保留并独立校验。
- [x] 7.5 更新 package scripts、Vite 的 reveal-only transform 和浏览器 / 内容测试入口，旧 draw/card-reveal/instant-random/reveal-process/reveal-layout/recording 与 fixtures 退出活动测试图；确认没有依赖升级，build 与新测试不导入历史运行或写旧 acceptance 目录。
- [x] 7.6 将 HTML/CSS/模块、data-cache、catalog revision、构建报告与新测试断言按 1.3 对齐；更新当前 README / DESIGN / 设计规则及历史退役索引，搜索检查活动文档和运行树不再承诺随机、工作台、上传或兼容层。

## 8. 综合验收与交付

- [x] 8.1 在同一冻结版本执行新内容 / 查询 / 详情 / 原图下载 / 构建及浏览器综合检查，保存实际命令与通过 / 失败 / 未运行状态；验证四个视口、两语言、共享详情直链 / 返回、搜索、复制、下载、Prompt 意图与资源 / 动态异常组合，检查不修改历史 hash。
- [x] 8.2 保存 1440×900、390×844、320 / 768 的实际浏览器页面截图，逐项对照 P02 首页空间和 P01 画廊 / 详情 / 手机层级，记录远景疏密、身份、光照、控件、完整轮廓与点击热区；功能通过和视觉评审结果分开，不用生成图或 build 代替。
- [ ] 8.3 呈现绑定当次源码与素材 hash 的最终页面供用户确认，记录具体批准 / 拒绝 / 待确认范围；未确认保持本项未完成，原 15 母图批准、场景批准和当前页面批准不互相替代。
- [x] 8.4 回读最终 diff、活动发布树、原图 / 历史证据和 hosting / 依赖配置，交付完成项、失败 / 未测项、生产实际变体 / 动画数量及部署状态；确认无 reset / clean、无业务范围外改动、未擅自提交 / 发布 / sync / archive。

## Workflow follow-up

- 已收到新的 apply 请求，现实施本 change；素材与页面美术确认仍须按具体版本记录。
- 实施验收后，只有另行获得 sync 授权才更新主规范及残留旧 Purpose；若需要 archive，再按用户授权独立执行并保留历史未通过状态。
- 提交、Sites 保存 / 部署和外部发布均按后续具体授权执行，保持原 Site 身份与访问设置；本清单不是这些操作的授权。
