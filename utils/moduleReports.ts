/**
 * Dynamic loader for module improvement reports.
 * Uses Vite's ?raw import to load markdown files on demand.
 */

const reportCache = new Map<number, string | null>();

/**
 * Loads the improvement report for a given module ID.
 * Returns the raw markdown string, or null if no report exists.
 * Results are cached after first load.
 */
export async function loadModuleReport(moduleId: number): Promise<string | null> {
  if (reportCache.has(moduleId)) return reportCache.get(moduleId)!;

  try {
    // Vite dynamic import with ?raw suffix — returns the file as a string.
    // The glob pattern tells Vite to include these files in the build.
    const modules = import.meta.glob(
      '../docs/operations/audits/module*-diff-improvement-report.md',
      { query: '?raw', import: 'default' },
    );

    const key = `../docs/operations/audits/module${moduleId}-diff-improvement-report.md`;
    const loader = modules[key];

    if (!loader) {
      reportCache.set(moduleId, null);
      return null;
    }

    const content = (await loader()) as string;
    reportCache.set(moduleId, content);
    return content;
  } catch {
    reportCache.set(moduleId, null);
    return null;
  }
}
