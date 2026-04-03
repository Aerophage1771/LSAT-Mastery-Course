/**
 * CourseOverviewA -- "Editorial Magazine" variant
 *
 * Refined editorial aesthetic with generous whitespace, serif headings,
 * a horizontal unit navigation bar (sticky), full-width unit sections
 * with elegant thin-rule dividers, and clean white module cards.
 *
 * No sidebar -- navigation is a horizontal sticky bar at the top.
 * Typography hierarchy and whitespace drive the design over decoration.
 */

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, BookOpen, Clock, Layers } from 'lucide-react';
import { websiteLessonCatalog } from '../../data/websiteLessonCatalog';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const SERIF: React.CSSProperties = { fontFamily: "'Merriweather', serif" };

const getLessonCount = (modId: number) =>
  (websiteLessonCatalog[modId] ?? []).length;

const cleanTitle = (title: string) =>
  title
    .replace(/^MODULE \d+:\s*/i, '')
    .replace(/^Section \d+:\s*/i, '');

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const CourseOverviewA: React.FC<CourseOverviewProps> = ({
  modules,
  category,
  onSelectModule,
}) => {
  /* ---- Filtering ------------------------------------------------- */
  const filtered = modules.filter((m) => {
    if (m.category !== category) return false;
    if (category === 'LR' && m.id > 20) return false;
    return (websiteLessonCatalog[m.id] ?? []).length > 0;
  });

  /* ---- Grouping by unit ------------------------------------------ */
  const units: Array<{ unit: string; modules: typeof filtered }> = [];
  const unitMap = new Map<string, typeof filtered>();
  for (const mod of filtered) {
    const u = mod.unit || 'Other';
    if (!unitMap.has(u)) unitMap.set(u, []);
    unitMap.get(u)!.push(mod);
  }
  unitMap.forEach((mods, unit) => units.push({ unit, modules: mods }));

  /* ---- Aggregate stats ------------------------------------------- */
  const totalLessons = filtered.reduce((sum, m) => sum + getLessonCount(m.id), 0);
  const totalHours = Math.round(totalLessons * 0.2);

  /* ---- Active unit tracking for sticky nav ----------------------- */
  const [activeUnit, setActiveUnit] = useState(units[0]?.unit ?? '');
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    if (units.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the top-most visible section
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const unitName = entry.target.getAttribute('data-unit');
            if (unitName) setActiveUnit(unitName);
            break;
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [units.length]);

  const scrollToUnit = (unit: string) => {
    sectionRefs.current.get(unit)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* ---- Descriptions ---------------------------------------------- */
  const title = category === 'LR' ? 'Logical Reasoning' : 'Reading Comprehension';
  const subtitle =
    category === 'LR'
      ? 'A complete curriculum organized by question family -- from foundational mechanics to advanced strategy.'
      : 'A complete curriculum organized by passage type -- from structural analysis to inference mastery.';

  /* ================================================================ */
  /*  Render                                                           */
  /* ================================================================ */

  return (
    <div className="min-h-screen">
      {/* ── Header ──────────────────────────────────────────────── */}
      <header className="pt-10 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-10 bg-slate-300" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
            {category === 'LR' ? 'Logical Reasoning' : 'Reading Comprehension'} Course
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.06] tracking-[-0.035em] text-slate-950 max-w-[720px] mb-5"
          style={SERIF}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-[15px] sm:text-base leading-[1.75] text-slate-500 max-w-[580px] mb-8">
          {subtitle}
        </p>

        {/* Stat bar -- clean typography with subtle dividers */}
        <div className="flex items-center gap-0 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Layers size={14} className="text-slate-400" />
            <span className="font-semibold text-slate-900">{filtered.length}</span>
            <span className="text-slate-400">Modules</span>
          </div>
          <div className="mx-5 h-3.5 w-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <BookOpen size={14} className="text-slate-400" />
            <span className="font-semibold text-slate-900">{totalLessons}</span>
            <span className="text-slate-400">Lessons</span>
          </div>
          <div className="mx-5 h-3.5 w-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-slate-400" />
            <span className="font-semibold text-slate-900">~{totalHours}h</span>
            <span className="text-slate-400">Estimated</span>
          </div>
        </div>
      </header>

      {/* ── Sticky horizontal unit nav ─────────────────────────── */}
      <nav className="sticky top-0 z-30 -mx-1 px-1 bg-white/90 backdrop-blur-md border-b border-slate-200 mb-10">
        <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
          {units.map(({ unit }) => {
            const isActive = activeUnit === unit;
            return (
              <button
                key={unit}
                onClick={() => scrollToUnit(unit)}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200
                  ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                  }
                `}
              >
                {unit}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── Unit sections ──────────────────────────────────────── */}
      <div className="space-y-16 pb-20">
        {units.map(({ unit, modules: mods }) => {
          const unitLessons = mods.reduce((s, m) => s + getLessonCount(m.id), 0);

          return (
            <section
              key={unit}
              data-unit={unit}
              ref={(el) => {
                if (el) sectionRefs.current.set(unit, el);
              }}
              className="scroll-mt-16"
            >
              {/* Unit header: thin rule + name + thin rule */}
              <div className="flex items-center gap-5 mb-8">
                <div className="h-px flex-1 bg-slate-200" />
                <div className="flex items-center gap-4 flex-shrink-0">
                  <h2
                    className="text-[1.1rem] sm:text-[1.25rem] font-semibold tracking-[-0.02em] text-slate-900"
                    style={SERIF}
                  >
                    {unit}
                  </h2>
                  <span className="text-[12px] text-slate-400 font-medium">
                    {mods.length} modules &middot; {unitLessons} lessons
                  </span>
                </div>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Module cards -- single column for editorial feel */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[960px] mx-auto">
                {mods.map((mod) => {
                  const lessonCount = getLessonCount(mod.id);
                  const catalogLessons = websiteLessonCatalog[mod.id] ?? [];
                  const firstLesson = catalogLessons[0];

                  return (
                    <button
                      key={mod.id}
                      onClick={() => onSelectModule(mod.id)}
                      className="group relative text-left rounded-[28px] border-[1.5px] border-slate-300 bg-white p-7 sm:p-8 transition-all duration-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
                    >
                      {/* Module number + arrow */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          Module {mod.id}
                        </span>
                        <span className="text-slate-300 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-200">
                          <ArrowRight size={16} />
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-[1.15rem] sm:text-[1.25rem] font-bold italic leading-snug text-slate-900 mb-2.5"
                        style={SERIF}
                      >
                        {mod.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13.5px] leading-[1.7] text-slate-500 line-clamp-2 mb-5">
                        {mod.description}
                      </p>

                      {/* First lesson preview */}
                      {firstLesson && (
                        <p className="text-[12px] text-slate-400 mb-4">
                          Starts with{' '}
                          <span className="font-medium text-slate-600">
                            {cleanTitle(firstLesson.title)}
                          </span>
                        </p>
                      )}

                      {/* Bottom stats -- minimal */}
                      <div className="flex items-center gap-4 text-[12px] text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <BookOpen size={12} />
                          {lessonCount} lessons
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          ~{Math.round(lessonCount * 0.2)}h
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
