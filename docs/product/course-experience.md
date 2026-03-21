# Course Experience

**Purpose:** Describe the live product surfaces and main user workflows as they exist in the repo today.  
**Audience:** Product contributors, content editors, and engineers changing user-facing behavior.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [README.md](./README.md), [roadmap/README.md](./roadmap/README.md), [../technical/architecture.md](../technical/architecture.md)

## Current Product Truth

- The dashboard at `/` is the home surface for module selection and progress review.
- Lesson routes load lazily by module and render structured lesson content through `LessonViewer`.
- The question bank at `/question-bank` is a separate study surface with filtering, search, exports, and PT-linking support.
- Progress is local-only and tied to lesson ids.
- The shell exposes search, exports, the style guide, and the roadmap modal from the header/navigation layer.
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
  - search by PT id or question type
  - expand questions and review answer feedback
  - export question-bank subsets
- Expected outcome:
  - the student can practice repository-backed questions outside the lesson flow

## Important Constraints

- This repo does not include account systems, purchases, or instructor/admin tooling.
- Product copy should not imply server-backed sync or online profiles.
- Canonical lesson naming comes from `data/courseCatalog.json`, not from the raw lesson file titles alone.
- Route ids and content-module ids are not always the same because of legacy module remapping for routes `21` and `22`.

## Related Systems

- `App.tsx`: routing, lazy loading, audit-data consumption
- `components/Layout.tsx`: shell actions, exports, roadmap modal, style guide modal
- `components/QuestionBank.tsx`: question-bank workflow
- `utils/courseCatalog.ts`: canonical route/content naming and remapping
