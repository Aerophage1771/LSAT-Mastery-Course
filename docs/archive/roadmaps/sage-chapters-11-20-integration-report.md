# Sage Chapters 11-20 Integration Report

**Purpose:** Preserve the historical planning record for the Chapters `11-20` integration wave after the corresponding curriculum work was substantially applied.  
**Audience:** Germaine, content editors, and future agents expanding the current curriculum.  
**Status:** historical  
**Source of truth:** no  
**Last reviewed:** 2026-03-27  
**Related docs:** [../../product/roadmap/README.md](../../product/roadmap/README.md), [../../product/roadmap/sage-chapters-31-34-special-sources-integration-report.md](../../product/roadmap/sage-chapters-31-34-special-sources-integration-report.md), [README.md](./README.md), [sage-chapters-21-30-integration-report.md](./sage-chapters-21-30-integration-report.md)

> Archived on `2026-03-27` after the Chapters `11-20` wave was largely applied to the live course. Use the active [Chapters 31-34 / special sources report](../../product/roadmap/sage-chapters-31-34-special-sources-integration-report.md) for current planning, and use the archived [Chapters 21-30 report](./sage-chapters-21-30-integration-report.md) for the immediately prior wave.

## Working Rule

- Use current LSAT Mastery naming in implementation plans, lesson titles, and internal tickets.
- Do not reintroduce external-source labels as student-facing names just because the audit source used them.
- When the external audit says `pseudo-sufficient`, map that work primarily to `Principle-Strengthen` in this course unless the issue clearly belongs to `Sufficient Assumption` or `Principle-Apply`.
- Treat every imported idea from the external sources as rewrite input, not transplant material. Any adopted concept, framework, example family, or lesson idea should be completely rewritten to fit your course voice, taxonomy, structure, and teaching priorities.
- Treat causal doctrine as a proposed standalone module rather than only as a shared framework buried inside `Evaluate the Argument`, `Weaken`, and `Strengthen`.
- Because `Causal Reasoning` is not a question type, do not force it into the standard question-type module template and do not give it a `Step-by-Step: Causal Reasoning` lesson.
- The standalone causal module is additive. It should not be used as a reason to trim down the existing question-type modules, which should keep their question-specific causal applications.
- Every planned addition should ship with at least one paired DataToolkit-validated question. A lesson or doctrinal addition is not implementation-ready if it cannot be paired to the active validated question repository.

## External-to-Internal Crosswalk

| External audit label | Current LSAT Mastery target | Notes |
| --- | --- | --- |
| Point at Issue | `Module 21: Agree/Disagree (Point at Issue)` | Use the existing internal title, not a shortened replacement. |
| Must Be True | `Module 18: Must Be True` | Keep separate from `Most Strongly Supported`. |
| Resolve / Reconcile / Explain | `Module 20: Paradox/Explain` | Existing internal naming is already correct. |
| WSE Causal | `Module 10: Causal Reasoning`, plus continued causal application work in `Modules 7, 8, and 9` | The standalone module should carry the cross-question-type doctrine, while the question-type modules keep their own causal application lessons and solve-path guidance. |
| WSE Non-Causal | `Module 8: Weaken`, `Module 9: Strengthen` | Some spillover can live in `Evaluate the Argument`, but the main gap is in Weaken/Strengthen workflows. |
| Pseudo-Sufficient | `Module 13: Principle-Strengthen` | Secondary spillover targets: `Module 11: Sufficient Assumption` and `Module 14: Principle-Apply`. |
| Principle | `Module 13: Principle-Strengthen`, `Module 14: Principle-Apply`, `Module 15: Principle-Generalization` | Primary content gap is in `Principle-Generalization`, but the family should stay coordinated. |
| Sufficient Assumption | `Module 11: Sufficient Assumption` | This is mostly polish, not a structural hole. |
| Necessary Assumption | `Module 12: Necessary Assumption` | Needs a sharper force-standard model. |
| Argument Part | `Module 1: Argument Part` | Already strong overall; only targeted cleanup remains. |

## Manual Verification First

