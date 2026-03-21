# AGENTS.md

**Purpose:** Define execution rules, repo hazards, and content-policy constraints for agents working in this repository.  
**Audience:** Coding agents and human contributors making product or content changes.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [README.md](./README.md), [docs/README.md](./docs/README.md), [docs/operations/content-operations.md](./docs/operations/content-operations.md)

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
- Route module ids are canonical. Legacy content module ids are remapped through `utils/courseCatalog.ts`.
  - route `21` -> content module `55`
  - route `22` -> content module `59`
- Lesson files under `modules/moduleN/` are data files exporting lesson objects. They are not React components.

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

- `utils/courseCatalog.ts`: route/content module mapping and canonical naming
- `data/courseCatalog.json`: canonical lesson titles shown in navigation and exports
- `App.tsx` and `components/QuestionBank.tsx`: runtime consumers of generated audit data
- `components/LessonViewer.tsx`: renderer behavior for all lesson block types
- `modules/Module55.tsx` and `modules/Module59.tsx`: legacy content-module mappings behind routes `21` and `22`

## Quote Escaping Rule For Content Files

Content-file syntax errors are common and usually come from unescaped quotes.

- Replace smart quotes with straight ASCII quotes.
- Escape apostrophes inside single-quoted strings as `\'`.
- Escape double quotes inside double-quoted strings as `\"`.
- After editing lesson files, run `npm run typecheck` or at minimum `npx tsc --noEmit`.

## Docs Expectations

- `README.md` is repo and product orientation.
- `AGENTS.md` is execution guidance, repo hazards, and content-policy enforcement.
- `docs/README.md` is the active docs index and source-of-truth map.
- `docs/product/course-experience.md` is live product truth.
- `docs/product/roadmap/` is planned work only and must not be written as shipped behavior.
- `docs/archive/` is historical context only.
- When changing active docs, keep metadata headers and `Related docs` links accurate. Add a `CHANGELOG.md` entry when the docs structure or source-of-truth boundaries materially change.
