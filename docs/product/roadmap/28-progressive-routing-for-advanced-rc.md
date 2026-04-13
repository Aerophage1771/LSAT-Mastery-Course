# Progressive Routing for Advanced RC

**Purpose:** Define the roadmap bet for integrating Advanced RC into a continuous difficulty curve.
**Audience:** Curriculum maintainers, content editors, and engineers planning structural course updates.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-13
**Related docs:** [README.md](./README.md), [../course-content-map.md](../course-content-map.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem

Advanced RC modules (e.g., `Advanced Passage 1: Mathematics as Language`) exist as isolated, distinct entities structurally separated from the core RC practice flow. This creates an abrupt shift in difficulty and a disjointed learning experience. Students either avoid the advanced passages because they are cordoned off as "special," or they hit a cliff when transitioning from standard practice to advanced practice without a guided ramp-up. The structural isolation weakens the course map's internal coherence by failing to provide a smooth, progressive difficulty curve.

## Proposed Direction

Integrate Advanced RC passages directly into a unified RC progressive route map rather than maintaining them as a separate "Advanced" silo. This involves:
1. Re-sequencing the lesson distribution so that Advanced passages serve as capstone challenges at the end of specific thematic units (e.g., a difficult science passage at the end of a series of standard science passages).
2. Developing "ramp-up" lessons immediately preceding Advanced passages that explicitly teach the traits of high-difficulty RC (dense syntax, abstract terminology, subtle authorial shifts) using excerpts from the upcoming advanced passage.
3. Updating the routing logic and metadata to reflect a continuous 1-N difficulty progression for RC practice.

## Why Now

The current architecture supports robust lesson routing and module remapping (as seen in `utils/courseCatalog.ts`). The recent migrations and standardization of the RC method vocabulary provide a stable foundation. Addressing the structural holes between standard and advanced RC now will capitalize on this stability to build a much stronger, more coherent offer for high-scoring students.

## Likely Upside

- A more cohesive and engaging student journey that builds confidence through a logical difficulty progression.
- Removal of arbitrary structural barriers that cause students to underutilize the most challenging (and therefore most instructive) content.
- Better alignment with the LSAT's actual difficulty distribution, where "advanced" passages are mixed in, not isolated.
- The creation of reusable "difficulty ramp" lesson templates that can be applied to other areas of the course.

## First Practical Milestone

Select two existing Advanced RC modules (e.g., `51` and `52`). Map out where they best fit within the standard RC practice flow based on topic or underlying skill. Create the connecting tissue (a short "High-Difficulty Traits" lesson or note) and update the local route map to interleave these advanced modules directly after their corresponding standard practice modules, testing the progressive flow in the client shell.
