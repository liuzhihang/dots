# 当前页面设计 QA · 2026-10-06

final result: homepage-and-gallery-template-art-approved; legacy-3d-scope-cancelled; current-scope-closed

Site version 35/cache revision 83 的 source ID 为 `30c3dfa7bb709a2eda4dd4ebfdf4df0390a4e5f5291998defcb178cc7cc9d451`，绑定 128 个冻结路径。source 绑定的独立真实页面复核未发现 P0/P1/P2，内部评审通过。2026-10-06 用户确认了该版本首页顶部与五组家族场景，也确认五组当前 Gallery/工作台模板形象在“PNG 模板、背景合成、Prompt”范围内的美术。分别见[场景确认记录](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/user-art-approval.json)和[图库/工作台模板确认记录](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json)。原冻结、独立报告与发布回执中的 `userArtApproved: false` 是记录当时的历史状态，保持原值。全量 PNG 导出字节和实体手机仍未验证。

## v83 页面与实现证据

- [v83 页面验收记录](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/README.md) 链接冻结的 source snapshot、4 个首页宽度及 3 个卡片视图、实际交互记录和独立视觉报告。
- [独立视觉报告](design/reference-home-correction-20261006/visual-review-v83.md) 将桌面卡片记录为 212px 高、约 232px 宽，创作入口约从 y=582 开始；768/390/320 的卡片主体保持可读，无水平溢出。P3 观察为 768 第二排右侧留白、320px 的 Meta Muse 标题换行，以及 Dots 蓝色小球靠近脚注但仍可读。
- [页面索引](design/reference-home-correction-20261006/page/native-pages-v83.json) 中 7 张实际截图均 ready，记录的 `scrollWidth` 与 viewport 内容宽度一致。同一冻结 runtime 已发布到原 Site version 35，发布回执见下。
- [检查记录](design/reference-home-correction-20261006/checks-v83.json) 将首页解码、15 个 Gallery 模板、模块缓存、家族导航和 OpenSpec strict 记录为通过；这些检查不授予角色美术确认。

## 实际交互与边界

[v83 交互记录](design/reference-home-correction-20261006/page/interaction-v83.json) 绑定相同 source ID：Muse 家族卡进入 3 项筛选，全部家族进入 15 项 Gallery；莓粉眼镜 Dots 从 intro 进入 Composer 工作台，标题和导出控件状态正确；问候交互保持项目与 Prompt 不变，console errors 为空。PNG 按钮可用，点击后显示候选导出 toast。Cua 下载事件虽超时，之后从 Downloads 以当前点击时间戳恢复唯一对应文件，并完成字节与 RGBA/尺寸检查：[v83 导出 PNG](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/dots-rose-glasses-export.png)，1600×1600、2,922,405 bytes、SHA-256 `41ba0c832711f5dfa10e8200464bddbb2c3675480d392b9e386e13ecd8efbc2c`。这是单张莓粉眼镜 Dots PNG 的字节实测，不代表五组所有 PNG 导出文件全量核验。

v81 是用户明确否定的历史版本，其当时的 `passed` 不作为 v83 依据；v82 是用于诊断首次人物/动物异步画面空白的中间版本，不作为发布或验收依据。v83 只调整首页卡片与 intro 的同步解码显示路径，Gallery lazy loading 未改。Site 版本、源码与访问配置已按本次发布原生结果回读。refinement 3.3 的场景范围确认完成；五组当前 Gallery/工作台模板美术也按新记录获用户确认。原 11 项 3D 工程/精细基准目标依[范围决策](openspec/changes/archive/2026-10-06-rebuild-character-system/scope-decision-20261006.json)取消，不称为 3D 通过。实体手机和所有 PNG 导出字节仍无全量验收证据。

2026-10-06 发布回读：原站 [Dot Icon Studio](https://dot.liuzhihang.chatgpt.site) 的 **Site version 35** 已成功部署，source commit `041171998469a568e8647db9a66dedd84bfb469c`、cache 83。106 个运行文件经独立包审逐字节一致，原有 owner-only 访问配置 revision 1 保持不变。详见[发布回执](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/site-release.json)；这是 Sites 来源和部署回读，用户的图库/工作台模板美术确认另见[确认记录](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json)。实体手机仍没有验收证据。
