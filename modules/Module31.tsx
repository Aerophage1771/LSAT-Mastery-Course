import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module31/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module31/Lesson2_StepByStepApproach';

export const Module31: ModuleData = {
  id: 31,
  title: "Complete the Passage",
  category: "RC",
  unit: "Unit 11: Extending the Reasoning",
  description: "Select the sentence that would most logically conclude the passage or a specific paragraph.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach
  ]
};
