/*
 * QuestionBankY2KBubble -- "Y2K Bubble" variant
 *
 * Late-90s / early-2000s internet nostalgia reimagined with modern polish.
 * Chrome gradients, bubble buttons with strong highlights and drop shadows,
 * iridescent holographic accents (pink -> violet -> cyan), rounded pill shapes
 * and glossy cards with inner-highlight rings. Bright but not garish:
 * sky blue, hot pink, lime, sunshine yellow. Think early iPod Aqua meets
 * Neopets meets Lisa Frank Trapper Keeper -- candy-like, joyful, maximalist.
 */

import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import {
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Hash,
  X,
  ArrowLeft,
  Download,
  Sparkles,
} from 'lucide-react';
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

  let cls = 'flex items-start gap-3 p-4 rounded-full border-2 transition-all duration-150 ';
  if (revealed) {
    if (isCorrect)
      cls +=
        'border-lime-300 bg-gradient-to-r from-lime-100 to-lime-50 ring-2 ring-inset ring-white/80 shadow-[0_4px_0_rgba(132,204,22,0.35)]';
    else if (isSelected) cls += 'border-pink-200 bg-pink-50/70';
    else cls += 'border-transparent bg-white/40 opacity-40';
  } else {
    cls +=
      'border-white bg-white ring-1 ring-inset ring-sky-100 hover:ring-pink-200 hover:shadow-[0_6px_0_rgba(236,72,153,0.15)] cursor-pointer active:scale-[0.99]';
  }

  return (
    <div
      className={cls}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelect();
      }}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold border-2 transition-colors ${
          revealed && isCorrect
            ? 'bg-gradient-to-b from-lime-300 to-lime-500 border-white text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_2px_0_rgba(77,124,15,0.4)]'
            : revealed && isSelected && !isCorrect
              ? 'bg-gradient-to-b from-pink-300 to-pink-500 border-white text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]'
              : 'bg-gradient-to-b from-white to-slate-100 border-white text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_0_rgba(148,163,184,0.25)]'
        }`}
      >
        {String.fromCharCode(65 + index)}
      </div>
      <div className="flex-1 flex justify-between items-start gap-3">
        <span
          className={`text-[14px] leading-relaxed flex items-center gap-2 ${revealed && isCorrect ? 'text-lime-900 font-semibold' : revealed && isSelected ? 'text-pink-800' : 'text-slate-700'}`}
        >
          <span dangerouslySetInnerHTML={{ __html: parseInline(cleanText) }} />
          {revealed && isCorrect && (
            <Sparkles size={14} className="text-yellow-400 flex-shrink-0" />
          )}
        </span>
        {revealed && stats && (
          <span className="text-[11px] font-mono text-slate-400 flex-shrink-0 pt-0.5 bg-white/60 px-2 py-0.5 rounded-full">
            {stats}
          </span>
        )}
      </div>
    </div>
  );
};

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
  const truncated = plainStimulus.length > 180 ? plainStimulus.slice(0, 180) + '…' : plainStimulus;

  const categoryChipClass =
    q.category === 'RC'
      ? 'bg-gradient-to-b from-pink-400 to-pink-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_3px_0_rgba(157,23,77,0.4)]'
      : 'bg-gradient-to-b from-sky-400 to-sky-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_3px_0_rgba(14,116,144,0.4)]';

  return (
    <div className="group rounded-3xl bg-white ring-1 ring-inset ring-white/80 border border-white/60 shadow-[0_12px_30px_rgb(56_189_248/0.25)] hover:shadow-[0_18px_40px_rgb(236_72_153/0.28)] transition-all duration-200 overflow-hidden">
      <button onClick={onToggle} className="w-full text-left px-6 py-5 flex items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-200 to-pink-200 text-slate-800 text-[11px] font-bold font-mono tracking-tight shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
              <Hash size={10} />
              {q.ptId}
            </span>
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold ${
                q.category === 'RC'
                  ? 'bg-gradient-to-b from-pink-100 to-pink-200 text-pink-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]'
                  : 'bg-gradient-to-b from-sky-100 to-sky-200 text-sky-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]'
              }`}
            >
              <BookOpen size={10} />
              {q.typeName}
            </span>
            <span
              aria-label={`Category: ${q.category}`}
              className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold ${categoryChipClass}`}
            >
              {q.category}
            </span>
            {drillCrossReferences[q.ptId] && (
              <span className="text-[10px] text-violet-600 font-semibold inline-flex items-center gap-1 bg-gradient-to-r from-violet-100 to-pink-100 px-2 py-0.5 rounded-full">
                <Sparkles size={10} />
                Has drill lesson
              </span>
            )}
          </div>
          {!isExpanded && <p className="text-[14px] text-slate-600 leading-relaxed line-clamp-2">{truncated}</p>}
        </div>
        <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-gradient-to-b from-white to-sky-100 border-2 border-white flex items-center justify-center text-slate-500 group-hover:text-pink-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors">
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {isExpanded && (
        <div className="border-t-2 border-white bg-gradient-to-b from-white to-sky-50/30">
          {drillCrossReferences[q.ptId] && (
            <div className="px-6 py-3 bg-gradient-to-r from-violet-50 via-pink-50 to-sky-50 border-b-2 border-white flex items-center gap-2">
              <Link
                to={`/module/${drillCrossReferences[q.ptId].moduleId}/lesson/${drillCrossReferences[q.ptId].lessonId}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-violet-700 hover:bg-violet-50 transition-colors border-2 border-white shadow-[0_3px_0_rgba(124,58,237,0.25)]"
                onClick={(e) => e.stopPropagation()}
              >
                <BookOpen size={12} />
                <span>
                  Module {drillCrossReferences[q.ptId].moduleId}: {drillCrossReferences[q.ptId].moduleTitle} -{' '}
                  {drillCrossReferences[q.ptId].lessonTitle}
                </span>
              </Link>
            </div>
          )}
          {q.passageTitle && (
            <div className="px-6 py-3 bg-gradient-to-r from-yellow-50 to-pink-50 border-b-2 border-white">
              <span className="text-[11px] font-bold text-pink-700">Passage: {q.passageTitle}</span>
            </div>
          )}
          <div className="px-6 py-5">
            <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-pink-50 border-2 border-white ring-1 ring-inset ring-white/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
              <div className="text-[10px] font-bold text-sky-600 uppercase tracking-widest mb-2 inline-flex items-center gap-1">
                <Sparkles size={10} />
                {q.category === 'RC' ? 'Passage Excerpt' : 'Stimulus'}
              </div>
              <div
                className="text-[15px] text-slate-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parseInline(q.stimulus) }}
              />
            </div>
          </div>

          {q.question && (
            <div className="px-6 pb-4">
              <div className="rounded-2xl bg-white border-2 border-white ring-1 ring-inset ring-pink-100 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <div className="text-[10px] font-bold text-pink-600 uppercase tracking-widest mb-1.5">Question</div>
                <div
                  className="text-[15px] text-slate-900 font-semibold leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: parseInline(q.question) }}
                />
              </div>
            </div>
          )}

          {q.options.length > 0 && (
            <div className="px-6 pb-6 space-y-2.5">
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
          )}
        </div>
      )}
    </div>
  );
};

