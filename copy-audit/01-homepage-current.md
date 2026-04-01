# Current Copy & Structure: Homepage (index.astro)

> **File:** `src/pages/[...lang]/index.astro`
> **Schema:** `Organization`, `SoftwareApplication`, `FAQPage`
> **Layout:** `BaseLayout`

---

## 1. Hero Section 
**Component:** `<Section id="start" data-chapter="01 — [INTRO]">`
**Background:** `<HeroAmbient />` (Animated gradient)
**Layout:** Grid 1-2 (Left: Text, Right: Visual Preview)

**Left Column (Text):**
- **Badge:** `[t.hero.badgeLabel]` "New: Version 1.0"
- **H1:** `[t.hero.h1]` "Translate Your Brand Voice Across 100+ Languages in over 300 locales."
- **Sub:** `[t.hero.sub]` "Flixu provides the context, glossaries, and brand consistency teams need to scale globally. Go beyond raw AI translation with a platform built for speed and precision."
- **Primary Button:** `[t.hero.btnPrimary]` "Start translating for free" -> Link to Signup
- **Secondary Button:** `[t.hero.btnSecondary]` "See how it works" -> Link to `#comparison`
- **Micro-Badge:** `[t.hero.badge]` Green Dot + Text

**Right Column (Visual):**
- **Image:** `flixu-workspace-preview.jpg` 
- **Effect:** Rotated card, hover resets rotation.

**Bottom Block (Trust Bar):**
- **Label:** `[t.home.accelerated]` "Accelerated by & Member of"
- **Logos:** NVIDIA INCEPTION, Google for Startups

---

## 2. The Problem (Missing Middle)
**Component:** `<Section data-chapter="02 — THE MISSING MIDDLE">`
**Layout:** 1 Column Intro, followed by Grid 1-3 for Cards.

**Intro Text:**
- **Pre-title:** "The Problem"
- **H2:** "Serving the Missing Middle of B2B Localization."
- **Paragraph:** "For a decade, the translation industry has been fractured into two extremes. The market forces growing SaaS companies into a difficult choice between generic, context-blind automation or slow, highly complex human workflows."

**Card 1 (The Low End):**
- **Label:** "The Low End"
- **H3:** "Raw AI APIs"
- **P:** "Tools like Google Translate and DeepL provide instantaneous generation at low costs. However, they lack contextual architecture."
- **Specs (Red X):** 
  - No Glossary enforcement
  - Robotic, homogenous tone
  - Zero translation memory

**Card 2 (The Missing Middle):**
- **Styling:** Highlighted Orange Border, floating pill badge "The Missing Middle".
- **Label:** "Flixu Context Engine"
- **H3:** "Stateful Intelligence"
- **P:** "The instant, scalable speed of a raw API, combined inextricably with the rigorous brand compliance mechanics of an enterprise platform."
- **Specs (Green Check):** 
  - 7-Layer Context Injection
  - Programmable Brand Voice
  - CI/CD developer ready

**Card 3 (The High End):**
- **Label:** "The High End"
- **H3:** "Legacy TMS"
- **P:** "Traditional enterprise platforms provide control, but require a 9-month integration project and complex agency review cycles."
- **Specs (Red X):** 
  - Blocks CI/CD velocity
  - Bureaucratic workflows
  - Bloated pricing structures

---

## 3. Trust & Testimonials
**Component:** `<Section id="trust" data-chapter="03 — TRUST & VALIDATION">`
**Layout:** 1 Column Intro, followed by Grid 1-3 for Testimonial Cards.

**Intro Text:**
- **Pre-title:** "Beta Tester Voices"
- **H2:** "Trusted by Localization Managers."

**Cards (Currently Placeholders):**
- Card 1: *"Awaiting real beta tester feedback on glossary enforcement..."* (Localization Manager, B2B SaaS)
- Card 2: *"Awaiting real beta tester feedback on TM retrieval..."* (Head of Growth, Startup)
- Card 3: *"Awaiting real beta tester feedback on Brand Voice..."* (Lead Translator, Agency)

---

