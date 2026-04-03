import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module25/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module25/Lesson2_StepByStepApproach';
import { Lesson3_PatternRecognition } from './module25/Lesson3_PatternRecognition';
import { Lesson4_TrapAnswerTypes } from './module25/Lesson4_TrapAnswerTypes';

export const Module25: ModuleData = {
  id: 25,
  title: "Inference",
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
