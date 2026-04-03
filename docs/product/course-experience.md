# Course Experience

**Purpose:** Describe the live product surfaces and main user workflows as they exist in the repo today.  
**Audience:** Product contributors, content editors, and engineers changing user-facing behavior.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-04-03  
**Related docs:** [README.md](./README.md), [roadmap/README.md](./roadmap/README.md), [../technical/architecture.md](../technical/architecture.md)

## Current Product Truth

- The dashboard at `/` is the home surface for module selection and progress review.
- Lesson routes load lazily by module and render structured lesson content through `LessonViewer`.
- The question bank at `/question-bank` is a separate study surface with filtering, search, exports, PT-linking support, and LR cumulative review-bundle filters.
- Progress is local-only and tied to lesson ids.
- The shell exposes search, exports, the style guide, and the roadmap modal from the header/navigation layer.
- The RC lesson layer now uses one shared reading-method vocabulary, a default comparative workflow, and passage-style overlays that include `debate`, `single-position`, `phenomenon-hypothesis`, `problem-analysis`, `spotlight`, and `hybrid`.
- This repo remains the live reference for the curriculum and export shapes, but downstream website/student delivery ownership now sits outside this repo during the current migration.
- This document is live truth. Planned changes belong in the roadmap docs, not here.

## Main Workflows

### Dashboard To Lesson Study

- Entry point: `/`
- Key actions:
  - select a module
  - jump into a lesson
  - move forward/backward through lesson navigation
  - mark progress through the normal study flow
- Expected outcome:
  - the student studies a numbered lesson sequence and retains progress locally

### Direct Deep-Link Lesson Study

- Entry point: `/module/:moduleId/lesson/:lessonId`
- Key actions:
  - open a specific lesson directly
  - review structured content blocks
  - navigate to adjacent lessons
- Expected outcome:
  - deep links remain stable as long as canonical route ids and lesson ids do not change

### Question Bank Practice

- Entry point: `/question-bank`
- Key actions:
  - filter by LR/RC/Advanced RC
  - launch LR cumulative review bundles without leaving the question bank
  - search by PT id or question type
  - expand questions and review answer feedback
  - export question-bank subsets
- Expected outcome:
  - the student can practice repository-backed questions outside the lesson flow

## Important Constraints

- This repo does not include account systems, purchases, or instructor/admin tooling.
- Product copy should not imply server-backed sync or online profiles.
- Canonical lesson naming comes from `data/courseCatalog.json`, not from the raw lesson file titles alone.
- The live numbered LR sequence now includes `Module 10: Causal Reasoning` directly between `Module 9` and `Module 11`.
- Route ids and content-module ids diverge through the legacy remap table in `utils/courseCatalog.ts`: `10 -> 60`, `11-21 -> 10-20`, `22 -> 55`, `23 -> 59`, `24-50 -> 21-47`, `51 -> 50`, `52 -> 51`, `53 -> 52`, `54 -> 54`, and `55-57 -> 56-58`.

## Related Systems

- `App.tsx`: routing, lazy loading, audit-data consumption
- `components/Layout.tsx`: shell actions, exports, roadmap modal, style guide modal
- `components/QuestionBank.tsx`: question-bank workflow
- `utils/courseCatalog.ts`: canonical route/content naming and remapping
- `utils/export.ts` and `scripts/export-website-release.mjs`: downstream curriculum/export handoff surfaces