- Verify the `new standalone causal module` decision first. This is now a catalog-structure change, not just a lesson-addition plan, and it may require moving existing causal content rather than merely adding more of it.
- Verify the `rewrite, not import` rule early. The new material should be rebuilt to fit your content system rather than ported over with outside framing or voice.
- Verify the `paired validated question` rule early. Each addition should have at least one DataToolkit-validated question pairing rather than being approved as prose-only curriculum growth.
- Verify `Module 12: Necessary Assumption` first. This is the clearest recommendation that could shift the current standard of proof and the relationship between `necessary`, `strengthening`, and `sufficient`.
- Verify `Module 13: Principle-Strengthen` second. This is where the external `pseudo-sufficient` material is being intentionally rehomed, so it is the easiest place to accidentally create doctrinal blur with `Sufficient Assumption`.
- Verify `Module 15: Principle-Generalization` third. The `Principle vs Explanation` addition changes how students sort plausible answers, not just how much content is present.
- Verify `Module 18: Must Be True` and `Module 21: Agree/Disagree (Point at Issue)` next. Both introduce real solve-path changes rather than cosmetic additions.
- Verify `Module 20: Paradox/Explain` after that. The `clear resolution` adjustment could change how tightly the course currently states the answer standard.

## Question Pairing Requirement

- Each new lesson or major addition in this report should be paired with at least one DataToolkit-validated question from the active repository.
- In Mastery terms, that means the shipped lesson content should ultimately resolve to repository-backed question material rather than depending only on prose explanation.
- In DataToolkit terms, the paired item should survive the same repository validation path used for `question_ref` materials against the loaded question repository.
- Do not treat one generic question as sufficient coverage for an entire cluster of distinct additions. If a module adds multiple separable concepts, each one should get its own deliberate question pairing when feasible.
- When multiple validated pairings exist for the same concept, prefer `PT-129` and earlier unless the cleaner fit is only available in `PT-130+`.
- If no suitable validated question exists yet, the content can be drafted, but it should stay explicitly marked as incomplete until a validated pairing is added or the scope is narrowed to fit the real repository.
- After implementation, the lesson-question linkage should still pass the normal Mastery validation flow.

## Current Candidate DataToolkit-Validated Pairings

- These are the current starting pairings to use in implementation planning.
- Most of the IDs below already exist as PT-backed repository entries inside Mastery’s lesson-question bank and therefore fit the normal repository-backed validation flow.
- A small number come directly from the live DataToolkit `masterJson` repository where the current Mastery drill bank was thinner.
- Prefer `PT-129` and earlier whenever the fit stays comparably clean. Treat `PT-130+` questions as fallback material rather than the default sourcing pool.
- Prefer the existing `module48` question bank for that module when it already contains a clean fit. Reach into the broader validated DataToolkit bank only when the module-local repository is too thin or too mismatched for the planned addition.
- These are starting candidates, not permanent locks. If implementation reveals a cleaner validated question for the same addition, swap it in deliberately rather than forcing a weak fit.
- The current list has now been spot-checked against the repository-backed question inventory. The listed candidate IDs are all pre-`PT-130`, and the main remaining fit questions are about conceptual precision, not about needing later PT sourcing.
- This confirmation pass did not materially change the implementation recommendations for `Modules 1, 7, 8, 9, 10, 11, 12, 13, 14, 18, 20, and 21`. The main remaining sourcing pressure is on the standalone `Causal Reasoning` module and the added `Principle-Generalization` families.

### `Module 10: Causal Reasoning`

- Cross-question-type recognition:
  - `PT-128-S-2-Q-13` `Ice Ages and Vegetation`
  - `PT-116-S-3-Q-23` `Hormones and Glucose`
  - `PT-110-S-3-Q-8` `Telemedicine Debate`
- Sourcing note:
  - the current pre-`PT-130` bank is stronger for causal `Main Conclusion` and `Method of Reasoning` examples than for causal `Argument Part` role questions, so this starting set leans on the cleaner earlier fits rather than forcing a weaker role-question match
- Causal flaw applications:
  - `PT-126-S-1-Q-22` `The Reverse Causal Weakener`
  - `PT-103-S-2-Q-5` `The Baseline Flaw`
  - `PT-113-S-2-Q-14` `Attacking the Data`
