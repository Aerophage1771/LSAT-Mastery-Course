
import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module8/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module8/Lesson2_StepByStepGuide';
import { Lesson3_Drill_ScopeShiftFlaw } from './module8/Lesson3_Drill_ScopeShiftFlaw';
import { Lesson4_Drill_BaselineFlaw } from './module8/Lesson4_Drill_BaselineFlaw';
import { Lesson5_Drill_AttackingTheData } from './module8/Lesson5_Drill_AttackingTheData';
import { Lesson6_Advanced_TraitsOfHighDifficulty } from './module8/Lesson6_Advanced_TraitsOfHighDifficulty';
import { Lesson7_Drill_ReverseCausal } from './module8/Lesson7_Drill_ReverseCausal';
import { Lesson8_Drill_CompositionFlaw } from './module8/Lesson8_Drill_CompositionFlaw';
import { Lesson9_Drill_ProcessOfElimination } from './module8/Lesson9_Drill_ProcessOfElimination';
import { Lesson10_Drill_WeakenExcept } from './module8/Lesson10_Drill_WeakenExcept';
import { Lesson11_ReferenceGuide } from './module8/Lesson11_ReferenceGuide';

export const Module8: ModuleData = {
  id: 8,
  title: "Weaken",
  category: "LR",
  unit: "Unit 3: Evaluation",
  description: "Find the fact that, if true, would undermine the argument or cast doubt on the conclusion.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_Drill_ScopeShiftFlaw,
    Lesson4_Drill_BaselineFlaw,
    Lesson5_Drill_AttackingTheData,
    Lesson6_Advanced_TraitsOfHighDifficulty,
    Lesson7_Drill_ReverseCausal,
    Lesson8_Drill_CompositionFlaw,
    Lesson9_Drill_ProcessOfElimination,
    Lesson10_Drill_WeakenExcept,
    Lesson11_ReferenceGuide
  ]
};
