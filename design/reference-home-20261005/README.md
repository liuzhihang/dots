# R01 首页素材索引

本索引把已选中的 R01 页面素材文件、其运行时目标和被替代的历史候选放在一处。这里的“已选中”只表示素材/文件级选择，**不表示真实网页美术验收通过，也不表示用户已批准角色美术**。页面实现、最终冻结来源、真实视口复核、独立美术评审和用户确认仍各有自己的验收记录。

主要规范见 [refine-family-scene-composition proposal](../../openspec/changes/archive/2026-10-06-refine-family-scene-composition/proposal.md)、[design](../../openspec/changes/archive/2026-10-06-refine-family-scene-composition/design.md)、[tasks](../../openspec/changes/archive/2026-10-06-refine-family-scene-composition/tasks.md) 和 [spec delta](../../openspec/changes/archive/2026-10-06-refine-family-scene-composition/specs/studio-visual-experience/spec.md)。

## 当前选中的素材文件

下面的 SHA-256 是对仓库内源 PNG 的直接读取校验，且表内七个运行时图像的哈希与 v81 冻结清单一致。运行时路径来自对应素材 manifest 或当前场景映射；此表不取代页面复核或用户美术确认。

| 场景 | 当前选中源文件 → 运行时目标 | 内容与素材边界 | 源文件 SHA-256 |
| --- | --- | --- | --- |
| 左侧 Hero | [hero-left-exact-v2.png](assets/hero-left-exact-v2.png) → `dist/assets/scenes/hero-left-v4.png` | 紫色缎面耳机 Dot、挥手栗发白衣男孩、小粉三角、绿云、蓝水滴；独立生成插画 | `f00970d358a18d554cefb9407af77603e9701985d868daf9eb4f318ea1fd1507` |
| 右侧 Hero | [hero-right-exact-v2.png](assets/hero-right-exact-v2.png) → `dist/assets/scenes/hero-right-v4.png` | 棕发丸子头、黄色衣着、眨眼作 V 手势女孩；A02 奶油 Muse、柴犬、橙豆形、青绿方形。Muse 不持星、不带植物 | `aa2614fb8b12d6f12d813f1a315435c41831d02ba57b727487dba5dad1c57281` |
| Dots 卡 | [dots-card-v2.png](assets/cards/dots-card-v2.png) → `dist/assets/scenes/family-dots-v3.png` | 紫色耳机 Dot 为主，配小蓝、戴眼镜的粉色和小黄 Dot；R01 的光滑紫 Dot/白胶囊眼仅是首页展示图，不改写图库 `lookId` | `4122d76f2e600546ad190ce0548f0bb28bbcbb9457ee8171f0793d18437082e5` |
| Grok Bot 卡 | [grok-card-v2.png](assets/cards/grok-card-v2.png) → `dist/assets/scenes/family-grok-v3.png` | 六形：绿云上、橙色后左、蓝色前左、青绿前方、紫三角后右、红六边形前右 | `5e430b88e7de180b931e9b10cdfa6f049ee68b327b5c7600e03cccef6ece1471` |
| Meta Muse 卡 | [muse-card-v2.png](assets/cards/muse-card-v2.png) → `dist/assets/scenes/family-meta-muse-v4.png` | 单只 A02 奶油包覆 Muse，暖色内嵌脸、短圆肢体；星星与 sage 植物仅在这张家族卡中出现；不保留粉色第二只 | `07749dcad0c8f71f8e0aa77f2600ecc6d1f3e9544738cf5f831d1eb03bab460f` |
| Humans 卡 | [family-humans-v3.png](assets/cards/family-humans-v3.png) → `dist/assets/scenes/family-humans-v3.png` | 左黑发深色 hoodie 男孩；中棕发丸子头、黄色衣着、眨眼作 V 手势女孩；右金发圆框眼镜、灰外套白上衣角色。身份为新设计 | `b3bf539597c0420ed27eaaa9973e5dc18b8d3ba7bcff4a539ac77a2f2790eeb0` |
| Animals 卡 | [family-animals-v3.png](assets/cards/family-animals-v3.png) → `dist/assets/scenes/family-animals-v3.png` | 五只原创角色：橙白柴犬、黑白哈士奇、粉猪、棕猴、白身蓝翼黄冠小鸟 | `bf9a99ce408aa1e77e0418287539f131a710718ebb0ac5912b7aa0bb462428da` |

Hero 与 Muse 卡的运行时映射及文件来源记录在 [manifest-r01-final.json](assets/manifest-r01-final.json)。Dots/Grok 的当前卡片选择见 [manifest-dots-root-v2.json](assets/cards/manifest-dots-root-v2.json) 与 [manifest-grok-root-v2.json](assets/cards/manifest-grok-root-v2.json)；Humans/Animals 的生成迭代见 [manifest-cards-human-animal.json](assets/cards/manifest-cards-human-animal.json)。各 manifest 中的 `selected` / `runtimeSelected` 只表示相应阶段的素材选择；有 `userArtApproved` 字段的当前素材记录为 `false`，其余记录也仅标素材级选择。

