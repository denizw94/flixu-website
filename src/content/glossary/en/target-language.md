---
title: "Target Language"
description: "Target language is the language content is translated into. Learn the engineering constraints it introduces and why locale precision — not just language — matters."
relatedTerms: ["source-language", "internationalization", "text-expansion", "cultural-localization", "formality-levels", "translation-memory", "glossary-management"]
---

# What Is Target Language?

> The **target language** is the language a text is translated into. In localization workflows, it's the output — the language the end user will read in their market. Choosing a target language is only the first step; a fully localized product also accounts for the engineering constraints each target language introduces, and the regional dialect that best fits the specific market.

## Target Language in Localization Workflows

Every translation project has a direction: from [source language](/topic/glossary/source-language) to target language. The source is where the content starts. The target is where it needs to arrive.

For a software product, this means the UI strings, documentation, and marketing copy written in the source language get translated into each target language the product is being launched in. The target language determines what the user reads, but it also determines several technical requirements the engineering stack needs to accommodate.

## Engineering Constraints by Target Language

Translating into a new language isn't only a text operation. Each target language introduces constraints the frontend and database layers need to handle.

**Text expansion and contraction.** Different languages occupy different amounts of space for the same content. German, Finnish, and Russian typically expand English source text by 20–40%. Languages using logographic scripts — Mandarin, Japanese Kanji — often contract it. A UI with fixed-width containers designed around English text lengths will break when German text overflows the buttons and labels. See: [Text Expansion](/topic/glossary/text-expansion).

**Right-to-left (RTL) layout.** Arabic and Hebrew read right to left. A product being localized into these languages needs its interface to mirror — navigation moves to the right, text alignment flips, the DOM structure reverses. This is an engineering task, not a translation task, and needs to be built into the frontend before localization begins. See: [Internationalization (i18n)](/topic/glossary/internationalization).

**Character encoding.** Languages using non-Latin scripts — Devanagari, Thai, Cyrillic, Arabic, Japanese — require UTF-8 encoding throughout the stack. A database configured for ASCII will corrupt non-Latin characters on output, producing unreadable sequences (a rendering failure known as mojibake). The encoding requirement applies at every layer: database, API, and frontend.

## Locale vs. Language

A target language designation like "Spanish" or "Portuguese" isn't precise enough for production use. The correct unit is a locale — a language code paired with a regional variant.

Spanish spoken in Madrid (`es-ES`) and Spanish spoken in Mexico City (`es-MX`) use different vocabulary, different [formality conventions](/topic/glossary/formality-levels), different date and currency formats, and in some contexts, different legal terminology. A single "Spanish" translation applied across both markets will have errors in at least one of them.

The same applies to Portuguese: European Portuguese (`pt-PT`) and Brazilian Portuguese (`pt-BR`) differ enough that a single translation optimized for one will feel noticeably off in the other. French Canadian (`fr-CA`) uses "courriel" where European French (`fr-FR`) uses "e-mail." The locale distinction isn't a technicality — it's the level at which localization quality is actually evaluated by the user.

This is why [glossary management](/topic/glossary/glossary-management) and [translation memory](/topic/glossary/translation-memory) assets are organized by locale code, not just language, and why [cultural localization](/topic/glossary/cultural-localization) decisions — color conventions, imagery, compliance requirements — vary by locale rather than language family.

## Target Language vs. Source Language

| | Source Language | Target Language |
|---|---|---|
| **Definition** | Original language the content is authored in | Language the content is translated into |
| **Role in workflow** | Input — submitted for translation | Output — delivered to the target market |
| **Number per project** | Usually one | One or many |
| **TM relationship** | Left side of each TM pair | Right side of each TM pair |
| **Engineering implications** | Determines string format and extraction method | Determines layout, encoding, and formatting requirements |

## Related Terms

- [Source Language](/topic/glossary/source-language) — the language the content starts in; the complementary concept
- [Internationalization (i18n)](/topic/glossary/internationalization) — the engineering prerequisite that makes the stack capable of rendering any target language
- [Text Expansion](/topic/glossary/text-expansion) — the layout challenge that target languages with longer text introduce
- [Cultural Localization](/topic/glossary/cultural-localization) — the broader adaptation process that goes beyond translating into the target language
- [Formality Levels](/topic/glossary/formality-levels) — register choices that vary by locale within the same target language
- [Translation Memory](/topic/glossary/translation-memory) — stores source-to-target pairs, organized by locale
- [Glossary Management](/topic/glossary/glossary-management) — enforces approved terms per target locale

## Related Guides

- [What Is Source Language?](/topic/glossary/source-language) — the complementary concept; how source language selection affects translation quality and TM architecture
- [What Is Cultural Localization?](/topic/glossary/cultural-localization) — what a target language adaptation requires beyond translation
- [What Is Internationalization?](/topic/glossary/internationalization) — how to prepare your engineering stack for any target language

---

*Last Updated: March 2026 · Author: Deniz, Founder — Flixu AI*
