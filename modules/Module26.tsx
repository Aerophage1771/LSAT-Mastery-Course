import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module26/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module26/Lesson2_StepByStepApproach';

export const Module26: ModuleData = {
  id: 26,
  title: "RC: Author Attitude",
  category: "RC",
  unit: "Unit 10: Identifying the Perspectives",
  description: "Identify the author's opinion, tone, or perspective regarding a specific subject. This module transitions from mapping the passage's structure to analyzing the author's voice and subjective positioning within the text.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach
  ]
};
