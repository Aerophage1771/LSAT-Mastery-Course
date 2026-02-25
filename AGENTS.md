# AGENTS.md

## Cursor Cloud specific instructions

### What this is

A **client-side only** React + TypeScript SPA delivering an interactive LSAT preparation course. No backend, no database, no external services. All course content (59 modules, ~600 lessons) is statically bundled and code-split per module.

### Stack

- **React 19**, TypeScript 5.8 (strict mode), Vite 6, Tailwind CSS 4
- **React Router 7** for URL-based navigation
- **Fuse.js** for client-side search
- **DOMPurify** for HTML sanitization of rendered content
- **vite-plugin-pwa** for PWA / service worker
- Package manager: **npm** (lockfile: `package-lock.json`)

### Running the app

```
npm run dev        # Vite dev server → http://localhost:3000 (binds 0.0.0.0)
npm run build      # Production bundle → dist/
npm run preview    # Serve production build locally
```

### Key scripts

| Command | What it does |
|---------|-------------|
| `npm run lint` | ESLint (flat config, TS + React plugins) |
| `npm run typecheck` | `tsc --noEmit` with strict mode |
| `npm test` | Vitest unit tests |
| `npm run format` | Prettier |
| `npm run analyze` | Bundle visualizer → `dist/stats.html` |

### Architecture

- **Routing**: `/`, `/module/:moduleId`, `/module/:moduleId/lesson/:lessonId`
- **Code splitting**: `modules/registry.ts` maps module IDs to `() => import('./ModuleN')`. Each of the 59 modules is a separate chunk (~5–150 KB each). Main bundle is ~800 KB.
- **Content model**: Lessons are arrays of typed `ContentBlock` objects (see `types.ts`). The `LessonViewer` component in `components/LessonViewer.tsx` renders them. There are 17 block types including interactive cards (`question-card`, `passage-card`, `question-passage-card`).
- **Progress**: Lesson completion stored in `localStorage` via `hooks/useProgress.ts`, shared via `contexts/ProgressContext.tsx`.
- **Search**: Fuse.js search dialog on `Ctrl+K`, searches all lesson/module titles.
- **Question Bank**: Standalone page at `/question-bank` with 247 questions (150 LR + 97 RC). Sidebar filtering by type, real-time search, expandable cards with interactive answer feedback. Data in `modules/module48/`, `module49/`, `module53/`. Validation via `npm run validate:questions`.
- **Style Guide**: 7-tab modal (`Components`, `Question Card`, `Passage Card`, `Q+P Card`, `Structure`, `Prompts`, `Technical`) with live interactive examples. "Copy All" button serializes entire guide to clipboard.
- **Roadmap**: 7-tab modal with 78 product improvement ideas.

### Module numbering

Modules are numbered 1–56 sequentially:
- **1–22**: Logical Reasoning (9 units)
- **23–49**: Reading Comprehension (6 units)
- **50–56**: Advanced Passages

The Question Bank is NOT a module. It has its own standalone page at `/question-bank` with dedicated `QuestionBank.tsx` component. Questions are stored in `modules/module48/` (LR), `modules/module49/` (RC), and `modules/module53/` (Advanced RC).

### Gotchas

- **Module55 TS errors**: 9 pre-existing errors in `modules/Module55.tsx` reference lesson files (`module55/Lesson_Intro`, etc.) that don't exist yet. These are not regressions. All other modules compile cleanly.
- **Chunk size warning**: Vite warns about the main bundle exceeding 500 KB. This is expected; the app shell + routing + search + UI components total ~800 KB.
- **PWA**: Service worker is only generated during `npm run build`, not in dev mode.
- **Strict TypeScript**: `tsconfig.json` has `strict: true`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`, `noFallthroughCasesInSwitch`. All new code must comply.
- **Content files**: Lesson `.tsx` files in `modules/moduleN/` are pure data (TypeScript objects exporting `ContentBlock[]`). They are not React components. The renderer is `LessonViewer.tsx`.
- **Blockquotes**: Render as clean rounded panels (not italic + left-border). Styled via `LessonViewer.tsx`, not individual files.
- **Dev server port**: `npm run dev` targets port 3000 but auto-increments if busy. Check the Vite output for the actual port.
- **Pre-existing lint errors**: `npm run lint` reports ~630 pre-existing errors (mostly `no-case-declarations` in `LessonViewer.tsx` and `export.ts`). These are not regressions. Verify your changes by filtering lint output to your modified files.

### Adding new content

1. Create lesson file in `modules/moduleN/LessonX_Name.tsx` exporting a `Lesson` object
2. Import and add to the module's lesson array in `modules/ModuleN.tsx`
3. If creating a new module: add an entry to `modules/registry.ts` with metadata and dynamic import
4. Use the Style Guide → Technical tab for the complete `ContentBlock` type reference with examples
5. Mark correct answers in `options` and `question-card` blocks by appending `(Correct)` to the string

### Question content policy (CRITICAL)

- **Drill and concept lessons (Lesson 4+)** MUST use real LSAT questions sourced from the Question Bank (`modules/module48/`, `module49/`, `module53/`). Never invent stimuli, questions, or answer choices for these lessons. If more real questions are needed, request them from the repository owner.
- **Introduction, Step-by-Step Guide, and Field Guide lessons (Lessons 1-3)** MAY use invented illustrative examples, but these MUST be clearly labeled with `id: 'illustrative'` or similar, and the surrounding text must state "Consider this illustrative example" or equivalent. Never assign a PT identifier to an invented question.
- The Question Bank repositories (`module48/` for LR, `module49/` for RC, `module53/` for Advanced RC) are the single source of truth for real question content. Cross-reference drill lessons against these repositories to verify authenticity.
