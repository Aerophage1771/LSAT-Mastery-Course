# Timed Simulated Exams

**Purpose:** Introduce client-side, full-length timed exam simulations to bridge the gap between untimed practice and actual test day conditions.
**Audience:** Product contributors and curriculum developers.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-28
**Related docs:** [../README.md](../README.md), [../vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem
Students currently study individual lessons and practice questions out of context. While this builds concept mastery, it fails to train pacing, stamina, and the high-pressure decision-making required for the actual LSAT. Students must currently leave the platform to take timed practice tests, fragmenting their learning data and progress tracking.

## Proposed Bet
Build a client-side "Simulated Exam" mode that dynamically assembles a full 4-section LSAT from the existing repository question bank. This mode will include a strict 35-minute timer per section, a specialized UI that mimics the official testing environment (e.g., flagging questions, hiding the timer), and an end-of-exam score approximation based on raw accuracy. All progress will be saved securely via `localStorage` to allow for resume capability and post-exam review.

## Why Now?
The question bank currently has sufficient breadth and validated linkage across RC and LR modules. We also have a robust `saveSecure` implementation for client-side state. Adding a capstone assessment feature directly increases the perceived value of the course and closes a major workflow loop for the student before test day.

## Dependencies
- The practice set assembly tools must be mature enough to pull non-overlapping, balanced sets of questions.
- A new assessment UI layer must be built that overrides standard lesson navigation during an active exam.
- Secure, client-side session management to prevent accidental data loss if a user refreshes the page mid-exam.

## Risks
- **Content Exhaustion:** Generating random full exams might consume questions needed for specific module drills, leading to a degraded lesson experience.
- **Client-Side Stability:** A 2.5-hour exam completely reliant on the browser's state could result in lost progress if not checkpointed aggressively.
- **Score Liability:** Providing a scaled score estimation might mislead students if our raw-to-scaled conversion is inaccurate compared to official LSAC scales.

## First Practical Milestone
Implement a "Single Section Timer" feature in the existing `QuestionBank` study mode. This allows users to generate a 25-question set and complete it with a basic 35-minute countdown clock, providing a low-risk testing ground for the timer UI and state management before scaling to a full 4-section exam.
