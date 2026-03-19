# Export and Packaging Quality

**Purpose:** Define the roadmap bet for making export outputs and packaging surfaces more useful without weakening canonical naming or content truth.  
**Audience:** Product contributors and engineers planning export behavior, naming consistency, or operator-facing packaging workflows.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [README.md](./README.md), [pathway-map.md](./pathway-map.md), [../../technical/architecture.md](../../technical/architecture.md)

## Brief Problem Statement

- Export quality depends on canonical naming, route stability, and structured content fidelity.
- Packaging surfaces are useful only if they reflect the same course truth students see in the app.

## Why This Matters Now

- Export work already exists in the client shell, so the right next step is improvement, not invention.
- Better packaging becomes more valuable after trust, naming, and workflow basics are stable.

## Strategic Fit

- Primary category: packaging enabler
- Secondary category: maintainer simplifier
- Repo fit: medium-high, because the export surfaces exist but depend on multiple source-of-truth layers

## Preflight Questions

- Is the export problem about naming, structure, fidelity, or scope selection?
- Does the improvement preserve the client-only architecture?
- Which export behavior is current truth today, and which part is still planned?
- Does the proposal rely on canonical naming being fully settled first?

## Go / No-Go Gate

### Go when

- the change clearly improves export usefulness, packaging clarity, or naming consistency
- it stays inside current client-only constraints
- the affected export output can be checked against current lesson and catalog truth

### Defer when

- naming, audit, or content-integrity dependencies are still moving
- the change is directionally good but not yet specific about output shape or affected formats

### Not now when

- the proposal requires backend jobs, cloud storage, or admin workflows that do not exist
- the benefit is mostly cosmetic while fidelity and naming remain unresolved

## Current State In The Repo / Product

- Export flows already live in the app shell.
- The course catalog provides canonical naming.
- The question bank has its own export behavior and should stay distinct from full-course packaging.

## Target Outcome

- Exports use canonical names consistently.
- Course and question-bank exports remain clearly separated by purpose.
- Packaging outputs are reliable enough for tutoring, coaching, or operational use without hiding fidelity tradeoffs.

## Recommended Implementation Mode

- Contract-first export changes
- Shared naming resolution instead of string mutation in multiple surfaces
- Manual inspection of representative output files after structural changes

## Likely Affected Surfaces

- Export UI
- Course catalog naming consumers
- Question bank export behavior
- Any route or modal surface that labels export scope

## Likely Affected APIs / Data Touchpoints

- export serializers
- canonical naming helpers
- lesson and module hierarchy data
- export filenames and metadata

## Dependencies

- Stable route-to-content mapping
- Clean canonical lesson and module titles
- Structured content handling that does not silently flatten important lesson material

## Phased Implementation Path

1. Tighten naming consistency across export entrypoints.
2. Improve output structure and fidelity for the highest-value formats.
3. Refine packaging and scope controls once the data contracts are stable.

## Success Metrics

- Exported titles match in-app canonical names
- Fewer manual cleanup steps after generating representative exports
- Clear separation between course exports and question-bank exports

## Non-Goals / Not In V1

- Backend export services
- New commerce, distribution, or licensing systems
- Treating exports as a substitute for maintaining the live app experience

## Open Implementation Risks

- Export surfaces touch several naming and hierarchy layers at once
- Poorly scoped export work can leak internal ids or stale labels into user-facing outputs
- Rich lesson content may still require format-specific compromises that need explicit documentation
