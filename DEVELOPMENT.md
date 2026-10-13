# 开发指南

[返回 README](README.md)

## 快速开始

需要 Git、npm，以及 **Node.js 22.12 或更新版本**。锁定的 Vite 版本声明的 Node 范围为 `^20.19.0 || >=22.12.0`。

```sh
git clone https://github.com/liuzhihang/dots.git
cd dots
npm ci
npm run dev -- --host 127.0.0.1 --port 5180 --strictPort
```

打开 <http://127.0.0.1:5180>。日常开发不需要数据库、服务端、模型 API Key 或 Codex。素材较多，首次克隆和加载可能需要一些时间。

项目使用原生 JavaScript ES Modules、CSS、Canvas 与 Vite。`package.json` 的 `private: true` 用于防止误发布到 npm，不表示代码不能开源。

## 开发与验证

```sh
npm test
npm run build
```

`npm test` 执行功能及数据一致性检查；`npm run build` 验证源码、资源清单、hash 与批准记录，并写入 `.artifacts/build/build-report.json`。它不是常规的 Vite 输出目录重建命令。

**不要删除或清空 `dist/`：这里包含可编辑源码和需要保留的原始素材。**

### 浏览器检查

Playwright 是可选测试工具，未包含在锁定的项目依赖中。没有现成运行时时，可在本地临时安装：

```sh
npm install --no-save --package-lock=false playwright
npx playwright install chromium
npm run test:browser
```

这组命令会下载测试工具和浏览器；不要把临时依赖修改混入提交。浏览器解析支持 `DOTS_PLAYWRIGHT_MODULE`、`DOTS_CHROME_PATH`，也可使用已存在的 Codex bundled runtime；后者不是普通贡献者的必需条件。检查脚本会按各自配置启动本地服务。

| 命令 | 用途 |
| --- | --- |
| `npm run test:recovery` | 组合恢复路径与编辑器状态回归（Node 模拟，不代替浏览器和像素验收） |
| `npm run test:downloads` | 浏览器下载与透明输出检查 |
| `npm run test:editing` | 角色调整、Prompt 和导出一致性检查 |
| `npm run test:looks` | 90 个内部来源 Look、540 条合法配置和精确来源 PNG 回归 |
| `npm run test:figures` | 83 个公开基础形象、语义选项与真实配方绑定、跨来源 PNG 回归 |
| `npm run test:delivery` | 无损传输资源的浏览器检查 |
| `npm run test:performance` | 性能检查 |
| `npm run verify:release-safety` | 仓库保留规则检查，需要完整 Git 历史 |
| `npm run dev:review` | 本地候选审阅入口 `http://127.0.0.1:5182/__dots_review__/` |

本地审阅不改变 Artwork 或 Template 的批准状态，也不会自动发布候选素材。测试通过不等于完成真实设备、人工美术或线上验收。

`npm test` 包含来源 Look、去重 Figure、编辑边界和详情导出的回归。`npm run test:figures` 遍历公开基础形象的实际语义配置，每次结果都核对精确来源配方；`npm run test:looks` 保留90个内部来源的540条UI配方检查。可用 `DOTS_LOOK_BASELINE` 指向既有 `real-registered-recipes.json`，额外核对实际选中配方的旧像素 hash；不设置时仍验证形象身份、透明像素和实际下载的一致性。`DOTS_EVIDENCE_DIR` 指定本次验证的输出目录。

### 规范协作

产品行为以 [`openspec/specs/`](openspec/specs/) 为准。规范协作使用 OpenSpec CLI **1.14.1** 的 `spec-driven` 工作流；CLI 不在本项目 npm 依赖内，也不是启动网站的前提。安装对应 CLI 后可运行：

```sh
openspec validate --specs
```

校验结果应如实记录；已有规范问题与本次改动的问题分开说明，不改写历史验收记录。

## 目录导览

| 路径 | 内容 |
| --- | --- |
| `dist/` | 应用源码、角色目录、模板、原图与传输素材 |
| `scripts/` | 开发、验证、审阅及静态发布准备脚本 |
| `openspec/specs/` | 当前产品行为合同 |
| `openspec/changes/` | 变更提案及 `archive/` 中的已完成记录 |
| `design/character-authoring/` | 新角色与组件的制作、登记及接入流程 |
| `design/releases/` | 精选发布与验证记录 |
| `design/acceptance/` | 冻结的审批、来源和验收证据 |
| `historical-runtime/` | 精选历史源码与来源记录 |
| `.artifacts/` | 本地临时构建与 QA 输出，不是公开素材目录 |

历史恢复与仓库维护见 [`design/repository-maintenance.md`](design/repository-maintenance.md) 和 [`design/repository-history.json`](design/repository-history.json)。

## 静态部署

发布文件由 [`design/static-publish-manifest.json`](design/static-publish-manifest.json) 精确限定。通过检查后，生成一个新的发布目录：

```sh
node scripts/stage-static-publish.mjs .artifacts/release-local
node scripts/verify-figure-thumbnails.mjs .artifacts/release-local
node scripts/verify-option-thumbnail-ui.mjs .artifacts/release-local
```

该目标目录必须尚不存在；实际网站文件位于生成目录的 `dist/` 子目录。以该子目录作为网站根目录交付文件，不要把整个含 PNG 源的 `dist/` 直接上传，也不要把私有参考、候选或 QA 输出纳入公开发布。预览和调整图层使用经验证的无损 WebP 传输；批准的 PNG 源保留，下载与调整导出仍为 PNG。其他托管平台需自行验证路径、MIME、缓存及复制/下载行为；不要复用维护者的托管配置直接发布到其站点。

缩略图回归直接服务该发布目录，检查六个圆球配饰的真实图片、闭眼/睁眼组合可用性、当前透明 PNG 及 source-only PNG 零请求。不能只在保留完整 PNG 源的本地开发目录验收图片，否则可能掩盖发布后缺图问题；证据写入 stage 同级的独立 `.artifacts` 目录。

现有演示站的发布与回读证据见 [Site 59 / v110 记录](design/releases/20261013-option-card-palette-v110/README.md)。源码提交、测试、OpenSpec 归档和站点部署是独立步骤。

## 参与贡献

欢迎通过 [GitHub 反馈分类页](https://github.com/liuzhihang/dots/issues/new/choose) 选择问题反馈、申请新增形象或功能与体验建议，也可以通过 Pull Request 提交改进。提交需要登录 GitHub，Issue 内容公开；形象申请只是需求建议，不保证制作或采纳，参考素材必须可公开分享。

1. 先阅读 [`AGENTS.md`](AGENTS.md)、[`DESIGN.md`](DESIGN.md)、[设计规则](.agents/rules/design.md) 和相关主规范。
2. 每个 PR 聚焦一个问题，说明改动目的、验证命令及结果；涉及界面时附相关视口的前后对比。
3. 新角色或素材需遵循 [制作指南](design/character-authoring/README.md)，提交来源、版本/hash、权利依据和适用范围。未确认可公开分发的参考图或素材不要随 PR 上传。
4. 保留已批准素材及冻结历史记录。不要仅为通过检查而更改批准状态、来源或验收结论。

若涉及凭据或个人信息，请勿在公开 Issue 中贴出；先通过维护者已有的私密联系渠道沟通。

