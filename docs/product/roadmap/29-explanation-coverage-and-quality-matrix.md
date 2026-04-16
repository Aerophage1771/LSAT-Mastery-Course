# Explanation Coverage and Quality Matrix

**Purpose:** Provide visibility into explanation gaps and measure the structural quality of question bank explanations.
**Audience:** Content operators and maintainers.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-29
**Related docs:** [README.md](./README.md), [pathway-map.md](./pathway-map.md)

## User Problem
The question bank currently tracks usage and linkage via audit scripts (`question-usage-audit.md`), but lacks visibility into the depth and completeness of the explanations themselves. A question might exist and be linked to a lesson, but its explanation could be missing, excessively brief, or lacking specific rationale for incorrect options. This leaves value on the table for student review and creates blind spots for content improvement efforts.

## Proposed Direction
Expand the content auditing suite to generate an explanation coverage matrix. This audit will parse question files to verify the presence of an `explanation` field, calculate its word count, and detect structural patterns (e.g., does it address every option A-E?). The results will be aggregated into a new report (e.g., `explanation-coverage-audit.md`), highlighting low-depth items.

## Why Now
As the course matures beyond just "having questions" to "ensuring deep understanding," operator efforts need to shift toward improving existing content. A clear, automated report showing exactly which questions need better explanations provides immediate leverage for focused content sprints, rather than random spot-checking.

## Dependencies
- Extends the existing `scripts/lib/registeredLessons.mjs` and `npm run metrics:content` workflows.
- Requires defining baseline heuristics for what constitutes an "adequate" explanation (e.g., > 50 words, mentions of "A", "B", "C").

## Risks
- Word counts and basic pattern matching are blunt instruments; a long explanation might still be poor quality.
- Generating additional audit files could increase repository noise if not scoped properly to specific targets.

## Likely Upside
- Transforms subjective content quality reviews into objective, tracked metrics.
- Surfaces quick-win opportunities for operators to add value to highly used but poorly explained questions.
- Sets a clear standard for external content integrations.

## First Practical Milestone
- Update `scripts/generate-content-metrics.mjs` to output a simple count of questions missing an `explanation` field entirely, failing the build if new questions are added without one.