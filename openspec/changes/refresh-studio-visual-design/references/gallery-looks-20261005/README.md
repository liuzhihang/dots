# Dot Icon Studio — 内置形象画廊候选图

2026-10-05 生成的 10 张独立透明 PNG 候选，均采用短绒或柔和软胶的 3D 玩具质感，并逐项传入对应家族参考图。原始输出保留在 `~/.codex/generated_images/`，发布副本位于项目 `dist/assets/looks/`，文件原始字节未做后处理。

本目录保存生成与观察记录；PNG 位于发布素材目录。生成阶段没有编辑业务代码，也没有进行浏览器或 Sites 操作。页面接入与验收由后续 QA 单独记录。**十张都尚未获得用户网页验收。**

`provenance.json` 含每项完整提示词、参考图路径、image_gen 原始输出路径、复制路径、逐张外观结论、SHA-256、像素尺寸和 alpha 检查。

## 图像检查

| 文件 | 家族 | 像素 | SHA-256 | alpha=0 像素 | 主体边距（左/上/右/下，alpha≥16） | 查看结论 |
|---|---|---:|---|---:|---|---|
| `dots-rose-glasses.png` | Dots | 1254×1254 | `a95261160aa0a6223bab0a3b38d080a4fa5b1b6315593bb6631d820732578d75` | 731,940 (46.546%) | 8.53% / 9.73% / 9.01% / 8.69% | 玫粉绒球，透明粉圆框与镜腿贴合脸侧；两枚黑色椭圆眼，无嘴肢体。 |
| `dots-lilac-bucket.png` | Dots | 1254×1254 | `50ddea9f24e82c02b14cc5374d4b3ae08b00954aa4bcdcbb6aa24dc2a8b3d615` | 808,076 (51.387%) | 6.94% / 11.72% / 6.94% / 9.73% | 淡紫绒球，黄短檐渔夫帽贴合头顶，檐下双眼可读；无嘴肢体。 |
| `grok-green-cloud.png` | Grok Bot | 1254×1254 | `d186c5b0837b15c6177b476729b463a7542fdc559d606c6d5818bbad274bad96` | 949,952 (60.41%) | 6.86% / 18.26% / 6.3% / 15.71% | 鲜绿圆润软胶云形，无嘴肢体，两枚白胶囊眼同向倾斜。 |
| `grok-teal-square.png` | Grok Bot | 1254×1254 | `81b63d5a809c381f7617261ee4c186031acdc984bac7844d4820c732d44b5f6d` | 816,693 (51.935%) | 13.8% / 15.55% / 13.72% / 13.8% | 青绿色圆角方体软胶，两枚白胶囊眼同向倾斜，无嘴肢体。 |
| `muse-rose-flowers.png` | Meta Muse | 1254×1254 | `d0865bc0a0df4e0e9451c702dac8db0a4bf7e6aa0820657edffa239d24b367be` | 966,879 (61.486%) | 23.68% / 7.42% / 23.05% / 7.5% | 玫粉包覆式绒罩、暖内嵌脸面，双短臂夹托白菊花茎，花头低于脸面，无围巾。 |
| `muse-sage-reading.png` | Meta Muse | 1254×1254 | `82f85f8abce3d425381c54c3d54b116a4e9ab6af2f782792377bbd6ed79f0f3a` | 1,009,482 (64.195%) | 23.37% / 10.45% / 22.65% / 9.09% | 鼠尾草绿包覆式绒罩、暖内嵌脸面，双手抱竖直闭合书；未呈现打开阅读，无围巾。 |
| `human-bun-yellow.png` | Humans | 1254×1254 | `f7a5f87daa25e1171f8c42db6ed8b668b695bf6f40cbed0aa31d5f8ca7052ccc` | 1,087,604 (69.163%) | 25.36% / 0.88% / 26.08% / 1.28% | 原创棕色丸子头女孩、黄色hoodie/米白短裤/黄白鞋、五指挥手，完整短腿。 |
| `human-blond-glasses.png` | Humans | 1254×1254 | `84d20915564eac63f5e33834e221bd73ef7530c8ea331c730503e9de0dafc0f6` | 1,099,076 (69.893%) | 25.12% / 2.55% / 26.4% / 2.39% | 原创短金发男孩，透明圆框、米白开衫/浅蓝内衫与裤/白鞋，双手身前。 |
| `animal-white-cat.png` | Animals | 1254×1254 | `6b6e0cc65b7edef88b0b19a948444a261a4050ccdcba942fd5941bc2aa2f499a` | 790,208 (50.251%) | 15.31% / 3.99% / 10.77% / 3.91% | 原创奶油白猫，灰三角耳与灰尾、粉鼻，清楚猫口鼻与胡须、坐姿四爪。 |
| `animal-gray-husky.png` | Animals | 1254×1254 | `21fa19552ec9c93282985aecf80a1c89d38d15064cf27c3a8bafc8cacdb315ca` | 790,161 (50.248%) | 17.46% / 2.23% / 9.41% / 3.03% | 原创灰白哈士奇，三角耳、犬口鼻和额头浅深面罩，坐姿四爪与卷起尾巴。 |

