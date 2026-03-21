# Pathway Map

**Purpose:** Sequence roadmap work by dependency level, maintainability impact, and repo fit.  
**Audience:** Contributors deciding what to build first and what to defer.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/architecture.md](../../technical/architecture.md)

## Change Pathways

- Content trust pathway
  - question authenticity
  - lesson consistency
  - drill integrity
- Validation and naming pathway
  - canonical naming
  - audit visibility
  - source-of-truth boundaries
- Study workflow pathway
  - progress clarity
  - review loops
  - resume and navigation clarity
- Packaging pathway
  - exports
  - curriculum outlines
  - materials that support tutoring or operator use cases
- Reliability pathway
  - performance
  - offline behavior
  - route stability

## Decision Filters

- Trust protector: reduces authenticity, drift, or clarity risk
- Maintainer simplifier: reduces ambiguity in naming, validation, or ownership
- Study outcome improver: makes the student workflow clearer without inventing new systems
- Packaging enabler: increases export or distribution usefulness after truth basics are stable
- Nice-to-have: polish with weak trust, workflow, or maintainability impact

## Dependency Ladder

1. Content trust and question authenticity
2. Validation coverage, canonical naming, and docs clarity
3. Study-loop clarity and progress review
4. Question-bank discovery and cross-linking
5. Export and packaging upgrades
6. Reliability and offline improvements that cut across the prior layers

## Enabling vs Dependent Bets

- Enablers:
  - validation scripts
  - canonical naming
  - docs clarity
  - audit visibility
- Dependent bets:
  - stronger study workflows
  - richer question-bank discovery
  - packaging and export improvements

## Recommended Sequence By Pathway

1. Protect content truth and authenticity
2. Tighten validation, naming, and source-of-truth boundaries
3. Improve study-loop clarity and progress review
4. Improve question-bank discovery and curriculum cross-linking
5. Strengthen export and packaging quality
6. Address reliability and offline gaps throughout, especially when they threaten the earlier bets

## Surface Map

- Dashboard and module navigation
- Lesson viewer and lesson navigation
- Question bank
- Search
- Export center
- Style guide and roadmap modals
- Generated audits and docs entrypoints

## Implementation Modes By Pathway

- Content trust: small, auditable changes with mandatory validation
- Validation and naming: script, catalog, and docs changes kept in sync
- Study workflows: UI changes paired with route, progress, and content checks
- Packaging: export and naming work tied to canonical content truth
- Reliability: technical debt and performance fixes validated through build, route, and offline checks

## Decision Rule

- If the work does not clearly improve trust, maintainability, study quality, or packaging value rooted in current repo truth, it is probably not the next thing to do.
