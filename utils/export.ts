
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ModuleData, ContentBlock, Lesson } from '../types';
import { getSourceModuleIdForRouteModuleId } from './courseCatalog';
import { extractPtIds } from './lessonQuestionLinkage';
import type {
  CanonicalCourseLesson,
  CanonicalCourseModule,
  CanonicalCoursePayload,
  ExportScopeSummary,
  InterchangeCourse,
  InterchangeCourseMaterial,
} from './courseExportSchemas';

// --- SHARED TEXT HELPERS ---

const escapeRTF = (text: string): string => {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\n/g, '\\line ');
};

const formatInlineRTF = (text: string): string => {
  if (!text) return '';
  let formatted = escapeRTF(text);
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '\\b $1\\b0 ');
  formatted = formatted.replace(/\*(.*?)\*/g, '\\i $1\\i0 ');
  formatted = formatted.replace(/`(.*?)`/g, '\\f1 $1\\f0 ');
  return formatted;
};

const blocksToText = (blocks: ContentBlock[]): string => blocks.map(blockToText).join('');

const blocksToRTF = (blocks: ContentBlock[]): string => blocks.map(blockToRTF).join('');

const blockToText = (block: ContentBlock): string => {
  switch (block.type) {
    case 'h1': return `# ${block.text}\n\n`;
    case 'h2': return `## ${block.text}\n\n`;
    case 'h3': return `### ${block.text}\n\n`;
    case 'h4': return `#### ${block.text}\n\n`;
    case 'paragraph': return `${block.text}\n\n`;
    case 'blockquote': return `> ${block.text}\n\n`;
    case 'hr': return `---\n\n`;
    case 'code': return `\`\`\`\n${block.text}\n\`\`\`\n\n`;
    case 'list': {
      return block.items.map((item, i) => 
        block.ordered ? `${i+1}. ${item}` : `- ${item}`
      ).join('\n') + '\n\n';
    }
    case 'callout': {
      const calloutTitle = block.title ? `: ${block.title}` : '';
      const variant = (block.variant || 'NOTE').toUpperCase();
      return `[${variant}${calloutTitle}]\n${block.text}\n\n`;
    }
    case 'options':
      return block.items.join('\n') + '\n\n';
    case 'process': {
      const processTitle = block.title ? `[PROCESS: ${block.title}]\n` : '[PROCESS]\n';
      const steps = block.steps.map((s, i) => `${i+1}. ${s}`).join('\n');
      return `${processTitle}${steps}\n\n`;
    }
    case 'breakdown': {
      const items = block.items.map(item => {
        const badge = item.badge ? ` [${item.badge}]` : '';
        return `* ${item.title}${badge}\n  ${item.text}`;
      }).join('\n\n');
      return `[BREAKDOWN]\n${items}\n\n`;
    }
    case 'accordion':
       const accContent = typeof block.content === 'string' ? block.content : blocksToText(block.content).trim();
       return `[EXPAND: ${block.title}]\n${accContent}\n\n`;
    case 'table': {
        const header = block.headers.join(' | ');
        const divider = block.headers.map(() => '---').join(' | ');
        const rows = block.rows.map((row) => row.join(' | ')).join('\n');
        return `[TABLE]\n${header}\n${divider}\n${rows}\n\n`;
    }
    case 'question-card': {
        const qTitle = block.id ? `ID: ${block.id}` : 'Question';
        const qType = block.questionType ? ` | Type: ${block.questionType}` : '';
        const qDiff = block.difficulty ? ` | Difficulty: ${block.difficulty}` : '';
        const qOpts = block.options.map((opt, i) => `(${String.fromCharCode(65+i)}) ${opt}`).join('\n');
        return `[QUESTION CARD: ${qTitle}${qType}${qDiff}]\nSTIMULUS:\n${block.stimulus}\n\nQUESTION:\n${block.question}\n\nOPTIONS:\n${qOpts}\n\n`;
    }
    case 'passage-card': {
        const pTitle = block.title || 'Passage';
        const pGenre = block.genre ? ` (${block.genre})` : '';
        return `[PASSAGE CARD: ${pTitle}${pGenre}]\n${block.passage}\n\n`;
    }
    case 'question-passage-card': {
        const qpTitle = block.passageTitle || 'Passage';
        const qpOpts = block.options.map((opt, i) => `(${String.fromCharCode(65+i)}) ${opt}`).join('\n');
        return `[RC QUESTION: ${qpTitle}]\nPASSAGE:\n${block.passage}\n\nQUESTION:\n${block.question}\n\nOPTIONS:\n${qpOpts}\n\n`;
    }
    default:
      return '';
  }
};

