# Changelog

**Purpose:** Record meaningful repository-level changes to structure, source-of-truth docs, and operating conventions.  
**Audience:** Contributors who need a concise history of important repo changes.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-04-03  
**Related docs:** [README.md](./README.md), [docs/README.md](./docs/README.md)

## 2026-03-28

- Completed a follow-up consistency sweep on the `31-34` RC integration so the remaining lesson surfaces now match the shared guide: `Main Idea` now names `spotlight` in the shared reading loop, `Approach` now includes `spotlight` in the style hypothesis table, `Phrase Function`, `Paragraph Function`, and `Passage Function` now restate the `content vs. function` / `motivation + something the passage does` standards more explicitly, and `Module 50: RC Quick Reference Guide` now includes one compact cross-module reminder block for the house method.
- Applied the additive portions of [docs/product/roadmap/sage-chapters-31-34-special-sources-integration-report.md](./docs/product/roadmap/sage-chapters-31-34-special-sources-integration-report.md) into the live course without adding new public modules.
- Added `Spotlight` as an explicit RC style overlay across `Main Idea`, `Passage Function`, `Structure`, the `RC Quick Reference Guide`, and the `Julia Margaret Cameron` practice-passage analysis, so the course now explicitly teaches passages that highlight what makes a person, work, event, or development significant or distinctive.
- Strengthened the existing RC question-type modules with the Chapter `32` refinements: clearer `overall perspective` and `stated-or-strongly-supported` standards for `Main Idea`, `whose perspective / what issue` checks for `Inference`, `Author Attitude`, `Author Viewpoint`, and `Third-Party Viewpoint`, stronger `context clue` and `dictionary-definition bait` teaching for `Phrase Meaning`, and sharper `content vs. function` standards for `Phrase Function`, `Paragraph Function`, and `Passage Function`.
- Added a house `Sequential / read A then B` comparative workflow across `Approach`, `Relationship`, `Title`, the `RC Quick Reference Guide`, and the comparative practice-passage analyses for `Cosmic Justice` and `Property Justice`, while keeping split-method experimentation as an optional later tactic rather than the default course doctrine.
- Archived [docs/product/roadmap/sage-chapters-21-30-integration-report.md](./docs/archive/roadmaps/sage-chapters-21-30-integration-report.md) after the additive `21-30` wave had been applied, and shifted active Sage roadmap work to [docs/product/roadmap/sage-chapters-31-34-special-sources-integration-report.md](./docs/product/roadmap/sage-chapters-31-34-special-sources-integration-report.md).
- Added that new `31-34 / special sources` report as the active crosswalk for the final Sage RC/source-material wave, classifying `Spotlight` as a new RC style overlay, `RC Question Types` as selective module refinement, `Comparative` as shared-method and practice-passage work, and `Chapter 34` / most special folders as deferred study-skills or non-source material.
- Applied the additive portions of [docs/archive/roadmaps/sage-chapters-21-30-integration-report.md](./docs/archive/roadmaps/sage-chapters-21-30-integration-report.md) into the live course without creating new public modules or renumbering the catalog again.
- Strengthened `Modules 3, 4, 5, and 6` with the Chapter `21-23` refinements: abstract-to-concrete tethering and piecemeal answer analysis for `Method`, the explicit two-step `descriptive accuracy -> actual vulnerability` test for `Flaw`, and clearer `when to diagram` / force-preservation rules for `Parallel Reasoning` and `Parallel Flaw`.
- Added the Chapter `25-26` RC front-door and shared-method language across `Main Idea`, `Approach`, `Passage Function`, `Structure`, and the `RC Quick Reference Guide`, standardizing `low-resolution summary`, `perspective tracking`, `author-opinion tracking`, `next-paragraph prediction`, `style hypothesis`, and `post-reading recap`.
- Added the Chapter `27-30` RC style overlays across the existing modules instead of introducing new public taxonomy modules, including `debate`, `single-position`, `phenomenon-hypothesis`, `problem-analysis`, and hybrid recognition guidance in the relevant `Main Idea`, `Viewpoint`, `Function`, `Relationship`, `Structure`, `Complete the Passage`, and `Weaken-Strengthen` lessons.
- Added LR cumulative review bundles to [components/QuestionBank.tsx](./components/QuestionBank.tsx) so the Chapter `24` review-layer recommendation now lands as repository-backed workflow packaging inside the existing question bank rather than as a fake `Logical Reasoning Review` doctrine module.
- Added explicit practice-passage anchor callouts to `Practice Passage 2: Bankruptcy Laws` and `Practice Passage 7: Advertising Critique` so the problem-analysis and critique/debate integrations point to concrete live RC passage surfaces.

