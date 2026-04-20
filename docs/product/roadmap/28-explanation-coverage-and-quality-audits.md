# Explanation Coverage and Quality Audits

**Purpose:** Implement a systematic way to measure and enforce explanation coverage across all active questions.
**Audience:** Maintainers, content editors, and course designers.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-30
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [14-explanation-depth-and-rationale-patterns.md](./14-explanation-depth-and-rationale-patterns.md)

## User Problem

- While we track question usage (`question-usage-audit.md`), we do not track whether those used questions actually have explanations written for them.
- Students frequently encounter "Explanation coming soon" placeholders, which degrades the learning experience, especially for difficult LR questions.
- Maintainers lack visibility into which modules or question types have the largest explanation coverage gaps.

## Proposed Direction (The Bet)

- Introduce an "Explanation Coverage Audit" script that scans the question bank and lesson files to calculate the percentage of used questions that have non-empty, non-placeholder explanations.
- Integrate this metric into the existing `npm run metrics:content` workflow.
- Define a quality baseline (e.g., explanations must explain both why the correct answer is right and why at least two attractive trap answers are wrong).

## Why Now

- The platform's value proposition is shifting from just providing questions to providing superior pedagogical breakdowns.
- As the total question volume grows, manual tracking of what needs an explanation is no longer feasible.
- We need a quantitative metric to prioritize content editor bandwidth.

## Dependencies

- Requires standardizing the structure of explanations in the question bank (e.g., ensuring they aren't just buried in unstructured markdown).
- Extends the existing `content-metrics.json` output format.

## Risks

- "Coverage" does not guarantee "Quality". A script might count a one-sentence explanation as "covered," masking poor content.
- Content editors might feel pressured to write rushed explanations just to satisfy the audit script.

## Likely Upside

- Clear, actionable punch-lists for content teams ("Module 12 needs 15 explanations to reach 100% coverage").
- Strategic visibility into which course sections are fully mature versus still in draft phases.
- Direct improvement in student satisfaction and reduction in support requests asking for explanations.

## First Practical Milestone

- Update `validate-questions.mjs` to check for an `explanation` field or corresponding explanation file for every used ID, and output a coverage percentage per module to `content-metrics.md`.