const blockToRTF = (block: ContentBlock): string => {
  switch (block.type) {
    case 'h1': return `\\pard\\sa200\\sl276\\slmult1\\b\\f0\\fs48 ${formatInlineRTF(block.text)}\\b0\\par\n`;
    case 'h2': return `\\pard\\sa200\\sl276\\slmult1\\b\\f0\\fs36 ${formatInlineRTF(block.text)}\\b0\\par\n`;
    case 'h3': return `\\pard\\sa200\\sl276\\slmult1\\b\\f0\\fs32 ${formatInlineRTF(block.text)}\\b0\\par\n`;
    case 'h4': return `\\pard\\sa200\\sl276\\slmult1\\b\\f0\\fs28 ${formatInlineRTF(block.text)}\\b0\\par\n`;
    case 'paragraph': return `\\pard\\sa200\\sl276\\slmult1\\f0\\fs24 ${formatInlineRTF(block.text)}\\par\n`;
    case 'blockquote': return `\\pard\\sa200\\sl276\\slmult1\\li720\\i\\f0\\fs24 ${formatInlineRTF(block.text)}\\i0\\par\n`;
    case 'hr': return `\\pard\\sa200\\sl276\\slmult1\\brdrb\\brdrs\\brdrw10\\brsp20 \\par\n`;
    case 'code': return `\\pard\\sa200\\sl276\\slmult1\\f1\\fs20 ${escapeRTF(block.text)}\\f0\\fs24\\par\n`;
    case 'list': {
      return block.items.map((item, i) => {
        const prefix = block.ordered ? `${i+1}.` : '\\bullet';
        return `\\pard\\li720\\sa200\\sl276\\slmult1 ${prefix} \\tab ${formatInlineRTF(item)}\\par\n`;
      }).join('');
    }
    case 'callout': {
      const calloutTitle = block.title ? `: ${block.title}` : '';
      const variant = (block.variant || 'Note').toUpperCase();
      return `\\pard\\sa200\\sl276\\slmult1\\b [${variant}${escapeRTF(calloutTitle)}]\\b0\\par ${formatInlineRTF(block.text)}\\par\n`;
    }
    case 'options':
      return block.items.map(item => `\\pard\\sa200\\sl276\\slmult1 [ ] ${formatInlineRTF(item)}\\par\n`).join('');
    case 'process': {
       const rtfProcTitle = block.title ? `\\pard\\sa200\\sl276\\slmult1\\b PROCESS: ${escapeRTF(block.title)}\\b0\\par\n` : '';
       const rtfSteps = block.steps.map((s, i) => `\\pard\\li720\\sa200\\sl276\\slmult1\\b ${i+1}.\\b0 \\tab ${formatInlineRTF(s)}\\par\n`).join('');
       return rtfProcTitle + rtfSteps;
    }
    case 'breakdown': {
      return block.items.map(item => {
        const badge = item.badge ? ` [${item.badge}]` : '';
        return `\\pard\\sa200\\sl276\\slmult1\\b ${formatInlineRTF(item.title)}${escapeRTF(badge)}\\b0\\par\\li720 ${formatInlineRTF(item.text)}\\par\\li0\n`;
      }).join('');
    }
    case 'accordion': {
       const accText = typeof block.content === 'string'
         ? `\\pard\\sa200\\sl276\\slmult1 ${formatInlineRTF(block.content)}\\par\n`
         : blocksToRTF(block.content);
       return `\\pard\\sa200\\sl276\\slmult1\\b [EXPAND: ${formatInlineRTF(block.title)}]\\b0\\par\n${accText}`;
    }
    case 'table': {
      const header = block.headers.map((item) => formatInlineRTF(item)).join(' | ');
      const rows = block.rows
        .map((row) => `\\pard\\sa200\\sl276\\slmult1 ${row.map((cell) => formatInlineRTF(cell)).join(' | ')}\\par\n`)
        .join('');
      return `\\pard\\sa200\\sl276\\slmult1\\b ${header}\\b0\\par\n${rows}`;
    }
    case 'question-card': {
       const rtfQTitle = block.id ? `ID: ${block.id}` : 'Question';
       const rtfQType = block.questionType ? ` | Type: ${block.questionType}` : '';
       const rtfQDiff = block.difficulty ? ` | Difficulty: ${block.difficulty}` : '';
       const rtfQOpts = block.options.map((opt, i) => `\\pard\\li720\\sa200\\sl276\\slmult1 (${String.fromCharCode(65+i)}) ${formatInlineRTF(opt)}\\par\n`).join('');
       return `\\pard\\sa200\\sl276\\slmult1\\b [QUESTION CARD: ${escapeRTF(rtfQTitle)}${escapeRTF(rtfQType)}${escapeRTF(rtfQDiff)}]\\b0\\par\\b STIMULUS:\\b0\\par ${formatInlineRTF(block.stimulus)}\\par\\par\\b QUESTION:\\b0\\par ${formatInlineRTF(block.question)}\\par\\par\\b OPTIONS:\\b0\\par\n${rtfQOpts}`;
    }
    case 'passage-card': {
       const rtfPTitle = block.title || 'Passage';
       const rtfPGenre = block.genre ? ` (${block.genre})` : '';
       return `\\pard\\sa200\\sl276\\slmult1\\b [PASSAGE CARD: ${escapeRTF(rtfPTitle)}${escapeRTF(rtfPGenre)}]\\b0\\par ${formatInlineRTF(block.passage)}\\par\n`;
    }
    case 'question-passage-card': {
       const rtfQPTitle = block.passageTitle || 'Passage';
       const rtfQPOpts = block.options.map((opt, i) => `\\pard\\li720\\sa200\\sl276\\slmult1 (${String.fromCharCode(65+i)}) ${formatInlineRTF(opt)}\\par\n`).join('');
       return `\\pard\\sa200\\sl276\\slmult1\\b [RC QUESTION: ${escapeRTF(rtfQPTitle)}]\\b0\\par\\b PASSAGE:\\b0\\par ${formatInlineRTF(block.passage)}\\par\\par\\b QUESTION:\\b0\\par ${formatInlineRTF(block.question)}\\par\\par\\b OPTIONS:\\b0\\par\n${rtfQPOpts}`;
    }
    default:
      return '';
  }
};

const lessonToText = (lesson: Lesson): string => {
  let contentText = '';
  if (typeof lesson.content === 'string') {
    contentText = lesson.content + '\n\n';
  } else {
    contentText = lesson.content.map(blockToText).join('');
  }
  return `=== ${lesson.title} ===\n\n${contentText}`;
};

const lessonToRTF = (lesson: Lesson): string => {
  let contentText = '';
  if (typeof lesson.content === 'string') {
    contentText = `\\pard\\sa200\\sl276\\slmult1\\f0\\fs24 ${formatInlineRTF(lesson.content)}\\par\n`;
  } else {
    contentText = lesson.content.map(blockToRTF).join('');
  }
  return `\\pard\\sa200\\sl276\\slmult1\\b\\fs32 ${escapeRTF(lesson.title)}\\b0\\fs24\\par\n\\par\n${contentText}\\page\n`;
};

const rtfHeader = `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Arial;}{\\f1 Courier New;}}\\viewkind4\\uc1\\pard\\sa200\\sl276\\slmult1\\f0\\fs24 `;
const rtfFooter = `}`;

// --- PDF GENERATION ENGINE ---

const PAGE_MARGIN_TOP = 20;
const PAGE_MARGIN_BOTTOM = 20;
const PAGE_MARGIN_X = 20;
const PAGE_HEIGHT = 297; // A4 height mm
const PAGE_WIDTH = 210; // A4 width mm
const CONTENT_WIDTH = PAGE_WIDTH - (2 * PAGE_MARGIN_X);

let cursorY = PAGE_MARGIN_TOP;

const cleanTextForPDF = (text: string) => {
    if (!text) return '';
    // Basic cleanup of markdown-style markers
    return text
        .replace(/\*\*(.*?)\*\*/g, '$1') 
        .replace(/\*(.*?)\*/g, '$1')   
        .replace(/`(.*?)`/g, '$1');
};

const checkPageBreak = (doc: jsPDF, requiredHeight: number) => {
    // If adding this content would push past the bottom margin
    if (cursorY + requiredHeight > PAGE_HEIGHT - PAGE_MARGIN_BOTTOM) {
        doc.addPage();
        cursorY = PAGE_MARGIN_TOP;
        return true;
    }
    return false;
};

interface TextOptions {
    size?: number;
    style?: 'normal' | 'bold' | 'italic' | 'bolditalic';
    color?: [number, number, number];
    align?: 'left' | 'center' | 'right' | 'justify';
    indent?: number;
    bottomSpacing?: number;
}

const addWrappedText = (doc: jsPDF, text: string, options: TextOptions = {}) => {
    const { 
        size = 12, 
        style = 'normal', 
        color = [0, 0, 0], 
        align = 'left',
        indent = 0,
        bottomSpacing = 4
    } = options;

    doc.setFontSize(size);
    doc.setFont('helvetica', style);
    doc.setTextColor(color[0], color[1], color[2]);

    const clean = cleanTextForPDF(text);
    // Split text into lines that fit within width
    const lines = doc.splitTextToSize(clean, CONTENT_WIDTH - indent);
    
    // Calculate exact height of this text block
    // getLineHeight() returns height in points (approx), convert roughly to mm
    // A more accurate way: fontSize * 0.3527 * 1.15 (line height factor)
    const lineHeightMm = size * 0.352778 * 1.15;
    const blockHeight = lines.length * lineHeightMm;

    // Check if whole block fits, if not, break page
    checkPageBreak(doc, blockHeight);

    let x = PAGE_MARGIN_X + indent;
    if (align === 'center') {
        x = PAGE_WIDTH / 2;
    } else if (align === 'right') {
        x = PAGE_WIDTH - PAGE_MARGIN_X;
    }

    doc.text(lines, x, cursorY);
    cursorY += blockHeight + bottomSpacing;
};

