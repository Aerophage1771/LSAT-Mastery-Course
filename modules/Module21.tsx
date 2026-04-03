import { ModuleData } from '../types';
import { Lesson_Intro } from './module21/Lesson_Intro';
import { Lesson1_CrossQuestionRecognition } from './module21/Lesson1_CrossQuestionRecognition';
import { Lesson2_CausalFlawApplications } from './module21/Lesson2_CausalFlawApplications';
import { Lesson3_EvaluatingCausalClaims } from './module21/Lesson3_EvaluatingCausalClaims';
import { Lesson4_StrengthenAndWeaken } from './module21/Lesson4_StrengthenAndWeaken';
import { Lesson5_AssumptionApplications } from './module21/Lesson5_AssumptionApplications';
import { Lesson_ReferenceGuide } from './module21/Lesson_ReferenceGuide';

export const Module21: ModuleData = {
  id: 21,
  title: 'Causal Reasoning',
  category: 'LR',
  unit: 'Unit 3A: Causal Reasoning',
  description:
    'A cross-question-type framework for recognizing, testing, attacking, and supporting causal reasoning without treating it as a standalone question type.',
  lessons: [
    Lesson_Intro,
    Lesson1_CrossQuestionRecognition,
    Lesson2_CausalFlawApplications,
    Lesson3_EvaluatingCausalClaims,
    Lesson4_StrengthenAndWeaken,
    Lesson5_AssumptionApplications,
    Lesson_ReferenceGuide,
  ],
};
