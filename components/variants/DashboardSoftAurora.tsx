/**
 * DashboardSoftAurora -- "Soft Aurora Gradient" variant
 *
 * Dreamy, premium SaaS-marketing aesthetic reminiscent of Linear or Vercel landing pages.
 * Large blurred radial orbs in lilac, teal, and peach bleed into each other behind the
 * page, while cards float as translucent glass panes (bg-white/60 + backdrop-blur) with
 * hairline white borders. Section identity is expressed through soft multicolor gradient
 * chips (LR indigo→violet, RC emerald→teal, ADV rose→amber) and gradient-filled progress
 * bars. Typography leans thin for body and semibold for emphasis -- never black -- with
 * generous rounded-3xl corners and a gentle hover lift. Aspirational, airy, never stark.
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
/*  Props                                                              */
/* ------------------------------------------------------------------ */

interface DashboardProps {
  modules: Array<{ id: number; title: string; category: string; description: string; unit: string; lessons?: ModuleData['lessons']; lessonCount?: number }>;
  fullModules?: ModuleData[];
  onSelectModule: (id: number) => void;
  getModuleProgress?: (lessons: { id: string }[]) => { completed: number; total: number; percent: number };
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const asModule = (m: Record<string, unknown>): ModuleData =>
  ({ ...m, lessons: (m.lessons as ModuleData['lessons']) ?? [] }) as unknown as ModuleData;

type SectionKey = 'Logical Reasoning' | 'Reading Comprehension' | 'Advanced Passages';

interface SectionTheme {
  chipGradient: string;       // tag / chip fill
  chipRing: string;           // chip outer ring
  progressGradient: string;   // progress bar fill
  accentText: string;         // accent text color (hover)
  softWash: string;           // subtle hover glow behind card
  orbTint: string;            // section header orb tint
}

const SECTION_THEMES: Record<SectionKey, SectionTheme> = {
  'Logical Reasoning': {
    chipGradient: 'from-indigo-400 via-violet-400 to-purple-400',
    chipRing: 'ring-indigo-200/60',
    progressGradient: 'from-indigo-400 via-violet-400 to-purple-400',
    accentText: 'text-violet-600',
    softWash: 'from-indigo-200/40 via-violet-200/30 to-transparent',
    orbTint: 'from-indigo-300/50 via-violet-300/40 to-transparent',
  },
  'Reading Comprehension': {
    chipGradient: 'from-emerald-400 via-teal-400 to-cyan-400',
    chipRing: 'ring-emerald-200/60',
    progressGradient: 'from-emerald-400 via-teal-400 to-cyan-400',
    accentText: 'text-teal-600',
    softWash: 'from-emerald-200/40 via-teal-200/30 to-transparent',
    orbTint: 'from-emerald-300/50 via-teal-300/40 to-transparent',
  },
  'Advanced Passages': {
    chipGradient: 'from-rose-400 via-orange-400 to-amber-400',
    chipRing: 'ring-rose-200/60',
    progressGradient: 'from-rose-400 via-orange-400 to-amber-400',
    accentText: 'text-rose-600',
    softWash: 'from-rose-200/40 via-amber-200/30 to-transparent',
    orbTint: 'from-rose-300/50 via-amber-300/40 to-transparent',
  },
};

const getTheme = (title: string): SectionTheme =>
  SECTION_THEMES[title as SectionKey] ?? SECTION_THEMES['Logical Reasoning'];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const DashboardSoftAurora: React.FC<DashboardProps> = ({
  modules,
  fullModules,
  onSelectModule,
  getModuleProgress,
}) => {
  type ModuleLike = typeof modules[number];

  const modulesByUnit = modules.reduce((acc, module) => {
    if (!acc[module.unit]) acc[module.unit] = [];
    acc[module.unit].push(module);
    return acc;
  }, {} as Record<string, ModuleLike[]>);

  const sections = [
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

  const moduleLookup = React.useMemo(
    () => new Map(fullModules?.map((module) => [module.id, module]) ?? []),
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
    <div className="relative isolate min-h-screen overflow-hidden">
      {/* ── Aurora orbs (fixed, behind everything) ───────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-violet-300/60 via-fuchsia-200/40 to-transparent blur-3xl" />
        <div className="absolute top-[20%] -right-32 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-teal-300/55 via-cyan-200/35 to-transparent blur-3xl" />
        <div className="absolute top-[55%] left-[30%] h-[480px] w-[480px] rounded-full bg-gradient-to-br from-rose-200/55 via-amber-200/45 to-transparent blur-3xl" />
        <div className="absolute bottom-[-10%] right-[10%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-indigo-200/45 via-sky-200/35 to-transparent blur-3xl" />
        {/* Tiny noise / wash layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/60" />
      </div>

      <div className="relative max-w-7xl mx-auto animate-in fade-in duration-500 pb-28 px-4 sm:px-6 lg:px-8">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <header className="pt-14 sm:pt-20 pb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/50 ring-1 ring-black/[0.03] shadow-sm mb-6">
            <Sparkles size={13} className="text-violet-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              LSAT Mastery Curriculum
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.02] mb-6 max-w-4xl">
            A calmer path to a{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500 bg-clip-text text-transparent font-semibold">
              higher score
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-light text-slate-600 max-w-2xl leading-relaxed">
            A comprehensive curriculum progressing from foundational logic to advanced reading strategies --
            structured in three gentle arcs so you always know where you stand.
          </p>
        </header>

        {/* ── Sections ───────────────────────────────────────────── */}
        <div className="space-y-24">
          {sections.map((section) => {
            const sectionModules = section.units.flatMap((u) => modulesByUnit[u.name] || []);
            if (sectionModules.length === 0) return null;
            const theme = getTheme(section.title);

            return (
              <section key={section.title} className="relative">
                {/* Section-local orb tint */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-72 w-[80%] rounded-full bg-gradient-to-r ${theme.orbTint} blur-3xl -z-10`}
                />

                {/* Section header glass pane */}
                <div className="mb-12 rounded-3xl bg-white/55 backdrop-blur-sm border border-white/50 ring-1 ring-black/[0.03] shadow-sm px-6 sm:px-8 py-6">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
                    <div className="flex-1">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-white bg-gradient-to-r ${theme.chipGradient} shadow-sm mb-3`}>
                        {section.title === 'Logical Reasoning' ? 'Arc I'
                          : section.title === 'Reading Comprehension' ? 'Arc II' : 'Arc III'}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-2">
                        {section.title}
                      </h2>
                      <p className="text-slate-500 font-light leading-relaxed max-w-2xl">
                        {section.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
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

                {/* Units */}
                <div className="space-y-16">
                  {section.units.map((unitObj) => {
                    const unitString = unitObj.name;
                    const unitModules = modulesByUnit[unitString];
                    if (!unitModules) return null;

                    const [unitNum, unitName] = unitString.split(': ');

                    return (
                      <div key={unitString}>
                        {/* Unit header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] text-white bg-gradient-to-r ${theme.chipGradient} shadow-sm ring-2 ${theme.chipRing}`}>
                                {unitNum}
                              </span>
                              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                                {unitName}
                              </h3>
                            </div>
                            <p className="text-slate-500 font-light leading-relaxed ml-1 max-w-2xl">
                              {unitObj.description}
                            </p>
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

                        {/* Module cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                          {unitModules.map((module) => {
                            const moduleData = resolveModule(module);
                            const lessonCount = (module as { lessonCount?: number }).lessonCount ?? module.lessons?.length ?? 0;
                            const prog = getModuleProgress && module.lessons && module.lessons.length > 0
                              ? getModuleProgress(module.lessons)
                              : null;

                            return (
                              <div
                                key={module.id}
                                onClick={() => onSelectModule(module.id)}
                                className="group relative rounded-3xl bg-white/60 backdrop-blur-sm border border-white/50 ring-1 ring-black/[0.03] shadow-sm p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/75 hover:shadow-[0_18px_50px_-15px_rgba(79,70,229,0.22)]"
                              >
                                {/* Soft wash that brightens on hover */}
                                <div
                                  aria-hidden
                                  className={`pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${theme.softWash} opacity-60 group-hover:opacity-100 blur-2xl transition-opacity duration-500`}
                                />

                                {/* Top row: module chip + arrow */}
                                <div className="relative flex items-start justify-between mb-4">
                                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-white bg-gradient-to-r ${theme.chipGradient} shadow-sm`}>
                                    Module {module.id}
                                  </span>
                                  <div className="flex items-center gap-2">
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
                                    <span className={`text-slate-300 transition-all duration-300 group-hover:translate-x-1 ${theme.accentText.replace('text-', 'group-hover:text-')}`}>
                                      <ChevronRight size={18} />
                                    </span>
                                  </div>
                                </div>

                                {/* Title */}
                                <h4 className="relative text-lg font-semibold text-slate-900 tracking-tight mb-2.5 leading-snug">
                                  {module.title}
                                </h4>

                                {/* Description */}
                                <p className="relative text-sm font-light text-slate-600 leading-relaxed mb-6 line-clamp-3">
                                  {module.description}
                                </p>

                                {/* Footer row */}
                                <div className="relative flex items-center justify-between pt-4 border-t border-white/70 mt-auto">
                                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                                    <Book size={13} className="opacity-70" />
                                    <span>{lessonCount} lessons</span>
                                  </div>

                                  {prog && prog.completed > 0 ? (
                                    <div className="flex items-center gap-2">
                                      <div className="w-20 h-1.5 rounded-full bg-slate-200/70 overflow-hidden">
                                        <div
                                          className={`h-full rounded-full bg-gradient-to-r ${theme.progressGradient} transition-all duration-500`}
                                          style={{ width: `${prog.percent}%` }}
                                        />
                                      </div>
                                      <span className={`text-xs font-semibold ${theme.accentText}`}>{prog.percent}%</span>
                                    </div>
                                  ) : (
                                    <div className={`flex items-center gap-1.5 text-xs font-semibold opacity-70 group-hover:opacity-100 transition-opacity ${theme.accentText}`}>
                                      <PlayCircle size={13} />
                                      <span>Start</span>
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
