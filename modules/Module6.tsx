import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module6/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module6/Lesson2_StepByStepGuide';
import { Lesson3_Drill_MistakenNegation } from './module6/Lesson3_Drill_MistakenNegation';
import { Lesson4_Drill_CompositionFlaw } from './module6/Lesson4_Drill_CompositionFlaw';
import { Lesson5_Drill_ComparedToWhatFlaw } from './module6/Lesson5_Drill_ComparedToWhatFlaw';
import { Lesson6_Advanced_DeconstructingHighDifficulty } from './module6/Lesson6_Advanced_DeconstructingHighDifficulty';
import { Lesson7_Drill_DoubleFlaw } from './module6/Lesson7_Drill_DoubleFlaw';
import { Lesson8_Drill_NetEffectFlaw } from './module6/Lesson8_Drill_NetEffectFlaw';
import { Lesson9_Drill_OverlapFlaw } from './module6/Lesson9_Drill_OverlapFlaw';
import { Lesson10_ReferenceGuide } from './module6/Lesson10_ReferenceGuide';

export const Module6: ModuleData = {
  id: 6,
  title: "Parallel Flaw",
  category: "LR",
  unit: "Unit 2: Analysis",
  description: "Identify the argument with a logical error that mirrors the error in the stimulus.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_Drill_MistakenNegation,
    Lesson4_Drill_CompositionFlaw,
    Lesson5_Drill_ComparedToWhatFlaw,
    Lesson6_Advanced_DeconstructingHighDifficulty,
    Lesson7_Drill_DoubleFlaw,
    Lesson8_Drill_NetEffectFlaw,
    Lesson9_Drill_OverlapFlaw,
    Lesson10_ReferenceGuide
  ]
};
