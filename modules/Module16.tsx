import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module16/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module16/Lesson2_StepByStepGuide';
import { Lesson3_Drill_SynthesisCausal } from './module16/Lesson3_Drill_SynthesisCausal';
import { Lesson4_Drill_ApplyingDefinitions } from './module16/Lesson4_Drill_ApplyingDefinitions';
import { Lesson5_Drill_CausalChaining } from './module16/Lesson5_Drill_CausalChaining';
import { Lesson6_Advanced_HighDifficulty } from './module16/Lesson6_Advanced_HighDifficulty';
import { Lesson7_Drill_InferenceByConstraint } from './module16/Lesson7_Drill_InferenceByConstraint';
import { Lesson8_Drill_LogicalDensity } from './module16/Lesson8_Drill_LogicalDensity';
import { Lesson9_Drill_SemanticNuance } from './module16/Lesson9_Drill_SemanticNuance';
import { Lesson10_Drill_LeastSupported } from './module16/Lesson10_Drill_LeastSupported';
import { Lesson11_ReferenceGuide } from './module16/Lesson11_ReferenceGuide';

export const Module16: ModuleData = {
  id: 16,
  title: "Most Strongly Supported",
  category: "LR",
  unit: "Unit 5: Inference",
  description: "Identify the inference that is most logically proven by the information in the stimulus.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_Drill_SynthesisCausal,
    Lesson4_Drill_ApplyingDefinitions,
    Lesson5_Drill_CausalChaining,
    Lesson6_Advanced_HighDifficulty,
    Lesson7_Drill_InferenceByConstraint,
    Lesson8_Drill_LogicalDensity,
    Lesson9_Drill_SemanticNuance,
    Lesson10_Drill_LeastSupported,
    Lesson11_ReferenceGuide
  ]
};