- Evaluate applications:
  - `PT-119-S-3-Q-3` `The Missing Baseline`
  - `PT-101-S-2-Q-16` `Unrepresentative Samples`
- Strengthen and weaken applications:
  - `PT-128-S-3-Q-1` `Strengthening Causal Claims`
  - `PT-126-S-1-Q-22` `The Reverse Causal Weakener`
- Sufficient and necessary assumption applications:
  - `PT-114-S-1-Q-1` `Assuming a Claimed Causal Relationship`
  - `PT-112-S-1-Q-18` `Assuming a Claimed Causal Chain`
  - `PT-103-S-1-Q-4` `Assuming the Direction of Causation`

### `Module 1: Argument Part`

- `PT-129-S-2-Q-13` `Educational Computers`
- `PT-125-S-4-Q-15` `Cycling Freedom`
- `PT-112-S-4-Q-13` `Fermat's Theorem`

### `Module 7: Evaluate the Argument`

- `PT-119-S-3-Q-3` `The Missing Baseline`
- `PT-101-S-2-Q-16` `Unrepresentative Samples`
- `PT-112-S-1-Q-24` `Rank vs. Raw Number`

### `Module 8: Weaken`

- `PT-126-S-1-Q-22` `The Reverse Causal Weakener`
- `PT-103-S-2-Q-5` `The Baseline Flaw`
- `PT-113-S-2-Q-14` `Attacking the Data`

### `Module 9: Strengthen`

- `PT-128-S-3-Q-1` `Strengthening Causal Claims`
- `PT-120-S-1-Q-26` `Strengthening with Dose-Response`
- `PT-127-S-2-Q-14` `The Defender`

### `Module 11: Sufficient Assumption`

- `PT-114-S-1-Q-1` `Exercise and Heart-Attack Risk`
- `PT-112-S-1-Q-18` `Exercise, Cholesterol, and Blood Clots`
- `PT-119-S-4-Q-19` `The Either/Or Bridge`
- `PT-120-S-1-Q-12` `The Concept Link`
- Sourcing note:
  - the current `Module 11` lesson-question bank is already strong on bridge-style sufficient assumption drills like `PT-119`, `PT-120`, `PT-122`, and `PT-123`
  - the first two pairings stay here intentionally because the proposed additions include a clearer causal sufficient-assumption subtype, and those two broader validated-bank questions fit that addition better than the current module-local bank alone

### `Module 12: Necessary Assumption`

- `PT-103-S-1-Q-4` `The Morale-Production Link`
- `PT-127-S-1-Q-19` `The Scope Limitation`
- `PT-121-S-4-Q-10` `The Vested Interest`
- `PT-126-S-3-Q-8` `The False Dichotomy`

### `Module 13: Principle-Strengthen`

- `PT-117-S-4-Q-2` `Strengthening with a Normative Bridge`
- `PT-112-S-1-Q-15` `Strengthening with an Efficiency Principle`
- `PT-114-S-2-Q-4` `Strengthening with a Principle of Accountability`
- `PT-113-S-2-Q-22` `Mitigating Punishment`

### `Module 14: Principle-Apply`

- `PT-104-S-4-Q-1` `Direct Application`
- `PT-106-S-1-Q-10` `Contrapositive Application`
- `PT-123-S-2-Q-7` `Definitional Checklist`
- `PT-119-S-2-Q-21` `Advanced Application`

### `Module 15: Principle-Generalization`

- `PT-116-S-3-Q-3` `Experiment Generalization`
- `PT-124-S-1-Q-5` `Unintended Consequences`
- `PT-119-S-3-Q-8` `Contextual Value`
- `PT-109-S-1-Q-18` `Motivated Blindness`
- Additional sourcing note:
  - exact-fit validated questions for `path dependency / lock-in` and `emergence / whole vs part` may still need a second pre-`PT-130` repository pass if these current candidates prove too loose during implementation

### `Module 18: Must Be True`

- `PT-101-S-2-Q-11` `Quantifiers`
- `PT-106-S-2-Q-19` `Inferences from Disparity`
- `PT-119-S-3-Q-11` `Numerical Reasoning`
- `PT-104-S-1-Q-19` `Precision in Causality`

