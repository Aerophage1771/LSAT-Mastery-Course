/*
 * DashboardY2KBubble -- "Y2K Bubble" variant
 *
 * Turn-of-the-millennium optimism cranked to 11: chrome gradients, bubblegum pink
 * and sky-blue palette, iridescent shimmers, and heavy rounded-everything shapes.
 * Module tiles read like iTunes-aqua capsules crossed with Tumblr chat bubbles --
 * glossy highlight, soft drop shadows, sparkle ornaments, and holographic
 * pink-to-cyan-to-lilac gradients on every accent. Loud, joyful, maximalist;
 * feels like Neopets circa 2002 met a Lisa Frank Trapper Keeper.
 */

import React from 'react';
import { ModuleData } from '../../types';
import {
  BookOpen,
  ChevronRight,
  PlayCircle,
  Sparkles,
  Star,
  Heart,
  Gem,
} from 'lucide-react';
import { ExportControls } from '../ExportControls';
import {
  generateUnitText,
  generateUnitRTF,
  generateUnitJSON,
  generateUnitCSV,
  generateUnitPDF,
  generateModuleText,
  generateModuleRTF,
  generateModuleJSON,
  generateModuleCSV,
  generateModulePDF,
  generateSectionText,
  generateSectionRTF,
  generateSectionJSON,
  generateSectionCSV,
  generateSectionPDF,
} from '../../utils/export';

/* ------------------------------------------------------------------ */
/*  Types + helpers (identical contract to Dashboard.tsx)              */
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

const asModule = (m: Record<string, unknown>): ModuleData =>
  ({ ...m, lessons: (m.lessons as ModuleData['lessons']) ?? [] }) as unknown as ModuleData;

/* ------------------------------------------------------------------ */
/*  Y2K palette per section                                            */
/* ------------------------------------------------------------------ */

type SectionKey = 'Logical Reasoning' | 'Reading Comprehension' | 'Advanced Passages';

const SECTION_STYLE: Record<
  SectionKey,
  {
    chipGrad: string;
    cardGrad: string;
    ringGrad: string;
    accent: string;
    emoji: React.ComponentType<{ size?: number; className?: string }>;
  }
> = {
  'Logical Reasoning': {
    chipGrad: 'from-pink-400 via-fuchsia-400 to-sky-400',
    cardGrad: 'from-pink-100 via-white to-sky-100',
    ringGrad: 'from-pink-300 via-fuchsia-300 to-sky-300',
    accent: 'text-fuchsia-600',
    emoji: Sparkles,
  },
  'Reading Comprehension': {
    chipGrad: 'from-cyan-400 via-sky-400 to-indigo-400',
    cardGrad: 'from-sky-100 via-white to-cyan-100',
    ringGrad: 'from-cyan-300 via-sky-300 to-indigo-300',
    accent: 'text-sky-600',
    emoji: Star,
  },
  'Advanced Passages': {
    chipGrad: 'from-purple-400 via-fuchsia-400 to-pink-400',
    cardGrad: 'from-purple-100 via-white to-pink-100',
    ringGrad: 'from-purple-300 via-fuchsia-300 to-pink-300',
    accent: 'text-purple-600',
    emoji: Gem,
  },
};

