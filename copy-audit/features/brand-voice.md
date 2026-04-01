# Current Copy & Structure: Brand Voice (features/brand-voice.astro)

> **File:** `src/pages/[...lang]/features/brand-voice.astro`
> **Schema:** `SoftwareApplication`, `FAQPage`
> **Layout:** `BaseLayout`
> **Metadata:** Title="Brand Voice Translation Rules | Flixu", Desc="Control the stylistic output of AI translations..."

---

## 1. Hero Section
**Component:** `<Section data-chapter="01 — OVERVIEW" class="hero-section pb-16">`
**Layout:** Grid 1-2 (`md:grid-cols-2 gap-12`) 

**Left Column (Text):**
- **Breadcrumbs:** Home > Features > Brand Voice
- **Label (Orange, Mono):** Feature Spotlight
- **H1:** Stop sounding like a robot.
- **P:** Raw AI sounds sterile. Flixu applies your specific brand personality, tone, and stylistic constraints to every single sentence.
- **Button:** Define Your Voice (Hidden class applied)

**Right Column (Visual):**
- `<HeroBrandVoice client:load />`

---

## 2. TL;DR Block
**Component:** `<Section data-chapter="02 — TL;DR" class="tldr-section">`
**Layout:** 1 Column (`max-w-3xl`)

**BlockText:** `<TldrBlock text="..." />`
"DeepL and traditional machine translation ignore style. Flixu allows you to define custom 'Brand Voices'—detailed stylistic instructions that govern formality (tu vs. Sie), sentence length, and emotional resonance. Apply these voices to your clients or projects to ensure that French marketing copy sounds just as punchy and human as the English original."

---

## 3. Capabilities / Mechanic Grid
**Component:** `<Section data-chapter="03 — CAPABILITIES" class="content-section mt-12">`
**Layout:** 1 Column Intro + Grid 2x2 (`md:grid-cols-2 gap-12`)

**Intro:**
- **H2:** How does Brand Voice control the AI?

**Grid Items (4 Cards):**
- **Card 1 (Instructional Prompts):**
  - **Icon:** (SVG Icon)
  - **H3:** Instructional Prompts
  - **P:** Write guidelines precisely as you would for a human translator. "Write in short, punchy sentences. Use active voice." The AI honors these rules during token generation.
- **Card 2 (Formality Control):**
  - **Icon:** (SVG Icon)
  - **H3:** Formality Control
  - **P:** Eliminate awkward tone shifts. Formally lock translations to 'Sie' (Formal German) or 'tu' (Informal French) to prevent the AI from guessing based on the source text.
- **Card 3 (Context Inheritance):**
  - **Icon:** (SVG Icon)
  - **H3:** Context Inheritance
  - **P:** Map Brand Voices directly to Client Profiles. When a team member starts a project for that client, the voice is automatically enforced without manual configuration.
- **Card 4 (Voice Testing):**
  - **Icon:** (SVG Icon)
  - **H3:** Voice Testing
  - **P:** Use the built-in Quick Translate widget to test different voices against the same source string and tweak your instructions before applying them to large documents.

---

## 4. FAQ
**Component:** `<Section data-chapter="04 — FAQ" class="content-section bg-stone-50 border-t mt-24">`
**Layout:** 1 Column (`max-w-3xl`)

**Interactive Block:** `<FAQSection items={faqs} />`

- **Q1:** How does Brand Voice work in Flixu translation?
  - **A1:** A Brand Voice is a set of natural language instructions (like 'use an enthusiastic tone' or 'avoid passive voice') that is injected directly into the LLM context before translation occurs. This forces the translation to adhere to your stylistic rules.
- **Q2:** Can I have multiple brand voices?
  - **A2:** Yes, Flixu supports multiple Brand Voices per account. You can assign different voices to different clients, or even different projects (e.g., 'Marketing' vs. 'Legal').
- **Q3:** Does the AI understand different levels of formality?
  - **A3:** Absolutely. You can specifically instruct the Brand Voice to utilize formal pronouns (such as the German 'Sie' or French 'vous') versus informal pronouns ('du' or 'tu'). The Engine will lock this grammar across all translations.
- **Q4:** How do I apply a Brand Voice to a translation?
  - **A4:** You simply attach the designated Brand Voice profile to your specific Client or Project within the Flixu Workspace. All documents translated under that project will automatically inherit those rules.

---
## Audit Report (Phase 2 Completed)

**1. Stage of Awareness:**
- **Current:** Stage 3. Explains the exact mechanical solution to the "AI sounds sterile" problem.
- **Target:** Maintain. The H1 "Stop sounding like a robot" is a perfect Stage 2/3 hook.

