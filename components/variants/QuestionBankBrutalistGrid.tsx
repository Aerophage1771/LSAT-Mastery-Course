/*
 * QuestionBankBrutalistGrid -- "Brutalist Card Grid" variant
 *
 * Raw, high-contrast, uncompromising. A reference to concrete
 * architecture, 1995 HTML, and Barbara Kruger typography --
 * rebuilt for 2026 as a functioning question inventory.
 *
 * Design commandments:
 *   1. Mono font, everywhere. No deviations.
 *   2. 2px solid black borders on every visible boundary.
 *   3. Zero rounded corners. `rounded-none` or omit rounding.
 *   4. No shadows except stacked-paper offset blocks
 *      (`shadow-[4px_4px_0_0_#000]`); no blur, no gradients.
 *   5. Color is a flat fill, never a gradient: yellow #facc15,
 *      hot pink #ec4899, electric blue #2563eb.
 *   6. Type hierarchy comes from size + weight, never hue.
 *   7. Transitions cap at 75ms. Cards collapse their shadow on
 *      hover and nudge down-right by 2px -- nothing more.
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
  f = f.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-black">$1</strong>');
  f = f.replace(/\*(.*?)\*/g, '<em class="text-black">$1</em>');
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

/* ------------------------------------------------------------------ */
/*  Option row -- big A/B/C/D/E yellow square, pink hit on correct    */
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

  let rowCls =
    'flex items-stretch gap-0 border-2 border-black bg-white transition-[transform,box-shadow] duration-75 ';
  let labelCls =
    'flex-shrink-0 w-12 flex items-center justify-center text-[18px] font-black border-r-2 border-black ';
  let textCls = 'flex-1 flex justify-between items-start gap-3 p-3 text-[14px] leading-snug ';

  if (revealed) {
    if (isCorrect) {
      rowCls += 'bg-[#ec4899] text-white shadow-[4px_4px_0_0_#000] ';
      labelCls += 'bg-black text-[#facc15] ';
      textCls += 'text-white font-bold ';
    } else if (isSelected) {
      rowCls += 'bg-white opacity-100 ';
      labelCls += 'bg-white text-black line-through ';
      textCls += 'text-black line-through decoration-2 ';
    } else {
      rowCls += 'bg-white opacity-40 ';
      labelCls += 'bg-white text-black ';
      textCls += 'text-black ';
    }
  } else {
    rowCls +=
      'cursor-pointer hover:shadow-[4px_4px_0_0_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] ';
    labelCls += 'bg-[#facc15] text-black ';
    textCls += 'text-black ';
  }

  return (
    <div
      className={rowCls}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelect();
      }}
    >
      <div className={labelCls}>{String.fromCharCode(65 + index)}</div>
      <div className={textCls}>
        <span dangerouslySetInnerHTML={{ __html: parseInline(cleanText) }} />
        {revealed && stats && (
          <span className="text-[11px] font-bold flex-shrink-0 pt-0.5 tabular-nums">{stats}</span>
        )}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Card -- 2px black border, 4px offset black shadow block            */
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
  const truncated = plainStimulus.length > 180 ? plainStimulus.slice(0, 180) + '…' : plainStimulus;

  const categoryChipCls =
    q.category === 'RC'
      ? 'bg-[#ec4899] text-white border-2 border-black px-2 py-0.5 text-[11px] font-black uppercase tracking-wider'
      : 'bg-[#2563eb] text-white border-2 border-black px-2 py-0.5 text-[11px] font-black uppercase tracking-wider';

  return (
    <div
      className={
        'bg-white border-2 border-black shadow-[4px_4px_0_0_#000] transition-[transform,box-shadow] duration-75 ' +
        'hover:shadow-[2px_2px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5'
      }
    >
      <button onClick={onToggle} className="w-full text-left px-4 py-3 flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="bg-black text-[#facc15] border-2 border-black px-2 py-0.5 text-[11px] font-black tracking-tight">
              #{q.ptId}
            </span>
            <span className={categoryChipCls}>{q.category}</span>
            <span className="bg-white text-black border-2 border-black px-2 py-0.5 text-[11px] font-bold uppercase">
              {q.typeName}
            </span>
            {drillCrossReferences[q.ptId] && (
              <span className="bg-[#facc15] text-black border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase">
                DRILL ON FILE
              </span>
            )}
          </div>
          {!isExpanded && (
            <p className="text-[13px] text-black leading-snug line-clamp-2">{truncated}</p>
          )}
        </div>
        <div className="flex-shrink-0 mt-0.5 text-black text-[18px] font-black leading-none select-none">
          {isExpanded ? '[−]' : '[+]'}
        </div>
      </button>

      {isExpanded && (
        <div className="border-t-2 border-black">
          {drillCrossReferences[q.ptId] && (
            <div className="px-4 py-2 bg-[#facc15] border-b-2 border-black">
              <Link
                to={`/module/${drillCrossReferences[q.ptId].moduleId}/lesson/${drillCrossReferences[q.ptId].lessonId}`}
                className="inline-flex items-center gap-1 text-black font-black uppercase text-[11px] tracking-wide underline underline-offset-2 decoration-2"
                onClick={(e) => e.stopPropagation()}
              >
                → MOD {drillCrossReferences[q.ptId].moduleId}: {drillCrossReferences[q.ptId].moduleTitle} /{' '}
                {drillCrossReferences[q.ptId].lessonTitle}
              </Link>
            </div>
          )}
          {q.passageTitle && (
            <div className="px-4 py-2 bg-[#ec4899] border-b-2 border-black">
              <span className="text-[11px] font-black text-white uppercase tracking-wider">
                PASSAGE :: {q.passageTitle}
              </span>
            </div>
          )}
          <div className="px-4 py-3 bg-white border-b-2 border-black">
            <div className="text-[10px] font-black text-black uppercase tracking-[0.25em] mb-2 border-b-2 border-black pb-1 inline-block">
              {q.category === 'RC' ? 'PASSAGE EXCERPT' : 'STIMULUS'}
            </div>
            <div
              className="text-[14px] text-black leading-relaxed"
              dangerouslySetInnerHTML={{ __html: parseInline(q.stimulus) }}
            />
          </div>

          {q.question && (
            <div className="px-4 py-3 bg-white border-b-2 border-black">
              <div className="text-[10px] font-black text-black uppercase tracking-[0.25em] mb-2 border-b-2 border-black pb-1 inline-block">
                QUESTION
              </div>
              <div
                className="text-[15px] text-black font-bold leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parseInline(q.question) }}
              />
            </div>
          )}

          {q.options.length > 0 && (
            <div className="p-4 bg-white flex flex-col gap-2">
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

/* ------------------------------------------------------------------ */
/*  Props contract (unchanged)                                         */
/* ------------------------------------------------------------------ */

interface QuestionBankProps {
  drillCrossReferences: Record<string, DrillReference>;
}

export const QuestionBankBrutalistGrid: React.FC<QuestionBankProps> = ({ drillCrossReferences }) => {
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

  /* ------------------------------------------------------------------ */
  /*  Sidebar row helper                                                 */
  /* ------------------------------------------------------------------ */

  const SideRow: React.FC<{
    active: boolean;
    onClick: () => void;
    label: string;
    count: number;
    accent?: 'yellow' | 'pink' | 'blue';
  }> = ({ active, onClick, label, count, accent = 'yellow' }) => {
    const accentBg =
      accent === 'pink' ? 'bg-[#ec4899]' : accent === 'blue' ? 'bg-[#2563eb] text-white' : 'bg-[#facc15]';
    return (
      <button
        onClick={onClick}
        className={
          'w-full text-left flex items-stretch border-b-2 border-black transition-[background] duration-75 ' +
          (active ? 'bg-black text-[#facc15]' : 'bg-white text-black hover:bg-[#f5f5f5]')
        }
      >
        <span className="flex-1 px-3 py-2 text-[12px] font-bold uppercase tracking-wide truncate">
          {label}
        </span>
        <span
          className={
            'flex-shrink-0 w-12 flex items-center justify-center text-[12px] font-black tabular-nums border-l-2 border-black ' +
            (active ? 'bg-[#facc15] text-black' : accentBg + ' text-black')
          }
        >
          {count}
        </span>
      </button>
    );
  };

  return (
    <div className="flex flex-col h-full min-h-screen bg-[#f5f5f5] font-mono">
      {/* Crumb bar */}
      <div className="bg-white border-b-2 border-black px-4 py-2 flex items-center gap-3">
        <Link
          to="/"
          className="flex items-center gap-1 text-[12px] font-black uppercase tracking-wider text-black hover:bg-[#facc15] px-2 py-1 border-2 border-black transition-[background] duration-75"
        >
          ← DASHBOARD
        </Link>
        <span className="text-black font-black">//</span>
        <span className="text-[12px] font-black uppercase tracking-wider text-black">QUESTION BANK</span>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar = concrete slab */}
        <aside
          className={
            'fixed lg:sticky top-0 left-0 z-40 lg:z-0 h-full w-72 bg-white border-r-2 border-black flex flex-col transition-transform duration-75 lg:translate-x-0 ' +
            (sidebarOpen ? 'translate-x-0' : '-translate-x-full')
          }
        >
          <div className="p-4 border-b-2 border-black bg-[#facc15]">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-[13px] font-black text-black uppercase tracking-[0.2em]">
                QUESTION TYPES
              </h2>
              <button
                className="lg:hidden w-7 h-7 flex items-center justify-center border-2 border-black bg-white text-black font-black"
                onClick={() => setSidebarOpen(false)}
              >
                X
              </button>
            </div>
            <p className="text-[11px] text-black font-bold">
              {activeTab === 'real'
                ? `${ALL_QUESTIONS.length} QUESTIONS / ${totalTypeCount} TYPES`
                : `${resolvedIllustrativeInventory.length} ILLUSTRATIVE / ${illustrativeTypeCountMap.size} TYPES`}
            </p>
          </div>

          <nav className="flex-1 overflow-y-auto">
            {activeTab === 'real' ? (
              <>
                <SideRow
                  active={selectedType === null && selectedCategory === null}
                  onClick={() => {
                    setSelectedType(null);
                    setSelectedCategory(null);
                    setSidebarOpen(false);
                  }}
                  label="ALL QUESTIONS"
                  count={ALL_QUESTIONS.length}
                />

                <div className="px-3 py-2 bg-[#2563eb] text-white border-b-2 border-black">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                    LR QUESTIONS
                  </span>
                </div>
                {sortedLRTypes.map(([name, count]) => (
                  <SideRow
                    key={`lr-${name}`}
                    active={selectedType === name && selectedCategory === 'LR'}
                    onClick={() => {
                      setSelectedType(name);
                      setSelectedCategory('LR');
                      setSidebarOpen(false);
                    }}
                    label={name}
                    count={count}
                    accent="blue"
                  />
                ))}

                <div className="px-3 py-2 bg-[#ec4899] text-white border-b-2 border-black">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                    RC QUESTIONS
                  </span>
                </div>
                {sortedRCTypes.map(([name, count]) => (
                  <SideRow
                    key={`rc-${name}`}
                    active={selectedType === name && selectedCategory === 'RC'}
                    onClick={() => {
                      setSelectedType(name);
                      setSelectedCategory('RC');
                      setSidebarOpen(false);
                    }}
                    label={name}
                    count={count}
                    accent="pink"
                  />
                ))}
              </>
            ) : (
              <>
                <SideRow
                  active={selectedType === null}
                  onClick={() => {
                    setSelectedType(null);
                    setSidebarOpen(false);
                  }}
                  label="ALL ILLUSTRATIVE"
                  count={typedInventory.length}
                />
                <div className="px-3 py-2 bg-[#facc15] text-black border-b-2 border-black">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                    QUESTION TYPES
                  </span>
                </div>
                {sortedIllustrativeTypes.map(([name, count]) => (
                  <SideRow
                    key={`ill-${name}`}
                    active={selectedType === name}
                    onClick={() => {
                      setSelectedType(name);
                      setSelectedCategory(null);
                      setSidebarOpen(false);
                    }}
                    label={name}
                    count={count}
                  />
                ))}
              </>
            )}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Top bar */}
          <div className="sticky top-0 z-20 bg-white border-b-2 border-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 space-y-3">
              {/* Tabs -- two big square buttons */}
              <div className="grid grid-cols-2 gap-0">
                <button
                  className={
                    'border-2 border-black px-4 py-3 text-[13px] font-black uppercase tracking-wider transition-[background,color] duration-75 ' +
                    (activeTab === 'real'
                      ? 'bg-black text-[#facc15]'
                      : 'bg-white text-black hover:bg-[#facc15]')
                  }
                  onClick={() => {
                    setActiveTab('real');
                    setSelectedType(null);
                    setSelectedCategory(null);
                  }}
                >
                  PREPTEST QUESTIONS [{ALL_QUESTIONS.length}]
                </button>
                <button
                  className={
                    'border-2 border-l-0 border-black px-4 py-3 text-[13px] font-black uppercase tracking-wider transition-[background,color] duration-75 ' +
                    (activeTab === 'illustrative'
                      ? 'bg-black text-[#facc15]'
                      : 'bg-white text-black hover:bg-[#facc15]')
                  }
                  onClick={() => {
                    setActiveTab('illustrative');
                    setSelectedType(null);
                    setSelectedCategory(null);
                  }}
                >
                  ILLUSTRATIVE [{typedInventory.length}]
                </button>
              </div>

              {/* Search + filter button */}
              <div className="flex items-stretch gap-2">
                <button
                  className="lg:hidden flex-shrink-0 w-12 border-2 border-black bg-white text-black font-black hover:bg-[#facc15] transition-[background] duration-75"
                  onClick={() => setSidebarOpen(true)}
                  aria-label="Open filter"
                >
                  ≡
                </button>

                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black font-black text-[14px] pointer-events-none">
                    /
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      activeTab === 'real'
                        ? 'SEARCH STIMULI, QUESTIONS, PT IDS...'
                        : 'SEARCH BY LESSON, MODULE, CARD ID...'
                    }
                    className="w-full pl-8 pr-10 py-2.5 border-2 border-black rounded-none bg-white text-[13px] font-bold text-black placeholder:text-black/50 placeholder:font-normal focus:outline-none focus:border-[#ec4899] transition-[border-color] duration-75 font-mono"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center border-2 border-black bg-white text-black font-black text-[12px] hover:bg-[#facc15] transition-[background] duration-75"
                    >
                      X
                    </button>
                  )}
                </div>
              </div>

              {/* In Use / Not In Use chips */}
              {activeTab === 'real' && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowInUseOnly(!showInUseOnly)}
                    className={
                      'px-3 py-1.5 border-2 border-black text-[11px] font-black uppercase tracking-wider transition-[background,color] duration-75 ' +
                      (showInUseOnly
                        ? 'bg-[#2563eb] text-white'
                        : 'bg-white text-black hover:bg-[#facc15]')
                    }
                  >
                    {showInUseOnly ? '[X] IN USE ONLY' : '[ ] IN USE ONLY'}
                  </button>
                  <button
                    onClick={() => setShowNotInUseOnly(!showNotInUseOnly)}
                    className={
                      'px-3 py-1.5 border-2 border-black text-[11px] font-black uppercase tracking-wider transition-[background,color] duration-75 ' +
                      (showNotInUseOnly
                        ? 'bg-[#ec4899] text-white'
                        : 'bg-white text-black hover:bg-[#facc15]')
                    }
                  >
                    {showNotInUseOnly ? '[X] NOT IN USE' : '[ ] NOT IN USE'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Header + export */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-[32px] leading-none font-black text-black tracking-tight uppercase">
                  QUESTION BANK
                </h1>
                <div className="mt-2 h-[6px] w-24 bg-black" />
              </div>
              <div className="relative">
                <button
                  onClick={() => setExportMenuOpen((open) => !open)}
                  className="inline-flex items-center gap-2 px-3 py-2 border-2 border-black bg-[#facc15] text-black text-[12px] font-black uppercase tracking-wider shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-[transform,box-shadow] duration-75"
                >
                  ↓ EXPORT {exportMenuOpen ? '[−]' : '[+]'}
                </button>
                {exportMenuOpen && (
                  <div className="absolute right-0 mt-2 w-72 border-2 border-black bg-white shadow-[4px_4px_0_0_#000] z-30">
                    <button
                      onClick={() =>
                        downloadExport(
                          generateQuestionBankJSON(exportRows),
                          `question-bank-full-${activeTab}`,
                          'json',
                          'application/json',
                        )
                      }
                      className="w-full text-left px-3 py-2.5 text-[11px] font-black uppercase tracking-wider text-black border-b-2 border-black hover:bg-[#facc15] transition-[background] duration-75"
                    >
                      FULL DATABASE :: JSON
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
                      className="w-full text-left px-3 py-2.5 text-[11px] font-black uppercase tracking-wider text-black border-b-2 border-black hover:bg-[#facc15] transition-[background] duration-75"
                    >
                      FULL DATABASE :: CSV
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
                      className="w-full text-left px-3 py-2.5 text-[11px] font-black uppercase tracking-wider text-black border-b-2 border-black hover:bg-[#facc15] transition-[background] duration-75"
                    >
                      IDS ONLY :: TXT
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
                      className="w-full text-left px-3 py-2.5 text-[11px] font-black uppercase tracking-wider text-black border-b-2 border-black hover:bg-[#facc15] transition-[background] duration-75"
                    >
                      IDS ONLY :: CSV
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
                      className="w-full text-left px-3 py-2.5 text-[11px] font-black uppercase tracking-wider text-white bg-[#ec4899] hover:bg-black transition-[background] duration-75"
                    >
                      MISSING / ILLUSTRATIVE IDS
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Count line */}
            <p className="mt-3 text-[12px] text-black font-bold uppercase tracking-wider">
              {activeTab === 'real' ? (
                <>
                  {filteredQuestions.length === ALL_QUESTIONS.length
                    ? `${ALL_QUESTIONS.length} PRACTICE QUESTIONS`
                    : `${filteredQuestions.length} OF ${ALL_QUESTIONS.length} QUESTIONS`}
                </>
              ) : (
                <>
                  {filteredIllustrative.length === typedInventory.length
                    ? `${typedInventory.length} ILLUSTRATIVE QUESTIONS`
                    : `${filteredIllustrative.length} OF ${typedInventory.length} ILLUSTRATIVE QUESTIONS`}
                </>
              )}
              {(selectedType || selectedCategory) && (
                <span className="ml-2 inline-flex items-center gap-1">
                  <span className="text-black">//</span>
                  {selectedCategory && (
                    <span
                      className={
                        'px-2 py-0.5 border-2 border-black text-white font-black text-[11px] ' +
                        (selectedCategory === 'RC' ? 'bg-[#ec4899]' : 'bg-[#2563eb]')
                      }
                    >
                      {selectedCategory}
                    </span>
                  )}
                  {selectedType && (
                    <span className="px-2 py-0.5 border-2 border-black bg-black text-[#facc15] font-black text-[11px]">
                      {selectedType}
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSelectedType(null);
                      setSelectedCategory(null);
                    }}
                    className="ml-1 w-6 h-6 flex items-center justify-center border-2 border-black bg-white text-black font-black hover:bg-[#facc15] transition-[background] duration-75"
                    aria-label="Clear filter"
                  >
                    X
                  </button>
                </span>
              )}
            </p>
          </div>

          {/* Card grid -- explicit grid, gap-0, neighbor cards share a border via -mt-[2px] */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
            {activeTab === 'real' ? (
              <>
                {filteredQuestions.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                    <div className="text-[48px] font-black text-black leading-none">[ ]</div>
                    <p className="mt-4 text-black text-[14px] font-black uppercase tracking-widest">
                      NO QUESTIONS FOUND
                    </p>
                    <p className="text-black text-[12px] font-bold uppercase tracking-wider mt-1">
                      ADJUST SEARCH OR FILTER
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {filteredQuestions.map((q) => (
                      <QuestionCardItem
                        key={q.id}
                        q={q}
                        isExpanded={expandedId === q.id}
                        onToggle={() => handleToggle(q.id)}
                        drillCrossReferences={drillCrossReferences}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                {filteredIllustrative.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                    <div className="text-[48px] font-black text-black leading-none">[ ]</div>
                    <p className="mt-4 text-black text-[14px] font-black uppercase tracking-widest">
                      NO ILLUSTRATIVE QUESTIONS FOUND
                    </p>
                    <p className="text-black text-[12px] font-bold uppercase tracking-wider mt-1">
                      ADJUST SEARCH OR FILTER
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredIllustrative.map((item) => (
                      <div
                        key={`${item.file}-${item.cardId}`}
                        className="border-2 border-black bg-white shadow-[4px_4px_0_0_#000] p-4 transition-[transform,box-shadow] duration-75 hover:shadow-[2px_2px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5"
                      >
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="bg-[#facc15] text-black border-2 border-black px-2 py-0.5 text-[11px] font-black">
                            {item.cardId}
                          </span>
                          <span className="bg-white text-black border-2 border-black px-2 py-0.5 text-[11px] font-bold uppercase">
                            {item.questionType}
                          </span>
                          {item.difficulty !== 'unset' && (
                            <span className="text-[10px] font-black text-black uppercase tracking-wider">
                              {item.difficulty}
                            </span>
                          )}
                          <span className="bg-[#ec4899] text-white border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase tracking-wider">
                            AI ILLUSTRATIVE
                          </span>
                        </div>
                        <div className="text-[13px] text-black font-bold">
                          {item.resolvedLessonTitle}
                        </div>
                        <div className="text-[11px] text-black font-bold uppercase tracking-wider mt-1">
                          MOD {item.routeModuleId} :: {item.resolvedModuleTitle}
                        </div>
                        <Link
                          to={`/module/${item.routeModuleId}/lesson/${item.lessonId}`}
                          className="inline-block mt-3 px-2 py-1 border-2 border-black bg-[#2563eb] text-white text-[11px] font-black uppercase tracking-wider hover:bg-black transition-[background] duration-75"
                        >
                          → VIEW IN LESSON
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
