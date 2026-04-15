# Explanation Depth and Rationale Patterns

**Purpose:** Define the roadmap bet for explanation depth and rationale patterns.
**Audience:** Maintainers, content editors, and future agents planning course improvements.  
**Status:** draft  
**Source of truth:** yes  
**Last reviewed:** 2026-04-03
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem
Students are often confused by shallow explanations or "wrong correct answer" bugs when rationales are missing or disconnected from the option text. Current validation ensures structural integrity (e.g., that an option is marked as `(Correct)`), but it does not evaluate whether the explanation effectively breaks down *why* it is correct or *why* other options are wrong.

## Proposed Direction
Introduce an "Explanation Depth" metric to evaluate whether questions have sufficient rationales for each option. This involves building automated checks to measure explanation length, presence of specific rationale blocks (e.g., `breakdown`), and keyword alignment between options and explanations.

## Why Now
We already have robust structural validation (`metrics:content` and `validate-questions.mjs`). Building on this existing foundation to measure *depth* is a natural next step that leverages our existing tooling without requiring net-new infrastructure.

## Likely Upside
This creates better operator leverage by automatically highlighting weak or missing explanations across the massive question bank. It allows content editors to target their review efforts where they are needed most, improving the overall quality of the course offer.

## First Practical Milestone
Write a validation script that iterates through the question bank (`module48`, `module49`, `module53`) to identify and report questions that have missing or unusually short `breakdown` blocks.
