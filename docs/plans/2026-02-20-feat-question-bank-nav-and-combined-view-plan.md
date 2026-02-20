---
title: Question Bank – Top-level nav, combined LR/RC view, filter, search, Taught-in links, export
type: feat
status: active
date: 2026-02-20
---

# Question Bank: Top-level nav, combined LR/RC view, filter, search, Taught-in links, export

## Overview

Add a dedicated **Question Bank** as a top-level destination (sidebar + header) that combines all LR and RC practice questions in one view. Remove Module 48, 49, and 53 from the curriculum listing; the Question Bank is the only way to access that content. Support filter by LR topic / RC passage, PT-ID search, “Taught in” links (with unmapped list), and export by section/full bank. Desktop only.

**Source:** `docs/brainstorms/2026-02-20-question-repository-update-brainstorm.md`

## Problem Statement / Motivation

- Repository content is split across three modules (48 LR, 49 RC, 53 Advanced RC) and appears as curriculum modules under Resources, which is misleading (they are reference/practice, not lessons).
- Users need one place to browse and search questions, filter by topic/passage, and jump to the lesson that teaches each question.
- LR content should be sourced from `LSAT Course Content - Questions Used.tsv`; unmapped questions must be tracked for later lesson mapping.

## Proposed Solution

1. **App state:** Introduce a view mode (e.g. `activeView: 'dashboard' | 'questionBank' | 'lesson'`). When `activeView === 'questionBank'`, render the Question Bank view; when `'lesson'`, use existing `activeModuleId` / `activeLessonId` and `LessonViewer`. Dashboard remains when `activeView === 'dashboard'`.
2. **Nav:** Add a “Question Bank” item in the Layout sidebar (and optionally header) that sets `activeView = 'questionBank'`. Remove Modules 48, 49, 53 from the `modules` array and from Dashboard/Layout so the Resources section no longer shows them.
3. **Data:** LR from TSV (build-time or runtime ingestion into a structured list); RC from existing module content (49, 52, 53) at question level. Build a PT-ID → lesson mapping by scanning all curriculum lesson titles for `PT-\d+-S-\d+-Q-\d+` (and passage `PT-\d+-S-\d+-P-\d+` where applicable).
4. **Question Bank UI:** Single view with (a) filter dropdown: LR topics (Module 1–20, 55, 59 names) and RC passages (from 49, 52, 53); (b) separate PT-ID search field; (c) list of questions (LR + RC) with “Taught in: Module X → Lesson Y” link or “Unmapped” label; (d) unmapped list/report (in-page or modal, exportable e.g. CSV); (e) export controls for “current section” (filtered set) and “full bank” in same formats as curriculum (PDF, Text, RTF, JSON, CSV).
5. **“Taught in” navigation:** Clicking the link sets `activeModuleId`, `activeLessonId` and `activeView = 'lesson'`, showing the same lesson view as sidebar selection.

## Technical Considerations

- **No router:** App uses `useState` only. Question Bank is a third view mode alongside Dashboard and Lesson; state must distinguish it (e.g. `activeView` or sentinel `activeModuleId === -1`).
- **Layout/Dashboard:** Removing 48, 49, 53 means the “Resources” section will have zero modules; `sectionModules.length === 0` already returns `null` for that section. Layout injects “Resources” when `module.id === 48`; after removal, that header never appears. Optionally remove the Resources section definition from `Dashboard.tsx` and the `isResourceStart` check from `Layout.tsx` to avoid dead code.
- **TSV ingestion:** No script currently reads the TSV. Options: (1) Node build script that parses TSV and emits a JSON/TS module (e.g. `data/questionBankLR.ts` or `public/question-bank-lr.json`); (2) runtime fetch + parse of TSV (heavier, CORS if from file). Prefer (1) for predictable bundle and offline use.
- **PT-ID normalization:** Search and mapping should accept canonical `PT-N-S-N-Q-N` and common variants (e.g. with/without `PT-`, spaces vs dashes). Normalize to one form when matching.
- **Export:** Reuse `utils/export.ts` patterns. New functions (e.g. `generateQuestionBankSectionPDF(questions, title)`, `generateQuestionBankFullPDF(questions)`) that iterate over a list of question items and use existing `addWrappedText` / block rendering; or adapt existing section export to accept a “virtual” module-like structure for the current filter set.

