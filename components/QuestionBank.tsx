import React, { useState, useMemo } from 'react';
import DOMPurify from 'dompurify';
import { Search, Filter, ChevronDown, ChevronUp, BookOpen, Hash, X } from 'lucide-react';
import { ContentBlock } from '../types';

import { Lesson1_Module1_Questions } from '../modules/module48/Lesson1_Module1_Questions';
import { Lesson2_Module2_Questions } from '../modules/module48/Lesson2_Module2_Questions';
import { Lesson3_Module3_Questions } from '../modules/module48/Lesson3_Module3_Questions';
import { Lesson4_Module4_Questions } from '../modules/module48/Lesson4_Module4_Questions';
import { Lesson5_Module5_Questions } from '../modules/module48/Lesson5_Module5_Questions';
import { Lesson6_Module6_Questions } from '../modules/module48/Lesson6_Module6_Questions';
import { Lesson7_Module7_Questions } from '../modules/module48/Lesson7_Module7_Questions';
import { Lesson8_Module8_Questions } from '../modules/module48/Lesson8_Module8_Questions';
import { Lesson9_Module9_Questions } from '../modules/module48/Lesson9_Module9_Questions';
import { Lesson10_Module10_Questions } from '../modules/module48/Lesson10_Module10_Questions';
import { Lesson11_Module11_Questions } from '../modules/module48/Lesson11_Module11_Questions';
import { Lesson12_Module12_Questions } from '../modules/module48/Lesson12_Module12_Questions';
import { Lesson13_Module13_Questions } from '../modules/module48/Lesson13_Module13_Questions';
import { Lesson14_Module14_Questions } from '../modules/module48/Lesson14_Module14_Questions';
import { Lesson15_Module15_Questions } from '../modules/module48/Lesson15_Module15_Questions';
import { Lesson16_Module16_Questions } from '../modules/module48/Lesson16_Module16_Questions';
import { Lesson17_Module17_Questions } from '../modules/module48/Lesson17_Module17_Questions';
import { Lesson18_Module18_Questions } from '../modules/module48/Lesson18_Module18_Questions';
import { Lesson19_Module19_Questions } from '../modules/module48/Lesson19_Module19_Questions';
import { Lesson20_Module20_Questions } from '../modules/module48/Lesson20_Module20_Questions';
import { Lesson21_Module55_Questions } from '../modules/module48/Lesson21_Module55_Questions';
import { Lesson22_Module59_Questions } from '../modules/module48/Lesson22_Module59_Questions';
import { Lesson1_QuestionRepository } from '../modules/module49/Lesson1_QuestionRepository';
import { Lesson1_AdvancedRCQuestionRepository } from '../modules/module53/Lesson1_AdvancedRCQuestionRepository';

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

