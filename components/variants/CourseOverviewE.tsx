/**
 * CourseOverviewE -- "Table View" variant
 *
 * Clean, data-dense table layout inspired by Notion/Linear.
 * - Compact header with course title + description + stat summary
 * - Search/filter bar with unit filter pills
 * - Main content: a clean table with columns — #, Module Title, Unit, Lessons, Est. Time, Status, Action
 * - Each row clickable with hover highlight
 * - Unit grouping shown with spanning header rows in a darker shade
 * - Module title in serif italic
 * - "Open" button in the action column
 *
 * Uses only Tailwind classes. No external CSS dependencies.
 */

import React, { useMemo, useState } from 'react';
import {
  Search,
  LayoutDashboard,
  FileText,
  Clock,
  ChevronRight,
  Filter,
  X,
} from 'lucide-react';
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

const getLessonCount = (modId: number) =>
  (websiteLessonCatalog[modId] ?? []).length;

const cleanTitle = (title: string) =>
  title
    .replace(/^MODULE \d+:\s*/i, '')
    .replace(/^Section \d+:\s*/i, '');

const estTime = (lessons: number) => {
  const hours = lessons * 0.2;
  if (hours < 1) return `${Math.round(hours * 60)}m`;
  return `${hours.toFixed(1)}h`;
};

/* ─── Component ──────────────────────────────────────────────────── */

