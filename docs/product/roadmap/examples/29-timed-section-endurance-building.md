# Timed Section Endurance Building

**Purpose:** Define the roadmap bet for moving beyond untimed accuracy practice into strict, section-level time management and stamina training.
**Audience:** Product contributors, maintainers, and content editors deciding what to build next.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-15
**Related docs:** [README.md](./README.md), [../vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem

The current question bank and module lessons are highly effective for teaching accuracy and conceptual mastery in an untimed, low-pressure environment. However, they fail to train the stamina, pacing, and section-level time management required for test day. Students often report high accuracy during lessons but significant performance drops when faced with a strict 35-minute constraint.

## Proposed Bet

Create a dedicated "Endurance Mode" assessment surface. This feature will simulate full 35-minute sections by dynamically assembling appropriate question mixes, enforcing strict time limits, and providing real-time pacing alerts (e.g., "You are falling behind pace").

## Why Now

True mastery requires both accuracy and speed. Now that the content library is robust and validated, we need to bridge the gap between initial untimed learning and realistic test-day simulation to provide a complete preparation experience.

## Dependencies

- **Section Assembly Logic:** Requires new client-side logic to assemble full, balanced sections (e.g., ~25 LR questions) from the existing question banks (`modules/module48`, `module49`, `module53`).
- **Overlap Prevention:** Must ensure the assembled sections do not contain questions the student has recently seen in lessons or previous endurance tests, relying on `localStorage` state.

## Risks

- **Client-Side Vulnerability:** Client-side timers can be easily paused, manipulated, or bypassed by refreshing the page, which reduces the strictness and psychological pressure of the simulation.
- **Content Exhaustion:** Aggressive use of full sections might quickly burn through the available question bank, leaving fewer unseen questions for targeted concept review.

## First Practical Milestone

Implement a "Strict 35-Minute Mode" toggle in the standalone Question Bank route. When active, this mode disables the ability to pause the timer, hides all immediate feedback and explanations until the entire set is submitted, and auto-submits the section when the 35-minute timer expires.
