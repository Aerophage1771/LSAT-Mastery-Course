/**
 * QuestionBankBloombergTerminal
 * ---------------------------------------------------------------
 * Aesthetic: BLOOMBERG TERMINAL — dense, data-first financial
 * terminal look. Pure black ground, monospaced everywhere, amber
 * primary text, cyan for keys/metadata, magenta for alerts and
 * "in-use" flags, green for numeric counts. No rounded corners —
 * sharp right angles throughout. No shadows. Hairline borders in
 * amber/cyan. Ticker-style header, dot-leader sidebar command
 * palette, uppercase labels (CMD:, FUNC:) and bracketed hotkeys
 * ([F1], [F2], [ESC]). Row-based tabular main grid — every
 * question is a single 32-40px row with IDX | PT-ID | TYPE | CAT
 * | USE | STIMULUS-PREVIEW columns. Expanded rows drop a dense
 * detail pane underneath.
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
  f = f.replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-200">$1</strong>');
  f = f.replace(/\*(.*?)\*/g, '<em class="text-amber-300/90">$1</em>');
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

// Single terminal-row option line. Monospaced, `>` cursor for selected,
// trailing `✓ CORRECT` / `✗ WRONG` tag after reveal.
const TerminalOption: React.FC<{
  item: string;
  index: number;
  revealed: boolean;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ item, index, revealed, isSelected, onSelect }) => {
  const isCorrect = item.includes('(Correct)');
  const cleanText = cleanOptionText(item);
  const label = String.fromCharCode(65 + index);
  const statsMatch = item.match(/\[(\d+(\.\d+)?%)\]/);
  const stats = statsMatch ? statsMatch[1] : null;

  let rowCls = 'flex items-start gap-2 px-3 py-1.5 font-mono text-[12px] leading-snug border-l-2 transition-colors cursor-pointer select-none ';
  if (revealed) {
    if (isCorrect) rowCls += 'border-green-500 bg-green-500/5 text-green-400';
    else if (isSelected) rowCls += 'border-red-500 bg-red-500/5 text-red-400';
    else rowCls += 'border-amber-900/40 text-amber-700';
  } else {
    rowCls += 'border-amber-900/30 text-amber-300 hover:border-cyan-400 hover:bg-cyan-400/5';
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
      <span className="w-3 text-amber-500">{isSelected && !revealed ? '>' : ' '}</span>
      <span className={`w-4 flex-shrink-0 ${revealed && isCorrect ? 'text-green-400' : 'text-cyan-400'}`}>{label}.</span>
      <span className="flex-1" dangerouslySetInnerHTML={{ __html: parseInline(cleanText) }} />
      {revealed && stats && <span className="flex-shrink-0 text-amber-600">{stats}</span>}
      {revealed && isCorrect && <span className="flex-shrink-0 text-green-400">✓ CORRECT</span>}
      {revealed && isSelected && !isCorrect && <span className="flex-shrink-0 text-red-400">✗ WRONG</span>}
    </div>
  );
};

