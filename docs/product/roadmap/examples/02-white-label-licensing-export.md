# White-Label Licensing Export Pipeline

**Purpose:** Define a bet for expanding product packaging through white-label exports for B2B.
**Status:** example

## User Problem
University pre-law programs, boutique tutoring firms, and international institutional partners want to use our curriculum structure and methodologies but need materials branded with their own institutional identity. Currently, our export mechanisms (PDF, CSV, Course Export) are tightly coupled to our brand identity, internal routing constraints, and specific UI shells, making it impossible to sell the curriculum as a standalone, white-labeled asset.

## Proposed Direction (or Bet)
We bet that establishing a "White-Label Licensing Export Pipeline" will open up significant B2B revenue channels.
We will build a new set of export generators in `utils/export.ts` (and a corresponding CLI script) that strip all internal branding, navigation, and hardcoded stylistic opinions. The pipeline will accept a configuration file (e.g., passing in brand colors, logo URLs, and custom typography) and compile the existing curriculum modules into clean, unbranded PDF syllabi, SCORM-compliant packages, and generic JSON datasets ready for ingestion into third-party LMS platforms.

## Why Now
The core curriculum is mature and the fundamental course structure (mapped in `data/courseCatalog.json`) is stable. We already have the baseline technology for client-side and script-based PDF/JSON exports. Extending this to support themeability and unbranded extraction capitalizes on our existing assets to address a different market segment (institutions) without requiring changes to the core student-facing web product.

## Dependencies
- Refactoring `utils/export.ts` to fully abstract hardcoded brand colors and fonts into a configurable theme object.
- Creation of a SCORM or generic LMS-compatible export format alongside the existing PDF and text formats.
- Clear licensing and content-policy definitions for which question-bank materials (e.g., real LSAT questions vs. invented ones) can be legally exported for third-party B2B use.

## Risks
- **LSAC Licensing Constraints:** Exporting real PT questions in white-label formats may violate LSAC digital licensing agreements if the end-user institution does not hold their own license. We may need to restrict the export to only "invented" questions (Lessons 1-3) or require strict API-key validation.
- **Export Brittleness:** Maintaining multiple specialized export formats increases the maintenance burden when core curriculum structures change.

## Likely Upside
- Unlocks high-margin B2B licensing deals with institutional partners.
- Increases the ROI of our content creation efforts by selling the same curriculum in a new package.
- Forces better separation of concerns between our content data and our presentation layer.

## First Practical Milestone
Implement a `themeConfig` parameter in the existing PDF export utility (`utils/export.ts`) that allows overriding the primary color and header logo, and produce a prototype "unbranded" PDF of Module 1.