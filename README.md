# LSAT Mastery Course

**Purpose:** Orient contributors to the current product, repo shape, and canonical documentation entrypoints.  
**Audience:** Engineers, content editors, operators, and future automation agents.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [AGENTS.md](./AGENTS.md), [docs/README.md](./docs/README.md), [docs/technical/architecture.md](./docs/technical/architecture.md)

## Current Product Truth

- This repo is a client-only React + TypeScript SPA for LSAT prep. There is no backend, database, auth layer, or external service dependency in the app runtime.
- The live app surfaces are the dashboard at `/`, lesson routes at `/module/:moduleId/lesson/:lessonId`, and the standalone question bank at `/question-bank`.
- Route modules are numbered `1-56`. Two public route ids are backed by legacy content modules:
  - route module `21` uses content module `55`
  - route module `22` uses content module `59`
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

The Vite dev server targets port `4317` and may auto-increment if that port is already in use.

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

1. [docs/README.md](./docs/README.md) for the docs map and source-of-truth boundaries
2. [AGENTS.md](./AGENTS.md) for execution rules, repo hazards, and content policy
3. [docs/product/course-experience.md](./docs/product/course-experience.md) for live product behavior
4. [docs/product/roadmap/README.md](./docs/product/roadmap/README.md) for planned work only
5. [docs/technical/architecture.md](./docs/technical/architecture.md) and [docs/operations/content-operations.md](./docs/operations/content-operations.md) for implementation and workflow detail

Generated audits live under [docs/operations/audits/README.md](./docs/operations/audits/README.md). Historical plans and brainstorms live under [docs/archive/README.md](./docs/archive/README.md).

## Working Rules

- Treat `README.md`, `AGENTS.md`, and `docs/README.md` as distinct entrypoints with non-overlapping roles.
- Keep current product truth in product and technical docs. Keep planned work in `docs/product/roadmap/`. Keep historical context in `docs/archive/`.
- Do not document future-state features as if they already exist.
- For lesson content work, follow the content and validation rules in [AGENTS.md](./AGENTS.md) and [docs/operations/content-operations.md](./docs/operations/content-operations.md).
- When changing audit output paths or generated docs, update both the producing scripts and any runtime imports that read those files.
