import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module18/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module18/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module18/Lesson3_FieldGuide';
import { Lesson4 } from './module18/Lesson4';
import { Lesson5 } from './module18/Lesson5';
import { Lesson6 } from './module18/Lesson6';
import { Lesson_AdvancedConcepts } from './module18/Lesson_AdvancedConcepts';
import { Lesson_Advanced1 } from './module18/Lesson_Advanced1';
import { Lesson_Advanced2 } from './module18/Lesson_Advanced2';
import { Lesson_Advanced3 } from './module18/Lesson_Advanced3';

export const Module18: ModuleData = {
  id: 18,
  title: 'Must Be False',
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
  ],
};
