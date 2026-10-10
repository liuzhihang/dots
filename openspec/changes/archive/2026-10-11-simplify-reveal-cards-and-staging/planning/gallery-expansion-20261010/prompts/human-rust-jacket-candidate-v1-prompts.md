# Human Rust Jacket Candidate v1 — prompt lineage

- **Series / candidate ID:** `humans` / `human-rust-jacket-candidate-v1`
- **Approval:** `pending`; this is a newly generated static Artwork candidate, not present in catalog, prompts, site assets, or approval records.
- **Final asset:** [`../generated/human-rust-jacket-candidate-v1.png`](../generated/human-rust-jacket-candidate-v1.png)
- **Generation mode:** built-in `image_gen` (not CLI); `transparent_background: true` on the correction call.
- **Tool outputs:** first generation `/Users/liuzhihang/.codex/generated_images/01a124f1-5751-78b2-ad4f-a30de1414cd8/exec-a56d3c81-5886-476c-879b-991abe7a5281.png`; final correction `/Users/liuzhihang/.codex/generated_images/01a124f1-5751-78b2-ad4f-a30de1414cd8/exec-a3f6bc9a-5335-4545-812e-4fc929428f9a.png`.

## Reference roles

- `../../material-production-20261010/references/18-Photo-18.jpg` and `24-Photo-24.jpg`: visually inspected for broad chibi scale and rounded proportions only. Screenshot controls, subtitle text, scene, exact person, pose, face, and clothes were excluded.
- `dist/assets/characters/humans-chestnut-chibi-teal-knit-candidate-v1.png`: visually inspected only as the existing People-series rendering baseline. Its identity, chestnut hairstyle, teal sweater, shorts, and hand pose were not reused.
- The local reference files were not attached as image inputs to the brand-new generation call; their role was stated textually in the prompt.

## Generation prompt (verbatim)

```text
Use case: stylized-concept
Asset type: standalone transparent character artwork for a bilingual character gallery
Primary request: Create one original chibi person for Dot Icon Studio's People series, clearly distinct from the existing chestnut-haired teal-knit and yellow-hoodie / blond-cardigan characters.
Scene/backdrop: genuinely transparent background only; no floor, ground shadow, platform, room, scenery, gradient, text, logo, UI, or watermark.
Subject: A single full-body young adult chibi person with a cute oversized head and compact body, short dark-brown softly curled bob hair ending around the jaw, warm medium-brown skin, a short rust-colored fabric jacket over a simple muted cream shirt, straight beige trousers, and simple dark low shoes. Show both complete legs and both complete feet, with visible clean separation between clothing and skin. Give the character a gentle, relaxed, friendly expression and a natural neutral standing pose, arms resting comfortably at the sides.
Style/medium: polished high-quality soft 3D collectible-character illustration in the same broad cute, rounded finish as the approved People artwork; keep skin smooth matte, hair clearly sculpted as separate dark curls, and jacket/trousers visibly woven cloth with restrained seams, so skin, hair, and fabric remain distinct materials.
Composition/framing: one character only, centered, front-facing, fully inside the square canvas with generous transparent margin around hair, hands, and shoes; no cropping.
Lighting/mood: soft even studio lighting with subtle form shading; crisp silhouette and clean alpha edges.
Color palette: deep brown hair, warm medium-brown skin, muted rust jacket, cream shirt, beige trousers, understated dark shoes.
Constraints: original anonymous design; take only the general cute chibi proportion from the referenced approved artwork, not its face, hairstyle, clothing, or identity. Reference Photo 18 and Photo 24 only for broad chibi scale and rounded proportions; do not copy their exact people, outfit, pose, face, setting, or screenshot elements.
Avoid: school uniform, black uniform/cardigan, teal sweater, yellow hoodie, blond hair, glasses, props, jewelry, bag, hat, extra people, extra limbs, missing/hidden feet, cropped shoes, text, subtitles, logos, UI, floor, shadows, scenery, or a pose implying an unregistered animation.
```

## Correction prompt (verbatim)

The first result showed a checkerboard painted into an RGB image (`1254×1254`, `RGB`, no alpha). The single correction removed only that background; the character design was retained. The original generated file remains in the tool output folder and was not overwritten.

```text
Use case: background-extraction
Asset type: transparent standalone character artwork
Primary request: Remove only the visible gray-and-white checkerboard background from this existing image and return a genuinely transparent alpha background. Preserve the character exactly as shown.
Input images: Image 1 is the edit target; preserve this character's identity and all visible design details.
Subject: the same full-body chibi person with short softly curled dark-brown bob, warm medium-brown skin, rust-colored short jacket, cream shirt, beige trousers, and dark shoes.
Constraints: Keep the complete hair silhouette, face, skin tone, expression, proportions, jacket, shirt, trousers, both hands, both legs, both shoes, pose, lighting and colors unchanged. Retain clean semi-transparent antialiased edges around individual curls and clothing. Make every pixel outside the character genuinely transparent (alpha 0), with no checker pattern, white/gray fill, halo, floor, or shadow.
Avoid: redesigning, repainting or cropping any part of the character; adding details, objects, scenery, ground, text, UI, or watermark.
```

## Result and review evidence

- Final PNG: `1254×1254`, 8-bit RGBA, 944,230 bytes; SHA-256 `f53049ad40e0781453ba90c8bcc88b6b30c460fd2b27c9302463df4076208cf4`.
- Read-only alpha decode: 1,133,821 fully transparent pixels, 1,423 fully opaque pixels, 437,272 partial-alpha pixels. At alpha ≥16, visible bounds are `(x=305, y=20)–(x=907, y=1222)`; the complete hair, both hands, legs, and shoes fit inside the canvas. `sips` reports `hasAlpha: yes`; PNG signature is RGBA non-interlaced.
- Visual review: the candidate has the requested short dark curly bob, warm medium-brown skin, rust short jacket, cream shirt, beige trousers, and both complete feet. Skin, hair, and cloth read as separate materials. The image is close to the top and bottom edges; its visual margins are tighter than requested, although no character part is cropped.
- **Disposition:** engineering/file-format check only. Human art acceptance remains pending; do not describe the candidate as approved or publish it.
