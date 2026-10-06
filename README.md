# Dot Icon Studio

让用户创建并带走形象的工作台：先浏览五大家族的内置形象，再在一个创作工作台中选模板、换背景、编辑 Prompt，并可导出项目 JSON、复制完整 Prompt 或打开 ChatGPT。只有当前受支持设置被真实 Canvas 合成时才能导出当前角色 PNG；自己的图片在 ChatGPT 另附。无需登录，不建设用户空间。源码来自现有 Dot Icon Studio Sites 项目 v27，保留原站 Git 历史；现在由这个私有 GitHub 仓库管理源码。

本阶段保留五个独立分组：**Dots、Grok Bot、Meta Muse、人物、动物**。当前内置形象画廊每组有一只 canonical 基准和两只已登记候选，共 15 个图库身份样例；这是当前图库范围，不决定首页或家族卡插画的群像人数或未来图库上限。Site 35/cache 83 上五组当前 Gallery/工作台模板形象已按“PNG 模板、背景合成、Prompt”范围获用户美术确认；全量 PNG 字节与实体手机仍未验证。构建、程序检查和发布状态与美术确认分别记录。

## 当前页面与创作路径

本轮首页及五张家族卡以 R01 为单一视觉目标：卡片按参考图的主体大小/位置、前后层级、底色、材质、道具与标题/说明/插画/英文双行短句排布；非 Muse 场景忠实复原原型，只有 Meta Muse 做 A02 身份微调。顶部左侧按 R01 呈现紫色耳机 Dot、挥手栗发白衣男孩、小粉三角、绿云和蓝水滴；右侧呈现棕发丸子头、黄色衣着、眨眼作 V 手势的女孩、单只奶油 Muse、橙柴犬、橙豆形与青绿方形。Hero Muse 不持星、不带植物；星星与 sage 植物仅用于单只 Muse 家族卡。Humans 卡三人依次为左侧黑发深色 hoodie 男孩、中间棕发丸子头黄色衣着眨眼 V 手势女孩、右侧金发圆框眼镜灰外套白上衣角色。家族卡当前素材数为 Dots 4、Grok Bot 6、Meta Muse 1、人物 3、动物 5；这是本轮场景计数，不是未来图库/插画人数限制。首页卡片不显示“3 款候选”，画廊仍准确保留五组各三只、共 15 个已登记图库身份。Humans/Animals 卡标题按 R01 用英文，导航仍为中文“人物/动物”；Grok 文案保持有趣的 R01 语气。详情由 [refine-family-scene-composition](openspec/changes/archive/2026-10-06-refine-family-scene-composition/proposal.md) 跟踪。

R01 图片可作为 ImageGen 构图/服装/材质风格参考，但最终网页必须使用单独制作的场景图，不直接使用整页截图，也不从网页或动漫截图裁切、抠图或提取像素；独立新插画可按 R01 构图在页面中做有意艺术裁切。人物和动物要保持原创，不能复制用户的动漫截图或可辨认的完整动漫角色。Scene-only 展示与 Gallery/工作台身份分离；R01 紫色缎面 Dot 的白色斜胶囊眼不代表替换现有 Gallery 素材。v72 与 v81 页面截图和 review 都是历史证据；v81 家族卡已被用户明确否定。Site 35/cache 83/source `30c3dfa7bb709a2eda4dd4ebfdf4df0390a4e5f5291998defcb178cc7cc9d451` 绑定 128 个冻结路径并完成首页/卡片内部复核。用户已确认该版本首页顶部、五组家族场景及五组当前 Gallery/工作台模板形象，范围分别记录于[首页场景确认](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/user-art-approval.json)和[模板范围确认](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json)。仅单张莓粉眼镜 Dots PNG 做过当前版本的字节检查，不表示 15 项导出文件全量验证；实体手机未测。当前 2D 交付范围和 11 项旧 3D 工程/精细基准目标取消见[范围决策](openspec/changes/archive/2026-10-06-rebuild-character-system/scope-decision-20261006.json)。v83 页面证据见[纠偏记录](design/reference-home-correction-20261006/README.md)、[v83 页面验收](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/README.md)和[当前设计 QA](design-qa.md)。

独立的“内置形象”页面提供 15 张完整搭配图，支持按家族筛选、搜索、放大查看、复制对应 Prompt、下载原图，以及用单一“用这个形象定制”入口把角色带入工作台。首页家族卡进入对应家族筛选后的画廊；顶部主导航分别通往首页、内置形象和工作台。

