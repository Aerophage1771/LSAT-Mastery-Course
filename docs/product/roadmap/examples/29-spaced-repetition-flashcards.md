# Spaced Repetition Flashcards

**Purpose:** Integrate a local-first spaced repetition system (SRS) for memorizing core LSAT concepts and indicator words (Pedagogy & Curriculum Expansion).
**Audience:** Curriculum designers and frontend engineers.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-28
**Related docs:** [../README.md](../README.md), [../09-review-queue-and-mistake-journal.md](../09-review-queue-and-mistake-journal.md)

## User Problem
Students often struggle to retain rote knowledge required for the LSAT, such as conditional logic translation rules, common flaw patterns, and premise/conclusion indicator words. While lessons teach these concepts, the platform lacks a mechanism for long-term retention and active recall, forcing students to build their own Anki or Quizlet decks.

## Proposed Bet
Build a client-side Spaced Repetition System (SRS) directly into the platform. We will create a new repository of "Concept Flashcards" (distinct from the question bank). The system will use a standard scheduling algorithm (like SM-2) running entirely in the browser, saving review histories and upcoming due dates securely via `localStorage`. A daily "Review Due Cards" workflow will become a core habit loop.

## Why Now?
We already have the infrastructure for client-side state persistence (`utils/storage.ts`) and a clear module structure. By keeping the SRS local-first, we add immense pedagogical value—proven to increase retention—without the operational overhead of a backend database to track user review schedules. It perfectly complements the existing mistake journal bet.

## Dependencies
- Creation of a standardized `Flashcard` data model and authoring a robust starting deck of 100+ cards covering LR and RC fundamentals.
- Implementation of a lightweight, reliable SRS scheduling algorithm in TypeScript.
- Integration with the course dashboard to prominently display "Cards Due Today."

## Risks
- **Storage Limits:** Over time, a user's review history might grow large. We need to ensure the `localStorage` payload remains compact.
- **Algorithm Tuning:** If the spaced repetition intervals are too aggressive or too relaxed, users will lose trust in the system.
- **Scope Creep:** Users may immediately request the ability to author their own custom flashcards, which significantly increases UI complexity compared to a fixed curriculum deck.

## First Practical Milestone
Introduce a static "Flashcard Review" component at the end of Module 1 (Logical Reasoning Basics). This milestone will present a fixed set of 20 cards and implement the basic "Flip" and "Rate (Easy/Hard)" UI, saving the simple rating data to `localStorage` without the full long-term scheduling algorithm, validating the user interaction model first.
