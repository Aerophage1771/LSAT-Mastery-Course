import type { ContentBlock } from '../types';
import type { ChoiceLetter } from '../types';

const CHOICE_PREFIX_REGEX = /^\(([A-E])\)\s*(.*)$/;

export interface ChoiceWithExplanation {
  letter: ChoiceLetter;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface QuestionAnalysisData {
  analysisSteps: string[];
  choicesWithExplanations: ChoiceWithExplanation[];
}

/**
 * Given content blocks and the index of an accordion (question) block, find the next
 * process block (for analysis steps) and breakdown block (for choice explanations).
 * Maps breakdown items to choices by letter (A–E).
 */
export function getBreakdownForQuestion(
  content: ContentBlock[],
  accordionIndex: number,
  choices: { letter: ChoiceLetter; text: string }[],
  correctAnswer: ChoiceLetter | undefined
): QuestionAnalysisData {
  const analysisSteps: string[] = [];
  const letterToExplanation = new Map<ChoiceLetter, string>();

  for (let i = accordionIndex + 1; i < content.length; i++) {
    const block = content[i];
    if (block.type === 'process' && block.steps?.length) {
      analysisSteps.push(...block.steps);
      break;
    }
    if (block.type === 'breakdown' && block.items?.length) {
      for (const item of block.items) {
        const match = String(item.title).trim().match(CHOICE_PREFIX_REGEX);
        if (match) {
          const letter = match[1] as ChoiceLetter;
          letterToExplanation.set(letter, item.text?.trim() ?? '');
        }
      }
      break;
    }
  }

  const choicesWithExplanations: ChoiceWithExplanation[] = choices.map((c) => ({
    letter: c.letter,
    text: c.text,
    isCorrect: correctAnswer === c.letter,
    explanation: letterToExplanation.get(c.letter),
  }));

  return { analysisSteps, choicesWithExplanations };
}
