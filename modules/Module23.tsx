import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module23/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module23/Lesson2_StepByStepApproach';

export const Module23: ModuleData = {
  id: 23,
  title: "RC: Analogy",
  category: "RC",
  unit: "Unit 11: Extending the Reasoning",
  description: "Identify a scenario in the answer choices that mirrors the logic or structure of a situation in the passage.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach
  ]
};
