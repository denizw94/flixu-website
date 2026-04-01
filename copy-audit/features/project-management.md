# Current Copy & Structure: Project Management (features/project-management.astro)

> **File:** `src/pages/[...lang]/features/project-management.astro`
> **Schema:** `SoftwareApplication`, `FAQPage`
> **Layout:** `BaseLayout`
> **Metadata:** Title="Project Management | Flixu", Desc="Streamline your AI localization pipeline with Flixu's built-in..."

---

## 1. Hero Section
**Component:** `<Section data-chapter="01 — OVERVIEW" class="hero-section pb-16">`
**Layout:** Grid 1-2 (`md:grid-cols-2 gap-12`) 

**Left Column (Text):**
- **Breadcrumbs:** Home > Features > Project Management
- **Label (Orange, Mono):** Feature Spotlight
- **H1:** The Localization Workspace.
- **P:** Manage source files, assign contexts, and track progress without jumping between spreadsheets and external tools.
- **Button:** Centralize Your Projects (Hidden class applied)

**Right Column (Visual):**
- `<HeroProjectManagement client:load />`

---

## 2. TL;DR Block
**Component:** `<Section data-chapter="02 — TL;DR" class="tldr-section">`
**Layout:** 1 Column (`max-w-3xl`)

**BlockText:** `<TldrBlock text="..." />`
"Flixu provides a dedicated Project Dashboard designed for localization teams and freelancers. Group multiple files (DOCX, SRT, PO, XLIFF) into unified projects, instantly apply a specific Client Profile to bind the correct Brand Voice and Glossary, and track character usage precisely across target locales with integrated Quality Scoring summaries."

---

## 3. Capabilities / Mechanic Grid
**Component:** `<Section data-chapter="03 — CAPABILITIES" class="content-section mt-12">`
**Layout:** 1 Column Intro + Grid 2x2 (`md:grid-cols-2 gap-12`)

**Intro:**
- **H2:** How does Flixu streamline localization pipelines?

**Grid Items (4 Cards):**
- **Card 1 (Multi-File Batching):**
  - **Icon:** (SVG Icon)
  - **H3:** Multi-File Batching
  - **P:** Drag and drop large localization packages. Flixu parses document structures (XML, PO, Markdown) simultaneously within the project scope.
- **Card 2 (Context Inheritance):**
  - **Icon:** (SVG Icon)
  - **H3:** Context Inheritance
  - **P:** Assign a client and target formality (e.g., "Formal German") at the project level. Every file within inherits these exact contextual boundaries for the AI.
- **Card 3 (Approval Workflow):**
  - **Icon:** (SVG Icon)
  - **H3:** Approval Workflow
  - **P:** Track segment-by-segment review status. The built-in AI Quality Score rapidly flags low-confidence translations, saving Reviewers hours of manual Q/A.
- **Card 4 (Activity Feed):**
  - **Icon:** (SVG Icon)
  - **H3:** Activity Feed
  - **P:** See instantly when a team member modifies a string or accepts a translation. All project interactions are logged in a continuous team activity stream.

---

## 4. FAQ
**Component:** `<Section data-chapter="04 — FAQ" class="content-section bg-stone-50 border-t mt-24">`
**Layout:** 1 Column (`max-w-3xl`)

**Interactive Block:** `<FAQSection items={faqs} />`

- **Q1:** Does Flixu have built-in project management for translation?
  - **A1:** Yes, Flixu includes a comprehensive project workspace. You can organize source files via folders, assign clients, track word counts, and monitor translation completion status across multiple target languages.
- **Q2:** Can I share translation projects with my team?
  - **A2:** Yes, in Team and Business plans, projects can be shared across your workspace. You can utilize role-based access control (Admin, Editor, Viewer) to restrict actions.
- **Q3:** Can I mix multiple file types in a single project?
  - **A3:** Absolutely. You can drop a DOCX whitepaper, a JSON app file, and SRT subtitles into the same project folder. The AI applies the selected Brand Voice consistently across all of them.
- **Q4:** How does the AI Quality Score assist human reviewers?
  - **A4:** The Quality Score algorithm mathematically estimates the confidence of the LLM output. It flags potentially problematic segments with low scores so human reviewers know exactly which sentences to focus on, dramatically reducing Q/A time.

---
## Audit Report (Phase 2 Completed)

**1. Stage of Awareness:**
- **Current:** Stage 3. Features the workspace mechanics (file batching, context inheritance).
- **Target:** Maintain. Standard B2B product feature marketing.

