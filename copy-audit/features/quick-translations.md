# Current Copy & Structure: Quick Translations (features/quick-translations.astro)

> **File:** `src/pages/[...lang]/features/quick-translations.astro`
> **Schema:** `FAQPage`
> **Layout:** `BaseLayout`
> **Metadata:** Title="Quick Translations Workspace | Flixu", Desc="Instantly translate text snippets using full AI context..."

---

## 1. Hero Section
**Component:** `<Section data-chapter="01 — OVERVIEW" class="hero-section pb-16">`
**Layout:** Grid 1-2 (`md:grid-cols-2 gap-12`) 

**Left Column (Text):**
- **Breadcrumbs:** Home > Features > Quick Translations
- **Label (Orange, Mono):** Feature Spotlight
- **H1:** Fast. Simple. Contextual.
- **P:** Need to translate a 3-word UI string or an incredibly brief email? Use Quick Translate to bypass complex project creation while keeping all of your AI context.
- **Button:** Try Quick Translate (Hidden class applied)

**Right Column (Visual):**
- `<HeroQuickTranslations client:load />`

---

## 2. TL;DR Block
**Component:** `<Section data-chapter="02 — TL;DR" class="tldr-section">`
**Layout:** 1 Column (`max-w-3xl`)

**BlockText:** `<TldrBlock text="..." />`
"Sometimes you don't need a large multi-file project. For short strings, emails, or ad-hoc marketing copy, Flixu's Quick Translate interface acts just like a consumer translation tool—but it sits perfectly on top of your advanced RAG infrastructure. Select your Target Client, type your text, and ensure that even the smallest task respects your hard-earned Glossary and TM."

---

## 3. Capabilities / Mechanic Grid
**Component:** `<Section data-chapter="03 — CAPABILITIES" class="content-section mt-12">`
**Layout:** 1 Column Intro + Grid 2x2 (`md:grid-cols-2 gap-12`)

**Intro:**
- **H2:** Core Capabilities

**Grid Items (4 Cards):**
- **Card 1 (Frictionless Entry):**
  - **Icon:** (SVG Icon)
  - **H3:** Frictionless Entry
  - **P:** Zero setup required. Just paste your text string directly into the browser workspace for instantaneous, enterprise-grade AI translation processing.
- **Card 2 (Full Context Injection):**
  - **Icon:** (SVG Icon)
  - **H3:** Full Context Injection
  - **P:** Despite its simplified interface, Quick Translate maintains parity with heavy project workflows. You can actively enforce Client Tone, Formal constraints, and TM matching simultaneously.
- **Card 3 (Iterative Testing):**
  - **Icon:** (SVG Icon)
  - **H3:** Iterative Testing
  - **P:** Use the tool as a laboratory. It is the perfect place to experiment with different prompts and Brand Voice adjustments before deploying them globally to a 10,000-word dataset.
- **Card 4 (Bi-Directional Archiving):**
  - **Icon:** (SVG Icon)
  - **H3:** Bi-Directional Archiving
  - **P:** Approved answers feed back into the system. If you correctly translate an ambiguous marketing phrase here, the AI will remember that exact phrasing for subsequent automated projects.

---

## 4. FAQ
**Component:** `<Section data-chapter="04 — FAQ" class="content-section bg-stone-50 border-t mt-24">`
**Layout:** 1 Column (`max-w-3xl`)

**Intro:**
- **H2:** Technical FAQ

**Static Grid Items (2 Cards):**
- **Q1:** How is Quick Translate better than Google Translate?
  - **A1:** Unlike standard web translators, Flixu's Quick Translate allows you to select a specific Client Profile, meaning the output will automatically conform to your private Translation Memories and Brand Voice.
- **Q2:** Do Quick Translations get saved to the TM?
  - **A2:** Yes. If an authorized user edits and approves a result in Quick Translate, that semantic pairing is permanently embedded into the selected client's Translation Memory dataset.

---
## Audit Report (Phase 2 Completed)

**1. Stage of Awareness:**
- **Current:** Stage 3. Highlights the frictionless UX of the ad-hoc payload.
- **Target:** Maintain. Positions the UI against standard Google Translate tools.

**2. Persona Alignment:**
- Support Agents, Social Media Managers, Ad-hoc Users.

