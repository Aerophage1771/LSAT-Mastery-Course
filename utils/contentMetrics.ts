import type { ContentBlock, ModuleData } from '../types';

// --- Types ---

export interface LessonMetrics {
  lessonId: string;
  title: string;
  wordCount: number;
  blockCount: number;
  blockTypeDistribution: Record<string, number>;
  questionCardCount: number;
  passageCardCount: number;
  questionPassageCardCount: number;
  difficultyDistribution: Record<string, number>;
}

export interface ModuleMetrics {
  moduleId: number;
  title: string;
  category: string;
  unit: string;
  section: string;
  lessonCount: number;
  totalWordCount: number;
  questionCardCount: number;
  passageCardCount: number;
  questionPassageCardCount: number;
  blockTypeDistribution: Record<string, number>;
  difficultyDistribution: Record<string, number>;
  lessons: LessonMetrics[];
}

export interface SectionTotals {
  moduleCount: number;
  lessonCount: number;
  totalWordCount: number;
  questionCardCount: number;
  passageCardCount: number;
  questionPassageCardCount: number;
  blockTypeDistribution: Record<string, number>;
  difficultyDistribution: Record<string, number>;
}

export interface UnitMetrics {
  unit: string;
  section: string;
  moduleCount: number;
  lessonCount: number;
  totalWordCount: number;
  questionCardCount: number;
  passageCardCount: number;
  questionPassageCardCount: number;
  modules: ModuleMetrics[];
}

export interface CourseMetrics {
  courseTotals: SectionTotals;
  sectionTotals: Record<string, SectionTotals>;
  unitMetrics: UnitMetrics[];
  modules: ModuleMetrics[];
}

// --- Helpers ---

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, '');
}

function countWords(text: string | undefined): number {
  if (!text) return 0;
  const cleaned = stripMarkdown(text).trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).filter(Boolean).length;
}

function countBlockWords(block: ContentBlock): number {
  switch (block.type) {
    case 'paragraph':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'blockquote':
    case 'code':
      return countWords(block.text);
    case 'hr':
      return 0;
    case 'callout':
      return countWords(block.text) + countWords(block.title);
    case 'list':
    case 'options':
      return block.items.reduce((sum, item) => sum + countWords(item), 0);
    case 'process':
      return countWords(block.title) + block.steps.reduce((sum, s) => sum + countWords(s), 0);
    case 'accordion': {
      const nested =
        typeof block.content === 'string'
          ? countWords(block.content)
          : block.content.reduce((sum, b) => sum + countBlockWords(b), 0);
      return countWords(block.title) + nested;
    }
    case 'table':
      return (
        block.headers.reduce((sum, h) => sum + countWords(h), 0) +
        block.rows.flat().reduce((sum, cell) => sum + countWords(cell), 0)
      );
    case 'breakdown':
      return block.items.reduce((sum, item) => sum + countWords(item.title) + countWords(item.text), 0);
    case 'question-card':
      return (
        countWords(block.stimulus) +
        countWords(block.question) +
        block.options.reduce((sum, o) => sum + countWords(o), 0)
      );
    case 'passage-card':
      return countWords(block.title) + countWords(block.passage);
    case 'question-passage-card':
      return (
        countWords(block.passageTitle) +
        countWords(block.passage) +
        countWords(block.question) +
        block.options.reduce((sum, o) => sum + countWords(o), 0)
      );
    default:
      return 0;
  }
}

function walkBlocks(content: string | ContentBlock[], visitor: (block: ContentBlock) => void): void {
  if (typeof content === 'string') return;
  for (const block of content) {
    visitor(block);
    if (block.type === 'accordion' && typeof block.content !== 'string') {
      walkBlocks(block.content, visitor);
    }
  }
}

function countLessonWords(content: string | ContentBlock[]): number {
  if (typeof content === 'string') return countWords(content);
  return content.reduce((sum, block) => sum + countBlockWords(block), 0);
}

function countBlockTypesFromContent(content: string | ContentBlock[]): Record<string, number> {
  const counts: Record<string, number> = {};
  walkBlocks(content, (block) => {
    counts[block.type] = (counts[block.type] || 0) + 1;
  });
  return counts;
}

function countCardTypesFromContent(content: string | ContentBlock[]) {
  let questionCard = 0;
  let passageCard = 0;
  let questionPassageCard = 0;
  walkBlocks(content, (block) => {
    if (block.type === 'question-card') questionCard++;
    else if (block.type === 'passage-card') passageCard++;
    else if (block.type === 'question-passage-card') questionPassageCard++;
  });
  return { questionCardCount: questionCard, passageCardCount: passageCard, questionPassageCardCount: questionPassageCard };
}

function extractDifficulty(content: string | ContentBlock[]): Record<string, number> {
  const dist: Record<string, number> = { easy: 0, medium: 0, hard: 0, unspecified: 0 };
  walkBlocks(content, (block) => {
    if (block.type === 'question-card' || block.type === 'question-passage-card') {
      const d = 'difficulty' in block ? block.difficulty : undefined;
      dist[d ?? 'unspecified']++;
    }
  });
  return dist;
}

