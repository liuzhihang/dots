# White Rabbit adjustment candidate v2

Status: candidate only. The Artwork and Template are pending engineering and human art review. These layers are not public gallery assets and have not received art approval.

The five editing categories are appearance, colors, face, clothing, and accessories. The template binds to `animal-white-rabbit-v98-candidate@v2` (`e98a689faeebafc98fce9ed52d0686982be80e5836b7ec154102e1fc5006c794`, 1133×1388 RGBA). Each visible layer below was generated with built-in image generation. The authorized alpha-edge cleanup is recorded beside each derived PNG in its `.alpha-cleanup.json`; it only removed detached visible components and preserved retained RGB, alpha, and canvas dimensions. The prompt's image references identify an isolated subject/layer; interface text, cards, backgrounds, and unrelated characters are not part of the artwork.

## Body and appearance

Base body source: `exec-1a380514-0141-4318-8895-3c27d959dfbe.png`, raw SHA-256 `1725fca8fee7b5d737a8f0e636fea66ae8da5c0c5de21904f68be34cd74f156d`; cleaned layer SHA-256 `a938dfa0e3cbefaec138099365f7ce82eb8c30ceda6f0d45e13ada78ce5cb05e`.

```text
Use case: precise-object-edit. Asset type: review-only transparent compositing layer for the existing White Rabbit Artwork. Image 1 is the exact identity, pose, lighting, scale, and canvas reference. Create one clean BODY-ONLY layer for this same seated white rabbit on the same full portrait canvas and in the same exact position and scale. Preserve the rabbit's two complete upright ears with pink inner ears, white fluffy fur, head and cheek/muzzle fur volumes, seated torso, both front paws, hind paws, and round tail exactly as in Image 1. Remove all facial ink/features (both eyes, brows, nose, mouth) so they can be supplied by a separate face layer. Remove any accessories and clothing. Preserve the body silhouette and natural short plush fur material; do not invent any new anatomy or alter the pose. The output contains only the rabbit's connected white fur body pixels and no face marks. Keep every non-rabbit pixel genuinely fully transparent, including corners and all space around the silhouette. No pale fringe, detached fur flecks, edge glow, floor, contact shadow, background, scenery, text, logo, watermark, white matte, or checkerboard. Match Image 1's portrait canvas exactly; do not crop, zoom, shift, or recenter. This is an isolated layer, not a new scene.
```

The first output had visible detached fringe. The targeted cleanup prompt below produced the retained version without changing the rabbit silhouette.

```text
Precise transparent-image edit. Image 1 is the exact edit target. Keep the entire white rabbit body silhouette pixel-positioned as shown: same two tall pink-lined ears, blank face-fur area, seated body, paws, and round tail. Change only the small detached white/gray specks and bright fringe floating outside the rabbit silhouette: remove every detached speck and halo so the surrounding region is fully transparent. Keep fine fur only when it visibly connects to the rabbit body. Do not alter the rabbit's shape, proportions, fur, lighting, or canvas framing. Output only the connected rabbit body cutout, with genuine alpha transparency and transparent corners. No shadow, background, text, or checkerboard.
```

Plumper appearance source: `exec-506229e2-4f0b-4134-a0ed-9bf3a75907ce.png`, raw SHA-256 `ebe582eab22ffc7865ad2ad4d1cd2449c5809d2ee90972927383b5fe15b85045`; cleaned layer SHA-256 `d3050b0434c3bed4a7df4da0b44dfd20ef6257306ae5ae715714cb870a9d7cc5`.

```text
Use case: precise-object-edit. Asset type: alternate appearance body layer for the same seated White Rabbit. Image 1 locks rabbit identity, ears, tail, paws and lighting; Image 2 is the exact blank-face body layer and canvas. Change ONLY the rabbit's silhouette into a visibly plumper, rounder seated body: broaden both cheek sides and the lower torso about 8 percent, with soft fuller curves. Keep the head top, both tall pink-lined ears, face-feature blank zone, nose/muzzle location area, paws, tail, seated pose, fur texture, and center alignment exactly as in Image 2. This must be a visibly wider body silhouette than Image 2, while still reading as the same individual rabbit. No change to ear shape/size or paw count. Remove all eyes, brows, nose, mouth, clothing, and accessories. Preserve the same full 1133x1388 portrait canvas and true transparent alpha. No detached fragments, fringe, shadow, floor, background, text, logo, watermark, or checkerboard. Do not crop, shift, zoom, or recenter.
```

The warm-ivory color options are separate image-generated body variants; this keeps the pink inner-ear regions independent instead of recoloring a broad bounding box or applying an unreviewed runtime mask.

