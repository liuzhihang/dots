# Dot Icon Studio

让用户创建并带走形象的工作台：先浏览五大家族的内置形象，再在一个创作工作台中选模板、换背景、编辑 Prompt，并可导出项目 JSON、复制完整 Prompt 或打开 ChatGPT。只有当前受支持设置被真实 Canvas 合成时才能导出当前角色 PNG；自己的图片在 ChatGPT 另附。无需登录，不建设用户空间。源码来自现有 Dot Icon Studio Sites 项目 v27，保留原站 Git 历史；现在由这个私有 GitHub 仓库管理源码。

本次 `rebuild-character-system` 改造保留五个独立分组：**Dots、Grok Bot、Meta Muse、人物、动物**。当前目录每组含一只 canonical 基准和两只已登记的内置形象候选。页面展示、原图下载、Prompt、构建或程序检查均不代表美术验收通过；实现、程序验证、网页美术验收、用户确认和发布状态分别记录。

## 当前页面与创作路径

首页主视觉使用 12 张独立登记的角色素材；五张家族卡各显示本组 3 个形象。独立的“内置形象”页面提供 15 张完整搭配图，支持按家族筛选、搜索、放大查看、复制对应 Prompt、下载原图，以及用单一“用这个形象定制”入口把角色带入工作台。首页家族卡进入对应家族筛选后的画廊；顶部主导航分别通往首页、内置形象和工作台。

创作工作台是一个统一界面，不向用户显示 Artwork / Composer 技术模式页签。五组共登记 15 个受信任的完整形象模板，画布可真实合成模板 PNG 与所选背景。Dots 基准另有明确的完整配方：裸形与耳机素材互斥切换，并支持已登记的聆听状态；不会把两个图层简单叠放。其余模板的姿态和已画入图中的配饰固定，只能改变背景，不能当成任意三维捏形、自由换装或通用图片生成。

五组基准与新增内置形象 PNG 均是待验收候选；当前没有任何一组因此被标为通过真实网页美术验收。画廊下载会保留原 PNG；在工作台中只有受支持的当前配置才允许导出合成 PNG。超出模板配方的五官、材质、颜色、配饰、动作、镜头等高级设定只写入 Prompt，不会改变当前图像；工作台可展示所选模板的 `selected-template-preview` 参考画面，但会标出高级设定未渲染并禁用当前角色 PNG 导出。构建、脚本、截图或任务状态都不代替真实网页美术验收。

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
- **统一创作工作台**：所有五组的 15 个可信完整 PNG 模板均可放入真实 Canvas，与当前选择的纯色、棚拍或透明背景合成。Dots 基准支持已登记的裸形、耳机两套互斥完整素材及耳机聆听配方；其余模板是固定姿态/配饰的完整图片，当前只将背景合成到画布。配方不支持的高级字段会保留在 Prompt，但不能宣称已渲染；此时只显示 `selected-template-preview` 参考模板并禁用当前配置 PNG 导出。输出仍是本地静态 2D 合成，不是自动生图或自由旋转 3D。
- **结构诊断**：旧 Three.js/WebGL、CPU、多视角和动作留在明确入口，用于检查程序化模型结构与接触。诊断图不是角色成品，也不能通过美术验收。以后若交付真实 3D 成品，仍须满足原有 WebGL/CPU、多视角、动作和接触合同。

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
openspec validate rebuild-character-system --strict
openspec validate refresh-studio-visual-design --strict
openspec validate refactor-family-navigation --strict
openspec validate add-fullscreen-randomizer --strict
```

程序检查验证状态、迁移、Prompt、项目模式兼容、五组 15 项画廊素材与候选约束、可信 Canvas 配方及几何。真实页面另行检查五组身份、材质、配饰接触、动作关键帧、桌面及 320/390/768 px 视口、画廊原图下载、工作台 Canvas/alpha/导出文件、Prompt 剪贴板回读与结构诊断。组合资产缺失项明确记录为不可验收。构建成功、逻辑脚本通过、任务勾选和固定生成图都不代表网页美术通过。

当前改造见 [`rebuild-character-system`](openspec/changes/rebuild-character-system/)。用户提供的 R01 是整体设计方向，Meta Muse 以 A02 包覆式形象校准。人物和动物仅提炼动漫截图的通用比例、材质、发束与表情语言，重新设计；截图、抠图和截图纹理不能用于最终角色资产。Dots、Grok Bot、Meta Muse 保留用户允许的身份参考，并以非官方的独立再创作标记素材来源。

2026-10-05 历史记录：v30 阶段曾将 R01 首页与工作台上线，并为五组登记各一只新的透明底基准候选；当时记录的单角色家族卡、旧工作台路径和“每组一只”状态是该版本快照，不代表当前页面限制。后续实现已扩展为上文所述的 12 人首页群像、五张三角色家族卡、15 项画廊与统一工作台。Grok 紫色圆形与同向斜胶囊眼仍是当前基准身份方向，Meta Muse 保留包覆式形象。所有 15 张新候选仍待真实页面逐组美术验收；状态见[角色资产来源记录](openspec/changes/refresh-studio-visual-design/references/asset-provenance.md)与[逐组验收记录](openspec/changes/rebuild-character-system/acceptance/README.md)。旧程序化角色与已撤下素材的拒绝记录仍保留，不代表当前新候选已通过验收。

三个独立后续 change 分别记录 R01 首页/工作台视觉、五家族导航和全屏随机流程：[refresh-studio-visual-design](openspec/changes/refresh-studio-visual-design/proposal.md)、[refactor-family-navigation](openspec/changes/refactor-family-navigation/proposal.md)、[add-fullscreen-randomizer](openspec/changes/add-fullscreen-randomizer/proposal.md)。五组角色和创作资产仍由[rebuild-character-system](openspec/changes/rebuild-character-system/proposal.md)管理。

参考模式只保存文字要求与保留选项；本站没有图片上传、识别或图片生成 API。用户在 ChatGPT 中另行附图。工作台 PNG 捕获实际 Canvas 合成结果；画廊下载登记文件原样字节；结构诊断取帧有独立标签。三者不得互相冒充。

## Git 与发布

```sh
git remote -v
git status --short
```

`origin` 指向 `https://github.com/liuzhihang/dots.git`。提交时只 stage 本次明确文件，保留无关改动。`.gitignore` 排除依赖、缓存、环境变量、密钥、日志与系统文件；`dist/` 和原站 `.openai/hosting.json` 必须保留。

原站地址：`https://dot.liuzhihang.chatgpt.site`。Sites 静态发布目录仍为 `dist`，原 Site identity 保存在 `.openai/hosting.json`。**Git commit/push 与 Sites 保存版本/部署是两条独立操作**；Git push 不会自动发布站点。部署状态以原 Site 的版本与线上回读为准。
