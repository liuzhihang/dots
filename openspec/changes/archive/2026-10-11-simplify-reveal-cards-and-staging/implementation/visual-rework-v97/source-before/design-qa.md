# Dot Icon Studio · v96 页面复核

Date: 2026-10-09. Final result: **passed — implementation review only**. User art approval: **pending**.

当前候选为 cache96 / artwork-catalog-20261009-v96。实际页面、资源 hash 与具体批准边界见[本次验收记录](design/acceptance/current-20261009-v96/README.md)。这不表示用户已接受新场景或页面，也不沿用旧版 cache95 揭晓视觉结论。

## 对照方法

同时查看交接包 P02 首页空间、P01 UI / 画廊 / 详情 / 手机参考，以及实际 Chrome 页面。原型是概念拼版，未将面板尺寸作为 CSS 标注。对照板的参考裁剪只用于 QA 文档，没有进入生产资源。新背景参考 P01/P02 构图与光色；独立角色组使用身份参考及登记母图制作。

| 页面 | 实现与回看 | 有意差异与边界 |
| --- | --- | --- |
| 首页 | 1440×900 导航 64px，Hero 内容 560px；远景双伙伴、独处 Muse、中景四人共创及双角色阅读、近景双角色互动，11 个稳定热区；台阶/通道与群组间留白 | 单场景，数量服从现有作品；没有屏幕脸机器人、登录、主题轮播或系列宣传栏。新姿态和光照匹配仍待用户确认 |
| 画廊 | 浅色开放网格、完整 contain、光学尺寸；搜索与单系列筛选，清空/无结果可用 | 15 件真实作品，无假变体、展柜或小场景 |
| 共用详情 | 桌面对话框、窄屏全屏；原图、名称、短说明、少量标签及主操作优先，修改 Prompt 默认折叠 | 生产变体和动画均为 0，不复制原型变体缩略条或未登记能力 |
| 手机及边界 | 390×844、320×700、768×1024 实页；移动首页重新摆位，近景组不抢共创热区，无页面横向溢出 | Chrome 模拟视口，未声称实体手机或 Safari 验收 |
| 指南 | 双语静态三步流程，用户在 ChatGPT 自行附图和发送 | 无站内上传、预览、工作台或模型调用 |

## 视觉与交互结论

- Dots 保留无肢体、短绒和清楚轮廓；Grok 保留软几何及成对胶囊眼；奶油 Muse 为包覆体、内嵌脸和短圆肢体；柴犬保留立耳、橙白、口鼻、四足及卷尾。人物发丝/衣物保持独立材质。新姿态仍是场景候选，不能借原图批准自动变为批准作品。
- 空背景 + 四个透明静态群组 + 一个既有静态姿态构成场景。桌椅和书架随局部群组遮挡，没有重复角色叠放；没有可独立变换每只角色表情的动画资源。Hover/focus 只显示短名称；点击、Enter/Space、单次轻点立即打开相同 ID/version 的共用详情。
- 原图下载不经 Canvas 或封面转存。原图与封面逐件对照回看，轮廓、色彩及透明区域检查通过，下载 hash 与源文件一致。
- 已发现并修复：移动近景组遮挡 Grok、详情语言按钮对比不足、768 摆位支点悬浮、宽屏键盘聚焦让 Hero 内部滚动、品牌原图重复加载。最终截图对应修复后的源码。
- 内部工程视觉复核未留下阻断问题。用户对场景风格、光色一致性、群组大小和最终页面的美术判断仍待取得；OpenSpec 3.7、8.3 未完成。

## 证据

[首页对照](design/acceptance/current-20261009-v96/visual/home-comparison.png) · [画廊对照](design/acceptance/current-20261009-v96/visual/gallery-comparison.png) · [详情对照](design/acceptance/current-20261009-v96/visual/detail-comparison.png) · [手机对照](design/acceptance/current-20261009-v96/visual/mobile-comparison.png)。

[综合浏览器报告](design/acceptance/current-20261009-v96/browser/report.json) 17 项；[详情报告](design/acceptance/current-20261009-v96/reference-detail/report.json) 19 项；[动态 fixture](design/acceptance/current-20261009-v96/reference-detail/motion-report.json) 8 项；[15 份实际下载](design/acceptance/current-20261009-v96/browser/download-alpha.json)。Fixture 不计入生产资源。

未提交、Sites 保存/部署、sync 主规范或 archive。工程检查不构成这些操作的授权。