```text
Precise transparent-image edit. Image 1 is the exact clean-face White Rabbit body-layer target and canvas. Change only the white outer fur coat to a soft warm-ivory cream color, preserving the source's fine plush texture, lighting, facial blank area, proportions, pose, and every contour. Keep both inner ears distinctly blush pink exactly as shown; do not tint the pink ear interiors. Preserve the clean blank face area (no eyes, brows, nose, mouth), two full ears, seated body, paws, and round tail. Keep the full 1133x1388 portrait canvas and exact alignment. Genuine transparent background; no detached pixels, fringe, floor, shadow, background, clothes, accessories, text, logo, watermark, or checkerboard. Do not crop, shift, resize, or recenter.
```

Warm seated layer: raw output `exec-618cbeb3-0e94-4f62-9555-912d9ddc13e9.png` (SHA-256 `abb7696aef8093319f2d9e98c08f5897bc3d6f40a1c153d959597cf7014b1b72`); cleaned layer SHA-256 `48da5e2508c53d40ac47b9509eb90d0ed604d996fb20607c67543ccbf6396993`.

```text
Precise transparent-image edit. Image 1 is the exact visibly plumper White Rabbit body-layer target. Change only the white outer fur coat to soft warm-ivory cream. Preserve this variant's broader rounded cheeks and torso, exact pose/proportions, ears, paws, tail, lighting, plush texture, and blank face area. Keep both inner ears distinctly blush pink; never recolor their pink interiors. No eyes, brows, nose, mouth, clothes, or accessories. Keep the same full 1133x1388 portrait canvas, position and scale. Genuine transparent alpha with no detached pixels, fringe, shadow, background, text, logo, watermark, or checkerboard. Do not crop, shift, zoom, resize, or recenter.
```

Warm plumper layer: raw output `exec-0a116fc3-244e-471e-b71b-dea57331db1e.png` (SHA-256 `046e580693356cb6fcd15ffd8900bef8409610501c72117c1ef05b1bf5e57a40`); cleaned layer SHA-256 `8a0967990bc4b74ad2e7485aaa2c452402a51523ef354c614902c8ad528d65b7`.

## Face

Open face raw output `exec-3cfda18a-93b8-4b42-b20e-3a7e7a5eaa64.png` (SHA-256 `ab01902cd1b8cb7dc3244037eed0b4d8a4cfcb266f64d683d9a28d416a8ff117`); cleaned layer SHA-256 `49f2894519dde1b3bc5211e69f6a0467feacb520e5bef094caf2f0f5a3f0a381`.

```text
Use case: precise-object-edit. Asset type: review-only transparent face-details layer for the same White Rabbit Artwork. Image 1 is the exact face identity, proportions, expression, position, lighting, and portrait-canvas reference. Create ONLY the rabbit's face details as a precisely aligned overlay: the same pair of large glossy warm-brown open eyes with white catchlights, subtle small brown brows, a small soft pink triangular nose, and the tiny centered mouth line. Include only the minimum natural white cheek/muzzle forms needed to render those facial details; no head, ears, body, fur silhouette, clothing, or accessory. Keep exact original face placement and scale. Match the source 1133x1388 portrait canvas and do not crop, zoom, shift, or recenter. Everything outside the small face detail area is fully transparent alpha, including all four corners. No eye shadow/halo, no stray pixels, no background, no floor, no text, logo, watermark, white matte, or checkerboard. One isolated face overlay only.
```

Closed face was edited from the aligned open overlay so both expressions share the same anchor. Raw output `exec-96ea2d5e-b982-4df6-bd6f-7296b7c9fd7f.png` (SHA-256 `84de680b19c8b0d49fa9f4dbb754fc366e7e9a047225c54202c5d21e20bc66bf`); cleaned layer SHA-256 `b4026d4a55d3fa618ab3644ae274115cd5fa4c36561120f9fb92f5592db74ade`.

```text
Precise transparent-image edit. Image 1 is the exact existing open-face overlay and canvas position. Change ONLY the pair of eyes from open glossy brown eyes to gently closed curved dark-brown eyelid arcs. Keep the original two brow marks, pink nose, white muzzle forms, tiny mouth, soft 3D material, overall scale, canvas, and every feature at its exact current pixel position. Do not shift, move, resize, center, rotate, crop, zoom, or recompose any part. Preserve the same full transparent 1133x1388 portrait canvas. Keep all surrounding pixels fully transparent and remove detached fringe specks without changing facial edges. The final is one isolated face overlay with the same bounds and anchor as Image 1.
```

An earlier closed-eye imagegen attempt placed its features off-anchor and is not registered or used. The retained closed layer is the position-preserving edit above.

## Clothing and accessory