const addBlockToPdf = (doc: jsPDF, block: ContentBlock) => {
    switch (block.type) {
        case 'h1': 
            addWrappedText(doc, block.text, { size: 24, style: 'bold', bottomSpacing: 6 }); 
            break;
        case 'h2': 
            addWrappedText(doc, block.text, { size: 20, style: 'bold', bottomSpacing: 5 }); 
            // Separator line
            doc.setDrawColor(200);
            doc.line(PAGE_MARGIN_X, cursorY - 3, PAGE_WIDTH - PAGE_MARGIN_X, cursorY - 3);
            break;
        case 'h3': 
            addWrappedText(doc, block.text, { size: 16, style: 'bold', bottomSpacing: 4 }); 
            break;
        case 'h4': 
            addWrappedText(doc, block.text, { size: 14, style: 'bold', bottomSpacing: 4 }); 
            break;
        case 'paragraph': 
            addWrappedText(doc, block.text, { size: 11, bottomSpacing: 5 }); 
            break;
        case 'blockquote': {
            doc.setFontSize(11);
            doc.setFont('helvetica', 'italic');
            const quoteLines = doc.splitTextToSize(cleanTextForPDF(block.text), CONTENT_WIDTH - 5);
            const quoteHeight = quoteLines.length * (11 * 0.3528 * 1.15);
            
            checkPageBreak(doc, quoteHeight);
            
            // Vertical bar
            doc.setDrawColor(100);
            doc.setLineWidth(1);
            doc.line(PAGE_MARGIN_X, cursorY, PAGE_MARGIN_X, cursorY + quoteHeight);
            
            addWrappedText(doc, block.text, { size: 11, style: 'italic', indent: 4 });
            break;
        }
        case 'hr':
            checkPageBreak(doc, 10);
            cursorY += 5;
            doc.setDrawColor(200);
            doc.setLineWidth(0.5);
            doc.line(PAGE_MARGIN_X, cursorY, PAGE_WIDTH - PAGE_MARGIN_X, cursorY);
            cursorY += 5;
            break;
        case 'list':
            block.items.forEach((item, i) => {
                const prefix = block.ordered ? `${i + 1}. ` : '• ';
                addWrappedText(doc, prefix + item, { size: 11, indent: 5, bottomSpacing: 2 });
            });
            cursorY += 2;
            break;
        case 'table': {
            // Tables handle their own page breaking logic, but we must
            // make sure we pass the current Y position.
            autoTable(doc, {
                head: [block.headers.map(h => cleanTextForPDF(h))],
                body: block.rows.map(row => row.map(cell => cleanTextForPDF(cell))),
                startY: cursorY,
                margin: { left: PAGE_MARGIN_X, right: PAGE_MARGIN_X, bottom: PAGE_MARGIN_BOTTOM },
                theme: 'grid',
                headStyles: { fillColor: [79, 70, 229] },
                styles: { fontSize: 10, cellPadding: 2 },
                pageBreak: 'auto',
            });
            // Update cursorY to end of table
            cursorY = (doc as any).lastAutoTable.finalY + 8;
            break;
        }
        case 'callout': {
            doc.setFontSize(11);
            const titleHeight = block.title ? 7 : 0;
            const textLines = doc.splitTextToSize(cleanTextForPDF(block.text), CONTENT_WIDTH - 6);
            const textH = textLines.length * (11 * 0.3528 * 1.15);
            const totalH = titleHeight + textH + 8; // padding

            checkPageBreak(doc, totalH);

            // Background box
            const bgCol = block.variant === 'summary' ? [240, 249, 255] : block.variant === 'tip' ? [255, 251, 235] : [248, 250, 252];
            doc.setFillColor(bgCol[0], bgCol[1], bgCol[2]);
            doc.roundedRect(PAGE_MARGIN_X, cursorY, CONTENT_WIDTH, totalH, 2, 2, 'F');
            doc.setDrawColor(200);
            doc.roundedRect(PAGE_MARGIN_X, cursorY, CONTENT_WIDTH, totalH, 2, 2, 'S');

            const startY = cursorY + 4;
            let currentInnerY = startY;

            if (block.title) {
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 0, 0);
                doc.text(cleanTextForPDF(block.title), PAGE_MARGIN_X + 3, currentInnerY + 3);
                currentInnerY += 7;
            }

            doc.setFontSize(11);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(0,0,0);
            doc.text(textLines, PAGE_MARGIN_X + 3, currentInnerY + 3);

            cursorY += totalH + 5; 
            break;
        }
        case 'breakdown': {
            // Render as table for alignment
            const tableRows = block.items.map(item => [cleanTextForPDF(item.title), cleanTextForPDF(item.text)]);
            autoTable(doc, {
                head: [[block.labels?.title || 'Item', block.labels?.text || 'Description']],
                body: tableRows,
                startY: cursorY,
                margin: { left: PAGE_MARGIN_X, right: PAGE_MARGIN_X, bottom: PAGE_MARGIN_BOTTOM },
                theme: 'striped',
                headStyles: { fillColor: [71, 85, 105] },
                columnStyles: { 0: { fontStyle: 'bold', cellWidth: 50 } },
                pageBreak: 'auto',
            });
            cursorY = (doc as any).lastAutoTable.finalY + 8;
            break;
        }
        case 'code':
            doc.setFont('courier');
            addWrappedText(doc, block.text, { size: 10, bottomSpacing: 6 });
            doc.setFont('helvetica');
            break;
        case 'options':
            block.items.forEach(item => {
                addWrappedText(doc, `- ${item}`, { size: 11, indent: 5, bottomSpacing: 3 });
            });
            cursorY += 3;
            break;
        case 'process':
            if (block.title) addWrappedText(doc, block.title, { size: 14, style: 'bold' });
            block.steps.forEach((step, i) => {
                addWrappedText(doc, `${i+1}. ${step}`, { size: 11, indent: 5, bottomSpacing: 3 });
            });
            cursorY += 3;
            break;
        case 'accordion':
            addWrappedText(doc, block.title, { size: 12, style: 'bold' });
            if (typeof block.content === 'string') {
                addWrappedText(doc, block.content, { size: 11, indent: 5, style: 'italic' });
            } else {
                 // Recurse for blocks inside accordion
                 block.content.forEach(b => addBlockToPdf(doc, b));
            }
            break;
        case 'question-card': {
            checkPageBreak(doc, 60); // Estimate height
            // Header
            doc.setFillColor(245, 247, 250);
            doc.rect(PAGE_MARGIN_X, cursorY, CONTENT_WIDTH, 8, 'F');
            doc.setFontSize(9);
            doc.setTextColor(100, 116, 139);
            const qHeader = `${block.id || 'Question'} | ${block.questionType || 'LSAT'} | ${block.difficulty || 'Medium'}`;
            doc.text(qHeader.toUpperCase(), PAGE_MARGIN_X + 2, cursorY + 5);
            cursorY += 12;
            
            // Stimulus
            addWrappedText(doc, block.stimulus, { size: 11, bottomSpacing: 6 });
            
            // Question
            addWrappedText(doc, block.question, { size: 11, style: 'bold', bottomSpacing: 6 });
            
            // Options
            block.options.forEach((opt, i) => {
                const label = `(${String.fromCharCode(65+i)})`;
                addWrappedText(doc, `${label} ${opt}`, { size: 11, indent: 8, bottomSpacing: 3 });
            });
            cursorY += 6;
            break;
        }
        case 'passage-card': {
            checkPageBreak(doc, 100);
            addWrappedText(doc, block.title, { size: 14, style: 'bold', align: 'center', bottomSpacing: 2 });
            if (block.genre) addWrappedText(doc, block.genre, { size: 10, style: 'italic', align: 'center', bottomSpacing: 6 });
            
            // Two columns ideally, but single column for simplicity in this generated PDF
            doc.setFontSize(10);
            const pLines = doc.splitTextToSize(cleanTextForPDF(block.passage), CONTENT_WIDTH);
            doc.text(pLines, PAGE_MARGIN_X, cursorY);
            cursorY += (pLines.length * 4) + 10;
            break;
        }
        case 'question-passage-card': {
            checkPageBreak(doc, 120);
            // Passage Title
            addWrappedText(doc, block.passageTitle, { size: 12, style: 'bold', bottomSpacing: 4 });
            
            // Passage
            doc.setFillColor(250, 250, 250);
            const qpLines = doc.splitTextToSize(cleanTextForPDF(block.passage), CONTENT_WIDTH - 4);
            const qpHeight = qpLines.length * 4;
            doc.rect(PAGE_MARGIN_X, cursorY, CONTENT_WIDTH, qpHeight + 4, 'F');
            doc.text(qpLines, PAGE_MARGIN_X + 2, cursorY + 4);
            cursorY += qpHeight + 10;
            
            // Question
            addWrappedText(doc, block.question, { size: 11, style: 'bold', bottomSpacing: 6 });
             // Options
            block.options.forEach((opt, i) => {
                const label = `(${String.fromCharCode(65+i)})`;
                addWrappedText(doc, `${label} ${opt}`, { size: 11, indent: 8, bottomSpacing: 3 });
            });
            cursorY += 6;
            break;
        }
        default: break;
    }
};