**2. Persona Alignment:**
- Content Managers, Marketing Directors, Localization Managers.

**3. Structural GEO / SEO Gaps:**
- **Missing In-Body Answer First:** The TL;DR block is defined in the components but needs to be explicitly rendered near the top of the readable content for optimal AEO indexing.
- **Paragraph Density:** The Grid format naturally helps, but the instructional copy in the cards could be tighter. 
- **Missing Example Anchor:** For a page about "Instructional Prompts", we absolutely need a 2-line code snippet or visual block showing an actual JSON/text prompt (e.g., "Use active voice, formal Sie").

**4. Brand Voice & Copy Improvements:**
- "Raw AI sounds sterile. Flixu applies your specific brand personality" is excellent, punchy copy.

**Phase 4 Directives:**
1. Ensure the TL;DR block renders immediately after the Hero.
2. Inject a visual prompt/code example into the "Instructional Prompts" capability section to ground the concept.

---

## Phase 4: Final Rewritten Copy

**Title Tag:** Brand Voice Translation Rules | Flixu
**Meta Description:** Control the stylistic output of AI translations with programmable tone and formality rules.
**[STRUCTURAL DIRECTIVE: Implement SoftwareApplication and FAQPage Schema.]**

### 1. Hero Section
**H1:** Stop sounding like a robot.
**P:** Raw AI sounds sterile. Flixu applies your specific brand personality, tone, and stylistic constraints to every single sentence.

### 2. TL;DR Block (In-Body Answer First)
> **What is Flixu Brand Voice?**
> Brand Voice in Flixu is a set of stylistic instructions — tone, formality, sentence structure, and emotional register — applied to every translation request automatically. Instead of adjusting AI output after the fact, you define how your brand speaks once, and Flixu enforces those rules across every language.

### 3. How Brand Voice Controls the AI
**H2:** Programmable Localization Rules

> **The Impact of Authenticity:**
> CSA Research indicates that 75% of consumers prefer to buy products in their native language—provided the brand tone feels authentic and professionally localized.

**Instructional Prompts**
Write guidelines precisely as you would for a human translator. The AI honors these semantic rules during token generation.

```text
// Example Brand Voice configuration
1. Tone: Enthusiastic, disruptive, confident.
2. Structure: Write in short, punchy sentences. Use active voice. 
3. Grammar: Never use passive constructs. 
4. Emotion: Evoke a sense of technical urgency.
```

**Formality Control**
Eliminate embarrassing tone shifts. Formally lock translations to 'Sie' (Formal German), 'vous' (Formal French), or their informal equivalents. This prevents the AI from probabilistically guessing societal register based on the source text.

**Context Inheritance**
Map Brand Voices directly to Client Profiles. When a team member starts a project for a specific client, the Brand Voice is automatically enforced across the entire dataset without manual configuration.

**Voice Testing**
Use the built-in Quick Translate widget as an iteration lab. Test different Brand Voice configurations against the same source string to dial in the perfect tone before deploying it globally to a 50,000-word product launch.

### 4. Frequently Asked Questions
**H2:** FAQs: Brand Voice Translation

- **Q1: How does Brand Voice work in Flixu translation?**
  A1: A Brand Voice is a set of natural language instructions (like 'use an enthusiastic tone' or 'avoid passive voice') that is injected directly into the LLM context before translation occurs. This forces the translation to adhere to your stylistic rules.
- **Q2: Can I have multiple brand voices?**
  A2: Yes, Flixu supports multiple Brand Voices per account. You can assign different voices to different clients, or even different projects (e.g., 'Marketing' vs. 'Legal').
- **Q3: Does the AI understand different levels of formality?**
  A3: Yes. You can instruct the Brand Voice to enforce formal pronouns (German 'Sie', French 'vous') or their informal equivalents. The engine locks this grammar rule across all translations for that project.
- **Q4: How do I apply a Brand Voice to a translation?**
  A4: You simply attach the designated Brand Voice profile to your specific Client or Project within the Flixu Workspace. All documents translated under that project will automatically inherit those rules.

### 5. Call to Action
**H2:** Try it with your own text.
**P:** See the difference contextual translation makes. Paste a sentence and deploy your brand tone.
**Button (Primary):** Start Free Trial -> `/signup`
**Button (Secondary):** Test Your Voice -> `/product/text`

#### Related Features
- [Context Orchestration](/product/context)
- [For Global Marketing](/for/global-marketing)
- [Translating Brand Voice (Topic Guide)](/topic/brand-voice-in-translation)
