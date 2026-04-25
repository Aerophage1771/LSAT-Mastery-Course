/*
 * DashboardBloombergTerminal -- "Financial Terminal" variant
 *
 * A high-density, information-dense dashboard styled after a Bloomberg terminal.
 * Near-black navy background, monospace type at every level, amber primary text,
 * emerald for positive/complete state, rose for incomplete/attention, cyan for
 * headers. Tabular layouts with sharp corners, zero rounded radii, ASCII-style
 * dividers, bracketed section codes like [LR] / [RC] / [ADV], and a mock
 * status-bar ticker at the very top. Module cards are dense grid rows with
 * inline metrics. Hover states flash-invert colors briefly.
 */

import React from 'react';
import { ModuleData } from '../../types';
import { Activity, ChevronRight, TrendingUp, Zap } from 'lucide-react';
import { ExportControls } from '../ExportControls';
import {
  generateUnitText, generateUnitRTF, generateUnitJSON, generateUnitCSV, generateUnitPDF,
  generateModuleText, generateModuleRTF, generateModuleJSON, generateModuleCSV, generateModulePDF,
  generateSectionText, generateSectionRTF, generateSectionJSON, generateSectionCSV, generateSectionPDF,
} from '../../utils/export';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface DashboardProps {
  modules: Array<{ id: number; title: string; category: string; description: string; unit: string; lessons?: ModuleData['lessons']; lessonCount?: number }>;
  fullModules?: ModuleData[];
  onSelectModule: (id: number) => void;
  getModuleProgress?: (lessons: { id: string }[]) => { completed: number; total: number; percent: number };
}

const asModule = (m: Record<string, unknown>): ModuleData =>
  ({ ...m, lessons: (m.lessons as ModuleData['lessons']) ?? [] }) as unknown as ModuleData;