## Assumptions (from SpecFlow)

- **Section for export:** “Section” = current filtered set (one LR topic or one RC passage). “Full bank” = entire combined list. When no filter, “section” export can mean full bank or be disabled.
- **LR Taught-in:** For each PT-ID in the TSV, find a lesson in the curriculum (modules 1–20, 55, 59) whose `lesson.title` contains that PT-ID (e.g. regex `PT-\d+-S-\d+-Q-\d+`). If none, mark Unmapped and add to unmapped list.
- **RC Taught-in:** RC listed at question level; each question’s PT-ID maps to the passage lesson that contains it (e.g. same PT-S-P in lesson title from modules 49, 52, 53). Filter by RC passage = group by passage (one dropdown option per passage).
- **Empty state:** When filter + PT-ID search yield zero questions, show explicit “No questions match” and disable section export for that set.
- **Unmapped list:** Exposed as an in-app list (e.g. collapsible section or modal) and exportable (e.g. CSV of PT-IDs).

## Acceptance Criteria

- [x] **Nav:** A top-level “Question Bank” nav item appears in the sidebar (and optionally header). Clicking it shows the Question Bank view; it does not appear as a module card on the Dashboard.
- [x] **Curriculum listing:** Modules 48, 49, and 53 are removed from the `modules` array in `App.tsx`. The Resources section no longer shows these modules; Layout section headers and Dashboard sections are updated so no logic depends on module IDs 48, 49, 53 (Resources section removed from Dashboard).
- [x] **LR/RC filtering:** User can filter by LR topic (e.g. Module 1: Argument Part, Module 2: Main Conclusion) and by RC passage (e.g. passage title from modules 49, 52, 53). Filtering updates the visible list; clear/reset works.
- [x] **PT-ID search:** User can search by PT-ID (canonical `PT-N-S-N-Q-N` or normalized variants). Results show matching question(s); no match shows a clear empty state.
- [x] **Taught-in navigation:** Questions with a lesson match show “Taught in: Module X → Lesson Y” link. Clicking navigates to that module and lesson (same as selecting from sidebar). Questions with no match show “Unmapped” and are included in the unmapped list.
- [x] **Unmapped list:** An unmapped list is available (in-page or modal), listing all PT-IDs with no Taught-in lesson, and is exportable (e.g. CSV).
- [ ] **Export:** User can export the Question Bank by section (current filtered set) and full bank. Formats: PDF, Text, RTF, JSON, CSV (same as curriculum export). When filter/search yield zero questions, section export is disabled or shows empty state. (Placeholder buttons exist; real export helpers not yet implemented.)
- [x] **Empty state:** When filters and/or PT-ID search yield no questions, show an explicit empty state; do not allow export of that (empty) set.
- [x] **Data:** LR questions are sourced from `LSAT Course Content - Questions Used.tsv` via `scripts/build-question-bank-lr.mjs` → `data/questionBankLR.json`. RC questions are derived from modules 49, 52, 53 at question level.
- [x] **Desktop only:** Question Bank is designed for desktop; mobile layout is out of scope.

## Success Metrics

- All must-pass flows from the brainstorm acceptance matrix pass (LR/RC filtering, PT-ID search, Taught-in navigation, export by section/full bank).
- Unmapped PT-IDs are visible and exportable for later mapping.
- No regression: curriculum (Dashboard + sidebar + lesson view) works as before for remaining modules.

## Dependencies & Risks

