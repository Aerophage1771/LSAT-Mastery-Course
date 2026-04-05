import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module24/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module24/Lesson2_StepByStepApproach';

export const Module24: ModuleData = {
  id: 24,
  title: "RC: Application",
  category: "RC",
  unit: "Unit 11: Extending the Reasoning",
  description: "Apply a rule, principle, or theory from the passage to a new, hypothetical situation.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach
  ]
};
