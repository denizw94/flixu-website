---
title: "Translation Memory (TM)"
description: "Translation Memory stores approved translation pairs for reuse. Learn how it reduces localization costs, why TM hygiene matters, and how semantic retrieval improves matches."
relatedTerms: ["fuzzy-match", "exact-match", "tmx", "cat-tool", "glossary-management", "tms", "total-cost-of-ownership", "post-editing"]
relatedTopics: ["translation-memory-guide"]
---

# What Is Translation Memory (TM)?

> A **Translation Memory (TM)** is a database that stores approved translation pairs — each source segment alongside its accepted target translation. When new content contains a segment that matches or closely resembles something already in the database, the system surfaces the stored translation for reuse. Over time, a well-maintained TM reduces translation costs, shortens turnaround, and keeps terminology consistent across every project.

## How Translation Memory Works

Every time a translation is reviewed and approved, the source segment and its target translation are stored as a pair in the TM. The next time a segment with the same or similar text appears — in a new document, a product update, a support article — the system checks the database before doing any new translation work.

If the new segment matches a stored segment exactly, the stored translation is surfaced automatically. This is an [exact match](/topic/glossary/exact-match). The translator confirms it or uses it directly, with no new translation required.

If the new segment is similar but not identical — a word has changed, the phrasing differs slightly — the system surfaces the closest stored translation as a suggestion. This is a [fuzzy match](/topic/glossary/fuzzy-match). The translator edits it to account for the difference, rather than translating from scratch.

Both match types reduce the volume of new translation work in every project, and that reduction compounds across the life of the product.

## The Economics

The cost impact of TM depends on how much content repeats. Technical SaaS documentation has high repetition: the same navigational labels, error messages, legal disclaimers, and UI patterns appear across many files and product versions.

A practical example: a 10,000-word documentation update where 60% of segments match existing TM entries means only 4,000 words need full translation. The matched segments either auto-populate or require only light review. Most language service providers price exact matches at zero or near-zero cost; fuzzy matches at discounted rates.

This effect accumulates. A TM built over several years of active localization work contains a large proportion of a product's total vocabulary. Each new release or update draws more heavily on that bank of approved translations, which lowers the marginal cost of each subsequent project. Industry estimates for mature TMs suggest cost reductions of 40–70% compared to translating everything fresh — though the actual figure depends on content type, language pair, and match rates.

## TM Hygiene: Why Quality Matters

A TM stores whatever gets approved. If a mistranslation makes it through review, it enters the database — and the next time that segment appears, the system will surface the flawed translation. A single wrong term approved once can propagate across dozens of screens and documents before anyone notices.

This is why TM hygiene matters. Regular audits catch outdated translations — product terminology changes, brand voice evolves, legal requirements shift. Translations that were correct two years ago may not reflect current standards. A localization manager who treats the TM as a live asset, not a static archive, protects the quality of everything built on top of it.

Flixu's [LQA scoring](/features/lqa) — evaluating grammar, accuracy, terminology, fluency, and formatting — provides a signal for which segments in the review queue meet the standard before they're approved into the TM.

## From Character Matching to Semantic Retrieval

Traditional TM matching was character-based. The system checked whether the new string was textually close to a stored string. "Click the red button" would match well against "Click the red button." "Select the red button" would score poorly — the word "select" looks nothing like "click" in character terms, despite meaning the same thing in context.

Flixu's Translation Memory uses a **Semantic Reranker** and **Scalable Vector Search** instead of character matching. Segments are stored as semantic vectors — numerical representations of their meaning. When a new segment arrives, the system retrieves stored segments based on conceptual similarity rather than textual similarity.

The practical effect: matches surface that character-based systems would miss. "Click" and "select" occupy similar vector space. "Purchase" and "buy" do too. A TM built with semantic retrieval becomes more useful as it grows — not just for exact and fuzzy character matches, but for stylistically and conceptually similar segments that inform how the new translation should sound.

## Translation Memory vs. Glossary Management

Both improve consistency, but they operate at different levels.

| | Translation Memory | Glossary Management |
|---|---|---|
| **What it stores** | Full segment pairs (sentence-level) | Approved term translations (word/phrase level) |
| **Applied when** | At match time — segment surfaced as suggestion | At inference time — term enforced as constraint |
| **Handles** | Repeated sentences and patterns | Specific vocabulary that must be consistent |
| **Match type** | Exact or fuzzy | Mandatory — term must appear in output |
| **Best for** | Cost reduction, style consistency | Terminology control, brand vocabulary |

[Glossary Management](/topic/glossary/glossary-management) enforces specific terms. Translation Memory provides style context and reduces redundant work. The two work together: the glossary ensures the right terms appear; the TM ensures the surrounding sentences feel consistent with the product's established voice.

## Related Terms

- [Exact Match](/topic/glossary/exact-match) — 100% TM match; auto-inserted with no new translation
- [Fuzzy Match](/topic/glossary/fuzzy-match) — partial TM match; surfaced as suggestion for editing
- [TMX](/topic/glossary/tmx) — the open XML standard for exporting and transferring TM data
- [Glossary Management](/topic/glossary/glossary-management) — the term-level complement to TM's segment-level data
- [CAT Tool](/topic/glossary/cat-tool) — the editing interface where translators see TM suggestions inline
- [TMS](/topic/glossary/tms) — the platform that stores and manages TM databases
- [Total Cost of Ownership](/topic/glossary/total-cost-of-ownership) — how TM match rates affect the economics of localization
- [Post-Editing](/topic/glossary/post-editing) — the human review step; TM reduces the scope of work at this stage

## Related Guides

- [Translation Memory: How It Works and Why It Matters](/topic/translation-memory-guide) — a practical guide to building, maintaining, and getting maximum value from TM
- [How Flixu's Translation Memory Works](/features/translation-memory) — Semantic Reranker, Scalable Vector Search, and how Flixu handles TM retrieval
- [AI in Translation: What's Actually Changed](/topic/ai-in-translation) — where semantic TM retrieval fits in the shift to AI-native localization

---

*Last Updated: March 2026 · Author: Deniz, Founder — Flixu AI*
