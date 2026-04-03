/**
 * Strips inline diff markers and diff-note blocks from content,
 * producing a clean "Website Original" view.
 */

import type { ContentBlock } from '../types';

/**
 * Removes `{{+...+}}`, `{{-...-}}`, `{{~...~}}`, and `{{!...!}}` markers
 * from a text string.
 *
 * - Additions (`{{+text+}}`): keep the inner text (it's new content worth showing)
 * - Removals (`{{-text-}}`): keep the inner text (it's the original website text)
 * - Changes (`{{~text~}}`): keep the inner text
 * - Notes (`{{!text!}}`): remove entirely (editorial commentary)
 */
function stripMarkersFromText(text: string): string {
  return text
    .replace(/\{\{\+([^]*?)\+\}\}/g, '$1')   // additions: keep inner
    .replace(/\{\{-([^]*?)-\}\}/g, '$1')       // removals: keep inner
    .replace(/\{\{~([^]*?)~\}\}/g, '$1')       // changes: keep inner
    .replace(/\{\{!([^]*?)!\}\}/g, '');         // notes: remove entirely
}

/**
 * Deep-clones a ContentBlock[] array, stripping all diff markers from
 * text fields and removing `diff-note` blocks entirely.
 */
export function stripDiffMarkers(content: ContentBlock[]): ContentBlock[] {
  const result: ContentBlock[] = [];

  for (const block of content) {
    // Skip diff-note blocks entirely
    if ('type' in block && (block as { type: string }).type === 'diff-note') {
      continue;
    }

    // Deep clone the block and strip markers from all string fields
    const cleaned = stripBlockMarkers(block);
    result.push(cleaned);
  }

  return result;
}

/** Recursively strip diff markers from all string values in a block. */
function stripBlockMarkers(block: ContentBlock): ContentBlock {
  if (typeof block === 'string') {
    return stripMarkersFromText(block) as unknown as ContentBlock;
  }

  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(block)) {
    if (typeof value === 'string') {
      out[key] = stripMarkersFromText(value);
    } else if (Array.isArray(value)) {
      out[key] = value.map((item) =>
        typeof item === 'string'
          ? stripMarkersFromText(item)
          : Array.isArray(item)
            ? item.map((cell) => (typeof cell === 'string' ? stripMarkersFromText(cell) : cell))
            : typeof item === 'object' && item !== null
              ? stripBlockMarkers(item as ContentBlock)
              : item,
      );
    } else if (typeof value === 'object' && value !== null) {
      out[key] = stripBlockMarkers(value as ContentBlock);
    } else {
      out[key] = value;
    }
  }
  return out as ContentBlock;
}
