# Dot Icon Studio

挑选角色，查看详情，复制 Prompt 或下载已有作品，再在 ChatGPT 自行附图创作你的版本。单一满屏露台互动首页、搜索/系列画廊、共用详情与静态指南；默认英文，支持简体中文。首页类别只作为背景上的轻量 overlay，不另设 Featured 作品区。本站不上传图片、不调用模型；详情的“创作我的版本”仅修改文字。

## 本机运行与验证

项目沿用现有 Node/Vite 8.3.2 与 OpenSpec CLI 1.14.1，无新增框架或后端。已有依赖环境运行：

```sh
npm run dev -- --host 127.0.0.1 --port 5180 --strictPort
npm run build
npm test
npm run test:browser
npm run test:downloads
openspec validate simplify-reveal-cards-and-staging --strict
```

dist/ 同时是可编辑 ESM 源码和 Sites static.directory，build只校验，不整体删除或重写。`design/static-publish-manifest.json` 的 `files` 是全部 dist 文件的精确闭包；`previewOnlyFiles` 是其中待确认候选资源的显式子集，仍实际存在于 dist，不代表物理隔离或自动排除部署。含 pending 候选的构建报告 `deploymentReady: false`，表示本轮尚未达到发布就绪状态；这不是运行时域名拦截，也不声称候选已从 Sites static.directory 物理排除。发布仍需对应艺术确认和单独部署授权。新增/退役任何资源或模块时逐路径增量维护，不能让构建自动收纳孤儿。当前闭包与冻结 v83/v87 历史来源校验独立。历史运行保存在 historical-runtime，不能进入发布树。

## 静态内容维护

1. 维护者把授权原图放进仓库，记录来源、用途、hash、尺寸、alpha及用户批准范围；不重编码15个既有原图。
2. 在dist/studio-artwork-catalog.js登记Character/Artwork/Asset/Prompt及真实facts；在dist/studio-content.js补全中英文名称、别名、短描述、系列和封面记录。none/notApplicable/unknown不能互换。
3. 单独登记优化poster、桌面、平板与手机完整静态场景图、实际预览和下载文件。每个场景热点按对应构图中可见角色记录 Artwork ID / version 与坐标；各视口只登记其图中实际出现的身份。变体只能显式关联。新场景与母图批准分开。
4. 新增待审作品放进独立 `PREVIEW_ARTWORKS` / `PREVIEW_ASSETS` / `PREVIEW_PROMPTS` 清单，不能混入 `ARTWORKS`、默认查询或 tags；完整登记的候选可使用同一作品详情地址，显示“Preview · 待确认”，但不获得已发布资格。`files` 逐路径列出全部 dist 文件，候选资源同时登记在 `previewOnlyFiles` 子集中；原有15张原图及其批准引用保持原字节和范围。运行内容/查询/详情/原图检查，再做四个视口实页与身份对照；测试fixture不进入资源清单。
5. 工程通过并获对应美术确认后，按独立授权静态部署。仓库更新不会自动远程上线。没有Provider/数据库/CMS。

## 操作与结构

- 首页点击角色或画廊点击封面进入同一详情。hover/键盘聚焦给短提示，并沿场景中对应角色的真实轮廓显示描边反馈；动画只改变 UI 描边，减少动态时显示静态轮廓。手机轻点一次。
- #/home、#/gallery?q=&series=、#/artwork/<id>?v=<version>、#/guide；详情返回恢复查询、滚动和焦点；直达详情返回画廊。
- 原始Prompt复制和原图下载保持当前作品版本；Open in ChatGPT不自动附图或发送。复制失败可选取全文，弹窗拦截可手动打开ChatGPT。
- 修改区默认折叠、保留原身份；保留/移除/替换只改变待复制文字。折叠与语言切换保留意图，关闭或成功切换变体清空。
- studio.js / studio-router.js 管路由；studio-home.js / studio-scenes.js 管场景；studio-tag-browser.js / studio-tags.js 管查询；studio-detail.js / studio-overlay.js 共用详情；studio-prompt.js / studio-actions.js / studio-asset-loader.js 管真实操作。

## 首页场景

v98 首页以完整黄昏露台场景为满屏自适应背景，跨视口按实际构图调整场景；不采用固定 624px Hero。人物、动物、家具、台阶、接触阴影与遮挡在完整场景中统一呈现；首页不叠透明角色群组，也不宣称单角色独立动作或表情动画。新的身份分类仅作为场景背景上的 overlay 控件。

桌面、平板与手机使用同一露台叙事，背景依可用视口自适应填充；各视口完整构图分别登记 hash、用途和真实可见角色热点，不能把桌面图任意裁作手机场景或用裁切代替已登记的平板构图。各视口只开放对应图中完整可见角色的热点。首页布局按 P02 桌面构图和 P01 手机面板分别核对，不新增 Featured 卡片区。

v98 场景图、热点和最终页面呈现仍待用户美术确认；15 张原图的历史批准只覆盖各自原图，不扩大到整景。白色原创机器人、白兔等新身份分别登记为 pending 候选，不继承旧作品批准，也不进入默认画廊或发布资格。v96 因与原型差距大、角色悬浮且与背景无关、角色缺失和将多页拼版误当单页而被用户拒绝；v96/v97 证据保留原样。

## 验收与保留

当前源码 cache revision 为 v98；新审阅证据写入 `design/acceptance/current-20261009-v98/`。v96 用户拒绝记录、v97候选证据、v83/v87 和旧 v93/v95 均保留，不覆盖。15 件原图批准、其余新角色候选、场景艺术批准、页面视觉、工程、实体设备和发布分别记录。当前变体 / 真实动画均以目录实际数量为准，不以测试 fixture 虚增。v98 当前为本地候选审阅，不授权提交、Sites保存或部署；部署需另行明确授权。

旧随机/揭晓、独立参考工作台、上传、旧URL兼容不属于当前运行；历史证据仍保存。原Site身份和访问设置不变。本次apply不授权提交、部署、sync或archive。
