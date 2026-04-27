# Argument Mapping Interactive Assessments

**Purpose:** Define a forward-looking bet for an interactive assessment system and pedagogy.
**Audience:** Product contributors, maintainers, and future agents.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-15
**Related docs:** [../README.md](../README.md), [../vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem
Students often struggle with Logical Reasoning (LR) questions because they fail to accurately dissect the stimulus into its core components (premises, sub-conclusions, main conclusion). Current multiple-choice assessments only measure the final outcome (getting the question right or wrong), not the foundational skill of structural deconstruction.

## Proposed Bet
Introduce an "Argument Mapping" assessment mode. Instead of just answering a question, the student is presented with a stimulus and must interactively highlight and label the text (e.g., green for premise, yellow for sub-conclusion, red for main conclusion) before proceeding to the answer choices. The system will evaluate the accuracy of their mapping against a pre-defined structural key.

## Why Now
We already have robust question banks and validation for LR. Enhancing the pedagogy from passive reading to active deconstruction directly targets the highest-leverage skill in LR. This differentiates the product from standard practice platforms by teaching the *process* of solving, not just providing explanations after the fact.

## Dependencies
- Content operations must extend the question bank schema to include structural metadata (e.g., character offsets for premises and conclusions) for a subset of LR questions.
- A new interactive React component (`ArgumentMapper`) must be built to handle text selection, highlighting, and labeling on client devices (desktop and mobile).
- The `QuestionPassageCard` component needs to be extensible to support this new pre-question assessment phase.

## Risks
- Authoring the structural metadata for hundreds of existing questions is a significant operational lift.
- Building an intuitive text-highlighting interface that works flawlessly on mobile devices is technically challenging.
- Students might find the mandatory mapping tedious if overused, potentially increasing friction and reducing study volume.

## Likely Upside
Significantly improves student comprehension and LR scores by forcing active engagement with argument structure. Creates a highly differentiated, premium feature that justifies higher product pricing and improves perceived pedagogical value.

## First Practical Milestone
Pilot the Argument Mapping interaction on a small, curated set of 10 "Method of Reasoning" questions. Update the JSON schema for these specific questions to include structural keys, and implement a basic `ArgumentMapper` component that allows students to label the main conclusion. Validate the UX with a small beta group.
