# Sage Chapters 21-30 Integration Report

**Purpose:** Translate the Chapters `21-30` external audit into current LSAT Mastery module names, shared RC surfaces, review-layer changes, and verification-sensitive implementation work.  
**Audience:** Germaine, content editors, and future agents expanding the current curriculum.  
**Status:** historical  
**Source of truth:** no  
**Last reviewed:** 2026-03-28  
**Related docs:** [../../product/roadmap/README.md](../../product/roadmap/README.md), [../../product/roadmap/sage-chapters-31-34-special-sources-integration-report.md](../../product/roadmap/sage-chapters-31-34-special-sources-integration-report.md), [../roadmaps/README.md](../roadmaps/README.md), [sage-chapters-11-20-integration-report.md](./sage-chapters-11-20-integration-report.md)

## Working Rule

- Use current LSAT Mastery route numbering and current module names in planning, lesson titles, and internal tickets.
- Do not mirror the Sage chapter list as one new public module per chapter. Most of this wave belongs in existing LR modules, the review layer, or shared RC front-door/reference surfaces.
- Treat Chapter `24` as a review-layer recommendation, not as standalone doctrine.
- Treat Chapters `25-26` as shared RC onboarding and method work, not as ordinary question-type modules.
- Treat Chapters `27-30` as RC passage-style overlays and recognition doctrine, not as rigid mutually exclusive taxonomy buckets.
- Keep the `rewrite, not import` rule from the earlier wave. Any adopted language, frameworks, or drills should be rebuilt in Mastery voice and structure.
- Prefer existing repository-backed LR drills and existing PT-backed RC practice passages before adding new sourcing work.
- If a proposed addition cannot be tied to a live PT-backed question or practice passage, keep it marked as incomplete until a real anchor is chosen.

## External-to-Internal Crosswalk

| External chapter | Current LSAT Mastery target | Notes |
| --- | --- | --- |
| Chapter `21` `Method of Reasoning` | `Module 3: Method of Reasoning` | Mostly a polish-and-precision chapter, not a structural rewrite. |
| Chapter `22` `Flaw` | `Module 5: Flaw` | Main import is stronger solve-path framing, especially the two-step answer test. |
| Chapter `23` `Parallel / Analogy` | `Module 4: Parallel Reasoning` and `Module 6: Parallel Flaw` | Keep the current split instead of importing a merged public label. |
| Chapter `24` `Logical Reasoning Review` | review-layer surfaces: `question bank`, module reference guides, and review-queue planning | No substantive doctrine source was recoverable from the extracted chapter folder. |
| Chapter `25` `Introduction to Reading Comprehension` | shared RC front door before `Module 24: Main Idea`, with spillover to `Modules 37, 39, and 50` | Best treated as onboarding posture, not as a new question type. |
| Chapter `26` `The RC Method` | `Module 50: RC Quick Reference Guide`, plus shared-method additions in `Modules 24, 28, 37, and 39` | This is the best candidate for one clear RC method surface. |
| Chapter `27` `The Critique or Debate Style` | `Modules 24, 30, 32, 36, 37, 38, and 39` | Debate passages depend on perspective tracking, author stance, and blueprinting. |
| Chapter `28` `Single Position` | `Modules 24, 30, 36, 37, and 39` | Single-position passages need stronger one-view-with-support recognition. |
| Chapter `29` `Phenomenon-Hypothesis` | `Modules 24, 28, 31, 36, 37, 39, and 41` | Best treated as a passage-style overlay that affects several existing RC tasks. |
| Chapter `30` `Problem-Analysis` | `Modules 24, 28, 31, 36, 37, and 39`, plus selected RC practice passages | Strongest import is cleaner problem / solution / no-endorsed-solution differentiation. |

## Manual Verification First

