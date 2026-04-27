# Question Similarity Deduplication

**Purpose:** Define the roadmap bet for catching duplicate question content when IDs or formatting obscure the match.
**Audience:** Maintainers, content editors, and validation engineers planning course reliability.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-29
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem
Maintainers occasionally transcribe the same real LSAT question from a different source or format, assigning it a new or invented ID if the PT origin is lost. This leads to duplicate questions in the repository that bypass ID-based collision checks. Students end up practicing the exact same logical scenario twice, assuming it is distinct material.

## Proposed Direction
Implement a text-similarity hashing or embedding check as part of the content build or validation pipeline. By normalizing question text (removing punctuation, lowercasing, and stripping markdown) and comparing it against a repository-wide index, the system can flag likely duplicates. We would define a high threshold (e.g., 90%+ similarity) to catch near-identical text blocks even if the `PT-` IDs or inline whitespace vary.

## Why Now
As the course expands to include more advanced modules and special source integrations, the sheer volume of text makes human recall impossible. The usage audits track IDs well, but they are blind to the underlying text. Catching these early prevents bloated modules and preserves the value of distinct practice.

## Dependencies
- A lightweight text comparison utility (e.g., Levenshtein distance, Jaccard similarity, or basic tf-idf) that can run in the Node.js validation environment without heavy external ML dependencies.
- The existing AST parser needs to extract the raw text content of `question` and `passage` blocks, not just their IDs.

## Risks
- False positives on questions with highly formulaic structures (e.g., "Which one of the following, if true, most strengthens the argument?"). The similarity check must focus heavily on the stimulus/passage text rather than just the question stem.
- Performance overhead during CI/CD if comparing thousands of strings quadratically.

## Likely Upside
- Automates the discovery of hidden duplicates, reducing technical debt in the content library.
- Ensures the metrics reports accurately reflect unique learning scenarios rather than inflated copy-paste counts.
- Improves operator leverage by pointing directly to redundant files for cleanup.

## First Practical Milestone
Write a standalone utility script (`scripts/find-similar-questions.mjs`) that extracts stimulus text, hashes it (after normalization), and logs any pairs that collide or meet a very simple Jaccard index threshold. This runs manually, outside the main CI path, to gauge the current scope of the problem.
