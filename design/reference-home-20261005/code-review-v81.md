# Runtime code review — v81

## Scope and source

Read-only review of the v81 cache sweep and the homepage creator boundaries carried forward from v80. The frozen source snapshot is `0a2daefce6cc18094ac2e40749ec42750c3b80837fa58de5fc57b4090288cc60`, cache revision `81`, based on `0cd69c96ebd02e5c61c6c9b35aab8958120256ad`.

## Findings

No blocking issue was found in the reviewed scope. The v80 QA cache caveat is closed: all HTML, JavaScript, and CSS query-version references under `dist/`, including both QA harness pages, now use `v=81`. A recursive search found no remaining `v=70` or `v=80` references in those files. Comparing the v80 and v81 frozen inventories shows the same 123 paths, with 17 changed HTML/JavaScript paths and no added or removed files.

The reviewed runtime boundaries remain intact:

- The five family scenes describe 4, 6, 1, 3, and 5 members. Scene IDs, scene paths, and display descriptions remain separate from the 15 editable look IDs.
- Each family scene's explicit `startLookId` resolves to a registered editable look from that same family. Hero scenes have no start ID; the workbench handoff validates IDs through the built-in look registry.
- Selecting a mini look only updates the local `introLook` preview state. Starting from either intro action passes that selected ID to the workbench. The background shortcut opens the actual `backgroundControlTitle` controls.
- The app reduced-motion toggle updates `body.dataset.reducedMotion`, and the matching CSS disables the relevant scene/card motion.

## Verification boundary

All 123 file hashes in the v81 snapshot match the working tree, and recomputing its inventory digest yields the recorded source ID. The v81 scene/look check passed for the 4+6+1+3+5 counts, 15 editable looks, same-family start IDs, and scene/artwork separation. I did not run the previous render matrix or use a browser. The snapshot still records `userArtApproved: false`; this review closes the cache condition only and is not visual-art or physical-device acceptance.
