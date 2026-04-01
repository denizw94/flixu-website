# Current Copy & Structure: Translation Memory (features/translation-memory.astro)

> **File:** `src/pages/[...lang]/features/translation-memory.astro`
> **Schema:** `FAQPage`
> **Layout:** `BaseLayout`
> **Metadata:** Title="AI Translation Memory | Flixu", Desc="Next-generation Translation Memory powered by contextual embeddings..."

---

## 1. Hero Section
**Component:** `<Section data-chapter="01 — OVERVIEW" class="hero-section pb-16">`
**Layout:** Grid 1-2 (`md:grid-cols-2 gap-12`) 

**Left Column (Text):**
- **Breadcrumbs:** Home > Features > Translation Memory
- **Label (Orange, Mono):** Feature Spotlight
- **H1:** Translation Memory, Rewired for AI.
- **P:** Stop relying on primitive fuzzy text matches. Flixu retrieves context through highly granular semantic vectors and dual-layer reranking.
- **Button:** Try Semantic TM Free (Hidden class applied)

**Right Column (Visual):**
- `<HeroTranslationMemory client:load />`

---

## 2. TL;DR Block
**Component:** `<Section data-chapter="02 — TL;DR" class="tldr-section">`
**Layout:** 1 Column (`max-w-3xl`)

**BlockText:** `<TldrBlock text="..." />`
"Legacy CAT tools retrieve TM matches based purely on character similarity, translating segment-by-segment in total isolation. Flixu's Precision TM rethinks this from the ground up by treating the entire document as a single, cohesive context. Instead of just substituting words, Flixu injects both Exact and Fuzzy Matches into the LLM as Linguistic Reference Material. This means a 70% fuzzy match in paragraph two doesn't just help translate paragraph two—it actively teaches the AI your preferred tone, style, and terminology for the entire document."

---

## 3. Capabilities / Mechanic Grid
**Component:** `<Section data-chapter="03 — CAPABILITIES" class="content-section mt-12">`
**Layout:** 1 Column Intro + Grid 2x2 (`md:grid-cols-2 gap-12`)

**Intro:**
- **H2:** Technical Architecture

**Grid Items (5 Cards):**
- **Card 1 (High-Dimensional Embeddings):**
  - **Icon:** (SVG Icon)
  - **H3:** High-Dimensional Embeddings
  - **P:** Ranging from 256 to 4096 dimensions, our semantic vectors capture nuances like formal vs. informal registers and subtle industry jargon.
- **Card 2 (Instruction-Based Retrieval):**
  - **Icon:** (SVG Icon)
  - **H3:** Instruction-Based Retrieval
  - **P:** The TM engine knows *why* you are translating. It actively searches for matches that fit the requested industry context—whether that's medical, technical, or legal.
- **Card 3 (Holistic Context Injection):**
  - **Icon:** (SVG Icon)
  - **H3:** Holistic Context Injection
  - **P:** Legacy tools translate sentence-by-sentence. Flixu treats the whole text as context. Matches aren't just substituted; they are fed to the LLM as reference, meaning a fuzzy match improves the entire surrounding translation.
- **Card 4 (AI Candidate Reranking):**
  - **Icon:** (SVG Icon)
  - **H3:** AI Candidate Reranking
  - **P:** Included in Team and Business plans. A dedicated LLM evaluates multiple potential TM hits in milliseonds to suppress false positives and elevate the perfect match.
- **Card 5 (Legacy Import / Export):**
  - **Icon:** (SVG Icon)
  - **H3:** Legacy Import / Export
  - **P:** No vendor lock-in. Migrate seamlessly from Trados, Phrase, or MemoQ by importing your standard TMX or CSV files directly into a new Flixu vault.

---

## 4. FAQ
**Component:** `<Section data-chapter="04 — FAQ" class="content-section bg-stone-50 border-t mt-24">`
**Layout:** 1 Column (`max-w-3xl`)

**Intro:**
- **H2:** Technical FAQ

**Static Grid Items (2 Cards):**
- **Q1:** How does Flixu handle Fuzzy Matches differently?
  - **A1:** Traditional tools just use Machine Translation to fill in the blanks of a fuzzy match. We don't translate segment-by-segment. We translate the whole text contextually, using your fuzzy matches as an active prompt for the LLM. A match anywhere in the text improves the quality of the translation everywhere.
- **Q2:** What is AI Reranking for Translation Memory?
  - **A2:** Flixu employs a secondary AI model (Reranker) to evaluate up to 20 candidate TM matches simultaneously. It scores matches based on exact domain context and terminology compliance, ensuring near-human hit accuracy.

---
## Audit Report (Phase 2 Completed)

**1. Stage of Awareness:**
- **Current:** Stage 4. Extremely technical deep-dive into semantic vector search vs. legacy fuzzy matching.
- **Target:** Maintain. This is where Flixu wins against Phrase/Trados.

**2. Persona Alignment:**
- Computational Linguists, NLP Engineers, Technical Localization Managers.

