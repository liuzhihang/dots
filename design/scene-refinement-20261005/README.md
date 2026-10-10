# R01 场景复原与 Muse 微调记录（2026-10-05）

本目录保留首页与五组家族卡旧设计方向、素材来源和真实页面检查；当时的场景构图 change 只有过期规划合同，已按历史清理授权移除，原任务状态在[本轮清理记录](../../openspec/changes/simplify-reveal-cards-and-staging/implementation/spec-cleanup.md)。这份历史材料不代表当前产品方向；现行视觉与交互约定见[视觉交互系统](../studio-visual-interaction-system.md)和[主规范](../../openspec/specs/studio-visual-experience/spec.md)。

当前 R01 素材选择、runtime 路径、文件 SHA 和历史候选索引见 [reference-home 素材索引](../reference-home-20261005/README.md)。该索引记录的是素材级选择，不是网页美术验收或用户艺术确认。

## R01 是页面与场景的视觉目标

R01 的品牌栏、标题/主操作、两侧 hero、五张卡片与创作引导构成选定页面层级。R01 可以作为 ImageGen 的构图和风格参考输入，提示其主体大小、高低与位置、前后关系、服装层次、材质、配色和道具；输出须为独立新插画。网站不得直接放整页截图，也不得从网页或动漫截图裁片、抠图或提取像素；独立新插画可按 R01 在页面中做有意艺术裁切。本轮人物/动物以原创身份重制；可借鉴 R01 的衣着风格与群像方式，但不能复用用户从动漫截图的像素，也不能复刻可辨认的完整动漫角色。

顶部两幅场景按 R01 还原：

- 左侧：紫色缎面耳机 Dot（白色斜胶囊双眼）、挥手的栗色头发白衣男孩、小粉色三角、绿色云形、蓝色水滴。
- 右侧：棕发丸子头、黄色衣着、眨眼并作 V 手势的女孩，橙色柴犬、橙色豆形、青绿色方形，以及 A02 身份的单只奶油包覆式 Meta Muse。只将原型中的奶油色伙伴身份替换为 Muse；其余成员位置和层级按 R01。Hero Muse 不持星、不带植物。

## 五张卡片的本轮组合与文案

卡片层级按 R01：标题与简短中文说明在上，圆形箭头在右上，群像为主体，英文短句在底部两行显示。首页不显示“3 款候选”；画廊仍真实显示每组各三只已登记图库候选。Humans/Animals 卡片标题使用英文，导航继续使用中文“人物”“动物”。

| 卡片 | 当前展示成员与构图 | 底色/材质 | R01 文案层级 |
| --- | --- | --- | --- |
| Dots（4） | 最大主体为戴耳机的光滑缎面紫 Dot，白色斜胶囊眼；配蓝色、戴眼镜的粉色和一只小黄色 Dot | 淡紫，主体表面柔和光泽 | “简洁、灵动、百变的圆点伙伴”；`Simple` / `But Special` |
| Grok Bot（6） | 绿云在上、橙色后左、蓝色前左、青绿前方、紫三角后右、红六边形前右 | 淡绿，明快的软质几何造型与斜胶囊眼 | “多形态的创意伙伴 / 一起更有趣”；`Different Shapes` / `Same Friends` |
| Meta Muse（1） | 单只奶油包覆 Muse，暖色内嵌脸，短圆肢体怀抱星星，sage 植物作小点缀；这些道具只用于 Muse 家族卡，hero 中的同身份 Muse 不持星、不带植物；取消粉色第二只 | 暖米白，哑光布面/短纤维 | “温柔治愈的陪伴 / 给你小小的力量”；`A Softer` / `Brighter You` |
| Humans（3） | 左侧黑发、深色 hoodie 男孩；中间棕发丸子头、黄色衣着、眨眼并作 V 手势的女孩；右侧金发圆框眼镜、灰外套与白上衣角色；按 R01 的大小、高低和左右排列，身份为原创 | 浅蓝，肤色/发丝/布料分区可读 | 卡片题为 `Humans`；“鲜活的个性角色 / 记录真实的每一种情绪”；`Real People` / `More Stories` |
| Animals（5） | 橙色柴犬前侧、灰白哈士奇中后侧、棕色猴子后右、粉色小猪前右、蓝色小鸟上方；按 R01 群像大小和遮挡层级绘制原创身份 | 浅桃，物种轮廓、毛色与材质区分清楚 | 卡片题为 `Animals`；“可爱的动物伙伴 / 永远在你身边”；`More Friends` / `A Kinder World` |

