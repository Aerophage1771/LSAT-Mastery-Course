# Interactive Argument Diagramming

**Purpose:** Define the roadmap bet for introducing visual diagramming tools for Logical Reasoning.
**Audience:** Curriculum designers, frontend engineers, and product strategists.
**Status:** draft
**Source of truth:** yes
**Related docs:** [README.md](../README.md), [vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem

Logical Reasoning (LR) requires deconstructing complex arguments into premises, conclusions, and intermediate claims. Currently, students must either rely on mental modeling or use scratch paper to diagram these relationships. The platform lacks a built-in, visual way to interact with text, making it harder for visual learners to grasp complex logical structures and harder for the platform to provide interactive feedback on structural analysis.

## Proposed Direction

Develop an interactive diagramming canvas directly integrated into LR question cards and lessons. This feature will allow users to:
1. Highlight specific text segments within a passage.
2. Label these segments (e.g., "Premise 1", "Main Conclusion", "Counter-Premise").
3. Draw connecting arrows to represent logical flow (e.g., "Premise 1 supports Intermediate Conclusion").

## Why Now

Our curriculum already teaches structural analysis, but the pedagogy relies on static text explanations. Introducing an interactive tool differentiates the LSAT Mastery Course from competitors who primarily offer static text delivery. It transforms passive reading into active, constructive learning.

## Likely Upside

- **Pedagogical Differentiation:** Highly appealing to visual learners, providing a unique selling point.
- **Deeper Engagement:** Active manipulation of the text increases time-on-task and cognitive engagement.
- **New Assessment Vectors:** Enables a future state where the platform can evaluate *how* a student parsed an argument, not just whether they selected the correct final answer.

## Dependencies and Risks

- **Dependencies:** Requires careful architectural design within the `QuestionPassageCard` component to allow non-destructive overlay of interactive elements on top of the base passage text.
- **Risks:** The UI could become overly complex or clunky, particularly on mobile devices. Ensuring accessibility (e.g., keyboard navigation for diagramming) will be a significant engineering challenge.

## First Practical Milestone

Implement a "Highlight and Label" MVP. Users can select text within a specific LR lesson passage and tag it from a predefined list of structural roles (Premise, Conclusion, Context). The selected text changes color to reflect the tag, allowing users to visually break down the argument structure before viewing the static explanation.