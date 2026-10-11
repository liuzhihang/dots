# candidate-animal-pig v1

## Generation record

- Tool: built-in `image_gen.imagegen`.
- Mode: generate, with transparent background enabled.
- Reference input: `R05-codex-clipboard-47a8a9f2-9d41-4643-8d49-ec7b27576845.jpg`; only its low-resolution pink pig-like animal in the Animals family preview informed the subject cue. It is not an exact official design or source artwork.
- Original tool output: `/Users/liuzhihang/.codex/generated_images/01a12762-1371-7f13-897b-00ee58c95ddb/exec-63bddc2e-c1b1-4b28-9773-0febbdd39990.png`.
- Workspace candidate: `../generated/candidate-animal-pig-candidate-v1.png`.
- Approval: pending; this generation record is not visual acceptance or approval.

## Exact prompt

```text
Use case: stylized-concept
Asset type: single full-body transparent gallery artwork candidate for Dot Icon Studio Animals.
Primary request: Create one original, clearly recognizable baby pig plush character inspired only by the small pink pig-like animal in the Animals family preview of the reference board. The source is a low-resolution website screenshot; treat it as a broad subject cue, not an exact official character design.
Input images: Image 1 (R05): reference only for the small pink animal's cute, compact presence in the animal family; do not reproduce the page, other characters, or any screenshot pixels.
Subject: One soft blush-pink piglet with a broad rounded head and compact plush body, clearly projecting pig ears, a centered rounded snout with two visible nostrils, small dark gentle eyes, short sturdy legs ending in small cloven hooves, and a tiny curled tail visible beside the body. Preserve clear pig anatomy so the subject does not read as a generic bear or dog.
Style/medium: polished soft 3D collectible plush animal, short velvety pile, tactile friendly finish and clean studio rendering.
Composition/framing: a single complete front-facing three-quarter seated piglet, centered with breathing room and every hoof and tail visible; no cropping.
Lighting/mood: soft even studio lighting with gentle volume and natural plush shading.
Color palette: warm blush pink body, slightly deeper rose snout/inner ears, dark eyes and subtle nostrils.
Materials/textures: coherent soft plush pile throughout, crisp isolated outer contour.
Scene/backdrop: true transparent alpha background, no floor, no pedestal, no environment.
Constraints: one pig only; keep species-defining snout, ears, hooves and curl-tail visible; no clothing, accessories, held props, text, logo, watermark, UI, frame, decorative particles, ground plane, or cast shadow. Do not reproduce the screenshot.
```

## Adjustment candidate source note

The original tool calls for the adjustment variants below are not present in the source prompt file or PNG metadata. Their output IDs, raw/clean paths and SHA-256 values are preserved in `templates/animal-pig-adjustments-review.json` and `briefs/animal-pig.yaml`. The text below is an intent summary only, not a reconstructed verbatim prompt. All candidates remain pending.

- Closed eyes full-body: output `exec-02800d82-1ffd-408a-974d-723325ce13d3`; clean SHA-256 `349d758b67c4e14b17c08ec2faeeea4dc9bfcd9a55dcc1fbd5c597e3d481e36f`; intent: replace open eyes directly with natural eyelids without eye rings.
- Open eyes + fitted vest full-body: output `exec-4497ea2b-551d-41fd-8df8-854a7b3d135b`; clean SHA-256 `cf6fe50535bdbc5ec4e09ef5ed95300331d12160a4286f8f70c0e8ece6c8b1179c6`; intent: garment wraps torso/shoulders/sides while forelegs remain in front.
- Closed eyes + fitted vest full-body: output `exec-a2c6ca56-f302-48cb-b862-05a1905b97d7`; clean SHA-256 `ac05f060c9b6124f723125d5caf5618d818dc357f200807309dd118798230c3b`; intent: same fitted vest and natural closed eyelids in one complete image.

The earlier isolated clothing/eye patches and the failed chest-sticker composition remain as source history; only the complete-body sources named in the current review manifest are active.
