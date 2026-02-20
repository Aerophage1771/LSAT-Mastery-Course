import type { Lesson } from '../../types';
import { premisesVsConclusionsContent } from '../../content/premisesVsConclusionsContent';
import { getMacroConfig } from '../../constants/macroFormatConfig';

/** Format ID for the single showcase lesson (Graphic format to match reference). */
const FORMAT_SHOWCASE_ID = 2;

/** Module 100 format showcase: one lesson in Graphic format to match reference. */
export const module100Lessons: Lesson[] = [
  {
    id: '100-1',
    title: 'Premises vs. Conclusions',
    content: premisesVsConclusionsContent,
    formatId: FORMAT_SHOWCASE_ID,
  },
];
