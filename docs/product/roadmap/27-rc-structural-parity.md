# RC Structural Parity

**Purpose:** Address the imbalanced lesson coverage between deep Logical Reasoning modules and shallow Reading Comprehension modules.
**Audience:** Product contributors deciding what is worth planning next.
**Status:** proposed
**Source of truth:** yes
**Last reviewed:** 2026-03-28

## User Problem
The Logical Reasoning curriculum has deeply nested, specific modules that guide users step-by-step through different question types and advanced concepts. In contrast, Reading Comprehension modules (Module 30-40) often contain only an "Introduction" and a "Step-by-Step Approach." This leaves users without structured, progressive drill content and advanced breakdown lessons for RC, leading to imbalanced preparation and lower confidence in that section.

## Proposed Direction
Develop a systematic expansion of RC modules to mirror the depth of LR modules. This includes adding specific pattern recognition lessons, common traps, and advanced strategy guides within each RC module. We should build out structural parity to ensure users receive the same granular, progressive instruction in Reading Comprehension as they do in Logical Reasoning.

## Why Now
As the course grows, the disparity between LR and RC content quality becomes more glaring. We need to ensure that the curriculum addresses all sections equally to maintain trust and provide a comprehensive learning experience. Without this, the course feels incomplete and skewed toward LR mastery at the expense of RC.

## Dependencies
- Content generation for advanced RC strategies and pattern recognition.
- Available RC repository content (from Module 49 and 53) to source real LSAT passages and questions to populate these new lessons.
- Updates to `data/courseCatalog.json` and `data/websiteLessonCatalog.ts` to integrate the new lessons into the route map.

## Risks
- Expanding RC modules could require significant content creation effort if suitable existing content isn't easily adaptable.
- The sheer volume of new lessons might overwhelm the current module landing pages (addressed partially by bet 11, but still a risk).

## Likely Upside
- Increased user confidence and performance in Reading Comprehension.
- A more balanced and cohesive overall course offering.
- Stronger marketing position as a complete LSAT mastery tool.

## First Practical Milestone
Select one RC module (e.g., Module 30: RC: Complete the Passage) and build out a prototype expanded curriculum map for it, adding 3-4 specific lesson concepts. Implement this prototype structure in the data catalog to validate the approach before scaling to all RC modules.
