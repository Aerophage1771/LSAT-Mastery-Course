# Semantic Duplication and Collision Prevention

**Purpose:** Prevent the same logical question from appearing multiple times under different IDs or slight text variations.
**Audience:** Maintainers, content editors, and repository architects.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-30
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [22-canonical-naming-enforcement.md](./22-canonical-naming-enforcement.md)

## User Problem

- As the question bank expands across multiple repositories (`module48`, `module49`, `module53`), the risk of accidentally importing the exact same PrepTest question twice under slightly different IDs or formatting increases.
- Duplicate questions corrupt spaced-repetition algorithms, inflate study statistics, and confuse students who feel they are seeing repeats.
- Manual reviews cannot reliably catch a duplicate question if it was added months apart by different editors.

## Proposed Direction (The Bet)

- Implement a content-hashing validation script (`npm run validate:duplicates`) that strips formatting, punctuation, and minor variations from question text and option text, generating a semantic hash.
- Compare these hashes across the entire canonical question bank to detect collisions (highly similar or identical text).
- Fail the build if a new question is added that has a >95% similarity score to an existing question without explicit linkage.

## Why Now

- We are actively merging external sources and expanding into advanced RC modules. The surface area for duplicate ingestion is at its peak.
- Cleaning up duplicates retroactively is painful because it breaks existing user progress records tied to the duplicated IDs. We must catch them at the PR stage.

## Dependencies

- Requires an algorithmic approach to text similarity (e.g., Levenshtein distance, MinHash, or simple normalized string comparison) implemented in a lightweight Node.js script.
- Needs to integrate into the standard `npm run validate:questions` pipeline.

## Risks

- False positives: LSAT questions often use boilerplate phrasing (e.g., "Which one of the following, if true, most weakens the argument?"). The hashing must be smart enough to focus on the stimulus and specific option text, not the generic question stem.
- Performance: Comparing thousands of questions against each other can be $O(N^2)$. The script needs optimization (e.g., only comparing new changes against the existing hashed index) to keep CI times low.

## Likely Upside

- Absolute confidence in the mathematical integrity of the question bank. Every ID represents a unique, distinct problem.
- Clean user analytics and progress tracking.
- Prevents wasted editor effort annotating or explaining a question that already exists elsewhere.

## First Practical Milestone

- A script that normalizes and hashes the `stimulus` text of all questions in `module48`, generating a report of any existing collisions or near-collisions for manual review.