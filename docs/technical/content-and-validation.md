# Content And Validation

**Purpose:** Explain where lesson/question content comes from and how to validate it safely.  
**Audience:** Engineers and content editors changing lessons, audits, or question-bank sources.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-04-03  
**Related docs:** [architecture.md](./architecture.md), [../operations/content-operations.md](../operations/content-operations.md), [../product/roadmap/01-content-trust-and-authenticity.md](../product/roadmap/01-content-trust-and-authenticity.md)

## Overview

The repo mixes three content layers:

- lesson content under `modules/moduleN/`
- canonical naming in `data/courseCatalog.json`
- question-bank repositories in `modules/module48`, `modules/module49`, and `modules/module53`

It also owns the primary curriculum-export surfaces consumed downstream during the current migration:

- `canonical-course` is the lossless source-of-truth payload consumed by DataToolkit Course Studio
- `interchange-course` is a simplified compatibility payload derived from `canonical-course`
- `full-course` remains a legacy-compatible course dump
- `scripts/export-website-release.mjs` emits the website release artifact from the same routed module source

## Current Content Model

- Lesson files export a `Lesson` object with `ContentBlock[]`.
- `LessonViewer` is the sole renderer for those blocks.
- `data/courseCatalog.json` remains the naming source of truth that export surfaces depend on.
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

- `module48` enforces unique LR PT IDs across the repository. If a cross-question-type module reuses an LR question that already belongs to a native question-type bank entry, keep the PT-backed repository copy in its native module file and reference the pairing from lesson content instead of duplicating the PT entry.

## Generated Audits

Generated audit outputs live under `docs/operations/audits/`.

- `invented-questions-inventory.json`
- `invented-questions-inventory.md`
- `question-usage-audit.md`
- `question-linkage-audit.md`
- `lr-card-requirements-audit.md`
- `content-metrics.json`
- `content-metrics.md`

There is also a `REPOSITORY_GAPS.txt` report generated at the repo root by `npm run report:gaps`.
These reports are planning signals for the roadmap and maintenance work, but they are not hand-edited source-of-truth product docs.

## Validation Commands

```bash
npm run inventory:invented
npm run validate:questions
npm run audit:lr-cards
npm run metrics:content
npm run report:gaps
npm run typecheck
```

Run `node scripts/export-website-release.mjs` after route-naming or export-shape changes that could affect downstream website packaging.

## Known Risks / Gotchas

- A path change for the invented-question inventory affects:
  - `App.tsx`
  - `components/QuestionBank.tsx`
  - audit and cleanup scripts
- Export-contract drift can break DataToolkit imports or website release generation even when the app still renders locally.
- `npm run validate:questions` now expects a clean pass. If it fails, treat that as real repository drift rather than a known baseline exception.
- Quote escaping remains the most common failure mode in lesson files.

## Change Notes

- After moving or renaming audit outputs, regenerate them immediately.
- After question-bank edits, rerun `npm run validate:questions` so both repository integrity and lesson-linkage checks stay aligned.
- After route-title, canonical naming, or export-shape changes, recheck both `utils/export.ts` flows and `scripts/export-website-release.mjs`.
- After content edits, prefer the smallest relevant validation command plus `npm run typecheck`.
