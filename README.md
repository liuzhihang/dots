# Dot Icon Studio

让用户创建并带走形象的工作台：编辑角色、配饰与动作，导出当前 PNG/JSON，复制完整 Prompt 或打开 ChatGPT；自己的图片在 ChatGPT 另附。无需登录，不建设用户空间。源码来自现有 Dot Icon Studio Sites 项目 v27，保留原站 Git 历史；现在由这个私有 GitHub 仓库管理源码。

本次 `rebuild-character-system` 改造保留五个独立分组：**Dots、Grok Bot、Meta Muse、人物、动物**。每组先一只基准，真实网页检查和用户逐组确认后才扩展。实现、程序验证、美术验收、用户确认、发布是分别记录的状态。

## 本机运行

需要可运行锁定 Vite 8 的 Node.js（20.19+ 或 22.12+）；本次本机使用 Node.js 23.11.0、npm 10.9.2。

```sh
npm ci
npm run build
npm run dev -- --host 127.0.0.1
```

打开终端输出的本机地址，默认是 `http://127.0.0.1:5173/`。`?renderer=software` 可检查 CPU fallback；常规页面优先 WebGL。本机地址仅供当前机器访问，不代表跨网络手机已验收。

## 代码结构

- `dist/`：可编辑的页面、状态模型、目录、样式与静态发布目录；**不能把整个目录当成可清理的构建产物**。
- `src/live/`：Three.js 身体、分区材质、纤维、配饰、状态动效与 CPU fallback。
- `dist/live-runtime.js`：由 `npm run build` 从 `src/live/live-preview.js` 生成的 bundle；修改实时渲染源码后需要重建并提交。
- `scripts/`：配置、迁移、来源与几何的回归验证。
- `openspec/`：项目配置、增量规范和 change。使用本机 OpenSpec **1.13.1**；不自动升级，也不覆盖已有规范。
- `.agents/skills/`：本项目的 Codex OpenSpec skills。

配置 schema 10 保留 schema 6–9 的明确迁移。旧 Muse 人物进入人物的 legacy 路径，旧 Pets 保留动物物种；原始 JSON 可恢复。新基准与历史预设分开，旧数据可编辑、导出、撤销和重新导入，不计为新美术成果。

## 验证与验收

```sh
node scripts/verify-studio.mjs
node scripts/verify-recreations.mjs
node scripts/verify-atelier.mjs
node scripts/verify-character-system.mjs
openspec validate rebuild-character-system --strict
```

程序检查验证状态、迁移、Prompt、候选约束与几何。真实页面另行检查五组身份、材质、配饰接触、动作关键帧、桌面及 320/390/768 px 视口、WebGL/CPU、实际 PNG 与 alpha、下载文件和剪贴板回读。构建成功、任务勾选、固定生成图都不代表网页美术通过。

当前改造见 [`rebuild-character-system`](openspec/changes/rebuild-character-system/)。用户提供的 R01 是整体设计方向，Meta Muse 以 A02 包覆式形象校准。人物和动物仅提炼动漫截图的通用比例、材质、发束与表情语言，重新设计；截图、抠图和截图纹理不能用于最终角色资产。Dots、Grok Bot、Meta Muse 保留用户允许的原版身份与来源说明。

截至 2026-10-05，用户已否决当前五组页面候选的外观，五组均未通过美术验收；暂停美术微调与扩展。后续资产方向选项及逐组验收状态见[验收记录](openspec/changes/rebuild-character-system/acceptance/README.md)。

参考模式只保存文字要求与保留选项；本站没有图片上传、识别或图片生成 API。用户在 ChatGPT 中另行附图。PNG 导出捕获实际可编辑预览；历史生成样张另行标明，不冒充当前角色。

## Git 与发布

```sh
git remote -v
git status --short
```

`origin` 指向 `https://github.com/liuzhihang/dots.git`。提交时只 stage 本次明确文件，保留无关改动。`.gitignore` 排除依赖、缓存、环境变量、密钥、日志与系统文件；`dist/` 和原站 `.openai/hosting.json` 必须保留。

原站地址：`https://dot.liuzhihang.chatgpt.site`。Sites 静态发布目录仍为 `dist`，原 Site identity 保存在 `.openai/hosting.json`。**Git commit/push 不会自动发布站点。** 发布需要单独明确指令，使用原 Site 保存候选版本、部署并回读真实线上页面。本次没有部署。

分类导航与全屏随机交互分别由后续独立 change `refactor-family-navigation`、`add-fullscreen-randomizer` 管理，不并入本次角色基准改造。
