# Ivory Bot v2 transparent replacement candidate

Status: review-only candidate; not integrated and not art-approved.

Original edit target: `dist/assets/companions/v98/robot-ivory-capsule-face-v98-studio-candidate.png`  
Source SHA-256: `9f4eb820cd9cb1d24deb64097279ff29693bc7c683fb3f775292983f7b1bc6c0`  
Original format/size: RGB PNG, 1215×1295; no alpha channel.

## Initial transparent extraction prompt

```text
Use case: background-extraction.
Asset type: review-only transparent PNG candidate for the Dots Studio character library.
Primary request: Make an identity-faithful transparent cutout from Image 1, the exact existing independent Ivory Bot artwork and sole subject reference.
Input image: Image 1 is the edit target; retain the robot, not its studio background.
Subject and invariants: one complete small original ivory-white capsule robot; preserve the smooth rounded shell, dark inset face with the same pair of white capsule eyes, rounded side ear housings, short rounded arms and legs, single amber chest light, raised arm pose, proportions, expression, perspective, shell shading, material, and overall soft polished 3D style. Keep the full silhouette, both feet, both arms, and head entirely in frame with a small transparent margin. It is an independent robot with a dark face display, not a Dots or Grok Bot character.
Change only the backdrop: remove the pale blue-gray studio background and make all outside pixels genuinely transparent. Preserve precise antialiased shell, ear-housing, arm, and foot edges without halo, color spill, missing joints, or detached background fragments. Do not cast a shadow outside the character.
Avoid: redesigning the robot, changing its face or limbs, adding or removing body parts, clothing, props, another character, floor, platform, scene, text, logo, watermark, white fill, or a drawn checkerboard.
```

Tool output: `/Users/liuzhihang/.codex/generated_images/01a12762-8f4c-7403-9bd7-875a762a1a04/exec-caaa3a9c-5c06-43eb-b725-9eb89cd639d1.png`  
SHA-256: `eaf462b91f33834df67b23e1687f0171b2e63b7254f74809d7b8dced41eb927c`

## Alpha cleanup prompt

```text
Use case: precise-object-edit.
Asset type: transparent cutout cleanup, review-only Dots Studio character candidate.
Image 1 is the exact edit target. Keep the central ivory robot itself unchanged: same single robot, smooth capsule shell, dark inset face and two white capsule eyes, rounded side ear housings, raised left arm, other arm, two short legs and feet, amber chest light, same pose, proportions, perspective, colors, shading, and polished 3D finish.
Change only the alpha matte outside that robot. Remove every detached background fleck, speck, fringe, or shadow so there is only the complete robot surrounded by fully transparent pixels. Preserve clean antialiased contact edges and only the natural attached edge detail of the robot. Keep the whole robot in frame. Do not erase parts of the robot.
No background or scene: actual transparent alpha, not black, white, gray, or checkerboard. No redesign, additional parts, props, text, logo, watermark, floor, or cast shadow.
```

Intermediate output: `/Users/liuzhihang/.codex/generated_images/01a12762-8f4c-7403-9bd7-875a762a1a04/exec-e8061070-05ae-4ae7-babf-1a938f120b70.png`  
SHA-256: `568c94353cd7879e8f100b2b4da48f3a0ef627987fab87c3f9c1c5a6e0a29347`

## Targeted edge cleanup prompt

```text
Use case: precise-object-edit.
Asset type: clean isolated transparent artwork, review candidate.
Edit Image 1. Keep exactly the central complete ivory robot: same large rounded shell and dark display with two vertical white capsule eyes, same side pods, both short arms and feet, raised left arm, amber chest light, pose, proportions, color, lighting, and polished smooth 3D material. Do not redesign it.
The current file has unwanted tiny detached specks around the robot. Remove all detached colored and white marks and every shadow/glow outside the robot. Because this robot has a smooth shell, it has no loose fur or hair; use a clean tight antialiased cutout around its actual silhouette, with only a very narrow edge transition. Every pixel outside the main robot silhouette must be fully transparent. Preserve the robot's parts and all contact joins.
Transparent alpha only: no black/white/gray backdrop, no scene, floor, platform, text, logo, watermark, checkerboard, or extra objects.
```

Selected output: `/Users/liuzhihang/.codex/generated_images/01a12762-8f4c-7403-9bd7-875a762a1a04/exec-327dbccb-35db-4a10-8781-babcb823c48c.png`  
Copied candidate: `../generated/robot-ivory-capsule-face-v98-candidate-v2.png`  
SHA-256: `0678c8f5747273c8cbc8ea7f993c02331eed41c6bc703f939344f91a59ae3b1c`  
Dimensions/format: 1215×1295 RGBA PNG. The four corners have alpha 0 and the body center has alpha 253. It was inspected over dark and warm-light review backgrounds; the complete robot silhouette, screen face, amber chest light, raised arm, and feet read clearly. Final art approval remains pending.
