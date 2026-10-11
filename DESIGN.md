# Dots 视觉方向

## 原型与主视觉

- 桌面以 [D01 主稿](openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/dark-gallery-20261010/source-package/references/D01-main-third-dark-gallery-studio.png) 为唯一视觉基准；按拼版中的页面面板分别参考，不把整张拼版当作页面背景。
- [D02 手机补充稿](openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/dark-gallery-20261010/source-package/references/D02-support-first-mobile-guide.png) 只补充移动端细节。它其中的 Guide 页面不是产品页面。
- 首页 banner 延续左侧标题、右侧角色群像。英文标题为 “Make It / Your Dot.”，中文为“创造”/“你的Dot.”，浏览器标题为“创造你的Dot.”；短介绍使用当前双语主规范中的精简文案。
- 群像可以包含机器人、戴耳机并系领带的兔子、人物和 Muse。机器人是独立角色身份；Dots 与 Grok 保持各自材质和无肢体身份。Hero 插画只作为 UI 装饰，不登记为 Artwork，不进入角色卡、Studio 或导出。

## 视觉原则

- 深色数字画布、克制的紫蓝强调色、局部半透明烟色玻璃；模糊不可用或用户减少透明度时，使用清晰不透明底。
- 用真实登记的完整角色素材呈现角色，保持帽、耳、发型、肢体、尾巴及配件完整；展示背景和 UI 装饰不能烘焙进角色 PNG。
- 保持清楚的标题、筛选、角色卡和操作层级；避免页面控件错位、图标命中区偏离可见按钮、文字或标签挤压角色图像。
- 双语、响应式、键盘焦点、对比度、触控目标、减少动效和无模糊降级都需要在实际页面验收，不以效果图代替。

## 规范入口

交互与可访问性细则以 OpenSpec 主规范为准，本文件只保留视觉方向与原型索引：

- [首页与图库视觉](openspec/specs/studio-visual-experience/spec.md)
- [Studio 创建与导航行为](openspec/specs/studio-creation-experience/spec.md) 与 [系列导航](openspec/specs/family-navigation/spec.md)
- [Artwork 与资格](openspec/specs/artwork-catalog/spec.md)、[筛选标签](openspec/specs/catalog-tags/spec.md) 与 [角色系列身份](openspec/specs/character-families/spec.md)
- [模板编辑边界](openspec/specs/bounded-character-editing/spec.md) 与 [视觉验收](openspec/specs/character-visual-acceptance/spec.md)
- 制作/接入流程见 [角色新增规范](design/character-authoring/README.md)；当前站点回执从 [精选发布记录](design/releases/20261011-site47-v99/README.md) 进入。

## 全角色调整接入

本轮接入沿用上述主视觉。角色素材与有限组合以 [精确批准记录](design/acceptance/20261011-character-adjustments-v1/approval.json) 和 [已归档 change](openspec/changes/archive/2026-10-11-expand-character-gallery-and-adjustments/design.md) 为准：角色 PNG 保留真实透明；Dots / Grok Bot 无肢体、不提供服装；其余家族按真实模板提供服装。详情统一使用“角色调整”，所有选项驱动同一预览、Prompt 和透明导出。当前文件与验证入口见 [v100 本地集成记录](design/releases/20261011-gallery-adjustments-v100/README.md)，不改变 Site 47 的发布状态。
