import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module30/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module30/Lesson2_StepByStepApproach';
import { Lesson3_PatternRecognition } from './module30/Lesson3_PatternRecognition';

export const Module30: ModuleData = {
  id: 30,
  title: "RC: Passage Principle",
  category: "RC",
  unit: "Unit 11: Extending the Reasoning",
  description: "Identify the underlying rule or generalization that supports an argument, action, or viewpoint within the text.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach,
    Lesson3_PatternRecognition
  ]
};
