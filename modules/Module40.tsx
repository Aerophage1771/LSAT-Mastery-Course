import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module40/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module40/Lesson2_StepByStepApproach';

export const Module40: ModuleData = {
  id: 40,
  title: "Title",
  category: "RC",
  unit: "Unit 8: Summarizing the Passage",
  description: "Select the phrase that best summarizes the passage or the relationship between two passages.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach
  ]
};
