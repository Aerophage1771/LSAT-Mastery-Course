import React, { useState, useMemo } from 'react';
import { ModuleData, ContentBlock } from '../types';
import { ChevronDown, ChevronRight, Download, FileText } from 'lucide-react';
import { ContentBox } from './ContentBox';
import { OptionsBlock } from './OptionsBlock';

/** LR data from data/questionBankLR.json (built from TSV) */
export interface QuestionBankLRTopic {
  moduleNum: number;
  name: string;
  questionIds: string;
  questions: { id: string; stimulus: string; question: string; options: string[] }[];
}
export interface QuestionBankLRData {
  topics: QuestionBankLRTopic[];
}

const PT_ID_REGEX = /PT-\d+-S-\d+-Q-\d+/g;
const PT_PASSAGE_REGEX = /PT-\d+-S-\d+-P-\d+/g;

export interface PtIdToLesson {
  moduleId: number;
  lessonId: string;
  moduleTitle: string;
  lessonTitle: string;
}

export interface QuestionBankItem {
  id: string;
  type: 'lr' | 'rc';
  topicId: string;
  topicLabel: string;
  title: string;
  stimulus: string;
  question: string;
  options: string[];
}

interface QuestionBankViewProps {
  curriculumModules: ModuleData[];
  questionBankModules: ModuleData[];
  lrData: QuestionBankLRData;
  onGoToLesson: (moduleId: number, lessonId: string) => void;
}

function extractPtIds(text: string): string[] {
  const q = text.match(PT_ID_REGEX) || [];
  const p = text.match(PT_PASSAGE_REGEX) || [];
  return [...new Set([...q, ...p])];
}

function normalizePtIdForSearch(input: string): string {
  let s = input.trim().toUpperCase().replace(/\s+/g, '-');
  if (!/^PT-/.test(s) && /^\d+-S-\d+/.test(s)) s = 'PT-' + s;
  return s;
}

function buildPtIdToLessonMap(modules: ModuleData[]): Map<string, PtIdToLesson> {
  const map = new Map<string, PtIdToLesson>();
  for (const mod of modules) {
    for (const lesson of mod.lessons) {
      const ids = extractPtIds(lesson.title);
      for (const id of ids) {
        if (!map.has(id)) {
          map.set(id, {
            moduleId: mod.id,
            lessonId: lesson.id,
            moduleTitle: mod.title,
            lessonTitle: lesson.title,
          });
        }
      }
    }
  }
  return map;
}

function extractQuestionsFromContent(
  content: string | ContentBlock[],
  moduleId: number,
  lessonId: string,
  topicLabel: string,
  type: 'lr' | 'rc'
): QuestionBankItem[] {
  const items: QuestionBankItem[] = [];
  if (typeof content === 'string') return items;
  for (const block of content) {
    if (block.type !== 'accordion') continue;
    const title = block.title;
    const ptIds = extractPtIds(title);
    const ptId = ptIds[0] || title;
    let stimulus = '';
    let question = '';
    let options: string[] = [];
    const inner = block.content;
    const blocks = typeof inner === 'string' ? [] : inner;
    for (const b of blocks) {
      if (b.type === 'blockquote') stimulus = b.text;
      if (b.type === 'paragraph' && !question) question = b.text;
      if (b.type === 'options') options = b.items;
    }
    const topicId = type === 'lr' ? `lr-${moduleId}-${lessonId}` : `rc-${moduleId}-${lessonId}`;
    items.push({
      id: ptId,
      type,
      topicId,
      topicLabel,
      title,
      stimulus,
      question,
      options,
    });
  }
  return items;
}

function buildLRItems(lrData: QuestionBankLRData): QuestionBankItem[] {
  const items: QuestionBankItem[] = [];
  for (const topic of lrData.topics) {
    const topicId = `lr-${topic.moduleNum}`;
    const topicLabel = `Module ${topic.moduleNum}: ${topic.name}`;
    for (const q of topic.questions) {
      items.push({
        id: q.id,
        type: 'lr',
        topicId,
        topicLabel,
        title: q.id,
        stimulus: q.stimulus,
        question: q.question,
        options: q.options,
      });
    }
  }
  return items;
}

