# 模块组合工程审查

## 范围与证据

本报告只读审查 v85 模块图鉴目录中的五张真实 Canvas PNG，并对照各自登记的组合配方。捕获源码为 `sha256:9bcd516a91b2d366f1921073962909ee801b9bf75d765c83c2bdc1b200daa672`（main，commit `4d952b907ef4823db7b5e9792726c80a4226eeb8`，cache 85）。这是内部工程审查，不记录用户美术批准，也不改图鉴中的协调性检查状态。

捕获报告登记了 3 个组件设计、4 项单组件适配、5 条显式配方；5 张真实 Canvas 捕获均为工程通过。模块默认候选数仍为 0。5 条配方都待美术审查，`atlas-annotations.json` 中的协调性检查仍全部为 `unreviewed`。

## 首批适配矩阵冻结（OpenSpec 3.1）

24 个基础设计是后续分批目标；当前真实目录只有 3 个组件设计。目录登记 4 项单组件适配，另有 1 条人形耳机＋眼镜配方，共 5 条 recipe。组件设计、单组件适配和配方分开统计，不把配方或素材部件计作额外设计。

以下内容从 cache 85 可信模块目录读取。每个 profile 均绑定完整基底的稳定素材 ID、版本和 SHA-256；几何指纹按目录函数计算。

| Geometry profile | 基底状态 | 姿态 / 视角 | profile 指纹 | 已绑定基底素材 ID @ 版本 | 基底 SHA-256 |
| --- | --- | --- | --- | --- | --- |
| `geometry/dots-bare-front-v1@1.0.0` | `candidate-dots-20261005::bare-classic` | `front-neutral` / front | `8470d17af88b4149` | `artwork/candidate-dots-20261005/bare@1.0.0` | `7222064cfaef4897b78495b112e85e1cc65ec46aa79778094179d43658e04988` |
| `geometry/human-classic-front-v1@1.1.0` | `candidate-humans-20261005::classic` | `front-neutral` / front | `993708b4c044f33b` | `artwork/candidate-humans-20261005/full@1.0.0` | `56423f860f47bbad212875aeecdda40e6c86382b6d15a61b5c1a2ffd723fc521` |
| `geometry/shiba-classic-front-v1@1.0.0` | `candidate-animals-20261005::classic` | `front-seated-neutral` / front | `d69fa8e9497a786a` | `artwork/candidate-animals-20261005/full@1.0.0` | `f6e731ad99f85a20681588e14e2f93279707897da7ff50769f6f29bb62893c62` |

| 组件设计 ID @ 版本 | 类别 | 文件 SHA-256 | 声明支持的适配 |
| --- | --- | --- | --- |
| `pilot-headphones-v1@2.0.0` | 石墨紫绒耳机 kit | `752814b890c50f04d2e2884f5d4c976969bde1667bff18a1e2b6feced4ca7b02` | Dots 裸形、栗发人物 classic；仅登记的正面静态姿态 |
| `pilot-round-glasses-v1@1.0.0` | 棕色圆框眼镜 | `6f4c292afd88852e1c9ef2c476a40b0473c435bec48699d707233d63a40a4481` | 栗发人物 classic；仅登记的正面静态姿态 |
| `pilot-knit-scarf-v1@1.0.0` | 青绿色针织围巾 | `316d23017372854f3b29a91a7435e5fecdf74baab34d2e14f77c17558bc036d5` | 柴犬 classic；仅登记的正面坐姿 |

下表是从实际目录执行 `resolveModularComposition()` 得到的结果，不使用合成夹具。硬约束解算逐项核对可信完整基底状态、精确 profile ID/版本/指纹、组件支持的基底/姿态/布局/风格、动态 fit 输出、锚点变换、遮挡规则、槽位与配方层序。五条 recipe 均返回 `available`，返回原因为工程硬约束通过；五条均 `pending`、`defaultEligible: false`。

| Recipe ID @ 版本 | 组件 ID | 基底状态 / 姿态 | Geometry profile @ 版本 / 指纹 | Recipe fingerprint | Fit fingerprint（按组件顺序） | Resolved fingerprint | 解算 / 美术状态 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `pilot-headphones-v1-on-candidate-dots-20261005-bare-classic@2.0.0` | `pilot-headphones-v1@2.0.0` | Dots 裸形 / `front-neutral` | `geometry/dots-bare-front-v1@1.0.0` / `8470d17af88b4149` | `5efcabdc822c8ac0` | `908bb1b3f009f1ad` | `b836f6211d3fc423` | 硬约束可解 / 美术待确认 |
| `pilot-headphones-v1-on-candidate-humans-20261005-classic@2.0.0` | `pilot-headphones-v1@2.0.0` | 栗发人物 classic / `front-neutral` | `geometry/human-classic-front-v1@1.1.0` / `993708b4c044f33b` | `5ed76b765c81ebeb` | `1757f9940c2e70a9` | `93dc7e5dfdc2e928` | 硬约束可解 / 美术待确认 |
| `pilot-round-glasses-v1-on-candidate-humans-20261005-classic@1.0.0` | `pilot-round-glasses-v1@1.0.0` | 栗发人物 classic / `front-neutral` | `geometry/human-classic-front-v1@1.1.0` / `993708b4c044f33b` | `c8cd06751acc9491` | `2cbda2ca04380a71` | `ed5a82400aaf6771` | 硬约束可解 / 美术待确认 |
| `pilot-knit-scarf-v1-on-candidate-animals-20261005-classic@1.0.0` | `pilot-knit-scarf-v1@1.0.0` | 柴犬 classic / `front-seated-neutral` | `geometry/shiba-classic-front-v1@1.0.0` / `d69fa8e9497a786a` | `4bd46d997f13144b` | `04f8fdac77bce1a8` | `654ec5edf049e4bc` | 硬约束可解 / 美术待确认 |
| `pilot-headphones-and-round-glasses-on-candidate-humans-20261005-classic@1.0.0` | `pilot-headphones-v1@2.0.0` + `pilot-round-glasses-v1@1.0.0` | 栗发人物 classic / `front-neutral` | `geometry/human-classic-front-v1@1.1.0` / `993708b4c044f33b` | `0359ec0ba1388b94` | `1757f9940c2e70a9` + `2cbda2ca04380a71` | `45777abbc1caeb16` | 硬约束可解 / 美术待确认 |

