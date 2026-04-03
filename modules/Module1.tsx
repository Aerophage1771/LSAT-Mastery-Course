import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module1/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module1/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module1/Lesson3_FieldGuide';
import { Lesson4 } from './module1/Lesson4';
import { Lesson5 } from './module1/Lesson5';
import { Lesson6 } from './module1/Lesson6';
import { Lesson_AdvancedConcepts } from './module1/Lesson_AdvancedConcepts';
import { Lesson_Advanced1 } from './module1/Lesson_Advanced1';
import { Lesson_Advanced2 } from './module1/Lesson_Advanced2';
import { Lesson_Advanced3 } from './module1/Lesson_Advanced3';
import { Lesson_Advanced4 } from './module1/Lesson_Advanced4';
import { Lesson_ReferenceGuide } from './module1/Lesson_ReferenceGuide';

export const Module1: ModuleData = {
  id: 1,
  title: 'Argument Part',
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
    Lesson_Advanced4,
    Lesson_ReferenceGuide,
  ],
};
