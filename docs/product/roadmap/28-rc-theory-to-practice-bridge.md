# RC Theory to Practice Bridge

**Purpose:** Define the roadmap bet for integrating practice passage questions into RC concept modules.
**Audience:** Maintainers, content editors, and product contributors.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-20
**Related docs:** [README.md](./README.md), [pathway-map.md](./pathway-map.md)

## User Problem

The Reading Comprehension curriculum separates conceptual lessons (Modules 23-40) from practical application (Modules 41-48, RC Practice Passages). Currently, a student learns about "RC: Inference" or "RC: Main Idea" in isolation, and only encounters real LSAT passage questions later in the practice passage modules. This creates a gap in learning: students aren't given the opportunity to immediately apply specific conceptual strategies to actual questions right after learning them.

## Proposed Direction (or Bet)

Build a "Theory to Practice Bridge" by cross-referencing and surfacing relevant drill questions from the Practice Passages (Modules 41-48) directly within the RC Concept Modules. For example, the lesson on "RC: Main Idea" would dynamically pull in or explicitly link to Main Idea questions from Practice Passages 1-8. This transforms theoretical modules into interactive, applied learning experiences.

## Why Now

The existing curriculum map highlights a clear divide between theory and practice. By closing this gap, we significantly increase the immediate value of the concept modules, moving them from passive reading to active practice, which is a core tenet of effective LSAT study. This bet utilizes existing content (the practice passage questions) in new ways, providing high leverage without requiring net-new question creation.

## Dependencies

- A mechanism (likely leveraging `drillCrossReferences.ts` or a new utility) to identify and group questions by type (e.g., all "Main Idea" questions) across the practice passages.
- UI components in the lesson views to display cross-referenced questions or links to them.

## Open Implementation Risks

- Pulling questions from passages into isolated concept drills might remove necessary context (the passage itself). We must ensure the passage text is accessible when presenting a question out of its original module.
- Maintaining clear progression state if a student answers a practice question within a concept module vs. within its original practice passage module.

## Likely Upside

- Immediate reinforcement of concepts through real practice.
- Increased student engagement and retention of strategies.
- A more dynamic curriculum that leverages existing content to create new learning pathways.

## First Practical Milestone

Implement a proof-of-concept in a single RC concept module (e.g., "RC: Main Idea"). Update the module to include a "Practice Drills" section that dynamically links to 2-3 Main Idea questions sourced from the existing Practice Passage modules.