## 被替代或仅供追溯的候选

这些文件保留作素材来历和迭代记录，不是当前选中的网页场景：

- `assets/hero-left-v1.png`、`assets/hero-right-v1.png` 及 `assets/manifest-left.json` / `assets/manifest-muse.json` 记录较早的 Hero/Muse 草案；当前素材源以 `manifest-r01-final.json` 指向的 exact-v2 Hero 和 Muse 卡 v2 为准。
- `assets/muse-family-v1.png` 是早期含粉色第二只 Muse 的卡片候选，已由单只 Muse 的 `assets/cards/muse-card-v2.png` 替代。
- `assets/cards/dots-family-card-v1.png`、`assets/cards/grok-family-card-v1.png` 属于早期素材候选；当前 Dots/Grok 文件选择分别改为 `dots-card-v2.png`、`grok-card-v2.png`。旧 manifest 曾记录 Dots v1 供复核、Grok v1 未选中，这不改变当前根复核记录。
- `design/scene-refinement-20261005/assets/{dots,grok,meta-muse,humans,animals}-scene-v2.png` 和 `dist/assets/scenes/family-{dots,grok,meta-muse,humans,animals}-v2.png` 是较早的场景候选，不应拿来替代上表的当前 R01 选图。
- `assets/cards/manifest-cards-human-animal.json` 内未选中的 Humans 长身比例初稿与 Animals 贴近画布边缘初稿保留在迭代历史；表中 v3 文件是各自该轮文件级选择。

## 验收和版权边界

R01 截图只可作为 ImageGen 的构图、服装风格、材质、配色和角色位置参考；网站不得直接使用整页截图、裁切图或其像素，UI 文字不得烘焙进角色图。人物和动物图须是原创身份，不使用用户截取的动漫原图像素、裁片或可辨认的完整动漫角色。Dots、Grok Bot、Meta Muse 等软件内置形象按各自身份约束处理；首页 scene 不因此成为可编辑图库资产。

所选 PNG 的 hash、alpha、尺寸、构图或生成记录都不能证明其在网页中的大小关系、裁切、移动可读性或质感已通过验收。当前冻结源与真实页面证据见下方 v81 记录；任务 3.2 的内部页面视觉评审已完成，3.3 仍等待用户明确角色美术确认。

## v81 当前页面与程序证据

当前真实页面捕获绑定 [v81 冻结源快照](../../openspec/changes/rebuild-character-system/acceptance/current-20261005-v81/source-snapshot.json)，sourceId `0a2daefce6cc18094ac2e40749ec42750c3b80837fa58de5fc57b4090288cc60`，共 123 个路径。四个首页视口的真实图索引见 [pages-v81.json](page/pages-v81.json)：[1280](page/home-1280-v81.png)、[768](page/home-768-v81.png)、[390](page/home-390-v81.png)、[320](page/home-320-v81.png)；卡片页图有 [768](page/cards-768-v81.png)、[390](page/cards-390-v81.png)、[320](page/cards-320-v81.png)，创作引导有 [1280](page/intro-1280-v81.png)、[320](page/intro-320-v81.png)。四个首页视口均记录五张卡、两幅 Hero、15 项图库、所有图片 ready，且 `bodyWidth === scrollWidth`。独立 [code-review-v81.md](code-review-v81.md) 校验快照和缓存查询引用，无阻断问题；独立 [visual-review-v81.md](visual-review-v81.md) 判为 passed，无 P0/P1/P2，P3 观察项见报告。

实际 v81 smoke 见 [smoke-v81.json](page/smoke-v81.json)：本版验证 mini look 到工作台、PNG 控件启用、键盘问候及零控制台警告/错误。较广的 [interactions-v80.json](page/interactions-v80.json) 仍只绑定 v80 sourceId，用来记录未变化交互；v81 不伪装成重复的完整交互或 PNG 下载验证。PNG 字节只引用 v75 既有验证。本轮没有 v80/v81 下载 PNG 的声明。

桌面家族卡约 246 CSS px，高于 R01 示例，以容纳完整群像、角色和底部文案；原型是构图/风格目标，不要求像素级复制。R01 中登录和“我的空间”只是示意，本 change 不引入账号或用户空间功能。v80 页面视觉报告作为独立历史记录保留；当前 v81 页面报告已通过内部复核、无 P0/P1/P2，保留的 P3 观察见报告。用户尚未确认五组角色美术，实体手机未测试；任务 3.3 仍未完成。

## v80 历史页面证据

v80 捕获绑定 sourceId `29e9a319a0b9f7da86c4497c26b144aa6ee228e075c6b98b32282161678d1fb1`，见 [v80 冻结快照](../../openspec/changes/rebuild-character-system/acceptance/current-20261005-v80/source-snapshot.json)。视觉评审与页面证据均保留为历史记录。独立 [v80 代码评审](code-review-v80.md) 发现 QA harness 仍引用 cache 70，该问题已在 v81 修复并由 [v81 代码评审](code-review-v81.md) 复核；v80 的页面图和报告不移充为 v81 证据。
