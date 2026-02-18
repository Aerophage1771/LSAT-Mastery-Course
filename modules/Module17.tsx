import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module17/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module17/Lesson2_StepByStepGuide';
import { Lesson3_Drill_ConditionalLogic } from './module17/Lesson3_Drill_ConditionalLogic';
import { Lesson4_Drill_Quantifiers } from './module17/Lesson4_Drill_Quantifiers';
import { Lesson5_Drill_NumericalReasoning } from './module17/Lesson5_Drill_NumericalReasoning';
import { Lesson6_Advanced_HighDifficultyAnalysis } from './module17/Lesson6_Advanced_HighDifficultyAnalysis';
import { Lesson7_Drill_HighCognitiveLoad } from './module17/Lesson7_Drill_HighCognitiveLoad';
import { Lesson8_Drill_MultiStepInference } from './module17/Lesson8_Drill_MultiStepInference';
import { Lesson9_Drill_InferencesFromDisparity } from './module17/Lesson9_Drill_InferencesFromDisparity';
import { Lesson10_Drill_PrecisionInCausality } from './module17/Lesson10_Drill_PrecisionInCausality';

export const Module17: ModuleData = {
  id: 17,
  title: "Must Be True",
  category: "LR",
  unit: "Unit 5: Inference",
  description: "Find the statement that the facts in the passage definitely prove.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_Drill_ConditionalLogic,
    Lesson4_Drill_Quantifiers,
    Lesson5_Drill_NumericalReasoning,
    Lesson6_Advanced_HighDifficultyAnalysis,
    Lesson7_Drill_HighCognitiveLoad,
    Lesson8_Drill_MultiStepInference,
    Lesson9_Drill_InferencesFromDisparity,
    Lesson10_Drill_PrecisionInCausality
  ]
};
