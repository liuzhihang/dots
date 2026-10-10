# Dots 原始生成提示词

工具：内置 image_gen；参考图为输入，不是生产图层。所有结果均为待确认候选。

## body-base-candidate-v1

Use case: precise-object-edit.
Asset type: separate transparent body-base raster for a controlled Dots character template, NOT a finished illustration or sprite sheet.
Input 1 is the approved identity and geometry reference to edit: a single blue plush rounded orb wearing lavender/black headphones with two black oval eyes. Input 2 is supporting material reference ONLY: short compact velvet-like blue plush; ignore all other characters, hats, arms, typography and background in that reference.
Create one clean 1024x1024 RGBA PNG with true transparent background. Remove the headphones AND both eyes completely from input 1 and reconstruct the complete hidden head/body surface under them. The output is ONLY the blue body, with no face at all. Keep the original gently irregular round silhouette, frontal orientation, blue color family, soft upper-left studio lighting and volume. Keep the blue body the same relative scale and center as input 1, with safe transparent margin on all sides. Make the pile short and dense, neatly groomed, not long shaggy fibers, without turning it into smooth rubber.
No eyes, eye sockets, mouth, nose, cheek blush, ears, arms, hands, legs, feet, tail, accessories, headphones, logos, text, floor, pedestal, cast shadow below body, glow, room or scene. No checkerboard pixels; transparent alpha outside the subject. Do not include variants or a board. This is one isolated complete body base.

输入1：dist/assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png；输入2：用户 Photo 12（仅短绒质感参考）。

初次视觉检查：无脸、无配饰、无肢体与完整轮廓已出现；毛丝仍偏长且强高光，继续做短密绒定向修订。原结果保留，不标为美术通过。

## body-base-candidate-v2

Use case: precise-object-edit. Asset type: transparent Dots template body base.
Edit input 1 only. Keep its exact frontal rounded body shape, placement, scale, blue color family, soft volume and transparent canvas. Make ONE targeted material correction: replace the conspicuous long individual blue hairs with very short dense plush / brushed micro-velour. The surface should look soft and compact like the blue character in supporting input 2, with a clean tiny-fuzz silhouette, NOT shaggy fur or spiky white strands. Do not copy the supporting character's limbs, smile, headphones, or elongated body.
The body is faceless: NO eyes, mouth, nose, limbs, ears, headphones or other accessories. Keep it a single rounded blue body centered and complete. Preserve transparency; the exterior beyond the tight contour must be fully clear with no scattered bright/blue speckles, white fringe, shadow, text, background, floor, halo, or pedestal. Retain fine natural edge antialiasing. One PNG asset, not a sheet.

输入1：body-base-candidate-v1.png；输入2：用户 Photo 6，只参考蓝色角色的短绒质感，不取长形体、笑脸、肢体或场景。

## default-look-candidate-v1

Use case: precise-object-edit. Asset type: transparent Dots default appearance CANDIDATE for art review, not a fake layered export.
Input 1 is the new faceless short dense blue plush body base: preserve its complete rounded silhouette, center, scale, frontal view, compact pile, color and studio lighting exactly. Input 2 is the approved source identity showing where the eyes and headphones belong.
Add ONLY the original pair of glossy black vertical oval eyes and lavender/black over-ear headphones from input 2 to the body in input 1. The two eyes should sit at the same normalized face positions and have the same soft small highlights. Headphones must wrap naturally over the top and sides, with a dark curved band and lavender cushions/panels; all headphone parts remain fully visible within the square canvas. Keep the body unmodified beyond real accessory occlusion.
One isolated transparent RGBA PNG. No smile, mouth, nose, eyebrows, ears, arms, hands, feet, legs, tail, symbols, text, pedestal, ground shadow, glow, background or UI. Do not add a beret, laptop, companion or any extra accessory. Preserve alpha with clean edges. This is the single Dots default-look subject, not a grid, layer sheet, or comparison.

输入1：body-base-candidate-v2.png；输入2：批准的蓝色耳机Dots原图。目标是固定主体只加五官与耳机；输出为完整外观候选，不是确定性图层合成。实际毛丝变长，继续一次定向材质修订。

## default-look-candidate-v2

Use case: precise-object-edit.
Make one targeted correction to input 1, the blue Dots character with two glossy black oval eyes and lavender/black headphones: change ONLY the blue body material to SHORT, DENSE, COMPACT micro-plush as in the faceless base in input 2. Remove the long wiry white-tipped hairs and shaggy tufts; make the body look like fine short velvet/fleece with only a very small soft fuzzy edge, while still visibly plush. Do not change the headphones, eyes, their positions, rounded body contour, facial proportions, canvas framing, lighting or blue color family.
Output one isolated transparent RGBA PNG preserving true transparency. No extra features, limbs, smile, ears, props, background, floor, drop shadow, glow, text, or pedestal. Fully clear exterior, no detached colored flecks. This is a refined material candidate of the same single character, not a new design.

输入1：default-look-candidate-v1.png；输入2：body-base-candidate-v2.png。视觉回读：蓝色主体长毛丝显著减少，保留原黑眼和紫黑耳机、无肢体，无背景/底座。仍是生成外观候选，不保证与基底逐像素一致，不是已批准模板。

## 原始工具文件

- body-base-candidate-v1.png：/Users/liuzhihang/.codex/generated_images/01a124f0-90bb-7361-a421-075ee9c26374/exec-c1b3a1a2-1315-4ff2-8c19-22744599b2c7.png
- body-base-candidate-v2.png：/Users/liuzhihang/.codex/generated_images/01a124f0-90bb-7361-a421-075ee9c26374/exec-2fa885fd-d56c-4f37-88ec-9ebcdf5135ed.png
- default-look-candidate-v1.png：/Users/liuzhihang/.codex/generated_images/01a124f0-90bb-7361-a421-075ee9c26374/exec-1a72c720-b30d-42a2-91b4-e82612334456.png
- default-look-candidate-v2.png：/Users/liuzhihang/.codex/generated_images/01a124f0-90bb-7361-a421-075ee9c26374/exec-5119f343-2884-4ae9-ba84-35b5b9034284.png

提示词期望1024，但工具实际返回1254×1254；保留原字节，不伪报尺寸或重采样。尺寸/alpha/hash检查见generation-manifest.json，不能以存在alpha替代边缘或美术验收。
