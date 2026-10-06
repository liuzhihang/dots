# 任务

> 2026-10-06：用户否定 v81 的家族卡还原。相关素材、布局和页面评审任务重开；旧截图/报告仅作为历史证据，不表示当前要求达成。修正目标见 design 的“v81 用户否定后的修正”。

> 1.2–1.4、2.1 和 4.x 的勾选表示源代码/素材实现与绑定来源的页面、程序证据已完成，不等于页面美术通过。独立页面评审见 3.2，用户角色美术确认见 3.3；两者不可由生成图、构建、截图或实现任务替代。

## 1. 场景元数据与素材边界

- [x] 1.1 将场景画面成员与已登记图库形象分离；验证家族卡创作入口绑定有效的现有 `lookId`，scene-only 展示成员不会成为图库/创作 ID。
- [x] 1.2 按 R01 角色组合重制两幅顶部主视觉：左图为耳机紫 Dot、挥手栗发白衣男孩、小粉三角、绿云、蓝水滴；右图为棕发丸子头、黄色衣着、眨眼 V 手势女孩、橙柴犬、橙豆形、青绿方形，并仅将原奶油色伙伴替换为 A02 Muse。Hero Muse 不持星、不带植物。
- [x] 1.3 按 R01 内容和位置替换偏离原型的家族卡：Dots 4、Grok Bot 6、Meta Muse 1、人物 3、动物 5；验证这些是当前素材数，不是未来限制。素材与页面身份见 [v83 source snapshot](../../rebuild-character-system/acceptance/current-20261005-v83/source-snapshot.json)。
- [x] 1.4 验证新生成/绘制素材的来源和像素独立性；R01 仅作 ImageGen 构图/风格参考输入，最终不得直接使用整图截图、裁片或像素；人物和动物不得使用动漫截图像素、裁切、贴图或完整可辨认角色。

## 2. 页面呈现与行为

- [x] 2.1 按 R01 调整五张卡的主体大小/高低/位置、底色、材质/道具关系与标题/说明/图片/底部两行英文短句层级；首页卡去除“3 款候选”，卡片标题用 Humans/Animals，导航保留中文“人物/动物”，Grok 中文描述恢复轻松有趣语气。桌面 212px 卡高与真实页面观察见 [v83 证据](../../rebuild-character-system/acceptance/current-20261005-v83/README.md)。
- [x] 2.2 在 v72 修改前基线中验证鼠标、触控、键盘问候行为及减少动态效果；确认展示场景不会改变工作台状态、PNG 输出或 Prompt。本状态只代表该历史基线，不代替新场景后的回归。
- [x] 2.3 保存并目视检查 v72 历史基线的真实 native 页面：1280 px 首页，以及 768/390/320 px 首页与卡片区域；记录视口、轮廓和 `bodyWidth === scrollWidth`。证据见 [native viewport 页面索引](../../../../design/scene-refinement-20261005/page/native-viewport-pages-v72.json)。本项不代表当前 runtime，也不代替本轮新素材复拍或验收。

## 3. 验证与人工验收

- [x] 3.1 完成 v72 历史基线的构建与相关检查；确认当时的 15 项 Gallery 身份未被改动。本状态不声称本轮 R01 复原或 Muse 更新已实现。
- [x] 3.2 对照 R01 独立评审本轮新实现及其最新冻结 source 绑定的真实页面：检查两幅 hero、五卡角色组合/位置/大小/材质/配色/道具、Muse 身份、卡片横向比例与有意艺术裁切、文案层级及素材原创边界；完整记录通过与未通过项。source 绑定的独立报告 [visual-review-v83](../../../../design/reference-home-correction-20261006/visual-review-v83.md) 内部通过且无 P0/P1/P2；详情见 [v83 页面验收](../../rebuild-character-system/acceptance/current-20261005-v83/README.md)。这只完成内部网页评审，不代替用户角色美术确认；后续用户明确确认见任务 3.3。
- [x] 3.3 将绑定实际最新源码/source 及截图的页面提供给用户明确艺术确认。2026-10-06 用户明确回复“美术人工确认完毕”，确认当前 Site version 35 / cache 83 的首页顶部与五组家族场景；来源绑定 source ID `30c3dfa7bb709a2eda4dd4ebfdf4df0390a4e5f5291998defcb178cc7cc9d451`、源码提交 `0411719`，详见 [人工确认记录](../../rebuild-character-system/acceptance/current-20261005-v83/user-art-approval.json)。本项不推导为旧 3D 基准或全部 Gallery/PNG 的美术验收。