**3. Structural GEO / SEO Gaps:**
- **Missing In-Body Answer First:** The TL;DR block must be rendered at the top of the page.
- **Paragraph Density:** Good, the Grid format keeps things tight.
- **Missing UX Anchor:** A visual comparison (Before vs. After or Google Translate vs. Flixu Quick Translate) would be perfect for this UI feature.

**4. Brand Voice & Copy Improvements:**
- "Fast. Simple. Contextual." is a very strong, Apple-esque H1.

**Phase 4 Directives:**
1. Render the TL;DR block.
2. Emphasize the "Bi-Directional Archiving" (the fact that corrections save to the TM) as the primary differentiator against free tools.

---

## Phase 4: Final Rewritten Copy

**Title Tag:** Quick Translations Workspace | Flixu
**Meta Description:** Instantly translate text snippets using full AI context without setting up a project.
**[STRUCTURAL DIRECTIVE: Implement SoftwareApplication and FAQPage Schema.]**

### 1. Hero Section
**Label:** Feature Spotlight
**H1:** Fast. Simple. Contextual.
**P:** Translating a 3-word UI string or a brief sales email? Use Quick Translate to bypass complex project creation while actively utilizing your enterprise AI context.

### 2. TL;DR Block (In-Body Answer First)
> **What is Quick Translate?**
> Quick Translate is Flixu's ad-hoc translation interface for single strings, short emails, and one-off copy — no project setup required. It runs on the same AI infrastructure as full project workflows, applying your selected Client Profile, Glossary, and Translation Memory automatically. Approved results feed back into the TM.

### 3. Beyond Consumer Tools
**H2:** Ad-Hoc Enterprise Velocity

> **The Cost of Fragmented Ad-Hoc Translation:**
> CSA Research highlights that ad-hoc translations outside of centralized terminology systems are a leading cause of brand voice fragmentation in continuous localization environments.

**Bi-Directional Archiving**
This is the critical differentiator from generic free tools. Approved answers feed directly back into your system infrastructure. If a manager perfectly corrects an ambiguous marketing phrase in the Quick Translate widget, that semantic pairing is saved to the active Translation Memory. The AI remembers that exact phrasing for all future automated projects.

**Frictionless Entry**
Zero architectural setup required. Paste your text directly into your browser for instantaneous, enterprise-grade inference.

**Full Context Injection**
Despite the simplified UI, Quick Translate maintains total parity with heavy deployments. Explicitly bind Client Tone, strict Formal constraints, and TM matching simultaneously.

**Iterative Testing**
Use the tool to rapidly prototype brand voices. Experiment with different psychological prompts before applying them to a full-scale project. 

### 4. Frequently Asked Questions
**H2:** FAQs: Quick Translate Workspace

- **Q1: How is Quick Translate better than Google Translate?**
  A1: Unlike standard web translators, Flixu's Quick Translate allows you to select a specific Client Profile, meaning the output will automatically conform to your private Translation Memories and Brand Voice.
- **Q2: Do Quick Translations get saved to the TM?**
  A2: Yes. If an authorized user edits and approves a result in Quick Translate, that semantic pairing is embedded into the selected client's Translation Memory dataset.
- **Q3: Can I use Quick Translate without a Client Profile?**
  A3: Yes. You can use Quick Translate natively without assigning a specific client, functioning purely on the foundational AI model without specific glossary constraints.
- **Q4: Is there a character limit for Quick Translate?**
  A4: Quick Translate is optimized for short-form text up to 5,000 characters per prompt. For long-form documents, the standard Project Workflow is recommended.
- **Q5: Can I export Quick Translate results?**
  A5: Yes. Results can be copied to your clipboard instantly with a single click, perfectly formatted for pasting into Zendesk, Intercom, or your CMS.
- **Q6: Does Quick Translate support all file formats?**
  A6: Quick Translate is designed exclusively for raw text input. For translating structured formats like DOCX or JSON, use the primary Project Dashboard.
- **Q7: How does Quick Translate differ from the full Project workflow?**
  A7: Quick Translate bypasses the multi-step project creation, asset assignment, and formal review stages, serving exclusively as an ad-hoc interface for instant results.

### 5. Call to Action
**H2:** Translate intelligently, instantly.
**P:** Try it now — no setup, no project, just paste and translate.
**Button (Primary):** Start Free Trial -> `/signup`
**Button (Secondary):** Test Quick Translate -> `/product/text`

#### Related Features
- [Client Management Hub](/features/client-management)
- [Automated LQA Intelligence](/features/lqa)
- [Project Management Dashboard](/features/project-management)
