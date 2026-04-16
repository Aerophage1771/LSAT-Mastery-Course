# Answer Key Drift and Version Locking

**Purpose:** Prevent accidental changes to canonical answer keys by introducing a strict lockfile mechanism.
**Audience:** Content operators and maintainers.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-29
**Related docs:** [README.md](./README.md), [pathway-map.md](./pathway-map.md)

## User Problem
The correct answer for a question is currently indicated by a `(Correct)` suffix in the `options` array within the question files. While simple, this approach means that routine typo fixes, formatting adjustments, or accidental edits can inadvertently shift or erase the correct answer. There is no automated safety net to alert an operator if an answer key drifts during a large-scale content update.

## Proposed Direction
Introduce an `answer-keys.lock.json` file that maps every question ID to its canonical correct answer index or text hash. Update the validation scripts to strictly verify that the current `(Correct)` suffix in the question bank matches the locked state. Require intentional command flags (e.g., `npm run update-answer-keys`) to modify the lockfile.

## Why Now
As we aim to build absolute trust in the export formats and offline reliability, any doubt regarding answer key integrity severely undermines the product's value. Locking answer keys early provides peace of mind for operators performing sweeping text or style-guide updates across the curriculum.

## Dependencies
- Must integrate cleanly with existing validation loops in `scripts/validate-questions.mjs`.
- Needs operator documentation on how to intentionally update the lockfile when a genuine key correction is required.

## Risks
- Adds friction for legitimate content fixes if the operator forgets to run the update command.
- The lockfile could become a merge conflict hotspot if many files are updated concurrently, requiring careful handling or ID-based sorting.

## Likely Upside
- Absolute assurance that refactoring, formatting, or parsing logic changes will not alter student-facing correctness.
- Creates a central, scannable index of all answer keys separate from the verbose question text.

## First Practical Milestone
- Generate an initial `docs/operations/answer-keys.lock.json` based on the current valid question bank, and add a flag in `validate-questions.mjs` to compare the live files against the lockfile.