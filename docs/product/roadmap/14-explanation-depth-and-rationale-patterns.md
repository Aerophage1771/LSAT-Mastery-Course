# Explanation Depth and Rationale Patterns

**Purpose:** Establish automated audits for explanation coverage to ensure high-quality rationale patterns.
**Audience:** Maintainers, content editors, and future agents planning course improvements.  
**Status:** active
**Source of truth:** yes  
**Last reviewed:** 2026-05-15
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem
There is currently no programmatic way to determine if an explanation comprehensively covers the reasoning for a question, leaving a gap where a student might not understand *why* an option is correct or incorrect. Editors lack visibility into which questions have shallow or missing rationales.

## Proposed Direction
Introduce a new audit script that parses the `explanation` block in question repositories to evaluate coverage. It will flag questions lacking explanation text, lacking sufficient length, or missing explicit discussion of all answer choices.

## Why Now
We currently have 126+ questions in the database. Maintaining content quality at this scale requires automated coverage checks to prioritize editorial efforts rather than manually hunting for weak explanations.

## Likely Upside
Content editors receive a clear, actionable punch list of shallow explanations. This drives targeted improvements to the student learning experience by ensuring every question has a robust rationale pattern.

## First Practical Milestone
Create an `audit-explanation-coverage.mjs` script that outputs an `explanation-coverage-audit.md`, listing questions with less than 50 words of explanation or missing structural analysis of choices.