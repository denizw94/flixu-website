---
title: "Neural Machine Translation (NMT)"
description: "Neural Machine Translation evaluates the full sentence before generating output — more fluent than statistical MT. Learn the architecture and its remaining limitations."
relatedTerms: ["machine-translation", "post-editing", "mtpe", "context-aware-translation", "bleu-score", "glossary-management", "llm-routing", "translation-quality-assurance"]
---

# What Is Neural Machine Translation (NMT)?

> **Neural Machine Translation (NMT)** is a [machine translation](/topic/glossary/machine-translation) architecture that uses deep learning to evaluate an entire sentence as a unit before generating output in the target language. It replaced earlier statistical approaches that translated phrase by phrase, producing more fluent and structurally coherent results. NMT is the architecture behind most modern MT tools, including DeepL and Google Translate's current engine.

## What NMT Replaced

To understand what NMT changed, it helps to start with what came before.

Statistical Machine Translation (SMT), which powered the original Google Translate, worked by analyzing short word sequences called n-grams. When translating "the red car," it would look up the statistically most common equivalent in a bilingual database and output that match. The process repeated across the sentence, phrase by phrase.

The problem was that SMT had no model of the sentence as a whole. It couldn't hold information from earlier in the sentence and apply it to what came later. This produced translations that were often accurate at the word level but grammatically fragmented — correct parts assembled incorrectly.

## How NMT Works

NMT is built around an **Encoder-Decoder** architecture.

**The Encoder** reads the entire source sentence in one pass and converts it into a dense numerical representation — a vector — that captures the sentence's meaning as a whole. It doesn't process words in isolation. When it encounters "bank" in *"the financial bank holds my reserves,"* it has the full sentence context available, so it encodes the financial institution meaning rather than other definitions.

**The Decoder** receives that vector and generates the target-language output from it. Because it's working from a holistic representation of meaning rather than stitching phrase translations together, it can handle the structural differences between languages — including those with different word orders, complex agreement systems, or verb-final structures like Japanese.

The practical result was a step change in output quality. Sentences that SMT would produce in fragmented form came through NMT with correct syntax and natural phrasing.

## What NMT Still Doesn't Solve

Fluency is not the same as accuracy. NMT produces natural-sounding output — but natural-sounding output can still be wrong.

**Hallucination** is the term used when a model generates plausible but incorrect output. An NMT engine might produce a grammatically correct French sentence that omits a critical negation — changing "the client is **not** liable" to "the client is liable." The fluency makes the error harder to spot, not easier.

Beyond accuracy, a baseline NMT endpoint has no information about the organization using it. It doesn't know that "Dashboard" should stay untranslated, that your product uses formal register in German, or that a specific term has an approved translation in your [glossary](/topic/glossary/glossary-management). Its output defaults to the linguistic average of its training data — which may be fluent, but won't reflect your requirements.

This is why professional workflows apply [post-editing](/topic/glossary/post-editing) to NMT output, and why [context-aware translation](/topic/glossary/context-aware-translation) — which supplies [glossary management](/topic/glossary/glossary-management), [translation memory](/topic/glossary/translation-memory), and brand voice parameters before generation — addresses the limitations that NMT architecture alone can't resolve.

## NMT vs. Statistical Machine Translation (SMT)

| | SMT | NMT |
|---|---|---|
| **Unit of analysis** | Short phrases (n-grams) | Full sentence |
| **Sentence awareness** | Limited — phrase by phrase | Full context before output |
| **Fluency** | Often fragmented | Significantly more natural |
| **Grammar handling** | Struggles with complex structures | Handles divergent word orders better |
| **Hallucination risk** | Lower — statistical matches | Higher — generative output |
| **Current use** | Legacy systems | Standard in modern MT tools |

SMT is largely a historical benchmark at this point. NMT is the current standard. The active question in professional localization isn't NMT vs. SMT — it's how NMT output should be configured and reviewed for specific organizational requirements.

## Related Terms

- [Machine Translation](/topic/glossary/machine-translation) — the broader category NMT is a generation of
- [Post-Editing](/topic/glossary/post-editing) — the human review step applied to NMT output
- [MTPE](/topic/glossary/mtpe) — the combined workflow of NMT output plus human editing
- [Context-Aware Translation](/topic/glossary/context-aware-translation) — the methodology that addresses NMT's organizational context limitations
- [BLEU Score](/topic/glossary/bleu-score) — the standard metric used to benchmark NMT quality across language pairs
- [Glossary Management](/topic/glossary/glossary-management) — the terminology layer applied to NMT output to enforce approved terms
- [LLM Routing](/topic/glossary/llm-routing) — how modern systems select and configure models, including NMT-based architectures
- [Translation Quality Assurance](/topic/glossary/translation-quality-assurance) — the quality framework that identifies where NMT output requires correction

## Related Guides

- [What Is Machine Translation?](/topic/glossary/machine-translation) — the full evolution from RBMT through SMT to NMT and LLM-based systems
- [AI in Translation: What's Actually Changed](/topic/ai-in-translation) — where NMT fits in the current AI-native localization landscape
- [How Flixu's Context Engine Works](/product/context) — how context configuration addresses the limitations NMT leaves open

---

*Last Updated: March 2026 · Author: Deniz, Founder — Flixu AI*
