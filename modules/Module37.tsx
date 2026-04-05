import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module37/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module37/Lesson2_StepByStepApproach';

export const Module37: ModuleData = {
  id: 37,
  title: "RC: Title",
  category: "RC",
  unit: "Unit 8: Summarizing the Passage",
  description: "Select the phrase that best summarizes the passage or the relationship between two passages.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach
  ]
};