创作工作台是一个统一界面，不向用户显示 Artwork / Composer 技术模式页签。五组共登记 15 个受信任的完整形象模板，画布可真实合成模板 PNG 与所选背景。Dots 基准另有明确的完整配方：裸形与耳机素材互斥切换，并支持已登记的聆听状态；不会把两个图层简单叠放。五组基准另各登记一套真实的表情或姿态完整 PNG：Dots/Grok 眨眼，Muse/人物挥手，柴犬坐姿抬前爪。工作台以经典/问好状态选择对应完整图片，同步现有 expression/action/pose 字段；其余十张完整搭配的姿态和图中配饰固定。它不是任意三维捏形、自由换装或通用图片生成。

五组当前 Gallery/工作台模板形象已获用户按其登记身份与可支持创作范围进行真实页面美术确认；这不等于所有 PNG 导出文件字节已逐一核验。画廊下载会保留原 PNG；在工作台中只有受支持的当前配置才允许导出合成 PNG。除登记配方外，超出模板配方的五官、材质、颜色、配饰、动作、镜头等高级设定只写入 Prompt，不会改变当前图像；工作台可展示所选模板的 `selected-template-preview` 参考画面，但会标出高级设定未渲染并禁用当前角色 PNG 导出。构建、脚本、截图或任务状态都不代替真实网页美术验收。

## 本机运行

需要可运行锁定 Vite 8 的 Node.js（20.19+ 或 22.12+）；本次本机使用 Node.js 23.11.0、npm 10.9.2。

```sh
npm ci
npm run build
npm run dev -- --host 127.0.0.1
```

打开终端输出的本机地址，默认是 `http://127.0.0.1:5173/`。在“结构诊断”中可用 `?renderer=software` 检查 CPU fallback，通常优先 WebGL；模板工作台默认显示已登记的静态角色素材，不需要启动程序化结构诊断模型。本机地址仅供当前机器访问，不代表跨网络手机已验收。

## 代码结构

- `dist/`：可编辑的页面、状态模型、目录、样式与静态发布目录；**不能把整个目录当成可清理的构建产物**。
- `src/live/`：Three.js 身体、分区材质、纤维、配饰、状态动效与 CPU fallback。
- `dist/live-runtime.js`：由 `npm run build` 从 `src/live/live-preview.js` 生成的 bundle；修改实时渲染源码后需要重建并提交。
- `scripts/`：配置、迁移、来源与几何的回归验证。
- `openspec/`：项目配置、增量规范和 change。使用本机 OpenSpec **1.13.1**；不自动升级，也不覆盖已有规范。
- `.agents/skills/`：本项目的 Codex OpenSpec skills。

配置 schema 10 保留 schema 6–9 的明确迁移。旧 Muse 人物进入人物的 legacy 路径，旧 Pets 保留动物物种；原始 JSON 可恢复。新基准与历史预设分开，旧数据可编辑、导出、撤销和重新导入，不计为新美术成果。

## 创作模式与图片输出

当前 UI 将“内置形象”画廊与统一工作台作为两条用户路径；`artwork` / `composer` 仍是兼容层的内部模式值，不再作为一对工作台页签展示。静态原图与工作台画布有不同的导出语义。

项目 JSON 外层以 `format: "dot-studio-project"`、文档 `version: 1` 和 `creation` 保存模式与本地作品 ID；`character` 仍使用现有 VERSION 10，包装格式不升级角色 schema。以前的纯角色 JSON 仍可导入。JSON 不携带图片字节，也不把文字或旧配置恢复副本中的路径/URL 解释为图片资源。

- **内置形象画廊**：五组各有一只基准与两只完整搭配候选，共 15 张登记 PNG；每张素材可放大查看、复制对应 Prompt、下载原文件。候选来源及待确认状态随作品展示。静态原图不会随参数变化，也不能冒充按当前设置生成的图。
- **统一创作工作台**：所有五组的 15 个可信完整 PNG 模板均可放入真实 Canvas，与当前选择的纯色、棚拍或透明背景合成。Dots 基准支持已登记的裸形、耳机两套互斥完整素材及耳机聆听配方；五组基准各额外支持一套眨眼或挥手完整姿态图；其余十个模板是固定姿态/配饰的完整图片，只将背景合成到画布。配方不支持的高级字段会保留在 Prompt，但不能宣称已渲染；此时只显示 `selected-template-preview` 参考模板并禁用当前配置 PNG 导出。输出仍是本地静态 2D 合成，不是自动生图或自由旋转 3D。
- **结构诊断**：旧 Three.js/WebGL、CPU、多视角和动作留在明确入口，用于检查程序化模型结构与接触。诊断图不是角色成品，也不能通过美术验收。以后若交付真实 3D 成品，仍须满足原有 WebGL/CPU、多视角、动作和接触合同。

