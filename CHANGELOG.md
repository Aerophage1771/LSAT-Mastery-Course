# Changelog

## 2026-04-03

- Restored the local React entrypoint and HTML shell so the app mounts correctly again in the normalized `apps/lsat-mastery-course` workspace path.
- Repaired sparse local runtime files that were breaking the module graph, including `components/ErrorBoundary.tsx`, `utils/export.ts`, `utils/lessonQuestionLinkage.ts`, and the missing `module59` lesson files.
- Revalidated the dashboard and `/question-bank` surfaces in a browser after the repair.
