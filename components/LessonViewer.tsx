
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { ContentBlock, Lesson, LessonLinkageMeta } from '../types';
import { Lightbulb, Info, CheckCircle2, XCircle, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { ExportControls } from './ExportControls';
import { generateLessonText, generateLessonRTF, generateLessonJSON, generateLessonCSV, generateLessonPDF } from '../utils/export';
import { QuestionCard } from './cards/QuestionCard';
import { PassageCard } from './cards/PassageCard';
import { QuestionPassageCard } from './cards/QuestionPassageCard';

interface LessonViewerProps {
  title: string;
  content: string | ContentBlock[];
  variant?: 'default' | 'modal';
  questionStatus?: 'real' | 'illustrative' | 'both' | null;
  linkageMeta?: LessonLinkageMeta;
}

const sanitize = (html: string) => DOMPurify.sanitize(html);

const parseInlineStyles = (text: string) => {
  if (!text) return "";
  let formatted = text;
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
  formatted = formatted.replace(/\*(.*?)\*\*/g, '<em class="text-slate-800">$1</em>');
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-violet-600 font-mono text-[0.875em] px-1.5 py-0.5 rounded-md">$1</code>');
  return sanitize(formatted);
};

const CodeBlock: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code block', err);
    }
  };

  return (
    <div className="relative group my-6 overflow-hidden rounded-lg border border-slate-800 bg-[#0f1117]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-[#161922]">
        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Prompt</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 text-slate-400 hover:text-white rounded text-xs font-medium transition-colors"
        >
          {copied ? <><Check size={13} className="text-emerald-400" /><span className="text-emerald-400">Copied</span></> : <><Copy size={13} /><span>Copy</span></>}
        </button>
      </div>
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-[13px] text-slate-300 whitespace-pre leading-relaxed">{text}</pre>
      </div>
    </div>
  );
};

