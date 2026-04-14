# Frontload Conditional Reasoning

**Purpose:** Define the roadmap bet for moving Conditional Reasoning to an early foundational slot in the curriculum.
**Audience:** Maintainers, content editors, and product contributors.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-20
**Related docs:** [README.md](./README.md), [pathway-map.md](./pathway-map.md)

## User Problem

Conditional Reasoning (Module 21) is currently placed at the very end of the Logical Reasoning (LR) section. However, conditional logic is a foundational skill that is an absolute prerequisite for successfully tackling earlier modules, particularly Sufficient Assumption (Module 10), Necessary Assumption (Module 11), Must Be True (Module 17), and Parallel Reasoning (Module 4). Students are currently encountering complex conditional logic problems before they have been formally taught the mechanics of conditional statements.

## Proposed Direction (or Bet)

Relocate Conditional Reasoning from Module 21 to an early slot in the curriculum, ideally before or immediately after Argument Part (Module 1) and Main Conclusion (Module 2). This ensures that foundational logic mechanics (if/then, contrapositives, logical indicators) are mastered before students are asked to apply them to complex argument structures.

## Why Now

The current sequencing creates unnecessary friction and confusion for students tackling assumption and inference questions. Fixing this prerequisite ordering provides an immediate structural win for curriculum coherence, reducing student frustration and improving the pedagogical flow of the entire LR section. It's a high-impact structural change that clarifies the learning path.

## Dependencies

- Updating `data/courseCatalog.json` to reflect the new module ordering.
- Refactoring the module definition files (`modules/Module[Number].tsx`) and renumbering lesson directories to maintain consistent ID schemes.
- Updating `registry.ts` and references in validation scripts or audits.

## Open Implementation Risks

- Renumbering modules is a highly disruptive change across the codebase. Shifting Module 21 to an early position (e.g., Module 3) will require cascading updates to the IDs and filenames of Modules 3 through 20.
- Hardcoded module links, drill cross-references, or saved user progress tied to module IDs might break during the migration.

## Likely Upside

- Drastically improved pedagogical sequencing; students learn the rules before playing the game.
- Reduced student confusion in assumption and inference modules.
- A more logical and defensible curriculum structure.

## First Practical Milestone

Draft a complete, revised module sequence for the Logical Reasoning section (Modules 1-22). Audit the codebase to identify all locations (files, scripts, utilities) that rely on hardcoded module IDs to scope the technical effort required for the shift.
