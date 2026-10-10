# Dot Icon Studio

挑选角色，查看详情，复制 Prompt 或下载已有作品，再在 ChatGPT 自行附图创作你的版本。单场景互动首页、搜索/系列画廊、共用详情与静态指南；默认英文，支持简体中文。本站不上传图片、不调用模型；详情的“创作我的版本”仅修改文字。

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

dist/ 同时是可编辑 ESM 源码和原 Sites 发布树，build只校验，不整体删除或重写。design/static-publish-manifest.json 是精确活动文件清单；新增/退役任何资源或模块时逐路径增量维护，不能让构建自动收纳孤儿。当前闭包与冻结v83/v87历史来源校验独立。历史运行保存在historical-runtime，不能进入发布树。

## 静态内容维护

1. 维护者把授权原图放进仓库，记录来源、用途、hash、尺寸、alpha及用户批准范围；不重编码15个既有原图。
2. 在dist/studio-artwork-catalog.js登记Character/Artwork/Asset/Prompt及真实facts；在dist/studio-content.js补全中英文名称、别名、短描述、系列和封面记录。none/notApplicable/unknown不能互换。
3. 单独登记优化poster、场景姿态、实际预览和下载文件。变体只能显式关联。新场景与母图批准分开。
4. 增量维护发布manifest，运行内容/查询/详情/原图及构建检查，再做四个视口实页与身份对照；测试fixture不进入生产清单。
5. 工程通过并获对应美术确认后，按独立授权静态部署。仓库更新不会自动远程上线。没有Provider/数据库/CMS。

## 操作与结构

- 首页点击角色或画廊点击封面进入同一详情。hover/键盘聚焦只给短提示；手机轻点一次。
- #/home、#/gallery?q=&series=、#/artwork/<id>?v=<version>、#/guide；详情返回恢复查询、滚动和焦点；直达详情返回画廊。
- 原始Prompt复制和原图下载保持当前作品版本；Open in ChatGPT不自动附图或发送。复制失败可选取全文，弹窗拦截可手动打开ChatGPT。
- 修改区默认折叠、保留原身份；保留/移除/替换只改变待复制文字。折叠与语言切换保留意图，关闭或成功切换变体清空。
- studio.js / studio-router.js 管路由；studio-home.js / studio-scenes.js 管场景；studio-tag-browser.js / studio-tags.js 管查询；studio-detail.js / studio-overlay.js 共用详情；studio-prompt.js / studio-actions.js / studio-asset-loader.js 管真实操作。

## 验收与保留

当前实现统一cache96，新证据仅写design/acceptance/current-20261009-v96/；旧v93/v95及v83/v87保持原样。原15作品批准、新姿态美术批准、实页视觉、工程、实体设备和发布分别记录。当前变体/真实动画均以目录实际数量为准，不以测试fixture虚增。

旧随机/揭晓、独立参考工作台、上传、旧URL兼容不属于当前运行；历史证据仍保存。原Site身份和访问设置不变。本次apply不授权提交、部署、sync或archive。
