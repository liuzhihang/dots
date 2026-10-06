# R01 首页纠偏记录 · 2026-10-06

## 当前状态

本地 v83 候选已冻结并通过 source 绑定的内部页面视觉复核；用户艺术确认未取得，实体手机没有验收证据，当前也没有 v83 Site 发布回执。内部页面通过不代表任何角色组获得用户美术批准。

本轮针对用户否定的 v81 家族卡比例、全身目录式站位和独立字幕行进行纠偏：在 1280px 视口将五卡还原到 R01 约 212px 高的横向画面，保留近景/贴叠群像、底部共享字幕和有意艺术裁切。脸部、组别特征与道具接触不得被意外裁断。R01 网页图只作为构图/风格参考，禁止直接复用其中像素或从网页/动漫截图裁片；独立新插画可按设计稿做视口艺术裁切。详细身份与比例见 [change design](../../openspec/changes/refine-family-scene-composition/design.md) 和 [spec delta](../../openspec/changes/refine-family-scene-composition/specs/studio-visual-experience/spec.md)。

## 版本与独立评审

- v81 是已被用户明确否定的历史页面。差异分析保留在 [baseline review](baseline-review.md)；v81 之前的内部 `passed` 仅作历史记录。
- v82 只用于诊断首次进入人物/动物时的异步显示空白，不作为当前版本、发布版本或验收结论。
- v83 cache revision 83，source ID `30c3dfa7bb709a2eda4dd4ebfdf4df0390a4e5f5291998defcb178cc7cc9d451`，冻结 128 个路径。完整清单见 [v83 acceptance source snapshot](../../openspec/changes/rebuild-character-system/acceptance/current-20261005-v83/source-snapshot.json)。其中 `gitHead` 是 baseline commit；source ID 则计算快照列出的工作树路径与内容。
- [独立视觉报告](visual-review-v83.md) 只评估绑定 v83 source 的真实页面，结论为内部通过、无 P0/P1/P2；保留 768px 第二排留白、320px Meta Muse 标题换行、Dots 蓝球靠近脚注但仍可读等 P3 观察。

## 页面与交互证据

[真实页面索引](page/native-pages-v83.json) 绑定上述 source ID，包含 1280、768、390、320 首页及 768、390、320 家族卡视图，共 7 张；图像均 ready，无横向溢出。桌面卡片约 232.2px 宽、212px 高，位于 y=358–570，创作入口约从 y=582 开始。页面截图：

- 首页：[1280px](page/home-1280-v83.png)、[768px](page/home-768-v83.png)、[390px](page/home-390-v83.png)、[320px](page/home-320-v83.png)。
- 家族卡：[768px](page/cards-768-v83.png)、[390px](page/cards-390-v83.png)、[320px](page/cards-320-v83.png)。

[交互记录](page/interaction-v83.json) 显示：Meta Muse 卡进入 3 项筛选，全部家族进入 15 项 Gallery；intro 试选“莓粉圆框 Dots”进入工作台，模板可用且导出控件 enabled；问候反馈不改变 project 或 Prompt，console errors 为空。PNG 点击显示“已导出当前形象 PNG 候选” toast。Cua 下载事件虽超时，之后从 Downloads 依据精确文件名和当前点击时间戳恢复出本次文件；[v83 导出 PNG](../../openspec/changes/rebuild-character-system/acceptance/current-20261005-v83/dots-rose-glasses-export.png) 已核验为 1600×1600 RGBA、2,922,405 bytes，SHA-256 `41ba0c832711f5dfa10e8200464bddbb2c3675480d392b9e386e13ecd8efbc2c`，目视为正确莓粉眼镜 Dots 角色。此证据仅覆盖这一张候选图，不代表五组 PNG 全量验证。

[检查记录](checks-v83.json) 绑定相同 source ID，记录首页解码、15 项 Gallery、模块缓存、家族导航与 OpenSpec strict 检查通过；程序检查不替代网页评审或用户确认。v83 只调整首页卡片和 intro 的同步解码显示路径，Gallery lazy loading 未修改。

## 未完成事项

- `refine-family-scene-composition` 3.3 与 `rebuild-character-system` 用户确认仍 pending，`userArtApproved` 为 false。
- v83 莓粉眼镜 Dots 单张 PNG 的字节已验证；其它角色/家族导出的 PNG 字节未在此轮验证。v75 历史检查不作为 v83 证据。
- 实体手机测试和 v83 Site 发布回读尚未完成；不得预填发布成功。

验收索引见 [current-v83 README](../../openspec/changes/rebuild-character-system/acceptance/current-20261005-v83/README.md)，总体页面 QA 见 [design-qa.md](../../design-qa.md)。