十张 PNG 都有 RGBA alpha 通道，实测 alpha 范围为 0–255；透明背景像素和高不透明度的角色像素均存在。毛发/材质的 alpha 多数为 250–254，因此精确为 255 的像素较少，但主体接近全不透明。JSON 同时保留 alpha>0 全边缘框和 alpha≥16 主体框，后者排除了低 alpha 抗锯齿边缘。

image_gen 没有稳定遵循提示中的约 10% 边距：若干角色的主体接近画布边缘，特别是人物和动物的底边。表内保留 alpha≥16 实测数值；集成时宜通过 contain 和卡片留白控制呈现。


## 身份、材质、接触与验收约束

已有五只基准的来源见[基准来源记录](../asset-provenance.md)。本轮每组增加两项图库候选，canonical 基准仍各一只。五组所有基准及新候选均待用户在真实页面确认。

| 家族 | 新成员识别与材质 | 必须保留的接触关系 | 禁止项 | 真实页面检查 |
|---|---|---|---|---|
| Dots | 玫粉圆框、浅紫黄帽；圆球和黑椭圆眼，细短绒 | 镜架/镜腿贴合球面；帽檐贴合头顶并留双眼 | 嘴、手脚、悬浮帽镜、用旧球叠加另一主体 | 三只轮廓可读，配饰不遮眼；帽檐完整，绒面不变成普通几何球 |
| Grok Bot | 鲜绿云形、青绿圆角方体；同向斜白胶囊眼，哑光软胶 | 本轮为裸形，无外接道具 | 人物脸/肢体、机器人部件、毛绒、默认眼镜电脑、相反倾斜双眼 | 云与方体可一眼区分；白眼不被材质高光吞没，紫球基准保持独立 |
| Meta Muse | 玫粉花束、鼠尾草捧书；包覆式绒罩和暖内嵌脸面 | 短臂托白雏菊绿茎；双手抱竖直闭合书 | 人物头发、围巾挤压脸窗、道具漂浮、将闭合书说成打开阅读 | 三色外罩可读；脸窗无遮挡，花/书低于脸，手与道具保持接触 |
| 人物 | 棕色丸子头/黄帽衫米白短裤；短金发透明圆框/米白开衫浅蓝内衫裤；皮肤、头发、织物分区 | 女孩完整五指挥手；男孩镜架贴脸、双手自然在身前 | 动漫原图或完整角色复刻、只给旧截图换衣、发髻/手/鞋裁切、额外手指 | 新人物与栗发基准可辨；五官鲜活，衣服与发色对应 Prompt，完整身体不被裁切 |
| 动物 | 白猫灰三角耳/灰尾粉鼻；灰白哈士奇面罩、犬口鼻；细短绒 | 坐姿保持本物种四爪、后腿与尾巴结构，无新增手持道具 | 人手/人身、猫圆熊耳、犬脸当猫、动漫截图、断尾断爪 | 三个物种清楚；耳、口鼻、爪、尾均完整，材质不遮身份色块 |