## 4. R01 场景复原与 Muse 微调

- [x] 4.1 忠实重制 hero 左右场景的角色组合与主次：左图紫色缎面 Dot、栗发白衣挥手男孩、小粉三角、绿云、蓝水滴；右图棕发丸子头、黄色衣着、眨眼 V 手势女孩、单只 A02 奶油 Muse、橙柴犬、橙豆形、青绿方形。除 Muse 身份替换外，不自行更改原型成员；Hero Muse 不持星、不带植物。
- [x] 4.2 替换四张偏离原型的非 Muse v2 卡片。Dots 卡用 4 名（主紫 Dot 及耳机、蓝色、戴眼镜粉色、小黄色）；Grok 卡用 6 名（绿云上、橙后左、蓝前左、青绿前、紫三角后右、红六边形前右）；Humans 卡用 3 名：左黑发深色 hoodie 男孩、中棕发丸子头黄色衣着眨眼 V 手势女孩、右金发圆框眼镜灰外套白上衣角色；Animals 卡用 R01 五只动物，四肢/头部层级和身份保持原创。scene-only 紫 Dot 按 R01 展示为光滑缎面、斜置白胶囊眼；不能声称其替代或改写了 Gallery 15 个 `lookId`。五卡的实际页面内部复核见 [v83 visual review](../../../../design/reference-home-correction-20261006/visual-review-v83.md)，用户随后对当前首页场景作出明确确认，见任务 3.3。
- [x] 4.3 只微调 Muse 身份：顶部右侧与 Muse 卡使用同一 A02 奶油包覆式 hood/face 身份，但 hero Muse 坐靠女孩身旁，不持星、不带植物；仅 Muse 家族卡怀抱星星并以 sage 植物点缀。保留头罩/脸面厚度与自然接触关系，卡片不得再放粉色第二只；Muse 不得变成旧卷发 Muse/Veda、儿童人物或动物替身。v83 页面图中的同身份与卡片接触关系见 [Muse review](../../../../design/reference-home-correction-20261006/visual-review-v83.md)。
- [x] 4.4 按 R01 复原卡片文案：标题/说明/插画/英文底部两行层级；Dots、Grok Bot、Meta Muse、Humans、Animals 采用两行英文短句且无中点合并；Grok 中文描述使用更轻松有趣的 R01 语气。首页不显示图库候选数，Gallery 仍准确显示各组三只候选，导航仍有中文“人物”“动物”。
- [x] 4.5 新实现完成后读取实际最新 source freeze 并重新捕获桌面和 768/390/320 CSS px 的真实首页；目视检查两幅 hero 与五卡整体构图、文字、材质、道具接触、R01 有意艺术裁切与意外裁断、水平溢出。v83 的 7 张真实页面截图和 Gallery/`startLookId`/导航/工作台/问候/Prompt/PNG 控件 UI 回归已记录于 [v83 页面验收](../../rebuild-character-system/acceptance/current-20261005-v83/README.md) 与 [interaction-v83.json](../../../../design/reference-home-correction-20261006/page/interaction-v83.json)，source ID 为 `30c3dfa7bb709a2eda4dd4ebfdf4df0390a4e5f5291998defcb178cc7cc9d451`。PNG 按钮 enabled 且点击后出现候选导出 toast；Cua 下载事件超时后，依据本次点击时间戳从 Downloads 恢复唯一对应文件并核验其 RGBA、尺寸、字节数和 SHA，详情见 [导出记录](../../rebuild-character-system/acceptance/current-20261005-v83/dots-rose-glasses-export.json)。仅单张莓粉眼镜 Dots PNG 完成字节检查，其余 PNG 不在本轮覆盖范围。不得复用 v72/v81 历史页面作为新素材证据，也不把任务或脚本结果当作美术通过。
