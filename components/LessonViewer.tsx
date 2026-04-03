import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { ContentBlock, Lesson, LessonAlternate, LessonLinkageMeta } from '../types';
import { Lightbulb, Info, CheckCircle2, XCircle, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { ExportControls } from './ExportControls';
import {
  generateLessonText,
  generateLessonRTF,
  generateLessonJSON,
  generateLessonCSV,
  generateLessonPDF,
} from '../utils/export';
import { getVariantLabel } from '../utils/variantLabels';
import { stripDiffMarkers } from '../utils/stripDiffMarkers';
import { useViewSettings } from '../contexts/ViewSettingsContext';
import { QuestionCard } from './cards/QuestionCard';
import { PassageCard } from './cards/PassageCard';
import { QuestionPassageCard } from './cards/QuestionPassageCard';

interface LessonViewerProps {
  title: string;
  content: string | ContentBlock[];
  variant?: 'default' | 'modal';
  questionStatus?: 'real' | 'illustrative' | 'both' | null;
  linkageMeta?: LessonLinkageMeta;
  lessonId?: string;
  alternates?: Record<string, LessonAlternate>;
}

const VARIANT_STORAGE_KEY = 'lsat-variant-preferences';

function loadVariantPreference(lessonId: string): string {
  try {
    const stored = localStorage.getItem(VARIANT_STORAGE_KEY);
    if (stored) {
      const prefs = JSON.parse(stored) as Record<string, string>;
      return prefs[lessonId] || '__original';
    }
  } catch { /* ignore */ }
  return '__original';
}

function saveVariantPreference(lessonId: string, variantKey: string) {
  try {
    const stored = localStorage.getItem(VARIANT_STORAGE_KEY);
    const prefs = stored ? JSON.parse(stored) as Record<string, string> : {};
    prefs[lessonId] = variantKey;
    localStorage.setItem(VARIANT_STORAGE_KEY, JSON.stringify(prefs));
  } catch { /* ignore */ }
}

const sanitize = (html: string) => DOMPurify.sanitize(html);

let _diffCounter = 0;
const resetDiffCounter = () => { _diffCounter = 0; };

const _parseInlineStyles = (text: string, diffMode = false) => {
  if (!text) return '';
  let formatted = text;

  // Diff markers — must run before bold/italic to avoid collisions
  if (diffMode) {
    const btn = (id: string) =>
      `<button class="diff-btn diff-accept" data-diff-id="${id}">✓</button>` +
      `<button class="diff-btn diff-reject" data-diff-id="${id}">✕</button>`;

    formatted = formatted.replace(/\{\{\+(.*?)\+\}\}/g, (_m, p1) => {
      const id = `d-${_diffCounter++}`;
      return `<span class="diff-marker" data-diff-id="${id}" data-diff-type="add"><mark class="bg-emerald-100 text-emerald-800 px-0.5 rounded-sm font-medium">${p1}</mark>${btn(id)}</span>`;
    });
    formatted = formatted.replace(/\{\{-(.*?)-\}\}/g, (_m, p1) => {
      const id = `d-${_diffCounter++}`;
      return `<span class="diff-marker" data-diff-id="${id}" data-diff-type="remove"><del class="bg-red-100 text-red-600 line-through px-0.5 rounded-sm">${p1}</del>${btn(id)}</span>`;
    });
    formatted = formatted.replace(/\{\{~(.*?)~\}\}/g, (_m, p1) => {
      const id = `d-${_diffCounter++}`;
      return `<span class="diff-marker" data-diff-id="${id}" data-diff-type="change"><mark class="bg-amber-100 text-amber-800 px-0.5 rounded-sm">${p1}</mark>${btn(id)}</span>`;
    });
    formatted = formatted.replace(/\{\{!(.*?)!\}\}/g, (_m, p1) => {
      const id = `d-${_diffCounter++}`;
      return `<span class="diff-marker" data-diff-id="${id}" data-diff-type="note"><span class="inline-flex items-center bg-blue-100 text-blue-700 text-[11px] font-medium px-1.5 py-0.5 rounded-md ml-0.5">${p1}</span>${btn(id)}</span>`;
    });
  } else {
    formatted = formatted.replace(
      /\{\{\+(.*?)\+\}\}/g,
      '<mark class="bg-emerald-100 text-emerald-800 px-0.5 rounded-sm font-medium">$1</mark>',
    );
    formatted = formatted.replace(
      /\{\{-(.*?)-\}\}/g,
      '<del class="bg-red-100 text-red-600 line-through px-0.5 rounded-sm">$1</del>',
    );
    formatted = formatted.replace(
      /\{\{~(.*?)~\}\}/g,
      '<mark class="bg-amber-100 text-amber-800 px-0.5 rounded-sm">$1</mark>',
    );
    formatted = formatted.replace(
      /\{\{!(.*?)!\}\}/g,
      '<span class="inline-flex items-center bg-blue-100 text-blue-700 text-[11px] font-medium px-1.5 py-0.5 rounded-md ml-0.5">$1</span>',
    );
  }

  // Standard inline formatting
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
  formatted = formatted.replace(/\*(.*?)\*\*/g, '<em class="text-slate-800">$1</em>');
  formatted = formatted.replace(
    /`([^`]+)`/g,
    '<code class="bg-slate-100 text-violet-600 font-mono text-[0.875em] px-1.5 py-0.5 rounded-md">$1</code>',
  );
  return sanitize(formatted);
};

// Default wrapper (non-diff mode) — used by renderMarkdown and OptionsBlock
const parseInlineStyles = (text: string) => _parseInlineStyles(text);

const CodeBlock: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code block', err);
    }
  };

  return (
    <div className="relative group my-6 overflow-hidden rounded-lg border border-slate-800 bg-[#0f1117]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-[#161922]">
        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Prompt</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 text-slate-400 hover:text-white rounded text-xs font-medium transition-colors"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-[13px] text-slate-300 whitespace-pre leading-relaxed">{text}</pre>
      </div>
    </div>
  );
};

const OptionsBlock: React.FC<{ items: string[] }> = ({ items }) => {
  const [revealed, setRevealed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (!revealed) {
      setSelectedIndex(index);
      setRevealed(true);
    }
  };

  return (
    <div className="my-6 space-y-2">
      {items.map((item, i) => {
        const isCorrect = item.includes('(Correct)');
        const statsMatch = item.match(/\[(\d+(\.\d+)?%)\]/);
        const stats = statsMatch ? statsMatch[1] : null;
        const cleanText = item
          .replace(/\[\d+(\.\d+)?%\]/g, '')
          .replace('(Correct)', '')
          .trim();
        const isSelected = selectedIndex === i;

        let cls = 'flex items-start gap-3 p-3.5 rounded-lg border transition-all duration-150 ';
        if (revealed) {
          if (isCorrect) cls += 'border-emerald-300 bg-emerald-50';
          else if (isSelected) cls += 'border-red-200 bg-red-50/50';
          else cls += 'border-transparent bg-slate-50/50 opacity-40';
        } else {
          cls += 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 cursor-pointer active:scale-[0.995]';
        }

        return (
          <div
            key={i}
            className={cls}
            onClick={() => handleSelect(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleSelect(i);
            }}
          >
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold border transition-colors ${
                revealed && isCorrect
                  ? 'bg-emerald-500 border-emerald-500 text-white'
                  : revealed && isSelected && !isCorrect
                    ? 'bg-red-400 border-red-400 text-white'
                    : 'bg-white border-slate-300 text-slate-500'
              }`}
            >
              {revealed && isCorrect ? (
                <CheckCircle2 size={13} />
              ) : revealed && isSelected ? (
                <XCircle size={13} />
              ) : (
                String.fromCharCode(65 + i)
              )}
            </div>
            <div className="flex-1 flex justify-between items-start gap-3">
              <span
                className={`text-[15px] leading-relaxed ${revealed && isCorrect ? 'text-emerald-900 font-medium' : revealed && isSelected ? 'text-red-800' : 'text-slate-600'}`}
                dangerouslySetInnerHTML={{ __html: parseInlineStyles(cleanText) }}
              />
              {revealed && stats && (
                <span className="text-[11px] font-mono text-slate-400 flex-shrink-0 pt-0.5">{stats}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const LessonViewer: React.FC<LessonViewerProps> = ({
  title,
  content,
  variant = 'default',
  questionStatus,
  linkageMeta,
  lessonId,
  alternates,
}) => {
  const { isViewEnabled } = useViewSettings();

  // Build effective alternates: inject synthetic "Website Original" from stripped diff content
  const effectiveAlternates = useMemo(() => {
    if (!alternates) return alternates;
    if (!alternates.diff?.content) return alternates;
    const diffContent = alternates.diff.content;
    const stripped = Array.isArray(diffContent) ? stripDiffMarkers(diffContent) : diffContent;
    return {
      website_original: { label: 'Website Original', content: stripped },
      ...alternates,
    };
  }, [alternates]);

  const hasAlternates = effectiveAlternates && Object.keys(effectiveAlternates).length > 0;
  const [activeVariant, setActiveVariant] = useState<string>(() =>
    lessonId && hasAlternates ? loadVariantPreference(lessonId) : '__original'
  );

  useEffect(() => {
    if (lessonId && hasAlternates) {
      setActiveVariant(loadVariantPreference(lessonId));
    } else {
      setActiveVariant('__original');
    }
  }, [lessonId, hasAlternates]);

  const handleVariantChange = useCallback((key: string) => {
    setActiveVariant(key);
    if (lessonId) saveVariantPreference(lessonId, key);
  }, [lessonId]);

  const displayContent = hasAlternates && activeVariant !== '__original' && effectiveAlternates![activeVariant]
    ? effectiveAlternates![activeVariant].content
    : content;

  const isDiffMode = activeVariant === 'diff';
  const [diffDecisions, setDiffDecisions] = useState<Record<string, 'accept' | 'reject'>>({});
  const [mergeToast, setMergeToast] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Reset decisions when lesson changes
  useEffect(() => { setDiffDecisions({}); }, [lessonId]);

  // Apply resolved state to DOM markers
  useEffect(() => {
    if (!contentRef.current || !isDiffMode) return;
    contentRef.current.querySelectorAll<HTMLElement>('.diff-marker').forEach((el) => {
      const id = el.dataset.diffId;
      if (id && diffDecisions[id]) {
        el.dataset.resolved = diffDecisions[id];
      } else if (id) {
        delete el.dataset.resolved;
      }
    });
  }, [diffDecisions, isDiffMode, displayContent]);

  // Event delegation for diff buttons
  const handleDiffClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains('diff-btn')) return;
    const id = target.dataset.diffId;
    if (!id) return;
    const action = target.classList.contains('diff-accept') ? 'accept' : 'reject';
    setDiffDecisions((prev) => {
      const next = { ...prev };
      if (next[id] === action) { delete next[id]; } // toggle off
      else { next[id] = action as 'accept' | 'reject'; }
      return next;
    });
  }, []);

  // Merge: resolve diff markers in content and copy to clipboard
  const handleMerge = useCallback(async () => {
    if (typeof displayContent === 'string') return;
    const resolveText = (text: string): string => {
      let resolved = text;
      // Additions: accept = keep text, reject = remove
      resolved = resolved.replace(/\{\{\+(.*?)\+\}\}/g, (_m, p1, offset) => {
        const id = findDiffId(text, offset, 'add');
        if (diffDecisions[id] === 'accept') return p1;
        if (diffDecisions[id] === 'reject') return '';
        return _m; // unresolved — keep marker
      });
      // Removals: accept = remove text, reject = keep text
      resolved = resolved.replace(/\{\{-(.*?)-\}\}/g, (_m, p1, offset) => {
        const id = findDiffId(text, offset, 'remove');
        if (diffDecisions[id] === 'accept') return '';
        if (diffDecisions[id] === 'reject') return p1;
        return _m;
      });
      // Changes: accept = keep text, reject = remove
      resolved = resolved.replace(/\{\{~(.*?)~\}\}/g, (_m, p1, offset) => {
        const id = findDiffId(text, offset, 'change');
        if (diffDecisions[id] === 'accept') return p1;
        if (diffDecisions[id] === 'reject') return '';
        return _m;
      });
      // Notes: always remove if decided
      resolved = resolved.replace(/\{\{!(.*?)!\}\}/g, (_m, _p1, offset) => {
        const id = findDiffId(text, offset, 'note');
        if (diffDecisions[id]) return '';
        return _m;
      });
      return resolved.replace(/  +/g, ' ').trim();
    };

    const resolvedBlocks = (displayContent as ContentBlock[])
      .filter((b) => {
        if (b.type !== 'diff-note') return true;
        // Remove diff-note blocks if any decision was made on them
        const noteId = `dn-${(displayContent as ContentBlock[]).indexOf(b)}`;
        return !diffDecisions[noteId];
      })
      .map((b) => {
        const clone = { ...b } as Record<string, unknown>;
        for (const key of Object.keys(clone)) {
          if (typeof clone[key] === 'string') {
            clone[key] = resolveText(clone[key] as string);
          } else if (Array.isArray(clone[key])) {
            clone[key] = (clone[key] as unknown[]).map((item) =>
              typeof item === 'string' ? resolveText(item) : item,
            );
          }
        }
        return clone;
      });

    try {
      await navigator.clipboard.writeText(JSON.stringify(resolvedBlocks, null, 2));
      setMergeToast(true);
      setTimeout(() => setMergeToast(false), 2500);
    } catch { /* clipboard denied */ }
  }, [displayContent, diffDecisions]);

  // Map diff IDs: replays the counter logic to match IDs assigned during render
  const diffIdMap = useMemo(() => {
    if (!isDiffMode || typeof displayContent === 'string') return new Map<string, string>();
    const map = new Map<string, string>();
    let counter = 0;
    const patterns: Array<[RegExp, string]> = [
      [/\{\{\+(.*?)\+\}\}/g, 'add'],
      [/\{\{-(.*?)-\}\}/g, 'remove'],
      [/\{\{~(.*?)~\}\}/g, 'change'],
      [/\{\{!(.*?)!\}\}/g, 'note'],
    ];
    const scanText = (text: string) => {
      // Replay in the same order as parseInlineStyles
      for (const [pat, type] of patterns) {
        pat.lastIndex = 0;
        let match;
        while ((match = pat.exec(text)) !== null) {
          map.set(`${type}-${match.index}-${text.length}`, `d-${counter++}`);
        }
      }
    };
    for (const block of displayContent as ContentBlock[]) {
      const b = block as Record<string, unknown>;
      for (const val of Object.values(b)) {
        if (typeof val === 'string') scanText(val);
        else if (Array.isArray(val)) val.forEach((item) => { if (typeof item === 'string') scanText(item); });
      }
    }
    return map;
  }, [isDiffMode, displayContent]);

  const findDiffId = useCallback((text: string, offset: number, type: string): string => {
    return diffIdMap.get(`${type}-${offset}-${text.length}`) ?? '';
  }, [diffIdMap]);

  const currentLesson: Lesson = { id: 'current', title, content: displayContent };

  const { websiteViewerMode, trueStudentView } = useViewSettings();
  const showEditorChrome = variant !== 'modal' && !websiteViewerMode && !trueStudentView;

  const containerClasses =
    variant === 'modal'
      ? 'bg-white p-6 md:p-8 rounded-xl'
      : websiteViewerMode
        ? 'website-viewer-mode mx-auto min-h-[calc(100vh-4rem)]'
        : 'max-w-3xl mx-auto bg-white p-8 lg:px-14 lg:py-12 rounded-2xl border-[1.5px] border-slate-300 min-h-[calc(100vh-4rem)]';

  // In website viewer mode, strip diff markers so content looks like the live site
  const renderedContent = websiteViewerMode && Array.isArray(displayContent)
    ? stripDiffMarkers(displayContent as ContentBlock[])
    : displayContent;

  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      if (line.startsWith('#### '))
        return (
          <h4
            key={index}
            className="text-sm font-semibold mt-8 mb-3 text-slate-500 uppercase tracking-wider"
            dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('#### ', '')) }}
          />
        );
      if (line.startsWith('### '))
        return (
          <h3
            key={index}
            className="text-lg font-semibold mt-10 mb-3 text-slate-900 tracking-tight"
            dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('### ', '')) }}
          />
        );
      if (line.startsWith('## '))
        return (
          <h2
            key={index}
            className="text-xl font-semibold mt-14 mb-4 text-slate-900 tracking-tight"
            dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('## ', '')) }}
          />
        );
      if (line.startsWith('# '))
        return (
          <h1
            key={index}
            className="text-2xl font-bold mt-6 mb-6 text-slate-900 tracking-tight"
            dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('# ', '')) }}
          />
        );
      if (line.startsWith('---')) return <div key={index} className="my-10 border-t border-slate-100" />;
      if (line.startsWith('> '))
        return (
          <div
            key={index}
            className="my-5 px-5 py-4 bg-slate-50 rounded-lg border-[1.5px] border-slate-300 text-[15px] text-slate-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('> ', '')) }}
          />
        );
      if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
        const itemContent = trimmedLine.replace(/^[*-]\s/, '');
        return (
          <li
            key={index}
            className="ml-5 list-disc mb-1.5 pl-1 marker:text-slate-300 text-[15px] text-slate-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: parseInlineStyles(itemContent) }}
          />
        );
      }
      if (line.startsWith('```')) return null;
      if (trimmedLine === '') return <div key={index} className="h-3"></div>;
      return (
        <p
          key={index}
          className="mb-4 leading-[1.75] text-[15px] text-slate-600"
          dangerouslySetInnerHTML={{ __html: parseInlineStyles(line) }}
        />
      );
    });
  };

  const FullAccordionBlock: React.FC<{ title: string; content: string | ContentBlock[] }> = ({
    title: accTitle,
    content: accContent,
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="my-5 border-[1.5px] border-slate-300 rounded-lg overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors text-left"
        >
          <span className="font-medium text-sm text-slate-700">{accTitle}</span>
          {isOpen ? (
            <ChevronUp size={16} className="text-slate-400" />
          ) : (
            <ChevronDown size={16} className="text-slate-400" />
          )}
        </button>
        {isOpen && (
          <div className="px-5 py-4 bg-white border-t border-slate-100">
            {typeof accContent === 'string' ? renderMarkdown(accContent) : renderBlocks(accContent)}
          </div>
        )}
      </div>
    );
  };

  const renderBlocks = (blocks: ContentBlock[]) => {
    resetDiffCounter();
    // Shadow the global wrapper with diff-aware version inside renderBlocks
    const parseInlineStyles = (text: string) => _parseInlineStyles(text, isDiffMode);
    return blocks.map((block, index) => {
      switch (block.type) {
        case 'h1':
          return (
            <h1
              key={index}
              className="text-2xl font-bold mt-6 mb-6 text-slate-900 tracking-tight"
              dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }}
            />
          );
        case 'h2':
          return (
            <h2
              key={index}
              className="text-xl font-semibold mt-14 mb-4 text-slate-900 tracking-tight"
              dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }}
            />
          );
        case 'h3':
          return (
            <h3
              key={index}
              className="text-lg font-semibold mt-10 mb-3 text-slate-900 tracking-tight"
              dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }}
            />
          );
        case 'h4':
          return (
            <h4
              key={index}
              className="text-sm font-semibold mt-8 mb-3 text-slate-500 uppercase tracking-wider"
              dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }}
            />
          );
        case 'paragraph':
          return (
            <p
              key={index}
              className="mb-4 leading-[1.75] text-[15px] text-slate-600"
              dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }}
            />
          );
        case 'blockquote':
          return (
            <div
              key={index}
              className="my-5 px-5 py-4 bg-slate-50 rounded-lg border-[1.5px] border-slate-300 text-[15px] text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }}
            />
          );
        case 'list': {
          const ListTag = block.ordered ? 'ol' : 'ul';
          return (
            <ListTag
              key={index}
              className={`mb-5 ml-5 pl-1 marker:text-slate-300 text-[15px] text-slate-600 space-y-1.5 ${block.ordered ? 'list-decimal' : 'list-disc'}`}
            >
              {block.items?.map((item, i) => (
                <li key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInlineStyles(item) }} />
              ))}
            </ListTag>
          );
        }
        case 'hr':
          return <div key={index} className="my-10 border-t border-slate-100" />;
        case 'code':
          return <CodeBlock key={index} text={block.text} />;
        case 'accordion':
          return <FullAccordionBlock key={index} title={block.title} content={block.content} />;
        case 'table':
          return (
            <div key={index} className="my-6 overflow-x-auto rounded-lg border-[1.5px] border-slate-300">
              <table className="w-full text-left text-[13px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    {block.headers.map((h, i) => (
                      <th
                        key={i}
                        className="px-4 py-2.5 font-semibold text-slate-500 uppercase tracking-wider text-[11px]"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  {block.rows.map((row, r) => (
                    <tr
                      key={r}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors"
                    >
                      {row.map((cell, c) => (
                        <td
                          key={c}
                          className="px-4 py-2.5 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: parseInlineStyles(cell) }}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        case 'callout': {
          const isSummary = block.variant === 'summary';
          const isTip = block.variant === 'tip';

          if (isSummary) {
            return (
              <div
                key={index}
                className="my-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5 shadow-sm"
              >
                {block.title && (
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-md bg-indigo-500/20">
                      <Lightbulb size={14} className="text-indigo-300" />
                    </div>
                    <span className="font-semibold text-sm text-white tracking-tight">{block.title}</span>
                  </div>
                )}
                <div className="text-[14px] text-slate-300 leading-relaxed space-y-1.5">
                  {block.text.split('\n').map((line, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: parseInlineStyles(line).replace(/text-slate-900/g, 'text-white').replace(/text-slate-800/g, 'text-slate-200') }} />
                  ))}
                </div>
              </div>
            );
          }

          if (isTip) {
            return (
              <div
                key={index}
                className="my-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4"
              >
                {block.title && (
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb size={15} className="text-amber-600" />
                    <span className="font-semibold text-sm text-amber-900">{block.title}</span>
                  </div>
                )}
                <div className="text-[14px] text-amber-800 leading-relaxed space-y-1.5">
                  {block.text.split('\n').map((line, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: parseInlineStyles(line) }} />
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="my-6 rounded-xl border-[1.5px] border-slate-300 bg-white px-5 py-4 shadow-[0_4px_16px_rgba(15,23,42,0.06)]"
            >
              {block.title && (
                <div className="flex items-center gap-2 mb-2">
                  <Info size={15} className="text-slate-400" />
                  <span className="font-semibold text-sm text-slate-700">{block.title}</span>
                </div>
              )}
              <div className="text-[14px] text-slate-600 leading-relaxed space-y-1.5">
                {block.text.split('\n').map((line, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: parseInlineStyles(line) }} />
                ))}
              </div>
            </div>
          );
        }
        case 'options':
          return <OptionsBlock key={index} items={block.items} />;
        case 'process':
          return (
            <div key={index} className="my-8 p-5 rounded-lg border-[1.5px] border-slate-300 bg-white">
              {block.title && (
                <div className="font-semibold text-[11px] text-slate-400 uppercase tracking-wider mb-5 pb-2 border-b border-slate-100">
                  {block.title}
                </div>
              )}
              <div className="relative">
                <div className="absolute left-[11px] top-3 bottom-3 w-px bg-slate-200" aria-hidden="true"></div>
                <div className="space-y-5">
                  {block.steps.map((step, i) => (
                    <div key={i} className="relative flex items-start group">
                      <div className="relative z-10 flex-shrink-0 w-[22px] h-[22px] flex items-center justify-center rounded-full bg-slate-900 text-white font-semibold text-[10px] ring-2 ring-white">
                        {i + 1}
                      </div>
                      <div className="ml-4 flex-1 pt-0.5">
                        <div
                          className="text-[15px] text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors"
                          dangerouslySetInnerHTML={{ __html: parseInlineStyles(step) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        case 'breakdown': {
          const labelTitle = block.labels?.title || 'Text';
          const labelText = block.labels?.text || 'Analysis';
          const colLeft = block.colWidth === 'narrow' ? 'md:w-1/4' : 'md:w-2/5';
          const colRight = block.colWidth === 'narrow' ? 'md:w-3/4' : 'md:w-3/5';

          return (
            <div key={index} className="my-6 space-y-3">
              {block.items.map((item, i) => {
                let badgeStyles = 'bg-slate-100 text-slate-500';
                let borderStyles = 'border-slate-200 hover:border-slate-300';
                if (item.badgeColor === 'green') {
                  badgeStyles = 'bg-emerald-50 text-emerald-700';
                  borderStyles = 'border-emerald-200/60 bg-emerald-50/20';
                } else if (item.badgeColor === 'red') {
                  badgeStyles = 'bg-red-50 text-red-600';
                  borderStyles = 'border-red-200/60 bg-red-50/20';
                } else if (item.badgeColor === 'indigo') {
                  badgeStyles = 'bg-indigo-50 text-indigo-600';
                  borderStyles = 'border-indigo-200/60 bg-indigo-50/20';
                } else if (item.badgeColor === 'blue') {
                  badgeStyles = 'bg-blue-50 text-blue-600';
                  borderStyles = 'border-blue-200/60 bg-blue-50/20';
                }
                return (
                  <div
                    key={i}
                    className={`flex flex-col md:flex-row gap-3 md:gap-6 p-4 rounded-lg border transition-all ${borderStyles}`}
                  >
                    <div className={`${colLeft} flex flex-col items-start`}>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        {labelTitle}
                      </div>
                      <div
                        className="text-slate-900 font-medium text-[15px] leading-snug mb-1.5"
                        dangerouslySetInnerHTML={{ __html: parseInlineStyles(item.title) }}
                      />
                      {item.badge && (
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${badgeStyles}`}
                        >
                          {item.badgeColor === 'green' && <CheckCircle2 size={10} />}
                          {item.badgeColor === 'red' && <XCircle size={10} />}
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="hidden md:block w-px bg-slate-200/60 self-stretch"></div>
                    <div className={colRight}>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        {labelText}
                      </div>
                      <div className="text-[14px] text-slate-500 leading-relaxed space-y-1.5">
                        {item.text.split('\n').map((line, li) => (
                          <p key={li} dangerouslySetInnerHTML={{ __html: parseInlineStyles(line) }} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }
        case 'question-card':
          return (
            <QuestionCard
              key={index}
              id={block.id}
              questionType={block.questionType}
              stimulus={block.stimulus}
              question={block.question}
              options={block.options}
              difficulty={block.difficulty}
            />
          );
        case 'passage-card':
          return (
            <PassageCard
              key={index}
              id={block.id}
              title={block.title}
              genre={block.genre}
              passage={block.passage}
              paragraphCount={block.paragraphCount}
              wordCount={block.wordCount}
            />
          );
        case 'question-passage-card':
          return (
            <QuestionPassageCard
              key={index}
              id={block.id}
              questionType={block.questionType}
              passageTitle={block.passageTitle}
              passage={block.passage}
              question={block.question}
              options={block.options}
              difficulty={block.difficulty}
            />
          );
        case 'diff-note': {
          const variantStyles: Record<string, string> = {
            add: 'border-emerald-300 bg-emerald-50 text-emerald-800',
            remove: 'border-red-300 bg-red-50 text-red-800',
            change: 'border-amber-300 bg-amber-50 text-amber-800',
            comment: 'border-blue-300 bg-blue-50 text-blue-800',
          };
          const variantLabels: Record<string, string> = {
            add: '+ ADD',
            remove: '− REMOVE',
            change: '~ CHANGE',
            comment: '✎ NOTE',
          };
          const v = block.variant || 'comment';
          const noteId = `dn-${index}`;
          const noteDecision = diffDecisions[noteId];
          return (
            <div
              key={index}
              className={`my-4 rounded-lg border-l-4 px-4 py-3 text-[13px] leading-relaxed ${variantStyles[v]} ${noteDecision ? 'diff-note-resolved' : ''}`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-70 mr-2">
                {variantLabels[v]}
              </span>
              <span dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />
              {isDiffMode && !noteDecision && (
                <span className="ml-2 inline-flex gap-1">
                  <button
                    onClick={() => setDiffDecisions((p) => ({ ...p, [noteId]: 'accept' }))}
                    className="diff-btn diff-accept"
                    title="Accept"
                  >✓</button>
                  <button
                    onClick={() => setDiffDecisions((p) => ({ ...p, [noteId]: 'reject' }))}
                    className="diff-btn diff-reject"
                    title="Reject"
                  >✕</button>
                </span>
              )}
              {noteDecision && (
                <span className={`ml-2 text-[10px] font-bold ${noteDecision === 'accept' ? 'text-emerald-600' : 'text-red-500'}`}>
                  {noteDecision === 'accept' ? '✓ Accepted' : '✕ Rejected'}
                </span>
              )}
            </div>
          );
        }
        default:
          return null;
      }
    });
  };

  return (
    <div className={containerClasses}>
      <div className="mb-8 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          {showEditorChrome && (
            <div data-editor-only>
              <span className="text-[11px] font-semibold text-indigo-500 uppercase tracking-wider mb-2 block font-mono">
                Current Lesson
              </span>
            </div>
          )}
          {showEditorChrome && questionStatus && (
            <div data-editor-only>
              <span
                className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 inline-block ${
                  questionStatus === 'real'
                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                    : questionStatus === 'illustrative'
                      ? 'bg-amber-50 text-amber-600 border border-amber-200'
                      : 'bg-blue-50 text-blue-600 border border-blue-200'
                }`}
              >
                {questionStatus === 'real'
                  ? 'Real PrepTest Questions'
                  : questionStatus === 'illustrative'
                    ? 'Illustrative Questions'
                    : 'Real + Illustrative Questions'}
              </span>
            </div>
          )}
          <h1
            className={
              variant === 'modal'
                ? 'text-xl font-semibold text-slate-900 tracking-tight mb-3 pb-3 border-b border-slate-100'
                : 'text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mb-4 pb-4 border-b border-slate-100'
            }
          >
            {title}
          </h1>
          {showEditorChrome && linkageMeta?.status !== 'ok' && (
            <div data-editor-only className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {linkageMeta?.status === 'missing_q_number'
                ? 'No associated question number. Add a PT-style ID to the question-card block.'
                : 'This lesson requires at least one PT-backed question card. Add a repository-backed question-card or question-passage-card block.'}
            </div>
          )}
          {showEditorChrome && linkageMeta?.ptIds.length ? (
            <div data-editor-only className="flex flex-wrap gap-2">
              {linkageMeta.ptIds.map((ptId) => (
                <Link
                  key={ptId}
                  to={`/question-bank?pt=${encodeURIComponent(ptId)}`}
                  className="inline-flex items-center rounded-md border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-100"
                >
                  View in Question Log: {ptId}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        {showEditorChrome && (
          <div data-editor-only className="flex-shrink-0">
            <ExportControls
              label="Lesson"
              filename={`LSAT_Lesson_${title.replace(/\s+/g, '_')}`}
              onCopy={() => generateLessonText(currentLesson)}
              onExportText={() => generateLessonText(currentLesson)}
              onExportRTF={() => generateLessonRTF(currentLesson)}
              onExportJSON={() => generateLessonJSON(currentLesson)}
              onExportCSV={() => generateLessonCSV(currentLesson)}
              onExportPDF={() => generateLessonPDF(currentLesson)}
            />
          </div>
        )}
      </div>
      {showEditorChrome && hasAlternates && (
        <div data-editor-only className="mb-8 flex items-center gap-1 p-1 rounded-lg bg-slate-100 w-fit">
          {isViewEnabled('__original') && (
            <button
              onClick={() => handleVariantChange('__original')}
              className={`px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-all ${
                activeVariant === '__original'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {getVariantLabel('__original')}
            </button>
          )}
          {Object.entries(effectiveAlternates!).filter(([key]) => isViewEnabled(key)).map(([key, alt]) => (
            <button
              key={key}
              onClick={() => handleVariantChange(key)}
              className={`px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-all ${
                activeVariant === key
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {getVariantLabel(key, alt.label)}
            </button>
          ))}
        </div>
      )}
      {showEditorChrome && activeVariant === 'diff' && (
        <div data-editor-only className="mb-6 flex flex-wrap items-center gap-3 text-[11px] font-medium border-[1.5px] border-slate-300 rounded-lg px-4 py-2.5 bg-slate-50">
          <span className="text-slate-400 uppercase tracking-wider mr-1">Legend:</span>
          <span className="inline-flex items-center gap-1"><mark className="bg-emerald-100 text-emerald-800 px-1 rounded-sm">added text</mark> Addition</span>
          <span className="inline-flex items-center gap-1"><del className="bg-red-100 text-red-600 line-through px-1 rounded-sm">removed</del> Removal</span>
          <span className="inline-flex items-center gap-1"><mark className="bg-amber-100 text-amber-800 px-1 rounded-sm">changed</mark> Change</span>
          <span className="inline-flex items-center gap-1"><span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-md">note</span> Comment</span>
          {Object.keys(diffDecisions).length > 0 && (
            <>
              <span className="text-slate-300 mx-1">|</span>
              <span className="text-slate-500">{Object.keys(diffDecisions).length} decided</span>
              <button
                onClick={handleMerge}
                className="ml-1 px-2.5 py-1 rounded-md bg-indigo-600 text-white text-[11px] font-semibold hover:bg-indigo-700 transition-colors"
              >
                Merge & Copy
              </button>
              <button
                onClick={() => setDiffDecisions({})}
                className="px-2 py-1 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              >
                Reset
              </button>
            </>
          )}
          {mergeToast && (
            <span className="ml-2 text-emerald-600 font-semibold animate-in fade-in duration-300">Merged content copied to clipboard</span>
          )}
        </div>
      )}
      <div
        ref={contentRef}
        className="max-w-none"
        onClick={isDiffMode && showEditorChrome ? handleDiffClick : undefined}
      >
        {typeof renderedContent === 'string' ? renderMarkdown(renderedContent) : renderBlocks(renderedContent)}
      </div>
    </div>
  );
};
