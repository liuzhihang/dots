# Grok orb visual candidates — generation record

These are image-generation references for later art and engineering review only. They are not separated production layers, an approved default reconstruction, or evidence that a public editable Template is complete. No file under `dist/` was changed.

## Reference mapping

- Primary geometry, centered placement, original purple lighting, and capsule-eye placement: `/Users/liuzhihang/workspace/dots/dist/assets/characters/grok-bot-purple-orb-candidate-v2.png`.
- Supporting Grok identity and soft-geometric body reference: `/tmp/codex-remote-attachments/01a124f0-90bb-7361-a421-075ee9c26374/A65E01F6-0EA5-4A56-A9AB-01A64B908517/14-Photo-14.jpg`.
- Supporting purple orb silhouette and paired capsule-eye reference: `/tmp/codex-remote-attachments/01a124f0-90bb-7361-a421-075ee9c26374/A65E01F6-0EA5-4A56-A9AB-01A64B908517/8-Photo-8.jpg`.
- The default-look edit target is the generated blank-body retry at `generated/grok-orb-v1/grok-orb-v1-base-retry-candidate.png`.

All calls used the built-in image_gen tool with transparent background enabled and the local image paths above as references. The prompts requested 1024×1024. The tool returned 1254×1254 images, matching the baseline image dimensions; files were kept at the returned size and were not resized.

## 1. Blank body — first candidate

Output: `generated/grok-orb-v1/grok-orb-v1-base-candidate.png`.

Use case: stylized-concept  
Asset type: isolated transparent character-base candidate for a bounded 2D template, square 1024×1024 PNG.  
Input images: Image 1 (grok-bot-purple-orb-candidate-v2.png) is the primary geometry, camera/view, lighting, color and canvas-placement reference. Image 2 (14-Photo-14.jpg) is a supporting Grok identity reference for a soft geometric body. Image 3 (8-Photo-8.jpg) is a supporting reference for the purple orb silhouette. Keep the same centered subject scale and pose as Image 1.  
Primary request: create one clean, complete, featureless purple soft-geometric orb body, with no face, no eyes, no mouth and no accessories, suitable as the base plate under later eye layers.  
Subject and composition: one solitary near-round, slightly organic soft-geometric ball; match Image 1's near-circular outer silhouette, slight asymmetry, three-quarter light direction, exact centered placement and large size on a square canvas. Show the whole silhouette with clear transparent margin. Keep the body occupying about 80% of the canvas.  
Style/material: smooth soft-matte satin material with gentle broad studio shading and the restrained lavender-to-violet tonal range of Image 1. Preserve the soft geometric, non-mechanical character quality in the supporting references. No fur, plush fibers, fabric, hard plastic seams or robot hardware.  
Background: true transparent alpha, not black, not white, not a checkerboard; no floor, no cast shadow, no glow platform, no room and no environment.  
Constraints: remove both existing eye capsules completely and naturally rebuild the purple surface beneath them; preserve the original body silhouette, perspective, lighting direction, scale and coordinates as closely as possible. No eyes, no face, no limbs, no hands, no feet, no ears, no hat, no glasses, no headphones, no props, no extra characters, no text, no logo, no watermark. This is only a visual reference candidate; do not imply it is a separated production layer or approved editable template.

## 2. Blank body — one targeted retry

Output retained for comparison: `generated/grok-orb-v1/grok-orb-v1-base-retry-candidate.png`. This retry has fewer low-alpha pixels outside the main silhouette threshold box than the first output, but still contains sparse edge specks; neither file is production-ready without art cleanup.

Use case: stylized-concept  
Asset type: isolated transparent character-base candidate, exact 1024×1024 square PNG.  
Input images: Image 1 (approved-view baseline grok-bot-purple-orb-candidate-v2.png) controls original silhouette, camera/view, lighting, purple palette and subject placement. Image 2 (first base candidate) is a visual guide for the desired clean featureless body only. Images 3 and 4 are supporting Grok soft-geometric identity references.  
Primary request: make one clean complete featureless purple soft-geometric orb body with no face and no accessories.  
Composition: output MUST be exactly 1024 pixels wide by 1024 pixels high, square. Match the baseline body's centered position, size, near-round slightly organic silhouette, perspective and broad three-quarter studio lighting as closely as possible. Preserve transparent margin around the subject.  
Material: smooth soft-matte satin violet surface, gentle lavender-to-violet shading; not fuzzy or plush and not mechanical.  
Transparency and edge quality: genuine transparent alpha. Only the single orb body may have any nonzero alpha. All pixels outside its antialiased silhouette must be fully transparent; no isolated colored specks, fringe, stray pixels, floor, shadow, glow, white/black backdrop or checkerboard.  
Constraints: no eyes, no face, no mouth, no limbs, no ears, no accessories or props. Keep the original Grok soft-geometric identity, not a robot. Do not change the body's lighting direction or add specular glow. This is only a visual reference candidate and does not imply separated layers or an approved editable template.

## 3. Default look — add the original eye pair

Output retained as the primary full-look visual candidate: `generated/grok-orb-v1/grok-orb-v1-default-look-candidate.png`.