function buildQuestionBankItems(modules: ModuleData[]): QuestionBankItem[] {
  const items: QuestionBankItem[] = [];
  for (const mod of modules) {
    for (const lesson of mod.lessons) {
      const topicLabel = lesson.title;
      const fromLesson = extractQuestionsFromContent(
        lesson.content,
        mod.id,
        lesson.id,
        topicLabel,
        'rc'
      );
      items.push(...fromLesson);
    }
  }
  return items;
}

function buildFilterOptions(
  lrData: QuestionBankLRData,
  rcModules: ModuleData[]
): { value: string; label: string; type: 'lr' | 'rc' }[] {
  const options: { value: string; label: string; type: 'lr' | 'rc' }[] = [];
  options.push({ value: '', label: 'All topics / passages', type: 'lr' });
  for (const topic of lrData.topics) {
    options.push({
      value: `lr-${topic.moduleNum}`,
      label: `Module ${topic.moduleNum}: ${topic.name}`,
      type: 'lr',
    });
  }
  for (const mod of rcModules) {
    for (const lesson of mod.lessons) {
      options.push({
        value: `rc-${mod.id}-${lesson.id}`,
        label: lesson.title,
        type: 'rc',
      });
    }
  }
  return options;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({
  curriculumModules,
  questionBankModules,
  lrData,
  onGoToLesson,
}) => {
  const [filterTopicId, setFilterTopicId] = useState<string>('');
  const [searchPtId, setSearchPtId] = useState<string>('');
  const [unmappedOpen, setUnmappedOpen] = useState(false);
  const [expandedItemKey, setExpandedItemKey] = useState<string | null>(null);

  const ptIdToLesson = useMemo(() => buildPtIdToLessonMap(curriculumModules), [curriculumModules]);
  const allItems = useMemo(
    () => [...buildLRItems(lrData), ...buildQuestionBankItems(questionBankModules)],
    [lrData, questionBankModules]
  );
  const filterOptions = useMemo(
    () => buildFilterOptions(lrData, questionBankModules),
    [lrData, questionBankModules]
  );

  const filteredItems = useMemo(() => {
    let list = allItems;
    if (filterTopicId) {
      list = list.filter((item) => item.topicId === filterTopicId);
    }
    if (searchPtId.trim()) {
      const norm = normalizePtIdForSearch(searchPtId);
      list = list.filter((item) => {
        const itemNorm = item.id.toUpperCase().replace(/\s+/g, '-');
        return itemNorm.includes(norm) || norm.includes(itemNorm);
      });
    }
    return list;
  }, [allItems, filterTopicId, searchPtId]);

  const unmappedIds = useMemo(() => {
    const mapped = new Set<string>();
    for (const [, info] of ptIdToLesson) {
      mapped.add(info.lessonId);
    }
    const itemIds = new Set(allItems.map((i) => i.id));
    const unmapped: string[] = [];
    for (const id of itemIds) {
      if (!ptIdToLesson.has(id)) unmapped.push(id);
    }
    return unmapped.sort();
  }, [allItems, ptIdToLesson]);

  const handleExportUnmappedCSV = () => {
    const header = 'PT-ID';
    const rows = unmappedIds.map((id) => `"${id}"`);
    const csv = [header, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'question-bank-unmapped.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const isEmpty = filteredItems.length === 0;
  const hasFilterOrSearch = !!filterTopicId || searchPtId.trim().length > 0;

  return (
    <div className="max-w-4xl mx-auto p-8 pb-20">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Question Bank</h1>
      <p className="text-slate-600 mb-8">
        Browse and search all LR and RC questions. Use &quot;Taught in&quot; to open the lesson where a question is taught.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex flex-col gap-1">
          <label htmlFor="qb-filter" className="text-sm font-medium text-slate-700">
            Filter by topic / passage
          </label>
          <select
            id="qb-filter"
            value={filterTopicId}
            onChange={(e) => setFilterTopicId(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm min-w-[220px] bg-white"
          >
            {filterOptions.map((opt) => (
              <option key={opt.value || 'all'} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="qb-search" className="text-sm font-medium text-slate-700">
            Search by PT-ID
          </label>
          <input
            id="qb-search"
            type="text"
            placeholder="e.g. PT-111-S-4-Q-2 or 111-S-4"
            value={searchPtId}
            onChange={(e) => setSearchPtId(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm min-w-[200px]"
          />
        </div>
      </div>

      {isEmpty ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
          {hasFilterOrSearch ? (
            <>No questions match the current filter or search. Try clearing the filter or PT-ID search.</>
          ) : (
            <>No questions in the bank. Add content from the repository modules.</>
          )}
        </div>
      ) : (
        <ul className="space-y-4">
          {filteredItems.map((item) => {
            const taughtIn: PtIdToLesson | undefined =
              item.type === 'rc'
                ? (() => {
                    const m = item.topicId.match(/rc-(\d+)-(.+)/);
                    if (!m) return ptIdToLesson.get(item.id);
                    const [, modId, lessonId] = m;
                    return {
                      moduleId: parseInt(modId, 10),
                      lessonId,
                      moduleTitle: `Module ${modId}`,
                      lessonTitle: item.topicLabel,
                    };
                  })()
                : ptIdToLesson.get(item.id);
            const itemKey = `${item.topicId}-${item.id}`;
            const isExpanded = expandedItemKey === itemKey;
            return (
              <li
                key={itemKey}
                className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span className="font-mono text-sm font-semibold text-indigo-700">{item.id}</span>
                    <span className="ml-2 text-slate-500 text-sm">{item.topicLabel}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      type="button"
                      onClick={() => setExpandedItemKey(isExpanded ? null : itemKey)}
                      className="text-sm text-slate-600 hover:text-slate-900 font-medium"
                    >
                      {isExpanded ? 'Hide question' : 'Show question'}
                    </button>
                    {taughtIn ? (
                      <button
                        type="button"
                        onClick={() => onGoToLesson(taughtIn.moduleId, taughtIn.lessonId)}
                        className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline font-medium"
                      >
                        Taught in: {taughtIn.moduleTitle} → {taughtIn.lessonTitle}
                      </button>
                    ) : (
                      <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-sm">Unmapped</span>
                    )}
                  </div>
                </div>
                {item.question && !isExpanded && (
                  <p className="mt-2 text-slate-700 text-sm line-clamp-2">{item.question}</p>
                )}
                {isExpanded && (
                  <div className="mt-4">
                    <ContentBox variant="question" id={item.id} defaultExpanded>
                      {item.stimulus && (
                        <p className="mb-4 leading-relaxed text-slate-700 text-lg">{item.stimulus}</p>
                      )}
                      {item.question && (
                        <p className="mb-4 leading-relaxed text-slate-700 text-lg">{item.question}</p>
                      )}
                      {item.options?.length > 0 && <OptionsBlock items={item.options} />}
                    </ContentBox>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}

      <div className="mt-10 border-t border-slate-200 pt-8">
        <button
          type="button"
          onClick={() => setUnmappedOpen(!unmappedOpen)}
          className="flex items-center gap-2 text-slate-700 font-medium hover:text-slate-900"
        >
          {unmappedOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          Unmapped questions ({unmappedIds.length})
        </button>
        {unmappedOpen && (
          <div className="mt-4 pl-6">
            {unmappedIds.length === 0 ? (
              <p className="text-slate-600 text-sm">All questions have a lesson mapping.</p>
            ) : (
              <>
                <p className="text-slate-600 text-sm mb-2">
                  These PT-IDs do not match any lesson title. Add them to the lesson map later.
                </p>
                <ul className="font-mono text-sm text-slate-700 space-y-1 mb-4">
                  {unmappedIds.slice(0, 50).map((id) => (
                    <li key={id}>{id}</li>
                  ))}
                  {unmappedIds.length > 50 && (
                    <li className="text-slate-500">… and {unmappedIds.length - 50} more</li>
                  )}
                </ul>
                <button
                  type="button"
                  onClick={handleExportUnmappedCSV}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium"
                >
                  <Download size={16} />
                  Export unmapped (CSV)
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          disabled={isEmpty && hasFilterOrSearch}
          title={isEmpty && hasFilterOrSearch ? 'No questions to export' : 'Export current list as text'}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-100 text-indigo-800 hover:bg-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
        >
          <FileText size={16} />
          Export current (Text)
        </button>
        <button
          type="button"
          title="Export full bank as text"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-medium"
        >
          <Download size={16} />
          Export full bank (Text)
        </button>
      </div>
    </div>
  );
};