- **TSV parsing:** TSV has many columns and large cells; parsing must be robust (tabs, quoted content, newlines in cells). Build script is preferred over client-side parse.
- **RC question extraction:** RC content lives inside lesson `content` (accordions, blockquote, options). Extracting every RC question ID and passage association may require a one-time script or hand-maintained index unless we traverse content blocks at runtime.
- **Layout/Resources:** Removing 48, 49, 53 may leave “Unit 15: Resources” with no modules; confirm Dashboard and export logic handle empty units/sections (e.g. hide Resources section when empty).

## Implementation Plan

### Phase 1: Data and app state

- [x] **1.1** Add `activeView: 'dashboard' | 'questionBank' | 'lesson'` (or equivalent) to App state. When `activeView === 'lesson'`, keep using `activeModuleId` / `activeLessonId`; when `'questionBank'`, show Question Bank; when `'dashboard'`, show Dashboard. Default `'dashboard'`.
- [x] **1.2** Create TSV build script: `scripts/build-question-bank-lr.mjs` reads `LSAT Course Content - Questions Used.tsv`, outputs `data/questionBankLR.json`. Run with `npm run build:question-bank-lr`. LR list and filter now use this data. (e.g. `scripts/build-question-bank-lr.mjs`) that reads `LSAT Course Content - Questions Used.tsv`, parses Module, Name, Question IDs, and Question 1…12 columns, and outputs a JSON or TS data file (e.g. `src/data/questionBankLR.json` or `questionBankLR.ts`) with structure: `{ topics: { moduleNum, name, questions: [{ id, stimulus, question, options }] } }`. Document TSV format and column handling.
- [x] **1.3** Build PT-ID → lesson mapping: from current `modules` (all curriculum modules), scan each lesson’s `title` for `PT-\d+-S-\d+-Q-\d+` (and `PT-\d+-S-\d+-P-\d+` for passages). Produce a map `ptId -> { moduleId, lessonId, moduleTitle?, lessonTitle? }`. Expose this at runtime (e.g. `src/data/ptIdToLesson.ts` generated by a script, or computed once from modules in a context/util). LR uses curriculum modules 1–20, 55, 59; RC uses 49, 52, 53 for passage lessons.
- [x] **1.4** RC question list: Either (a) add a small script that extracts RC question IDs and passage IDs from modules 49, 52, 53 lesson content and outputs `questionBankRC.json`, or (b) at runtime, traverse those modules’ lessons and accordions to build the list. Document choice. Ensure each RC question has passage id and “Taught in” = passage lesson.

### Phase 2: Nav and Question Bank shell

- [x] **2.1** In `Layout.tsx`, add a “Question Bank” button/link (e.g. after “Course Dashboard”) that calls an `onGoToQuestionBank` callback. In `App.tsx`, add `handleGoToQuestionBank` that sets `activeView = 'questionBank'` (and optionally clears lesson state). Pass callback to Layout.
- [x] **2.2** In `App.tsx`, when `activeView === 'questionBank'`, render a new `QuestionBankView` component instead of Dashboard or LessonViewer. Implement `QuestionBankView` as a shell: title, placeholder for filters and list, no data yet.
- [x] **2.3** Remove Module 48, 49, 53 from the `modules` array in `App.tsx`. Remove or adjust the Resources section in `Dashboard.tsx` so it doesn’t assume Unit 15 has modules; remove or adjust Layout’s “Resources” header (e.g. remove `isResourceStart` for 48 or drop the Resources section entirely).

### Phase 3: Question Bank UI – filter, search, list, Taught-in

