import fs from 'fs';
import path from 'path';
import type { ContentBlock, Lesson, ModuleData } from '../types';
import { loadModule, getAllModuleMetadata } from '../modules/registry';
import {
  getDisplayModuleId,
  getCanonicalModuleTitle,
  getCanonicalLessonTitle,
  getSourceModuleIdForRouteModuleId,
} from '../utils/courseCatalog';

type CanonicalModule = ModuleData & {
  routeModuleId: number;
  sourceModuleId: number;
};

const OUTPUT_PATH = path.resolve(process.cwd(), 'docs/product/course-content-map.md');

const GENERIC_HEADINGS = new Set([
  'Why This Matters',
  'Overview',
  'Worked Example',
  'Example',
  'Examples',
  'Final Takeaway',
  'Key Takeaway',
  'Key Insight',
  'Why This Works',
  'How This Helps',
  'Wrap-Up',
  'Conclusion',
]);

const GENERIC_TOPIC_PREFIXES = [
  'this lesson',
  'in this lesson',
  'you should spend',
  'approximately ',
  'combined with',
];

function stripMarkdown(value: string): string {
  return value
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/[*_`>#~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function firstSentence(value: string): string {
  const cleaned = normalizeWhitespace(stripMarkdown(value));
  const match = cleaned.match(/^(.+?[.!?])(?:\s|$)/);
  return (match?.[1] ?? cleaned).trim();
}

function truncateWords(value: string, maxWords = 12): string {
  const words = normalizeWhitespace(value).split(' ');
  if (words.length <= maxWords) return value.trim();
  return `${words.slice(0, maxWords).join(' ')}...`;
}

function cleanTopic(raw: string): string | null {
  const value = truncateWords(
    stripMarkdown(raw).replace(/^Question Goal:\s*/i, '').replace(/^Module [0-9A-Za-z.]+:\s*/i, '').trim(),
  );
  if (!value) return null;
  if (GENERIC_HEADINGS.has(value)) return null;
  const lower = value.toLowerCase();
  if (GENERIC_TOPIC_PREFIXES.some((prefix) => lower.startsWith(prefix))) return null;
  return value;
}

function addTopic(target: string[], seen: Set<string>, raw: string | null | undefined): void {
  if (!raw) return;
  const topic = cleanTopic(raw);
  if (!topic) return;
  const key = topic.toLowerCase();
  if (seen.has(key)) return;
  seen.add(key);
  target.push(topic);
}

function simplifyStep(value: string): string {
  const cleaned = stripMarkdown(value);
  const colonIndex = cleaned.indexOf(':');
  if (colonIndex >= 0) {
    return cleaned.slice(0, colonIndex).replace(/^Step \d+\s*[—-]\s*/i, '').trim();
  }
  return cleaned.replace(/^Step \d+\s*[—-]\s*/i, '').trim();
}

function simplifyListItem(value: string): string {
  const cleaned = stripMarkdown(value);
  const trimmed = cleaned.replace(/^[A-Z]\)\s*/, '').trim();
  const match = trimmed.match(/^(.+?)(?::| - |\u2014|\. )/);
  return (match?.[1] ?? trimmed).trim();
}

function extractTopicsFromBlocks(blocks: ContentBlock[]): string[] {
  const topics: string[] = [];
  const seen = new Set<string>();

  for (const block of blocks) {
    switch (block.type) {
      case 'paragraph': {
        const labelMatch = block.text.match(/^\*\*([^*]+):\*\*\s*(.+)$/);
        if (labelMatch) {
          addTopic(topics, seen, `${labelMatch[1]}: ${firstSentence(labelMatch[2])}`);
          break;
        }
        break;
      }
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
        addTopic(topics, seen, block.text);
        break;
      case 'list':
      case 'options':
        block.items.slice(0, 4).forEach((item) => addTopic(topics, seen, simplifyListItem(item)));
        break;
      case 'process':
        addTopic(topics, seen, block.title);
        block.steps.slice(0, 5).forEach((step) => addTopic(topics, seen, simplifyStep(step)));
        break;
      case 'accordion':
        addTopic(topics, seen, block.title);
        break;
      case 'table':
        block.rows.slice(0, 5).forEach((row) => addTopic(topics, seen, row[0]));
        break;
      case 'breakdown':
        block.items.slice(0, 5).forEach((item) => addTopic(topics, seen, item.title));
        break;
      case 'callout':
        if (block.variant === 'summary') addTopic(topics, seen, block.title ?? firstSentence(block.text));
        break;
      case 'question-card':
      case 'question-passage-card':
        addTopic(topics, seen, block.questionType ? `Illustrative ${block.questionType}` : null);
        break;
      case 'passage-card':
        addTopic(topics, seen, block.title);
        break;
      case 'blockquote':
      case 'code':
      case 'hr':
        break;
      default:
        break;
    }

    if (topics.length >= 9) break;
  }

  return topics.slice(0, 8);
}

function extractTopicsFromMarkdown(markdown: string): string[] {
  const topics: string[] = [];
  const seen = new Set<string>();
  const lines = markdown.split('\n');

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    const headingMatch = line.match(/^#{1,4}\s+(.+)$/);
    if (headingMatch) {
      addTopic(topics, seen, headingMatch[1]);
      if (topics.length >= 8) break;
      continue;
    }

    const listMatch = line.match(/^[-*+]\s+(.+)$/);
    if (listMatch) {
      addTopic(topics, seen, simplifyListItem(listMatch[1]));
      if (topics.length >= 8) break;
      continue;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      addTopic(topics, seen, simplifyListItem(orderedMatch[1]));
      if (topics.length >= 8) break;
      continue;
    }

    if (topics.length < 3 && line.startsWith('**')) {
      addTopic(topics, seen, firstSentence(line));
    }
  }

  if (topics.length === 0) {
    addTopic(topics, seen, firstSentence(markdown));
  }

  return topics.slice(0, 8);
}

function extractLessonTopics(lesson: Lesson): string[] {
  const topics = typeof lesson.content === 'string'
    ? extractTopicsFromMarkdown(lesson.content)
    : extractTopicsFromBlocks(lesson.content);

  if (topics.length > 0) return topics;
  return [truncateWords(lesson.title, 10)];
}

async function loadCanonicalModules(): Promise<CanonicalModule[]> {
  const metadata = getAllModuleMetadata();
  const modules: CanonicalModule[] = [];

  for (const meta of metadata) {
    const loaded = await loadModule(meta.id);
    const lessons = loaded.lessons.map((lesson, index) => ({
      ...lesson,
      title: getCanonicalLessonTitle(meta.id, index, lesson.title),
    }));

    modules.push({
      ...loaded,
      routeModuleId: meta.id,
      sourceModuleId: getSourceModuleIdForRouteModuleId(meta.id),
      title: getCanonicalModuleTitle(meta.id, loaded.title),
      lessons,
    });
  }

  return modules;
}

function buildModuleLine(module: CanonicalModule): string {
  const displayId = getDisplayModuleId(module.routeModuleId);
  const prefix = module.routeModuleId === module.sourceModuleId
    ? displayId === String(module.routeModuleId)
      ? `\`${module.routeModuleId}\``
      : `\`${displayId} (route ${module.routeModuleId})\``
    : `\`${displayId} (route ${module.routeModuleId}, src ${module.sourceModuleId})\``;
  return `### ${prefix} ${module.title}\n\n${module.description}\n`;
}

function buildLessonLine(lesson: Lesson): string {
  const topics = extractLessonTopics(lesson);
  return `- \`${lesson.id}\` ${lesson.title}: ${topics.join('; ')}`;
}

function buildMap(modules: CanonicalModule[]): string {
  const lessonTotal = modules.reduce((sum, module) => sum + module.lessons.length, 0);
  const lrModules = modules.filter((module) => module.category === 'LR').length;
  const rcModules = modules.filter((module) => module.category === 'RC').length;
  const advancedModules = modules.filter((module) => module.category === 'Advanced').length;

  const grouped = new Map<string, CanonicalModule[]>();
  modules.forEach((module) => {
    const list = grouped.get(module.unit) ?? [];
    list.push(module);
    grouped.set(module.unit, list);
  });

  const lines: string[] = [
    '# Course Content Map',
    '',
    '**Purpose:** Give a compact but specific map of the current canonical course so contributors can spot-check missing concepts, thin modules, naming drift, or assembly problems without rereading every lesson file.  ',
    '**Audience:** Content editors, engineers, operators, and review agents checking coverage or consistency.  ',
    '**Status:** active  ',
    '**Source of truth:** yes  ',
    '**Last reviewed:** 2026-03-27  ',
    '**Related docs:** [./course-experience.md](./course-experience.md), [./course-naming-conventions.md](./course-naming-conventions.md), [../technical/content-and-validation.md](../technical/content-and-validation.md)',
    '',
    '> Generated from the live canonical lesson source in `modules/` plus `utils/courseCatalog.ts` route naming.',
    '',
    '## Snapshot',
    '',
    `- Current canonical source shape: \`${modules.length}\` route modules, \`${lessonTotal}\` canonical lessons`,
    '- LR span: route modules `1-23`',
    '- RC span: route modules `24-50`',
    '- Advanced span: route modules `51-57`',
    `- Source categories inside Mastery metadata: \`${lrModules}\` LR modules, \`${rcModules}\` RC modules, \`${advancedModules}\` source modules still labeled \`Advanced\``,
    '- Downstream course-platform rule: advanced RC is folded into `RC` in DataToolkit and website release artifacts.',
    '',
    '## How To Read This',
    '',
    '- Each lesson line is a compact signature of the actual lesson body, not just the lesson title.',
    '- If one of the listed intra-lesson topics disappears, treat that as a likely content regression or assembly/import bug.',
    '- Route ids are the live lesson-route ids. `src` ids matter only where route ids were remapped during catalog cleanup.',
    '- LR modules usually carry the fullest shape. RC core modules are still much thinner. RC practice and advanced modules should be checked lesson-by-lesson against their listed question-review set.',
    '',
  ];

  for (const [unit, unitModules] of grouped) {
    lines.push(`## ${unit}`, '');
    for (const module of unitModules) {
      lines.push(buildModuleLine(module));
      module.lessons.forEach((lesson) => {
        lines.push(buildLessonLine(lesson));
      });
      lines.push('');
    }
  }

  lines.push('## Fast Spot-Check Heuristics', '');
  lines.push('- LR identification and evaluation modules should not lose named subtype lessons or advanced subtype lessons. Those are part of the expected module spine.');
  lines.push('- `Step-by-Step` lessons should expose an actual repeatable method. If the lesson signature loses steps and only shows generic framing, it has likely been flattened or broken.');
  lines.push('- RC core modules `24-35` are still thin, so even one missing topic is meaningful there.');
  lines.push('- RC practice passages `36-45` and advanced passages `51-57` should each contain the exact reviewed question set listed above. Missing question-review lessons usually means an assembly or naming mismatch.');
  lines.push('- For course-platform work, treat `24-50` as the core RC family and treat `51-57` as advanced RC folded into RC downstream when needed.');

  return `${lines.join('\n')}\n`;
}

async function main(): Promise<void> {
  const modules = await loadCanonicalModules();
  const content = buildMap(modules);
  fs.writeFileSync(OUTPUT_PATH, content, 'utf8');
  process.stdout.write(`Wrote ${OUTPUT_PATH}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
