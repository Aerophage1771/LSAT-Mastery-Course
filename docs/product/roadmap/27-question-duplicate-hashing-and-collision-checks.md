# Question Duplicate Hashing and Collision Checks

**Purpose:** Provide an automated defense against semantic duplicates and copy-paste errors in the question bank.
**Audience:** Content operators and maintainers.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-29
**Related docs:** [README.md](./README.md), [pathway-map.md](./pathway-map.md)

## User Problem
As the question bank grows and spans multiple modules and files, content editors risk copy-pasting existing questions into new files without realizing it. Even if PT IDs differ due to typos or mislabeling, the underlying text might be identical, leading to duplicate practice questions in the curriculum. Current validation scripts check for duplicate IDs but cannot detect if two different IDs contain identical question text, passages, or options.

## Proposed Direction
Implement semantic hashing or strict similarity checks during validation. Create a new validation script (e.g., `validate-duplicate-content.mjs`) that strips whitespace, ignores minor markdown variations, and generates a hash for each question's body, options, and passage. If a collision is detected across different question IDs, the script will flag the duplicate.

## Why Now
As we scale the course and rely on operators integrating external sources or expanding the database, manual review for duplicates becomes impossible. Establishing an automated defense against content duplication now prevents technical debt and student confusion down the line.

## Dependencies
- The current validation scripts (`scripts/lib/registeredLessons.mjs`) provide a solid foundation for iterating through all active content.
- Requires Node's built-in `crypto` module for stable content hashing.

## Risks
- False positives: Two questions might be very similar but legitimately distinct (e.g., identical passages but different questions). The hash must be scoped appropriately (e.g., combining passage, question text, and options).
- Performance overhead during validation loops, though unlikely to be a bottleneck for a static set of a few thousand questions.

## Likely Upside
- Eliminates the silent accumulation of duplicate content.
- Improves trust in the uniqueness of the question bank.
- Reduces operator anxiety when importing large sets of questions.

## First Practical Milestone
- Create `scripts/validate-question-uniqueness.mjs` that generates SHA-256 hashes of normalized question JSON objects and fails if two different IDs share the exact same hash, running it as part of `npm run metrics:content`.