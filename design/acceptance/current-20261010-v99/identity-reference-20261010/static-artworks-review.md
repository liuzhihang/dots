# Dots / Grok 静态外观身份核对

**结论：**核对了默认画廊中已有的 6 个 Dots/Grok 批准外观，以及本轮 `new-artworks-review.png` 中的 2 个新增候选。8 张实际原图都保持各自系列的可辨识特征；Dots 与 Grok 角色均未出现手、臂、腿或脚。新增两张仍为待审核候选，不因此获得画廊发布资格。

## 证据范围

- 画廊：`design/acceptance/current-20261010-v99/browser/gallery-1440-en.png`。可见默认目录计数为 15；其中 Dots、Grok 各 3 个批准外观。
- 新候选对照：`design/acceptance/current-20261010-v99/visual/new-artworks-review.png`。包含 Dots 与 Grok 两张候选的黑底/白底合成对照，并标注版本与 SHA-256。
- 逐张查看的透明原图：下表所列 `dist/` 路径。身份核对以原图为准，未修改或重新编码源图。
- 目录状态：原 6 个 ID 在 `dist/studio-artwork-catalog.js` 的批准 ID 集合中；新增 2 个在 `PREVIEW_ARTWORKS` 中标为 `pending-review` / `preview-only`，没有加入默认批准画廊。

## 逐图核对

| 系列 | Artwork ID / 版本 | 原图 | 实际观察 |
|---|---|---|---|
| Dots | `candidate-dots-20261005` / v2 | `dist/assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png` | 蓝色短密绒圆球、黑色椭圆双眼与包耳式耳机；主体完整、无可见嘴和肢体。作为基准外观，系列特征清楚。 |
| Dots | `dots-rose-glasses` / v1 | `dist/assets/looks/dots-rose-glasses.png` | 粉色短绒圆球、透明玫粉圆框与黑色双眼；眼镜覆盖在脸部前方，无手脚或身体附肢。 |
| Dots | `dots-lilac-bucket` / v1 | `dist/assets/looks/dots-lilac-bucket.png` | 浅紫短绒圆球、黄色渔夫帽、黑色双眼；仍是无肢体的单体 Dots 外观。 |
| Dots | `dots-butter-beret` / v2 | `dist/assets/companions/v99/dots-butter-beret-candidate-v2.png` | 奶油黄短密绒圆角三角主体、海军蓝贝雷帽与黑色椭圆双眼；圆角新轮廓有别于既有圆球，但保留简洁 Dots 面部；无嘴、手、臂、腿或脚。状态保持 pending。 |
| Grok | `candidate-grok-20261005` / v2 | `dist/assets/characters/grok-bot-purple-orb-candidate-v2.png` | 紫色软几何圆球、成对平行倾斜的白色胶囊眼；没有屏幕脸、嘴或肢体，是 Grok 基准外观。 |
| Grok | `grok-green-cloud` / v1 | `dist/assets/looks/grok-green-cloud.png` | 青绿色软云轮廓、成对倾斜白色胶囊眼；轮廓变化明显，眼部语言与基准一致，无肢体。 |
| Grok | `grok-teal-square` / v1 | `dist/assets/looks/grok-teal-square.png` | 蓝绿色圆角方形软几何轮廓、成对倾斜白色胶囊眼；无嘴或肢体，仍清楚属于 Grok 视觉家族。 |
| Grok | `grok-coral-drop` / v1 | `dist/assets/companions/v99/grok-coral-drop-candidate-v1.png` | 珊瑚橙红柔和哑光水滴轮廓与成对白色胶囊眼；与基准圆球造型区分明确，未出现嘴、屏幕脸、配饰或肢体。状态保持 pending。 |

## 后续边界

本核对确认的是静态图像中的系列身份与无肢体约束，不代表新增候选已获美术批准，也不证明新增模板编辑能力。只有收到逐件确认后，才能更新候选审核状态；Dots/Grok 的真实模板能力仍独立按模板矩阵与编辑闭环验收。
