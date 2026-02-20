# Lesson Question/Passage Audit (Phase 2.3)

**Date:** 2026-02-20  
**Source:** Phase 2.3 of [Standard Presentation Format Implementation Plan](../plans/2026-02-18-standard-presentation-format-implementation-plan.md)

**Purpose:** For each lesson file under `modules/`, record whether it contains at least one LR/RC question (`hasQuestion`), at least one RC passage (`hasPassage`), or neither (with `purposeOrNotes`). Supports correct application of Question/Passage boxes and documents which lessons need no box treatment.

**Criteria:**
- **hasQuestion:** `true` if the lesson contains at least one LR or RC question (stimulus/passage + stem + options, or accordion with question-like content).
- **hasPassage:** `true` if the lesson contains at least one RC passage (accordion or block with long passage text, e.g. "Read Passage" or passage variable).
- **purposeOrNotes:** When neither question nor passage, a short label (e.g. Introduction, Step-by-step guide, Reference, Placeholder).

---

| module | lessonFile | hasQuestion | hasPassage | purposeOrNotes |
|--------|------------|-------------|------------|----------------|
| module1 | Lesson10_Advanced_Counterfactual.tsx | true | false | |
| module1 | Lesson11_Advanced_Context.tsx | true | false | |
| module1 | Lesson12_ReferenceGuide.tsx | false | false | Reference |
| module1 | Lesson1_Introduction.tsx | false | false | Introduction |
| module1 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module1 | Lesson3_CommonRolesAndPatterns.tsx | false | false | Reference |
| module1 | Lesson3_Drill_Premise.tsx | true | false | |
| module1 | Lesson4_Drill_MainConclusion.tsx | true | false | |
| module1 | Lesson4_PremisesVsConclusions.tsx | true | false | |
| module1 | Lesson5_Drill_SubConclusion.tsx | true | false | |
| module1 | Lesson5_IntermediateConclusion.tsx | true | false | |
| module1 | Lesson6_HardestQuestionFactors.tsx | false | false | Breakdown/analysis only |
| module1 | Lesson6_OpposingViewpoint.tsx | true | false | |
| module1 | Lesson7_AdvancedConcepts.tsx | false | false | Breakdown/analysis or guide |
| module1 | Lesson7_Drill_AbstractRoles.tsx | true | false | |
| module1 | Lesson8_Advanced_Concessions.tsx | true | false | |
| module1 | Lesson8_Drill_IndependentRoles.tsx | true | false | |
| module1 | Lesson9_Advanced_Phenomenon.tsx | true | false | |
| module10 | Lesson10_Drill_EitherOrBridge.tsx | true | false | |
| module10 | Lesson11_Drill_NormativeBridge.tsx | true | false | |
| module10 | Lesson1_Introduction.tsx | false | false | Introduction |
| module10 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module10 | Lesson3_Drill_ConceptLink.tsx | true | false | |
| module10 | Lesson4_Drill_ExclusivityRule.tsx | true | false | |
| module10 | Lesson5_Drill_BinaryAssumption.tsx | true | false | |
| module10 | Lesson6_Drill_MutuallyExclusive.tsx | true | false | |
| module10 | Lesson7_Drill_GeneralPrinciple.tsx | true | false | |
| module10 | Lesson8_Drill_ChainOfLogic1.tsx | true | false | |
| module10 | Lesson9_Drill_ChainOfLogic2.tsx | true | false | |
| module11 | Lesson10_Drill_ForcedChoiceAdvanced.tsx | true | false | |
| module11 | Lesson11_Drill_BlockingThirdParty.tsx | true | false | |
| module11 | Lesson12_Drill_BehavioralLink.tsx | true | false | |
| module11 | Lesson13_Drill_DefinitionalStandard.tsx | true | false | |
| module11 | Lesson1_Introduction.tsx | false | false | Introduction |
| module11 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module11 | Lesson3_Drill_KeyIngredient.tsx | true | false | |
| module11 | Lesson4_Drill_DefinitionalGap.tsx | true | false | |
| module11 | Lesson5_Drill_OnlyWay.tsx | true | false | |
| module11 | Lesson6_Drill_ClosedUniverse.tsx | true | false | |
| module11 | Lesson7_Drill_SourceFallacy.tsx | true | false | |
| module11 | Lesson8_Drill_FalseDichotomy.tsx | true | false | |
| module11 | Lesson9_Drill_CompleteKnowledge.tsx | true | false | |
| module12 | Lesson1_Introduction.tsx | false | false | Introduction |
| module12 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module12 | Lesson3_Drill_NormativeBridge.tsx | true | false | |
| module12 | Lesson4_Drill_EfficiencyPrinciple.tsx | true | false | |
| module12 | Lesson5_Drill_AccountabilityPrinciple.tsx | true | false | |
| module12 | Lesson6_Drill_LesserOfTwoEvils.tsx | true | false | |
| module13 | Lesson1_Introduction.tsx | false | false | Introduction |
| module13 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module13 | Lesson3_Drill_DirectApplication.tsx | true | false | |
| module13 | Lesson4_Drill_ContrapositiveApplication.tsx | true | false | |
| module13 | Lesson5_Drill_DefinitionalChecklist.tsx | true | false | |
| module13 | Lesson6_Drill_AdvancedApplication.tsx | true | false | |
| module14 | Lesson1_Introduction.tsx | false | false | Introduction |
| module14 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module14 | Lesson3_Drill_ExperimentGeneralization.tsx | true | false | |
| module14 | Lesson4_Drill_ContextualValue.tsx | true | false | |
| module14 | Lesson5_Drill_UnintendedConsequences.tsx | true | false | |
| module14 | Lesson6_Drill_MotivatedBlindness.tsx | true | false | |
| module15 | Lesson1_Introduction.tsx | false | false | Introduction |
| module15 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module15 | Lesson3_Drill_MechanisticChain.tsx | true | false | |
| module15 | Lesson4_Drill_Analogy.tsx | true | false | |
| module15 | Lesson5_Drill_ProblemAndSolution.tsx | true | false | |
| module15 | Lesson6_Drill_PhilosophicalRebuttal.tsx | true | false | |
| module15 | Lesson7_Drill_ConditionalLogicAndParadox.tsx | true | false | |
| module16 | Lesson10_Drill_LeastSupported.tsx | true | false | |
| module16 | Lesson1_Introduction.tsx | false | false | Introduction |
| module16 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module16 | Lesson3_Drill_SynthesisCausal.tsx | true | false | |
| module16 | Lesson4_Drill_ApplyingDefinitions.tsx | true | false | |
| module16 | Lesson5_Drill_CausalChaining.tsx | true | false | |
| module16 | Lesson6_Advanced_HighDifficulty.tsx | false | false | Breakdown/analysis or guide |
| module16 | Lesson7_Drill_InferenceByConstraint.tsx | true | false | |
| module16 | Lesson8_Drill_LogicalDensity.tsx | true | false | |
| module16 | Lesson9_Drill_SemanticNuance.tsx | true | false | |
| module17 | Lesson10_Drill_PrecisionInCausality.tsx | true | false | |
| module17 | Lesson1_Introduction.tsx | false | false | Introduction |
| module17 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module17 | Lesson3_Drill_ConditionalLogic.tsx | true | false | |
| module17 | Lesson4_Drill_Quantifiers.tsx | true | false | |
| module17 | Lesson5_Drill_NumericalReasoning.tsx | true | false | |
| module17 | Lesson6_Advanced_HighDifficultyAnalysis.tsx | false | false | Breakdown/analysis or guide |
| module17 | Lesson7_Drill_HighCognitiveLoad.tsx | true | false | |
| module17 | Lesson8_Drill_MultiStepInference.tsx | true | false | |
| module17 | Lesson9_Drill_InferencesFromDisparity.tsx | true | false | |
| module18 | Lesson1_Introduction.tsx | false | false | Introduction |
| module18 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module18 | Lesson3_Drill_ConditionalBreakers.tsx | true | false | |
| module18 | Lesson4_Drill_QuantifierClashes.tsx | true | false | |
| module18 | Lesson5_Drill_ExclusiveBoundaries.tsx | true | false | |
| module19 | Lesson1_Introduction.tsx | false | false | Introduction |
| module19 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module19 | Lesson3_Drill_NumbersVsPercentages.tsx | true | false | |
| module19 | Lesson4_Drill_SelectionBias.tsx | true | false | |
| module19 | Lesson5_Drill_CausalMechanisms.tsx | true | false | |
| module19 | Lesson6_Guide_HardestParadox.tsx | false | false | Guide |
| module19 | Lesson7_Drill_HiddenDistinction.tsx | true | false | |
| module19 | Lesson8_Drill_CounterintuitiveCausalWeb.tsx | true | false | |
| module19 | Lesson9_Drill_FlawedLogicExcept.tsx | true | false | |
| module2 | Lesson10_Advanced_SpecificJudgment.tsx | true | false | |
| module2 | Lesson11_ReferenceGuide.tsx | false | false | Reference |
| module2 | Lesson1_Introduction.tsx | false | false | Introduction |
| module2 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module2 | Lesson2_StepByStepMethod.tsx | false | false | Step-by-step guide |
| module2 | Lesson3_Application_ConciseRebuttal.tsx | true | false | |
| module2 | Lesson3_CommonPatternsAndTypes.tsx | false | false | Reference |
| module2 | Lesson4_Application_MiddlePivot.tsx | true | false | |
| module2 | Lesson4_TheRebuttal.tsx | true | false | |
| module2 | Lesson5_Application_FinalConclusion.tsx | true | false | |
| module2 | Lesson5_ThePrescription.tsx | true | false | |
| module2 | Lesson6_Advanced_DifferentiatingHardConclusions.tsx | false | false | Breakdown/analysis or guide |
| module2 | Lesson6_TheExplanation.tsx | true | false | |
| module2 | Lesson7_AdvancedConcepts.tsx | false | false | Breakdown/analysis or guide |
| module2 | Lesson7_HardQuestion_ExplanatoryArgument.tsx | true | false | |
| module2 | Lesson8_Advanced_IntermediateConclusion.tsx | true | false | |
| module2 | Lesson8_HardQuestion_LogicFlip.tsx | true | false | |
| module2 | Lesson9_Advanced_BackgroundPrinciple.tsx | true | false | |
| module2 | Lesson9_HardQuestion_ConditionalParaphrase.tsx | true | false | |
| module20 | Lesson1_Introduction.tsx | false | false | Introduction |
| module20 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module20 | Lesson3_Drill_Disagreement_DefinitionalRule.tsx | true | false | |
| module20 | Lesson4_Drill_Disagreement_ExplanatoryCause.tsx | true | false | |
| module20 | Lesson5_Drill_PointOfAgreement_SharedAssumption.tsx | true | false | |
| module20 | Lesson6_Advanced_StrategyGuide.tsx | false | false | Breakdown/analysis or guide |
| module20 | Lesson7_Drill_Disagreement_ClashOfCriteria.tsx | true | false | |
| module20 | Lesson8_Drill_Disagreement_DefinitionalClash.tsx | true | false | |
| module20 | Lesson9_Drill_PointOfAgreement_SharedDiagnosis.tsx | true | false | |
| module21 | Lesson1_Introduction.tsx | false | false | Introduction |
| module21 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module21 | Lesson3_PatternRecognition.tsx | false | false | Reference / pattern guide |
| module21 | Lesson4_TrapAnswerTypes.tsx | false | false | Reference / pattern guide |
| module22 | Lesson1_Introduction.tsx | false | false | Introduction |
| module22 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module22 | Lesson3_PatternRecognition.tsx | false | false | Reference / pattern guide |
| module22 | Lesson4_TrapAnswerTypes.tsx | false | false | Reference / pattern guide |
| module23 | Lesson1_Introduction.tsx | false | false | Introduction |
| module23 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module24 | Lesson1_Introduction.tsx | false | false | Introduction |
| module24 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module25 | Lesson1_Introduction.tsx | false | false | Introduction |
| module25 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module26 | Lesson1_Introduction.tsx | false | false | Introduction |
| module26 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module27 | Lesson1_Introduction.tsx | false | false | Introduction |
| module27 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module28 | Lesson1_Introduction.tsx | false | false | Introduction |
| module28 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module29 | Lesson1_Introduction.tsx | false | false | Introduction |
| module29 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module3 | Lesson10_Advanced_ProofByContradiction.tsx | true | false | |
| module3 | Lesson11_Advanced_ChallengingAssumption2.tsx | true | false | |
| module3 | Lesson12_ReferenceGuide.tsx | false | false | Reference |
| module3 | Lesson1_Introduction.tsx | false | false | Introduction |
| module3 | Lesson2_MethodOfReasoningTemplate.tsx | false | false | Other (concepts/guide) |
| module3 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module3 | Lesson3_FieldGuide.tsx | false | false | Reference |
| module3 | Lesson3_ProcessOfElimination.tsx | true | false | |
| module3 | Lesson4_AlternativeExplanations.tsx | true | false | |
| module3 | Lesson4_RefutationByAnalogy.tsx | true | false | |
| module3 | Lesson5_ArgumentByAnalogy.tsx | true | false | |
| module3 | Lesson5_ProcessOfElimination.tsx | true | false | |
| module3 | Lesson6_RefutationByCounterexample.tsx | true | false | |
| module3 | Lesson6_RefutationByParallelReasoning.tsx | true | false | |
| module3 | Lesson7_HandlingHardestQuestions.tsx | false | false | Breakdown/analysis only |
| module3 | Lesson7_HighlightingNegativeConsequences.tsx | true | false | |
| module3 | Lesson8_AdvancedConcepts.tsx | false | false | Breakdown/analysis or guide |
| module3 | Lesson8_RestrictingTheScope.tsx | true | false | |
| module3 | Lesson9_Advanced_ChallengingAssumption.tsx | true | false | |
| module3 | Lesson9_AlternativeExplanationThirdFactor.tsx | true | false | |
| module30 | Lesson1_Introduction.tsx | false | false | Introduction |
| module30 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module30 | Lesson3_PatternRecognition.tsx | false | false | Reference / pattern guide |
| module31 | Lesson1_Introduction.tsx | false | false | Introduction |
| module31 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module32 | Lesson1_Introduction.tsx | false | false | Introduction |
| module32 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module33 | Lesson1_Introduction.tsx | false | false | Introduction |
| module33 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module34 | Lesson1_Introduction.tsx | false | false | Introduction |
| module34 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module35 | Lesson1_Introduction.tsx | false | false | Introduction |
| module35 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module36 | Lesson1_Introduction.tsx | false | false | Introduction |
| module36 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module37 | Lesson1_Introduction.tsx | false | false | Introduction |
| module37 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module38 | Lesson1_Introduction.tsx | false | false | Introduction |
| module38 | Lesson2_StepByStepApproach.tsx | false | false | Step-by-step guide |
| module39 | Lesson1_PassageAnalysis.tsx | false | true | |
| module39 | Lesson2_Question8.tsx | true | true | |
| module39 | Lesson3_Question10.tsx | true | true | |
| module39 | Lesson4_Question11.tsx | true | true | |
| module39 | Lesson5_Question12.tsx | true | true | |
| module39 | Lesson6_Question13.tsx | true | true | |
| module39 | Lesson7_Question14.tsx | true | true | |
| module39 | Lesson8_Question15.tsx | true | true | |
| module4 | Lesson10_Advanced_StatisticalRebuttal.tsx | true | false | |
| module4 | Lesson11_Advanced_CorrelationalRule.tsx | true | false | |
| module4 | Lesson12_ReferenceGuide.tsx | false | false | Reference |
| module4 | Lesson1_Introduction.tsx | false | false | Introduction |
| module4 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module4 | Lesson3_CommonArgumentStructures.tsx | false | false | Reference |
| module4 | Lesson3_Drill_ProcessOfElimination.tsx | true | false | |
| module4 | Lesson4_Drill_ProportionalReasoning.tsx | true | false | |
| module4 | Lesson4_TheConditionalChain.tsx | true | false | |
| module4 | Lesson5_Drill_CausalReasoning.tsx | true | false | |
| module4 | Lesson5_TheEliminativeArgument.tsx | true | false | |
| module4 | Lesson6_Advanced_HighDifficultyFactors.tsx | false | false | Breakdown/analysis or guide |
| module4 | Lesson6_ThePrincipleApplication.tsx | true | false | |
| module4 | Lesson7_Drill_AbstractPatterns.tsx | true | false | |
| module4 | Lesson7_TheQuantifierArgument.tsx | true | false | |
| module4 | Lesson8_AdvancedConcepts.tsx | false | false | Breakdown/analysis or guide |
| module4 | Lesson8_Drill_ComparativeReasoning.tsx | true | false | |
| module4 | Lesson9_Advanced_ConditionalChains.tsx | true | false | |
| module40 | Lesson1_PassageAnalysis.tsx | false | true | |
| module40 | Lesson2_Question6.tsx | true | true | |
| module40 | Lesson3_Question7.tsx | true | true | |
| module40 | Lesson4_Question8.tsx | true | true | |
| module40 | Lesson5_Question9.tsx | true | true | |
| module40 | Lesson6_Question10.tsx | true | true | |
| module40 | Lesson7_Question11.tsx | true | true | |
| module40 | Lesson8_Question12.tsx | true | true | |
| module40 | Lesson9_Question13.tsx | true | true | |
| module41 | Lesson1_PassageAnalysis.tsx | false | true | |
| module41 | Lesson2_Question14.tsx | true | true | |
| module41 | Lesson3_Question15.tsx | true | true | |
| module41 | Lesson4_Question16.tsx | true | true | |
| module41 | Lesson5_Question17.tsx | true | true | |
| module41 | Lesson6_Question18.tsx | true | true | |
| module41 | Lesson7_Question19.tsx | true | true | |
| module41 | Lesson8_Question20.tsx | true | true | |
| module41 | Lesson9_Question21.tsx | true | true | |
| module42 | Lesson1_PassageAnalysis.tsx | false | true | |
| module42 | Lesson2_Question7.tsx | true | true | |
| module42 | Lesson3_Question8.tsx | true | true | |
| module42 | Lesson4_Question9.tsx | true | true | |
| module42 | Lesson5_Question10.tsx | true | true | |
| module42 | Lesson6_Question11.tsx | true | true | |
| module42 | Lesson7_Question12.tsx | true | true | |
| module43 | Lesson1_PassageAnalysis.tsx | false | true | |
| module43 | Lesson2_Question20.tsx | true | true | |
| module43 | Lesson3_Question21.tsx | true | true | |
| module43 | Lesson4_Question22.tsx | true | true | |
| module43 | Lesson5_Question23.tsx | true | true | |
| module43 | Lesson6_Question24.tsx | true | true | |
| module43 | Lesson7_Question25.tsx | true | true | |
| module43 | Lesson8_Question26.tsx | true | true | |
| module43 | Lesson9_Question27.tsx | true | true | |
| module44 | Lesson1_PassageAnalysis.tsx | false | true | |
| module44 | Lesson2_Question8.tsx | true | true | |
| module44 | Lesson3_Question9.tsx | true | true | |
| module44 | Lesson4_Question10.tsx | true | true | |
| module44 | Lesson5_Question11.tsx | true | true | |
| module44 | Lesson6_Question12.tsx | true | true | |
| module44 | Lesson7_Question13.tsx | true | true | |
| module44 | Lesson8_Question14.tsx | true | true | |
| module44 | Lesson9_Question15.tsx | true | true | |
| module45 | Lesson1_PassageAnalysis.tsx | false | true | |
| module45 | Lesson2_Question16.tsx | true | true | |
| module45 | Lesson3_Question17.tsx | true | true | |
| module45 | Lesson4_Question18.tsx | true | true | |
| module45 | Lesson5_Question19.tsx | true | true | |
| module45 | Lesson6_Question20.tsx | true | true | |
| module45 | Lesson7_Question21.tsx | true | true | |
| module46 | Lesson1_PassageAnalysis.tsx | false | true | |
| module46 | Lesson2_Question22.tsx | true | true | |
| module46 | Lesson3_Question23.tsx | true | true | |
| module46 | Lesson4_Question24.tsx | true | true | |
| module46 | Lesson5_Question25.tsx | true | true | |
| module46 | Lesson6_Question26.tsx | true | true | |
| module46 | Lesson7_Question27.tsx | true | true | |
| module47 | Lesson1_RCReferenceGuide.tsx | false | false | Reference |
| module48 | Lesson10_Module10_Questions.tsx | true | false | |
| module48 | Lesson11_Module11_Questions.tsx | true | false | |
| module48 | Lesson12_Module12_Questions.tsx | true | false | |
| module48 | Lesson13_Module13_Questions.tsx | true | false | |
| module48 | Lesson14_Module14_Questions.tsx | true | false | |
| module48 | Lesson15_Module15_Questions.tsx | true | false | |
| module48 | Lesson16_Module16_Questions.tsx | true | false | |
| module48 | Lesson17_Module17_Questions.tsx | true | false | |
| module48 | Lesson18_Module18_Questions.tsx | true | false | |
| module48 | Lesson19_Module19_Questions.tsx | true | false | |
| module48 | Lesson1_Module1_Questions.tsx | true | false | |
| module48 | Lesson20_Module20_Questions.tsx | true | false | |
| module48 | Lesson21_Module55_Questions.tsx | false | false | Placeholder; no questions in module |
| module48 | Lesson22_Module59_Questions.tsx | false | false | Placeholder; no questions in module |
| module48 | Lesson2_Module2_Questions.tsx | false | false | Placeholder; no questions in module |
| module48 | Lesson3_Module3_Questions.tsx | false | false | Placeholder; no questions in module |
| module48 | Lesson4_Module4_Questions.tsx | true | false | |
| module48 | Lesson5_Module5_Questions.tsx | true | false | |
| module48 | Lesson6_Module6_Questions.tsx | true | false | |
| module48 | Lesson7_Module7_Questions.tsx | true | false | |
| module48 | Lesson8_Module8_Questions.tsx | true | false | |
| module48 | Lesson9_Module9_Questions.tsx | true | false | |
| module49 | Lesson1_QuestionRepository.tsx | true | true | |
| module5 | Lesson10_Advanced_InternalContradiction.tsx | true | false | |
| module5 | Lesson10_Advanced_StrategyVsCertainty.tsx | true | false | |
| module5 | Lesson11_Advanced_QuantitativeConditional.tsx | true | false | |
| module5 | Lesson12_ReferenceGuide.tsx | false | false | Reference |
| module5 | Lesson1_Introduction.tsx | false | false | Introduction |
| module5 | Lesson2_CoreMethodology.tsx | false | false | Reference |
| module5 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module5 | Lesson3_Drill_SourceAttack.tsx | true | false | |
| module5 | Lesson3_FieldGuide.tsx | false | false | Reference |
| module5 | Lesson4_Drill_Causation.tsx | true | false | |
| module5 | Lesson4_Drill_SufficientVsNecessary.tsx | true | false | |
| module5 | Lesson5_Advanced_RecognizingCamouflage.tsx | false | false | Other (concepts/guide) |
| module5 | Lesson5_Drill_NumbersVsPercentages.tsx | true | false | |
| module5 | Lesson6_Advanced_TheBaseRateFallacy.tsx | true | false | |
| module5 | Lesson6_Drill_UnrepresentativeSample.tsx | true | false | |
| module5 | Lesson7_Advanced_UnreasonableStandardOfProof.tsx | true | false | |
| module5 | Lesson7_Drill_ConditionalLogic.tsx | true | false | |
| module5 | Lesson8_AdvancedConcepts.tsx | false | false | Breakdown/analysis or guide |
| module5 | Lesson8_Advanced_TheOnlyTrap.tsx | true | false | |
| module5 | Lesson9_Advanced_NecessaryVsSufficient.tsx | true | false | |
| module5 | Lesson9_Advanced_SingleExplanationFallacy.tsx | true | false | |
| module50 | Lesson1_PassageAnalysis.tsx | false | true | |
| module50 | Lesson2_Question22.tsx | true | true | |
| module50 | Lesson3_Question23.tsx | true | true | |
| module50 | Lesson4_Question24.tsx | true | true | |
| module50 | Lesson5_Question25.tsx | true | true | |
| module50 | Lesson6_Question26.tsx | true | true | |
| module51 | Lesson1_PassageAnalysis.tsx | false | true | |
| module51 | Lesson2_Question23.tsx | true | true | |
| module51 | Lesson3_Question24.tsx | true | true | |
| module51 | Lesson4_Question25.tsx | true | true | |
| module51 | Lesson5_Question26.tsx | true | true | |
| module51 | Lesson6_Question27.tsx | true | true | |
| module51 | Lesson7_Question28.tsx | true | true | |
| module52 | Lesson1_AdvancedRCQuestionRepository.tsx | true | true | |
| module52 | Lesson1_PassageAnalysis.tsx | false | true | |
| module52 | Lesson2_Question15.tsx | true | true | |
| module52 | Lesson3_Question16.tsx | true | true | |
| module52 | Lesson4_Question17.tsx | true | true | |
| module52 | Lesson5_Question18.tsx | true | true | |
| module52 | Lesson6_Question19.tsx | true | true | |
| module52 | Lesson7_Question20.tsx | true | true | |
| module52 | Lesson8_Question21.tsx | true | true | |
| module53 | Lesson1_AdvancedRCQuestionRepository.tsx | true | true | |
| module54 | Lesson1_PassageAnalysis.tsx | false | true | |
| module54 | Lesson2_Question21.tsx | true | true | |
| module54 | Lesson3_Question22.tsx | true | true | |
| module54 | Lesson4_Question23.tsx | true | true | |
| module54 | Lesson5_Question24.tsx | true | true | |
| module54 | Lesson6_Question25.tsx | true | true | |
| module54 | Lesson7_Question26.tsx | true | true | |
| module55 | Lesson1_Foundations.tsx | true | false | |
| module55 | Lesson2_Contrapositive.tsx | true | false | |
| module55 | Lesson3_Fallacies.tsx | true | false | |
| module55 | Lesson4_Quantifiers.tsx | true | false | |
| module55 | Lesson5_ComplexStructures.tsx | true | false | |
| module55 | Lesson6_Nuance.tsx | true | false | |
| module55 | Lesson_ConciseGuide.tsx | false | false | Reference |
| module55 | Lesson_Intro.tsx | false | false | Introduction |
| module56 | Lesson1_PassageAnalysis.tsx | false | true | |
| module56 | Lesson2_Question22.tsx | true | true | |
| module56 | Lesson3_Question23.tsx | true | true | |
| module56 | Lesson4_Question24.tsx | true | true | |
| module56 | Lesson5_Question25.tsx | true | true | |
| module56 | Lesson6_Question26.tsx | true | true | |
| module57 | Lesson1_PassageAnalysis.tsx | false | true | |
| module57 | Lesson2_Question15.tsx | true | true | |
| module57 | Lesson3_Question16.tsx | true | true | |
| module57 | Lesson4_Question17.tsx | true | true | |
| module57 | Lesson5_Question18.tsx | true | true | |
| module57 | Lesson6_Question19.tsx | true | true | |
| module57 | Lesson7_Question20.tsx | true | true | |
| module58 | Lesson1_PassageAnalysis.tsx | false | true | |
| module58 | Lesson2_Question24.tsx | true | true | |
| module58 | Lesson3_Question25.tsx | true | true | |
| module58 | Lesson4_Question26.tsx | true | true | |
| module58 | Lesson5_Question27.tsx | true | true | |
| module58 | Lesson6_Question28.tsx | true | true | |
| module59 | Lesson1_FoundationalToolkit.tsx | false | false | Concept lesson (numbers/statistics) |
| module59 | Lesson2_PartVsWhole.tsx | false | false | Concept lesson (numbers/statistics) |
| module59 | Lesson3_Averages.tsx | false | false | Concept lesson (numbers/statistics) |
| module59 | Lesson4_InvalidMath.tsx | false | false | Concept lesson (numbers/statistics) |
| module59 | Lesson5_GamblersFallacy.tsx | false | false | Concept lesson (numbers/statistics) |
| module59 | Lesson6_Conclusion.tsx | false | false | Concept lesson (numbers/statistics) |
| module6 | Lesson1_Introduction.tsx | false | false | Introduction |
| module6 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module6 | Lesson3_Drill_MistakenNegation.tsx | true | false | |
| module6 | Lesson4_Drill_CompositionFlaw.tsx | true | false | |
| module6 | Lesson5_Drill_ComparedToWhatFlaw.tsx | true | false | |
| module6 | Lesson6_Advanced_DeconstructingHighDifficulty.tsx | false | false | Breakdown/analysis or guide |
| module6 | Lesson7_Drill_DoubleFlaw.tsx | true | false | |
| module6 | Lesson8_Drill_NetEffectFlaw.tsx | true | false | |
| module6 | Lesson9_Drill_OverlapFlaw.tsx | true | false | |
| module7 | Lesson1_Introduction.tsx | false | false | Introduction |
| module7 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module7 | Lesson3_Drill_TheMissingBaseline.tsx | true | false | |
| module7 | Lesson4_Drill_UnrepresentativeSamples.tsx | true | false | |
| module7 | Lesson5_Drill_RankVsRawNumber.tsx | true | false | |
| module8 | Lesson10_Drill_WeakenExcept.tsx | true | false | |
| module8 | Lesson1_Introduction.tsx | false | false | Introduction |
| module8 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module8 | Lesson3_Drill_ScopeShiftFlaw.tsx | true | false | |
| module8 | Lesson4_Drill_BaselineFlaw.tsx | true | false | |
| module8 | Lesson5_Drill_AttackingTheData.tsx | true | false | |
| module8 | Lesson6_Advanced_TraitsOfHighDifficulty.tsx | false | false | Breakdown/analysis or guide |
| module8 | Lesson7_Drill_ReverseCausal.tsx | true | false | |
| module8 | Lesson8_Drill_CompositionFlaw.tsx | true | false | |
| module8 | Lesson9_Drill_ProcessOfElimination.tsx | true | false | |
| module9 | Lesson10_Drill_Analogy.tsx | true | false | |
| module9 | Lesson11_Drill_DoseResponse.tsx | true | false | |
| module9 | Lesson12_Drill_StrengthenExcept.tsx | true | false | |
| module9 | Lesson1_Introduction.tsx | false | false | Introduction |
| module9 | Lesson2_StepByStepGuide.tsx | false | false | Step-by-step guide |
| module9 | Lesson3_Drill_CausalClaims.tsx | true | false | |
| module9 | Lesson4_Drill_Numbers.tsx | true | false | |
| module9 | Lesson5_Drill_ComparativeClaims.tsx | true | false | |
| module9 | Lesson6_Advanced_TraitsOfHighDifficulty.tsx | false | false | Breakdown/analysis or guide |
| module9 | Lesson7_Drill_TheDefender.tsx | true | false | |
| module9 | Lesson8_Drill_ConceptualGaps.tsx | true | false | |
| module9 | Lesson9_Drill_Qualifiers.tsx | true | false | |

---

## Summary

| Metric | Count |
|--------|-------|
| **Total lesson files** | 417 |
| **hasQuestion = true** | 293 |
| **hasPassage = true** | 115 |
| **Both question and passage** | 100 |
| **Passage only (no question in file)** | 15 |
| **Other (no question, no passage)** | 124 |

**One-line summary:** Audit complete: 417 lesson files, 293 with questions, 115 with passages, 124 other.