七张关系场景只作网页展示，不是单只角色，不进入随机、图库下载或项目素材 URL；五张基准姿态是同一身份的静态动作瞬间，不是循环动画，也不新增图库身份。

画廊原图和结构诊断截图不计作按当前工作台配置合成的 PNG；工作台仅在最新受支持配置完成 Canvas 渲染后启用导出。完整 Prompt、复制、TXT 下载和打开 ChatGPT 使用同一冻结角色状态；ChatGPT 中由用户自行附图和发送，本站不上传、不代发。

## 验证与验收

```sh
node scripts/verify-studio.mjs
node scripts/verify-recreations.mjs
node scripts/verify-atelier.mjs
node scripts/verify-character-system.mjs
node scripts/verify-creation.mjs
node scripts/verify-creation-ui.mjs
node scripts/verify-module-cache.mjs
node scripts/verify-look-gallery.mjs
node scripts/verify-family-navigation.mjs
node scripts/verify-fullscreen-random.mjs
node scripts/verify-preview-capture.mjs
node scripts/verify-assembly-contact.mjs
openspec validate rebuild-character-system --strict
openspec validate --all --strict
openspec validate --archived --strict
```

程序检查验证状态、迁移、Prompt、项目模式兼容、五组 15 项画廊素材与候选约束、可信 Canvas 配方及几何。真实页面另行检查五组身份、材质、配饰接触、动作关键帧、桌面及 320/390/768 px 视口、画廊原图下载、工作台 Canvas/alpha/导出文件、Prompt 剪贴板回读与结构诊断。组合资产缺失项明确记录为不可验收。构建成功、逻辑脚本通过、任务勾选和固定生成图都不代表网页美术通过。

项目协作约定见 [AGENTS.md](AGENTS.md)，产品设计合同见 [DESIGN.md](DESIGN.md)，逐项设计检查见 [design rules](.agents/rules/design.md)。

角色资产与创作范围见[已归档的角色改造记录](openspec/changes/archive/2026-10-06-rebuild-character-system/)，首页与家族卡场景见[已归档的场景构图记录](openspec/changes/archive/2026-10-06-refine-family-scene-composition/)。最终交付为静态 PNG 模板、背景合成和 Prompt；旧 3D 渲染仅作结构诊断。Meta Muse 以 A02 包覆式身份校准；人物与动物保持原创，不使用动漫截图像素、裁片、贴图或完整可辨认角色。用户允许 R01 作为 ImageGen 的构图/服装风格参考，页面最终使用单独的新插画；Dots、Grok Bot 和 Meta Muse 的软件内置身份可按允许范围保留并记录来源。

2026-10-05 历史记录：v30 阶段曾将 R01 首页与工作台上线，并为五组登记各一只新的透明底基准候选；当时记录的单角色家族卡、旧工作台路径和“每组一只”状态是该版本快照，不代表当前页面限制。v31 曾扩展为 12 张独立角色组成的首页、五张三角色家族卡、15 项画廊与统一工作台。v70 矩阵和逐组工程记录只表示当时的检查/验收状态；其中 20/36 及五组未确认是原范围下的历史任务快照，不能作为当前的失败结论。2026-10-06 用户确认了 Site35/cache83 的五组当前 Gallery/工作台模板形象；当前验收范围与旧 3D 工程任务取消记录见[模板确认](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json)和[范围决策](openspec/changes/archive/2026-10-06-rebuild-character-system/scope-decision-20261006.json)。原始 3D 图像、检查和任务状态保留为历史，不改写成通过。

三个独立 change 分别记录 R01 首页/工作台视觉、五家族导航和全屏随机流程：[refresh-studio-visual-design](openspec/changes/archive/2026-10-05-refresh-studio-visual-design/proposal.md)、[refactor-family-navigation](openspec/changes/archive/2026-10-05-refactor-family-navigation/proposal.md)、[add-fullscreen-randomizer](openspec/changes/archive/2026-10-05-add-fullscreen-randomizer/proposal.md)。五组角色与创作范围已按 PNG 模板、背景合成和 Prompt 的最终产品边界收尾；旧 3D 工程任务按范围决策取消，不冒充成品验收。