五条配方逐项解算得到 5/5 个可渲染结果；实际页面 Canvas 捕获和透明像素读回见本目录的 `coverage-report.json`。解算使用的目录、resolver、fit solver、composer，以及三件组件和三张基底 PNG 的当前文件 SHA-256 均与上述 `sourceId` 的冻结 manifest 一致。围巾的历史 halo 说明没有被提升为运行时缺陷：本轮对真实 RGBA 源图及 module-004 输出做浅色与深色合成，未见 alpha 光晕；直接查看 PNG 时显示的 alpha=0 隐藏 RGB 不属于可见像素。

这项冻结只确认登记矩阵和工程硬约束结果。3 个设计、4 项单组件适配和 5 条 recipe 的美术批准状态仍全部为 `pending`；默认模块候选仍为 0。

## 逐图审查

| Canvas | 登记配方 | 工程观察 |
| --- | --- | --- |
| `canvas/module-001.png` | 耳机 × Dots 裸形，profile `geometry/dots-bare-front-v1@1.0.0` | 面部安全区清楚，头梁和耳罩形成完整耳机。耳罩贴近外轮廓，头梁弧形占比偏大，建议在美术审查中复看比例和耳罩如何包住球体。当前渲染器将三个部件都画在基底上方，因此不能表现藏在轮廓后的耳罩部分。这是视觉/遮挡审查项；本次捕获没有证明 resolver 失败。 |
| `canvas/module-002.png` | 耳机 × 栗发人物 classic，profile `geometry/human-classic-front-v1@1.1.0` | 左右耳罩均贴合登记的略有高低差的耳侧锚点，头梁未遮脸。完整组合中未见明显碰撞。 |
| `canvas/module-003.png` | 圆框眼镜 × 栗发人物 classic，profile `geometry/human-classic-front-v1@1.1.0` | 镜框对齐双眼，瞳孔保持可见。大圆框的视觉比例需要在实际展示尺寸下确认；当前正面姿态未见明确的几何失败。 |
| `canvas/module-004.png` | 针织围巾 × 柴犬 classic，profile `geometry/shiba-classic-front-v1@1.0.0` | 围巾贴着颈部，两个垂带落在胸前，没有盖住口鼻。我把源图与最终输出的实际 RGBA 像素分别合成到浅紫和深灰底色上，未复现可见的外部光晕。直接用图像查看器打开源 PNG 时，查看器显示了 alpha 为 0 的透明像素中残留的 RGB 颜色；这种隐藏 RGB 不会出现在正确的 alpha 合成结果中，不能单独作为可见 halo 缺陷证据。组件试点 README 中关于 halo 的历史说明需要按当前真实合成结果复核，不能直接当作本次输出的已确认缺陷。 |
| `canvas/module-005.png` | 耳机 + 眼镜 × 栗发人物 classic | 两件组件能同时真实绘制，眼睛仍清楚；在当前捕获尺寸下未发现确定的遮挡冲突。美术审查时应单独检查镜腿与耳罩的关系，因为这是独立的组合配方。 |

此前用户拒绝的截图记录指向 v2 耳机素材，同时明确截图未提供源码版本或精确项目配置。因此不能据此认定当前 v4 耳机输出就是同一个被拒绝的组合。Dots 上的比例及全部部件都在基底上方绘制的问题值得重新人工检查；本报告不批准或否决该配方。

## 捕获记录回读

覆盖报告记录的五张输出 PNG 哈希如下：

- `module-001.png`：`a79d3c8851741a767d6027f93005b04ceac55c2415cbe353e8ba130b324b5ec4`
- `module-002.png`：`bf0e8dc3c6acb1b419d62fd70f96a43e5fabfd066e603eb14bc63e907b63ba11`
- `module-003.png`：`5bc5f618f30e56f3b6b7de6cadd37e4f2830863f20941ea26066fac32ec6b555`
- `module-004.png`：`ecbd30d264174e830dc0672f874b9c694c8c2796da1a384707a825a221f8c3ab`
- `module-005.png`：`c84ab158a00c7f0c428fa1096840decf0a051ef0e69160b8dcc728acce9062d9`

报告记录的五张 PNG 均为 1254 × 1254，且具有真实透明像素和可见像素。这证明捕获了实际带 alpha 的 Canvas 输出，不代表美术批准。

## 收尾边界

几何 profile 和配方均已登记，五种声明的组合都生成了真实 Canvas 输出。现有证据支持这些正面静态姿态的工程可用性检查，但不能替代五项协调性清单或逐适配用户美术批准。不得依据本报告补记这些批准。
