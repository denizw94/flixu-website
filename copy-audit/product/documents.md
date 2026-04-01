---
title: "Document Translation — Preserve Layouts, Eliminate the DTP Tax"
description: "Translate PDF, DOCX, and IDML files with zero layout breakage. Flixu's document parser handles text expansion and eliminates manual Desktop Publishing costs."
category: "Product"
dateModified: 2026-03-03
---

# Current Copy & Structure: Document Preservation (product/documents.astro)

> **File:** `src/pages/[...lang]/product/documents.astro`
> **Schema:** `SoftwareApplication`, `FAQPage`
> **Layout:** `ProductLayout`

---

## 1. Hero Visual (No Text)
**Component:** `<HeroDoc client:load slot="visual" />`

---

## 2. The Problem
**Component:** `<Section data-chapter="02 — [PROBLEM]" class="content-section">`
**Layout:** 1 Column (`max-w-3xl`)

- **Label (Orange, Mono):** `[content.problem.label]`
- **H2:** `[content.problem.h2]`
- **P1:** `[content.problem.p1]`
- **P2:** `[content.problem.p2]`

---

## 3. TL;DR Block
**Component:** `<Section data-chapter="03 — TL;DR" class="tldr-section">`
**Layout:** 1 Column (`max-w-3xl`)

**BlockText:** `<TldrBlock text="..." />`
"Flixu's document translation preserves the layout your readers expect. When you upload a PDF, DOCX, PPTX, or IDML file, the parser separates text from structure, translates it with your glossary and brand voice active, and rebuilds the original file — automatically handling text expansion without manual reformatting."

---

## 4. Integrity (Mechanic)
**Component:** `<Section data-chapter="04 — [INTEGRITY]" class="content-section border-t border-stone-100">`
**Layout:** Grid 1-2 (`md:grid-cols-2 gap-16 items-center`)

**Left Column (Text):**
- **H3:** `[content.integrity.h3]`
- **P:** `[content.integrity.p]`
- **List Item 1:** `[content.integrity.list[0]]`
- **List Item 2:** `[content.integrity.list[1]]`
- **List Item 3:** `[content.integrity.list[2]]`

**Right Column (Visual):**
- **Component:** `<DetailDoc client:load />`
- **Container:** `aspect-square bg-stone-50 border`

---

## 5. Deep Dive (English Only)
**Component:** `<Section data-chapter="05 — DEEP DIVE" class="content-section border-t...">`
**Layout:** 1 Column Prose (`max-w-3xl prose prose-stone`)

- **H2:** Why does translation often disrupt document geometry?
- *(Text Follows)*

---

## 6. FAQ
**Component:** `<Section data-chapter="06 — FAQ" class="content-section border-t pb-0">`
**Layout:** 1 Column (`max-w-3xl`)

**Interactive Block:** `<FAQSection items={faqs} />`

---
## Audit Report (Phase 2 Completed)

**1. Stage of Awareness:**
- **Current:** Stage 2/3. Highly focused on the pain of the "DTP Tax" and layout breakage.
- **Target:** Maintain. The explanation of "geometric friction" versus "linguistic friction" is brilliant.

**2. Persona Alignment:**
- Agency Owners, Content Marketers, Operations Managers.

**3. Structural GEO / SEO Gaps:**
- **Paragraph Density:** The Deep Dive (H2: Why does translation often disrupt document geometry?) suffers from massive text blocks explaining text expansion (German +30%).
- **The 3 Layers Formatting:** The explanation of "Flixu Spatial Parsing" (Layer 1, Layer 2, Layer 3) is buried in narrative. These need to be separated into distinct, scannable steps for AI extraction.
- **Missing In-Body Answer First:** The TL;DR block must be rendered immediately after the Hero.

**4. Brand Voice & Copy Improvements:**
- "Algorithmic Geometry Handling" and "Metadata Skeleton" are very strong terminologies that sound enterprise-grade.

**Phase 4 Directives:**
1. Break down the heavy paragraphs detailing the DTP tax.
2. Format the 3 Layers of Parsing into a numbered list or distinct step-by-step layout.
3. Bold the text expansion metrics (e.g., "German text expands by 20% to 35%").
4. Inject the In-Body Answer First layout.

---

## Phase 4: Final Rewritten Copy

### 1. Hero Visual & H1
**H1:** Document Translation — Preserve Layouts, Eliminate the DTP Tax
`<HeroDoc client:load slot="visual" />`

