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

- **Artwork（整图）**：可以原样下载标记为历史示例的固定作品；修改角色设定只更新 Prompt，原图不随参数变化。Dots、Grok Bot、人物兼容组、动物有历史样图，来源信息不证明它们是官方资产；Meta Muse 当前无整图。这些历史图不是新基准，也不算美术验收通过。
- **Composer（组合）**：只可用随站点发布、受信任清单登记的本地分层图真实合成当前 Canvas。包只开放声明的固定视角与参数。当前组合资产清单为空，所以暂时没有任何一组能导出新的组合角色 PNG；缺少资产或设定不受支持时仍可编辑、复制 Prompt 和保存 JSON。
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
openspec validate rebuild-character-system --strict
```

程序检查验证状态、迁移、Prompt、项目模式兼容、候选约束与几何。真实页面另行检查五组身份、材质、配饰接触、动作关键帧、桌面及 320/390/768 px 视口、Artwork 原始下载、Composer 实际 Canvas/alpha/文件、Prompt 剪贴板回读与结构诊断。组合资产缺失项明确记录为不可验收。构建成功、逻辑脚本通过、任务勾选和固定生成图都不代表网页美术通过。

当前改造见 [`rebuild-character-system`](openspec/changes/rebuild-character-system/)。用户提供的 R01 是整体设计方向，Meta Muse 以 A02 包覆式形象校准。人物和动物仅提炼动漫截图的通用比例、材质、发束与表情语言，重新设计；截图、抠图和截图纹理不能用于最终角色资产。Dots、Grok Bot、Meta Muse 保留用户允许的原版身份与来源说明。

截至 2026-10-05，用户已否决当前五组页面候选的外观，五组均未通过美术验收；暂停美术微调与扩展。现已确认整图与组合两条创作路径并存，当前整图仅有历史示例，组合资产包仍为空。查看[双模式资产合同](openspec/changes/rebuild-character-system/asset-route-review.md)与[逐组验收记录](openspec/changes/rebuild-character-system/acceptance/README.md)。

参考模式只保存文字要求与保留选项；本站没有图片上传、识别或图片生成 API。用户在 ChatGPT 中另行附图。组合 PNG 捕获实际 Canvas 合成结果；整图下载登记文件原样字节并标明历史状态；结构诊断取帧有独立标签。三者不得互相冒充。

## Git 与发布

```sh
git remote -v
git status --short
```

`origin` 指向 `https://github.com/liuzhihang/dots.git`。提交时只 stage 本次明确文件，保留无关改动。`.gitignore` 排除依赖、缓存、环境变量、密钥、日志与系统文件；`dist/` 和原站 `.openai/hosting.json` 必须保留。

原站地址：`https://dot.liuzhihang.chatgpt.site`。Sites 静态发布目录仍为 `dist`，原 Site identity 保存在 `.openai/hosting.json`。**Git commit/push 不会自动发布站点。** 发布需要单独明确指令，使用原 Site 保存候选版本、部署并回读真实线上页面。本次没有部署。

分类导航与全屏随机交互分别由后续独立 change `refactor-family-navigation`、`add-fullscreen-randomizer` 管理，不并入本次角色基准改造。