- [x] **3.1** In `QuestionBankView`, add filter dropdown: options = LR topics (from LR data) + RC passages (from RC data). State: `filterTopicId: string | null` (e.g. `"lr-1"`, `"rc-PT-119-S-1-P-2"`). Changing filter filters the combined question list.
- [x] **3.2** Add PT-ID search input. State: `searchPtId: string`. Normalize input (e.g. strip spaces, add `PT-` if missing) and filter questions whose id includes the search string. Combine with topic filter (AND).
- [x] **3.3** Render question list: each item shows PT-ID, optional snippet, and either “Taught in: Module X → Lesson Y” (link) or “Unmapped”. Link onClick: set `activeModuleId`, `activeLessonId`, `activeView = 'lesson'`. Use the PT-ID → lesson map from Phase 1.
- [x] **3.4** Add “Unmapped” list: collect all PT-IDs with no mapping; show in a collapsible section or modal. Provide “Export unmapped (CSV)” that downloads a CSV of unmapped PT-IDs.

### Phase 4: Export and empty state

- [ ] **4.1** Add export helpers in `utils/export.ts` (or a dedicated module) for Question Bank: e.g. `generateQuestionBankSectionPDF(questions, sectionTitle)`, `generateQuestionBankFullPDF(questions)`, and Text/RTF/JSON/CSV equivalents. Reuse existing text/PDF building patterns; input is the list of question items (with title, stimulus, question, options, ptId).
- [x] **4.2** In `QuestionBankView`, add Export controls: “Export current” (filtered set) and “Export full bank”. When the filtered set is empty, disable “Export current” and show empty state message (“No questions match”).
- [x] **4.3** When filter + search yield zero questions, show explicit empty state; do not allow section export for that set.

### Phase 5: Validation and docs

- [ ] **5.1** Manual test: Open Question Bank, filter by LR topic, search by PT-ID, click “Taught in” link, return to Question Bank, export section and full bank, open unmapped list and export CSV.
- [x] **5.2** Update brainstorm or plan with “Implementation notes” (e.g. TSV script path, mapping script, any manual steps). Document unmapped list location and export format.

### Implementation notes

- **App state:** `App.tsx` uses `activeView`, `questionBankSourceModules = [Module48, Module49, Module52, Module53]`, `allModulesForViewing = [...modules, ...questionBankSourceModules]` so `activeModule` can resolve repo modules when navigating from QB.
- **QuestionBankView:** `components/QuestionBankView.tsx` builds `ptIdToLesson` from `curriculumModules`, builds flat `allItems` from `questionBankModules` by walking lesson content and accordions. Unmapped list and CSV export live in the same file. Export current/full bank are placeholder buttons (real export not yet implemented).
- **Unmapped list:** In-page collapsible section; CSV columns: PT-ID (and optional note). Export unmapped (CSV) downloads immediately.
- **LR data:** From `data/questionBankLR.json` (generated by `npm run build:question-bank-lr` from `LSAT Course Content - Questions Used.tsv`). Module 48 no longer used for Question Bank list; RC still from questionBankSourceModules (49, 52, 53).

## References & Research

- **Brainstorm:** `docs/brainstorms/2026-02-20-question-repository-update-brainstorm.md`
- **App state & modules:** `App.tsx` (modules array, activeModuleId, activeLessonId)
- **Dashboard sections:** `components/Dashboard.tsx` (sections, modulesByUnit, Unit 15)
- **Layout sidebar:** `components/Layout.tsx` (modules loop, section headers at id 1, 21, 50, 48)
- **Export:** `utils/export.ts` (generateModulePDF, generateSectionPDF, addBlockToPdf, blockToText)
- **Types:** `types.ts` (ModuleData, Lesson, ContentBlock)
- **LR repo build:** `scripts/build-lr-repo.mjs` (pattern for scanning drill files)
- **TSV:** `LSAT Course Content - Questions Used.tsv` (project root)
- **Module 48/49/53:** `modules/Module48.tsx`, `modules/module48/*.tsx`, `modules/Module49.tsx`, `modules/module49/Lesson1_QuestionRepository.tsx`, `modules/Module53.tsx`, `modules/module53/Lesson1_AdvancedRCQuestionRepository.tsx`
- **SpecFlow analysis:** Gaps and recommended AC incorporated above (state model, section export, empty state, unmapped list, PT-ID normalization, RC question-level listing).
