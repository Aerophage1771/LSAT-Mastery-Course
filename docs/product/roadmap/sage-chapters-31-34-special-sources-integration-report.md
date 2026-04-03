# Sage Chapters 31-34 And Special Sources Integration Report

**Purpose:** Translate the final Sage RC chapters and supplemental source folders into current LSAT Mastery module names, distinguishing curriculum-grade additions from off-curriculum extras, paywalled fragments, and archival noise.  
**Audience:** Germaine, content editors, and future agents deciding what from the final Sage source wave belongs in the live course.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-28  
**Related docs:** [README.md](./README.md), [pathway-map.md](./pathway-map.md), [../course-content-map.md](../course-content-map.md), [../../archive/roadmaps/sage-chapters-21-30-integration-report.md](../../archive/roadmaps/sage-chapters-21-30-integration-report.md)

## Working Rule

- Use current LSAT Mastery route numbering and current module names in planning, tickets, and implementation notes.
- Do not create a new public `Spotlight` module by default. Treat Spotlight as a passage-style overlay that sharpens existing RC surfaces.
- Do not create a new public `Comparative` module by default. The current course already has comparative-facing question types and live comparative practice passages.
- Treat Chapter `31` as passage-style doctrine, not as a separate question-type taxonomy.
- Treat Chapter `32` as question-type refinement across the existing RC modules, not as an excuse to duplicate current module boundaries.
- Treat Chapter `33` as comparative-reading and comparative-question workflow guidance that should strengthen current modules, the RC reference layer, and existing comparative practice passages.
- Treat Chapter `34` as mostly `study-skills`, `test-day`, `writing`, and `admissions` material that does not belong in the core scored-LSAT doctrine flow unless you intentionally approve a broader student-support surface.
- Treat `Completed Files` and `Special_Deleted_Content` as non-sources.
- Treat `Special_Drills` and `Special_Strategy_Session` as optional supplemental prompts only. They are not a replacement for the structured chapter material and should not override current module doctrine.

## Source Classification

| Source folder | Current LSAT Mastery target | Recommended action | Notes |
| --- | --- | --- | --- |
| Chapter `31` `Spotlight` | shared RC front door, `Modules 24, 37, 39, and 50`, plus one live passage anchor | `Incorporate` | New useful style overlay; current course does not name this pattern explicitly. |
| Chapter `32` `RC Question Types` | existing RC question-type modules and `Module 50` | `Incorporate selectively` | Mostly refinement, trap-language cleanup, and workflow tightening rather than new doctrine. |
| Chapter `33` `Comparative` | `Modules 28, 29, 30, 38, 40, and 50`, plus comparative practice passages | `Incorporate` | Strongest import is one clear comparative workflow and tighter paired-passage handling. |
| Chapter `34` `Extra Notes` | future study-skills / operator-support layer, not core curriculum | `Defer` | Mostly plateau, panic, skipping, admissions, experimental-section, and writing content. |
| `Completed Files` | none | `Ignore` | No curriculum-grade content present. |
| `Special_Deleted_Content` | none | `Ignore` | Cleanup placeholder only. |
| `Special_Drills` | selected module polish or review-layer language only | `Selective / defer` | Many files are paywalled stubs or partial notes. |
| `Special_Strategy_Session` | review-layer language only | `Selective / defer` | One useful meta point, but not a module by itself. |

## External-to-Internal Crosswalk

| External source | Current LSAT Mastery target | Notes |
| --- | --- | --- |
| Chapter `31` `Spotlight` | `Module 24: Main Idea`, `Module 37: Passage Function`, `Module 39: Structure`, `Module 50: RC Quick Reference Guide`, and a live passage anchor such as `Module 47: Practice Passage 6: Julia Margaret Cameron` | Best treated as a style overlay for passages that spotlight one person, work, event, or development. |
| Chapter `32` `RC Question Types` | `Modules 24, 25, 29, 30, 32, 34, 35, 36, 37, 40, and 50` | The current public taxonomy already exists; the value is sharper solve-path language and trap framing. |
| Chapter `33` `Comparative` | `Modules 28, 29, 30, 38, 40, and 50`, plus `Module 46: Practice Passage 5: Cosmic Justice` and `Module 49: Practice Passage 8: Property Justice` | Strongest import is a single comparative workflow, not a brand-new route. |
| Chapter `34` `Extra Notes` | not core course modules | If adopted at all, this belongs in future study-skills / student-support surfaces, not in scored-section doctrine lessons. |
| `Special_Drills` | selective carryover to `Module 20: Paradox/Explain` or review-layer docs only | Only a small subset contains usable non-paywalled substance. |
| `Special_Strategy_Session` | review-layer language, study workflow, or mistake-journal guidance | The `two paths to a correct answer` note is meta-review doctrine, not a new lesson family. |

