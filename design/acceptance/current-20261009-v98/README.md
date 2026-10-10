# v98 全屏首页最终本地预览证据

日期：2026-10-09。当前入口 `http://127.0.0.1:5180/#/home`。

工程检查和内部视觉复核通过；新角色、三种响应式场景及最终页面均待用户美术确认。未提交、发布、sync 或 archive；实体设备与其他浏览器未测。

- 复核报告：仓库根 `design-qa.md`。
- 最终实际浏览器：`browser/report.json`、`browser-attempt-06.log`；59 个活动文件 hash 绑定最终运行版本。
- 视口：1440×900、390×844、320×700、768×1024；另有连续 resize / 短横屏检查。
- 逐角色轮廓：`browser/outlines/` 17、`outlines-tablet/` 17、`outlines-mobile/` 13；`visual/outlines-*-review.jpg` 是实际浏览器截图接触表。
- 人工实页：`visual/home-{1440,390,320,768}.jpg`、`home-focus-1440.jpg`、`home-robot-focus-768.jpg`、`robot-detail-390-zh.jpg`。
- 原型比较：`visual/comparisons/`。面板归一化仅供 QA，未裁切原型截图为生产资产。
- 场景/角色原始生成与失败候选：`asset-sources/`；最终三个 WebP hash 见 `scene-assets-v98.json`。新机器人与兔是 RGB 摄影棚底原图，不能标成透明下载。
- 最终检查：`unit-final.log`、`build-final.log`、`downloads-final.log`、`openspec-final.log`。
- 历次失败/中间验证保留为 `browser-attempt-01` 至 `05` 及同名日志。最后一次修复是平板 17 条轮廓的可见遮挡边缘；不能用之前的功能通过冒充轮廓视觉通过。

注意：pending 资源仍位于 dist 的完整静态发布树，清单不是物理隔离。build 的 `deploymentReady:false` 不会自动删除它们，也不构成部署授权。
