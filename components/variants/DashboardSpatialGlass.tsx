/**
 * DashboardSpatialGlass -- "Spatial Glass" variant (visionOS-inspired)
 *
 * Dashboard reimagined as floating translucent tiles suspended above a deep
 * charcoal spatial background. Ambient colored radial gradients simulate
 * environmental light. Module cards use heavy backdrop blur with a 1px
 * white highlight border, deep long-spread shadows for depth, and a subtle
 * lift-and-brighten on hover. Typography is a medium-weight grotesk in
 * off-white with muted secondary text. Chips glow softly via inset ring.
 * The experience is meant to feel like browsing a window pane inside Apple
 * Vision Pro -- content floats; chrome is minimal.
 */

import React from 'react';
import { ModuleData } from '../../types';
import { Book, ChevronRight, PlayCircle, Sparkles } from 'lucide-react';
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
/*  Section constant (identical structure to source Dashboard)         */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  {
    title: 'Logical Reasoning',
    description: 'Master the art of argument analysis, evaluation, and manipulation.',
    accent: 'from-indigo-400/60 via-violet-400/40 to-transparent',
    chipTint: 'text-indigo-200 ring-indigo-300/30 bg-indigo-400/10',
    glow: 'rgba(129,140,248,0.22)',
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
    accent: 'from-emerald-400/60 via-teal-400/40 to-transparent',
    chipTint: 'text-emerald-200 ring-emerald-300/30 bg-emerald-400/10',
    glow: 'rgba(52,211,153,0.22)',
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
    accent: 'from-rose-400/60 via-orange-400/40 to-transparent',
    chipTint: 'text-rose-200 ring-rose-300/30 bg-rose-400/10',
    glow: 'rgba(251,113,133,0.22)',
    units: [
      { name: 'Unit 16: Advanced Passages', description: 'Explore complex themes in philosophy, science, and law.' },
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Shared visual tokens                                               */
/* ------------------------------------------------------------------ */

const TILE_SURFACE =
  'relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl ' +
  'shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]';

const TILE_HOVER =
  'transition-all duration-300 ease-out hover:bg-white/[0.09] hover:border-white/20 ' +
  'hover:-translate-y-0.5 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.14)]';

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const DashboardSpatialGlass: React.FC<DashboardProps> = ({
  modules,
  fullModules,
  onSelectModule,
  getModuleProgress,
}) => {
  type ModuleLike = typeof modules[number];

  /* ---- Group modules by unit ------------------------------------- */
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

  /* ================================================================ */
  /*  Render                                                           */
  /* ================================================================ */

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white/90 -mx-4 sm:-mx-6 lg:-mx-8 -mt-6 pb-24 pt-10 px-4 sm:px-6 lg:px-8">
      {/* Ambient environmental light -- faint colored radial gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          background:
            'radial-gradient(900px 600px at 15% -10%, rgba(129,140,248,0.18), transparent 60%), ' +
            'radial-gradient(700px 500px at 85% 20%, rgba(52,211,153,0.13), transparent 60%), ' +
            'radial-gradient(800px 600px at 50% 110%, rgba(251,113,133,0.14), transparent 60%)',
        }}
      />
      {/* Faint noise / grain via subtle mask */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <header className="mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/60 ring-1 ring-inset ring-white/5 mb-5">
            <Sparkles size={12} className="text-white/70" />
            LSAT Mastery Curriculum
          </div>
          <h1
            className="text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] font-medium tracking-[-0.035em] leading-[1.02] text-white mb-4"
            style={{ textShadow: '0 2px 40px rgba(0,0,0,0.6)' }}
          >
            Float through the course.
          </h1>
          <p className="text-[15px] sm:text-base text-white/55 max-w-[620px] leading-[1.7]">
            A comprehensive curriculum progressing from foundational logic to advanced reading strategies -- rendered as a spatial canvas you can drift across.
          </p>
        </header>

        {/* ── Sections ─────────────────────────────────────────── */}
        <div className="space-y-20">
          {SECTIONS.map((section) => {
            const sectionModules = section.units.flatMap((u) => modulesByUnit[u.name] || []);
            if (sectionModules.length === 0) return null;

            return (
              <section key={section.title} className="relative">
                {/* Section header -- floats above content */}
                <div className="relative mb-10">
                  {/* Soft accent bar behind heading */}
                  <div
                    aria-hidden
                    className={`absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b ${section.accent} blur-[2px]`}
                  />
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pl-2">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40 mb-2">
                        Section
                      </div>
                      <h2
                        className="text-[1.8rem] sm:text-[2.1rem] font-medium tracking-[-0.028em] text-white leading-tight"
                        style={{ textShadow: `0 0 40px ${section.glow}` }}
                      >
                        {section.title}
                      </h2>
                      <p className="text-white/50 text-[14px] mt-2 max-w-[640px] leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl px-2 py-1.5 ring-1 ring-inset ring-white/5">
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

                {/* ── Units ──────────────────────────────────── */}
                <div className="space-y-14">
                  {section.units.map((unitObj) => {
                    const unitString = unitObj.name;
                    const unitModules = modulesByUnit[unitString];
                    if (!unitModules) return null;

                    const [unitNum, unitName] = unitString.split(': ');

                    return (
                      <div key={unitString}>
                        {/* Unit header tile */}
                        <div className={`${TILE_SURFACE} mb-6 px-5 py-4`}>
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-start gap-4 flex-1 min-w-0">
                              <span
                                className={`inline-flex items-center justify-center flex-shrink-0 rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ring-1 ring-inset ${section.chipTint}`}
                              >
                                {unitNum}
                              </span>
                              <div className="min-w-0">
                                <h3 className="text-[1.05rem] sm:text-[1.15rem] font-medium tracking-[-0.015em] text-white truncate">
                                  {unitName}
                                </h3>
                                <p className="text-white/45 text-[12.5px] mt-0.5 leading-relaxed">
                                  {unitObj.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex-shrink-0">
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

                        {/* ── Module grid ─────────────────── */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                          {unitModules.map((module) => {
                            const moduleData = resolveModule(module);
                            const prog =
                              getModuleProgress && module.lessons && module.lessons.length > 0
                                ? getModuleProgress(module.lessons)
                                : null;
                            const lessonCount =
                              (module as { lessonCount?: number }).lessonCount ?? module.lessons?.length ?? 0;

                            return (
                              <div
                                key={module.id}
                                onClick={() => onSelectModule(module.id)}
                                className={`${TILE_SURFACE} ${TILE_HOVER} group cursor-pointer flex flex-col p-6`}
                              >
                                {/* Ambient glow accent -- positioned top-right */}
                                <div
                                  aria-hidden
                                  className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                                  style={{ backgroundColor: section.glow }}
                                />

                                {/* Top row: module chip + export + chevron */}
                                <div className="relative flex items-start justify-between mb-5">
                                  <span
                                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ring-1 ring-inset ${section.chipTint}`}
                                  >
                                    Module {module.id}
                                  </span>
                                  <div className="flex items-center gap-1.5">
                                    <div className="opacity-60 group-hover:opacity-100 transition-opacity">
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
                                    <span className="text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all duration-300">
                                      <ChevronRight size={18} strokeWidth={1.75} />
                                    </span>
                                  </div>
                                </div>

                                {/* Title */}
                                <h4 className="relative text-[1.05rem] sm:text-[1.1rem] font-medium tracking-[-0.015em] leading-snug text-white mb-2.5">
                                  {module.title}
                                </h4>

                                {/* Description */}
                                <p className="relative text-[13px] leading-[1.65] text-white/55 mb-6 flex-1">
                                  {module.description}
                                </p>

                                {/* Footer row */}
                                <div className="relative flex items-center justify-between pt-4 border-t border-white/[0.07] text-[12px]">
                                  <div className="flex items-center gap-1.5 text-white/45">
                                    <Book size={12} strokeWidth={1.75} />
                                    <span>{lessonCount} Lessons</span>
                                  </div>

                                  {prog && prog.completed > 0 ? (
                                    <div className="flex items-center gap-2.5">
                                      <div className="relative w-20 h-[3px] rounded-full bg-white/10 overflow-hidden">
                                        <div
                                          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-300 to-teal-300"
                                          style={{
                                            width: `${prog.percent}%`,
                                            boxShadow: '0 0 10px rgba(110,231,183,0.6)',
                                          }}
                                        />
                                      </div>
                                      <span className="font-semibold text-emerald-200 tabular-nums">
                                        {prog.percent}%
                                      </span>
                                    </div>
                                  ) : (
                                    <div className="flex items-center gap-1.5 text-white/40 group-hover:text-white/90 transition-colors">
                                      <PlayCircle size={13} strokeWidth={1.75} />
                                      <span className="font-medium">Start</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};
