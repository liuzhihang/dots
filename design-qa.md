# 当前页面设计 QA · 2026-10-06

final result: internal-pass

当前本地候选为 cache revision 83，source ID `30c3dfa7bb709a2eda4dd4ebfdf4df0390a4e5f5291998defcb178cc7cc9d451`，128 个冻结路径。source 绑定的独立真实页面复核未发现 P0/P1/P2，内部评审通过；`userArtApproved: false`。这只表示本轮截图中的布局、角色组合和响应式表现通过内部评审，用户逐组美术确认仍由 `rebuild-character-system` §3.3 承担，保持 pending。

## v83 页面与实现证据

- [v83 页面验收记录](openspec/changes/rebuild-character-system/acceptance/current-20261005-v83/README.md) 链接冻结的 source snapshot、4 个首页宽度及 3 个卡片视图、实际交互记录和独立视觉报告。
- [独立视觉报告](design/reference-home-correction-20261006/visual-review-v83.md) 将桌面卡片记录为 212px 高、约 232px 宽，创作入口约从 y=582 开始；768/390/320 的卡片主体保持可读，无水平溢出。P3 观察为 768 第二排右侧留白、320px 的 Meta Muse 标题换行，以及 Dots 蓝色小球靠近脚注但仍可读。
- [页面索引](design/reference-home-correction-20261006/page/native-pages-v83.json) 中 7 张实际截图均 ready，记录的 `scrollWidth` 与 viewport 内容宽度一致。页面仍只是本地冻结候选，尚无新的站点发布回执。
- [检查记录](design/reference-home-correction-20261006/checks-v83.json) 将首页解码、15 个 Gallery 模板、模块缓存、家族导航和 OpenSpec strict 记录为通过；这些检查不授予角色美术确认。

## 实际交互与边界

[v83 交互记录](design/reference-home-correction-20261006/page/interaction-v83.json) 绑定相同 source ID：Muse 家族卡进入 3 项筛选，全部家族进入 15 项 Gallery；莓粉眼镜 Dots 从 intro 进入 Composer 工作台，标题和导出控件状态正确；问候交互保持项目与 Prompt 不变，console errors 为空。PNG 按钮可用，点击后显示候选导出 toast。Cua 下载事件虽超时，之后从 Downloads 以当前点击时间戳恢复唯一对应文件，并完成字节与 RGBA/尺寸检查：[v83 导出 PNG](openspec/changes/rebuild-character-system/acceptance/current-20261005-v83/dots-rose-glasses-export.png)，1600×1600、2,922,405 bytes、SHA-256 `41ba0c832711f5dfa10e8200464bddbb2c3675480d392b9e386e13ecd8efbc2c`。这是单张莓粉眼镜 Dots 候选的实测，不代表五组 PNG 全量验证。

v81 是用户明确否定的历史版本，其当时的 `passed` 不作为 v83 依据；v82 是用于诊断首次人物/动物异步画面空白的中间版本，不作为发布或验收依据。v83 只调整首页卡片与 intro 的同步解码显示路径，Gallery lazy loading 未改。实体手机、用户美术确认和 Site 发布回读均未完成或无证据，不得推断为通过。`rebuild-character-system` §3.3 与 refinement 3.3 仍 pending。
