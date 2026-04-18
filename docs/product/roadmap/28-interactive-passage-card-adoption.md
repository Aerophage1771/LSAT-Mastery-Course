# Interactive Passage Card Adoption

**Purpose:** Define the roadmap bet for adopting structured components in Reading Comprehension content.
**Audience:** Maintainers, content editors, and future agents planning course improvements.
**Status:** active
**Source of truth:** yes
**Last reviewed:** 2026-03-29
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem

- Content metrics reveal that the curriculum currently has `0 Passage Cards` and `0 Question-Passage Cards`.
- RC passages and their associated questions are currently rendered using raw markdown/prose rather than the interactive, structured components successfully utilized in LR.
- This prevents RC content from participating in interactive study loops, automated performance tracking, and granular structural audits.

## Proposed Direction (The Bet)

- Migrate existing RC passage and question content from raw markdown to the structured `<PassageCard>` and `<QuestionPassageCard>` components.
- Ensure all RC content is parseable by the repository's existing validation scripts (`npm run metrics:content`, `npm run validate:questions`).
- Establish component-based rendering as the strict standard for all new RC content.

## Why Now

- The structural foundation (the React components themselves) already exists and is proven in other areas of the application.
- Continuing to build RC out in raw markdown increases the technical debt and content-drift risk as the curriculum grows.
- Aligning RC with LR's component architecture satisfies the vision filter directive to "Reduce question-integrity or content-drift risk."

## Likely Upside

- Unlocks RC for future inclusion in automated review queues, study modes, and learning analytics.
- Significantly improves export reliability and validation coverage for the RC curriculum.
- Creates a unified, predictable authoring experience for content editors across all disciplines.

## First Practical Milestone

- Refactor the first three `RC Practice Passage` modules to utilize `<PassageCard>` and `<QuestionPassageCard>` components, ensuring they pass all existing linkage and validation audits.
