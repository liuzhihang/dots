# 逐件制作 Brief 索引

以下 20 份是独立 Artwork 候选 Brief，不代表作品已生成、工程已通过或用户批准。每个 Brief 按角色新增模板填写；尚未制作的 facts、资源和审批保持 unknown / not-run / pending。来源与逐主体裁决见 [`../references/subject-map.md`](../references/subject-map.md)。

每份 active candidate Brief 的 `artwork.proposedId` 保留提案 ID，`artwork.canonicalArtworkId` 显式映射到不带 `candidate-` 前缀的规范 Artwork ID，避免把制作工作名误计为第二个角色。

| Candidate artwork ID | Series | brief | Sources |
|---|---|---|---|
| `candidate-dots-blue-beret-cloud` | `dots` | [`dots-blue-beret-cloud.yaml`](dots-blue-beret-cloud.yaml) | R02 R05 R10 R11 R12 R15 R16 R17 R18 R21 |
| `candidate-dots-yellow-glasses-triangle` | `dots` | [`dots-yellow-glasses-triangle.yaml`](dots-yellow-glasses-triangle.yaml) | R02 R10 R11 R16 R17 R18 R21 |
| `candidate-dots-leaf-pear` | `dots` | [`dots-leaf-pear.yaml`](dots-leaf-pear.yaml) | R07 R10 R11 R16 R17 R18 |
| `candidate-dots-violet-star` | `dots` | [`dots-violet-star.yaml`](dots-violet-star.yaml) | R07 R10 R16 R17 R18 |
| `candidate-dots-flower-cloud` | `dots` | [`dots-flower-cloud.yaml`](dots-flower-cloud.yaml) | R10 R11 R16 R17 R18 |
| `candidate-dots-lime-rounded-square` | `dots` | [`dots-lime-rounded-square.yaml`](dots-lime-rounded-square.yaml) | R10 R11 R15 R16 R17 R18 |
| `candidate-grok-white-arch` | `grok` | [`grok-white-arch.yaml`](grok-white-arch.yaml) | R01 R10 R11 R15 R16 R17 R18 R21 |
| `candidate-grok-horizontal-capsule` | `grok` | [`grok-horizontal-capsule.yaml`](grok-horizontal-capsule.yaml) | R01 R03 R04 R14 |
| `candidate-grok-cylinder` | `grok` | [`grok-cylinder.yaml`](grok-cylinder.yaml) | R03 R04 |
| `candidate-grok-egg` | `grok` | [`grok-egg.yaml`](grok-egg.yaml) | R04 |
| `candidate-grok-soft-triangle` | `grok` | [`grok-soft-triangle.yaml`](grok-soft-triangle.yaml) | R03 R04 R14 |
| `candidate-grok-soft-diamond` | `grok` | [`grok-soft-diamond.yaml`](grok-soft-diamond.yaml) | R03 R04 |
| `candidate-grok-half-dome` | `grok` | [`grok-half-dome.yaml`](grok-half-dome.yaml) | R03 R04 |
| `candidate-grok-rounded-cube` | `grok` | [`grok-rounded-cube.yaml`](grok-rounded-cube.yaml) | R03 R04 R14 |
| `candidate-muse-holding-star` | `meta-muse` | [`muse-holding-star.yaml`](muse-holding-star.yaml) | R05 R10 R11 R15 R16 R17 R18 R21 |
| `candidate-animal-panda` | `animals` | [`animal-panda.yaml`](animal-panda.yaml) | R05 R10 R11 R15 R17 R18 |
| `candidate-animal-pig` | `animals` | [`animal-pig.yaml`](animal-pig.yaml) | R05 R10 R15 |
| `candidate-animal-monkey` | `animals` | [`animal-monkey.yaml`](animal-monkey.yaml) | R05 |
| `candidate-animal-small-bird` | `animals` | [`animal-small-bird.yaml`](animal-small-bird.yaml) | R05 R10 R11 R15 |
| `candidate-animal-penguin` | `animals` | [`animal-penguin.yaml`](animal-penguin.yaml) | R05 R10 R11 R15 |

覆盖：20 个独立 Artwork 候选 Brief，引用到 15 个参考 ID。另有三份不计入候选数量的裁决记录：[`grok-vertical-roundrect.yaml`](grok-vertical-roundrect.yaml) 将遮挡的近方块映射到 `grok-teal-square`；[`grok-bean.yaml`](grok-bean.yaml) 将可见主体映射到 orb、`grok-coral-drop` 和 `candidate-grok-egg`；[`grok-shield.yaml`](grok-shield.yaml) 将 Rae 六边外沿映射为 `candidate-grok-rounded-cube` 的蓝色正面/外观选项，仅依可见轮廓相似合并去重，不断言与 Nova 是同一个 3D 模型，也不创建独立盾形 Artwork。其他变体/复用/排除项在逐主体矩阵中逐一落点。

