# Cross-Module Dependency Tooling

**Purpose:** Define the roadmap bet for cross-module dependency tooling to manage explanation depth and consistency across questions.
**Audience:** Maintainers, content editors, and future agents planning course improvements.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-29
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md)

## User Problem
Content editors and maintainers currently lack automated tooling to trace how explanation rationale and foundational concepts evolve across different modules and questions. When adjusting a question's explanation or a lesson's definition, there is high risk of explanation coverage gaps, inconsistent rationales, or "answer-key drift" where terminology or emphasis diverges from earlier modules.

## Proposed Direction (Bet)
Build a static, build-time dependency graph for explanation concepts. This involves tagging questions and explanations with core concepts (e.g., "causal flaw", "sufficient assumption") and introducing a validation script that maps these tags against the order of lessons. The tool will flag questions that rely on concepts not yet introduced or explanations that drift from established canonical terminology.

## Why Now
As the course approaches completion (currently at 60 modules and over 111 question cards), the complexity of maintaining consistent explanations manually has exceeded human capacity. Implementing this now prevents widespread explanation rot and reduces the friction of future content audits before the final public release.

## Likely Upside
This will create a reusable system for content integrity. It provides immediate operator leverage by transforming manual audits into deterministic build failures. It significantly reduces the risk of explanation drift and missing conceptual bridges, resulting in a tighter, more cohesive learning experience for the user.

## First Practical Milestone
Develop a proof-of-concept validation script (`scripts/validate-concept-dependencies.mjs`) that parses a new `concepts` array in the metadata of `module48` (Logical Reasoning) questions and verifies that the tags used in a question's explanation align with a predefined, ordered list of course concepts.
