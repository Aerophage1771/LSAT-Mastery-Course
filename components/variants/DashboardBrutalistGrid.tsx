/*
 * DashboardBrutalistGrid -- "Brutalist Card Grid" variant
 *
 * Hard edges, zero radius, heavy 3px black borders, and a stark black /
 * off-white palette broken up by one punchy accent (electric yellow
 * #FFEE00). Cards sit on solid offset "shadow" blocks -- no CSS blur,
 * no gradients, no soft shadows. Module IDs and lesson counts are blown
 * up in a monospace display face, section headers are uppercase slab
 * with heavy underscoring, and the grid gaps are razor-tight. Think
 * Barbara Kruger meets Swiss modernist graphic design.
 */

import React from 'react';
import { ModuleData } from '../../types';
import { ArrowUpRight, BookOpen } from 'lucide-react';
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
  modules: Array<{
    id: number;
    title: string;
    category: string;
    description: string;
    unit: string;
    lessons?: ModuleData['lessons'];
    lessonCount?: number;
  }>;
  fullModules?: ModuleData[];
  onSelectModule: (id: number) => void;
  getModuleProgress?: (lessons: { id: string }[]) => {
    completed: number;
    total: number;
    percent: number;
  };
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const ACCENT = '#FFEE00';
const INK = '#111111';
const PAPER = '#F4F1EA';

const asModule = (m: Record<string, unknown>): ModuleData =>
  ({ ...m, lessons: (m.lessons as ModuleData['lessons']) ?? [] }) as unknown as ModuleData;