- Verify that Chapters `21-23` stay as LR module refinements, not as excuses to rename or split stable LR modules.
- Verify that Chapter `24` remains review-layer only unless a real doctrine source is later recovered.
- Verify whether the Chapter `25-26` material should ship as a low-risk RC front-door/reference-layer expansion first, rather than as a new numbered public module that would force another catalog renumbering pass.
- Verify that RC passage styles are taught as recognition aids and blueprinting tools, not as a brittle labeling game students must solve before they can answer questions.
- Verify that the debate-style additions sharpen `author view` and `third-party view` attribution instead of duplicating those modules in different words.
- Verify that `Phenomenon-Hypothesis` and `Problem-Analysis` remain compatible with hybrid passages. One passage can be both debate and problem-analysis, or both single-position and problem-analysis.
- Verify that the final student-facing flow gives RC one clear front door for posture and method before the question-type modules start demanding performance.

## Practice-Passage And Question Anchor Rule

- Each major addition in this report should anchor to at least one real PT-backed LR drill or RC passage/question set already in the course when feasible.
- For Chapters `21-23`, prefer the existing module-local LR drill banks and question repositories before sourcing fresh questions.
- For Chapters `25-30`, prefer existing PT-backed RC practice passages already in the course over prose-only passage-style discussion.
- If an addition changes how students read full passages, verify it against a full PT-backed passage rather than only against isolated question stems.
- If no clean current anchor exists, keep the addition explicitly marked as a second-pass sourcing task instead of silently filling the gap with invented examples.

## Current Mastery-Usable Anchors

- Chapter `21` `Method of Reasoning`
  - current `Module 3` drills already provide live anchors for method-family translation and abstract-answer evaluation, including `PT-119-S-4-Q-4`, `PT-112-S-1-Q-7`, and `PT-104-S-4-Q-21`
- Chapter `22` `Flaw`
  - current `Module 5` drills already cover source attack, unreasonable standards, and other core flaw families, so the main need is solve-path language rather than new sourcing
- Chapter `23` `Parallel`
  - current `Module 6` anchors remain strong for the flaw side: `PT-106-S-3-Q-21`, `PT-113-S-3-Q-21`, `PT-113-S-2-Q-21`, and `PT-103-S-1-Q-21`
  - the distinct Sage-style `track record -> future probably` subpattern can stay flagged as a second-pass `Parallel Reasoning` anchor search if the current route-level drills prove too thin
- Chapter `24` `Logical Reasoning Review`
  - route the work through the existing `question bank`, module reference guides, and [09-review-queue-and-mistake-journal.md](./09-review-queue-and-mistake-journal.md) rather than inventing a new doctrine module
- Chapter `27-30` RC style anchors already present in the course
  - `PT-128-S-1-P-2` `Bankruptcy Laws` in `Module 43: Practice Passage 2` is a strong `problem-analysis` anchor and already exposes `problem -> endorsed solution` structure
  - `PT-141-S-1-P-3` `Advertising Critique` in `Module 48: Practice Passage 7` is a strong `critique / debate` anchor and also functions as a `debate + problem-analysis` hybrid
  - `PT-128-S-1-P-3` `Cultural Identity` in `Module 44: Practice Passage 3` is a useful `single-position` anchor with layered support and downstream viewpoint work
- Chapter `29` `Phenomenon-Hypothesis`
  - this still needs a cleaner `current course` anchor pass than the other RC styles if you want zero new sourcing, but the exact Sage-referenced passage sets do now resolve cleanly inside `DataToolkit`

## Sage-Referenced DataToolkit Candidates

- The extracted Sage files for Chapters `21-23` and `27-30` do contain explicit PT-backed references, using the `PT132 S2 Q14` style rather than the repo-standard `PT-132-S-2-Q-14` style.
- All extracted Sage PT references for Chapters `21-23` and `27-30` resolved cleanly in local `DataToolkit` `masterJson`.
- Chapters `24-26` did not expose explicit PT-backed question IDs in the extracted source files, so there was nothing to match there.
- These should be treated as `source-parity candidates`, not automatic replacements for the earlier `prefer existing course anchors first` rule. Most of them are later PTs and therefore best used when matching the Sage examples matters more than limiting sourcing churn.

### LR Chapters `21-23`

- Chapter `21` `Method of Reasoning`
  - all `7` Sage lesson references resolved in `DataToolkit`, including `PT-132-S-2-Q-14`, `PT-132-S-4-Q-21`, `PT-133-S-1-Q-17`, `PT-133-S-3-Q-19`, `PT-134-S-1-Q-3`, `PT-135-S-4-Q-16`, and `PT-142-S-2-Q-4`