## 2026-04-03

- Refreshed the LSAT Mastery front-door, product, technical, and operations docs so they consistently describe the repo as the standalone curriculum reference plus export/source-of-truth surface during the current migration, rather than implying that it still owns downstream student-delivery release behavior.
- Added explicit local-doc references to the website release exporter and downstream export-alignment checks, so naming or route-shape changes now point maintainers to `utils/export.ts`, `data/websiteLessonCatalog.ts`, and `scripts/export-website-release.mjs`.
- Fixed the product-doc front door so it no longer points contributors at the archived `sage-chapters-11-20` roadmap file as if it were still an active planning document.

## 2026-03-27

- Archived [docs/product/roadmap/sage-chapters-11-20-integration-report.md](./docs/archive/roadmaps/sage-chapters-11-20-integration-report.md) under `docs/archive/roadmaps/` after that wave was substantially applied, and updated the roadmap front door so it no longer points active planning at a largely completed integration pass.
- Added [docs/archive/roadmaps/sage-chapters-21-30-integration-report.md](./docs/archive/roadmaps/sage-chapters-21-30-integration-report.md) as the active crosswalk for Sage Chapters `21-30`, mapping the LR refinement chapters into `Modules 3, 4, 5, and 6`, treating Chapter `24` as review-layer only, and routing the RC chapters into onboarding, shared-method, passage-style, and practice-passage work instead of one new public module per chapter.
- Added exact Sage-to-`DataToolkit` question and passage matches to that `21-30` integration report, confirming that all extracted Chapter `21-23` and `27-30` PT references resolve cleanly in local `masterJson` and listing the corresponding LR question IDs and RC passage sets for source-parity use.
- Added [docs/product/roadmap/sage-chapters-1-20-question-sourcing-supplement.md](./docs/product/roadmap/sage-chapters-1-20-question-sourcing-supplement.md) to capture the Sage-backed `1-20` question pools that can improve earlier module sourcing, including direct upgrades for `Module 10: Causal Reasoning` and `Module 15: Principle-Generalization`.
- Strengthened the live course by adding `PT-135-S-4-Q-21` as the missing causal `Argument Part` recognition anchor in `Module 10`, and by replacing the old `recognition only` placeholders in `Module 15` with source-backed `Path Dependency / Lock-In` and `Emergence / Whole vs Part` references: `PT-133-S-3-Q-3` and `PT-135-S-4-Q-18`.
- Inserted `Module 10: Causal Reasoning` as a standalone cross-question-type framework module and renumbered the downstream public route catalog through `Module 57`, while preserving the legacy content-module sources behind the updated route/content remap table.
- Rebuilt `data/courseCatalog.json` from the live routed module source so the canonical module and lesson titles now align with the renumbered `1-57` route map instead of the broken intermediate catalog that skipped `10-11`, duplicated route names, and dropped the final advanced-passage route.
- Added [docs/product/roadmap/sage-chapters-11-20-integration-report.md](./docs/product/roadmap/sage-chapters-11-20-integration-report.md) as the planning-side crosswalk from external Chapters `11-20` audit findings into the current LSAT Mastery module names, with `Pseudo-Sufficient` explicitly mapped to `Module 12: Principle-Strengthen` instead of introducing a new public-facing label.
- Reorganized that integration report by module number and added doctrine-change-risk and manual-verification callouts so future review can separate real content-standard changes from lower-risk coverage additions.
- Updated that integration report to treat causation as a proposed standalone module placed conceptually after `Module 9`, with explicit notes about catalog-numbering strategy and the need to redistribute causal doctrine out of `Evaluate`, `Weaken`, and `Strengthen` rather than simply duplicating it.
- Reformatted the proposed `Causal Reasoning` module plan to follow the non-question-type pattern used by `Conditional Reasoning` and `LSAT Math`, removing the forced `Step-by-Step` lesson and recasting the module around cross-question-type applications, causal flaws, evaluation checks, and assumption/support uses.
- Tightened that causal-module plan again by naming the specific structural LR types directly and combining the separate evaluation lessons into one `Evaluating Causal Claims and Questions to Ask` section.
- Clarified that all imported material is rewrite input rather than transplant-ready content, and that the standalone causal module is additive rather than a reason to trim down the existing question-type modules or reduce their causal applications to thin cross-references.
- Added an explicit rule to the integration report that each planned addition should be paired with at least one DataToolkit-validated question and remain incomplete until the repository-backed question pairing is in place.
- Tightened the integration report’s question-pairing recommendations to prefer `PT-129` and earlier where the doctrinal fit is comparable, swapping out the obvious `PT-130+` defaults and noting that the main remaining sourcing pressure is on the standalone `Causal Reasoning` module and the added `Principle-Generalization` families.
- Tightened that same pre-`PT-130` sourcing pass again by documenting that the current candidate list was spot-checked against the repository-backed question inventory and that the remaining open issues are fit/coverage questions rather than a need to source from later PTs.
- Added a first-pass module-by-module list of concrete DataToolkit-validated/PT-backed question candidates to the integration report so the planned additions now point to real repository-backed pairings instead of only a generic validation requirement.
- Added a module-by-module pairing-and-implementation confirmation snapshot to that integration report so future review can see which modules were only sourcing-cleaned and which still need manual doctrinal review before implementation.
- Refined that same confirmation pass by preferring module-local `module48` bank questions when they already fit, explaining why `Module 10` still keeps two broader validated-bank causal SA pairings, and adding `PT-116-S-3-Q-3` as an additional pre-`130` `Module 14: Principle-Generalization` candidate.
- Regenerated the canonical course catalog and route-facing LR repository helpers so the live numbering, exports, and validation scripts now agree on the renumbered `Module 10: Causal Reasoning` through `Module 57` route sequence.
- Rebuilt the full LR `module48` repository from the live registered lesson PT IDs plus local validated question-bank sources, eliminating the lingering placeholder files, restoring all `111` linked LR PT entries, and returning `npm run validate:questions` to a clean pass.
- Documented the `module48` uniqueness rule for reused LR PT IDs so `Module 10: Causal Reasoning` can stay cross-question-type and repository-backed without forking duplicate copies of questions that already belong to native question-type banks.

