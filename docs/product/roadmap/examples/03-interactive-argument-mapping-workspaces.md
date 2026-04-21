# Interactive Argument Mapping Workspaces

**Purpose:** Introduce a new pedagogy surface that moves beyond multiple-choice to interactive, visual argument deconstruction.
**Audience:** Maintainers, curriculum designers, and frontend engineers.
**Status:** proposed
**Source of truth:** yes
**Related docs:** [../README.md](../README.md), [../vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem

Students often struggle with Logical Reasoning because they read passively. The current multiple-choice format tests their *final* understanding but doesn't actively train or evaluate the *process* of breaking down an argument. When a student gets a question wrong, we don't know if they failed to identify the conclusion, misunderstood a premise, or missed the gap between them.

## Proposed Bet

Develop "Interactive Argument Mapping Workspaces" as a new type of lesson block. Instead of just reading a passage and answering a question, students are presented with a stimulus and must interactively highlight and tag components:
- Dragging to highlight the main conclusion.
- Tagging premises and intermediate conclusions.
- Explicitly identifying and naming the "gap" or assumption before seeing the answer choices.
The system will provide immediate feedback on their structural analysis before allowing them to proceed to the standard question card.

## Why Now

The existing course has established a strong foundation in teaching *how* to deconstruct arguments (e.g., standard of proof, causal reasoning). However, the application remains passive. Transitioning to interactive workspaces bridges the gap between theory and practice, creating a highly differentiated pedagogical tool that standard test-prep books or simple question banks cannot match.

## Dependencies

- Requires an extension to the internal content schema to store the "correct" structural mapping for a subset of Logical Reasoning passages (e.g., character offsets for conclusions).
- Development of a robust, accessible text-highlighting and tagging React component that works reliably on both desktop and mobile.

## Risks

- **Authoring Bottleneck:** Creating the structural metadata for hundreds of questions is extremely time-consuming and requires expert review.
- **UI/UX Friction:** Highlighting text precisely on mobile devices is notoriously difficult; a poor implementation could frustrate users more than it helps.
- **Over-engineering:** This introduces complex state management into the lesson viewer, which has historically been a straightforward renderer.

## First Practical Milestone

Implement a prototype "Highlight the Conclusion" drill type for 20 specific, hand-authored questions in the initial Logical Reasoning framework modules, validating the UI and checking if it meaningfully improves user engagement.
