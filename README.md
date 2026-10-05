# Dot Icon Studio

让用户创建并带走形象的工作台：整图＋Prompt 与组合编辑共用角色设定；可以导出项目 JSON、复制完整 Prompt 或打开 ChatGPT，只有当前真实合成的组合 Canvas 才导出为当前角色 PNG。自己的图片在 ChatGPT 另附。无需登录，不建设用户空间。源码来自现有 Dot Icon Studio Sites 项目 v27，保留原站 Git 历史；现在由这个私有 GitHub 仓库管理源码。

本次 `rebuild-character-system` 改造保留五个独立分组：**Dots、Grok Bot、Meta Muse、人物、动物**。每组先一只基准，真实网页检查和用户逐组确认后才扩展。实现、程序验证、美术验收、用户确认、发布是分别记录的状态。

## 本机运行

需要可运行锁定 Vite 8 的 Node.js（20.19+ 或 22.12+）；本次本机使用 Node.js 23.11.0、npm 10.9.2。

```sh
npm ci
npm run build
npm run dev -- --host 127.0.0.1
```

打开终端输出的本机地址，默认是 `http://127.0.0.1:5173/`。在“结构诊断”中可用 `?renderer=software` 检查 CPU fallback，通常优先 WebGL；默认整图工作台不运行诊断模型。本机地址仅供当前机器访问，不代表跨网络手机已验收。

## 代码结构

- `dist/`：可编辑的页面、状态模型、目录、样式与静态发布目录；**不能把整个目录当成可清理的构建产物**。
- `src/live/`：Three.js 身体、分区材质、纤维、配饰、状态动效与 CPU fallback。
- `dist/live-runtime.js`：由 `npm run build` 从 `src/live/live-preview.js` 生成的 bundle；修改实时渲染源码后需要重建并提交。
- `scripts/`：配置、迁移、来源与几何的回归验证。
- `openspec/`：项目配置、增量规范和 change。使用本机 OpenSpec **1.13.1**；不自动升级，也不覆盖已有规范。
- `.agents/skills/`：本项目的 Codex OpenSpec skills。

配置 schema 10 保留 schema 6–9 的明确迁移。旧 Muse 人物进入人物的 legacy 路径，旧 Pets 保留动物物种；原始 JSON 可恢复。新基准与历史预设分开，旧数据可编辑、导出、撤销和重新导入，不计为新美术成果。

## 创作模式与图片输出

项目 JSON 外层以 `format: "dot-studio-project"`、文档 `version: 1` 和 `creation` 保存模式与本地作品 ID；`character` 仍使用现有 VERSION 10，包装格式不升级角色 schema。以前的纯角色 JSON 仍可导入。JSON 不携带图片字节，也不把文字或旧配置恢复副本中的路径/URL 解释为图片资源。

- **Artwork（整图）**：可原样预览并下载所选固定 PNG；修改角色设定只更新 Prompt，静态图不会随参数变化。五个分组现在各有一只含透明背景的 imagegen 基准候选，尚未通过真实页面美术确认，也未获用户逐组批准。原站历史作品及其 `artworkId` 保留兼容；用户已否决的人物阅读图和错误 Grok 图从公开目录撤下，导入旧项目只恢复配置并明确显示撤下状态，不静默替换图片。历史图和新候选都不能冒充当前设定生成的图片。
- **Composer（组合）**：只读取随站点发布、受信任清单登记的本地图层并真实合成 Canvas。当前只有 Dots 有限支持：固定正面视角、裸形/耳机的互斥整幅角色素材切换和背景合成，可导出当前 PNG；这不是通用生图或自由旋转 3D。Grok Bot、Meta Muse、人物、动物尚无可用组合包，仍可编辑设定、复制 Prompt 和保存 JSON。
- **结构诊断**：旧 Three.js/WebGL、CPU、多视角和动作留在明确入口，用于检查程序化模型结构与接触。诊断图不是角色成品，也不能通过美术验收。以后若交付真实 3D 成品，仍须满足原有 WebGL/CPU、多视角、动作和接触合同。

