# Staging Workflows for Orphaned and Experimental Questions

**Purpose:** Define the roadmap bet for creating explicit staging workflows for unused, orphaned, or experimental questions.
**Audience:** Maintainers, content editors, and future agents planning course improvements.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-29
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../operations/audits/question-usage-audit.md](../../operations/audits/question-usage-audit.md)

## User Problem
The active question bank repository is currently polluted with unused or experimental questions (the latest audit shows 15 unused questions). This creates duplicate risks, muddies validation logic, and makes it harder for operators to distinguish between production-ready content and work-in-progress or legacy questions.

## Proposed Direction (Bet)
Introduce an explicit `_staging/` or `_drafts/` directory within the question bank modules (e.g., `modules/module48/_staging/`) alongside a dedicated validation exclusion pattern. This directory will house orphaned questions, experimental formats, and content awaiting lesson integration. Validation scripts will be updated to enforce that active lesson routes only reference questions outside of this staging directory.

## Why Now
The recent question usage audit highlighted that 15 questions sit unused in the main database. Without a dedicated staging area, these items present a constant risk of accidental inclusion, ID collisions, or failing CI checks when bulk edits occur. Setting up this workflow now keeps the active database strictly aligned with the live course catalog.

## Likely Upside
This change establishes a strong, reusable boundary between production and draft states. It cleans up the primary question directories, improving operator focus and script performance, while still preserving valuable, unlinked questions for future course expansion without triggering false positives in integrity audits.

## First Practical Milestone
Create a `modules/module48/_staging/` folder, move the 15 currently unused questions into it, and update `scripts/validate-questions.mjs` and `scripts/validate-lesson-question-linkage.mjs` to recognize this directory as valid for storage but invalid for active lesson linkage.