// Dense terminal table row: IDX | PT-ID | TYPE | CAT | USE | STIMULUS-PREVIEW
// Expands into a detail pane beneath the row.
const TerminalRow: React.FC<{
  q: ParsedQuestion;
  idx: number;
  isExpanded: boolean;
  onToggle: () => void;
  drillCrossReferences: Record<string, DrillReference>;
}> = ({ q, idx, isExpanded, onToggle, drillCrossReferences }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const inUse = Boolean(drillCrossReferences[q.ptId]);

  const handleSelect = (i: number) => {
    if (!revealed) {
      setSelectedIndex(i);
      setRevealed(true);
    }
  };

  const plainStimulus = stripHtml(parseInline(q.stimulus));
  const preview = plainStimulus.length > 120 ? plainStimulus.slice(0, 120) + '…' : plainStimulus;
  const catColor = q.category === 'RC' ? 'text-fuchsia-400' : 'text-cyan-400';
  const catLabel = q.category === 'RC' ? 'R' : 'L';

  return (
    <div className="border-b border-amber-900/30">
      <button
        onClick={onToggle}
        className={`w-full text-left font-mono text-[12px] flex items-stretch hover:bg-amber-400/5 transition-colors ${isExpanded ? 'bg-amber-400/5' : ''}`}
      >
        <span className="w-12 flex-shrink-0 px-2 py-2 text-amber-700 tabular-nums">{String(idx + 1).padStart(4, '0')}</span>
        <span className="w-28 flex-shrink-0 px-2 py-2 text-amber-300 truncate">{q.ptId}</span>
        <span className="w-64 flex-shrink-0 px-2 py-2 text-amber-400 truncate">{q.typeName}</span>
        <span className={`w-8 flex-shrink-0 px-2 py-2 font-bold ${catColor}`}>{catLabel}</span>
        <span className="w-24 flex-shrink-0 px-2 py-2">
          {inUse ? (
            <span className="text-fuchsia-400">[IN-USE]</span>
          ) : (
            <span className="text-green-500">[FREE]</span>
          )}
        </span>
        <span className="flex-1 min-w-0 px-2 py-2 text-amber-600 truncate">{preview || '—'}</span>
        <span className="w-8 flex-shrink-0 px-2 py-2 text-amber-500">{isExpanded ? '▼' : '▶'}</span>
      </button>

      {isExpanded && (
        <div className="border-t border-amber-900/30 bg-[#0a0a0a]">
          {drillCrossReferences[q.ptId] && (
            <div className="px-4 py-2 border-b border-fuchsia-900/40 font-mono text-[11px] flex items-center gap-2">
              <span className="text-fuchsia-400">XREF:</span>
              <Link
                to={`/module/${drillCrossReferences[q.ptId].moduleId}/lesson/${drillCrossReferences[q.ptId].lessonId}`}
                className="text-cyan-400 hover:text-cyan-300 underline-offset-2 hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                MOD-{drillCrossReferences[q.ptId].moduleId} :: {drillCrossReferences[q.ptId].moduleTitle} / {drillCrossReferences[q.ptId].lessonTitle}
              </Link>
            </div>
          )}
          {q.passageTitle && (
            <div className="px-4 py-2 border-b border-amber-900/40 font-mono text-[11px]">
              <span className="text-cyan-400">PASSAGE:</span> <span className="text-amber-300">{q.passageTitle}</span>
            </div>
          )}
          <div className="px-4 py-3 border-b border-amber-900/40">
            <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-1.5">
              {q.category === 'RC' ? '// PASSAGE-EXCERPT' : '// STIMULUS'}
            </div>
            <div
              className="font-mono text-[12px] text-amber-300 leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: parseInline(q.stimulus) }}
            />
          </div>

          {q.question && (
            <div className="px-4 py-3 border-b border-amber-900/40">
              <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-1.5">// QUESTION</div>
              <div
                className="font-mono text-[12px] text-amber-200 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parseInline(q.question) }}
              />
            </div>
          )}

          {q.options.length > 0 && (
            <div className="px-4 py-3 space-y-1">
              <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-1.5">// OPTIONS [CLICK TO SELECT]</div>
              {q.options.map((opt, i) => (
                <TerminalOption
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

// Sidebar dot-leader row. `01 LR-ASSUMPTION ......... 24`
const CommandRow: React.FC<{
  keyNum: string;
  name: string;
  count: number;
  active: boolean;
  accent: 'cyan' | 'fuchsia' | 'amber';
  onClick: () => void;
}> = ({ keyNum, name, count, active, accent, onClick }) => {
  const nameColor = active ? 'text-amber-200' : 'text-amber-400';
  const accentColor =
    accent === 'fuchsia' ? 'text-fuchsia-400' : accent === 'amber' ? 'text-amber-500' : 'text-cyan-400';
  const bg = active ? 'bg-amber-400/10 border-l-2 border-amber-400' : 'border-l-2 border-transparent';

  return (
    <button
      onClick={onClick}
      className={`w-full text-left font-mono text-[11px] px-3 py-1 flex items-baseline gap-2 hover:bg-amber-400/5 transition-colors ${bg}`}
    >
      <span className={`flex-shrink-0 ${accentColor}`}>{keyNum}</span>
      <span className={`truncate ${nameColor}`}>{name}</span>
      <span className="flex-1 overflow-hidden text-amber-900/60 tracking-tighter">
        {'................................................'}
      </span>
      <span className="flex-shrink-0 text-green-500 tabular-nums">{String(count).padStart(3, ' ')}</span>
    </button>
  );
};

interface QuestionBankProps {
  drillCrossReferences: Record<string, DrillReference>;
}

export const QuestionBankBloombergTerminal: React.FC<QuestionBankProps> = ({ drillCrossReferences }) => {
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

  return (
    <div className="flex flex-col h-full min-h-screen bg-black text-amber-400 font-mono">
      {/* TICKER HEADER */}
      <div className="border-b border-amber-400 px-4 py-1.5 bg-black flex items-center gap-3 text-[11px] whitespace-nowrap overflow-x-auto">
        <span className="text-amber-200 font-bold">QBANK</span>
        <span className="text-amber-700">//</span>
        <span className="text-green-500">{ALL_QUESTIONS.length}</span>
        <span className="text-amber-400">RECORDS</span>
        <span className="text-amber-700">//</span>
        <span className="text-amber-400">MODE:</span>
        <span className="text-cyan-400">{activeTab.toUpperCase()}</span>
        <span className="text-amber-700">//</span>
        <span className="text-fuchsia-400">[F1]</span><span className="text-amber-400">HELP</span>
        <span className="text-fuchsia-400">[F2]</span><span className="text-amber-400">EXPORT</span>
        <span className="text-fuchsia-400">[ESC]</span>
        <Link to="/" className="text-amber-400 hover:text-amber-200">HOME</Link>
        <span className="flex-1" />
        <span className="text-amber-700 tabular-nums">{new Date().toISOString().replace('T', ' ').slice(0, 19)}</span>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/80 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* SIDEBAR — COMMAND KEYS */}
        <aside
          className={`fixed lg:sticky top-0 left-0 z-40 lg:z-0 h-full w-80 bg-black border-r border-amber-400/40 flex flex-col transition-transform duration-150 lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="px-3 py-2 border-b border-amber-400/40 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-cyan-400 uppercase tracking-widest">FUNC:</div>
              <div className="text-[12px] text-amber-200 font-bold">COMMAND KEYS</div>
            </div>
            <button
              className="lg:hidden text-amber-400 hover:text-amber-200 text-[11px]"
              onClick={() => setSidebarOpen(false)}
            >
              [X]
            </button>
          </div>

          <div className="px-3 py-1.5 border-b border-amber-900/40 text-[10px] text-amber-700">
            {activeTab === 'real'
              ? `${ALL_QUESTIONS.length} RECS / ${totalTypeCount} TYPES`
              : `${resolvedIllustrativeInventory.length} ILLUS / ${illustrativeTypeCountMap.size} TYPES`}
          </div>

          <nav className="flex-1 overflow-y-auto py-1">
            {activeTab === 'real' ? (
              <>
                <CommandRow
                  keyNum="00"
                  name="ALL-RECORDS"
                  count={ALL_QUESTIONS.length}
                  active={selectedType === null && selectedCategory === null}
                  accent="amber"
                  onClick={() => {
                    setSelectedType(null);
                    setSelectedCategory(null);
                    setSidebarOpen(false);
                  }}
                />

                <div className="px-3 pt-3 pb-1 text-[10px] text-cyan-400 uppercase tracking-widest">// LR-SECTOR</div>
                {sortedLRTypes.map(([name, count], i) => (
                  <CommandRow
                    key={`lr-${name}`}
                    keyNum={String(i + 1).padStart(2, '0')}
                    name={`LR-${name.toUpperCase().replace(/\s+/g, '-')}`}
                    count={count}
                    active={selectedType === name && selectedCategory === 'LR'}
                    accent="cyan"
                    onClick={() => {
                      setSelectedType(name);
                      setSelectedCategory('LR');
                      setSidebarOpen(false);
                    }}
                  />
                ))}

                <div className="px-3 pt-3 pb-1 text-[10px] text-fuchsia-400 uppercase tracking-widest">// RC-SECTOR</div>
                {sortedRCTypes.map(([name, count], i) => (
                  <CommandRow
                    key={`rc-${name}`}
                    keyNum={String(sortedLRTypes.length + i + 1).padStart(2, '0')}
                    name={`RC-${name.toUpperCase().replace(/\s+/g, '-')}`}
                    count={count}
                    active={selectedType === name && selectedCategory === 'RC'}
                    accent="fuchsia"
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
                <CommandRow
                  keyNum="00"
                  name="ALL-ILLUS"
                  count={typedInventory.length}
                  active={selectedType === null}
                  accent="amber"
                  onClick={() => {
                    setSelectedType(null);
                    setSidebarOpen(false);
                  }}
                />
                <div className="px-3 pt-3 pb-1 text-[10px] text-amber-500 uppercase tracking-widest">// ILLUS-TYPES</div>
                {sortedIllustrativeTypes.map(([name, count], i) => (
                  <CommandRow
                    key={`ill-${name}`}
                    keyNum={String(i + 1).padStart(2, '0')}
                    name={name.toUpperCase().replace(/\s+/g, '-')}
                    count={count}
                    active={selectedType === name}
                    accent="amber"
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

          <div className="px-3 py-1.5 border-t border-amber-400/40 text-[10px] flex items-center gap-2">
            <span className="text-cyan-400">STATUS:</span>
            <span className="text-green-500">OK</span>
            <span className="text-amber-700">|</span>
            <span className="text-amber-400">TYPES=</span>
            <span className="text-green-500 tabular-nums">{totalTypeCount}</span>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 min-w-0 flex flex-col">
          {/* CONTROL BAR */}
          <div className="sticky top-0 z-20 bg-black border-b border-amber-400/40">
            <div className="px-4 py-2 flex items-center gap-2">
              {/* Tabs */}
              <div className="flex border border-amber-400/40">
                <button
                  onClick={() => {
                    setActiveTab('real');
                    setSelectedType(null);
                    setSelectedCategory(null);
                  }}
                  className={`px-3 py-1 text-[11px] font-mono border-r border-amber-400/40 transition-colors ${
                    activeTab === 'real'
                      ? 'bg-amber-400 text-black font-bold'
                      : 'bg-black text-amber-400 hover:bg-amber-400/10'
                  }`}
                >
                  [1] REAL <span className="text-green-600">{ALL_QUESTIONS.length}</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab('illustrative');
                    setSelectedType(null);
                    setSelectedCategory(null);
                  }}
                  className={`px-3 py-1 text-[11px] font-mono transition-colors ${
                    activeTab === 'illustrative'
                      ? 'bg-amber-400 text-black font-bold'
                      : 'bg-black text-amber-400 hover:bg-amber-400/10'
                  }`}
                >
                  [2] ILLUS <span className="text-green-600">{typedInventory.length}</span>
                </button>
              </div>

              <button
                className="lg:hidden px-2 py-1 text-[11px] border border-amber-400/40 text-amber-400 hover:bg-amber-400/10"
                onClick={() => setSidebarOpen(true)}
              >
                [F3] NAV
              </button>

              {/* Search */}
              <div className="flex-1 flex items-center border border-amber-400/40 bg-black">
                <span className="px-2 text-amber-500 text-[11px] font-bold">&gt;</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={activeTab === 'real' ? 'CMD: QUERY STIMULUS/PT-ID/TYPE…' : 'CMD: QUERY LESSON/MODULE/CARD…'}
                  className="flex-1 bg-transparent py-1 pr-2 font-mono text-[12px] text-amber-300 placeholder:text-amber-700 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-2 text-amber-500 hover:text-amber-200 text-[11px]"
                  >
                    [X]
                  </button>
                )}
                <span className="px-2 text-amber-700 text-[10px] border-l border-amber-400/40">[F2] SEARCH</span>
              </div>

              {/* Export */}
              <div className="relative">
                <button
                  onClick={() => setExportMenuOpen((open) => !open)}
                  className="px-3 py-1 text-[11px] font-mono border border-amber-400/40 text-amber-400 hover:bg-amber-400/10"
                >
                  [F4] DUMP {exportMenuOpen ? '▲' : '▼'}
                </button>
                {exportMenuOpen && (
                  <div className="absolute right-0 mt-1 w-72 border border-cyan-400/60 bg-black z-30">
                    <div className="px-3 py-1.5 border-b border-cyan-400/40 text-[10px] text-cyan-400 uppercase tracking-widest">
                      // EXPORT COMMANDS
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
                      className="w-full text-left px-3 py-1.5 text-[11px] font-mono text-cyan-400 hover:bg-cyan-400/10"
                    >
                      &gt; DUMP JSON (FULL)
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
                      className="w-full text-left px-3 py-1.5 text-[11px] font-mono text-cyan-400 hover:bg-cyan-400/10"
                    >
                      &gt; DUMP CSV (FULL)
                    </button>
                    <div className="border-t border-amber-900/40" />
                    <button
                      onClick={() =>
                        downloadExport(
                          generateQuestionBankIDsText(exportRows),
                          `question-bank-ids-${activeTab}`,
                          'txt',
                          'text/plain;charset=utf-8',
                        )
                      }
                      className="w-full text-left px-3 py-1.5 text-[11px] font-mono text-cyan-400 hover:bg-cyan-400/10"
                    >
                      &gt; DUMP IDS (TXT)
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
                      className="w-full text-left px-3 py-1.5 text-[11px] font-mono text-cyan-400 hover:bg-cyan-400/10"
                    >
                      &gt; DUMP IDS (CSV)
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
                      className="w-full text-left px-3 py-1.5 text-[11px] font-mono text-fuchsia-400 hover:bg-fuchsia-400/10"
                    >
                      &gt; DUMP MISSING/ILLUS
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Chip row */}
            {activeTab === 'real' && (
              <div className="px-4 py-1.5 border-t border-amber-900/40 flex items-center gap-2 text-[11px]">
                <span className="text-cyan-400">FILT:</span>
                <button
                  onClick={() => setShowInUseOnly(!showInUseOnly)}
                  className={`px-2 py-0.5 border font-mono transition-colors ${
                    showInUseOnly
                      ? 'border-fuchsia-400 text-fuchsia-400 bg-fuchsia-400/10'
                      : 'border-amber-900/60 text-amber-600 hover:border-amber-400 hover:text-amber-400'
                  }`}
                >
                  {showInUseOnly ? '[x]' : '[ ]'} IN-USE ONLY
                </button>
                <button
                  onClick={() => setShowNotInUseOnly(!showNotInUseOnly)}
                  className={`px-2 py-0.5 border font-mono transition-colors ${
                    showNotInUseOnly
                      ? 'border-green-500 text-green-500 bg-green-500/10'
                      : 'border-amber-900/60 text-amber-600 hover:border-amber-400 hover:text-amber-400'
                  }`}
                >
                  {showNotInUseOnly ? '[x]' : '[ ]'} FREE ONLY
                </button>
                {(selectedType || selectedCategory) && (
                  <span className="ml-auto flex items-center gap-1">
                    <span className="text-amber-700">SEL:</span>
                    {selectedCategory && (
                      <span className={selectedCategory === 'RC' ? 'text-fuchsia-400' : 'text-cyan-400'}>
                        {selectedCategory}
                      </span>
                    )}
                    {selectedType && <span className="text-amber-300">/{selectedType}</span>}
                    <button
                      onClick={() => {
                        setSelectedType(null);
                        setSelectedCategory(null);
                      }}
                      className="text-amber-500 hover:text-amber-200 ml-1"
                    >
                      [X]
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Count line */}
            <div className="px-4 py-1 border-t border-amber-900/40 text-[10px] flex items-center gap-2">
              <span className="text-cyan-400">CNT:</span>
              {activeTab === 'real' ? (
                <span className="text-amber-400">
                  <span className="text-green-500 tabular-nums">{filteredQuestions.length}</span>
                  <span className="text-amber-700"> / </span>
                  <span className="text-amber-400 tabular-nums">{ALL_QUESTIONS.length}</span>
                  <span className="text-amber-700"> REC</span>
                </span>
              ) : (
                <span className="text-amber-400">
                  <span className="text-green-500 tabular-nums">{filteredIllustrative.length}</span>
                  <span className="text-amber-700"> / </span>
                  <span className="text-amber-400 tabular-nums">{typedInventory.length}</span>
                  <span className="text-amber-700"> ILLUS</span>
                </span>
              )}
            </div>

            {/* Column header */}
            {activeTab === 'real' && (
              <div className="px-0 border-t border-amber-400/40 bg-amber-400/5 flex items-stretch font-mono text-[10px] text-cyan-400 uppercase tracking-widest">
                <span className="w-12 px-2 py-1">IDX</span>
                <span className="w-28 px-2 py-1">PT-ID</span>
                <span className="w-64 px-2 py-1">TYPE</span>
                <span className="w-8 px-2 py-1">CAT</span>
                <span className="w-24 px-2 py-1">USE</span>
                <span className="flex-1 px-2 py-1">STIMULUS-PREVIEW</span>
                <span className="w-8 px-2 py-1" />
              </div>
            )}
          </div>

          {/* ROWS */}
          <div className="flex-1 overflow-y-auto pb-16">
            {activeTab === 'real' ? (
              filteredQuestions.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <p className="font-mono text-[14px] text-amber-400 tracking-widest">NO RECORDS. REFINE QUERY.</p>
                  <p className="font-mono text-[11px] text-amber-700 mt-2">// ADJUST [F2] SEARCH OR FILT CHIPS</p>
                </div>
              ) : (
                filteredQuestions.map((q, i) => (
                  <TerminalRow
                    key={q.id}
                    q={q}
                    idx={i}
                    isExpanded={expandedId === q.id}
                    onToggle={() => handleToggle(q.id)}
                    drillCrossReferences={drillCrossReferences}
                  />
                ))
              )
            ) : filteredIllustrative.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-mono text-[14px] text-amber-400 tracking-widest">NO RECORDS. REFINE QUERY.</p>
                <p className="font-mono text-[11px] text-amber-700 mt-2">// NO ILLUS MATCH</p>
              </div>
            ) : (
              filteredIllustrative.map((item) => (
                <div
                  key={`${item.file}-${item.cardId}`}
                  className="border-b border-amber-900/30 px-4 py-2 font-mono text-[12px] hover:bg-amber-400/5"
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-cyan-400">CARD:</span>
                    <span className="text-amber-300">{item.cardId}</span>
                    <span className="text-amber-700">|</span>
                    <span className="text-cyan-400">TYPE:</span>
                    <span className="text-amber-400">{item.questionType}</span>
                    {item.difficulty !== 'unset' && (
                      <>
                        <span className="text-amber-700">|</span>
                        <span className="text-cyan-400">DIFF:</span>
                        <span className="text-amber-400">{item.difficulty}</span>
                      </>
                    )}
                    <span className="text-fuchsia-400 ml-auto">[AI-ILLUS]</span>
                  </div>
                  <div className="mt-1 text-amber-300">{item.resolvedLessonTitle}</div>
                  <div className="text-amber-700 text-[11px]">
                    MOD-{item.routeModuleId} :: {item.resolvedModuleTitle}
                  </div>
                  <Link
                    to={`/module/${item.routeModuleId}/lesson/${item.lessonId}`}
                    className="inline-block mt-1 text-[11px] text-cyan-400 hover:text-cyan-300"
                  >
                    &gt; OPEN LESSON
                  </Link>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