const addLessonToPdf = (doc: jsPDF, lesson: Lesson) => {
    // If not at top, space out
    if (cursorY > PAGE_MARGIN_TOP) {
         checkPageBreak(doc, 60); 
         // If we didn't break page but are somewhat low, add space. 
         // If checkPageBreak triggered, cursorY is already at top.
         if (cursorY > PAGE_MARGIN_TOP) {
             cursorY += 10;
         }
    }

    addWrappedText(doc, lesson.title, { size: 22, style: 'bold', align: 'center', bottomSpacing: 10 });
    
    // Separator line
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.line(PAGE_MARGIN_X + 20, cursorY, PAGE_WIDTH - PAGE_MARGIN_X - 20, cursorY);
    cursorY += 10;

    const content = typeof lesson.content === 'string' 
        ? [{ type: 'paragraph', text: lesson.content } as ContentBlock] 
        : lesson.content;

    content.forEach(block => addBlockToPdf(doc, block));
};

export const generateLessonPDF = (lesson: Lesson) => {
    const doc = new jsPDF();
    cursorY = PAGE_MARGIN_TOP;
    addLessonToPdf(doc, lesson);
    doc.save(`LSAT_Lesson_${lesson.title.replace(/[^a-z0-9]/gi, '_').substring(0, 30)}.pdf`);
};

export const generateModulePDF = (module: ModuleData) => {
    const doc = new jsPDF();
    cursorY = PAGE_MARGIN_TOP;
    
    addWrappedText(doc, `Module ${module.id}: ${module.title}`, { size: 26, style: 'bold', align: 'center', bottomSpacing: 10 });
    addWrappedText(doc, module.description, { size: 12, style: 'italic', align: 'center', bottomSpacing: 10 });
    
    doc.addPage();
    cursorY = PAGE_MARGIN_TOP;

    module.lessons.forEach((lesson, index) => {
        // Start new lesson on new page? Or just flow? 
        // Flow is usually better for saving paper, but for clarity let's force page if it's not the first.
        if (index > 0) {
            doc.addPage();
            cursorY = PAGE_MARGIN_TOP;
        }
        addLessonToPdf(doc, lesson);
    });

    doc.save(`LSAT_Module_${module.id}.pdf`);
};

export const generateUnitPDF = (unitName: string, modules: ModuleData[]) => {
    const doc = new jsPDF();
    cursorY = PAGE_MARGIN_TOP;
    
    addWrappedText(doc, unitName, { size: 28, style: 'bold', align: 'center', bottomSpacing: 20 });
    
    modules.forEach((module) => {
        doc.addPage();
        cursorY = PAGE_MARGIN_TOP;
        
        // Module Intro
        addWrappedText(doc, `Module ${module.id}: ${module.title}`, { size: 24, style: 'bold', align: 'center', bottomSpacing: 10 });
        addWrappedText(doc, module.description, { size: 14, style: 'italic', align: 'center', bottomSpacing: 10 });

        module.lessons.forEach((lesson) => {
            doc.addPage();
            cursorY = PAGE_MARGIN_TOP;
            addLessonToPdf(doc, lesson);
        });
    });

    doc.save(`LSAT_Unit_${unitName.replace(/[^a-z0-9]/gi, '_')}.pdf`);
};

export const generateSectionPDF = (sectionName: string, modules: ModuleData[]) => {
    const doc = new jsPDF();
    cursorY = PAGE_MARGIN_TOP;
    addWrappedText(doc, sectionName, { size: 30, style: 'bold', align: 'center' });
    
    modules.forEach((module) => {
        doc.addPage();
        cursorY = PAGE_MARGIN_TOP;
        addWrappedText(doc, `Module ${module.id}: ${module.title}`, { size: 24, style: 'bold', align: 'center', bottomSpacing: 10 });
        
        module.lessons.forEach((lesson) => {
            doc.addPage();
            cursorY = PAGE_MARGIN_TOP;
            addLessonToPdf(doc, lesson);
        });
    });

    doc.save(`LSAT_Section_${sectionName.replace(/\s+/g, '_')}.pdf`);
};

export const generateCoursePDF = (modules: ModuleData[], filename = 'LSAT_Mastery_Course.pdf') => {
    const doc = new jsPDF();
    cursorY = PAGE_MARGIN_TOP;
    addWrappedText(doc, 'LSAT Mastery Course', { size: 32, style: 'bold', align: 'center' });
    
    modules.forEach((module) => {
        doc.addPage();
        cursorY = PAGE_MARGIN_TOP;
        addWrappedText(doc, `Module ${module.id}: ${module.title}`, { size: 24, style: 'bold', align: 'center' });
        
        module.lessons.forEach((lesson) => {
            doc.addPage();
            cursorY = PAGE_MARGIN_TOP;
            addLessonToPdf(doc, lesson);
        });
    });

    doc.save(filename);
};


// --- CSV HELPERS AND EXPORTS ---

