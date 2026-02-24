import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module18/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module18/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module18/Lesson3_FieldGuide';
import { Lesson4_Drill_ConditionalBreakers } from './module18/Lesson4_Drill_ConditionalBreakers';
import { Lesson5_Drill_QuantifierClashes } from './module18/Lesson5_Drill_QuantifierClashes';
import { Lesson6_Drill_ExclusiveBoundaries } from './module18/Lesson6_Drill_ExclusiveBoundaries';

export const Module18: ModuleData = {
  id: 18,
  title: "Must Be False",
  category: "LR",
  unit: "Unit 5: Inference",
  description: "Identify the answer choice that is logically proven impossible by the information provided in the stimulus.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_FieldGuide,
    Lesson4_Drill_ConditionalBreakers,
    Lesson5_Drill_QuantifierClashes,
    Lesson6_Drill_ExclusiveBoundaries
  ]
};
