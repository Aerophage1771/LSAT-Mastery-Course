# Full Course Export Brainstorm

Date: 2026-03-08

## What We're Building

We are redesigning course export around two distinct user jobs:

1. `Export Curriculum Outline`
2. `Export Full Course`

Both exports should:

- default to the entire course
- support optional filtering
- preserve the current multi-format export approach: TXT, RTF, JSON, CSV, PDF

In parallel, the user-provided module and lesson naming update becomes the canonical naming system everywhere in the product, not just in exports. That includes dashboard cards, sidebar navigation, lesson pages, search results, and exported files.

## Why This Approach

The current full-course export tries to do too many jobs through one generic flow. Users need two separate outcomes:

- a polished curriculum map
- a complete lesson-content export

Splitting those actions keeps the mental model clear without removing flexibility. It also creates a clean place to fix current export pain points, including selection reset behavior, filtering friction, and naming inconsistencies between surfaces.

## Chosen Approach

### Split Export Center

Use two separate export actions:

- `Export Curriculum Outline`
- `Export Full Course`

This is the selected direction because it is the clearest version of the feature that still stays lightweight. It avoids forcing one export flow to act like both a syllabus tool and a content dump.

## Product Decisions

### Export structure

- There are two primary export actions, not one combined mode switch.
- `Export Curriculum Outline` exports the course structure using canonical module and lesson names.
- `Export Full Course` exports the actual lesson corpus.

### Default scope

- Both export actions default to the entire course.
- Both support optional filtering for narrower exports.

### Format policy

- Keep TXT, RTF, JSON, CSV, and PDF for both export actions.
- Do not reduce format coverage during this redesign.

### Naming policy

- The exact user-provided module and lesson naming update is the new source of truth.
- These names replace current names everywhere in the product.
- Export output should never use legacy titles once the rename rollout is complete.

### UX expectations

- Users should immediately understand the difference between outline export and full-course export.
- Filtering should feel optional, not required.
- The experience should make entire-course export easy while still allowing targeted subsets.

## Naming Rollout Requirements

The naming update should cover all user-facing surfaces that currently display module or lesson names, including:

- dashboard module cards
- course sidebar and lesson navigation
- lesson page headers
- search results
- question-bank cross references where lesson names appear
- outline exports
- full-course exports

The user-provided naming list should be treated as the canonical product copy for modules 1 through 56 and their lessons.

## Constraints and Guardrails

- This is a client-side app with no backend export service.
- The redesign should build on existing export capabilities rather than replacing them with a new system unnecessarily.
- The split export model should not remove current advanced export formats.
- Planning should explicitly account for existing naming normalization logic so it does not keep rewriting titles into legacy patterns.

## Success Criteria

This brainstorm is successful if the shipped feature would let a user:

- export a clean curriculum outline for the whole course or a filtered subset
- export the full course content for the whole course or a filtered subset
- see the same canonical names everywhere in the app and in exported files
- distinguish the two export actions without reading detailed instructions

## Resolved Questions

- Should the redesign support both outline and full-content export? Yes.
- Should renamed titles apply everywhere or only in export? Everywhere.
- Should the export experience be split into two actions or kept unified? Split into two actions.
- Should outline export default to the whole course? Yes, with optional filtering.
- Should full-course export default to the whole course? Yes, with optional filtering.
- Should the app keep the current multi-format export support? Yes.

## Open Questions

None currently.

## Notes for Planning

- Planning should identify the canonical source for the new naming map.
- Planning should separate product requirements for outline export from full-content export.
- Planning should audit existing export serializers for fidelity gaps, especially where rich lesson content can be flattened or lost.