## 2026-03-26

- Rebuilt the empty `modules/module48/Lesson13_Module13_Questions.tsx` repository source from the live `Module 13: Principle-Apply` drills so the four PT-backed lesson links now resolve during question-linkage validation instead of failing on missing module48 entries.
- Restored the dataless `modules/Module1.tsx`, `modules/Module12.tsx`, `modules/Module46.tsx`, and `modules/Module52.tsx` source wrappers so the canonical module registry can resolve all `56` route modules again and `npm run docs:course-map` can regenerate the live course map successfully after the content-expansion pass.
- Strengthened `Module 2: Main Conclusion` with a real answer-translation framework, richer `Prediction / Factual Claim` subtypes, stronger best-supported-paraphrase / POE guidance, and clearer rule-to-application handling so Main Conclusion answers are now taught as deliberate translations rather than quote-matching exercises.
- Strengthened `Module 55: Conditional Reasoning` formal-logic trap coverage by correcting the bad `All + Most` chain, adding explicit `Most`-reversal and invalid-order explanations, and unifying the quantifier trap family across the main lesson, concise guide, and reference guide.
- Strengthened `Module 55: Conditional Reasoning` quantifier instruction with explicit boundary logic, contradiction-vs-opposite negation rules, natural-language quantifier translations, and safer `not most` / `some` handling so quantified answer language is now taught as a reusable workflow rather than a loose table lookup.
- Strengthened `Module 55: Conditional Reasoning` with explicit validity-vs-truth framing, disguised-conditional translation support, set-to-condition grounding, domain-reduction routines, and rule/exception handling so the active conditional foundations now teach how to simplify dense logic before later quantifier cleanup.
- Expanded `Module 1: Argument Part` with a real front-end parsing toolkit covering sentence kernels, modifiers vs. structure, linked-clause decoding, referential tracking, comparative parsing, rhetorical-question conversion, and abstract-to-concrete translation so dense LR prose is now taught as a reusable reading skill rather than assumed.
- Strengthened `Module 1: Argument Part` with explicit support-spectrum, assumption-as-missing-link, argument-vs-background, and indicator-word-caution instruction so the opening LR foundation now teaches why premises count as support instead of only labeling roles.
- Added [docs/product/course-content-map.md](./docs/product/course-content-map.md) as a compact source-of-truth inventory of the current `56` route modules and `380` canonical lessons, organized by unit with enough concept detail to spot-check coverage and assembly gaps quickly.
- Linked the new course content map from the repo front door and docs indexes so future reviews do not need to reconstruct the course structure from module files and route-catalog JSON.
- Expanded the content map into a lesson-signature document generated from live lesson bodies, so it now includes intra-lesson topics, process steps, list/table subtopics, and passage question-review coverage instead of only module-level summaries.
- Added `npm run docs:course-map` to regenerate that lesson-signature map directly from the current module source.
- Added [docs/product/course-naming-conventions.md](./docs/product/course-naming-conventions.md) as the active source of truth for unit, module, lesson, and resource naming, including the normalization targets for current legacy title mismatches.
- Updated that naming standard to remove the `RC:` prefix from RC module-title conventions and to make `Step-by-Step: [Type]` the canonical second-lesson naming pattern.
- Applied the naming standard across the live course catalog, module metadata, lesson slot titles, and supporting scripts/tests so RC skill modules now use bare category names, step-two lessons use `Step-by-Step: [Type]`, `Third-Party` is normalized, and the Principle family no longer mixes separator styles.
- Restored the missing `modules/Module9.tsx` export so the full `canonical-course` import path into DataToolkit can load the current Mastery curriculum again instead of failing on a broken module import.
- Rebuilt the empty `modules/module5/Lesson7_Advanced_UnreasonableStandardOfProof.tsx` source file so the repo no longer carries a zero-byte lesson module in the Flaw lesson tree.
- Rebuilt the RC `Application`, `Third-Party Viewpoint`, `Structure`, and `Weaken-Strengthen` intro and step-guide lessons around the live released-question pools rather than generic placeholder advice.
- Added stronger stem-family breakdowns, trap libraries, high-difficulty diagnostics, and advanced-readiness guidance so those RC core modules now better support the later advanced passage block.

