# Answer Key Drift Verification

**Purpose:** Define the roadmap bet for answer key drift verification.
**Audience:** Maintainers, content editors, and future agents planning course improvements.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-03
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem
Answer keys occasionally drift from their corresponding explanations, resulting in "wrong correct answer" bugs where the option marked as `(Correct)` does not match the actual breakdown of why it's correct. This undermines student trust and causes confusion.

## Proposed Direction
Implement build-time verification checks to ensure that the option explicitly marked with the `(Correct)` suffix strictly aligns with the corresponding rationale in the `breakdown` block. This verifies consistency between the key and the explanation.

## Why Now
We already enforce a strict standard where correct options must end with the `(Correct)` suffix. We can leverage this existing constraint to build an automated, definitive check for answer-key alignment without needing to parse complex natural language.

## Likely Upside
This provides guaranteed content integrity, eliminating a class of frustrating bugs. It leads to stronger offers by increasing the reliability of the course material and reducing support burden caused by confused students.

## First Practical Milestone
Extend the existing validation script (`scripts/validate-questions.mjs`) to include a check that cross-references the `(Correct)` option index with the breakdown text, emitting a warning or error if discrepancies are found.