const RC_LESSONS = [
  Lesson1_QuestionRepository,
  Lesson1_AdvancedRCQuestionRepository,
];

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
        const passageSnippet = currentPassageText.length > 300
          ? currentPassageText.slice(0, 300) + '…'
          : currentPassageText;

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

  let cls = 'flex items-start gap-3 p-3 rounded-lg border transition-all duration-150 ';
  if (revealed) {
    if (isCorrect) cls += 'border-emerald-300 bg-emerald-50 ring-1 ring-emerald-300';
    else if (isSelected) cls += 'border-red-200 bg-red-50/50';
    else cls += 'border-transparent bg-slate-50/30 opacity-40';
  } else {
    cls += 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer active:scale-[0.995]';
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
        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold border transition-colors ${
          revealed && isCorrect
            ? 'bg-emerald-500 border-emerald-500 text-white'
            : revealed && isSelected && !isCorrect
              ? 'bg-red-400 border-red-400 text-white'
              : 'bg-white border-slate-300 text-slate-500'
        }`}
      >
        {String.fromCharCode(65 + index)}
      </div>
      <div className="flex-1 flex justify-between items-start gap-3">
        <span
          className={`text-[14px] leading-relaxed ${revealed && isCorrect ? 'text-emerald-900 font-medium' : revealed && isSelected ? 'text-red-800' : 'text-slate-600'}`}
          dangerouslySetInnerHTML={{ __html: parseInline(cleanText) }}
        />
        {revealed && stats && (
          <span className="text-[11px] font-mono text-slate-400 flex-shrink-0 pt-0.5">{stats}</span>
        )}
      </div>
    </div>
  );
};

const QuestionCardItem: React.FC<{
  q: ParsedQuestion;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ q, isExpanded, onToggle }) => {
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

  return (
    <div className="group rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all duration-200 shadow-sm hover:shadow-md overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex items-start gap-4"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-bold font-mono tracking-tight">
              <Hash size={10} />
              {q.ptId}
            </span>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold ${
              q.category === 'RC'
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-slate-100 text-slate-600'
            }`}>
              <BookOpen size={10} />
              {q.typeName}
            </span>
            {q.category === 'RC' && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[11px] font-semibold">
                RC
              </span>
            )}
          </div>
          {!isExpanded && (
            <p className="text-[14px] text-slate-500 leading-relaxed line-clamp-2">
              {truncated}
            </p>
          )}
        </div>
        <div className="flex-shrink-0 mt-1 text-slate-400 group-hover:text-slate-600 transition-colors">
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-slate-100">
          {q.passageTitle && (
            <div className="px-5 py-2.5 bg-amber-50/50 border-b border-amber-100">
              <span className="text-[11px] font-semibold text-amber-700">
                Passage: {q.passageTitle}
              </span>
            </div>
          )}
          <div className="px-5 py-4 bg-slate-50/50 border-b border-slate-100">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
              {q.category === 'RC' ? 'Passage Excerpt' : 'Stimulus'}
            </div>
            <div
              className="text-[15px] text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: parseInline(q.stimulus) }}
            />
          </div>

          {q.question && (
            <div className="px-5 py-3 border-b border-slate-100">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                Question
              </div>
              <div
                className="text-[15px] text-slate-900 font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parseInline(q.question) }}
              />
            </div>
          )}

          {q.options.length > 0 && (
            <div className="px-5 py-4 space-y-2">
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

export const QuestionBank: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'LR' | 'RC' | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
  }, [selectedType, selectedCategory, searchQuery]);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex h-full min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 lg:z-0 h-full w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 border-b border-slate-100">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Question Types
            </h2>
            <button
              className="lg:hidden p-1 rounded text-slate-400 hover:text-slate-600"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-[12px] text-slate-400">
            {ALL_QUESTIONS.length} questions across {totalTypeCount} types
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto py-2 scrollbar-hide">
          <button
            onClick={() => {
              setSelectedType(null);
              setSelectedCategory(null);
              setSidebarOpen(false);
            }}
            className={`w-full text-left px-5 py-2.5 text-[13px] flex items-center justify-between transition-colors ${
              selectedType === null && selectedCategory === null
                ? 'bg-indigo-50 text-indigo-700 font-semibold border-r-2 border-indigo-500'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <span>All Questions</span>
            <span
              className={`text-[11px] font-mono ${selectedType === null && selectedCategory === null ? 'text-indigo-500' : 'text-slate-400'}`}
            >
              {ALL_QUESTIONS.length}
            </span>
          </button>

          <div className="px-5 pt-4 pb-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">LR Questions</span>
          </div>
          {sortedLRTypes.map(([name, count]) => (
            <button
              key={`lr-${name}`}
              onClick={() => {
                setSelectedType(name);
                setSelectedCategory('LR');
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-5 py-2.5 text-[13px] flex items-center justify-between transition-colors ${
                selectedType === name && selectedCategory === 'LR'
                  ? 'bg-indigo-50 text-indigo-700 font-semibold border-r-2 border-indigo-500'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="truncate pr-2">{name}</span>
              <span
                className={`text-[11px] font-mono flex-shrink-0 ${selectedType === name && selectedCategory === 'LR' ? 'text-indigo-500' : 'text-slate-400'}`}
              >
                {count}
              </span>
            </button>
          ))}

          <div className="px-5 pt-4 pb-1">
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">RC Questions</span>
          </div>
          {sortedRCTypes.map(([name, count]) => (
            <button
              key={`rc-${name}`}
              onClick={() => {
                setSelectedType(name);
                setSelectedCategory('RC');
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-5 py-2.5 text-[13px] flex items-center justify-between transition-colors ${
                selectedType === name && selectedCategory === 'RC'
                  ? 'bg-emerald-50 text-emerald-700 font-semibold border-r-2 border-emerald-500'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="truncate pr-2">{name}</span>
              <span
                className={`text-[11px] font-mono flex-shrink-0 ${selectedType === name && selectedCategory === 'RC' ? 'text-emerald-500' : 'text-slate-400'}`}
              >
                {count}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        {/* Top bar */}
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
            <button
              className="lg:hidden flex-shrink-0 p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Filter size={18} />
            </button>

            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stimuli, questions, PT IDs…"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Question Bank</h1>
          <p className="mt-1 text-[14px] text-slate-500">
            {filteredQuestions.length === ALL_QUESTIONS.length
              ? `${ALL_QUESTIONS.length} practice questions`
              : `${filteredQuestions.length} of ${ALL_QUESTIONS.length} questions`}
            {(selectedType || selectedCategory) && (
              <span className="ml-2 inline-flex items-center gap-1">
                <span className="text-slate-300">·</span>
                {selectedCategory && (
                  <span className={`font-medium ${selectedCategory === 'RC' ? 'text-emerald-600' : 'text-indigo-600'}`}>
                    {selectedCategory}
                  </span>
                )}
                {selectedType && (
                  <span className={`font-medium ${selectedCategory === 'RC' ? 'text-emerald-600' : 'text-indigo-600'}`}>
                    {selectedCategory ? ' · ' : ''}{selectedType}
                  </span>
                )}
                <button
                  onClick={() => { setSelectedType(null); setSelectedCategory(null); }}
                  className="ml-1 text-slate-400 hover:text-slate-600"
                >
                  <X size={12} />
                </button>
              </span>
            )}
          </p>
        </div>

        {/* Question cards */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 space-y-3">
          {filteredQuestions.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <Search size={40} className="text-slate-300 mb-4" />
              <p className="text-slate-500 text-[15px] font-medium">No questions found</p>
              <p className="text-slate-400 text-[13px] mt-1">
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
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
};