interface QuestionBankProps {
  drillCrossReferences: Record<string, DrillReference>;
}

export const QuestionBankY2KBubble: React.FC<QuestionBankProps> = ({ drillCrossReferences }) => {
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

  const sidebarPillBase =
    'w-full text-left px-4 py-2.5 text-[13px] rounded-full flex items-center justify-between transition-all duration-150';
  const holoHover =
    'text-slate-700 hover:bg-gradient-to-r hover:from-sky-200 hover:to-pink-200 hover:text-slate-900';

  return (
    <div className="flex flex-col h-full min-h-screen bg-gradient-to-br from-[#dbeafe] via-[#fce7f3] to-[#ddd6fe]">
      {/* Chrome breadcrumb */}
      <div className="bg-gradient-to-b from-white to-slate-100 border-b-2 border-white shadow-inner px-6 py-3 flex items-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-pink-600 transition-colors px-3 py-1.5 rounded-full bg-white border-2 border-white shadow-[0_2px_0_rgba(148,163,184,0.3)]"
        >
          <ArrowLeft size={14} />
          <span>Dashboard</span>
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-sm font-bold text-slate-800 inline-flex items-center gap-1.5">
          <Sparkles size={14} className="text-pink-500" />
          Question Bank
        </span>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-gradient-to-br from-violet-900/30 to-pink-900/20 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-0 left-0 z-40 lg:z-0 h-full w-72 bg-white/70 backdrop-blur-lg border-r-2 border-white rounded-r-[32px] flex flex-col transition-transform duration-200 lg:translate-x-0 shadow-[8px_0_30px_rgba(236,72,153,0.15)] ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-5 border-b-2 border-white/60">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider inline-flex items-center gap-1.5">
                <Sparkles size={14} className="text-pink-500" />
                Question Types
              </h2>
              <button
                className="lg:hidden p-1.5 rounded-full bg-white border-2 border-white text-slate-500 hover:text-pink-600 shadow-sm"
                onClick={() => setSidebarOpen(false)}
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-[12px] text-slate-500 mt-1">
              {activeTab === 'real'
                ? `${ALL_QUESTIONS.length} questions across ${totalTypeCount} types`
                : `${resolvedIllustrativeInventory.length} illustrative across ${illustrativeTypeCountMap.size} types`}
            </p>
          </div>

          <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1 scrollbar-hide">
            {activeTab === 'real' ? (
              <>
                <button
                  onClick={() => {
                    setSelectedType(null);
                    setSelectedCategory(null);
                    setSidebarOpen(false);
                  }}
                  className={`${sidebarPillBase} ${
                    selectedType === null && selectedCategory === null
                      ? 'bg-[linear-gradient(135deg,#38bdf8,#a78bfa,#ec4899)] text-white font-bold shadow-[0_4px_0_rgba(124,58,237,0.35)]'
                      : holoHover
                  }`}
                >
                  <span>All Questions</span>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                      selectedType === null && selectedCategory === null
                        ? 'bg-white/30 text-white'
                        : 'bg-white text-slate-500'
                    }`}
                  >
                    {ALL_QUESTIONS.length}
                  </span>
                </button>

                <div className="px-4 pt-4 pb-1">
                  <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-b from-sky-300 to-sky-500" />
                    LR Questions
                  </span>
                </div>
                {sortedLRTypes.map(([name, count]) => {
                  const active = selectedType === name && selectedCategory === 'LR';
                  return (
                    <button
                      key={`lr-${name}`}
                      onClick={() => {
                        setSelectedType(name);
                        setSelectedCategory('LR');
                        setSidebarOpen(false);
                      }}
                      className={`${sidebarPillBase} ${
                        active
                          ? 'bg-gradient-to-b from-sky-400 to-sky-500 text-white font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_3px_0_rgba(14,116,144,0.4)]'
                          : holoHover
                      }`}
                    >
                      <span className="truncate pr-2">{name}</span>
                      <span
                        className={`text-[11px] font-mono flex-shrink-0 px-2 py-0.5 rounded-full ${
                          active ? 'bg-white/30 text-white' : 'bg-white text-slate-500'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}

                <div className="px-4 pt-4 pb-1">
                  <span className="text-[10px] font-black text-pink-600 uppercase tracking-widest inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-b from-pink-300 to-pink-500" />
                    RC Questions
                  </span>
                </div>
                {sortedRCTypes.map(([name, count]) => {
                  const active = selectedType === name && selectedCategory === 'RC';
                  return (
                    <button
                      key={`rc-${name}`}
                      onClick={() => {
                        setSelectedType(name);
                        setSelectedCategory('RC');
                        setSidebarOpen(false);
                      }}
                      className={`${sidebarPillBase} ${
                        active
                          ? 'bg-gradient-to-b from-pink-400 to-pink-500 text-white font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_3px_0_rgba(157,23,77,0.4)]'
                          : holoHover
                      }`}
                    >
                      <span className="truncate pr-2">{name}</span>
                      <span
                        className={`text-[11px] font-mono flex-shrink-0 px-2 py-0.5 rounded-full ${
                          active ? 'bg-white/30 text-white' : 'bg-white text-slate-500'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setSelectedType(null);
                    setSidebarOpen(false);
                  }}
                  className={`${sidebarPillBase} ${
                    selectedType === null
                      ? 'bg-gradient-to-b from-yellow-300 to-yellow-400 text-slate-900 font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_3px_0_rgba(161,98,7,0.35)]'
                      : holoHover
                  }`}
                >
                  <span>All Illustrative</span>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                      selectedType === null ? 'bg-white/40 text-slate-900' : 'bg-white text-slate-500'
                    }`}
                  >
                    {typedInventory.length}
                  </span>
                </button>

                <div className="px-4 pt-4 pb-1">
                  <span className="text-[10px] font-black text-yellow-600 uppercase tracking-widest inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500" />
                    Question Types
                  </span>
                </div>
                {sortedIllustrativeTypes.map(([name, count]) => {
                  const active = selectedType === name;
                  return (
                    <button
                      key={`ill-${name}`}
                      onClick={() => {
                        setSelectedType(name);
                        setSelectedCategory(null);
                        setSidebarOpen(false);
                      }}
                      className={`${sidebarPillBase} ${
                        active
                          ? 'bg-gradient-to-b from-yellow-300 to-yellow-400 text-slate-900 font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_3px_0_rgba(161,98,7,0.35)]'
                          : holoHover
                      }`}
                    >
                      <span className="truncate pr-2">{name}</span>
                      <span
                        className={`text-[11px] font-mono flex-shrink-0 px-2 py-0.5 rounded-full ${
                          active ? 'bg-white/40 text-slate-900' : 'bg-white text-slate-500'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </>
            )}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Top bar */}
          <div className="sticky top-0 z-20 bg-white/60 backdrop-blur-xl border-b-2 border-white shadow-[0_4px_20px_rgba(236,72,153,0.1)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 space-y-3">
              {/* Candy tab toggle */}
              <div className="inline-flex items-center gap-1 bg-white/60 p-1 rounded-full border-2 border-white shadow-inner">
                <button
                  className={`px-5 py-2 text-sm font-bold rounded-full transition-all ${
                    activeTab === 'real'
                      ? 'bg-[linear-gradient(135deg,#38bdf8,#a78bfa,#ec4899)] text-white shadow-[0_3px_0_rgba(124,58,237,0.35)]'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  onClick={() => {
                    setActiveTab('real');
                    setSelectedType(null);
                    setSelectedCategory(null);
                  }}
                >
                  PrepTest{' '}
                  <span
                    className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${activeTab === 'real' ? 'bg-white/25' : 'bg-white/70 text-slate-500'}`}
                  >
                    {ALL_QUESTIONS.length}
                  </span>
                </button>
                <button
                  className={`px-5 py-2 text-sm font-bold rounded-full transition-all ${
                    activeTab === 'illustrative'
                      ? 'bg-[linear-gradient(135deg,#fde047,#ec4899,#a78bfa)] text-white shadow-[0_3px_0_rgba(161,98,7,0.35)]'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  onClick={() => {
                    setActiveTab('illustrative');
                    setSelectedType(null);
                    setSelectedCategory(null);
                  }}
                >
                  Illustrative{' '}
                  <span
                    className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${activeTab === 'illustrative' ? 'bg-white/25' : 'bg-white/70 text-slate-500'}`}
                  >
                    {typedInventory.length}
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="lg:hidden flex-shrink-0 p-2.5 rounded-full border-2 border-white bg-white text-slate-500 hover:text-pink-600 shadow-[0_3px_0_rgba(148,163,184,0.3)] transition-colors"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Filter size={16} />
                </button>

                <div className="relative flex-1">
                  <Search
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400 pointer-events-none"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      activeTab === 'real' ? 'Search stimuli, questions, PT IDs…' : 'Search by lesson, module, card ID…'
                    }
                    className="w-full pl-11 pr-10 py-2.5 rounded-full bg-white shadow-inner border-2 border-white ring-2 ring-sky-200/60 text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-pink-300 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-b from-slate-100 to-slate-200 border border-white text-slate-500 hover:text-pink-600 flex items-center justify-center shadow-sm"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>
              {activeTab === 'real' && (
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => setShowInUseOnly(!showInUseOnly)}
                    className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all border-2 border-white ${
                      showInUseOnly
                        ? 'bg-gradient-to-b from-lime-300 to-lime-400 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_3px_0_rgba(77,124,15,0.35)]'
                        : 'bg-white text-slate-600 hover:bg-lime-50 shadow-[0_2px_0_rgba(148,163,184,0.3)]'
                    }`}
                  >
                    {showInUseOnly ? '✓ In Use Only' : 'In Use Only'}
                  </button>
                  <button
                    onClick={() => setShowNotInUseOnly(!showNotInUseOnly)}
                    className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all border-2 border-white ${
                      showNotInUseOnly
                        ? 'bg-gradient-to-b from-yellow-300 to-yellow-400 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_3px_0_rgba(161,98,7,0.35)]'
                        : 'bg-white text-slate-600 hover:bg-yellow-50 shadow-[0_2px_0_rgba(148,163,184,0.3)]'
                    }`}
                  >
                    {showNotInUseOnly ? '✓ Not In Use' : 'Not In Use'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Header */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight inline-flex items-center gap-2">
                  <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#38bdf8,#a78bfa,#ec4899)]">
                    Question Bank
                  </span>
                  <Sparkles size={28} className="text-yellow-400" />
                </h1>
              </div>

              {/* Chrome silver export button */}
              <div className="relative">
                <button
                  onClick={() => setExportMenuOpen((open) => !open)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white bg-gradient-to-b from-white via-slate-100 to-slate-200 text-xs font-bold text-slate-700 hover:text-pink-600 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_3px_0_rgba(148,163,184,0.4)]"
                >
                  <Download size={14} />
                  Export
                  <ChevronDown size={14} className={`${exportMenuOpen ? 'rotate-180' : ''} transition-transform`} />
                </button>
                {exportMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-3xl border-2 border-white bg-white/90 backdrop-blur-xl shadow-[0_20px_40px_rgba(236,72,153,0.25)] z-30 p-2 ring-1 ring-inset ring-white/80">
                    <button
                      onClick={() =>
                        downloadExport(
                          generateQuestionBankJSON(exportRows),
                          `question-bank-full-${activeTab}`,
                          'json',
                          'application/json',
                        )
                      }
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-sky-100 hover:to-pink-100 rounded-full transition-colors"
                    >
                      Export Full Database (JSON)
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
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-sky-100 hover:to-pink-100 rounded-full transition-colors"
                    >
                      Export Full Database (CSV)
                    </button>
                    <div className="my-1 border-t-2 border-white" />
                    <button
                      onClick={() =>
                        downloadExport(
                          generateQuestionBankIDsText(exportRows),
                          `question-bank-ids-${activeTab}`,
                          'txt',
                          'text/plain;charset=utf-8',
                        )
                      }
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-lime-100 hover:to-sky-100 rounded-full transition-colors"
                    >
                      Export IDs Only (TXT)
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
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-lime-100 hover:to-sky-100 rounded-full transition-colors"
                    >
                      Export IDs Only (CSV)
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
                      className="w-full text-left px-4 py-2 text-xs font-bold text-pink-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-yellow-100 rounded-full transition-colors"
                    >
                      Export Missing/Illustrative IDs
                    </button>
                  </div>
                )}
              </div>
            </div>
            <p className="mt-2 text-[14px] text-slate-600">
              {activeTab === 'real' ? (
                <>
                  {filteredQuestions.length === ALL_QUESTIONS.length
                    ? `${ALL_QUESTIONS.length} practice questions`
                    : `${filteredQuestions.length} of ${ALL_QUESTIONS.length} questions`}
                </>
              ) : (
                <>
                  {filteredIllustrative.length === typedInventory.length
                    ? `${typedInventory.length} illustrative questions`
                    : `${filteredIllustrative.length} of ${typedInventory.length} illustrative questions`}
                </>
              )}
              {(selectedType || selectedCategory) && (
                <span className="ml-2 inline-flex items-center gap-1">
                  <span className="text-slate-300">·</span>
                  {selectedCategory && (
                    <span
                      className={`font-bold px-2 py-0.5 rounded-full text-white text-[11px] ${selectedCategory === 'RC' ? 'bg-gradient-to-b from-pink-400 to-pink-500' : 'bg-gradient-to-b from-sky-400 to-sky-500'}`}
                    >
                      {selectedCategory}
                    </span>
                  )}
                  {selectedType && (
                    <span
                      className={`font-semibold ${selectedCategory === 'RC' ? 'text-pink-600' : 'text-sky-700'}`}
                    >
                      {selectedType}
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSelectedType(null);
                      setSelectedCategory(null);
                    }}
                    className="ml-1 w-5 h-5 rounded-full bg-white border border-white shadow-sm text-slate-400 hover:text-pink-600 flex items-center justify-center"
                  >
                    <X size={10} />
                  </button>
                </span>
              )}
            </p>
          </div>

          {/* Question cards */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 space-y-4">
            {activeTab === 'real' ? (
              <>
                {filteredQuestions.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-200 via-pink-200 to-yellow-200 border-4 border-white shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(236,72,153,0.3)] flex items-center justify-center mb-5">
                      <Search size={36} className="text-white drop-shadow" />
                    </div>
                    <p className="text-slate-800 text-[17px] font-black">No questions found</p>
                    <p className="text-slate-500 text-[13px] mt-1">Try adjusting your search or filter</p>
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
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 via-pink-200 to-violet-200 border-4 border-white shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(236,72,153,0.3)] flex items-center justify-center mb-5">
                      <Search size={36} className="text-white drop-shadow" />
                    </div>
                    <p className="text-slate-800 text-[17px] font-black">No illustrative questions found</p>
                    <p className="text-slate-500 text-[13px] mt-1">Try adjusting your search or filter</p>
                  </div>
                ) : (
                  filteredIllustrative.map((item) => (
                    <div
                      key={`${item.file}-${item.cardId}`}
                      className="p-5 rounded-3xl bg-white border border-white/60 ring-1 ring-inset ring-white/80 shadow-[0_12px_30px_rgb(251_191_36/0.2)] hover:shadow-[0_18px_40px_rgb(236_72_153/0.25)] transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-mono bg-gradient-to-r from-yellow-200 to-pink-200 text-slate-800 px-3 py-1 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                          {item.cardId}
                        </span>
                        <span className="text-xs font-semibold bg-gradient-to-b from-sky-100 to-sky-200 text-sky-800 px-3 py-1 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                          {item.questionType}
                        </span>
                        {item.difficulty !== 'unset' && (
                          <span className="text-xs text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                            {item.difficulty}
                          </span>
                        )}
                        <span className="text-[10px] font-bold bg-gradient-to-b from-yellow-300 to-yellow-400 text-slate-900 px-2 py-0.5 rounded-full inline-flex items-center gap-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                          <Sparkles size={10} />
                          AI illustrative
                        </span>
                      </div>
                      <div className="text-sm text-slate-800 font-bold">{item.resolvedLessonTitle}</div>
                      <div className="text-xs text-slate-500 mt-1">
                        Module {item.routeModuleId}: {item.resolvedModuleTitle}
                      </div>
                      <Link
                        to={`/module/${item.routeModuleId}/lesson/${item.lessonId}`}
                        className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[linear-gradient(135deg,#38bdf8,#a78bfa,#ec4899)] text-white shadow-[0_3px_0_rgba(124,58,237,0.35)] hover:shadow-[0_4px_0_rgba(124,58,237,0.45)] transition-all"
                      >
                        View in Lesson →
                      </Link>
                    </div>
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
