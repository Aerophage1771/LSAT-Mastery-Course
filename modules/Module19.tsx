import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module19/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module19/Lesson2_StepByStepGuide';
import { Lesson3_Drill_NumbersVsPercentages } from './module19/Lesson3_Drill_NumbersVsPercentages';
import { Lesson4_Drill_SelectionBias } from './module19/Lesson4_Drill_SelectionBias';
import { Lesson5_Drill_CausalMechanisms } from './module19/Lesson5_Drill_CausalMechanisms';
import { Lesson6_Guide_HardestParadox } from './module19/Lesson6_Guide_HardestParadox';
import { Lesson7_Drill_HiddenDistinction } from './module19/Lesson7_Drill_HiddenDistinction';
import { Lesson8_Drill_CounterintuitiveCausalWeb } from './module19/Lesson8_Drill_CounterintuitiveCausalWeb';
import { Lesson9_Drill_FlawedLogicExcept } from './module19/Lesson9_Drill_FlawedLogicExcept';
import { Lesson10_ReferenceGuide } from './module19/Lesson10_ReferenceGuide';

export const Module19: ModuleData = {
  id: 19,
  title: "Paradox / Explain",
  category: "LR",
  unit: "Unit 6: Resolution",
  description: "Find the new fact that makes two clashing statements make sense.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_Drill_NumbersVsPercentages,
    Lesson4_Drill_SelectionBias,
    Lesson5_Drill_CausalMechanisms,
    Lesson6_Guide_HardestParadox,
    Lesson7_Drill_HiddenDistinction,
    Lesson8_Drill_CounterintuitiveCausalWeb,
    Lesson9_Drill_FlawedLogicExcept,
    Lesson10_ReferenceGuide
  ]
};