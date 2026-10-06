# Dot Icon Studio 产品与设计约定

Dot Icon Studio 帮用户浏览并创作角色形象。产品围绕五个独立家族：**Dots、Grok Bot、Meta Muse、人物、动物**。主要路径是内置形象画廊与统一创作工作台，不要求登录、账户或个人空间。用户可在站内查看登记素材、选择受支持的设定、复制 Prompt、导出允许的图片，或自行把 Prompt 和图片带到 ChatGPT；站点不会替用户上传或发送。

## 家族、图库与场景

当前 Gallery 登记 15 个 look：每组一只 canonical 基准和两只候选。这是当前真实图库目录，不是未来永久数量限制，也不决定首页或家族卡插画中的角色人数。展示场景中的 scene-only 成员不能自动变成可编辑、可下载或可随机抽取的 look。Site 35/cache 83 上这 15 个当前图库/工作台模板形象均已按“模板 PNG + 背景合成 + Prompt”范围完成人工美术确认；该确认不永久限定图库人数。

首页与家族卡遵循用户选定的 R01 方向：[R01 参考图](openspec/changes/archive/2026-10-06-rebuild-character-system/references/r01-confirmed-direction.jpg)、[当前主视觉体验规范](openspec/specs/studio-visual-experience/spec.md)。本轮具体复原记录与版本边界见[首页纠偏记录](design/reference-home-correction-20261006/README.md)。R01 可以作为构图、服装风格、配色、材质和群像关系的参考；网站最终使用独立制作的场景图，不直接嵌入整页截图，不裁切/抠取截图像素，也不把 UI 或文字烘焙进角色图。允许独立新插画依参考构图在网页视口内做有意的艺术裁切。

人物和动物必须是原创身份：不得复用用户提供的动漫截图像素、裁片或贴图，也不得复制完整可辨认的动漫角色。Dots、Grok Bot、Meta Muse 与软件内置形象可在既有身份和素材来源范围内使用。Meta Muse 的 A02 身份调整仅适用于本轮指定的 Muse 展示场景，不扩写成对所有图库形象的身份许可。

首页顶部及 Dots、Grok Bot、Humans、Animals 家族卡忠实按 R01 实施，只允许指定的 Muse 身份微调。顶部左侧保留紫色耳机 Dot、栗发白衣挥手男孩、小粉三角、绿云、蓝水滴；右侧保留黄衣丸子头眨眼 V 手势女孩、柴犬、橙豆形、青绿方形，并将原奶油伙伴换为单只 A02 Muse。主标题及操作位于中央留白中。

| 家族卡 | 当前选定画面与识别特征 | 接触与材质要求 |
| --- | --- | --- |
| Dots | 紫色耳机主体与蓝、粉色眼镜、小黄伙伴；斜置白胶囊眼 | 紫主体为光滑缎面；连续耳机头梁、耳罩贴合，眼镜自然落在粉色伙伴上 |
| Grok Bot | 绿云在上，橙后左、蓝前左、青绿在前、紫三角后右、红六边形前右 | 软质几何伙伴，保留斜胶囊眼与 R01 前后层次，不能退回灰白笔电角色 |
| Meta Muse | 单只奶油 hood、暖色内嵌脸面、短圆肢体 | 细腻布面，罩口厚度清楚；仅家族卡抱星、点缀 sage 植物；手臂承托星星，植物不穿体。顶部 Muse 不持星、不带植物 |
| Humans | 左黑发深色 hoodie 男孩，中黄衣丸子头眨眼女孩，右金发圆框眼镜灰外套角色 | 原创脸面，细发丝/皮肤/布料；近景群像有贴靠与动作，眼镜和衣物自然接触 |
| Animals | 柴犬、哈士奇、猴子、小猪、小蓝鸟的高低前后群像 | 原创身份及细毛绒；脸、耳、爪与尾结构清楚，相邻角色无错误穿插 |

卡片依 R01 使用淡紫、淡绿、暖米白、浅蓝、浅桃背景，标题/中文说明/插画/两行英文短句由 DOM 呈现。桌面保持参考稿约 212px 卡高的横向画面和共享底部文案；尊重下缘渐隐与有意艺术裁切，不为露出全部脚部缩小所有角色、加高卡片或改成全身目录站队。关键脸部、耳朵和配饰接触保持可辨。当前 4/6/1/3/5 是选定场景的事实，后续人数由新设计范围决定。

## 创作与导出语义

- 画廊原图下载是登记文件的原样下载，不随 Prompt 参数变化。
- 工作台 PNG 只在当前设定有受信任且受支持的素材配方时，才从实际 Canvas 合成角色与背景。配置不受支持时保留 Prompt，并明确显示静态预览边界、禁用当前配置图片导出；不得把静态预览称作已按设定生成。
- 当前高级设定与 3D 结构诊断是不同能力。未由可验证素材配方支持的细节可以写入 Prompt，但不能宣称已渲染到 PNG。
- “结构诊断”保留旧 Three.js/WebGL、CPU fallback、多视角、动作和接触检查，用于检查程序化模型，不是成品交付路径。当前不以真实 3D 为成品目标；若未来另行批准 3D 交付，应另建范围与验收合同。
- 项目 JSON 使用 `dot-studio-project` v1 外层包装已有角色 VERSION 10；JSON 不内嵌图像字节或任意图片 URL。除非单独批准 schema 变更，不升级现有角色格式。

## 页面验收与版本证据

设计验收绑定实际 source/cache 版本及对应页面。生成效果图、构建成功、脚本通过、任务勾选或发布 receipt 都不能单独代表网页美术通过；不能用历史版本截图替代当前页面，也不能把内部 review 说成用户批准。窄屏实际视口检查不等于实体手机验收。

用户已对 **Site version 35、cache 83、sourceId `30c3dfa7bb709a2eda4dd4ebfdf4df0390a4e5f5291998defcb178cc7cc9d451`** 的首页顶部与五组家族场景，以及五组当前 Gallery/工作台形象，完成人工美术确认。首页/场景确认见[用户美术确认记录](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/user-art-approval.json)，图库/工作台确认见[模板范围确认记录](openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json)。[范围决策](openspec/changes/archive/2026-10-06-rebuild-character-system/scope-decision-20261006.json)将交付限定为 PNG 模板、背景合成和 Prompt，并取消旧 11 项 3D 工程/精细基准目标；旧 3D 仅保留结构诊断用途，不把取消写作 3D 验收通过。旧任务表 20/36 是原范围下的历史勾选状态。Site 35 发布回执只证明发布来源，不单独作为美术确认凭据。全量 PNG 导出字节与实体手机未完成验证。

## 开发与发布

实现以现有源码、`package.json`、OpenSpec 主规范和 change 为准。页面/静态素材在 `dist/`，实时渲染实现位于 `src/live/`，脚本验证位于 `scripts/`。修改实时渲染后按项目命令重建 `dist/live-runtime.js`。后续 QA 冻结输出写入 `design/acceptance/current-<本机日期>-v<cache版本>/`，不再输出到已归档 change，且不得覆盖已有冻结目录。当前 Site identity 与静态发布目录保存在项目既有配置中；Git commit/push 不等于 Sites 保存版本或部署，操作任何一端都要分别回读结果。项目根 OpenSpec 配置使用本机 1.13.1，沿用现有配置，不自动升级或重新初始化。
