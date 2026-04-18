# Explanation Coverage and Quality Audit

**Purpose:** Define a forward-looking bet to identify and eliminate gaps in explanation coverage for questions in the question banks.
**Audience:** Maintainers, content editors, and product strategists.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-18
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [14-explanation-depth-and-rationale-patterns.md](./14-explanation-depth-and-rationale-patterns.md)

## User Problem

Students rely on rich, detailed explanations to learn from their mistakes. Currently, while we track which questions are used (`question-usage-audit.md`), we do not have a systematic way to audit the *quality* or *existence* of explanations for every answer choice. A question might have a correct answer key but lack the critical explanation of why the distractor choices are wrong, leaving value on the table and creating a frustrating student experience.

## Proposed Direction (The Bet)

Introduce an "Explanation Coverage Audit" into the operational metrics pipeline. This system will parse every question card in the active repositories and verify that:
1. An overarching explanation exists for the question.
2. Explanations exist for the correct answer.
3. Explanations exist for the key distractor answers (or ideally, all options).

We will generate an `explanation-coverage-audit.md` report that flags questions with missing or insufficiently detailed explanations, turning vague "improve explanations" goals into a prioritized checklist for content editors.

## Why Now

As the question bank grows (currently 126 questions, 111 in use), manually checking explanation quality becomes impossible. Bet `14-explanation-depth-and-rationale-patterns.md` focuses on the *depth* and *patterns* of explanations; this bet provides the *operational leverage* (the audit and tracking system) necessary to actually execute and measure that improvement across the entire repository. We need to know *where* the gaps are before we can fill them.

## Dependencies

- The markdown parsing logic in our validation scripts (e.g., `validate-questions.mjs`) must be enhanced to identify explanation blocks (e.g., `(Explanation)` tags or specific markdown structures) within question cards.
- A new threshold must be defined for what constitutes "sufficient" coverage (e.g., character count, presence of specific sections).

## Likely Upside

- **Targeted Content Improvement:** Content editors can directly attack the highest-value gaps (frequently used questions with poor explanations) rather than guessing where to spend their time.
- **Measurable Quality:** We can track "Explanation Coverage %" as a top-level repository health metric alongside linkage and usage.
- **Better Student Outcomes:** Ensuring every used question has a robust explanation directly improves the self-study loop.

## First Practical Milestone

Create a basic script (`npm run audit:explanations`) that parses all `module48`, `module49`, and `module53` questions and outputs a list of PT IDs that entirely lack an explanation block.
