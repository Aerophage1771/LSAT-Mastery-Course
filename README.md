# LSAT Mastery Course

**Purpose:** Orient contributors to the current product, repo shape, and canonical documentation entrypoints.
**Audience:** Engineers, content editors, operators, and future automation agents.
**Status:** active
**Source of truth:** yes
**Last reviewed:** 2026-04-03
**Related docs:** [../README.md](../README.md), [AGENTS.md](./AGENTS.md), [JULES.md](./JULES.md), [docs/README.md](./docs/README.md), [../docs/README.md](../docs/README.md)

## Current Product Truth

- This repo is a client-only React + TypeScript SPA for LSAT prep. There is no backend, database, auth layer, or external service dependency in the app runtime.
- During the current course-platform migration, this repo's business role is a standalone curriculum reference and export/source-of-truth surface, not the long-term owner of student delivery workflows.
- The live app surfaces are the dashboard at `/`, lesson routes at `/module/:moduleId/lesson/:lessonId`, and the standalone question bank at `/question-bank`.
- Route modules now use the live `1-57` sequence, with `Module 10: Causal Reasoning` inserted directly between `Strengthen` and `Sufficient Assumption`.
- Legacy content-module remapping is applied for the route catalog through `utils/courseCatalog.ts`:
  - `10 -> 60`
  - `11 -> 10` through `21 -> 20`
  - `22 -> 55`
  - `23 -> 59`
  - `24 -> 21` through `50 -> 47` (consecutive mapping)
  - `51 -> 50`, `52 -> 51`, `53 -> 52`, `54 -> 54`, `55 -> 56`, `56 -> 57`, `57 -> 58`
- Progress is stored in `localStorage`.
- The shell includes search, export flows, a style guide modal, and a roadmap modal.
- The question bank is sourced from `modules/module48`, `modules/module49`, and `modules/module53`.
- During the current course-platform migration, this repo is the canonical-course export source and curriculum reference feeding DataToolkit Course Studio. Student-portal course delivery and release ownership should be treated as downstream website/DataToolkit work, with this repo acting as feeder/reference rather than the long-term operator release owner.
- Course JSON exports now have distinct roles:
  - `canonical-course` is the lossless JSON contract for this repo and the active import contract into DataToolkit Course Studio
  - `interchange-course` remains a simplified compatibility export, but it is no longer the primary course-platform integration contract
  - `full-course` remains supported as a legacy-compatible export, not the canonical lossless contract

## Quick Start

```bash
npm install
npm run dev
npm run smoke
```

The Vite dev server binds to `http://localhost:8002`.
`npm run smoke` is the app-owned workspace verification entrypoint for the course shell and route contract.

## Key Scripts

| Command                      | Purpose                                         |
| ---------------------------- | ----------------------------------------------- |
| `npm run dev`                | Start the app locally                           |
| `npm run build`              | Create a production build                       |
| `npm run preview`            | Preview the production build                    |
| `npm run smoke`              | Verify the live shell plus question-bank route contract |
| `npm run typecheck`          | Run strict TypeScript checks                    |
| `npm run validate:questions` | Run question-bank and lesson-linkage validation |
| `npm run inventory:invented` | Regenerate the invented-card inventory          |
| `npm run audit:lr-cards`     | Regenerate the LR card requirements audit       |
| `npm run docs:course-map`    | Regenerate the course content map               |
| `node scripts/export-website-release.mjs` | Emit the website release artifact from current module source |
| `npm run format`             | Run Prettier                                    |

## Repo Map

- `App.tsx`: top-level routing and lesson loading
- `components/`: layout shell, lesson renderer, question bank, search, export, style guide, roadmap
- `modules/`: lesson content and module definitions
- `data/courseCatalog.json`: canonical route-module and lesson naming
- `data/websiteLessonCatalog.ts`: generated website-facing lesson-title catalog derived from the current route map
- `data/author-attitude-corpus/`: generated text corpus of RC `Author Attitude` questions plus the standard-of-proof breakdown file derived from `DataToolkit`
- `utils/courseCatalog.ts`: route/content module mapping and canonical title helpers
- `utils/export.ts`: text, PDF, CSV, full-course, canonical-course, and interchange-course export builders
- `scripts/export-website-release.mjs`: website release exporter that serializes the current routed curriculum into the downstream website artifact
- `scripts/`: validation, inventory, and audit generators
- `docs/`: active product, technical, operations, and archived documentation

## Documentation System

Use the docs layers in this order:

1. [../README.md](../README.md) and [../docs/README.md](../docs/README.md) for workspace-level launcher, ownership, and runtime truth
2. [JULES.md](./JULES.md) for recurring Jules task selections, cadence, and prompt text
3. [docs/README.md](./docs/README.md) for the repo docs map and source-of-truth boundaries
4. [AGENTS.md](./AGENTS.md) for execution rules, repo hazards, and content policy
5. [docs/product/course-experience.md](./docs/product/course-experience.md) for live product behavior
6. [docs/product/course-naming-conventions.md](./docs/product/course-naming-conventions.md) for canonical unit, module, and lesson naming rules
7. [docs/product/course-content-map.md](./docs/product/course-content-map.md) for the compact unit/module/coverage inventory used for spot-checking missing concepts
8. [docs/product/roadmap/README.md](./docs/product/roadmap/README.md) for planned work only, including the 20 numbered `07-26` bet docs
9. [docs/technical/architecture.md](./docs/technical/architecture.md) and [docs/operations/content-operations.md](./docs/operations/content-operations.md) for implementation and workflow detail

Generated audits live under [docs/operations/audits/README.md](./docs/operations/audits/README.md). Historical plans and brainstorms live under [docs/archive/README.md](./docs/archive/README.md).

## Working Rules

- Treat `README.md`, `AGENTS.md`, and `docs/README.md` as distinct entrypoints with non-overlapping roles.
- Keep current product truth in product and technical docs. Keep planned work in `docs/product/roadmap/`. Keep historical context in `docs/archive/`.
- Do not document future-state features as if they already exist.
- For lesson content work, follow the content and validation rules in [AGENTS.md](./AGENTS.md) and [docs/operations/content-operations.md](./docs/operations/content-operations.md).
- When changing audit output paths or generated docs, update both the producing scripts and any runtime imports that read those files.