export function normalizeSection(category: string, _moduleId?: number): string {
  const upper = (category || '').trim().toUpperCase();
  if (upper.includes('LR') || upper.includes('LOGICAL')) return 'Logical Reasoning';
  if (upper.includes('RC') || upper.includes('READING') || upper.includes('ADVANCED')) return 'Reading Comprehension';
  return 'Other';
}

function sumDistributions(distributions: Record<string, number>[]): Record<string, number> {
  const totals: Record<string, number> = {};
  for (const dist of distributions) {
    for (const [key, value] of Object.entries(dist)) {
      totals[key] = (totals[key] || 0) + value;
    }
  }
  return totals;
}

function buildSectionTotals(modules: ModuleMetrics[]): SectionTotals {
  return {
    moduleCount: modules.length,
    lessonCount: modules.reduce((s, m) => s + m.lessonCount, 0),
    totalWordCount: modules.reduce((s, m) => s + m.totalWordCount, 0),
    questionCardCount: modules.reduce((s, m) => s + m.questionCardCount, 0),
    passageCardCount: modules.reduce((s, m) => s + m.passageCardCount, 0),
    questionPassageCardCount: modules.reduce((s, m) => s + m.questionPassageCardCount, 0),
    blockTypeDistribution: sumDistributions(modules.map((m) => m.blockTypeDistribution)),
    difficultyDistribution: sumDistributions(modules.map((m) => m.difficultyDistribution)),
  };
}

// --- Main ---

export function computeCourseMetrics(modules: ModuleData[]): CourseMetrics {
  const moduleMetrics: ModuleMetrics[] = modules.map((mod) => {
    const lessons: LessonMetrics[] = mod.lessons.map((lesson) => {
      const wordCount = countLessonWords(lesson.content);
      const blockTypes = countBlockTypesFromContent(lesson.content);
      const cards = countCardTypesFromContent(lesson.content);
      const difficulty = extractDifficulty(lesson.content);

      return {
        lessonId: lesson.id,
        title: lesson.title,
        wordCount,
        blockCount: Object.values(blockTypes).reduce((s, n) => s + n, 0),
        blockTypeDistribution: blockTypes,
        ...cards,
        difficultyDistribution: difficulty,
      };
    });

    return {
      moduleId: mod.id,
      title: mod.title,
      category: mod.category,
      unit: mod.unit,
      section: normalizeSection(mod.category, mod.id),
      lessonCount: lessons.length,
      totalWordCount: lessons.reduce((s, l) => s + l.wordCount, 0),
      questionCardCount: lessons.reduce((s, l) => s + l.questionCardCount, 0),
      passageCardCount: lessons.reduce((s, l) => s + l.passageCardCount, 0),
      questionPassageCardCount: lessons.reduce((s, l) => s + l.questionPassageCardCount, 0),
      blockTypeDistribution: sumDistributions(lessons.map((l) => l.blockTypeDistribution)),
      difficultyDistribution: sumDistributions(lessons.map((l) => l.difficultyDistribution)),
      lessons,
    };
  });

  const sections: Record<string, ModuleMetrics[]> = {};
  for (const mod of moduleMetrics) {
    if (!sections[mod.section]) sections[mod.section] = [];
    sections[mod.section].push(mod);
  }

  const sectionTotals: Record<string, SectionTotals> = {};
  for (const [name, mods] of Object.entries(sections)) {
    sectionTotals[name] = buildSectionTotals(mods);
  }

  // Build unit-level aggregations (preserving order of first occurrence)
  const unitOrder: string[] = [];
  const unitMap = new Map<string, ModuleMetrics[]>();
  for (const mod of moduleMetrics) {
    if (!unitMap.has(mod.unit)) {
      unitOrder.push(mod.unit);
      unitMap.set(mod.unit, []);
    }
    unitMap.get(mod.unit)!.push(mod);
  }
  const unitMetrics: UnitMetrics[] = unitOrder.map((unit) => {
    const mods = unitMap.get(unit)!;
    return {
      unit,
      section: mods[0].section,
      moduleCount: mods.length,
      lessonCount: mods.reduce((s, m) => s + m.lessonCount, 0),
      totalWordCount: mods.reduce((s, m) => s + m.totalWordCount, 0),
      questionCardCount: mods.reduce((s, m) => s + m.questionCardCount, 0),
      passageCardCount: mods.reduce((s, m) => s + m.passageCardCount, 0),
      questionPassageCardCount: mods.reduce((s, m) => s + m.questionPassageCardCount, 0),
      modules: mods,
    };
  });

  return {
    courseTotals: buildSectionTotals(moduleMetrics),
    sectionTotals,
    unitMetrics,
    modules: moduleMetrics,
  };
}
