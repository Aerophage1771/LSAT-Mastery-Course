import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module8/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module8/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module8/Lesson3_FieldGuide';
import { Lesson4_Drill_ScopeShiftFlaw } from './module8/Lesson4_Drill_ScopeShiftFlaw';
import { Lesson5_Drill_BaselineFlaw } from './module8/Lesson5_Drill_BaselineFlaw';
import { Lesson6_Drill_AttackingTheData } from './module8/Lesson6_Drill_AttackingTheData';
import { Lesson7_Advanced_TraitsOfHighDifficulty } from './module8/Lesson7_Advanced_TraitsOfHighDifficulty';
import { Lesson8_Drill_ReverseCausal } from './module8/Lesson8_Drill_ReverseCausal';
import { Lesson9_Drill_CompositionFlaw } from './module8/Lesson9_Drill_CompositionFlaw';
import { Lesson10_Drill_ProcessOfElimination } from './module8/Lesson10_Drill_ProcessOfElimination';
import { Lesson11_Drill_WeakenExcept } from './module8/Lesson11_Drill_WeakenExcept';

export const Module8: ModuleData = {
  id: 8,
  title: "Weaken",
  category: "LR",
  unit: "Unit 3: Evaluation",
  description: "Find the fact that, if true, would undermine the argument or cast doubt on the conclusion.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_FieldGuide,
    Lesson4_Drill_ScopeShiftFlaw,
    Lesson5_Drill_BaselineFlaw,
    Lesson6_Drill_AttackingTheData,
    Lesson7_Advanced_TraitsOfHighDifficulty,
    Lesson8_Drill_ReverseCausal,
    Lesson9_Drill_CompositionFlaw,
    Lesson10_Drill_ProcessOfElimination,
    Lesson11_Drill_WeakenExcept
  ]
};
