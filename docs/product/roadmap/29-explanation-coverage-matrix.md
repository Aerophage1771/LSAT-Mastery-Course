# Explanation Coverage Matrix

**Purpose:** Define the roadmap bet for tracking and enforcing explanation depth across the question banks.
**Audience:** Maintainers, content editors, and validation engineers planning course reliability.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-29
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem
While the repository tracks which questions are used where, it has no visibility into the *quality* or *completeness* of the explanations attached to those questions. Some questions have deep, multi-paragraph rationales for every wrong answer, while others only reveal the correct letter. Students hitting a shallow explanation lose trust in the platform's utility as a learning tool.

## Proposed Direction
Generate a coverage matrix during the `metrics:content` run that audits the explanation text block associated with every registered question card. The system will categorize explanation depth (e.g., None, Minimal, Full Options) based on word count and the presence of option-specific breakdowns (e.g., parsing for `A)`, `B)`, etc.). This matrix will be exported alongside the usage audits.

## Why Now
With the baseline question mapping (usage and linkage) stable, the next operational bottleneck is content quality. Maintainers need a way to prioritize which lessons to edit next. A coverage matrix turns "make explanations better" into a quantifiable burndown chart.

## Dependencies
- The AST parser needs to extract the `explanation` prop from `QuestionCard` components.
- The `content-metrics.mjs` script needs to be extended to aggregate and score these explanation lengths.

## Risks
- Word count is an imperfect proxy for quality. A verbose, confusing explanation might score higher than a terse, brilliant one. The tool must be framed as a coverage detector, not a definitive quality grader.
- Parsing custom Markdown structures inside explanation blocks can be brittle if maintainers use inconsistent formatting for option breakdowns.

## Likely Upside
- Instantly identifies the lowest-quality areas of the curriculum for targeted sprints.
- Creates a measurable quality metric that can be tracked over time as the repository improves.
- Provides a clear definition of "done" when writing new question cards (e.g., "must meet the 'Full Options' structural criteria").

## First Practical Milestone
Extend `scripts/lib/questionIds.mjs` to measure the character length of the `explanation` string for every parsed question. Output a top-10 list of "shortest explanations" during the validation run to immediately highlight the most egregious gaps.
