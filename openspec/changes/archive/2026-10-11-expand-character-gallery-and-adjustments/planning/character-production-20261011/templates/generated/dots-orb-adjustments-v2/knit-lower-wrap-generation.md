# Dots orb lower-body knit wrap candidate

- Status: pending candidate asset for `dots-orb-adjustments-v2-candidate@v2`; no artwork approval.
- Input: `dist/assets/templates/dots-orb-v1/body-neutral.png`, used only as a legless orb shape/fit reference.
- ImageGen output: `/Users/liuzhihang/.codex/generated_images/01a12762-51c3-7612-8626-27d06c834062/exec-0dac5e8f-afe0-497e-bc20-b0db0df55ea6.png`.
- Preserved source copy: `knit-lower-wrap-source-v1.png`, SHA-256 `ba221b0bd101ac75da9fdf3a11ffe29bb233b857f8a92938489da5d0bf20b4e1`.
- Alpha-cleaned review copy: `knit-lower-wrap-clean-v1.png`, SHA-256 `44aa599f295293a9a7d1e1358cb59af7f78c5612bb54cb12187cf7d95cecb1a2`.
- Cleanup: one connected component retained, 15,193 visible pixels removed, RGB and retained alpha unchanged; light/dark composite review required and completed for orb/cloud masks in `.artifacts/character-adjustments/dots-orb-knit-review.jpg`.
- Renderer placement: same 1254×1254 canvas at origin; each declared recipe clips the clothing layer with the exact selected orb/cloud silhouette mask. It is not an approval to reuse the garment with other templates.

Prompt:

```text
Use case: stylized-concept
Asset type: pending transparent clothing-layer PNG for a 3D plush Dots character template
Input images: Image 1 is a shape and fit reference only for the single round, legless plush body; do not include or repaint the body.
Primary request: Create only a fitted lower-body knit garment overlay for a round plush character with no neck, arms, or legs. The garment is a short sleeveless knit tunic/wrap that visibly covers the bottom third of the orb, wrapping broadly from the left side across the belly to the right side. Give it a gently curved upper edge, a rounded lower hem that follows the orb, deep rib-knit texture, soft padded fabric thickness and subtle seams so it reads unmistakably as clothing around a body, not a narrow scarf or mouth.
Composition/framing: Full square canvas matching the reference exactly, same centered scale and alignment. Garment occupies roughly x=180..1070 and y=760..1110; transparent everywhere else. Its top edge curves upward at the center and its lower edge curves downward at the center to follow a spherical body.
Style/medium: Soft polished 3D product illustration, ivory yarn with tactile vertical rib-knit texture, subtle warm shadows and stitched edges.
Constraints: Output the garment layer only on genuinely transparent background. Do not include any character body, face, eyes, glasses, accessories, neck hole, sleeves, hands, feet, text, scene, floor, shadow, border, white matte or watermark. No limbs. Keep the garment substantial and wide enough to visibly wrap the lower body; avoid any small horizontal band.
```
