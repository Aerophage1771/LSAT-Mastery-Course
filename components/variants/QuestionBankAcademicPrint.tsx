/*
 * QuestionBankAcademicPrint -- "Academic Print" variant
 *
 * A scholarly compendium aesthetic for the LSAT Question Bank. Wide
 * off-white margins (#fafaf7), serif body, justified prose, numbered
 * section headings (§1.1), running folios at the top, and chapter-style
 * drop caps on stimuli. Deep navy (#1e3a8a) is the single accent for
 * links and active states; everything else lives in slate/ink. Dashed
 * hairline rules divide sections; PT-IDs appear as superscript footnote
 * markers. No gradients, minimal shadows, small-caps labels throughout.
 */

import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { ContentBlock, DrillReference } from '../../types';
import inventoryData from '../../docs/operations/audits/invented-questions-inventory.json';
import { resolveIllustrativeInventoryItem } from '../../utils/courseCatalog';
import {
  generateQuestionBankCSV,
  generateQuestionBankJSON,
  generateQuestionBankIDsCSV,
  generateQuestionBankIDsText,
  QuestionBankExportRow,
} from '../../utils/export';

interface InventoryItem {
  module: number;
  moduleName: string;
  file: string;
  line: number;
  lessonTitle: string;
  cardId: string;
  questionType: string;
  difficulty: string;
  isIllustrative: boolean;
}

const typedInventory: InventoryItem[] = inventoryData as InventoryItem[];

import { Lesson1_Module1_Questions } from '../../modules/module48/Lesson1_Module1_Questions';
import { Lesson2_Module2_Questions } from '../../modules/module48/Lesson2_Module2_Questions';
import { Lesson3_Module3_Questions } from '../../modules/module48/Lesson3_Module3_Questions';
import { Lesson4_Module4_Questions } from '../../modules/module48/Lesson4_Module4_Questions';
import { Lesson5_Module5_Questions } from '../../modules/module48/Lesson5_Module5_Questions';
import { Lesson6_Module6_Questions } from '../../modules/module48/Lesson6_Module6_Questions';
import { Lesson7_Module7_Questions } from '../../modules/module48/Lesson7_Module7_Questions';
import { Lesson8_Module8_Questions } from '../../modules/module48/Lesson8_Module8_Questions';
import { Lesson9_Module9_Questions } from '../../modules/module48/Lesson9_Module9_Questions';
import { Lesson10_Module10_Questions } from '../../modules/module48/Lesson10_Module10_Questions';
import { Lesson11_Module11_Questions } from '../../modules/module48/Lesson11_Module11_Questions';
import { Lesson12_Module12_Questions } from '../../modules/module48/Lesson12_Module12_Questions';
import { Lesson13_Module13_Questions } from '../../modules/module48/Lesson13_Module13_Questions';
import { Lesson14_Module14_Questions } from '../../modules/module48/Lesson14_Module14_Questions';
import { Lesson15_Module15_Questions } from '../../modules/module48/Lesson15_Module15_Questions';
import { Lesson16_Module16_Questions } from '../../modules/module48/Lesson16_Module16_Questions';
import { Lesson17_Module17_Questions } from '../../modules/module48/Lesson17_Module17_Questions';
import { Lesson18_Module18_Questions } from '../../modules/module48/Lesson18_Module18_Questions';
import { Lesson19_Module19_Questions } from '../../modules/module48/Lesson19_Module19_Questions';
import { Lesson20_Module20_Questions } from '../../modules/module48/Lesson20_Module20_Questions';
import { Lesson21_Module55_Questions } from '../../modules/module48/Lesson21_Module55_Questions';
import { Lesson22_Module59_Questions } from '../../modules/module48/Lesson22_Module59_Questions';
import { Lesson1_QuestionRepository } from '../../modules/module49/Lesson1_QuestionRepository';
import { Lesson1_AdvancedRCQuestionRepository } from '../../modules/module53/Lesson1_AdvancedRCQuestionRepository';

const LR_LESSONS = [
  Lesson1_Module1_Questions,
  Lesson2_Module2_Questions,
  Lesson3_Module3_Questions,
  Lesson4_Module4_Questions,
  Lesson5_Module5_Questions,
  Lesson6_Module6_Questions,
  Lesson7_Module7_Questions,
  Lesson8_Module8_Questions,
  Lesson9_Module9_Questions,
  Lesson10_Module10_Questions,
  Lesson11_Module11_Questions,
  Lesson12_Module12_Questions,
  Lesson13_Module13_Questions,
  Lesson14_Module14_Questions,
  Lesson15_Module15_Questions,
  Lesson16_Module16_Questions,
  Lesson17_Module17_Questions,
  Lesson18_Module18_Questions,
  Lesson19_Module19_Questions,
  Lesson20_Module20_Questions,
  Lesson21_Module55_Questions,
  Lesson22_Module59_Questions,
];

const RC_LESSONS = [Lesson1_QuestionRepository, Lesson1_AdvancedRCQuestionRepository];

interface ParsedQuestion {
  id: string;
  ptId: string;
  typeName: string;
  category: 'LR' | 'RC';
  stimulus: string;
  question: string;
  options: string[];
  passageTitle?: string;
}

