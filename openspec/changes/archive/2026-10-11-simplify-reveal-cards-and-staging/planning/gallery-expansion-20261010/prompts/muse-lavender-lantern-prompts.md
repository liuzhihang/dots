# Muse lavender lantern — generation record

Independent static Artwork candidate only. This is not a Template, approved artwork, animation, or target package. Generated with the built-in image_gen tool with transparent background enabled. Prompt asked for 1024×1024; actual output is 1254×1254, so it was not resampled.

## References and roles

- Primary existing approved Muse identity/material reference: `/Users/liuzhihang/workspace/dots/dist/assets/characters/meta-muse-cream-hooded-candidate-v1.png`. It defines the continuous cream wrapped body, inset peach face, dark round eyes/small smile, short rounded limbs, and plush surface.
- Supporting actual Muse identity reference: `/Users/liuzhihang/workspace/dots/openspec/changes/simplify-reveal-cards-and-staging/planning/dark-gallery-20261010/source-package/references/C01-muse-identity.jpeg`. It confirms the compact wrapped outline and inset face.
- Photo 9 was not used; its Muse figure is not an identity reference for this candidate.

Output: `../generated/muse-lavender-lantern-candidate-v1.png`. Image_gen saved the original at `/Users/liuzhihang/.codex/generated_images/01a124f8-754b-7882-89ac-e15fcfddb48a/exec-bdb1f940-3036-4612-aefe-4ffd36eedd87.png`.

## Exact prompt

Use case: stylized-concept  
Asset type: one independent static Meta Muse character Artwork candidate, transparent 1024×1024 square PNG.  
Input images: Image 1 (meta-muse-cream-hooded-candidate-v1.png) is the primary approved identity reference: preserve the continuous hooded/wrapped cream mascot silhouette, inset warm-peach face, dark rounded eyes, gentle small smile, short rounded limbs and soft plush material. Image 2 (C01-muse-identity.jpeg) is the supporting actual Muse reference for its simple wrapped outline, inset face, compact body and short limbs. Do not use Photo 9 or turn the character into a long-eared fuzzy cloud.  
Primary request: create a new full-body static Muse variation with a pale lavender-cream wrapped body and both short rounded hands holding one small amber lantern.  
Subject and pose: one front-facing, standing Meta Muse with a continuous softly hooded wrapped body, compact rounded proportions, short rounded arms and two short rounded feet. Keep the face inset into the front opening, with a warm peach face, two dark round eyes and a small gentle smile. Bend both short arms forward naturally at chest height so both hands visibly hold the handle/top sides of one small lantern together; keep both arms and feet clearly countable and attached to the body.  
Color and material: body in pale lavender-cream (a light cream base with a restrained soft lavender tint, not saturated purple); warm peach inset face; dark brown eyes and smile. Keep the approved short plush/fine soft-fiber character material restrained and uniform, not long-haired, shaggy, or cloud-like.  
Lantern: one small, clearly recognizable warm amber lantern held between both hands at the center of the chest; compact simple dark amber frame and translucent amber panels, gentle warm interior color only, no rays or bloom. It must not cover the face.  
Composition: entire character and lantern fully visible, centered, front-facing, upright, balanced within a square transparent canvas with clear margins. The lantern is a held prop, not a platform or stage.  
Background: genuine transparent alpha; no floor, cast shadow, glow platform, room, scenery, UI, frame, checkerboard, white or black background.  
Constraints: exactly one character and one lantern. Preserve Meta Muse's wrapped silhouette and inset face identity. No ears, horns, tail, wings, extra people, extra hands, extra arms, extra feet, extra props, text, logo, watermark, labels or fake action. It is a still Artwork candidate only, not an approved item, animation, target package, or editable-template claim.

## Read-only QA and visual review

Pillow read-only inspection used the bundled Python at `/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3`. The PNG is 1254×1254 RGBA, alpha extrema 0–255; threshold-32 bbox `(307,121,951,1127)`, with 3,033 nonzero-alpha pixels outside that threshold box, maximum alpha 31. SHA-256: `ecf97bcb22678cd4461da27c0ec2a7a4721137081c1b42e25cef115666137574`.

Visual review: pale lavender-cream wrapped body, peach inset face, dark round eyes and small smile are present; short round arms and feet remain attached, and both arms meet one compact amber lantern at the chest. The pose and lantern read as a held still prop with no stage, floor, or shadow. The plush fiber edge is pronounced and has semi-transparent fringe; it is fuller than the requested restrained short fiber and needs human art review. No cleanup retry was used. No Python image editing, layer separation, template wiring, engineering validation, or art approval was performed.
