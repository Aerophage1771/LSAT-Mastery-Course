# Content Trust and Authenticity

**Purpose:** Define the roadmap bet for keeping lesson content, practice material, and validation policy trustworthy.  
**Audience:** Maintainers, content editors, and agents planning integrity or lesson-quality work.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## Brief Problem Statement

- The curriculum only stays credible if real-question usage, lesson claims, and repository-backed practice stay aligned.
- Drift usually happens through lesson edits, weak cross-linking, stale audit output, or unclear question provenance.

## Why This Matters Now

- This repo already treats authenticity and content trust as a defining product constraint.
- When trust erodes, later workflow, export, or packaging improvements become less valuable.

## Strategic Fit

- Primary category: trust protector
- Secondary category: maintainer simplifier
- Repo fit: strong, because this work relies on existing lesson files, question repositories, and audit scripts

## Preflight Questions

- Which lesson or question surface is currently least trustworthy?
- Is the issue a sourcing problem, a validation problem, or an explanation-quality problem?
- Can the integrity gap be fixed with existing repository-backed content?
- Which audit or validation command should prove the fix?

## Go / No-Go Gate

### Go when

- the work directly reduces question-integrity, lesson-accuracy, or audit-drift risk
- the affected lessons or repositories already exist in the repo
- the result can be verified through existing validation commands

### Defer when

- the integrity issue is real but blocked on missing source content from outside the repo
- the change depends on broader naming or workflow cleanup first

### Not now when

- the proposal mostly adds polish without reducing content risk
- the same outcome can be achieved by tightening docs, validation rules, or lesson prose instead

## Current State In The Repo / Product

- LR drill and concept lessons are expected to rely on repository-backed real questions.
- Lessons 1-3 may use illustrative prose examples, but interactive invented drill content is not acceptable for later lessons.
- Audit reports already exist for invented cards, lesson-question linkage, and LR card expectations.

## Target Outcome

- Question provenance is explicit and consistent.
- Lessons only use interactive practice where the source question is real and verifiable.
- Validation reports are useful enough to catch trust regressions early.

## Recommended Implementation Mode

- Small, auditable content and validation passes
- Manual lesson rewrites when explanation quality is the real issue
- Immediate audit regeneration after any source-of-truth change

## Likely Affected Surfaces

- Lesson content under `modules/moduleN/`
- LR, RC, and Advanced RC repositories
- Validation scripts and generated audit reports
- Course catalog naming where lesson titles or mappings must stay consistent

## Likely Affected APIs / Data Touchpoints

- `Lesson` content blocks
- question ids and PT references
- `docs/operations/audits/` outputs
- route-to-content module mapping when audits or lessons depend on canonical naming

## Dependencies

- Stable question policy and content rules
- Canonical lesson naming
- Accurate audit path wiring between scripts and runtime consumers

## Phased Implementation Path

1. Keep content policy and source-of-truth docs explicit.
2. Use audits to identify the highest-risk trust gaps.
3. Fix lessons and repositories manually, then regenerate the relevant reports.

## Success Metrics

- No invented interactive cards where policy disallows them
- Reduced linkage and authenticity mismatches in generated audits
- Fewer lesson files that need manual provenance cleanup during future edits

## Non-Goals / Not In V1

- Building a new backend question store
- Rewriting the full curriculum in one pass
- Treating generated audits as student-facing product copy

## Open Implementation Risks

- Some integrity fixes may expose missing or inconsistent source material
- Validation can prove structure faster than pedagogy, so lesson quality still needs human review
- Canonical naming drift can make a trust fix look incomplete if titles and cross-links are not updated together