### 2. TL;DR Block (In-Body Answer First)
> **What is Flixu Document Translation?**
> Flixu's document translation preserves the layout your readers expect. When you upload a PDF, DOCX, PPTX, or IDML file, the parser separates text from structure, translates it with your glossary and brand voice active, and rebuilds the original file — automatically handling text expansion without manual reformatting.

### 3. The Problem
**Label:** Geometric Friction
**H2:** The Physics of Text Expansion

The primary friction in B2B enterprise localization is rarely linguistic; it is geometric. Human languages simply do not occupy the same physical space.

If you translate an English sentence into German or Russian, **the physical character count typically expands by 20% to 35%** (W3C Internationalization guidelines). In a rigidly constructed business document—where text sits within hardcoded HTML bounding boxes or adjacent to tabular data—this expansion is critical. The newly translated German text overflows the box, breaking the user interface or collapsing the PDF layout into visual chaos.

### 4. The DTP Tax
**H3:** Curing the Desktop Publishing Hangover

For decades, the global translation industry solved geometric collisions through brute force human labor. 

When a PDF was translated, the layout inevitably broke. Agencies were forced to route the file to a specialized, expensive team of graphic designers known as Desktop Publishing (DTP). The DTP team would manually open the German document, painstakingly resize fonts, drag bounding boxes, and un-break the layout page by page. 

This introduces massive financial bloat and actively prevents product teams from executing Continuous Localization.

### 5. Algorithmic Reconstruction
**H2:** The 3-Layer Spatial Parser

Flixu eliminates the manual DTP tax by shifting the workload from human graphic designers to an intelligent algorithmic parser. We engineered our ingestion engine to understand the physical format of the document before generation begins.

### 1. The Metadata Skeleton
When you upload a complex format (a nested Microsoft Word DOCX, an XML array, or an iOS `.strings` file), our parser deliberately isolates the raw translatable text from the formatting metadata. Every font size, hex code, bold tag, and HTML `<span>` is preserved perfectly in an invisible, secure underlying skeleton. 

### 2. Algorithmic Geometry Handling
Once the text is translated via our LLM architecture, our parser calculates the percentage of text expansion. If the German phrase is 30% longer and threatens to overflow the historical bounding box, the parser utilizes its spatial context to apply micro-adjustments to spacing or requests a more concise synonym from the LLM.

### 3. Seamless Reconstruction
The final target document is fused back together instantly. The English presentation deck transforms into a translated German slide deck. The bold parameters remain on the exact correct translated noun. The hyperlinks point to the correct localized URLs. The layout maintains its original visual structure.

### 6. Supported Enterprise Formats
**H2:** Built for Engineering & Marketing Stacks

**Heavy B2B Formats & Software:** (JSON, YAML, HTML, XML, Markdown). 
Flixu's document parser supports the heavy B2B formats that legacy systems consistently break. We identify all non-translatable CDATA tags or programmatic variables (e.g., `{{user_name}}`) and algorithmically shield them. The AI is structurally prevented from accidentally corrupting the variables, ensuring your code structure is preserved upon return.

### 7. FAQ Section
**Q1: Do I need to recreate layouts after translation?**
A1: No. Flixu employs document parsing to extract raw text, leaving a perfect metadata skeleton of your document. We then rebuild the translation into the original layout automatically, eliminating Desktop Publishing (DTP) tax.

**Q2: Does Flixu support translation of Adobe InDesign (IDML) files?**
A2: Yes, Flixu natively supports translating complex nested file formats like IDML, DOCX, YAML, JSON, and Strings without breaking spatial constraints or code variables.

**Q3: How does the system handle text expansion during localization?**
A3: Our parser calculates text expansion. If a German translation expands by 30% and threatens to overflow the layout bounding box, the AI dynamically makes kerning adjustments or generates spatially efficient synonyms to maintain document geometry.

**Q4: Do you support Right-to-Left (RTL) languages like Arabic?**
A4: Yes. Our parsing engine automatically mirrors the alignment and flow of the document when translating into an RTL language, ensuring complete layout compliance.

**Q5: Can Flixu translate text embedded within images?**
A5: If the text is baked into a rasterized image, our engine flags it. For text in vector layers, contact our team to discuss specific format requirements.

### 8. Related Products
**[Test document translation in your workspace](/pricing)** (Primary CTA)
**[Context Engine Architecture](/product/context)**
**[Nuanced Text API](/product/text)**
