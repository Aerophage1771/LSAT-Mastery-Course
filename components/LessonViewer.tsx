
import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { ContentBlock, Lesson } from '../types';
import { Lightbulb, Info, CheckCircle2, XCircle, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { ExportControls } from './ExportControls';
import { generateLessonText, generateLessonRTF, generateLessonJSON, generateLessonCSV, generateLessonPDF } from '../utils/export';

interface LessonViewerProps {
  title: string;
  content: string | ContentBlock[];
  variant?: 'default' | 'modal';
}

const sanitize = (html: string) => DOMPurify.sanitize(html);

const parseInlineStyles = (text: string) => {
  if (!text) return "";
  let formatted = text;
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
  formatted = formatted.replace(/\*(.*?)\*\*/g, '<em class="italic text-slate-800">$1</em>');
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-pink-600 font-mono px-1 py-0.5 rounded text-sm border border-slate-200">$1</code>');
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
    <div className="relative group my-6 overflow-hidden rounded-xl border border-slate-700 shadow-xl bg-slate-900">
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-md text-xs font-bold border border-slate-600 transition-all shadow-lg"
        >
          {copied ? (
            <>
              <Check size={14} className="text-emerald-400" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy Prompt</span>
            </>
          )}
        </button>
      </div>
      <div className="overflow-x-auto p-5 md:p-6">
        <pre className="font-mono text-sm text-slate-200 whitespace-pre leading-relaxed">
          {text}
        </pre>
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
    <div className="my-6 space-y-3">
      {items.map((item, i) => {
        // Extract metadata if present
        const isCorrect = item.includes('(Correct)');
        const statsMatch = item.match(/\[(\d+(\.\d+)?%)\]/);
        const stats = statsMatch ? statsMatch[1] : null;
        
        // Clean text for display
        const cleanText = item
          .replace(/\[\d+(\.\d+)?%\]/g, '')
          .replace('(Correct)', '')
          .trim();

        const isSelected = selectedIndex === i;
        
        // Determine styles based on state
        let containerClasses = "flex-1 p-4 border rounded-lg shadow-sm transition-all relative overflow-hidden ";
        let textClasses = "block ";
        
        if (revealed) {
            if (isCorrect) {
                containerClasses += "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500";
                textClasses += "text-emerald-900 font-medium";
            } else if (isSelected) {
                containerClasses += "border-red-300 bg-red-50";
                textClasses += "text-red-900";
            } else {
                containerClasses += "border-slate-200 bg-slate-50 opacity-60";
                textClasses += "text-slate-500";
            }
        } else {
            containerClasses += "bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md cursor-pointer active:scale-[0.99]";
            textClasses += "text-slate-700";
        }

        return (
          <div key={i} className="flex group" onClick={() => handleSelect(i)}>
            <div className={containerClasses}>
                <div className="flex justify-between items-start gap-4">
                    <span className={textClasses} dangerouslySetInnerHTML={{ __html: parseInlineStyles(cleanText) }} />
                    
                    {/* Stats / Icon display only when revealed */}
                    {revealed && (
                        <div className="flex flex-col items-end flex-shrink-0 min-w-[3rem] animate-in fade-in zoom-in duration-200">
                            {isCorrect && <CheckCircle2 size={20} className="text-emerald-600 mb-1" />}
                            {isSelected && !isCorrect && <XCircle size={20} className="text-red-500 mb-1" />}
                            {stats && <span className="text-xs font-bold text-slate-500 bg-white/50 px-1.5 py-0.5 rounded">{stats}</span>}
                        </div>
                    )}
                </div>
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
}) => {
  const currentLesson: Lesson = {
    id: 'current',
    title,
    content
  };

  const containerClasses = variant === 'modal'
    ? "bg-white p-6 md:p-8 rounded-xl shadow-none"
    : "max-w-4xl mx-auto bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-slate-100 min-h-[calc(100vh-4rem)]";

  const titleClasses = variant === 'modal'
    ? "text-2xl font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100"
    : "text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 pb-6 border-b border-slate-100";

  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      if (line.startsWith('#### ')) {
        return <h4 key={index} className="text-lg font-bold mt-8 mb-3 text-slate-800 uppercase tracking-wide" dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('#### ', '')) }} />;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold mt-8 mb-4 text-slate-800 tracking-tight" dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('### ', '')) }} />;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-12 mb-6 text-slate-900 border-l-4 border-indigo-500 pl-4 py-1 bg-slate-50 rounded-r-lg" dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('## ', '')) }} />;
      }
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-extrabold mt-6 mb-8 text-indigo-900" dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('# ', '')) }} />;
      }
      if (line.startsWith('---')) return <hr key={index} className="my-10 border-slate-200" />;
      if (line.startsWith('> ')) {
        return <blockquote key={index} className="border-l-4 border-indigo-300 pl-6 py-3 my-6 bg-indigo-50/50 text-slate-700 italic rounded-r-lg shadow-sm" dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('> ', '')) }} />;
      }
      if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
        const itemContent = trimmedLine.replace(/^[\*\-]\s/, '');
        return <li key={index} className="ml-6 list-disc mb-2 pl-2 marker:text-indigo-500 text-slate-700" dangerouslySetInnerHTML={{ __html: parseInlineStyles(itemContent) }} />;
      }
      if (line.startsWith('```')) return null;
      if (trimmedLine === '') return <div key={index} className="h-4"></div>;
      return <p key={index} className="mb-4 leading-relaxed text-slate-700 text-lg" dangerouslySetInnerHTML={{ __html: parseInlineStyles(line) }} />;
    });
  };

  const FullAccordionBlock: React.FC<{ title: string; content: string | ContentBlock[] }> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="my-6 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left">
          <span className="font-bold text-slate-800">{title}</span>
          {isOpen ? <ChevronUp size={20} className="text-slate-500" /> : <ChevronDown size={20} className="text-slate-500" />}
        </button>
        {isOpen && (
          <div className="p-6 bg-white border-t border-slate-200">
            <div className="prose prose-slate prose-lg max-w-none">
              {typeof content === 'string' ? renderMarkdown(content) : renderBlocks(content)}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderBlocks = (blocks: ContentBlock[]) => {
    return blocks.map((block, index) => {
      switch (block.type) {
        case 'h1': return <h1 key={index} className="text-3xl font-extrabold mt-6 mb-8 text-indigo-900" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'h2': return <h2 key={index} className="text-2xl font-bold mt-12 mb-6 text-slate-900 border-l-4 border-indigo-500 pl-4 py-1 bg-slate-50 rounded-r-lg" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'h3': return <h3 key={index} className="text-xl font-bold mt-8 mb-4 text-slate-800 tracking-tight" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'h4': return <h4 key={index} className="text-lg font-bold mt-8 mb-3 text-slate-800 uppercase tracking-wide" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'paragraph': return <p key={index} className="mb-4 leading-relaxed text-slate-700 text-lg" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'blockquote': return <blockquote key={index} className="border-l-4 border-indigo-300 pl-6 py-3 my-6 bg-indigo-50/50 text-slate-700 italic rounded-r-lg shadow-sm" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'list':
          const ListTag = block.ordered ? 'ol' : 'ul';
          return (
            <ListTag key={index} className={`mb-6 ml-6 pl-2 marker:text-indigo-500 text-slate-700 space-y-2 ${block.ordered ? 'list-decimal' : 'list-disc'}`}>
              {block.items?.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: parseInlineStyles(item) }} />)}
            </ListTag>
          );
        case 'hr': return <hr key={index} className="my-10 border-slate-200" />;
        case 'code': return <CodeBlock key={index} text={block.text} />;
        case 'accordion': return <FullAccordionBlock key={index} title={block.title} content={block.content} />;
        case 'table':
          return (
            <div key={index} className="my-8 overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-50 text-slate-700 font-bold uppercase text-xs tracking-wider">
                  <tr>
                    {block.headers.map((h, i) => (
                      <th key={i} className="px-4 py-3 border-b border-slate-200">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 text-slate-700">
                  {block.rows.map((row, r) => (
                    <tr key={r} className="hover:bg-slate-50/50 transition-colors">
                      {row.map((cell, c) => (
                        <td key={c} className="px-4 py-3 align-top leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInlineStyles(cell) }} />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        case 'callout':
          const isSummary = block.variant === 'summary';
          const isTip = block.variant === 'tip';
          const bgColor = isSummary ? 'bg-indigo-50 border-indigo-100' : isTip ? 'bg-amber-50 border-amber-100' : 'bg-slate-50 border-slate-200';
          const iconColor = isSummary ? 'text-indigo-600' : isTip ? 'text-amber-600' : 'text-slate-500';
          const Icon = isSummary ? Lightbulb : isTip ? Lightbulb : Info;
          return (
            <div key={index} className={`my-8 p-6 rounded-xl border ${bgColor} shadow-sm`}>
              {block.title && (
                <div className="flex items-center gap-3 mb-3">
                   <div className={`p-2 rounded-lg bg-white ${iconColor} shadow-sm`}>
                     <Icon size={20} />
                   </div>
                   <h5 className={`font-bold text-lg ${isSummary ? 'text-indigo-900' : isTip ? 'text-amber-900' : 'text-slate-800'}`}>{block.title}</h5>
                </div>
              )}
              <div className="text-slate-700 leading-relaxed space-y-2">
                 {block.text.split('\n').map((line, i) => <p key={i} dangerouslySetInnerHTML={{ __html: parseInlineStyles(line) }} />)}
              </div>
            </div>
          );
        case 'options':
          return <OptionsBlock key={index} items={block.items} />;
        case 'process':
          return (
            <div key={index} className="my-10 bg-gradient-to-br from-indigo-50 to-white p-6 md:p-8 rounded-2xl border border-indigo-100 shadow-sm">
               {block.title && <h4 className="font-bold text-indigo-900 mb-8 uppercase tracking-wider text-sm border-b border-indigo-100 pb-2">{block.title}</h4>}
               <div className="relative">
                 <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-indigo-200" aria-hidden="true"></div>
                 <div className="space-y-8">
                   {block.steps.map((step, i) => (
                     <div key={i} className="relative flex items-start group">
                        <div className="relative z-10 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-sm shadow-sm ring-4 ring-white group-hover:scale-110 transition-transform duration-200">{i + 1}</div>
                        <div className="ml-6 flex-1 pt-1">
                           <div className="text-slate-800 font-medium text-lg leading-relaxed group-hover:text-indigo-900 transition-colors" dangerouslySetInnerHTML={{ __html: parseInlineStyles(step) }} />
                        </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          );
        case 'breakdown':
          const labelTitle = block.labels?.title || "Text";
          const labelText = block.labels?.text || "Analysis";
          const colLeft = block.colWidth === 'narrow' ? 'md:w-1/4' : 'md:w-1/2';
          const colRight = block.colWidth === 'narrow' ? 'md:w-3/4' : 'md:w-1/2';
          
          return (
            <div key={index} className="my-8 space-y-6">
              {block.items.map((item, i) => {
                let badgeStyles = "bg-slate-100 text-slate-600";
                let borderColor = "border-slate-200";
                if (item.badgeColor === 'green') { badgeStyles = "bg-emerald-100 text-emerald-800"; borderColor = "border-emerald-200 bg-emerald-50/30"; }
                else if (item.badgeColor === 'red') { badgeStyles = "bg-red-100 text-red-800"; borderColor = "border-red-200 bg-red-50/30"; }
                else if (item.badgeColor === 'indigo') { badgeStyles = "bg-indigo-100 text-indigo-800"; borderColor = "border-indigo-200 bg-indigo-50/30"; }
                else if (item.badgeColor === 'blue') { badgeStyles = "bg-blue-100 text-blue-800"; borderColor = "border-blue-200 bg-blue-50/30"; }
                return (
                  <div key={i} className={`flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-xl border ${borderColor} transition-all hover:shadow-sm`}>
                     <div className={`${colLeft} flex flex-col items-start`}>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{labelTitle}</div>
                        <div className="text-slate-900 font-medium text-lg leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: parseInlineStyles(item.title) }} />
                        {item.badge && (
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide mt-1 ${badgeStyles}`}>
                            {item.badgeColor === 'green' && <CheckCircle2 size={12} className="mr-1" />}
                            {item.badgeColor === 'red' && <XCircle size={12} className="mr-1" />}
                            {item.badge}
                          </span>
                        )}
                     </div>
                     <div className="hidden md:block w-px bg-slate-200 self-stretch"></div>
                     <div className={colRight}>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{labelText}</div>
                        <div className="text-slate-600 leading-relaxed space-y-2">
                           {item.text.split('\n').map((line, i) => <p key={i} dangerouslySetInnerHTML={{ __html: parseInlineStyles(line) }} />)}
                        </div>
                     </div>
                  </div>
                );
              })}
            </div>
          );
        default: return null;
      }
    });
  };

  return (
    <div className={containerClasses}>
      <div className="mb-8 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
           <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-2 block">Current Lesson</span>
           <h1 className={titleClasses}>{title}</h1>
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
      <div className="prose prose-slate prose-lg max-w-none">
        {typeof content === 'string' ? renderMarkdown(content) : renderBlocks(content)}
      </div>
    </div>
  );
};