整图静态样张、空组合包和结构诊断均不计作当前配置的合成 PNG。完整 Prompt、复制、TXT 下载和打开 ChatGPT 使用同一冻结角色状态；ChatGPT 中由用户自行附图和发送，本站不上传、不代发。

## 验证与验收

```sh
node scripts/verify-studio.mjs
node scripts/verify-recreations.mjs
node scripts/verify-atelier.mjs
node scripts/verify-character-system.mjs
node scripts/verify-creation.mjs
node scripts/verify-creation-ui.mjs
node scripts/verify-module-cache.mjs
node scripts/verify-family-navigation.mjs
node scripts/verify-fullscreen-random.mjs
openspec validate rebuild-character-system --strict
```

程序检查验证状态、迁移、Prompt、项目模式兼容、候选约束与几何。真实页面另行检查五组身份、材质、配饰接触、动作关键帧、桌面及 320/390/768 px 视口、Artwork 原始下载、Composer 实际 Canvas/alpha/文件、Prompt 剪贴板回读与结构诊断。组合资产缺失项明确记录为不可验收。构建成功、逻辑脚本通过、任务勾选和固定生成图都不代表网页美术通过。

当前改造见 [`rebuild-character-system`](openspec/changes/rebuild-character-system/)。用户提供的 R01 是整体设计方向，Meta Muse 以 A02 包覆式形象校准。人物和动物仅提炼动漫截图的通用比例、材质、发束与表情语言，重新设计；截图、抠图和截图纹理不能用于最终角色资产。Dots、Grok Bot、Meta Muse 保留用户允许的原版身份与来源说明。

截至 2026-10-05，用户否决的旧程序化角色外观仍未通过美术验收。已将 R01 的首页与创作工作台落到真实页面，并为五组各登记一只新的透明底基准候选；这些候选仍待用户在真实页面逐组确认。最新 Grok 身份参考已用于修正唯一基准为紫色圆形与同向斜胶囊眼；Meta Muse 保持独立的包覆式形象。确认前不得扩展对应分组。页面仍保留五组的独立身份、无需登录的创作与导出路径；整图、组合、程序检查和美术确认的状态分别记录。来源见[角色资产来源记录](openspec/changes/refresh-studio-visual-design/references/asset-provenance.md)，验收边界见[逐组验收记录](openspec/changes/rebuild-character-system/acceptance/README.md)。

三个独立后续 change 分别记录 R01 首页/工作台视觉、五家族导航和全屏随机流程：[refresh-studio-visual-design](openspec/changes/refresh-studio-visual-design/proposal.md)、[refactor-family-navigation](openspec/changes/refactor-family-navigation/proposal.md)、[add-fullscreen-randomizer](openspec/changes/add-fullscreen-randomizer/proposal.md)。五组角色和创作资产仍由[rebuild-character-system](openspec/changes/rebuild-character-system/proposal.md)管理。

参考模式只保存文字要求与保留选项；本站没有图片上传、识别或图片生成 API。用户在 ChatGPT 中另行附图。组合 PNG 捕获实际 Canvas 合成结果；整图下载登记文件原样字节并标明历史状态；结构诊断取帧有独立标签。三者不得互相冒充。

## Git 与发布

```sh
git remote -v
git status --short
```

`origin` 指向 `https://github.com/liuzhihang/dots.git`。提交时只 stage 本次明确文件，保留无关改动。`.gitignore` 排除依赖、缓存、环境变量、密钥、日志与系统文件；`dist/` 和原站 `.openai/hosting.json` 必须保留。

原站地址：`https://dot.liuzhihang.chatgpt.site`。Sites 静态发布目录仍为 `dist`，原 Site identity 保存在 `.openai/hosting.json`。**Git commit/push 与 Sites 保存版本/部署是两条独立操作**；Git push 不会自动发布站点。部署状态以原 Site 的版本与线上回读为准。
