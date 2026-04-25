/*
 * QuestionBankCozyNotebook -- "Cozy Notebook" variant
 *
 * A warm, handwritten study-journal aesthetic. The page is parchment-cream
 * (#fdf6e3) with faint horizontal ruling lines so the surface reads as loose-
 * leaf paper. Section headers sit on marker-yellow highlighter swipes; category
 * pills use highlighter pastels (yellow for LR, pink for RC) with no borders.
 * Question cards are index-card off-white with dashed/soft borders, almost-
 * invisible shadows, washi-tape rectangles at two corners, and alternating
 * tiny rotations so the deck feels taped-down by hand. Chevrons live inside
 * doodle circles. The search input is a rounded pill with a dashed outline,
 * and the export dropdown mimics a stack of paper index cards.
 */

import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Search, Filter, ChevronDown, ChevronUp, BookOpen, Hash, X, ArrowLeft, Download, Bookmark } from 'lucide-react';
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

/* ----- paper ruling background (cream + faint horizontal lines) ----- */
const paperBg =
  'bg-[#fdf6e3] bg-[linear-gradient(transparent_31px,rgba(148,163,184,0.18)_32px)] bg-[size:100%_32px]';

/* ----- washi tape decoration (top corners of a card) ----- */
const WashiTape: React.FC = () => (
  <>
    <span
      aria-hidden
      className="pointer-events-none absolute -top-2 left-6 h-4 w-14 rotate-[-6deg] bg-[#fbbf24]/60 border border-[#f59e0b]/40 rounded-[2px] shadow-[0_1px_0_rgba(0,0,0,0.04)]"
    />
    <span
      aria-hidden
      className="pointer-events-none absolute -top-2 right-8 h-4 w-12 rotate-[5deg] bg-[#fb7185]/55 border border-[#f43f5e]/40 rounded-[2px] shadow-[0_1px_0_rgba(0,0,0,0.04)]"
    />
  </>
);

