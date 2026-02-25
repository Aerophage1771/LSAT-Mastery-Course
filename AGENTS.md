# AGENTS.md

## Cursor Cloud specific instructions

This is a **client-side only** React + TypeScript SPA (no backend, no database, no external services). All LSAT course content is statically bundled.

### Stack

- React 19, TypeScript (strict mode), Vite 6, Tailwind CSS 4, PWA (vite-plugin-pwa)
- React Router for URL-based navigation
- Fuse.js for client-side search
- DOMPurify for HTML sanitization
- Package manager: **npm** (lockfile: `package-lock.json`)

### Running the app

- `npm run dev` starts Vite on `http://localhost:3000` (binds `0.0.0.0`)
- `npm run build` produces a production bundle in `dist/`
- `npm run preview` serves the production build locally

### Available scripts

See `package.json` for the full list. Key commands:
- `npm run lint` / `npm run lint:fix` - ESLint
- `npm run format` / `npm run format:check` - Prettier
- `npm run typecheck` - TypeScript strict type checking
- `npm test` - Vitest (unit tests)
- `npm run test:watch` - Vitest in watch mode
- `npm run analyze` - Bundle size visualization (outputs `dist/stats.html`)

### Architecture notes

- **Routing**: React Router with paths `/`, `/module/:moduleId`, `/module/:moduleId/lesson/:lessonId`
- **Code splitting**: Modules are lazy-loaded via `modules/registry.ts`. Each of the 59 modules is a separate chunk.
- **Progress**: Lesson completion persisted in `localStorage` via `hooks/useProgress.ts` and shared via `contexts/ProgressContext.tsx`.
- **Search**: Fuse.js-powered search dialog activated by `Ctrl+K`.

### Gotchas

- The main JS bundle is ~775 KB (down from ~2.9 MB after code splitting). Vite build still emits a chunk-size warning; this is expected.
- PWA service worker is generated at build time only (`npm run build`), not during `npm run dev`.
- 9 pre-existing TS errors exist in `Module55.tsx` (references modules that don't exist yet); these are not regressions.
- `tsconfig.json` has `strict: true` enabled. All new code must be strictly typed.
