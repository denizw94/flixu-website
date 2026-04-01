---
title: "API-Based Translation"
description: "Deliver translated text via REST API. API-based translation enables continuous localization in CI/CD pipelines and automated workflows — without manual file handoffs."
relatedTerms: ["machine-translation", "tms", "internationalization", "translation-memory", "neural-machine-translation", "continuous-localization", "xliff", "software-localization"]
---

# What Is API-Based Translation?

> **API-Based Translation** is the programmatic delivery of localized text via a REST API, allowing applications to request and receive translations at runtime. It replaces manual file handoffs with direct integration into software pipelines, CI/CD systems, and backend workflows — making continuous localization a technical default rather than a separate process.

## How It Works in Practice

At its core, an API-based translation pipeline has three steps: a request, a processing step, and a response.

When a triggering event occurs — say, a German user submits a support ticket — the backend application sends the raw text to a translation endpoint, tagged with a source language (`de`) and a target language (`en`). The translation engine processes the request and returns a JSON object with the localized output. For the support agent reading that ticket in English, none of this is visible. It just works.

More capable APIs extend this basic model. Rather than sending plain text, developers can pass additional context alongside the string: a reference to a specific [glossary](/topic/glossary/glossary-management), a brand voice definition, or a [translation memory](/topic/glossary/translation-memory) corpus. This is what separates context-aware localization APIs from generic [machine translation](/topic/glossary/machine-translation) endpoints — the former treats each translation as a configured output, not a raw conversion.

A practical example: a SaaS product ships a new dashboard feature. When the developer commits the new UI strings to GitHub, the CI/CD pipeline triggers a translation call automatically. The localized strings come back, pass a quality check, and get committed to the relevant locale branches — without the developer opening a TMS or emailing a file to a vendor.

## Where API-Based Translation Is Used

Three use cases account for the majority of real-world API-based translation demand:

**CI/CD pipelines.** When localization is wired into the build process, new strings get translated as part of deployment — not weeks after the feature ships. This is the primary reason [software localization](/topic/glossary/software-localization) teams move away from file-based workflows.

**Support and help center workflows.** A support team handling tickets in multiple languages can operate from a single language internally, with incoming messages translated in real time. The same applies to outgoing responses, help center articles, and chatbot flows.

**Dynamic content.** Product pages, user-generated reviews, and app store listings that need localization on demand — not in batch — rely on API calls triggered at request time rather than scheduled export cycles.

## API-Based Translation vs. File-Based Localization

Both approaches aim at the same goal — getting content into multiple languages — but they differ in how and when that happens.

| | API-Based Translation | File-Based Localization |
|---|---|---|
| **Trigger** | Runtime event (code commit, user action, content update) | Manual or scheduled export |
| **Turnaround** | Milliseconds to seconds | Hours to weeks |
| **Integration depth** | Embedded in software pipeline | Separate workflow step |
| **Context per string** | Configurable via payload parameters | Dependent on file format and [TMS](/topic/glossary/tms) setup |
| **Best for** | [Continuous localization](/topic/glossary/continuous-localization), live applications, CI/CD | Document translation, batch content, offline review |

File-based localization using formats like [XLIFF](/topic/glossary/xliff) remains appropriate for structured documents, legal text, and content that requires human review before publication. API-based translation is better suited to software strings, live content, and any workflow where latency matters.

The choice is rarely either/or. Most mature localization setups combine both: API-driven translation for UI strings and dynamic content, file-based workflows for documentation and marketing assets.

## Related Terms

- [Machine Translation](/topic/glossary/machine-translation) — the AI/ML layer that powers most translation APIs
- [Translation Memory](/topic/glossary/translation-memory) — stores previously approved translations; reduces API calls for repeated strings
- [Continuous Localization](/topic/glossary/continuous-localization) — the workflow pattern that API-based translation makes possible
- [Neural Machine Translation](/topic/glossary/neural-machine-translation) — the NMT architecture underlying most modern translation APIs
- [Internationalization (i18n)](/topic/glossary/internationalization) — the prerequisite engineering step before localization can be automated
- [TMS](/topic/glossary/tms) — platforms that wrap API access with project management, review, and workflow tooling
- [Software Localization](/topic/glossary/software-localization) — the broader category that includes CI/CD-integrated translation

## Related Guides

- [How Flixu's Developer API Works](/product/developer-api) — Flixu's REST endpoint with context parameters
- [API & CI/CD Localization](/use-cases/api-cicd-localization) — end-to-end use case walkthrough
- [AI in Translation: What's Actually Changed](/topic/ai-in-translation) — where API-based translation fits in the broader shift toward AI-native localization

---

*Last Updated: March 2026 · Author: Deniz, Founder — Flixu AI*
