# Current Copy & Structure: About (about.astro)

> **File:** `src/pages/[...lang]/about.astro`
> **Schema:** `None`
> **Layout:** `BaseLayout` (`chapter="Manifesto"`)
> **Metadata:** 
>   - Title: `t.about.title`

---

## 1. Hero Section
**Component:** `<Section data-chapter="01 — MANIFESTO" class="hero-section">`
**Layout:** Center Aligned Text (`max-w-4xl mx-auto text-center`)

**Content:**
- **Badge:** `t.about.bgLabel`
- **H1:** `t.about.title`
- **P:** `t.about.subtitle`

---

## 2. Content / Manifesto Notes
**Component:** `<Section data-chapter="02 — NOTES" class="content-section bg-[#FDFCF8]">`
**Layout:** Centered Prose Column (`max-w-2xl mx-auto`)

**Narrative Structure:**
- **P 1:** `t.about.p1` (Features a large drop-cap style on the first letter)
- **P 2:** `t.about.p2`
- **Pull Quote / Insight Block:**
  - **Quote text:** `"{t.about.quote}"` (Italicized, large text)
- **P 3:** `t.about.p3`
- **P 4:** `t.about.p4`

**Signature Block (`mt-20 pt-8`):**
- **Avatar:** Grayscale placeholder circle with the letter "D".
- **Signature Name:** `t.about.sign` (Italicized)
- **Role Badge:** `t.about.role`

---
## Audit Report (Phase 2 Completed)

**1. Stage of Awareness & Persona:**
- **All Stages (Brand Affinity):** The manifesto builds trust through authenticity.
- **Tone Check:** Highly personal, "Founder Note" style. Needs to utilize the "Location, Action, Thoughts, Emotions, Dialogue" framework.

**2. Structural GEO/SEO Gaps:**
- **Schema:** Requires robust `Organization` and `Person` (Founder) schema to establish E-E-A-T.
- **Internal Linking:** The current layout (just 4 paragraphs of prose) lacks strategic internal links. We should organically link to the `/method` or `/notes/context-is-code` pages.

**3. Brand Voice & Copy Improvements (For Phase 4):**
- Evaluate paragraphs 1-4 for authentic storytelling. Does it "zoom into the moment" or just give a helicopter summary? Instead of saying "We saw a problem", it should describe the moment the problem became intolerable.
- The signature block with the placeholder gray circle ("D") needs to be humanized.

**Rewrite Directives:** Polish the narrative to show, not tell. Add organic internal links. Ensure the tone is calm but deeply empathetic to the localization struggle.

---

## Phase 4: Final Rewritten Copy

**Title Tag:** Flixu | About the Founder & Our Story
**Meta Description:** Uncover the origin story of Flixu. Discover how the frustration of broken JSON files and spotty airport WiFi led to a fundamentally new approach to B2B localization.
**[STRUCTURAL DIRECTIVE: Implement Organization & Person Schema (Deniz Wozniak, sameAs-LinkedIn) on this page for E-E-A-T.]**

### 1. Hero Section
**H1:** Translation is a human problem first.
**P:** Flixu was founded by Deniz Wozniak, a B2B SaaS practitioner with 10+ years in the localization industry, including time at Phrase. 

### 2. Content / Manifesto Notes
*The following prose is designed for the center column, utilizing drop-caps and a highly personal, narrative structure.*

**P1:** Flixu wasn’t created in a boardroom. It was born on the road—somewhere between hurried client calls and a spotty 4G signal. I was sitting in a crowded airport terminal late on a Friday night, tethered to a dying laptop hotspot, trying to salvage a client's software release. The development team had pushed a minor UI update, but the external translation agency had accidentally stripped the internal JSON tags out of the German localization file. The entire global deployment was failing over a single missing character. As I manually scrolled through 500 lines of raw code to insert a curly bracket, the absurdity of the situation became impossible to ignore: teams were building the future of software, but shipping it using fragile, deeply manual spreadsheet workflows.

**P2:** A few months later, generative AI exploded onto the scene. Product managers immediately tried feeding their entire application strings into raw LLMs to bypass the legacy agencies entirely. The outputs were fast, but chaotic. The translation engine translated "Dashboard" three different ways in the exact same manual. It completely rewrote critical compliance clauses because the algorithm decided a friendlier tone was statistically optimal. The localization crisis simply shifted from a speed problem to a profound loss of corporate control.

**Insight Block (Pull Quote):**
> *"Raw AI is brilliant, but fragmented. True localization requires predictable, engineered context."*

**P3:** That Friday night in the terminal was the catalyst. It became obvious that the industry didn't need another generic digital editor for humans to type in, nor did it need a raw chatbot. We needed a completely new [methodology](/method) that could bridge the gap—a quiet, precise workspace that respects language in all its complexity. A system that actively protected the geometry of the code so developers could merge updates without fear, while enforcing the exact brand voice rules that raw AI historically ignores. 

**P4:** We built Flixu to finally end that deployment panic. By shifting the burden of consistency from human project managers onto a deeply contextual architecture, we free international teams to focus on what actually matters: connecting with the customer. 

### Signature Block
- **Avatar:** [Actual Headshot from CMS]
- **Signature Name:** *Deniz*
- **Role Badge:** Founder, Flixu AI
