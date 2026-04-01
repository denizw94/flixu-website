# Current Copy & Structure: Legal (industries/legal.astro)

> **File:** `src/pages/[...lang]/industries/legal.astro`
> **Schema:** `Article`, `FAQPage`
> **Layout:** `BaseLayout`
> **Metadata:** 
>   - Title: "Legal Translation — Precision Where It Matters Most"
>   - Desc: "Translate contracts, compliance documents, and legal communications with domain-aware AI that understands legal terminology and context."

---

## 1. Hero Section
**Component:** `<Section data-chapter="01 — INTRO" class="hero-section">`
**Layout:** Grid 1-2 (`md:grid-cols-2 gap-12`) 

**Left Column (Text):**
- **Breadcrumbs:** Home > Who it's for > Industries > Legal
- **Badge:** Industry
- **H1:** Legal.
- **P:** In legal, a wrong translation isn't an inconvenience — it's a liability.

**Right Column (Visual):**
- `<HeroLegal client:load />`

---

## 2. TL;DR Block
**Component:** `<Section data-chapter="02 — TL;DR" class="tldr-section">`
**Layout:** 1 Column (`max-w-3xl`)

**BlockText:** `<TldrBlock text="..." />`
"Legal terminology requires absolute precision where mere semantic proximity is a liability. General-purpose machine translation engines homogenize terminology and can lead to misinterpretations of contractual obligations. Flixu's Domain-Aware translation routes legal content through robust LLM environments specifically fine-tuned for legal verbiage. Enforced glossaries ensure technical terms like 'consideration' or 'liability' are mapped rigidly to their exact local equivalents, providing an airtight foundation for final review by certified human counsel."

---

## 3. Compliance Section
**Component:** `<Section data-chapter="03 — COMPLIANCE" class="content-section">`
**Layout:** 1 Column Prose-Inline

- **KeyTakeaways (Array):**
  - "Domain-aware routing utilizes LLM settings optimized strictly for legal documentation."
  - "Strict glossary enforcement prevents critical mistranslations of complex contractual terms."
  - "Designed to generate flawless foundational drafts for final review by qualified human legal counsel."

- **H2:** Why is domain awareness critical for legal translations?
- **P:** Legal language is precise by design. The word "shall" has a fundamentally different legal weight than "will." "Consideration" means compensation in contract law, not thoughtfulness. Domain-aware translation mathematically routes legal content to models explicitly configured for legal terminology, avoiding the probabilistic guessing games played by standard MT engines.
- **P:** Combined with glossary enforcement, Flixu ensures your contractual terms are translated with the exact, strict precision your legal team requires. This drastically accelerates the review cycle for your external legal counsel, preventing significant translation-induced liabilities before they arise.
- **P:** Beyond basic terminology, legal localization requires an understanding of cross-jurisdictional nuances. Adapting a contract from US Common Law to the German Civil Code (BGB) implies more than just swapping words—it requires structural mapping of liability clauses and indemnification constructs. Flixu's LLM instruction parameters allow you to explicitly declare the target legal framework. This contextual constraint prevents the engine from generating direct, literal translations that hold no binding authority in the target country's legal system, ensuring absolute foundational accuracy.

---

## 4. FAQ Section
**Component:** `<Section data-chapter="03 — FAQ" class="content-section--alt border-y-0 border-t">`
**Layout:** 1 Column (`hero-container`)

**Interactive Block:** `<FAQSection items={faqs} />`

- **Q1:** Is Flixu suitable for certified legal translations?
  - **A1:** Flixu is designed for first-draft legal translations that are reviewed by qualified legal translators. For certified translations, we recommend using Flixu as an MTPE base with human legal review.
- **Q2:** How does domain-aware routing help legal translation?
  - **A2:** Legal domain routing activates legal-specific terminology databases and model configurations. Terms like 'consideration', 'party', and 'execution' are translated in their legal context, not their everyday meaning.
- **Q3:** Can Flixu handle scanned PDF contracts?
  - **A3:** Currently, Flixu excels at structural text-based document formats (DOCX, text-based PDF, XML) to ensure absolute layout integrity. For scanned documents, we recommend running OCR before processing.
- **Q4:** Is our confidential legal data safe with Flixu?
  - **A4:** Absolutely. We enforce zero-retention policies with our enterprise AI partners via API. Your sensitive legal documents are never stored or used for any form of model training.
- **Q5:** Can I enforce a specific legal framework or jurisdiction?
  - **A5:** Yes. Through our precise Context Engine prompting, you can specify target jurisdictions, ensuring that the AI maps complex terminology accurately to the local legal system.

---

## 5. CTA Action
**Component:** `<Section data-chapter="04 — START" class="content-section--border-top">`
**Layout:** CTA Footer Layout (`cta-footer`)

- **H2:** Translate with precision.
- **P:** Context-aware legal translation — try it free.
- **Button (Primary):** View Pricing (Links to `/pricing`)

---
## Audit Report (Phase 2 Completed)

**1. Stage of Awareness:**
- **Current:** Stage 3. Directly addresses the liability of semantic proximity in legal contracts.
- **Target:** Maintain. "In legal, a wrong translation isn't an inconvenience — it's a liability" is a phenomenal hook.

**2. Persona Alignment:**
- General Counsel, Compliance Directors, Law Firm Partners.