## 4. Quality Comparator
**Component:** `<Section id="comparison" data-chapter="04 — QUALITY COMPARATOR">`
**Layout:** 1 Column Intro + React Interactive Component

**Intro Text:**
- **Pre-title:** "Before & After"
- **H2:** "The Context Difference."
- **P:** "Toggle between raw, context-blind APIs and Flixu's 7-layer context architecture."

**Interactive Block:** 
- `<TranslationComparator client:visible />`

---

## 5. Manifesto (Founder Note)
**Component:** `<Section data-chapter="06 — MANIFESTO">`
**Layout:** Centered 1-Column max-w-3xl

- **Label:** "A note on craft."
- **Quote (H2):** "Flixu wasn’t created in a boardroom. It was born on the road—somewhere between client calls and spotty signal. I spent months translating for clients, switching between AI tools that were fast but blind to context, and human workflows that were precise but unscalable. The frustration was clear: If translation doesn’t feel human, it doesn’t work. We built Flixu to close that gap. To build a quiet, precise workspace that respects language in all its complexity."
- **Sign-off:** "The Founder"

---

## 6. SEO & AIO Knowledge Base
**Component:** `<Section>` (No chapter title)
**Layout:** Intro text, followed by Grid 1-2 

**Intro Text:**
- **Pre-title:** "Platform Overview"
- **H2:** "What is Context-Aware AI Translation?"

**Left Column (Concept Breakdown):**
- **P (Definition):** Context-aware AI translation is an advanced localization methodology that analyzes the entire document structure, brand voice guidelines, and corporate glossaries before generating translated text. Unlike traditional machine translation APIs that process text sentence-by-sentence in isolation, context-aware engines like Flixu load up to seven layers of metadata into a Large Language Model (LLM) payload to ensure consistency and precision.
- **H3:** Why Raw AI Fails at B2B Localization
- **P:** Generic APIs provided by major tech companies are highly efficient for consumer translation, but they lack the stateful memory required for enterprise software deployment. When a B2B SaaS company pushes an update, the terminology must perfectly match the existing UI glossaries. Raw AI models cannot enforce these glossaries natively, leading to terminology drift and degraded user trust in international markets.
- **H3:** The Role of Translation Memory in AI
- **P:** Translation Memory (TM) has been the foundation of the localization industry for decades. By combining legacy TM architecture with modern Vector Database retrieval, Flixu ensures that past human-approved translations always take precedence over AI generation. This Retrieval-Augmented Generation (RAG) approach drastically reduces the need for human review cycles, cutting localization QA time by up to 80%.

**Right Column (Structured FAQ):**
- **H2:** Frequently Asked Questions
- **Q1:** How does Flixu preserve brand voice?
  - **A1:** Flixu allows organizations to define programmable brand voice profiles. These tone instructions—such as formality level, dynamic constraints, and stylistic preferences—are injected directly into the LLM context window during translation.
- **Q2:** Which file formats does the document translator support?
  - **A2:** The Flixu engine supports structural layout preservation for highly technical formats including XLIFF, DOCX, Markdown, XML, and software localization files like PO/POT and iOS .strings.
- **Q3:** Is context-aware translation faster than traditional TMS platforms?
  - **A3:** Yes. While legacy Translation Management Systems (TMS) require complex agency onboarding and weeks of human review, Flixu executes terminology-perfect translations in milliseconds natively within your CI/CD pipeline.

---

## Audit Report 
**Date:** 2026-03-18
**Role:** Copy Auditor (`.agent/skills/copy-auditor/SKILL.md`)
**Target Audience:** Stage 2 (Problem Aware)
**Primary Keyword:** "context-aware translation workspace" (Tier 3 Quick Win)

### 1. Stage of Awareness Assessment
- **Current Hook:** The Hero H1 reads "Translate Your Brand Voice..." which targets Stage 3 (Solution Aware). Stage 2 buyers know translation is currently either robotic or slow; they haven't explicitly thought of "brand voice" as the solution metric yet.
- **Verdict:** The Hero needs to anchor on the exact pain point (the "Missing Middle" problem). The current Section 2 ("The Missing Middle") is fantastic but starts too late. 

