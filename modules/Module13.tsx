import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module13/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module13/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module13/Lesson3_FieldGuide';
import { Lesson4 } from './module13/Lesson4';
import { Lesson5 } from './module13/Lesson5';
import { Lesson6 } from './module13/Lesson6';
import { Lesson_AdvancedConcepts } from './module13/Lesson_AdvancedConcepts';
import { Lesson_Advanced1 } from './module13/Lesson_Advanced1';
import { Lesson_Advanced2 } from './module13/Lesson_Advanced2';
import { Lesson_Advanced3 } from './module13/Lesson_Advanced3';
import { Lesson_ReferenceGuide } from './module13/Lesson_ReferenceGuide';

export const Module13: ModuleData = {
  id: 13,
  title: 'Principle - Apply',
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
    Lesson_AdvancedConcepts,
    Lesson_Advanced1,
    Lesson_Advanced2,
    Lesson_Advanced3,
    Lesson_ReferenceGuide,
  ],
};
