
import { ModuleData } from '../types';
import { Lesson1_PassageAnalysis } from './module51/Lesson1_PassageAnalysis';
import { Lesson2_Question22 } from './module51/Lesson2_Question22';
import { Lesson3_Question23 } from './module51/Lesson3_Question23';
import { Lesson4_Question24 } from './module51/Lesson4_Question24';
import { Lesson5_Question25 } from './module51/Lesson5_Question25';
import { Lesson6_Question26 } from './module51/Lesson6_Question26';

export const Module51: ModuleData = {
  id: 51,
  title: "Advanced Passage 1: Mathematics as Language",
  category: "RC",
  unit: "Unit 14: Advanced Passages",
  description: "An advanced passage exploring the philosophy of science, questioning whether mathematics is a literal description of reality or a conventional language.",
  lessons: [
    Lesson1_PassageAnalysis,
    Lesson2_Question22,
    Lesson3_Question23,
    Lesson4_Question24,
    Lesson5_Question25,
    Lesson6_Question26,
  ]
};
