# Current Copy & Structure: Use Cases Hub (use-cases/index.astro)

> **File:** `src/pages/[...lang]/use-cases/index.astro`
> **Layout:** `BaseLayout`
> **Metadata:** Title="Use Cases — AI Translation for Real Workflows", Desc="See how teams use Flixu's context-aware AI translation..."

---

## 1. Hub Hero / Grid
**Component:** `<Section data-chapter="01 — INTRO" class="hub-hero">`
**Layout:** Hub Header + Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`)

**Hub Header:**
- **Breadcrumbs:** Home > Use Cases
- **Badge:** Use Cases
- **H1:** Built for real workflows.
- **P:** Context-aware translation that fits how your team already works — not the other way around.

**Grid Items (3 Cards):**
- **Card 1 (SaaS Localization):**
  - **Label:** Product Teams
  - **H2:** SaaS Localization
  - **Desc:** Ship your product in 50+ languages with consistent UI strings, help docs, and marketing copy.
  - **Link:** `/use-cases/saas-localization`
- **Card 2 (Document Translation):**
  - **Label:** Operations
  - **H2:** Document Translation
  - **Desc:** Translate PDFs, DOCX, and PPTX while preserving layout, formatting, and visual fidelity.
  - **Link:** `/use-cases/document-translation`
- **Card 3 (Marketing Translation):**
  - **Label:** Marketing
  - **H2:** Marketing Translation
  - **Desc:** Translate campaigns, landing pages, and brand content without losing voice or cultural nuance.
  - **Link:** `/use-cases/marketing-translation`

---
## Audit Report (Phase 2 Completed)

**1. Stage of Awareness & Persona:**
- **Stage 2-3 (Problem / Solution Aware):** Visitors are looking for their specific workflow. 
- **Tone Check:** Clear, routing-focused.

**2. Structural GEO/SEO Gaps:**
- **Missing Hub Content:** Right now, it's just a 3-card grid. A true SEO Hub needs more textual context to rank for "translation use cases". We should add a brief 100-word intro paragraph beneath the Hub Header and potentially a global FAQ for the hub itself.

**3. Brand Voice & Copy Improvements (For Phase 4):**
- The H1 "Built for real workflows" is strong. 
- We should ensure the cards use exact keywords from the SEO guide.

**Rewrite Directives:** Expand the Hub to include a short introductory text block and an FAQ section to capture "translation workflows" intent.

---

## Phase 4: Final Rewritten Copy

**Title Tag:** Use Cases — AI Translation for Real Workflows
**Meta Description:** See how teams use Flixu's context-aware AI translation to localize SaaS products, formal documents, and marketing campaigns without losing format or brand voice.
**[STRUCTURAL DIRECTIVE: Implement FAQPage Schema.]**

### 1. Hub Hero / Grid
**Breadcrumbs:** Home > Use Cases
**Badge:** Use Cases
**H1:** Translation Use Cases — Built for Real Workflows.
**P:** Context-aware translation that fits how your team already works — not the other way around. 

**Intro Text (New SEO Block):**
Flixu's context-aware translation engine is built for distinct operational workflows. Whether your team localizes SaaS products, translates formatted documents, or adapts marketing campaigns for new markets — each use case has its own requirements. This hub maps Flixu's capabilities to your specific workflow. Teams utilizing structured context management report up to 80% fewer QA cycles compared to generic MT.

### 2. Grid Items
- **[SaaS Localization](/use-cases/saas-localization):** Ship your product in 50+ languages with consistent UI strings, help docs, and marketing copy.
- **[Document Translation](/use-cases/document-translation):** Translate PDFs, DOCX, and PPTX while preserving layout, formatting, and visual fidelity.
- **[Marketing Translation](/use-cases/marketing-translation):** Translate campaigns, landing pages, and brand content without losing voice or cultural nuance.
- **[Legal & Compliance](/use-cases/legal-compliance):** Generate strict, auditable translations for Terms of Service, DPAs, and compliance manuals while rigorously enforcing statutory terminology.
- **[Website Localization](/use-cases/website-localization):** Sync directly with your Next.js or Astro frameworks to automatically translate dynamic markdown content and static routing components.
- **[Software Strings](/use-cases/software-string-translation):** Protect your JSON keys and YAML attributes while pushing localized UI strings cleanly back to your codebase through continuous integration.

### 3. Use Cases FAQ (Net-New SEO Section)
**H2:** Frequently Asked Questions About Localization Workflows

- **Q: Does Flixu handle heavily formatted documents like PDFs?**
  A: Yes. Flixu uses document parsing that preserves layout. We separate the text from the visual geometry, translate the content with your glossary active, and cleanly reconstruct the original layout, minimizing extensive manual Desktop Publishing (DTP) effort.
- **Q: How do you translate marketing copy without losing brand tone?**
  A: Flixu injects programmable Digital Brand Personas directly into the LLM system prompt. The system strictly enforces your brand's formality settings, specific vocabulary rules, and tonal guidelines to ensure your marketing copy resonates natively in every target language.
- **Q: Can frontend developers push software strings automatically?**
  A: Yes. Flixu provides robust GitHub CI/CD integration. Developers can push English JSON payloads directly from their continuous integration pipelines, and Flixu will commit the translated JSON strings seamlessly back into the target repository branch.
- **Q: Which file formats does Flixu support for translation?**
  A: The platform natively supports a wide variety of development and operational formats including iOS .strings, Android XML, standard JSON, YAML, XLIFF, DOCX, modern PDF, and PPTX.
- **Q: How does Flixu handle different languages' formality levels?**
  A: You can explicitly configure the required formality (e.g., German "Sie" versus "du") per language within your Brand Voice settings. The translation engine consistently applies this predefined correct register across all enterprise outputs.
- **Q: Is Flixu suitable for both small teams and enterprise organizations?**
  A: Flixu gracefully scales from individual developers requiring rapid CLI-based string translation up to large enterprise teams needing robust Role-Based Access Control, dedicated invoice billing workflows, and enterprise-grade inference endpoints.
- **Q: How does Flixu differ from DeepL or Google Translate?**
  A: Unlike generic MT tools that translate sentence-by-sentence in isolation, Flixu establishes a permanent semantic Context Matrix for your brand. It remembers your specific terminologies, previous translations, and brand voice, acting as an integrated ecosystem.
