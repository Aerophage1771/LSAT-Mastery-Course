import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module34/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module34/Lesson2_StepByStepApproach';

export const Module34: ModuleData = {
  id: 34,
  title: "Phrase Meaning",
  category: "RC",
  unit: "Unit 9: Analyzing the Components",
  description: "Identify the specific definition of a word or phrase based on its immediate context.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach
  ]
};
