# cache90 主规范语义同步记录

本记录对应用户明确授权的当前 change 主规范同步。操作只改写 `openspec/specs/` 中由 `openspec status --change refocus-studio-on-gallery-and-card-reveal --json` 返回的 14 个 `existingOutputPaths`；没有初始化或升级 OpenSpec，没有改归档、历史验收或业务源码。11 份既有主规范更新，3 份新主规范建立；不存在仅含 REMOVED 的 delta，因此不需要 `retire_capabilities` 标记。

## 合同变更

- 将主规范 Purpose 从旧工作台、角色组装和项目模式更新为 Artwork、画廊、随机发现、详情与作品操作；角色接触/动作、可视接受和覆盖规范对应完整 Artwork 与真实资源。
- 固定底层八类事实、前台六槽顺序、桌面一排六张 5:6 卡与手机邻卡轨道；动作/表情作为变体或动画资源，背景为资源规格。
- 每项滚动候选绑定它自身的来源 Artwork 与 Asset 版本/hash，仅作过程示意；六个最终停值、结果图、标签、Prompt 和下载绑定唯一冻结 DrawResult。
- 首页和灵感游戏使用默认有效池，画廊入口冻结当前查询；当前 change 不增加游戏范围控件。抽取前/中无范围或硬锁控件，结果揭晓后可按需设置下一次抽取的 AND 特征锁。
- 结果阶段文案为“遇见新的伙伴”。宽屏左图右信息，下方为六项收拢事实摘要和复制/下载主操作；手机主图居中置顶、摘要横向滚动。Artwork 原图不加滤色或色相变换。
- 明确图 1 的可读边界、Dots/Grok Bot/Meta Muse 身份范围、参考图仅文字模板、特征局部来源可追溯及未获用户确认的素材/设备状态。

## 同步清单与 SHA-256

表中的“同步前”是第一次同步前的冻结读取值；三个新 capability 当时不存在。同步后 hash 覆盖当前规范全文。

| Capability | 同步前 | 同步后 |
| --- | --- | --- |
| `artwork-catalog` | 不存在 | `b14dc005a18565884717deeafdb5ec7bb8309dd8b72bc4c30c4d54fd3d4a9217` |
| `catalog-tags` | `1379710b42331b89921053d859e127c5c4c04045b932d3b05bb54cfc476dc840` | `5d7c0f514e9715a6a7a0bef79833d646f066ab1685e7cc3ebc1e63b3a949064a` |
| `character-contact-and-motion` | `a0c5d15122eedae7dd6677673a6afb2f06947d399b64d393554377349c4cadd5` | `1e92c04e919ae8310bdb4c17e3d720f8279d453ef27e93797ab5f7b238dd73aa` |
| `character-creation-modes` | `f50f73890c931e866147ea7a4af2bb669b453d11532f8f1417a2af47f8cf6c2e` | `cd8c855f4b75f8b6afae3ba3dd46ce2ba2fafe237ea2c2254efc21a57c0d255f` |
| `character-families` | `c85b3e7de6414e7f2e56cc1196dba18513b2096dc29b09b5513d74234ba4b2af` | `96459b9d39701321c10259f7fad47be41298adf986466c1a3b89e338971d2e28` |
| `character-visual-acceptance` | `4d749f5d07a2d192d5804e79f80c622d3d6d6810cfcbbc2c8a296efb47c7463d` | `affa9f132b0f7cb63301f847336d5302cf83e98f946d41400a09641d8900c802` |
| `composition-coverage` | `7e8442883201d8918275c95774d1bfacdbdaeb75bbdfc97a08bf8e817272d258` | `bfc45ea20fd620250496e296549cf064345fa8fd58bcf3b0b483f29d7764b80c` |
| `family-navigation` | `04f9ac5e7332aa5cd64217bde9a5383d6f00cbfc0c0964e426e897c2ded18d29` | `9a2f93fd8d92b7fe5e2e59795e457cea91b56f86fa00c5bea8751e238f5b8227` |
| `fullscreen-randomizer` | `b1e33729f4c0cd299e8edf138d1c98b4212dfe41f2a40b0a2875973dbc6d8a12` | `3428847096177e8a4f05c053988370fc148a4cf054c1762192f2e591c608a85a` |
| `modular-2d-composition` | `60d5314ecc0f46c9e647153e7da32984add67b2ad0635f83b394899bd16f7d83` | `32344dc3c4b74fc78d844f1c045d3c142c33a50bf3ca444f44fd10f3632e119b` |
| `reference-creation` | 不存在 | `513e0319fe2dc4da477c5d34785f68258dbd7ba709cbecc1831c2197140c0749` |
| `studio-creation-experience` | `a68a007d64c7da85c9127d55ddcf1203de2016e3618bd141e3779603add20fcc` | `e2cefbdc162324d41750db084398a56848a8ce33095922c1aef8713247484d40` |
| `studio-visual-experience` | `9392e7874a031e70f73a9a07a6252133093eb689b5525799d4ddb80789d67edf` | `62be4a1e04af2a39041b0be74e1f6711bf1f0be3bf338a048bb38a8e48667944` |
| `target-resources` | 不存在 | `089aaa9b618b92a5797cf6c467dd7fed966da24aeeedf3663f4f3cec871a8087` |

## 操作与条目计数

| Capability | REMOVED | MODIFIED | ADDED | 同步后要求 | 同步后场景 |
| --- | ---: | ---: | ---: | ---: | ---: |
| `artwork-catalog` | 0 | 0 | 8 | 8 | 12 |
| `catalog-tags` | 3 | 2 | 4 | 6 | 10 |
| `character-contact-and-motion` | 8 | 0 | 3 | 3 | 6 |
| `character-creation-modes` | 9 | 0 | 1 | 1 | 2 |
| `character-families` | 9 | 0 | 3 | 3 | 7 |
| `character-visual-acceptance` | 8 | 0 | 4 | 4 | 8 |
| `composition-coverage` | 7 | 2 | 1 | 3 | 11 |
| `family-navigation` | 4 | 0 | 4 | 4 | 10 |
| `fullscreen-randomizer` | 6 | 0 | 7 | 7 | 26 |
| `modular-2d-composition` | 10 | 0 | 1 | 1 | 3 |
| `reference-creation` | 0 | 0 | 4 | 4 | 5 |
| `studio-creation-experience` | 5 | 0 | 3 | 3 | 4 |
| `studio-visual-experience` | 8 | 0 | 5 | 5 | 12 |
| `target-resources` | 0 | 0 | 5 | 5 | 6 |
| **合计** | **77** | **4** | **53** | **57** | **122** |

## 校验

- `openspec validate refocus-studio-on-gallery-and-card-reveal --strict`：通过。
- `openspec validate --all --strict`：15 项通过（14 个 capability 与当前 change），0 失败。
- 语义幂等检查：读取全部 14 个 delta 和主规范，在内存中再次套用 Purpose、REMOVED、MODIFIED、ADDED 语义后，14/14 输出与当前主规范字节一致；检查不写文件。
- REMOVED 条目都有 Reason 和 Migration；4 个 MODIFIED requirement 的原 scenarios 均保留；每个新增/修改 requirement 有 WHEN/THEN 场景；新 capability Purpose 完整。

以上是规范与规划验证，不是业务实现、浏览器/设备、用户美术、目标平台或发布验收。历史 tasks §1–6 不改；tasks §5.3、5.8、6.8 仍 pending。
