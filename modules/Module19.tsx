import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module19/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module19/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module19/Lesson3_FieldGuide';
import { Lesson4_Drill_NumbersVsPercentages } from './module19/Lesson4_Drill_NumbersVsPercentages';
import { Lesson5_Drill_SelectionBias } from './module19/Lesson5_Drill_SelectionBias';
import { Lesson6_Drill_CausalMechanisms } from './module19/Lesson6_Drill_CausalMechanisms';
import { Lesson7_Guide_HardestParadox } from './module19/Lesson7_Guide_HardestParadox';
import { Lesson8_Drill_HiddenDistinction } from './module19/Lesson8_Drill_HiddenDistinction';
import { Lesson9_Drill_CounterintuitiveCausalWeb } from './module19/Lesson9_Drill_CounterintuitiveCausalWeb';
import { Lesson10_Drill_FlawedLogicExcept } from './module19/Lesson10_Drill_FlawedLogicExcept';

export const Module19: ModuleData = {
  id: 19,
  title: "Paradox / Explain",
  category: "LR",
  unit: "Unit 6: Resolution",
  description: "Find the new fact that makes two clashing statements make sense.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_FieldGuide,
    Lesson4_Drill_NumbersVsPercentages,
    Lesson5_Drill_SelectionBias,
    Lesson6_Drill_CausalMechanisms,
    Lesson7_Guide_HardestParadox,
    Lesson8_Drill_HiddenDistinction,
    Lesson9_Drill_CounterintuitiveCausalWeb,
    Lesson10_Drill_FlawedLogicExcept
  ]
};
