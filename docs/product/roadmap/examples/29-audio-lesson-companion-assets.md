# Audio Lesson Companion Assets

**Purpose:** Define a forward-looking bet for higher-value learning surfaces and exportable assets.
**Audience:** Product contributors, maintainers, and future agents.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-15
**Related docs:** [../README.md](../README.md), [../vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem
Many students have long commutes, exercise routines, or visual fatigue that limits their screen time. They want to continue absorbing LSAT concepts, reinforcing strategies, and reviewing lesson material while away from their keyboards and monitors, but our current course is entirely text-and-screen bound.

## Proposed Bet
Generate "Audio Lesson Companions" for the core curriculum. These are not simple text-to-speech dumps, but highly structured, podcast-style audio summaries of key concepts, drills, and strategies derived from the canonical lesson data. We will package these as an exportable premium asset (e.g., a private RSS podcast feed or downloadable MP3 bundle) that students can consume on the go.

## Why Now
Advances in high-quality, expressive TTS (Text-to-Speech) APIs make it feasible to generate engaging audio content programmatically without expensive human studio time. By leveraging our structured lesson data, we can create a compelling, screen-free study surface that adds massive convenience value to the course.

## Dependencies
- The content must be structured cleanly enough to separate conversational explanations from visual-only components (like complex logic games diagrams).
- A build step must be introduced to compile lesson prose into audio scripts, stripping out interactive elements and substituting audio-friendly descriptions where necessary.
- We need a mechanism to securely distribute the audio assets to paying users (e.g., generating unique, authenticated podcast feeds).

## Risks
- Technical LSAT explanations (especially Conditional Logic or Logic Games) may translate poorly to an audio-only format, confusing rather than helping students.
- Generating and hosting large volumes of high-quality audio files incurs ongoing infrastructure costs that must be balanced against the premium price point.
- Maintaining synchronization between text lessons and their audio companions during rapid curriculum updates requires robust automation to prevent drift.

## Likely Upside
Creates a highly visible, premium product tier that caters to busy adult learners. It opens up hours of new "study time" for users, increasing overall engagement and satisfaction, while differentiating the course from competitors who only offer screen-based reading or video.

## First Practical Milestone
Select three foundational Logical Reasoning lessons (e.g., Introduction to Premises and Conclusions, Sufficient vs. Necessary). Manually script and generate high-quality audio companions for these lessons using a modern TTS service. Embed simple HTML5 audio players in those specific lesson routes to test user engagement and gather qualitative feedback on the audio format's usefulness.
