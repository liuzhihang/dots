# v99 browser acceptance

Run date: 2026-10-11. These checks used the local Vite build with Playwright and installed Chrome. Artwork and Template approval is documented separately in `../approval.json`; this report does not claim Sites deployment or physical-device acceptance.

| Check | Result | Evidence |
| --- | --- | --- |
| Public gallery and detail | 24/24 public Artworks; 18 grouped interaction/layout checks; 21 screenshots; 24 real downloads | `studio-browser/report.json`, `studio-browser/*.png` |
| Export bytes and alpha | 22 static downloads match their registered original bytes; 2 approved-template downloads match the successful Canvas revision; 0 preview-only records | `studio-browser/download-alpha.json` |
| Template editing | All 12 Dots and 16 Grok recipes rendered/exported with matching Canvas/export hashes; 20 edit/render/export/destroy cycles, 30 stale consumers canceled, 4 pending fetches aborted; race/retry and both app→PNG→app journeys passed | `studio-editing/run-*/report.json` and its referenced evidence |
| Home hero | 10 viewport/language cases passed | `home-hero/report.json`, `home-hero/*.png` |
| Editor layout | 24 bilingual template/viewport cases passed; 40 screenshots | `editor-layout/report.json`, `editor-layout/*.png` |
| Text contrast | 258 targets sampled in both languages; minimum measured ratio 3.49:1; 0 failures | `contrast/report.json` |

The gallery test used a registered opaque RGB original as well as transparent RGBA originals. Template exports were checked against their successful preview Canvas, not against the source artwork bytes. The complete captured QA evidence occupies about 185 MB; keep the JSON reports and selected CR screenshots for the release, and retain the larger raw download/video evidence locally.

The full performance-load suite was not run in this pass, per the release task's scope. No production-hosting or physical-device behavior is claimed.
