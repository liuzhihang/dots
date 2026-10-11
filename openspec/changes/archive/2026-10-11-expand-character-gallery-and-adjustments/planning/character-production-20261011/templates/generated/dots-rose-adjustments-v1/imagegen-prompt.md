# Rose Dots body-only layer candidate

Status: pending review only; not user-approved.

Input Artwork: `dist/assets/looks/dots-rose-glasses.png` (dots-rose-glasses@v1; original SHA256 `a95261160aa0a6223bab0a3b38d080a4fa5b1b6315593bb6631d820732578d75`).

ImageGen request:

```text
Use case: precise-object-edit
Asset type: isolated transparent PNG body layer for a pending character-adjustment template review
Input images: Image 1 is the exact local source Artwork and the edit target
Primary request: Remove only the transparent rose-pink round glasses and the two black oval eyes from the single rose-pink plush orb. Reconstruct the covered areas with matching rose-pink short plush fibers, preserving the existing body silhouette, pose, scale, color, directional fur texture, edge detail, and full canvas alignment as closely as possible.
Subject: One round short-pile rose-pink Dots character body, without any face or accessory.
Style/medium: Match the source's soft 3D short-plush material.
Composition/framing: Keep the same centered full orb on the original square transparent canvas; do not crop or resize.
Constraints: Keep the surrounding fully transparent pixels transparent. This is a body-only layer: remove eyes and all glasses pieces completely; do not add any new features. Preserve the visible outer silhouette and edge softness. No limbs, mouth, nose, background, shadow plane, text, border, watermark, or extra objects. Preserve the character outside the eye-and-glasses region.
```

ImageGen output was preserved byte-for-byte at the local generated-image path noted in the review manifest provenance and copied to `rose-body-imagegen-raw-v1.png`. `rose-body-alpha-clean-v1.png` is a separate cleanup derivative. The cleanup report records the exact source/output hashes, retained alpha, dimensions, and removed visible pixels. Artwork, new body layer, and all compositions remain pending.

## Cloud appearance layer

Status: pending review only; not user-approved.

ImageGen used two local references: the blue three-lobed Dots body-only layer as exact silhouette/alignment reference, and the cleaned Rose Dots orb-only layer as plush-color/material reference. The exact prompt was:

```text
Precise asset edit for a pending character-template review. Image 1 is the exact full-canvas, transparent, three-lobed plush cloud body shape and alignment to preserve. Image 2 is the rose-pink short-plush material reference. Produce only one low, wide, three-lobed cloud-shaped Dots body in the exact Image 1 silhouette and exact 1254x1254 transparent canvas placement. Recolor it berry/rose pink to match Image 2, and render the same dense directional short-pile fur texture and soft 3D fiber detail seen in Image 2 across the entire cloud body. Keep Image 1's lobe positions and outer contour; do not make a round orb, do not add face, eyes, glasses, clothing, accessories, limbs, mouth, nose, shadows outside the silhouette, floor, backdrop, text, or other objects. Preserve transparent pixels outside the body, do not crop or resize, and keep all visible detail inside the exact original cloud silhouette. This is a body-only layer, not a character scene.
```

The generated output is preserved byte-for-byte at `/Users/liuzhihang/.codex/generated_images/01a12762-51c3-7612-8626-27d06c834062/exec-c0ff0dce-4f2e-4125-936a-18d8f87b4022.png`, copied to `cloud-body-imagegen-raw-v1.png`, and cleaned into `cloud-body-imagegen-clean-v1.png` as a separate derivative. The alpha cleanup report and exact hashes are recorded alongside the file. All assets and compositions remain pending.