interface ResolvedIllustrativeItem extends InventoryItem {
  routeModuleId: number;
  lessonId: string;
  resolvedModuleTitle: string;
  resolvedLessonTitle: string;
}

const sanitize = (html: string) => DOMPurify.sanitize(html);

const parseInline = (text: string): string => {
  if (!text) return '';
  let f = text;
  f = f.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
  f = f.replace(/\*(.*?)\*/g, '<em class="text-slate-800">$1</em>');
  return sanitize(f);
};

function stripHtml(html: string): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent ?? tmp.innerText ?? '';
}

function extractPtId(accordionTitle: string): string {
  const match = accordionTitle.match(/\((PT-[^)]+)\)/);
  return match ? match[1] : accordionTitle;
}

function extractLRQuestions(counter: { value: number }): ParsedQuestion[] {
  const questions: ParsedQuestion[] = [];

  for (const lesson of LR_LESSONS) {
    const typeName = lesson.title.replace(/^Module\s+\d+:\s*/, '');
    const blocks = lesson.content;
    if (typeof blocks === 'string') continue;

    for (const block of blocks) {
      if (block.type !== 'accordion') continue;
      const accordion = block as { type: 'accordion'; title: string; content: string | ContentBlock[] };
      if (typeof accordion.content === 'string') continue;

      const ptId = extractPtId(accordion.title);
      let stimulus = '';
      let question = '';
      let options: string[] = [];
      let foundStimulusHeader = false;
      let foundQuestionHeader = false;

      for (const inner of accordion.content) {
        if (inner.type === 'h4') {
          const heading = (inner as { type: 'h4'; text: string }).text.toLowerCase();
          if (heading === 'stimulus') {
            foundStimulusHeader = true;
            foundQuestionHeader = false;
          } else if (heading === 'question') {
            foundQuestionHeader = true;
            foundStimulusHeader = false;
          }
        } else if (inner.type === 'blockquote' && (foundStimulusHeader || !stimulus)) {
          stimulus = (inner as { type: 'blockquote'; text: string }).text;
          stimulus = stimulus.replace(/^\*\*Stimulus:\*\*\s*/, '');
          foundStimulusHeader = false;
        } else if (inner.type === 'paragraph' && (foundQuestionHeader || !question)) {
          question = (inner as { type: 'paragraph'; text: string }).text;
          question = question.replace(/^\*\*Question:\*\*\s*/, '');
          foundQuestionHeader = false;
        } else if (inner.type === 'options') {
          options = (inner as { type: 'options'; items: string[] }).items;
        }
      }

      if (stimulus || question) {
        counter.value++;
        questions.push({
          id: `qb-${counter.value}`,
          ptId,
          typeName,
          category: 'LR',
          stimulus,
          question,
          options,
        });
      }
    }
  }

  return questions;
}

function extractRCQuestions(counter: { value: number }): ParsedQuestion[] {
  const questions: ParsedQuestion[] = [];

  for (const lesson of RC_LESSONS) {
    const blocks = lesson.content;
    if (typeof blocks === 'string') continue;

    let currentPassageTitle = '';
    let currentPassageText = '';

    for (const block of blocks) {
      if (block.type !== 'accordion') continue;
      const accordion = block as { type: 'accordion'; title: string; content: string | ContentBlock[] };

      if (accordion.title.startsWith('Passage:')) {
        currentPassageTitle = accordion.title.replace(/^Passage:\s*/, '');
        currentPassageText = typeof accordion.content === 'string' ? accordion.content : '';
        continue;
      }

      const questionMatch = accordion.title.match(/^Question\s+\d+:\s*(.+)$/);
      if (!questionMatch) continue;
      if (typeof accordion.content === 'string') continue;

      const typeName = questionMatch[1].trim();
      const ptId = extractPtId(currentPassageTitle) || currentPassageTitle;

      let questionText = '';
      let options: string[] = [];

      for (const inner of accordion.content) {
        if (inner.type === 'blockquote' && !questionText) {
          questionText = (inner as { type: 'blockquote'; text: string }).text;
          questionText = questionText.replace(/^\*\*Question:\*\*\s*/, '');
        } else if (inner.type === 'options') {
          options = (inner as { type: 'options'; items: string[] }).items;
        }
      }

      if (questionText || options.length > 0) {
        const passageSnippet =
          currentPassageText.length > 300 ? currentPassageText.slice(0, 300) + '…' : currentPassageText;

        counter.value++;
        questions.push({
          id: `qb-${counter.value}`,
          ptId,
          typeName,
          category: 'RC',
          stimulus: passageSnippet,
          question: questionText,
          options,
          passageTitle: currentPassageTitle.replace(/\s*\([^)]*\)\s*$/, ''),
        });
      }
    }
  }

  return questions;
}

function extractAllQuestions(): ParsedQuestion[] {
  const counter = { value: 0 };
  const lr = extractLRQuestions(counter);
  const rc = extractRCQuestions(counter);
  return [...lr, ...rc];
}

const ALL_QUESTIONS = extractAllQuestions();