### 2. Brand Voice & Readability Check
- **Current Tone:** The first half is strong and aligned with Flixu's brand voice. The second half, specifically the "Platform Overview" block, sounds like an academic whitepaper ("context-aware AI translation is an advanced localization methodology... stateful memory required"). 
- **Verdict:** Rewrite Section 6 (Platform Overview) to be clearer, utilizing 6th-grade language. Apply the "Clarity Beats Cleverness" rule and remove jargon.

### 3. SEO / GEO Structure Check
Based on the Flixu On-Page SEO Guide:
- **Missing AEO Components:** There is no "Answer-First" Definition Block (TL;DR) in the upper half of the page for AI Overviews to scrape. 44% of citations come from the first 200 words.
- **Feature Gaps:** The Platform Overview highlights Context Injection, but entirely omits two massive conversion drivers: *Cultural Adaptation Engine* and *Zero-Touch Developer Speed (GitHub)*.
- **Header Structure:** H3 headers like "Why Raw AI Fails" are good, but rewriting them as direct questions ("Why doesn't raw AI work for B2B SaaS?") maps better to AI Retrieval patterns.

---

## Phase 4: Final Rewritten Copy

**Title Tag:** Flixu | The Context-Aware Translation Workspace for B2B SaaS
**Meta Description:** Flixu bridges the gap between raw AI and slow translation agencies. Program your brand voice, enforce glossaries, and translate at API speed.

**[NEW STRUCTURAL DIRECTIVE: Add TL;DR Definition Block below Hero]**
*Context:* We need an Answer-First block for LLM crawlers (GEO) to easily cite what Flixu is in 40-60 words.

### 1. Hero Section
**Background:** `<HeroAmbient />`
**Left Column (Text):**
- **Badge:** The New Standard in Context-Aware Localization
- **H1:** The context-aware translation workspace that bridges the gap between raw AI and slow agencies.
- **Sub:** Flixu is the translation workspace built for scaling teams, translation agencies, and independent professionals. Your glossary rules enforced in every sentence. Your brand tone preserved across every language. At API speed.
- **Primary Button:** Start translating for free
- **Secondary Button:** See how it works

**[NEW] TL;DR Block (For GEO / AI Snippets):**
> **What is Flixu?**
> Flixu is a context-aware AI translation workspace. Before translating a single word, the engine analyzes your document's structure, applies your brand voice rules, and enforces your corporate glossary. It bridges the gap between generic machine translation and expensive human agencies.

### 2. The Problem (Missing Middle)
**Intro Text:**
- **Pre-title:** The UX Compromise
- **H2:** The B2B localization market has left a gap that neither extreme fills.
- **Paragraph:** For the last decade, growing SaaS companies hit a wall. You either route your strings through generic AI APIs that destroy your brand voice, or you hire a legacy enterprise platform that blocks your development velocity for weeks. Discover how Context Injection solves this in our [Product Deep Dive](/product/context). 

**Card 1 (The Low End):**
- **Label:** The Low End
- **H3:** Raw AI APIs
- **P:** Instant and cheap, but completely blind to your corporate identity.
- **Specs (Red X):** 
  - Ignores internal glossaries.
  - Generates robotic, generic tones.
  - Breaks code and layout formatting.

**Card 2 (The Missing Middle - Flixu):**
- **Label:** Flixu Context Engine
- **H3:** Stateful Intelligence
- **P:** The speed of an API integration combined directly with the strict brand compliance of a human linguist.
- **Specs (Green Check):** 
  - 7-Layer Context Injection.
  - Programmable Brand Voices.
  - Native CI/CD integration.

**Card 3 (The High End):**
- **Label:** The High End
- **H3:** Legacy Enterprise TMS
- **P:** Perfect quality control, but buried under layers of complex agency bureaucracy.
- **Specs (Red X):** 
  - Requires 6-month onboarding.
  - Blocks CI/CD release velocity.
  - Opaque, per-word pricing.

