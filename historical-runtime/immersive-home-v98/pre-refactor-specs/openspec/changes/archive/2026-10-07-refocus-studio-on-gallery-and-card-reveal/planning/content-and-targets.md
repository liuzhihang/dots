# Content Inventory and Target Profiles

## Observed Inventory

本轮只读检查登记、文件、PNG尺寸/alpha及hash；没有生成素材、下载页面导出、安装Pet或修改批准状态。目录依据为 `dist/studio-creation-assets.js`、`studio-looks.js`、`studio-scenes.js`。15成品与下述v83 `source-snapshot.json`逐文件hash一致；20张成品/姿态解码均有alpha 0和255及半透明像素。源文件的透明通道不单独证明无阴影、页面下载正确或网页美术通过。

| Artwork ID | 实际资源 | 尺寸 | 可确认事实／待处理 |
| --- | --- | --- | --- |
| candidate-dots-20261005 | `dist/assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png` | 1254×1254 | 蓝色短绒、耳机、克制椭圆眼；原身份批准可引用 |
| candidate-grok-20261005 | `dist/assets/characters/grok-bot-purple-orb-candidate-v2.png` | 1254×1254 | 紫色软几何、平行胶囊眼、无配饰 |
| candidate-meta-muse-20261005 | `dist/assets/characters/meta-muse-cream-hooded-candidate-v1.png` | 1235×1274 | 奶油包覆头罩、内嵌脸面 |
| candidate-humans-20261005 | `dist/assets/characters/humans-chestnut-chibi-teal-knit-candidate-v1.png` | 1254×1254 | 原创栗发人物、青绿织物服装 |
| candidate-animals-20261005 | `dist/assets/characters/animals-original-shiba-candidate-v1.png` | 1254×1254 | 原创立耳柴犬、茶白色块、坐姿 |
| dots-rose-glasses | `dist/assets/looks/dots-rose-glasses.png` | 1254×1254 | 莓粉短绒、圆框眼镜 |
| dots-lilac-bucket | `dist/assets/looks/dots-lilac-bucket.png` | 1254×1254 | 浅紫短绒、黄色软檐帽 |
| grok-green-cloud | `dist/assets/looks/grok-green-cloud.png` | 1254×1254 | 青绿云形、胶囊眼 |
| grok-teal-square | `dist/assets/looks/grok-teal-square.png` | 1254×1254 | 青绿圆角方体、胶囊眼 |
| muse-rose-flowers | `dist/assets/looks/muse-rose-flowers.png` | 1254×1254 | 玫粉外罩、白雏菊花束；抱花不等于动画 |
| muse-sage-reading | `dist/assets/looks/muse-sage-reading.png` | 1254×1254 | 鼠尾草外罩、竖直闭合书；标题别名不自动成为“正在阅读”事实 |
| human-bun-yellow | `dist/assets/looks/human-bun-yellow.png` | 1254×1254 | 原创丸子头、黄衣、挥手 |
| human-blond-glasses | `dist/assets/looks/human-blond-glasses.png` | 1254×1254 | 原创金发、圆框眼镜、米白开衫/浅蓝衣裤 |
| animal-white-cat | `dist/assets/looks/animal-white-cat.png` | 1254×1254 | 原创白猫、灰耳尾、猫口鼻胡须 |
| animal-gray-husky | `dist/assets/looks/animal-gray-husky.png` | 1254×1254 | 原创灰白哈士奇、立耳与面罩色块 |

上述事实从登记及现有批准范围提取；apply中的逐图标注须再目视核对实际显示元素，不能照抄旧action枚举或文件名推断额外动作。15项不是库存上限，也不能推断为15个同一身份变体。

