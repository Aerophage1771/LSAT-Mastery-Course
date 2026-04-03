# Recurring Maintenance

**Purpose:** Capture the repeatable maintenance tasks that keep content truth, audits, and docs aligned.  
**Audience:** Maintainers and agents doing repo hygiene or release-prep work.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-04-03  
**Related docs:** [content-operations.md](./content-operations.md), [audits/README.md](./audits/README.md), [../product/roadmap/06-analytics-and-signals.md](../product/roadmap/06-analytics-and-signals.md)

## Regular Checks

- After lesson 1-3 edits:
  - `npm run inventory:invented`
  - `npm run typecheck`
- After drill or question-bank edits:
  - `npm run validate:questions`
  - `npm run typecheck`
- After LR lesson card or title changes:
  - `npm run audit:lr-cards`
- After route naming or export-contract changes:
  - `node scripts/export-website-release.mjs`
  - `npm run typecheck`

## Docs Hygiene

- Keep README, AGENTS, and `docs/README.md` aligned.
- Keep the standalone curriculum-reference role and export-source-of-truth language aligned across README, technical docs, and operations docs.
- Keep `docs/product/course-experience.md` limited to live behavior and `docs/product/roadmap/` limited to planned work.
- Move dated plans and brainstorms to `docs/archive/` instead of leaving them at active entrypoints.
- When an active doc becomes obsolete, archive it with a historical header and a note about what replaced it.

## When To Regenerate Audits

- content policy changes
- question-card additions or removals
- route-title or lesson-title changes
- question-bank source updates
- script path changes affecting generated docs

## Non-Goals

- Do not "green up" unrelated validation noise unless that is the task.
- Do not treat generated audit docs as long-form product documentation.