- Chapter `22` `Flaw`
  - all `37` Sage references resolved in `DataToolkit`; representative candidates include `PT-132-S-2-Q-5`, `PT-132-S-4-Q-19`, `PT-133-S-1-Q-23`, `PT-134-S-3-Q-14`, `PT-142-S-2-Q-18`, and `PT-143-S-4-Q-24`
- Chapter `23` `Parallel`
  - all `20` Sage references resolved in `DataToolkit`; representative candidates include `PT-132-S-2-Q-13`, `PT-133-S-1-Q-24`, `PT-133-S-3-Q-25`, `PT-134-S-1-Q-21`, `PT-142-S-2-Q-23`, and `PT-143-S-4-Q-26`

### RC Chapters `27-30`

- Chapter `27` `Critique / Debate`
  - Sage-backed `DataToolkit` passage sets:
  - `PT-108-S-1-P-3-Q-17` through `PT-108-S-1-P-3-Q-21`
  - `PT-110-S-4-P-2-Q-7` through `PT-110-S-4-P-2-Q-14`
  - `PT-132-S-1-P-2-Q-9` through `PT-132-S-1-P-2-Q-14`
  - `PT-143-S-2-P-1-Q-1` through `PT-143-S-2-P-1-Q-7`
- Chapter `28` `Single Position`
  - Sage-backed `DataToolkit` passage set:
  - `PT-142-S-3-P-2-Q-9` through `PT-142-S-3-P-2-Q-16`
- Chapter `29` `Phenomenon-Hypothesis`
  - Sage-backed `DataToolkit` passage sets:
  - `PT-132-S-3-P-2-Q-8` through `PT-132-S-3-P-2-Q-13`
  - `PT-143-S-2-P-4-Q-21` through `PT-143-S-2-P-4-Q-27`
- Chapter `30` `Problem-Analysis`
  - Sage-backed `DataToolkit` passage sets:
  - `PT-132-S-3-P-3-Q-14` through `PT-132-S-3-P-3-Q-20`
  - `PT-133-S-4-P-1-Q-1` through `PT-133-S-4-P-1-Q-7`

## RC Front-Door Placement Decision

- Recommended low-risk placement:
  - absorb Chapter `25-26` into one shared RC front door spanning `Module 24: Main Idea`, `Module 39: Structure`, and `Module 50: RC Quick Reference Guide`
  - add one explicit onboarding layer for `same tools, different posture` plus one explicit `RC method` layer for low-resolution summary, perspective tracking, and recap
- Higher-risk placement:
  - create a new public pre-`24` RC onboarding or method module
  - only do this if you intentionally approve another catalog renumbering pass across the RC and advanced spans
- Manual verification focus:
  - confirm whether the added front-door material is better as a route-level module, a dashboard/landing surface, or a reference-layer expansion
  - confirm that the front-door method does not duplicate later question-type modules
  - confirm that the `RC method` has one obvious home instead of being scattered across intros with slightly different wording

## Module And Surface Integration Plan