/* ------------------------------------------------------------------ */
/*  Static section constant (identical to Dashboard.tsx)              */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  {
    title: 'Logical Reasoning',
    code: 'LR',
    description: 'Master the art of argument analysis, evaluation, and manipulation.',
    units: [
      { name: 'Unit 1: Identification', description: 'Recognize the fundamental building blocks of logical arguments.' },
      { name: 'Unit 2: Analysis', description: 'Deconstruct arguments to identify their structural patterns and flaws.' },
      { name: 'Unit 3: Evaluation', description: 'Assess the strength of arguments by identifying gaps and assumptions.' },
      { name: 'Unit 4: Principle', description: 'Apply abstract rules to specific scenarios and justify reasoning.' },
      { name: 'Unit 5: Inference', description: 'Derive logical conclusions strictly from the information provided.' },
      { name: 'Unit 6: Resolution', description: 'Explain paradoxes and reconcile conflicting information.' },
      { name: 'Unit 7: Conflict', description: 'Analyze dialogues to pinpoint agreements and disagreements.' },
      { name: 'Unit 8: Conditional Reasoning', description: 'Master the rigid, mechanical application of formal logic.' },
      { name: 'Unit 9: LSAT Math', description: 'Master the logical flaws hidden in quantitative arguments involving percentages, averages, and probabilities.' },
    ],
  },
  {
    title: 'Reading Comprehension',
    code: 'RC',
    description: 'Develop strategies for deconstructing complex passages and identifying underlying structures.',
    units: [
      { name: 'Unit 10: Summarizing the Passage', description: 'Capture the main idea and primary purpose of complex texts.' },
      { name: 'Unit 11: Analyzing the Components', description: 'Understand the function and meaning of specific text elements.' },
      { name: 'Unit 12: Identifying the Perspectives', description: 'Track authorial attitude and distinguish multiple viewpoints.' },
      { name: 'Unit 13: Extending the Reasoning', description: 'Apply passage logic to new contexts and draw valid inferences.' },
      { name: 'Unit 14: Sample Passages', description: 'Full breakdowns of sample passages with detailed question analysis.' },
      { name: 'Unit 15: Reference', description: 'Quick reference guides and cheat sheets for all question types.' },
    ],
  },
  {
    title: 'Advanced Passages',
    code: 'ADV',
    description: 'In-depth analysis of the most challenging passages and question types.',
    units: [
      { name: 'Unit 16: Advanced Passages', description: 'Explore complex themes in philosophy, science, and law.' },
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Mock ticker row                                                    */
/* ------------------------------------------------------------------ */

const TICKERS: Array<{ label: string; value: string; delta?: string; tone: 'up' | 'down' | 'flat' }> = [
  { label: 'PT AVG', value: '172', delta: '+3', tone: 'up' },
  { label: 'STREAK', value: '14D', tone: 'up' },
  { label: 'LR ACC', value: '81%', delta: '+2', tone: 'up' },
  { label: 'RC ACC', value: '74%', delta: '-1', tone: 'down' },
  { label: 'TIME/Q', value: '1:18', tone: 'flat' },
  { label: 'LESSONS', value: '142', delta: '+7', tone: 'up' },
  { label: 'SESSION', value: 'LIVE', tone: 'up' },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const DashboardBloombergTerminal: React.FC<DashboardProps> = ({ modules, fullModules, onSelectModule, getModuleProgress }) => {
  type ModuleLike = typeof modules[number];

  /* Group modules by unit */
  const modulesByUnit = modules.reduce((acc, module) => {
    if (!acc[module.unit]) acc[module.unit] = [];
    acc[module.unit].push(module);
    return acc;
  }, {} as Record<string, ModuleLike[]>);

  const moduleLookup = React.useMemo(
    () => new Map(fullModules?.map((m) => [m.id, m]) ?? []),
    [fullModules],
  );

  const resolveModule = (module: ModuleLike): ModuleData => {
    const full = moduleLookup.get(module.id);
    return full ?? asModule(module as Record<string, unknown>);
  };
  const resolveModules = (items: ModuleLike[]): ModuleData[] => items.map(resolveModule);

  /* Timestamp for the status bar */
  const now = new Date();
  const stamp = now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';

  /* Aggregate counts for header */
  const totalModules = modules.length;
  const totalLessons = modules.reduce((s, m) => s + (m.lessonCount ?? m.lessons?.length ?? 0), 0);

  return (
    <div className="min-h-screen bg-[#0C1220] text-amber-400 font-mono pb-24">
      {/* ── Status-bar ticker ─────────────────────────────────────── */}
      <div className="sticky top-0 z-40 border-b border-amber-400/30 bg-black/90 backdrop-blur-sm">
        <div className="flex items-center gap-0 px-4 py-1.5 text-[11px] overflow-x-auto whitespace-nowrap">
          <span className="text-cyan-400 font-bold mr-3 flex items-center gap-1.5">
            <Activity size={11} className="animate-pulse" />
            GT//TERMINAL
          </span>
          <span className="text-slate-500 mr-4">{stamp}</span>
          {TICKERS.map((t, i) => {
            const toneClass =
              t.tone === 'up' ? 'text-emerald-400' :
              t.tone === 'down' ? 'text-rose-400' :
              'text-slate-400';
            const arrow = t.tone === 'up' ? '▲' : t.tone === 'down' ? '▼' : '■';
            return (
              <React.Fragment key={t.label}>
                {i > 0 && <span className="text-amber-400/20 mx-3">│</span>}
                <span className="text-slate-400">{t.label}:</span>
                <span className="text-amber-300 font-bold ml-1.5">{t.value}</span>
                {t.delta && <span className={`ml-1.5 ${toneClass}`}>{arrow} {t.delta}</span>}
                {!t.delta && <span className={`ml-1.5 ${toneClass}`}>{arrow}</span>}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* ── Page header ───────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-4 pt-6">
        <div className="border border-amber-400/30 bg-black/40 px-4 py-3 mb-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="text-[10px] text-cyan-400 tracking-[0.3em] mb-1">&gt; LSAT.MASTERY.COURSE</div>
              <h1 className="text-2xl text-amber-300 font-bold tracking-tight">
                CURRICULUM TERMINAL <span className="text-slate-500">//</span> v4.23
              </h1>
              <p className="text-[11px] text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Comprehensive LSAT curriculum. Foundations -&gt; analysis -&gt; advanced reasoning. Select a module row to launch.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <div className="border border-amber-400/30 px-3 py-1.5">
                <div className="text-slate-500 text-[9px] tracking-widest">MODULES</div>
                <div className="text-amber-300 text-lg font-bold leading-none">{totalModules}</div>
              </div>
              <div className="border border-amber-400/30 px-3 py-1.5">
                <div className="text-slate-500 text-[9px] tracking-widest">LESSONS</div>
                <div className="text-amber-300 text-lg font-bold leading-none">{totalLessons}</div>
              </div>
              <div className="border border-emerald-400/40 px-3 py-1.5">
                <div className="text-slate-500 text-[9px] tracking-widest">STATUS</div>
                <div className="text-emerald-400 text-lg font-bold leading-none flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 bg-emerald-400 animate-pulse" />LIVE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Sections ────────────────────────────────────────────── */}
        <div className="space-y-10">
          {SECTIONS.map((section) => {
            const sectionModules = section.units.flatMap((u) => modulesByUnit[u.name] || []);
            if (sectionModules.length === 0) return null;

            const sectionLessons = sectionModules.reduce((s, m) => s + (m.lessonCount ?? m.lessons?.length ?? 0), 0);

            return (
              <section key={section.title} className="border border-amber-400/20">
                {/* Section header bar */}
                <div className="flex items-center justify-between gap-4 border-b border-amber-400/30 bg-amber-400/5 px-3 py-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-cyan-400 text-[11px] font-bold tracking-widest border border-cyan-400/50 px-1.5 py-0.5">
                      [{section.code}]
                    </span>
                    <h2 className="text-amber-300 text-sm font-bold tracking-tight truncate">
                      {section.title.toUpperCase()}
                    </h2>
                    <span className="text-slate-500 text-[10px] hidden md:inline">
                      · {sectionModules.length} MOD · {sectionLessons} LSN
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500 hidden lg:inline">EXPORT&gt;</span>
                    <div className="[&_*]:text-amber-300 [&_button:hover]:text-cyan-300">
                      <ExportControls
                        variant="minimal"
                        filename={`LSAT_${section.title.replace(/\s+/g, '_')}`}
                        onCopy={() => generateSectionText(section.title, resolveModules(sectionModules))}
                        onExportText={() => generateSectionText(section.title, resolveModules(sectionModules))}
                        onExportRTF={() => generateSectionRTF(section.title, resolveModules(sectionModules))}
                        onExportJSON={() => generateSectionJSON(section.title, resolveModules(sectionModules))}
                        onExportCSV={() => generateSectionCSV(section.title, resolveModules(sectionModules))}
                        onExportPDF={() => generateSectionPDF(section.title, resolveModules(sectionModules))}
                      />
                    </div>
                  </div>
                </div>

                {/* Section description strip */}
                <div className="px-3 py-1.5 text-[11px] text-slate-400 border-b border-amber-400/10 bg-black/30">
                  <span className="text-slate-600">&gt;&gt;</span> {section.description}
                </div>

                {/* Units */}
                <div className="divide-y divide-amber-400/10">
                  {section.units.map((unitObj) => {
                    const unitString = unitObj.name;
                    const unitModules = modulesByUnit[unitString];
                    if (!unitModules) return null;

                    const [unitNum, unitName] = unitString.split(': ');
                    const unitLessons = unitModules.reduce((s, m) => s + (m.lessonCount ?? m.lessons?.length ?? 0), 0);

                    return (
                      <div key={unitString} className="bg-black/20">
                        {/* Unit header row */}
                        <div className="flex items-center justify-between gap-3 px-3 py-2 bg-slate-950/80 border-b border-amber-400/10">
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            <span className="text-rose-400 text-[10px] font-bold tracking-widest">
                              {unitNum.toUpperCase().replace('UNIT ', 'U')}
                            </span>
                            <span className="text-amber-400/30">━━━</span>
                            <span className="text-amber-200 text-xs font-bold uppercase tracking-wide truncate">
                              {unitName}
                            </span>
                            <span className="text-slate-600 text-[10px] hidden md:inline">
                              · {unitModules.length}M/{unitLessons}L
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-500 hidden md:flex items-center gap-2">
                            <span className="hidden xl:inline max-w-md truncate text-slate-500 italic">
                              {unitObj.description}
                            </span>
                            <div className="[&_*]:text-amber-300/70 [&_button:hover]:text-cyan-300">
                              <ExportControls
                                variant="minimal"
                                filename={`LSAT_${unitString.replace(/[: ]/g, '_')}`}
                                onCopy={() => generateUnitText(unitString, resolveModules(unitModules))}
                                onExportText={() => generateUnitText(unitString, resolveModules(unitModules))}
                                onExportRTF={() => generateUnitRTF(unitString, resolveModules(unitModules))}
                                onExportJSON={() => generateUnitJSON(unitString, resolveModules(unitModules))}
                                onExportCSV={() => generateUnitCSV(unitString, resolveModules(unitModules))}
                                onExportPDF={() => generateUnitPDF(unitString, resolveModules(unitModules))}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Column header */}
                        <div className="hidden md:grid grid-cols-[64px_minmax(0,1fr)_minmax(0,1.8fr)_80px_140px_28px] gap-3 px-3 py-1.5 text-[9px] text-slate-600 tracking-widest border-b border-amber-400/5 bg-black/40">
                          <div>MOD#</div>
                          <div>TITLE</div>
                          <div>DESCRIPTION</div>
                          <div className="text-right">LSN</div>
                          <div>PROGRESS</div>
                          <div></div>
                        </div>

                        {/* Module rows */}
                        <div>
                          {unitModules.map((module) => {
                            const moduleData = resolveModule(module);
                            const lessonCount = (module as { lessonCount?: number }).lessonCount ?? module.lessons?.length ?? 0;
                            const prog =
                              getModuleProgress && module.lessons && module.lessons.length > 0
                                ? getModuleProgress(module.lessons)
                                : null;
                            const isComplete = prog && prog.percent === 100;
                            const hasStarted = prog && prog.completed > 0;

                            const progColor = isComplete
                              ? 'text-emerald-400'
                              : hasStarted
                              ? 'text-amber-300'
                              : 'text-rose-400';
                            const progLabel = isComplete
                              ? 'COMPLETE'
                              : hasStarted
                              ? `${prog!.percent}%`
                              : 'PENDING';

                            return (
                              <div
                                key={module.id}
                                onClick={() => onSelectModule(module.id)}
                                className="group grid grid-cols-[64px_minmax(0,1fr)_minmax(0,1.8fr)_80px_140px_28px] gap-3 px-3 py-2 items-center border-b border-amber-400/5 cursor-pointer hover:bg-amber-400 hover:text-black transition-none"
                              >
                                {/* ID */}
                                <div className="text-[11px] text-cyan-400 group-hover:text-black font-bold tracking-wide">
                                  M{String(module.id).padStart(3, '0')}
                                </div>

                                {/* Title */}
                                <div className="text-xs text-amber-200 group-hover:text-black font-bold truncate">
                                  {module.title}
                                </div>

                                {/* Description */}
                                <div className="text-[11px] text-slate-400 group-hover:text-black/80 truncate hidden md:block">
                                  {module.description}
                                </div>

                                {/* Lesson count */}
                                <div className="text-[11px] text-slate-400 group-hover:text-black text-right tabular-nums">
                                  {lessonCount}
                                </div>

                                {/* Progress */}
                                <div className="flex items-center gap-2">
                                  {prog && hasStarted ? (
                                    <>
                                      <div className="flex-1 h-1.5 bg-slate-800 group-hover:bg-black/30 border border-amber-400/20 group-hover:border-black/50">
                                        <div
                                          className={`h-full transition-all ${isComplete ? 'bg-emerald-400' : 'bg-amber-400 group-hover:bg-black'}`}
                                          style={{ width: `${prog.percent}%` }}
                                        />
                                      </div>
                                      <span className={`text-[10px] font-bold tabular-nums w-14 text-right group-hover:text-black ${progColor}`}>
                                        {progLabel}
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      <div className="flex-1 h-1.5 bg-slate-800 group-hover:bg-black/30 border border-rose-400/30 group-hover:border-black/50" />
                                      <span className="text-[10px] font-bold text-rose-400 group-hover:text-black tabular-nums w-14 text-right">
                                        {progLabel}
                                      </span>
                                    </>
                                  )}
                                </div>

                                {/* Row-end controls */}
                                <div className="flex items-center justify-end gap-1">
                                  <div
                                    onClick={(e) => e.stopPropagation()}
                                    className="opacity-60 group-hover:opacity-100 [&_*]:text-slate-500 group-hover:[&_*]:text-black [&_button:hover]:!text-cyan-600"
                                  >
                                    <ExportControls
                                      variant="minimal"
                                      filename={`LSAT_Module_${module.id}_${module.title.replace(/\s+/g, '_')}`}
                                      onCopy={() => generateModuleText(moduleData)}
                                      onExportText={() => generateModuleText(moduleData)}
                                      onExportRTF={() => generateModuleRTF(moduleData)}
                                      onExportJSON={() => generateModuleJSON(moduleData)}
                                      onExportCSV={() => generateModuleCSV(moduleData)}
                                      onExportPDF={() => generateModulePDF(moduleData)}
                                    />
                                  </div>
                                  <ChevronRight size={14} className="text-amber-400/50 group-hover:text-black" />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer ASCII rule */}
                <div className="px-3 py-1.5 text-[10px] text-amber-400/30 tracking-widest border-t border-amber-400/20 bg-black/40">
                  ━━━━━━━━━━ END [{section.code}] ━━━━━━━━━━
                </div>
              </section>
            );
          })}
        </div>

        {/* ── Footer ──────────────────────────────────────────────── */}
        <div className="mt-8 border border-amber-400/20 bg-black/40 px-3 py-2 flex items-center justify-between text-[10px] text-slate-500">
          <div className="flex items-center gap-3">
            <TrendingUp size={10} className="text-emerald-400" />
            <span className="text-amber-300">GT.LSAT.TERMINAL</span>
            <span>//</span>
            <span>{stamp}</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap size={10} className="text-cyan-400" />
            <span>F1=HELP · F2=SEARCH · ESC=BACK</span>
          </div>
        </div>
      </div>
    </div>
  );
};