const cleanOptionText = (item: string): string => {
  return item
    .replace(/\[\d+(\.\d+)?%\]/g, '')
    .replace(/\(Correct\)/g, '')
    .replace(/^\*\*\([A-E]\)\*\*\s*/, '')
    .trim();
};

const formatOptionForExport = (item: string, index: number): string => {
  const label = String.fromCharCode(65 + index);
  const isCorrect = item.includes('(Correct)');
  return `${label}. ${cleanOptionText(item)}${isCorrect ? ' (Correct)' : ''}`;
};

const SMALL_CAPS = 'uppercase tracking-[0.18em] text-[10.5px]';

const OptionItem: React.FC<{
  item: string;
  index: number;
  revealed: boolean;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ item, index, revealed, isSelected, onSelect }) => {
  const isCorrect = item.includes('(Correct)');
  const cleanText = item
    .replace(/\[\d+(\.\d+)?%\]/g, '')
    .replace('(Correct)', '')
    .replace(/^\*\*\([A-E]\)\*\*\s*/, '')
    .trim();
  const statsMatch = item.match(/\[(\d+(\.\d+)?%)\]/);
  const stats = statsMatch ? statsMatch[1] : null;

  const letter = String.fromCharCode(97 + index); // a, b, c, ...

  let containerCls = 'flex items-start gap-4 py-2.5 pl-4 pr-3 transition-colors duration-150 ';
  if (revealed) {
    if (isCorrect) {
      containerCls += 'border-l-2 border-[#1e3a8a] bg-transparent';
    } else if (isSelected) {
      containerCls += 'border-l border-slate-300 opacity-70';
    } else {
      containerCls += 'border-l border-transparent opacity-50';
    }
  } else {
    containerCls += 'border-l border-transparent hover:border-[#1e3a8a] cursor-pointer';
  }

  return (
    <div
      className={containerCls}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelect();
      }}
    >
      <span
        className={`flex-shrink-0 font-serif italic text-[13px] mt-[2px] ${SMALL_CAPS} ${
          revealed && isCorrect ? 'text-[#1e3a8a] font-semibold' : 'text-slate-500'
        }`}
        style={{ fontVariant: 'small-caps' }}
      >
        ({letter})
      </span>
      <div className="flex-1 flex justify-between items-start gap-3">
        <span
          className={`text-[15px] leading-relaxed text-justify ${
            revealed && isCorrect
              ? 'text-slate-900'
              : revealed && isSelected
                ? 'text-slate-600'
                : 'text-slate-700'
          }`}
          dangerouslySetInnerHTML={{ __html: parseInline(cleanText) }}
        />
        <div className="flex-shrink-0 flex items-center gap-2 pt-0.5">
          {revealed && stats && (
            <span className="text-[11px] font-mono text-slate-400">{stats}</span>
          )}
          {revealed && isCorrect && (
            <span className="italic text-[11px] text-[#1e3a8a]">· correct</span>
          )}
        </div>
      </div>
    </div>
  );
};

