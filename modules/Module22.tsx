import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module22/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module22/Lesson2_StepByStepApproach';
import { Lesson3_PatternRecognition } from './module22/Lesson3_PatternRecognition';
import { Lesson4_TrapAnswerTypes } from './module22/Lesson4_TrapAnswerTypes';

export const Module22: ModuleData = {
  id: 22,
  title: "RC: Inference",
  category: "RC",
  unit: "Unit 11: Extending the Reasoning",
  description: "Identify a statement that is very likely to be true based on the information provided in the passage, using strict evidential backing.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach,
    Lesson3_PatternRecognition,
    Lesson4_TrapAnswerTypes
  ]
};
