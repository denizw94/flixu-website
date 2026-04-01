---
title: "Exact Match"
description: "An exact match retrieves a pre-approved translation from your Translation Memory when a new string is character-for-character identical — no retranslation needed."
relatedTerms: ["translation-memory", "fuzzy-match", "tms", "total-cost-of-ownership", "translation-quality-assurance", "cat-tool", "mtpe"]
---

# What Is an Exact Match?

> An **Exact Match** occurs when a new source string is character-for-character identical to a segment already stored in your [Translation Memory](/topic/glossary/translation-memory). The system retrieves the approved historical translation automatically, with no new translation work required. This is how frequently repeated content — legal disclaimers, UI labels, product names — avoids being retranslated from scratch each time.

## How It Works

Translation Memory works by storing every segment you've translated as a source/target pair. Each time you submit new content, the system scans it against that database before anything else happens.

If a new segment matches a stored segment exactly — same words, same punctuation, same formatting — the system flags it as an Exact Match, sometimes written as a 100% Match. The stored translation is pulled from the database and inserted automatically. No translator touches it; no new translation is generated.

This matters most for content that recurs across documents or product versions. A standard terms-of-service paragraph, an error message that appears across multiple screens, a product name that appears in every piece of content — each of these, once translated and approved, costs nothing to re-apply to future documents.

## What Exact Matches Mean in Practice

**Cost.** Most [language service providers](/topic/glossary/language-service-provider) price Exact Matches at zero or near-zero — the human translator didn't do the work, so the client isn't billed for it. For projects with high repetition, this changes the [total cost of ownership](/topic/glossary/total-cost-of-ownership) of localization significantly.

**Speed.** Exact Match retrieval happens in milliseconds. When a product update ships with most strings unchanged from the previous version, those strings resolve instantly. Only the new or changed content requires translation work.

**Consistency.** Because the output comes from a previously approved translation rather than a new inference, the terminology stays stable. The same UI label translates the same way across every product version, regardless of which translator or system handles the next update.

## ICE Matches: Adding Context Verification

A standard Exact Match checks whether a segment's text is identical. It doesn't check what's around it.

That gap matters for short or ambiguous strings. The isolated word *Home* could refer to a residential address or a navigation button — two different translation solutions. A standard Exact Match might pull the wrong one if the database contains both.

An In-Context Exact Match (ICE Match) — sometimes called a 101% Match — adds a second verification layer. It requires that the surrounding segments (the segment before and the segment after) also match the stored TM data. When all three conditions are met, the system has confirmed not just that the text is identical, but that its position and context are identical.

ICE Matches carry a higher confidence level than standard Exact Matches. In Flixu, the auto-approval threshold is a 99% TM match combined with an LQA score above 90 — meaning segments meeting that bar can move to production without manual review. ICE Matches, where context is verified on both sides, contribute directly to that automated path.

## Exact Match vs. Fuzzy Match

| | Exact Match (100%) | [Fuzzy Match](/topic/glossary/fuzzy-match) |
|---|---|---|
| **Match condition** | Character-for-character identical | Similar but not identical |
| **Automatic insertion** | Yes | Suggested, requires review |
| **Human effort required** | None | Editing to confirm or correct |
| **Typical pricing** | Zero or near-zero | Discounted per-word rate |
| **Risk of error** | Low (with context verification) | Higher — needs translator judgment |

[Fuzzy matches](/topic/glossary/fuzzy-match) surface segments that are close but not identical — a sentence where one word has changed, or a new product name has been inserted. These need a translator to review and confirm. Exact Matches skip that step entirely.

## Related Terms

- [Translation Memory](/topic/glossary/translation-memory) — the database that makes Exact Matches possible
- [Fuzzy Match](/topic/glossary/fuzzy-match) — the partial-match counterpart; requires review rather than auto-insertion
- [TMS](/topic/glossary/tms) — the platform that manages TM, runs match detection, and applies Exact Matches across projects
- [Total Cost of Ownership](/topic/glossary/total-cost-of-ownership) — how Exact Match rates affect the economics of localization at scale
- [Translation Quality Assurance](/topic/glossary/translation-quality-assurance) — the review layer that ICE Matches help reduce in scope
- [CAT Tool](/topic/glossary/cat-tool) — the editing environment where translators see Exact Match suggestions inline
- [MTPE](/topic/glossary/mtpe) — the post-editing workflow that Exact Matches bypass entirely

## Related Guides

- [Translation Memory: How It Works and Why It Matters](/topic/translation-memory-guide) — the full guide to building and maintaining TM across projects
- [How Flixu's Translation Memory Works](/features/translation-memory) — semantic retrieval and auto-approval workflows
- [AI in Translation: What's Actually Changed](/topic/ai-in-translation) — where TM and Exact Match fit in AI-native localization

---

*Last Updated: March 2026 · Author: Deniz, Founder — Flixu AI*
