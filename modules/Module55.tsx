
import { ModuleData } from '../types';
import { Lesson_Intro } from './module55/Lesson_Intro';
import { Lesson1_Foundations } from './module55/Lesson1_Foundations';
import { Lesson2_Contrapositive } from './module55/Lesson2_Contrapositive';
import { Lesson3_Fallacies } from './module55/Lesson3_Fallacies';
import { Lesson4_Quantifiers } from './module55/Lesson4_Quantifiers';
import { Lesson5_ComplexStructures } from './module55/Lesson5_ComplexStructures';
import { Lesson6_Nuance } from './module55/Lesson6_Nuance';
import { Lesson_Summary } from './module55/Lesson_ConciseGuide';
import { Lesson_ReferenceGuide } from './module55/Lesson_ReferenceGuide';

export const Module55: ModuleData = {
  id: 21,
  title: "Conditional Reasoning",
  category: "LR",
  unit: "Unit 8: Conditional Reasoning",
  description: "This module strengthens the essential LSAT reasoning skills: translating complex statements into diagrams, deriving sound conclusions, and recognizing flawed arguments.",
  lessons: [
    Lesson_Intro,
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
