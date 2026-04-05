import { ModuleData } from '../types';
import { Lesson1_PassageAnalysis } from './module42/Lesson1_PassageAnalysis';
import { Lesson2_Question7 } from './module42/Lesson2_Question7';
import { Lesson3_Question8 } from './module42/Lesson3_Question8';
import { Lesson4_Question9 } from './module42/Lesson4_Question9';
import { Lesson5_Question10 } from './module42/Lesson5_Question10';
import { Lesson6_Question11 } from './module42/Lesson6_Question11';
import { Lesson7_Question12 } from './module42/Lesson7_Question12';

export const Module42: ModuleData = {
  id: 42,
  title: "RC: Practice Passage 4",
  category: "RC",
  unit: "Unit 12: Sample Passages",
  description: "A breakdown of an art criticism passage about Woody Allen's films, focusing on the recurring theme of narcissistic artists.",
  lessons: [
    Lesson1_PassageAnalysis,
    Lesson2_Question7,
    Lesson3_Question8,
    Lesson4_Question9,
    Lesson5_Question10,
    Lesson6_Question11,
    Lesson7_Question12,
  ]
};