### `Module 20: Paradox/Explain`

- `PT-103-S-1-Q-20` `Selection Bias`
- `PT-122-S-4-Q-11` `Causal Mechanisms`
- `PT-103-S-1-Q-23` `The Counterintuitive Causal Web`
- `PT-105-S-1-Q-25` `The Hidden Distinction`

### `Module 21: Agree/Disagree (Point at Issue)`

- `PT-122-S-2-Q-1` `Disagreement (Definitional Rule)`
- `PT-104-S-1-Q-1` `Disagreement (Explanatory Cause)`
- `PT-103-S-2-Q-24` `Disagreement (Clash of Criteria)`
- `PT-127-S-2-Q-2` `Point of Agreement (Shared Assumption)`

## Pairing And Implementation Confirmation Snapshot

- `Module 10: Causal Reasoning`
  - pairing set confirmed as a pre-`PT-130` first pass
  - implementation framing confirmed: cross-question-type, additive, and still separate from the question-type-module solve paths
- `Module 1: Argument Part`
  - pairing set confirmed
  - implementation recommendation confirmed: targeted additions around opponent mapping and trap phrasing, not a doctrinal rewrite
- `Module 7: Evaluate the Argument`
  - pairing set confirmed
  - implementation recommendation confirmed: keep question-specific causal evaluation here, while moving generalized causal doctrine into the standalone causal module
- `Module 8: Weaken`
  - pairing set confirmed
  - implementation recommendation confirmed: keep strong causal weakening applications and add the non-causal fallback framework
- `Module 9: Strengthen`
  - pairing set confirmed
  - implementation recommendation confirmed: keep strong causal strengthening applications and add the missing support-lens coverage
- `Module 11: Sufficient Assumption`
  - pairing set confirmed after the pre-`PT-130` replacement
  - implementation recommendation confirmed: polish and subtype clarity only, not a new public standard
- `Module 12: Necessary Assumption`
  - pairing set confirmed
  - implementation recommendation confirmed, but this remains a high manual-review module because the `necessary` vs `strengthening` vs `sufficient` distinction can shift doctrine
- `Module 13: Principle-Strengthen`
  - pairing set confirmed
  - implementation recommendation confirmed, but this remains a high manual-review module because the external `pseudo-sufficient` material can blur with `Sufficient Assumption` if handled loosely
- `Module 14: Principle-Apply`
  - pairing set confirmed
  - implementation recommendation confirmed: focus on rule-application vocabulary, checklist logic, and bridge diagnostics rather than a full doctrinal reset
- `Module 15: Principle-Generalization`
  - pairing set confirmed as a first pass
  - implementation recommendation confirmed, with the existing sourcing caveat still in place for `path dependency / lock-in` and `emergence / whole vs part`
- `Module 18: Must Be True`
  - pairing set confirmed
  - implementation recommendation confirmed, but this remains a high manual-review module because domain logic and POE fallback do change the current solve path
- `Module 20: Paradox/Explain`
  - pairing set confirmed
  - implementation recommendation confirmed, but the `clear resolution` standard still needs manual doctrinal review
- `Module 21: Agree/Disagree (Point at Issue)`
  - pairing set confirmed
  - implementation recommendation confirmed, but this remains a high manual-review module because the `explicit vs implicit commitment` framework can change the current stance standard

## Catalog Placement Decision

- Recommended conceptual placement:
  - place the new causal module between `Module 9: Strengthen` and `Module 11: Sufficient Assumption`
- Recommended low-risk implementation path:
  - create a new route/module id for the causal module without renumbering the existing live modules
  - place it between `9` and `10` in docs, roadmap sequencing, and any future ordered catalog surface that supports explicit display order
- Higher-risk implementation path:
  - insert it as the literal next numbered module and renumber the current `10+` catalog
  - only do this if you are prepared to touch route assumptions, docs, exports, and DataToolkit bridge contracts together
- Manual verification focus:
  - decide whether you want conceptual insertion only or true numeric renumbering before implementation starts
  - confirm that the module should follow the `Conditional Reasoning` / `LSAT Math` format rather than the question-type format
  - confirm that the new module is additive and does not implicitly authorize trimming down the existing question-type modules
  - confirm that the new module can be populated with real DataToolkit-validated question pairings instead of relying on abstract exposition alone

