# candidate-animal-panda v1

## Generation record

- Tool: built-in `image_gen.imagegen`.
- Mode: generate, with transparent background enabled.
- Reference inputs: `R10-codex-clipboard-f7a09778-0aab-4e9f-8b69-6310d4ca48e0.jpg` and `R11-codex-clipboard-834a25ef-3457-4d40-8b6e-3725b92efe03.jpg`; only the small panda character thumbnails and soft gallery-plush style informed the new design. The reference files are UI boards, not source artwork.
- Original tool output: `/Users/liuzhihang/.codex/generated_images/01a12762-1371-7f13-897b-00ee58c95ddb/exec-942df9e7-dc59-4c73-ab20-865218c0517d.png`.
- Workspace candidate: `../generated/candidate-animal-panda-candidate-v1.png`.
- Approval: pending; this generation record is not visual acceptance or approval.

## Exact prompt

```text
Use case: stylized-concept
Asset type: single full-body transparent gallery artwork candidate for Dot Icon Studio Animals.
Primary request: Create one original, unmistakably recognizable plush panda cub as an isolated character. The reference images are UI boards; use only the small panda thumbnails as broad animal identity and soft collectible-plush style cues. Do not reproduce any screenshot, card, interface, layout, or existing exact character.
Input images: Image 1 (R10) and Image 2 (R11): reference only for the tiny panda character silhouette and plush-rendering family style; UI screenshot pixels are not source artwork.
Subject: One compact baby panda with clear round black ears, distinct black eye patches around gentle dark eyes, a small panda muzzle and nose, black forearms and feet integrated into a soft white body. Give it a distinctive rounded head and short, naturally placed limbs so the species reads as panda at thumbnail size; do not make it a bear recolored black and white.
Style/medium: polished, soft 3D collectible plush character, short velvety pile, tactile but clean studio-quality shading consistent with a friendly character gallery.
Composition/framing: one complete front-facing character, centered, full silhouette with breathing room, no cropping; body and all four short limbs visible.
Lighting/mood: soft even studio light, gentle form definition.
Color palette: warm white and deep charcoal-black panda markings, restrained natural nose/eye details.
Materials/textures: uniformly soft plush pile with coherent seams-free shape, crisp isolated outline.
Scene/backdrop: true transparent alpha background, no floor, no pedestal, no environment.
Constraints: preserve panda species markings and body anatomy; one character only; no arms gesturing, held props, clothing, accessories, labels, text, logo, watermark, frame, UI, decorative particles, ground plane, or cast shadow. Do not copy the screenshot's pixels.
```

## Adjustment candidate prompts and source outputs

The following prompts were issued to the built-in `image_gen.imagegen` tool as separate transparent-background generation calls. Their outputs were copied unchanged into the matching `generated/*-candidate-v1.png` files, then an authorized isolated-alpha cleanup produced the `v2-alpha-clean` derivatives referenced by `panda-adjustments-review.json`. Every output and derivative remains pending.

### Appearance: tucked crouch

- Tool output: `/Users/liuzhihang/.codex/generated_images/01a12762-1371-7f13-897b-00ee58c95ddb/exec-55b7b9c7-9c70-4dbc-be04-a76b023ce31f.png`
- Workspace source: `../generated/candidate-animal-panda-appearance-crouch-candidate-v1.png`

```text
Create a pending concept asset for an adjustment review. Use the attached plush panda only as identity reference. Make a second genuine full-body appearance for the same panda: a gentle compact crouch, with body lower and slightly tucked, preserving round black ears, black eye patches, open friendly eyes, small muzzle, short black forearms and feet, warm ivory fur, soft plush material, and front-facing camera. Isolated on true transparent alpha; centered with margin, no floor, shadow, scene, clothing, accessory, props, text or UI. Preserve anatomy and clean silhouette. This is a separate full-body appearance artwork candidate, not a partial layer; do not overwrite the reference.
```

### Colors: cream and espresso