const escapeCSVCell = (value: string): string => {
  const s = String(value ?? '');
  if (/[",\r\n]/.test(s)) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
};

export interface QuestionBankExportRow {
  id: string;
  questionType: string;
  isIllustrative: boolean;
  inUse: boolean;
  stimulus: string;
  question: string;
  options: string[];
}

export const generateQuestionBankCSV = (rows: QuestionBankExportRow[]): string => {
  const header = 'id,questionType,isIllustrative,inUse,stimulus,question,options';
  const lines = rows.map((row) =>
    [
      escapeCSVCell(row.id),
      escapeCSVCell(row.questionType),
      escapeCSVCell(String(row.isIllustrative)),
      escapeCSVCell(String(row.inUse)),
      escapeCSVCell(row.stimulus),
      escapeCSVCell(row.question),
      escapeCSVCell(row.options.join(' | ')),
    ].join(','),
  );

  return [header, ...lines].join('\n');
};

export const generateQuestionBankJSON = (rows: QuestionBankExportRow[]): string => {
  return JSON.stringify(rows, null, 2);
};

export const generateQuestionBankIDsText = (rows: QuestionBankExportRow[]): string => {
  return rows.map((row) => row.id).join('\n');
};

export const generateQuestionBankIDsCSV = (rows: QuestionBankExportRow[]): string => {
  return ['id', ...rows.map((row) => escapeCSVCell(row.id))].join('\n');
};

const lessonToPlainText = (lesson: Lesson): string => {
  if (typeof lesson.content === 'string') {
    return lesson.content.trim();
  }
  return lesson.content.map(blockToText).join('').trim();
};

const isLrRouteModule = (routeModuleId: number): boolean => routeModuleId >= 1 && routeModuleId <= 22;

const prefixMarkdownLines = (text: string, prefix: string): string =>
  text
    .split('\n')
    .map((line) => (line.length > 0 ? `${prefix}${line}` : prefix.trimEnd()))
    .join('\n');

const escapeMarkdownTableCell = (text: string): string => text.replace(/\|/g, '\\|').replace(/\n/g, '<br />');

const normalizeMarkdownOutput = (text: string): string => text.replace(/\n{3,}/g, '\n\n').trim();

const formatOptionsAsMarkdownList = (options: string[]): string => options.map((option) => `- ${option}`).join('\n');

const getCanonicalQuestionPolicy = (routeModuleId: number, lesson: Lesson) =>
  isLrRouteModule(routeModuleId) ? lesson.questionPolicy ?? 'none' : undefined;

const questionCardToMaterialMarkdown = (
  block: Extract<ContentBlock, { type: 'question-card' }>,
): string => {
  const metadata = [
    block.questionType ? `**Question Type:** ${block.questionType}` : '',
    block.difficulty ? `**Difficulty:** ${block.difficulty}` : '',
    block.id ? `**Source ID:** ${block.id}` : '',
  ].filter(Boolean);

  return normalizeMarkdownOutput([
    ...metadata,
    metadata.length > 0 ? '' : '',
    '### Stimulus',
    '',
    block.stimulus,
    '',
    '### Question',
    '',
    block.question,
    '',
    '### Options',
    '',
    formatOptionsAsMarkdownList(block.options),
  ].join('\n'));
};

const questionPassageCardToMaterialMarkdown = (
  block: Extract<ContentBlock, { type: 'question-passage-card' }>,
): string => {
  const metadata = [
    block.questionType ? `**Question Type:** ${block.questionType}` : '',
    block.difficulty ? `**Difficulty:** ${block.difficulty}` : '',
    block.id ? `**Source ID:** ${block.id}` : '',
  ].filter(Boolean);

  return normalizeMarkdownOutput([
    `## ${block.passageTitle}`,
    '',
    ...metadata,
    metadata.length > 0 ? '' : '',
    '### Passage',
    '',
    block.passage,
    '',
    '### Question',
    '',
    block.question,
    '',
    '### Options',
    '',
    formatOptionsAsMarkdownList(block.options),
  ].join('\n'));
};

const passageCardToMaterialMarkdown = (
  block: Extract<ContentBlock, { type: 'passage-card' }>,
): string => {
  const metadata = [
    block.genre ? `**Genre:** ${block.genre}` : '',
    block.id ? `**Source ID:** ${block.id}` : '',
    typeof block.paragraphCount === 'number' ? `**Paragraph Count:** ${block.paragraphCount}` : '',
    typeof block.wordCount === 'number' ? `**Word Count:** ${block.wordCount}` : '',
  ].filter(Boolean);

  return normalizeMarkdownOutput([
    `## ${block.title}`,
    '',
    ...metadata,
    metadata.length > 0 ? '' : '',
    block.passage,
  ].join('\n'));
};

interface InterchangeLessonBuildState {
  materials: Array<Omit<InterchangeCourseMaterial, 'id'>>;
  seenQuestionRefs: Set<string>;
}

const appendInterchangeMaterial = (
  state: InterchangeLessonBuildState,
  material: Omit<InterchangeCourseMaterial, 'id'>,
  dedupeKey?: string,
) => {
  if (dedupeKey) {
    if (state.seenQuestionRefs.has(dedupeKey)) return;
    state.seenQuestionRefs.add(dedupeKey);
  }

  state.materials.push(material);
};

const addQuestionReferenceMaterials = (
  block: Extract<ContentBlock, { type: 'question-card' | 'question-passage-card' }>,
  state: InterchangeLessonBuildState,
): boolean => {
  const ptIds = block.id ? extractPtIds([block.id]) : [];
  if (ptIds.length === 0) return false;

  for (const ptId of ptIds) {
    appendInterchangeMaterial(
      state,
      {
        title: 'Question Reference',
        type: 'question_ref',
        content: ptId,
      },
      ptId,
    );
  }

  return true;
};

const blockToMarkdownForInterchange = (block: ContentBlock, state: InterchangeLessonBuildState): string => {
  switch (block.type) {
    case 'h1':
      return `# ${block.text}\n\n`;
    case 'h2':
      return `## ${block.text}\n\n`;
    case 'h3':
      return `### ${block.text}\n\n`;
    case 'h4':
      return `#### ${block.text}\n\n`;
    case 'paragraph':
      return `${block.text}\n\n`;
    case 'blockquote':
      return `${prefixMarkdownLines(block.text, '> ')}\n\n`;
    case 'hr':
      return '---\n\n';
    case 'code':
      return `\`\`\`\n${block.text}\n\`\`\`\n\n`;
    case 'list':
      return `${block.items.map((item, index) => (block.ordered ? `${index + 1}. ${item}` : `- ${item}`)).join('\n')}\n\n`;
    case 'callout': {
      const label =
        block.variant === 'summary' ? 'Summary' : block.variant === 'tip' ? 'Tip' : 'Note';
      const heading = block.title ? `${label}: ${block.title}` : label;
      return `${prefixMarkdownLines(`**${heading}**\n\n${block.text}`, '> ')}\n\n`;
    }
    case 'options':
      return `${formatOptionsAsMarkdownList(block.items)}\n\n`;
    case 'process': {
      const title = block.title ? `### ${block.title}\n\n` : '';
      return `${title}${block.steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}\n\n`;
    }
    case 'accordion': {
      const content =
        typeof block.content === 'string'
          ? block.content
          : block.content.map((child) => blockToMarkdownForInterchange(child, state)).join('');
      const normalizedContent = normalizeMarkdownOutput(content);
      if (!normalizedContent) return '';
      return `#### ${block.title}\n\n${normalizedContent}\n\n`;
    }
    case 'table': {
      const header = `| ${block.headers.map(escapeMarkdownTableCell).join(' | ')} |`;
      const divider = `| ${block.headers.map(() => '---').join(' | ')} |`;
      const rows = block.rows.map((row) => `| ${row.map(escapeMarkdownTableCell).join(' | ')} |`).join('\n');
      return `${header}\n${divider}${rows ? `\n${rows}` : ''}\n\n`;
    }
    case 'breakdown':
      return block.items
        .map((item) => {
          const heading = item.badge ? `#### ${item.title} (${item.badge})` : `#### ${item.title}`;
          return `${heading}\n\n${item.text}\n\n`;
        })
        .join('');
    case 'question-card':
      if (addQuestionReferenceMaterials(block, state)) return '';
      appendInterchangeMaterial(state, {
        title: block.questionType ? `Question Card: ${block.questionType}` : 'Question Card',
        type: 'text',
        content: questionCardToMaterialMarkdown(block),
      });
      return '';
    case 'passage-card':
      appendInterchangeMaterial(state, {
        title: block.title || 'Passage Card',
        type: 'text',
        content: passageCardToMaterialMarkdown(block),
      });
      return '';
    case 'question-passage-card':
      if (addQuestionReferenceMaterials(block, state)) return '';
      appendInterchangeMaterial(state, {
        title: block.passageTitle ? `RC Question: ${block.passageTitle}` : 'RC Question',
        type: 'text',
        content: questionPassageCardToMaterialMarkdown(block),
      });
      return '';
    default:
      return '';
  }
};

const buildInterchangeLessonFromCanonicalLesson = (lesson: CanonicalCourseLesson) => {
  if (lesson.bodyKind === 'markdown' && typeof lesson.content === 'string') {
    return {
      id: lesson.lessonId,
      title: lesson.title,
      content: lesson.content,
      materials: [] as InterchangeCourseMaterial[],
    };
  }

  const state: InterchangeLessonBuildState = {
    materials: [],
    seenQuestionRefs: new Set<string>(),
  };

  const content = Array.isArray(lesson.content)
    ? normalizeMarkdownOutput(lesson.content.map((block) => blockToMarkdownForInterchange(block, state)).join(''))
    : lesson.content;

  return {
    id: lesson.lessonId,
    title: lesson.title,
    content,
    materials: state.materials.map((material, index) => ({
      ...material,
      id: `${lesson.lessonId}--material-${index + 1}`,
    })),
  };
};

interface CSVRow {
  moduleId: string;
  moduleTitle: string;
  unit: string;
  lessonId: string;
  lessonTitle: string;
  content: string;
}

const CSV_HEADER = 'Module ID,Module Title,Unit,Lesson ID,Lesson Title,Content';

const rowsToCSV = (rows: CSVRow[]): string => {
  const lines = [CSV_HEADER];
  for (const r of rows) {
    lines.push([
      escapeCSVCell(r.moduleId),
      escapeCSVCell(r.moduleTitle),
      escapeCSVCell(r.unit),
      escapeCSVCell(r.lessonId),
      escapeCSVCell(r.lessonTitle),
      escapeCSVCell(r.content),
    ].join(','));
  }
  return lines.join('\n');
};

export const generateLessonCSV = (lesson: Lesson): string => {
  return rowsToCSV([{
    moduleId: '',
    moduleTitle: '',
    unit: '',
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    content: lessonToPlainText(lesson),
  }]);
};

export const generateModuleCSV = (module: ModuleData): string => {
  const rows: CSVRow[] = module.lessons.map(lesson => ({
    moduleId: String(module.id),
    moduleTitle: module.title,
    unit: module.unit,
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    content: lessonToPlainText(lesson),
  }));
  return rowsToCSV(rows);
};

export const generateUnitCSV = (unitName: string, modules: ModuleData[]): string => {
  const rows: CSVRow[] = [];
  for (const module of modules) {
    for (const lesson of module.lessons) {
      rows.push({
        moduleId: String(module.id),
        moduleTitle: module.title,
        unit: unitName,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        content: lessonToPlainText(lesson),
      });
    }
  }
  return rowsToCSV(rows);
};

export const generateSectionCSV = (_sectionName: string, modules: ModuleData[]): string => {
  const rows: CSVRow[] = [];
  for (const module of modules) {
    for (const lesson of module.lessons) {
      rows.push({
        moduleId: String(module.id),
        moduleTitle: module.title,
        unit: module.unit,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        content: lessonToPlainText(lesson),
      });
    }
  }
  return rowsToCSV(rows);
};

export const generateCourseCSV = (modules: ModuleData[]): string => {
  const rows: CSVRow[] = [];
  for (const module of modules) {
    for (const lesson of module.lessons) {
      rows.push({
        moduleId: String(module.id),
        moduleTitle: module.title,
        unit: module.unit,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        content: lessonToPlainText(lesson),
      });
    }
  }
  return rowsToCSV(rows);
};

// --- PUBLIC EXPORTS (TEXT/RTF/JSON) ---
export const generateLessonText = (lesson: Lesson): string => {
  return lessonToText(lesson);
};

export const generateModuleText = (module: ModuleData): string => {
  const header = `MODULE ${module.id}: ${module.title}\n${'='.repeat(40)}\n${module.description}\n\n`;
  const lessons = module.lessons.map(lessonToText).join('\n');
  return header + lessons;
};

export const generateUnitText = (unitName: string, modules: ModuleData[]): string => {
  const header = `UNIT: ${unitName}\n${'#'.repeat(60)}\n\n`;
  const content = modules.map(generateModuleText).join('\n\n' + '-'.repeat(40) + '\n\n');
  return header + content;
};

export const generateSectionText = (sectionName: string, modules: ModuleData[]): string => {
  const header = `SECTION: ${sectionName}\n${'#'.repeat(60)}\n\n`;
  const content = modules.map(generateModuleText).join('\n\n' + '-'.repeat(40) + '\n\n');
  return header + content;
};

export const generateCourseText = (modules: ModuleData[]): string => {
  return modules.map(generateModuleText).join('\n\n' + '#'.repeat(60) + '\n\n');
};

export const generateLessonRTF = (lesson: Lesson): string => {
  return rtfHeader + lessonToRTF(lesson) + rtfFooter;
};

export const generateModuleRTF = (module: ModuleData): string => {
  const header = `\\pard\\sa200\\sl276\\slmult1\\qc\\b\\fs48 MODULE ${module.id}: ${escapeRTF(module.title)}\\b0\\par\\fs24 ${escapeRTF(module.description)}\\par\\par\n`;
  const lessons = module.lessons.map(lessonToRTF).join('');
  return rtfHeader + header + lessons + rtfFooter;
};

export const generateUnitRTF = (unitName: string, modules: ModuleData[]): string => {
  const header = `\\pard\\sa200\\sl276\\slmult1\\qc\\b\\fs52 UNIT: ${escapeRTF(unitName)}\\b0\\par\\par\n`;
  const content = modules.map(m => {
    const modHeader = `\\pard\\sa200\\sl276\\slmult1\\b\\fs40 MODULE ${m.id}: ${escapeRTF(m.title)}\\b0\\par\n`;
    return modHeader + m.lessons.map(lessonToRTF).join('');
  }).join('');
  return rtfHeader + header + content + rtfFooter;
};

export const generateSectionRTF = (sectionName: string, modules: ModuleData[]): string => {
  const header = `\\pard\\sa200\\sl276\\slmult1\\qc\\b\\fs56 SECTION: ${escapeRTF(sectionName)}\\b0\\par\\par\n`;
  const content = modules.map(m => {
    const modHeader = `\\pard\\sa200\\sl276\\slmult1\\b\\fs40 MODULE ${m.id}: ${escapeRTF(m.title)}\\b0\\par\n`;
    return modHeader + m.lessons.map(lessonToRTF).join('');
  }).join('');
  return rtfHeader + header + content + rtfFooter;
};

export const generateCourseRTF = (modules: ModuleData[]): string => {
  const header = `\\pard\\sa200\\sl276\\slmult1\\qc\\b\\fs60 LSAT MASTERY COURSE\\b0\\par\\par\n`;
  const content = modules.map(m => {
    const modHeader = `\\pard\\sa200\\sl276\\slmult1\\b\\fs40 MODULE ${m.id}: ${escapeRTF(m.title)}\\b0\\par\n`;
    return modHeader + m.lessons.map(lessonToRTF).join('');
  }).join('');
  return rtfHeader + header + content + rtfFooter;
};

export const generateLessonJSON = (lesson: Lesson): string => {
  return JSON.stringify(lesson, null, 2);
};

export const generateModuleJSON = (module: ModuleData): string => {
  return JSON.stringify(module, null, 2);
};

export const generateUnitJSON = (unitName: string, modules: ModuleData[]): string => {
  return JSON.stringify({ unit: unitName, modules }, null, 2);
};

export const generateSectionJSON = (sectionName: string, modules: ModuleData[]): string => {
  return JSON.stringify({ section: sectionName, modules }, null, 2);
};

export const generateCourseJSON = (modules: ModuleData[]): string => {
  return JSON.stringify(modules, null, 2);
};

interface OutlineExportLesson {
  lessonId: string;
  order: number;
  title: string;
  routePath: string;
}

interface OutlineExportModule {
  routeModuleId: number;
  sourceModuleId: number;
  title: string;
  category: string;
  unit: string;
  description: string;
  lessons: OutlineExportLesson[];
}

interface OutlineExportPayload {
  exportVersion: '1.0';
  exportType: 'curriculum-outline';
  generatedAt: string;
  scope: ExportScopeSummary;
  modules: OutlineExportModule[];
}

interface FullCourseExportLesson extends OutlineExportLesson {
  bodyKind: 'markdown' | 'blocks';
  content: string | ContentBlock[];
  plainText: string;
}

interface FullCourseExportModule extends Omit<OutlineExportModule, 'lessons'> {
  lessons: FullCourseExportLesson[];
}

interface FullCourseExportPayload {
  exportVersion: '1.0';
  exportType: 'full-course';
  generatedAt: string;
  scope: ExportScopeSummary;
  modules: FullCourseExportModule[];
}

const getSectionTitleForCategory = (category: string): string => {
  if (category === 'LR') return 'Logical Reasoning';
  if (category === 'RC') return 'Reading Comprehension';
  return 'Advanced Passages';
};

const buildExportScopeSummary = (modules: ModuleData[]): ExportScopeSummary => ({
  selectedModuleIds: modules.map((module) => module.id),
  selectedLessonCount: modules.reduce((count, module) => count + module.lessons.length, 0),
});

const buildOutlineExportModules = (modules: ModuleData[]): OutlineExportModule[] =>
  modules.map((module) => ({
    routeModuleId: module.id,
    sourceModuleId: getSourceModuleIdForRouteModuleId(module.id),
    title: module.title,
    category: module.category,
    unit: module.unit,
    description: module.description,
    lessons: module.lessons.map((lesson, index) => ({
      lessonId: lesson.id,
      order: index + 1,
      title: lesson.title,
      routePath: `/module/${module.id}/lesson/${lesson.id}`,
    })),
  }));

const buildCurriculumOutlinePayload = (modules: ModuleData[]): OutlineExportPayload => ({
  exportVersion: '1.0',
  exportType: 'curriculum-outline',
  generatedAt: new Date().toISOString(),
  scope: buildExportScopeSummary(modules),
  modules: buildOutlineExportModules(modules),
});

const buildFullCourseExportPayload = (modules: ModuleData[]): FullCourseExportPayload => ({
  exportVersion: '1.0',
  exportType: 'full-course',
  generatedAt: new Date().toISOString(),
  scope: buildExportScopeSummary(modules),
  modules: buildOutlineExportModules(modules).map((module) => {
    const sourceModule = modules.find((item) => item.id === module.routeModuleId)!;
    return {
      ...module,
      lessons: sourceModule.lessons.map((lesson, index) => ({
        lessonId: lesson.id,
        order: index + 1,
        title: lesson.title,
        routePath: `/module/${sourceModule.id}/lesson/${lesson.id}`,
        bodyKind: typeof lesson.content === 'string' ? 'markdown' : 'blocks',
        content: lesson.content,
        plainText: lessonToPlainText(lesson),
      })),
    };
  }),
});

export const buildCanonicalCoursePayload = (modules: ModuleData[]): CanonicalCoursePayload => ({
  exportVersion: '1.0',
  exportType: 'canonical-course',
  generatedAt: new Date().toISOString(),
  scope: buildExportScopeSummary(modules),
  modules: modules.map<CanonicalCourseModule>((module) => ({
    routeModuleId: module.id,
    sourceModuleId: getSourceModuleIdForRouteModuleId(module.id),
    title: module.title,
    category: module.category,
    unit: module.unit,
    description: module.description,
    lessons: module.lessons.map((lesson, index) => ({
      lessonId: lesson.id,
      order: index + 1,
      title: lesson.title,
      routePath: `/module/${module.id}/lesson/${lesson.id}`,
      bodyKind: typeof lesson.content === 'string' ? 'markdown' : 'blocks',
      content: lesson.content,
      ...(getCanonicalQuestionPolicy(module.id, lesson)
        ? { questionPolicy: getCanonicalQuestionPolicy(module.id, lesson) }
        : {}),
    })),
  })),
});

export const buildInterchangeCoursePayload = (canonicalPayload: CanonicalCoursePayload): InterchangeCourse =>
  canonicalPayload.modules.map((module) => ({
    id: String(module.routeModuleId),
    title: module.title,
    description: module.description,
    lessons: module.lessons.map((lesson) => buildInterchangeLessonFromCanonicalLesson(lesson)),
  }));

const groupModulesBySectionAndUnit = <T extends { category: string; unit: string }>(modules: T[]) => {
  const sectionOrder = ['Logical Reasoning', 'Reading Comprehension', 'Advanced Passages'];
  const grouped = new Map<string, Map<string, T[]>>();

  for (const module of modules) {
    const section = getSectionTitleForCategory(module.category);
    const sectionMap = grouped.get(section) ?? new Map<string, T[]>();
    sectionMap.set(module.unit, [...(sectionMap.get(module.unit) ?? []), module]);
    grouped.set(section, sectionMap);
  }

  return sectionOrder
    .filter((section) => grouped.has(section))
    .map((section) => ({
      section,
      units: Array.from((grouped.get(section) ?? new Map()).entries()).map(([unit, items]) => ({ unit, modules: items })),
    }));
};

const buildOutlineText = (payload: OutlineExportPayload): string => {
  const lines = ['LSAT MASTERY COURSE CURRICULUM OUTLINE', '='.repeat(40), ''];
  for (const section of groupModulesBySectionAndUnit(payload.modules)) {
    lines.push(`SECTION: ${section.section}`, '#'.repeat(50), '');
    for (const unit of section.units) {
      lines.push(`UNIT: ${unit.unit}`, '');
      for (const module of unit.modules) {
        lines.push(`MODULE ${module.routeModuleId}: ${module.title}`);
        for (const lesson of module.lessons) {
          lines.push(`  ${lesson.order}. ${lesson.title}`);
        }
        lines.push('');
      }
    }
  }
  return lines.join('\n').trim();
};

const buildOutlineRTF = (payload: OutlineExportPayload): string => {
  const parts = [
    '\\pard\\sa200\\sl276\\slmult1\\qc\\b\\fs56 LSAT MASTERY COURSE CURRICULUM OUTLINE\\b0\\par\\par\n',
  ];

  for (const section of groupModulesBySectionAndUnit(payload.modules)) {
    parts.push(`\\pard\\sa200\\sl276\\slmult1\\b\\fs40 ${escapeRTF(section.section)}\\b0\\par\\par\n`);
    for (const unit of section.units) {
      parts.push(`\\pard\\sa200\\sl276\\slmult1\\b\\fs30 ${escapeRTF(unit.unit)}\\b0\\par\n`);
      for (const module of unit.modules) {
        parts.push(`\\pard\\sa200\\sl276\\slmult1\\b MODULE ${module.routeModuleId}: ${escapeRTF(module.title)}\\b0\\par\n`);
        for (const lesson of module.lessons) {
          parts.push(`\\pard\\li720\\sa200\\sl276\\slmult1 ${lesson.order}. ${escapeRTF(lesson.title)}\\par\n`);
        }
        parts.push('\\par\n');
      }
    }
  }

  return rtfHeader + parts.join('') + rtfFooter;
};

const buildOutlineCSV = (payload: OutlineExportPayload): string => {
  const header = 'Section,Unit,Route Module ID,Source Module ID,Module Title,Lesson Order,Lesson ID,Lesson Title,Route Path';
  const lines = [header];

  for (const module of payload.modules) {
    const section = getSectionTitleForCategory(module.category);
    for (const lesson of module.lessons) {
      lines.push([
        escapeCSVCell(section),
        escapeCSVCell(module.unit),
        escapeCSVCell(String(module.routeModuleId)),
        escapeCSVCell(String(module.sourceModuleId)),
        escapeCSVCell(module.title),
        escapeCSVCell(String(lesson.order)),
        escapeCSVCell(lesson.lessonId),
        escapeCSVCell(lesson.title),
        escapeCSVCell(lesson.routePath),
      ].join(','));
    }
  }

  return lines.join('\n');
};

const generateOutlinePDF = (payload: OutlineExportPayload, filename: string) => {
  const doc = new jsPDF();
  cursorY = PAGE_MARGIN_TOP;
  addWrappedText(doc, 'LSAT Mastery Course Curriculum Outline', { size: 24, style: 'bold', align: 'center', bottomSpacing: 10 });

  for (const section of groupModulesBySectionAndUnit(payload.modules)) {
    addWrappedText(doc, section.section, { size: 18, style: 'bold', bottomSpacing: 6 });
    for (const unit of section.units) {
      addWrappedText(doc, unit.unit, { size: 14, style: 'bold', bottomSpacing: 4 });
      for (const module of unit.modules) {
        addWrappedText(doc, `Module ${module.routeModuleId}: ${module.title}`, { size: 12, style: 'bold', bottomSpacing: 3 });
        for (const lesson of module.lessons) {
          addWrappedText(doc, `${lesson.order}. ${lesson.title}`, { size: 11, indent: 5, bottomSpacing: 2 });
        }
        cursorY += 2;
      }
      cursorY += 4;
    }
    cursorY += 4;
  }

  doc.save(filename);
};

export const generateCurriculumOutlineText = (modules: ModuleData[]): string => {
  return buildOutlineText(buildCurriculumOutlinePayload(modules));
};

export const generateCurriculumOutlineRTF = (modules: ModuleData[]): string => {
  return buildOutlineRTF(buildCurriculumOutlinePayload(modules));
};

export const generateCurriculumOutlineJSON = (modules: ModuleData[]): string => {
  return JSON.stringify(buildCurriculumOutlinePayload(modules), null, 2);
};

export const generateCurriculumOutlineCSV = (modules: ModuleData[]): string => {
  return buildOutlineCSV(buildCurriculumOutlinePayload(modules));
};

export const generateCurriculumOutlinePDF = (modules: ModuleData[], filename = 'LSAT_Mastery_curriculum_outline.pdf') => {
  generateOutlinePDF(buildCurriculumOutlinePayload(modules), filename);
};

export const generateFullCourseText = (modules: ModuleData[]): string => {
  return generateCourseText(modules);
};

export const generateFullCourseRTF = (modules: ModuleData[]): string => {
  return generateCourseRTF(modules);
};

export const generateFullCourseJSON = (modules: ModuleData[]): string => {
  return JSON.stringify(buildFullCourseExportPayload(modules), null, 2);
};

export const generateCanonicalCourseJSON = (modules: ModuleData[]): string => {
  return JSON.stringify(buildCanonicalCoursePayload(modules), null, 2);
};

export const generateInterchangeCourseJSON = (modules: ModuleData[]): string => {
  return JSON.stringify(buildInterchangeCoursePayload(buildCanonicalCoursePayload(modules)), null, 2);
};

export const generateFullCourseCSV = (modules: ModuleData[]): string => {
  const header = 'Section,Unit,Route Module ID,Source Module ID,Module Title,Lesson Order,Lesson ID,Lesson Title,Body Kind,Content';
  const lines = [header];
  const payload = buildFullCourseExportPayload(modules);

  for (const module of payload.modules) {
    const section = getSectionTitleForCategory(module.category);
    for (const lesson of module.lessons) {
      lines.push([
        escapeCSVCell(section),
        escapeCSVCell(module.unit),
        escapeCSVCell(String(module.routeModuleId)),
        escapeCSVCell(String(module.sourceModuleId)),
        escapeCSVCell(module.title),
        escapeCSVCell(String(lesson.order)),
        escapeCSVCell(lesson.lessonId),
        escapeCSVCell(lesson.title),
        escapeCSVCell(lesson.bodyKind),
        escapeCSVCell(lesson.plainText),
      ].join(','));
    }
  }

  return lines.join('\n');
};

export const generateFullCoursePDF = (modules: ModuleData[], filename = 'LSAT_Mastery_full_course.pdf') => {
  generateCoursePDF(modules, filename);
};
