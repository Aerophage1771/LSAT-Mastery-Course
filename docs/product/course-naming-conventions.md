# Course Naming Conventions

**Purpose:** Standardize how units, modules, lesson titles, and resource labels are named across the canonical course source.  
**Audience:** Content editors, curriculum maintainers, engineers, and automation agents changing course labels or adding new curriculum content.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-26  
**Related docs:** [README.md](./README.md), [course-experience.md](./course-experience.md), [../technical/architecture.md](../technical/architecture.md), [../operations/content-operations.md](../operations/content-operations.md)

## Current Product Truth

- Course naming exists at four layers:
  - unit labels
  - module titles
  - lesson titles
  - resource/repository labels
- The course data model already stores track/category separately from the title string.
- Names must therefore optimize for clarity, cross-app stability, and human scanability rather than trying to encode every piece of metadata inside the title itself.
- This document sets the naming standard going forward. Existing titles that do not match it should be treated as legacy exceptions until they are normalized.

## Naming Goals

- Make the curriculum easy to scan in flat lists, grouped unit views, and downstream release artifacts.
- Keep naming stable enough that refs, docs, and audits do not need needless churn.
- Separate track metadata from title wording whenever the app already has a dedicated track/category field.
- Use one punctuation system consistently instead of mixing hyphens, spaced hyphens, slashes, and ad hoc abbreviations.

## Unit Naming

- Unit numbers are track-local, not globally unique across the entire course.
- In any cross-track UI or export, refer to units with their track context, for example:
  - `LR Unit 3: Evaluation`
  - `RC Unit 10: Identifying the Perspectives`
- The canonical unit format is:

`Unit N: Theme`

- Unit themes should be short pedagogical buckets, not lesson-level descriptions.
- Do not rename unit themes casually. Unit labels anchor curriculum grouping across multiple modules.

## Module Naming

### LR Core Modules

- Format: bare question type or skill family in Title Case
- Examples:
  - `Argument Part`
  - `Main Conclusion`
  - `Necessary Assumption`

### RC Core Skill Modules

- Format: bare question category in Title Case
- Examples:
  - `Main Idea`
  - `Application`
  - `Third-Party Viewpoint`

- Do not prefix RC skill-module titles with `RC:`. Track/category context already exists in the data model and UI grouping, so the title itself should stay clean.

### RC Practice Passage Modules

- Format: `Practice Passage N: [Passage Name]`
- Example:
  - `Practice Passage 1: Obasan`

### RC Advanced Passage Modules

- Format: `Advanced Passage N: [Passage Name]`
- Example:
  - `Advanced Passage 1: Mathematics as Language`

- Advanced RC is folded into RC, but the module title itself does not need an `RC:` prefix when the track context is already present elsewhere.

### Resource Modules

- Format: `[Scope] [Artifact]`
- Approved artifact labels:
  - `Question Repository`
  - `Quick Reference Guide`
- Approved scope labels:
  - `LR`
  - `RC`
  - `Advanced RC`

- Examples:
  - `LR Question Repository`
  - `RC Question Repository`
  - `Advanced RC Question Repository`
  - `RC Quick Reference Guide`

## Lesson Naming

### Core Skill Modules

- Use this standard lesson spine when the module follows the normal teach-then-drill pattern:
  - `Introduction`
  - `Step-by-Step: [Type]`
  - `Drill: ...`
  - `Advanced: ...`
  - `Reference Guide`

- `Step-by-Step: [Type]` is the canonical second-lesson name.
- `[Type]` should mirror the module title exactly.
- Examples:
  - `Step-by-Step: Application`
  - `Step-by-Step: Necessary Assumption`
  - `Step-by-Step: Third-Party Viewpoint`
- Do not alternate between `Step-by-Step Guide`, `Step-by-Step Method`, `Step-by-Step Approach`, and `Step-by-Step: [Type]` for the same structural slot.

### Passage Modules

- Use:
  - `Passage Analysis`
  - `Question N: [Question Focus]`

- Use numbered question titles only when they correspond to a real passage-set question sequence.
- Use concise question-focus labels after the colon, for example:
  - `Question 8: Main Idea`
  - `Question 10: Organization`

### Numbering Rules

- Do not add `Lesson 1:` / `Lesson 2:` prefixes to normal core-module lesson titles unless the number itself carries meaningful curricular information.
- Use numbering only when it helps the student map to:
  - real passage question order
  - a true drill sequence
  - an explicitly staged advanced sequence

## Punctuation, Case, and Abbreviation Rules

- Use Title Case for unit names, module titles, and lesson titles.
- Use `:` to separate a family label from a specific instance.
- Use `-` only inside real compounds, not as a loose separator.
- Do not use spaced hyphens such as `Principle - Apply`.
- If a slash is required for a canonical paired LSAT term, omit surrounding spaces:
  - `Agree/Disagree`
  - `Paradox/Explain`
- Prefer words over shorthand inside canonical titles:
  - use `Third-Party`, not `3rd-Party`
- Keep parenthetical clarifiers only when they are genuinely needed to disambiguate a term.

## Legacy Inconsistencies To Normalize

- `Principle-Strengthen`, `Principle-Apply`, and `Principle-Generalization` should share one separator system.
- RC skill-module titles should drop the `RC:` prefix and use bare category names instead.
- `RC: 3rd-Party Viewpoint` should be normalized directly to `Third-Party Viewpoint`.
- `RC: Practice Passage N` and `RC: Advanced Passage N` should drop the `RC:` prefix.
- `Paradox / Explain` and `Agree / Disagree (Point at Issue)` should drop spaced slash formatting.
- Resource modules should use one stable scope-plus-artifact grammar.
- Lesson slot names should converge on `Step-by-Step: [Type]` rather than mixed synonyms.

## Change Management Rules

- Before renaming a module or lesson, check:
  - route ids and course catalog labels
  - downstream DataToolkit mappings
  - docs or audits that quote the title directly
- Prefer batch normalization over one-off cosmetic edits so the naming system becomes more consistent rather than more mixed.
- If a rename materially affects student-visible navigation or downstream integration labels, update the relevant docs and changelog in the same turn.
