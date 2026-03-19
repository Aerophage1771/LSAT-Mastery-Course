# Product Docs

**Purpose:** Collect the active, user-facing product truth for the LSAT Mastery experience.  
**Audience:** Product-minded contributors, content leads, and engineers shaping user-visible behavior.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-18  
**Related docs:** [../README.md](../README.md), [course-experience.md](./course-experience.md), [roadmap/README.md](./roadmap/README.md)

## Current Product Truth

- The product is a self-guided LSAT study experience delivered as a single-page web app.
- The live study surfaces are the dashboard, lesson pages, and the standalone question bank.
- Search, exports, progress tracking, style-guide previewing, and roadmap browsing all live inside the client shell.
- There is no checkout, billing, CRM, or admin console in this repo.

## How This Folder Is Split

- [course-experience.md](./course-experience.md)
  - current user-facing behavior and workflows
- [roadmap/README.md](./roadmap/README.md)
  - planned work only
- [roadmap/vision-and-decision-filter.md](./roadmap/vision-and-decision-filter.md)
  - planning gate for maintainability, trust, and repo-fit decisions
- [roadmap/pathway-map.md](./roadmap/pathway-map.md)
  - sequencing and dependency guidance for roadmap bets

## Roadmap Set

- [roadmap/01-content-trust-and-authenticity.md](./roadmap/01-content-trust-and-authenticity.md)
- [roadmap/02-study-loop-clarity-and-progress-review.md](./roadmap/02-study-loop-clarity-and-progress-review.md)
- [roadmap/03-question-bank-discovery-and-cross-linking.md](./roadmap/03-question-bank-discovery-and-cross-linking.md)
- [roadmap/04-export-and-packaging-quality.md](./roadmap/04-export-and-packaging-quality.md)
- [roadmap/05-reliability-performance-and-offline-resilience.md](./roadmap/05-reliability-performance-and-offline-resilience.md)
- [roadmap/06-analytics-and-signals.md](./roadmap/06-analytics-and-signals.md)

## Non-Goals For This Folder

- Low-level implementation details belong in `docs/technical/`.
- Editing procedure and maintenance rules belong in `docs/operations/`.
- Dated plans and one-off brainstorms belong in `docs/archive/`.
- Do not add fake admin, billing, or backend docs for systems that do not exist in this repo.
