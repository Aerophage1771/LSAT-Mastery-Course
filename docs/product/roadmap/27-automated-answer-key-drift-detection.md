# Automated Answer Key Drift Detection

**Purpose:** Ensure lesson-level answer keys never drift from canonical question-bank truths.
**Audience:** Maintainers, content editors, and validation developers.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-30
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../operations/audits/question-linkage-audit.md](../../operations/audits/question-linkage-audit.md)

## User Problem

- When content editors copy questions into lessons to build targeted drills, they occasionally mis-tag the correct answer or alter option ordering.
- This creates "answer-key drift," where the lesson contradicts the canonical `(Correct)` suffix in the question bank repository.
- Students lose trust in the platform when a lesson tells them they got a question wrong, but the official LSAT PT answer key says otherwise.

## Proposed Direction (The Bet)

- Build an automated validation script (`npm run validate:answer-keys`) that cross-references every `QuestionCard` instance in lessons against the canonical question bank.
- The script will fail the build if a lesson designates a different correct answer or alters the structural meaning of the options without explicit override flags.

## Why Now

- The course is scaling its lesson count and expanding into new question banks (`module49`, `module53`).
- Manual verification of every lesson question during PR review is slow and error-prone.
- Automated linkage auditing (`question-linkage-audit.md`) is already working; extending it to answer keys is a natural, high-leverage next step.

## Dependencies

- Requires stable access to the question bank repositories (`module48`, `module49`, `module53`).
- Requires parsing lesson `.tsx` files to extract `options` props from `QuestionPassageCard` and `QuestionCard` components.

## Risks

- Parsing React component props via regex or AST in Node.js can be brittle if lesson formatting varies.
- False positives if a lesson intentionally modifies a question for instructional purposes (e.g., simplifying options for a beginner drill). We need a mechanism (like a `// @allow-drift` comment) to handle exceptions.

## Likely Upside

- Near-zero risk of publishing a lesson with a mathematically incorrect answer key.
- Massive time savings for content reviewers, shifting focus from typo-hunting to instructional quality.
- Increased student trust in platform reliability.

## First Practical Milestone

- A prototype script that scans just `module48` lessons and flags any answer key mismatches against the `module48` canonical bank, outputting results to a new `answer-key-audit.md` file.