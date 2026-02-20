/**
 * Macro format config: 3–4 format IDs that get full design systems (lesson shell + QuestionCard variant).
 * Used by Module 100 and LessonViewer to decide when to render QuestionCard instead of ContentBox.
 */

export type QuestionCardVariant = 'minimal' | 'graphic' | 'editorial';

export interface MacroConfigEntry {
  lessonThemeId: number;
  questionCardVariant: QuestionCardVariant;
  name: string;
}

/** Format IDs that use full design system (lesson theme + QuestionCard). */
export const MACRO_FORMAT_IDS: number[] = [1, 2, 3];

/** Map formatId → lesson shell theme id and question card variant. Theme ids 1–3 = Current, Tight, Generous (from lessonFormatThemes). */
export const MACRO_FORMAT_CONFIG: Record<number, MacroConfigEntry> = {
  1: { lessonThemeId: 1, questionCardVariant: 'minimal', name: 'Minimal' },
  2: { lessonThemeId: 2, questionCardVariant: 'graphic', name: 'Graphic' },
  3: { lessonThemeId: 3, questionCardVariant: 'editorial', name: 'Editorial' },
};

export function isMacroFormat(formatId: number | undefined | null): boolean {
  if (formatId == null || Number.isNaN(formatId)) return false;
  return MACRO_FORMAT_IDS.includes(formatId);
}

export function getMacroConfig(formatId: number): MacroConfigEntry | undefined {
  return MACRO_FORMAT_CONFIG[formatId];
}