## Manual Verification First

- Verify that `Spotlight` improves passage recognition without turning RC into a brittle taxonomy game.
- Verify that the new spotlight language helps with `Main Idea`, `Passage Function`, and `Structure` rather than duplicating those modules.
- Verify that Chapter `32` additions sharpen current RC workflows instead of restating what the modules already teach in slightly different words.
- Verify that `Stated / Implied` refinements preserve the current evidential standard and do not create a fake hard boundary between `explicitly stated` and `strongly supported`.
- Verify that comparative additions default to one clear house method instead of making students choose among too many reading systems too early.
- Verify that the comparative workflow stays compatible with the current question-type modules and comparative practice passages instead of competing with them.
- Verify that Chapter `34` material is kept out of the core scored-LSAT path unless you intentionally decide to build a broader study-skills layer inside the product.
- Verify that any supplemental content pulled from `Special_Drills` or `Special_Strategy_Session` is actually present in the local files and not just a paywall stub.

## Current Mastery-Usable Anchors

- Chapter `31` `Spotlight`
  - `Module 47: Practice Passage 6: Julia Margaret Cameron` is the cleanest current live anchor for a passage that spotlights a single figure or body of work and asks students to understand what is distinctive or significant about it.
- Chapter `32` `RC Question Types`
  - the live course already has dedicated surfaces for `Main Idea`, `Inference`, `Author Viewpoint`, `Third-Party Viewpoint`, `Phrase Meaning`, `Phrase Function`, `Paragraph Function`, `Passage Function`, `Title`, and the `RC Quick Reference Guide`
  - the main need is better cross-module consistency in how those surfaces describe support standards, purpose standards, and trap families
- Chapter `33` `Comparative`
  - `Module 46: Practice Passage 5: Cosmic Justice` is a strong live comparative anchor for differences in argument basis, title pairing, and relationship analysis
  - `Module 49: Practice Passage 8: Property Justice` is a strong live comparative anchor for theory/application structure, purpose comparison, and passage-to-passage transfer
  - the current `Relationship`, `Title`, `Author Viewpoint`, and `Third-Party Viewpoint` modules already acknowledge comparative sets, so this wave should extend those rather than replace them
- Special sources
  - `review_rre.txt` contains a small amount of reusable reasoning language for paradox / explain review
  - `two_paths_to_a_correct_answer.txt` contains one useful review-layer principle about answer recognition vs elimination

## Surface-by-Surface Implementation Plan

### Chapter `31`: Spotlight

- Proposed edits:
  - add `Spotlight` to the shared RC style overlays in `Module 50`
  - teach three guiding questions:
    - what is being spotlighted?
    - what does the passage find significant, distinctive, or interesting about it?
    - what origin, influence, or impact material helps explain that significance?
  - add spotlight-specific `Main Idea` guidance in `Module 24`
  - add spotlight-specific `Primary Purpose / Passage Function` guidance in `Module 37`
  - add spotlight-specific blueprint expectations in `Module 39`, especially for passages that feel more narrative than argumentative
  - add one live anchor callout in `Module 47: Julia Margaret Cameron` so students can see what a spotlight-style passage looks like inside the current course
- Manual verification focus:
  - keep spotlight passages compatible with hybrid structures
  - make sure `spotlight` does not become a synonym for `single position`
  - keep the focus on `what is significant about X` rather than on memorizing a label

### Chapter `32`: RC Question Types

