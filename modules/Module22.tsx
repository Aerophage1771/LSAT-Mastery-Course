
import { ModuleData } from '../types';
import { Lesson_Intro } from './module22/Lesson_Intro';
import { Lesson_IntroDeep } from './module22/Lesson_IntroDeep';
import { Lesson1_Foundations } from './module22/Lesson1_Foundations';
import { Lesson2_Contrapositive } from './module22/Lesson2_Contrapositive';
import { Lesson3_Fallacies } from './module22/Lesson3_Fallacies';
import { Lesson4_Quantifiers } from './module22/Lesson4_Quantifiers';
import { Lesson5_ComplexStructures } from './module22/Lesson5_ComplexStructures';
import { Lesson6_Nuance } from './module22/Lesson6_Nuance';
import { Lesson_Summary } from './module22/Lesson_ConciseGuide';
import { Lesson_ReferenceGuide } from './module22/Lesson_ReferenceGuide';

export const Module22: ModuleData = {
  id: 22,
  title: "Conditional Reasoning",
  category: "LR",
  unit: "Unit 8: Conditional Reasoning",
  description: "This module strengthens the essential LSAT reasoning skills: translating complex statements into diagrams, deriving sound conclusions, and recognizing flawed arguments.",
  lessons: [
    Lesson_Intro,
    Lesson_IntroDeep,
    Lesson1_Foundations,
    Lesson2_Contrapositive,
    Lesson3_Fallacies,
    Lesson4_Quantifiers,
    Lesson5_ComplexStructures,
    Lesson6_Nuance,
    Lesson_Summary,
    Lesson_ReferenceGuide,
  ]
};
