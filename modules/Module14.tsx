import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module14/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module14/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module14/Lesson3_FieldGuide';
import { Lesson4_Drill_ExperimentGeneralization } from './module14/Lesson4_Drill_ExperimentGeneralization';
import { Lesson5_Drill_ContextualValue } from './module14/Lesson5_Drill_ContextualValue';
import { Lesson6_Drill_UnintendedConsequences } from './module14/Lesson6_Drill_UnintendedConsequences';
import { Lesson7_Drill_MotivatedBlindness } from './module14/Lesson7_Drill_MotivatedBlindness';

export const Module14: ModuleData = {
  id: 14,
  title: "Principle - Generalization",
  category: "LR",
  unit: "Unit 4: Principle",
  description: "Find the general rule or \"moral of the story\" that the specific situation in the stimulus best illustrates.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_FieldGuide,
    Lesson4_Drill_ExperimentGeneralization,
    Lesson5_Drill_ContextualValue,
    Lesson6_Drill_UnintendedConsequences,
    Lesson7_Drill_MotivatedBlindness
  ]
};