## Module-by-Module Integration Plan

| Module | Current title | External source | Priority | Doctrine-change risk | Manual verification focus |
| --- | --- | --- | --- | --- | --- |
| `1` | `Argument Part` | Chapter `20` | `4` | `Low` | trap phrasing and opponent-mapping precision |
| `10` | `Causal Reasoning` | Chapters `14-15` causal portions | `1` | `High` | module scope, moved content, and numbering strategy |
| `7` | `Evaluate the Argument` | Chapter `14` | `3` | `Medium` | what stays here after causal doctrine moves out |
| `8` | `Weaken` | Chapters `14-15` | `3` | `Medium` | causal applications vs non-causal fallback language |
| `9` | `Strengthen` | Chapters `14-15` | `3` | `Medium` | causal applications vs non-causal fallback language |
| `10` | `Sufficient Assumption` | Chapters `16` spillover and `18` | `4` | `Low-Medium` | keep this as polish, not a rewritten standard |
| `11` | `Necessary Assumption` | Chapter `19` | `1` | `High` | force standard and negation-test framing |
| `12` | `Principle-Strengthen` | Chapters `16-17` | `2` | `High` | `pseudo-sufficient` mapping and rule-application doctrine |
| `13` | `Principle-Apply` | Chapter `16` spillover | `2` | `Medium` | shared rule-application vocabulary and checklist logic |
| `14` | `Principle-Generalization` | Chapter `17` | `2` | `High` | principle vs explanation boundary |
| `17` | `Must Be True` | Chapter `12` | `1` | `High` | inference standard, domain logic, and POE fallback |
| `19` | `Paradox/Explain` | Chapter `13` | `3` | `Medium-High` | what counts as a clear resolution |
| `20` | `Agree/Disagree (Point at Issue)` | Chapter `11` | `1` | `High` | commitment standard and implied-position doctrine |

### `Module 10: Causal Reasoning`

- Proposed edits:
  - create a standalone module that becomes the primary home for causal doctrine
  - format it like `Conditional Reasoning` and `LSAT Math`, not like a question-type module
  - use the current scattered causal material plus the external audit as inputs, but completely rewrite the imported elements so the resulting module fits your content system
  - cover at minimum:
    - how causal reasoning functions in:
      - main conclusion
      - argument part
      - method of reasoning
      - parallel reasoning / parallel flaw
      - other structural LR tasks where students need to identify causal reasoning before attacking or supporting it
    - causal flaw applications:
      - alternative cause
      - reverse cause
      - common cause
      - selection effects
      - measurement problems
      - baseline and comparison failures
      - mechanism and dose-response errors
    - evaluate applications:
      - what questions a student should ask to confirm or test a causal argument
      - experiment quality
      - random assignment vs random sampling
      - placebo / blinding / self-selection
    - assumption and support applications:
      - strengthen
      - weaken
      - sufficient assumption
      - necessary assumption
- Recommended module shape:
  - do not include `Step-by-Step: Causal Reasoning`
  - treat this as a framework module that explains how one reasoning pattern shows up across multiple question types
  - `Introduction: Causal Reasoning`
  - `Lesson 1: Causal Reasoning in Main Conclusion, Argument Part, and Method`
  - `Lesson 2: Causal Flaw Applications`
  - `Lesson 3: Evaluating Causal Claims and Questions to Ask`
  - `Lesson 4: Causal Reasoning in Strengthen and Weaken`
  - `Lesson 5: Causal Reasoning in Sufficient and Necessary Assumption`
  - `Reference Guide`
- Manual verification focus:
  - this is a real doctrinal and structural change candidate
  - verify which existing lessons should be cross-linked, expanded, or selectively reworked without treating outside material as transplant-ready
  - verify whether the module should be a foundational unit module or a later specialty module
  - verify whether causal doctrine should be taught once here and only referenced later, or partially retaught inside the question-type modules
  - verify that the module stays cross-question-type and does not quietly slide back into a disguised `Evaluate` or `Weaken` workflow lesson
  - verify that every imported element is rebuilt in your own framing rather than carried over in outside phrasing or taxonomy
  - verify that each section of the module can be paired with real validated causal questions rather than only synthetic examples