**2. Persona Alignment:**
- Localization Project Managers, Freelance Translators.

**3. Structural GEO / SEO Gaps:**
- **Missing In-Body Answer First:** The TL;DR block must be rendered at the top of the page.
- **Paragraph Density:** The Grid format is good, but the "Context Inheritance" definition is slightly wordy.
- **Data Anchor Missing:** The "AI Quality Score" is a massive selling point but is buried in a Grid card and FAQ. It needs to be elevated to a primary visual anchor.

**4. Brand Voice & Copy Improvements:**
- "Manage source files, assign contexts... without jumping between spreadsheets" directly attacks the pain point mapped in the Journal articles.

**Phase 4 Directives:**
1. Render the TL;DR block.
2. Elevate the "AI Quality Score" concept into its own distinct, bolded Section/Callout to capture "translation quality QA" search intent.

---

## Phase 4: Final Rewritten Copy

**Title Tag:** Project Management | Flixu
**Meta Description:** Group source files, client profiles, and QA scores into a single workspace. Streamline your AI localization pipeline.
**[STRUCTURAL DIRECTIVE: Implement SoftwareApplication and FAQPage Schema.]**

### 1. Hero Section
**Label:** Feature Spotlight
**H1:** The Localization Workspace.
**P:** Manage source files, assign programmatic contexts, and track deployment progress—without jumping between spreadsheets and external tools.

### 2. TL;DR Block (In-Body Answer First)
> **What is the Flixu Project Dashboard?**
> Flixu's Project Dashboard groups source files, client profiles, and quality scores into a single workspace. Apply a Brand Voice and Glossary at the project level, and every file inside inherits those settings automatically. Progress, character usage, and QA flags are visible in real time.

### 3. Automated QA Intelligence
**H2:** The AI Quality Score (LQA)

The most expensive bottleneck in localization is the manual Quality Assurance (QA) review cycle. Reviewers waste hours reading perfectly translated sentences to find the 5% that require human intervention.

Flixu eliminates this friction through a computational AI Quality Score. Our secondary evaluator algorithm automatically scores every generated segment based on grammatical accuracy, glossary compliance, and contextual flow. 

It prominently flags low-confidence translations (e.g., `< 80/100`), instantly showing human reviewers precisely where to focus their attention. You review by exception, focusing human effort where it matters. [See how the LQA Engine works →](/features/lqa)

### 4. Streamlining Pipelines
**H2:** Project Mechanics

**Multi-File Batching**
Drag and drop extensive localization packages. Flixu processes complex document geometries (JSON arrays, formatted PPTX) simultaneously within a single project scope.

**Context Inheritance**
Assign a client and linguistic target (e.g., "Formal German") at the root project level. Every file inside the project strictly inherits these AI parameters.

**Approval Workflow**
Track segment-by-segment review status. Leverage the Slide-Up QA interface to rapidly accept or reject flagged translations, accelerating your approval pipeline.

**Activity Tracking**
Eliminate project management ping-pong. Monitor precisely when a team member modifies a string or finalizes a segment in a continuous audit stream.

### 5. Frequently Asked Questions
**H2:** FAQs: Project Workspace

- **Q1: Does Flixu have built-in project management for translation?**
  A1: Yes, Flixu includes a comprehensive project workspace. You can organize source files via folders, assign clients, track word counts, and monitor translation completion status across multiple target languages.
- **Q2: Can I share translation projects with my team?**
  A2: Yes, in Team and Business plans, projects can be shared across your workspace. You can utilize role-based access control (Admin, Editor, Viewer) to restrict actions.
- **Q3: Can I mix multiple file types in a single project?**
  A3: Yes. You can combine a DOCX whitepaper, a JSON app file, and SRT subtitles in a single project. The selected Brand Voice applies consistently to all of them.
- **Q4: How does the AI Quality Score assist human reviewers?**
  A4: The Quality Score algorithm estimates the confidence of each translation segment. It flags potentially problematic segments with low scores so human reviewers know exactly which sentences to focus on, reducing the time reviewers spend on each batch.

### 6. Call to Action
**H2:** Centralize your localization pipeline.
**P:** Manage context, track progress, and review by exception in one unified dashboard.
**Button (Primary):** Start Free Trial -> `/signup`
**Button (Secondary):** Centralize Your Projects -> `/product/dashboard`

#### Related Features
- [Automated LQA Intelligence](/features/lqa)
- [Client Management Hub](/features/client-management)
- [Translating Structured Documents](/product/documents)
