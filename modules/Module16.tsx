import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module16/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module16/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module16/Lesson3_FieldGuide';
import { Lesson4_Drill_SynthesisCausal } from './module16/Lesson4_Drill_SynthesisCausal';
import { Lesson5_Drill_ApplyingDefinitions } from './module16/Lesson5_Drill_ApplyingDefinitions';
import { Lesson6_Drill_CausalChaining } from './module16/Lesson6_Drill_CausalChaining';
import { Lesson7_Advanced_HighDifficulty } from './module16/Lesson7_Advanced_HighDifficulty';
import { Lesson8_Drill_InferenceByConstraint } from './module16/Lesson8_Drill_InferenceByConstraint';
import { Lesson9_Drill_LogicalDensity } from './module16/Lesson9_Drill_LogicalDensity';
import { Lesson10_Drill_SemanticNuance } from './module16/Lesson10_Drill_SemanticNuance';
import { Lesson11_Drill_LeastSupported } from './module16/Lesson11_Drill_LeastSupported';

export const Module16: ModuleData = {
  id: 16,
  title: "Most Strongly Supported",
  category: "LR",
  unit: "Unit 5: Inference",
  description: "Identify the inference that is most logically proven by the information in the stimulus.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_FieldGuide,
    Lesson4_Drill_SynthesisCausal,
    Lesson5_Drill_ApplyingDefinitions,
    Lesson6_Drill_CausalChaining,
    Lesson7_Advanced_HighDifficulty,
    Lesson8_Drill_InferenceByConstraint,
    Lesson9_Drill_LogicalDensity,
    Lesson10_Drill_SemanticNuance,
    Lesson11_Drill_LeastSupported
  ]
};
