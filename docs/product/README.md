# Product Docs

**Purpose:** Collect the active, user-facing product truth for the LSAT Mastery experience.  
**Audience:** Product-minded contributors, content leads, and engineers shaping user-visible behavior.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-04-03  
**Related docs:** [../README.md](../README.md), [course-experience.md](./course-experience.md), [course-naming-conventions.md](./course-naming-conventions.md), [course-content-map.md](./course-content-map.md), [roadmap/README.md](./roadmap/README.md), [roadmap/sage-chapters-31-34-special-sources-integration-report.md](./roadmap/sage-chapters-31-34-special-sources-integration-report.md)

## Current Product Truth

- The product is a self-guided LSAT study experience delivered as a single-page web app.
- The live study surfaces are the dashboard, lesson pages, and the standalone question bank.
- Search, exports, progress tracking, style-guide previewing, and roadmap browsing all live inside the client shell.
- During the current migration, this product repo also serves as the standalone curriculum reference and export source of truth for downstream course-platform work.
- There is no checkout, billing, CRM, or admin console in this repo.

## How This Folder Is Split

- [course-experience.md](./course-experience.md)
  - current user-facing behavior and workflows
- [course-naming-conventions.md](./course-naming-conventions.md)
  - canonical naming rules for units, modules, lessons, and resource labels
- [course-content-map.md](./course-content-map.md)
  - compact source-of-truth inventory of units, modules, major concepts, and RC passage question coverage
- [roadmap/README.md](./roadmap/README.md)
  - planned work only
- [roadmap/sage-chapters-31-34-special-sources-integration-report.md](./roadmap/sage-chapters-31-34-special-sources-integration-report.md)
  - current active Sage/source-material integration report for the remaining RC-special-source wave
- [roadmap/vision-and-decision-filter.md](./roadmap/vision-and-decision-filter.md)
  - planning gate for maintainability, trust, and repo-fit decisions
- [roadmap/pathway-map.md](./roadmap/pathway-map.md)
  - sequencing and dependency guidance for roadmap bets

## Roadmap Set

- [roadmap/07-diagnostic-start-and-placement.md](./roadmap/07-diagnostic-start-and-placement.md)
- [roadmap/08-question-bank-study-modes.md](./roadmap/08-question-bank-study-modes.md)
- [roadmap/09-review-queue-and-mistake-journal.md](./roadmap/09-review-queue-and-mistake-journal.md)
- [roadmap/10-lesson-prerequisite-clarity.md](./roadmap/10-lesson-prerequisite-clarity.md)
- [roadmap/11-module-landing-page-quality.md](./roadmap/11-module-landing-page-quality.md)

## Non-Goals For This Folder

- Low-level implementation details belong in `docs/technical/`.
- Editing procedure and maintenance rules belong in `docs/operations/`.
- Dated plans and one-off brainstorms belong in `docs/archive/`.
- Do not add fake admin, billing, or backend docs for systems that do not exist in this repo.