4/6/1/3/5 只用于当前已选素材，不限制未来插画/图库扩展。四张非 Muse v2 卡片偏离 R01 的材质、大小或关系，需要忠实替换；这不是新创身份方向。R01 的紫 Dot 展示形象可以与已登记 Gallery 中仍保留的蓝色短绒形象不同，因为 scene-only 角色不代表可编辑或下载资产，也不改变现有 15 个 `lookId`。

Meta Muse 是唯一身份微调对象：卡片与右侧 hero 使用同一 A02 包覆式身份，连续奶油/米白 hood 与躯干、暖色内嵌 face、清楚 hood rim/脸面厚度、简洁表情、短圆四肢。只有 Muse 家族卡怀抱星星且接触关系自然，并有 sage 植物作点缀；右侧 hero 中的 Muse 坐靠女孩，不持星、不带植物。卡片不增粉色第二只，也不变成儿童或动物替身。

## 历史版本与页面证据边界

v70 曾发布为 Site version 33，source commit `0cd69c96ebd02e5c61c6c9b35aab8958120256ad`、sourceId `9181d019add9fe9892dc4af770d85650ee99bc52b9bcb3db755ad0979d961826`，见 [v70 发布回执](../../openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v70/site-release.json)。这是历史中间版，3798 条旧 WebGL/CPU 矩阵只绑定 v70 source。

v71/v72 是本地历史快照而非当前实现。fullPage 捕获曾显示的右缘异常与 native viewport 捕获不一致，不能记为真实 viewport 裁切缺陷；相关过程说明分别见 [v71](../../openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v71/README.md) 和 [v72](../../openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v72/README.md)。v72 的 native 页面索引 [native-viewport-pages-v72.json](page/native-viewport-pages-v72.json) 记录过 1280/768/390/320 首页基线无水平溢出，但它早于当前 R01 卡片内容选择，只作历史证据。

v81 cache/source `0a2daefce6cc18094ac2e40749ec42750c3b80837fa58de5fc57b4090288cc60`（123 个路径）的页面图见 [历史 v81 页面索引](../reference-home-20261005/page/pages-v81.json)，其时的独立视觉复核 [报告](../reference-home-20261005/visual-review-v81.md) 也保留原始结论。用户随后明确否定 v81 家族卡构图，所以截图与报告只作历史材料，不代表当前实现或通过；本轮差异见 [v81 基线审查](../reference-home-correction-20261006/baseline-review.md) 和 [当前设计 QA](../../design-qa.md)。新 source 与真实页面评审待完成，实体手机未测试。

## 验收门槛

实际页面需逐一复核两幅 hero、五张卡的角色组合和定位、底色/材质/道具接触、卡片中英文层级、导航中英命名，以及 Gallery 准确保留 15 个 ID/每组三只候选。桌面和 768/390/320 CSS px 均需要真实页面捕获；检查关键身份特征未被意外裁断，同时保留 R01 的有意艺术裁切与下缘渐隐、文案可读且无横向溢出。截图采集/几何指标/构建通过不等于美术通过。

新场景身份、素材来源和可编辑 Gallery 必须分开记录；人物动物原创检查、独立网页美术评审和用户艺术确认各自留证。当前 3.2、3.3 和新任务 4 均未勾选；没有任何新卡片或 Muse 候选获得艺术通过，实体手机状态以实际测试记录为准。
