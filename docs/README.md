# Documentation Index

**Purpose:** Provide the canonical entrypoint into the repository's documentation system.  
**Audience:** Contributors who need to find the current source of truth quickly.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [../README.md](../README.md), [../AGENTS.md](../AGENTS.md), [archive/README.md](./archive/README.md)

## Docs Layers

- Root docs
  - [../README.md](../README.md): repo and product orientation
  - [../AGENTS.md](../AGENTS.md): execution rules, hazards, and content policy
- Product docs
  - [product/README.md](./product/README.md): current product truth and roadmap entrypoints
  - [product/course-experience.md](./product/course-experience.md): live user-facing workflows
  - [product/roadmap/README.md](./product/roadmap/README.md): planned work only
- Technical docs
  - [technical/architecture.md](./technical/architecture.md): runtime architecture, routing, and boundaries
  - [technical/content-and-validation.md](./technical/content-and-validation.md): content sources, validation scripts, and generated audits
- Operations docs
  - [operations/content-operations.md](./operations/content-operations.md): editing workflow and release-safety rules
  - [operations/recurring-maintenance.md](./operations/recurring-maintenance.md): ongoing audit, validation, and docs hygiene cadence
  - [operations/audits/README.md](./operations/audits/README.md): generated reports and where they come from
- Historical docs
  - [archive/README.md](./archive/README.md): archived plans, brainstorms, and superseded material

## Working Rules

- If a document describes today's product or repo behavior, it belongs under `product/`, `technical/`, or `operations/`.
- If a document describes planned work, it belongs under `product/roadmap/`.
- If a document is a dated brainstorm, plan, or superseded snapshot, it belongs under `archive/`.
- Generated reports are active reference material but not hand-maintained source-of-truth docs.
- Update this index when adding a new active doc family or moving a source-of-truth boundary.
