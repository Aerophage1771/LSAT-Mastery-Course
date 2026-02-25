<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# LSAT Mastery Course

A comprehensive, interactive LSAT preparation platform covering Logical Reasoning and Reading Comprehension. Built with React 19, TypeScript, Vite 6, and Tailwind CSS 4.

[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)](tsconfig.json)
[![React](https://img.shields.io/badge/React-19-61dafb)](package.json)
[![Vite](https://img.shields.io/badge/Vite-6-646cff)](vite.config.ts)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8)](package.json)
[![PWA](https://img.shields.io/badge/PWA-enabled-5a0fc8)](vite.config.ts)

</div>

---

## Overview

LSAT Mastery is a client-side SPA that delivers a full LSAT prep curriculum through 59 modules organized into four sections:

| Section | Modules | Coverage |
|---------|---------|----------|
| **Logical Reasoning** | 1–22 | 22 question types across 9 units (Identification, Analysis, Evaluation, Principle, Inference, Resolution, Conflict, Conditional Reasoning, LSAT Math) |
| **Reading Comprehension** | 23–49 | 12 question types, 10 practice passages, 5 reference guides |
| **Advanced Passages** | 50–56 | 7 in-depth passage analyses (Philosophy, Science, Law, Art, Social Science, Economics, History) |
| **Question Bank** | 57–59 | 224 practice questions (112 LR + 65 RC + 47 Advanced RC) with cross-references to drill explanations |

### Key Features

- **Interactive Question Cards** — click-to-reveal answer feedback with difficulty badges and PT identifiers
- **Passage Cards** — genre-tagged RC passages with word/paragraph counts and expand/collapse
- **Split-Pane Q+P Cards** — side-by-side passage and question view mirroring the LSAT interface
- **Client-Side Search** — Ctrl+K fuzzy search across all lessons and modules (Fuse.js)
- **Progress Tracking** — lesson completion persisted in localStorage with dashboard progress bars
- **URL Routing** — deep-linkable URLs (`/module/5/lesson/5-4`), browser back/forward support
- **Code Splitting** — each module lazy-loaded on demand; main bundle ~800 KB (down from ~2.9 MB)
- **Product Roadmap** — 78 improvement ideas across 7 categories, accessible from the header
- **Style Guide** — 7-tab component library with live interactive examples and technical implementation reference
- **PWA** — installable with offline fallback, 192/512px icons

---

## Quick Start

**Prerequisites:** Node.js 20+

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev
```

## All Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run typecheck` | TypeScript strict type checking |
| `npm test` | Run Vitest test suite |
| `npm run test:watch` | Vitest in watch mode |
| `npm run test:coverage` | Vitest with coverage report |
| `npm run analyze` | Bundle size visualization → `dist/stats.html` |
| `npm run report:gaps` | Audit missing drill/content IDs |

## Project Structure

```
├── App.tsx                    # Root component with routing, search, progress
├── index.tsx                  # React entry point
├── index.css                  # Tailwind imports + custom styles
├── types.ts                   # ContentBlock union type, Lesson, ModuleData
├── vite.config.ts             # Vite + PWA + Tailwind + visualizer config
├── tsconfig.json              # TypeScript strict config
├── eslint.config.js           # ESLint flat config
├── vitest.config.ts           # Vitest + jsdom config
│
├── components/
│   ├── Layout.tsx             # Shell: sidebar, header, modals (Style Guide, Roadmap, Export)
│   ├── LessonViewer.tsx       # Content renderer (maps ContentBlock[] → React components)
│   ├── Dashboard.tsx          # Module grid with progress indicators
│   ├── SearchDialog.tsx       # Ctrl+K search modal (Fuse.js)
│   ├── ErrorBoundary.tsx      # Crash recovery wrapper
│   ├── ExportControls.tsx     # PDF/RTF/JSON/CSV/TXT export
│   ├── StyleGuideContent.ts   # Style guide data (7 tabs + Copy All serializer)
│   ├── RoadmapContent.ts      # Product roadmap data (7 tabs, 78 ideas)
│   └── cards/
│       ├── QuestionCard.tsx   # Interactive LR drill card
│       ├── PassageCard.tsx    # RC passage viewer with genre tags
│       └── QuestionPassageCard.tsx  # Split-pane Q+P card
│
├── modules/
│   ├── registry.ts            # Module metadata + dynamic imports + cross-references
│   ├── Module1.tsx … Module59.tsx   # Module definitions
│   └── module1/ … module59/  # Lesson files (ContentBlock arrays)
│
├── hooks/
│   └── useProgress.ts         # localStorage progress persistence
│
├── contexts/
│   └── ProgressContext.tsx     # React Context for shared progress state
│
├── utils/
│   └── export.ts              # Content serializers (text, RTF, JSON, CSV, PDF)
│
├── public/
│   ├── icon.svg               # App icon (SVG)
│   ├── icon-192.png           # PWA icon 192×192
│   ├── icon-512.png           # PWA icon 512×512
│   ├── icon-maskable-512.png  # PWA maskable icon
│   └── offline.html           # Offline fallback page
│
└── __tests__/
    └── modules.test.ts        # Module structure tests
```

## Content Block System

All lesson content is expressed as arrays of typed `ContentBlock` objects. The `LessonViewer` component maps each block type to a React component:

| Block Type | Purpose |
|------------|---------|
| `paragraph`, `h2`, `h3`, `h4` | Text and headings |
| `blockquote` | Excerpt panels (stimulus text, passages) |
| `list` | Ordered/unordered lists |
| `callout` | Tip, note, or summary boxes (3 variants) |
| `process` | Numbered step-by-step workflows |
| `breakdown` | Side-by-side analysis cards with badges |
| `table` | Data tables with headers |
| `options` | Click-to-reveal answer choices |
| `accordion` | Collapsible sections |
| `code` | Dark code blocks with copy button |
| `question-card` | Interactive LR question with feedback |
| `passage-card` | RC passage with genre tag and stats |
| `question-passage-card` | Split-pane passage + question |

See the **Style Guide → Technical** tab in the app for complete type definitions with live examples.

## Technology Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 19 |
| Language | TypeScript 5.8 (strict mode) |
| Build Tool | Vite 6 |
| CSS | Tailwind CSS 4 |
| Routing | React Router 7 |
| Search | Fuse.js |
| Sanitization | DOMPurify |
| PDF Export | jsPDF + jspdf-autotable |
| Icons | Lucide React |
| PWA | vite-plugin-pwa (Workbox) |
| Testing | Vitest + Testing Library + jsdom |
| Linting | ESLint 9 (flat config) + typescript-eslint |
| Formatting | Prettier |
| Bundle Analysis | rollup-plugin-visualizer |

## Content Policy

- **Drill and concept lessons** (Lesson 4+) use real LSAT questions sourced from the Question Bank modules. Stimuli, questions, and answer choices in these lessons are authentic PrepTest content.
- **Introduction, Step-by-Step, and Field Guide lessons** (Lessons 1–3) may use invented illustrative examples for pedagogical clarity. These are always clearly labeled as illustrative and never assigned PT identifiers.
- The Question Bank (Modules 57–59) is the single source of truth for all practice questions used throughout the course.

## License

Private — not open source.
