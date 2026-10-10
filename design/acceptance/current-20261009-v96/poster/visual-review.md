# Gallery poster visual review — v96

## Evidence

- QA-only source/poster contact sheet: `contact-sheet-source-vs-poster.png`.
- Per-file dimensions, alpha bounds/counts, byte sizes, encoding chunks, and expected/actual SHA-256 values: `asset-audit.json`.
- Scope: the 15 registered v83 original PNGs and their 15 v96 gallery-only poster derivatives. The contact sheet composites each file over a checkerboard for inspection; it is not a production image and does not alter either source.

## Result

All 15 original PNG hashes match their registered/v83 hashes, and all 15 poster hashes match the current static manifest. Original PNG files remain unchanged. Originals range from 790,009 to 1,860,436 bytes; posters range from 16,022 to 63,930 bytes. Every poster is below the 100 KiB budget (102,400 bytes); aggregate poster size is 557,042 bytes.

Each poster is a 512×512 RGBA WebP with fully transparent pixels and full-opacity pixels. Pixel alpha counts and dimensions agree with the manifest. The original art is preserved; only the gallery cover is derived.

The registered transformation is: crop fully transparent margins at alpha ≥ 1, scale proportionally to fit 448×448, center on a transparent 512×512 canvas, and encode as lossy VP8 WebP with alpha. The RIFF chunks were checked directly: all 15 contain `VP8X`, `ALPH`, and `VP8 `; none use the lossless `VP8L` chunk. The catalog transformation wording was corrected to match those files.

Visual inspection of all 15 pairs found no clipping, baked checkerboard/background, visible edge halos, or loss of identity-defining shapes and colors. Dots retain their short-pile forms; Grok retains its smooth geometry and paired capsule eyes; Muse retains the cream wrapped body and inset face; people retain distinct hair/clothing; the Shiba retains upright ears, orange/cream markings, muzzle, paws, and curled tail. Alpha remains visible on the checkerboard.

Optical scale is intentionally normalized with transparent padding. The poster visible max-axis spans 396–448 px; compared with each raw source fitted into an equivalent 512 px frame, this is about 80.7–90.8%. The teal-square Grok and cream Muse are the smallest relative examples, but both remain clear and fully contained in the contact sheet. Confirm their apparent balance in the rendered gallery grid as part of browser visual QA; this offline contact sheet does not establish browser layout acceptance.

## Per-artwork poster sizes

| Artwork ID | Original PNG | Poster WebP | Poster visible max-axis | Poster/source scale |
| --- | ---: | ---: | ---: | ---: |
| candidate-dots-20261005 | 1,720,054 B | 53,964 B | 440 px | 90.8% |
| candidate-grok-20261005 | 971,168 B | 19,620 B | 407 px | 83.6% |
| candidate-meta-muse-20261005 | 1,003,955 B | 26,872 B | 396 px | 82.9% |
| candidate-humans-20261005 | 1,151,483 B | 35,746 B | 444 px | 89.4% |
| candidate-animals-20261005 | 1,413,426 B | 44,244 B | 443 px | 87.4% |
| dots-rose-glasses | 1,860,436 B | 63,930 B | 415 px | 83.7% |
| dots-lilac-bucket | 1,605,008 B | 58,256 B | 422 px | 88.9% |
| grok-green-cloud | 790,009 B | 19,066 B | 445 px | 86.9% |
| grok-teal-square | 828,844 B | 16,022 B | 410 px | 80.7% |
| muse-rose-flowers | 1,185,166 B | 34,690 B | 429 px | 86.4% |
| muse-sage-reading | 1,142,481 B | 27,236 B | 448 px | 90.7% |
| human-bun-yellow | 1,086,214 B | 37,648 B | 445 px | 87.0% |
| human-blond-glasses | 1,058,375 B | 34,014 B | 439 px | 87.2% |
| animal-white-cat | 1,382,027 B | 42,036 B | 422 px | 83.5% |
| animal-gray-husky | 1,623,665 B | 43,698 B | 437 px | 86.9% |
