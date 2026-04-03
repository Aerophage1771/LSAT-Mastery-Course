import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module26/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module26/Lesson2_StepByStepApproach';

export const Module26: ModuleData = {
  id: 26,
  title: "Analogy",
  category: "RC",
  unit: "Unit 11: Extending the Reasoning",
  description: "Identify a scenario in the answer choices that mirrors the logic or structure of a situation in the passage.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach
  ]
};
