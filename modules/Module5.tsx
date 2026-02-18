import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module5/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module5/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module5/Lesson3_FieldGuide';
import { Lesson4_Drill_Causation } from './module5/Lesson4_Drill_Causation';
import { Lesson5_Drill_NumbersVsPercentages } from './module5/Lesson5_Drill_NumbersVsPercentages';
import { Lesson6_Drill_UnrepresentativeSample } from './module5/Lesson6_Drill_UnrepresentativeSample';
import { Lesson7_Drill_ConditionalLogic } from './module5/Lesson7_Drill_ConditionalLogic';
import { Lesson8_AdvancedConcepts } from './module5/Lesson8_AdvancedConcepts';
import { Lesson9_Advanced_NecessaryVsSufficient } from './module5/Lesson9_Advanced_NecessaryVsSufficient';
import { Lesson10_Advanced_StrategyVsCertainty } from './module5/Lesson10_Advanced_StrategyVsCertainty';
import { Lesson11_Advanced_QuantitativeConditional } from './module5/Lesson11_Advanced_QuantitativeConditional';
import { Lesson12_ReferenceGuide } from './module5/Lesson12_ReferenceGuide';

export const Module5: ModuleData = {
  id: 5,
  title: "Flaw",
  category: "LR",
  unit: "Unit 2: Analysis",
  description: "Identify the specific reasoning error that makes the argument's conclusion unproven by its evidence. In other words, why is the logical connection between the premise and the conclusion broken?",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_FieldGuide,
    Lesson4_Drill_Causation,
    Lesson5_Drill_NumbersVsPercentages,
    Lesson6_Drill_UnrepresentativeSample,
    Lesson7_Drill_ConditionalLogic,
    Lesson8_AdvancedConcepts,
    Lesson9_Advanced_NecessaryVsSufficient,
    Lesson10_Advanced_StrategyVsCertainty,
    Lesson11_Advanced_QuantitativeConditional,
    Lesson12_ReferenceGuide
  ]
};