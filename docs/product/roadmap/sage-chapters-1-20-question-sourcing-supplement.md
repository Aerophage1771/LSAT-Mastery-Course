# Sage Chapters 1-20 Question Sourcing Supplement

**Purpose:** Track Sage-backed, `DataToolkit`-resolved question pools from Chapters `1-20` that can strengthen or replace weaker current selections in the earlier LSAT Mastery modules.  
**Audience:** Germaine, content editors, and future agents tightening question sourcing for the earlier LR modules.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-27  
**Related docs:** [README.md](./README.md), [sage-chapters-31-34-special-sources-integration-report.md](./sage-chapters-31-34-special-sources-integration-report.md), [../../archive/roadmaps/sage-chapters-11-20-integration-report.md](../../archive/roadmaps/sage-chapters-11-20-integration-report.md), [../course-content-map.md](../course-content-map.md)

## Working Rule

- Use current public LSAT Mastery module numbering when deciding where a Sage-backed question belongs.
- Treat Chapters `1-7` as doctrine-only for this pass. The extracted files did not expose explicit PT-backed question IDs there.
- Prefer the current live module-local and pre-`PT-130` pairings when they already teach the target cleanly.
- Reach into the Sage-backed later-PT pools when a current selection is loose, when a family is still only prose-level, or when exact source parity matters more than keeping the question earlier.

## Search Result

- Chapters `8-20` exposed explicit PT-backed references in the extracted Sage files.
- All extracted Chapter `8-20` references resolved cleanly in local `DataToolkit` `masterJson`.
- The highest-value direct upgrades from this pass were:
  - `Module 10: Causal Reasoning` now has a clean causal `Argument Part` recognition anchor: `PT-135-S-4-Q-21`
  - `Module 15: Principle-Generalization` now has source-backed recognition anchors for `Path Dependency / Lock-In` and `Emergence / Whole vs Part`: `PT-133-S-3-Q-3` and `PT-135-S-4-Q-18`

## Immediate Improvements

- `Module 10: Causal Reasoning`
  - `PT-135-S-4-Q-21` is the cleanest Sage-backed causal `Argument Part` role question from Chapters `1-20`
  - it improves the current recognition lesson because that lesson already promised `Argument Part` coverage but previously anchored only main-conclusion and method examples
- `Module 15: Principle-Generalization`
  - `PT-133-S-3-Q-3` gives a direct `path dependency / lock-in` model through the `qwerty` example
  - `PT-135-S-4-Q-18` gives a direct `emergence / whole vs part` model through the public-purpose institution example
  - these do not yet need standalone drill lessons to be useful; they already improve recognition doctrine and source-backed coverage

## Reserve Pools By Module

| Module | Sage chapter(s) | Why it matters | Representative candidates | Recommended use |
| --- | --- | --- | --- | --- |
| `Module 2: Main Conclusion` | Chapter `8` | Clean later-PT reserve pool if the current main-conclusion set ever needs fresher examples | `PT-132-S-4-Q-1`, `PT-134-S-1-Q-1`, `PT-143-S-4-Q-16` | reserve only |
| `Module 16: Fill in the Blank` | Chapter `9` | Small but usable later-PT pool | `PT-134-S-3-Q-1`, `PT-135-S-1-Q-4`, `PT-135-S-1-Q-7` | reserve only |
| `Module 17: Most Strongly Supported` | Chapter `10` | Good refresh pool, but one Sage-listed item (`PT-135-S-4-Q-14`) resolves in `DataToolkit` as `Main conclusion or main point`, not `MSS` | `PT-132-S-4-Q-8`, `PT-133-S-3-Q-7`, `PT-143-S-4-Q-10` | reserve only |
| `Module 21: Agree/Disagree (Point at Issue)` | Chapter `11` | Fresh disagreement pool if the current set starts to feel repetitive | `PT-133-S-1-Q-14`, `PT-135-S-4-Q-25`, `PT-142-S-2-Q-7` | reserve only |
| `Module 18: Must Be True` | Chapter `12` | Deep inference pool, but Sage Chapter `12` mixes `MBT`, `MBF`, and `MSS` style questions, so filter by actual `DataToolkit` type before using | `PT-132-S-2-Q-6`, `PT-133-S-1-Q-20`, `PT-134-S-1-Q-2` | reserve only |
| `Module 20: Paradox/Explain` | Chapter `13` | Strong later-PT paradox pool if `clear resolution` drills need more depth | `PT-132-S-4-Q-7`, `PT-134-S-1-Q-6`, `PT-135-S-4-Q-1` | reserve only |
| `Module 10: Causal Reasoning` | Chapters `14-15` and `20` | Big causal W/S/E reserve pool plus one direct causal role-question upgrade | `PT-135-S-4-Q-21`, `PT-132-S-4-Q-5`, `PT-133-S-1-Q-7`, `PT-135-S-1-Q-3` | one direct upgrade, otherwise reserve |
| `Module 13: Principle-Strengthen` | Chapter `16` | Strong later-PT pseudo-sufficient pool if the current set ever needs tighter source parity | `PT-132-S-2-Q-23`, `PT-132-S-4-Q-15`, `PT-133-S-1-Q-22` | reserve only |
| `Module 15: Principle-Generalization` | Chapter `17` | Now fills the two advanced families that were still only prose-level | `PT-133-S-3-Q-3`, `PT-135-S-4-Q-18`, `PT-143-S-4-Q-1` | direct recognition use |
| `Module 11: Sufficient Assumption` | Chapter `18` | Large later-PT reserve if the current bridge and causal subtype set ever needs rotation | `PT-132-S-2-Q-9`, `PT-133-S-3-Q-17`, `PT-134-S-3-Q-21` | reserve only |
| `Module 12: Necessary Assumption` | Chapter `19` | Large later-PT reserve if the force-standard set needs a second sourcing pass | `PT-132-S-2-Q-12`, `PT-133-S-1-Q-19`, `PT-134-S-3-Q-19` | reserve only |
| `Module 1: Argument Part` | Chapter `20` | Strong later-PT role-question pool, including causal-role examples useful outside the native module | `PT-135-S-4-Q-21`, `PT-135-S-1-Q-22`, `PT-143-S-4-Q-17` | reserve, with `PT-135-S-4-Q-21` already cross-applied in `Module 10` |

## Hold-Steady Decisions

- Do not replace the current pre-`PT-130` `Module 10` flaw, evaluate, strengthen, and assumption anchors just to mirror Sage more literally. Those current pairings still teach the doctrine well.
- Do not rewrite `Modules 11-13`, `18`, `20`, or `21` around later-PT Sage examples unless a real instructional problem appears in the live set.
- Do not treat the Sage `1-20` pool as a reason to abandon the existing `module48` uniqueness rule. Cross-question-type reuse should remain reference-based unless a question is deliberately promoted into a native bank.