- Recommendation type:
  - high-risk catalog and doctrine change

### `Module 1: Argument Part`

- Proposed edits:
  - add nested opponent mapping
  - add `functional description vs merely true description`
  - add a clearer warning that quoted text in the stimulus is rarely the unstated assumption
- Manual verification focus:
  - make sure the new trap language does not overstate the rule and imply that quoted text can never function as an assumption
- Recommendation type:
  - expansion and clarification, not a major doctrine rewrite

### `Module 7: Evaluate the Argument`

- Proposed edits:
  - keep and, where useful, strengthen the evaluate-specific causal applications once the standalone causal module exists
  - preserve the question-type-specific version of the causal framework:
    - pivotal-question framing
    - yes/no test usage
    - evaluation-specific experiment checks
- Manual verification focus:
  - confirm that the evaluation standard stays distinct from pure weaken/strengthen reasoning
  - confirm that the new causal module supplements this module rather than hollowing it out
- Recommendation type:
  - additive integration more than new doctrine

### `Module 8: Weaken`

- Proposed edits:
  - keep causal weaken as a full application branch that points back to the standalone causal module when broader doctrine matters
  - add fallback guidance for non-patterned non-causal weaken questions
  - add a named `cost-benefit / tradeoff` lens
- Manual verification focus:
  - verify that the module retains robust weaken-specific causal instruction rather than being reduced to a cross-reference
  - make sure the new fallback method does not become so loose that it encourages topic-based attacks instead of gap-based attacks
- Recommendation type:
  - medium doctrinal risk because solve order could shift on hard questions

### `Module 9: Strengthen`

- Proposed edits:
  - keep causal strengthen as a full application branch that points back to the standalone causal module when broader doctrine matters
  - add fallback guidance for non-patterned non-causal strengthen questions
  - add a named `cost-benefit / tradeoff` lens where the argument structure supports it
- Manual verification focus:
  - verify that the module retains robust strengthen-specific causal instruction rather than being reduced to a cross-reference
  - confirm that the added framework still preserves the distinction between true support and merely relevant information
- Recommendation type:
  - medium doctrinal risk because the support standard could drift if the language is too loose

### `Module 11: Sufficient Assumption`

- Proposed edits:
  - add an explicit causal SA subtype
  - add a `missing fact triggers existing rule` subtype
  - name a few high-difficulty heuristics that are already mostly implicit
- Manual verification focus:
  - keep this module in the `polish` bucket and avoid importing the `Principle-Strengthen` rewrite wholesale
- Recommendation type:
  - mostly additive; should not materially change the current doctrine if implemented carefully

### `Module 12: Necessary Assumption`

- Proposed edits:
  - add `Necessary vs Strengthener vs Sufficient`
  - add `Reasoning Family Diagnostics`
  - reframe the negation test as one tool inside a larger force-standard workflow
- Manual verification focus:
  - this is a real doctrinal change candidate
  - verify that the course still teaches necessity as `required`, not merely `very helpful`
  - verify that the negation test remains operationally central without being taught as magical or exclusive
- Recommendation type:
  - high-risk doctrine adjustment

### `Module 13: Principle-Strengthen`

- Proposed edits:
  - treat this as the primary home for the external `pseudo-sufficient` findings
  - add `Complete the Application`
  - add a shared `bridge diagnostics` table for the Principle / SA family
- Manual verification focus:
  - this is a real doctrinal change candidate
  - verify that `Principle-Strengthen` does not collapse into `Sufficient Assumption`
  - verify that the module still teaches a principle answer as a rule that justifies or strongly supports, not as a universal bridge by default
- Recommendation type:
  - high-risk doctrine adjustment

### `Module 14: Principle-Apply`

- Proposed edits:
  - align terminology with `Modules 10 and 12`
  - standardize the use of trigger, case facts, bridge, verdict, and contrapositive where relevant
- Manual verification focus:
  - make sure the shared vocabulary sharpens application questions instead of turning them into disguised SA drills
- Recommendation type:
  - coordination work with moderate doctrinal risk

