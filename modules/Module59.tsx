import { ModuleData } from '../types';
import { Lesson1_FoundationalToolkit } from './module59/Lesson1_FoundationalToolkit';
import { Lesson2_PartVsWhole } from './module59/Lesson2_PartVsWhole';
import { Lesson3_Averages } from './module59/Lesson3_Averages';
import { Lesson4_InvalidMath } from './module59/Lesson4_InvalidMath';
import { Lesson5_GamblersFallacy } from './module59/Lesson5_GamblersFallacy';
import { Lesson6_Conclusion } from './module59/Lesson6_Conclusion';

export const Module59: ModuleData = {
  id: 59,
  title: "LSAT Math",
  category: "LR",
  unit: "Unit 9: LSAT Math",
  description: "A comprehensive framework for mastering quantitative questions within the LSAT Logical Reasoning section. Learn to identify and dismantle the most common logical fallacies involving numbers, percentages, and statistics.",
  lessons: [
    Lesson1_FoundationalToolkit,
    Lesson2_PartVsWhole,
    Lesson3_Averages,
    Lesson4_InvalidMath,
    Lesson5_GamblersFallacy,
    Lesson6_Conclusion
  ]
};