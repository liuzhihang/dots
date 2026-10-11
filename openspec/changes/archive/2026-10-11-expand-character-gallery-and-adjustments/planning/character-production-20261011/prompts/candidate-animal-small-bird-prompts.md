# candidate-animal-small-bird v1

## Generation record

- Tool: built-in `image_gen.imagegen`.
- Mode: generate, with transparent background enabled.
- Reference inputs: `R05-codex-clipboard-47a8a9f2-9d41-4643-8d49-ec7b27576845.jpg` is a low-resolution family preview, and `R10-codex-clipboard-f7a09778-0aab-4e9f-8b69-6310d4ca48e0.jpg` is a broad gallery style reference. Neither proves an exact bird species or official artwork.
- Original tool output: `/Users/liuzhihang/.codex/generated_images/01a12762-1371-7f13-897b-00ee58c95ddb/exec-46ca15ea-14dd-4980-8cb1-c65f2cc1d79e.png`.
- Workspace candidate: `../generated/candidate-animal-small-bird-candidate-v1.png`.
- Approval: pending; this generation record is not visual acceptance or approval.

## Exact prompt

```text
Use case: stylized-concept
Asset type: single full-body transparent gallery artwork candidate for Dot Icon Studio Animals.
Primary request: Create one original small plush songbird as a standalone gallery character. The provided animal boards contain only low-resolution small animal cues and do not verify a bird species; treat them as broad scale and friendly collectible style references, and make a new clearly identifiable bird rather than claiming an exact existing character.
Input images: Image 1 (R05): low-resolution Animals family preview for broad subject scale only. Image 2 (R10): gallery style reference only. Do not reproduce any screenshot pixels, UI, card, or neighboring character.
Subject: One tiny rounded garden songbird with a clearly visible short tapered amber beak, two small wings folded along its sides, a fan-shaped tail, bright alert eyes, and two slim little feet. Use a turquoise-blue back and wings with a warm butter-yellow belly so it is unmistakably distinct from a penguin; do not add a black-and-white mask or penguin body pattern.
Style/medium: polished soft 3D collectible plush animal, short velvety pile and friendly gallery-quality studio rendering.
Composition/framing: one complete bird standing in a calm front-facing three-quarter pose, centered with generous transparent margin; show the beak, both wings, tail, and feet without cropping.
Lighting/mood: gentle balanced studio light, soft form definition.
Color palette: turquoise blue, warm yellow belly, small amber beak and feet; simple harmonious tones.
Materials/textures: coherent plush pile with a clean, crisp isolated silhouette.
Scene/backdrop: true transparent alpha background; no perch, floor, pedestal, cage, branch, or environment.
Constraints: one small bird only; preserve a clear beak, paired wings, tail, and bird feet; no extra animals, clothing, accessories, props, text, logo, watermark, UI, frame, decorative particles, ground plane, or cast shadow. Do not trace the screenshot.
```

## Full-body bib variants (2026-10-11)

These separate candidate outputs are used for the clothing recipes. The earlier isolated bib overlay remains preserved but is not used for these recipes because the full-body version gives reliable shoulder and wing overlap.

### Open-eye bird with fitted bib

- Tool output: `exec-2c9d438a-a948-4deb-9feb-40c155ae3291.png`.
- Raw candidate: `../generated/candidate-animal-small-bird-clothing-butter-bib-fullbody-candidate-v1.png` (`97c6898d605e0c8a5fb85171e87d57d75f7509a0fdf3bf929727c2161126c849`).
- Alpha-clean candidate: `../generated/candidate-animal-small-bird-clothing-butter-bib-fullbody-candidate-v2-alpha-clean.png` (`667b31d7eacaec66c5decbe3c3e6780dbe6622249b7614aa07965f169399ea85`). Original raw output is preserved; only conservative isolated-alpha cleanup was applied to the candidate copy.
- Prompt:

```text
Edit the reference into a single full-body character variant. Preserve the exact same small plush bird identity, face, proportions, fluffy cyan-blue head/back/wings, butter-yellow belly, orange beak and feet, pose, camera, framing, scale, lighting and soft toy material. Add the reference's butter-yellow knitted bib as a genuinely worn garment: a rounded bib panel fitted smoothly across the front of the belly, with teal knitted binding and two short straps that visibly wrap over both shoulders and continue behind the wing roots. The bib must conform to the bird's round torso without floating, gaps, sharp cutout edges, or appearing as a flat chest sticker. Keep both wings in front of the bib edges with natural overlap so the wings remain fully readable; keep the tail and orange feet uncovered and visible. Maintain a cute clean 3D plush product render. Isolated character only, transparent background, no floor, no shadow plane, no props, no text, no border. Full character centered with safe transparent margins.
```

### Closed-eye bird with fitted bib

- Tool output: `exec-4f243237-c858-4901-b677-14f1f13edbdc.png`.
- Raw candidate: `../generated/candidate-animal-small-bird-face-closed-clothing-bib-fullbody-candidate-v1.png` (`4bfdd72ee158d2d0c5ef127a35afcc3f48ceb444437e2c247eea5cbadb5bc290`).
- Alpha-clean candidate: `../generated/candidate-animal-small-bird-face-closed-clothing-bib-fullbody-candidate-v2-alpha-clean.png` (`309bd7e88ec0fcc966697f5abd5d4b593fb3d023090188182fe33157d69faf72`). Original raw output is preserved; only conservative isolated-alpha cleanup was applied to the candidate copy.
- Prompt:

```text
Edit this exact full-body plush bird image, changing only the eyes to the reference bird's gentle closed-eye expression: two small dark brown embroidered upward-curved smiling eye arcs, positioned precisely where the two eyes are now. Remove both open glossy eyeballs completely. Preserve the exact character, beak, blush, pose, proportions, colors, feather texture, bib shape, teal shoulder straps and trim, wing-over-bib layering, lighting, framing and size. Keep the bib worn and wrapped over the shoulders exactly as shown, with wings clearly in front and feet uncovered. Isolated character on a transparent background; no props, no floor, no text.
```