const QuestionCardItem: React.FC<{
  q: ParsedQuestion;
  itemNumber: number;
  isExpanded: boolean;
  onToggle: () => void;
  drillCrossReferences: Record<string, DrillReference>;
}> = ({ q, itemNumber, isExpanded, onToggle, drillCrossReferences }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (index: number) => {
    if (!revealed) {
      setSelectedIndex(index);
      setRevealed(true);
    }
  };

  const plainStimulus = stripHtml(parseInline(q.stimulus));
  const truncated = plainStimulus.length > 220 ? plainStimulus.slice(0, 220) + '…' : plainStimulus;

  const sectionPrefix = q.category === 'LR' ? '§1' : '§2';

  return (
    <article className="py-6">
      <button onClick={onToggle} className="w-full text-left group">
        <header className="flex items-baseline gap-3 mb-3 flex-wrap">
          <span className="font-serif text-[13px] text-slate-500 tabular-nums">
            {sectionPrefix}.{itemNumber}
          </span>
          <h3 className="font-serif text-[17px] text-slate-900 tracking-normal">
            Item {itemNumber}.
            <span className="italic text-slate-700"> — {q.typeName}</span>
            <span className={`ml-2 text-slate-400 ${SMALL_CAPS}`} style={{ fontVariant: 'small-caps' }}>
              · {q.category === 'LR' ? 'Logical Reasoning' : 'Reading Comprehension'}
            </span>
          </h3>
          <sup className="font-serif text-[11px] text-[#1e3a8a] tabular-nums">[{q.ptId}]</sup>
          {drillCrossReferences[q.ptId] && (
            <span
              className={`italic text-[11px] text-[#1e3a8a] ${SMALL_CAPS}`}
              style={{ fontVariant: 'small-caps' }}
            >
              · drill extant
            </span>
          )}
        </header>
        {!isExpanded && (
          <p className="text-[14.5px] text-slate-600 leading-relaxed text-justify font-serif line-clamp-2">
            {truncated}
          </p>
        )}
        {!isExpanded && (
          <span
            className={`mt-2 inline-block text-[#1e3a8a] italic text-[12px] group-hover:underline ${SMALL_CAPS}`}
            style={{ fontVariant: 'small-caps' }}
          >
            read full item →
          </span>
        )}
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-5">
          {drillCrossReferences[q.ptId] && (
            <div className="text-[12.5px] italic text-slate-600">
              See also:{' '}
              <Link
                to={`/module/${drillCrossReferences[q.ptId].moduleId}/lesson/${drillCrossReferences[q.ptId].lessonId}`}
                className="text-[#1e3a8a] underline underline-offset-2 hover:no-underline"
                onClick={(e) => e.stopPropagation()}
              >
                Module {drillCrossReferences[q.ptId].moduleId}: {drillCrossReferences[q.ptId].moduleTitle} —{' '}
                {drillCrossReferences[q.ptId].lessonTitle}
              </Link>
            </div>
          )}
          {q.passageTitle && (
            <div
              className={`text-slate-600 italic ${SMALL_CAPS}`}
              style={{ fontVariant: 'small-caps' }}
            >
              Passage: <span className="not-italic font-serif text-slate-800">{q.passageTitle}</span>
            </div>
          )}

          <section>
            <h4
              className={`text-slate-500 mb-2 ${SMALL_CAPS}`}
              style={{ fontVariant: 'small-caps' }}
            >
              {q.category === 'RC' ? 'Passage Excerpt' : 'Stimulus'}
            </h4>
            <div
              className="font-serif text-[15.5px] text-slate-800 leading-relaxed text-justify first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:text-slate-900"
              dangerouslySetInnerHTML={{ __html: parseInline(q.stimulus) }}
            />
          </section>

          {q.question && (
            <section>
              <h4
                className={`text-slate-500 mb-2 ${SMALL_CAPS}`}
                style={{ fontVariant: 'small-caps' }}
              >
                Question
              </h4>
              <div
                className="font-serif text-[15.5px] text-slate-900 leading-relaxed italic"
                dangerouslySetInnerHTML={{ __html: parseInline(q.question) }}
              />
            </section>
          )}

          {q.options.length > 0 && (
            <section>
              <h4
                className={`text-slate-500 mb-2 ${SMALL_CAPS}`}
                style={{ fontVariant: 'small-caps' }}
              >
                Answer Choices
              </h4>
              <div className="divide-y divide-dashed divide-slate-200">
                {q.options.map((opt, i) => (
                  <OptionItem
                    key={i}
                    item={opt}
                    index={i}
                    revealed={revealed}
                    isSelected={selectedIndex === i}
                    onSelect={() => handleSelect(i)}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
      <div className="mt-6 border-t border-dashed border-slate-300" />
    </article>
  );
};

interface QuestionBankProps {
  drillCrossReferences: Record<string, DrillReference>;
}

export const QuestionBankAcademicPrint: React.FC<QuestionBankProps> = ({ drillCrossReferences }) => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'LR' | 'RC' | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'real' | 'illustrative'>('real');
  const [showInUseOnly, setShowInUseOnly] = useState(false);
  const [showNotInUseOnly, setShowNotInUseOnly] = useState(false);
  const [exportMenuOpen, setExportMenuOpen] = useState(false);
  const ptParam = searchParams.get('pt')?.trim();

  const resolvedIllustrativeInventory = useMemo<ResolvedIllustrativeItem[]>(
    () =>
      typedInventory.map((item) => {
        const resolved = resolveIllustrativeInventoryItem(item);
        return {
          ...item,
          routeModuleId: resolved.routeModuleId,
          lessonId: resolved.lessonId,
          resolvedModuleTitle: resolved.moduleTitle,
          resolvedLessonTitle: resolved.lessonTitle,
        };
      }),
    [],
  );

  useEffect(() => {
    if (!ptParam) return;
    setActiveTab('real');
    setSelectedType(null);
    setSelectedCategory(null);
    setShowInUseOnly(false);
    setShowNotInUseOnly(false);
    setSearchQuery(ptParam);
    const exactMatch = ALL_QUESTIONS.find((question) => question.ptId === ptParam);
    setExpandedId(exactMatch?.id ?? null);
  }, [ptParam]);

  const lrTypeCountMap = useMemo(() => {
    const map = new Map<string, number>();
    for (const q of ALL_QUESTIONS) {
      if (q.category === 'LR') {
        map.set(q.typeName, (map.get(q.typeName) ?? 0) + 1);
      }
    }
    return map;
  }, []);

  const rcTypeCountMap = useMemo(() => {
    const map = new Map<string, number>();
    for (const q of ALL_QUESTIONS) {
      if (q.category === 'RC') {
        map.set(q.typeName, (map.get(q.typeName) ?? 0) + 1);
      }
    }
    return map;
  }, []);

  const illustrativeTypeCountMap = useMemo(() => {
    const map = new Map<string, number>();
    for (const item of resolvedIllustrativeInventory) {
      map.set(item.questionType, (map.get(item.questionType) ?? 0) + 1);
    }
    return map;
  }, [resolvedIllustrativeInventory]);

  const sortedIllustrativeTypes = useMemo(
    () => Array.from(illustrativeTypeCountMap.entries()).sort((a, b) => a[0].localeCompare(b[0])),
    [illustrativeTypeCountMap],
  );

  const filteredIllustrative = useMemo(() => {
    let result = resolvedIllustrativeInventory;

    if (selectedType) {
      result = result.filter((item) => item.questionType === selectedType);
    }

    if (searchQuery.trim()) {
      const lower = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.resolvedLessonTitle.toLowerCase().includes(lower) ||
          item.resolvedModuleTitle.toLowerCase().includes(lower) ||
          item.cardId.toLowerCase().includes(lower) ||
          item.questionType.toLowerCase().includes(lower),
      );
    }

    return result;
  }, [resolvedIllustrativeInventory, searchQuery, selectedType]);

  const totalTypeCount = lrTypeCountMap.size + rcTypeCountMap.size;

  const sortedLRTypes = useMemo(
    () => Array.from(lrTypeCountMap.entries()).sort((a, b) => a[0].localeCompare(b[0])),
    [lrTypeCountMap],
  );

  const sortedRCTypes = useMemo(
    () => Array.from(rcTypeCountMap.entries()).sort((a, b) => a[0].localeCompare(b[0])),
    [rcTypeCountMap],
  );

  const filteredQuestions = useMemo(() => {
    let result = ALL_QUESTIONS;

    if (selectedCategory) {
      result = result.filter((q) => q.category === selectedCategory);
    }

    if (selectedType) {
      result = result.filter((q) => q.typeName === selectedType);
    }

    if (showInUseOnly) {
      result = result.filter((q) => drillCrossReferences[q.ptId]);
    }
    if (showNotInUseOnly) {
      result = result.filter((q) => !drillCrossReferences[q.ptId]);
    }

    if (searchQuery.trim()) {
      const lower = searchQuery.toLowerCase();
      result = result.filter(
        (q) =>
          q.stimulus.toLowerCase().includes(lower) ||
          q.question.toLowerCase().includes(lower) ||
          q.ptId.toLowerCase().includes(lower) ||
          q.typeName.toLowerCase().includes(lower) ||
          (q.passageTitle?.toLowerCase().includes(lower) ?? false),
      );
    }

    return result;
  }, [selectedType, selectedCategory, searchQuery, showInUseOnly, showNotInUseOnly, drillCrossReferences]);

  const exportRows = useMemo<QuestionBankExportRow[]>(() => {
    if (activeTab === 'real') {
      return filteredQuestions.map((q) => ({
        id: q.ptId,
        questionType: q.typeName,
        isIllustrative: false,
        inUse: Boolean(drillCrossReferences[q.ptId]),
        stimulus: q.stimulus,
        question: q.question,
        options: q.options.map(formatOptionForExport),
      }));
    }

    return filteredIllustrative.map((item) => ({
      id: item.cardId,
      questionType: item.questionType,
      isIllustrative: true,
      inUse: false,
      stimulus: '',
      question: '',
      options: [],
    }));
  }, [activeTab, filteredQuestions, filteredIllustrative, drillCrossReferences]);

  const missingOrIllustrativeRows = useMemo(
    () => exportRows.filter((row) => row.isIllustrative || !row.inUse),
    [exportRows],
  );

  const downloadExport = (content: string, filename: string, extension: string, mime: string) => {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setExportMenuOpen(false);
  };

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#fafaf7] text-slate-900 font-serif min-h-screen">
      {/* Running folio / runhead */}
      <div className="border-b border-dashed border-slate-300">
        <div
          className={`max-w-5xl mx-auto px-6 py-2 text-center text-[11px] text-slate-500 ${SMALL_CAPS}`}
          style={{ fontVariant: 'small-caps' }}
        >
          Question Bank · A Compendium of LSAT Items · Vol. XXIII
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-baseline gap-2 text-[13px] italic text-slate-500">
        <Link to="/" className="text-[#1e3a8a] underline underline-offset-2 hover:no-underline">
          ← Dashboard
        </Link>
        <span className="text-slate-400">/</span>
        <span className="not-italic text-slate-700">Question Bank</span>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16 flex gap-10 lg:flex-row flex-col">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/20 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar -- §INDEX */}
        <aside
          className={`fixed lg:sticky top-0 lg:top-6 left-0 z-40 lg:z-0 h-full lg:h-fit w-72 lg:w-56 bg-[#fafaf7] lg:bg-transparent border-r lg:border-r-0 border-slate-200 p-6 lg:p-0 flex-shrink-0 transition-transform duration-200 lg:translate-x-0 overflow-y-auto ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <h2
              className={`text-slate-900 ${SMALL_CAPS} font-semibold`}
              style={{ fontVariant: 'small-caps' }}
            >
              § Index
            </h2>
            <button
              className="lg:hidden text-slate-500 hover:text-slate-800 text-xl"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close index"
            >
              ×
            </button>
          </div>
          <p className="text-[11.5px] italic text-slate-500 mb-5">
            {activeTab === 'real'
              ? `${ALL_QUESTIONS.length} items · ${totalTypeCount} types`
              : `${resolvedIllustrativeInventory.length} illustrative · ${illustrativeTypeCountMap.size} types`}
          </p>

          <nav className="text-[13px] leading-relaxed">
            {activeTab === 'real' ? (
              <>
                <button
                  onClick={() => {
                    setSelectedType(null);
                    setSelectedCategory(null);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left py-1 flex items-baseline justify-between ${
                    selectedType === null && selectedCategory === null
                      ? 'text-[#1e3a8a] italic'
                      : 'text-slate-700 hover:text-[#1e3a8a]'
                  }`}
                >
                  <span>All Items</span>
                  <span className="text-[11px] text-slate-500 tabular-nums">{ALL_QUESTIONS.length}</span>
                </button>

                <div className="mt-5 mb-1">
                  <span
                    className={`text-slate-500 ${SMALL_CAPS}`}
                    style={{ fontVariant: 'small-caps' }}
                  >
                    §1. Logical Reasoning
                  </span>
                </div>
                <ol className="list-none space-y-0.5">
                  {sortedLRTypes.map(([name, count], idx) => {
                    const active = selectedType === name && selectedCategory === 'LR';
                    return (
                      <li key={`lr-${name}`} className="flex items-baseline gap-2">
                        <span className="text-[11px] text-slate-400 tabular-nums flex-shrink-0 w-8">
                          §1.{idx + 1}
                        </span>
                        <button
                          onClick={() => {
                            setSelectedType(name);
                            setSelectedCategory('LR');
                            setSidebarOpen(false);
                          }}
                          className={`flex-1 text-left py-0.5 flex items-baseline justify-between gap-2 ${
                            active ? 'text-[#1e3a8a] italic' : 'text-slate-700 hover:text-[#1e3a8a]'
                          }`}
                        >
                          <span className="truncate">{name}</span>
                          <span className="text-[11px] text-slate-400 tabular-nums">{count}</span>
                        </button>
                      </li>
                    );
                  })}
                </ol>

                <div className="mt-5 mb-1">
                  <span
                    className={`text-slate-500 ${SMALL_CAPS}`}
                    style={{ fontVariant: 'small-caps' }}
                  >
                    §2. Reading Comprehension
                  </span>
                </div>
                <ol className="list-none space-y-0.5">
                  {sortedRCTypes.map(([name, count], idx) => {
                    const active = selectedType === name && selectedCategory === 'RC';
                    return (
                      <li key={`rc-${name}`} className="flex items-baseline gap-2">
                        <span className="text-[11px] text-slate-400 tabular-nums flex-shrink-0 w-8">
                          §2.{idx + 1}
                        </span>
                        <button
                          onClick={() => {
                            setSelectedType(name);
                            setSelectedCategory('RC');
                            setSidebarOpen(false);
                          }}
                          className={`flex-1 text-left py-0.5 flex items-baseline justify-between gap-2 ${
                            active ? 'text-[#1e3a8a] italic' : 'text-slate-700 hover:text-[#1e3a8a]'
                          }`}
                        >
                          <span className="truncate">{name}</span>
                          <span className="text-[11px] text-slate-400 tabular-nums">{count}</span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setSelectedType(null);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left py-1 flex items-baseline justify-between ${
                    selectedType === null ? 'text-[#1e3a8a] italic' : 'text-slate-700 hover:text-[#1e3a8a]'
                  }`}
                >
                  <span>All Illustrative</span>
                  <span className="text-[11px] text-slate-500 tabular-nums">{typedInventory.length}</span>
                </button>

                <div className="mt-5 mb-1">
                  <span
                    className={`text-slate-500 ${SMALL_CAPS}`}
                    style={{ fontVariant: 'small-caps' }}
                  >
                    §3. Illustrative Types
                  </span>
                </div>
                <ol className="list-none space-y-0.5">
                  {sortedIllustrativeTypes.map(([name, count], idx) => {
                    const active = selectedType === name;
                    return (
                      <li key={`ill-${name}`} className="flex items-baseline gap-2">
                        <span className="text-[11px] text-slate-400 tabular-nums flex-shrink-0 w-8">
                          §3.{idx + 1}
                        </span>
                        <button
                          onClick={() => {
                            setSelectedType(name);
                            setSelectedCategory(null);
                            setSidebarOpen(false);
                          }}
                          className={`flex-1 text-left py-0.5 flex items-baseline justify-between gap-2 ${
                            active ? 'text-[#1e3a8a] italic' : 'text-slate-700 hover:text-[#1e3a8a]'
                          }`}
                        >
                          <span className="truncate">{name}</span>
                          <span className="text-[11px] text-slate-400 tabular-nums">{count}</span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </>
            )}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 max-w-3xl">
          {/* Tab toggle -- dashed-border academic tabs */}
          <div className="flex items-baseline gap-0 mb-5 border-b border-dashed border-slate-300">
            <button
              className={`px-4 pb-2 -mb-px font-serif text-[14px] ${SMALL_CAPS} transition-colors ${
                activeTab === 'real'
                  ? 'text-[#1e3a8a] border-b-2 border-[#1e3a8a]'
                  : 'text-slate-500 border-b-2 border-dashed border-transparent hover:text-slate-800'
              }`}
              style={{ fontVariant: 'small-caps' }}
              onClick={() => {
                setActiveTab('real');
                setSelectedType(null);
                setSelectedCategory(null);
              }}
            >
              PrepTest Items <span className="not-italic tabular-nums text-slate-400">({ALL_QUESTIONS.length})</span>
            </button>
            <button
              className={`px-4 pb-2 -mb-px font-serif text-[14px] ${SMALL_CAPS} transition-colors ${
                activeTab === 'illustrative'
                  ? 'text-[#1e3a8a] border-b-2 border-[#1e3a8a]'
                  : 'text-slate-500 border-b-2 border-dashed border-transparent hover:text-slate-800'
              }`}
              style={{ fontVariant: 'small-caps' }}
              onClick={() => {
                setActiveTab('illustrative');
                setSelectedType(null);
                setSelectedCategory(null);
              }}
            >
              Illustrative <span className="not-italic tabular-nums text-slate-400">({typedInventory.length})</span>
            </button>
            <button
              className="lg:hidden ml-auto mb-2 text-[12px] italic text-[#1e3a8a] underline underline-offset-2"
              onClick={() => setSidebarOpen(true)}
            >
              open index
            </button>
          </div>

          {/* Header -- article frontispiece */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h1 className="font-serif text-[28px] text-slate-900 tracking-tight leading-tight">
                  Question Bank
                </h1>
                <p
                  className={`mt-1 italic text-slate-500 text-[12.5px] ${SMALL_CAPS}`}
                  style={{ fontVariant: 'small-caps' }}
                >
                  A Compendium of LSAT Items · Volume XXIII
                </p>
              </div>
              <div className="relative">
                <button
                  onClick={() => setExportMenuOpen((open) => !open)}
                  className="font-serif italic text-[13px] text-[#1e3a8a] hover:underline underline-offset-2"
                >
                  ↪ Export
                </button>
                {exportMenuOpen && (
                  <div className="absolute right-0 mt-2 w-72 rounded-none border border-slate-300 bg-[#fafaf7] shadow-sm z-30 p-4">
                    <p
                      className={`text-slate-500 mb-3 ${SMALL_CAPS}`}
                      style={{ fontVariant: 'small-caps' }}
                    >
                      References
                    </p>
                    <ol className="list-none space-y-2 text-[13px] font-serif">
                      <li className="pl-6 -indent-6">
                        <button
                          onClick={() =>
                            downloadExport(
                              generateQuestionBankJSON(exportRows),
                              `question-bank-full-${activeTab}`,
                              'json',
                              'application/json',
                            )
                          }
                          className="text-left text-slate-700 hover:text-[#1e3a8a] italic"
                        >
                          Full Database, <span className="not-italic">JSON</span>.
                        </button>
                      </li>
                      <li className="pl-6 -indent-6">
                        <button
                          onClick={() =>
                            downloadExport(
                              generateQuestionBankCSV(exportRows),
                              `question-bank-full-${activeTab}`,
                              'csv',
                              'text/csv;charset=utf-8',
                            )
                          }
                          className="text-left text-slate-700 hover:text-[#1e3a8a] italic"
                        >
                          Full Database, <span className="not-italic">CSV</span>.
                        </button>
                      </li>
                      <li className="my-2 border-t border-dashed border-slate-300" />
                      <li className="pl-6 -indent-6">
                        <button
                          onClick={() =>
                            downloadExport(
                              generateQuestionBankIDsText(exportRows),
                              `question-bank-ids-${activeTab}`,
                              'txt',
                              'text/plain;charset=utf-8',
                            )
                          }
                          className="text-left text-slate-700 hover:text-[#1e3a8a] italic"
                        >
                          IDs Only, <span className="not-italic">TXT</span>.
                        </button>
                      </li>
                      <li className="pl-6 -indent-6">
                        <button
                          onClick={() =>
                            downloadExport(
                              generateQuestionBankIDsCSV(exportRows),
                              `question-bank-ids-${activeTab}`,
                              'csv',
                              'text/csv;charset=utf-8',
                            )
                          }
                          className="text-left text-slate-700 hover:text-[#1e3a8a] italic"
                        >
                          IDs Only, <span className="not-italic">CSV</span>.
                        </button>
                      </li>
                      <li className="pl-6 -indent-6">
                        <button
                          onClick={() =>
                            downloadExport(
                              generateQuestionBankIDsText(missingOrIllustrativeRows),
                              `question-bank-missing-or-illustrative-ids-${activeTab}`,
                              'txt',
                              'text/plain;charset=utf-8',
                            )
                          }
                          className="text-left text-slate-700 hover:text-[#1e3a8a] italic"
                        >
                          Missing / Illustrative IDs, <span className="not-italic">TXT</span>.
                        </button>
                      </li>
                    </ol>
                  </div>
                )}
              </div>
            </div>

            {/* Search -- underline style */}
            <div className="relative mt-4 mb-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  activeTab === 'real'
                    ? 'Search stimuli, questions, PT-IDs…'
                    : 'Search by lesson, module, card ID…'
                }
                className="w-full pl-0 pr-8 py-2 border-0 border-b border-slate-400 bg-transparent text-[14.5px] text-slate-800 placeholder:text-slate-400 placeholder:italic font-serif focus:outline-none focus:border-[#1e3a8a] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-sm italic"
                  aria-label="Clear search"
                >
                  clear
                </button>
              )}
            </div>

            {activeTab === 'real' && (
              <div className="flex items-baseline gap-5 mt-3">
                <button
                  onClick={() => setShowInUseOnly(!showInUseOnly)}
                  className={`${SMALL_CAPS} transition-colors ${
                    showInUseOnly ? 'text-[#1e3a8a]' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  style={{ fontVariant: 'small-caps' }}
                >
                  {showInUseOnly ? '[✓] ' : ''}in use only
                </button>
                <button
                  onClick={() => setShowNotInUseOnly(!showNotInUseOnly)}
                  className={`${SMALL_CAPS} transition-colors ${
                    showNotInUseOnly ? 'text-[#1e3a8a]' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  style={{ fontVariant: 'small-caps' }}
                >
                  {showNotInUseOnly ? '[✓] ' : ''}not in use
                </button>
              </div>
            )}

            <p className="mt-4 text-[12.5px] italic text-slate-500 font-serif">
              {activeTab === 'real' ? (
                <>
                  {filteredQuestions.length === ALL_QUESTIONS.length
                    ? `Showing all ${ALL_QUESTIONS.length} items.`
                    : `Showing ${filteredQuestions.length} of ${ALL_QUESTIONS.length} items.`}
                </>
              ) : (
                <>
                  {filteredIllustrative.length === typedInventory.length
                    ? `Showing all ${typedInventory.length} illustrative items.`
                    : `Showing ${filteredIllustrative.length} of ${typedInventory.length} illustrative items.`}
                </>
              )}
              {(selectedType || selectedCategory) && (
                <>
                  {' '}
                  <span className="text-slate-400">—</span>{' '}
                  {selectedCategory && (
                    <span className="text-[#1e3a8a] not-italic font-semibold">{selectedCategory}</span>
                  )}
                  {selectedType && (
                    <span className="text-[#1e3a8a] not-italic">
                      {selectedCategory ? ' · ' : ''}
                      {selectedType}
                    </span>
                  )}{' '}
                  <button
                    onClick={() => {
                      setSelectedType(null);
                      setSelectedCategory(null);
                    }}
                    className="text-slate-400 hover:text-slate-700 underline underline-offset-2"
                  >
                    (clear)
                  </button>
                </>
              )}
            </p>
          </div>

          <div className="border-t border-dashed border-slate-300" />

          {/* Question body */}
          <div className="pb-16">
            {activeTab === 'real' ? (
              <>
                {filteredQuestions.length === 0 ? (
                  <p className="py-20 text-center italic text-slate-500 font-serif text-[15px]">
                    No items match the current query.
                  </p>
                ) : (
                  filteredQuestions.map((q, idx) => (
                    <QuestionCardItem
                      key={q.id}
                      q={q}
                      itemNumber={idx + 1}
                      isExpanded={expandedId === q.id}
                      onToggle={() => handleToggle(q.id)}
                      drillCrossReferences={drillCrossReferences}
                    />
                  ))
                )}
              </>
            ) : (
              <>
                {filteredIllustrative.length === 0 ? (
                  <p className="py-20 text-center italic text-slate-500 font-serif text-[15px]">
                    No items match the current query.
                  </p>
                ) : (
                  filteredIllustrative.map((item, idx) => (
                    <article key={`${item.file}-${item.cardId}`} className="py-5">
                      <header className="flex items-baseline gap-3 mb-2 flex-wrap">
                        <span className="font-serif text-[13px] text-slate-500 tabular-nums">
                          §3.{idx + 1}
                        </span>
                        <h3 className="font-serif text-[16px] text-slate-900">
                          Item {idx + 1}.
                          <span className="italic text-slate-700"> — {item.questionType}</span>
                        </h3>
                        <sup className="font-serif text-[11px] text-[#1e3a8a]">[{item.cardId}]</sup>
                        <span
                          className={`italic text-[11px] text-slate-500 ${SMALL_CAPS}`}
                          style={{ fontVariant: 'small-caps' }}
                        >
                          · illustrative
                        </span>
                        {item.difficulty !== 'unset' && (
                          <span className="italic text-[11px] text-slate-400">· {item.difficulty}</span>
                        )}
                      </header>
                      <p className="font-serif text-[14.5px] text-slate-800 leading-relaxed">
                        {item.resolvedLessonTitle}
                      </p>
                      <p className="font-serif italic text-[12.5px] text-slate-500 mt-1">
                        Module {item.routeModuleId}: {item.resolvedModuleTitle}
                      </p>
                      <Link
                        to={`/module/${item.routeModuleId}/lesson/${item.lessonId}`}
                        className="inline-block mt-2 text-[12.5px] text-[#1e3a8a] italic underline underline-offset-2 hover:no-underline"
                      >
                        View in lesson →
                      </Link>
                      <div className="mt-5 border-t border-dashed border-slate-300" />
                    </article>
                  ))
                )}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
