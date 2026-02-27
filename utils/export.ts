
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ModuleData, ContentBlock, Lesson } from '../types';

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
  formatted = formatted.replace(/\*(.*?)\*\*/g, '\\i $1\\i0 ');
  formatted = formatted.replace(/`(.*?)`/g, '\\f1 $1\\f0 ');
  return formatted;
};

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
       const accContent = typeof block.content === 'string' ? block.content : '(Complex Content)';
       return `[EXPAND: ${block.title}]\n${accContent}\n\n`;
    case 'table': {
        return `[TABLE: ${block.headers.join(' | ')}]\n\n`;
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
       const accText = typeof block.content === 'string' ? block.content : '...';
       return `\\pard\\sa200\\sl276\\slmult1\\b [EXPAND: ${formatInlineRTF(block.title)}]\\b0\\par ${formatInlineRTF(accText)}\\par\n`;
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

export const generateCoursePDF = (modules: ModuleData[]) => {
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

    doc.save('LSAT_Mastery_Course.pdf');
};


// --- CSV HELPERS AND EXPORTS ---

const escapeCSVCell = (value: string): string => {
  const s = String(value ?? '');
  if (/[",\r\n]/.test(s)) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
};

const lessonToPlainText = (lesson: Lesson): string => {
  if (typeof lesson.content === 'string') {
    return lesson.content.trim();
  }
  return lesson.content.map(blockToText).join('').trim();
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