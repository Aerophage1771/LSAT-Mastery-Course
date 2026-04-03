import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module6/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module6/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module6/Lesson3_FieldGuide';
import { Lesson4 } from './module6/Lesson4';
import { Lesson5 } from './module6/Lesson5';
import { Lesson6 } from './module6/Lesson6';
import { Lesson7 } from './module6/Lesson7';
import { Lesson_AdvancedConcepts } from './module6/Lesson_AdvancedConcepts';
import { Lesson_Advanced1 } from './module6/Lesson_Advanced1';
import { Lesson_Advanced2 } from './module6/Lesson_Advanced2';
import { Lesson_Advanced3 } from './module6/Lesson_Advanced3';
import { Lesson_ReferenceGuide } from './module6/Lesson_ReferenceGuide';

export const Module6: ModuleData = {
  id: 6,
  title: 'Parallel Flaw',
  category: 'LR',
  description: '',
  unit: '',
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_FieldGuide,
    Lesson4,
    Lesson5,
    Lesson6,
    Lesson7,
    Lesson_AdvancedConcepts,
    Lesson_Advanced1,
    Lesson_Advanced2,
    Lesson_Advanced3,
    Lesson_ReferenceGuide,
  ],
};
