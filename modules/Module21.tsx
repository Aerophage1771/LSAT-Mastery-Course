import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module21/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module21/Lesson2_StepByStepApproach';
import { Lesson3_PatternRecognition } from './module21/Lesson3_PatternRecognition';
import { Lesson4_TrapAnswerTypes } from './module21/Lesson4_TrapAnswerTypes';

export const Module21: ModuleData = {
  id: 21,
  title: "RC: Main Idea",
  category: "RC",
  unit: "Unit 8: Summarizing the Passage",
  description: "Identify the central idea of a passage, synthesizing the author's primary conclusion and scope.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach,
    Lesson3_PatternRecognition,
    Lesson4_TrapAnswerTypes
  ]
};
