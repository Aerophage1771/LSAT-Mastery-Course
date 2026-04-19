# Answer-Key Drift Prevention

**Purpose:** Define the roadmap bet for protecting answer keys when PrepTest (PT) questions are shared across different lessons or environments.
**Audience:** Maintainers, content editors, and validation engineers planning course reliability.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-29
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem
When the same LSAT question appears in multiple lessons (e.g., as an early illustrative example and later in a full drill), local edits to the answer key in one instance do not automatically propagate to the other. This creates a risk of conflicting "correct" answers or corrupted formatting if maintainers only update the copy they are actively looking at. Students experience this as untrustworthy grading.

## Proposed Direction
Introduce an automated answer-key drift detection step into the validation pipeline (`npm run validate:questions`). The script will scan all instances of the same `PT-` ID across the repository and assert that the exact string array of options—including the `(Correct)` marker—matches perfectly across all instances. If a discrepancy is found, the build or commit fails with a clear diff.

## Why Now
The question-bank repositories currently map many PTs, and recent usage audits show increasing linkage complexity as more lessons draw from the central pools. Without automated enforcement, human reviewers will inevitably miss isolated key edits as the content catalog scales.

## Dependencies
- The existing question ID parser (`scripts/lib/questionIds.mjs`) needs to extract the `options` array from the AST of the `.tsx` files.
- The validation scripts must be updated to compare parsed options across identical IDs.

## Risks
- False positives if spacing or minor Markdown formatting (e.g., `*` vs `_`) differ harmlessly between copies. The comparison logic needs to strip or normalize whitespace and basic styling before comparing.
- Slower validation runtimes if the AST parser has to do a deep equality check on every single card block.

## Likely Upside
- Absolute confidence that the answer key is identical everywhere a specific question is taught.
- Forces maintainers to canonicalize formatting instead of relying on bespoke local hacks.
- Lays the groundwork for eventually generating a single true JSON source file for answer keys instead of inline definitions.

## First Practical Milestone
Update `scripts/validate-questions.mjs` to log a warning (not fail) when two questions with the same `-Q-` ID have differing option arrays. This will provide a baseline audit of existing drift without breaking current workflows.
