/*
 * DashboardAcademicPrint -- "Academic Print" variant
 *
 * A scholarly textbook / journal-article aesthetic. Serif body type,
 * Roman numeral section markers, hanging-indent bibliographic module
 * entries, small-caps section titles, hairline rules, and a warm
 * stone-on-ink palette with a restrained red-ink accent reserved for
 * in-progress work. Feels like a Penguin Classics dust jacket or a
 * law-school syllabus: text-first, no rounded corners, no shadows,
 * justified prose, and table-of-contents style I.1 / I.2 hierarchy.
 */

import React from 'react';
import { ModuleData } from '../../types';
import { ExportControls } from '../ExportControls';
import {
  generateUnitText, generateUnitRTF, generateUnitJSON, generateUnitCSV, generateUnitPDF,
  generateModuleText, generateModuleRTF, generateModuleJSON, generateModuleCSV, generateModulePDF,
  generateSectionText, generateSectionRTF, generateSectionJSON, generateSectionCSV, generateSectionPDF,
} from '../../utils/export';

/* ------------------------------------------------------------------ */
/*  Types -- preserved verbatim from the canonical Dashboard           */
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

const asModule = (m: Record<string, unknown>): ModuleData =>
  ({ ...m, lessons: (m.lessons as ModuleData['lessons']) ?? [] }) as unknown as ModuleData;

// Roman numeral mapping for the three top-level sections (part markers)
const ROMAN_PART: Record<string, string> = {
  'Logical Reasoning': 'I',
  'Reading Comprehension': 'II',
  'Advanced Passages': 'III',
};

// Convert an integer 1..30 to a lowercase roman numeral for unit markers
const toRoman = (num: number): string => {
  const lookup: Array<[number, string]> = [
    [10, 'x'], [9, 'ix'], [5, 'v'], [4, 'iv'], [1, 'i'],
  ];
  let n = num;
  let out = '';
  for (const [val, sym] of lookup) {
    while (n >= val) {
      out += sym;
      n -= val;
    }
  }
  return out;
};

