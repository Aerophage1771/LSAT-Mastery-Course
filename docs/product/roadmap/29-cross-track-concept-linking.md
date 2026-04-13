# Cross-Track Concept Linking

**Purpose:** Define the roadmap bet for explicitly connecting Logical Reasoning and Reading Comprehension concepts.
**Audience:** Curriculum maintainers, content editors, and engineers planning structural course updates.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-13
**Related docs:** [README.md](./README.md), [../course-content-map.md](../course-content-map.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem

The course curriculum treats Logical Reasoning (LR) and Reading Comprehension (RC) as mostly separate silos. While the underlying logical skills (identifying conclusions, recognizing conditional logic, spotting flaws) are identical, they are taught with separate vocabularies and isolated contexts. This lack of internal coherence forces students to learn the same foundational concepts twice and prevents them from leveraging their LR mastery when tackling dense RC passages. The curriculum visibly fails to address how LR skills scale up to RC.

## Proposed Direction

Develop "Bridge Lessons" that explicitly transfer logical frameworks from the LR track into the RC track. This involves:
1. Identifying the core LR concepts that appear most frequently in RC (e.g., Argument Structure, Causal Reasoning, Conditional Logic).
2. Creating explicit cross-links and reference lessons within the early RC skill modules that say, "This is just an LR Flaw question scaled up to a paragraph."
3. Standardizing the terminology so that when a passage contains conditional logic, it is analyzed using the exact same terms established in the LR modules.
4. Implementing UI enhancements in the lesson viewer that allow students to quickly review the foundational LR concept while studying an RC application.

## Why Now

The platform has recently standardized the RC reading-method vocabulary and possesses a stable LR sequence. As the curriculum transitions towards deeper skill modules, formalizing the connections between tracks will multiply the value of existing content without requiring massive net-new authoring. It leverages the robust metadata and linking capabilities already present in the question bank.

## Likely Upside

- Massive efficiency gains for the student by unifying the logical framework across the test.
- A unique value proposition (stronger offer) that explicitly teaches the LSAT as a unified test of logic rather than separate, disconnected sections.
- Reduced content maintenance overhead for operators by standardizing terminology across tracks.
- Creates a foundation for a truly dynamic "Review Queue" that can surface an LR drill to remediate a weakness identified in an RC module.

## First Practical Milestone

Draft and integrate the first "Bridge Lesson" into the RC curriculum. Focus on "Argument Structure" (LR Module 1/2) and link it directly to the "RC: Main Idea" or "RC: Paragraph Function" modules. The lesson should explicitly show how to break down an RC paragraph using the exact same Premise/Conclusion tools taught in early LR, demonstrating the value of cross-track concept linking in a live route.
