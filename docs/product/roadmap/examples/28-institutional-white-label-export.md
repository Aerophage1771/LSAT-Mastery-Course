# 28. Institutional White-Label Export

**Purpose:** Define a product packaging and exportable assets bet to allow B2B partners and tutors to generate branded PDF workbooks from the curriculum.
**Audience:** Product managers, business development, and engineering leads.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-18
**Related docs:** [README.md](../README.md), [vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem

Independent LSAT tutors, pre-law advisors, and small test-prep institutions love the course's content and structure, but they want to integrate it into their own branded curriculum. Currently, if a tutor wants to assign a specific set of Logical Reasoning drills from our question bank, they have to point students to our URL, losing brand cohesion and control over the offline study experience.

## Proposed Bet

Develop an "Institutional White-Label Export" feature.
- Expand the existing `jspdf` export utilities to support custom cover pages, headers, footers, and institutional watermarks.
- Allow institutional accounts to curate custom practice sets or entire modules and export them as highly-polished, printable PDF workbooks branded with their logo and contact info.
- Include auto-generated, branded answer key appendices.

## Why Now?

We already have a robust, client-side PDF generation foundation built for individual student export. By extending this to a B2B audience, we unlock a new, high-margin licensing revenue stream without needing to build complex multi-tenant backend infrastructure or custom LMS integrations. It leverages our existing high-quality curriculum as a distributable asset.

## Dependencies

- **PDF Generation Upgrades:** Enhancements to `utils/export.ts` to support image embedding (logos), advanced pagination, and dynamic templating.
- **Licensing Model:** A commercial licensing agreement and validation mechanism (even if just a client-side key) to gate access to the white-label export UI.

## Risks

- **Content Security:** Distributing high-quality PDFs makes it easier for bad actors to pirate and redistribute the curriculum without a license.
- **Client-Side Limitations:** Generating massive, hundreds-of-pages PDFs entirely in the browser using `jspdf` may hit memory limits or crash on lower-end devices.

## First Practical Milestone

Create a prototype "Tutor Export Mode" toggle that modifies the existing Practice Set PDF export to include a configurable custom logo and header text, demonstrating feasibility and memory stability on a 50-question set.