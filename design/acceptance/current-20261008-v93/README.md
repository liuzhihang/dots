# cache93 同屏揭晓候选

本目录记录2026-10-08开发工作树，实施 `simplify-reveal-cards-and-staging`。源版本与资源hash见 `source-manifest.json`；没有Git提交、Sites保存或部署，也没有自动继承用户对旧图的批准。

## 可直接查看

- 抽卡桌面效果：`layout/matrix-1440-4-cards-result.png`
- 手机效果：`layout/matrix-390-4-cards-result.png`
- 实际过程录像：`process/normal-390.mp4`、`process/skip-390.mp4`、`process/reduced-motion-390.mp4`
- 39项线索联系图：`assets/all-reveal-assets.png`；逐作品对照：`assets/artwork-dots.png`、`assets/artwork-grok.png`、`assets/artwork-meta-muse.png`、`assets/artwork-humans.png`、`assets/artwork-animals.png`
- 分享设计稿：`share/share-landscape.png`、`share/share-portrait.png`，以及 `share/share-copy.txt`。HTML只用于设计稿排版，不是已接入产品的分享功能。
- 本机审阅服务：`http://127.0.0.1:5180/#game`。本地Vite须以`DOTS_REVIEW=1`启动；普通启动保持正式资源资格，因此新线索确认前正式随机池为空，画廊仍有15件原作品。

## 验证结果

| 范围 | 实际结果 |
| --- | --- |
| 目录、查询、抽取、卡片生命周期、详情/参考图 | `npm-test.log`，全部通过；详情/参考图15项 |
| 构建与来源 | `build-report.json`：25个入口/模块/样式、15张成品、62份静态资源，生产默认published；旧33SVG与45份历史资源原字节核对 |
| 浏览器与真实操作 | `browser/report.json`：28项通过，15次真实下载 |
| 下载alpha | `browser/download-alpha.json`：15个实际下载PNG的尺寸/hash/alpha通过 |
| 即时开场 | `instant-random/report.json`：4项通过，包括慢加载与减少动态 |
| 布局 | `layout/reveal-layout-report.json`：10组表面/视口，另有3/4/5/6卡×4种视口的16组矩阵；六卡为fixture |
| 动效过程 | 普通5卡、跳过3卡、减少动态4卡的录像/关键帧/时间线；普通及跳过全停边界约905/902ms。普通用例注入900ms资源延时，时间线不作为公网性能测量 |
| 独立线索 | `assets/asset-audit.json`：39项PNG逐项hash/字节/解码/alpha核对；15张作品映射，7×3卡、7×4卡、1×5卡 |
| 正式与审阅隔离 | `boundary/formal-policy.json`：5181未开启review，公开查询参数不能开启候选策略 |
| 规范与保留证据 | `openspec-validation.log` 12/12；`link-audit.json` 67文件/280本地链接无断链；5393个历史证据/skill/Site身份hash一致；57份原资源原字节均保留（33SVG转历史目录） |

布局报告中旧的“accurate empty cards”描述已纠正为有值卡使用独立线索、空值类别省略；未修改任何断言、检查结果或布局指标。新SVG退役映射与制作器hash保存在当前change的implementation及historical-runtime中。

## 视觉判断与边界

新立体PNG替换33项旧扁平SVG；首卡使用5项独立中性身份线索。成品15张和原有耳机PNG保留原字节。卡面没有特征短名称、描述或装饰编号；结果名称/简介在完整角色下方显示。卡片与角色保持同屏连续关系，分享稿改用突出角色和文案的独立排版。

`assets/visual-review.md` 记录具体目视范围与低alpha边缘问题。当前39项源PNG合计55.79MiB，仍是原始质量候选；尚未交付线上体积优化或公网加载验收，不以本机加载速度推断线上体验。

| 状态 | 结论 |
| --- | --- |
| 工程实现/回归 | 通过上述具体范围 |
| 新资源存在、来源和字节/alpha检查 | 39项均已检查；不等于美术批准 |
| 新线索/同屏交互/分享稿的用户艺术确认 | pending；任务5.4未勾选 |
| 实体手机 | 未验证，模拟视口不能替代 |
| 分享导出/社交自动发布/用户上传/审核 | 未在本change实现 |
| Git/Sites发布 | 未执行；原Site身份/访问设置未修改 |
