---
title: "Formality Levels"
description: "Formality levels define the grammatical register a brand uses in translation — formal vs. informal address in German, French, Japanese, and more."
relatedTerms: ["brand-voice-translation", "cultural-localization", "context-aware-translation", "machine-translation", "glossary-management", "language-service-provider"]
---

# What Are Formality Levels?

> **Formality Levels** refer to the grammatical and stylistic register a brand uses when addressing users in a given language — the distinction between formal, respectful address and casual, direct address. This distinction is largely invisible in English, which uses "you" regardless of context, but is encoded into the grammar of most major languages and affects every sentence in the translated product.

## Why English Misses This

English has almost entirely collapsed its formal and informal registers into a single pronoun. You say "you" to a close colleague and to a senior executive. The tone shifts through word choice and sentence structure, but the pronoun stays the same.

Most major languages don't work this way. German distinguishes *Sie* from *du*. French distinguishes *vous* from *tu*. Spanish distinguishes *usted* from *tú*. Japanese has an entire honorific system. In each case, the choice isn't cosmetic — it determines verb conjugation, adjective agreement, and the structural register of every sentence in the translation.

English-speaking software teams building global products often encounter this for the first time when a native speaker in a target market tells them something feels off. The translation is technically correct. But the register is wrong for the context — and that registers as an error to the reader even if they can't articulate exactly why.

## What the Wrong Register Communicates

The T-V distinction in European languages (from Latin *tu* and *vos*) carries social meaning that goes beyond grammar.

In German, for example:

**Sie (formal)** is the standard register for B2B software, legal and financial platforms, healthcare tools, and any product where professional credibility matters. It signals stability and respect for professional distance.

**du (informal)** is the register for consumer apps, lifestyle products, and brands that position themselves as peers rather than vendors. It signals approachability and directness.

A cybersecurity firm that ships its platform interface in *du* may find German users perceive it as too casual for the context — not incompetent, but misaligned. A consumer fitness app written in *Sie* will likely feel stiff and distant to its intended audience. Neither is a translation error. Both are formality mismatches.

French works similarly: *vous* is standard for B2B and professional contexts; *tu* reads as deliberate informality, which some modern software brands use intentionally. Spanish adds regional variation — *vosotros* in Spain, *ustedes* in Latin America — which means the "right" formal choice also depends on which Spanish-speaking market you're addressing.

## Asian Register Systems

Japanese presents a more complex case. Keigo — the Japanese honorific system — is not a binary choice but a layered set of speech levels that shift based on the social relationship between speaker and listener, and between the speaker and the subject.

In B2B software, this typically means using *sonkeigo* (respectful language) when referring to the user's actions and *kenjōgo* (humble language) when referring to the software or company's actions. Getting this wrong doesn't just sound informal — it can communicate an incorrect hierarchy of respect, which in Japanese professional culture carries real social weight.

Korean has a similar system of speech levels (*jondaemal* vs. *banmal*) with professional contexts defaulting to formal forms. Standard [machine translation](/topic/glossary/machine-translation) without explicit formality configuration tends to produce inconsistent or defaulted output in these languages — occasionally correct, but not reliably so across an entire product.

## How Formality Is Handled in Localization Systems

Traditional localization managed formality through style guides — documents that specified register choices market by market and relied on translators to apply them consistently.

The limitation of that approach is consistency at scale. When multiple translators work on the same product across different content types, formality can drift. A help center article and an onboarding email might end up in different registers if neither translator has a mechanism to check against the other's choices.

In a system with a defined brand voice profile, the formality register is set once and applied as a parameter across all translation jobs. Flixu's [Brand Voice Manager](/features/brand-voice) includes formality as a configurable dimension — formal or informal, per language and per content type. This is part of the broader [context-aware translation](/topic/glossary/context-aware-translation) framework, where formality is one of the five dimensions analyzed before inference.

## Formality Levels vs. Brand Voice

These two concepts overlap but are not the same.

| | Formality Levels | Brand Voice |
|---|---|---|
| **What it governs** | Grammatical register (pronouns, verb forms) | Tone, vocabulary, energy, style |
| **Encoded in grammar** | Yes — affects conjugation and structure | No — expressed through word choice |
| **Varies by language** | Strongly — different systems per language | Consistent across languages by design |
| **Set per content type** | Often (legal vs. consumer-facing) | Per brand or campaign |
| **Example** | *Sie* vs. *du* in German | Direct vs. hedged, technical vs. accessible |

Formality is a grammatical constraint. [Brand voice](/topic/glossary/brand-voice-translation) is a stylistic one. A brand can use formal address (*Sie*) in a warm, approachable tone — or informal address (*du*) in a sharp, technical tone. The two settings combine to produce the full register.

## Related Terms

- [Brand Voice Translation](/topic/glossary/brand-voice-translation) — the broader tonal layer that formality settings contribute to
- [Cultural Localization](/topic/glossary/cultural-localization) — the wider adaptation process that formality is part of
- [Context-Aware Translation](/topic/glossary/context-aware-translation) — the methodology that includes formality as a configurable dimension
- [Machine Translation](/topic/glossary/machine-translation) — the baseline approach that doesn't model formality by default
- [Glossary Management](/topic/glossary/glossary-management) — the terminology layer that works alongside register settings
- [Language Service Provider](/topic/glossary/language-service-provider) — the translators who historically enforced formality via style guides

## Related Guides

- [Brand Voice in Translation: A Practical Guide](/topic/brand-voice-in-translation) — how formality fits into a broader brand voice strategy across markets
- [How Flixu's Brand Voice Manager Works](/features/brand-voice) — configuring formality and tone as parameters applied before inference
- [Cultural Localization: What It Covers](/topic/glossary/cultural-localization) — the full scope of cultural adaptation that formality is one part of

---

*Last Updated: March 2026 · Author: Deniz, Founder — Flixu AI*
