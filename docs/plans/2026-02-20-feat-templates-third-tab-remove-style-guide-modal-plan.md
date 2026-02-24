---
title: feat: Templates as third top-level tab; remove Style Guide modal
type: feat
status: active
date: 2026-02-20
---

# feat: Templates as third top-level tab; remove Style Guide modal

## Enhancement Summary

**Deepened on:** 2026-02-20  
**Sections enhanced:** Overview, Proposed Solution, Technical Considerations, Implementation Outline, Acceptance Criteria, Dependencies & Risks  
**Research agents used:** frontend-design, best-practices-researcher, architecture-strategist, code-simplicity-reviewer, explore

### Key Improvements

1. **Tab strip:** Full ARIA tab pattern (tablist/tab/tabpanel), keyboard (Arrow, Home/End, Space/Enter), visible focus ring, and responsive horizontal scroll with optional scroll-snap; concrete class names and snippet added.
2. **Layout and App:** Gate Templates sidebar button with `onGoToTemplates &&`; in the same pass that removes Style Guide, update Escape and body-overflow effects to drop `styleGuideOpen`; ensure `handleGoToTemplates` clears module/lesson so Export scope is "Entire course."
3. **Content and implementation:** Use `content/templatesContent.ts` (match existing content location); move content via cut-from-Layout then paste into content module; derive tab title/content from one map keyed by `templatesTab`; optional deep link via `location.hash` documented.

### New Considerations Discovered

- **Accessibility:** WAI-ARIA APG Tabs pattern and keyboard handling are required for the sub-tab strip; focus stays on tab after activation; inactive panels use `aria-hidden` and `tabIndex={-1}`.
- **Optional enhancement:** Sync active tab with `location.hash` (e.g., `#introduction`, `#lessons`) for shareable links and refresh stability; fallback to `'introduction'` when hash is missing or invalid.
- **Copy and style:** When writing or editing template prose in the content module, follow Every style (title case for headings, sentence case for body, em dashes without spaces, comma after "e.g.," italics for emphasis).

---

## Overview

Add a third top-level view **Templates** (sidebar label "Templates") with five sub-tabs: Introduction, Step-by-step, Common roles, Lessons, Reference guides. Move Style Guide content out of `Layout.tsx` into a dedicated content module and a new `TemplatesView` component. Remove the Style Guide header button and modal from Layout. Navigation and rendering follow the existing Dashboard / Question Bank patterns.

**Source:** `docs/brainstorms/2026-02-20-style-guide-third-tab-below-dashboard-question-bank-brainstorm.md`

---

## Problem Statement / Motivation

- The Style Guide lives in a header modal with four tabs; it is the only modal-based reference and is easy to miss.
- Course authors need a single, obvious place for template reference (intros, step-by-step, roles, lessons, reference guides) at the same level as Dashboard and Question Bank.
- Moving the guide into a full-page view and renaming it to Templates (with five sections) simplifies the header and aligns the product with the desired information architecture.

---

## Proposed Solution

1. **App & routing:** Extend `ActiveView` to include `'templates'`. Add `handleGoToTemplates`; pass `onGoToTemplates` and `activeView` to Layout. When `activeView === 'templates'`, render `<TemplatesView />`.
2. **Layout:** Add a third sidebar button "Templates" (same pattern as Course Dashboard and Question Bank). Add breadcrumb branch for Templates (e.g., "Dashboard › Templates"). Remove the Style Guide (Palette) button and the entire Style Guide modal (state, tabs, content area, Esc/scroll logic that only served it).
3. **Content module:** Create a content module (e.g., `content/templatesContent.ts`) that exports five `ContentBlock[]` arrays (or equivalent) for: Introduction, Step-by-step, Common roles, Lessons, Reference guides. Content is moved/adapted from Layout's current four arrays and any new or placeholder content per mapping below.
4. **TemplatesView:** New component `components/TemplatesView.tsx`. Same container/heading pattern as Dashboard and QuestionBankView (max-width, padding, h1 "Templates", optional subtitle). Below that: a sub-tab strip (five buttons, same visual pattern as current Style Guide tabs in Layout) and a content area that renders the selected section via `LessonViewer` with `variant="default"` (full-page, no overlay). Default sub-tab when entering Templates: **Introduction**. Sub-tab selection is not persisted when navigating away and back.
5. **Content mapping (four → five):** Map existing modal content into the five sections; add placeholders or new content where needed so all five tabs have something to show at launch.
   - **Introduction** – New content (short template description for module Lesson 1: goal callout, context line, h2s Introduction / Common Question Stems / Core Concepts). Can reference `docs/plans/2026-02-20-feat-standardize-module-3-20-lesson-1-intro-format-plan.md`.
   - **Step-by-step** – New or derived from Structure (e.g., "Step-by-Step / Method" naming and a short template). If no ready content, use a short placeholder (e.g., one paragraph + bullet list).
   - **Common roles** – Derive from Structure (premise, conclusion, common stems) or new short reference. Placeholder acceptable.
   - **Lessons** – Reuse/merge **Components** + **Structure** (component library, course structure, voice & tone, lesson typology). Primary content from current modal.
   - **Reference guides** – New short template for reference-guide lessons, or placeholder. Drill Format and Passage Format content can be referenced or inlined under Lessons if useful, or kept as separate subsections under Lessons (planning choice: keep two distinct "Drill Format" and "Passage Format" blocks under Lessons, or fold into Reference guides; recommend keeping under Lessons as "Drill format" and "Passage format" for now so all current modal content is represented).

