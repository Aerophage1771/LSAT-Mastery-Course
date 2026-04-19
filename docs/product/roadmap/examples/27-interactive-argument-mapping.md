# 27. Interactive Argument Mapping

**Purpose:** Define a forward-looking curriculum and pedagogy bet to introduce an interactive diagramming and argument mapping tool specifically for Logical Reasoning questions.
**Audience:** Product managers, pedagogical leads, and maintainers.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-18
**Related docs:** [README.md](../README.md), [vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem

Logical Reasoning requires students to deconstruct complex arguments into premises, intermediate conclusions, and main conclusions. Currently, students do this entirely in their heads or on scratch paper, which leads to working memory overload and makes it difficult for the course to dynamically step in when they misidentify a key structural component. There is a missing interactive bridge between reading the stimulus and answering the question.

## Proposed Bet

Build an "Interactive Argument Mapping" component that can be activated on difficult Logical Reasoning questions.
- Students can highlight sentences in the stimulus and assign roles (e.g., "Premise", "Conclusion", "Context").
- The component will validate their mapping against the known, encoded structural data for that specific PT question.
- If incorrect, the tool provides immediate, targeted feedback ("You marked this as the Main Conclusion, but notice the indicator word 'however'...").

## Why Now?

We have successfully established trust in our static explanations and review queues. To move from a "practice platform" to a "teaching platform," we need interactive pedagogy. By moving the structural breakdown into the UI, we lower the cognitive load for beginners and offer a differentiated, highly-active learning surface that competitors relying purely on video explanations cannot match.

## Dependencies

- **Content Encoding:** Requires a new structured metadata format for Logical Reasoning stimuli to encode premise/conclusion boundaries for at least a subset of questions.
- **UI Components:** Needs a robust, accessible text-selection and annotation React component.

## Risks

- **Content Overhead:** Retroactively tagging thousands of Logical Reasoning questions with sentence-level structural metadata is extremely labor-intensive.
- **UX Friction:** If the highlighting and tagging UI is clunky on mobile devices or slow to use, students will abandon it in favor of mental modeling.

## First Practical Milestone

Implement the interactive text-annotation UI component in a single, isolated "Step-by-Step" methodology lesson (e.g., in Module 48) using 5 hand-encoded example questions, and measure completion rates and student feedback before expanding to the broader question bank.