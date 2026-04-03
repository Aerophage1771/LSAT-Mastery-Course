import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module27/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module27/Lesson2_StepByStepApproach';

export const Module27: ModuleData = {
  id: 27,
  title: "Application",
  category: "RC",
  unit: "Unit 11: Extending the Reasoning",
  description: "Apply a rule, principle, or theory from the passage to a new, hypothetical situation.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach
  ]
};
