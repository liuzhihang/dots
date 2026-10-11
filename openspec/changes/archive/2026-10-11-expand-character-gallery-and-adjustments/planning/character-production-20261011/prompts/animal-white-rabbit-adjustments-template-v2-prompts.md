# White Rabbit adjustment Template v2: headphone candidate

This is a preview-only accessory branch for the existing `animal-white-rabbit-v98-candidate@v2` Artwork. It does not replace the earlier v1 Template or its eight-recipe report. The v2 Template retains those recipes, adds two one-field bridge recipes for the previously multi-field warm/closed/bib/bow combination, and adds one headphone recipe reachable from the default by changing only `accessories`.

## Exact identity reference and output

- Edit target: `openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/generated/animal-white-rabbit-v98-candidate-v2.png`
- Edit target SHA-256: `e98a689faeebafc98fce9ed52d0686982be80e5836b7ec154102e1fc5006c794`
- Artwork binding: `animal-white-rabbit-v98-candidate@v2`; no new Artwork identity is created.
- Built-in ImageGen raw output: `/Users/liuzhihang/.codex/generated_images/01a12762-8f4c-7403-9bd7-875a762a1a04/exec-540435df-f405-4099-9994-d3aabd51d38f.png`
- ImageGen output ID: `540435df-f405-4099-9994-d3aabd51d38f`
- Raw output SHA-256 and workspace candidate SHA-256: `09b1500f325eece01edddc77e68c1291ed002daa1079183ada0823d9919a8aae`
- Workspace candidate: `../generated/rabbit-adjustments-v3/accessory-lavender-headphones-full-v1.png`
- Final candidate is a full-character transparent branch, not an isolated overlay. It has not been cleaned, programmatically drawn, or published.

## Exact prompt

```text
Use case: precise-object-edit. Asset type: preview-only transparent accessory variant for an existing character artwork. Image 1 is the exact edit target and identity anchor. Add only one matched pair of soft lavender over-ear headphones naturally worn by the same seated white rabbit. Preserve the exact same rabbit identity, open brown eyes, pink nose, expression, fluffy white fur, pose, body/paws/tail, scale, placement, lighting, long upright ears, and pink inner ears. Fit both padded cups against the left and right sides of the round head at ear-base height, with a slim padded arc over the crown, behind the ear roots; the long ears remain complete, upright, unobscured, and emerge naturally in front of the band. Make the ear cups physically touch the fur with soft contact and no floating gap; keep the design compact and symmetric. No clothing, bow, other accessories, logos, cables, or changes to anatomy. Exact original 1133x1388 portrait canvas, full character and margins unchanged, no crop, zoom, shift, or recenter. Genuine transparent alpha everywhere outside the rabbit and headphones. No background, floor, shadow, scene, text, watermark, white matte, or checkerboard.
```

## Checks and review boundary

The raw PNG is 1133×1388 RGBA, alpha range 0–255, 820,902 fully transparent pixels, and 713,787 pixels with alpha ≥16 (visible bounding box `[197,45,1040,1360]`). Warm-light and dark composites are in `.artifacts/character-adjustments/animal-white-rabbit-adjustments-v2/headphones-{warm,dark}.jpg`. The full 11-recipe dark/warm contact sheet is `.artifacts/character-adjustments/animal-white-rabbit-adjustments-v2/all-recipes-dark-light.jpg`.

`node scripts/verify-adjustment-candidate.mjs openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/animal-white-rabbit-adjustments-review-v2.json` passed with 11 recipes and four viewport sizes. The headphone recipe is a cohesive full-character image; conflicts disable it with plumper appearance, warm-ivory coat, closed eyes, and the fitted bib. The visually accepted fitted bib and the rose bow remain independent layered choices. Engineering and internal visual review do not grant user art approval; this entire Template remains preview-only and pending.