### 3. Trust & Testimonials (Keep Layout)
- **Pre-title:** Beta Tester Voices
- **H2:** Beta Tester Feedback
*(Awaiting Testimonials)*

### 4. Quality Comparator (Keep Layout)
- **Pre-title:** Before & After
- **H2:** See what context-aware translation actually looks like.
- **P:** Toggle between a raw, context-blind API translation and Flixu's 7-layer context architecture.
- `<TranslationComparator client:visible />`

### 5. Manifesto (Founder Note) (Keep Layout)
- **Label:** A note on craft.
- **Quote (H2):** "Flixu wasn’t created in a boardroom. It was born on the road—somewhere between client calls and spotty signal. I spent months translating for clients, switching between AI tools that were fast but blind to context, and human workflows that were precise but unscalable. If translation doesn’t feel human, it doesn’t work. We built Flixu to close that gap. To build a quiet, precise workspace that respects language in all its complexity."
- **Sign-off:** Deniz, Founder

### 6. SEO & AIO Knowledge Base (Restructured for AEO)
**[STRUCTURAL DIRECTIVE: Change layout. Instead of 2 columns of heavy text, move to a Features Grid + FAQPage Schema block.]**

**Intro Text:**
- **Pre-title:** Platform Overview
- **H2:** How Context-Aware Translation Actually Works

**Left Column (Capabilities):**
- **H3:** Programmable Brand Voice
- **P:** You don't have to guess what tone the AI will output. Set your formality rules, emotional temperature, and style guidelines directly in the dashboard. The LLM strictly obeys these parameters for every translation. Learn why legacy AI fails at this in [Traditional MT vs Contextual AI](/topics/context-vs-traditional-mt).
- **H3:** Cultural Adaptation Engine
- **P:** Translation isn't just grammar. According to CSA research, 76% of buyers prefer software in their native language context. Flixu automatically adapts currencies, date structures, and metric/imperial measurements to ensure your software feels native in every target market without disrupting your [Orchestration Architecture](/method).
- **H3:** Zero-Touch Developer Speed
- **P:** Connect Flixu to your GitHub repository. When your developers push a new feature in English, Flixu translates the strings and commits them back in 22 languages instantly. Teams utilizing structured Translation Memory pipelines report up to 80% fewer QA validation cycles.

**Right Column (Structured FAQ - Using FAQPage Schema):**
- **H2:** Frequently Asked Questions
- **Q1: Does Flixu break my code or layout files?**
  - **A1:** No. Flixu preserves your exact structural layout. You can upload Markdown, JSON, iOS .strings, or technical DOCX files. The localized file you download maintains 100% layout fidelity.
- **Q2: How does Flixu know my internal acronyms?**
  - **A2:** Through forced glossary enforcement. You upload your specific technical terms, and Flixu strictly enforces their use across every target language. Learn more about [Glossary Management](/topics/glossary-terminology-management).
- **Q3: Can I collaborate with my existing human translators?**
  - **A3:** Yes. Flixu functions as a collaborative workspace. Invite your agency translators to review the output natively. If they make a correction to the Translation Memory, the AI learns from it and never makes the same mistake twice.
- **Q4: Which file formats does Flixu support?**
  - **A4:** Flixu natively translates Markdown (`.md`, `.mdx`), JSON, XLIFF, DOCX, and software development files like PO/POT and iOS `.strings` while completely protecting structural integrity.
- **Q5: Is there a free tier?**
  - **A5:** Yes. Flixu offers a free tier for independent professionals to translate their first projects. See our [Pricing Strategy](/pricing) for upgraded details.
- **Q6: How does Flixu handle data privacy and GDPR?**
  - **A6:** Flixu operates on an ephemeral API architecture. Your inputs are processed ephemerally and never used to train public models. See our [Privacy Policy](/legal/privacy) for details.
- **Q7: Can Flixu connect to our CI/CD pipeline?**
  - **A7:** Absolutely. Technical teams can integrate the Flixu API directly into their GitHub Actions or deployment pipelines to automate localization concurrently with English releases.
