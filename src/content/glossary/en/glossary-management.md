---
title: "Glossary Management"
description: "Glossary management defines how product terms and trademarks translate across languages — and enforces those definitions at inference, not after the fact."
relatedTerms: ["context-aware-translation", "translation-memory", "brand-voice-translation", "domain-aware-translation", "translation-quality-assurance", "language-service-provider", "tms"]
relatedTopics: ["glossary-terminology-management"]
---

# What Is Glossary Management?

> **Glossary Management** is the practice of defining how specific terms — product names, trademarks, domain-specific vocabulary, and branded features — should be translated (or left untranslated) across languages, and then enforcing those definitions consistently throughout the translation process. It prevents the same term from being rendered differently by different translators or systems.

## The Problem It Solves

Without a managed glossary, the same product term can accumulate multiple translations across a codebase, help center, and marketing site — not because translators made errors, but because no single definition was enforced.

A SaaS platform with a feature called *Command Center* might end up with *Kommandozentrale* in the iOS app, *Kontrollraum* in the help docs, and the original English in the support macros — all produced by different vendors working without a shared reference. Each individual choice is defensible. The combined result is a product that feels internally inconsistent, which creates confusion for users and generates support volume that wouldn't exist if one term had been locked from the start.

Glossary Management addresses this by making the approved translation a defined constraint rather than a suggestion.

## How Glossary Enforcement Works

A managed glossary maps source terms to approved target translations — or marks them as Do-Not-Translate (DNT). That mapping then gets applied before translation happens, not reviewed afterward.

In Flixu, the [Glossary Enforcement](/features/glossary-enforcement) feature covers 22+ languages and operates at inference time. When a string containing a glossary term is submitted, the approved translation for that term is injected as a constraint. The model constructs the surrounding grammar to fit the locked term — not the other way around.

Do-Not-Translate (DNT) lists are a specific application of this. Product names, feature titles, and trademarks that should remain in English across all markets get flagged in the glossary as untranslatable. The system preserves the source string and builds the target-language sentence around it. This matters for SEO, brand recognition, and legal trademark protection — a translated product name can create ambiguity across markets that the original was designed to avoid.

## Static Glossaries vs. Active Enforcement

Most localization teams start with a static glossary: a spreadsheet or PDF listing approved terms, distributed to translators and vendors. This works at small scale. It breaks down as volume increases.

A static glossary depends on each translator choosing to reference it. When multiple vendors, multiple languages, and multiple content types are in play simultaneously, adherence becomes inconsistent. A term gets approved in one document and missed in the next. A new translator joins and hasn't read the guide. The product ships with drift.

Active glossary enforcement changes the dependency. The approved terms are loaded into the system, not sent to individuals. Every translation job runs against the same glossary, regardless of which translator, which vendor, or which content type is involved. Consistency becomes a property of the process rather than a property of individual attention.

| | Static Glossary | Active Enforcement |
|---|---|---|
| **Where terms live** | Spreadsheet or PDF | System database |
| **Applied when** | If the translator checks | At inference, automatically |
| **Consistency** | Depends on adherence | Consistent by default |
| **Scales with volume** | No | Yes |
| **Update propagation** | Manual (re-send to all vendors) | Update once, applies everywhere |

## Glossary Best Practices

**Keep it focused.** A glossary with thousands of entries creates noise. Teams that maintain 100–300 high-priority terms — core UI labels, product names, domain-specific acronyms — get more consistent enforcement than teams that attempt to cover every word. Coverage of everything means enforcement of nothing.

**Include context with each term.** A term like *Bank* needs a definition boundary, not just a target translation. Without context, [domain-aware translation](/topic/glossary/domain-aware-translation) engines have to guess which meaning applies. A glossary entry that specifies "financial institution, not a riverbank" removes that ambiguity.

**Treat the glossary as a shared resource, not a localization artifact.** When the product team renames a feature, the glossary needs to update in parallel. A term that's been locked in the glossary for two years and no longer reflects the current product creates its own consistency problems — correctly enforcing an outdated term across 15 languages. Version control and cross-team access matter.

## Glossary Management vs. Translation Memory

Both improve consistency and reduce rework — but they operate at different levels.

| | Glossary Management | [Translation Memory](/topic/glossary/translation-memory) |
|---|---|---|
| **What it stores** | Term-level rules (word or phrase → approved translation) | Segment-level pairs (full sentence → approved translation) |
| **Granularity** | Individual terms | Full segments |
| **Applied when** | Before inference, as a constraint | At match time, as a suggestion |
| **Handles** | Specific vocabulary enforcement | Repeated sentence patterns |
| **Best for** | Terminology consistency | Cost reduction through segment reuse |

[Translation Memory](/topic/glossary/translation-memory) reuses previously approved full segments. Glossary Management enforces specific terms within new segments. The two work together: TM handles repeated sentences; the glossary handles the key terms inside new ones.

## Related Terms

- [Translation Memory](/topic/glossary/translation-memory) — segment-level reuse; works alongside glossary enforcement
- [Context-Aware Translation](/topic/glossary/context-aware-translation) — the broader architecture that glossary enforcement is part of
- [Brand Voice Translation](/topic/glossary/brand-voice-translation) — the tonal layer that glossary enforces at the term level
- [Domain-Aware Translation](/topic/glossary/domain-aware-translation) — domain context that helps resolve polysemous glossary terms
- [Translation Quality Assurance](/topic/glossary/translation-quality-assurance) — the review layer that active enforcement reduces in scope
- [Language Service Provider](/topic/glossary/language-service-provider) — agencies that manage client glossaries as part of their workflow
- [TMS](/topic/glossary/tms) — the platform layer where glossaries are stored and managed at the project level

## Related Guides

- [Glossary and Terminology Management: A Practical Guide](/topic/glossary-terminology-management) — how to build, maintain, and scale a corporate glossary across markets
- [How Flixu's Glossary Enforcement Works](/features/glossary-enforcement) — 22+ language coverage, active enforcement at inference time
- [Context-Aware Translation: What It Is and How It Works](/topic/context-aware-translation) — the full framework that glossary enforcement operates within

---

*Last Updated: March 2026 · Author: Deniz, Founder — Flixu AI*
