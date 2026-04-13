# Release Verification: Answer-Key Drift Prevention

**Purpose:** Prevent mismatches between the designated correct option and the explanation text.
**Audience:** Maintainers, content editors, and future agents planning course improvements.  
**Status:** active
**Source of truth:** yes  
**Last reviewed:** 2026-05-15
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem
Answer keys are determined by a `(Correct)` suffix in the `options` array, but the explanation text is a separate markdown string. During content edits, the `(Correct)` marker can be moved without updating the explanation, leading to a frustrating user experience where the app says one answer is correct while the explanation argues for another.

## Proposed Direction
Implement a semantic verification step during release/validation that cross-references the `(Correct)` option with the explanation text. This will flag instances where the correct answer key has drifted from the stated rationale.

## Why Now
As content is iteratively refined and AI tools or editors restructure options, the structural decoupling of the key and the rationale makes drift highly probable. Catching this before release builds trust with the users and ensures integrity.

## Likely Upside
Prevents frustrating student experiences caused by conflicting correct answers, reducing support requests and increasing confidence in the platform's reliability.

## First Practical Milestone
Enhance `validate-questions.mjs` to extract the correct option string and perform a basic heuristic check against the `explanation` text to flag potential answer-key drift for manual review.