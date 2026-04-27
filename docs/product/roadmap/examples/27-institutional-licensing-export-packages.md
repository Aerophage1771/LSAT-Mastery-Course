# Institutional Licensing Export Packages

**Purpose:** Define a forward-looking bet for product packaging and exportable assets tailored for institutional licensing.
**Audience:** Product contributors, maintainers, and future agents.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-15
**Related docs:** [../README.md](../README.md), [../vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem
Universities, pre-law advising offices, and boutique tutoring companies want to license the LSAT Mastery Course content but cannot integrate our current client-only SPA or simple JSON exports into their existing Learning Management Systems (LMS) like Canvas, Blackboard, or Moodle. They require standardized, interoperable packages that embed directly into their student portals while tracking completion.

## Proposed Bet
Develop a robust "Institutional Licensing" export tier that compiles the curriculum into standard LMS-compatible formats, starting with SCORM 1.2 or LTI (Learning Tools Interoperability) 1.3 packages. This transforms the repository from a single-player web app and JSON provider into a B2B product engine. We will leverage the existing lossless JSON contract (`canonical-course`) to generate these standard packages.

## Why Now
The curriculum is stable, and our validation scripts ensure high content integrity. DataToolkit is already handling direct-to-student course authoring, freeing up the repository's export capabilities to pursue higher-value, net-new distribution channels. Institutional sales represent a significant upside with minimal changes to the underlying content structure.

## Dependencies
- The `canonical-course` export must remain strictly lossless and backwards-compatible.
- We need to introduce an export builder capable of generating SCORM manifests (`imsmanifest.xml`) or LTI configurations from the JSON payload.
- No new runtime backend should be added; the compilation to SCORM/LTI must happen at build/export time.

## Risks
- SCORM and LTI standards are complex; building a compliant exporter might require significant initial investment.
- Institutions might request bespoke modifications to the curriculum, risking content drift if we don't strictly enforce a single canonical source of truth.
- The interactive elements (e.g., custom question cards) might lose fidelity when translated to standard LMS quiz formats.

## Likely Upside
Unlocks a high-margin B2B revenue stream by allowing the course to be sold in bulk to institutions, dramatically increasing the reach of the curriculum without requiring us to manage the student delivery infrastructure for those users.

## First Practical Milestone
Create a prototype export script (`scripts/export-scorm-prototype.mjs`) that takes a single short module (e.g., Module 1) from the `canonical-course` JSON and wraps it in a valid, static SCORM 1.2 package that can be successfully imported and viewed in a free LMS testing environment (like SCORM Cloud).