## 2026-03-25

- Updated the active front-door and technical architecture docs to mark LSAT Mastery as the `canonical-course` export source and feeder/reference app during the current DataToolkit-centered course-platform migration.
- Clarified that `canonical-course` is now the primary downstream handoff into DataToolkit Course Studio, while `interchange-course` remains a compatibility export rather than the primary integration contract.

## 2026-03-21

- Added `data/author-attitude-corpus/` with one text file per RC `Author Attitude` question sourced from `DataToolkit`, plus a complete text breakdown of the set organized by standard of proof.

- Archived the stale `01-05` roadmap duplicate draft files under `docs/archive/roadmaps/` so the active mastery roadmap folder now carries only the canonical `07-26` bet set plus its front-door files.
- Updated the roadmap front door and archive index so historical duplicate drafts are explicitly separated from active roadmap truth.

## 2026-03-20

- Expanded `docs/product/roadmap/` with twenty additional implementation-sized roadmap bets grounded in the current dashboard, question-bank, export, validation, accessibility, backup, and contributor-workflow surfaces.
- Updated the roadmap front door and repo README so the larger mastery roadmap library is discoverable from the active docs entrypoints.

## 2026-03-11

- Refreshed the root documentation entrypoints so `README.md`, `AGENTS.md`, and `docs/README.md` have clearer non-overlapping roles.
- Expanded `docs/product/roadmap/` into a full maintainability-first roadmap set with numbered bet docs and a separate signals guide.
- Tightened cross-links between product, technical, operations, and archive docs so planned work, live truth, generated audits, and historical context are more clearly separated.

## 2026-03-10

- Rebuilt the documentation system around a clear root/docs/archive split.
- Added active documentation entrypoints for product, technical, and operations material.
- Moved generated audit outputs under `docs/operations/audits/`.
- Moved dated brainstorm and plan files under `docs/archive/`.
- Standardized root source-of-truth docs with metadata headers and current product truth.
- Strengthened causation-heavy lessons in `Module 7: Evaluate the Argument` and `Module 9: Strengthen` with an ideal-experiment framework, random-sample vs. random-assignment distinctions, placebo/blinding/self-selection checks, competing-hypothesis screens, and clearer correlation-vs.-explanation teaching so causal arguments now use a reusable research-methods playbook instead of isolated tactic notes.
- Strengthened `Module 1: Argument Part` with a global LR operating system, beginner-facing LR question anatomy, hunt-vs.-elimination guidance, a question-family transfer map, and a real Blind Review workflow so early LR now teaches students how to approach and review Logical Reasoning as a system rather than only how to label roles inside one stem.
- Strengthened `Module 15: Fill in the Blank` and `Module 16: Most Strongly Supported` with a shared support-spectrum framework, interrupted-indicator/clause parsing guidance, hidden-principle analogy translation, relative-best MSS reasoning, and stronger state-of-mind/comparative-baseline trap handling so FIB and MSS now teach answer sorting as a reusable support-ranking process rather than as near-MBT intuition.