| 静态姿态 | 实际资源 | 尺寸／登记hash状态 | 批准与发布 |
| --- | --- | --- | --- |
| Dots眨眼 | `dist/assets/poses/dots-wink-v1.png` | 1254×1254；源码SHA匹配 | 文件存在、工程可用；确认范围待核定，非自动发布 |
| Grok眨眼 | `dist/assets/poses/grok-wink-v1.png` | 同上 | 同上 |
| Muse挥手 | `dist/assets/poses/muse-wave-v1.png` | 同上 | 同上 |
| 栗发人物挥手 | `dist/assets/poses/human-wave-v1.png` | 同上 | 同上 |
| 柴犬抬前爪 | `dist/assets/poses/shiba-wave-v1.png` | 同上 | 同上 |

登记SHA见 `dist/studio-creation-assets.js:117-121`。这5个完整静态PNG已存在于v83冻结source，并登记为当时Workbench的pose state slots；不是 `registeredLooks` 中的独立Gallery Artwork。人工确认清单逐项列出15个Artwork ID，没有逐项列pose asset ID；`supportedStateBoundary`指向当时已登记状态，因此不能断言这些姿态已获批准，也不能断言被否决。文件/hash/alpha可用与艺术批准映射分别记录；先核对当时人工回读材料，无法确认某pose在审查范围内时先不发布，再对具体姿态独立确认。这些文件没有循环帧序列。

其他资源：

- `dots-actions.webp`、`pets-actions.webp`：1086×1448，单张VP8 WebP、无alpha、非动画。只作历史示意，不作角色/Pet包。
- `assets/characters/dots-blue-plush-orb-front-candidate-v2.png`：旧裸形配方完整图，需要另核来源/批准映射才考虑新作品，不自动入池。
- `assets/scenes` 当前Hero及五组专题使用版本：保留批准页面展示；scene-only成员不拆作图库单体或用库存数量推导。
- `assets/modular`：组件试点及新适配未批准；从默认产品/发布路径退出，不自动烘焙成图库作品。
- `assets/atelier` 两张历史图：来源/现行批准未核定，保持历史，不纳入首批发布候选。

## Approval and Verification References

| 来源 | 证据用途 | 不覆盖 |
| --- | --- | --- |
| `openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json` | Site35/cache83人工批准，明确列出15个registeredLooks | 未制作自由组件/动作、未映射姿态、全量下载字节、实体设备 |
| 同目录 `source-snapshot.json` | 历史源文件hash；本轮15张当前字节全部匹配 | 不代表本轮浏览器输出或新页面批准 |
| 同目录 `user-art-approval.json` | 当时首页/专题场景范围批准 | 不改写本次新页面/操作语义验收 |
| 同目录 `README.md` | v83观察与实际单张下载边界 | 不能将莓粉眼镜Dots单张结果扩展为全部下载通过 |
| 同change `scope-decision-20261006.json` | 旧11项3D范围取消及保留证据 | 取消不等于工程/艺术通过 |
| `design/acceptance/current-20261006-v86/` | cache86工程与未批准适配记录 | 不自动批准新适配或证明线上cache86 |

新目录分别记录：登记/文件存在、工程资源检查、人工美术、目标端验证、发布。复用历史确认只绑定匹配的具体资源与范围；不复制或改写历史JSON。

## Gaps and Independent Follow-up

| 缺口 | 本期处理 | 后续依赖 |
| --- | --- | --- |
| 15图缺统一版本化资源/Prompt manifest、逐图特征 | M1整理已有资源并绑定来源、hash、事实与Prompt；无需新画角色 | 修改登记并通过目录/性质测试 |
| 5姿态与v83审批的逐项映射未解决 | 历史记录既未逐项列出也未明确否决；核对旧审查，无法证实时列候选，不阻塞基础15图闭环 | 覆盖证据成立或用户对具体姿态确认后发布，再做真实切换验收 |
| 特征卡示意资源不足 | 采用登记原图的可追溯缩略呈现/细节、“无”值与通用UI图标，不裁展板像素 | 新示意艺术如确需制作，另列资源与来源/确认，不要求跨角色适配 |
| 待机/思考/执行/等待/受阻/完成/阅读/睡觉/聆听等更多系列 | 不显示虚假库存，可提供清楚的未来创作Prompt | 完整作品独立制作、身份确认、资源与Prompt绑定 |
| 动画预览、sprite sheet、Pet包 | 本期不制作、不提供伪导出 | 新范围、真实帧文件、播放/结构/艺术/目标端验证 |
| 视觉模型分析 | 用户已选A，无API、不新增服务 | 如以后选B另确认provider、服务端凭据、费用、上传确认及数据处理 |

