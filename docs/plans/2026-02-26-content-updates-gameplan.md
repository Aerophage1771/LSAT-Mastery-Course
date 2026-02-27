# Content Updates Gameplan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete all remaining content work across the LSAT Mastery Course — replace invented questions with real ones, upgrade RC/Advanced modules, and reach production readiness.

**Architecture:** Work proceeds in priority tiers. Tier 1 (real questions) requires data from the course owner. Tiers 2-3 (RC modules, polish) can proceed independently with subagents.

**Tech Stack:** TypeScript lesson data files (`ContentBlock[]` arrays), question-card components, validation scripts.

---

## Current State (2026-02-26)

### LR Modules 1-22: UPGRADED ✅
All 22 Logical Reasoning modules have deep content with question-cards, reference guides, comparison tables, process steps, and callouts. Total: ~28,000 lines across ~230 lessons.

### Question Bank: COMPLETE ✅
- 150 real PrepTest questions (LR) + 97 RC questions = 247 total
- Standalone `/question-bank` page with search, filtering, cross-references
- Illustrative Questions tab (203 AI-generated)
- "In Use" / "Not In Use" filters
- Drill lesson cross-reference badges

### Invented Questions: 203 TRACKED
- 58 in Lessons 1-3 (allowed per content policy)
- **145 in Lessons 4+ (should be replaced with real questions)**
- Inventory: `docs/invented-questions-inventory.md`
- Detection script: `npm run inventory:invented`

### RC Modules 23-49: NOT YET UPGRADED
- 27 modules, mostly 2-7 lessons each, 69-351 lines
- Content is thin (original format, no question-cards, no reference guides)
- These teach RC question types and contain practice passages

### Advanced Passages 50-56: NOT YET UPGRADED
- 7 modules with passage analysis content
- Thin (184-370 lines each)

---

## Tier 1: Replace Invented Questions with Real Ones (BLOCKED — needs data)

**Priority:** Highest
**Status:** Blocked on course owner providing real question data
**Scope:** 145 question-cards in Lessons 4+ across Modules 1-22

### What's needed from the course owner:

For each module, provide real LSAT questions in this format:
```
Question ID: PT-XXX-S-X-Q-X
Stimulus: [full text]
Question: [full text]
Answer Choices:
(A) [text] (Correct) — if this is the right answer
(B) [text]
...
```

### Priority order for replacements:
1. **Modules 5-6** (Flaw, Parallel Flaw) — 21 invented questions, most critical for student accuracy
2. **Modules 8-11** (Weaken, Strengthen, SA, NA) — 28 invented questions, evaluation skills
3. **Modules 3-4** (Method, Parallel Reasoning) — 19 invented questions
4. **Modules 7, 12-20** (Evaluate through Point at Issue) — 50 invented questions
5. **Modules 1-2, 55, 59** (Argument Part, Main Conclusion, Conditional, Math) — 27 invented questions

### Task 1.1: Replace invented questions (per batch from owner)

**When data is provided:**

**Step 1:** Match each provided PT-ID to the invented question it should replace using `docs/invented-questions-inventory.json`

**Step 2:** For each replacement, update the question-card block in the lesson file:
- Replace `id`, `stimulus`, `question`, `options` fields
- Remove `id: 'illustrative'` markers
- Add real PT-ID
- Mark correct answer with `(Correct)`

**Step 3:** Add the question to the Question Bank repository if not already present:
- Check `modules/module48/LessonN_ModuleN_Questions.tsx`
- Add accordion block if missing

**Step 4:** Update cross-references:
- Add entry to `modules/drillCrossReferences.ts`
- Re-run `npm run inventory:invented` to update inventory

**Step 5:** Verify:
```bash
npm run typecheck
npm run build
npm run validate:questions
npm run inventory:invented
```

**Step 6:** Commit per module batch

---

## Tier 2: Upgrade RC Modules 23-49 (READY — can proceed independently)

**Priority:** High
**Status:** Ready to start
**Scope:** 27 modules, ~200 lessons

### RC Module Categories:

| Range | Category | Modules | Lesson Count |
|-------|----------|---------|-------------|
| 23-25 | Summarizing the Passage | Main Point, Primary Purpose, Organization | ~6 each |
| 26-28 | Analyzing Components | In Context, Specific Detail, Function | ~6 each |
| 29-31 | Identifying Perspectives | Author Agreement, Attitude, Dual Passages | ~6 each |
| 32-34 | Extending Reasoning | Analogous, Inference, Strengthen/Weaken RC | ~6 each |
| 35-44 | Practice Passages | 10 full passage breakdowns | 7-9 each |
| 45-49 | Reference | Question types, strategies, timing, traps, cheat sheet | 1-3 each |