| Surface | Current title | External source | Priority | Doctrine-change risk | Manual verification focus |
| --- | --- | --- | --- | --- | --- |
| `Module 3` | `Method of Reasoning` | Chapter `21` | `2` | `Low-Medium` | abstract-answer translation, piecemeal analysis, and method-family recall |
| `Module 5` | `Flaw` | Chapter `22` | `2` | `Medium` | descriptive accuracy vs actual vulnerability |
| `Module 4` | `Parallel Reasoning` | Chapter `23` | `2` | `Low-Medium` | diagramming triggers, order independence, and exact force |
| `Module 6` | `Parallel Flaw` | Chapter `23` | `2` | `Low-Medium` | hybrid conditional/quantifier flaws and elimination discipline |
| review layer | `question bank` plus reference guides | Chapter `24` | `1` | `Low` | cumulative review packaging without fake doctrine |
| RC front door | onboarding before `Module 24` | Chapter `25` | `1` | `Medium` | same tools / different posture without forcing a new public module |
| `Module 50` plus shared RC method surfaces | `RC Quick Reference Guide` and coordinated early RC modules | Chapter `26` | `1` | `Medium` | one clear method home, low-resolution summary, perspective tracking |
| `Modules 24, 30, 32, 36, 37, 38, 39` | RC main-idea, viewpoint, function, relationship, and structure surfaces | Chapter `27` | `1` | `Medium-High` | conflict mapping, author stance, and reasons-for / reasons-against tracking |
| `Modules 24, 30, 36, 37, 39` | RC main-idea, viewpoint, function, and structure surfaces | Chapter `28` | `2` | `Medium` | one-perspective passages with heavier support density |
| `Modules 24, 28, 31, 36, 37, 39, 41` | RC main-idea, approach, continuation, function, structure, and weaken-strengthen surfaces | Chapter `29` | `1` | `Medium-High` | phenomenon vs explanation, author stance toward competing hypotheses |
| `Modules 24, 28, 31, 36, 37, 39` plus `Modules 43 and 48` | RC main-idea, approach, continuation, function, structure, and practice passages | Chapter `30` | `1` | `Medium-High` | endorsed solution vs no endorsed solution; hybrid passage recognition |

## Surface-by-Surface Implementation Plan

### `Module 3: Method of Reasoning`

- Proposed edits:
  - add more explicit `tether abstract language to concrete stimulus parts` instruction
  - teach `piecemeal analysis` of long abstract answers as a named technique
  - expand the recurring method-family list so students can pre-classify arguments faster
- Manual verification focus:
  - keep this as precision polish, not a doctrinal reset
  - make sure the added method-family language does not turn into shallow keyword matching

### `Module 5: Flaw`

- Proposed edits:
  - make the two-step answer test explicit:
    - is the answer descriptively accurate?
    - is that what actually makes the argument vulnerable?
  - sharpen the distinction between `reasonable assumptions`, `unreasonable assumptions`, and `faulty reasoning methods`
  - tie the solve path more clearly to Method, Weaken, and Necessary Assumption without collapsing those modules together
- Manual verification focus:
  - keep the vulnerability standard tied to the premise-to-conclusion gap rather than to general dislike of the conclusion
  - make sure the new solve path improves answer sorting without bloating the opening Flaw workflow

### `Modules 4 and 6: Parallel Reasoning / Parallel Flaw`

- Proposed edits:
  - add a clearer `when to diagram` rule for conditional, quantifier, and hybrid structures
  - teach that matching can survive reordered premises and synonym-level wording shifts, but not changes in logical force
  - add a compact `structural quick-scan` sequence before full matching
  - add one explicit `track record -> future probably` pattern example if the current PR bank needs a more direct anchor
- Manual verification focus:
  - preserve the current split between `Parallel Reasoning` and `Parallel Flaw`
  - do not let speed heuristics become permission for topical matching

### Review Layer From Chapter `24`

- Proposed edits:
  - add LR cumulative review bundles inside the existing `question bank`
  - add a lightweight `how to review LR` checklist that points students back to module reference guides
  - route missed-question reinforcement through the review-queue work rather than through a fake `Logical Reasoning Review` doctrine module
- Manual verification focus:
  - keep this packaging-only
  - confirm that any review bundles stay repository-backed and validation-safe

### RC Front Door From Chapter `25`

- Proposed edits:
  - add a short `LR to RC: same tools, different posture` onboarding layer before or at the front of `Module 24`
  - teach the posture shift explicitly:
    - use LR structural tools
    - read RC first for understanding, not immediate attack
  - add a compact `why RC feels hard` calibration section so students stop treating confusion as evidence they are reading the wrong way
- Manual verification focus:
  - keep the posture shift concrete
  - do not over-import LR flaw-hunting into RC

### Shared RC Method From Chapter `26`

- Proposed edits:
  - give RC one explicit shared method surface covering:
    - low-resolution paragraph summary
    - different-perspective tracking
    - author-opinion tracking
    - next-paragraph prediction
    - early passage-style hypothesis
    - post-reading recap and main-point articulation
  - standardize this vocabulary across `Modules 24, 28, 37, 39, and 50`
