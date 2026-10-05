# Grok Bot 紫色球形基准候选

本记录对应 `dist/assets/characters/grok-bot-purple-orb-candidate-v2.png`。2026-10-05 使用内置 ImageGen 生成，并对第一版做了一次只针对胶囊眼的校正。三张参考已实际查看，帮助提炼角色轮廓与眼部语言；初次生成时通过提示词文字描述参考，没有把参考图片作为工具图像输入，也未将照片、截图或贴纸裁切进成品。成品是独立的 3D 再现，不是官方文件。

本候选保留接近球形的紫色 Cora 式主体和两枚同方向倾斜的白色胶囊眼，目标是让眼部轻微贴面。它是 Grok Bot 家族的一只基准角色，不代表整个角色目录。当前状态为**待网页用户确认**；生成图本身不构成真实页面美术验收通过。

## 输入参考

下面的项目内副本随本记录保存，方便后续复核；括号中是用户提供的原始附件路径。

| 项目内副本 | 参考内容 | 用户附件来源 |
| --- | --- | --- |
| `01-user-reference.jpg` | Grok Bot 贴纸及紫色圆形角色 | `/tmp/codex-remote-attachments/01a109ad-a01d-7680-be6e-b7297f9f3684/06B2193B-E2FA-4999-97CA-87F705B9E695/1-Photo-1.jpg` |
| `02-user-reference.jpg` | Cora 紫色圆形角色及 Grok Bot 几何角色家族 | `/tmp/codex-remote-attachments/01a109ad-a01d-7680-be6e-b7297f9f3684/06B2193B-E2FA-4999-97CA-87F705B9E695/2-Photo-2.jpg` |
| `03-user-reference.jpg` | 用户拍摄的 Grok Bot 多色几何角色展示 | `/tmp/codex-remote-attachments/01a109ad-a01d-7680-be6e-b7297f9f3684/06B2193B-E2FA-4999-97CA-87F705B9E695/3-Photo-3.jpg` |

## 生成记录

工具：Codex 内置 `image_gen.imagegen`，透明背景模式；未使用 CLI/API。生成顺序为底稿生成，再用底稿作输入，只校正胶囊眼一次。

| 阶段 | ImageGen 输出 |
| --- | --- |
| 紫色球形底稿 | `/Users/liuzhihang/.codex/generated_images/01a10aa7-c743-7532-b2e5-782fb8383985/exec-ebec3265-cc1f-41ee-906a-10e8c40aacf2.png` |
| 一次眼部校正后的最终图 | `/Users/liuzhihang/.codex/generated_images/01a10aa7-c743-7532-b2e5-782fb8383985/exec-108c01fd-ab1a-42b5-9a16-08993b4b4e62.png` |

### 底稿 generation prompt（原文）

```text
Use case: stylized-concept
Asset type: transparent standalone website character PNG, one Grok Bot family baseline mascot
Input images: Reference image 1 is a photographed Grok Bot sticker showing the purple round character with white capsule eyes; reference image 2 is a character lineup where the large purple circular Cora character defines the base silhouette and eye identity; reference image 3 shows the broader Grok Bot family shapes, but use only as secondary shape-language context. These are visual identity references, not images to copy.
Scene/backdrop: genuinely transparent alpha background, no ground or environment.
Subject: exactly one large purple near-spherical orb mascot, an independent 3D re-creation of the simple purple Cora-style circular character. Real geometric sphere silhouette with a very slight three-quarter turn so its volume reads while both eyes stay fully visible. Exactly two short white rounded capsule eyes on the front surface, placed in the upper-right area; both capsules lean in the same diagonal direction. Eyes are lightly embossed or softly raised and sit flush to the curved surface with restrained contact shading. Keep the simple asymmetry close to the large purple Cora and sticker references.
Style/medium: refined high-end 3D collectible toy render, polished studio visual direction, cohesive soft lighting, gentle dimension, clean rounded form, friendly understated presence. Independent interpretation, not an official source image.
Composition/framing: single centered full orb, square canvas, transparent breathing room of about 10% on every side, whole shape and eyes unobstructed, near-frontal slight three-quarter view, balanced and readable at thumbnail size.
Lighting/mood: broad soft key with subtle fill and delicate edge separation, shadows confined to the character, calm playful product-studio mood.
Color palette: saturated lavender-purple / violet orb, soft white eyes, restrained natural tonal variation across the sphere.
Materials/textures: smooth soft-matte molded rubber or satin vinyl, very subtle fine surface response, clean continuous curved surface. No fur, fuzz, fabric, grain, or mechanical seams.
Constraints: preserve the simple circular identity, true sphere shape, two white capsule eyes only, same diagonal eye direction, toward the upper-right of the face. Transparent alpha background. New independent 3D rendition; do not reproduce source photographs or exact source artwork.
Avoid: mouth, eyebrows, nose, limbs, hands, headphones, glasses, laptop, armor, robot panels, extra facial marks, border, sticker backing, stand, props, other characters, typography, letters, logo, watermark, poster, card, photo, room, opaque backdrop, external cast shadow, fuzzy plush, cube/bean/teardrop silhouette, flat vector, distorted sphere, uneven eye orientation, hidden eyes, excessive gloss.
```

### 眼部校正 prompt（原文）

```text
Edit the provided generated image with a single targeted refinement. Preserve the exact single purple spherical mascot, its purple color, framing, lighting, sphere geometry, and transparent background. Change only the two white capsule eyes: make both capsules slightly slimmer and more compact, with the same matching diagonal tilt and the same upper-right placement. Make them sit almost flush with the curved orb surface as subtle inset/inlaid marks with only a tiny soft micro-relief. Greatly reduce their current bulbous height, bright edge highlight, and dark contact shadow so they read as simple white capsule marks integrated into the orb. Keep both eyes complete and clearly legible. Maintain genuine transparency and the current generous square-canvas margin. Do not add any features, mouth, limbs, props, outlines, or background.
```

## 最终文件

- 项目文件：`dist/assets/characters/grok-bot-purple-orb-candidate-v2.png`
- 尺寸和格式：1254×1254，PNG，8-bit RGBA，non-interlaced
- Alpha：最小值 0、最大值 255；透明背景存在。alpha ≥ 16 的可见包围盒为 `[126, 126, 1127, 1124]`，接近每侧 10% 留白。
- SHA-256：`e4730f2957d64b8b2b7eb49c09a21f7a9c1ea352870bd2bf4c0649c7eeec0874`
- 接受状态：**待用户在真实网页中检查并确认**。ImageGen 生成、文件属性检查或构建通过都不等同于美术验收。
