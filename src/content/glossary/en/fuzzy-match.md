---
title: "Fuzzy Match"
description: "A fuzzy match surfaces a similar Translation Memory segment as a starting point — with changed elements flagged for review. Learn how match tiers affect localization costs."
relatedTerms: ["translation-memory", "exact-match", "cat-tool", "tms", "total-cost-of-ownership", "language-service-provider", "mtpe"]
---

# What Is a Fuzzy Match?

> A **Fuzzy Match** occurs when a new source string resembles — but doesn't exactly replicate — a segment already stored in your [Translation Memory](/topic/glossary/translation-memory). The system surfaces the historical translation as a starting point, with the changed portions flagged for review. Instead of translating the full sentence from scratch, the translator (or AI) adjusts only what has changed.

## How It Works

Translation Memory stores every segment you've approved as a source/target pair. When new content comes in, the system scans it against the database. If a segment matches a stored entry perfectly, it's an [Exact Match](/topic/glossary/exact-match) — auto-inserted with no work required. If a segment is close but not identical, it's a Fuzzy Match.

The match percentage reflects how similar the new string is to the stored one. A 95% fuzzy match might differ by a single punctuation mark. An 80% match might have a changed noun and different verb tense.

A practical example: your TM holds the approved German translation for:

*"Press the red button to delete the admin user."*

A UI update changes it to:

*"Press the blue button to delete the guest user."*

The system recognizes the structural similarity and flags this as an 85% Fuzzy Match. The stored translation pre-populates in the [CAT tool](/topic/glossary/cat-tool), with "red" → "blue" and "admin" → "guest" highlighted. The translator edits those two points rather than starting over.

## Fuzzy Match Pricing Tiers

Fuzzy matches have a direct effect on how [language service providers](/topic/glossary/language-service-provider) bill for localization work. The closer the match, the less effort required — and most agencies apply tiered discount rates accordingly.

| Match Range | What Typically Changed | Standard Billing Rate |
|---|---|---|
| **95% – 99%** | Punctuation, capitalization, a number | ~30% of full rate |
| **85% – 94%** | One noun or adjective replaced | ~50–60% of full rate |
| **75% – 84%** | More significant edits, verb conjugation | ~70–80% of full rate |
| **Below 75%** | Treated as new text | 100% of full rate |

These tiers vary by agency and contract, but the principle is consistent: higher match percentage, lower cost. For projects with large volumes of repeated or near-repeated content — software updates, documentation revisions, recurring legal templates — fuzzy match rates directly affect the [total cost of ownership](/topic/glossary/total-cost-of-ownership) of localization.

## Character Matching vs. Semantic Matching

Traditional fuzzy matching worked by counting character-level differences between strings — the Levenshtein Distance algorithm, which measures how many character edits are required to convert one string to another.

The limitation is that character-level similarity doesn't always reflect meaning similarity. Consider:

- *"The automobile crashed"*
- *"The car crashed"*

These two sentences mean the same thing. A character-based algorithm scores them poorly — "automobile" and "car" share no character sequence. A human translator would recognize them as functionally identical and apply the stored translation with confidence.

Flixu's Translation Memory uses a semantic approach based on vector search rather than character matching. The system retrieves segments based on conceptual similarity — recognizing that "car" and "automobile" occupy the same semantic space — rather than requiring string-level equivalence. This means segments that a traditional [TMS](/topic/glossary/tms) would score as low-fuzzy or no-match can be surfaced and reused when the meaning is close enough to warrant it.

The practical effect is more TM reuse from the same database, which reduces the proportion of content that needs fresh translation.

## Fuzzy Match vs. Exact Match

| | Fuzzy Match | [Exact Match](/topic/glossary/exact-match) |
|---|---|---|
| **Match condition** | Similar but not identical | Character-for-character identical |
| **Automatic insertion** | No — suggestion requires review | Yes — auto-inserted |
| **Human effort required** | Editing to correct changed elements | None |
| **Pricing** | Discounted per tier | Zero or near-zero |
| **Risk of error** | Moderate — requires translator judgment | Low (with context verification) |

Fuzzy matches are most useful when content evolves incrementally — the same legal clause with an updated date, a UI label where one word changed, a product description with a revised specification. The more a product's content follows consistent patterns, the more value a maintained TM delivers through fuzzy match recovery.

## Related Terms

- [Translation Memory](/topic/glossary/translation-memory) — the database that makes fuzzy matching possible
- [Exact Match](/topic/glossary/exact-match) — the 100% match case; auto-inserted without review
- [CAT Tool](/topic/glossary/cat-tool) — the editing environment where fuzzy suggestions are displayed and resolved
- [TMS](/topic/glossary/tms) — the platform that manages TM, calculates match percentages, and applies tiered pricing
- [Total Cost of Ownership](/topic/glossary/total-cost-of-ownership) — how fuzzy match rates affect the economics of localization
- [Language Service Provider](/topic/glossary/language-service-provider) — agencies that apply fuzzy match billing tiers
- [MTPE](/topic/glossary/mtpe) — the post-editing workflow that fuzzy matches are part of

## Related Guides

- [Translation Memory: How It Works and Why It Matters](/topic/translation-memory-guide) — how TM is built, maintained, and how match rates affect project costs
- [How Flixu's Translation Memory Works](/features/translation-memory) — semantic retrieval and how Flixu calculates match similarity

---

*Last Updated: March 2026 · Author: Deniz, Founder — Flixu AI*
