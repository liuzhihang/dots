# 奶油黄贝雷帽 Dots · 生成记录

- 使用内置 image_gen，transparent_background=true。
- 输入1：`dist/assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png`，只取系列短绒、双黑眼及无肢体约束。
- 输入2：`planning/material-production-20261010/references/5-Photo-5.jpg`，黄色圆角三角轮廓及蓝色角色贝雷帽灵感；排除手脚、嘴、胡须、眼镜、文本与场景。
- 输出：`generated/dots-butter-beret-candidate-v1.png`。
- 工具原文件：`/Users/liuzhihang/.codex/generated_images/01a124f0-90bb-7361-a421-075ee9c26374/exec-f386cbf3-4fe0-45a5-af8d-3c26cb9dc5a9.png`。
- 视觉初审：完整黄色圆角三角、海军蓝帽、双黑椭圆眼；无嘴和肢体，区别于现有三个球形 Dots。初稿绒丝仍偏长，拟做一次定向短绒修订；原稿保留。没有可拆帽层，不适配球形编辑模板。
- 用户美术批准：pending；尚未接入目录。

## 短绒定向修订

编辑目标为上一张v1；选用 `generated/dots-butter-beret-candidate-v2.png` 作为美术审阅候选，主体短密绒明显改善，外缘仍需透明边缘检查，不能称已生产就绪。工具原文件：`/Users/liuzhihang/.codex/generated_images/01a124f0-90bb-7361-a421-075ee9c26374/exec-0f10c137-7784-42d1-84eb-9b98600c200d.png`。没有手工改像素或重采样；actual metadata见 `../generation-manifest.json`。

```text
Edit only the surface finish and alpha cleanup of the provided yellow triangular Dots character. Preserve the exact rounded-triangle silhouette, yellow color, navy tilted beret shape and contact, black oval eyes, pose, framing and transparent background. Replace the long individual visible fur strands with very short tightly packed micro-velvet pile: barely perceptible grain at silhouette, no shaggy fibers, no fluffy volume increase. Keep the soft 3D shading and separate felt beret material. Clean isolated low-opacity specks and colored residue outside the silhouette, especially below the bottom edge; outside the actual character must be alpha zero. No ground shadow, no halo, no new body parts. Do not add mouth, arms, hands, legs, feet, props, scene or text. Entire complete character remains centered with clear margin. Actual transparent PNG.
```

## 首次精确提示词

```text
Use case: stylized-concept.
Create a NEW independent Dots gallery character from the visual references, not an edit of the approved blue character and not a UI mockup.
Image 1 is a Dots family material/face reference only: two glossy black vertical oval eyes, a restrained short dense velvet-plush finish, no mouth, no limbs. Its round blue shape and headphones must not be copied.
Image 2 is a shape/accessory inspiration reference only: the yellow rounded triangle and the blue character's beret. Do not copy its text, logos, frog, scene, limbs, glasses, or moustache.
New subject: ONE warm butter-yellow rounded triangular Dots body, broad softly curved bottom, gently tapered rounded top, two small glossy black oval eyes centered in the upper-middle. Dark navy soft felt beret gently tilted and physically seated on the top, with a small fabric nub. No headphones, no glasses. Short dense micro-plush texture, smooth readable silhouette, NOT shaggy fur. Compact charming proportions, subtle studio dimensional lighting, no mouth/nose/ears/arms/hands/legs/feet/tail. No detached body parts.
Composition: complete isolated figure including full beret, centered in a square image with 10% clear margin on every side. Actual transparent background, clean alpha cutout. No ground plane, no cast floor shadow, no ambient neon halo, no pedestal, no checkerboard pixels, no text/watermark/logos, no other props or characters.
This is a complete static Artwork candidate. Keep it a polished 3D catalog collectible, not a flat symbol.
```
