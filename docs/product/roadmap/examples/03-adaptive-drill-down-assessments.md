# Adaptive Drill-Down Assessments

**Purpose:** Define a bet for implementing adaptive sub-skill assessments to diagnose complex errors.
**Status:** example

## User Problem
When a student answers a difficult Logical Reasoning or Reading Comprehension question incorrectly, the system simply marks it wrong and provides a monolithic explanation. Students often fail these complex questions due to a breakdown in one specific sub-skill (e.g., misidentifying the conclusion, failing to understand conditional logic, or missing a quantifier), but they don't know *which* sub-skill failed. Standard drill sets are too blunt to diagnose these specific micro-failures in the moment.

## Proposed Direction (or Bet)
We bet that implementing "Adaptive Drill-Down Assessments" will dramatically improve the efficacy of post-mistake review.
When a student incorrectly answers a target "complex" question, the UI will dynamically present a short sequence of 2-3 single-skill "drill-down" questions before revealing the full explanation. For example, if they miss a "Flaw" question, the drill-down might ask: "Highlight the main conclusion of the argument," followed by "Which of the following best describes the premise?" This allows the system (and the student) to pinpoint exactly where their reasoning diverged from the correct path.

## Why Now
We have a robust static question bank and the SPA architecture easily supports conditional rendering of components. Since we manage state locally via `localStorage`, we can track these micro-interactions without needing a complex backend database migration. As students demand more personalized learning, moving from binary right/wrong grading to diagnostic micro-assessments is the natural evolution of our assessment system.

## Dependencies
- Curriculum Expansion: Content authors need to write specific, targeted "drill-down" micro-questions for key difficult questions in the bank.
- UI Updates: Modify the `QuestionPassageCard` or explanation rendering logic to inject these micro-assessments conditionally upon an incorrect answer.
- Schema Update: Update the validation schemas (e.g., `validate-questions.mjs`) to support an optional `drillDownAssessments` array within the question data model.

## Risks
- **Student Frustration:** Students who just want to read the explanation immediately might find the forced drill-down questions annoying. We must ensure these are either optional or highly engaging.
- **Content Volume:** Authoring 2-3 drill-down questions for hundreds of difficult LSAT questions requires significant editorial bandwidth.

## Likely Upside
- Radically improves the diagnostic value of the course, moving it closer to the experience of 1-on-1 tutoring.
- Increases the time spent in active recall rather than passive reading of explanations.
- Generates high-resolution data on student sub-skill weaknesses (if we eventually sync this data to a backend or analytics system).

## First Practical Milestone
Design the JSON schema for `drillDownAssessments` and author drill-down questions for a pilot batch of 10 difficult questions in Module 48. Implement the frontend logic to display them optionally when a student clicks "I'm not sure why I got this wrong" after an incorrect attempt.