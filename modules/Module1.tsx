import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module1/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module1/Lesson2_StepByStepGuide';
import { Lesson3_CommonRolesAndPatterns } from './module1/Lesson3_CommonRolesAndPatterns';
import { Lesson4_PremisesVsConclusions } from './module1/Lesson4_PremisesVsConclusions';
import { Lesson5_IntermediateConclusion } from './module1/Lesson5_IntermediateConclusion';
import { Lesson6_OpposingViewpoint } from './module1/Lesson6_OpposingViewpoint';
import { Lesson7_AdvancedConcepts } from './module1/Lesson7_AdvancedConcepts';
import { Lesson8_Advanced_Concessions } from './module1/Lesson8_Advanced_Concessions';
import { Lesson9_Advanced_Phenomenon } from './module1/Lesson9_Advanced_Phenomenon';
import { Lesson10_Advanced_Counterfactual } from './module1/Lesson10_Advanced_Counterfactual';
import { Lesson11_Advanced_Context } from './module1/Lesson11_Advanced_Context';
import { Lesson12_ReferenceGuide } from './module1/Lesson12_ReferenceGuide';

export const Module1: ModuleData = {
  id: 1,
  title: "Argument Part",
  category: "LR",
  unit: "Unit 1: Identification",
  description: "Define the specific function a particular sentence serves within the argument (e.g., main conclusion, subsidiary conclusion, premise, counter-premise).",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_CommonRolesAndPatterns,
    Lesson4_PremisesVsConclusions,
    Lesson5_IntermediateConclusion,
    Lesson6_OpposingViewpoint,
    Lesson7_AdvancedConcepts,
    Lesson8_Advanced_Concessions,
    Lesson9_Advanced_Phenomenon,
    Lesson10_Advanced_Counterfactual,
    Lesson11_Advanced_Context,
    Lesson12_ReferenceGuide,
  ]
};
