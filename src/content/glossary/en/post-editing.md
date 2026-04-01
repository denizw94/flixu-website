---
title: "Post-Editing"
description: "Post-editing is the human review step in MT workflows — correcting and refining machine-translated drafts. Learn the two service levels and what determines editing scope."
relatedTerms: ["machine-translation", "neural-machine-translation", "mtpe", "translation-quality-assurance", "cat-tool", "transcreation", "glossary-management", "language-service-provider"]
---

# What Is Post-Editing?

> **Post-Editing** is the process of reviewing and improving machine-translated text to a required quality level. A human linguist receives the MT output as a draft and corrects errors, adjusts terminology, and refines phrasing — working from existing text rather than translating from scratch. The depth of editing required depends on the quality of the MT output and the standards the content must meet.

## Post-Editing vs. MTPE

Post-editing and [MTPE](/topic/glossary/mtpe) are closely related terms. MTPE (Machine Translation Post-Editing) refers to the combined workflow — the MT engine produces a draft, a human post-edits it. Post-editing refers specifically to the human editing step within that workflow.

In practice, the terms are often used interchangeably. When a localization brief specifies "post-editing," it typically means the human's contribution to an MTPE workflow — not a distinct process from it.

## The Two Service Levels

**Light Post-Editing (LPE)** focuses on correctness, not polish. The editor corrects meaning errors, fixes omissions, and removes anything factually wrong or potentially offensive — without investing time in sentences that are accurate but phrased awkwardly.

This level is appropriate for: internal documentation, high-volume knowledge base content, product data, or any content where accuracy matters more than style.

**Full Post-Editing (FPE)** brings the output to publication standard. The editor works through the text until it reads as though a human translated it from scratch — restructuring awkward phrasing, enforcing [glossary](/topic/glossary/glossary-management) terms, applying the right [formality level](/topic/glossary/formality-levels), and maintaining consistent [brand voice](/topic/glossary/brand-voice-translation) throughout.

This level is appropriate for: software UI, marketing content, legal compliance documentation, and anything a user will judge the company by. For content where the source relies heavily on culturally specific metaphors or creative expression, [transcreation](/topic/glossary/transcreation) rather than post-editing may be the right choice — post-editing works best when there's a usable draft to start from.

## What Affects How Much Editing Is Needed

The amount of post-editing a document requires is not fixed — it depends on several variables:

**MT quality.** Generic [machine translation](/topic/glossary/machine-translation) endpoints produce output of varying quality across language pairs, domains, and content types. The better the MT output, the less editing is required.

**Context configuration.** When the MT engine receives [glossary management](/topic/glossary/glossary-management) constraints, [translation memory](/topic/glossary/translation-memory) references, and brand voice parameters before generating, the first draft already reflects those requirements. Approved terms appear in their approved forms. The register is set before output is generated. Post-editors spend their time on cultural judgment and edge cases rather than basic corrections.

**Content type and domain.** Technical documentation with consistent terminology and clear sentence structures tends to produce better MT output than marketing copy with idioms, humor, or cultural references. The domain affects both the MT quality and the scope of editing needed.

**Language pair.** MT quality varies by language pair. Pairs with large training corpora (e.g., German-English, French-English, Spanish-English) generally require less post-editing than lower-resource pairs or those with significantly different grammar structures.

## The Changing Scope of Post-Editing

Early MTPE workflows — built around Statistical MT output — required substantial editing. The MT produced fragmented, literal output that often needed to be rewritten rather than corrected.

[Neural machine translation](/topic/glossary/neural-machine-translation) improved fluency, which changed the post-editor's experience. The output sounded more natural, even when it was wrong — which made certain errors harder to spot but reduced the volume of purely mechanical corrections.

Context-aware approaches — supplying glossaries, translation memory, and brand voice configuration before generation — change what arrives at the post-editor's screen. The draft already respects approved terminology and register settings. The editor's work focuses on what requires human judgment: cultural nuance, ambiguous passages, and quality confirmation on segments that automated scoring has flagged for review.

In systems with LQA scoring, post-editors review the segments that fall below the quality threshold. Segments above the threshold — meeting the standard on grammar, accuracy, terminology, fluency, and formatting — can pass to [auto-approval](/features/auto-approval) without manual review.

## Post-Editing vs. Full Human Translation

| | Post-Editing | Full Human Translation |
|---|---|---|
| **Starting point** | MT-generated draft | Blank document |
| **Translator's task** | Review, correct, refine | Translate from source |
| **Speed** | Faster when MT quality is sufficient | Consistent regardless of MT quality |
| **Output quality ceiling** | Depends on MT + editing depth | Consistent with translator skill |
| **Best for** | High volume; technical; repetitive content | Creative, high-stakes, complex cultural content |

## Related Terms

- [MTPE](/topic/glossary/mtpe) — the combined workflow of MT output followed by post-editing
- [Machine Translation](/topic/glossary/machine-translation) — the MT layer that produces the draft the post-editor reviews
- [Neural Machine Translation](/topic/glossary/neural-machine-translation) — the dominant MT architecture in modern post-editing workflows
- [Translation Quality Assurance](/topic/glossary/translation-quality-assurance) — the quality evaluation framework that defines what post-editing needs to achieve
- [CAT Tool](/topic/glossary/cat-tool) — the editing environment where post-editors work through MT output segment by segment
- [Transcreation](/topic/glossary/transcreation) — the alternative when MT output isn't a useful starting point for creative content
- [Glossary Management](/topic/glossary/glossary-management) — the terminology layer that reduces correction scope in post-editing
- [Language Service Provider](/topic/glossary/language-service-provider) — agencies that manage post-editing workflows and translator networks

## Related Guides

- [What Is MTPE?](/topic/glossary/mtpe) — the full combined workflow: MT output + human post-editing, service levels, and how context-aware MT changes the process
- [How Flixu's LQA Works](/features/lqa) — quality scoring that identifies which segments need post-editor attention
- [AI in Translation: What's Actually Changed](/topic/ai-in-translation) — where post-editing fits in current AI-native localization workflows

---

*Last Updated: March 2026 · Author: Deniz, Founder — Flixu AI*
