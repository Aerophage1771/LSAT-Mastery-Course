# Content Hash Collision Detection

**Purpose:** Define the roadmap bet for automated duplicate detection and ID integrity in the question bank.
**Audience:** Maintainers, content editors, and operators importing questions.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-18
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem

- Question IDs are currently manually tracked and can become fragmented or duplicated during import processes. Duplicate entries mean scattered progress, split analytics, and an undermined single-source-of-truth.
- When new content is ingested into the repositories (`module48`, `module49`, `module53`), identical questions or passages might get assigned differing IDs (`PT-XXX-S-Y-Q-ZZ`), creating invisible duplicates that audit scripts cannot catch because they only look at ID strings.

## Proposed Direction

- Implement an automated content-hashing system that normalizes text (stripping whitespace, basic punctuation, and casing) for question stems, options, and passages.
- Compute a lightweight hash signature for each content block during ingestion and validation.
- Flag hash collisions across different IDs as suspected duplicates for operator review, preventing ID fragmentation.

## Why Now

- As the question bank expands with new curriculum and special sourcing, manual duplicate detection is slow and error-prone.
- The `npm run validate:questions` script already parses content and could easily integrate a hashing step, preventing duplication before it reaches live routes.

## Dependencies

- The existing question bank validation scripts in `scripts/`.
- Clear rules for text normalization to avoid false negatives on minor formatting diffs.

## Risks

- False positives if different questions have identical stems or options (though rare in full combinations).
- False negatives if formatting or OCR errors drastically change the text.

## Likely Upside

- Massive operator leverage: editors no longer need to manually spot-check for duplicates.
- Higher student trust: prevents encountering the same question under different IDs in practice sets.
- Stronger foundation for downstream features like study modes and mistake journals.

## First Practical Milestone

- Add a basic exact-match or simple-normalized hash check to `validate-questions.mjs` that outputs a "Suspicious Duplicates" section in the content metrics report if collisions are found.
