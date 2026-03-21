# Content And Validation

**Purpose:** Explain where lesson/question content comes from and how to validate it safely.  
**Audience:** Engineers and content editors changing lessons, audits, or question-bank sources.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [architecture.md](./architecture.md), [../operations/content-operations.md](../operations/content-operations.md), [../product/roadmap/01-content-trust-and-authenticity.md](../product/roadmap/01-content-trust-and-authenticity.md)

## Overview

The repo mixes three content layers:

- lesson content under `modules/moduleN/`
- canonical naming in `data/courseCatalog.json`
- question-bank repositories in `modules/module48`, `modules/module49`, and `modules/module53`

## Current Content Model

- Lesson files export a `Lesson` object with `ContentBlock[]`.
- `LessonViewer` is the sole renderer for those blocks.
- Lessons 1-3 may include illustrative prose examples.
- Lesson 4+ drill and concept content should be backed by real question-bank material.

## Question Sources

- `modules/module48`
  - LR drill repository
- `modules/module49`
  - RC repository
- `modules/module53`
  - Advanced RC repository

These repositories are the source of truth for practice-question content used in lesson drills.

## Generated Audits

Generated audit outputs live under `docs/operations/audits/`.

- `invented-questions-inventory.json`
- `invented-questions-inventory.md`
- `question-usage-audit.md`
- `question-linkage-audit.md`
- `lr-card-requirements-audit.md`

These reports are planning signals for the roadmap and maintenance work, but they are not hand-edited source-of-truth product docs.

## Validation Commands

```bash
npm run inventory:invented
npm run validate:questions
npm run audit:lr-cards
npm run typecheck
```

## Known Risks / Gotchas

- A path change for the invented-question inventory affects:
  - `App.tsx`
  - `components/QuestionBank.tsx`
  - audit and cleanup scripts
- Validation reports are not all "green" today. Treat them as repo-state diagnostics, not as proof that your change is wrong.
- Quote escaping remains the most common failure mode in lesson files.

## Change Notes

- After moving or renaming audit outputs, regenerate them immediately.
- After content edits, prefer the smallest relevant validation command plus `npm run typecheck`.
