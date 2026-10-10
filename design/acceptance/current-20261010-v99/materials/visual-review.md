# Template composition visual review — 2026-10-10

**Result:** targeted renderer placement checks pass for the named compositions below. This is not user art approval, public editability, or completion of the post-registration 12/16-image editing suite. Both registered source manifests are frozen at SHA-256 `83df339fb0f0d932171b46c065e8f8941a1599c6d2d3416f49d23456acfac70f`; all template assets remain `pending` and `publicEditable:false`.

## Grok candidate compositions

Evidence: [six-composition experiment](../editor/placement-experiment-final-candidates/experiment.json) and its paired dark/light renderer outputs. The experiment predates the final manifest freeze (`180fa15e2b117d63989d01b5c1feaf5d72540e2273bf82a0ee9738b72cc6569b`) but renders the selected PNG bytes with the matrices now registered in the frozen manifest; it establishes only the visual fit of these specific combinations.

| Actual renderer composition | Observation |
|---|---|
| `angled-round` ([dark](../editor/placement-experiment-final-candidates/angled-round-dark.png), [white](../editor/placement-experiment-final-candidates/angled-round-white.png)) | Both asymmetric capsules fit inside the rims. The transform makes the pair flatter and more horizontal than the approved Grok Artwork; this changed default Draft appearance remains pending art review. |
| `upright-round` ([dark](../editor/placement-experiment-final-candidates/upright-round-dark.png), [white](../editor/placement-experiment-final-candidates/upright-round-white.png)) | Both upright capsules fit inside their lenses and appear aligned. |
| `angled-cap-only` ([dark](../editor/placement-experiment-final-candidates/angled-cap-only-dark.png), [white](../editor/placement-experiment-final-candidates/angled-cap-only-white.png)) | Crown and visor join continuously; no glasses overlap to assess. Cap shape and broad bill remain pending art review. |
| `upright-cap-only` ([dark](../editor/placement-experiment-final-candidates/upright-cap-only-dark.png), [white](../editor/placement-experiment-final-candidates/upright-cap-only-white.png)) | Crown/visor join remains continuous with the upright eyes visible. Cap appearance remains pending art review. |
| `angled-round-cap` ([dark](../editor/placement-experiment-final-candidates/angled-round-cap-dark.png), [white](../editor/placement-experiment-final-candidates/angled-round-cap-white.png)) | Cap layers stay joined and clear the reviewed round lens rims; rear temple is reduced to a short body-edge tip rather than the prior detached extension. |
| `upright-round-cap` ([dark](../editor/placement-experiment-final-candidates/upright-round-cap-dark.png), [white](../editor/placement-experiment-final-candidates/upright-round-cap-white.png)) | Upright eyes remain within the rims; cap join is continuous and does not cover the reviewed lens openings. |

## Dots spot checks

Evidence from the pre-registration run: [default dark](../editor/run-2026-10-10T11-23-51-418Z/review-backgrounds/dots-orb-v1-02-dark.png), [default white](../editor/run-2026-10-10T11-23-51-418Z/review-backgrounds/dots-orb-v1-02-white.png), and named outputs `dots-orb-v1-03.png`, `dots-orb-v1-04.png`, `dots-orb-v1-06.png` in that run's `composites/` directory. The final registration changes only Grok rows; Dots source rows are unchanged. The default face/headset looks symmetric, and the reviewed glasses and closed-eye marks align within the rims. The generated body reads rounder with denser, shorter fibers than the approved Dots Artwork's longer plush strands; this default-look difference remains pending user art review.

## Acceptance boundary

The reviewed dark/white outputs show no obvious colored fringe at their displayed scale; they are not a full-resolution edge test. The earlier long Grok temple and cap-separation findings belong to superseded pre-correction runs; the selected rear temple and paired cap transforms resolve those specific composition defects in the named outputs above. Root also confirmed the Round glasses and Soft cap controls/composition in the local UI. The post-registration full editing suite is still pending, including its final shared-thumbnail-consumer cancellation checks. No result here changes static Artwork, certifies all declared combinations, or grants user art approval.

## Post-registration engineering closeout

The subsequent full [run-2026-10-10T12-34-50-407Z](../editor/run-2026-10-10T12-34-50-407Z/report.json) passed against the exact frozen source hash above: 28 real-source configurations, preview/export equality, both recorded user journeys, 20 lifecycle cycles and asynchronous/thumbnail retry checks. The [Dots 12](../visual/dots-orb-v1-all-configurations.png) and [Grok 16](../visual/grok-orb-v1-all-configurations.png) sheets were generated from those exact exported PNGs and reviewed on dark/light backgrounds. No obvious detached temple, separated cap seam, clipped main silhouette or visible colored fringe was found at the sheet's display scale. Dots body/fiber differences, flattened Grok default capsules and the broad cap silhouette remain explicit user-art decisions. This later engineering result supersedes the pending-full-suite statement above; user art approval and public editability remain pending.