- Tool output: `/Users/liuzhihang/.codex/generated_images/01a12762-1371-7f13-897b-00ee58c95ddb/exec-1e1eb2cb-9154-451e-be16-3d365b693dda.png`
- Workspace source: `../generated/candidate-animal-panda-color-espresso-candidate-v1.png`

```text
Create a pending alternate-color concept artwork for the exact original plush panda shown in the reference. Keep the same front-facing seated pose, head/body proportions, black round ears, black eye patches, open eyes, nose, mouth, limbs, camera framing and clean silhouette. Change only the coat material palette: replace the warm ivory white fur with soft pale cream and change the charcoal-black panda markings to deep warm espresso brown; keep eyes and nose dark and preserve panda species markings. This is a complete isolated full-body panda PNG with true transparent alpha, no environment, floor, cast shadow, clothing, accessory, prop, text or UI. No surrounding pixels, no crop, no extra limbs. It is an alternate color candidate for a finite recipe, not a new identity. Do not overwrite the source.
```

### Face: closed-eye smile

- Tool output: `/Users/liuzhihang/.codex/generated_images/01a12762-1371-7f13-897b-00ee58c95ddb/exec-1919a744-bd75-4989-9d68-db64a5e24855.png`
- Workspace source: `../generated/candidate-animal-panda-face-closed-patches-candidate-v1.png`

```text
Create an isolated transparent PNG facial-adjustment overlay for the exact plush panda in the reference. Preserve a 1230×1278 canvas and the exact reference placement and scale. The base image already contains open panda eyes; this overlay must fully replace both existing eye patches at their exact positions so no open pupil remains visible underneath. Draw only the two dark charcoal plush panda eye-patch shapes, matching their existing silhouette, fur texture, size, angle, and centers, but with a calm closed-eye expression: a small warm-ivory curved eyelid line inside each dark patch. Include no white head fur, no muzzle, no nose, no mouth, no ears, no body, no glow, no cast shadow. Everything outside the two replacement patches is fully transparent. No crop, no recentering, no white/black matte, no checkerboard, no background. This is a separate pending face layer that will be composited over the unchanged reference panda; make its edges fit the existing eye-patch boundaries.
```

### Clothing: forest knit vest

- Tool output: `/Users/liuzhihang/.codex/generated_images/01a12762-1371-7f13-897b-00ee58c95ddb/exec-074e83d2-776b-49c7-886d-d81f5bb7dbad.png`
- Workspace source: `../generated/candidate-animal-panda-clothing-knit-vest-candidate-v1.png`

```text
Create one pending transparent accessory-clothing layer for the exact plush panda reference, preserving a 1230×1278 canvas and exact source alignment. Output ONLY a tiny sleeveless knitted vest front panel fitted over the panda's narrow ivory chest at roughly x=475–760, y=805–1060 in the provided image. It should be a soft forest-green vest with subtle cream piping and two small wooden buttons, rounded lower hem, a shallow open neckline. It is a garment, not a body or person. Keep the sides narrow so it does not cover the panda's black forearms or feet, and do not cover the face, eye patches or muzzle. No arms, hands, body, fur silhouette, hanger, mannequin, shadow, glow, text, background or other objects. Everything except the vest pixels must be true transparent alpha. Match the reference plush lighting and soft textile material; clean cutout edges. Preserve the original canvas, do not crop or recenter. Candidate overlay only; do not overwrite the reference.
```

### Accessory: sage leaf clip

- Tool output: `/Users/liuzhihang/.codex/generated_images/01a12762-1371-7f13-897b-00ee58c95ddb/exec-5aa0ec9f-fe68-4bf7-bf2b-17fe3f517295.png`
- Workspace source: `../generated/candidate-animal-panda-accessory-leaf-clip-candidate-v1.png`

