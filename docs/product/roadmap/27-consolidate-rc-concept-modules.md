# Consolidate RC Concept Modules

**Purpose:** Define the roadmap bet for consolidating the fragmented Reading Comprehension (RC) concept modules.
**Audience:** Maintainers, content editors, and product contributors.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-20
**Related docs:** [README.md](./README.md), [pathway-map.md](./pathway-map.md)

## User Problem

Currently, the Reading Comprehension curriculum (Modules 23-40) is highly fragmented. There are 18 micro-modules that each focus on a single question type (e.g., Main Idea, Inference, Analogy, Application), but most of these modules only contain two placeholder lessons ("Introduction" and "Step-by-Step Approach"). This fragmentation creates a poor pacing experience for students, as they constantly switch modules without diving deep into thematic skills. It also obscures the interconnected nature of many RC question types.

## Proposed Direction (or Bet)

Cluster the 18 micro-RC concept modules into 3-4 larger, thematic modules based on the core skills required (e.g., "Big Picture & Structure," "Information Retrieval & Inference," "Author & Viewpoints," "Logic & Reasoning"). This will replace the 18 micro-modules with a more structured and coherent learning path that emphasizes the relationships between question types.

## Why Now

The current course catalog clearly shows this structural hole, which weakens the course map. Addressing this fragmentation early improves the curriculum's internal coherence, creating a more robust framework for eventually building out detailed lesson content. It also aligns with the priority of fixing imbalanced lesson coverage.

## Dependencies

- Updating `data/courseCatalog.json` to reflect the new module groupings.
- Refactoring `modules/Module23.tsx` through `Module40.tsx` (and their corresponding directories/files) to match the new structure.
- Ensuring `registry.ts` and related files are updated.

## Open Implementation Risks

- The migration will require carefully merging lesson files and updating module numbering, which could break existing hardcoded links or progress tracking if not handled correctly.
- Renumbering modules will shift the IDs of subsequent modules (e.g., Practice Passages and Advanced Passages), requiring extensive updates across the codebase.

## Likely Upside

- A more cohesive and logical learning experience for students.
- Easier content management and authoring for editors, as related concepts are grouped together.
- A stronger course map that looks substantive rather than a collection of placeholders.

## First Practical Milestone

Draft a mapping document proposing the specific 3-4 new thematic modules and listing which of the current 18 micro-modules belong in each cluster. Validate this grouping with curriculum experts before beginning code migration.
