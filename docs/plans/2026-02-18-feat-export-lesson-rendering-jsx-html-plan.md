---
title: Export lesson rendering as JSX and HTML
type: feat
status: completed
date: 2026-02-18
---

# Export lesson rendering as JSX and HTML

## Overview

Add the ability to export the **main content area** (lesson body only; no nav, sidebar, or chrome) in two formats: **JSX** (React-style markup with Tailwind classes) and **HTML** (self-contained with inlined or embedded styles). Both options copy to clipboard from the lesson export UI. Serves developers reusing the UI and content/design sharing a visual snapshot.

**Brainstorm:** [Export current rendering as JSX / HTML](docs/brainstorms/2026-02-18-export-rendering-jsx-html-brainstorm.md)  
**Approach:** DOM-based serialization from a node marked with `data-export-content`.

---

## Problem statement / motivation

- Current export (Text, RTF, JSON, CSV, PDF) is **data-based** only: it uses the lesson data model, not the rendered DOM.
- There is no way to capture the **current visual rendering** (with theme, expanded state, and Tailwind styling) for reuse in code or for sharing as a standalone HTML snapshot.
- Users want to copy the lesson body as JSX (for pasting into a React app) or as HTML (for email, design tools, or any browser) while preserving visual details.

---

## Proposed solution

1. **DOM serializer utility** – Given a root `HTMLElement`, walk the subtree and produce:
   - **JSX string:** tag names, `className` from `class`, children; valid JSX with optional single top-level wrapper; pretty-printed by default. Omit `<script>` and `<iframe>`; preserve SVG. Escape `{` and `}` in text for JSX.
   - **HTML string:** same structure with computed styles inlined per element (or a scoped `<style>` block) so the result is self-contained; strip scripts and iframes.
2. **Content root** – Mark the lesson body wrapper in `LessonViewer` with `data-export-content` so the serializer has a single root (the prose div that wraps `renderBlocks`/`renderMarkdown`).
3. **UI** – Add “Copy as JSX” and “Copy as HTML” to the lesson export dropdown (`ExportControls` in `LessonViewer`). On click: find `[data-export-content]`, run the appropriate serializer, copy to clipboard, show success or error feedback.
4. **Error handling** – When the content node is missing, clipboard fails, or serialization throws: show a clear message and do not show “Copied!”. Optional timeout (e.g. 5s) for very large DOM with a “Export took too long” message.

---

## Technical considerations

- **Where the content root is:** `components/LessonViewer.tsx` – the prose wrapper at the div that contains `renderBlocks(content)` / `renderMarkdown(content)` (around line 357). Add `data-export-content` to that div so only the lesson body is exported (no “Current Lesson” heading, no ExportControls).
- **Where export UI lives:** `components/LessonViewer.tsx` lines 346–355 pass callbacks to `ExportControls`. Extend `ExportControls` to accept optional `onCopyAsJSX` and `onCopyAsHTML` (each returns a string or Promise<string>). When provided, add two entries to the “Export As” dropdown (or a small “Copy rendering” section) that call the same clipboard pattern as existing copy.
- **Clipboard pattern:** Reuse existing behavior in `ExportControls`: `navigator.clipboard.writeText(text)`, then set “Copied!” state for 2s. Extend to: on rejection, show “Copy failed” (and optionally an `aria-live` message for screen readers); when serializer returns empty (no node), show “Content not available to export” and do not copy.
- **Serializer location:** New file `utils/exportRendering.ts` (or `utils/domSerialization.ts`) with:
  - `serializeToJSX(root: HTMLElement | null, options?: { pretty?: boolean }): string`
  - `serializeToHTML(root: HTMLElement | null, options?: { inlineStyles?: boolean }): string`
  - Both return `''` when `root` is null. Both strip `<script>` and `<iframe>` from the tree (or skip those nodes when walking). For HTML, use `getComputedStyle` and inline the result on each element (or collect rules and emit a `<style>` block with a unique scope). For JSX, emit `className={...}` and escape text content so `{` and `}` are safe.
- **Performance:** No hard size limit in v1. If serialization takes > N seconds (e.g. 5), catch with a timeout and show “Export took too long; try a shorter lesson.” Document that very large lessons may be slow.
- **Accessibility:** New actions must be focusable, have descriptive labels (e.g. “Copy as JSX”, “Copy as HTML”), and success/failure feedback must be announced (e.g. `aria-live="polite"` region or existing “Copied!” pattern extended for errors). Export dropdown is already keyboard-operable (click to open, click outside to close); ensure new items are focusable and activatable with keyboard.

---

## Implementation phases

### Phase 1: DOM serializer utility

- [x] Add `utils/exportRendering.ts` (or `utils/domSerialization.ts`).
- [ ] Implement `serializeToJSX(root, options?)`: walk DOM subtree; map `class` → `className`; emit valid JSX (tags, attributes, children); skip `<script>` and `<iframe>`; escape `{` and `}` in text; optional pretty-print (indentation). Return `''` if `root` is null.
- [x] Implement `serializeToHTML(root, options?)`: walk same subtree; for each element get `getComputedStyle` and set `style` attribute (or emit a `<style>` block with scoped selectors); skip script/iframe; return a full document or fragment. Return `''` if `root` is null.
- [ ] Unit or integration tests for simple trees (div with class, nested elements, text with `{` `}`) and for null root.

