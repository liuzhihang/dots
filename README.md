# Dot Studio

A character-first customization and Prompt workspace for Dots, Grok Bot, Muse and animal companions. The catalog contains 48 original or inspired presets. The source links and the distinction between official examples and Studio extensions are visible in the style guide.

## Work locally

```sh
npm ci
npm run build
npm run dev
```

In the managed Sites environment use the supervised `sites-preview` command for browser QA. The static publication directory is `dist`; `src/live` is bundled into `dist/live-runtime.js`. Rebuild the bundle after changing renderer or geometry source.

## State and rendering

- `dist/studio-model.js` owns schema 8, validation, migration from schemas 6–7, constraints and bilingual Prompts.
- `dist/studio-catalog.js` contains the 48 starting configurations and public design sources.
- The saved state records user intent. `resolveCharacter` derives the effective action, accessories, expression, anatomy and background without erasing that intent. Preview, summary and Prompt consume the effective configuration.
- `src/live/avatar-body.js` creates original volume meshes, facial geometry, layered hair and species-specific anatomy.
- `src/live/avatar-props.js` fits accessories and creates exactly one active arm/wing pair with contacts for the selected prop. Head accessories inherit the head transform.
- `src/live/live-preview.js` handles lighting, surface-attached fibers, camera, animation, the main preview and a shared thumbnail renderer.
- `src/live/software-renderer.js` provides a depth-tested Canvas2D fallback for environments without WebGL. It renders the same geometry, materials and fibers; GPU rendering is preferred where available.
- PNG export uses a separate canvas and an immutable configuration snapshot. Resize, rapid edits and concurrent export clicks cannot overwrite an in-progress export.
- High-resolution art examples remain available in **美术参考**. They are explicitly separate from the editable real-time model.

## Outputs and privacy

The site produces Chinese/English Prompts, TXT files, re-importable JSON and PNGs of the actual preview. A preview PNG is a rendered model frame, not an image-model result. PNG exports honor the chosen aspect ratio and alpha background.

Reference mode stores only text instructions and preservation choices. No reference-image input, upload, image parser or image-generation API is present. **复制并打开 ChatGPT** copies the Prompt and opens ChatGPT; the user pastes it and attaches their image there.

## Verification

```sh
node scripts/verify-studio.mjs
```

The checks cover intentional state preservation, current versus temporary accessories, species anatomy, Prompt/JSON consistency, and construction of all catalog presets. Browser QA separately verifies visible changes, material quality, real exports and responsive layout.