export const CourseOverviewE: React.FC<CourseOverviewProps> = ({
  modules,
  category,
  onSelectModule,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeUnit, setActiveUnit] = useState<string | null>(null);

  /* Filter to published modules */
  const filtered = useMemo(
    () =>
      modules.filter((m) => {
        if (m.category !== category) return false;
        if (category === 'LR' && m.id > 20) return false;
        return (websiteLessonCatalog[m.id] ?? []).length > 0;
      }),
    [modules, category],
  );

  /* Group by unit, preserving order */
  const units = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    for (const mod of filtered) {
      const u = mod.unit || 'Other';
      if (!map.has(u)) map.set(u, []);
      map.get(u)!.push(mod);
    }
    const result: Array<{ unit: string; modules: typeof filtered }> = [];
    map.forEach((mods, unit) => result.push({ unit, modules: mods }));
    return result;
  }, [filtered]);

  /* All unique unit names for filter pills */
  const unitNames = useMemo(() => units.map((u) => u.unit), [units]);

  /* Apply search + unit filter */
  const visibleUnits = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return units
      .filter((u) => !activeUnit || u.unit === activeUnit)
      .map((u) => ({
        ...u,
        modules: u.modules.filter(
          (m) =>
            !q ||
            cleanTitle(m.title).toLowerCase().includes(q) ||
            m.description.toLowerCase().includes(q) ||
            String(m.id).includes(q),
        ),
      }))
      .filter((u) => u.modules.length > 0);
  }, [units, searchQuery, activeUnit]);

  /* Aggregate stats */
  const totalModules = filtered.length;
  const totalLessons = filtered.reduce((s, m) => s + getLessonCount(m.id), 0);

  const title =
    category === 'LR' ? 'Logical Reasoning' : 'Reading Comprehension';
  const description =
    category === 'LR'
      ? 'A complete LR curriculum organized by question type, covering every module and practice set.'
      : 'A complete RC curriculum organized by passage type, with every passage and reference guide.';

  /* Running row number counter */
  let rowNum = 0;

  return (
    <div>
      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-[#f8fafc] px-8 py-6 mb-6">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div className="min-w-0 flex-1">
            <div className="text-[10px] font-bold uppercase tracking-[2.4px] text-slate-400 mb-1.5">
              Course Overview
            </div>
            <h1
              className="text-[34px] font-semibold leading-tight tracking-[-0.04em] text-[#020617] mb-2"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              {title}
            </h1>
            <p className="text-slate-500 text-[13px] leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          {/* Stat chips */}
          <div className="flex items-stretch gap-0 flex-shrink-0 rounded-2xl border-[1.5px] border-slate-300 overflow-hidden shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
            <div className="bg-white px-5 py-3 text-center min-w-[90px] border-r border-slate-200">
              <div className="flex items-center justify-center gap-1 mb-1">
                <LayoutDashboard size={11} className="text-slate-400" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Modules
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-900">
                {totalModules}
              </div>
            </div>
            <div className="bg-white px-5 py-3 text-center min-w-[90px] border-r border-slate-200">
              <div className="flex items-center justify-center gap-1 mb-1">
                <FileText size={11} className="text-slate-400" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Lessons
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-900">
                {totalLessons}
              </div>
            </div>
            <div className="bg-red-500 px-5 py-3 text-center min-w-[95px]">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock size={11} className="text-red-200" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-red-200">
                  Est. Time
                </span>
              </div>
              <div className="text-2xl font-bold text-white">
                ~{Math.round(totalLessons * 0.2)}h
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Search + Filter Bar ─────────────────────────────────── */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        {/* Search input */}
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search modules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2.5 rounded-xl border-[1.5px] border-slate-300 bg-white text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-200 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filter icon + unit pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter size={14} className="text-slate-400 flex-shrink-0" />
          <button
            onClick={() => setActiveUnit(null)}
            className={`text-[11px] font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
              activeUnit === null
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-500 border-slate-300 hover:border-slate-400 hover:text-slate-700'
            }`}
          >
            All
          </button>
          {unitNames.map((u) => (
            <button
              key={u}
              onClick={() => setActiveUnit(activeUnit === u ? null : u)}
              className={`text-[11px] font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                activeUnit === u
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-500 border-slate-300 hover:border-slate-400 hover:text-slate-700'
              }`}
            >
              {u}
            </button>
          ))}
        </div>
      </div>

      {/* ── Table ───────────────────────────────────────────────── */}
      <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white overflow-hidden shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
        <table className="w-full border-collapse">
          {/* Sticky header */}
          <thead className="sticky top-0 z-10">
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left text-[10px] font-bold uppercase tracking-[1.6px] text-slate-400 px-5 py-3.5 w-[52px]">
                #
              </th>
              <th className="text-left text-[10px] font-bold uppercase tracking-[1.6px] text-slate-400 px-4 py-3.5">
                Module Title
              </th>
              <th className="text-left text-[10px] font-bold uppercase tracking-[1.6px] text-slate-400 px-4 py-3.5 hidden lg:table-cell w-[160px]">
                Unit
              </th>
              <th className="text-center text-[10px] font-bold uppercase tracking-[1.6px] text-slate-400 px-4 py-3.5 w-[80px]">
                Lessons
              </th>
              <th className="text-center text-[10px] font-bold uppercase tracking-[1.6px] text-slate-400 px-4 py-3.5 w-[90px] hidden sm:table-cell">
                Est. Time
              </th>
              <th className="text-center text-[10px] font-bold uppercase tracking-[1.6px] text-slate-400 px-4 py-3.5 w-[90px] hidden md:table-cell">
                Status
              </th>
              <th className="text-right text-[10px] font-bold uppercase tracking-[1.6px] text-slate-400 px-5 py-3.5 w-[90px]">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {visibleUnits.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="text-center py-16 text-sm text-slate-400"
                >
                  No modules match your search.
                </td>
              </tr>
            )}

            {visibleUnits.map(({ unit, modules: mods }, unitIdx) => {
              const unitLessons = mods.reduce(
                (s, m) => s + getLessonCount(m.id),
                0,
              );

              return (
                <React.Fragment key={unit}>
                  {/* ── Unit group header row ─────────────────── */}
                  <tr className="bg-slate-100/80 border-y border-slate-200">
                    <td
                      colSpan={7}
                      className="px-5 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-[10px] font-bold text-slate-500">
                          {String(unitIdx + 1).padStart(2, '0')}
                        </span>
                        <span
                          className="text-[13px] font-bold text-slate-700 tracking-tight"
                          style={{ fontFamily: "'Merriweather', serif" }}
                        >
                          {unit}
                        </span>
                        <span className="text-[11px] text-slate-400 ml-1">
                          {mods.length} modules &middot; {unitLessons} lessons
                          &middot; ~{estTime(unitLessons)}
                        </span>
                      </div>
                    </td>
                  </tr>

                  {/* ── Module rows ────────────────────────────── */}
                  {mods.map((mod) => {
                    rowNum += 1;
                    const lessonCount = getLessonCount(mod.id);
                    const isEven = rowNum % 2 === 0;

                    return (
                      <tr
                        key={mod.id}
                        onClick={() => onSelectModule(mod.id)}
                        className={`group cursor-pointer border-b border-slate-100 transition-colors duration-150 ${
                          isEven ? 'bg-slate-50/40' : 'bg-white'
                        } hover:bg-blue-50/60`}
                      >
                        {/* # */}
                        <td className="px-5 py-3.5 text-[12px] font-semibold text-slate-400 tabular-nums">
                          {String(rowNum).padStart(2, '0')}
                        </td>

                        {/* Module Title */}
                        <td className="px-4 py-3.5">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="min-w-0">
                              <div
                                className="text-[14px] font-semibold italic text-slate-800 leading-snug truncate group-hover:text-slate-900"
                                style={{
                                  fontFamily: "'Merriweather', serif",
                                }}
                                title={cleanTitle(mod.title)}
                              >
                                {cleanTitle(mod.title)}
                              </div>
                              <div className="text-[11px] text-slate-400 leading-snug mt-0.5 truncate max-w-[400px] lg:max-w-[500px]">
                                {mod.description}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Unit (hidden on small) */}
                        <td className="px-4 py-3.5 hidden lg:table-cell">
                          <span className="text-[11px] font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                            {mod.unit || 'Other'}
                          </span>
                        </td>

                        {/* Lessons */}
                        <td className="px-4 py-3.5 text-center">
                          <span className="text-[13px] font-semibold text-slate-700 tabular-nums">
                            {lessonCount}
                          </span>
                        </td>

                        {/* Est. Time */}
                        <td className="px-4 py-3.5 text-center hidden sm:table-cell">
                          <span className="text-[12px] text-slate-500 tabular-nums">
                            {estTime(lessonCount)}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-4 py-3.5 text-center hidden md:table-cell">
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                            Not started
                          </span>
                        </td>

                        {/* Action */}
                        <td className="px-5 py-3.5 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectModule(mod.id);
                            }}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-900 hover:text-white px-3.5 py-1.5 rounded-lg transition-colors duration-150"
                          >
                            Open
                            <ChevronRight
                              size={12}
                              className="opacity-60 group-hover:opacity-100 transition-opacity"
                            />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ── Footer summary ──────────────────────────────────────── */}
      <div className="flex items-center justify-between mt-4 px-2 text-[11px] text-slate-400">
        <span>
          Showing{' '}
          {visibleUnits.reduce((s, u) => s + u.modules.length, 0)} of{' '}
          {totalModules} modules
        </span>
        <span>
          {totalLessons} lessons &middot; ~{Math.round(totalLessons * 0.2)}h
          estimated
        </span>
      </div>
    </div>
  );
};
