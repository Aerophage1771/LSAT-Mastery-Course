
import { ModuleData } from '../types';
import { Lesson1_Intro } from './module55/Lesson_Intro';
import { Lesson2_Foundations } from './module55/Lesson1_Foundations';
import { Lesson3_Contrapositive } from './module55/Lesson2_Contrapositive';
import { Lesson4_Fallacies } from './module55/Lesson3_Fallacies';
import { Lesson6_Quantifiers } from './module55/Lesson4_Quantifiers';
import { Lesson5_ComplexStructures } from './module55/Lesson5_ComplexStructures';
import { Lesson7_Nuance } from './module55/Lesson6_Nuance';
import { Lesson8_Summary } from './module55/Lesson_ConciseGuide';

export const Module55: ModuleData = {
  id: 55,
  title: "Conditional Reasoning",
  category: "LR",
  unit: "Unit 8: Conditional Reasoning",
  description: "This module strengthens the essential LSAT reasoning skills: translating complex statements into diagrams, deriving sound conclusions, and recognizing flawed arguments.",
  lessons: [
    Lesson1_Intro,
    Lesson2_Foundations,
    Lesson3_Contrapositive,
    Lesson4_Fallacies,
    Lesson5_ComplexStructures,
    Lesson6_Quantifiers,
    Lesson7_Nuance,
    Lesson8_Summary,
  ]
};