- Manual verification focus:
  - treat passage-style prediction as a reading aid, not a required guessing game
  - confirm that the low-resolution method retains answer-relevant detail

### Chapter `27`: Critique / Debate Style

- Proposed edits:
  - strengthen `Module 24: Main Idea` rules for passages with competing views and explicit author alignment
  - strengthen `Modules 30 and 32` for perspective ownership, reasons-for / reasons-against tracking, and author stance separation
  - add cleaner debate blueprints to `Modules 36, 37, 38, and 39`
- Manual verification focus:
  - students should be able to answer:
    - what is the dispute?
    - who holds each view?
    - what does the author think?
    - what reasons support each side?

### Chapter `28`: Single Position

- Proposed edits:
  - add a clearer `one view + support density` recognition model
  - strengthen `Main Idea`, `Passage Function`, and `Structure` doctrine for passages that mostly develop one position rather than staging a debate
  - add reminders that these passages often hide their difficulty in the supporting detail load, not in viewpoint conflict
- Manual verification focus:
  - keep the main point centered on the passage's advanced position, not on incidental background

### Chapter `29`: Phenomenon-Hypothesis`

- Proposed edits:
  - add explicit `phenomenon -> explanation(s) -> support / criticism` blueprints to `Modules 24, 28, 36, 37, and 39`
  - add cleaner continuation logic in `Module 31` for passages evaluating candidate explanations
  - connect this style to `Module 41: Weaken-Strengthen` when the passage targets a live explanatory hypothesis
- Manual verification focus:
  - distinguish `the phenomenon needing explanation` from `the favored hypothesis`
  - distinguish `author supports a hypothesis` from `author neutrally presents rival explanations`

### Chapter `30`: Problem-Analysis

- Proposed edits:
  - split the current broad `problem / solution / critique` idea into three cleaner subpatterns:
    - `problem -> endorsed solution`
    - `problem -> competing or criticized solution`
    - `problem -> no endorsed solution`
  - add a cleaner main-point rule:
    - if the author endorses a solution, the main point usually includes that solution
    - if not, the main point centers on the nature or significance of the problem
  - add stronger late-paragraph continuation guidance in `Module 31`
  - use `Module 43: Practice Passage 2` and `Module 48: Practice Passage 7` as the first live verification anchors
- Manual verification focus:
  - keep hybrid recognition explicit
  - do not teach passage styles as mutually exclusive boxes

## Recommended Wave Order

### Wave 1

- Chapter `25` RC front-door onboarding
- Chapter `26` shared RC method
- Chapter `27` critique/debate integration
- Chapter `30` problem-analysis integration

### Wave 2

- Chapter `21` Method of Reasoning polish
- Chapter `22` Flaw solve-path upgrade
- Chapter `23` Parallel polish
- Chapter `29` phenomenon-hypothesis integration

### Wave 3

- Chapter `28` single-position refinements
- Chapter `24` review-layer packaging
- second-pass RC passage-anchor search where Chapter `29` still lacks a clean current anchor

## Hold-Steady Areas

- Do not rename existing LR or RC modules to match Sage chapter labels.
- Do not create standalone public modules named `Critique or Debate`, `Single Position`, `Phenomenon-Hypothesis`, or `Problem-Analysis`.
- Do not let the RC style work turn into rigid taxonomy memorization.
- Do not treat Chapter `24` as permission to invent new review doctrine.
- Do not duplicate the same RC-method language in five places with slightly different wording; one shared method surface should own the vocabulary.
- Do not treat debate passages as the only passages that require viewpoint tracking. The new language should strengthen existing attribution skills, not replace them.

## Verification After Each Wave

- Regenerate [../course-content-map.md](../course-content-map.md) so the lesson signatures reflect the new coverage.
- Re-run `npm run validate:questions` after any LR or RC lesson insertions that touch lesson-bank linkage.
- Spot-check that new RC method and style language points to real PT-backed practice passages where promised.
- Confirm that new front-door RC wording appears in one clear place and is not contradicted by older intro copy.
- Confirm that hybrid passages still read naturally under the new style language and do not force awkward one-label categorization.
