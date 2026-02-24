
import React, { useState } from 'react';
import { ContentBlock, Lesson } from '../types';
import { Lightbulb, Info, CheckCircle2, XCircle, Copy, Check, ChevronDown, ChevronUp, Target, ListChecks, CircleDot } from 'lucide-react';
import { ContentBox, extractPtIdFromTitle } from './ContentBox';
import { OptionsBlock } from './OptionsBlock';
import { ExportControls } from './ExportControls';
import { LessonShell } from './LessonShell';
import { generateLessonText, generateLessonRTF, generateLessonJSON, generateLessonCSV, generateLessonPDF } from '../utils/export';
import { LESSON_FORMAT_THEMES, getLessonFormatTheme } from '../constants/lessonFormatThemes';
import { parseAccordionToQuestion } from '../utils/parseAccordionToQuestion';
import { getBreakdownForQuestion } from '../utils/getBreakdownForQuestion';
import { serializeToJSX, serializeToHTML, lessonTitleToComponentName } from '../utils/exportRendering';
import { ShowcaseQuestionBlock } from './ShowcaseQuestionBlock';
import { IntegratedRCQuestionCard } from './IntegratedRCQuestionCard';

interface LessonViewerProps {
  title: string;
  content: string | ContentBlock[];
  /** Optional subtitle (e.g. step-by-step one-liner). Passed to LessonShell when step-by-step. */
  subtitle?: string;
  /** Optional module pill (e.g. "Module 2 · Main Conclusion"). Passed to LessonShell when step-by-step. */
  modulePill?: string;
  variant?: 'default' | 'modal';
  formatId?: number;
  showExportControls?: boolean;
}

interface IntegratedRCQuestionGroup {
  passageTitle: string;
  passageText: string;
  questionTitle: string;
  stem: string;
  options: string[];
  analysisLeadBlocks: ContentBlock[];
  analysisItems: { title: string; text: string; badge?: string; badgeColor?: 'green' | 'red' | 'indigo' | 'slate' | 'blue' }[];
  endIndex: number;
}

/** Return true when lesson uses step-by-step layout (h2 guide + intro para + h3 steps). */
function isStepByStepLesson(lesson: { title: string; content: string | ContentBlock[] }): boolean {
  const { content } = lesson;
  if (!Array.isArray(content) || content.length === 0) return false;
  const first = content[0];
  if (lesson.title === 'Step-by-Step Guide') return true;
  if (first?.type === 'h2' && typeof first.text === 'string' && first.text.startsWith('Step-by-Step Guide:')) return true;
  return false;
}

/** Return icon component for section heading. Matches template: CircleDot for Goal/Intro/Core Concepts, ListChecks for Stems and Step N. */
function getSectionIcon(headingText: string): React.ComponentType<{ className?: string }> {
  const t = headingText.toLowerCase().trim();
  if (/^step \d+/.test(t)) return ListChecks;
  if (t === 'question goal' || t === 'introduction') return CircleDot;
  if (t === 'common question stems' || t.includes('common question stems')) return ListChecks;
  if (t === 'core concepts' || t.startsWith('core concepts:')) return CircleDot;
  if (/worked example|example|question/.test(t)) return ListChecks;
  if (/analysis|concept|core|key takeaway/.test(t)) return Target;
  return Target;
}

