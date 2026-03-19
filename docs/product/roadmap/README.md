# Product Roadmap

**Purpose:** Provide the active front door for roadmap thinking without treating ideas as already shipped work.  
**Audience:** Product contributors deciding what is worth planning next.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [../README.md](../README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [pathway-map.md](./pathway-map.md)

## Read This Before Planning Anything New

This roadmap is maintainability-first and content-trust-first. A proposed change should usually do one or more of the following:

- reduce question-integrity or content-drift risk
- reduce contributor ambiguity around naming, validation, or source-of-truth boundaries
- improve the student study loop without inventing backend or admin systems
- improve exports or packaging only after truth and workflow basics are stable

Revenue context still matters, but it is downstream of trust, accuracy, and repo-fit in this docs set.

## Vision And Decision Filter

Use [vision-and-decision-filter.md](./vision-and-decision-filter.md) before promoting any idea from "interesting" to "planned."

## Current Product Truth

- The repo delivers the study experience, not the commerce stack.
- The most important current planning surfaces inside this repo are:
  - curriculum credibility
  - question authenticity
  - validation and canonical naming
  - study workflow quality
  - export, packaging, and reliability work that does not depend on missing backend systems

## Top 5 Bets

1. [Content trust and authenticity](./01-content-trust-and-authenticity.md)
2. [Study-loop clarity and progress review](./02-study-loop-clarity-and-progress-review.md)
3. [Question-bank discovery and cross-linking](./03-question-bank-discovery-and-cross-linking.md)
4. [Export and packaging quality](./04-export-and-packaging-quality.md)
5. [Reliability, performance, and offline resilience](./05-reliability-performance-and-offline-resilience.md)

Supporting measurement and decision signals live in [06-analytics-and-signals.md](./06-analytics-and-signals.md).

## How To Use This Folder

- Start with the decision filter.
- Use the pathway map to determine sequence, dependency level, and whether a proposal is an integrity fix, workflow improvement, or support work.
- Use the numbered bet docs for implementation-ready planning grounded in current repo truth.
- Update [../course-experience.md](../course-experience.md) first if the change has already shipped.

## Read This First If...

- you are adding a roadmap item: read [vision-and-decision-filter.md](./vision-and-decision-filter.md)
- you are sequencing work: read [pathway-map.md](./pathway-map.md)
- you are evaluating a content-trust change: read [01-content-trust-and-authenticity.md](./01-content-trust-and-authenticity.md)
- you are touching exports or packaging: read [04-export-and-packaging-quality.md](./04-export-and-packaging-quality.md)

## Document Map

- [vision-and-decision-filter.md](./vision-and-decision-filter.md)
- [pathway-map.md](./pathway-map.md)
- [01-content-trust-and-authenticity.md](./01-content-trust-and-authenticity.md)
- [02-study-loop-clarity-and-progress-review.md](./02-study-loop-clarity-and-progress-review.md)
- [03-question-bank-discovery-and-cross-linking.md](./03-question-bank-discovery-and-cross-linking.md)
- [04-export-and-packaging-quality.md](./04-export-and-packaging-quality.md)
- [05-reliability-performance-and-offline-resilience.md](./05-reliability-performance-and-offline-resilience.md)
- [06-analytics-and-signals.md](./06-analytics-and-signals.md)

## Working Rules

- Do not write future-state docs as if the feature already exists.
- Keep roadmap language tied to current repo surfaces and known constraints.
- Do not create fake admin, billing, or backend roadmap surfaces for systems that do not exist in this repo.
- When a bet becomes implementation work, keep the roadmap doc stable and move execution detail into code-facing or operations docs only when the work is real.
