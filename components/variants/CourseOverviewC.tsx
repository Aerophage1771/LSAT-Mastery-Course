/**
 * CourseOverviewC -- "Accordion Units" variant
 *
 * Clean header with course title and stats. Each unit is a collapsible
 * accordion section with module cards in a 3-column grid inside the body.
 * First unit open by default. Smooth expand/collapse transitions.
 *
 * Uses only Tailwind classes + inline serif font. No external CSS deps.
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, BookOpen, FileText, Clock, Layers } from 'lucide-react';
import { websiteLessonCatalog } from '../../data/websiteLessonCatalog';

/* ─── Props ──────────────────────────────────────────────────────── */

interface CourseOverviewProps {
  modules: Array<{
    id: number;
    category: string;
    title: string;
    description: string;
    unit?: string;
    lessons: Array<{ id: string; title: string }>;
  }>;
  category: 'LR' | 'RC';
  onSelectModule: (id: number) => void;
}

/* ─── Helpers ────────────────────────────────────────────────────── */

const WEBSITE_LR_MAX = 20;

const getLessonCount = (modId: number) => (websiteLessonCatalog[modId] ?? []).length;

const cleanTitle = (title: string) =>
  title.replace(/^MODULE \d+:\s*/i, '').replace(/^Section \d+:\s*/i, '');

/* ─── AccordionUnit ─────────────────────────────────────────────── */

