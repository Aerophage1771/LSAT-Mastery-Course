# Audit Reports

**Purpose:** Index the generated audit and validation reports checked into the repo.  
**Audience:** Maintainers who need repo diagnostics without reading the generator scripts first.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [../content-operations.md](../content-operations.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md), [../../product/roadmap/06-analytics-and-signals.md](../../product/roadmap/06-analytics-and-signals.md)

## Generated Files

- `invented-questions-inventory.json`
  - machine-readable inventory of invented `question-card` content
- `invented-questions-inventory.md`
  - readable markdown report for the same inventory
- `question-usage-audit.md`
  - question-bank usage and missing-id summary
- `question-linkage-audit.md`
  - lesson/PT linkage audit
- `lr-card-requirements-audit.md`
  - LR lesson card presence and title audit

## Generators

- `npm run inventory:invented`
- `npm run validate:questions`
- `npm run audit:lr-cards`

## Rules

- Do not hand-edit generated report bodies unless you are changing the generator itself.
- If a report path changes, update all scripts and runtime imports before regenerating.
- Use these reports as diagnostics and planning signals, not as substitutes for live product or architecture docs.
