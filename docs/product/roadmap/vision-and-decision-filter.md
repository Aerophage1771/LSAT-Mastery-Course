# Vision and Decision Filter

**Purpose:** Force explicit maintainability, trust, and repo-fit reasoning before roadmap work becomes implementation planning.  
**Audience:** Product contributors, maintainers, and agents proposing new bets.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [README.md](./README.md), [pathway-map.md](./pathway-map.md), [../../operations/content-operations.md](../../operations/content-operations.md)

## Current Business Objective

- What makes money now:
  - a credible LSAT prep product that can be sold, packaged, or used to support tutoring or coaching offers outside this repo
- What this repo is responsible for:
  - the quality, trustworthiness, and maintainability of the study experience itself
- What offer or revenue stream is being protected:
  - the perceived usefulness and reliability of the LSAT course experience

## Maintainability-First Goal Hierarchy

1. Protect question authenticity, content trust, and curriculum clarity
2. Protect validation coverage, canonical naming, and source-of-truth boundaries
3. Improve study workflows that reduce learner confusion and contributor drift
4. Improve export and packaging value only when truth and workflow basics remain stable
5. Treat revenue and brand upside as supportive, not primary, unless the change clearly depends on prior trust and maintainability work

## User Outcome Promise

- A student should be able to move through a coherent LSAT curriculum, trust that practice content is real where it should be real, and use the app as a dependable study surface.

## What Makes This Not Worth Building

- The work makes the docs or product look more complete while increasing content drift, naming ambiguity, or question-integrity risk.
- The idea depends on backend, billing, analytics, or admin systems that do not exist in this repo.
- The effort is high relative to the improvement in trust, maintainability, or study quality.
- The same outcome can be achieved with a smaller content, validation, or workflow fix.

## Preflight Questions

- What current trust or maintainability problem does this change solve?
- Which source of truth becomes clearer or safer if this ships?
- Does the change improve student workflow, or is it mostly contributor-facing?
- Which real repo surface does this affect: lessons, question bank, exports, search, progress, or audit visibility?
- What validation or audit evidence is missing right now?
- What dependency must already be true before this is worth building?
- What would invalidate the bet after a small implementation pass?
- If the change also helps revenue or packaging, is that benefit grounded in improved trust or usability rather than aspirational polish?

## Go / No-Go Gate

### Go when

- the change clearly improves trust, curriculum quality, validation clarity, or study workflow quality
- the affected route, content, or audit dependencies already exist in the repo
- the unknowns are small enough to test or ship incrementally without inventing missing systems

### Defer when

- the idea is directionally attractive but still vague about trust, maintainability, or workflow impact
- the required validation, canonical naming, or measurement groundwork is missing
- the improvement is real but depends on a larger unfinished bet first

### Not now when

- the idea is mostly polish, prestige framing, or speculative platform expansion
- the work introduces fake backend or admin structure
- the same outcome can be achieved through a smaller docs, content, or audit fix
