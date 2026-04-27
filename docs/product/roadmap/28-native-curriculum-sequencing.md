# Native Curriculum Sequencing and Route Map Unification

**Purpose:** Define the roadmap bet for deprecating the legacy route-to-content remap table and aligning the curriculum's physical file structure with its user-facing sequence.
**Audience:** Engineers, maintainers, and product contributors managing route stability and export pipelines.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-05-15
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/architecture.md](../../technical/architecture.md), [../course-experience.md](../course-experience.md)

## User Problem

The application currently relies on a legacy remap table (`ROUTE_TO_CONTENT_MODULE_ID` in `utils/courseCatalog.ts`) to bridge the gap between user-facing route IDs and physical content module IDs (e.g., route 22 maps to content 55, routes 24-50 map to 21-47). This creates significant operational friction. Engineers and content editors constantly have to translate between "route module" and "source module" when debugging, writing validation scripts, or deep-linking. This structural hole weakens the course map and increases the risk of linkage errors during updates.

## Proposed Direction (The Bet)

We propose entirely deprecating the remap table and physically renaming/moving the content module directories (`modules/moduleN/` and `ModuleN.tsx`) to natively match their canonical route IDs. The file system structure will become the single source of truth for course sequencing, eliminating the need for runtime translation.

## Why Now

As we move toward stronger export workflows and DataToolkit integration (bets 15 and 26), maintaining two divergent numbering systems adds unacceptable complexity to serialization and handoffs. The recent addition of Module 10 (Causal Reasoning) directly into the LR sequence demonstrated that we can handle sequence insertions. Unifying the map now prevents the technical debt of the remap table from infecting new features like progress milestones or practice set assembly tools.

## Dependencies

- All active development branches must be merged or paused to avoid massive merge conflicts during the directory renaming phase.
- Validation scripts (`validate-questions.mjs`, `validate-lesson-question-linkage.mjs`) must be updated to ensure they no longer rely on the old `ROUTE_TO_CONTENT_MODULE_ID` logic.
- Course catalog definitions (`data/courseCatalog.json`) must be audited to ensure they align perfectly with the new physical paths.

## Risks

- **Deep-Link Breakage:** External documentation or bookmarks pointing to physical source files (or expecting the old route mapping) will break.
- **Audit Script Failures:** If validation scripts have hardcoded source IDs instead of dynamic route resolution, they will fail and require patching.

## Likely Upside

- **Operator Speed:** Content editors and engineers will no longer need a mental translation table to find the file corresponding to a live route.
- **System Reliability:** Removing the runtime remap logic eliminates a class of bugs related to incorrect ID translation in exports or local progress storage.
- **Simplified Tooling:** Validation, auditing, and packaging scripts become simpler and faster to maintain when path == route.

## First Practical Milestone

Execute a dry-run script that generates the `mv` commands to align physical folders with route IDs, and run the project's test suite against the simulated structure to identify hardcoded breakages before committing the change.
