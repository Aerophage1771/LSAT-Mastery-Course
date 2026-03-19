# LSAT Mastery Course

**Purpose:** Orient contributors to the current product, repo shape, and canonical documentation entrypoints.  
**Audience:** Engineers, content editors, operators, and future automation agents.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-18  
**Related docs:** [../README.md](../README.md), [AGENTS.md](./AGENTS.md), [docs/README.md](./docs/README.md), [../docs/README.md](../docs/README.md)

## Current Product Truth

- This repo is a client-only React + TypeScript SPA for LSAT prep. There is no backend, database, auth layer, or external service dependency in the app runtime.
- The live app surfaces are the dashboard at `/`, lesson routes at `/module/:moduleId/lesson/:lessonId`, and the standalone question bank at `/question-bank`.
- Route modules are numbered `1-56`. Legacy content-module remapping is applied for the route catalog through `utils/courseCatalog.ts`:
  - `21 -> 55`
  - `22 -> 59`
  - `23 -> 21` through `56 -> 58` (consecutive mapping)
- Progress is stored in `localStorage`.
- The shell includes search, export flows, a style guide modal, and a roadmap modal.
- The question bank is sourced from `modules/module48`, `modules/module49`, and `modules/module53`.
- Course JSON exports now have distinct roles:
  - `canonical-course` is the lossless JSON contract for this repo
  - `interchange-course` is the simplified JSON contract for DataToolkit
  - `full-course` remains supported as a legacy-compatible export, not the canonical lossless contract

## Quick Start

```bash
npm install
npm run dev
```

The Vite dev server binds to `http://localhost:8002`.

## Key Scripts

| Command                      | Purpose                                         |
| ---------------------------- | ----------------------------------------------- |
| `npm run dev`                | Start the app locally                           |
| `npm run build`              | Create a production build                       |
| `npm run preview`            | Preview the production build                    |
| `npm run typecheck`          | Run strict TypeScript checks                    |
| `npm run validate:questions` | Run question-bank and lesson-linkage validation |
| `npm run inventory:invented` | Regenerate the invented-card inventory          |
| `npm run audit:lr-cards`     | Regenerate the LR card requirements audit       |
| `npm run format`             | Run Prettier                                    |

## Repo Map

- `App.tsx`: top-level routing and lesson loading
- `components/`: layout shell, lesson renderer, question bank, search, export, style guide, roadmap
- `modules/`: lesson content and module definitions
- `data/courseCatalog.json`: canonical route-module and lesson naming
- `utils/courseCatalog.ts`: route/content module mapping and canonical title helpers
- `utils/export.ts`: text, PDF, CSV, canonical-course, and interchange-course export builders
- `scripts/`: validation, inventory, and audit generators
- `docs/`: active product, technical, operations, and archived documentation

## Documentation System

Use the docs layers in this order:

1. [../README.md](../README.md) and [../docs/README.md](../docs/README.md) for workspace-level launcher, ownership, and runtime truth
2. [docs/README.md](./docs/README.md) for the repo docs map and source-of-truth boundaries
3. [AGENTS.md](./AGENTS.md) for execution rules, repo hazards, and content policy
4. [docs/product/course-experience.md](./docs/product/course-experience.md) for live product behavior
5. [docs/product/roadmap/README.md](./docs/product/roadmap/README.md) for planned work only
6. [docs/technical/architecture.md](./docs/technical/architecture.md) and [docs/operations/content-operations.md](./docs/operations/content-operations.md) for implementation and workflow detail

Generated audits live under [docs/operations/audits/README.md](./docs/operations/audits/README.md). Historical plans and brainstorms live under [docs/archive/README.md](./docs/archive/README.md).

## Working Rules

- Treat `README.md`, `AGENTS.md`, and `docs/README.md` as distinct entrypoints with non-overlapping roles.
- Keep current product truth in product and technical docs. Keep planned work in `docs/product/roadmap/`. Keep historical context in `docs/archive/`.
- Do not document future-state features as if they already exist.
- For lesson content work, follow the content and validation rules in [AGENTS.md](./AGENTS.md) and [docs/operations/content-operations.md](./docs/operations/content-operations.md).
- When changing audit output paths or generated docs, update both the producing scripts and any runtime imports that read those files.
