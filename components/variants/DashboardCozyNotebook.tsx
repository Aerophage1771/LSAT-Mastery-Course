/*
 * DashboardCozyNotebook -- "Cozy Notebook" variant
 *
 * A warm, inviting "student's personal study journal" aesthetic. The page feels
 * like a well-loved paper notebook: parchment-cream background with faint ruled
 * lines, dusty-pink washi-tape ribbons behind section titles (slightly rotated),
 * pastel sticker chips for each unit label, and index-card-styled module tiles
 * with dog-eared corners, off-white paper, and subtle rotations.
 * Typography leans on an italic serif for display text (paired with a friendly
 * handwritten-feel cursive utility) over a palette of warm creams, dusty pinks,
 * muted greens, and pencil grays. Each card carries a small "last visited"
 * annotation in the margin to reinforce the journal feel.
 */

import React from 'react';
import { ModuleData } from '../../types';
import { BookOpen, ChevronRight, PlayCircle, Bookmark, Feather } from 'lucide-react';
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

const asModule = (m: Record<string, unknown>): ModuleData =>
  ({ ...m, lessons: (m.lessons as ModuleData['lessons']) ?? [] }) as unknown as ModuleData;

/* ------------------------------------------------------------------ */
/*  Palette per section -- warm, muted, paper-friendly                 */
/* ------------------------------------------------------------------ */

type Palette = {
  tape: string;         // washi tape color
  tapeEdge: string;     // tape border
  sticker: string;      // unit chip bg
  stickerText: string;  // unit chip text
  stickerRing: string;  // unit chip border
  accent: string;       // pencil underline + progress
  softTint: string;     // card tint wash
};

const sectionPalette: Record<string, Palette> = {
  'Logical Reasoning': {
    tape: 'bg-rose-200/70',
    tapeEdge: 'border-rose-300/60',
    sticker: 'bg-rose-100',
    stickerText: 'text-rose-800',
    stickerRing: 'ring-rose-200',
    accent: 'bg-rose-400',
    softTint: 'bg-rose-50/40',
  },
  'Reading Comprehension': {
    tape: 'bg-emerald-200/70',
    tapeEdge: 'border-emerald-300/60',
    sticker: 'bg-emerald-100',
    stickerText: 'text-emerald-800',
    stickerRing: 'ring-emerald-200',
    accent: 'bg-emerald-500',
    softTint: 'bg-emerald-50/40',
  },
  'Advanced Passages': {
    tape: 'bg-amber-200/70',
    tapeEdge: 'border-amber-300/60',
    sticker: 'bg-amber-100',
    stickerText: 'text-amber-900',
    stickerRing: 'ring-amber-200',
    accent: 'bg-amber-500',
    softTint: 'bg-amber-50/40',
  },
};

const defaultPalette: Palette = {
  tape: 'bg-stone-200/70',
  tapeEdge: 'border-stone-300/60',
  sticker: 'bg-stone-100',
  stickerText: 'text-stone-800',
  stickerRing: 'ring-stone-200',
  accent: 'bg-stone-400',
  softTint: 'bg-stone-50/40',
};

/* Gently rotate every Nth card to feel hand-placed */
const cardRotation = (i: number): string => {
  const rots = ['-rotate-[0.6deg]', 'rotate-[0.4deg]', '-rotate-[0.2deg]', 'rotate-[0.7deg]'];
  return rots[i % rots.length];
};

