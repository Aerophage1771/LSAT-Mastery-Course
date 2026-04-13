# RC Skill Module Depth Expansion

**Purpose:** Define the roadmap bet for deepening the core Reading Comprehension skill modules.
**Audience:** Curriculum maintainers, content editors, and engineers planning structural course updates.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-13
**Related docs:** [README.md](./README.md), [../course-content-map.md](../course-content-map.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem

The core Reading Comprehension skill modules (`24` to `40`, corresponding roughly to route IDs `26` to `40` representing topics like Inference, Analogy, Application, etc.) are currently "thin." A typical skill module here has only two lessons: an Introduction and a "Step-by-Step Approach." This leaves students without immediate, targeted drill application or exposure to advanced difficulty traits within the isolated context of the skill itself. Students read about the concept but are forced to wait until full practice passages (modules 41+) to actually apply and test these individual skills.

## Proposed Direction

Expand the standard lesson spine for RC Skill Modules to match the depth and progression of Logical Reasoning modules. The target structure should evolve from the current 2-lesson minimum to a fuller framework:
1. Introduction
2. Step-by-Step: [Type]
3. Core Drill: [Type] Application
4. Traits of High-Difficulty: [Type]
5. Advanced Drill / Trap Patterns

This requires creating dedicated "micro-drills" or excerpt-based practice questions that isolate the specific RC skill (e.g., a single paragraph followed by a Main Idea or Author Attitude question) rather than relying solely on full 4-paragraph passages.

## Why Now

The platform has established a robust Question Bank and a solid metadata schema. The LR curriculum already demonstrates the value of a deep, progressive lesson spine. Currently, RC students experience a steep drop-off in structural support between learning a concept and being tested on it in full-length passages. Bridging this gap now will significantly improve the early RC study loop and student confidence.

## Likely Upside

- Stronger student retention and comprehension of RC skills before encountering full passage cognitive load.
- A more balanced curriculum where RC is not structurally weaker or thinner than LR.
- Creation of a new, reusable asset class: RC excerpts/micro-drills, which can also power new Question Bank modes and review queues.
- Increased operator leverage by standardizing the RC module spine against the proven LR model.

## First Practical Milestone

Audit the existing RC skill modules to identify the most critical 3-5 skills (e.g., Main Idea, Inference, Author Attitude) that desperately need immediate drilling. Draft and implement the expanded lesson spine (Introduction, Step-by-Step, Core Drill, High-Difficulty Traits) for just one of these modules as a proof-of-concept, using either new excerpted content or repackaging specific questions from existing full passages to act as micro-drills.
