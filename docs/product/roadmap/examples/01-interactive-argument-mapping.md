# Interactive Argument Mapping for Logical Reasoning

**Purpose:** Define a bet for adding an interactive visual argument mapper for LR.
**Status:** example

## User Problem
Students often struggle to internalize abstract logical structures (premises, intermediate conclusions, main conclusions, and gaps) purely through reading text explanations. When tackling dense Logical Reasoning stimulus texts, the cognitive load of parsing the text and visualizing the structural relationships simultaneously causes breakdowns in understanding, leading to missed flaws and misidentified roles.

## Proposed Direction (or Bet)
We bet that building an interactive, drag-and-drop "Argument Mapping" interface will materially improve student comprehension of LR structures.
This surface will allow students to visually break down a stimulus by highlighting text and dragging it into a node-based map, connecting premises to conclusions. The system will provide immediate structural feedback. This moves the course beyond static text into a higher-value, interactive assessment and learning surface that actively tests the student's ability to deconstruct an argument.

## Why Now
Our curriculum coverage for Logical Reasoning is currently robust but relies heavily on passive reading of explanations. With the client-side SPA architecture fully capable of rich interactivity (via React), we have the technical foundation to build this without needing backend scoring. Elevating the pedagogy from passive review to active structural assembly is the logical next step to differentiate our learning experience from standard book/video courses.

## Dependencies
- Creation of a new interactive component framework within the existing React shell.
- Curriculum expansion: Content editors need to author the "correct" structural maps for a set of target LR questions to serve as the grading key.
- Expansion of the current validation schemas to support node/edge definitions for the argument maps.

## Risks
- **UX Complexity:** The drag-and-drop or highlighting interface might be clunky on mobile devices or smaller screens.
- **Content Authoring Overhead:** Mapping arguments visually is a new authoring paradigm that will take time for content creators to scale across the question bank.

## Likely Upside
- Significantly higher engagement and retention on difficult LR concepts.
- Creation of a highly marketable, differentiated feature ("Visual Argument Mapper") that justifies premium pricing or licensing.
- Better diagnostic data on where students fail in reading (e.g., confusing an intermediate conclusion for a main conclusion).

## First Practical Milestone
Build a static, read-only version of the argument map for 5 high-difficulty LR questions (e.g., from Module 48) and embed them in the explanation view. Validate that the visual representation aids understanding before building the interactive drag-and-drop assembly tool.