Use case: stylized-concept  
Asset type: transparent default-look visual reference candidate for a bounded 2D character template, exact 1024×1024 square PNG.  
Input images: Image 1 (grok-orb-v1-base-retry-candidate.png) is the edit target and must remain the same body. Image 2 (grok-bot-purple-orb-candidate-v2.png) is the exact eye-pair placement, size, tilt and spacing reference. Images 3 and 4 are supporting references for the Grok paired capsule-eye identity.  
Primary request: add only the original pair of white tilted capsule eyes to the otherwise blank purple body in Image 1, creating a faithful default-look reference candidate.  
Subject: the same single purple soft-geometric orb from Image 1. Add two separate, smooth, white pill-shaped/capsule eyes with rounded ends, matching Image 2's pair: same relative placement on the upper-right area of the orb, same diagonal orientation, relative size, spacing and embedded perspective. The eyes are a pair of simple capsules, not pupils or a screen.  
Invariants: preserve Image 1's silhouette, body placement, scale, surface material, color, lighting, shading and transparent background exactly. Change only the eye area. Do not reshape, recolor, retouch or embellish the body.  
Background and edges: genuine transparent alpha, no checkerboard, no backdrop, no shadow or glow. Keep the body silhouette edge clean; no isolated specks.  
Constraints: only two white capsule eyes; no mouth, pupils, eyebrows, limbs, hands, feet, ears, cap, glasses, headphones or props. No text or watermark. Not a robot face or screen. This is a full-look visual reference candidate only; it is not a separate eye layer, proof of editable template support, engineering validation or art approval.

## 4. Default look — one targeted cleanup retry

Output retained as a failed retry: `generated/grok-orb-v1/grok-orb-v1-default-look-retry-candidate.png`. The retry introduced more low-alpha edge specks than the first default-look output; the first output is retained as the cleaner visual reference, and both remain unapproved.

Use case: precise-object-edit  
Asset type: transparent full-look Grok visual reference candidate, exact 1024×1024 square PNG.  
Input images: Image 1 is the edit target and must be preserved. Image 2 is the corresponding blank body reference. Image 3 is the original baseline for silhouette and eye placement.  
Primary request: perform a single cleanup only: remove all isolated stray pixels and specks outside the continuous soft edge of the orb from Image 1, making the background truly transparent.  
Strict invariants: do not alter the orb silhouette, body color, shading, surface, size, position, or the two tilted white capsule eyes. Keep both eyes identical in placement, size and angle. No redraw or enhancement.  
Output: PNG with genuine transparent alpha on a square 1024×1024 canvas. The single orb and its antialiased outline are the only pixels with nonzero alpha; all pixels outside that connected silhouette are fully transparent. No checkerboard, black backdrop, shadow, glow, floor, text or watermark. This is only a visual reference candidate, not a separate layer, approved art, or proof of an editable template.

## QA and limitations

Pillow read-only inspection used the bundled Python at `/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3`. All retained generated images are 1254×1254 RGBA with alpha extrema 0–255. The selected blank body has alpha bounds at threshold 16 of `(121, 123, 1133, 1127)`; the selected default look has `(121, 123, 1132, 1128)`. Both contain nonzero-alpha pixels outside those threshold-16 boxes (base: 6,547 pixels, maximum alpha 5; default: 6,414 pixels, maximum alpha 9), so those sparse fringe pixels need cleanup before any renderer or template use. The default-look retry has 11,884 such pixels, maximum alpha 11, and was rejected in favor of the first default candidate.  

The subject remains a centered purple soft orb with no limbs or fur. Compared with the baseline's threshold-16 bounds `(126, 126, 1128, 1125)`, the selected body is about 1% larger and a little more circular. The default eye pair visually follows the baseline's placement and tilt. This is a small geometry/material drift requiring human art review. No image was edited with Python; no layer separation, automated alpha cleanup, rendering integration, engineering validation, or art approval was performed.

### Output provenance

| Workspace file | Built-in image_gen saved file | SHA-256 | Selection |
|---|---|---|---|
| `generated/grok-orb-v1/grok-orb-v1-base-candidate.png` | `/Users/liuzhihang/.codex/generated_images/01a124f8-754b-7882-89ac-e15fcfddb48a/exec-8d766678-de4f-437f-ac95-2e0d375da595.png` | `2f67eeb54201c79c65b71267f9f2a66bc93b535a682b413edb86c48a697d1843` | First base; retained for comparison. |
| `generated/grok-orb-v1/grok-orb-v1-base-retry-candidate.png` | `/Users/liuzhihang/.codex/generated_images/01a124f8-754b-7882-89ac-e15fcfddb48a/exec-e6d257b6-fd1f-40f8-a1a3-d068695f183a.png` | `a6faa2a5280c3311aa0969ef3e63192650afb989646cc7ba0fa06493bd6a3d6f` | Blank base used as the default-look edit target; still requires edge cleanup. |
| `generated/grok-orb-v1/grok-orb-v1-default-look-candidate.png` | `/Users/liuzhihang/.codex/generated_images/01a124f8-754b-7882-89ac-e15fcfddb48a/exec-0c316bed-e9d6-459b-8040-1e768baa9d10.png` | `d1bdc68f847aecc453e73a513a6b92f3dd2a1472267b4e43a474d6a5cc5f510b` | Preferred full-look visual candidate; not approved. |
| `generated/grok-orb-v1/grok-orb-v1-default-look-retry-candidate.png` | `/Users/liuzhihang/.codex/generated_images/01a124f8-754b-7882-89ac-e15fcfddb48a/exec-170cb148-b445-4922-b7dd-cdc606283847.png` | `e6365ad7d7b553cada895d2b2169317d944a8835ea28e096425525ccc984d7d8` | Cleanup retry; more fringe artifacts, retained but not selected. |