const AccordionUnit: React.FC<{
  unit: string;
  unitIndex: number;
  modules: CourseOverviewProps['modules'];
  isOpen: boolean;
  onToggle: () => void;
  onSelectModule: (id: number) => void;
}> = ({ unit, unitIndex, modules: mods, isOpen, onToggle, onSelectModule }) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = useState(0);

  // Measure content height for smooth transition
  const measure = useCallback(() => {
    if (bodyRef.current) {
      setMeasuredHeight(bodyRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    measure();
    // Re-measure on window resize for responsive grid changes
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure, mods.length]);

  // Also re-measure when opened (content may have changed)
  useEffect(() => {
    if (!isOpen) return;
    // Small delay to let DOM settle after render
    const id = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(id);
  }, [isOpen, measure]);

  const unitModuleCount = mods.length;
  const unitLessonCount = mods.reduce((sum, m) => sum + getLessonCount(m.id), 0);

  return (
    <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white shadow-[0_4px_16px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.09)]">
      {/* ── Accordion Header ─────────────────────────────────────── */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 sm:px-8 sm:py-6 text-left group"
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 flex-shrink-0">
            {String(unitIndex + 1).padStart(2, '0')}
          </div>
          <div className="min-w-0">
            <h2
              className="text-[1.15rem] sm:text-[1.35rem] font-semibold tracking-[-0.02em] text-slate-900 truncate"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              {unit}
            </h2>
            <div className="flex items-center gap-3 mt-1 text-[11px] font-medium text-slate-400">
              <span className="flex items-center gap-1">
                <Layers size={11} />
                {unitModuleCount} module{unitModuleCount !== 1 ? 's' : ''}
              </span>
              <span className="w-px h-3 bg-slate-200" />
              <span className="flex items-center gap-1">
                <FileText size={11} />
                {unitLessonCount} lesson{unitLessonCount !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>

        <ChevronDown
          size={20}
          className={`text-slate-400 group-hover:text-slate-600 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {/* ── Progress bar ─────────────────────────────────────────── */}
      <div className="px-7 sm:px-8 -mt-2 pb-1">
        <div className="h-[3px] w-full rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-slate-400 transition-all duration-500"
            style={{ width: '0%' }}
          />
        </div>
        <p className="text-[10px] font-medium text-slate-300 mt-1 text-right">0% complete</p>
      </div>

      {/* ── Accordion Body ───────────────────────────────────────── */}
      <div
        className="overflow-hidden transition-[max-height] duration-400 ease-in-out"
        style={{ maxHeight: isOpen ? `${measuredHeight + 32}px` : '0px' }}
      >
        <div ref={bodyRef} className="px-7 sm:px-8 pb-7 sm:pb-8 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {mods.map((mod) => {
              const lessonCount = getLessonCount(mod.id);
              return (
                <button
                  key={mod.id}
                  onClick={() => onSelectModule(mod.id)}
                  className="group/card rounded-[20px] border-[1.5px] border-slate-300 bg-white p-5 text-left transition-all duration-250 hover:shadow-[0_8px_24px_rgba(15,23,42,0.1)] hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
                >
                  {/* Module number */}
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400">
                    Module {mod.id}
                  </span>

                  {/* Title */}
                  <h3
                    className="mt-2 text-[0.95rem] font-semibold leading-snug tracking-[-0.01em] text-slate-900 line-clamp-2 group-hover/card:text-slate-700 transition-colors"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    {cleanTitle(mod.title)}
                  </h3>

                  {/* Bottom row: lesson badge */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                      <BookOpen size={11} />
                      {lessonCount} lesson{lessonCount !== 1 ? 's' : ''}
                    </span>
                    <span className="text-[10px] font-medium text-slate-300 group-hover/card:text-slate-400 transition-colors">
                      ~{Math.round(lessonCount * 0.2)}h
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── CourseOverviewC ────────────────────────────────────────────── */

export const CourseOverviewC: React.FC<CourseOverviewProps> = ({
  modules,
  category,
  onSelectModule,
}) => {
  const filtered = modules.filter((m) => {
    if (m.category !== category) return false;
    if (category === 'LR' && m.id > WEBSITE_LR_MAX) return false;
    return (websiteLessonCatalog[m.id] ?? []).length > 0;
  });

  // Group by unit
  const units: Array<{ unit: string; modules: typeof filtered }> = [];
  const unitMap = new Map<string, typeof filtered>();
  for (const mod of filtered) {
    const u = mod.unit || 'Other';
    if (!unitMap.has(u)) unitMap.set(u, []);
    unitMap.get(u)!.push(mod);
  }
  unitMap.forEach((mods, unit) => units.push({ unit, modules: mods }));

  // Accordion state — first unit open by default
  const [openUnits, setOpenUnits] = useState<Set<number>>(() => new Set([0]));

  const toggleUnit = (idx: number) => {
    setOpenUnits((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const title = category === 'LR' ? 'Logical Reasoning' : 'Reading Comprehension';
  const totalModules = filtered.length;
  const totalLessons = filtered.reduce((sum, m) => sum + getLessonCount(m.id), 0);

  return (
    <div className="min-h-screen">
      {/* ── Header ────────────────────────────────────────────────── */}
      <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white px-7 py-6 sm:px-8 sm:py-7 mb-6 shadow-[0_8px_24px_rgba(15,23,42,0.07)]">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-slate-400 mb-2">
              Course Overview
            </p>
            <h1
              className="text-[2rem] sm:text-[2.5rem] font-semibold leading-tight tracking-[-0.04em] text-slate-900"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              {title}
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 max-w-xl">
              {category === 'LR'
                ? 'A complete LR curriculum organized by unit, with every module and practice set available from one place.'
                : 'A complete RC curriculum organized by unit, with every passage and reference guide available from one place.'}
            </p>
          </div>

          {/* Stats capsule */}
          <div className="flex items-stretch gap-0 flex-shrink-0 rounded-2xl border-[1.5px] border-slate-300 overflow-hidden shadow-[0_4px_12px_rgba(15,23,42,0.05)]">
            <div className="bg-white px-5 py-3.5 text-center min-w-[88px] border-r border-slate-200">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Layers size={11} className="text-slate-400" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Units</span>
              </div>
              <div className="text-2xl font-bold text-slate-900">{units.length}</div>
            </div>
            <div className="bg-white px-5 py-3.5 text-center min-w-[88px] border-r border-slate-200">
              <div className="flex items-center justify-center gap-1 mb-1">
                <BookOpen size={11} className="text-slate-400" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Modules</span>
              </div>
              <div className="text-2xl font-bold text-slate-900">{totalModules}</div>
            </div>
            <div className="bg-white px-5 py-3.5 text-center min-w-[88px] border-r border-slate-200">
              <div className="flex items-center justify-center gap-1 mb-1">
                <FileText size={11} className="text-slate-400" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Lessons</span>
              </div>
              <div className="text-2xl font-bold text-slate-900">{totalLessons}</div>
            </div>
            <div className="bg-slate-900 px-5 py-3.5 text-center min-w-[96px]">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock size={11} className="text-slate-400" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Estimated</span>
              </div>
              <div className="text-2xl font-bold text-white">~{Math.round(totalLessons * 0.2)}h</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Accordion list ────────────────────────────────────────── */}
      <div className="space-y-4">
        {units.map(({ unit, modules: mods }, idx) => (
          <AccordionUnit
            key={unit}
            unit={unit}
            unitIndex={idx}
            modules={mods}
            isOpen={openUnits.has(idx)}
            onToggle={() => toggleUnit(idx)}
            onSelectModule={onSelectModule}
          />
        ))}
      </div>
    </div>
  );
};
