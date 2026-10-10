# Animal Cocoa Bear Candidate v1 — prompt lineage

- **Series / candidate ID:** `animals` / `animal-cocoa-bear-candidate-v1`
- **Approval:** `pending`; this is a newly generated static Artwork candidate, not present in catalog, prompts, site assets, or approval records.
- **Final asset:** [`../generated/animal-cocoa-bear-candidate-v1.png`](../generated/animal-cocoa-bear-candidate-v1.png)
- **Generation mode:** built-in `image_gen` (not CLI); transparent output requested on generation and correction.
- **Tool outputs:** first generation `/Users/liuzhihang/.codex/generated_images/01a124f1-5751-78b2-ad4f-a30de1414cd8/exec-6b6c0116-0fe8-497c-aada-2a82210c4b8a.png`; final correction `/Users/liuzhihang/.codex/generated_images/01a124f1-5751-78b2-ad4f-a30de1414cd8/exec-b081255f-3855-44f0-ba05-926f0a6c286f.png`.

## Reference roles

- `../../material-production-20261010/references/27-Photo-27.jpg`: visually inspected for broad compact bear proportions and fur texture only. The reference's black bear, clothing, chain, text, other animals, background, and pose were not copied.
- Existing animal baselines visually inspected: `dist/assets/characters/animals-original-shiba-candidate-v1.png`, `dist/assets/looks/animal-white-cat.png`, and `dist/assets/looks/animal-gray-husky.png`. They establish broad collection rendering only; the new candidate is a bear, not a variation of any of those species.
- The local reference files were not attached as image inputs to the brand-new generation call; their role was stated textually in the prompt.

## Generation prompt (verbatim)

```text
Use case: stylized-concept
Asset type: standalone transparent animal character artwork for a bilingual character gallery
Primary request: Create one original small chocolate-brown bear for the Animals series, visually distinct from the existing Shiba Inu, cream-white cat, gray-white Husky, and pending white rabbit.
Scene/backdrop: genuinely transparent background only; no ground plane, ground shadow, platform, room, scenery, gradient, text, logo, UI, or watermark.
Subject: A single compact, cute young bear sitting upright in a relaxed natural pose. Give it a large rounded head, small circular rounded ears, a broad short bear muzzle in warm cream, a small dark-brown nose, gentle brown eyes, and a dense cocoa-brown coat. Show the whole seated body with both forepaws resting visibly in front and both hind paws visible beneath it; use broad rounded bear paws with subtle toes and no sharp claws. Keep bear anatomy unmistakable and compact, with no curled canine tail and no pointed dog ears.
Style/medium: polished soft 3D character illustration with the same broad high-quality rounded rendering and fine soft fur detail as the approved animal collection. Fur should be short and plush with restrained strand detail; preserve a clear value boundary between cocoa coat and cream muzzle. No clothing or human-like styling.
Composition/framing: exactly one bear, centered and front-facing, complete ears and all four paws inside the square canvas with comfortable transparent margins; no cropping.
Lighting/mood: soft even studio light, subtle natural form shading, crisp clean alpha edges; calm friendly expression.
Color palette: rich chocolate/cocoa brown fur, warm cream muzzle, dark-brown nose and eyes.
Constraints: original anonymous bear design. Use Photo 27 only as a broad reference for compact bear proportions and fur texture; do not copy the black bear's exact face, outfit, accessories, pose, or design. Match the existing collection's standalone character treatment without copying another species.
Avoid: clothes, jacket, necklace, chain, skull, accessories, text, sign, extra characters, dog-like pointed ears, long canine muzzle, curled tail, oversized claws, extra limbs, hidden paws, props, floor, ground shadow, base, scenery, screenshot UI, or any animation cues.
```

## Correction prompt (verbatim)

The first result nearly touched the canvas edges. This one allowed correction uniformly reduced and centered the complete character while preserving the bear design and transparent background.

```text
Use case: precise-object-edit
Asset type: transparent standalone animal character artwork
Primary request: Recompose the existing bear so the complete character has comfortable transparent margins on every side.
Input images: Image 1 is the edit target; preserve this exact bear design and identity.
Constraints: Keep the same cocoa-brown bear, rounded ears, cream muzzle, eyes, expression, fur texture, upright seated pose, all four visible paws, colors and lighting. Scale the entire character uniformly down to about 78% of its current size and center it on the same square canvas, leaving at least 8% clear transparent margin around the ears, body, and every paw. Preserve genuine alpha transparency around the character, with clean antialiased fur edges.
Avoid: cropping, touching any canvas edge, changing the pose or design, adding a tail, claws, clothing, jewelry, objects, scenery, floor, shadow, platform, text, logo, UI, or watermark.
```

## Result and review evidence

- Final PNG: `1254×1254`, 8-bit RGBA, 956,169 bytes; SHA-256 `3eb35d93bccd37542bbbca3aa0216b5102bf25183168aeca9392b959061d5f57`.
- Read-only alpha decode: 1,136,537 fully transparent pixels, 5 fully opaque pixels, 435,974 partial-alpha pixels. At alpha ≥16, visible bounds are `(x=264, y=243)–(x=1000, y=1056)`, with comfortable margins and all four paws in frame. Nine total alpha levels are present at the outermost image edges, all below 16; `sips` reports `hasAlpha: yes`; PNG signature is RGBA non-interlaced.
- Visual review: cocoa-brown short plush fur, rounded bear ears, cream muzzle, seated compact body and all four bear paws are clear. It has no clothes, jewelry, text, extra figures, scene, or dog-like tail/ears and is visually distinct from the approved Shiba, cat, and Husky.
- **Disposition:** engineering/file-format check only. Animal art acceptance remains pending; do not describe the candidate as approved or publish it.
