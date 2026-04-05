import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module25/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module25/Lesson2_StepByStepApproach';

export const Module25: ModuleData = {
  id: 25,
  title: "RC: Approach",
  category: "RC",
  unit: "Unit 9: Analyzing the Components",
  description: "Describe the author's argumentative strategy or the overall structure of the passage.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach
  ]
};
