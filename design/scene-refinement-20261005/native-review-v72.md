# Native homepage screenshot review — v72

This note corrects the earlier review using the native viewport captures, not the mismatched full-page captures. Evidence is limited to source `ca8b4f7310d7ce85b1e9e5520c27d278500fd70321385354a50f9f4acd649020`, cache revision 72, the screenshots listed in `page/native-viewport-pages-v72.json`, and the visible Dots source image `assets/dots-scene-v2.png`.

| Viewport | Visible composition | Finding |
| --- | --- | --- |
| 1280 × 900 | Hero groups sit at opposite sides of the centered title; all five family cards fit in one row. | The main heads and group outlines are visible in this native capture. No proven edge crop. |
| 768 × 1024 | Hero remains centered above a 3+2 family-card layout. | The second card row is left-aligned, leaving open space on the right. This is a balance preference, not a clipping defect. |
| 390 × 844 | Hero people and neighboring mascots remain within the visible scene; cards are two columns, with Animals as a full-width final card. | Animals uses text on the left and the group image on the right. No proven hero or card-image outline crop. |
| 320 × 812 | Hero and two-column cards remain visible; Animals uses the same text-left/image-right arrangement. | Some figures sit close to the scene edge, but this capture does not establish that the orange companion or another key outline is clipped. |

The Dots source image contains five companions: the blue headphone character, lilac hat character, pink character, mint character, and a small peach character behind the lilac and pink figures. The peach character is present in the family-card composition but has weak visibility at card scale. This supports a possible legibility improvement, not a requirement to add a fifth character. The small “3 款内置候选” labels refer to the available built-in looks, not the number of figures depicted in a family image.

The earlier claims that Dots must gain a fifth figure and that the mobile hero definitely crops the orange figure are withdrawn. In the native viewport metadata, body width and scroll width match at 1265 px for the 1280 viewport, 753 px for 768, 375 px for 390, and 305 px for 320; body top remained 0 before and after capture. This confirms capture geometry only and does not establish visual acceptance.

The v72 screenshots are a corrected evidence record, not approval of the current redesign. The metadata records `userArtApproved: false` and `physicalPhoneTested: false`; both remain unapproved, and the new R01-directed homepage plus Meta Muse work requires a separate review of its later screenshots.
