# Cross-Module Duplication Prevention

**Purpose:** Define a forward-looking bet to eliminate cross-module question duplication risk and answer-key drift in the question banks.
**Audience:** Maintainers, content editors, and product strategists.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-18
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem

As the curriculum expands and more modules draw from the same universe of LSAT PT questions, the risk of duplicating a question across multiple question-bank repositories (`module48`, `module49`, `module53`) increases. If a question is duplicated, fixes to an answer key or explanation in one place might not propagate to the duplicate, leading to answer-key drift and student confusion. The current validation scripts verify linkage and usage, but we need systematic prevention of the same PT ID being defined multiple times or drifting in content.

## Proposed Direction (The Bet)

Implement a centralized "Question Registry" or enhanced validation stage that strictly enforces global uniqueness of PT IDs (`-Q-`) across all question-bank repositories. Instead of allowing duplicates, the system will enforce a "define once, reference anywhere" architecture. If a lesson in Module X needs a question native to Module Y, it will reference Module Y's PT ID.

## Why Now

The course currently relies heavily on PT-backed questions for Lessons 4+. As we begin sourcing more specialized question banks or adding advanced modules, the surface area for duplication grows. Solving this now prevents a future maintenance nightmare of reconciling conflicting answer keys across duplicate question cards.

## Dependencies

- Existing validation scripts (`validate-questions.mjs`) must be expanded to build a global index of all defined PT IDs before checking linkage.
- Any existing duplicates must be identified and merged.
- Cross-module referencing logic in the `QuestionBank` and lesson components must be robust enough to load questions from a different module's JSON if referenced.

## Likely Upside

- **Zero Answer-Key Drift:** A question exists in exactly one place. Fixing a typo or updating an explanation instantly benefits every lesson that references it.
- **Improved Audit Reliability:** The `question-usage-audit.md` will accurately reflect true global usage rather than module-siloed usage.
- **Operator Leverage:** Content editors never have to wonder "which version of PT-107-S-4-Q-15 is the correct one to edit?"

## First Practical Milestone

Expand `npm run validate:questions` to cross-check all parsed question IDs across `module48`, `module49`, and `module53`, failing the build if the same PT ID is found in more than one module.
