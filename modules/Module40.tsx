import { ModuleData } from '../types';
import { Lesson1_PassageAnalysis } from './module40/Lesson1_PassageAnalysis';
import { Lesson2_Question6 } from './module40/Lesson2_Question6';
import { Lesson3_Question7 } from './module40/Lesson3_Question7';
import { Lesson4_Question8 } from './module40/Lesson4_Question8';
import { Lesson5_Question9 } from './module40/Lesson5_Question9';
import { Lesson6_Question10 } from './module40/Lesson6_Question10';
import { Lesson7_Question11 } from './module40/Lesson7_Question11';
import { Lesson8_Question12 } from './module40/Lesson8_Question12';
import { Lesson9_Question13 } from './module40/Lesson9_Question13';

export const Module40: ModuleData = {
  id: 40,
  title: "RC: Practice Passage 2",
  category: "RC",
  unit: "Unit 12: Sample Passages",
  description: "A complete breakdown of a persuasive essay on bankruptcy law, analyzing argument structure, author attitude, and weaken strategies.",
  lessons: [
    Lesson1_PassageAnalysis,
    Lesson2_Question6,
    Lesson3_Question7,
    Lesson4_Question8,
    Lesson5_Question9,
    Lesson6_Question10,
    Lesson7_Question11,
    Lesson8_Question12,
    Lesson9_Question13,
  ]
};
