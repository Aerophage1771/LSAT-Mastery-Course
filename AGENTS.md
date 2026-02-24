# AGENTS.md

## Cursor Cloud specific instructions

This is a **client-side only** React + TypeScript SPA (no backend, no database, no external services). All LSAT course content is statically bundled.

### Stack

- React 19, TypeScript, Vite 6, Tailwind CSS 4, PWA (vite-plugin-pwa)
- Package manager: **npm** (lockfile: `package-lock.json`)

### Running the app

- `npm run dev` starts Vite on `http://localhost:3000` (binds `0.0.0.0`)
- `npm run build` produces a production bundle in `dist/`
- `npm run preview` serves the production build locally

### Lint / Type-check

- There is no dedicated ESLint config or lint script in this repo.
- Run `npx tsc --noEmit` for TypeScript type-checking. Note: 9 pre-existing TS errors exist in `Module55.tsx` (references modules that don't exist yet); these are not regressions.

### Testing

- No automated test framework is configured. Manual browser testing via `npm run dev` is the primary validation method.

### Gotchas

- The main JS bundle is ~2.9 MB (2,359 modules of course content). Vite build emits a chunk-size warning; this is expected.
- PWA service worker is generated at build time only (`npm run build`), not during `npm run dev`.
