# Proposal

## Why

Dot Icon Studio v27 的实时角色仍粗糙，配饰接触不自然；旧 Muse 是卷发人偶，与用户指定的 Meta Muse 不符，且人物没有独立分组。需要将「优化角色与交互」会话确认的五组角色和美术约束落实为可逐组验收的改造合同，防止再次遗漏 Grok Bot 或用效果图代替实际网页。

## What Changes

- 核心是让用户创建并带走形象：编辑后的实时 PNG/JSON 导出、复制或下载完整 Prompt、复制并打开 ChatGPT，以及在 ChatGPT 另附自己的图片配合参考 Prompt 生成。不建设登录、账号、个人空间或云端角色库。
- [bloub](https://bloub.vercel.app/) 和 [Grokbot Icon](https://grokbot-icon-studio.serio-ai.chatgpt.site/) 仅参考创作与输出思路，视觉仍按既定会话设计与 R01；不移植两站布局、配色或素材。

- 以用户本轮确认的 [R01 整体方向图](references/r01-confirmed-direction.jpg) 为最终视觉方向：柔和明亮配色、精细角色材质、鲜活表情、角色与配饰自然结合。整体方向确认不替代各组原版身份校准或真实网页验收。
- 保留五个独立分组：Dots、Grok Bot、Meta Muse、人物、动物。旧 Muse 人偶归入人物兼容路径；Meta Muse 使用独立的米白色包覆式形象，不能仅重命名旧人偶。
- Dots 保留已确认的官方基础形象语言，修复耳机等配饰的连接、贴合、比例和遮挡；Grok Bot 保留官方基础语言中的柔和几何轮廓、胶囊眼、哑光软胶，以及默认点列思考、默认液滴工作和现有表现切换。
- 人物和动物重新设计。用户明确这些参考原图来自动漫截图，不能把原图、裁切抠图或截图纹理用于页面角色资产，也不能还原完整动漫角色；仅提炼比例、发束、毛发、材质分区和表情语言再做原创组合。
- 按用户明确的使用范围，Dots、Grok Bot、Meta Muse 及 Codex 等软件内置角色可沿用对应原版身份，保留来源说明，不必强制改成原创角色。本轮仍只保留五组，不因此新增 Codex 分组或批量增加基准。
- 统一规范角色自身明暗与接触层次，取消所有角色脚底的椭圆阴影团。
- 每组先实现一只可编辑的基准角色；记录真实页面美术验收并由用户确认后，才允许扩展该组。
- 保留配置、撤销、JSON 导入导出、Prompt 与当前预览 PNG 等实际能力。原站 reference mode 仅提供文字保留选项，不将图片导入描述为已实现。
- 分类导航与全屏随机体验分别由后续独立 change `refactor-family-navigation`、`add-fullscreen-randomizer` 管理。本 change 仅完成五组角色的最小选择接入与现有随机逻辑兼容，不重做导航布局或全屏流程。

最初阶段只生成 proposal、specs、design、tasks 与参考索引；之后用户明确授权进入 apply，并完成了程序化候选实现与程序验证。2026-10-05 用户审阅当前五组实际页面候选后明确否决其外观；五组均未通过网页美术验收，未解锁扩展，也未发布。没有申请破坏旧 JSON 的格式变更；必要的 schema 演进须保留旧状态的明确迁移语义。

## Capabilities

### New Capabilities

- `character-families`: 五组角色的身份、材质、基准样例、来源区分与旧配置迁移。
- `character-contact-and-motion`: 配饰接触、物种肢体、状态运动、无脚底阴影团及实际导出一致性。
- `character-visual-acceptance`: 基于真实页面的逐组验收、证据要求和扩展门槛。

### Modified Capabilities

无。源码此前没有 OpenSpec specs；上述为本次增量合同，不宣称整站历史行为已完成规格化，也不覆盖现有 README。

## Impact

基线为原 Sites 项目 `appgprj_6abf8f3128308191b2f8a2a9c6003704`，保存版本 v27，Git HEAD `eea2a0dd71ba2e3162d11e32fbb1d2be3518e8c3`，源码已通过 Sites 原仓库拉取到当前目录。

本 change 涉及 `dist/studio-model.js`、`dist/studio-catalog.js`、`dist/studio-art.js`、`dist/studio-inspiration.js`，以及 `src/live/avatar-body.js`、`avatar-props.js`、`surface-fur.js`、`activity-system.js`、`live-preview.js`、`software-renderer.js`。`dist/studio.js` 和 `dist/studio-random.js` 当前直接枚举同一 FAMILIES，必须避免角色注册引起无关交互改造。延续现有 Three.js、原生 JS、Vite、esbuild 与静态 `dist` 发布方式；不预先升级依赖或引入新渲染框架。

现已获 apply 与私有 Git 仓库管理授权，在本机实施、检查、提交源码；网页美术和用户逐组确认分别记录，不保存 Sites 新版本、不发布。

2026-10-05 用户进一步询问完整图＋Prompt 与组合是否并存，并强调整体效果。推荐将两者建立在同一精细基准与角色设定上，具体见 [资产路线复审](asset-route-review.md)。这是针对当前候选被否决的方案修订，尚未替换现行多视角/动作合同，也未实现新图片资产路径。
