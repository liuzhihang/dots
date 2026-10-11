# 单体候选输出

所有作品均使用内置 `image_gen.imagegen` 单件生成，原始工具输出留在其默认 generated_images 路径；此处是项目内候选副本。附带同名 JSON 记录精确尺寸/hash/alpha 观察，精确提示词保存在 `../prompts/`，Brief 保存在 `../briefs/`。

| Candidate ID | 当前输出 | 来源与已观察形态 | SHA-256 | 美术审批 |
|---|---|---|---|---|
| `candidate-animal-panda` | [PNG](candidate-animal-panda-candidate-v1.png) · [metadata](candidate-animal-panda-candidate-v1.json) | R10/R11 小尺寸熊猫卡片；原创熊猫幼崽，黑耳/眼斑、浅色体躯、四肢结构清楚 | `508218a27461287f7415cc75777e61c9700549cb3745c83b31626c6c5de2f1d6` | pending |
| `candidate-animal-pig` | [PNG](candidate-animal-pig-candidate-v1.png) · [metadata](candidate-animal-pig-candidate-v1.json) | R05 家族图里的低清粉色猪形线索；原创建议稿，猪鼻/耳/蹄/卷尾可辨 | `2aebe83a663699cdf4852681d4be27064dc8ca712a30de418d338b38a7f369bf` | pending |
| `candidate-animal-monkey` | [PNG](candidate-animal-monkey-candidate-v1.png) · [metadata](candidate-animal-monkey-candidate-v1.json) | R05 极小暖棕灵长类线索；原创建议稿，脸部、圆耳、四肢、尾巴可辨，参考物种置信度低 | `c91bf3c53d91cc3b7ce1825da1273028eef9ed3acf079dca77ad885a25389b4d` | pending |
| `candidate-animal-small-bird` | [PNG](candidate-animal-small-bird-candidate-v1.png) · [metadata](candidate-animal-small-bird-candidate-v1.json) | R05/R10 只提供低清系列/风格线索；原创歌鸟候选，以喙、双翼、尾羽、脚与黄蓝配色区别企鹅 | `68fc06fc97b5c131480e32c771a53b93034612c332c3d0c1f541a0de330133ed` | pending |
| `candidate-animal-penguin` | [PNG](candidate-animal-penguin-candidate-v1.png) · [metadata](candidate-animal-penguin-candidate-v1.json) | R05/R11 只提供低清系列/风格线索；原创企鹅候选，以黑白体块、鳍肢、橙喙和脚区别歌鸟 | `147f6b04c05c10cb1935992ee074bcb13827c43df06bdd02859f37c734bb9edd` | pending |

`RGBA`、透明角点和尺寸可机器读取；模型生成成功、alpha 通道存在、项目副本与 metadata 一致，均不等于边缘视觉 QA、用途许可或用户美术批准。含低 alpha 区域的边缘及角色完整取景必须逐件复核。全部素材仅供 change 内待审，不在默认图库、生产目录或发布闭包中。

## 熊猫 Template review draft 的 v2 alpha-clean 资产

以下 6 个 v2 文件从右侧对应的原始 v1 工具输出做了用户授权的孤立透明散点清理，另存，不覆盖任何来源。项目层文件由 Template manifest 引用；尺寸均为 1230×1278，工程组合验证结果记录在 `.artifacts/character-adjustments/candidate-animal-panda-adjustments-v1/report.json`。全部仍是 change 内 pending 候选。

