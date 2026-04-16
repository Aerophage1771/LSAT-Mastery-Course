# Cross-Module Concept Bridges

**Purpose:** Address content clustering and internal coherence by proposing a system to interlink foundational concepts across highly siloed LR and RC modules.
**Audience:** Product contributors deciding what is worth planning next.
**Status:** proposed
**Source of truth:** yes
**Last reviewed:** 2026-03-28

## User Problem
The current curriculum treats Logical Reasoning and Reading Comprehension as largely siloed disciplines. However, foundational skills—such as recognizing Conditional Reasoning, identifying core Argument Parts, or understanding Cause and Effect—apply strongly to both sections. Users currently have to learn these concepts in isolation within LR and then independently figure out how to apply them to the broader passages in RC. This lack of conceptual bridging weakens the course's internal coherence and slows down holistic mastery.

## Proposed Direction
Develop a systematic way to surface and link foundational concepts across modules. This could involve "Concept Bridge" callouts within RC lessons that directly link back to the foundational LR modules (e.g., linking from an RC Strengthen question to the LR Strengthen principles). It also includes creating new lesson types or review exercises that explicitly ask users to apply an LR skill to an RC passage, explicitly breaking down the siloes.

## Why Now
We already have deep conceptual coverage in LR (Modules 1-21) and a structured foundation for RC (Modules 30-40). Connecting them leverages the existing content to create a significantly more powerful and cohesive learning experience without needing to write entirely new foundational theory from scratch. It maximizes the value of what we have already built.

## Dependencies
- The `10-lesson-prerequisite-clarity.md` bet, as strong prerequisites will help define these bridges.
- A technical mechanism within the lesson rendering engine to display these "Concept Bridge" links seamlessly.
- Content review to identify the highest-value connection points between specific LR and RC question types.

## Risks
- If implemented poorly, bridges could distract users from the specific task at hand in a lesson.
- It requires deep pedagogical understanding to link concepts correctly without causing confusion (e.g., how an RC main point differs subtly from an LR main conclusion).

## Likely Upside
- Faster overall student progression as they realize skills transfer between sections.
- A unique selling point for the course: a truly integrated approach to LSAT reasoning.
- Higher engagement as users bounce between related concepts rather than following a strict, siloed linear path.

## First Practical Milestone
Identify three major conceptual bridges (e.g., Conditional Logic in LR -> RC Structural Analysis; LR Strengthen/Weaken -> RC Strengthen/Weaken). Create prototype "Bridge Guides" for these three connections and integrate them as optional reading or callouts within the relevant RC modules.
