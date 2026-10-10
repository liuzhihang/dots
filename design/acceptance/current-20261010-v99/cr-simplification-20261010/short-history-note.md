# History cancellation verification note

This note records the existing local-browser evidence for the dirty-navigation history fix. No history test was rerun for this documentation update.

`design/acceptance/current-20261010-v99/verification/npm-test-final.log` records `npm test` passing `scripts/verify-studio-history.mjs` with all seven focused browser scenarios. The run metadata in `design/acceptance/current-20261010-v99/cr-simplification-20261010/history/history.json` records Chrome 155.0.8059.39 and `physicalDevice: false`.

The seven verified scenarios were:

1. Cancel a single Back and return to the same detail history entry with dirty intent intact.
2. Cancel a rapid double Back and converge on the original detail URL/state with dirty intent intact.
3. Queue Forward during a dirty Back `popstate`, cancel Back, and retain the same detail entry and Draft.
4. Accept Back to Gallery, then Forward to reopen the prior Artwork in a clean CharacterStudio.
5. Accept dirty Back before a queued Forward and reopen the Artwork in a clean CharacterStudio.
6. From a dirty detail entry, cancel Forward to a filtered Characters entry and restore detail/Draft; accept it and reach the gallery entry.
7. Accept overlay close and perform exactly one history traversal to Gallery.

A separate direct-fragment smoke check used a dirty Studio with extra-intent text, then assigned `location.hash = '#/?series=grok'` and cancelled the navigation confirmation. The original Artwork URL and history index were restored; the extra-intent text and focused textarea remained unchanged, with no browser or page errors. In that isolated run, Playwright intercepted the then-missing Hero request and served an existing poster image so the check exercised history cancellation only. It is not evidence for Hero rendering or visual acceptance.

These checks cover browser history behavior only. They do not establish physical-device, user-art, or final cross-browser acceptance, and they do not complete tasks 10.1–10.5 or user-art approval task 7.4.
