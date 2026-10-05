# 源码基线审计

审计日期：2026-10-05。以下记录是进入 apply 前对源码、项目文档与配置的只读检查快照。实施后的变更与验证结果另行记录。

## 来源与 OpenSpec

- 目标目录初次检查时为空且不是 Git 仓库；随后从现有 Sites 项目拉取源码。当前快照为原站 v27，Git HEAD `eea2a0dd71ba2e3162d11e32fbb1d2be3518e8c3`。
- 原始源码及其祖先目录没有 `AGENTS.md`，也没有 OpenSpec root、稳定 specs 或 changes。本机 OpenSpec CLI 为 1.13.1；用户随后明确同意初始化项目并配置 Codex skills，初始化成功。项目目前只有 `rebuild-character-system` 一个活动 change，主 specs 清单仍为空。五个 repo-local OpenSpec skill 文件已生成并可读；此审计不据此断言应用中的技能菜单已经刷新。

## 源码、运行与发布

- 项目主要页面、角色模型、目录、状态和随机逻辑以 `dist/` 下的原生模块形式维护，是可编辑的业务源码，不是可直接丢弃的构建目录。`src/live/` 保存实时渲染实现；`npm run build` 会用 esbuild 将 `src/live/live-preview.js` 打包并覆盖 `dist/live-runtime.js`。改造时需保留其他 `dist/` 模块和既有页面资产。
- README 记录的本机流程为 `npm ci`、`npm run build`、`npm run dev`；Vite 根目录是 `dist`。回归脚本包括 `node scripts/verify-studio.mjs`、`node scripts/verify-atelier.mjs` 与 `node scripts/verify-recreations.mjs`。托管 Sites 环境的浏览器预览入口是监督式 `sites-preview`。静态发布目录由 `.openai/hosting.json` 指定为 `dist`。
- Sites connector 已获项目 owner 范围的读取、写入与发布能力。方案阶段仅做方案；当时未安装依赖、运行 build 或业务回归脚本、启动预览，也未保存新 Sites 版本或发布。

## 与角色改造相关的现状

- 原模型只有四个 family：Dots、Grok Bot、Muse、Pets。源码和 README 将旧 Muse 定义为人物玩偶（human anatomy、分层头发与衣物），不是 Meta Muse；五组目标中的 Meta Muse 必须作为独立身份设计，不能只改名覆盖旧 Muse。
- 原站 reference mode 只保存文字说明、保留项和手动覆盖；没有参考图片输入、解析、上传或图像生成。用户在站外复制 Prompt 后自行附图。方案应保留此能力边界，不描述为已支持图片导入。
- 仓库中的生成效果图、旧版本 QA 报告和构建结果只能作为设计参考或历史证据，不能证明 v27 的目标角色已通过真实网页美术验收。方案阶段没有对网页渲染做美术验收；每组基准角色仍需在实际页面检查并获确认后才可扩展。
