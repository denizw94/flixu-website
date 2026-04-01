# Current Copy & Structure: Method (method.astro)

> **File:** `src/pages/[...lang]/method.astro`
> **Schema:** `None`
> **Layout:** `BaseLayout`
> **Metadata:** 
>   - Title: `{t.methodPage.hero.title} | Flixu`
>   - Desc: `{t.methodPage.hero.description}`

---

## 1. Hero Section
**Component:** `<Section data-chapter="01 — INTRO" class="hero-section">`
**Layout:** Grid 1-2 (`md:grid-cols-2 gap-12`) 

**Left Column (Text):**
- **Breadcrumbs:** Home > Method
- **Badge:** `t.methodPage.hero.badge`
- **H1:** `t.methodPage.hero.title`
- **P:** `t.methodPage.hero.description`

**Right Column (Visual):**
- `<HeroMethodology client:load />`

---

## 2. TL;DR Block
**Component:** `<Section data-chapter="02 — TL;DR" class="tldr-section">`
**Layout:** 1 Column (`max-w-3xl`)

**BlockText:** `<TldrBlock text="..." />`
"Raw LLMs suffer from severe contextual amnesia, causing Terminology Drift and unpredictable translations. The Flixu Method introduces an Orchestration Layer between your source data and the AI. By using Semantic Vector Retrieval (RAG) and active Glossary injection, we force the LLM into deterministic alignment with your Brand Voice—yielding zero-hallucination translations that preserve your code geometry."

---

## 3. What is Flixu (Concept)
**Component:** `<Section data-chapter="03 — CONCEPT" class="content-section border-b border-stone-100">`
**Layout:** Grid 1-2 (`md:grid-cols-2 gap-16 items-start`)

**Left Column (Headline):**
- **H2:** `t.methodPage.whatIsFlixu.title`

**Right Column (Copy text):**
- **P:** `t.methodPage.whatIsFlixu.copy1`
- **P:** `t.methodPage.whatIsFlixu.copy2`

---

## 4. Architecture
**Component:** `<Section data-chapter="04 — ARCHITECTURE" class="content-section border-b border-stone-100 bg-stone-50">`
**Layout:** Intro + Grid 3 Cols (`lg:grid-cols-3 gap-6`)

**Intro (`max-w-3xl`):**
- **H2:** `t.methodPage.architecture.title`
- **Badge:** `t.methodPage.architecture.subtitle`
- **P:** `t.methodPage.architecture.intro`

**Grid Items (`t.methodPage.architecture.points`):**
- *Iterates over up to 7 layers, mapping TITLE and DESC components visually.* 
- Each card has a "LAYER X" badge, a Title, and a Description paragraph.

---

## 5. Quality (Precision TM)
**Component:** `<Section data-chapter="05 — QUALITY" class="content-section border-b border-stone-100">`
**Layout:** Grid 1-2 (`md:grid-cols-2 gap-16 items-start`)

**Left Column (Headline & Badge):**
- **H2:** `t.methodPage.quality.title`
- **Badge:** `t.methodPage.quality.subtitle`

**Right Column (Copy Text):**
- **P:** `t.methodPage.quality.copy1`
- **P:** `t.methodPage.quality.copy2`

---

## 6. Deep Dive (English Only)
**Component:** `<Section data-chapter="06 — DEEP DIVE" class="content-section border-b border-stone-100">`
*(Renders only if `lang === "en"`)*
**Layout:** Prose Layout (`max-w-3xl mx-auto prose`)

