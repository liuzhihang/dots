# Dot Icon Studio

Dot Icon Studio 是一个完整角色作品图库，提供可扩展标签搜索、随机线索卡、角色 Prompt 和原图下载。用户也可以在 ChatGPT 或其他工具中继续创作；完成作品的用户上传、管理与审核属于后续独立规划，不是当前揭晓交互的一部分。

产品保留 Dots、Grok Bot、Meta Muse、原创人物和动物等身份。随机卡不是自由组装器：每轮从目录中的完整作品发现一个伙伴，线索素材只用于展示，不在页面上把配件装到角色上。

角色风格仍保留为底层事实，但不再单独占一张大卡；Dots、Grok Bot、Muse、人物、动物身份标签在首张外形五官卡停稳时出现。每轮展示外形五官、配色材质两张必显卡，再按真实内容加入衣物、配饰和道具卡。卡数不固定：当前 15 件作品为 2 张卡 7 件、3 张卡 7 件、4 张卡 1 件；不补空卡，也不截断真实有值类别。卡片只保留线索图和类别名。紧凑深色舞台在同一视图中完成逐卡揭晓；“带走伙伴”打开 Prompt、下载、ChatGPT 与 Feature 锁定操作，完整描述放在详情中。交互规范见[视觉与交互系统](design/studio-visual-interaction-system.md)。

## 本机运行

Node.js 20.19+ 或 22.12+，锁定 Vite 8.3.2。

- npm ci
- npm run dev -- --host 127.0.0.1
- npm run build
- npm test
- npm run test:browser
- npm run test:downloads
- openspec validate --specs --strict

默认地址为 http://127.0.0.1:5173/。浏览器脚本使用已有 Playwright 与 Chromium/Chrome；可设置 DOTS_PLAYWRIGHT_MODULE、DOTS_CHROME_PATH 和 DOTS_BASE_URL 指定本地路径或预览地址。测试不会自动安装浏览器，也不建立外部图像服务。

当前新线索处于 `candidate-preview/pending`。普通启动与静态源码默认只接纳已批准的线索，因此在批准完成前，画廊仍可使用，正式随机池为空。维护者在本地审阅候选时使用：

```sh
DOTS_REVIEW=1 DOTS_QA=1 npm run dev -- --host 127.0.0.1 --port 5180 --strictPort
```

该开关只由本地 Vite 环境启用，公开 URL、查询参数和存储不能开启。浏览器回归默认连接 5180；`npm run test:instant-random`、`npm run test:reveal-layout`、`npm run test:reveal-process` 分别检查开场、布局和动效过程。`design/acceptance/current-20261008-v93/` 是上一候选的历史证据；用户指出其结果画面与原型差距较大，不能视为通过或美术确认。本轮修复候选写入新的唯一 `design/acceptance/current-20261008-v95/` 目录，不得覆盖 v93；候选素材和页面仍须保持 pending，用户确认另行记录。

下载验证回读实际文件的尺寸、内容、hash 和 alpha。构建验证静态发布源码、资源引用与 hash，不清空或重写 dist/。dist/ 同时是可编辑源码和原 Sites 发布树。

## 主要结构

- dist/studio-artwork-catalog.js：Artwork、Asset、Prompt、TargetProfile 登记与资格。
- dist/studio-tags.js：typed Feature、标签和文本查询；同维 OR、跨维 AND。
- dist/studio-draw.js：作品抽取、DrawResult 与去重；studio-fullscreen-random.js：弹窗和游戏共用的抽卡视图。
- dist/studio-runtime-config.js：生产线索资格；Vite 的本地审阅变换不会写回生产配置。
- dist/studio-feature-visuals.js 与独立线索 Asset 清单：外形、配色材质及其他有值卡片维度的事实/来源/批准校验；style 事实用于身份标记，不生成独立卡片视觉。
- dist/studio-asset-loader.js：可信资源加载、MIME/hash/尺寸检查、取消与原字节下载。
- dist/studio.js、studio-overlay.js：页面导航、活动弹窗、返回、筛选、滚动与焦点管理。
- dist/studio-detail.js、studio-reference.js、studio-actions.js：作品详情、外部参考图文字辅助、Prompt 与下载操作。
- dist/assets/：已登记美术和来源。
- historical-runtime/：退出当前构建和发布的旧运行代码与测试；保留作为历史记录，不代表当前产品合同或通过状态。

## 证据与交付

历史归档保留用户批准、素材来源、发布回执，以及失败、退回和取消状态。当前有效要求以仓库主规范、当前 change 和[产品设计约定](DESIGN.md)为准。旧 change 中的执行清单已按当前方向清理；带证据的归档说明在各自目录的 README 中，历史勾选不代替本轮验收。

桌面与 320、390、768 CSS px 模拟视口、实际下载、实体设备、用户艺术批准和公开发布是不同的检查范围。Site 身份、访问设置和原素材记录保持独立；对外提交、保存或发布须按用户对具体动作的授权执行。