页面验收需分别查看封面/家族卡/画廊/工作台及桌面、768、390、320 px，记录实际图片加载、遮挡、完整轮廓、可操作控件与导出结果。Canvas 模板/背景支持、UI QA、生成图查看和逐组用户美术确认是不同状态；此记录不将任一候选标为美术通过。

## 完整 ImageGen 提示词

### 1. `dots-rose-glasses.png`

参考图：`/Users/liuzhihang/workspace/dots/dist/assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png`

```text
Use case: Dot Icon Studio built-in character gallery asset.
Image 1 is the style and material reference: match its premium soft 3D collectible toy rendering, fine short plush fibers, gentle studio lighting, polished but warm finish, frontal centered presentation.
Create one complete floating character only: a perfectly round rose-pink plush orb, with two small glossy black oval eyes on the front and delicate transparent round eyeglasses fitted naturally against the plush surface. Keep both eyes visible through the lenses. No mouth, no arms, no legs, no headphones, no other accessories.
Composition: square 1:1 canvas, single character fully in frame, centered, straight-on view, about 10% clear margin on every side.
Constraints: true transparent alpha background, no floor, no backdrop, no scenery, no cast shadow beyond the character silhouette, no text, no letters, no logo, no watermark. Match Image 1's detailed soft 3D toy style while changing the body color and adding only the described glasses.
```

### 2. `dots-lilac-bucket.png`

参考图：`/Users/liuzhihang/workspace/dots/dist/assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png`

```text
Use case: Dot Icon Studio built-in character gallery asset.
Image 1 is the material and rendering reference: match its premium, finely detailed short-plush orb, soft studio light, gentle dimensional shading and polished collectible-toy finish.
Create one complete floating character only: a pale lilac plush sphere with two small glossy black oval eyes on the front, wearing a simple warm-yellow bucket hat fitted snugly over the top of the round head. The hat brim should gently follow the orb's curvature without covering either eye. No mouth, no arms, no legs, no headphones, no extra accessories.
Composition: square 1:1 canvas, a single character fully in frame, centered and straight-on, with about 10% clear margin on every side.
Constraints: genuine transparent alpha background; no ground or external floor, no environment, no background color, no text, letters, logo, or watermark. Keep the detailed soft 3D plush style from Image 1; only change the plush color and add the described hat.
```

### 3. `grok-green-cloud.png`

参考图：`/Users/liuzhihang/workspace/dots/dist/assets/characters/grok-bot-purple-orb-candidate-v2.png`

```text
Use case: Dot Icon Studio built-in character gallery asset.
Image 1 is the project family rendering reference. Match its soft, premium 3D toy finish, smooth softly shaded material, gentle studio highlights, clean frontal display and simple expressive face.
Create one complete floating Grok-style geometric companion only: a vivid fresh-green cloud silhouette made from a compact cluster of softly rounded lobes, with two small solid white vertical capsule-shaped eyes on the front, both tilted slightly in the same direction. No mouth, no arms, no legs, no robot parts, no accessories; the cloud geometry itself must be the unmistakable identity.
Composition: square 1:1 canvas, one full character centered, straight-on, about 10% clear margin on every side.
Constraints: true transparent alpha background, no ground/floor, no environment, no background, no text, no letters, no logo, no watermark. Keep a polished soft 3D collectible-toy aesthetic guided by Image 1, while replacing the orb with a clear cloud silhouette.
```

### 4. `grok-teal-square.png`

参考图：`/Users/liuzhihang/workspace/dots/dist/assets/characters/grok-bot-purple-orb-candidate-v2.png`

