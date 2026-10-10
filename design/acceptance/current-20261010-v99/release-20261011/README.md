# v99 release — 2026-10-11

The user confirmed the current artwork/UI/template version and requested publication, all-change archival, and code submission. Exact authorization and asset/version approval are recorded in `release-authorization.json` and `approval.json`.

- Published the existing public Dots Site as version 47: https://dots.liuzhihang.chatgpt.site . Site source commit: `3e2dbeccaca273c575cfe5fd1de72e9fea776a4e`. Audience and hosting configuration were preserved.
- The verified deployment package contains 155 exact runtime files plus the hosting manifest. See `package-verification.json` and `deployment.json` for archive and deployment receipts.
- Production browser readback confirmed English/Chinese home, 24 visible Artworks, and public automatic loading of the approved Dots template with enabled Prompt/ChatGPT/export actions.
- All active changes were archived. The only active change, `simplify-reveal-cards-and-staging`, is now at `openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging`; 58/58 tasks are complete. Twelve deltas were reconciled; strict validation passed all 11 current specs. See `archive-sync.json`.
- Build, the complete npm test suite, and public-path browser verification passed. Browser coverage includes 24 actual exports, all 28 legal editor configurations, responsive bilingual layouts, and two editing/export journeys. Detailed checks and limitations are in `browser-checks/README.md` and `verification/`.
- Approval covers 24 current Artworks, the current page/hero, and exactly two current templates (Dots 12 configurations, Grok 16). The other 22 Artworks remain static; no future assets or capabilities are approved by this record.
- Physical-device acceptance and full performance-load testing were not rerun for this release.
- Selected captures and structured evidence are versioned. Raw binary QA remains local and is inventoried in `local-only-evidence-manifest.json`. No GitHub push was requested or performed.
