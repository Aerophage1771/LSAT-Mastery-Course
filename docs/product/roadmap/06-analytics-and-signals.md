# Analytics and Signals

**Purpose:** Define the supporting roadmap doc for measuring content, workflow, and reliability decisions without inventing a backend analytics stack.  
**Audience:** Maintainers and product contributors who need evidence for roadmap prioritization.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [README.md](./README.md), [pathway-map.md](./pathway-map.md), [../../operations/audits/README.md](../../operations/audits/README.md)

## Brief Problem Statement

- The repo has strong structural signals from audits and validation, but weak explicit measurement for product and workflow decisions.
- Without a clear signals plan, roadmap decisions can drift toward intuition, noise, or fake precision.

## Why This Matters Now

- Every other roadmap bet benefits from knowing what can already be measured and what still requires manual QA.
- The app has no backend analytics pipeline, so measurement must stay honest about current constraints.

## Strategic Fit

- Primary category: maintainer simplifier
- Secondary category: trust protector
- Repo fit: medium-high, because diagnostics already exist even though runtime analytics do not

## Preflight Questions

- What decision is blocked by missing evidence?
- Can the needed signal come from existing audits, tests, or manual browser checks?
- If runtime instrumentation is needed, can it stay client-only and explicitly documented?
- Who will actually consume the signal after it is added?

## Go / No-Go Gate

### Go when

- the signal directly informs a real roadmap or maintenance decision
- an existing audit, test, or lightweight client-only measurement can answer the question
- the output will have a clear owner and review cadence

### Defer when

- the desired measurement is interesting but not tied to a concrete decision
- the signal depends on a future analytics or backend stack

### Not now when

- the proposal creates dashboards or event noise without a clear consumer
- the same decision can be made from existing validation, audits, or manual QA

## Current State In The Repo / Product

- Generated audits provide integrity and linkage signals.
- Typecheck, tests, and build checks provide technical confidence signals.
- There is no backend analytics system, admin reporting surface, or persistent event pipeline in this repo.

## Target Outcome

- Roadmap decisions use a small, explicit set of trustworthy signals.
- Contributors know when audits are enough and when manual browser QA is still required.
- Any new instrumentation stays proportional to the real decision it supports.

## Recommended Implementation Mode

- Prefer existing audits, tests, and manual QA notes first
- Add lightweight client-only instrumentation only when it unblocks a clear decision
- Document signal ownership and review cadence alongside the change

## Likely Affected Surfaces

- Generated audit docs
- Validation scripts
- Browser QA checklists
- Any export, question-bank, or progress UI that needs evidence-based refinement

## Likely Affected APIs / Data Touchpoints

- audit report outputs
- test and build outputs
- optional client-only event hooks if explicitly introduced later

## Dependencies

- Clean source-of-truth boundaries between live docs, generated diagnostics, and archive material
- Stable naming so signals can be interpreted consistently
- Agreement on which questions actually need measurement

## Phased Implementation Path

1. Use existing audits and tests as the default evidence layer.
2. Document which roadmap bets require additional manual QA or explicit signal review.
3. Add minimal new instrumentation only when the earlier layers cannot answer the decision.

## Success Metrics

- Fewer roadmap discussions that depend on guesswork alone
- Clearer reuse of existing audit and validation output during planning
- Minimal measurement work that still supports better decisions

## Non-Goals / Not In V1

- Third-party analytics tooling by default
- Admin dashboards or reporting backends
- Instrumentation added solely because analytics feels more professional

## Open Implementation Risks

- Signals can look more objective than they really are if the measurement question is vague
- Lightweight instrumentation can still create maintenance burden if ownership is unclear
- Contributors may overread generated audit output unless docs keep its role precise
