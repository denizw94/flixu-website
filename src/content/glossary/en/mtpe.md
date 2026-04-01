---
title: "MTPE"
description: "MTPE combines machine translation with human post-editing. Learn the two service levels — light and full — and how context-aware MT changes what editors receive."
relatedTerms: ["post-editing", "machine-translation", "neural-machine-translation", "translation-quality-assurance", "cat-tool", "language-service-provider", "transcreation", "glossary-management"]
---

# What Is MTPE (Machine Translation Post-Editing)?

> **MTPE (Machine Translation Post-Editing)** is a localization workflow where a [machine translation](/topic/glossary/machine-translation) engine produces the first draft and a human editor reviews, corrects, and refines it to the required quality level. It combines the speed of automated translation with the judgment of a trained linguist — the balance between those two contributions determines the cost, speed, and quality of the output.

## How MTPE Works

The workflow is straightforward. Source content goes through an MT engine — the engine returns a draft translation in seconds or minutes rather than days. A human linguist then reads through that output and edits it: correcting errors, adjusting terminology to match the approved [glossary](/topic/glossary/glossary-management), fixing phrasing that's technically accurate but reads awkwardly, and ensuring the final text meets the quality level the job requires.

What changes across different MTPE engagements is how deep that editing goes — and correspondingly, what it costs and how long it takes.

The economic logic is that the MT draft, even an imperfect one, is faster than starting from a blank page. The human's contribution shifts from generating text to evaluating and improving it. That shift reduces time and cost for most content categories, though it requires the MT output to be good enough that editing is faster than rewriting.

## The Two Service Levels

**Light MTPE** focuses on accuracy rather than style. The reviewer corrects factual errors, fixes omissions, and ensures the meaning is correct — without investing time in rewriting phrasing that's functional but not polished.

Light MTPE is appropriate for: internal documentation, high-volume low-stakes content, knowledge base articles that need to be accurate but aren't on the critical conversion path, product data where clarity matters more than voice.

**Full MTPE** treats the MT output as a draft to be rewritten to publication standard. The linguist restructures sentences that sound mechanical, enforces [brand voice](/topic/glossary/brand-voice-translation) and [formality](/topic/glossary/formality-levels) throughout, and works through the document until it reads as though a human translated it from scratch.

Full MTPE is appropriate for: software UI, B2B marketing content, compliance documentation, anything a user will judge the company by. Even at this level, [transcreation](/topic/glossary/transcreation) — rather than post-editing — is sometimes the right choice for creative content where the source metaphors or idioms don't carry across the language boundary.

## MTPE vs. Full Human Translation

| | MTPE | Full Human Translation |
|---|---|---|
| **Starting point** | MT-generated draft | Blank document |
| **Human contribution** | Review and correction | Translation from source |
| **Speed** | Faster — draft already exists | Slower |
| **Cost** | Lower per word | Higher per word |
| **Consistency** | Depends on MT + glossary configuration | Depends on translator + style guide adherence |
| **Best for** | High volume; content where MT quality is sufficient | Creative, high-stakes, or culturally sensitive content |

The choice between them isn't always obvious. MT quality varies by language pair, domain, and content type. For language pairs with strong NMT coverage (e.g., German-English, French-English), MT output often reaches a quality level where Light MTPE is genuinely efficient. For less-resourced language pairs or highly specialized content, MT output may require enough editing that Full Human Translation is faster.

## How Context-Aware Translation Changes MTPE

The version of MTPE that became standard in the 2010s was built around generic MT output. Linguists spent a significant part of their editing time correcting terminology, adjusting register, and fixing choices the MT made because it had no information about the client's requirements.

[Context-aware translation](/topic/glossary/context-aware-translation) changes what arrives at the post-editor's screen. When the MT engine receives [glossary enforcement](/topic/glossary/glossary-management), [translation memory](/topic/glossary/translation-memory) references, and brand voice parameters before generating output, the first draft already reflects those constraints. Approved terms are used. The register is set. Previously approved segments are referenced for style consistency.

The post-editor's job narrows: rather than correcting the full range of issues that generic MT introduces, the work focuses on cultural judgment, edge cases, and quality confirmation. In Flixu, the [LQA scoring](/features/lqa) layer — measuring grammar, accuracy, terminology, fluency, and formatting — provides a signal for which segments need attention and which can be approved. Segments above the quality threshold (LQA score >90) can flow to [auto-approval](/features/auto-approval) without manual review.

The translator's role doesn't disappear — it changes. Time goes toward the content that benefits from human judgment, not toward corrections that a better-configured system would have avoided.

## Related Terms

- [Post-Editing](/topic/glossary/post-editing) — the human editing step within MTPE; sometimes used interchangeably, but post-editing refers specifically to the editing activity
- [Machine Translation](/topic/glossary/machine-translation) — the MT layer that produces the draft the editor reviews
- [Neural Machine Translation](/topic/glossary/neural-machine-translation) — the dominant MT architecture behind most modern MTPE workflows
- [Translation Quality Assurance](/topic/glossary/translation-quality-assurance) — the quality evaluation framework that determines how much post-editing is needed
- [CAT Tool](/topic/glossary/cat-tool) — the editing environment where post-editors review and correct MT output segment by segment
- [Language Service Provider](/topic/glossary/language-service-provider) — agencies that typically manage MTPE workflows and translator networks
- [Transcreation](/topic/glossary/transcreation) — the alternative to MTPE for content where MT output isn't a useful starting point
- [Glossary Management](/topic/glossary/glossary-management) — the terminology layer that reduces terminology errors in MT output before post-editing begins

## Related Guides

- [How Flixu's LQA Works](/features/lqa) — quality scoring that identifies which segments need post-editor attention
- [For Translation Agencies](/for/agencies) — how Flixu fits into agency workflows that use MTPE as a core production model
- [AI in Translation: What's Actually Changed](/topic/ai-in-translation) — how context-aware MT is changing the post-editor's role and workload

---

*Last Updated: March 2026 · Author: Deniz, Founder — Flixu AI*
