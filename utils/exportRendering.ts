/**
 * DOM-based serialization of the lesson content area to JSX or HTML.
 * Used for "Copy as JSX" and "Copy as HTML" in the lesson export UI.
 * Root element must be marked with data-export-content.
 * Also provides data-to-JSX generation for full course export.
 */

import type { ContentBlock, Lesson, ModuleData } from '../types';

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

// --- Data-to-JSX (for full course export without DOM) ---

/** Escape string for use inside JSX {'...'} so quotes and braces are safe. */
function escapeForJSXLiteral(s: string): string {
  if (!s) return '';
  return s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}');
}

function contentBlockToJSX(block: ContentBlock, indent: number): string {
  const i = '  '.repeat(indent);
  switch (block.type) {
    case 'paragraph':
      return `${i}<p className="mb-4 leading-relaxed text-slate-700 text-base">{'${escapeForJSXLiteral(block.text)}'}</p>`;
    case 'h1':
      return `${i}<h1 className="text-3xl font-extrabold text-slate-900 mb-6">{'${escapeForJSXLiteral(block.text)}'}</h1>`;
    case 'h2':
      return `${i}<h2 className="text-xl font-bold mt-8 mb-4 text-slate-900">{'${escapeForJSXLiteral(block.text)}'}</h2>`;
    case 'h3':
      return `${i}<h3 className="text-lg font-bold mt-6 mb-3 text-slate-800">{'${escapeForJSXLiteral(block.text)}'}</h3>`;
    case 'h4':
      return `${i}<h4 className="text-base font-bold mt-4 mb-2 text-slate-800">{'${escapeForJSXLiteral(block.text)}'}</h4>`;
    case 'blockquote':
      return `${i}<p className="mb-4 leading-relaxed text-slate-700 text-base">{'${escapeForJSXLiteral(block.text)}'}</p>`;
    case 'hr':
      return `${i}<hr className="my-10 border-slate-200" />`;
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      const listClass = block.ordered ? 'ml-6 space-y-2 list-decimal text-slate-700' : 'ml-6 space-y-2 list-disc text-slate-700';
      const items = (block.items || [])
        .map((item) => `  ${i}<li className="mb-2">{'${escapeForJSXLiteral(item)}'}</li>`)
        .join('\n');
      return `${i}<${Tag} className="${listClass}">\n${items}\n${i}</${Tag}>`;
    }
    case 'code':
      return `${i}<pre className="p-4 bg-slate-100 rounded-lg text-sm overflow-x-auto"><code>{'${escapeForJSXLiteral(block.text)}'}</code></pre>`;
    case 'callout':
      return `${i}<div className="rounded-xl border border-slate-200 bg-slate-50 p-5 my-4">\n${i}  <p className="text-base leading-relaxed text-slate-700">{'${escapeForJSXLiteral(block.text)}'}</p>\n${i}</div>`;
    default:
      return `${i}{/* unsupported block: ${(block as ContentBlock).type } */}`;
  }
}

function lessonContentToJSX(content: string | ContentBlock[], indent: number): string {
  const i = '  '.repeat(indent);
  if (typeof content === 'string') {
    return `${i}<p className="mb-4 leading-relaxed text-slate-700">{'${escapeForJSXLiteral(content)}'}</p>`;
  }
  return content.map((b) => contentBlockToJSX(b, indent)).join('\n');
}

function lessonToJSX(lesson: Lesson, indent: number): string {
  const i = '  '.repeat(indent);
  const titleEscaped = escapeForJSXLiteral(lesson.title);
  const body = lessonContentToJSX(lesson.content, indent + 2);
  return `${i}<section key="${lesson.id}" className="mb-10">
${i}  <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">{'${titleEscaped}'}</h2>
${i}  <div className="space-y-4">
${body}
${i}  </div>
${i}</section>`;
}

function moduleToJSX(module: ModuleData, indent: number): string {
  const i = '  '.repeat(indent);
  const titleEscaped = escapeForJSXLiteral(`Module ${module.id}: ${module.title}`);
  const descEscaped = escapeForJSXLiteral(module.description);
  const lessons = module.lessons.map((l) => lessonToJSX(l, indent + 2)).join('\n\n');
  return `${i}<section key="${module.id}" className="mb-12">
${i}  <h2 className="text-3xl font-bold text-slate-900 mb-2">{'${titleEscaped}'}</h2>
${i}  <p className="text-slate-600 mb-8">{'${descEscaped}'}</p>
${lessons}
${i}</section>`;
}

/**
 * Generate a full React component as JSX string that renders a single lesson.
 * Used for "Copy as JSX" in the export modal when scope is current lesson.
 */
export function generateLessonJSX(lesson: Lesson): string {
  const componentName = lessonTitleToComponentName(lesson.title);
  const titleEscaped = escapeForJSXLiteral(lesson.title);
  const body = lessonContentToJSX(lesson.content, 4);
  return `'use client';

import React from 'react';

export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">{'${titleEscaped}'}</h1>
        <div className="space-y-6">
${body}
        </div>
      </div>
    </div>
  );
}
`;
}

/**
 * Generate a full React component as JSX string that renders the entire course.
 * Used for "Copy as JSX" in the export modal when scope is entire course.
 */
export function generateCourseJSX(modules: ModuleData[]): string {
  const modulesJSX = modules.map((m) => moduleToJSX(m, 4)).join('\n\n');
  return `'use client';

import React from 'react';

export default function LSATMasteryCourseJSX() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">LSAT Mastery Course</h1>
        <p className="text-lg text-slate-600 mb-12">Full course content export.</p>

${modulesJSX}
      </div>
    </div>
  );
}
`;
}
