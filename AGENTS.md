# AGENTS.md

**Purpose:** Define execution rules, repo hazards, and content-policy constraints for agents working in this repository.
**Audience:** Coding agents and human contributors making product or content changes.
**Status:** active
**Source of truth:** yes
**Last reviewed:** 2026-04-15
**Related docs:** [../README.md](../README.md), [README.md](./README.md), [docs/README.md](./docs/README.md), [../docs/README.md](../docs/README.md)

## Repo Identity

- Client-only React 19 + TypeScript SPA
- No backend, no database, no external services in runtime
- Package manager: `npm`
- Build tool: Vite 6
- Styling: Tailwind CSS 4
- Routing: React Router 7

## Product Truth You Must Preserve

- Live routes:
  - `/`
  - `/module/:moduleId`
  - `/module/:moduleId/lesson/:lessonId`
  - `/question-bank`
- The question bank is standalone, not a numbered module route.
- Route module ids are canonical. The live route set is now `1-57`, with `Module 10` reserved for the standalone `Causal Reasoning` framework module.
- Legacy content module ids are remapped through `utils/courseCatalog.ts` once the public route numbering diverges from source-module ids.
  - `10 -> 60`
  - `11 -> 10` through `21 -> 20`
  - `22 -> 55`
  - `23 -> 59`
  - `24 -> 21` through `50 -> 47` (consecutive mapping)
  - `51 -> 50`, `52 -> 51`, `53 -> 52`, `54 -> 54`, `55 -> 56`, `56 -> 57`, `57 -> 58`
- Lesson files under `modules/moduleN/` are data files exporting lesson objects. They are not React components.
- This repo is now an archived curriculum-reference surface. Treat DataToolkit as the active course owner and the website as the delivery surface unless you are explicitly auditing historical content or legacy export assumptions here.

## Key Constraints

- TypeScript runs in strict mode. Use `npm run typecheck` after content or structural edits.
- The app shell is intentionally large enough to trigger Vite chunk-size warnings. Treat that warning as expected unless a change clearly worsens it.
- Service worker generation only happens on `npm run build`, not during dev.
- Progress data is stored in `localStorage`. Any change to lesson ids or route ids can break saved progress and deep links.

## Content Policy

- Lesson 4+ drill and concept content must use real LSAT material sourced from the question-bank repositories.
- Lessons 1-3 may use invented examples, but they must be clearly labeled as illustrative and must not use fake PT identifiers.
- Do not add invented `question-card` blocks for lessons 1-3. If you need an illustrative example, use prose, blockquotes, or clearly marked non-interactive content instead.

## Validation Commands

Run the smallest useful set for the change:

```bash
npm run typecheck
npm run inventory:invented
npm run validate:questions
npm run audit:lr-cards
```

Generated reports live under `docs/operations/audits/`.

## High-Risk Areas

- `utils/courseCatalog.ts`: route/content module mapping and canonical naming after the `Module 10: Causal Reasoning` insertion
- `data/courseCatalog.json`: canonical lesson titles shown in navigation and exports
- `data/websiteLessonCatalog.ts`: generated website-facing lesson-title snapshot that should stay aligned with routed lesson naming
- `utils/export.ts` and `scripts/export-website-release.mjs`: canonical-course and website-release contract surfaces consumed downstream
- `App.tsx` and `components/QuestionBank.tsx`: runtime consumers of generated audit data
- `components/LessonViewer.tsx`: renderer behavior for all lesson block types
- `modules/Module55.tsx` and `modules/Module59.tsx`: legacy content-module mapping points used by route remapping logic (not a one-to-one route/content relationship)

## Quote Escaping Rule For Content Files

Content-file syntax errors are common and usually come from unescaped quotes.

- Replace smart quotes with straight ASCII quotes.
- Escape apostrophes inside single-quoted strings as `\'`.
- Escape double quotes inside double-quoted strings as `\"`.
- After editing lesson files, run `npm run typecheck` or at minimum `npx tsc --noEmit`.

## Docs Expectations

- Root workspace docs live at [../README.md](../README.md) and [../docs/README.md](../docs/README.md) for launcher, app-map, and cross-app runtime truth.
- `README.md` is repo and product orientation.
- `AGENTS.md` is execution guidance, repo hazards, and content-policy enforcement.
- `docs/README.md` is the active docs index and source-of-truth map.
- `docs/product/course-experience.md` is live product truth.
- `docs/technical/architecture.md` and `docs/technical/content-and-validation.md` should describe the current archived-reference and legacy-export role whenever that boundary changes.
- `docs/product/roadmap/` is planned work only and must not be written as shipped behavior.
- `docs/archive/` is historical context only.
- When changing active docs, keep metadata headers and `Related docs` links accurate. Add a `CHANGELOG.md` entry when the docs structure or source-of-truth boundaries materially change.