/* ------------------------------------------------------------------ */
/*  Static sections (identical shape to source)                        */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  {
    title: 'Logical Reasoning',
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
    description: 'In-depth analysis of the most challenging passages and question types.',
    units: [
      { name: 'Unit 16: Advanced Passages', description: 'Explore complex themes in philosophy, science, and law.' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const DashboardBrutalistGrid: React.FC<DashboardProps> = ({
  modules,
  fullModules,
  onSelectModule,
  getModuleProgress,
}) => {
  type ModuleLike = typeof modules[number];

  /* ---- Group modules by unit name (same logic as source) --------- */
  const modulesByUnit = modules.reduce((acc, module) => {
    if (!acc[module.unit]) acc[module.unit] = [];
    acc[module.unit].push(module);
    return acc;
  }, {} as Record<string, ModuleLike[]>);

  /* ---- Resolve full module data for export helpers --------------- */
  const moduleLookup = React.useMemo(
    () => new Map(fullModules?.map((m) => [m.id, m]) ?? []),
    [fullModules],
  );
  const resolveModule = (module: ModuleLike): ModuleData => {
    const full = moduleLookup.get(module.id);
    return full ?? asModule(module as Record<string, unknown>);
  };
  const resolveModules = (items: ModuleLike[]): ModuleData[] => items.map(resolveModule);

  /* ---- Aggregate counts for the masthead ------------------------- */
  const totalModules = modules.length;
  const totalLessons = modules.reduce(
    (sum, m) => sum + ((m as { lessonCount?: number }).lessonCount ?? m.lessons?.length ?? 0),
    0,
  );
  const totalUnits = Object.keys(modulesByUnit).length;

  /* ================================================================ */
  /*  Render                                                           */
  /* ================================================================ */

  return (
    <div
      className="max-w-7xl mx-auto pb-24 font-mono"
      style={{ backgroundColor: PAPER, color: INK }}
    >
      {/* ── MASTHEAD ─────────────────────────────────────────────── */}
      <header className="relative mb-16 border-[3px] border-black">
        {/* Accent slab behind the masthead */}
        <div
          className="absolute -top-3 -left-3 w-full h-full -z-0"
          style={{ backgroundColor: ACCENT }}
        />
        <div className="relative z-10 bg-white border-b-[3px] border-black">
          <div className="px-6 sm:px-10 py-8 sm:py-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-3 w-3" style={{ backgroundColor: INK }} />
              <span className="text-[11px] font-black uppercase tracking-[0.4em]">
                GT // LSAT MASTERY // INDEX 001
              </span>
            </div>
            <h1
              className="font-black uppercase leading-[0.85] tracking-tight mb-5"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 5.25rem)',
                fontFamily: 'Archivo Black, Impact, system-ui, sans-serif',
              }}
            >
              LSAT
              <br />
              MASTERY.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed uppercase tracking-wider border-l-[3px] border-black pl-4">
              A comprehensive curriculum. Foundational logic. Advanced reading.
              No filler. No fluff. Ship the score.
            </p>
          </div>
          {/* Stat strip: raw numbers, huge */}
          <div className="grid grid-cols-3 border-t-[3px] border-black">
            <StatCell label="SECTIONS" value="03" />
            <StatCell label="UNITS" value={String(totalUnits).padStart(2, '0')} bordered />
            <StatCell label="MODULES" value={String(totalModules).padStart(2, '0')} />
          </div>
          <div
            className="flex items-center justify-between px-6 sm:px-10 py-3 border-t-[3px] border-black"
            style={{ backgroundColor: INK, color: ACCENT }}
          >
            <span className="text-[11px] font-black uppercase tracking-[0.35em]">
              TOTAL_LESSONS
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.35em]">
              {totalLessons} · READY
            </span>
          </div>
        </div>
      </header>

      {/* ── SECTIONS ─────────────────────────────────────────────── */}
      <div className="space-y-20">
        {SECTIONS.map((section, sIdx) => {
          const sectionModules = section.units.flatMap((u) => modulesByUnit[u.name] || []);
          if (sectionModules.length === 0) return null;
          const sectionIndex = String(sIdx + 1).padStart(2, '0');

          return (
            <section key={section.title}>
              {/* Section header: huge index + slab title + accent bar */}
              <div className="mb-10">
                <div className="flex items-stretch gap-0 border-[3px] border-black">
                  <div
                    className="flex items-center justify-center px-5 sm:px-8 text-5xl sm:text-6xl font-black border-r-[3px] border-black"
                    style={{
                      backgroundColor: INK,
                      color: ACCENT,
                      fontFamily: 'Archivo Black, Impact, system-ui, sans-serif',
                    }}
                  >
                    §{sectionIndex}
                  </div>
                  <div className="flex-1 bg-white px-5 sm:px-8 py-5 flex flex-col justify-center">
                    <h2
                      className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-none"
                      style={{ fontFamily: 'Archivo Black, Impact, system-ui, sans-serif' }}
                    >
                      {section.title}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm uppercase tracking-wider text-black/70">
                      {section.description}
                    </p>
                  </div>
                  <div
                    className="hidden sm:flex items-center justify-center px-4 border-l-[3px] border-black"
                    style={{ backgroundColor: ACCENT }}
                  >
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

              {/* Units ------------------------------------------------ */}
              <div className="space-y-14">
                {section.units.map((unitObj) => {
                  const unitModules = modulesByUnit[unitObj.name];
                  if (!unitModules) return null;
                  const [unitNum, unitName] = unitObj.name.split(': ');
                  const unitCode = unitNum.replace(/\D/g, '').padStart(2, '0');

                  return (
                    <div key={unitObj.name}>
                      {/* Unit header -- tape-label style */}
                      <div className="flex items-stretch border-[3px] border-black mb-4">
                        <div
                          className="px-4 py-3 border-r-[3px] border-black flex items-center text-xs font-black tracking-[0.25em]"
                          style={{ backgroundColor: ACCENT }}
                        >
                          U/{unitCode}
                        </div>
                        <div className="flex-1 bg-white px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <div className="text-sm sm:text-base font-black uppercase tracking-tight leading-tight">
                              {unitName}
                            </div>
                            <div className="text-[11px] uppercase tracking-wider text-black/60 mt-0.5">
                              {unitObj.description}
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.25em]">
                            <span>{unitModules.length} MOD</span>
                            <span className="inline-block w-px h-3 bg-black" />
                            <ExportControls
                              variant="minimal"
                              filename={`LSAT_${unitObj.name.replace(/[: ]/g, '_')}`}
                              onCopy={() => generateUnitText(unitObj.name, resolveModules(unitModules))}
                              onExportText={() => generateUnitText(unitObj.name, resolveModules(unitModules))}
                              onExportRTF={() => generateUnitRTF(unitObj.name, resolveModules(unitModules))}
                              onExportJSON={() => generateUnitJSON(unitObj.name, resolveModules(unitModules))}
                              onExportCSV={() => generateUnitCSV(unitObj.name, resolveModules(unitModules))}
                              onExportPDF={() => generateUnitPDF(unitObj.name, resolveModules(unitModules))}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Module grid -- tight gaps, stacked shadow blocks */}
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {unitModules.map((module) => (
                          <ModuleCard
                            key={module.id}
                            module={module}
                            moduleData={resolveModule(module)}
                            onSelect={() => onSelectModule(module.id)}
                            getModuleProgress={getModuleProgress}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* ── FOOTER STAMP ─────────────────────────────────────────── */}
      <div
        className="mt-20 border-[3px] border-black flex items-center justify-between px-6 py-3 text-[11px] font-black uppercase tracking-[0.35em]"
        style={{ backgroundColor: INK, color: ACCENT }}
      >
        <span>END OF INDEX</span>
        <span>GT // 2026</span>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

const StatCell: React.FC<{ label: string; value: string; bordered?: boolean }> = ({
  label,
  value,
  bordered,
}) => (
  <div
    className={`px-5 sm:px-10 py-5 bg-white ${
      bordered ? 'border-x-[3px] border-black' : ''
    }`}
  >
    <div
      className="text-4xl sm:text-5xl font-black leading-none"
      style={{ fontFamily: 'Archivo Black, Impact, system-ui, sans-serif' }}
    >
      {value}
    </div>
    <div className="mt-1 text-[10px] font-black uppercase tracking-[0.3em]">
      {label}
    </div>
  </div>
);

interface ModuleCardProps {
  module: {
    id: number;
    title: string;
    description: string;
    lessons?: ModuleData['lessons'];
    lessonCount?: number;
  };
  moduleData: ModuleData;
  onSelect: () => void;
  getModuleProgress?: (lessons: { id: string }[]) => {
    completed: number;
    total: number;
    percent: number;
  };
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  moduleData,
  onSelect,
  getModuleProgress,
}) => {
  const lessonCount =
    (module as { lessonCount?: number }).lessonCount ?? module.lessons?.length ?? 0;
  const idLabel = String(module.id).padStart(2, '0');

  const progress =
    getModuleProgress && module.lessons && module.lessons.length > 0
      ? getModuleProgress(module.lessons)
      : null;

  return (
    <div className="relative group">
      {/* Solid offset shadow block -- no CSS blur, just a black rectangle */}
      <div
        className="absolute top-1.5 left-1.5 w-full h-full -z-0 transition-transform duration-150 group-hover:translate-x-0 group-hover:translate-y-0"
        style={{ backgroundColor: INK }}
      />

      <button
        type="button"
        onClick={onSelect}
        className="relative z-10 w-full text-left bg-white border-[3px] border-black flex flex-col transition-transform duration-150 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-0"
      >
        {/* Top strip: giant module number + arrow */}
        <div className="flex items-stretch border-b-[3px] border-black">
          <div
            className="flex items-baseline gap-1 px-4 py-3 border-r-[3px] border-black flex-1"
            style={{ backgroundColor: ACCENT }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              MOD
            </span>
            <span
              className="text-3xl font-black leading-none"
              style={{ fontFamily: 'Archivo Black, Impact, system-ui, sans-serif' }}
            >
              {idLabel}
            </span>
          </div>
          <div className="flex items-center justify-center px-3 bg-white">
            <ArrowUpRight
              size={22}
              strokeWidth={3}
              className="transition-transform duration-150 group-hover:rotate-12"
            />
          </div>
        </div>

        {/* Body: title + description */}
        <div className="px-4 py-5 flex-1 flex flex-col">
          <h4
            className="text-lg font-black uppercase leading-[1.05] tracking-tight mb-2"
            style={{ fontFamily: 'Archivo Black, Impact, system-ui, sans-serif' }}
          >
            {module.title}
          </h4>
          <p className="text-[12px] leading-relaxed text-black/75 flex-1 line-clamp-3">
            {module.description}
          </p>
        </div>

        {/* Footer: lesson count block + progress / export */}
        <div className="flex items-stretch border-t-[3px] border-black">
          <div className="flex items-center gap-2 px-4 py-3 border-r-[3px] border-black bg-white">
            <BookOpen size={14} strokeWidth={3} />
            <span
              className="text-xl font-black leading-none"
              style={{ fontFamily: 'Archivo Black, Impact, system-ui, sans-serif' }}
            >
              {String(lessonCount).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              LSN
            </span>
          </div>

          <div className="flex-1 flex items-center px-4 py-3 bg-white">
            {progress && progress.completed > 0 ? (
              <div className="w-full flex items-center gap-2">
                <div className="flex-1 h-3 border-[2px] border-black relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0"
                    style={{
                      width: `${progress.percent}%`,
                      backgroundColor: INK,
                    }}
                  />
                </div>
                <span className="text-[11px] font-black tracking-wider">
                  {progress.percent}%
                </span>
              </div>
            ) : (
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                ▸ START
              </span>
            )}
          </div>

          {/* Export control slot -- pinned to the footer right edge */}
          <div
            className="flex items-center justify-center px-3 border-l-[3px] border-black"
            style={{ backgroundColor: ACCENT }}
            onClick={(e) => e.stopPropagation()}
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
        </div>
      </button>
    </div>
  );
};
