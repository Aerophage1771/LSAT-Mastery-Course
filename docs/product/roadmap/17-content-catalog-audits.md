# Cross-Module Duplication Radar (formerly Content Catalog Audits)

**Purpose:** Define the roadmap bet for cross-module duplication radar.
**Audience:** Maintainers, content editors, and future agents planning course improvements.  
**Status:** draft  
**Source of truth:** yes  
**Last reviewed:** 2026-04-03
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem
Relying solely on brittle PT ID matching to detect duplicate questions is error-prone. It misses semantic duplicates where the same question or passage text might be introduced under slightly different IDs or formatting, leading to redundant effort and a bloated question bank.

## Proposed Direction
Implement a "Cross-Module Duplication Radar" that uses hashing on normalized question and passage text. By stripping formatting and comparing hashes, we can definitively detect semantic duplicates across all modules (`module48`, `module49`, `module53`), regardless of minor ID or markup variations.

## Why Now
As we expand into more complex Reading Comprehension (RC) modules (`module49`, `module53`), the risk of accidentally duplicating passages or associated questions increases. This provides a necessary safeguard to maintain content uniqueness as the repository grows.

## Likely Upside
This provides a reusable, robust system to prevent content overlap. It guarantees content integrity, reduces the maintenance burden of a bloated bank, and ensures a streamlined experience for operators when managing the curriculum.

## First Practical Milestone
Write a script that extracts, normalizes, and hashes the core text of all questions and passages in `module48`, `module49`, and `module53`. Output a report of any hash collisions to identify existing semantic duplicates.