**3. Structural GEO / SEO Gaps:**
- **Missing In-Body Answer First:** The TL;DR must be rendered immediately after the Hero.
- **Paragraph Density:** The "Compliance Section" has several massive paragraphs explaining the difference between "shall/will" and cross-jurisdictional constraints.
- **Missing Visual Callout:** The explanation of structurally mapping US Common Law to the German Civil Code (BGB) is highly authoritative but buried in a wall of text. It needs to be a dedicated callout block.

**4. Brand Voice & Copy Improvements:**
- The distinction between "shall/will" and the definition of "Consideration" perfectly execute the 'Calm, Precise' authority required for this persona.

**Phase 4 Directives:**
1. Break down the severe paragraph density in the Compliance Section.
2. Extract the "Jurisdictional Mapping" (US Common Law vs BGB) point into a dedicated visual callout box to establish immediate AEO authority.
3. Inject the In-Body Answer First layout.

---

## Phase 4: Final Rewritten Copy

**Title Tag:** Legal Translation — Precision Where It Matters Most
**Meta Description:** Translate contracts, compliance documents, and legal communications with domain-aware AI that understands legal terminology and context.
**[STRUCTURAL DIRECTIVE: Implement Article and FAQPage Schema.]**

### 1. Hero Section
**H1:** Legal Translation — Precision Where It Matters Most
**P:** In legal, a wrong translation isn't an inconvenience — it's a liability.

### 2. TL;DR Block (In-Body Answer First)
> **What is Flixu Legal Translation?**
> Legal translation with Flixu applies domain-specific terminology constraints before a single word is generated. Terms like 'consideration,' 'indemnification,' and 'shall' are mapped to their precise legal equivalents in the target jurisdiction — not their everyday meanings. Designed as a high-quality first draft for review by qualified legal counsel.

### 3. Key Takeaways
- Domain-aware routing utilizes LLM settings optimized strictly for legal documentation.
- Strict glossary enforcement prevents critical mistranslations of complex contractual terms.
- Designed to generate flawless foundational drafts for final review by qualified human legal counsel.

### 4. Domain Awareness in Legal Translation
**H2:** Why is domain awareness critical for legal translations?

Legal language is precise by design. The word "shall" carries a fundamentally different legal weight and obligation than the word "will." The term "Consideration" implies financial compensation in contract law, not interpersonal thoughtfulness.

Domain-aware translation structurally routes legal content to isolated inference models explicitly configured for strict legal terminology. This bypasses the dangerous probabilistic guessing games played by standard, consumer-grade MT engines.

Combined with strict glossary enforcement, Flixu uniquely ensures your foundational contractual terms are translated with the exact, strict precision your legal team demands. This drastically accelerates the review cycle for your expensive external legal counsel, preventing significant liabilities before they arise. 

> **The Cost of Mistranslation:**
> In high-stakes legal environments, semantic proximity is dangerous. The infamous $71 million Willie Ramirez settlement illustrates how a single mistranslated word ("intoxicado") can trigger catastrophic financial and medical liability. Flixu mitigates this risk algorithmically.

### 5. Jurisdictional Mapping & Structural Nuance
**H2:** How does Flixu handle cross-jurisdictional constraints?

Beyond basic localized terminology, enterprise legal translation requires a profound structural understanding of deeply complex cross-jurisdictional nuances. 

> **Mapping Common Law to Civil Code:**
> Adapting a rigorous contract from US Common Law to the German Civil Code (BGB) requires significantly more than swapping vocabulary. It demands the structural mapping of liability clauses and indemnification constructs. Flixu's Context Engine allows you to explicitly declare the target legal framework upfront. This contextual constraint prevents the engine from generating literal, verbatim translations that hold no binding authority in the target country's legal system.

### 6. Flawless Foundational Drafts
**H2:** Accelerate Your Outside Counsel Review

Flixu is engineered strictly to generate flawless foundational drafts for final review by highly qualified human legal counsel. By automating the mechanical terminology mapping, your partners focus entirely on strategic jurisdictional nuance rather than fixing basic vocabulary errors.

### 7. Ephemeral Security & Zero Data Retention
**H2:** Is confidential legal data safe?

Your highly sensitive legal documents, unreleased M&A data, and confidential compliance records are processed ephemerally and never used to train public models. See our [Privacy Policy](/legal/privacy) for details.

### 8. Frequently Asked Questions
**H2:** FAQs: Legal Translation

- **Q1: Is Flixu suitable for certified legal translations?**
  A1: Flixu is designed for first-draft legal translations that are reviewed by qualified legal translators. For certified translations, we recommend using Flixu as an MTPE base with human legal review.
- **Q2: How does domain-aware routing help legal translation?**
  A2: Legal domain routing activates legal-specific terminology databases and model configurations. Terms like 'consideration', 'party', and 'execution' are translated in their legal context, not their everyday meaning.
- **Q3: Can Flixu handle scanned PDF contracts?**
  A3: Currently, Flixu excels at structural text-based document formats (DOCX, text-based PDF, XML) to ensure absolute layout integrity. For scanned documents, we recommend running OCR before processing.
- **Q4: Is our confidential legal data safe with Flixu?**
  A4: Yes. Your inputs are processed ephemerally and never used to train public models. For full details, see our [Privacy Policy](/legal/privacy).
- **Q5: Can I enforce a specific legal framework or jurisdiction?**
  A5: Yes. Through our precise Context Engine prompting, you can specify target jurisdictions, ensuring that the AI maps complex terminology accurately to the local legal system.

### 9. Call to Action
**H2:** Translate with precision.
**P:** Translate securely, map terminology automatically, and radically accelerate your global legal review cycles without compromising liability.
**Button (Primary):** View Pricing -> `/pricing`
