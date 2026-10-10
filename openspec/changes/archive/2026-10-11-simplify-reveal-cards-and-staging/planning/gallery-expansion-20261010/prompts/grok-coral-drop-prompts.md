# Grok coral droplet — generation record

Independent static Artwork candidate only. This is not a new Template option, does not imply the Grok local-edit Template supports this shape, and is not approved for public use. Generated with the built-in image_gen tool and a true-transparent-background request. Prompt asked for 1024×1024; actual tool output is 1254×1254, so it was not resampled.

## References and roles

- Primary Grok identity/eye language and dimensional lighting: `/Users/liuzhihang/workspace/dots/dist/assets/characters/grok-bot-purple-orb-candidate-v2.png`.
- Soft geometric color/shape vocabulary: `references/2-Photo-2.jpg`; ignored its email text, page layout, and other figures.
- Droplet silhouette/paired capsule-eye discussion: `references/8-Photo-8.jpg`; ignored paper texture and unrelated shapes.
- Supporting Grok capsule-eye/coral-orange group reference: `references/14-Photo-14.jpg`; ignored text and group composition.

The selected result is `../generated/grok-coral-drop-candidate-v1.png`; its one targeted cleanup retry is selected because it has substantially fewer nonzero-alpha pixels outside the main silhouette threshold box. The first output is preserved as `../generated/grok-coral-drop-candidate-v1-initial.png`.

## Initial prompt

Use case: stylized-concept  
Asset type: one independent static Grok-inspired character Artwork candidate, transparent 1024×1024 square PNG.  
Input images: Image 1 (grok-bot-purple-orb-candidate-v2.png) is the identity reference for the two white capsule eyes, soft geometry, and restrained dimensional lighting; do not copy its round purple silhouette. Image 2 (2-Photo-2.jpg) supports bright, simple soft-geometric shapes and pill-eye proportions; ignore all text, layout, email UI, and other characters. Image 3 (8-Photo-8.jpg) supports the rounded droplet silhouette and paired capsule eyes; ignore paper texture and unrelated shapes. Image 4 (14-Photo-14.jpg) confirms Grok's simple capsule-eye identity and coral/orange color family; use only as supporting reference, not as a scene or group composition.  
Primary request: create one new, clearly distinct static Grok soft-geometric character: a coral-orange to coral-red rounded water-drop body with a pair of white capsule eyes.  
Subject: a single upright, softly tapered droplet form with a broad rounded crown, gently narrowing lower half, and a smoothly rounded tip; simple coherent volume, neither a circle nor a cloud nor a square nor a sharp triangle. Place two separate white pill-shaped capsule eyes on the upper front, evenly paired, softly embedded, matching the original Grok eye language. Keep the body alone with no limbs and no mouth.  
Style and materials: smooth soft-matte satin / soft polymer-like surface with subtle broad studio shading and restrained highlights; clean soft geometry, not fuzzy, not furry, not plush, not fabric, not metallic or robotic. Use a distinct warm coral-orange main color with coral-red shading or a gentle tonal transition; do not make it purple, green, or cyan.  
Composition: full character entirely visible, centered, front-facing, upright, about 72–78% of a square transparent canvas, generous clear alpha margin. Keep eyes and outer silhouette crisp and balanced at small gallery-card size.  
Background: true transparent alpha, no floor, no cast shadow, no glow, no base/platform, no room or environment, no checkerboard, no white or black backdrop.  
Constraints: exactly one character and exactly two white capsule eyes; no mouth, pupils, brows, hands, arms, feet, legs, ears, accessories, lantern, hat, glasses, headphones, props, logo, text, watermark, UI, extra characters, or fake action. This is an independent static Artwork candidate, not a Grok edit-template option, not an animation, and not an approved/public item.

## One targeted cleanup retry

Use case: precise-object-edit  
Asset type: transparent isolated static Grok Artwork candidate, exact 1024×1024 square PNG.  
Input images: Image 1 is the edit target and must be preserved. Image 2 is the identity reference for the original paired white capsule eyes. Images 3, 4, and 5 remain supporting shape/identity references only.  
Primary request: make one targeted cleanup to Image 1: eliminate isolated stray colored pixels and specks outside the continuous outer silhouette of the coral droplet character.  
Strict invariants: preserve the complete droplet silhouette, coral-orange/coral-red color, surface material, shading, scale, centered position, and the pair of white capsule eyes exactly. Do not redesign or alter the character. Do not introduce any other changes.  
Output: genuine transparent alpha; exactly one complete character and its antialiased outline are visible. Everything outside the character silhouette must be fully transparent. No backdrop, floor, cast shadow, glow, platform, text, logo or watermark. Still static Artwork candidate only, not an editable template, animation or approved item.

## QA, selection, and provenance

Both outputs are 1254×1254 RGBA with alpha extrema 0–255. Initial candidate: threshold-16 bbox `(174,124,1081,1134)`, 4,131 nonzero-alpha pixels outside that box, maximum outside alpha 9, SHA-256 `a334dcd3a88451d4088ebc470cffe91c76b34b8f46745a47d42cb5ba4fead1cb`; image_gen saved it as `/Users/liuzhihang/.codex/generated_images/01a124f8-754b-7882-89ac-e15fcfddb48a/exec-02220aad-2b05-4fd4-be28-164f22dca129.png`.  
Selected retry: threshold-16 bbox `(166,125,1088,1135)`, 666 nonzero-alpha pixels outside that box, maximum outside alpha 14, SHA-256 `443d0143546c74822387f898471030621c011d2b549bf48ee60857dd1e3d1af8`; image_gen saved it as `/Users/liuzhihang/.codex/generated_images/01a124f8-754b-7882-89ac-e15fcfddb48a/exec-b5a12365-9812-4c1b-b523-a0d3ef25339f.png`.

Visual review: the retry reads as one coral-to-red upright rounded droplet rather than the purple orb, green cloud, or cyan square; it keeps two white capsule eyes and no limbs or mouth. The form has a smooth, slightly glossy studio highlight and a rounded point, consistent with the requested soft geometry. Sparse low-alpha fringe pixels remain and need human cleanup before publication. No Python image editing, cleanup, template wiring, engineering validation, or art approval was performed.
