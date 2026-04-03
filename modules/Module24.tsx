import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module24/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module24/Lesson2_StepByStepApproach';
import { Lesson3_PatternRecognition } from './module24/Lesson3_PatternRecognition';
import { Lesson4_TrapAnswerTypes } from './module24/Lesson4_TrapAnswerTypes';

export const Module24: ModuleData = {
  id: 24,
  title: "Main Idea",
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