const OptionsBlock: React.FC<{ items: string[] }> = ({ items }) => {
  const [revealed, setRevealed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (!revealed) {
      setSelectedIndex(index);
      setRevealed(true);
    }
  };

  return (
    <div className="my-6 space-y-2">
      {items.map((item, i) => {
        const isCorrect = item.includes('(Correct)');
        const statsMatch = item.match(/\[(\d+(\.\d+)?%)\]/);
        const stats = statsMatch ? statsMatch[1] : null;
        const cleanText = item.replace(/\[\d+(\.\d+)?%\]/g, '').replace('(Correct)', '').trim();
        const isSelected = selectedIndex === i;
        
        let cls = "flex items-start gap-3 p-3.5 rounded-lg border transition-all duration-150 ";
        if (revealed) {
          if (isCorrect) cls += "border-emerald-300 bg-emerald-50";
          else if (isSelected) cls += "border-red-200 bg-red-50/50";
          else cls += "border-transparent bg-slate-50/50 opacity-40";
        } else {
          cls += "border-slate-200 hover:border-slate-300 hover:bg-slate-50 cursor-pointer active:scale-[0.995]";
        }

        return (
          <div key={i} className={cls} onClick={() => handleSelect(i)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelect(i); }}>
            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold border transition-colors ${
              revealed && isCorrect ? 'bg-emerald-500 border-emerald-500 text-white' :
              revealed && isSelected && !isCorrect ? 'bg-red-400 border-red-400 text-white' :
              'bg-white border-slate-300 text-slate-500'
            }`}>
              {revealed && isCorrect ? <CheckCircle2 size={13} /> : revealed && isSelected ? <XCircle size={13} /> : String.fromCharCode(65 + i)}
            </div>
            <div className="flex-1 flex justify-between items-start gap-3">
              <span className={`text-[15px] leading-relaxed ${revealed && isCorrect ? 'text-emerald-900 font-medium' : revealed && isSelected ? 'text-red-800' : 'text-slate-600'}`} dangerouslySetInnerHTML={{ __html: parseInlineStyles(cleanText) }} />
              {revealed && stats && <span className="text-[11px] font-mono text-slate-400 flex-shrink-0 pt-0.5">{stats}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};


export const LessonViewer: React.FC<LessonViewerProps> = ({
    title,
    content,
    variant = 'default',
    questionStatus,
    linkageMeta,
}) => {
  const currentLesson: Lesson = { id: 'current', title, content };

  const containerClasses = variant === 'modal'
    ? "bg-white p-6 md:p-8 rounded-xl"
    : "max-w-3xl mx-auto bg-white p-8 lg:px-14 lg:py-12 rounded-2xl border border-slate-200/60 min-h-[calc(100vh-4rem)]";

  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      if (line.startsWith('#### ')) return <h4 key={index} className="text-sm font-semibold mt-8 mb-3 text-slate-500 uppercase tracking-wider" dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('#### ', '')) }} />;
      if (line.startsWith('### ')) return <h3 key={index} className="text-lg font-semibold mt-10 mb-3 text-slate-900 tracking-tight" dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('### ', '')) }} />;
      if (line.startsWith('## ')) return <h2 key={index} className="text-xl font-semibold mt-14 mb-4 text-slate-900 tracking-tight" dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('## ', '')) }} />;
      if (line.startsWith('# ')) return <h1 key={index} className="text-2xl font-bold mt-6 mb-6 text-slate-900 tracking-tight" dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('# ', '')) }} />;
      if (line.startsWith('---')) return <div key={index} className="my-10 border-t border-slate-100" />;
      if (line.startsWith('> ')) return <div key={index} className="my-5 px-5 py-4 bg-slate-50 rounded-lg border border-slate-200/80 text-[15px] text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('> ', '')) }} />;
      if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
        const itemContent = trimmedLine.replace(/^[*-]\s/, '');
        return <li key={index} className="ml-5 list-disc mb-1.5 pl-1 marker:text-slate-300 text-[15px] text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInlineStyles(itemContent) }} />;
      }
      if (line.startsWith('```')) return null;
      if (trimmedLine === '') return <div key={index} className="h-3"></div>;
      return <p key={index} className="mb-4 leading-[1.75] text-[15px] text-slate-600" dangerouslySetInnerHTML={{ __html: parseInlineStyles(line) }} />;
    });
  };

  const FullAccordionBlock: React.FC<{ title: string; content: string | ContentBlock[] }> = ({ title: accTitle, content: accContent }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="my-5 border border-slate-200 rounded-lg overflow-hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors text-left">
          <span className="font-medium text-sm text-slate-700">{accTitle}</span>
          {isOpen ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
        </button>
        {isOpen && (
          <div className="px-5 py-4 bg-white border-t border-slate-100">
            {typeof accContent === 'string' ? renderMarkdown(accContent) : renderBlocks(accContent)}
          </div>
        )}
      </div>
    );
  };

  const renderBlocks = (blocks: ContentBlock[]) => {
    return blocks.map((block, index) => {
      switch (block.type) {
        case 'h1': return <h1 key={index} className="text-2xl font-bold mt-6 mb-6 text-slate-900 tracking-tight" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'h2': return <h2 key={index} className="text-xl font-semibold mt-14 mb-4 text-slate-900 tracking-tight" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'h3': return <h3 key={index} className="text-lg font-semibold mt-10 mb-3 text-slate-900 tracking-tight" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'h4': return <h4 key={index} className="text-sm font-semibold mt-8 mb-3 text-slate-500 uppercase tracking-wider" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'paragraph': return <p key={index} className="mb-4 leading-[1.75] text-[15px] text-slate-600" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'blockquote': return <div key={index} className="my-5 px-5 py-4 bg-slate-50 rounded-lg border border-slate-200/80 text-[15px] text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'list': {
          const ListTag = block.ordered ? 'ol' : 'ul';
          return (
            <ListTag key={index} className={`mb-5 ml-5 pl-1 marker:text-slate-300 text-[15px] text-slate-600 space-y-1.5 ${block.ordered ? 'list-decimal' : 'list-disc'}`}>
              {block.items?.map((item, i) => <li key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInlineStyles(item) }} />)}
            </ListTag>
          );
        }
        case 'hr': return <div key={index} className="my-10 border-t border-slate-100" />;
        case 'code': return <CodeBlock key={index} text={block.text} />;
        case 'accordion': return <FullAccordionBlock key={index} title={block.title} content={block.content} />;
        case 'table':
          return (
            <div key={index} className="my-6 overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-[13px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    {block.headers.map((h, i) => (
                      <th key={i} className="px-4 py-2.5 font-semibold text-slate-500 uppercase tracking-wider text-[11px]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  {block.rows.map((row, r) => (
                    <tr key={r} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                      {row.map((cell, c) => (
                        <td key={c} className="px-4 py-2.5 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInlineStyles(cell) }} />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        case 'callout': {
          const isSummary = block.variant === 'summary';
          const isTip = block.variant === 'tip';
          const accentColor = isSummary ? 'border-l-indigo-400' : isTip ? 'border-l-amber-400' : 'border-l-slate-300';
          const bgColor = isSummary ? 'bg-indigo-50/50' : isTip ? 'bg-amber-50/50' : 'bg-slate-50/50';
          const iconColor = isSummary ? 'text-indigo-500' : isTip ? 'text-amber-500' : 'text-slate-400';
          const titleColor = isSummary ? 'text-indigo-900' : isTip ? 'text-amber-900' : 'text-slate-800';
          const Icon = isSummary ? Lightbulb : isTip ? Lightbulb : Info;
          return (
            <div key={index} className={`my-6 pl-4 pr-5 py-4 rounded-lg border border-slate-200/60 border-l-[3px] ${accentColor} ${bgColor}`}>
              {block.title && (
                <div className="flex items-center gap-2 mb-2">
                   <Icon size={15} className={iconColor} />
                   <span className={`font-semibold text-sm ${titleColor}`}>{block.title}</span>
                </div>
              )}
              <div className="text-[14px] text-slate-600 leading-relaxed space-y-1.5">
                 {block.text.split('\n').map((line, i) => <p key={i} dangerouslySetInnerHTML={{ __html: parseInlineStyles(line) }} />)}
              </div>
            </div>
          );
        }
        case 'options':
          return <OptionsBlock key={index} items={block.items} />;
        case 'process':
          return (
            <div key={index} className="my-8 p-5 rounded-lg border border-slate-200 bg-white">
               {block.title && <div className="font-semibold text-[11px] text-slate-400 uppercase tracking-wider mb-5 pb-2 border-b border-slate-100">{block.title}</div>}
               <div className="relative">
                 <div className="absolute left-[11px] top-3 bottom-3 w-px bg-slate-200" aria-hidden="true"></div>
                 <div className="space-y-5">
                   {block.steps.map((step, i) => (
                     <div key={i} className="relative flex items-start group">
                        <div className="relative z-10 flex-shrink-0 w-[22px] h-[22px] flex items-center justify-center rounded-full bg-slate-900 text-white font-semibold text-[10px] ring-2 ring-white">{i + 1}</div>
                        <div className="ml-4 flex-1 pt-0.5">
                           <div className="text-[15px] text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors" dangerouslySetInnerHTML={{ __html: parseInlineStyles(step) }} />
                        </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          );
        case 'breakdown': {
          const labelTitle = block.labels?.title || "Text";
          const labelText = block.labels?.text || "Analysis";
          const colLeft = block.colWidth === 'narrow' ? 'md:w-1/4' : 'md:w-2/5';
          const colRight = block.colWidth === 'narrow' ? 'md:w-3/4' : 'md:w-3/5';
          
          return (
            <div key={index} className="my-6 space-y-3">
              {block.items.map((item, i) => {
                let badgeStyles = "bg-slate-100 text-slate-500";
                let borderStyles = "border-slate-200 hover:border-slate-300";
                if (item.badgeColor === 'green') { badgeStyles = "bg-emerald-50 text-emerald-700"; borderStyles = "border-emerald-200/60 bg-emerald-50/20"; }
                else if (item.badgeColor === 'red') { badgeStyles = "bg-red-50 text-red-600"; borderStyles = "border-red-200/60 bg-red-50/20"; }
                else if (item.badgeColor === 'indigo') { badgeStyles = "bg-indigo-50 text-indigo-600"; borderStyles = "border-indigo-200/60 bg-indigo-50/20"; }
                else if (item.badgeColor === 'blue') { badgeStyles = "bg-blue-50 text-blue-600"; borderStyles = "border-blue-200/60 bg-blue-50/20"; }
                return (
                  <div key={i} className={`flex flex-col md:flex-row gap-3 md:gap-6 p-4 rounded-lg border transition-all ${borderStyles}`}>
                     <div className={`${colLeft} flex flex-col items-start`}>
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">{labelTitle}</div>
                        <div className="text-slate-900 font-medium text-[15px] leading-snug mb-1.5" dangerouslySetInnerHTML={{ __html: parseInlineStyles(item.title) }} />
                        {item.badge && (
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${badgeStyles}`}>
                            {item.badgeColor === 'green' && <CheckCircle2 size={10} />}
                            {item.badgeColor === 'red' && <XCircle size={10} />}
                            {item.badge}
                          </span>
                        )}
                     </div>
                     <div className="hidden md:block w-px bg-slate-200/60 self-stretch"></div>
                     <div className={colRight}>
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">{labelText}</div>
                        <div className="text-[14px] text-slate-500 leading-relaxed space-y-1.5">
                           {item.text.split('\n').map((line, li) => <p key={li} dangerouslySetInnerHTML={{ __html: parseInlineStyles(line) }} />)}
                        </div>
                     </div>
                  </div>
                );
              })}
            </div>
          );
        }
        case 'question-card':
          return <QuestionCard key={index} id={block.id} questionType={block.questionType} stimulus={block.stimulus} question={block.question} options={block.options} difficulty={block.difficulty} />;
        case 'passage-card':
          return <PassageCard key={index} id={block.id} title={block.title} genre={block.genre} passage={block.passage} paragraphCount={block.paragraphCount} wordCount={block.wordCount} />;
        case 'question-passage-card':
          return <QuestionPassageCard key={index} id={block.id} questionType={block.questionType} passageTitle={block.passageTitle} passage={block.passage} question={block.question} options={block.options} difficulty={block.difficulty} />;
        default: return null;
      }
    });
  };

  return (
    <div className={containerClasses}>
      <div className="mb-8 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
           <span className="text-[11px] font-semibold text-indigo-500 uppercase tracking-wider mb-2 block font-mono">Current Lesson</span>
           {questionStatus && (
             <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 inline-block ${
               questionStatus === 'real' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' :
               questionStatus === 'illustrative' ? 'bg-amber-50 text-amber-600 border border-amber-200' :
               'bg-blue-50 text-blue-600 border border-blue-200'
             }`}>
               {questionStatus === 'real' ? 'Real PrepTest Questions' : 
                questionStatus === 'illustrative' ? 'Illustrative Questions' : 
                'Real + Illustrative Questions'}
             </span>
           )}
            <h1 className={variant === 'modal'
              ? "text-xl font-semibold text-slate-900 tracking-tight mb-3 pb-3 border-b border-slate-100"
              : "text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mb-4 pb-4 border-b border-slate-100"
            }>{title}</h1>
            {linkageMeta?.status !== 'ok' && !linkageMeta?.isExempt && (
              <div className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {linkageMeta?.status === 'missing_q_number'
                  ? 'No associated question number. Add a PT-style ID to the question-card block.'
                  : 'No attached question card (Lesson 4+ requirement). Add at least one question-card block.'}
              </div>
            )}
            {linkageMeta?.ptIds.length ? (
              <div className="flex flex-wrap gap-2">
                {linkageMeta.ptIds.map((ptId) => (
                  <Link
                    key={ptId}
                    to={`/question-bank?pt=${encodeURIComponent(ptId)}`}
                    className="inline-flex items-center rounded-md border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-100"
                  >
                    View in Question Log: {ptId}
                  </Link>
                ))}
              </div>
            ) : null}
         </div>
        <div className="flex-shrink-0">
          <ExportControls 
             label="Lesson"
             filename={`LSAT_Lesson_${title.replace(/\s+/g, '_')}`}
             onCopy={() => generateLessonText(currentLesson)}
             onExportText={() => generateLessonText(currentLesson)}
             onExportRTF={() => generateLessonRTF(currentLesson)}
             onExportJSON={() => generateLessonJSON(currentLesson)}
             onExportCSV={() => generateLessonCSV(currentLesson)}
             onExportPDF={() => generateLessonPDF(currentLesson)}
          />
        </div>
      </div>
      <div className="max-w-none">
        {typeof content === 'string' ? renderMarkdown(content) : renderBlocks(content)}
      </div>
    </div>
  );
};
