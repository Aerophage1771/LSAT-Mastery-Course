# Content Operations

**Purpose:** Define the working procedure for editing lesson content without breaking question integrity or route truth.  
**Audience:** Content editors, maintainers, and coding agents doing lesson work.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-04-03  
**Related docs:** [recurring-maintenance.md](./recurring-maintenance.md), [../technical/content-and-validation.md](../technical/content-and-validation.md), [../product/roadmap/01-content-trust-and-authenticity.md](../product/roadmap/01-content-trust-and-authenticity.md)

## Current Workflow

1. Identify the route module and lesson id you are changing.
2. Confirm whether the route uses a legacy content module mapping.
3. Edit the lesson content file under `modules/moduleN/`.
4. If the lesson title or order changed, update `data/courseCatalog.json`.
5. If the change affects downstream packaging, review `utils/export.ts`, `data/websiteLessonCatalog.ts`, and `scripts/export-website-release.mjs` for alignment.
6. Run the smallest relevant validation set.
7. Regenerate any audits your change affects.

## Adding Or Editing Lesson Content

- Lesson files are pure data exports.
- Use ASCII unless the file already depends on another character set.
- Prefer prose, blockquotes, callouts, and process blocks for illustrative teaching content in lessons 1-3.
- Do not add invented `question-card` content to lessons 1-3.

## Question Policy

- Lesson 4+ content should use repository-backed real questions.
- If a needed real question does not exist in the repository, stop and resolve that sourcing problem instead of inventing one.
- Canonical titles and PT ids should stay aligned between lesson content, course catalog, and validation outputs.

## Release Safety Checks

- `npm run typecheck`
- `npm run inventory:invented` when touching lesson 1-3 content or audit tooling
- `npm run validate:questions` when touching question-bank or lesson drill usage
- `npm run audit:lr-cards` when changing LR lesson card presence or naming
- `node scripts/export-website-release.mjs` when changing route naming, lesson naming, or export-relevant content structure

## Important Constraints

- Deep links depend on stable lesson ids.
- Generated audit docs are checked into the repo and should stay in sync with source changes.
- Downstream course-platform consumers now depend on this repo's export integrity even when the local UI still looks correct.
- Validation failures elsewhere in the repo may predate your change. Separate regressions from baseline noise.
- Roadmap docs may explain why a content change matters, but this file governs how content work is actually executed.
