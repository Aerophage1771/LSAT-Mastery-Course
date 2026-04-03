/**
 * Centralized display labels for lesson variant tabs.
 * Keeps label changes in one place instead of editing 250+ lesson files.
 */

export const VARIANT_DISPLAY_LABELS: Record<string, string> = {
  __original: 'Local Upgrade',
  diff: 'Website Update',
  website_original: 'Website Original',
  glance: 'At a Glance',
};

/** All known view keys in display order. */
export const ALL_VIEW_KEYS = ['__original', 'diff', 'website_original', 'glance'] as const;

/**
 * Returns the display label for a variant key.
 * Falls back to the provided `fallback` or the raw key.
 */
export function getVariantLabel(key: string, fallback?: string): string {
  return VARIANT_DISPLAY_LABELS[key] ?? fallback ?? key;
}
