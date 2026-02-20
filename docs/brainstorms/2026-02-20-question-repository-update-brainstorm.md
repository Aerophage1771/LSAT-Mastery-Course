---
date: 2026-02-20
topic: question-repository-update
---

# Question Repository: Update, Combine, and Relocate

## What We're Building

1. **Dedicated Question Bank entry point**  
   A top-level nav item (e.g. "Question Bank" in header/sidebar) that opens a combined LR + RC question bank. This is **not** a curriculum module: it does not appear as a card in the Dashboard under Resources (or anywhere in the module listing).

2. **Single combined view for LR and RC**  
   One place to browse and view all course questions: Logical Reasoning (by topic/module) and Reading Comprehension (passages + questions). Better viewing experience than the current separate Module 48 / 49 / 53 lesson lists.

3. **Content from TSV**  
   Populate or update the LR side of the bank using `LSAT Course Content - Questions Used.tsv` (columns: Module, Name, Question IDs, Question 1…12 with full stimulus/question/answer text). RC content continues to come from existing RC repository modules (49, 52, 53) or a single consolidated source.

4. **Remove repository modules from curriculum listing**  
   Module 48 (LR Question Repository), Module 49 (RC Question Repository), and Module 53 (Advanced RC) are removed from the Dashboard and from the `modules` array used for curriculum navigation. They are no longer selectable as "modules"; the Question Bank is the only way to access this content.

5. **Link from each question to its lesson**  
   For each question in the repository, show a link to the corresponding lesson where that question is taught (e.g. "Taught in: Module 1 (Argument Part) → Lesson 3: Drill: Premise"). Clicking navigates to that module and lesson so the user can see the full drill and explanation.

## Why This Approach

- **Nav item (B):** Matches your choice: Question Bank is a first-class destination (header/sidebar), not a Resource card. Clear separation between "curriculum" (modules) and "practice/reference" (question bank).
- **Combine LR + RC:** One place for all practice questions improves findability and avoids the current split across three modules with different structures.
- **Link to lesson:** Connects practice (repository) to instruction (drills/lessons), so users can jump from a question to the lesson that teaches it.

## Key Decisions

- **Access:** Top-level "Question Bank" nav item; no Question Repository cards in the Dashboard. Resources section may still exist for other future content or be simplified.
- **Source of truth for LR:** Use `LSAT Course Content - Questions Used.tsv` to add/update questions. Build pipeline (script or manual) must produce data that includes question ID, module, and ideally lesson ID for linking.
- **Question → lesson mapping:** For LR, a question is "taught in" a specific drill lesson (e.g. Module 1, Lesson 3). Mapping can be built by: (1) extending the LR build script to record (PT-ID, moduleId, lessonId) when scanning drill files, or (2) at runtime/build time resolving PT-ID from lesson titles (e.g. "Drill: … (PT-111-S-4-Q-2)"). Stored mapping is more reliable than title scraping.
- **RC linking:** RC questions may link to a lesson or section within an RC module (e.g. "In Module 21 → Passage X"). Same idea: store or derive (question/passage ID → moduleId, lessonId) and render "Taught in: …" with a link.
- **Viewing:** Question Bank UI includes filter by LR topic / RC passage and search by PT-ID. Use **separate controls**: e.g. dropdown (or similar) for LR topic / RC passage, and a separate text field for PT-ID search. No mobile implementation; desktop only.
- **Export:** Question Bank is exportable (PDF, text, etc.) like modules, by section or full bank.
- **Unmapped questions:** Goal is to locate a lesson for every question. Where a PT-ID has no matching lesson title, note it (e.g. show "Unmapped—add to lesson map" or similar in the UI) and maintain a list/report of unmapped question IDs so they can be mapped to lessons later. Implementation should produce or expose this list (e.g. build output, admin view, or export).

## Resolved Questions

- **Where to access the bank?** → Top-level nav item (B).
- **Link direction?** → From repository question to corresponding lesson (one-way: "Taught in: …" link).
- **LR lesson granularity** → Match each question's PT-ID to a lesson whose title contains that ID (e.g. "Drill: Premise (PT-111-S-4-Q-2)"). Build/runtime step scans lesson titles; no new TSV column required.
- **Better viewing experience** → Filter by LR topic / RC passage; search by PT-ID. Include both in the first version.
- **Export** → Question Bank is exportable (e.g. PDF, text) using the same patterns as module/section export (by section or full bank).

## Acceptance test matrix (must-pass flows)

These flows must pass for the feature to be accepted. Use as a checklist for implementation and QA.

| # | Flow | Pass criteria |
|---|------|---------------|
| 1 | **LR/RC filtering** | User can filter the Question Bank by LR topic (e.g. Module 1: Argument Part, Module 2: Main Conclusion) and by RC passage (e.g. by passage title or module). Filtering updates the visible list correctly; clear/reset works. |
| 2 | **PT-ID search** | User can search by PT-ID (e.g. "PT-111-S-4-Q-2" or partial "111-S-4"). Results show matching question(s); no match shows a clear empty state. |
| 3 | **"Taught in" navigation** | Each question that has a matching lesson (title contains PT-ID) shows a "Taught in: Module X → Lesson Y" link. Clicking the link navigates to that module and lesson in the curriculum view. Questions with no matching lesson show an "Unmapped" (or similar) label and are included in an unmapped list/report for later mapping. |
| 4 | **Export by section / full bank** | User can export the Question Bank (or current filtered view) as PDF and text (and any other formats already supported for modules). Export "by section" = e.g. current LR topic or RC passage; "full bank" = entire combined bank. Output is non-empty and readable. |
| 5 | **Mobile behavior** | N/A—no mobile implementation for this feature. Desktop only. |

## Resolved (unmapped questions)

- **"Taught in" when no match:** Goal is to locate all questions. Where no lesson match exists, show an "Unmapped" (or similar) indicator and record that PT-ID in a list/report for later mapping to lessons. Implementation must expose or produce this unmapped list (build output, export, or in-app).

## Resolved (filter/search UX)

- **Controls:** Separate controls—dropdown (or similar) for LR topic / RC passage filter, and a separate text field for PT-ID search. No mobile implementation; scope is desktop only.

## Next Steps

→ Run `/workflows:plan` (or create an implementation plan) to define: data model for the combined bank, build steps for TSV + RC content, nav and routing changes, removal of 48/49/53 from the module list, and how to store/render "Taught in" links.
