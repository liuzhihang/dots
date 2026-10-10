# Dots v99 设计验收

2026-10-10。本报告仅覆盖本地实现；没有部署，没有借用历史母图批准来确认新页面或新 Draft。

## 选稿和证据

唯一桌面主稿为 D01-main-third-dark-gallery-studio.png；D02-support-first-mobile-guide.png 仅补手机与指南。不是更早的露台选稿。已把未改动原型与实际渲染放进同一审阅输入：

- [D01 合并对照](design/acceptance/current-20261010-v99/visual/D01-combined-comparison.png)：桌面图库、同一 Studio View/Edit。
- [D02 合并对照](design/acceptance/current-20261010-v99/visual/D02-combined-comparison.png)：390px 图库、详情、指南和实际编辑操作区。
- [四视口与双语实页](design/acceptance/current-20261010-v99/browser/report.json)：1440×900、768×1024、390×844、320×700，共 24 张页面截图及透明降级截图。
- [Edit 四视口双语](design/acceptance/current-20261010-v99/editor-layout/report.json)：Dots/Grok 共 16 个布局，48 张全览/操作区/选项区截图，128项选项文案/边界对比度检查；44px 操作与真实导出可达，无横向溢出；颜色色块、实际素材缩略图和键盘 Space 选择通过。
- [实际合成底色对比度](design/acceptance/current-20261010-v99/accessibility/contrast.json)：48 项，正文/次级文案至少 4.5:1，输入边界/选中/焦点至少 3:1；不以色板单色猜测透明背景。

## 逐区裁决

| 区域 | 实页结果 | 裁决与依据 |
|---|---|---|
| 导航 | Dots、角色库、指南、语言 | 仅保留需求中的两入口；删除原型收藏、更多、账户等额外入口 |
| 首页介绍 | 短标题、复制通用 Prompt、同页浏览 | 角色库即首页；取消长 Hero、实体/阶梯场景、发光底座和虚构统计 |
| 桌面 Gallery | 六列，1440×900 首屏完整一排真实作品 | 深色数字画布、局部描边/烟黑玻璃；批准原图保持自己的真实身份，不照抄原型中错误机器人/Muse |
| 移动 Gallery | 390/320 两列，768 三列 | 真实 contain，帽、耳、脚与尾完整；44px 主操作与系列按钮，无横向溢出 |
| View | 桌面左预览右信息；手机全屏纵向 | 原图、事实、复制、独立原图下载先出现；详情壳与图库 DOM 保持，无第二角色状态 |
| 编辑 | 同一 Studio 的 Edit 状态；真实颜色色块及素材缩略图 | 独立 Draft 与原图隔离；完整渲染/导出证据在 editor 验收，模板 pending 不对公开目录伪开放 |
| 指南 | 三步和原图/编辑/外部创作区别 | 采用 D02 清晰层级；只说明真实可用能力，没有安装、许可、自动附图、视频或账号承诺 |
| 透明与动态 | 无 blur 时实色；reduced-motion 移除过渡 | 静态角色不伪装成动画，真实 motion manager 按资源与暂停原因工作 |

## 视觉发现与处理

实际对照未发现错切轮廓、首屏空白、额外导航、过长 Hero 或实体场景残留。内容卡片按原图统一 contain，未对某个角色加专用缩放分支。输入及选中边界先提高到可辨对比度后才通过检查。修复过预览加载基址在 Vite 下的错误路径，并重跑实页，不把封面回退冒充高清加载成功。

图中紫色主按钮、浅紫选中态与低饱和深底沿用主稿关系；明确执行用户裁决而非逐像素复制原型错误。五个新增作品、模板默认重建与组合仍由各自 pending 艺术记录控制。工程视觉核对不等于用户批准。

## 验收边界

Chrome 本地自动化与 Codex 内嵌浏览器已看实页；没有把响应式视口称为实体手机验收。Safari/Firefox、真实 iOS/Android、安全区硬件和线上域名未测。编辑合成的最终视觉记录随 `design/acceptance/current-20261010-v99/editor/` 交付；未确认的艺术项保持未完成。Sites 身份、访问设置、依赖和历史证据保持。

## apply 期间补充裁决

[可视选择参考](design/acceptance/current-20261010-v99/visual-controls.md)要求编辑素材以可视选项呈现，现已使用真实图层缩略图，辅助短名称与明确选中描边。黑镜框在近黑检查底上可读性不足，改用中性灰透明检查底；实际素材像素保持。缩略图共用 PreviewLoader 的lease与预算，完成/取消/错误释放，失败可重试；普通View不请求这些图层。

[十张身份参考](design/acceptance/current-20261010-v99/identity-reference-20261010/README.md)明确 Dots/Grok 两类都无手脚，多种轮廓作为独立Artwork保持；不把参考中的Shape、Pets或其它未适配功能直接引入产品。通用Dots Prompt已强化无肢体身份，15原图未重绘。

最终素材冻结后，在 Codex 内嵌浏览器实际点击 Grok 的 Round glasses 和 Soft cap 缩略图；两项选中状态与组合预览同步更新，眼镜和帽子接触位置可见，页面无 error/warn 日志。该检查只确认操作与可见组合；Grok 默认眼型更扁、Dots 主体更圆等重建差异在[艺术审阅清单](design/acceptance/current-20261010-v99/art-approval-review.md)明确保留，未转成用户批准。

最终整轮 `run-2026-10-10T12-34-50-407Z` 通过后，已重新生成并查看上面的 D01/D02 实页对照，以及 [Dots全部12配置](design/acceptance/current-20261010-v99/visual/dots-orb-v1-all-configurations.png)、[Grok全部16配置](design/acceptance/current-20261010-v99/visual/grok-orb-v1-all-configurations.png)深/浅底总图。图库多外观、同壳View/Edit、可视选项与手机操作区均与当前裁决一致；图层总览的局部布局结论和待审差异见[素材视觉记录](design/acceptance/current-20261010-v99/materials/visual-review.md)。

## 2026-10-10 追加：无网格与基础 Characters

透明素材的页面网格已移除：图层缩略图为纯中灰，颜色样本与None占位保留语义，原PNG和Draft像素不加底色。新版CSS在两模板×四视口×双语16项与两模板焦点专项实测通过，截图与报告见 [无网格证据](design/acceptance/current-20261010-v99/no-grid-20261010/report.json)。此前editor-layout和D01/D02截图保留为历史证据，不能用其旧检查底证明本次显示。

青柠蛙领结与粉心墨镜两件参考驱动的完整静态候选已登记，非官方原始素材。新增详情在桌面英文/手机中文的复制、Esc、pending排除检查通过，全部24件原图均实际下载并核对hash/alpha；默认画廊仍15件，待审9件。两件深浅纯色底已实看，轮廓/配件完整，低alpha散点记录保留，未给予美术批准。详见 [追加验收](design/acceptance/current-20261010-v99/builtins-no-grid-20261010/README.md)。
