---
title: "Machine Translation"
description: "Machine translation automates text conversion between languages. Learn the three generations of MT, what NMT still doesn't solve, and when post-editing is required."
relatedTerms: ["neural-machine-translation", "post-editing", "cat-tool", "mtpe", "context-aware-translation", "bleu-score", "translation-memory", "glossary-management"]
---

# What Is Machine Translation (MT)?

> **Machine Translation (MT)** is the automated conversion of text from one language to another using computational systems. It has evolved from rigid rule-based systems in the 1970s through statistical methods in the 2000s to neural and LLM-based approaches today. Modern MT can produce fluent output at scale — the open question for professional use is whether it produces accurate, contextually appropriate output for a given organization's content.

## Why MT Is Hard

Human language isn't a lookup table. The same word carries different meanings depending on what surrounds it — in linguistics, this is called polysemy. The word *execute* means something different in a software manual, a corporate strategy document, and a legal contract. A system that doesn't understand context will choose the wrong meaning.

Beyond individual words, tone, register, and cultural reference all affect whether a translation reads as natural or foreign. A system trained on general text doesn't know whether your product sounds formal or casual, what your terminology requirements are, or whether a phrase that works in English has an equivalent in your target market.

These challenges haven't been eliminated — they've been progressively reduced over three generations of MT architecture.

## The Three Generations of MT

**Generation 1: Rule-Based Machine Translation (RBMT) — 1970s–1980s.** Early MT treated language as a formal grammar system. Developers built dictionaries mapped to grammatical rulebooks: if a verb appears here, it moves there; if the noun is masculine, conjugate this way. The system worked on sentences that matched the rules. It broke on idioms, slang, and anything the rulebook hadn't anticipated.

**Generation 2: Statistical Machine Translation (SMT) — 2000s.** SMT abandoned the grammar-first approach. Instead of encoding rules, it fed computers large volumes of bilingual text — translated parliamentary proceedings, multilingual web crawls — and used probability calculations to find the most likely translation for a given sequence of words. Google Translate was built on SMT.

The output was more flexible than RBMT but still operated on statistical patterns rather than understanding. Long sentences with complex dependencies often degraded. Consistent style was hard to maintain.

**Generation 3: [Neural Machine Translation](/topic/glossary/neural-machine-translation) (NMT) — from ~2016.** Neural Machine Translation changed the architecture. Instead of calculating word-by-word probabilities, NMT encodes the entire source sentence into a numerical representation — a vector — and decodes that into the target language. This allows the model to consider the full sentence context before producing output.

NMT is the basis for modern consumer MT tools. It produces significantly more fluent output than SMT, particularly for complex sentences. The current standard in most professional deployments.

## What NMT Still Doesn't Solve

Fluency and accuracy at the sentence level are different problems. An NMT model can produce grammatically correct, natural-sounding German and still:

- Translate a product name that should stay in English
- Use a different register than your brand requires
- Render a domain-specific term with the wrong meaning for your industry
- Produce inconsistent terminology across a document because it has no memory of earlier choices

These are the problems that [context-aware translation](/topic/glossary/context-aware-translation) addresses — by applying [glossary management](/topic/glossary/glossary-management), [translation memory](/topic/glossary/translation-memory), brand voice parameters, and domain classification before the model generates output. The distinction isn't fluency; NMT handles fluency. The distinction is whether the output conforms to your organization's requirements.

This is also why MT output typically requires [post-editing](/topic/glossary/post-editing) before professional use: the base output may be fluent, but it needs review against the specific standards of the job.

## MT vs. Human Translation

| | Machine Translation | Human Translation |
|---|---|---|
| **Speed** | Milliseconds to seconds | Hours to days |
| **Cost** | Low per-word cost at scale | Higher, especially for specialist content |
| **Fluency** | Strong with NMT | Naturally fluent |
| **Terminology consistency** | Poor by default; requires configuration | Good with experienced translators |
| **Cultural judgment** | Limited | Strong |
| **Best for** | High volume, lower-stakes content; first drafts for [MTPE](/topic/glossary/mtpe) | High-stakes, creative, or complex regulated content |

MT and human translation are not competing approaches — they're used in combination. [MTPE](/topic/glossary/mtpe) (Machine Translation Post-Editing) is the workflow that applies human review to MT output, focusing effort on the segments that need it rather than translating everything from scratch.

## Related Terms

- [Neural Machine Translation](/topic/glossary/neural-machine-translation) — the dominant MT architecture; how NMT works in technical detail
- [Post-Editing](/topic/glossary/post-editing) — the human review layer applied to MT output in professional workflows
- [MTPE](/topic/glossary/mtpe) — the combined workflow of MT + human editing
- [Context-Aware Translation](/topic/glossary/context-aware-translation) — the approach that addresses MT's organizational context limitations
- [BLEU Score](/topic/glossary/bleu-score) — the standard metric for benchmarking MT quality
- [CAT Tool](/topic/glossary/cat-tool) — the editing environment where post-editors review and correct MT output
- [Translation Memory](/topic/glossary/translation-memory) — the database that provides consistency across MT output over time
- [Glossary Management](/topic/glossary/glossary-management) — the terminology layer that enforces consistent term choices in MT output

## Related Guides

- [What Is Neural Machine Translation?](/topic/glossary/neural-machine-translation) — how NMT architecture works and why it outperformed SMT
- [AI in Translation: What's Actually Changed](/topic/ai-in-translation) — the full picture of how MT, NMT, and LLM-based systems relate to each other
- [Context-Aware Translation: What It Is and How It Works](/topic/context-aware-translation) — how context configuration addresses MT's remaining limitations

---

*Last Updated: March 2026 · Author: Deniz, Founder — Flixu AI*
