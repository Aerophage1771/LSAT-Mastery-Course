---
date: 2026-02-18
topic: export-rendering-jsx-html
---

# Export current rendering as JSX / HTML

## What we're building

Ability to export the **main content area** of the current page (lesson body only; no nav, sidebar, or chrome) in two formats:

1. **JSX** – React-style markup with Tailwind classes preserved, so developers can paste into a `.tsx` file and get the same look in a React + Tailwind app.
2. **HTML** – Self-contained HTML with styles inlined or embedded so it looks the same in any browser, email client, or design tool (no React or Tailwind required).

Both options available from the same flow (e.g. "Copy as JSX" and "Copy as HTML" in the lesson export menu or a small dropdown). Target users: developers reusing the UI and content/design sharing a visual snapshot.

---

## Why this approach

Three options were considered.

### Approach A: DOM-based serialization (recommended)

**Idea:** Use the live DOM of the content area. Walk the tree and emit (1) JSX: tag names + `className` from `class`, children; (2) HTML: same structure + computed styles inlined (or in a `<style>` block) so the document is self-contained.

**Pros:**
- Captures exactly what’s on screen (current expand/collapse state, theme, etc.).
- No dependency on React internals or component tree.
- One implementation path for both outputs; only the styling step differs (Tailwind classes vs computed styles).
- Works for any view that renders into the content area (lessons, Style Guide content, etc.).

**Cons:**
- JSX output is a tree of primitives (`div`, `p`, `span`) with no React component names.
- Can be verbose (many wrapper divs). Can be prettified/formatted in a follow-up.

**Best when:** You want visual fidelity and a single, maintainable implementation.

### Approach B: React tree serialization

**Idea:** Pass the React element (content subtree) to something like `react-element-to-jsx-string` to get JSX with real component names and props. For HTML, use `renderToStaticMarkup` on that subtree.

**Pros:**
- JSX could preserve component boundaries (e.g. `<QuestionCard>`, `<ContentBox>`), which is nice for dev reuse.

**Cons:**
- Requires passing the “content” React node from Layout/App into an exporter (ref or callback), which touches routing and composition.
- `renderToStaticMarkup` output still has Tailwind classes; to get “HTML that looks the same anywhere” you’d still need to resolve styles (e.g. from DOM) for the HTML path.
- More moving parts and tighter coupling to React and component structure.

**Best when:** Preserving component names in JSX is a hard requirement and you’re willing to wire the tree through the app.

### Approach C: Hybrid (DOM + optional React metadata)

**Idea:** Serialize from DOM (as in A). Optionally try to match DOM nodes back to known components (e.g. by `data-component` or a fixed set of wrappers) and emit those names in JSX where possible.

**Pros:**
- Keeps DOM as single source of truth while allowing nicer JSX in some places.

**Cons:**
- Requires annotating components and maintaining a mapping; more complexity for limited gain initially.

**Best when:** You later discover that primitive-only JSX is a real pain and you’re willing to add metadata.

**Recommendation:** Start with **Approach A**. It delivers both formats with minimal coupling and matches “preserve current visual details” and “works for both dev and content/design.” If later you need component-named JSX, you can add a small layer (e.g. `data-component` on key components and a name map in the serializer).

---

## Key decisions

- **Scope:** Main content area only. Implement by marking the content root (e.g. the wrapper that contains the lesson body) with a `data-export-content` attribute and serializing that node’s subtree. When the lesson view is active, that node is the only thing exported; no sidebar, header, or main padding.
- **Trigger:** Add “Copy as JSX” and “Copy as HTML” alongside existing lesson export (e.g. in the Export dropdown in the lesson header or inside the existing export modal for the current lesson). Only enable when the content node exists (lesson view).
- **JSX format:** Emit valid JSX syntax: HTML-like tags, `className` for `class`, escape `{}` in text where needed, optional single top-level wrapper. Output is a string copied to clipboard; no file download required for the first version (consistent with “copy”).
- **HTML format:** For portability, HTML export should inline computed styles (or embed a scoped `<style>`) so the file can be opened anywhere and look the same. Tailwind classes alone are not sufficient for that. So: serialize DOM and for each element (or a subset) get `getComputedStyle` and emit inline `style` (or collect rules and put them in a `<style>` block with a scoped prefix). Omit scripts.
- **Fidelity:** Export the current state (e.g. accordions expanded/collapsed, selected choice if any). No need to “normalize” state unless you explicitly want a “default expanded” export later.

---

## Open questions

- **Prettify:** Should JSX be pretty-printed (indentation, line breaks) or a single line? Pretty-printed is easier to read and edit; single line is easier to paste into narrow UIs. Default to pretty-printed; optional “compact” could be added later.
- **Dashboard / Question Bank:** Should export be available only in lesson view, or also for Dashboard or Question Bank with “content area” defined per view? Starting with lesson-only keeps scope small; other views can be added later if needed.
- **File download:** For HTML, optionally offer “Download as .html” in addition to “Copy as HTML” so the file can be saved and opened. Same for JSX (“Download as .tsx”) if useful. Can be a follow-up.

---

## Next steps

- Implement DOM-based serializer: given a root `HTMLElement`, produce (1) JSX string, (2) HTML string with inlined/computed styles.
- Mark the lesson content root in the app (e.g. `LessonViewer` wrapper or Layout’s main content child) with `data-export-content`.
- Add “Copy as JSX” and “Copy as HTML” to the lesson export UI; on click, find `[data-export-content]`, run the serializer, copy to clipboard (and optionally show a brief “Copied” toast).
- Test with a few lessons (plain content, accordions, QuestionCard, format themes) to ensure output is valid and visually faithful.

→ Use this doc as input for an implementation plan when ready.
