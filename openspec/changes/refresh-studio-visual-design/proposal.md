# Proposal

## Why

当前首页仍呈现旧式编辑器工作台，已确认的 R01 首页气质和角色创作流程没有落到真实页面，用户因此无法直接理解五个家族及如何制作并带走形象。本 change 将 R01 落实为现有站点的首页与创作体验，同时维持真实素材、导出能力和逐组美术验收的边界。

## What Changes

- 将现有页面重排为 R01 的明亮、柔和、精致视觉：简洁品牌顶栏、宽幅角色主视觉与创作入口、五家族展示区、可直接进入的创作工作台。
- 建立一致的排版、间距、颜色、卡片、按钮、背景和响应式规则；为 Dots、Grok Bot、Meta Muse、人物、动物保留五个独立家族识别。
- 将 Artwork、Composer、参考图 Prompt、项目配置、复制 Prompt、TXT/JSON/PNG 导出及打开 ChatGPT 等既有能力纳入清楚的创作路径；标明用户须在 ChatGPT 另附自己的图片。
- 每组只呈现一只基准候选；真实站点页面中的身份、材质、配饰接触和导出验收及用户逐组确认仍是扩展门槛。示意图、历史整图和构建结果不能充当验收。
- 不建设登录、账号、个人空间、云端角色库或站内图片生成服务。人物与动物使用原创角色设计，不采用动漫截图像素或完整角色造型。
- 分类导航交互与全屏随机流程分别由 `refactor-family-navigation`、`add-fullscreen-randomizer` 管理，本 change 定义整体视觉系统和首页/创作区呈现，不合并它们的状态机。

## Capabilities

### New Capabilities

- `studio-visual-experience`: R01 视觉方向、首页信息层级、创作工作台呈现、五家族视觉识别及响应式规则。
- `studio-creation-experience`: 无账号的整图/组合/个人参考图 Prompt 路径，以及导出、复制和 ChatGPT 入口的可见性与真实状态说明。

### Modified Capabilities

无。当前仓库尚无主 `openspec/specs/` 能力；创作与素材能力边界沿用 `rebuild-character-system` 已有变更合同，不覆盖其文件。

## Impact

影响原生 HTML、CSS、JavaScript 静态站点中首页和创作工作台的布局、组件样式及浏览器交互；沿用 Vite、Three.js 与现有状态/创作模块，不引入前端框架或认证服务。参考依据为 [已确认的 R01](../rebuild-character-system/references/r01-confirmed-direction.jpg) 和现有 `dist/` 实现。

## Feedback correction · 2026-10-05

用户手机截图仍呈现历史人物/Grok，且 Meta Muse 缺图。源码和保存版本已有五组新候选；旧素材目录被稳定子模块 URL 缓存复用是强推测，尚未在用户手机抓到响应。修复须使整个本地 ES module 依赖图使用同一发布版本，同时撤下用户明确否决的卷发阅读人物及其公开 PNG。旧项目保留人物配置并明确提示已撤下原图，不能静默替换为另一个角色。Muse 保持一只待确认基准，本轮不扩充角色，也不将统一组合流程建议视为已确认设计。
