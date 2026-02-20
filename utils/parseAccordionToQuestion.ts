import type { ContentBlock } from '../types';
import type { QuestionCardQuestion, QuestionCardChoice, ChoiceLetter } from '../types';
import { extractPtIdFromTitle } from './ptId';

const CHOICE_PREFIX_REGEX = /^\(([A-E])\)\s*(.*)$/;
const CORRECT_SUFFIX = /\s*\(Correct\)\s*$/i;

/**
 * Parse accordion content (blockquote + paragraph + options) into a QuestionCardQuestion, or null if not a valid question shape.
 * Used when lesson format is a macro format (1–3) to render QuestionCard instead of ContentBox.
 */
export function parseAccordionToQuestion(
  content: string | ContentBlock[],
  title: string
): QuestionCardQuestion | null {
  if (typeof content === 'string') return null;
  const blocks = content;

  const blockquoteIndex = blocks.findIndex((b): b is ContentBlock & { type: 'blockquote' } => b.type === 'blockquote');
  if (blockquoteIndex === -1) return null;

  const blockquote = blocks[blockquoteIndex];
  if (blockquote.type !== 'blockquote') return null;
  const stimulus = blockquote.text.trim();

  const paragraphIndex = blocks.findIndex(
    (b, i) => i > blockquoteIndex && b.type === 'paragraph'
  );
  const stem = paragraphIndex >= 0 && blocks[paragraphIndex].type === 'paragraph'
    ? (blocks[paragraphIndex] as { type: 'paragraph'; text: string }).text.trim()
    : '';

  const optionsIndex = blocks.findIndex((b): b is ContentBlock & { type: 'options' } => b.type === 'options');
  if (optionsIndex === -1) return null;

  const optionsBlock = blocks[optionsIndex];
  if (optionsBlock.type !== 'options') return null;

  const choices: QuestionCardChoice[] = [];
  let correctAnswer: ChoiceLetter | undefined;

  for (const raw of optionsBlock.items) {
    const match = String(raw).match(CHOICE_PREFIX_REGEX);
    if (!match) continue;
    const letter = match[1] as ChoiceLetter;
    let text = match[2].replace(CORRECT_SUFFIX, '').trim();
    choices.push({ letter, text });

    const wasCorrect = /\(Correct\)\s*$/i.test(String(raw));
    if (wasCorrect) correctAnswer = letter;
  }

  if (choices.length === 0) return null;

  const id = extractPtIdFromTitle(title) ?? title;

  return {
    id,
    stimulus,
    stem,
    choices,
    ...(correctAnswer != null && { correctAnswer }),
  };
}
