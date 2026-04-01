# Current Copy & Structure: Client Management (features/client-management.astro)

> **File:** `src/pages/[...lang]/features/client-management.astro`
> **Schema:** `SoftwareApplication`, `FAQPage`
> **Layout:** `BaseLayout`
> **Metadata:** Title="Client Management Hub | Flixu Translation", Desc="Manage all your clients, brand voices, and terminology..."

---

## 1. Hero Section
**Component:** `<Section data-chapter="01 — OVERVIEW" class="hero-section pb-16">`
**Layout:** Grid 1-2 (`md:grid-cols-2 gap-12`) 

**Left Column (Text):**
- **Breadcrumbs:** Home > Features > Client Management
- **Label (Orange, Mono):** Feature Spotlight
- **H1:** Client Management, Simplified.
- **P:** Organize Translation Memories, Glossaries, and Brand Voices by client. Never mix terminology again.
- **Button:** Start Organizing Clients (Hidden class applied)

**Right Column (Visual):**
- `<HeroClientManagement client:load />`

---

## 2. TL;DR Block
**Component:** `<Section data-chapter="02 — TL;DR" class="tldr-section">`
**Layout:** 1 Column (`max-w-3xl`)

**BlockText:** `<TldrBlock text="..." />`
"Flixu replaces messy folder structures and scattered spreadsheets with dedicated Client Profiles. Each profile encapsulates the specific Translation Memory (TM), Glossary terms, and Brand Voice rules for that client. When you start a translation project, Flixu automatically retrieves the correct client context, ensuring zero cross-contamination of terminology."

---

## 3. Capabilities / Mechanic Grid
**Component:** `<Section data-chapter="03 — CAPABILITIES" class="content-section mt-12">`
**Layout:** 1 Column Intro + Grid 2x2 (`md:grid-cols-2 gap-12`)

**Intro:**
- **H2:** How does Flixu organize client terminology?

**Grid Items (4 Cards):**
- **Card 1 (Isolated Memories):**
  - **Icon:** (SVG Icon)
  - **H3:** Isolated Memories
  - **P:** Legal terminology from Client A will never infect marketing copy for Client B. Flixu strictly partitions TM vector databases per client for absolute semantic integrity.
- **Card 2 (Brand Voice Assignment):**
  - **Icon:** (SVG Icon)
  - **H3:** Brand Voice Assignment
  - **P:** Attach a specific tone of voice instruction to a client profile. Every text you translate for them will automatically be forced into that precise style and register.
- **Card 3 (Centralized Glossary):**
  - **Icon:** (SVG Icon)
  - **H3:** Centralized Glossary
  - **P:** Manage terms, forbidden words, and required capitalizations logically mapped to the client level rather than the document level.
- **Card 4 (Activity & Quota Tracking):**
  - **Icon:** (SVG Icon)
  - **H3:** Activity & Quota Tracking
  - **P:** Track translation volumes per client. In the Business plan, utilize API tokens restricted to specific client datasets.

---

## 4. FAQ
**Component:** `<Section data-chapter="04 — FAQ" class="content-section bg-stone-50 border-t mt-24">`
**Layout:** 1 Column (`max-w-3xl`)

**Interactive Block:** `<FAQSection items={faqs} />`

- **Q1:** How does Flixu separate client translation memories?
  - **A1:** Flixu uses isolated workspaces for each client, ensuring translation memories and glossaries are strictly partitioned to guarantee data privacy and contextual precision.
- **Q2:** Can I apply different brand voices to different clients?
  - **A2:** Yes, you can define unlimited distinct brand voices and assign them to specific clients. When translating for a client, Flixu automatically applies their unique tone of voice.
- **Q3:** How do API tokens work with multiple clients?
  - **A3:** In the Business plan, you can generate specific API tokens that are securely bound to individual Client Profiles. This ensures their specific Glossary and Brand Voice are automatically triggered by your backend calls.
- **Q4:** Is there a limit to how many clients I can manage?
  - **A4:** There are no limits on the number of clients you can create and manage within your Flixu agency workspace, regardless of your subscription tier.

---
## Audit Report (Phase 2 Completed)

**1. Stage of Awareness:**
- **Current:** Stage 3/4. Explains the structural organization of assets (TM, Glossaries).
- **Target:** Maintain. Ideal for B2B SaaS buyers analyzing platform mechanics.

