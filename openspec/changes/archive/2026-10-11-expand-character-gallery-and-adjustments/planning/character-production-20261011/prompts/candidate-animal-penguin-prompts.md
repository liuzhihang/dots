# candidate-animal-penguin v1

## Generation record

- Tool: built-in `image_gen.imagegen`.
- Mode: generate, with transparent background enabled.
- Reference inputs: `R05-codex-clipboard-47a8a9f2-9d41-4643-8d49-ec7b27576845.jpg` and `R11-codex-clipboard-834a25ef-3457-4d40-8b6e-3725b92efe03.jpg`; broad Animals family and gallery-plush cues only. The screenshots do not verify an exact penguin artwork.
- Original tool output: `/Users/liuzhihang/.codex/generated_images/01a12762-1371-7f13-897b-00ee58c95ddb/exec-dd11fc49-a627-4a9b-bfc3-bdde5f1c1cd8.png`.
- Workspace candidate: `../generated/candidate-animal-penguin-candidate-v1.png`.
- Approval: pending; this generation record is not visual acceptance or approval.

## Exact prompt

```text
Use case: stylized-concept
Asset type: single full-body transparent gallery artwork candidate for Dot Icon Studio Animals.
Primary request: Create one original plush penguin chick as a standalone gallery character. The supplied boards are low-resolution animal references and do not verify an exact penguin design; use only broad friendly collectible character style cues and create an original, clearly penguin-shaped subject.
Input images: Image 1 (R05): broad Animals family preview only. Image 2 (R11): broad plush-gallery rendering reference only. Do not reproduce any screenshot pixels, UI, card, or other character.
Subject: One upright, plump penguin chick with a smooth rounded teardrop body, dark charcoal head cap and back, a large warm-white face and belly patch, short flipper wings clearly attached along both sides, a small orange tapered beak, bright gentle eyes, and two short orange webbed feet. The species must read as penguin from the black-and-white body pattern, flippers, beak, and waddling stance; keep a clear silhouette that differs from a generic songbird.
Style/medium: polished soft 3D collectible plush animal, short velvety pile, friendly clean studio rendering.
Composition/framing: one complete upright front-facing character, centered with generous margin; show both flippers and both feet fully, with no cropping.
Lighting/mood: soft neutral studio lighting with gentle dimensional shading.
Color palette: charcoal black, warm white, and restrained orange beak and feet.
Materials/textures: cohesive plush pile with clean markings and isolated contour.
Scene/backdrop: true transparent alpha background; no snow, water, iceberg, floor, pedestal, or environment.
Constraints: exactly one penguin; no extra animal, costume, accessories, held prop, text, logo, watermark, UI, frame, decorative particles, ground plane, or cast shadow. Do not copy the screenshots or add bird wings/long tail from a songbird design.
```

## Full-body scarf variants (2026-10-11)

These separate candidate outputs are used for the scarf recipes. The earlier isolated scarf overlay remains preserved but is not used for these recipes because the full-body version gives reliable neck fit and flipper-over-scarf occlusion.

### Open-eye penguin with fitted scarf

- Tool output: `exec-25da703d-98e9-43fb-a93d-59a138356830.png`.
- Raw candidate: `../generated/candidate-animal-penguin-clothing-teal-scarf-fullbody-candidate-v1.png` (`030fa1112baa9eefa8d1090496cdec6037d160e44a2c640e05c3c6580712e324`).
- Alpha-clean candidate: `../generated/candidate-animal-penguin-clothing-teal-scarf-fullbody-candidate-v2-alpha-clean.png` (`350dbcad64a6113076cd0a8024d868e66cdd03da1f9100281eb934f9a04e9771`). Original raw output is preserved; only conservative isolated-alpha cleanup was applied to the candidate copy.
- Prompt:

```text
Edit the reference into a single full-body plush penguin clothing variant. Preserve the exact same penguin identity, round black-charcoal head and back, ivory face and belly, orange beak and feet, large glossy eyes with blush, front-facing pose, proportions, lighting, framing and soft fuzzy toy material. Add a muted teal knitted scarf as a genuinely worn garment: it wraps around the base of the neck and upper chest, follows the round torso, with a short natural scarf end draped down the center of the ivory belly. The scarf must feel seated against the neck/body, not floating or pasted as a flat chest sticker. Keep both dark flippers in front of the scarf edges with natural overlap and both orange feet unobstructed. Cute clean 3D plush product render. Isolated full character only, transparent background, no floor, no shadow plane, no props, no text, no border; centered with safe transparent margins.
```

### Closed-eye penguin with fitted scarf

- Tool output: `exec-e327639c-90da-4393-9a4a-bf17fa1f9461.png`.
- Raw candidate: `../generated/candidate-animal-penguin-face-closed-clothing-scarf-fullbody-candidate-v1.png` (`7491ff3a13ca084b11afd2b104e861f3f41d462e8c24fbc9f89ad000ebe0e4e0`).
- Alpha-clean candidate: `../generated/candidate-animal-penguin-face-closed-clothing-scarf-fullbody-candidate-v2-alpha-clean.png` (`d3b38c510a1b3423c3f6af9235ce59bdd1fc033b3b275980ea8fd785272051fe`). Original raw output is preserved; only conservative isolated-alpha cleanup was applied to the candidate copy.
- Prompt:

```text
Edit this exact plush penguin image, changing only the eyes to a gentle closed-eye smile: replace both glossy open eyeballs completely with two small dark brown embroidered upward-curved arcs placed symmetrically on the ivory face. Preserve the exact beak, blush, head/body shape, pose, scarf, scarf wrap, flippers, feet, materials, lighting, framing and size. Keep the flippers and feet fully visible and in front of the scarf's lower shoulder edges; the scarf remains naturally wrapped at the base of the neck with one short end down the upper belly. Transparent background, isolated full character, no props, floor, text, or border.
```