| 用途 | 原始工具输出 ID | review 资产 | SHA-256 |
|---|---|---|---|
| 完整坐姿母图 | `exec-942df9e7-dc59-4c73-ab20-865218c0517d` | [PNG](candidate-animal-panda-candidate-v2-alpha-clean.png) | `b0f058ad260ac76545164e0b927db00a3fe32f5d50ff08d30afa39bfe7b2ecd3` |
| 蜷坐完整体形 | `exec-55b7b9c7-9c70-4dbc-be04-a76b023ce31f` | [PNG](candidate-animal-panda-appearance-crouch-candidate-v2-alpha-clean.png) | `b910b7196a8d8f0513878023f504888c65d5fd74dc17c501049cffd8aca2b72a` |
| 奶油浓咖完整配色版本 | `exec-1e1eb2cb-9154-451e-be16-3d365b693dda` | [PNG](candidate-animal-panda-color-espresso-candidate-v2-alpha-clean.png) | `29266c908b9f80445119b09bbc7883ef44ae294a8f875d6e926ae07ab2eba511` |
| 闭眼表情层 | `exec-1919a744-bd75-4989-9d68-db64a5e24855` | [PNG](candidate-animal-panda-face-closed-patches-candidate-v2-alpha-clean.png) | `61b5500bcaf961900b1c1f1c3b84e1315300784efc228313b2b502fd6c18e806` |
| 针织背心层 | `exec-074e83d2-776b-49c7-886d-d81f5bb7dbad` | [PNG](candidate-animal-panda-clothing-knit-vest-candidate-v2-alpha-clean.png) | `c9b1fc5faec5d312517adb36f730ccd1199bd10635d3d859782b81ff217f9adc` |
| 鼠尾草叶夹层 | `exec-5aa0ec9f-fe68-4bf7-bf2b-17fe3f517295` | [PNG](candidate-animal-panda-accessory-leaf-clip-candidate-v2-alpha-clean.png) | `0ca7fde67430b6b00ab317bde2ec9388aee401f16cdf04f30a1f5fc10b8411a1` |

每次 imagegen 的确切提示词和输出路径列在 [`candidate-animal-panda-prompts.md`](../prompts/candidate-animal-panda-prompts.md)，逐次提示词摘要、原输出路径、源/派生 SHA 与 cleanup 统计另记于 [candidate-animal-panda-adjustment-generation.json](candidate-animal-panda-adjustment-generation.json)。各 alpha-cleanup JSON 保留逐文件来源/结果 SHA、保留连通域和像素统计。
## 人物胸前持物 v3 的透明派生素材

以下四份为两个既有 Artwork 的完整人物调整分支。ImageGen 原始输出和项目内 v1 副本保持不变；v3 Template 绑定的是授权 alpha-only 清理后另存的 clean-v2。完整生成来源、准确 reference/output 路径与 hash、未留存的逐字 prompt 限制、sidecar 统计以及 QA 报告 hash 见 [`human-hold-prop-v3-provenance.md`](../prompts/human-hold-prop-v3-provenance.md)。

| Artwork | 分支 | 保留的 v1 | Template 使用的 clean-v2 | clean-v2 SHA-256 |
|---|---|---|---|---|
| `candidate-humans-20261005@v1` | 站立准备托笔电 | [PNG](human-adjustments-v3/chestnut-boy-laptop-ready-standing-v1.png) | [PNG](human-adjustments-v3/chestnut-boy-laptop-ready-standing-clean-v2.png) | `5636db4d33e6f88d10acc1244ae525d7f7ba81a8f2e33abb22ed8618e5d25f46` |
| `candidate-humans-20261005@v1` | 双手托笔电 | [PNG](human-adjustments-v3/chestnut-boy-laptop-held-v1.png) | [PNG](human-adjustments-v3/chestnut-boy-laptop-held-clean-v2.png) | `7b54e32efebeb938fd410a28283108aa7432067cbae68b839e0a858dff2e191a` |
| `human-bun-yellow@v1` | 站立准备托相机 | [PNG](human-adjustments-v3/bun-girl-camera-ready-standing-v1.png) | [PNG](human-adjustments-v3/bun-girl-camera-ready-standing-clean-v2.png) | `8bf6ee1a4f30c22305d786a7758c81a4de849011267fea14f101dd5c8dc234fc` |
| `human-bun-yellow@v1` | 双手持相机 | [PNG](human-adjustments-v3/bun-girl-camera-held-v1.png) | [PNG](human-adjustments-v3/bun-girl-camera-held-clean-v2.png) | `57f6fada3064d3289ca545faffe8f389dc367edd8393cc446fd2e3ed869bb13f` |

clean-v2 图像画布仍为 1254×1254，保留的 RGB/alpha 未重绘；四张候选均已在深色与暖浅色底合成检查，尺寸、alpha、移除统计和来源 SHA 写在各自 `.alpha-cleanup.json`。栗发人物下颌/领口争议 ROI 的 RGB 仅对应 max alpha=3 的近透明像素，实际合成不可见，没有扩大清理范围。八配方深浅底联系图和完整工程报告保存在 `.artifacts/character-adjustments/human-{chestnut-boy,bun-girl}-adjustments-v3/`；全部候选仍为 preview-only，root 的精确 hash-bound co-review 与用户美术批准待完成。
