# White Rabbit v2 transparent replacement candidate

Status: review-only candidate; not integrated and not art-approved.

Original edit target: `dist/assets/companions/v98/animal-white-rabbit-v98-studio-candidate.png`  
Source SHA-256: `571920fb262079b49097b9f7f468264b65eacfc6dc6ffc0bfaffd451cc7c9963`  
Original format/size: RGB PNG, 1133×1388; no alpha channel.

## Initial transparent extraction prompt

```text
Use case: background-extraction.
Asset type: review-only transparent PNG candidate for the Dots Studio character library.
Primary request: Make an identity-faithful transparent cutout from Image 1, the exact existing White Rabbit artwork and sole subject reference.
Input image: Image 1 is the edit target; retain its rabbit, not its studio background.
Subject and invariants: one complete seated fluffy white rabbit; preserve the same two upright long ears with pink inner ears, brown eyes, small pink nose and muzzle, short white fur, round tail, seated pose, proportions, expression, angle, lighting on the fur, and overall soft 3D render style. Keep both ear tips, paws, and tail entirely inside the image with a small transparent margin.
Change only the backdrop: remove the pale blue-gray studio background and make all outside pixels genuinely transparent. Preserve the rabbit silhouette and fine fur edges with clean antialiasing, without colored fringe, pale halo, cut-off hairs, or a cast shadow outside the character.
Avoid: redesigning or changing the pose, face, proportions, color, fur, or lighting; adding clothes, props, another character, floor, platform, scene, text, logo, watermark, white fill, or a drawn checkerboard.
```

Tool output: `/Users/liuzhihang/.codex/generated_images/01a12762-8f4c-7403-9bd7-875a762a1a04/exec-1a516aad-a973-4cc1-aa98-dac645fbac25.png`  
SHA-256: `eb4c8624847285fa2931653bb304793ad88ba88318a75a0622af7e668b1cbf5e`

## Targeted cleanup prompt

```text
Use case: precise-object-edit.
Asset type: clean transparent cutout cleanup, review-only White Rabbit candidate.
Image 1 is the exact edit target. Keep the single seated White Rabbit unchanged: same white fluffy coat, two upright pink-lined ears, large brown eyes, small pink nose and muzzle, round tail, paws, proportions, pose, expression, soft 3D look, and lighting. Preserve connected fine fur detail at the silhouette.
The current cutout contains a few isolated light-colored specks outside the rabbit. Remove detached pixels and background flecks around the silhouette; retain only fur wisps that visibly connect to the rabbit. Do not leave white or gray islands, halos, edge glow, or cast shadow outside the character. The remainder of the canvas must be genuinely transparent.
Keep both ears, tail, and paws complete and in frame with a small transparent margin. Do not reshape or recolor the rabbit. No clothes, props, extra subject, floor, background, text, logo, watermark, white fill, or drawn checkerboard.
```

Selected output: `/Users/liuzhihang/.codex/generated_images/01a12762-8f4c-7403-9bd7-875a762a1a04/exec-b31180f8-b1aa-45bb-9bd0-b9ad2fc9f649.png`  
Copied candidate: `../generated/animal-white-rabbit-v98-candidate-v2.png`  
SHA-256: `e98a689faeebafc98fce9ed52d0686982be80e5836b7ec154102e1fc5006c794`  
Dimensions/format: 1133×1388 RGBA PNG. The four corners have alpha 0 and the subject center has alpha 253. It was inspected over dark and warm-light review backgrounds; rabbit identity and full seated silhouette read clearly. Final art approval remains pending.
