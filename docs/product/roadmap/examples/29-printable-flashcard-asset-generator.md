# Printable Flashcard Asset Generator

**Purpose:** Define the roadmap bet for a Printable Flashcard Asset Generator.
**Audience:** Maintainers, product contributors, and future agents planning course improvements.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-16
**Related docs:** [README.md](../README.md), [vision-and-decision-filter.md](../vision-and-decision-filter.md), [../../../technical/architecture.md](../../../technical/architecture.md)

## User Problem

Students heavily rely on spaced repetition software (like Anki) or physical flashcards to memorize core logical frameworks, indicator words, and test strategies. Currently, they have to manually transcribe concepts from our lessons into their preferred format, which is time-consuming and prone to errors.

## Proposed Bet

Leverage our existing client-side PDF generation capabilities (`jspdf` and `jspdf-autotable`) and CSV export utilities to automatically extract key concepts, definitions, and indicator word tables from lessons. Generate downloadable, print-ready PDF flashcards (e.g., 3x5 layout) and Anki-ready CSV import files directly from the course interface.

## Why Now

We already have the infrastructure to parse the course catalog and generate PDFs and CSVs in `utils/export.ts`. Expanding these exporters to support alternative formats like flashcards is a low-effort, high-impact way to increase the portability and value of our curriculum without adding backend dependencies.

## Dependencies

- Existing PDF and CSV export utility functions must remain stable.
- Standardized tagging or structuring of "flashcardable" content (like definitions or tables) within `LessonData`.

## Risks

- Generating highly-formatted PDFs (like double-sided printable flashcards) using `jspdf` can be layout-intensive and finicky.
- If lesson content isn't strictly structured, the automated extraction might pull overly verbose text that doesn't fit well on a flashcard.
- Ensuring the CSV export precisely matches the import formatting requirements of tools like Anki may require ongoing tweaks.

## First Practical Milestone

Create a new function in `utils/export.ts` that filters all lessons for data tables (e.g., indicator words). Add a UI button in the export modal that downloads this specific table data as a simple two-column CSV file formatted specifically for basic Anki import.