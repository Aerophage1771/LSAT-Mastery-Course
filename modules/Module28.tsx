import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module28/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module28/Lesson2_StepByStepApproach';

export const Module28: ModuleData = {
  id: 28,
  title: "RC: Complete the Passage",
  category: "RC",
  unit: "Unit 11: Extending the Reasoning",
  description: "Select the sentence that would most logically conclude the passage or a specific paragraph.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach
  ]
};
