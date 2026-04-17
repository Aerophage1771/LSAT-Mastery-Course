# Explanation Coverage and Key Drift Tracking

**Purpose:** Define the roadmap bet for tracking explanation depth and answer-key consistency across the question bank.
**Audience:** Maintainers, content editors, and operators analyzing question quality.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-18
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem

- Explanation depth varies significantly across the question bank (from missing entirely to detailed breakdowns).
- High-risk modules (e.g., Logic Games equivalents or deeply nuanced Logical Reasoning) may lack the deep rationale necessary for student mastery, leaving learners stuck without sufficient guidance.
- Answer keys can subtly drift or contain errors during imports, and there is no automated tracking of how often the correct option index changes or lacks accompanying explanation updates.

## Proposed Direction

- Introduce automated coverage metrics for explanations within the validation scripts, categorizing them (e.g., "missing", "brief", "detailed" based on word count/structure).
- Implement tracking for "Answer Key Drift"—recording the historical `(Correct)` suffix position for each ID to flag unexpected changes in subsequent PRs or imports.
- Feed these metrics into an "Explanation Coverage Gap Report" specific to high-risk modules, creating a targeted editorial queue.

## Why Now

- As the course matures, value shifts from simply having questions to having *high-quality* questions. Explanation depth is a key differentiator.
- Manual reviews of 100+ questions for explanation quality are unsustainable; systemic tracking points editors directly to the highest-leverage gaps.

## Dependencies

- The `npm run metrics:content` script needs to be expanded to parse and evaluate the `explanation` field of question cards.
- A mechanism (potentially a lightweight historical index or diff-checker) to track answer key changes over time.

## Risks

- Defining "detailed" vs. "brief" explanations purely by length may miss nuances in quality (a concise explanation can be excellent).
- Over-alerting on intentional answer key corrections if the drift tracking is too noisy.

## Likely Upside

- A more consistent and reliable learning experience for students, directly tied to the product's core value proposition.
- Better editorial resource allocation by prioritizing deep reviews on high-risk modules with the thinnest explanations.
- Increased confidence in the integrity of the question bank during major content imports.

## First Practical Milestone

- Add a basic "Explanation Status" (missing vs. present) metric to the `content-metrics.md` report via the validation scripts, highlighting high-risk modules with low coverage.