/* ----- handwritten highlighter swipe behind a short phrase ------ */
const Highlighter: React.FC<{ color?: string; children: React.ReactNode; className?: string }> = ({
  color = '#fde68a',
  children,
  className = '',
}) => (
  <span
    className={`relative inline-block px-1 ${className}`}
    style={{
      backgroundImage: `linear-gradient(180deg, transparent 45%, ${color} 45%, ${color} 92%, transparent 92%)`,
    }}
  >
    {children}
  </span>
);

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

  let cls = 'flex items-start gap-3 p-3 rounded-2xl border transition-all duration-150 ';
  if (revealed) {
    if (isCorrect) cls += 'border-emerald-400 bg-emerald-50/80 ring-1 ring-emerald-300';
    else if (isSelected) cls += 'border-rose-300 bg-rose-50/70';
    else cls += 'border-transparent bg-white/40 opacity-50';
  } else {
    cls += 'border-dashed border-slate-300 bg-white/60 hover:border-slate-500 hover:bg-[#fde68a]/25 cursor-pointer';
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
        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold italic border-2 transition-colors ${
          revealed && isCorrect
            ? 'bg-emerald-500 border-emerald-600 text-white'
            : revealed && isSelected && !isCorrect
              ? 'bg-rose-400 border-rose-500 text-white'
              : 'bg-white border-slate-400 text-slate-600'
        }`}
        style={{ fontFamily: 'cursive' }}
      >
        {String.fromCharCode(65 + index)}
      </div>
      <div className="flex-1 flex justify-between items-start gap-3">
        <span
          className={`text-[14px] leading-relaxed ${revealed && isCorrect ? 'text-emerald-900 font-medium' : revealed && isSelected ? 'text-rose-800' : 'text-slate-700'}`}
          dangerouslySetInnerHTML={{ __html: parseInline(cleanText) }}
        />
        {revealed && stats && (
          <span className="text-[11px] font-mono text-slate-500 flex-shrink-0 pt-0.5 italic">{stats}</span>
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
  indexOffset: number;
}> = ({ q, isExpanded, onToggle, drillCrossReferences, indexOffset }) => {
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

  const rotateCls = indexOffset % 2 === 0 ? 'rotate-[0.3deg]' : '-rotate-[0.3deg]';
  const catHighlight = q.category === 'RC' ? '#fecaca' : '#fde68a';

  return (
    <div
      className={`group relative rounded-2xl border border-slate-300 bg-white/90 transition-all duration-200 shadow-sm hover:shadow-md overflow-visible ${rotateCls}`}
    >
      <WashiTape />
      <button onClick={onToggle} className="w-full text-left px-6 pt-6 pb-4 flex items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-dashed border-slate-400 bg-white/70 text-slate-700 text-[11px] font-mono">
              <Hash size={10} />
              {q.ptId}
            </span>
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold text-slate-800"
              style={{ backgroundColor: catHighlight }}
            >
              <BookOpen size={10} />
              {q.typeName}
            </span>
            <span
              aria-label={`Category: ${q.category}`}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold italic text-slate-800"
              style={{ backgroundColor: q.category === 'RC' ? '#bae6fd' : '#fde68a' }}
            >
              {q.category}
            </span>
            {drillCrossReferences[q.ptId] && (
              <span className="text-[10px] text-slate-600 italic">
                <Highlighter color="#fde68a">has drill lesson</Highlighter>
              </span>
            )}
          </div>
          {!isExpanded && (
            <p className="text-[14px] text-slate-600 leading-relaxed line-clamp-2 italic" style={{ fontFamily: 'cursive' }}>
              {truncated}
            </p>
          )}
        </div>
        <div className="flex-shrink-0 mt-1">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-dashed border-slate-400 bg-white/60 text-slate-500 group-hover:text-slate-700 group-hover:border-slate-500 transition-colors">
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </span>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-dashed border-slate-300">
          {drillCrossReferences[q.ptId] && (
            <div className="px-6 py-3 bg-[#fde68a]/30 border-b border-dashed border-[#fbbf24]/40 flex items-center gap-2">
              <Link
                to={`/module/${drillCrossReferences[q.ptId].moduleId}/lesson/${drillCrossReferences[q.ptId].lessonId}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/70 text-slate-800 hover:bg-white border border-dashed border-slate-400 transition-colors"
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
            <div className="px-6 py-3 bg-[#fecaca]/25 border-b border-dashed border-rose-200">
              <span className="text-[11px] font-semibold italic text-rose-800" style={{ fontFamily: 'cursive' }}>
                Passage: {q.passageTitle}
              </span>
            </div>
          )}
          <div className="px-6 py-4 bg-[#fdf6e3]/60 border-b border-dashed border-slate-200">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 italic" style={{ fontFamily: 'cursive' }}>
              {q.category === 'RC' ? 'Passage Excerpt' : 'Stimulus'}
            </div>
            <blockquote
              className="border-l-4 border-[#fbbf24] pl-4 text-[15px] text-slate-800 leading-relaxed italic"
              dangerouslySetInnerHTML={{ __html: parseInline(q.stimulus) }}
            />
          </div>

          {q.question && (
            <div className="px-6 py-3 border-b border-dashed border-slate-200">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 italic" style={{ fontFamily: 'cursive' }}>
                Question
              </div>
              <div
                className="text-[15px] text-slate-900 font-semibold leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parseInline(q.question) }}
              />
            </div>
          )}

          {q.options.length > 0 && (
            <div className="px-6 py-4 space-y-2">
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

export const QuestionBankCozyNotebook: React.FC<QuestionBankProps> = ({ drillCrossReferences }) => {
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

  /* ----- sidebar button class builder ----- */
  const navBtn = (active: boolean, tone: 'lr' | 'rc' | 'ill' | 'all') => {
    const activeBg =
      tone === 'rc'
        ? 'bg-[#fecaca]/60 text-rose-900'
        : tone === 'ill'
          ? 'bg-[#fde68a]/70 text-amber-900'
          : tone === 'all'
            ? 'bg-white/80 text-slate-900'
            : 'bg-[#fde68a]/60 text-amber-900';
    return `w-full text-left px-5 py-2.5 text-[13px] flex items-center justify-between rounded-xl mx-2 my-0.5 transition-colors ${
      active ? `${activeBg} font-semibold` : 'text-slate-700 hover:bg-white/60'
    }`;
  };

  return (
    <div className={`flex flex-col h-full min-h-screen ${paperBg}`}>
      {/* Breadcrumb */}
      <div className="bg-[#fdf6e3]/80 backdrop-blur border-b border-dashed border-slate-300 px-6 py-3 flex items-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium italic text-slate-600 hover:text-slate-900 transition-colors"
          style={{ fontFamily: 'cursive' }}
        >
          <ArrowLeft size={16} />
          <span>Dashboard</span>
        </Link>
        <span className="text-slate-400">/</span>
        <span className="text-sm font-semibold italic text-slate-800" style={{ fontFamily: 'cursive' }}>
          <Highlighter color="#fde68a">Question Bank</Highlighter>
        </span>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/20 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar — binder tab-divider */}
        <aside
          className={`fixed lg:sticky top-0 left-0 z-40 lg:z-0 h-full w-72 bg-[#faf1dd] border-r-2 border-dashed border-slate-300 flex flex-col transition-transform duration-200 lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-5 border-b border-dashed border-slate-300 relative">
            <div className="absolute -top-2 left-6 flex items-center gap-1 text-slate-500">
              <Bookmark size={18} className="-rotate-12 fill-[#fb7185]/60 text-rose-400" />
            </div>
            <div className="flex items-center justify-between mb-1 mt-1">
              <h2 className="text-sm font-bold italic text-slate-900" style={{ fontFamily: 'cursive' }}>
                <Highlighter color="#fde68a">Question Types</Highlighter>
              </h2>
              <button
                className="lg:hidden p-1 rounded text-slate-500 hover:text-slate-700"
                onClick={() => setSidebarOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-[12px] text-slate-500 italic" style={{ fontFamily: 'cursive' }}>
              {activeTab === 'real'
                ? `${ALL_QUESTIONS.length} questions across ${totalTypeCount} types`
                : `${resolvedIllustrativeInventory.length} illustrative across ${illustrativeTypeCountMap.size} types`}
            </p>
          </div>

          <nav className="flex-1 overflow-y-auto py-2 scrollbar-hide">
            {activeTab === 'real' ? (
              <>
                <button
                  onClick={() => {
                    setSelectedType(null);
                    setSelectedCategory(null);
                    setSidebarOpen(false);
                  }}
                  className={navBtn(selectedType === null && selectedCategory === null, 'all')}
                >
                  <span>All Questions</span>
                  <span className="text-[11px] font-mono text-slate-500">{ALL_QUESTIONS.length}</span>
                </button>

                <div className="px-5 pt-4 pb-1">
                  <span
                    className="text-[11px] font-bold italic text-slate-800"
                    style={{ fontFamily: 'cursive' }}
                  >
                    <Highlighter color="#fde68a">LR Questions</Highlighter>
                  </span>
                </div>
                {sortedLRTypes.map(([name, count]) => (
                  <button
                    key={`lr-${name}`}
                    onClick={() => {
                      setSelectedType(name);
                      setSelectedCategory('LR');
                      setSidebarOpen(false);
                    }}
                    className={navBtn(selectedType === name && selectedCategory === 'LR', 'lr')}
                  >
                    <span className="truncate pr-2">{name}</span>
                    <span className="text-[11px] font-mono flex-shrink-0 text-slate-500">{count}</span>
                  </button>
                ))}

                <div className="px-5 pt-4 pb-1">
                  <span
                    className="text-[11px] font-bold italic text-slate-800"
                    style={{ fontFamily: 'cursive' }}
                  >
                    <Highlighter color="#fecaca">RC Questions</Highlighter>
                  </span>
                </div>
                {sortedRCTypes.map(([name, count]) => (
                  <button
                    key={`rc-${name}`}
                    onClick={() => {
                      setSelectedType(name);
                      setSelectedCategory('RC');
                      setSidebarOpen(false);
                    }}
                    className={navBtn(selectedType === name && selectedCategory === 'RC', 'rc')}
                  >
                    <span className="truncate pr-2">{name}</span>
                    <span className="text-[11px] font-mono flex-shrink-0 text-slate-500">{count}</span>
                  </button>
                ))}
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setSelectedType(null);
                    setSidebarOpen(false);
                  }}
                  className={navBtn(selectedType === null, 'ill')}
                >
                  <span>All Illustrative</span>
                  <span className="text-[11px] font-mono text-slate-500">{typedInventory.length}</span>
                </button>

                <div className="px-5 pt-4 pb-1">
                  <span
                    className="text-[11px] font-bold italic text-slate-800"
                    style={{ fontFamily: 'cursive' }}
                  >
                    <Highlighter color="#fde68a">Question Types</Highlighter>
                  </span>
                </div>
                {sortedIllustrativeTypes.map(([name, count]) => (
                  <button
                    key={`ill-${name}`}
                    onClick={() => {
                      setSelectedType(name);
                      setSelectedCategory(null);
                      setSidebarOpen(false);
                    }}
                    className={navBtn(selectedType === name, 'ill')}
                  >
                    <span className="truncate pr-2">{name}</span>
                    <span className="text-[11px] font-mono flex-shrink-0 text-slate-500">{count}</span>
                  </button>
                ))}
              </>
            )}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Top bar */}
          <div className="sticky top-0 z-20 bg-[#fdf6e3]/85 backdrop-blur-lg border-b border-dashed border-slate-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-3 space-y-3">
              {/* Folder-tab toggle */}
              <div className="flex items-end gap-1">
                <button
                  className={`px-5 py-2 text-sm font-semibold italic rounded-t-2xl rounded-b-none border border-b-transparent transition-all ${
                    activeTab === 'real'
                      ? 'bg-white/90 text-slate-900 border-slate-300 shadow-[0_-1px_0_rgba(0,0,0,0.03)]'
                      : 'bg-[#fdf6e3]/70 text-slate-500 border-dashed border-slate-300 hover:text-slate-700'
                  }`}
                  style={{ fontFamily: 'cursive' }}
                  onClick={() => {
                    setActiveTab('real');
                    setSelectedType(null);
                    setSelectedCategory(null);
                  }}
                >
                  PrepTest Questions <span className="ml-1 text-xs font-mono text-slate-500">{ALL_QUESTIONS.length}</span>
                </button>
                <button
                  className={`px-5 py-2 text-sm font-semibold italic rounded-t-2xl rounded-b-none border border-b-transparent transition-all ${
                    activeTab === 'illustrative'
                      ? 'bg-white/90 text-slate-900 border-slate-300 shadow-[0_-1px_0_rgba(0,0,0,0.03)]'
                      : 'bg-[#fdf6e3]/70 text-slate-500 border-dashed border-slate-300 hover:text-slate-700'
                  }`}
                  style={{ fontFamily: 'cursive' }}
                  onClick={() => {
                    setActiveTab('illustrative');
                    setSelectedType(null);
                    setSelectedCategory(null);
                  }}
                >
                  Illustrative Questions <span className="ml-1 text-xs font-mono text-slate-500">{typedInventory.length}</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="lg:hidden flex-shrink-0 p-2 rounded-full border-2 border-dashed border-slate-400 text-slate-500 hover:text-slate-700 hover:bg-white/60 transition-colors"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Filter size={18} />
                </button>

                <div className="relative flex-1">
                  <Search
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      activeTab === 'real' ? 'Search stimuli, questions, PT IDs…' : 'Search by lesson, module, card ID…'
                    }
                    className="w-full pl-11 pr-10 py-2.5 rounded-full border-2 border-dashed border-slate-300 bg-white/70 text-[14px] italic text-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-slate-500 focus:bg-white/90 transition-all"
                    style={{ fontFamily: 'cursive' }}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {activeTab === 'real' && (
                <div className="flex items-center gap-3 mb-2">
                  <button
                    onClick={() => setShowInUseOnly(!showInUseOnly)}
                    className={`text-xs font-semibold italic px-3 py-1.5 rounded-full transition-colors ${
                      showInUseOnly
                        ? 'bg-[#fde68a] text-amber-900'
                        : 'bg-white/60 text-slate-600 border border-dashed border-slate-300 hover:bg-white/80'
                    }`}
                    style={{ fontFamily: 'cursive' }}
                  >
                    {showInUseOnly ? '✓ In Use Only' : 'In Use Only'}
                  </button>
                  <button
                    onClick={() => setShowNotInUseOnly(!showNotInUseOnly)}
                    className={`text-xs font-semibold italic px-3 py-1.5 rounded-full transition-colors ${
                      showNotInUseOnly
                        ? 'bg-[#fecaca] text-rose-900'
                        : 'bg-white/60 text-slate-600 border border-dashed border-slate-300 hover:bg-white/80'
                    }`}
                    style={{ fontFamily: 'cursive' }}
                  >
                    {showNotInUseOnly ? '✓ Not In Use' : 'Not In Use'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Header */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4">
            <div className="flex items-start justify-between gap-4">
              <h1
                className="text-3xl font-bold italic text-slate-900 tracking-tight"
                style={{ fontFamily: 'cursive' }}
              >
                <Highlighter color="#fde68a">Question Bank</Highlighter>
              </h1>
              <div className="relative">
                <button
                  onClick={() => setExportMenuOpen((open) => !open)}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full border-2 border-dashed border-slate-400 text-xs font-semibold italic text-slate-700 bg-white/70 hover:bg-white transition-colors"
                  style={{ fontFamily: 'cursive' }}
                >
                  <Download size={14} />
                  Export
                  <ChevronDown
                    size={14}
                    className={`${exportMenuOpen ? 'rotate-180' : ''} transition-transform`}
                  />
                </button>
                {exportMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-300 bg-[#fffaf0] shadow-sm z-30 p-2 space-y-1 rotate-[-0.4deg]">
                    <div className="absolute -top-2 left-6 h-3 w-10 rotate-[-6deg] bg-[#fbbf24]/60 border border-[#f59e0b]/40 rounded-[2px]" />
                    <button
                      onClick={() =>
                        downloadExport(
                          generateQuestionBankJSON(exportRows),
                          `question-bank-full-${activeTab}`,
                          'json',
                          'application/json',
                        )
                      }
                      className="w-full text-left px-3 py-2 text-xs font-medium italic text-slate-700 hover:bg-[#fde68a]/50 rounded-xl border border-dashed border-transparent hover:border-slate-300"
                      style={{ fontFamily: 'cursive' }}
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
                      className="w-full text-left px-3 py-2 text-xs font-medium italic text-slate-700 hover:bg-[#fde68a]/50 rounded-xl border border-dashed border-transparent hover:border-slate-300"
                      style={{ fontFamily: 'cursive' }}
                    >
                      Export Full Database (CSV)
                    </button>
                    <div className="my-1 border-t border-dashed border-slate-300" />
                    <button
                      onClick={() =>
                        downloadExport(
                          generateQuestionBankIDsText(exportRows),
                          `question-bank-ids-${activeTab}`,
                          'txt',
                          'text/plain;charset=utf-8',
                        )
                      }
                      className="w-full text-left px-3 py-2 text-xs font-medium italic text-slate-700 hover:bg-[#fde68a]/50 rounded-xl border border-dashed border-transparent hover:border-slate-300"
                      style={{ fontFamily: 'cursive' }}
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
                      className="w-full text-left px-3 py-2 text-xs font-medium italic text-slate-700 hover:bg-[#fde68a]/50 rounded-xl border border-dashed border-transparent hover:border-slate-300"
                      style={{ fontFamily: 'cursive' }}
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
                      className="w-full text-left px-3 py-2 text-xs font-medium italic text-rose-800 hover:bg-[#fecaca]/50 rounded-xl border border-dashed border-transparent hover:border-rose-300"
                      style={{ fontFamily: 'cursive' }}
                    >
                      Export Missing/Illustrative IDs
                    </button>
                  </div>
                )}
              </div>
            </div>
            <p
              className="mt-2 text-[14px] text-slate-600 italic"
              style={{ fontFamily: 'cursive' }}
            >
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
                  <span className="text-slate-400">·</span>
                  {selectedCategory && (
                    <span className="font-semibold text-slate-800">
                      <Highlighter color={selectedCategory === 'RC' ? '#fecaca' : '#fde68a'}>
                        {selectedCategory}
                      </Highlighter>
                    </span>
                  )}
                  {selectedType && (
                    <span className="font-semibold text-slate-800 ml-1">
                      <Highlighter color={selectedCategory === 'RC' ? '#fecaca' : '#fde68a'}>
                        {selectedType}
                      </Highlighter>
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSelectedType(null);
                      setSelectedCategory(null);
                    }}
                    className="ml-1 text-slate-400 hover:text-slate-700"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
            </p>
          </div>

          {/* Question cards */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-5">
            {activeTab === 'real' ? (
              <>
                {filteredQuestions.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-24 text-center">
                    <Search size={32} className="text-slate-400 mb-4 -rotate-12" />
                    <p
                      className="text-slate-700 text-[15px] font-semibold italic"
                      style={{ fontFamily: 'cursive' }}
                    >
                      No questions found
                    </p>
                    <p
                      className="text-slate-500 text-[13px] mt-1 italic"
                      style={{ fontFamily: 'cursive' }}
                    >
                      Try adjusting your search or filter
                    </p>
                  </div>
                ) : (
                  filteredQuestions.map((q, i) => (
                    <QuestionCardItem
                      key={q.id}
                      q={q}
                      isExpanded={expandedId === q.id}
                      onToggle={() => handleToggle(q.id)}
                      drillCrossReferences={drillCrossReferences}
                      indexOffset={i}
                    />
                  ))
                )}
              </>
            ) : (
              <>
                {filteredIllustrative.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-24 text-center">
                    <Search size={32} className="text-slate-400 mb-4 -rotate-12" />
                    <p
                      className="text-slate-700 text-[15px] font-semibold italic"
                      style={{ fontFamily: 'cursive' }}
                    >
                      No illustrative questions found
                    </p>
                    <p
                      className="text-slate-500 text-[13px] mt-1 italic"
                      style={{ fontFamily: 'cursive' }}
                    >
                      Try adjusting your search or filter
                    </p>
                  </div>
                ) : (
                  filteredIllustrative.map((item, i) => (
                    <div
                      key={`${item.file}-${item.cardId}`}
                      className={`relative p-5 rounded-2xl border border-slate-300 bg-white/90 shadow-sm hover:shadow-md transition-shadow ${
                        i % 2 === 0 ? 'rotate-[0.3deg]' : '-rotate-[0.3deg]'
                      }`}
                    >
                      <WashiTape />
                      <div className="flex items-center gap-2 mb-2 mt-2 flex-wrap">
                        <span className="text-xs font-mono bg-white/70 text-slate-700 px-2 py-0.5 rounded-full border border-dashed border-slate-400">
                          {item.cardId}
                        </span>
                        <span
                          className="text-xs font-semibold text-slate-800 px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: '#fde68a' }}
                        >
                          {item.questionType}
                        </span>
                        {item.difficulty !== 'unset' && (
                          <span className="text-xs italic text-slate-500" style={{ fontFamily: 'cursive' }}>
                            {item.difficulty}
                          </span>
                        )}
                        <span
                          className="text-[10px] font-semibold italic text-rose-900 px-1.5 py-0.5 rounded-full"
                          style={{ backgroundColor: '#fecaca', fontFamily: 'cursive' }}
                        >
                          AI-generated illustrative example
                        </span>
                      </div>
                      <div
                        className="text-sm text-slate-800 font-semibold italic"
                        style={{ fontFamily: 'cursive' }}
                      >
                        {item.resolvedLessonTitle}
                      </div>
                      <div
                        className="text-xs text-slate-500 mt-1 italic"
                        style={{ fontFamily: 'cursive' }}
                      >
                        Module {item.routeModuleId}: {item.resolvedModuleTitle}
                      </div>
                      <Link
                        to={`/module/${item.routeModuleId}/lesson/${item.lessonId}`}
                        className="text-xs font-semibold italic text-slate-800 mt-3 inline-flex items-center gap-1"
                        style={{ fontFamily: 'cursive' }}
                      >
                        <Highlighter color="#fde68a">View in Lesson →</Highlighter>
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