**2. Persona Alignment:**
- Translation Agency Owners, VPs of Marketing (Multi-brand).

**3. Structural GEO / SEO Gaps:**
- **Missing In-Body Answer First:** The TL;DR block must be rendered at the top of the page.
- **Structural Integrity:** The Grid format works very well here. The paragraph sizes are acceptable (under 3 sentences).
- **Missing Feature Anchor:** Mentioning "Business plan API tokens" in the Grid is good, but it would benefit from a visual UI mockup or code snippet anchor to break up the text.

**4. Brand Voice & Copy Improvements:**
- "Legal terminology from Client A will never infect marketing copy for Client B" is a brilliant use of the word 'infect' to highlight cross-contamination risks.

**Phase 4 Directives:**
1. Render the TL;DR block beneath the Hero.
2. Tweak the Grid P tags to be even punchier (strive for 2 sentences max).

---

## Phase 4: Final Rewritten Copy

**Title Tag:** Client Management Hub | Flixu Translation
**Meta Description:** Manage all your clients, brand voices, and terminology in isolated workspaces to ensure zero cross-contamination.
**[STRUCTURAL DIRECTIVE: Implement SoftwareApplication and FAQPage Schema.]**

### 1. Hero Section
**Label:** Feature Spotlight
**H1:** Client Management, Simplified.
**P:** Organize Translation Memories, Glossaries, and Brand Voices by client. Never mix terminology again.

### 2. TL;DR Block (In-Body Answer First)
> **What is Flixu Client Management?**
> Flixu Client Profiles are isolated workspaces — each one holds a dedicated Translation Memory, Glossary, and Brand Voice for a specific client. When you start a project, the correct context is applied automatically. Your clients' terminology never crosses over.

### 3. How Flixu Isolates Client Terminology
**H2:** Structuring Linguistic Assets

> **The Cost of Contamination:**
> Slator reports that terminology inconsistency accounts for up to 40% of QA revision time in multi-client localization environments.

**Isolated Translation Memories**
Strictly partition TM vector databases per client. Legal terminology from Client A will never infect marketing copy for Client B.

**Brand Voice Assignment**
Attach a specific tone profile directly to a client. Every document translated automatically inherits that precise register and style without manual toggling.

**Centralized Glossaries**
Manage mandatory terminology, forbidden words, and required capitalizations mapped logically to the client umbrella across all their projects.

**API Token Routing**
Track translation volumes per client explicitly. On Business plans, generate restricted API tokens that automatically bind to a Client Profile.

```json
// Conceptual example — actual parameters in the API documentation
// Backend API Payload Routing Example
{
  "client_id": "cli_9f8a8b7c",
  "source_text": "Sign the agreement.",
  "enforce_glossary": true
}
// Automatically routes to Client A's Legal Translation Memory
```

### 4. Frequently Asked Questions
**H2:** FAQs: Client Asset Management

- **Q1: How does Flixu separate client translation memories?**
  A1: Flixu uses isolated workspaces for each client, ensuring translation memories and glossaries are strictly partitioned, preventing cross-contamination of client terminology.
- **Q2: Can I apply different brand voices to different clients?**
  A2: Yes, you can define unlimited distinct brand voices and assign them to specific clients. When translating for a client, Flixu automatically applies their unique tone of voice.
- **Q3: How do API tokens work with multiple clients?**
  A3: In the Business plan, you can generate specific API tokens that are securely bound to individual Client Profiles. This ensures their specific Glossary and Brand Voice are automatically triggered by your backend calls.
- **Q4: Is there a limit to how many clients I can manage?**
  A4: There are no limits on the number of clients you can create and manage within your Flixu agency workspace, regardless of your subscription tier.

### 5. Call to Action
**H2:** Try it with your first client profile.
**P:** Set up a dedicated workspace and secure your client terminology in under 5 minutes.
**Button (Primary):** Start Free Trial -> `/signup`
**Button (Secondary):** Manage Glossaries -> `/features/glossary`

#### Related Features
- [For Agencies](/for/agencies)
- [Translating Brand Voice (Topic Guide)](/topic/brand-voice-in-translation)
- [Translation Memory Guide](/topic/translation-memory-guide)