## Target Compatibility Matrix

查询：**2026-10-07 01:24 Asia/Shanghai**。本期没有目标包制作/安装授权，以下为资料合同及验证边界。

| 平台／端或类型 | 格式／尺寸／alpha | 帧布局与状态 | 制作方式／是否验证 | 来源 |
| --- | --- | --- | --- | --- |
| 普通静态角色下载 | PNG，按原图登记尺寸，真alpha | 单帧；无动画 | 已有文件；本轮源检查通过，实际页面下载仍待apply验收 | 本地inventory与上述源记录 |
| 静态动作/表情 | PNG，现有5图1254²，真alpha | 单帧眨眼/挥手 | 文件可用；艺术映射/图库发布待核定，不是动画 | 本地poses登记 |
| 实际动画预览 | 需实际登记格式/尺寸/时长/alpha | 实际帧、循环、身份与方向 | 当前缺少交付资源；不得声明可播放 | 本地目录调查 |
| ChatGPT Work Web 自定义Pet | 透明PNG/WebP，1536×1872，≤20MiB | 官方页面未列帧表 | 按端要求制作并上传/播放验证；本期不制作；实际目标未验证 | https://learn.chatgpt.com/docs/pets |
| 本机插件sprite v1合同 | PNG/WebP透明，1536×1872，≤20MiB | 8×9；192×208单元；57必需帧/15空格，九状态 | 本地工作流合同已读，不等于官方Web完整帧表/目标已通过 | `/Users/liuzhihang/.codex/plugins/cache/openai-curated-remote/work-pets/0.1.6/references/sprite-sheet-contract.md:24-49` |
| 本机插件新Pet v2合同 | PNG/WebP透明，1536×2288，≤20MiB | 8×11；73必需帧/15空格；九状态+16看向方向 | 完整独立资源制作、结构/播放/艺术/端验证；本期不制作 | 同本地合同 |
| 桌面Pet安装入口 | HTTPS资源引用，显式spriteVersionNumber 1/2，默认1 | 安装文档不补足资源有效性或跨端兼容 | 仅入口文档确认，目标安装未验证，不开放静态PNG安装 | https://learn.chatgpt.com/docs/reference/commands |
| Dot 桌面App／桌面Web | 文档允许选可用角色或Pet；未提供任意PNG导入合同 | 格式/布局/状态待可靠资料及环境验证 | 单张PNG不能标可直接安装Dot | https://help.openai.com/en/articles/20001530-getting-started-with-your-dot |
| Dot 移动App／移动Web | 官方称移动端当前不能创建Dot；移动Web不支持Dot | 不能据桌面格式推断移动资源能力 | 设备及资源兼容未验证 | 同Dot官方指南 |
| 一般场景插画 | 作为scene-illustration按实际尺寸/背景登记 | 非透明角色默认池；非Pet包 | 可后续独立扩充；不改变默认透明角色合同 | 本地资源分类合同 |

官方Pets说明桌面自定义Pet本地保存、不自动同步Web；Web Pet位于支持的Work聊天，不等于桌面浮层。CLI/其他端若以后成为明确目标，也需自己的端与资源验收，不能凭本机可用推断通用。

本地九状态：idle、running-right、running-left、waving、jumping、failed、waiting、running、review；`running`表示执行任务，不是奔跑。额外“阅读/睡觉/聆听/完成”等产品作品与目标状态映射独立规划，不能私自增加目标行或以静态图假装动作资源。Grok点列/液滴方向按批准身份及真实帧保留，不盲目镜像。
