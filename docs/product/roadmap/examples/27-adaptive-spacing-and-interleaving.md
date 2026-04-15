# Adaptive Spacing and Interleaving Engine

**Purpose:** Define the roadmap bet for introducing spaced repetition and interleaving into the core curriculum sequence.
**Audience:** Product contributors, maintainers, and content editors deciding what to build next.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-15
**Related docs:** [README.md](./README.md), [../vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem

Students currently work through the curriculum sequentially, mastering one question type or concept in isolation (e.g., spending a full day on Necessary Assumption) before moving on. By the time they reach a full diagnostic or practice test weeks later, their accuracy on those earlier concepts has decayed because the curriculum lacks built-in spaced repetition and mixed-practice interleaving.

## Proposed Bet

Introduce a client-side adaptive spacing and interleaving engine that dynamically resurfaces previously learned concepts and question types at optimal intervals. Instead of just offering static review modules, the system will inject short "Daily Mixed Review" sets into the student's learning flow, drawing from the question bank for concepts they've already encountered.

## Why Now

The core curriculum sequence is stable, and our question bank integration is robust. With foundational content and validation scripts already in place, we can shift focus from initial concept acquisition to long-term retention and mastery.

## Dependencies

- **Local Storage Architecture:** Requires leveraging `localStorage` to robustly track a student's encounter history, accuracy rates, and time-since-last-review for specific concepts without relying on a backend.
- **Question Bank Tagging:** Relies on the existing question bank (`modules/module48`, `module49`, etc.) being accurately tagged and capable of being queried by concept to ensure appropriate questions are pulled.

## Risks

- **Curriculum Friction:** Interleaving might complicate the straightforward sequential flow, making students feel forced into review sessions when they want to learn new material.
- **Client-Side Storage Limits:** Expanding `localStorage` to track fine-grained encounter history might hit storage limits or slow down performance if not optimized.

## First Practical Milestone

Build a basic "Daily Mixed Review" client-side generator feature accessible from the main dashboard. This feature will pull a static set of 5 questions randomly selected from modules the student has previously completed and marked as "done" in their `localStorage` progress state.
