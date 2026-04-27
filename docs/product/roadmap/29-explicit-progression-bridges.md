# Explicit Progression Bridges Between Core and Advanced Tracks

**Purpose:** Define the roadmap bet for resolving the awkward clustering of Advanced RC modules and explicitly bridging the core and advanced tracks.
**Audience:** Curriculum designers, content editors, and product maintainers defining study pathways.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-05-15
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../course-content-map.md](../course-content-map.md), [../course-experience.md](../course-experience.md)

## User Problem

Currently, Advanced RC modules (routes 51-57) sit isolated at the end of the course map. The downstream platform rule dictates that "advanced RC is folded into RC," yet in the repository curriculum, these modules function as a separate, awkwardly clustered block. There is no explicit pedagogical bridge indicating *when* a student should transition from core RC practice to Advanced RC passages, nor how the methodologies taught in the core track apply differently to high-difficulty material.

## Proposed Direction (The Bet)

We propose eliminating the rigid separation of the "Advanced RC" block (routes 51-57) and explicitly interleaving these modules into the later stages of the core RC sequence. Instead of a separate track, advanced passages will be positioned as capstone milestones within specific RC skill families or as a clearly sequenced "Phase 2" of the RC curriculum. This involves creating "bridge" lessons that explicitly discuss how to adapt core methodologies (e.g., comparative reading, identifying debate overlays) when encountering the dense, abstract text typical of the advanced passages.

## Why Now

The existing product documentation (`course-content-map.md`) notes that no source modules are truly tagged as `Advanced` in their metadata anymore, and downstream tools already collapse them into the RC track. However, the UX and module sequencing still treat them as an isolated island. By addressing this clustering now, we align the curriculum's structure with its intended platform delivery, fulfilling the mandate to "improve study-loop clarity" without building new backend systems.

## Dependencies

- Review and selection of the optimal insertion points for advanced modules within the core RC track (e.g., should Advanced Passage 1 follow the core Application module?).
- Creation of bridge lesson content that explicitly connects core step-by-step methods to advanced passage examples.
- Successful completion of the route map unification bet (Bet 2) to ensure moving these modules doesn't create cascading remap errors.

## Risks

- **Pacing Disruption:** Interleaving advanced passages too early in the core track may demoralize students who have not yet mastered the foundational skills.
- **Progress Tracking Complexity:** Shifting module sequence numbers heavily will affect users who rely on local storage for progress, potentially causing perceived data loss if not migrated carefully.

## Likely Upside

- **Better Operator Leverage:** Content editors maintain a single, cohesive RC track rather than managing an orphaned "Advanced" island.
- **Improved Student Confidence:** Explicitly teaching the transition from core to advanced material—rather than just serving harder questions at the end—provides students with a clear, supported progression path.
- **Structural Coherence:** Fully aligns the repository's sequence with the downstream DataToolkit rules.

## First Practical Milestone

Draft a structural proposal detailing the new sequence of RC modules (24 through 57), showing exactly where the existing 7 Advanced Passages will be interleaved, and draft one example "bridge" lesson demonstrating the transition.
