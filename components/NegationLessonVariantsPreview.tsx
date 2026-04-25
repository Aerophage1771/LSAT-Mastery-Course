/**
 * NegationLessonVariantsPreview
 *
 * In-app admin review surface for the 2026-04-23 tabbed-layout variant cycle
 * of the Negation Test lesson. Renders an admin-grade variant picker at the
 * top and mounts whichever variant is selected below it.
 *
 * The picker is a custom dropdown (not a native select, not a flat button
 * row) with:
 *   - Click-trigger + panel with rich rows (pattern name, blurb, line count)
 *   - Keyboard navigation: Up/Down to move, Enter to select, Escape to close
 *   - Cmd/Ctrl+K to open the dropdown from anywhere on the page
 *   - Click-outside-to-close via a ref + document listener
 *   - Active variant checkmark + metadata strip (file, lines, pattern)
 *
 * This is a dev/review surface gated behind `/variants/negation` — it does
 * NOT appear in the student navigation and does NOT mutate student progress.
 * Every variant is self-contained (inlines its own content); the picker only
 * swaps which component is mounted.
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ChevronDown, Command, FileText, Hash, Keyboard } from 'lucide-react';

import { NegationLessonClassicTabs } from './variants/NegationLessonClassicTabs';
import { NegationLessonLeftRail }    from './variants/NegationLessonLeftRail';
import { NegationLessonStepper }     from './variants/NegationLessonStepper';
import { NegationLessonSegmented }   from './variants/NegationLessonSegmented';
import { NegationLessonAccordion }   from './variants/NegationLessonAccordion';
import { NegationLessonCardDeck }    from './variants/NegationLessonCardDeck';

type VariantId =
  | 'classic-tabs'
  | 'left-rail'
  | 'stepper'
  | 'segmented'
  | 'accordion'
  | 'card-deck';

type VariantEntry = {
  id: VariantId;
  label: string;
  pattern: string;
  blurb: string;
  file: string;
  lines: number;
  Component: React.FC;
};

const variants: VariantEntry[] = [
  {
    id: 'classic-tabs',
    label: 'Classic Tabs',
    pattern: 'Horizontal underline tabs',
    blurb: 'Radix/Notion lineage. Sticky tab bar with 2px underline indicator and 150ms fade between panels.',
    file: 'NegationLessonClassicTabs.tsx',
    lines: 742,
    Component: NegationLessonClassicTabs,
  },
  {
    id: 'left-rail',
    label: 'Left Rail',
    pattern: 'Sticky docs-style vertical rail',
    blurb: 'Stripe/Linear/Tailwind docs style. 240px rail with numbered circles, icons, and subtitles per entry.',
    file: 'NegationLessonLeftRail.tsx',
    lines: 876,
    Component: NegationLessonLeftRail,
  },
  {
    id: 'stepper',
    label: 'Stepper',
    pattern: 'Numbered 1 to 5 wizard',
    blurb: 'Progress rail across the top. Green checkmarks earned on Next. Prev/Next CTAs at the foot of every panel.',
    file: 'NegationLessonStepper.tsx',
    lines: 775,
    Component: NegationLessonStepper,
  },
  {
    id: 'segmented',
    label: 'Segmented',
    pattern: 'iOS pill segmented control',
    blurb: 'Sliding indigo indicator driven by translateX. Sticky pill control, 44px tap targets, fade-and-translate body.',
    file: 'NegationLessonSegmented.tsx',
    lines: 761,
    Component: NegationLessonSegmented,
  },
  {
    id: 'accordion',
    label: 'Accordion',
    pattern: 'Accordion-as-tabs',
    blurb: 'Multiple sections open simultaneously for cross-reference. Open sections get a 4px emerald left-border bar.',
    file: 'NegationLessonAccordion.tsx',
    lines: 716,
    Component: NegationLessonAccordion,
  },
  {
    id: 'card-deck',
    label: 'Card Deck',
    pattern: 'Swipeable card deck',
    blurb: 'Stories/Wallet metaphor. Keyboard arrow navigation. Dot indicator bottom-center. Colored accent sweep.',
    file: 'NegationLessonCardDeck.tsx',
    lines: 542,
    Component: NegationLessonCardDeck,
  },
];

const totalLines = variants.reduce((sum, v) => sum + v.lines, 0);

export const NegationLessonVariantsPreview: React.FC = () => {
  const [active, setActive] = useState<VariantId>('classic-tabs');
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(0);

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef   = useRef<HTMLDivElement | null>(null);

  const current = useMemo(
    () => variants.find(v => v.id === active)!,
    [active],
  );
  const currentIndex = useMemo(
    () => variants.findIndex(v => v.id === active),
    [active],
  );
  const Variant = current.Component;

  // Open the dropdown and align the cursor with the currently-selected row.
  const openPanel = useCallback(() => {
    setCursor(currentIndex < 0 ? 0 : currentIndex);
    setOpen(true);
  }, [currentIndex]);

  const closePanel = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  const selectAt = useCallback((idx: number) => {
    const next = variants[idx];
    if (!next) return;
    setActive(next.id);
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Global shortcuts: Cmd/Ctrl+K opens; J/K or ←/→ cycle without opening.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (open) closePanel();
        else openPanel();
        return;
      }
      if (open) return;
      // Quick cycle (only when dropdown is closed and no input is focused).
      const tag = (document.activeElement?.tagName ?? '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || (document.activeElement as HTMLElement)?.isContentEditable) return;
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'k') {
        setActive(variants[(currentIndex - 1 + variants.length) % variants.length].id);
      } else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'j') {
        setActive(variants[(currentIndex + 1) % variants.length].id);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, openPanel, closePanel, currentIndex]);

  // Click outside the dropdown to close.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t)) return;
      if (triggerRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  // When the panel opens, give it focus so keyboard nav (onKeyDown on the
  // panel div) receives events without the user needing to tab first.
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  // In-panel keyboard nav.
  const onPanelKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closePanel();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor(c => (c + 1) % variants.length);
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor(c => (c - 1 + variants.length) % variants.length);
      return;
    }
    if (e.key === 'Home') {
      e.preventDefault();
      setCursor(0);
      return;
    }
    if (e.key === 'End') {
      e.preventDefault();
      setCursor(variants.length - 1);
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      selectAt(cursor);
      return;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ---------- Admin banner ---------- */}
      <div className="bg-slate-900 text-slate-100 text-[11px] tracking-wider uppercase">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between">
          <span className="flex items-center gap-2 font-semibold">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Admin preview &middot; ui-critique-bot &middot; 2026-04-23 &middot; NegationLesson
          </span>
          <span className="hidden sm:flex items-center gap-3 text-slate-400 font-mono normal-case tracking-normal">
            <span>{variants.length} variants</span>
            <span>&middot;</span>
            <span>{totalLines.toLocaleString()} lines inlined</span>
          </span>
        </div>
      </div>

      {/* ---------- Picker + metadata strip ---------- */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex flex-wrap items-center gap-3">
            {/* Dropdown */}
            <div className="relative">
              <button
                ref={triggerRef}
                onClick={() => (open ? closePanel() : openPanel())}
                aria-haspopup="listbox"
                aria-expanded={open}
                className={[
                  'group flex items-center gap-3 min-w-[260px] px-3 py-2 rounded-lg border shadow-sm text-left transition',
                  open
                    ? 'border-slate-900 bg-white ring-2 ring-slate-200'
                    : 'border-slate-300 bg-white hover:border-slate-500',
                ].join(' ')}
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-slate-900 text-white text-[11px] font-bold">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold text-slate-900 leading-tight truncate">
                    {current.label}
                  </span>
                  <span className="block text-[11px] text-slate-500 leading-tight truncate">
                    {current.pattern}
                  </span>
                </span>
                <ChevronDown
                  className={[
                    'w-4 h-4 text-slate-500 transition-transform',
                    open ? 'rotate-180' : 'rotate-0',
                  ].join(' ')}
                />
              </button>

              {/* Dropdown panel */}
              {open && (
                <div
                  ref={panelRef}
                  role="listbox"
                  tabIndex={-1}
                  onKeyDown={onPanelKey}
                  className="absolute left-0 mt-2 w-[420px] max-w-[92vw] bg-white border border-slate-200 rounded-xl shadow-2xl z-50 overflow-hidden focus:outline-none"
                >
                  <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    <span>Select a variant</span>
                    <span className="flex items-center gap-1 font-mono normal-case tracking-normal text-slate-400">
                      <Keyboard className="w-3 h-3" />
                      &uarr; &darr; Enter &middot; Esc
                    </span>
                  </div>
                  <ul className="py-1 max-h-[420px] overflow-y-auto">
                    {variants.map((v, idx) => {
                      const isActive = v.id === active;
                      const isCursor = idx === cursor;
                      return (
                        <li key={v.id} role="option" aria-selected={isActive}>
                          <button
                            type="button"
                            onMouseEnter={() => setCursor(idx)}
                            onClick={() => selectAt(idx)}
                            className={[
                              'w-full text-left px-3 py-2 flex items-start gap-3 transition',
                              isCursor ? 'bg-slate-100' : 'bg-transparent',
                            ].join(' ')}
                          >
                            <span
                              className={[
                                'flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-md text-[10px] font-bold',
                                isActive
                                  ? 'bg-slate-900 text-white'
                                  : 'bg-slate-200 text-slate-600',
                              ].join(' ')}
                            >
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <span className="flex-1 min-w-0">
                              <span className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-slate-900">{v.label}</span>
                                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                                  {v.lines}L
                                </span>
                                {isActive && (
                                  <Check className="w-3.5 h-3.5 text-emerald-600 ml-auto flex-shrink-0" />
                                )}
                              </span>
                              <span className="block text-[11px] text-slate-500 mt-0.5">
                                {v.pattern}
                              </span>
                              <span className="block text-[11px] text-slate-400 mt-0.5 line-clamp-2">
                                {v.blurb}
                              </span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="px-3 py-1.5 border-t border-slate-100 text-[10px] text-slate-400 font-mono flex items-center justify-between">
                    <span>
                      <Command className="w-3 h-3 inline-block align-[-2px] mr-1" />
                      K to reopen
                    </span>
                    <span>&larr; &rarr; cycle without opening</span>
                  </div>
                </div>
              )}
            </div>

            {/* Metadata pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium">
                <FileText className="w-3 h-3" />
                <code className="font-mono">{current.file}</code>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium">
                <Hash className="w-3 h-3" />
                <span className="font-mono">{current.lines} lines</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium">
                {currentIndex + 1} of {variants.length}
              </span>
            </div>

            {/* Spacer + back link */}
            <div className="ml-auto flex items-center gap-3">
              <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px]">&#8984;K</kbd>
                to open
              </span>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to dashboard
              </Link>
            </div>
          </div>

          {/* Blurb row */}
          <div className="mt-2 text-xs text-slate-500 italic">
            &ldquo;{current.blurb}&rdquo;
          </div>
        </div>
      </header>

      {/* ---------- Mounted variant ---------- */}
      <main>
        <Variant />
      </main>
    </div>
  );
};

export default NegationLessonVariantsPreview;
