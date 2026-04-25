/**
 * QuestionBankEditorialMagazine -- "Editorial Magazine" variant
 *
 * An aesthetic homage to long-form editorial websites (The Atlantic, The New Yorker online).
 * Serif display headings, generous whitespace, restrained palette (ink-black body type with
 * a deep burgundy and muted sage as the only two accents), drop caps on the stimulus of an
 * opened article-card, and horizontal hairline rules between sections. Question cards read
 * as article previews: an all-caps kicker (PT ID and category), a serif headline, a two-line
 * dek, and byline-style metadata with dot separators. No gradients, no heavy shadows --
 * typography, whitespace, and thin rules carry the entire hierarchy.
 */
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Search, ChevronDown, ChevronUp, X, ArrowLeft } from 'lucide-react';
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

/* ------------------------------------------------------------------ */
/*  Palette -- restrained, two accents only                            */
/* ------------------------------------------------------------------ */
// INK     #111418  -- body type
// PAPER   #fbfaf6  -- page background
// BURGUNDY #6b1f2a -- primary accent (LR, active nav)
// SAGE    #6b7a5a  -- secondary accent (RC)
// RULE    #d9d4c7  -- hairline dividers

const sanitize = (html: string) => DOMPurify.sanitize(html);

const parseInline = (text: string): string => {
  if (!text) return '';
  let f = text;
  f = f.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#111418]">$1</strong>');
  f = f.replace(/\*(.*?)\*/g, '<em class="italic text-[#111418]">$1</em>');
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

const toRoman = (n: number): string => {
  const romans = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii'];
  return romans[n] ?? String(n + 1);
};

/* ------------------------------------------------------------------ */
/*  Option row -- roman-numeral marker, hairline underline              */
/* ------------------------------------------------------------------ */

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

  let markerCls = 'font-serif italic text-[13px] w-8 flex-shrink-0 pt-0.5 ';
  let textCls = 'flex-1 font-serif text-[16px] leading-[1.65] ';

  if (revealed) {
    if (isCorrect) {
      markerCls += 'text-[#6b7a5a] font-semibold';
      textCls += 'text-[#111418]';
    } else if (isSelected) {
      markerCls += 'text-[#6b1f2a] line-through';
      textCls += 'text-[#6b1f2a] line-through';
    } else {
      markerCls += 'text-[#a89f8c]';
      textCls += 'text-[#8a8272]';
    }
  } else {
    markerCls += 'text-[#6b1f2a]';
    textCls += 'text-[#2a2a2a] group-hover/opt:text-[#111418]';
  }

  return (
    <div
      className={`group/opt flex items-start gap-3 py-3 border-b border-[#e5ded0] last:border-b-0 ${revealed ? '' : 'cursor-pointer'}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelect();
      }}
    >
      <span className={markerCls}>{toRoman(index)}.</span>
      <div className="flex-1 flex justify-between items-start gap-3">
        <span className={textCls} dangerouslySetInnerHTML={{ __html: parseInline(cleanText) }} />
        <div className="flex-shrink-0 flex items-center gap-2 pt-1">
          {revealed && isCorrect && (
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#6b7a5a] font-sans font-semibold">
              Correct
            </span>
          )}
          {revealed && stats && (
            <span className="text-[11px] font-mono text-[#a89f8c] tabular-nums">{stats}</span>
          )}
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Article-preview card                                                */
/* ------------------------------------------------------------------ */

const QuestionCardItem: React.FC<{
  q: ParsedQuestion;
  isExpanded: boolean;
  onToggle: () => void;
  drillCrossReferences: Record<string, DrillReference>;
}> = ({ q, isExpanded, onToggle, drillCrossReferences }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (index: number) => {
    if (!revealed) {
      setSelectedIndex(index);
      setRevealed(true);
    }
  };

  const plainStimulus = stripHtml(parseInline(q.stimulus));
  const dek = plainStimulus.length > 200 ? plainStimulus.slice(0, 200) + '…' : plainStimulus;
  const accent = q.category === 'RC' ? '#6b7a5a' : '#6b1f2a';
  const hasDrill = Boolean(drillCrossReferences[q.ptId]);

  // First letter for drop cap on expanded stimulus
  const stimulusPlain = plainStimulus.trim();
  const firstChar = stimulusPlain.charAt(0) || '';
  const stimulusHtml = parseInline(q.stimulus);

  return (
    <article className="border-t border-[#d9d4c7] first:border-t-0 py-8">
      <button onClick={onToggle} className="w-full text-left group">
        {/* Kicker: ALL CAPS small type, PT id + category */}
        <div className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.22em] font-sans font-semibold mb-3">
          <span className="text-[#6b1f2a]">{q.ptId}</span>
          <span className="text-[#d9d4c7]">/</span>
          <span className="text-[#111418]" style={{ color: accent }}>
            {q.category === 'RC' ? 'Reading Comprehension' : 'Logical Reasoning'}
          </span>
          {hasDrill && (
            <>
              <span className="text-[#d9d4c7]">/</span>
              <span className="text-[#6b7a5a]">Drill Available</span>
            </>
          )}
        </div>

        {/* Serif headline */}
        <h3 className="font-serif text-[22px] sm:text-[26px] leading-[1.2] text-[#111418] tracking-[-0.01em] mb-2 group-hover:underline decoration-[#6b1f2a] decoration-1 underline-offset-[6px]">
          {q.typeName}
          {q.passageTitle && (
            <span className="font-serif italic text-[#6b7a5a] text-[18px] sm:text-[20px]"> — {q.passageTitle}</span>
          )}
        </h3>

        {/* Dek */}
        {!isExpanded && dek && (
          <p className="font-serif text-[16px] leading-[1.6] text-[#3a3a3a] mb-3 max-w-[62ch]">{dek}</p>
        )}

        {/* Byline-style metadata with dot separators */}
        <div className="flex items-center gap-2 text-[11.5px] font-sans text-[#8a8272] italic">
          <span>Type {q.category}</span>
          <span className="text-[#d9d4c7]">·</span>
          <span>{q.options.length} options</span>
          <span className="text-[#d9d4c7]">·</span>
          <span className="not-italic uppercase tracking-[0.18em] text-[10px] font-semibold text-[#6b1f2a] flex items-center gap-1">
            {isExpanded ? (
              <>
                <ChevronUp size={11} /> Collapse
              </>
            ) : (
              <>
                <ChevronDown size={11} /> Read article
              </>
            )}
          </span>
        </div>
      </button>

      {isExpanded && (
        <div className="mt-6 max-w-[62ch]">
          {hasDrill && (
            <div className="mb-6 pb-4 border-b border-[#e5ded0]">
              <Link
                to={`/module/${drillCrossReferences[q.ptId].moduleId}/lesson/${drillCrossReferences[q.ptId].lessonId}`}
                className="text-[12px] font-sans text-[#6b1f2a] hover:text-[#4a1520] underline decoration-1 underline-offset-4"
                onClick={(e) => e.stopPropagation()}
              >
                Cross-reference: Module {drillCrossReferences[q.ptId].moduleId} —{' '}
                {drillCrossReferences[q.ptId].moduleTitle}, {drillCrossReferences[q.ptId].lessonTitle}
              </Link>
            </div>
          )}

          {/* Section label */}
          <div className="text-[10.5px] uppercase tracking-[0.22em] font-sans font-semibold text-[#8a8272] mb-3">
            {q.category === 'RC' ? 'Passage Excerpt' : 'Stimulus'}
          </div>

          {/* Drop-capped stimulus */}
          {firstChar && (
            <div className="font-serif text-[17px] leading-[1.7] text-[#111418]">
              <span className="float-left font-serif text-[64px] leading-[0.85] pr-3 pt-1 text-[#6b1f2a] font-semibold">
                {firstChar}
              </span>
              <span dangerouslySetInnerHTML={{ __html: parseInline(stimulusPlain.slice(1)) || stimulusHtml }} />
              <div className="clear-both" />
            </div>
          )}

          {q.question && (
            <>
              <hr className="my-6 border-0 border-t border-[#d9d4c7]" />
              <div className="text-[10.5px] uppercase tracking-[0.22em] font-sans font-semibold text-[#8a8272] mb-2">
                The Question
              </div>
              <div
                className="font-serif text-[18px] leading-[1.55] text-[#111418] italic"
                dangerouslySetInnerHTML={{ __html: parseInline(q.question) }}
              />
            </>
          )}

          {q.options.length > 0 && (
            <>
              <hr className="my-6 border-0 border-t border-[#d9d4c7]" />
              <div className="text-[10.5px] uppercase tracking-[0.22em] font-sans font-semibold text-[#8a8272] mb-2">
                Choices
              </div>
              <div>
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
            </>
          )}
        </div>
      )}
    </article>
  );
};

interface QuestionBankProps {
  drillCrossReferences: Record<string, DrillReference>;
}

/* ------------------------------------------------------------------ */
/*  Main component                                                      */
/* ------------------------------------------------------------------ */

export const QuestionBankEditorialMagazine: React.FC<QuestionBankProps> = ({ drillCrossReferences }) => {
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
      if (q.category === 'LR') map.set(q.typeName, (map.get(q.typeName) ?? 0) + 1);
    }
    return map;
  }, []);

  const rcTypeCountMap = useMemo(() => {
    const map = new Map<string, number>();
    for (const q of ALL_QUESTIONS) {
      if (q.category === 'RC') map.set(q.typeName, (map.get(q.typeName) ?? 0) + 1);
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
    if (selectedType) result = result.filter((item) => item.questionType === selectedType);
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
    if (selectedCategory) result = result.filter((q) => q.category === selectedCategory);
    if (selectedType) result = result.filter((q) => q.typeName === selectedType);
    if (showInUseOnly) result = result.filter((q) => drillCrossReferences[q.ptId]);
    if (showNotInUseOnly) result = result.filter((q) => !drillCrossReferences[q.ptId]);
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

  // Helper: rendered as a TOC entry
  const TocEntry: React.FC<{
    label: string;
    count: number;
    active: boolean;
    accent?: 'burgundy' | 'sage' | 'ink';
    onClick: () => void;
  }> = ({ label, count, active, accent = 'ink', onClick }) => {
    const activeColor = accent === 'sage' ? 'text-[#6b7a5a]' : accent === 'burgundy' ? 'text-[#6b1f2a]' : 'text-[#111418]';
    return (
      <button
        onClick={onClick}
        className={`w-full text-left py-2 flex items-baseline justify-between gap-3 border-b border-dotted border-[#d9d4c7] font-serif text-[14px] transition-colors ${
          active ? `${activeColor} font-semibold` : 'text-[#3a3a3a] hover:text-[#111418]'
        }`}
      >
        <span className="truncate pr-2 leading-snug">{label}</span>
        <span className="flex-shrink-0 text-[11px] font-sans tabular-nums italic text-[#8a8272]">{count}</span>
      </button>
    );
  };

  return (
    <div className="flex flex-col h-full min-h-screen bg-[#fbfaf6] text-[#111418]">
      {/* Masthead rule */}
      <div className="bg-[#fbfaf6] border-b border-[#111418] px-6 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.22em] text-[#111418] hover:text-[#6b1f2a] transition-colors"
        >
          <ArrowLeft size={13} />
          <span>Return to Desk</span>
        </Link>
        <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#111418] font-semibold">
          The Question Bank · Vol. I
        </span>
        <span className="text-[11px] font-sans italic text-[#8a8272] hidden sm:inline">
          An Anthology of Practice
        </span>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-[#111418]/20 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar -- Table of Contents pane */}
        <aside
          className={`fixed lg:sticky top-0 left-0 z-40 lg:z-0 h-full w-80 bg-[#fbfaf6] border-r border-[#d9d4c7] flex flex-col transition-transform duration-200 lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="px-6 pt-6 pb-4 border-b border-[#d9d4c7]">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-[10px] font-sans uppercase tracking-[0.28em] text-[#8a8272] mb-1">Contents</div>
                <h2 className="font-serif text-[22px] leading-[1.15] text-[#111418]">Table of Contents</h2>
              </div>
              <button
                className="lg:hidden p-1 text-[#8a8272] hover:text-[#111418]"
                onClick={() => setSidebarOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-[12px] font-serif italic text-[#8a8272] leading-snug">
              {activeTab === 'real'
                ? `${ALL_QUESTIONS.length} dispatches across ${totalTypeCount} departments.`
                : `${resolvedIllustrativeInventory.length} illustrations across ${illustrativeTypeCountMap.size} departments.`}
            </p>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-4 scrollbar-hide">
            {activeTab === 'real' ? (
              <>
                <TocEntry
                  label="All Dispatches"
                  count={ALL_QUESTIONS.length}
                  active={selectedType === null && selectedCategory === null}
                  accent="ink"
                  onClick={() => {
                    setSelectedType(null);
                    setSelectedCategory(null);
                    setSidebarOpen(false);
                  }}
                />

                <div className="pt-6 pb-1">
                  <div className="text-[10px] font-sans uppercase tracking-[0.28em] text-[#6b1f2a] font-semibold mb-1">
                    Logical Reasoning
                  </div>
                  <div className="h-px bg-[#6b1f2a] w-10 mb-2" />
                </div>
                {sortedLRTypes.map(([name, count]) => (
                  <TocEntry
                    key={`lr-${name}`}
                    label={name}
                    count={count}
                    accent="burgundy"
                    active={selectedType === name && selectedCategory === 'LR'}
                    onClick={() => {
                      setSelectedType(name);
                      setSelectedCategory('LR');
                      setSidebarOpen(false);
                    }}
                  />
                ))}

                <div className="pt-6 pb-1">
                  <div className="text-[10px] font-sans uppercase tracking-[0.28em] text-[#6b7a5a] font-semibold mb-1">
                    Reading Comprehension
                  </div>
                  <div className="h-px bg-[#6b7a5a] w-10 mb-2" />
                </div>
                {sortedRCTypes.map(([name, count]) => (
                  <TocEntry
                    key={`rc-${name}`}
                    label={name}
                    count={count}
                    accent="sage"
                    active={selectedType === name && selectedCategory === 'RC'}
                    onClick={() => {
                      setSelectedType(name);
                      setSelectedCategory('RC');
                      setSidebarOpen(false);
                    }}
                  />
                ))}
              </>
            ) : (
              <>
                <TocEntry
                  label="All Illustrations"
                  count={typedInventory.length}
                  active={selectedType === null}
                  accent="ink"
                  onClick={() => {
                    setSelectedType(null);
                    setSidebarOpen(false);
                  }}
                />
                <div className="pt-6 pb-1">
                  <div className="text-[10px] font-sans uppercase tracking-[0.28em] text-[#6b1f2a] font-semibold mb-1">
                    Departments
                  </div>
                  <div className="h-px bg-[#6b1f2a] w-10 mb-2" />
                </div>
                {sortedIllustrativeTypes.map(([name, count]) => (
                  <TocEntry
                    key={`ill-${name}`}
                    label={name}
                    count={count}
                    accent="burgundy"
                    active={selectedType === name}
                    onClick={() => {
                      setSelectedType(name);
                      setSelectedCategory(null);
                      setSidebarOpen(false);
                    }}
                  />
                ))}
              </>
            )}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Top bar -- section tabs + search */}
          <div className="sticky top-0 z-20 bg-[#fbfaf6]/95 backdrop-blur border-b border-[#d9d4c7]">
            <div className="max-w-3xl mx-auto px-5 sm:px-8 py-5 space-y-4">
              {/* Section tabs -- rendered as tab-bar with underline indicator */}
              <div className="flex items-center gap-6 border-b border-[#d9d4c7] -mx-1 px-1">
                <button
                  className={`pb-3 text-[12px] font-sans uppercase tracking-[0.22em] transition-colors border-b-2 -mb-px ${
                    activeTab === 'real'
                      ? 'border-[#6b1f2a] text-[#6b1f2a] font-semibold'
                      : 'border-transparent text-[#8a8272] hover:text-[#111418]'
                  }`}
                  onClick={() => {
                    setActiveTab('real');
                    setSelectedType(null);
                    setSelectedCategory(null);
                  }}
                >
                  PrepTest Archive{' '}
                  <span className="ml-1 font-serif italic text-[11px] normal-case tracking-normal text-[#8a8272]">
                    ({ALL_QUESTIONS.length})
                  </span>
                </button>
                <button
                  className={`pb-3 text-[12px] font-sans uppercase tracking-[0.22em] transition-colors border-b-2 -mb-px ${
                    activeTab === 'illustrative'
                      ? 'border-[#6b1f2a] text-[#6b1f2a] font-semibold'
                      : 'border-transparent text-[#8a8272] hover:text-[#111418]'
                  }`}
                  onClick={() => {
                    setActiveTab('illustrative');
                    setSelectedType(null);
                    setSelectedCategory(null);
                  }}
                >
                  Illustrative Works{' '}
                  <span className="ml-1 font-serif italic text-[11px] normal-case tracking-normal text-[#8a8272]">
                    ({typedInventory.length})
                  </span>
                </button>
              </div>

              {/* Search bar */}
              <div className="flex items-center gap-3">
                <button
                  className="lg:hidden flex-shrink-0 text-[11px] font-sans uppercase tracking-[0.2em] text-[#6b1f2a] underline underline-offset-4"
                  onClick={() => setSidebarOpen(true)}
                >
                  Index
                </button>
                <div className="relative flex-1">
                  <Search
                    size={14}
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-[#8a8272] pointer-events-none"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      activeTab === 'real'
                        ? 'Search stimuli, questions, PT identifiers…'
                        : 'Search by lesson, module, card identifier…'
                    }
                    className="w-full pl-6 pr-6 py-2 bg-transparent border-b border-[#111418] font-serif italic text-[15px] text-[#111418] placeholder:text-[#a89f8c] placeholder:italic focus:outline-none focus:border-[#6b1f2a] transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-[#8a8272] hover:text-[#6b1f2a]"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Filter chips -- "In Use" / "Not In Use" */}
              {activeTab === 'real' && (
                <div className="flex items-center gap-4 text-[11px] font-sans uppercase tracking-[0.2em]">
                  <span className="text-[#8a8272] italic normal-case tracking-normal font-serif">Filter:</span>
                  <button
                    onClick={() => setShowInUseOnly(!showInUseOnly)}
                    className={`transition-colors ${
                      showInUseOnly
                        ? 'text-[#6b1f2a] font-semibold underline underline-offset-4 decoration-1'
                        : 'text-[#8a8272] hover:text-[#111418]'
                    }`}
                  >
                    {showInUseOnly ? '✓ In Use' : 'In Use'}
                  </button>
                  <span className="text-[#d9d4c7]">·</span>
                  <button
                    onClick={() => setShowNotInUseOnly(!showNotInUseOnly)}
                    className={`transition-colors ${
                      showNotInUseOnly
                        ? 'text-[#6b7a5a] font-semibold underline underline-offset-4 decoration-1'
                        : 'text-[#8a8272] hover:text-[#111418]'
                    }`}
                  >
                    {showNotInUseOnly ? '✓ Not In Use' : 'Not In Use'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Masthead / Issue header */}
          <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-14 pb-8">
            <div className="flex items-start justify-between gap-6 pb-6 border-b-2 border-[#111418]">
              <div>
                <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#6b1f2a] font-semibold mb-3">
                  Issue No. 01 · Practice Edition
                </div>
                <h1 className="font-serif text-[44px] sm:text-[56px] leading-[1.02] tracking-[-0.015em] text-[#111418]">
                  The Question Bank
                </h1>
                <p className="mt-3 font-serif italic text-[16px] text-[#3a3a3a] max-w-[50ch] leading-snug">
                  A curated anthology of LSAT stimuli, questions, and choices — indexed, annotated, and filed
                  for close reading.
                </p>
              </div>
              <div className="relative flex-shrink-0 hidden sm:block">
                <button
                  onClick={() => setExportMenuOpen((open) => !open)}
                  className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.22em] text-[#111418] hover:text-[#6b1f2a] underline underline-offset-[6px] decoration-1 transition-colors"
                >
                  Export Issue
                  <ChevronDown size={12} className={`${exportMenuOpen ? 'rotate-180' : ''} transition-transform`} />
                </button>
                {exportMenuOpen && (
                  <div className="absolute right-0 mt-3 w-72 bg-[#fbfaf6] border border-[#111418] shadow-none z-30">
                    <div className="px-4 py-3 border-b border-[#d9d4c7]">
                      <div className="text-[10px] font-sans uppercase tracking-[0.24em] text-[#8a8272]">
                        Reprint Options
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        downloadExport(
                          generateQuestionBankJSON(exportRows),
                          `question-bank-full-${activeTab}`,
                          'json',
                          'application/json',
                        )
                      }
                      className="w-full text-left px-4 py-2.5 font-serif text-[13px] text-[#111418] hover:bg-[#f0ebe0] border-b border-dotted border-[#d9d4c7] flex justify-between items-baseline"
                    >
                      <span>Full Database</span>
                      <span className="text-[10px] font-sans italic text-[#8a8272]">JSON</span>
                    </button>
                    <button
                      onClick={() =>
                        downloadExport(
                          generateQuestionBankCSV(exportRows),
                          `question-bank-full-${activeTab}`,
                          'csv',
                          'text/csv;charset=utf-8',
                        )
                      }
                      className="w-full text-left px-4 py-2.5 font-serif text-[13px] text-[#111418] hover:bg-[#f0ebe0] border-b border-dotted border-[#d9d4c7] flex justify-between items-baseline"
                    >
                      <span>Full Database</span>
                      <span className="text-[10px] font-sans italic text-[#8a8272]">CSV</span>
                    </button>
                    <button
                      onClick={() =>
                        downloadExport(
                          generateQuestionBankIDsText(exportRows),
                          `question-bank-ids-${activeTab}`,
                          'txt',
                          'text/plain;charset=utf-8',
                        )
                      }
                      className="w-full text-left px-4 py-2.5 font-serif text-[13px] text-[#111418] hover:bg-[#f0ebe0] border-b border-dotted border-[#d9d4c7] flex justify-between items-baseline"
                    >
                      <span>Identifiers Only</span>
                      <span className="text-[10px] font-sans italic text-[#8a8272]">TXT</span>
                    </button>
                    <button
                      onClick={() =>
                        downloadExport(
                          generateQuestionBankIDsCSV(exportRows),
                          `question-bank-ids-${activeTab}`,
                          'csv',
                          'text/csv;charset=utf-8',
                        )
                      }
                      className="w-full text-left px-4 py-2.5 font-serif text-[13px] text-[#111418] hover:bg-[#f0ebe0] border-b border-dotted border-[#d9d4c7] flex justify-between items-baseline"
                    >
                      <span>Identifiers Only</span>
                      <span className="text-[10px] font-sans italic text-[#8a8272]">CSV</span>
                    </button>
                    <button
                      onClick={() =>
                        downloadExport(
                          generateQuestionBankIDsText(missingOrIllustrativeRows),
                          `question-bank-missing-or-illustrative-ids-${activeTab}`,
                          'txt',
                          'text/plain;charset=utf-8',
                        )
                      }
                      className="w-full text-left px-4 py-2.5 font-serif text-[13px] text-[#6b1f2a] italic hover:bg-[#f0ebe0] flex justify-between items-baseline"
                    >
                      <span>Errata: Missing / Illustrative</span>
                      <span className="text-[10px] font-sans not-italic text-[#6b1f2a]">TXT</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Byline / result line */}
            <div className="mt-4 flex items-center gap-2 text-[12px] font-serif italic text-[#8a8272]">
              <span>
                {activeTab === 'real'
                  ? filteredQuestions.length === ALL_QUESTIONS.length
                    ? `${ALL_QUESTIONS.length} dispatches`
                    : `${filteredQuestions.length} of ${ALL_QUESTIONS.length} dispatches`
                  : filteredIllustrative.length === typedInventory.length
                    ? `${typedInventory.length} illustrations`
                    : `${filteredIllustrative.length} of ${typedInventory.length} illustrations`}
              </span>
              {(selectedType || selectedCategory) && (
                <>
                  <span className="text-[#d9d4c7]">·</span>
                  {selectedCategory && (
                    <span
                      className="not-italic uppercase tracking-[0.18em] text-[10.5px] font-sans font-semibold"
                      style={{ color: selectedCategory === 'RC' ? '#6b7a5a' : '#6b1f2a' }}
                    >
                      {selectedCategory === 'RC' ? 'Reading Comprehension' : 'Logical Reasoning'}
                    </span>
                  )}
                  {selectedType && selectedCategory && <span className="text-[#d9d4c7]">·</span>}
                  {selectedType && <span className="not-italic text-[#111418]">{selectedType}</span>}
                  <button
                    onClick={() => {
                      setSelectedType(null);
                      setSelectedCategory(null);
                    }}
                    className="ml-1 text-[#8a8272] hover:text-[#6b1f2a]"
                    aria-label="Clear filters"
                  >
                    <X size={11} />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Article stack */}
          <div className="max-w-3xl mx-auto px-5 sm:px-8 pb-24">
            {activeTab === 'real' ? (
              <>
                {filteredQuestions.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="w-12 h-px bg-[#d9d4c7] mb-6" />
                    <Search size={28} className="text-[#d9d4c7] mb-4" strokeWidth={1} />
                    <p className="font-serif text-[22px] text-[#111418] italic">No dispatches match your query.</p>
                    <p className="font-serif italic text-[14px] text-[#8a8272] mt-2">
                      The editors suggest adjusting the search or filter.
                    </p>
                    <div className="w-12 h-px bg-[#d9d4c7] mt-6" />
                  </div>
                ) : (
                  filteredQuestions.map((q) => (
                    <QuestionCardItem
                      key={q.id}
                      q={q}
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
                  <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="w-12 h-px bg-[#d9d4c7] mb-6" />
                    <Search size={28} className="text-[#d9d4c7] mb-4" strokeWidth={1} />
                    <p className="font-serif text-[22px] text-[#111418] italic">
                      No illustrations match your query.
                    </p>
                    <p className="font-serif italic text-[14px] text-[#8a8272] mt-2">
                      The editors suggest adjusting the search or filter.
                    </p>
                    <div className="w-12 h-px bg-[#d9d4c7] mt-6" />
                  </div>
                ) : (
                  filteredIllustrative.map((item) => (
                    <article
                      key={`${item.file}-${item.cardId}`}
                      className="border-t border-[#d9d4c7] first:border-t-0 py-8"
                    >
                      <div className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.22em] font-sans font-semibold mb-3">
                        <span className="text-[#6b1f2a]">{item.cardId}</span>
                        <span className="text-[#d9d4c7]">/</span>
                        <span className="text-[#6b7a5a]">{item.questionType}</span>
                        <span className="text-[#d9d4c7]">/</span>
                        <span className="text-[#8a8272] italic normal-case tracking-normal font-serif">
                          AI-generated illustration
                        </span>
                      </div>
                      <h3 className="font-serif text-[22px] sm:text-[24px] leading-[1.2] text-[#111418] tracking-[-0.01em] mb-2">
                        {item.resolvedLessonTitle}
                      </h3>
                      <p className="font-serif italic text-[14px] text-[#3a3a3a]">
                        Module {item.routeModuleId} — {item.resolvedModuleTitle}
                        {item.difficulty !== 'unset' && (
                          <span className="text-[#8a8272]"> · difficulty: {item.difficulty}</span>
                        )}
                      </p>
                      <Link
                        to={`/module/${item.routeModuleId}/lesson/${item.lessonId}`}
                        className="inline-block mt-3 text-[11px] font-sans uppercase tracking-[0.22em] text-[#6b1f2a] underline underline-offset-4 decoration-1 hover:text-[#4a1520]"
                      >
                        Read in Context →
                      </Link>
                    </article>
                  ))
                )}
              </>
            )}

            {/* End-mark */}
            {(activeTab === 'real' ? filteredQuestions.length : filteredIllustrative.length) > 0 && (
              <div className="flex justify-center pt-12">
                <div className="w-2 h-2 bg-[#111418] rotate-45" aria-hidden />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
