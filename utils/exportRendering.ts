/**
 * DOM-based serialization of the lesson content area to JSX or HTML.
 * Used for "Copy as JSX" and "Copy as HTML" in the lesson export UI.
 * Root element must be marked with data-export-content.
 */

const VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

function escapeAttr(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Escape text for JSX: { and } must be wrapped so they're literal; apostrophe for JSX safety. */
function escapeJSXText(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, "{'{{'}}")
    .replace(/\}/g, "{'}}'}");
}

/** Escape text for HTML (entity-encode). */
function escapeHTMLText(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function shouldSkipElement(el: Element): boolean {
  const tag = el.tagName.toLowerCase();
  if (tag === 'script' || tag === 'iframe') return true;
  if (el.hasAttribute('data-export-skip')) return true;
  return false;
}

/**
 * Derive a PascalCase component name from a lesson title for use in "Copy as JSX".
 * e.g. "Premises vs. Conclusions" -> "RenderedPremisesVsConclusions", "Format 1: Minimal" -> "RenderedFormat1Minimal".
 */
export function lessonTitleToComponentName(title: string): string {
  const slug = title
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  return slug ? `Rendered${slug}` : 'RenderedLesson';
}

export interface SerializeToJSXOptions {
  pretty?: boolean;
  /** When set, wrap the JSX tree in `export default function Name() { return ( ... ); }`. */
  wrapAsComponent?: string;
}

/**
 * Serialize a DOM subtree to a JSX string (tags + className from class).
 * Returns '' if root is null. Skips script and iframe. Pretty-printed by default.
 * When wrapAsComponent is set, output is a full default-exported function component.
 */
export function serializeToJSX(
  root: HTMLElement | null,
  options?: SerializeToJSXOptions
): string {
  if (!root) return '';
  const pretty = options?.pretty !== false;
  const wrapAsComponent = options?.wrapAsComponent;
  const baseIndent = wrapAsComponent ? 2 : 0;
  const indent = (n: number) => (pretty ? '  '.repeat(n + baseIndent) : '');

  function visit(node: Node, depth: number): string {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      if (shouldSkipElement(el)) return '';
      const tag = el.tagName.toLowerCase();
      const attrs: string[] = [];
      const classStr = el.getAttribute('class') ?? (typeof (el as HTMLElement).className === 'string' ? (el as HTMLElement).className : '');
      if (classStr && classStr.trim()) attrs.push(`className="${escapeAttr(classStr.trim())}"`);
      const id = el.id;
      if (id) attrs.push(`id="${escapeAttr(id)}"`);
      if (tag === 'svg') {
        let w = el.getAttribute('width');
        let h = el.getAttribute('height');
        if (!w || !h) {
          const computed = window.getComputedStyle(el);
          w = w || computed.width || '';
          h = h || computed.height || '';
        }
        const vb = el.getAttribute('viewBox');
        if (w) attrs.push(`width="${escapeAttr(w)}"`);
        if (h) attrs.push(`height="${escapeAttr(h)}"`);
        if (vb) attrs.push(`viewBox="${escapeAttr(vb)}"`);
      }

      let childStr = '';
      for (let i = 0; i < el.childNodes.length; i++) {
        const child = el.childNodes[i];
        if (child.nodeType === Node.TEXT_NODE) {
          const text = (child as Text).textContent || '';
          childStr += escapeJSXText(text);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          childStr += (pretty && childStr ? '\n' + indent(depth + 1) : '') + visit(child, depth + 1);
        }
      }
      if (pretty && childStr) childStr = '\n' + indent(depth + 1) + childStr + '\n' + indent(depth);

      const open = `<${tag}${attrs.length ? ' ' + attrs.join(' ') : ''}>`;
      if (VOID_TAGS.has(tag)) return `<${tag}${attrs.length ? ' ' + attrs.join(' ') : ''} />`;
      return open + childStr + `</${tag}>`;
    }
    if (node.nodeType === Node.TEXT_NODE) return escapeJSXText((node as Text).textContent || '');
    return '';
  }

  const inner = visit(root, 0);
  if (wrapAsComponent) {
    return `export default function ${wrapAsComponent}() {\n  return (\n${inner}\n  );\n}\n`;
  }
  return inner;
}

export interface SerializeToHTMLOptions {
  /** Inline computed styles on each element (default true) for portability. */
  inlineStyles?: boolean;
}

/**
 * Build a style string from computed styles (exclude empty/none).
 */
function getInlineStyleString(el: Element): string {
  const computed = window.getComputedStyle(el);
  const parts: string[] = [];
  const len = (computed as unknown as { length: number }).length ?? 0;
  for (let i = 0; i < len; i++) {
    const key = computed[i];
    const val = computed.getPropertyValue(key);
    if (val && val !== 'none' && val !== 'normal') parts.push(`${key}: ${val}`);
  }
  return parts.join('; ');
}

/**
 * Serialize a DOM subtree to self-contained HTML with inline computed styles.
 * Returns '' if root is null. Skips script and iframe.
 */
export function serializeToHTML(
  root: HTMLElement | null,
  options?: SerializeToHTMLOptions
): string {
  if (!root) return '';
  const inlineStyles = options?.inlineStyles !== false;

  function visit(node: Node): string {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      if (shouldSkipElement(el)) return '';
      const tag = el.tagName.toLowerCase();
      const attrs: string[] = [];
      const classStr = el.getAttribute('class');
      if (classStr) attrs.push(`class="${escapeAttr(classStr)}"`);
      const id = el.id;
      if (id) attrs.push(`id="${escapeAttr(id)}"`);
      if (tag === 'svg') {
        let w = el.getAttribute('width');
        let h = el.getAttribute('height');
        if (!w || !h) {
          const computed = window.getComputedStyle(el);
          w = w || computed.width || '';
          h = h || computed.height || '';
        }
        const vb = el.getAttribute('viewBox');
        if (w) attrs.push(`width="${escapeAttr(w)}"`);
        if (h) attrs.push(`height="${escapeAttr(h)}"`);
        if (vb) attrs.push(`viewBox="${escapeAttr(vb)}"`);
      }
      if (inlineStyles) {
        const style = getInlineStyleString(el);
        if (style) attrs.push(`style="${escapeAttr(style)}"`);
      }

      let childStr = '';
      for (let i = 0; i < el.childNodes.length; i++) {
        const child = el.childNodes[i];
        if (child.nodeType === Node.TEXT_NODE) {
          childStr += escapeHTMLText((child as Text).textContent || '');
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          childStr += visit(child);
        }
      }

      const open = `<${tag}${attrs.length ? ' ' + attrs.join(' ') : ''}>`;
      if (VOID_TAGS.has(tag)) return `<${tag}${attrs.length ? ' ' + attrs.join(' ') : ''} />`;
      return open + childStr + `</${tag}>`;
    }
    if (node.nodeType === Node.TEXT_NODE) return escapeHTMLText((node as Text).textContent || '');
    return '';
  }

  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${visit(root)}</body></html>`;
}