- Proposed edits:
  - `Module 24: Main Idea`
    - add the explicit standard that the answer must capture the overall perspective advanced or focused on by the passage
    - add a short `pseudo-main-point` note for summary / best-title stems only if it improves current title cross-linking without collapsing `Title` into `Main Idea`
  - `Module 25: Inference`
    - add the `whose perspective? what issue?` check from the chapter's `Stated / Implied` treatment
    - add clearer `glance back only when you know where to look` guidance
  - `Modules 29, 30, and 32`
    - tighten speaker / issue attribution language using the same `whose perspective? what issue?` framing
  - `Module 34: Phrase Meaning`
    - add the context-clue trio:
      - contrast
      - restatement
      - examples
    - add the explicit `dictionary-definition bait` warning
  - `Modules 35 and 36`
    - sharpen the distinction between `what happens here` and `why the author put it here`
    - reinforce that function answers must describe the author's job, not just local content
  - `Module 37: Passage Function`
    - reinforce that purpose answers must capture both the author's motivation and something the passage actually does
  - `Module 50`
    - standardize the above as one compact cross-module reminder instead of scattering slight wording changes everywhere
- Manual verification focus:
  - avoid duplicating current question-type intros word-for-word
  - keep the improvements procedural and trap-oriented
  - preserve the current support standard while making the workflows more explicit

### Chapter `33`: Comparative

- Proposed edits:
  - add one explicit `comparative reading workflow` to `Module 50`
  - make the `Sequential Approach` the default house method:
    - read Passage A
    - read Passage B while tracking similarities and differences
    - collect the relationship before going hard at the questions
  - present `Split Approach` only as an optional later experiment, not the default course method
  - strengthen `Module 28: Approach` with paired-passage blueprint language
  - strengthen `Modules 29 and 30` for separate `A` / `B` voice tracking, viewpoint ownership, and agreement / disagreement analysis
  - strengthen `Module 38: Relationship` so students explicitly name the paired-passage interaction before touching answers
  - strengthen `Module 40: Title` for paired-title and analogous-title handling
  - add comparative-method anchor callouts to `Module 46: Cosmic Justice` and `Module 49: Property Justice`
- Manual verification focus:
  - keep the comparative workflow simple enough to use under timed conditions
  - do not overstate the importance of paragraph-by-paragraph structure inside short paired passages
  - make sure the comparative method supplements, rather than competes with, the existing question-type modules

### Chapter `34` And The Special Folders

- Proposed edits:
  - no direct core-course import from `Chapter 34` into the scored LR / RC module path
  - defer the plateau, panic, skipping, admissions, and argumentative-writing material unless you intentionally build a student-support layer beyond scored-question doctrine
  - optionally adapt `two_paths_to_a_correct_answer.txt` into review-layer language about:
    - recognizing why the right answer is right
    - recognizing why the wrong answers are wrong
  - optionally adapt the usable part of `review_rre.txt` into `Module 20: Paradox/Explain` or into review notes:
    - explanation questions often punish naive assumptions
    - POE matters when your preferred explanation is too narrow or too committed
- Manual verification focus:
  - do not let off-curriculum study-skills content bloat the mastery course
  - do not cite the paywalled live-class stubs as if they contain usable doctrine
  - keep any carryover from the special folders clearly subordinate to the structured chapter material

## Extracted PT-Backed Source Candidates

- Chapter `31` `Spotlight`
  - `PT-132-S-3-Q-1` through `PT-132-S-3-Q-7`
  - `PT-133-S-4-Q-8` through `PT-133-S-4-Q-15`
- Chapter `33` `Comparative`
  - `PT-133-S-4-Q-22` through `PT-133-S-4-Q-27`
  - `PT-134-S-4-Q-13` through `PT-134-S-4-Q-19`
- Chapter `32` `RC Question Types`
  - the extracted files did not expose explicit PT identifiers in a reusable format
- Local verification note:
  - the Sage files do expose the PT identifiers above
  - the current workspace snapshot does not expose the earlier `DataToolkit/masterJson` corpus path used in prior sourcing passes, so these are extracted source candidates rather than locally re-verified `DataToolkit` matches in this report

## Recommended Implementation Order

1. Add the `Spotlight` overlay to the RC shared-method / reference layer and to the `Main Idea`, `Passage Function`, and `Structure` modules.
2. Apply the Chapter `32` question-type refinements to the existing RC module set, prioritizing `Main Idea`, `Inference`, `Phrase Meaning`, `Phrase Function`, `Paragraph Function`, and `Passage Function`.
3. Add the explicit comparative workflow and comparative passage-anchor callouts across `Modules 28, 29, 30, 38, 40, and 50`.
4. Keep Chapter `34` and most special-folder material deferred unless and until you decide to build a broader study-skills / operator-support layer.