```text
Use case: Dot Icon Studio built-in character gallery asset.
Image 1 is the project family rendering reference. Match its soft, premium 3D toy finish, smoothly rounded material, gentle studio highlights, clean frontal display and simple expressive face.
Create one complete floating geometric companion only: a saturated teal-green rounded square soft-gel shape, with generously softened corners and slightly pillowy convex surfaces, bearing two small solid white vertical capsule-shaped eyes on the front, both tilted slightly in the same direction. The silhouette must read immediately as a rounded square. No mouth, no arms, no legs, no robot parts, no accessories.
Composition: square 1:1 canvas, one full character centered, straight-on, about 10% clear margin on every side.
Constraints: genuine transparent alpha background; no ground/floor, environment, backdrop, text, letters, logo, or watermark. Use Image 1 only as the 3D character finish reference; keep this design purely geometric and simple.
```

### 5. `muse-rose-flowers.png`

参考图：`/Users/liuzhihang/workspace/dots/dist/assets/characters/meta-muse-cream-hooded-candidate-v1.png`

```text
Use case: Dot Icon Studio built-in character gallery asset.
Image 1 is the family reference: a small cozy hooded plush companion with a warm open face window, gentle rounded body, fine short fur, delicate facial features and soft premium 3D studio lighting. Match that identity and finish.
Create one complete floating full-body character only: same hooded Muse silhouette, with a soft rose-pink plush outer hood and body surrounding a warm peach face window. Keep both dark eyes, small nose and gentle smile completely unobstructed. Add two short natural arms reaching forward and gently holding one small bouquet of white daisies with sunny yellow centers; the green stems visibly meet the hands and touch the body. Keep bouquet below the face so it never covers the face.
Composition: square 1:1 canvas, full character and bouquet in frame, centered, front-facing, about 10% clear margin on every side.
Constraints: true transparent alpha background; no external ground, floor or scene; no text, logo, watermark, extra props, or extra characters. Follow Image 1's warm plush toy style; change only the outer color and pose/prop as specified.
```

### 6. `muse-sage-reading.png`

参考图：`/Users/liuzhihang/workspace/dots/dist/assets/characters/meta-muse-cream-hooded-candidate-v1.png`

```text
Use case: Dot Icon Studio built-in character gallery asset.
Image 1 is the family reference: a small cozy hooded plush companion with a warm open face window, gentle rounded body, fine short fur, delicate facial features and soft premium 3D studio lighting. Match that identity and finish.
Create one complete floating full-body character only: same hooded Muse silhouette with a pale sage-green plush outer hood and body surrounding a warm peach face window. Keep both dark eyes, small nose and gentle smile fully unobstructed. Add two short natural arms supporting a little closed book in front of the torso, held below the face; both hands must visibly touch the book, and the book must not obscure any part of the face.
Composition: square 1:1 canvas, full character and book in frame, centered, front-facing, about 10% clear margin on every side.
Constraints: genuine transparent alpha background; no external floor, ground, or scene; no text, letters, logo, watermark, extra props, or extra characters. Follow Image 1's warm plush toy style; change only the outer color and pose/prop as specified.
```

### 7. `human-bun-yellow.png`

参考图：`/Users/liuzhihang/workspace/dots/dist/assets/characters/humans-chestnut-chibi-teal-knit-candidate-v1.png`

```text
Use case: Dot Icon Studio built-in character gallery asset.
Image 1 is the human-family style reference: a charming original 3D collectible chibi child with a softly oversized head, large warm brown eyes, natural warm skin, detailed sculpted hair, knitted/clothing texture, delicate blush, gentle studio lighting and full small body.
Create one original little girl with medium chestnut-brown hair gathered into a clear high round bun, wearing a sunny yellow hooded sweatshirt, simple matching casual shorts or skirt, complete short legs and small shoes. She faces forward with a friendly, open expression. Raise one arm in a natural hello wave at about shoulder height, palm facing the viewer, with a clearly formed hand and five distinct naturally spaced fingers; keep the other arm relaxed at her side. Both eyes, both feet and the full hair bun must be visible.
Composition: square 1:1 canvas, single full-body child centered, front-facing, with about 10% clear margin on every side.
Constraints: genuine transparent alpha background; no floor, ground, scenery, text, logo, watermark or extra characters. Match Image 1's fine soft 3D toy craftsmanship, but make a new original human character; do not imitate any known cartoon, anime or copyrighted character.
```