Cowl raw output `exec-f94696b0-224f-4be9-8a1c-3f712610af06.png` (SHA-256 `486475f9cf127af6f35e5821a7aaee71ecd28d5c8571915fb16ec1c0e7ea82c0`); cleaned layer SHA-256 `18c316034c0d812c1a3cba51170155da9bad125d654996ddf25656558cbbe235`.

```text
Use case: precise-object-edit. Asset type: one review-only transparent clothing overlay for the exact seated White Rabbit Artwork. Image 1 is the precise body placement, proportions, and lighting reference. Create ONLY a small soft periwinkle-blue knitted neck cowl fitted around the rabbit's neck/upper chest, with a shallow ribbed collar and two short rounded scarf ends lying neatly on the front torso. It should look tailored to this compact seated rabbit, sit below the muzzle, stop above the front paws, and follow the torso contour without floating, clipping, or covering the face. Keep the fabric compact and tasteful, with fine knit texture and soft 3D shading. No visible arms, sleeves, straps, hands, feet, or added anatomy. Keep the same 1133x1388 portrait canvas and position exactly aligned to Image 1; do not crop, scale, or recenter the clothing. All pixels outside the small scarf garment are truly transparent. No rabbit body, face, ears, separate shadow, background, floor, text, logo, watermark, white matte, detached pixels, or checkerboard. Output one isolated fitted garment overlay only.
```

Bow raw output `exec-5f324571-c77b-450c-8741-48a69ae5bfda.png` (SHA-256 `21f28815b7dcd3a9c3bfd89ddd0e9c77bbb89f98ac2fcdf3de0039dd37213087`); cleaned layer SHA-256 `64fa2b7b94fbf2211c08eb9efb63240e65236681bda55ef5c1170ee51206e7f2`.

```text
Use case: precise-object-edit. Asset type: one review-only transparent accessory overlay for the exact seated White Rabbit Artwork. Image 1 is the exact head/ear placement, scale, and lighting reference. Create ONLY a small elegant dusty-rose fabric bow clipped at the base of the rabbit's viewer-left ear, just where the ear joins the head. The bow is compact, soft, and plush-compatible; it must not cover the pink inner ear, either eye, or the face. Keep its exact intended attachment position relative to Image 1 and match the same full 1133x1388 portrait canvas; do not crop, shift, zoom, or recenter. Everything except the single bow and its tiny integrated clip is genuinely transparent. No rabbit, no head, no ears, no extra flowers/jewels, no shadow, background, floor, text, logo, watermark, fringe, or checkerboard. One isolated accessory overlay only.
```

The template scales/places the isolated cowl and bow only via its fixed, manifest-owned transforms. It blocks the cowl with the plumper torso because this garment was authored for the original seated silhouette. The UI's dark review background is a viewing surface and is never baked into exported character pixels.

Two earlier subtle rounder-body variants were superseded by the visibly plumper appearance above. They remain as unregistered candidates with their own source hashes and cleanup records; they are not part of the review Template recipes.


## Clothing repair candidate (2026-10-11)

The previous `blue-knit-cowl` candidate is rejected for poor fit: it sat across the abdomen/front paws with a visible neck gap. Its original QA report and rejection record remain unchanged in `.artifacts/character-adjustments/animal-white-rabbit-adjustments-v1/`.

New candidate source: `generated/rabbit-adjustments-v2/clothing-lavender-fitted-bib-source-v1.png` (SHA-256 `e44c1f98409842b25c8fcc2b2046b01a3b31d0531c3ff9a552dc4cd91110d22c`). The source was generated against `generated/animal-white-rabbit-v98-candidate-v2.png` to produce one isolated, full-canvas transparent lavender-blue rib-knit chest bib, with the rabbit's head, pose, fur, paws, and background excluded. The prompt requested a compact garment for a rabbit with no visible narrow neck: the curved upper edge tucks beneath the lower muzzle/cheeks; the garment follows the upper chest; its rounded lower edge ends above the front paws; no loose scarf ends, belly drape, straps, sleeves, body parts, ground, backdrop, or text.

Only conservative alpha cleanup was applied to a separate candidate copy, retaining the largest visible component and its original RGB/alpha values. Clean candidate: `generated/rabbit-adjustments-v2/clothing-lavender-fitted-bib-v1.png` (SHA-256 `473beca1733bc88f3577cf8725982d560620c4e294001822f4a7b77432ae74e1`). Cleanup report: `generated/rabbit-adjustments-v2/clothing-lavender-fitted-bib-v1.alpha-cleanup.json`. Renderer placement is canvas offset `[400,660]`, scale `[0.4,0.4]`; the layer order is body → clothing-front → face so the face naturally overlaps the upper garment edge. A warm/dark composite and browser recipe verification are required before art approval. This is still preview-only and pending review.