**3. Structural GEO / SEO Gaps:**
- **Missing In-Body Answer First:** The TL;DR block must be visually rendered.
- **Paragraph Density:** The TL;DR itself is a massive 5-sentence paragraph that needs to be broken up. The Grid P tags are solid.
- **Missing Visual Anchor:** The concept of "High-Dimensional Embeddings" (256 to 4096 dimensions) and "70% fuzzy match" is hard to understand via pure text. It desperately needs a flowchart or a simple data visualization callout block showing how Flixu injects TM into the context window.

**4. Brand Voice & Copy Improvements:**
- "Translation Memory, Rewired for AI" is an excellent positioning H1.
- "A match anywhere in the text improves the quality of the translation everywhere" perfectly explains the contextual paradigm shift.

**Phase 4 Directives:**
1. Render the TL;DR block.
2. Radically shorten and split the TL;DR block itself into two distinct paragraphs.
3. Inject a visual structural block (e.g., a process flow) explaining the Holistic Context Injection.

---

## Phase 4: Final Rewritten Copy

**Title Tag:** AI Translation Memory | Flixu
**Meta Description:** Next-generation Translation Memory powered by contextual embeddings.
**[STRUCTURAL DIRECTIVE: Implement SoftwareApplication and FAQPage Schema.]**

### 1. Hero Section
**Label:** Feature Spotlight
**H1:** Translation Memory, Rewired for AI.
**P:** Stop relying on character-similarity matching. Flixu retrieves context through highly granular semantic vectors and dual-layer AI reranking.

### 2. TL;DR Block (In-Body Answer First)
> **What is Flixu Semantic Translation Memory?**
> Flixu's Translation Memory uses semantic vector search rather than character similarity to find relevant past translations. Exact and Fuzzy Matches are injected into the LLM as reference material — not substituted word-for-word. A match anywhere in a document improves the translation quality throughout.

### 3. Holistic Context Injection
**H2:** A New Architectural Paradigm

Legacy tools translate sentence-by-sentence. Flixu processes structural context horizontally. 

**The Semantic Retrieval Flow:**
1. **Source Ingestion:** You upload an English technical document.
2. **Vector Query:** Flixu analyzes the manual against your high-dimensional semantic TM database.
3. **Reference Identification:** It finds 15 relevant Fuzzy Matches regarding engineering specs previously translated into Japanese.
4. **Context Window Prompting:** Instead of blindly pasting those matches into the UI, Flixu binds them to the overarching LLM system prompt. 
5. **Holistic Output:** The AI reads the old Japanese references, absorbs your specific engineering terminology, and generates the new manual with perfect semantic continuity.

### 4. Enterprise Capabilities
**H2:** High-Dimensional Linguistics

**AI Candidate Reranking**
Included in Team and Business tier deployments. A secondary embedded LLM instantly evaluates multiple TM candidates simultaneously. It filters false positives and surfaces the most contextually relevant match to the top of the queue.

**Instruction-Based Retrieval**
The semantic search engine actively parses *intent*. When querying the TM database, Flixu actively prioritizes matches that fit your active client's specific industry (e.g., separating "Contract" in a legal context versus "Contract" in a medical context).

**Legacy Database Migration**
Your historical data is not locked. Migrate seamlessly from an aging Trados, Phrase, or MemoQ setup by importing standard TMX or CSV files directly into a new semantic Flixu vault.

### 5. Frequently Asked Questions
**H2:** FAQs: Semantic Translation Memory

- **Q1: How does Flixu handle Fuzzy Matches differently?**
  A1: Traditional tools just use Machine Translation to fill in the blanks of a fuzzy match. We don't translate segment-by-segment. We translate the whole text contextually, using your fuzzy matches as an active prompt for the LLM. A match anywhere in the text improves the quality of the translation everywhere.
- **Q2: What is AI Reranking for Translation Memory?**
  A2: Flixu employs a secondary AI model (Reranker) to evaluate multiple candidate TM matches simultaneously. It scores matches based on exact domain context and terminology compliance, ensuring near-human hit accuracy.
- **Q3: Does Flixu support TMX file import from Trados or Phrase?**
  A3: Yes. You can securely import standard `.tmx` structured files directly into any Client Profile to instantly populate your vector database with legacy translations.
- **Q4: How does the AI Reranking differ from standard fuzzy matching?**
  A4: Standard fuzzy matching relies on Levenshtein distance (character similarity). Flixu's AI Reranker uses semantic vectors, meaning it understands that "The vehicle stopped" and "The car halted" are identical in meaning, even if the characters differ completely.
- **Q5: Can I export my Translation Memory from Flixu?**
  A5: Yes. Flixu maintains an open data policy. You can export your aggregated Translation Memory databases back into standard formats at any time.
- **Q6: Does the TM update automatically after each confirmed translation?**
  A6: Yes. When an authorized user (Editor or Admin) confirms a translated segment, it is dynamically ingested into the active Translation Memory, instantly improving context for subsequent projects.

### 6. Call to Action
**H2:** Upgrade your Translation Memory.
**P:** Don't replace words. Reference context. Connect your `.tmx` files today.
**Button (Primary):** Start Free Trial -> `/signup`
**Button (Secondary):** Test Vector Search -> `/product/documents`

#### Related Features
- [Automated LQA Intelligence](/features/lqa)
- [Team Collaboration Workspace](/features/team-collaboration)
- [Quick Translations](/features/quick-translations)