参考模式只保存文字要求与保留选项；本站没有图片上传、识别或图片生成 API。用户在 ChatGPT 中另行附图。工作台 PNG 捕获实际 Canvas 合成结果；画廊下载登记文件原样字节；结构诊断取帧有独立标签。三者不得互相冒充。

2026-10-05 早期 v64 本地快照：修复减少动态偏好、实际帧冻结导出/关闭取消及高级设定布局，缓存统一 v64；证据与五组待确认清单见[本轮 QA](design/followup-qa-20261005.md)。导航和随机按已验证行为同步主 specs 后归档；当时视觉 change 保留待反馈，角色 change 仍 15/36。此轮未提交、推送或发布，旧线上版本未在此轮回读。

2026-10-05 v70 中间版历史记录：缓存模块统一 v70，构建与 12 项回归检查通过；五组 10 份 WebGL/CPU 矩阵共 3798 条实际记录，主预览及结构诊断在 320/390/768 px 共 30 张重新捕获的页面无横向溢出。30 份当时的实际诊断 PNG 下载通过尺寸、alpha、SHA-256 与对应 Prompt 回读检查。来源和逐项结果见[v70 冻结矩阵与页面记录](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v70/README.md)。v70 发布至 Site version 33（source commit `0cd69c96ebd02e5c61c6c9b35aab8958120256ad`、sourceId `9181d019add9fe9892dc4af770d85650ee99bc52b9bcb3db755ad0979d961826`），只绑定其当时的源码与诊断记录。原任务表 20/36 是旧范围快照；2026-10-06 的范围决策取消 11 项 3D 工程/精细基准目标，五组当前模板形象另获人工美术确认。3798 条矩阵、30 张诊断图和旧响应式截图不代表当前所有 PNG 导出或实体手机已经验证。v71 与 v72 仅作历史过程记录，见[场景构图与验收边界](design/scene-refinement-20261005/README.md)、[v71 记录](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v71/README.md)及[v72 记录](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v72/README.md)。

2026-10-06 的 v81 曾作为中间版本发布到原 Site **version 34**（source commit `7cbf99c`）；用户随后明确否定其家族卡构图，因此该发布、截图、内部 review 和代码检查均只作历史记录，不代表当前实现或验收通过。版本来源与部署回读见 [v81 历史记录](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v81/README.md)，否定原因见 [基线审查](design/reference-home-correction-20261006/baseline-review.md) 和 [当前设计 QA](design-qa.md)。

当前 v83 已冻结并完成 source 绑定的内部页面复核，单张莓粉眼镜 Dots PNG 已核验真实字节；已部署到原 Site version 35（source commit `0411719`）。详见 [v83 页面验收](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/README.md)。用户已确认该版本首页/五组家族场景及五组当前 Gallery/工作台形象，确认范围分别见[场景确认](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/user-art-approval.json)和[图库/工作台模板确认](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json)。`refine-family-scene-composition` 已完成并归档；`rebuild-character-system` 按 PNG 模板、背景合成和 Prompt 的最终范围收尾，原 11 项 3D 工程/精细基准目标由[范围决策](openspec/changes/archive/2026-10-06-rebuild-character-system/scope-decision-20261006.json)取消，而非标为 3D 通过。全量 PNG 导出字节与实体手机仍未验证。

## Git 与发布

```sh
git remote -v
git status --short
```

`origin` 指向 `https://github.com/liuzhihang/dots.git`。提交时只 stage 本次明确文件，保留无关改动。`.gitignore` 排除依赖、缓存、环境变量、密钥、日志与系统文件；`dist/` 和原站 `.openai/hosting.json` 必须保留。

原站地址：`https://dot.liuzhihang.chatgpt.site`。Sites 静态发布目录仍为 `dist`，原 Site identity 保存在 `.openai/hosting.json`。**Git commit/push 与 Sites 保存版本/部署是两条独立操作**；Git push 不会自动发布站点。部署状态以原 Site 的版本与线上回读为准。

2026-10-06 发布回读：原站 [Dot Icon Studio](https://dot.liuzhihang.chatgpt.site) 的 **Site version 35** 已成功部署，source commit `041171998469a568e8647db9a66dedd84bfb469c`、cache 83。106 个运行文件经独立包审逐字节一致，原有 owner-only 访问配置 revision 1 保持不变。详见[发布回执](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/site-release.json)；发布回执本身只证明 Sites 来源与部署。首页和五组家族场景、五组当前 Gallery/工作台模板的人工确认分别记录在[场景确认](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/user-art-approval.json)及[图库/工作台确认](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json)。实体手机仍没有验收证据。
