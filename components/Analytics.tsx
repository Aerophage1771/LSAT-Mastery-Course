import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BarChart3, ChevronUp, ChevronDown, ChevronRight } from 'lucide-react';
import type { ModuleData } from '../types';
import { computeCourseMetrics, type ModuleMetrics } from '../utils/contentMetrics';

interface AnalyticsProps {
  loadedModules: ModuleData[];
}

type SortKey = 'title' | 'lessonCount' | 'totalWordCount' | 'questionCardCount';

function getSectionColors(section: string) {
  if (section === 'Logical Reasoning') return { border: 'border-l-indigo-500', badge: 'bg-indigo-100 text-indigo-700', bar: 'bg-indigo-500' };
  if (section === 'Reading Comprehension') return { border: 'border-l-emerald-500', badge: 'bg-emerald-100 text-emerald-700', bar: 'bg-emerald-500' };
  return { border: 'border-l-slate-400', badge: 'bg-slate-100 text-slate-700', bar: 'bg-slate-400' };
}

function fmt(n: number): string {
  return n.toLocaleString('en-US');
}

export function Analytics({ loadedModules }: AnalyticsProps) {
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState<SortKey>('title');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [sectionFilter, setSectionFilter] = useState<string | null>(null);

  const metrics = useMemo(() => computeCourseMetrics(loadedModules), [loadedModules]);

  const sortedModules = useMemo(() => {
    const filtered = sectionFilter ? metrics.modules.filter((m) => m.section === sectionFilter) : metrics.modules;
    return [...filtered].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortDir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      return sortDir === 'asc' ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number);
    });
  }, [metrics.modules, sectionFilter, sortKey, sortDir]);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir(key === 'title' ? 'asc' : 'desc');
    }
  }

  if (loadedModules.length === 0) {
    return (
      <div className="flex items-center justify-center h-full min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
          <span className="text-slate-500 text-sm font-medium">Loading course data...</span>
        </div>
      </div>
    );
  }

  const { courseTotals, sectionTotals } = metrics;
  const totalCards = courseTotals.questionCardCount + courseTotals.passageCardCount + courseTotals.questionPassageCardCount;
  const readingMinutes = Math.round(courseTotals.totalWordCount / 250);

  const sectionOrder = ['Logical Reasoning', 'Reading Comprehension', 'Other'];
  const orderedSections = sectionOrder.filter((s) => sectionTotals[s]);

  const filterOptions = ['All', ...orderedSections];

  return (
    <div className="flex flex-col h-full min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Breadcrumb + Section Nav */}
      <div className="bg-white border-b border-slate-200 px-6 py-3 flex items-center gap-4 flex-wrap">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Dashboard</span>
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-sm font-semibold text-slate-800">Analytics</span>
        <span className="text-slate-200 hidden sm:inline">|</span>
        <nav className="hidden sm:flex items-center gap-3">
          {(['summary', 'sections', 'units', 'modules', 'lessons'] as const).map((id) => (
            <button
              key={id}
              onClick={() => document.getElementById(`analytics-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="text-xs font-medium text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer capitalize"
            >
              {id}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Title */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 size={28} className="text-indigo-600" />
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Course Analytics</h1>
            </div>
            <p className="text-slate-500">
              Content metrics across {fmt(courseTotals.moduleCount)} modules and {fmt(courseTotals.lessonCount)} lessons.
            </p>
          </div>

          {/* Summary Cards */}
          <div id="analytics-summary" className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
            <SummaryCard label="Modules" value={fmt(courseTotals.moduleCount)} sub={`${orderedSections.length} sections`} />
            <SummaryCard label="Lessons" value={fmt(courseTotals.lessonCount)} sub={`~${Math.round(courseTotals.lessonCount / courseTotals.moduleCount)} avg per module`} />
            <SummaryCard label="Estimated Words" value={fmt(courseTotals.totalWordCount)} sub={`~${fmt(readingMinutes)} min reading time`} />
            <SummaryCard label="Question Cards" value={fmt(totalCards)} sub={`${courseTotals.questionCardCount} Q · ${courseTotals.passageCardCount} P · ${courseTotals.questionPassageCardCount} QP`} />
          </div>

          {/* Section Breakdown */}
          <h2 id="analytics-sections" className="text-xl font-bold text-slate-900 mb-4 scroll-mt-16">Section Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {orderedSections.map((sectionName) => {
              const totals = sectionTotals[sectionName];
              const colors = getSectionColors(sectionName);
              const wordPct = courseTotals.totalWordCount > 0
                ? Math.round((totals.totalWordCount / courseTotals.totalWordCount) * 100)
                : 0;

              return (
                <div key={sectionName} className={`bg-white rounded-xl border-[1.5px] border-slate-300 shadow-[0_4px_16px_rgba(15,23,42,0.06)] p-5 border-l-4 ${colors.border}`}>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{sectionName}</h3>
                  <div className="space-y-2 text-sm">
                    <Row label="Modules" value={fmt(totals.moduleCount)} />
                    <Row label="Lessons" value={fmt(totals.lessonCount)} />
                    <Row label="Words" value={fmt(totals.totalWordCount)} />
                    <Row label="Question Cards" value={fmt(totals.questionCardCount + totals.passageCardCount + totals.questionPassageCardCount)} />
                  </div>
                  <div className="mt-4">
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${colors.bar}`} style={{ width: `${wordPct}%` }} />
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{wordPct}% of total word count</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Unit Breakdown */}
          <h2 id="analytics-units" className="text-xl font-bold text-slate-900 mb-4 scroll-mt-16">Unit Breakdown</h2>
          <div className="bg-white rounded-xl border-[1.5px] border-slate-300 shadow-[0_4px_16px_rgba(15,23,42,0.06)] overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Unit</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Section</th>
                    <th className="px-4 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Modules</th>
                    <th className="px-4 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Lessons</th>
                    <th className="px-4 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Words</th>
                    <th className="px-4 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Q Cards</th>
                    <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider hidden xl:table-cell" style={{ width: '20%' }}>Distribution</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.unitMetrics.map((unit) => {
                    const colors = getSectionColors(unit.section);
                    const wordPct = courseTotals.totalWordCount > 0
                      ? Math.round((unit.totalWordCount / courseTotals.totalWordCount) * 100)
                      : 0;
                    return (
                      <tr key={unit.unit} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="px-4 py-3 text-sm font-medium text-slate-800">{unit.unit}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`${colors.badge} text-xs font-bold px-2 py-0.5 rounded-full`}>
                            {unit.section === 'Logical Reasoning' ? 'LR' : 'RC'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600 text-right font-mono">{unit.moduleCount}</td>
                        <td className="px-4 py-3 text-sm text-slate-600 text-right font-mono">{unit.lessonCount}</td>
                        <td className="px-4 py-3 text-sm text-slate-600 text-right font-mono">{fmt(unit.totalWordCount)}</td>
                        <td className="px-4 py-3 text-sm text-slate-600 text-right font-mono">{unit.questionCardCount + unit.passageCardCount + unit.questionPassageCardCount}</td>
                        <td className="px-4 py-3 hidden xl:table-cell">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                              <div className={`h-full rounded-full ${colors.bar}`} style={{ width: `${wordPct}%` }} />
                            </div>
                            <span className="text-xs text-slate-400 w-8 text-right">{wordPct}%</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 border-t border-slate-100 text-xs text-slate-400">
              {metrics.unitMetrics.length} units across {orderedSections.length} sections
            </div>
          </div>

          {/* Module Table */}
          <h2 id="analytics-modules" className="text-xl font-bold text-slate-900 mb-4 scroll-mt-16">Per-Module Details</h2>
          <div className="bg-white rounded-xl border-[1.5px] border-slate-300 shadow-[0_4px_16px_rgba(15,23,42,0.06)] overflow-hidden">
            {/* Filter pills */}
            <div className="flex items-center gap-2 p-4 border-b border-slate-100 flex-wrap">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Filter:</span>
              {filterOptions.map((label) => {
                const isActive = (label === 'All' && sectionFilter === null) || sectionFilter === label;
                return (
                  <button
                    key={label}
                    onClick={() => setSectionFilter(label === 'All' ? null : label)}
                    className={
                      isActive
                        ? 'px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white cursor-pointer'
                        : 'px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer'
                    }
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <SortableHeader label="Module" sortKey="title" currentKey={sortKey} dir={sortDir} onSort={handleSort} />
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Section</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Unit</th>
                    <SortableHeader label="Lessons" sortKey="lessonCount" currentKey={sortKey} dir={sortDir} onSort={handleSort} align="right" />
                    <SortableHeader label="Words" sortKey="totalWordCount" currentKey={sortKey} dir={sortDir} onSort={handleSort} align="right" />
                    <SortableHeader label="Q Cards" sortKey="questionCardCount" currentKey={sortKey} dir={sortDir} onSort={handleSort} align="right" />
                  </tr>
                </thead>
                <tbody>
                  {sortedModules.map((mod) => {
                    const colors = getSectionColors(mod.section);
                    return (
                      <tr
                        key={mod.moduleId}
                        onClick={() => navigate(`/module/${mod.moduleId}`)}
                        className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors cursor-pointer"
                      >
                        <td className="px-4 py-3 text-sm font-medium text-slate-800">{mod.title}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`${colors.badge} text-xs font-bold px-2 py-0.5 rounded-full`}>
                            {mod.category}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-500 hidden lg:table-cell">{mod.unit}</td>
                        <td className="px-4 py-3 text-sm text-slate-600 text-right font-mono">{mod.lessonCount}</td>
                        <td className="px-4 py-3 text-sm text-slate-600 text-right font-mono">{fmt(mod.totalWordCount)}</td>
                        <td className="px-4 py-3 text-sm text-slate-600 text-right font-mono">{mod.questionCardCount + mod.passageCardCount + mod.questionPassageCardCount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Table footer */}
            <div className="px-4 py-3 border-t border-slate-100 text-xs text-slate-400">
              Showing {sortedModules.length} of {metrics.modules.length} modules · Click a row to navigate
            </div>
          </div>

          {/* Lesson Breakdown */}
          <h2 id="analytics-lessons" className="text-xl font-bold text-slate-900 mb-4 mt-10 scroll-mt-16">Lesson Breakdown</h2>
          <div className="space-y-3">
            {sortedModules.map((mod) => (
              <LessonAccordion key={mod.moduleId} mod={mod} navigate={navigate} />
            ))}
          </div>
          <div className="mt-4 text-xs text-slate-400">
            {sortedModules.reduce((s, m) => s + m.lessons.length, 0)} lessons across {sortedModules.length} modules
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Sub-components ---

function SummaryCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-white rounded-xl border-[1.5px] border-slate-300 shadow-[0_4px_16px_rgba(15,23,42,0.06)] p-5">
      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</div>
      <div className="text-2xl font-extrabold text-slate-900">{value}</div>
      <div className="text-xs text-slate-500 mt-1">{sub}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-slate-500">{label}</span>
      <span className="font-bold text-slate-800">{value}</span>
    </div>
  );
}

function SortableHeader({
  label,
  sortKey,
  currentKey,
  dir,
  onSort,
  align = 'left',
}: {
  label: string;
  sortKey: SortKey;
  currentKey: SortKey;
  dir: 'asc' | 'desc';
  onSort: (key: SortKey) => void;
  align?: 'left' | 'right';
}) {
  const isActive = currentKey === sortKey;
  return (
    <th
      onClick={() => onSort(sortKey)}
      className={`px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-indigo-600 transition-colors select-none ${align === 'right' ? 'text-right' : 'text-left'}`}
    >
      <span className="inline-flex items-center gap-1">
        {label}
        {isActive && (dir === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
      </span>
    </th>
  );
}

function LessonAccordion({ mod, navigate }: { mod: ModuleMetrics; navigate: ReturnType<typeof useNavigate> }) {
  const [open, setOpen] = useState(false);
  const colors = getSectionColors(mod.section);
  const topBlockTypes = Object.entries(mod.blockTypeDistribution)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([type, count]) => `${type} (${count})`)
    .join(', ');

  return (
    <div className="bg-white rounded-xl border-[1.5px] border-slate-300 shadow-[0_4px_16px_rgba(15,23,42,0.06)] overflow-hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50/50 transition-colors cursor-pointer text-left"
      >
        <ChevronRight size={14} className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ${open ? 'rotate-90' : ''}`} />
        <span className="text-sm font-medium text-slate-800 flex-1">{mod.title}</span>
        <span className={`${colors.badge} text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0`}>{mod.category}</span>
        <span className="text-xs text-slate-400 flex-shrink-0 hidden sm:inline">{mod.lessonCount} lessons · {fmt(mod.totalWordCount)} words</span>
      </button>
      {open && (
        <div className="border-t border-slate-100">
          <div className="px-4 py-2 bg-slate-50/50 text-xs text-slate-400">
            <span className="font-medium text-slate-500">{mod.unit}</span>
            {topBlockTypes && <span className="ml-3">Top blocks: {topBlockTypes}</span>}
          </div>
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-bold text-slate-400 uppercase tracking-wider w-8">#</th>
                <th className="px-4 py-2 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Lesson</th>
                <th className="px-4 py-2 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Words</th>
                <th className="px-4 py-2 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Blocks</th>
                <th className="px-4 py-2 text-right text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Q</th>
                <th className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider hidden lg:table-cell" style={{ width: '25%' }}>Block Types</th>
              </tr>
            </thead>
            <tbody>
              {mod.lessons.map((lesson) => {
                const lessonBlocks = Object.entries(lesson.blockTypeDistribution)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 4)
                  .map(([type, count]) => `${type}:${count}`)
                  .join('  ');

                return (
                  <tr
                    key={lesson.lessonId}
                    onClick={() => navigate(`/module/${mod.moduleId}/lesson/${lesson.lessonId}`)}
                    className="border-b border-slate-50 hover:bg-indigo-50/30 transition-colors cursor-pointer"
                  >
                    <td className="px-4 py-2 text-xs text-slate-400 font-mono">{lesson.lessonId}</td>
                    <td className="px-4 py-2 text-sm text-slate-700">{lesson.title}</td>
                    <td className="px-4 py-2 text-sm text-slate-600 text-right font-mono">{fmt(lesson.wordCount)}</td>
                    <td className="px-4 py-2 text-sm text-slate-600 text-right font-mono">{lesson.blockCount}</td>
                    <td className="px-4 py-2 text-sm text-slate-600 text-right font-mono hidden sm:table-cell">{lesson.questionCardCount || '-'}</td>
                    <td className="px-4 py-2 text-xs text-slate-400 font-mono hidden lg:table-cell">{lessonBlocks}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