### Research Insights (Proposed Solution)

**State and data flow (best-practices-researcher):**
- Keep `activeView` in App (controlled); keep sub-tab state `templatesTab` inside `TemplatesView` with `useState`, default `'introduction'` on mount. No persistence when navigating away; no URL needed unless deep links are a requirement.
- Optional: sync active tab with `location.hash` (e.g., `#introduction`, `#lessons`) for shareable links and stable tab on refresh; fallback to `'introduction'` when hash is missing or invalid. See [web.dev – Building a Tabs component](https://web.dev/articles/building/a-tabs-component).

**Content extraction (best-practices-researcher):**
- Use named exports in `content/templatesContent.ts`; import shared `ContentBlock` type from `types.ts`. Avoid side effects and circular imports so the content module stays tree-shakeable. Prefer direct imports in `TemplatesView` (e.g., `from '../content/templatesContent'`) rather than a barrel that pulls in all content.

---

## Technical Considerations

- **ActiveView:** `App.tsx` L109: add `'templates'` to the union type. Add state setter in a handler and pass `onGoToTemplates` to Layout.
- **Layout.tsx:** Remove `styleGuideOpen`, `styleGuideTab`, all four content arrays (`styleGuideComponentsContent`, `styleGuideStructureContent`, `styleGuideDrillsContent`, `styleGuidePassagesContent`), and `obasanPassageText`. Remove the Style Guide button (L448–450), the Style Guide modal block (L460–497), and any `useEffect` or key handler that only closed the Style Guide. Add prop `onGoToTemplates?: () => void` and extend `activeView` type. Add third sidebar button (icon + "Templates") and breadcrumb branch for `activeView === 'templates'`.
- **LessonViewer:** Use `variant="default"` for Templates content (full-page layout). No new variant required.
- **Responsive:** Sub-tab strip: use the same pill/tab pattern as current Style Guide; on narrow viewports use horizontal scroll (e.g., `overflow-x-auto`, `flex-nowrap`) so all five tabs remain in one row; optional `scroll-snap-type: x mandatory` for snap stops.
- **Export:** When on Templates view, Export button remains available; scope is "Entire course" and lesson/module/unit options disabled (same as when no lesson selected). Ensure `handleGoToTemplates` clears module/lesson (e.g., `setActiveModuleId(null)`; `setActiveLessonId(null)`) so Export and breadcrumb behave correctly.

### Research Insights (Technical)

**Architecture (architecture-strategist):**
- **Gate Templates button:** Render the third sidebar button only when `onGoToTemplates` is provided: `{onGoToTemplates && (<button ... />)}`, matching Question Bank and avoiding `onGoToTemplates?.()` when undefined.
- **Effect cleanup when removing Style Guide:** (1) In the Escape `useEffect`, remove the `setStyleGuideOpen(false)` branch. (2) In the body overflow `useEffect`, remove `styleGuideOpen` from the condition and dependency array; use only `exportModalOpen`.
- **Import cleanup:** After Style Guide removal, remove `Palette` from the lucide import in Layout.

**Tab strip and accessibility (frontend-design, explore):**
- **ARIA:** Use WAI-ARIA tab pattern: container `role="tablist"` with `aria-label="Template sections"`; each trigger `role="tab"`, `aria-selected`, `aria-controls="panel-{id}"`, `id="tab-{id}"`; each panel `role="tabpanel"`, `id="panel-{id}"`, `aria-labelledby="tab-{id}"`, `tabIndex={0}` when visible; hide inactive panels with `aria-hidden="true"` and `tabIndex={-1}`.
- **Keyboard:** Arrow Left/Right to move between tabs; Home/End for first/last; Space/Enter to activate; keep focus on the active tab after activation. Call `preventDefault()` when handling so the page does not scroll.
- **Focus:** Visible focus ring on tabs (e.g., `focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2`).
- **Styling:** Container `bg-slate-100 p-1 rounded-lg border border-slate-200/80`; active pill `bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-200`; inactive `text-slate-600 hover:text-slate-800 hover:bg-slate-200/60`; `transition-all duration-200 ease-out`. Heading "Templates": `text-3xl font-bold text-slate-900`; tab labels `text-xs font-bold`.
- **Responsive:** Wrapper `flex overflow-x-auto overflow-y-hidden scrollbar-hide -mx-1 px-1`; inner `flex gap-0.5 p-1 rounded-lg ... min-w-max` so the strip scrolls on narrow viewports without wrapping.

**References:**
- [WAI-ARIA APG – Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [web.dev – Building a Tabs component](https://web.dev/articles/building/a-tabs-component)
- [MDN – tablist role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role)

---

## Acceptance Criteria

### Navigation & Removal

- [ ] `ActiveView` includes `'templates'`; App has a handler (e.g., `handleGoToTemplates`) and passes it to Layout; when `activeView === 'templates'`, App renders `TemplatesView`.
- [ ] Layout shows a third sidebar button labeled "Templates" only when `onGoToTemplates` is provided, with the same styling pattern as Course Dashboard and Question Bank; when selected, the button is visually active and the main area shows the Templates view.
- [ ] On mobile, selecting Templates in the sidebar closes the sidebar and shows the Templates view.
- [ ] The Style Guide header button and the Style Guide modal (tabs, content, overlay) are removed from Layout. No Palette "Style Guide" button; Escape no longer closes a Style Guide modal. Layout's Escape and body-overflow effects no longer reference Style Guide state.

### Templates View

- [ ] A new `TemplatesView` component renders when `activeView === 'templates'`, with a heading "Templates" and five sub-tabs: Introduction, Step-by-step, Common roles, Lessons, Reference guides. Selecting a sub-tab shows that section's content.
- [ ] Default sub-tab when entering Templates is Introduction. Sub-tab selection is not persisted when navigating away and back (optional: sync with `location.hash` for deep links).
- [ ] Each section's content is rendered via `LessonViewer` with `variant="default"` (or equivalent) and content from the content module.
- [ ] Sub-tab strip uses ARIA tab pattern (tablist/tab/tabpanel) with correct `aria-selected`, `aria-controls`, and `aria-labelledby`; keyboard (Arrow Left/Right, Home/End, Space/Enter) works; visible focus ring on tabs.
- [ ] Sub-tabs are usable on narrow viewports (horizontal scroll; no wrap so the strip stays one row).

### Content & Data

- [ ] Template content is supplied by a dedicated content module (e.g., `content/templatesContent.ts`); Layout does not contain the former Style Guide content arrays or modal content.
- [ ] All five sections have content (full or placeholder) at launch; mapping from the previous four modal sections to the five is documented in code or in this plan.
- [ ] When writing or editing template prose, follow Every style (title case headings, sentence case body, em dashes without spaces, comma after "e.g.," italics for emphasis).

### Layout & Regression

- [ ] When `activeView === 'templates'`, desktop breadcrumb shows "Dashboard › Templates" (Templates segment need not be clickable).
- [ ] Export button remains available from the Templates view; when on Templates, Export opens with scope "Entire course" and lesson/module/unit options disabled or hidden. Confirm without code change; if not true, add an explicit fix step.
- [ ] Navigating between Dashboard, Question Bank, Templates, and lesson view works; lesson prev/next and Export from lesson view are unchanged.

---

## Success Metrics

- Templates is reachable only from the sidebar (no header Style Guide).
- All five template sections render without error; authors can use them as reference.
- Layout is simpler (no modal, no in-file content arrays); TemplatesView and content module own template content.

---

## Dependencies & Risks

- **Dependencies:** None. Content exists in Layout today; types (`ContentBlock[]`) and `LessonViewer` are in place.
- **Risks:** (1) Content mapping might be ambiguous—mitigate by defining the five sections and placeholders in this plan or in `templatesContent.ts` comments. (2) Copying large content out of Layout may introduce typos—mitigate by move-and-delete (cut from Layout, paste into content module, then delete from Layout) and a quick visual check of each tab.

### Research Insights (Risks)

**Code-simplicity:** Use a single pass for Layout cleanup: remove Style Guide button, modal block, state, content arrays, and every effect that only served the Style Guide (Escape, body overflow). Do not leave partial removal for a later step. Use `content/templatesContent.ts` to match existing content module location (e.g., `content/premisesVsConclusionsContent.ts`).

---

## Implementation Outline

1. **Content module**  
   Create `content/templatesContent.ts` ✓ (match existing content location; do not use `constants/`). Export five arrays: `templatesIntroductionContent`, `templatesStepByStepContent`, `templatesCommonRolesContent`, `templatesLessonsContent`, `templatesReferenceGuidesContent` (each `ContentBlock[]`). **Cut** content from Layout's four arrays into this file (paste into Lessons and new sections), then **delete** from Layout. Add Introduction, Step-by-step, Common roles, Reference guides (new or placeholder). Move `obasanPassageText` into the content module if still used (e.g., in Passage-format content under Lessons). Document the mapping in a short comment at the top (four modal sections → five template sections; source per section).

2. **TemplatesView component**  
   Create `components/TemplatesView.tsx` ✓. Import the five content arrays. State: `templatesTab` (e.g., `'introduction' | 'stepByStep' | 'commonRoles' | 'lessons' | 'referenceGuides'`), default `'introduction'`. Derive title and content from a single map keyed by `templatesTab` (e.g., `const tabMap = { introduction: { title: '...', content: templatesIntroductionContent }, ... }`) to avoid repeated conditionals. Markup: outer container (e.g., `max-w-4xl mx-auto p-8 pb-20`), h1 "Templates" (`text-3xl font-bold text-slate-900`), then tab strip (see Technical Considerations / Research Insights for ARIA, classes, and responsive scroll), then `<LessonViewer title={...} content={...} variant="default" />` with title and content from the map. Omit `formatId` and optional subtitle unless needed. Implement keyboard handler for Arrow Left/Right and optional Home/End on the tablist.

3. **App.tsx**  
   Add `'templates'` to `ActiveView`. ✓ Add `handleGoToTemplates` that sets `activeView` to `'templates'` and **clears module/lesson** (e.g., set active module and lesson to null). Pass `onGoToTemplates={handleGoToTemplates}` to Layout. Add `{activeView === 'templates' && <TemplatesView />}`.

4. **Layout.tsx**  
   Add `onGoToTemplates?: () => void` ✓ to props and `'templates'` to `activeView` type. Add third sidebar button only when `onGoToTemplates` is provided: `{onGoToTemplates && (<button ... onClick={() => { onGoToTemplates(); setSidebarOpen(false); }} ... />)}` (e.g., FileText or LayoutList icon + "Templates"), with active state when `activeView === 'templates'`. Add breadcrumb branch: `activeView === 'templates'` → show "Dashboard › Templates". **Single pass removal:** Remove Style Guide button, Style Guide modal block, `styleGuideOpen`, `styleGuideTab`, and all four content arrays plus `obasanPassageText`. Update Escape `useEffect`: remove any branch that closed Style Guide; keep Export modal close. Update body overflow `useEffect`: remove `styleGuideOpen` from condition and dependency array. Remove `Palette` from lucide import.

5. **Verification**  
   Build; open app, click Templates ✓ in sidebar, switch all five sub-tabs (and test keyboard on tab strip), then go to Dashboard and Question Bank and back to Templates. Confirm default is Introduction and Export still works from Templates (scope "Entire course," lesson/module disabled). Confirm no Style Guide button in header and no modal.

---

## Content Mapping Summary (for implementation)

| New section      | Source at launch |
|------------------|------------------|
| Introduction     | New (short template: goal callout, context, h2s). |
| Step-by-step     | New or from Structure; placeholder OK. |
| Common roles     | From Structure (subset) or new; placeholder OK. |
| Lessons          | **Components** + **Structure** (merge). Include Drill Format and Passage Format as subsections or separate blocks so all current modal content is represented. |
| Reference guides | New or placeholder. |

---

## References & Research

- **Brainstorm:** `docs/brainstorms/2026-02-20-style-guide-third-tab-below-dashboard-question-bank-brainstorm.md`
- **Repo research:** `App.tsx` (ActiveView, handlers, render); `components/Layout.tsx` (sidebar L354–361, breadcrumb L410–417, Style Guide L253–254, L448–450, L460–497, content arrays L51–223); `components/QuestionBankView.tsx`, `components/Dashboard.tsx` (container/heading pattern); `components/LessonViewer.tsx` (variant default/modal).
- **SpecFlow:** Content mapping four→five, default sub-tab Introduction, no persistence, LessonViewer variant default, mobile sidebar and sub-tab behavior, Export from Templates, breadcrumb wording—incorporated above.
- **Related plan:** `docs/plans/2026-02-18-feat-contentbox-style-guide-tab-plan.md` (Style Guide tab context; ContentBox tab not in scope for this feat).
- **Deepen-plan:** WAI-ARIA APG Tabs, [web.dev Tabs](https://web.dev/articles/building/a-tabs-component), [APG Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/), [MDN tablist](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role); React state (local sub-tab in view, activeView in App); content extraction (named exports, direct imports, no circular deps).
