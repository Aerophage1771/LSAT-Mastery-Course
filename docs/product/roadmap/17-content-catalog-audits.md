# Content Catalog Audits: Cross-Module Validation

**Purpose:** Unify question-bank validation across all modules to eliminate blind spots in content integrity.
**Audience:** Maintainers, content editors, and future agents planning course improvements.  
**Status:** active
**Source of truth:** yes  
**Last reviewed:** 2026-05-15
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem
Validation scripts currently hardcode `module48` (LR) for repository integrity checks, silently skipping `module49` (RC) and `module53` (Advanced RC). This creates a blind spot where cross-module duplicates, missing ID components, and broken links can silently break the course experience without failing CI checks.

## Proposed Direction
Generalize existing validation scripts (`validate-questions.mjs` and `validate-lesson-question-linkage.mjs`) to dynamically map across all declared `QUESTION_BANK_MODULE_DIRS` rather than hardcoding `module48`.

## Why Now
The course already relies heavily on `module48`, `module49`, and `module53`. As the question bank scales, the risk of undetected ID duplication, missing question components, and cross-type content drift grows exponentially.

## Likely Upside
Absolute integrity of question IDs and linkage across the entire app. It enforces the single-source-of-truth rule globally, reducing "missing ID" crashes in lessons and preventing duplicate PT-backed entries across different module directories.

## First Practical Milestone
Update `validate-questions.mjs` to dynamically load and validate all `.tsx` files in `module48`, `module49`, and `module53`, rather than just `module48`.