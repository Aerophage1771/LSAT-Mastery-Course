# Canonical Naming Enforcement

**Purpose:** Define the roadmap bet for canonical naming enforcement in this area.  
**Audience:** Maintainers, content editors, and future agents planning course improvements.  
**Status:** active
**Source of truth:** yes  
**Last reviewed:** 2026-03-20  
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## Brief Problem Statement

- Naming conventions across the course catalog, lesson data, and module names have drifted.
- There are mixed usages of prefixes like "RC: " for Reading Comprehension modules, variations in punctuation for Principle modules ("Principle - Apply" vs "Principle-Strengthen"), and mixed casing or phrasing for "Step-by-Step" lessons.
- This inconsistency makes the curriculum harder to read and parse programmatically, and violates the established course naming conventions.

## Target Outcome

- Enforce the rules set in `docs/product/course-naming-conventions.md`.
- Normalize RC skill module titles by dropping the `RC: ` prefix.
- Normalize RC practice passages by dropping the `RC: ` prefix.
- Standardize slashed names like "Paradox / Explain" to "Paradox/Explain".
- Normalize Principle names to use the "Principle: [Type]" format (e.g. "Principle: Apply").
- Standardize the second lesson spine slot to "Step-by-Step: [Type]" instead of mixed variants like "Step-by-Step Guide: [Type]".
- Normalize "3rd-Party Viewpoint" to "Third-Party Viewpoint".

## Likely Affected Surfaces

- `data/courseCatalog.json`
- `data/websiteLessonCatalog.ts`
- Lesson components inside `modules/module*/`
- Module metadata files `modules/Module*.tsx`
- Any cross-references and drill lists

## Dependencies

- Validation scripts must pass after naming changes to ensure no references are broken.
- The `course-naming-conventions.md` document acts as the source of truth.

## Open Implementation Risks

- Renaming keys or IDs incorrectly could break UI routing or downstream validation scripts.
- Find-and-replace operations must be precise to avoid altering unrelated text.
