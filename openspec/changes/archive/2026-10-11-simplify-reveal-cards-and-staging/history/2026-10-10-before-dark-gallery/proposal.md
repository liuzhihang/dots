# Proposal

## Why

当前首页仍以固定高度 Hero、下方 Featured 内容及旧抽卡行为为中心，偏离“挑选角色 → 查看详情 → 复制 Prompt / 下载已有作品 → 在 ChatGPT 附图创作”的主路径。用户拒绝 v96，反馈“实现和原型差距很大…人物悬浮，和背景没有任何关系，角色缺少…原型图是多个页面的拼版”；本 change 已记录 v97 场景尝试，最新 v98 方向要求满屏自适应露台背景、场景内分类 overlay、角色轮廓反馈，并补充新的候选角色。

## What Changes

- 首页只有一个黄昏露台背景，按视口自适应填满屏幕；桌面、平板、手机按各自比例使用同一场景叙事。P02 决定台阶纵深、宽幅构图和前中远景，P01 提供克制黄昏光色。首页类别仅以背景 overlay 呈现，不保留 Featured 作品区、大分类卡或第二主题。
- 完整合成场景负责统一人物、动物、家具、台阶、承托、阴影和遮挡；ScenePlacement 热区固定绑定图中可见 Artwork ID / 版本。指针 hover / 键盘 focus 除简短提示外，沿真实角色轮廓提供 UI 描边动画；减少动态偏好下显示静态描边，不移动、重绘或宣称角色独立表情动画。
- 原有15个已批准 Artwork 继续保持其 ID/version、原图字节与批准范围。补充白色原创机器人、白兔及用户后续明确的新伙伴作为独立 pending 候选身份；候选通过 `PREVIEW_*` 静态集合登记，可用相同 Artwork 详情 URL 查看真实资源并明确标注待确认，不进入默认画廊、搜索或发布资格，也不得冒充已有角色。
- 画廊与详情仍按 P01 对应页面层级和控件实现。画廊提供真实搜索、系列筛选、空结果和清除条件；默认静态封面，只有实际登记动画资源才可提供播放控制。场景画面的桌面、平板和手机资源按各自尺寸和真实可见角色独立登记，不以平板裁切误开热点。
- 首页和画廊共用 Artwork ID / 版本、详情组件和可直接访问的详情 URL；关闭、返回恢复来源、查询、滚动与焦点。
- 详情优先原图、名称、短描述、少量标签、复制 Prompt、真实下载、Open in ChatGPT、Prompt 预览与真实动作 / 变体。默认折叠“创作我的版本”，保留 / 移除 / 替换只生成修改 Prompt，不改变作品事实或下载文件。
- 保留英文与简体中文，增加轻量静态创作指南；图片由用户在 ChatGPT 自行附上。沿用原生 ES 模块、现有 Vite 和仓库内静态清单，不增加后端或框架。
- **BREAKING**：随机、老虎机、抽卡、灵感游戏、结果弹窗、Feature 锁定及独立参考图工作台退出运行与发布；不保留旧路由、Schema、存储迁移、适配器或双版本开关。
- **BREAKING**：旧双 Hero / 五张宣传专题卡及旧揭晓素材合同退出当前验收；已有原图、来源、Git 历史、OpenSpec 归档和失败 / 待确认记录保留。`dist/` 同时是源码与发布树，只按明确清单处理，不整体清空。

## Capabilities

### New Capabilities

无。新行为纳入现有能力，避免重复规范或引入不需要的 Provider / 后端抽象。

### Modified Capabilities

- `artwork-catalog`：静态 approved 与 pending preview 目录分离；详情、场景、预览 / 下载使用各自真实引用和状态，发布只接受 approved 资源；移除卡片派生及揭晓素材依赖。
- `catalog-tags`：双语文本与系列筛选、少量展示标签，移除首页专题卡要求。
- `character-contact-and-motion`：真实接触关系、完整场景中的稳定热点、沿角色轮廓的 UI 描边反馈与真实动画暂停 / 降级；首页静态整景不叠透明角色素材。
- `character-families`：按 C01–C03 锁定现有身份材质及柴犬特征；新增原创白色机器人、白兔作为独立 pending 身份，不冒充 Grok 或既有动物，不统一毛绒化或临时加肢体。
- `character-visual-acceptance`：新原型映射、素材缺口、功能和视觉分开验收，退出旧揭晓验收合同。
- `family-navigation`：首页 / 画廊 / 指南、共用详情 URL、来源恢复和无障碍。
- `fullscreen-randomizer`：移除全部七项随机能力要求；历史规范与证据保留，不提供运行兼容。
- `reference-creation`：改为详情内 Prompt 修改意图与静态指南，无上传和独立编辑器。
- `studio-creation-experience`：同版本详情、原子变体切换和作品优先的信息层级。
- `studio-visual-experience`：满屏自适应单一阶梯露台、场景 overlay 分类、无 Featured 区、开放画廊、双语及响应式布局。
- `target-resources`：仅展示真实静态 / 变体 / 动画及下载，撤下公开目标格式资料和未验证 Pet 能力。

## Impact

- 主要影响 `dist/studio*.js/css`、`dist/index.html`、静态资源清单、`scripts/build-studio.mjs`、相关验证脚本及现行产品文档；文件级去留和规范 / 测试替代关系见 [design.md](design.md)。依赖版本、OpenSpec 1.14.1、根配置与 `.openai/hosting.json` 的 Site 身份保持现状。
- 现有 15 件原图的历史批准继续只覆盖各自原图。v97 场景和页面候选及其审阅记录保留原样，不覆盖为 v98 通过或批准。v98 新增白色原创机器人、白兔等实际资源通过独立候选身份与 pending 状态进入 `PREVIEW_*`；整景与页面呈现仍需用户艺术确认，且不继承 15 张原图批准。候选资源虽会出现在完整 dist 静态树中，构建报告须标记 `deploymentReady:false`；本轮没有部署授权。原型拼版只能按各自页面面板作布局参考，不裁作生产资产。
- 本 change 已获 apply 授权并进入实施；范围合同见 proposal、design 与 delta specs，当前进度及验收状态以 `tasks.md` 和当次证据为准。主规范未修改，尚未执行 sync、archive、commit 或部署；用户美术确认与部署仍是独立关口，部署需另行授权。
- 旧 34/35 项及三个 delta 的原字节快照见 [history/2026-10-09-before-static-refocus](history/2026-10-09-before-static-refocus/README.md)，旧末项美术批准仍未完成。v98任务状态以当前 `tasks.md` 勾选和 `design/acceptance/current-20261009-v98/` 证据为准；旧 `implementation/` 和历史 `planning/` 内容保持原样，只作历史依据。
- 本轮原型输入见 [planning/static-experience-20261009](planning/static-experience-20261009/source-manifest.json)。P01 / P02 都是多页概念拼版，必须识别首页、画廊、详情和手机面板，再按目标视口重新确定构图与满屏背景适配；历史拼版、HTML Demo、老虎机与工作台稿不再作为并列依据。v96 拒绝记录、v97候选证据和15件母图批准边界保持原样；v98 pending候选不得冒充用户批准。
