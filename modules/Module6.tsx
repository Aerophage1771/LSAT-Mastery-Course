import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module6/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module6/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module6/Lesson3_FieldGuide';
import { Lesson4_Drill_MistakenNegation } from './module6/Lesson4_Drill_MistakenNegation';
import { Lesson5_Drill_CompositionFlaw } from './module6/Lesson5_Drill_CompositionFlaw';
import { Lesson6_Drill_ComparedToWhatFlaw } from './module6/Lesson6_Drill_ComparedToWhatFlaw';
import { Lesson7_Advanced_DeconstructingHighDifficulty } from './module6/Lesson7_Advanced_DeconstructingHighDifficulty';
import { Lesson8_Drill_DoubleFlaw } from './module6/Lesson8_Drill_DoubleFlaw';
import { Lesson9_Drill_NetEffectFlaw } from './module6/Lesson9_Drill_NetEffectFlaw';
import { Lesson10_Drill_OverlapFlaw } from './module6/Lesson10_Drill_OverlapFlaw';

export const Module6: ModuleData = {
  id: 6,
  title: "Parallel Flaw",
  category: "LR",
  unit: "Unit 2: Analysis",
  description: "Identify the argument with a logical error that mirrors the error in the stimulus.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_FieldGuide,
    Lesson4_Drill_MistakenNegation,
    Lesson5_Drill_CompositionFlaw,
    Lesson6_Drill_ComparedToWhatFlaw,
    Lesson7_Advanced_DeconstructingHighDifficulty,
    Lesson8_Drill_DoubleFlaw,
    Lesson9_Drill_NetEffectFlaw,
    Lesson10_Drill_OverlapFlaw
  ]
};
