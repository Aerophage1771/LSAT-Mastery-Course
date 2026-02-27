# LSAT Mastery Course

## Project Overview
LSAT Mastery is a client-side Single Page Application (SPA) designed for LSAT preparation, covering Logical Reasoning and Reading Comprehension. It delivers a comprehensive curriculum through 59 modules and includes a standalone Question Bank.

**Key Characteristics:**
*   **Tech Stack:** React 19, TypeScript 5.8, Vite 6, Tailwind CSS 4.
*   **Architecture:** Client-side SPA with React Router 7 for routing. Modules are lazy-loaded.
*   **Data Persistence:** Uses `localStorage` for tracking lesson completion progress.
*   **Search:** Client-side fuzzy search using `Fuse.js`.
*   **Content System:** Lessons are defined as arrays of typed `ContentBlock` objects, rendered by a generic `LessonViewer` component.
*   **PWA:** Fully installable Progressive Web App with offline support.

## Building and Running

**Prerequisites:** Node.js 20+

### Core Commands
*   **Install Dependencies:** `npm install`
*   **Start Dev Server:** `npm run dev` (Runs on http://localhost:3000)
*   **Build for Production:** `npm run build` (Output to `dist/`)
*   **Preview Production Build:** `npm run preview`

### Testing and Quality Assurance
*   **Run Tests:** `npm test` (Vitest)
*   **Watch Tests:** `npm run test:watch`
*   **Type Check:** `npm run typecheck`
*   **Lint:** `npm run lint`
*   **Format:** `npm run format`

### Special Utilities
*   **Validate Questions:** `npm run validate:questions` (Checks data quality of the Question Bank)
*   **Inventory Invented Questions:** `npm run inventory:invented` (Extracts invented questions)
*   **Report Gaps:** `npm run report:gaps` (Audits missing drill/content IDs)
*   **Bundle Analysis:** `npm run analyze` (Visualizes bundle size)

## Development Conventions

### Content Management
*   **Content Blocks:** All lesson content must be structured using the `ContentBlock` type system (e.g., `paragraph`, `callout`, `question-card`). See `types.ts` and the in-app Style Guide.
*   **Registry:** New modules must be registered in `modules/registry.ts`.
*   **Question Bank:** The source of truth for practice questions is the Question Bank (Modules 57-59). Lesson content should reference these questions where possible.

### Component Architecture
*   **LessonViewer:** The central component that consumes content arrays and renders the appropriate UI components.
*   **Atomic Components:** UI elements for specific content types are located in `components/cards/` (e.g., `QuestionCard.tsx`, `PassageCard.tsx`).
*   **Styling:** Use Tailwind CSS utility classes. Custom styles are minimal and located in `index.css`.

### State Management
*   **Progress:** User progress is managed via `contexts/ProgressContext.tsx` and persisted to `localStorage` via `hooks/useProgress.ts`.

### Testing
*   **Unit Tests:** Located in `__tests__/`. Use Vitest and React Testing Library.
*   **Strict Mode:** TypeScript strict mode is enabled. Ensure all new code is fully typed.