**Content:**
- **H2:** The Flixu Method: Engineering Context as Code
- **P:** A common misconception... Raw LLMs operate without persistent context...
- **H3:** Why Prompt Engineering Cannot Scale
- **P:** When teams realize raw LLMs are failing... Prompt engineering is fundamentally unscalable...
- **H2:** Deterministic Orchestration Over Stochastic Generation
- **P:** The Flixu Method represents a fundamental architectural departure...
- **P:** We call this **Context Injection**.
- **P:** When your CI/CD pipeline sends a payload... Flixu extracts previously approved translations...
- **P:** Flixu seamlessly injects this... The output is no longer a stochastic hallucination...
- **H3:** Preserving the Geometry of Code
- **P:** Beyond semantic correctness, the Flixu Method explicitly addresses Structural Geometry...
- **P:** Raw LLMs frequently corrupt code structure. The Flixu Orchestration Layer utilizes custom masking parsers...
- **P:** **The Flixu Method is simple: You provide the text. We engineer the context. The algorithm enforces precise consistency.**

---

## 7. CTA Action
**Component:** `<Section data-chapter="07 — START" class="content-section text-center">`
**Layout:** Center Aligned

- **H2:** `t.methodPage.cta.title`
- **Button (Primary):** `t.methodPage.cta.primary` (Links to Register)
- **Button (Secondary):** `t.methodPage.cta.secondary` (Links to Enterprise Email)

---
## Audit Report (Phase 2 Completed)

**1. Stage of Awareness & Persona:**
- **Stage 4 (Product / Analytical Aware):** Evaluating *how* Flixu achieves its claims. Persona includes CTOs, Lead Engineers, and Senior Localization Managers.
- **Tone Check:** Deep, authoritative, and educational.

**2. Structural GEO/SEO Gaps:**
- **Missing FAQ Section (Critical):** A core SEO/AEO rule (Sektion 5, Regel 8) is that every informational page needs an FAQ section. The Method page completely lacks an FAQ. We must add 5-7 questions (e.g., "Does context injection slow down the translation?", "How do you handle data privacy with LLMs?").
- **Schema Miss:** This page must implement `HowTo` schema and `FAQPage` schema. The architecture steps should be formatted as a numbered list to allow for `HowToStep` extraction.
- **Deep Dive "English Only" Restriction:** Section 6 is hardcoded to render only in English. If we want global GEO visibility, this technical deep dive needs to be localized or structurally integrated better.

**3. Brand Voice & Copy Improvements (For Phase 4):**
- The "Deep Dive" section needs to ensure it uses the "Liquid Glass" visual philosophy—breaking up heavy prose with bullet points or smaller, readable quotes.
- Emphasize the "Deterministic Orchestration over Stochastic Generation" narrative—this perfectly aligns with the Brand Voice rule of "Calm, Precise".

**Rewrite Directives:** Add a robust FAQ section. Refactor the Architecture section to read cleanly as a step-by-step process for `HowTo` Schema.

---

## Phase 4: Final Rewritten Copy

**Title Tag:** The Core Philosophy | How the Flixu Context Engine Works
**Meta Description:** Discover how Flixu bridges the gap between raw LLM translation and legacy agencies by engineering context, brand voice, and code preservation.

### 1. Hero Section
**Badge:** The Core Philosophy
**H1:** Deterministic Orchestration Over Stochastic Guesswork.
**P:** Raw LLMs suffer from severe contextual amnesia, causing terminology drift and broken code layouts. The Flixu Method introduces a highly constrained Orchestration Layer between your source data and the AI, yielding zero-hallucination translations that perfectly preserve your software geometry.

### 2. TL;DR Block (In-Body Answer First)
> **What is the Flixu Method?**
> Raw LLMs translate without context. The Flixu Method changes that by injecting your glossary rules, brand voice, and past translations into every request — before a single word is generated. The result is deterministic output that preserves both meaning and code structure.

### 3. What is Flixu (Concept)
**H2:** Engineering Context as Code.
**P1:** A common misconception in modern localization is that prompt engineering alone can scale B2B translations. When teams realize raw LLMs are failing to apply the correct "Sie" vs "du" formality across a 10,000-word software manual, they attempt to write increasingly complex system prompts. This is fundamentally unscalable and highly fragile. Read why in our breakdown of [Contextual AI](/topics/context-vs-traditional-mt).
**P2:** Flixu abandons polite prompting in favor of programmatic [context injection](/product/context). We treat your glossaries and linguistic preferences as absolute mathematical constraints, not suggestions. 