**Files:** `utils/exportRendering.ts`, optionally `utils/__tests__/exportRendering.test.ts`.

### Phase 2: Mark content root

- [x] In `LessonViewer.tsx`, add `data-export-content` to the div that wraps the lesson body (the prose div containing `renderBlocks`/`renderMarkdown`), so the export root is exactly that wrapper.

**Files:** `components/LessonViewer.tsx`.

### Phase 3: Export UI and clipboard integration

- [x] Extend `ExportControls` to accept optional `onCopyAsJSX?: () => string | Promise<string>` and `onCopyAsHTML?: () => string | Promise<string>`.
- [x] When these props are provided, add two items to the export dropdown (e.g. “Copy as JSX”, “Copy as HTML”) that call the same copy flow: get string (await if Promise), then `navigator.clipboard.writeText(str)`. If string is empty, show “Content not available to export” and do not set “Copied!”. On clipboard rejection, show “Copy failed” (and do not set “Copied!”).
- [x] In `LessonViewer`, pass `onCopyAsJSX` and `onCopyAsHTML` that: call `document.querySelector('[data-export-content]')`, then `serializeToJSX(root)` / `serializeToHTML(root)` and return the result. Optionally wrap in try/catch and return a sentinel or throw so the UI can show “Export failed.”
- [ ] Ensure “Copy as JSX” and “Copy as HTML” are only shown when in lesson view (they are already inside LessonViewer, so they only appear when a lesson is being viewed; Style Guide also renders LessonViewer – document that exporting from Style Guide exports the Style Guide lesson content, and do not disable unless product explicitly asks).

**Files:** `components/ExportControls.tsx`, `components/LessonViewer.tsx`.

### Phase 4: Error handling and accessibility

- [x] When `[data-export-content]` is not found: serializer returns `''`; UI shows brief “Content not available to export” and does not copy or show “Copied!”.
- [x] When `navigator.clipboard.writeText` rejects: catch in ExportControls, show “Copy failed. Check permissions or try again.” (or similar), do not set “Copied!”. Optionally add `aria-live` region for success/failure for screen readers.
- [ ] When serialization throws (e.g. timeout or browser quirk): catch in LessonViewer callbacks or in ExportControls, show “Export failed.” and log error; do not leave UI in broken state.
- [ ] Optional: add a 5s timeout (deferred) around serialization and show “Export took too long; try a shorter lesson.” if exceeded.
- [ ] Ensure “Copy as JSX” and “Copy as HTML” have `aria-label` or visible text and that success/failure is announced (e.g. via existing “Copied!” pattern plus a live region for errors).

**Files:** `components/ExportControls.tsx`, `components/LessonViewer.tsx`, optionally `utils/exportRendering.ts` (timeout inside serializer).

---

## Acceptance criteria

- [ ] When viewing a lesson, the lesson export dropdown includes “Copy as JSX” and “Copy as HTML”.
- [ ] “Copy as JSX” copies to clipboard a valid JSX string (Tailwind classes preserved, pretty-printed by default) that matches the current lesson body rendering (current expand/collapse and theme).
- [ ] “Copy as HTML” copies to clipboard a self-contained HTML string (styles inlined or in a `<style>` block) that looks the same when pasted into a browser or design tool.
- [ ] Exported content does not include `<script>` or `<iframe>`; the serializer strips or omits them.
- [ ] When `[data-export-content]` is not in the document, clicking “Copy as JSX” or “Copy as HTML” shows “Content not available to export” and does not write to clipboard or show “Copied!”.
- [ ] When clipboard write fails, the UI shows a clear message (e.g. “Copy failed”) and does not show “Copied!”.
- [ ] When serialization throws, the UI shows “Export failed” and does not crash; errors are logged for debugging.
- [ ] “Copy as JSX” and “Copy as HTML” are focusable and have descriptive accessible names; success and failure feedback is available to screen readers (e.g. aria-live or existing Copied pattern).
- [ ] Build passes; no new lint errors.

---

## Success metrics

- Developers can paste the JSX into a React + Tailwind project and see the same layout and styling.
- Content/design can paste the HTML into email or a design tool and see a faithful visual snapshot.
- No silent failures: missing node, clipboard error, or serialization error always result in a clear user-visible message.

---

## Dependencies and risks

- **Dependencies:** Existing `LessonViewer`, `ExportControls`, `utils/export.ts` (data exports unchanged). No new runtime dependencies required; DOM and Clipboard APIs are standard.
- **Risks:** Very large lessons may produce huge strings or slow serialization; timeout and message mitigate. Inline HTML from `dangerouslySetInnerHTML` must be escaped correctly in JSX (e.g. `{` `}`) and in HTML (entities) to avoid broken output. SVG from icons (e.g. lucide-react) is preserved; output can be verbose but correct.

---

## References and research

- **Brainstorm:** `docs/brainstorms/2026-02-18-export-rendering-jsx-html-brainstorm.md`
- **Repo:** `components/ExportControls.tsx` (clipboard pattern, dropdown), `components/LessonViewer.tsx` (prose wrapper ~line 357, ExportControls usage ~346–355), `utils/export.ts` (data-only exports)
- **SpecFlow:** Error handling, a11y, script/iframe stripping, and placement decisions incorporated above
