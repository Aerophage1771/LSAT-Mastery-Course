/**
 * QuestionBankSoftAurora -- "Soft Aurora Gradient" variant
 *
 * Calm, ambient, northern-lights aesthetic. A soft vertical gradient sweeps the
 * page from pale lavender through mint into peach, and a huge blurred lavender
 * blob sits behind the content for atmosphere. Surfaces are glass: translucent
 * white + backdrop-blur, hairline white borders, and soft violet glow shadows.
 * Corners are generously rounded (3xl on primary surfaces, 2xl on cards, full on
 * pills). Category identity comes from pastel gradient chips -- LR violet->sky,
 * RC emerald->teal. Typography is thin for body, medium for labels. No hard
 * edges. Selected-correct options flush mint; selected-wrong blush rose.
 */
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Search, Filter, ChevronDown, ChevronUp, BookOpen, Hash, X, ArrowLeft, Download } from 'lucide-react';
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
  f = f.replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-slate-900">$1</strong>');
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

  let cls = 'flex items-start gap-3 px-4 py-3 rounded-full border transition-all duration-200 ';
  if (revealed) {
    if (isCorrect) cls += 'border-emerald-200/80 bg-gradient-to-r from-emerald-100/80 to-teal-50/70 shadow-[0_4px_16px_rgb(16_185_129/0.12)]';
    else if (isSelected) cls += 'border-rose-200/80 bg-gradient-to-r from-rose-100/70 to-pink-50/60 shadow-[0_4px_16px_rgb(244_63_94/0.10)]';
    else cls += 'border-white/60 bg-white/30 opacity-50';
  } else {
    cls += 'border-white/70 bg-white/50 hover:bg-white/80 hover:border-violet-200/80 cursor-pointer active:scale-[0.995] backdrop-blur-sm';
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
        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-medium border transition-colors ${
          revealed && isCorrect
            ? 'bg-gradient-to-br from-emerald-300 to-teal-300 border-emerald-200 text-white shadow-[0_2px_8px_rgb(16_185_129/0.25)]'
            : revealed && isSelected && !isCorrect
              ? 'bg-gradient-to-br from-rose-300 to-pink-300 border-rose-200 text-white shadow-[0_2px_8px_rgb(244_63_94/0.25)]'
              : 'bg-white/80 border-white text-violet-600 shadow-[0_2px_6px_rgb(139_92_246/0.08)]'
        }`}
      >
        {String.fromCharCode(65 + index)}
      </div>
      <div className="flex-1 flex justify-between items-start gap-3">
        <span
          className={`text-[14px] leading-relaxed font-light ${revealed && isCorrect ? 'text-emerald-900 font-medium' : revealed && isSelected ? 'text-rose-800' : 'text-slate-600'}`}
          dangerouslySetInnerHTML={{ __html: parseInline(cleanText) }}
        />
        {revealed && stats && (
          <span className="text-[11px] font-mono text-violet-400 flex-shrink-0 pt-0.5">{stats}</span>
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

  const categoryGradient =
    q.category === 'RC'
      ? 'bg-gradient-to-r from-emerald-200 to-teal-200 text-emerald-800'
      : 'bg-gradient-to-r from-violet-200 to-sky-200 text-violet-800';

  return (
    <div className="group rounded-2xl border border-white/70 bg-white/60 backdrop-blur-md hover:bg-white/75 transition-all duration-300 shadow-[0_8px_32px_rgb(139_92_246/0.12)] hover:shadow-[0_12px_40px_rgb(139_92_246/0.18)] overflow-hidden">
      <button onClick={onToggle} className="w-full text-left px-6 py-5 flex items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm text-violet-700 text-[11px] font-medium font-mono tracking-tight border border-white/80">
              <Hash size={10} />
              {q.ptId}
            </span>
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium ${categoryGradient}`}
            >
              <BookOpen size={10} />
              {q.typeName}
            </span>
            <span
              aria-label={`Category: ${q.category}`}
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium ${
                q.category === 'RC'
                  ? 'bg-gradient-to-r from-teal-200/80 to-emerald-200/80 text-emerald-800'
                  : 'bg-gradient-to-r from-violet-200/80 to-indigo-200/80 text-violet-800'
              }`}
            >
              {q.category}
            </span>
            {drillCrossReferences[q.ptId] && (
              <span className="text-[10px] text-violet-500 font-medium italic">· has drill lesson</span>
            )}
          </div>
          {!isExpanded && (
            <p className="text-[14px] text-slate-500 font-light leading-relaxed line-clamp-2">{truncated}</p>
          )}
        </div>
        <div className="flex-shrink-0 mt-1 text-violet-300 group-hover:text-violet-500 transition-colors">
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-white/60">
          {drillCrossReferences[q.ptId] && (
            <div className="px-6 py-3 bg-gradient-to-r from-violet-50/60 to-sky-50/50 border-b border-white/60 flex items-center gap-2">
              <Link
                to={`/module/${drillCrossReferences[q.ptId].moduleId}/lesson/${drillCrossReferences[q.ptId].lessonId}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/70 backdrop-blur-sm text-violet-700 hover:bg-white/90 transition-all border border-white/80 shadow-[0_2px_8px_rgb(139_92_246/0.08)]"
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
            <div className="px-6 py-3 bg-gradient-to-r from-peach-50 to-rose-50/50 bg-gradient-to-r from-[#fed7aa]/30 to-[#fecaca]/20 border-b border-white/60">
              <span className="text-[11px] font-medium text-rose-700 italic">Passage: {q.passageTitle}</span>
            </div>
          )}
          <div className="px-6 py-5 bg-gradient-to-br from-violet-50/60 to-white/60 border-b border-white/60">
            <div className="text-[10px] font-medium text-violet-500 uppercase tracking-[0.2em] mb-2">
              {q.category === 'RC' ? 'Passage Excerpt' : 'Stimulus'}
            </div>
            <div
              className="text-[15px] text-slate-700 leading-relaxed font-light"
              dangerouslySetInnerHTML={{ __html: parseInline(q.stimulus) }}
            />
          </div>

          {q.question && (
            <div className="px-6 py-4 bg-white/40 border-b border-white/60">
              <div className="text-[10px] font-medium text-violet-500 uppercase tracking-[0.2em] mb-1.5">Question</div>
              <div
                className="text-[15px] text-slate-900 font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parseInline(q.question) }}
              />
            </div>
          )}

          {q.options.length > 0 && (
            <div className="px-6 py-5 space-y-2.5">
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

export const QuestionBankSoftAurora: React.FC<QuestionBankProps> = ({ drillCrossReferences }) => {
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
    <div className="relative flex flex-col h-full min-h-screen bg-gradient-to-b from-[#ede9fe] via-[#d1fae5] to-[#fed7aa] overflow-hidden">
      {/* Ambient aurora blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] bg-[#a78bfa]/20 rounded-full blur-3xl -z-0" />
      <div className="pointer-events-none absolute top-[30%] -left-40 w-[500px] h-[500px] bg-[#6ee7b7]/20 rounded-full blur-3xl -z-0" />
      <div className="pointer-events-none absolute bottom-0 right-[10%] w-[450px] h-[450px] bg-[#fbcfe8]/25 rounded-full blur-3xl -z-0" />

      {/* Breadcrumb pill */}
      <div className="relative z-10 px-6 py-5 flex items-center">
        <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-md rounded-full px-5 py-2 border border-white/60 shadow-[0_4px_20px_rgb(139_92_246/0.08)]">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-medium text-violet-700 hover:text-violet-900 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Dashboard</span>
          </Link>
          <span className="text-violet-300">·</span>
          <span className="text-sm font-medium text-slate-700">Question Bank</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 min-h-0">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-violet-900/10 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-0 left-0 z-40 lg:z-0 h-full w-72 bg-white/40 backdrop-blur-lg rounded-r-3xl border-r border-white/60 shadow-[0_8px_32px_rgb(139_92_246/0.08)] flex flex-col transition-transform duration-300 lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 border-b border-white/60">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xs font-medium text-violet-700 uppercase tracking-[0.25em]">Question Types</h2>
              <button
                className="lg:hidden p-1 rounded-full text-violet-400 hover:text-violet-600 hover:bg-white/50"
                onClick={() => setSidebarOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-[12px] text-slate-500 font-light italic">
              {activeTab === 'real'
                ? `${ALL_QUESTIONS.length} questions across ${totalTypeCount} types`
                : `${resolvedIllustrativeInventory.length} illustrative across ${illustrativeTypeCountMap.size} types`}
            </p>
          </div>

          <nav className="flex-1 overflow-y-auto py-3 px-3 scrollbar-hide space-y-1">
            {activeTab === 'real' ? (
              <>
                <button
                  onClick={() => {
                    setSelectedType(null);
                    setSelectedCategory(null);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-[13px] rounded-2xl flex items-center justify-between transition-all ${
                    selectedType === null && selectedCategory === null
                      ? 'bg-gradient-to-r from-violet-200/70 to-sky-200/70 text-violet-900 font-medium shadow-[inset_0_0_0_1px_rgb(167_139_250/0.3),0_4px_16px_rgb(139_92_246/0.12)]'
                      : 'text-slate-600 hover:bg-white/50 font-light'
                  }`}
                >
                  <span>All Questions</span>
                  <span
                    className={`text-[11px] font-mono ${selectedType === null && selectedCategory === null ? 'text-violet-700' : 'text-slate-400'}`}
                  >
                    {ALL_QUESTIONS.length}
                  </span>
                </button>

                <div className="px-4 pt-5 pb-1.5">
                  <span className="text-[10px] font-medium text-violet-500 uppercase tracking-[0.25em]">
                    LR Questions
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
                    className={`w-full text-left px-4 py-2.5 text-[13px] rounded-2xl flex items-center justify-between transition-all ${
                      selectedType === name && selectedCategory === 'LR'
                        ? 'bg-gradient-to-r from-violet-200/70 to-sky-200/70 text-violet-900 font-medium shadow-[inset_0_0_0_1px_rgb(167_139_250/0.3),0_4px_16px_rgb(139_92_246/0.12)]'
                        : 'text-slate-600 hover:bg-white/50 font-light'
                    }`}
                  >
                    <span className="truncate pr-2">{name}</span>
                    <span
                      className={`text-[11px] font-mono flex-shrink-0 ${selectedType === name && selectedCategory === 'LR' ? 'text-violet-700' : 'text-slate-400'}`}
                    >
                      {count}
                    </span>
                  </button>
                ))}

                <div className="px-4 pt-5 pb-1.5">
                  <span className="text-[10px] font-medium text-emerald-600 uppercase tracking-[0.25em]">
                    RC Questions
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
                    className={`w-full text-left px-4 py-2.5 text-[13px] rounded-2xl flex items-center justify-between transition-all ${
                      selectedType === name && selectedCategory === 'RC'
                        ? 'bg-gradient-to-r from-emerald-200/70 to-teal-200/70 text-emerald-900 font-medium shadow-[inset_0_0_0_1px_rgb(110_231_183/0.3),0_4px_16px_rgb(16_185_129/0.12)]'
                        : 'text-slate-600 hover:bg-white/50 font-light'
                    }`}
                  >
                    <span className="truncate pr-2">{name}</span>
                    <span
                      className={`text-[11px] font-mono flex-shrink-0 ${selectedType === name && selectedCategory === 'RC' ? 'text-emerald-700' : 'text-slate-400'}`}
                    >
                      {count}
                    </span>
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
                  className={`w-full text-left px-4 py-2.5 text-[13px] rounded-2xl flex items-center justify-between transition-all ${
                    selectedType === null
                      ? 'bg-gradient-to-r from-[#fed7aa]/70 to-rose-200/70 text-rose-900 font-medium shadow-[inset_0_0_0_1px_rgb(253_186_116/0.4),0_4px_16px_rgb(251_146_60/0.12)]'
                      : 'text-slate-600 hover:bg-white/50 font-light'
                  }`}
                >
                  <span>All Illustrative</span>
                  <span
                    className={`text-[11px] font-mono ${selectedType === null ? 'text-rose-700' : 'text-slate-400'}`}
                  >
                    {typedInventory.length}
                  </span>
                </button>

                <div className="px-4 pt-5 pb-1.5">
                  <span className="text-[10px] font-medium text-rose-500 uppercase tracking-[0.25em]">
                    Question Types
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
                    className={`w-full text-left px-4 py-2.5 text-[13px] rounded-2xl flex items-center justify-between transition-all ${
                      selectedType === name
                        ? 'bg-gradient-to-r from-[#fed7aa]/70 to-rose-200/70 text-rose-900 font-medium shadow-[inset_0_0_0_1px_rgb(253_186_116/0.4),0_4px_16px_rgb(251_146_60/0.12)]'
                        : 'text-slate-600 hover:bg-white/50 font-light'
                    }`}
                  >
                    <span className="truncate pr-2">{name}</span>
                    <span
                      className={`text-[11px] font-mono flex-shrink-0 ${selectedType === name ? 'text-rose-700' : 'text-slate-400'}`}
                    >
                      {count}
                    </span>
                  </button>
                ))}
              </>
            )}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Top bar */}
          <div className="sticky top-0 z-20 bg-white/30 backdrop-blur-xl border-b border-white/40">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 space-y-3">
              <div className="inline-flex items-center gap-1 bg-white/50 backdrop-blur-md p-1 rounded-full border border-white/60 shadow-[0_4px_16px_rgb(139_92_246/0.08)]">
                <button
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                    activeTab === 'real'
                      ? 'bg-gradient-to-r from-violet-200 to-sky-200 text-violet-900 shadow-[0_4px_16px_rgb(139_92_246/0.18)]'
                      : 'text-slate-500 hover:text-violet-700'
                  }`}
                  onClick={() => {
                    setActiveTab('real');
                    setSelectedType(null);
                    setSelectedCategory(null);
                  }}
                >
                  PrepTest Questions{' '}
                  <span className={`ml-1 text-xs font-light ${activeTab === 'real' ? 'text-violet-700' : 'text-slate-400'}`}>
                    {ALL_QUESTIONS.length}
                  </span>
                </button>
                <button
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                    activeTab === 'illustrative'
                      ? 'bg-gradient-to-r from-[#fed7aa] to-rose-200 text-rose-900 shadow-[0_4px_16px_rgb(251_146_60/0.18)]'
                      : 'text-slate-500 hover:text-rose-700'
                  }`}
                  onClick={() => {
                    setActiveTab('illustrative');
                    setSelectedType(null);
                    setSelectedCategory(null);
                  }}
                >
                  Illustrative Questions{' '}
                  <span className={`ml-1 text-xs font-light ${activeTab === 'illustrative' ? 'text-rose-700' : 'text-slate-400'}`}>
                    {typedInventory.length}
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="lg:hidden flex-shrink-0 p-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/70 text-violet-500 hover:text-violet-700 hover:bg-white/80 transition-all shadow-[0_4px_12px_rgb(139_92_246/0.08)]"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Filter size={18} />
                </button>

                <div className="relative flex-1">
                  <Search
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-400 pointer-events-none"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      activeTab === 'real' ? 'Search stimuli, questions, PT IDs…' : 'Search by lesson, module, card ID…'
                    }
                    className="w-full pl-11 pr-10 py-2.5 rounded-full border border-white/80 bg-white/70 backdrop-blur-sm text-[14px] font-light text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-300/40 focus:border-violet-200 transition-all shadow-[0_4px_16px_rgb(139_92_246/0.06)]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-violet-400 hover:text-violet-600"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>
              {activeTab === 'real' && (
                <div className="flex items-center gap-2.5 pb-1">
                  <button
                    onClick={() => setShowInUseOnly(!showInUseOnly)}
                    className={`text-xs font-medium px-4 py-1.5 rounded-full border backdrop-blur-md transition-all ${
                      showInUseOnly
                        ? 'bg-gradient-to-r from-violet-200/70 to-sky-200/70 text-violet-800 border-white/70 shadow-[0_4px_12px_rgb(139_92_246/0.15)]'
                        : 'bg-white/50 text-slate-500 border-white/70 hover:bg-white/70'
                    }`}
                  >
                    {showInUseOnly ? '✓ In Use Only' : 'In Use Only'}
                  </button>
                  <button
                    onClick={() => setShowNotInUseOnly(!showNotInUseOnly)}
                    className={`text-xs font-medium px-4 py-1.5 rounded-full border backdrop-blur-md transition-all ${
                      showNotInUseOnly
                        ? 'bg-gradient-to-r from-[#fed7aa]/70 to-rose-200/70 text-rose-800 border-white/70 shadow-[0_4px_12px_rgb(251_146_60/0.15)]'
                        : 'bg-white/50 text-slate-500 border-white/70 hover:bg-white/70'
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
              <h1 className="text-3xl font-light text-slate-900 tracking-tight">
                <span className="bg-gradient-to-r from-violet-700 via-emerald-700 to-rose-700 bg-clip-text text-transparent">
                  Question Bank
                </span>
              </h1>
              <div className="relative">
                <button
                  onClick={() => setExportMenuOpen((open) => !open)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/70 bg-white/60 backdrop-blur-md text-xs font-medium text-violet-700 hover:bg-white/80 transition-all shadow-[0_4px_16px_rgb(139_92_246/0.1)]"
                >
                  <Download size={14} />
                  Export
                  <ChevronDown size={14} className={`${exportMenuOpen ? 'rotate-180' : ''} transition-transform`} />
                </button>
                {exportMenuOpen && (
                  <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgb(139_92_246/0.15)] z-30 p-2">
                    <button
                      onClick={() =>
                        downloadExport(
                          generateQuestionBankJSON(exportRows),
                          `question-bank-full-${activeTab}`,
                          'json',
                          'application/json',
                        )
                      }
                      className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-white/70 rounded-xl transition-colors"
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
                      className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-white/70 rounded-xl transition-colors"
                    >
                      Export Full Database (CSV)
                    </button>
                    <div className="my-1.5 border-t border-white/60" />
                    <button
                      onClick={() =>
                        downloadExport(
                          generateQuestionBankIDsText(exportRows),
                          `question-bank-ids-${activeTab}`,
                          'txt',
                          'text/plain;charset=utf-8',
                        )
                      }
                      className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-white/70 rounded-xl transition-colors"
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
                      className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-white/70 rounded-xl transition-colors"
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
                      className="w-full text-left px-3 py-2 text-xs font-medium text-rose-700 hover:bg-rose-50/60 rounded-xl transition-colors"
                    >
                      Export Missing/Illustrative IDs
                    </button>
                  </div>
                )}
              </div>
            </div>
            <p className="mt-2 text-[14px] text-slate-500 font-light">
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
                  <span className="text-violet-300">·</span>
                  {selectedCategory && (
                    <span
                      className={`font-medium ${selectedCategory === 'RC' ? 'text-emerald-700' : 'text-violet-700'}`}
                    >
                      {selectedCategory}
                    </span>
                  )}
                  {selectedType && (
                    <span
                      className={`font-medium ${selectedCategory === 'RC' ? 'text-emerald-700' : 'text-violet-700'}`}
                    >
                      {selectedCategory ? ' · ' : ''}
                      {selectedType}
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSelectedType(null);
                      setSelectedCategory(null);
                    }}
                    className="ml-1 text-violet-400 hover:text-violet-600"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
            </p>
          </div>

          {/* Question cards */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-3">
            {activeTab === 'real' ? (
              <>
                {filteredQuestions.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-28 text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-violet-300/30 blur-2xl rounded-full" />
                      <Search size={56} className="relative text-violet-300/70" strokeWidth={1.25} />
                    </div>
                    <p className="text-slate-600 text-[16px] font-light italic">No questions found</p>
                    <p className="text-slate-400 text-[13px] font-light mt-1.5">
                      Try adjusting your search or filter
                    </p>
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
                  <div className="flex flex-col items-center justify-center py-28 text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-rose-300/30 blur-2xl rounded-full" />
                      <Search size={56} className="relative text-rose-300/70" strokeWidth={1.25} />
                    </div>
                    <p className="text-slate-600 text-[16px] font-light italic">No illustrative questions found</p>
                    <p className="text-slate-400 text-[13px] font-light mt-1.5">
                      Try adjusting your search or filter
                    </p>
                  </div>
                ) : (
                  filteredIllustrative.map((item) => (
                    <div
                      key={`${item.file}-${item.cardId}`}
                      className="p-5 rounded-2xl border border-white/70 bg-white/60 backdrop-blur-md hover:bg-white/75 transition-all shadow-[0_8px_32px_rgb(251_146_60/0.08)] hover:shadow-[0_12px_40px_rgb(251_146_60/0.12)]"
                    >
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs font-mono bg-white/70 backdrop-blur-sm text-rose-700 px-3 py-1 rounded-full border border-white/80">
                          {item.cardId}
                        </span>
                        <span className="text-xs font-medium bg-gradient-to-r from-[#fed7aa]/80 to-rose-200/80 text-rose-800 px-3 py-1 rounded-full">
                          {item.questionType}
                        </span>
                        {item.difficulty !== 'unset' && (
                          <span className="text-xs text-slate-400 font-light italic">{item.difficulty}</span>
                        )}
                        <span className="text-[10px] font-medium bg-gradient-to-r from-rose-200/80 to-pink-200/80 text-rose-800 px-2.5 py-1 rounded-full">
                          AI-generated illustrative example
                        </span>
                      </div>
                      <div className="text-sm text-slate-700 font-medium">{item.resolvedLessonTitle}</div>
                      <div className="text-xs text-slate-500 mt-1 font-light">
                        Module {item.routeModuleId}: {item.resolvedModuleTitle}
                      </div>
                      <Link
                        to={`/module/${item.routeModuleId}/lesson/${item.lessonId}`}
                        className="text-xs text-violet-600 hover:text-violet-800 mt-3 inline-flex items-center gap-1 font-medium"
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
