import { ModuleData } from '../types';
import { Lesson1_PassageAnalysis } from './module42/Lesson1_PassageAnalysis';
import { Lesson2_Question8 } from './module42/Lesson2_Question8';
import { Lesson3_Question10 } from './module42/Lesson3_Question10';
import { Lesson4_Question11 } from './module42/Lesson4_Question11';
import { Lesson5_Question12 } from './module42/Lesson5_Question12';
import { Lesson6_Question13 } from './module42/Lesson6_Question13';
import { Lesson7_Question14 } from './module42/Lesson7_Question14';
import { Lesson8_Question15 } from './module42/Lesson8_Question15';

export const Module42: ModuleData = {
  id: 42,
  title: "Practice Passage 1: Obasan",
  category: "RC",
  unit: "Unit 12: Sample Passages",
  description: "A complete breakdown of a literary criticism passage, analyzing structure, symbolism, and question strategies.",
  lessons: [
    Lesson1_PassageAnalysis,
    Lesson2_Question8,
    Lesson3_Question10,
    Lesson4_Question11,
    Lesson5_Question12,
    Lesson6_Question13,
    Lesson7_Question14,
    Lesson8_Question15,
  ]
};
