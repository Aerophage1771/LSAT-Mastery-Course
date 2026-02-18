import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module7/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module7/Lesson2_StepByStepGuide';
import { Lesson3_Drill_TheMissingBaseline } from './module7/Lesson3_Drill_TheMissingBaseline';
import { Lesson4_Drill_UnrepresentativeSamples } from './module7/Lesson4_Drill_UnrepresentativeSamples';
import { Lesson5_Drill_RankVsRawNumber } from './module7/Lesson5_Drill_RankVsRawNumber';

export const Module7: ModuleData = {
  id: 7,
  title: "Evaluate the Argument",
  category: "LR",
  unit: "Unit 3: Evaluation",
  description: "Find the one question that can prove an argument right or wrong.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_Drill_TheMissingBaseline,
    Lesson4_Drill_UnrepresentativeSamples,
    Lesson5_Drill_RankVsRawNumber
  ]
};
