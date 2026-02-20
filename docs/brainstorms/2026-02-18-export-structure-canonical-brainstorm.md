---
date: 2026-02-18
topic: export-structure-canonical
---

# Export structure: canonical content hierarchy

## What we're building

A single source of truth for **how the lesson export (Copy as JSX / Copy as HTML) must be structured** so that pasted output matches the app’s visuals. The issue: one **background layer** was missing from the export because the export root did not include the outermost lesson “card.”

## Canonical export structure (required order)

The exported tree **must** include these background layers in this order, from root to content:

0. **Outer gray (page background)** – Matches Layout’s `<main>`: `bg-slate-50/50 p-4 lg:p-8`. This is the **export root** (`data-export-content`). It sits outside the white card so pasted output shows the full page background first.
1. **Outer white card** – Lesson container (`containerClasses`: `max-w-4xl mx-auto bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-slate-100 …`).
2. **Page gray** – Inner main-area band: `bg-slate-50/50 p-4 lg:p-8` (wraps header + content block).
3. **Header row** – “Current Lesson” label + lesson title only (Export Controls excluded via `data-export-skip`).
4. **Content white card** – Same `containerClasses` again, wrapping only the lesson body.
5. **Inner gray strip** – `bg-slate-50/50 p-4 lg:p-8` around the prose.
6. **Prose/content** – The actual lesson body (prose div + `renderBlocks` / `renderMarkdown`).

So the **export root** is the **outer gray** (layer 0). Its single child is the white card (layer 1); the rest of the hierarchy (layers 2–6) lives inside that. Export Controls stay outside the serialized tree (wrapped in `data-export-skip`).

## Why this approach

- **Visual parity:** In the app you see: gray (Layout main) → white (lesson card) → gray (content area) → header | white (body card) → gray (strip) → content. The export must mirror that so pasted JSX/HTML shows the same layers, including the **outer gray** that wraps everything.
- **Single export root:** The element with `data-export-content` is the **outer gray** wrapper (`bg-slate-50/50 p-4 lg:p-8`). Its only child is the white card; serializing that root yields all layers in one pass.
- **Explicit outer gray:** Layout’s main provides the page gray in the app; LessonViewer adds a matching wrapper as the export root so the pasted result includes that layer even when opened outside the app.

## Key decisions

- **Export root = outer gray:** Put `data-export-content` on the outermost wrapper in LessonViewer: a div with `bg-slate-50/50 p-4 lg:p-8`. Its single child is the white card (`containerClasses`), which then contains the inner gray, header row, content white card, inner gray strip, and prose.
- **Background layers are mandatory:** All six layers (outer gray, white card, page gray, header row, content white card, inner gray, prose) must be present in the DOM under the export root so the serializer doesn’t add or remove structure.
- **Export Controls excluded:** The header row still contains the `data-export-skip` wrapper around ExportControls so the dropdown never appears in the exported string.

## Resolved / open questions

- **Which layer was missing?** First the outer white card was outside the export root; then the **outer gray** (Layout main’s background) was still missing. Adding an outermost wrapper with `bg-slate-50/50 p-4 lg:p-8` and putting `data-export-content` on it ensures the pasted output includes that page-level background.
- **Other views (Dashboard, Style Guide):** Not in scope for this doc; same pattern (mark a single root, skip UI chrome) can be applied later if needed.

## Next steps

→ Implemented: export root is the outer gray wrapper; its child is the white card; all six layers are in the subtree. Optionally add a one-line comment in `LessonViewer` referencing this doc so future changes keep the canonical structure.