/* Cute margin annotations -- rotate through for variety */
const marginNotes = [
  'visited tues.',
  'return here soon',
  're-read intro',
  'skim first',
  'quiz ready',
  'ask about Q4',
  'highlight pg.2',
  'saved for later',
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const DashboardCozyNotebook: React.FC<DashboardProps> = ({
  modules,
  fullModules,
  onSelectModule,
  getModuleProgress,
}) => {
  type ModuleLike = typeof modules[number];

  /* ---- Group modules by unit --------------------------------------- */
  const modulesByUnit = modules.reduce((acc, module) => {
    if (!acc[module.unit]) acc[module.unit] = [];
    acc[module.unit].push(module);
    return acc;
  }, {} as Record<string, ModuleLike[]>);

  /* ---- Identical three-section constant ---------------------------- */
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

  /* ---- Module resolution helpers ---------------------------------- */
  const moduleLookup = React.useMemo(
    () => new Map(fullModules?.map((m) => [m.id, m]) ?? []),
    [fullModules],
  );

  const resolveModule = (module: ModuleLike): ModuleData => {
    const full = moduleLookup.get(module.id);
    return full ?? asModule(module as Record<string, unknown>);
  };

  const resolveModules = (items: ModuleLike[]): ModuleData[] => items.map(resolveModule);

  /* Faint ruled-line background -- drawn once as an inline style */
  const ruledPaper: React.CSSProperties = {
    backgroundImage:
      'repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, rgba(180, 140, 110, 0.10) 31px, rgba(180, 140, 110, 0.10) 32px)',
  };

  /* Dog-eared corner via clip-path -- removes a triangle from top-right */
  const dogEarClip: React.CSSProperties = {
    clipPath:
      'polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)',
  };

  return (
    <div
      className="max-w-7xl mx-auto animate-in fade-in duration-500 pb-24 bg-amber-50/60 rounded-[28px] border border-amber-200/60 shadow-[0_2px_30px_rgba(120,80,40,0.05)] px-6 sm:px-10 py-10"
      style={ruledPaper}
    >
      {/* ── Journal Header ───────────────────────────────────────── */}
      <div className="mb-14 relative">
        {/* Washi tape strip behind the title */}
        <div
          className="absolute -top-2 left-0 h-6 w-56 bg-rose-200/70 border-y border-rose-300/60 -rotate-2 z-0"
          aria-hidden
        />
        <div className="relative z-10 flex items-start gap-3">
          <Feather className="mt-3 text-stone-500" size={28} strokeWidth={1.25} />
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-stone-500 mb-2 font-medium">
              my study journal
            </p>
            <h1
              className="text-4xl sm:text-5xl text-stone-900 tracking-tight mb-3 italic"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              LSAT Mastery Course
            </h1>
            <p className="text-lg text-stone-600 max-w-3xl leading-relaxed italic font-light">
              A comprehensive curriculum progressing from foundational logic to advanced reading strategies.
              Flip through the chapters and pick up where you left off.
            </p>
          </div>
        </div>
      </div>

      {/* ── Sections ─────────────────────────────────────────────── */}
      <div className="space-y-20">
        {sections.map((section) => {
          const sectionModules = section.units.flatMap((u) => modulesByUnit[u.name] || []);
          if (sectionModules.length === 0) return null;

          const palette = sectionPalette[section.title] ?? defaultPalette;

          return (
            <div key={section.title}>
              {/* Section header with washi-tape banner */}
              <div className="mb-10 relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="flex-1 relative">
                    {/* Washi-tape ribbon behind section title */}
                    <div
                      className={`absolute -top-3 -left-4 h-9 w-[min(420px,85%)] ${palette.tape} border-y ${palette.tapeEdge} -rotate-[1.5deg] z-0 shadow-[0_1px_2px_rgba(120,80,40,0.08)]`}
                      aria-hidden
                    />
                    <h2
                      className="relative z-10 text-3xl sm:text-4xl font-semibold italic text-stone-900 tracking-tight"
                      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                    >
                      {section.title}
                    </h2>
                    <p className="text-stone-600 mt-3 italic font-light max-w-2xl leading-relaxed">
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
                {/* Hand-drawn underline -- wavy via repeating gradient */}
                <div
                  className="mt-5 h-[3px] w-full opacity-70"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(90deg, rgba(120,80,60,0.35) 0 6px, transparent 6px 12px)',
                  }}
                  aria-hidden
                />
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
                      {/* Unit header -- sticker chip + handwritten title */}
                      <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            {/* Sticker-style unit chip */}
                            <span
                              className={`
                                inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[12px] font-semibold
                                ${palette.sticker} ${palette.stickerText} ring-2 ${palette.stickerRing}
                                shadow-[0_1px_2px_rgba(120,80,40,0.08)]
                                -rotate-[1.5deg]
                              `}
                            >
                              <Bookmark size={12} strokeWidth={2} />
                              {unitNum.toUpperCase()}
                            </span>
                            <h3
                              className="text-2xl text-stone-900 italic font-medium"
                              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                            >
                              {unitName}
                            </h3>
                          </div>
                          <p className="text-stone-600 text-[15px] ml-1 italic font-light leading-relaxed max-w-2xl">
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

                      {/* Module "index cards" grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                        {unitModules.map((module, idx) => {
                          const moduleData = resolveModule(module);
                          const rotation = cardRotation(idx);
                          const marginNote = marginNotes[(module.id + idx) % marginNotes.length];
                          const progress = getModuleProgress && module.lessons && module.lessons.length > 0
                            ? getModuleProgress(module.lessons)
                            : null;

                          return (
                            <div
                              key={module.id}
                              onClick={() => onSelectModule(module.id)}
                              className={`
                                relative group cursor-pointer ${rotation}
                                transition-transform duration-300
                                hover:rotate-0 hover:-translate-y-1
                              `}
                            >
                              {/* Margin annotation -- tucked to the left */}
                              <div
                                className="absolute -left-2 top-3 text-[10px] text-stone-400 italic font-light hidden lg:block select-none pointer-events-none"
                                style={{ fontFamily: "'Georgia', serif", transform: 'rotate(-90deg) translateX(-30px)', transformOrigin: 'left top' }}
                                aria-hidden
                              >
                                {marginNote}
                              </div>

                              {/* Dog-eared index card */}
                              <div
                                className={`
                                  relative bg-[#fdfaf3] border border-stone-300/70
                                  shadow-[0_2px_4px_rgba(120,80,40,0.08),0_8px_20px_rgba(120,80,40,0.05)]
                                  hover:shadow-[0_6px_10px_rgba(120,80,40,0.10),0_14px_30px_rgba(120,80,40,0.08)]
                                  transition-shadow duration-300
                                  p-6 pt-5 flex flex-col h-full overflow-hidden
                                `}
                                style={{ ...dogEarClip, borderRadius: '4px' }}
                              >
                                {/* Dog-ear triangle highlight */}
                                <div
                                  className={`absolute top-0 right-0 w-[22px] h-[22px] ${palette.softTint} border-l border-b border-stone-300/60`}
                                  style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
                                  aria-hidden
                                />

                                {/* Card header: module chip + export + arrow */}
                                <div className="flex items-start justify-between mb-3">
                                  <span
                                    className={`
                                      inline-flex items-center px-2.5 py-0.5 rounded-sm text-[10px]
                                      font-bold uppercase tracking-[0.15em]
                                      bg-stone-100 text-stone-600 border border-stone-200
                                    `}
                                  >
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
                                    <span className="text-stone-300 group-hover:text-stone-600 transform group-hover:translate-x-1 transition-all duration-300">
                                      <ChevronRight size={18} strokeWidth={1.5} />
                                    </span>
                                  </div>
                                </div>

                                {/* Module title -- italic serif */}
                                <h4
                                  className="text-xl text-stone-900 mb-2.5 italic leading-snug font-medium"
                                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                                >
                                  {module.title}
                                </h4>

                                {/* Description on faint ruled lines */}
                                <p
                                  className="text-stone-700 text-[14px] leading-[1.85] mb-6 flex-1 font-light"
                                  style={{
                                    backgroundImage:
                                      'repeating-linear-gradient(to bottom, transparent 0, transparent 22px, rgba(180,140,110,0.12) 22px, rgba(180,140,110,0.12) 23px)',
                                    paddingBottom: '2px',
                                  }}
                                >
                                  {module.description}
                                </p>

                                {/* Footer: lesson count + progress/start */}
                                <div className="flex items-center justify-between pt-3 mt-auto border-t border-dashed border-stone-300/60 text-xs text-stone-600">
                                  <div className="flex items-center gap-1.5 italic font-light">
                                    <BookOpen size={13} strokeWidth={1.5} />
                                    <span>
                                      {(module as { lessonCount?: number }).lessonCount ??
                                        module.lessons?.length ??
                                        0}{' '}
                                      lessons
                                    </span>
                                  </div>
                                  {progress && progress.completed > 0 ? (
                                    <div className="flex items-center gap-2">
                                      <div className="w-20 h-[4px] bg-stone-200 rounded-full overflow-hidden">
                                        <div
                                          className={`h-full ${palette.accent} rounded-full transition-all`}
                                          style={{ width: `${progress.percent}%` }}
                                        />
                                      </div>
                                      <span className="text-stone-700 italic font-medium">
                                        {progress.percent}%
                                      </span>
                                    </div>
                                  ) : (
                                    <div className="flex items-center gap-1.5 text-stone-500 italic font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                                      <PlayCircle size={14} strokeWidth={1.5} />
                                      <span>begin</span>
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

      {/* Footer flourish */}
      <div className="mt-20 flex items-center justify-center gap-3 text-stone-400 text-xs italic font-light">
        <div className="h-px w-12 bg-stone-300" />
        <Feather size={12} strokeWidth={1.25} />
        <span>end of journal &mdash; keep turning the page</span>
        <Feather size={12} strokeWidth={1.25} />
        <div className="h-px w-12 bg-stone-300" />
      </div>
    </div>
  );
};
