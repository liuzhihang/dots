# v83 本地冻结页面与交互证据

## 状态与来源

本地 cache revision 83 已冻结，source ID `30c3dfa7bb709a2eda4dd4ebfdf4df0390a4e5f5291998defcb178cc7cc9d451`，共 128 个路径；source 清单为 [source-snapshot.json](source-snapshot.json)。`gitHead` 是 baseline commit，不代表 dirty/untracked 工作树提交；source ID 是对清单内路径与内容的 SHA-256。运行时的 `dist/qa/character-source.json` 与该冻结清单同 source ID。

该版本已发布到原 Site version 35；[发布回执](site-release.json) 绑定相同 source 和源码提交。冻结记录与截图的 `userArtApproved` 均为 `false`，表示记录时尚未确认；2026-10-06 用户随后明确确认当前首页场景美术，见追加的 [user-art-approval.json](user-art-approval.json)，不追改历史字段。

## 实际页面截图

[native-pages-v83.json](../../../../../design/reference-home-correction-20261006/page/native-pages-v83.json) 记录 7 张由实际本机页面捕获的截图，均为 ready；内容宽度与 scrollWidth 相同，没有水平溢出。1280px 五张卡约 232.2px 宽、212px 高，y=358–570；创作入口约从 y=582 开始。

- 首页：[1280px](../../../../../design/reference-home-correction-20261006/page/home-1280-v83.png)、[768px](../../../../../design/reference-home-correction-20261006/page/home-768-v83.png)、[390px](../../../../../design/reference-home-correction-20261006/page/home-390-v83.png)、[320px](../../../../../design/reference-home-correction-20261006/page/home-320-v83.png)。
- 卡片区：[768px](../../../../../design/reference-home-correction-20261006/page/cards-768-v83.png)、[390px](../../../../../design/reference-home-correction-20261006/page/cards-390-v83.png)、[320px](../../../../../design/reference-home-correction-20261006/page/cards-320-v83.png)。

独立 [visual-review-v83.md](../../../../../design/reference-home-correction-20261006/visual-review-v83.md) 对照 R01 后评为内部 `passed`、无 P0/P1/P2。P3 观察包括 768px 第二排右侧留白、320px `Meta Muse` 标题换行、Dots 蓝色小球靠近底部脚注但仍可读。该报告不代表用户艺术确认或实体手机验收。

## 实际交互检查

[interaction-v83.json](../../../../../design/reference-home-correction-20261006/page/interaction-v83.json) 与上述页面绑定相同 source ID，实际检查记录如下：

- Meta Muse 家族卡导航到 `#looks/meta-muse`，显示 3 项；全部家族导航到 `#looks`，显示 15 项。
- intro 试选 `dots-rose-glasses` 后进入 `#workspace`；工作台标题为“莓粉圆框 Dots”，Composer 状态为 available，PNG 控件 enabled。
- 触发问候后 `aria-pressed=true`，project 与 Prompt 保持不变；console errors 为空。
- 点击 PNG 控件后页面显示“已导出当前形象 PNG 候选；尚待美术确认。”；Cua 下载事件在 15 秒后超时，随后根据当前点击时间戳从 Downloads 找回精确文件 `dots-rose-glasses-export.png`。该单张 PNG 已目视并检查为 1600×1600 RGBA、2,922,405 bytes、SHA-256 `41ba0c832711f5dfa10e8200464bddbb2c3675480d392b9e386e13ecd8efbc2c`，详见 [导出证据 JSON](dots-rose-glasses-export.json) 与 [PNG 文件](dots-rose-glasses-export.png)。此项只验证莓粉眼镜 Dots 当前候选，不代表五组 PNG 全量验证；v75 历史字节检查仍不绑定 v83。

[checks-v83.json](../../../../../design/reference-home-correction-20261006/checks-v83.json) 记录首页检查、15 项 Gallery、模块缓存、家族导航、7 张页面图、上述单张当前 PNG 字节回收与 strict OpenSpec 检查结果；OpenSpec 7 项检查无错误。代码/程序检查不等于网页美术通过。

## 版本边界

v81 是用户明确否定的历史家族卡页面；其旧内部 `passed` 不作为 v83 通过依据。v82 是人物/动物首次异步显示空白的中间诊断，不作为发布或验收证据。v83 只修正首页卡片与 intro 的同步解码显示，Gallery lazy loading 未改。当前内部页面评审通过，用户随后明确确认当前首页顶部与五组家族场景，refine change 3.3 已完成并归档；该 runtime 的 Site version 35 发布已完成，见本目录回执。原 3D 工程、全部 Gallery/PNG 和实体手机验收不由本次首页确认推导。

2026-10-06 发布回读：原站 [Dot Icon Studio](https://dot.liuzhihang.chatgpt.site) 的 **Site version 35** 已成功部署，source commit `041171998469a568e8647db9a66dedd84bfb469c`、cache 83。106 个运行文件经独立包审逐字节一致，原有 owner-only 访问配置 revision 1 保持不变。详见 [发布回执](site-release.json)；这是 Sites 原生部署与来源回读，不声称线上浏览器、实体手机或用户美术验收通过。