export const DashboardAcademicPrint: React.FC<DashboardProps> = ({
  modules,
  fullModules,
  onSelectModule,
  getModuleProgress,
}) => {
  /* ---- Group modules by unit (same logic as canonical) ---------- */
  type ModuleLike = typeof modules[number];
  const modulesByUnit = modules.reduce((acc, module) => {
    if (!acc[module.unit]) acc[module.unit] = [];
    acc[module.unit].push(module);
    return acc;
  }, {} as Record<string, ModuleLike[]>);

  /* ---- Section / unit manifest (same three-section constant) ---- */
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

  /* ---- Resolver helpers (same as canonical) --------------------- */
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
    <div className="max-w-5xl mx-auto px-6 sm:px-10 pb-24 pt-10 bg-stone-50 text-slate-900 font-serif">
      {/* ── Masthead -- dust jacket of a scholarly volume ──────── */}
      <header className="border-t-2 border-b border-slate-900 py-10 mb-16">
        <div className="text-[10px] uppercase tracking-[0.4em] text-slate-600 mb-4 text-center">
          Germaine Tutoring &mdash; Collected Studies
        </div>
        <h1 className="text-center text-4xl sm:text-5xl font-serif font-normal tracking-tight text-slate-950 leading-tight">
          The LSAT Mastery Course
        </h1>
        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="h-px w-16 bg-slate-900/40" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-slate-600">
            A Syllabus in Three Parts
          </span>
          <div className="h-px w-16 bg-slate-900/40" />
        </div>
        <p className="mt-8 max-w-2xl mx-auto text-center italic text-slate-700 leading-relaxed text-[15px]">
          A comprehensive curriculum progressing from foundational logic to
          advanced reading strategies, arranged in the manner of a collegiate
          course of study.
        </p>
      </header>

      {/* ── Table of contents (plain-language summary up top) ──── */}
      <nav className="mb-20 border-t border-b border-slate-900/20 py-6">
        <div className="text-[10px] uppercase tracking-[0.35em] text-slate-600 mb-3">
          Contents
        </div>
        <ol className="space-y-1.5 text-[14px]">
          {sections.map((section) => {
            const part = ROMAN_PART[section.title] ?? '-';
            const sectionModules = section.units.flatMap((u) => modulesByUnit[u.name] || []);
            if (sectionModules.length === 0) return null;
            return (
              <li key={section.title} className="flex items-baseline gap-4">
                <span className="w-8 text-slate-600 tabular-nums">
                  Part&nbsp;{part}.
                </span>
                <span className="flex-1 text-slate-900">
                  {section.title}
                  <span className="text-slate-500 italic ml-2">
                    &mdash; {section.units.length}{' '}
                    {section.units.length === 1 ? 'unit' : 'units'},{' '}
                    {sectionModules.length} modules
                  </span>
                </span>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* ── Parts, units, modules ──────────────────────────────── */}
      <div className="space-y-24">
        {sections.map((section, sectionIdx) => {
          const sectionModules = section.units.flatMap((u) => modulesByUnit[u.name] || []);
          if (sectionModules.length === 0) return null;
          const part = ROMAN_PART[section.title] ?? String(sectionIdx + 1);

          return (
            <section key={section.title} className="break-before-page">
              {/* Part header -- small caps + hairline */}
              <div className="border-t-2 border-slate-900 pt-8 mb-10">
                <div className="flex items-start justify-between gap-6 mb-5">
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-[0.4em] text-slate-600 mb-3">
                      Part&nbsp;{part}
                    </div>
                    <h2 className="text-3xl sm:text-[2.25rem] font-serif tracking-tight text-slate-950 leading-tight">
                      {section.title}
                    </h2>
                  </div>
                  <div className="flex-shrink-0 pt-1">
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

                {/* Justified editorial epigraph for the part */}
                <p
                  className="text-[15px] leading-[1.85] text-slate-700 max-w-3xl text-justify"
                  style={{ textIndent: '1.5em' }}
                >
                  {section.description}
                </p>
              </div>

              {/* Units within the part */}
              <div className="space-y-16">
                {section.units.map((unitObj, unitIdxWithinSection) => {
                  const unitString = unitObj.name;
                  const unitModules = modulesByUnit[unitString];
                  if (!unitModules) return null;

                  const [, unitName] = unitString.split(': ');
                  const unitLabel = `${part}.${unitIdxWithinSection + 1}`;

                  return (
                    <article key={unitString} className="border-t border-slate-900/20 pt-6">
                      {/* Unit header -- running head style */}
                      <header className="mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-baseline gap-3 mb-1.5">
                            <span className="text-[11px] uppercase tracking-[0.3em] text-slate-600 tabular-nums">
                              {unitLabel}
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                              Unit
                            </span>
                          </div>
                          <h3 className="text-[1.65rem] font-serif text-slate-950 leading-tight mb-2">
                            {unitName}
                          </h3>
                          {/* Figure-caption subtitle */}
                          <p className="text-[13px] italic text-slate-600 leading-relaxed max-w-2xl">
                            <span className="not-italic text-slate-500">
                              fig.&nbsp;{unitLabel}&nbsp;&mdash;&nbsp;
                            </span>
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
                      </header>

                      {/* Bibliographic module entries -- hanging-indent list */}
                      <ol className="border-t border-slate-900/15 divide-y divide-slate-900/10">
                        {unitModules.map((module, moduleIdxWithinUnit) => {
                          const moduleData = resolveModule(module);
                          const entryLabel = `${unitLabel}.${toRoman(moduleIdxWithinUnit + 1)}`;
                          const lessonCount =
                            (module as { lessonCount?: number }).lessonCount ??
                            module.lessons?.length ??
                            0;
                          const prog =
                            getModuleProgress && module.lessons && module.lessons.length > 0
                              ? getModuleProgress(module.lessons)
                              : null;
                          const inProgress = prog !== null && prog.completed > 0;
                          const started = prog !== null && prog.percent > 0;

                          return (
                            <li
                              key={module.id}
                              className="group grid grid-cols-[4.5rem_1fr] gap-5 py-5 px-1 cursor-pointer hover:bg-stone-100/70 transition-colors"
                              onClick={() => onSelectModule(module.id)}
                            >
                              {/* Margin entry label -- bibliographic gutter */}
                              <div className="pt-1 text-right">
                                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 tabular-nums leading-tight">
                                  {entryLabel}
                                </div>
                                <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400 mt-1">
                                  Mod.&nbsp;{module.id}
                                </div>
                              </div>

                              {/* Hanging-indent body */}
                              <div>
                                <div className="flex items-baseline justify-between gap-4 mb-1.5">
                                  <h4 className="text-[1.1rem] font-serif font-semibold text-slate-950 leading-snug">
                                    {module.title}
                                    <sup className="ml-1.5 text-[10px] font-sans font-normal text-slate-500 tabular-nums">
                                      {lessonCount}
                                    </sup>
                                    {inProgress && (
                                      <sup className="ml-1 text-[10px] font-sans font-bold text-red-700 not-italic">
                                        &dagger;
                                      </sup>
                                    )}
                                  </h4>
                                  <div
                                    className="flex-shrink-0"
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

                                {/* Paragraph description -- justified, first-line indent */}
                                <p
                                  className="text-[14px] leading-[1.8] text-slate-700 text-justify"
                                  style={{ textIndent: '1.25em' }}
                                >
                                  {module.description}
                                </p>

                                {/* Footnote-style meta line */}
                                <div className="mt-3 flex items-center gap-4 text-[11px] text-slate-500 font-serif italic">
                                  <span>
                                    {lessonCount}{' '}
                                    {lessonCount === 1 ? 'lesson' : 'lessons'}
                                  </span>
                                  <span className="text-slate-300">&middot;</span>
                                  {started && prog ? (
                                    <>
                                      <span className="not-italic text-red-700 font-semibold tracking-wide">
                                        {prog.percent}% in progress
                                      </span>
                                      <span className="flex-1 max-w-[140px] h-px bg-slate-200 relative not-italic">
                                        <span
                                          className="absolute inset-y-0 left-0 bg-red-700"
                                          style={{ width: `${prog.percent}%` }}
                                        />
                                      </span>
                                    </>
                                  ) : (
                                    <span className="not-italic text-slate-400 uppercase tracking-[0.2em] text-[10px]">
                                      unread
                                    </span>
                                  )}
                                  <span className="ml-auto text-slate-400 uppercase tracking-[0.2em] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                                    see&nbsp;within&nbsp;&rarr;
                                  </span>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ol>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* ── Colophon -- scholarly close ────────────────────────── */}
      <footer className="mt-24 pt-8 border-t-2 border-slate-900 text-center">
        <div className="text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-2">
          Colophon
        </div>
        <p className="text-[12px] italic text-slate-600 max-w-lg mx-auto leading-relaxed">
          Set in the tradition of the academic press. A red dagger
          (<span className="text-red-700 font-bold not-italic">&dagger;</span>)
          denotes a module currently under study; the superscript numeral
          records its count of constituent lessons.
        </p>
      </footer>
    </div>
  );
};
