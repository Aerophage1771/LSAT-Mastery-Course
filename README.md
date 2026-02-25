# LSAT Mastery Course

React + Vite curriculum app for LSAT instruction, including:

- LR and RC module lessons
- RC integrated question cards
- Question Bank view
- Templates workspace for lesson authoring
- Export support in lesson views (disabled in Templates)

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- `vite-plugin-pwa`

## Getting Started

Prerequisites:

- Node.js 20+ (recommended)
- npm

Install and run:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run preview` - preview production build
- `npm run report:gaps` - repository gaps report script
- `npm run build:question-bank-lr` - rebuild LR question bank data

## App Structure

- `App.tsx` - top-level view routing (`dashboard`, `questionBank`, `templates`, `lesson`)
- `modules/` - curriculum modules and lesson content
- `components/` - layout, viewer, cards, templates UI
- `content/templatesContent.ts` - template tab lesson blocks
- `data/questionBankLR.json` - LR question bank data source
- `utils/` - export and rendering utilities

## Templates View

`components/TemplatesView.tsx` exposes 8 tabs:

1. Introduction
2. Step-by-step
3. Common roles
4. LR Lesson
5. RC Passage Analysis
6. RC Question
7. RC Question Type Intro
8. Reference guides

Non-Introduction tabs render with `LessonViewer` and hide export controls.

## Lesson Content Conventions

RC question lessons are expected to keep this order:

`accordion -> h3 -> blockquote -> options -> h4 Analysis -> paragraph -> callout Text Evidence -> breakdown`

This order is required for integrated RC card parsing in `LessonViewer`/`IntegratedRCQuestionCard`.

## Known Issue

Current build may fail due to a missing module import in:

- `modules/Module6.tsx` importing `./module6/Lesson9_Drill_OverlapFlaw`

The file in `modules/module6/` is currently named `Lesson10_Drill_OverlapFlaw.tsx`.
