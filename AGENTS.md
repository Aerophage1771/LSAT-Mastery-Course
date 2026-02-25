# AGENTS.md

## Purpose
This file provides working instructions for coding agents editing the LSAT Mastery Course repo.
Use these rules to avoid regressions in lesson rendering and answer logic.

## Project Snapshot
- Stack: React 19 + TypeScript + Vite + Tailwind CSS 4
- Main entry: `App.tsx`
- Curriculum content: `modules/`
- Templates content: `content/templatesContent.ts`
- Core lesson renderer: `components/LessonViewer.tsx`
- Integrated RC card: `components/IntegratedRCQuestionCard.tsx`

## Non-Negotiable Content Rules
1. Do not change correct answer mapping unless explicitly requested.
2. Do not change lesson `id`, export names, or file paths unless explicitly requested.
3. Keep PT IDs and question IDs in headers stable unless explicitly requested.
4. Keep supported block types only (no new custom block type without renderer support).
5. Preserve integrated RC card sequence for RC question lessons:
   - `accordion -> h3 -> blockquote -> options -> h4 Analysis -> paragraph -> callout Text Evidence -> breakdown`
6. Keep option labels in `options.items` as `(A)` through `(E)` and keep exactly one `(Correct)` marker.
7. Remove or avoid boilerplate explanation phrases (for example: `Additional check:` / repeated trap labels).
8. Prefer concept-first instructional analysis in RC lessons (teach the skill, then apply it to choices).

## Templates Rules
1. Templates view has 8 tabs and should remain keyboard-navigable.
2. Introduction tab is rendered separately (`RenderedIntroductionTemplate`).
3. Non-introduction template tabs should hide export controls.
4. Keep template block formats compatible with `LessonViewer`.

## Editing Guidance
1. Make focused edits; do not rewrite unrelated files.
2. For RC lesson passes, work sequentially and validate after each file when requested.
3. Keep prose concrete and passage-specific; avoid generic phrasing.
4. When fixing parser/render issues, prefer minimal safe changes.

## Validation Checklist
After relevant edits:
1. Run `npm run build`.
2. Verify no unsupported block rendering issues.
3. For RC question lessons, verify:
   - choices render
   - answer checking still works
   - analysis headings/callouts display
4. If requested, run grep checks for forbidden boilerplate phrases.

## Known Current Issue
Build may fail due to an unrelated import mismatch in Module 6:
- `modules/Module6.tsx` imports `./module6/Lesson9_Drill_OverlapFlaw`
- file present is `modules/module6/Lesson10_Drill_OverlapFlaw.tsx`

Do not silently "fix" unrelated issues unless requested.
