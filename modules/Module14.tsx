import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module14/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module14/Lesson2_StepByStepGuide';
import { Lesson3_Drill_ExperimentGeneralization } from './module14/Lesson3_Drill_ExperimentGeneralization';
import { Lesson4_Drill_ContextualValue } from './module14/Lesson4_Drill_ContextualValue';
import { Lesson5_Drill_UnintendedConsequences } from './module14/Lesson5_Drill_UnintendedConsequences';
import { Lesson6_Drill_MotivatedBlindness } from './module14/Lesson6_Drill_MotivatedBlindness';

export const Module14: ModuleData = {
  id: 14,
  title: "Principle - Generalization",
  category: "LR",
  unit: "Unit 4: Principle",
  description: "Find the general rule or \"moral of the story\" that the specific situation in the stimulus best illustrates.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_Drill_ExperimentGeneralization,
    Lesson4_Drill_ContextualValue,
    Lesson5_Drill_UnintendedConsequences,
    Lesson6_Drill_MotivatedBlindness
  ]
};