目前五项 Animals 主体已有独立透明 PNG 候选，仍全部 pending；原始输出、提示词 hash、素材 hash 和 alpha 观察见 [`../generated/README.md`](../generated/README.md)。这些完整主图还没有五类实际图层和完整合法配方验证，不能据此将 7.8–7.10 标为完成。

## 已有 Artwork 的 Template 调整候选

以下 9 份是已有 Artwork 的有界调整 Template 制作记录，不是新的独立 Artwork 候选，不计入上面的 20 份。胸前持物 v3 是栗发人物与黄衣女孩的新增 preview-only Template 版本；对应 v2 记录保留为历史候选，不被覆盖。它们均为 preview-only，Template 美术批准仍为 pending；每份 brief 绑定准确 Artwork 版本、源 PNG、Template manifest、素材分支、工程报告和双语选项语义。

| Artwork ID | Template ID | brief | 工程 QA | 当前视觉/美术边界 |
|---|---|---|---|---|
| `animal-white-rabbit-v98-candidate@v2` | `animal-white-rabbit-adjustments-v2@v2` | [`animal-white-rabbit-adjustments-v2.yaml`](animal-white-rabbit-adjustments-v2.yaml) | 11 recipes · passed | 兔子耳机、围兜及其他选项仍待用户美术批准 |
| `candidate-humans-20261005@v1` | `human-chestnut-boy-adjustments-v2@v2` | [`human-chestnut-boy-adjustments-v2.yaml`](human-chestnut-boy-adjustments-v2.yaml) | 6 recipes · passed | 原 Artwork 保持不变；Template 分支待用户美术批准 |
| `human-bun-yellow@v1` | `human-bun-girl-adjustments-v2@v2` | [`human-bun-girl-adjustments-v2.yaml`](human-bun-girl-adjustments-v2.yaml) | 6 recipes · passed | 闭眼选项保留原高丸子头；Template 分支待用户美术批准 |
| `human-blond-glasses@v1` | `human-blond-child-adjustments-v2@v2` | [`human-blond-child-adjustments-v2.yaml`](human-blond-child-adjustments-v2.yaml) | 6 recipes · passed | 原 Artwork 保持不变；Template 分支待用户美术批准 |
| `human-rust-jacket@v1` | `human-rust-girl-adjustments-v2@v2` | [`human-rust-girl-adjustments-v2.yaml`](human-rust-girl-adjustments-v2.yaml) | 6 recipes · passed | 原 Artwork 保持不变；Template 分支待用户美术批准 |
| `dots-rose-glasses@v1` | `dots-rose-glasses-adjustments-v3-four-tabs-candidate@v3` | [`dots-rose-glasses-adjustments-v3.yaml`](dots-rose-glasses-adjustments-v3.yaml) | 16 recipes · passed | root 深浅底复核通过；Template 用户美术批准仍 pending |
| `dots-lilac-bucket@v1` | `dots-lilac-bucket-adjustments-v2-four-tabs-candidate@v2` | [`dots-lilac-bucket-adjustments-v2.yaml`](dots-lilac-bucket-adjustments-v2.yaml) | 12 recipes · passed | 云团与渔夫帽明确冲突；root 深浅底复核通过，用户美术批准仍 pending |
| `dots-butter-beret@v2` | `dots-butter-beret-adjustments-v1-four-tabs-candidate@v1` | [`dots-butter-beret-adjustments-v1.yaml`](dots-butter-beret-adjustments-v1.yaml) | 12 recipes · passed | 云团与贝雷帽明确冲突；候选工程通过、待 root 目视与用户美术批准 |
| `candidate-humans-20261005@v1` | `human-chestnut-boy-adjustments-v3@v3` | [`human-chestnut-boy-adjustments-v3.yaml`](human-chestnut-boy-adjustments-v3.yaml) | 8 recipes · passed | 新增站立准备姿势与双手托笔电；精确 hash-bound root co-review、用户美术批准 pending |
| `human-bun-yellow@v1` | `human-bun-girl-adjustments-v3@v3` | [`human-bun-girl-adjustments-v3.yaml`](human-bun-girl-adjustments-v3.yaml) | 8 recipes · passed | 新增相机准备姿势与手持相机；root 已目视候选，精确 hash-bound co-review、用户美术批准 pending |

人类模板双语短语曾有字段错位，修正前 manifest 哈希和旧短语保留于 [`human-adjustments-v2-bilingual-semantics-correction.md`](../prompts/human-adjustments-v2-bilingual-semantics-correction.md)；修正后的四份 manifest 均已重新通过工程 QA。四份人类 Template 的 hash-bound 人工 co-review 仍由 root 后续记录，工程通过不等于用户美术批准。
