# Runtime code review — v80

## Scope and source

Read-only review of the homepage creator, scene/look registry boundary, workbench handoff, background shortcut, reduced-motion handling, and cache entry points. The frozen source snapshot is `29e9a319a0b9f7da86c4497c26b144aa6ee228e075c6b98b32282161678d1fb1`, cache revision `80`, based on `0cd69c96ebd02e5c61c6c9b35aab8958120256ad`. I verified all 123 listed file hashes against the working tree and recomputed the source ID.

## Findings

No blocking runtime logic defect was found in the requested user flows.

- The five family display scenes contain 4, 6, 1, 3, and 5 described members. Their artwork is registered as scene-only material. The 15 editable looks remain separate identities, three per family. Scene member descriptions do not resolve as look or creation IDs.
- Each family scene has an explicit `startLookId` that resolves to a registered look in that same family. Hero scenes have no start ID. `startLook()` independently rejects IDs outside the active built-in look registry.
- Homepage mini selection changes only the local `introLook` and redraws the mini preview. It does not update the shared character or project. The two explicit start controls pass that same selected ID to the workbench handoff.
- The background shortcut starts the selected look, then scrolls to and focuses the real `backgroundControlTitle` section. Other mini toolbar actions map to existing Prompt tabs.
- The reduced-motion control writes `body.dataset.reducedMotion`; the matching CSS disables the scene and card transitions, animations, and transforms. The OS reduced-motion media rule remains active independently.
- The user-navigation entry points `index.html`, `editor.html`, and `legacy-editor.html` load cache revision 80.

The two `dist/qa/*.html` harnesses still reference revision 70. They are not linked from the product UI, so I treated them as test-only pages rather than user-navigation entry points. Because the static publish root includes `dist`, they may still be addressable by direct URL; if “all reachable HTML” includes those QA URLs, their cache references need a separate update and source freeze.

## Verification boundary

`node scripts/verify-look-gallery.mjs` passed, including the registered look count, family/scene association guards, local image checks, and start-look project behavior. I did not rerun the prior render matrix or use a browser. The frozen v80 capture record reports 15 gallery cards, a local mini trial that leaves the prompt unchanged until start, a working background focus, and reduced-motion state; it also explicitly leaves `userArtApproved` false. This code review is not visual-art or physical-device acceptance.