### 4. Architecture (Step-by-Step for HowTo Schema)
**H2:** The 5-Stage Orchestration Pipeline
**Badge:** How it Works
**P:** Every text payload submitted to Flixu passes through a rigorous, sub-second deterministic pipeline before generation begins.

- **Step 1: Document Parsing & Geometry Masking** 
  Flixu strips proprietary file formatting (JSON, XML, Markdown), extracting only the translatable strings while masking the structural tags to guarantee zero code corruption.
- **Step 2: Vector Translation Memory Retrieval**
  The engine queries your full translation history via semantic vector search — finding past approved translations that match the meaning of your new text, not just the exact words.
- **Step 3: Glossary & Brand Voice Injection**
  Mandatory terminology constraints and predefined Brand Voice instructions (e.g., target formality, tone) are compiled directly into the system prompt.
- **Step 4: LLM Generation (Bounded Inference)**
  The heavily constrained payload is routed to the optimal Large Language Model for that specific language pair, actively preventing stochastic drift.
- **Step 5: Geometric Re-Assembly**
  The localized foreign text is flawlessly re-injected into the original programmatic coordinates. A JSON file goes in; a perfect Spanish JSON file comes out.

### 5. Deep Dive (Unified Global Section)
**H2:** Quality Assurance Through Context
**P:** Beyond semantic correctness, the Flixu Method explicitly addresses Structural Geometry. Legacy tools translate sentence-by-sentence in a vacuum. Flixu treats the entire document as a cohesive unit. Matches aren't just substituted; they are fed to the LLM as reference material, meaning a fuzzy match found in paragraph two actively improves the tone of the translation in paragraph ten.
**P:** Consider a team shipping a major UI update. A traditional API processes the strings individually, resulting in "Dashboard" translating to "Tableau de Bord" in the Header, but "Panneau" in the Footer. By injecting an organizational glossary and the entire document schema simultaneously into the prompt vector, Flixu mathematically ensures global continuity. If "Tableau de Bord" is enforced, the LLM will never hallucinate a synonym.
**P:** The Flixu Method is simple: You provide the text. We engineer the context. The algorithm enforces precise consistency. Built for [Enterprise Teams](/for/enterprise).

### 6. Technical FAQ (Net-New Section)
**H2:** Frequently Asked Questions

- **Q: Does context injection slow down the translation?**
  A: No. Our vector retrieval and inference pipelines are optimized for sub-second latency. A standard 500-word document processes through all 5 orchestration layers in roughly 4 to 8 seconds, enabling seamless integration natively into your CI/CD pipelines without blocking releases.
- **Q: How do you handle data privacy with LLMs?**
  A: Flixu utilizes enterprise-grade inference endpoints. For full data handling details, infrastructure routing, and GDPR mechanics, see our official [Privacy & Compliance Documentation](/legal/privacy).
- **Q: Which Large Language Models does Flixu use under the hood?**
  A: Flixu is a model-agnostic orchestrator. Depending on the language pair and domain complexity, the system dynamically routes generation to the optimal model for that task. This ensures you are always operating on the cutting edge of inference capabilities.
- **Q: Can Flixu handle complex nested JSON files?**
  A: Yes. The Step 1 Geometry Masking phase is explicitly designed to parse complex, multi-level JSON structures. It physically protects system keys and HTML structures from accidental translation, effectively localizing only the value strings while preventing syntax-related compiler crashes.
- **Q: What is the difference between a legacy TMS and an Orchestrator?**
  A: A traditional Translation Management System (TMS) is built to assign tasks to human freelance vendors, requiring timeline management. An AI Orchestrator is built to mathematically structure data and automatically prompt AI models, natively generating publish-ready [translations at scale](/pricing) without incurring human waiting periods.

### 7. CTA Action
**H2:** Ready to engineer your localization?
**Button (Primary):** See the orchestration pipeline with your own files.
**Button (Secondary):** Talk to our engineering team
