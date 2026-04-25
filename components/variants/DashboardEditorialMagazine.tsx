/**
 * DashboardEditorialMagazine -- "Editorial Magazine" variant
 *
 * An aesthetic homage to long-form editorial websites (The Atlantic, The New Yorker online).
 * Serif display headings, generous whitespace, restrained palette (ink-black body type with
 * a deep burgundy and muted sage as the only two accents), drop caps on unit intros, and
 * horizontal thin rules between units. Module cards read as article previews: an all-caps
 * kicker, a serif headline, a dek, and byline-style metadata underneath. No gradients, no
 * heavy shadows -- typography, whitespace, and hairline rules carry the entire hierarchy.
 */
import React from 'react';
import { ModuleData } from '../../types';
import { BookOpen, CheckCircle2 } from 'lucide-react';
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
/*  Palette -- restrained, two accents only                            */
/* ------------------------------------------------------------------ */

const BURGUNDY = '#6b1f2a';
const SAGE = '#6b7a5a';
const INK = '#111418';
const PAPER = '#fbfaf6';

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const DashboardEditorialMagazine: React.FC<DashboardProps> = ({
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

  // Per-section accent -- strictly two accents reused.
  const sectionAccent = (title: string) => {
    if (title === 'Reading Comprehension') return SAGE;
    if (title === 'Advanced Passages') return BURGUNDY;
    return BURGUNDY; // Logical Reasoning uses burgundy
  };

  const romanOf = (n: number) => {
    const map: Array<[number, string]> = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
    ];
    let rem = n;
    let out = '';
    for (const [v, s] of map) {
      while (rem >= v) { out += s; rem -= v; }
    }
    return out;
  };

  return (
    <div
      className="max-w-6xl mx-auto animate-in fade-in duration-500 pb-24 px-6 sm:px-10"
      style={{ backgroundColor: PAPER, color: INK }}
    >
      {/* ==================== Masthead ==================== */}
      <header className="pt-14 pb-10 border-b-2 border-double" style={{ borderColor: INK }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-14" style={{ backgroundColor: INK }} />
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.32em]"
            style={{ color: BURGUNDY }}
          >
            The Curriculum &middot; Volume I
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: INK, opacity: 0.15 }} />
        </div>

        <h1
          className="font-serif text-[2.6rem] sm:text-[3.4rem] lg:text-[4.25rem] leading-[1.02] tracking-[-0.02em] text-balance"
          style={{ color: INK }}
        >
          The <em className="italic" style={{ color: BURGUNDY }}>LSAT Mastery</em> Course
        </h1>

        <p className="mt-6 font-serif text-[1.05rem] sm:text-[1.15rem] italic leading-relaxed max-w-[620px] text-balance"
           style={{ color: '#3d4047' }}>
          A long-form curriculum in three acts &mdash; from the first premises of an argument
          to the deepest currents of a passage.
        </p>

        <div className="mt-8 flex items-center gap-6 text-[11px] uppercase tracking-[0.24em] font-semibold"
             style={{ color: '#6a6d74' }}>
          <span>Est. 2026</span>
          <span style={{ color: INK, opacity: 0.3 }}>&bull;</span>
          <span>{modules.length} Modules</span>
          <span style={{ color: INK, opacity: 0.3 }}>&bull;</span>
          <span>{sections.length} Sections</span>
        </div>
      </header>

      {/* ==================== Sections ==================== */}
      <div className="mt-16 space-y-24">
        {sections.map((section, sectionIdx) => {
          const sectionModules = section.units.flatMap((u) => modulesByUnit[u.name] || []);
          if (sectionModules.length === 0) return null;
          const accent = sectionAccent(section.title);

          return (
            <section key={section.title}>
              {/* ── Section header ────────────────────────── */}
              <div className="mb-14">
                <div className="flex items-baseline gap-4 mb-4">
                  <span
                    className="font-serif italic text-[13px] tracking-wide"
                    style={{ color: accent }}
                  >
                    Part {romanOf(sectionIdx + 1)}
                  </span>
                  <div className="h-px flex-1" style={{ backgroundColor: INK, opacity: 0.25 }} />
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

                <h2
                  className="font-serif text-[2rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.015em] text-balance max-w-[820px]"
                  style={{ color: INK }}
                >
                  {section.title}
                </h2>
                <p className="mt-4 font-serif italic text-[1.05rem] leading-relaxed max-w-[640px] text-balance"
                   style={{ color: '#4a4d54' }}>
                  {section.description}
                </p>
              </div>

              {/* ── Unit list ────────────────────────────── */}
              <div className="space-y-20">
                {section.units.map((unitObj, unitIdx) => {
                  const unitString = unitObj.name;
                  const unitModules = modulesByUnit[unitString];
                  if (!unitModules) return null;

                  const [unitNum, unitName] = unitString.split(': ');
                  const firstChar = unitObj.description.charAt(0);
                  const rest = unitObj.description.slice(1);

                  return (
                    <article key={unitString}>
                      {/* Thin horizontal rule above each unit */}
                      {unitIdx > 0 && (
                        <div className="h-px w-full mb-16" style={{ backgroundColor: INK, opacity: 0.1 }} />
                      )}

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10">
                        {/* Unit eyebrow + number in left column */}
                        <div className="lg:col-span-3">
                          <div
                            className="font-serif italic text-[13px] mb-2"
                            style={{ color: accent }}
                          >
                            {unitNum}
                          </div>
                          <h3
                            className="font-serif text-[1.5rem] sm:text-[1.75rem] leading-[1.1] tracking-[-0.01em] text-balance"
                            style={{ color: INK }}
                          >
                            {unitName}
                          </h3>
                        </div>

                        {/* Drop-cap intro in right column */}
                        <div className="lg:col-span-9">
                          <p className="font-serif text-[1.05rem] sm:text-[1.15rem] leading-[1.7] text-balance"
                             style={{ color: '#2d3036' }}>
                            <span
                              className="float-left font-serif mr-2 mt-1 leading-[0.85]"
                              style={{
                                fontSize: '3.6rem',
                                color: accent,
                                fontWeight: 700,
                              }}
                            >
                              {firstChar}
                            </span>
                            {rest}
                          </p>

                          <div className="mt-6 flex items-center gap-3">
                            <div className="h-px w-8" style={{ backgroundColor: INK, opacity: 0.4 }} />
                            <span className="text-[10px] uppercase tracking-[0.28em] font-semibold"
                                  style={{ color: '#7a7d84' }}>
                              {unitModules.length} {unitModules.length === 1 ? 'Piece' : 'Pieces'} in this Unit
                            </span>
                            <div className="h-px flex-1" style={{ backgroundColor: INK, opacity: 0.1 }} />
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
                      </div>

                      {/* ── Module article-preview grid ─────── */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 lg:pl-[25%]">
                        {unitModules.map((module) => {
                          const moduleData = resolveModule(module);
                          const lessonCount =
                            (module as { lessonCount?: number }).lessonCount ??
                            module.lessons?.length ?? 0;
                          const readTime = Math.max(5, lessonCount * 8);
                          const prog = getModuleProgress && module.lessons && module.lessons.length > 0
                            ? getModuleProgress(module.lessons)
                            : null;

                          return (
                            <div
                              key={module.id}
                              onClick={() => onSelectModule(module.id)}
                              className="group cursor-pointer bg-transparent relative"
                            >
                              {/* Kicker: all-caps module number */}
                              <div className="flex items-center gap-3 mb-3">
                                <span
                                  className="text-[10px] font-bold uppercase tracking-[0.32em]"
                                  style={{ color: accent }}
                                >
                                  Module &middot; {String(module.id).padStart(2, '0')}
                                </span>
                                <div className="h-px flex-1" style={{ backgroundColor: INK, opacity: 0.15 }} />
                                <div
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
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

                              {/* Headline -- serif, bold, tight */}
                              <h4
                                className="font-serif text-[1.35rem] sm:text-[1.5rem] leading-[1.15] tracking-[-0.01em] text-balance mb-3 transition-colors duration-200"
                                style={{ color: INK }}
                              >
                                <span
                                  className="bg-[length:100%_1px] bg-no-repeat bg-bottom group-hover:bg-[length:100%_2px] transition-all duration-200"
                                  style={{
                                    backgroundImage: `linear-gradient(${accent}, ${accent})`,
                                  }}
                                >
                                  {module.title}
                                </span>
                              </h4>

                              {/* Dek */}
                              <p className="font-serif text-[0.98rem] leading-[1.65] mb-5 text-balance"
                                 style={{ color: '#3d4047' }}>
                                {module.description}
                              </p>

                              {/* Byline row */}
                              <div className="flex items-center justify-between pt-4 border-t"
                                   style={{ borderColor: 'rgba(17,20,24,0.12)' }}>
                                <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] font-semibold"
                                     style={{ color: '#7a7d84' }}>
                                  <span className="flex items-center gap-1.5">
                                    <BookOpen size={12} strokeWidth={1.8} />
                                    {lessonCount} Lessons
                                  </span>
                                  <span style={{ color: INK, opacity: 0.2 }}>/</span>
                                  <span className="font-serif italic normal-case tracking-normal text-[12px]"
                                        style={{ color: '#7a7d84' }}>
                                    {readTime} min read
                                  </span>
                                </div>

                                {/* Progress stamp */}
                                {prog && prog.completed > 0 ? (
                                  <div className="flex items-center gap-2">
                                    {prog.percent === 100 ? (
                                      <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold"
                                            style={{ color: SAGE }}>
                                        <CheckCircle2 size={13} strokeWidth={2} />
                                        Read
                                      </span>
                                    ) : (
                                      <>
                                        <div className="w-14 h-[2px]" style={{ backgroundColor: 'rgba(17,20,24,0.12)' }}>
                                          <div
                                            className="h-full transition-all"
                                            style={{ width: `${prog.percent}%`, backgroundColor: SAGE }}
                                          />
                                        </div>
                                        <span className="font-serif italic text-[11px]" style={{ color: SAGE }}>
                                          {prog.percent}%
                                        </span>
                                      </>
                                    )}
                                  </div>
                                ) : (
                                  <span
                                    className="font-serif italic text-[12px] opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ color: accent }}
                                  >
                                    Continue reading &rarr;
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* ── Section closer: ornamental rule ──────── */}
              <div className="mt-20 flex items-center justify-center gap-4">
                <div className="h-px w-16" style={{ backgroundColor: INK, opacity: 0.3 }} />
                <span className="font-serif italic text-[13px]" style={{ color: accent }}>
                  End of Part {romanOf(sectionIdx + 1)}
                </span>
                <div className="h-px w-16" style={{ backgroundColor: INK, opacity: 0.3 }} />
              </div>
            </section>
          );
        })}
      </div>

      {/* ==================== Colophon ==================== */}
      <footer className="mt-24 pt-10 border-t"
              style={{ borderColor: 'rgba(17,20,24,0.2)' }}>
        <div className="text-center">
          <div className="font-serif italic text-[13px] mb-1" style={{ color: '#6a6d74' }}>
            Colophon
          </div>
          <p className="font-serif text-[12px] leading-relaxed max-w-[420px] mx-auto text-balance"
             style={{ color: '#8a8d94' }}>
            Set in a serif display face. Printed on the virtual page with generous margins,
            hairline rules, and two accent inks &mdash; burgundy and sage.
          </p>
        </div>
      </footer>
    </div>
  );
};