```text
Create a small isolated accessory layer for a cute plush panda character as a transparent portrait PNG canvas 1230×1278. Draw ONLY a neat two-leaf green hair clip: two soft sage-green felt leaves with subtle central veins attached to a tiny dark-gold clasp, polished plush/felt finish, simple and child-friendly. Put the small clip near canvas coordinates x=320, y=225, about 135×105 pixels, as if it will attach to the outer upper edge of the panda's left black ear. True transparent alpha everywhere else. No panda, no ear, no character, no body, no head, no hair, no other accessory, no shadow, no background, no scene, no text, no glow. This is a separate accessory layer, not a full illustration. Keep the accessory compact and balanced, with a crisp natural silhouette.
```

## Full-body fitted-vest revisions (pending)

The first isolated vest overlay was an explicit fit failure: at review size it read as a small chest sticker and did not wrap the shoulders. Its source files remain as historical evidence, but it has been removed from the active Template registry and recipes. The following two complete-body variants replace that overlay in the candidate template. Both original outputs and authorized alpha-clean derivatives are preserved separately; neither is approved artwork.

### Open eyes + fitted vest

- Tool output: `/Users/liuzhihang/.codex/generated_images/01a12762-1371-7f13-897b-00ee58c95ddb/exec-e6454a44-30a8-459f-b0c8-3fac6b0f296a.png`
- Raw candidate: `../generated/candidate-animal-panda-clothing-knit-vest-fullbody-candidate-v1.png`
- Alpha-clean candidate: `../generated/candidate-animal-panda-clothing-knit-vest-fullbody-candidate-v2-alpha-clean.png`
- Alpha-clean SHA-256: `98e83747f8fe97ab6e8abde9982148ca74227623a41796c817ba3b5d6f897178`
- Prompt:

```text
Edit the supplied exact plush panda character into a complete full-body clothing variant. Preserve the same panda identity, seated pose, round head and black circular ears, exact pair of black eye patches with the original large open glossy eyes, ivory fur, muzzle, nose, smile, plush texture, proportions and framing. Add a fitted forest-green knitted vest as if genuinely worn by this panda: the garment must wrap from the front chest around both shoulders and visible sides of the torso, with believable shoulder openings and side edges following the body contour, and continue down the belly. It must read as a fitted garment, not a small bib or sticker placed on the chest. Keep both black furry forearms and paws clearly in front of the vest, with natural overlaps; do not erase, recolor, or add limbs. A little ivory piping and two small wooden buttons are okay, but fit and anatomy matter more. One isolated character only, centered, same 1230 by 1278 framing, fully transparent background outside the panda. No cast shadow, floor, scene, text, props, extra paws, extra arms, detached garment, or background.
```

### Closed-eye smile + fitted vest

- Tool output: `/Users/liuzhihang/.codex/generated_images/01a12762-1371-7f13-897b-00ee58c95ddb/exec-a451bff7-66cb-4445-83b1-fa4d0a83b985.png`
- Raw candidate: `../generated/candidate-animal-panda-face-closed-clothing-vest-fullbody-candidate-v1.png`
- Alpha-clean candidate: `../generated/candidate-animal-panda-face-closed-clothing-vest-fullbody-candidate-v2-alpha-clean.png`
- Alpha-clean SHA-256: `9d0cf0a5206fafee08e61bd34ed1f901ec058ec36dac9a0cede878399c8ce826`
- Prompt:

```text
Edit this exact same full-body plush panda and fitted green knitted vest. Preserve absolutely the panda's identity, seated pose, head and ear shapes, ivory fur, charcoal panda markings, plush texture, vest including its wrapped shoulder/side fit, black furry forearms and paws visibly layered in front of the vest, belly, feet, framing and transparent background. Change only the eyes: replace both open glossy eyes inside the existing charcoal eye patches directly with two small matching warm-ivory curved closed eyelid arcs embroidered into the black plush, naturally following the eye-patch surface. Fully remove the original glossy eyeballs; do not add pale raised pads, circles, black rings or duplicate eyes. Keep the nose, muzzle and smile exactly. The two black arms remain in front of the vest. One isolated character only, no background, floor, shadow, text, props, new limbs, detached clothing or compositional changes.
```