### `Module 15: Principle-Generalization`

- Proposed edits:
  - add `path dependency / lock-in`
  - add `emergence / whole vs part`
  - add `Principle vs Explanation`
- Manual verification focus:
  - this is a real doctrinal change candidate
  - verify that the module still trains students to generalize the governing standard rather than to choose the most plausible story
  - verify that the new families are genuinely recurring LSAT patterns rather than overfit source-taxonomy imports
- Recommendation type:
  - high-risk doctrine adjustment

### `Module 18: Must Be True`

- Proposed edits:
  - add `Governed Sets & Domains`
  - add `Policy, Rule, Exception, Purpose, and Effect`
  - revise the step-by-step and reference guide to teach `answer-driven POE` as the fallback path when a strong prephrase is not available
- Manual verification focus:
  - this is a real doctrinal change candidate
  - verify that the course still preserves a strict MBT proof standard
  - verify that `answer-driven POE` is taught as fallback strategy, not as a weaker replacement standard
  - verify that purpose/effect language does not blur into speculative MSS reasoning
- Recommendation type:
  - high-risk doctrine adjustment

### `Module 20: Paradox/Explain`

- Proposed edits:
  - add `Naive Assumption vs Phenomenon-Hypothesis`
  - add a more explicit `clear resolution` standard
- Manual verification focus:
  - this is a moderate-to-high doctrine change candidate
  - verify that `clear resolution` does not get translated into `anything that helps a little`
  - verify that the answer still must address both facts, not merely one side of the tension
- Recommendation type:
  - calibration change more than coverage change

### `Module 21: Agree/Disagree (Point at Issue)`

- Proposed edits:
  - add `Explicit vs Implicit Commitments`
  - add a hard drill around referential ambiguity, indirect stance, and conditional or criteria-based disagreement
  - insert a `commitment ladder` before the overlap test
- Manual verification focus:
  - this is a real doctrinal change candidate
  - verify what counts as commitment versus suggestion
  - verify that the course does not start over-crediting weak implications as full disagreement
  - verify that the new ladder helps with hard questions without slowing down easy ones
- Recommendation type:
  - high-risk doctrine adjustment

## Recommended Wave Order

### Wave 1

- `Module 10: Causal Reasoning`
- structural redistribution across `Modules 7, 8, and 9`
- `Module 12: Necessary Assumption`
- `Module 13: Principle-Strengthen` with coordinated language for `Modules 11 and 14`

### Wave 2

- `Module 18: Must Be True`
- `Module 21: Agree/Disagree (Point at Issue)`
- `Module 15: Principle-Generalization`
- `Module 20: Paradox/Explain`

### Wave 3

- non-causal WSE cleanup in `Modules 8 and 9`
- `Module 1: Argument Part` polish
- `Module 11: Sufficient Assumption` polish

## Hold-Steady Areas

- Do not rename modules to match the external source.
- Do not create a new standalone `Pseudo-Sufficient` module.
- Do not split `Agree/Disagree (Point at Issue)` into separate disagreement and agreement modules unless a larger catalog redesign is intentionally approved.
- Do not port outside lesson structures, wording, or taxonomy directly into the course. Imported material should be rewritten to fit your own content system.
- Do not let the new causal module turn `Evaluate`, `Weaken`, and `Strengthen` into thin shells or mere cross-references.
- Do not let the new causal module turn `Evaluate`, `Weaken`, and `Strengthen` into duplicate mini-causal modules with the same doctrine repeated three times.
- Do not force the new causal module into a `question type -> step-by-step -> drills` shape just because most LR modules use that pattern.

## Verification After Each Wave

- Regenerate [../course-content-map.md](../course-content-map.md) so the lesson signatures reflect the new coverage.
- Re-run `npm run validate:questions` to catch any lesson-bank linkage damage created during inserts or renames.
- Confirm that each shipped addition has a DataToolkit-validated question pairing and that the resulting lesson linkage still resolves cleanly through the repository-backed question flow.
- Spot-check that new lessons keep current naming conventions from [../course-naming-conventions.md](../course-naming-conventions.md), especially `Step-by-Step: [Type]` and the existing Principle-family labels.