const getStyle = (title: string) =>
  SECTION_STYLE[title as SectionKey] ?? SECTION_STYLE['Logical Reasoning'];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const DashboardY2KBubble: React.FC<DashboardProps> = ({
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

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  return (
    <div
      className="max-w-7xl mx-auto animate-in fade-in duration-500 pb-24 relative"
      style={{
        fontFamily: '"Comic Sans MS", "Chalkboard SE", system-ui, sans-serif',
        backgroundImage:
          'radial-gradient(circle at 15% 20%, rgba(244,114,182,0.18) 0, transparent 40%), radial-gradient(circle at 85% 10%, rgba(125,211,252,0.2) 0, transparent 45%), radial-gradient(circle at 50% 90%, rgba(216,180,254,0.22) 0, transparent 50%)',
      }}
    >
      {/* ── Hero banner ──────────────────────────────────────────── */}
      <div className="relative mb-14 mt-4 px-6 py-10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(236,72,153,0.35)]">
        <div
          className="absolute inset-0 rounded-[2.5rem]"
          style={{
            background:
              'linear-gradient(135deg, #fbcfe8 0%, #f0abfc 25%, #c4b5fd 50%, #bae6fd 75%, #fbcfe8 100%)',
          }}
        />
        {/* glossy highlight */}
        <div
          className="absolute inset-x-4 top-2 h-1/3 rounded-[2rem] opacity-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.1) 100%)',
          }}
        />
        <div className="relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border-2 border-white shadow-sm">
            <Sparkles size={14} className="text-fuchsia-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-fuchsia-700">
              ~ Welcome Back, Superstar ~
            </span>
            <Star size={14} className="text-sky-500 animate-pulse" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight mb-4 drop-shadow-sm">
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #ec4899 0%, #a855f7 35%, #0ea5e9 70%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              LSAT Mastery!
            </span>{' '}
            <span className="inline-block">
              <Heart size={40} className="inline text-pink-500 fill-pink-400" />
            </span>
          </h1>
          <p className="text-lg text-purple-900/80 max-w-3xl font-semibold leading-relaxed">
            A super-cute curriculum glow-up -- from foundational logic to advanced reading
            strategies. Pick a bubble, pop it open, and get those big brain points!
          </p>
        </div>
      </div>

      {/* ── Sections ─────────────────────────────────────────────── */}
      <div className="space-y-20">
        {sections.map((section) => {
          const sectionModules = section.units.flatMap((u) => modulesByUnit[u.name] || []);
          if (sectionModules.length === 0) return null;

          const style = getStyle(section.title);
          const SectionIcon = style.emoji;

          return (
            <div key={section.title}>
              {/* Section header capsule */}
              <div className="mb-10">
                <div
                  className={`relative rounded-full p-[3px] bg-gradient-to-r ${style.chipGrad} shadow-[0_10px_30px_-10px_rgba(236,72,153,0.5)]`}
                >
                  <div className="rounded-full bg-white/90 backdrop-blur-sm px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${style.chipGrad} flex items-center justify-center shadow-inner ring-2 ring-white`}
                      >
                        <SectionIcon size={22} className="text-white drop-shadow" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                          {section.title}
                          <Sparkles size={18} className={`${style.accent} animate-pulse`} />
                        </h2>
                        <p className="text-sm text-slate-600 font-semibold mt-0.5">
                          {section.description}
                        </p>
                      </div>
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
              </div>

              {/* Units */}
              <div className="space-y-14">
                {section.units.map((unitObj) => {
                  const unitString = unitObj.name;
                  const unitModules = modulesByUnit[unitString];
                  if (!unitModules) return null;

                  const [unitNum, unitName] = unitString.split(': ');

                  return (
                    <div key={unitString}>
                      {/* Unit header */}
                      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
                        <div className="flex-1">
                          <div className="flex items-center flex-wrap gap-3 mb-2">
                            <div
                              className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-md bg-gradient-to-r ${style.chipGrad} ring-2 ring-white`}
                            >
                              ~ {unitNum} ~
                            </div>
                            <h3 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                              {unitName}
                              <Star size={16} className={`${style.accent}`} />
                            </h3>
                          </div>
                          <p className="text-slate-600 text-sm font-semibold ml-1">
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

                      {/* Module bubbles */}
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                        {unitModules.map((module) => {
                          const moduleData = resolveModule(module);
                          const lessonCount =
                            (module as { lessonCount?: number }).lessonCount ??
                            module.lessons?.length ??
                            0;
                          const prog =
                            getModuleProgress && module.lessons && module.lessons.length > 0
                              ? getModuleProgress(module.lessons)
                              : null;

                          return (
                            <div
                              key={module.id}
                              onClick={() => onSelectModule(module.id)}
                              className={`group relative rounded-[2rem] p-[3px] bg-gradient-to-br ${style.ringGrad} cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:rotate-[-0.5deg] shadow-[0_15px_35px_-15px_rgba(168,85,247,0.45)] hover:shadow-[0_20px_45px_-10px_rgba(236,72,153,0.55)]`}
                            >
                              {/* Inner bubble */}
                              <div
                                className={`relative h-full rounded-[1.85rem] p-6 flex flex-col overflow-hidden bg-gradient-to-br ${style.cardGrad}`}
                              >
                                {/* Glossy aqua highlight */}
                                <div
                                  className="absolute top-0 left-4 right-4 h-1/3 rounded-b-[3rem] pointer-events-none opacity-70"
                                  style={{
                                    background:
                                      'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.0) 100%)',
                                  }}
                                />
                                {/* Chat-bubble tail */}
                                <div
                                  className={`absolute -bottom-2 left-8 w-5 h-5 rotate-45 bg-gradient-to-br ${style.cardGrad} border-r-[3px] border-b-[3px] border-white/0`}
                                  style={{ filter: 'drop-shadow(0 2px 2px rgba(236,72,153,0.15))' }}
                                />

                                {/* Top row: module chip + export + sparkle */}
                                <div className="relative flex items-start justify-between mb-4 z-10">
                                  <span
                                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase text-white shadow-sm bg-gradient-to-r ${style.chipGrad} ring-2 ring-white`}
                                  >
                                    <Sparkles size={11} className="drop-shadow" />
                                    Module {module.id}
                                  </span>
                                  <div className="flex items-center gap-1.5">
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
                                    <span
                                      className={`text-slate-400 transition-all transform group-hover:translate-x-1 group-hover:scale-110 duration-300 ${style.accent}`}
                                    >
                                      <ChevronRight size={22} />
                                    </span>
                                  </div>
                                </div>

                                {/* Title */}
                                <h4
                                  className={`relative text-xl font-black text-slate-800 mb-3 leading-tight z-10 transition-colors ${style.accent}`}
                                >
                                  {module.title}
                                </h4>

                                {/* Description */}
                                <p className="relative text-sm text-slate-700 leading-relaxed mb-6 flex-1 font-medium z-10">
                                  {module.description}
                                </p>

                                {/* Footer strip: lesson count + progress bubble */}
                                <div className="relative flex items-center justify-between text-xs font-bold mt-auto pt-4 border-t-2 border-dashed border-white/80 z-10">
                                  <div className="flex items-center text-slate-700">
                                    <BookOpen size={14} className="mr-1.5" />
                                    <span>{lessonCount} Lessons</span>
                                  </div>

                                  {prog && prog.completed > 0 ? (
                                    <div className="flex items-center gap-2">
                                      <div className="w-20 h-2.5 rounded-full bg-white/90 overflow-hidden ring-1 ring-pink-200 shadow-inner">
                                        <div
                                          className="h-full rounded-full transition-all"
                                          style={{
                                            width: `${prog.percent}%`,
                                            background:
                                              'linear-gradient(90deg, #ec4899 0%, #a855f7 50%, #38bdf8 100%)',
                                          }}
                                        />
                                      </div>
                                      <span
                                        className="font-black text-[11px]"
                                        style={{
                                          backgroundImage:
                                            'linear-gradient(90deg, #ec4899 0%, #a855f7 50%, #0ea5e9 100%)',
                                          WebkitBackgroundClip: 'text',
                                          WebkitTextFillColor: 'transparent',
                                          backgroundClip: 'text',
                                        }}
                                      >
                                        {prog.percent}%
                                      </span>
                                    </div>
                                  ) : (
                                    <div
                                      className={`flex items-center gap-1 font-black ${style.accent} opacity-80 group-hover:opacity-100 transition-opacity`}
                                    >
                                      <PlayCircle size={14} />
                                      <span>Start!</span>
                                      <Sparkles size={10} className="animate-pulse" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