### 8. `human-blond-glasses.png`

参考图：`/Users/liuzhihang/workspace/dots/dist/assets/characters/humans-chestnut-chibi-teal-knit-candidate-v1.png`

```text
Use case: Dot Icon Studio built-in character gallery asset.
Image 1 is the human-family style reference: an original 3D collectible chibi child with a softly oversized head, large warm eyes, natural skin, detailed sculpted hair, tactile clothing, gentle studio lighting and a complete small body.
Create one original little boy with neat short pale-blond hair, clear transparent round eyeglasses that leave both eyes plainly visible, a warm friendly face and subtle blush. He wears a soft ivory cardigan over a pale shirt, light powder-blue trousers and complete small shoes. Front-facing, standing calmly, both hands naturally resting together in front of his torso without hiding the outfit; show the full head, arms, legs and both shoes.
Composition: square 1:1 canvas, one full-body child centered, straight-on view, about 10% clear margin on every side.
Constraints: true transparent alpha background; no floor, external shadow plane, scenery, text, lettering, logo, watermark or extra people. Follow Image 1's softly detailed premium 3D toy style while creating a new original child, not a known cartoon or anime character.
```

### 9. `animal-white-cat.png`

参考图：`/Users/liuzhihang/workspace/dots/dist/assets/characters/animals-original-shiba-candidate-v1.png`

```text
Use case: Dot Icon Studio built-in character gallery asset.
Image 1 is the animal-family reference: a charming original seated chibi companion with carefully groomed fine short fur, soft sculpted volume, bright expressive eyes, gentle studio highlights and premium 3D collectible-toy detail. Match its warmth and craftsmanship.
Create one original small white kitten seated upright and facing the viewer. The coat is mostly clean white, with only subtle gray tips on the ears and a small gray tail. Give it a clear feline face with pink nose, tiny curved mouth, visible short whiskers, soft cheek muzzle, two upright triangular cat ears, two bright eyes, and distinct front paws; show the seated haunches and curved tail clearly. Keep believable cat anatomy and fine short fur over the whole body.
Composition: square 1:1 canvas, one complete seated kitten centered, near-frontal view, ears, paws and tail fully in frame, about 10% clear margin on every side.
Constraints: genuine transparent alpha background; no floor, ground, scenery, props, text, logo, watermark or extra animals. Make a new original cat design; no recognizable existing character.
```

### 10. `animal-gray-husky.png`

参考图：`/Users/liuzhihang/workspace/dots/dist/assets/characters/animals-original-shiba-candidate-v1.png`

```text
Use case: Dot Icon Studio built-in character gallery asset.
Image 1 is the animal-family reference: a charming original seated chibi companion with carefully groomed fine short fur, soft sculpted volume, bright expressive eyes, gentle studio highlights and premium 3D collectible-toy detail. Match its warmth and craftsmanship.
Create one original gray-and-white husky puppy sitting upright and facing the viewer. Give it unmistakably canine anatomy: a dog muzzle with a small dark nose and closed gentle mouth, two upright triangular husky ears, expressive warm eyes, a gray-and-white facial mask, four clearly visible paws, compact seated body and a fluffy curled tail visible beside the body. Render dense fine short puppy fur with subtle gray/white patterning.
Composition: square 1:1 canvas, one complete seated puppy centered, near-frontal view, ears, all paws and tail fully in frame, about 10% clear margin on every side.
Constraints: true transparent alpha background; no floor, ground, scene, props, text, logo, watermark or additional characters. Create an original husky design and match Image 1's gentle 3D collectible-toy finish.
```
