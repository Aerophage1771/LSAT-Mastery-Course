import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module33/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module33/Lesson2_StepByStepApproach';
import { Lesson3_PatternRecognition } from './module33/Lesson3_PatternRecognition';

export const Module33: ModuleData = {
  id: 33,
  title: "Passage Principle",
  category: "RC",
  unit: "Unit 11: Extending the Reasoning",
  description: "Identify the underlying rule or generalization that supports an argument, action, or viewpoint within the text.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach,
    Lesson3_PatternRecognition
  ]
};
