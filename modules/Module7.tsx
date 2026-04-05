import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module7/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module7/Lesson2_StepByStepGuide';
import { Lesson3_CommonEvaluationTargets } from './module7/Lesson3_CommonEvaluationTargets';
import { Lesson3_Drill_TheMissingBaseline } from './module7/Lesson3_Drill_TheMissingBaseline';
import { Lesson4_Drill_UnrepresentativeSamples } from './module7/Lesson4_Drill_UnrepresentativeSamples';
import { Lesson6_Drill_CausalClaim } from './module7/Lesson6_Drill_CausalClaim';
import { Lesson7_Drill_Analogy } from './module7/Lesson7_Drill_Analogy';
import { Lesson8_Drill_Feasibility } from './module7/Lesson8_Drill_Feasibility';
import { Lesson5_Drill_RankVsRawNumber } from './module7/Lesson5_Drill_RankVsRawNumber';
import { Lesson9_AdvancedConcepts } from './module7/Lesson9_AdvancedConcepts';
import { Lesson10_Advanced_MultipleGaps } from './module7/Lesson10_Advanced_MultipleGaps';
import { Lesson11_ReferenceGuide } from './module7/Lesson11_ReferenceGuide';

export const Module7: ModuleData = {
  id: 7,
  title: "Evaluate the Argument",
  category: "LR",
  unit: "Unit 3: Evaluation",
  description: "Find the one question that can prove an argument right or wrong.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_CommonEvaluationTargets,
    Lesson3_Drill_TheMissingBaseline,
    Lesson4_Drill_UnrepresentativeSamples,
    Lesson6_Drill_CausalClaim,
    Lesson7_Drill_Analogy,
    Lesson8_Drill_Feasibility,
    Lesson5_Drill_RankVsRawNumber,
    Lesson9_AdvancedConcepts,
    Lesson10_Advanced_MultipleGaps,
    Lesson11_ReferenceGuide,
  ]
};