const parseInlineStyles = (text: string) => {
  if (!text) return "";
  let formatted = text;
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
  formatted = formatted.replace(/\*(.*?)\*\*/g, '<em class="italic text-slate-800">$1</em>');
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-pink-600 font-mono px-1 py-0.5 rounded text-sm border border-slate-200">$1</code>');
  return formatted;
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

const AccordionBlock: React.FC<{ title: string; content: string | ContentBlock[] }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="my-6 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
      >
        <span className="font-bold text-slate-800">{title}</span>
        {isOpen ? <ChevronUp size={20} className="text-slate-500" /> : <ChevronDown size={20} className="text-slate-500" />}
      </button>
      {isOpen && (
        <div className="p-6 bg-white border-t border-slate-200">
          <div className="prose prose-slate prose-lg max-w-none">
            {typeof content === 'string' ? (
               content.split('\n').map((line, i) => <p key={i} className="mb-2" dangerouslySetInnerHTML={{__html: parseInlineStyles(line)}} />)
            ) : (
               <div className="text-slate-500 italic">Complex content in accordion not fully rendered in this view.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const LessonViewer: React.FC<LessonViewerProps> = ({
    title,
    content,
    subtitle,
    modulePill,
    variant = 'default',
    formatId,
    showExportControls = true,
}) => {
  const theme = formatId != null ? getLessonFormatTheme(LESSON_FORMAT_THEMES, formatId) : undefined;
  const currentLesson: Lesson = {
    id: 'current',
    title,
    content,
    ...(subtitle != null && { subtitle }),
    ...(formatId != null && { formatId }),
  };
  const stepByStep = typeof content !== 'string' && Array.isArray(content) && content.length > 0 && isStepByStepLesson(currentLesson);
  const firstH3Index = stepByStep ? content.findIndex((b) => b.type === 'h3') : -1;
  const hasSteps = stepByStep && firstH3Index >= 0;
  const introBlocks: ContentBlock[] = hasSteps ? content.slice(0, firstH3Index) : [];
  const stepChunks: ContentBlock[][] = [];
  if (hasSteps) {
    for (let i = firstH3Index; i < content.length; ) {
      if (content[i].type === 'h3') {
        let j = i + 1;
        while (j < content.length && content[j].type !== 'h3') j++;
        stepChunks.push(content.slice(i, j));
        i = j;
      } else {
        i++;
      }
    }
  }

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
        return <p key={index} className="mb-4 leading-relaxed text-slate-700 text-lg" dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.replace('> ', '')) }} />;
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

  const isPassageAccordion = (accordionTitle: string, accordionContent: string | ContentBlock[]) => {
    if (/passage|read passage/i.test(accordionTitle)) return true;
    if (typeof accordionContent === 'string' && accordionContent.length > 800) return true;
    return false;
  };

  const defaultH1 = "text-3xl font-extrabold mt-6 mb-8 text-indigo-900";
  const defaultH2 = "text-2xl font-bold mt-12 mb-6 text-slate-900 border-l-4 border-indigo-500 pl-4 py-1 bg-slate-50 rounded-r-lg";
  const defaultH3 = "text-xl font-bold mt-8 mb-4 text-slate-800 tracking-tight";
  const defaultH4 = "text-lg font-bold mt-8 mb-3 text-slate-800 uppercase tracking-wide";
  const defaultParagraph = "mb-4 leading-relaxed text-slate-700 text-lg";
  const defaultList = "mb-6 ml-6 pl-2 marker:text-indigo-500 text-slate-700 space-y-2";
  const defaultHr = "my-10 border-slate-200";

  /** Parse a passage accordion + question sequence into one integrated RC question card group. */
  const parseIntegratedRCQuestionGroup = (blocks: ContentBlock[], accordionIndex: number): IntegratedRCQuestionGroup | null => {
    const block = blocks[accordionIndex];
    if (block.type !== 'accordion' || typeof block.content !== 'string') return null;
    if (!isPassageAccordion(block.title, block.content)) return null;

    let cursor = accordionIndex + 1;
    if (cursor >= blocks.length || blocks[cursor].type !== 'h3') return null;
    const questionTitle = blocks[cursor].text;
    cursor++;

    if (cursor >= blocks.length || blocks[cursor].type !== 'blockquote') return null;
    const stem = blocks[cursor].text;
    cursor++;

    if (cursor >= blocks.length || blocks[cursor].type !== 'options') return null;
    const options = blocks[cursor].items;
    cursor++;

    const analysisLeadBlocks: ContentBlock[] = [];
    while (cursor < blocks.length) {
      const current = blocks[cursor];
      if (current.type === 'breakdown') {
        return {
          passageTitle: block.title,
          passageText: block.content,
          questionTitle,
          stem,
          options,
          analysisLeadBlocks,
          analysisItems: current.items,
          endIndex: cursor,
        };
      }
      if (current.type === 'accordion' || current.type === 'h1' || current.type === 'h2' || current.type === 'h3') {
        return null;
      }
      analysisLeadBlocks.push(current);
      cursor++;
    }
    return null;
  };

  /** Precompute which indices are consumed by composite blocks (showcase or integrated cards). */
  const getConsumedIndices = (blocks: ContentBlock[]): Set<number> => {
    const consumed = new Set<number>();
    for (let a = 0; a < blocks.length; a++) {
      const b = blocks[a];
      if (b.type !== 'accordion' || typeof b.content === 'string') continue;
      const parsed = parseAccordionToQuestion(b.content, b.title);
      if (parsed == null) continue;
      let processIdx = -1;
      let breakdownIdx = -1;
      for (let i = a + 1; i < blocks.length; i++) {
        if (blocks[i].type === 'process') { processIdx = i; break; }
      }
      for (let i = a + 1; i < blocks.length; i++) {
        if (blocks[i].type === 'breakdown') { breakdownIdx = i; break; }
      }
      if (processIdx >= 0) consumed.add(processIdx);
      if (breakdownIdx >= 0) consumed.add(breakdownIdx);
    }
    return consumed;
  };

  const renderBlocks = (blocks: ContentBlock[]) => {
    const consumedIndices = getConsumedIndices(blocks);
    const integratedMap = new Map<number, IntegratedRCQuestionGroup>();

    for (let i = 0; i < blocks.length; i++) {
      const parsed = parseIntegratedRCQuestionGroup(blocks, i);
      if (!parsed) continue;
      integratedMap.set(i, parsed);
      for (let c = i + 1; c <= parsed.endIndex; c++) consumedIndices.add(c);
    }

    return blocks.map((block, index) => {
      if (consumedIndices.has(index) && (block.type === 'process' || block.type === 'breakdown')) {
        return <React.Fragment key={index} />;
      }
      if (consumedIndices.has(index) && !integratedMap.has(index)) {
        return <React.Fragment key={index} />;
      }
      switch (block.type) {
        case 'h1': return <h1 key={index} className={defaultH1} dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'h2': {
          const Icon = getSectionIcon(block.text);
          return (
            <div key={index} className="flex items-center gap-2 text-slate-900 mb-4">
              <Icon className="w-5 h-5 text-indigo-600 shrink-0" />
              <h2 className="text-lg font-bold" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />
            </div>
          );
        }
        case 'h3': {
          const Icon = getSectionIcon(block.text);
          return (
            <div key={index} className="flex items-center gap-2 text-slate-900 mb-4">
              <Icon className="w-5 h-5 text-indigo-600 shrink-0" />
              <h3 className="text-lg font-bold" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />
            </div>
          );
        }
        case 'h4': return <h4 key={index} className={theme?.h4 ?? defaultH4} dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'paragraph': return <p key={index} className={theme?.paragraph ?? defaultParagraph} dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'blockquote': return <p key={index} className={theme?.paragraph ?? defaultParagraph} dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />;
        case 'list': {
          const ListTag = block.ordered ? 'ol' : 'ul';
          const listClasses = `${theme?.list ?? defaultList} ${block.ordered ? 'list-decimal' : 'list-disc'}`;
          return (
            <ListTag key={index} className={listClasses}>
              {block.items?.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: parseInlineStyles(item) }} />)}
            </ListTag>
          );
        }
        case 'hr': return <hr key={index} className={theme?.hr ?? defaultHr} />;
        case 'code': return <CodeBlock key={index} text={block.text} />;
        case 'accordion': {
          const integrated = integratedMap.get(index);
          if (integrated) {
            return (
              <IntegratedRCQuestionCard
                key={index}
                passageTitle={integrated.passageTitle}
                passageText={integrated.passageText}
                questionTitle={integrated.questionTitle}
                stem={integrated.stem}
                options={integrated.options}
                analysisLeadBlocks={integrated.analysisLeadBlocks}
                analysisItems={integrated.analysisItems}
              />
            );
          }
          if (typeof block.content === 'string') {
            const variant = isPassageAccordion(block.title, block.content) ? 'passage' : 'question';
            const id = extractPtIdFromTitle(block.title);
            return (
              <ContentBox key={index} variant={variant} id={id} defaultExpanded>
                {renderMarkdown(block.content)}
              </ContentBox>
            );
          }
          if (isPassageAccordion(block.title, block.content)) {
            const id = extractPtIdFromTitle(block.title);
            return (
              <ContentBox key={index} variant="passage" id={id} defaultExpanded>
                {renderBlocks(block.content)}
              </ContentBox>
            );
          }
          const parsed = parseAccordionToQuestion(block.content, block.title);
          if (parsed != null) {
            const { analysisSteps, choicesWithExplanations } = getBreakdownForQuestion(
              blocks,
              index,
              parsed.choices,
              parsed.correctAnswer
            );
            return (
              <ShowcaseQuestionBlock
                key={index}
                title={block.title}
                stimulus={parsed.stimulus}
                stem={parsed.stem}
                choices={choicesWithExplanations}
                analysisSteps={analysisSteps}
              />
            );
          }
          const id = extractPtIdFromTitle(block.title);
          return (
            <ContentBox key={index} variant="question" id={id} defaultExpanded>
              {renderBlocks(block.content)}
            </ContentBox>
          );
        }
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
        case 'callout': {
          if (block.variant === 'goal') {
            return (
              <div key={index} className="mt-6 mb-2 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-base leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />
              </div>
            );
          }
          const isSummary = block.variant === 'summary';
          const isTip = block.variant === 'tip';
          const isKeyTakeaways = isSummary && block.title != null && /key takeaway/i.test(block.title);
          if (isKeyTakeaways) {
            const lines = block.text.split('\n').filter((l) => l.trim());
            return (
              <section key={index} className="my-10 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <h2 className="text-xl font-bold text-slate-900">{block.title}</h2>
                <ul className="mt-5 list-disc pl-6 space-y-4 text-[17px] leading-7 text-slate-700 marker:text-slate-400">
                  {lines.map((line, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: parseInlineStyles(line.trim()) }} />
                  ))}
                </ul>
              </section>
            );
          }
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
        }
        case 'options':
          return <OptionsBlock key={index} items={block.items} />;
        case 'process':
          return (
            <div key={index} className="my-10 rounded-xl border border-indigo-100 bg-indigo-50/30 p-6 lg:p-8">
               {block.title && <h3 className="text-sm font-bold tracking-wider text-indigo-900 uppercase mb-6">{block.title}</h3>}
               <ol className="space-y-6">
                 {block.steps.map((step, i) => (
                   <li key={i} className="flex gap-4">
                     <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold">
                       {i + 1}
                     </div>
                     <div className="text-sm leading-relaxed text-slate-800" dangerouslySetInnerHTML={{ __html: parseInlineStyles(step) }} />
                   </li>
                 ))}
               </ol>
            </div>
          );
        case 'breakdown':
          return (
            <div key={index} className="my-8 space-y-4">
              {block.items.map((item, i) => {
                const isCorrect = item.badgeColor === 'green';
                const cardClass = isCorrect ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50/30';
                const letterMatch = String(item.title).trim().match(/^\(([A-E])\)/);
                const optionLabel = letterMatch ? `Option ${letterMatch[1]}` : (block.labels?.title ?? 'Option');
                return (
                  <div key={i} className={`rounded-lg border p-5 ${cardClass}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`text-xs font-bold tracking-wide uppercase ${isCorrect ? 'text-emerald-700' : 'text-slate-500'}`}>
                          {optionLabel}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-900" dangerouslySetInnerHTML={{ __html: parseInlineStyles(item.title) }} />
                      </div>
                      <span
                        className={`shrink-0 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${
                          isCorrect ? 'bg-white text-emerald-700 border border-emerald-200' : 'bg-white text-red-700 border border-red-200'
                        }`}
                      >
                        {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        {item.badge ?? (isCorrect ? 'Correct' : 'Incorrect')}
                      </span>
                    </div>
                    <div className="mt-3 text-sm leading-relaxed text-slate-700 space-y-2">
                      {item.text.split('\n').map((line, j) => <p key={j} dangerouslySetInnerHTML={{ __html: parseInlineStyles(line) }} />)}
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

  const cardContent =
    stepByStep && hasSteps ? (
      <div className={theme ? 'max-w-none' : 'prose prose-slate prose-lg max-w-none'}>
        {introBlocks.length > 0 && renderBlocks(introBlocks)}
        {stepChunks.map((chunk, idx) => (
          <React.Fragment key={`step-${idx}`}>
            <hr className="my-10 border-slate-200" />
            {renderBlocks(chunk)}
          </React.Fragment>
        ))}
      </div>
    ) : (
      <div className={theme ? 'max-w-none' : 'prose prose-slate prose-lg max-w-none'}>
        {typeof content === 'string' ? renderMarkdown(content) : renderBlocks(content)}
      </div>
    );

  return (
    <LessonShell
      title={title}
      subtitle={stepByStep ? subtitle : undefined}
      modulePill={stepByStep ? modulePill : undefined}
      exportControls={showExportControls ? (
        <ExportControls
          label="Lesson"
          filename={`LSAT_Lesson_${title.replace(/\s+/g, '_')}`}
          onCopy={() => generateLessonText(currentLesson)}
          onExportText={() => generateLessonText(currentLesson)}
          onExportRTF={() => generateLessonRTF(currentLesson)}
          onExportJSON={() => generateLessonJSON(currentLesson)}
          onExportCSV={() => generateLessonCSV(currentLesson)}
          onExportPDF={() => generateLessonPDF(currentLesson)}
          onCopyAsJSX={() => serializeToJSX(document.querySelector<HTMLElement>('[data-export-content]'), { pretty: true, wrapAsComponent: lessonTitleToComponentName(title) })}
          onCopyAsHTML={() => serializeToHTML(document.querySelector<HTMLElement>('[data-export-content]'))}
        />
      ) : undefined}
    >
      {cardContent}
    </LessonShell>
  );
};
