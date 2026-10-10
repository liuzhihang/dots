# Artwork display-name update — 2026-10-11

The gallery now renders each Artwork title independently from its series label. Approved and pending display titles are sourced from localized `titleByLanguage`; the catalog's Chinese `title` mirrors that current localized title. Series labels remain a separate outlined chip beside the title, and card accessible names include both values. A preview-only custom series label is used when no public series row exists.

`meta-muse` keeps its series ID and `meta-muse-core` keeps its character ID; both display as “Muse.” Artwork and character IDs are unchanged. This update only changes display labels and card presentation. Artwork facts, descriptions, aliases, prompts, approval state, original assets, and asset bytes were not edited for this change.

Validation in this run: JavaScript syntax checks, imported-catalog assertions for all 15 approved and 9 preview Artwork titles/locales and non-repeated series labels, CSS parsing, and `git diff --check`. Full catalog/browser checks remain with the project verification run.