### Task 2.1: Upgrade RC question-type modules (23-34)

For each module (deploy 4 parallel agents per module):
- Expand Introduction with "Why This Matters", question stem table, strategy overview
- Expand Step-by-Step Guide with passage reading technique, worked example
- Enhance concept lessons with `question-passage-card` components
- Add Reference Guide if missing
- Target: ~100+ lines per lesson, matching LR depth

**Estimated effort:** 12 modules × ~4 agent calls = ~48 agent calls
**Command pattern:** Same as LR upgrades (read file → write enhanced version → verify)

### Task 2.2: Upgrade RC Practice Passage modules (35-44)

For each practice passage module:
- Enhance passage analysis lesson with `passage-card` component
- Enhance each question lesson with `question-passage-card` component
- Add deeper analysis and takeaways

**Estimated effort:** 10 modules × ~2 agent calls = ~20 agent calls

### Task 2.3: Upgrade RC Reference modules (45-49)

- Enhance reference guides with tables, comparison charts, checklists
- Add cross-references to question-type modules

**Estimated effort:** 5 modules × 1 agent call = ~5 agent calls

---

## Tier 3: Upgrade Advanced Passage Modules 50-56 (READY)

**Priority:** Medium
**Status:** Ready to start
**Scope:** 7 modules with in-depth passage analysis

### Task 3.1: Upgrade Advanced Passages

For each module:
- Enhance passage analysis with `passage-card`
- Upgrade each question lesson with `question-passage-card`
- Add deeper structural analysis

**Estimated effort:** 7 modules × 2 agent calls = ~14 agent calls

---

## Tier 4: Polish & Quality (ONGOING)

### Task 4.1: Mark all Lessons 1-3 question-cards as illustrative

**Status:** Partially done (9 of 58 marked)
**Scope:** Update remaining 49 question-cards in Lessons 1-3 to use `id: 'illustrative-...'`

### Task 4.2: Fix (Correct) markers in Question Bank

**Status:** ~100 of 150 questions missing `(Correct)` marker
**Scope:** Add correct answer markers to all Question Bank files
**Blocked on:** Course owner confirming correct answers for modules 6-20

### Task 4.3: Fix typos in Question Bank

**Status:** 2 known typos
- `modules/module48/Lesson9_...tsx`: "one of ahe following" → "one of the following"
- `modules/module48/Lesson15_...tsx`: "one of a following" → "one of the following"

### Task 4.4: Update documentation

After all content work:
- Update README with final module/lesson counts
- Update AGENTS.md with any new gotchas
- Re-run all validation scripts
- Update Question Bank count badges

---

## Execution Order

```
NOW:        Tier 4.3 (fix typos — 2 minutes)
            Tier 2.1 (RC question-type modules — deploy parallel agents)
            Tier 2.2 (RC practice passages — after 2.1)
            Tier 2.3 (RC reference modules — after 2.2)
            Tier 3.1 (Advanced passages — after Tier 2)

WHEN DATA:  Tier 1 (replace invented questions — per batch from owner)

ONGOING:    Tier 4.1, 4.2 (marking, correct answers — as data available)
FINAL:      Tier 4.4 (documentation update)
```

---

## Verification Checklist (run before any release)

```bash
npm run typecheck          # Zero errors
npm run build              # Production build succeeds
npm test                   # All tests pass
npm run validate:questions # Question Bank data quality
npm run inventory:invented # Track invented question count
```

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `modules/registry.ts` | Module metadata + dynamic imports |
| `modules/drillCrossReferences.ts` | PT-ID → drill lesson mapping (116 entries) |
| `docs/invented-questions-inventory.json` | All 203 invented question-cards |
| `scripts/validate-questions.mjs` | Question Bank validation |
| `scripts/extract-invented-questions.mjs` | Invented question scanner |
| `components/QuestionBank.tsx` | Standalone question bank page |
| `components/LessonViewer.tsx` | Content block renderer |
| `components/cards/QuestionCard.tsx` | Interactive LR question card |
| `components/cards/PassageCard.tsx` | RC passage viewer |
| `components/cards/QuestionPassageCard.tsx` | Split-pane Q+P card |
| `AGENTS.md` | Developer instructions for future agents |
