import { ModuleData } from '../types';
import { Lesson1_PassageAnalysis } from './module41/Lesson1_PassageAnalysis';
import { Lesson2_Question14 } from './module41/Lesson2_Question14';
import { Lesson3_Question15 } from './module41/Lesson3_Question15';
import { Lesson4_Question16 } from './module41/Lesson4_Question16';
import { Lesson5_Question17 } from './module41/Lesson5_Question17';
import { Lesson6_Question18 } from './module41/Lesson6_Question18';
import { Lesson7_Question19 } from './module41/Lesson7_Question19';
import { Lesson8_Question20 } from './module41/Lesson8_Question20';
import { Lesson9_Question21 } from './module41/Lesson9_Question21';

export const Module41: ModuleData = {
  id: 41,
  title: "RC: Practice Passage 3",
  category: "RC",
  unit: "Unit 12: Sample Passages",
  description: "A breakdown of a humanities passage exploring how cultural identities are constructed, featuring analysis of main idea, inference, and author attitude.",
  lessons: [
    Lesson1_PassageAnalysis,
    Lesson2_Question14,
    Lesson3_Question15,
    Lesson4_Question16,
    Lesson5_Question17,
    Lesson6_Question18,
    Lesson7_Question19,
    Lesson8_Question20,
    Lesson9_Question21,
  ]
};
