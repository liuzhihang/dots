# Butter Beret Dots adjustment-layer provenance

This record documents a pending four-field Template for the existing `dots-butter-beret@v2` Artwork. The Artwork master remains byte-for-byte unchanged at `dist/assets/companions/v99/dots-butter-beret-candidate-v2.png` (`284093696b5e244a8ebd6f5ef433c50059b81bdaf7709ba1d60bd68321ccae00`). New layers remain preview-only and pending user art approval.

The exact prose submitted for earlier ImageGen layer requests was not retained in the repository. The descriptions below are intent summaries, not verbatim prompts. The original ImageGen output files are retained under `/Users/liuzhihang/.codex/generated_images/01a12762-51c3-7612-8626-27d06c834062/`; no source output was overwritten. Only the separately named cleanup copies received authorized alpha-edge cleanup. RGB content and source files remain unchanged.

| Layer | ImageGen output ID | Request intent summary (not verbatim) | Clean layer SHA-256 |
|---|---|---|---|
| Yellow rounded-triangle body | `exec-38e74e23-c916-4b7b-8092-495e92c607ad` | Isolated warm-yellow short-plush rounded-triangle body, no face/accessories/background | `butter-body-imagegen-clean-v1.png` · `c65280baca78d417709a0fc912c02302d7e38c8a466739747989990b5b5c3360` |
| Blue rounded-triangle body | `exec-141af9d5-7017-4875-a165-3d2a5c55f9dd` | Blue color branch preserving the rounded-triangle silhouette and position | `butter-body-blue-alpha-clean-v1.png` · `9a1ad5ea7448e9541b504e80deb3208cfadadb8c054f96f4f0da3fbce444323f` |
| Yellow cloud body | `exec-3b1b11fe-518b-4538-828d-59479b0cb88d` | Isolated low three-lobed warm-yellow short-plush cloud body | `butter-cloud-body-alpha-clean-v1.png` · `bea674e519e3a2b0509bcf7a4174de755bd2d9a5ef0cbd9a244e723fd234fec5` |
| Blue cloud body | `exec-c80fc6f0-ee94-4c02-9979-9003016fe459` | Blue color branch preserving the yellow cloud silhouette and placement | `butter-cloud-blue-alpha-clean-v1.png` · `d452f7f6dcce582204946a6e40d80f54124730031700437cc9ca2091ce1c0c9f` |
| Open eyes | `exec-d39af33b-c254-4e47-81ba-c647c723974d` | Two glossy black vertical oval eyes aligned to the original face | `butter-open-eyes-alpha-clean-v1.png` · `fda4077e350d0956a6eaf7fe14211c8d80c44c84439e0e8b1135e9e5081087bb` |
| Closed eyes | `exec-b1a79ef9-1a0b-4871-b13a-4117a76aebd1` | Two small black closed-eye arcs, no mouth or additional facial marks | `butter-closed-eyes-alpha-clean-v1.png` · `953b11313fd80f9033d967118a907092435244c2d762508ad52cc0e84b5973ac` |
| Navy beret | `exec-069e2bb1-df8c-4fab-ae1d-527bb0863b0b` | Isolated tilted navy felt beret with small fabric nub, no body/background | `beret-imagegen-clean-v1.png` · `50d1926f81b46fa7395053d4730d7dc2435bba4f95b11c2ff8ba1caf4dc22a33` |

The manifest registers the original Artwork master as the exact default layer. For generated triangle recipes, the beret uses a scene-placement alias (`scale: [0.65, 0.65]`, `offset: [150, -5]`) around its top-left canvas pivot. This changes only manifest placement; the stored beret PNG is not resampled or rewritten. Cloud-plus-beret is explicitly disallowed because the beret fit is limited to the rounded triangle.

The static character and all rendered variants preserve transparent alpha. Dark and light composite contact sheets and per-recipe PNG evidence are temporary QA outputs in `.artifacts/character-adjustments/dots-butter-beret-adjustments-v1-four-tabs-candidate/`; their background colors are review backdrops only and are not part of any PNG.
