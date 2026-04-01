# Current Copy & Structure: Pricing (pricing.astro)

> **File:** `src/pages/[...lang]/pricing.astro`
> **Schema:** `FAQPage`
> **Layout:** `BaseLayout`
> **Metadata:** 
>   - Title: `t.pricing.pageTitle`
>   - Desc: `t.pricing.pageDesc`

---

## 1. Hero Section
**Component:** `<Section data-chapter="01 — INTRO" class="hero-section pb-24 border-none">`
**Layout:** Grid 1-2 (`lg:grid-cols-12 gap-12`)

**Left Column (Text - `lg:col-span-5`):**
- **Breadcrumbs:** Home > Pricing
- **H1:** `t.pricing.hero.h1`
- **P:** `t.pricing.hero.sub`

**Right Column (Visual - `lg:col-span-7`):**
- `<HeroPricing client:visible />`

---

## 2. Pricing Grid
**Component:** `<Section data-chapter="02 — PLANS" class="content-section">`
**Layout:** Full Width Component

- **Component:** `<PricingGrid client:visible plans={t.pricingGrid} enterprise={t.enterpriseCard} />`

---

## 3. Pool Mechanics (3 Columns)
**Component:** `<Section data-chapter="03 — MECHANICS" class="content-section">`
**Layout:** Grid 3 Cols (`md:grid-cols-3 gap-8`)

- **Card 1 (Fair):**
  - **H4:** `t.pricing.pool.fair.title`
  - **P:** `t.pricing.pool.fair.sub`
- **Card 2 (Media):**
  - **H4:** `t.pricing.pool.media.title`
  - **P:** `t.pricing.pool.media.sub`
- **Card 3 (Rollover):**
  - **H4:** `t.pricing.pool.rollover.title`
  - **P:** `t.pricing.pool.rollover.sub`

---

## 4. Add-ons & Top-ups
**Component:** `<Section data-chapter="04 — ADD-ONS" class="content-section border-t border-stone-100 pb-16">`
**Layout:** Intro + Grid 2 Cols (`md:grid-cols-2 gap-12`)

**Intro:**
- **H2:** `t.pricing.addons?.title` ("Add-ons & Credit Top-ups")
- **P:** `t.pricing.addons?.subtitle` ("Customize your plan to fit your workflow.")

**Grid Cards:**
- **Card 1 (Top-ups / Volume):**
  - **Badge:** "Volume"
  - **H3:** `t.pricing.addons?.topups?.title` ("Credit Top-ups")
  - **P:** `t.pricing.addons?.topups?.desc`
  - **List:** `t.pricing.addons?.topups?.items` (name, price)
- **Card 2 (Packs / Capabilities):**
  - **Badge:** "Capabilities"
  - **H3:** `t.pricing.addons?.packs?.title` ("Resource & Feature Packs")
  - **P:** `t.pricing.addons?.packs?.desc`
  - **List:** `t.pricing.addons?.packs?.items` (name, price)

---

## 5. Detailed Comparison Table (Specs)
**Component:** `<Section data-chapter="05 — SPECS" class="content-section border-t border-stone-100">`
**Layout:** 1 Column Table

- **H2:** `t.pricing.specs.title`
- **Table Headers:** Feature, Free, Individual, Team, Business, Enterprise
- **Table Body:** Iterates over `t.pricing.specs.rows` (Grouped by Category, displaying values across all plans)
- **Enterprise Note:**
  - **P:** `t.pricing.specs.enterprise.text`
  - **Button:** `t.pricing.specs.enterprise.link` (mailto:founders@flixu.ai)

---

## 6. TL;DR
**Component:** `<Section data-chapter="06 — TL;DR" class="tldr-section">`
**Layout:** 1 Column (`max-w-3xl mx-auto`)

**BlockText:** `<TldrBlock text="..." />`
"We replaced rigid per-language pricing with a Global Resource Pool. Unlike legacy platforms, you aren't penalized for adding new target locales. Purchase a unified baseline of translation capacity, distribute it seamlessly across 50+ languages, and let unused credits automatically roll over to the next month."

---

## 7. FAQ Section
**Component:** `<Section data-chapter="07 — FAQ" class="content-section bg-stone-50 border-t border-stone-200">`
**Layout:** 1 Column (`max-w-3xl`)

**Interactive Block:** `<FAQSection items={faqs} />`

- **Q1:** Do I have to pay per language?
  - **A1:** No. Flixu uses a Global Resource Pool. You purchase translation volume, and you can spend it across any of our 50+ supported languages. No artificial locks.
- **Q2:** What happens if I don't use all my credits in a month?
  - **A2:** Flixu ensures you keep what you pay for. All unused credits roll over to the next billing cycle as long as your subscription is active.
- **Q3:** Can I bring my own LLM API keys?
  - **A3:** Enterprise customers can use their own custom LLM deployments (e.g., Azure OpenAI) for inference. Contact sales for technical requirements.
- **Q4:** Is there a free trial?
  - **A4:** Yes, you can upload a document or test the API for free to see geometric parsing and Brand Voice in action.

---
## Audit Report (Phase 2 Completed)

**1. Stage of Awareness & Persona:**
- **Stage 5 (Most Aware):** Visitors are here to evaluate cost vs. value. The persona is a budget holder or a team lead evaluating ROI.
- **Tone Check:** Must remain calm, transparent, and devoid of "Save 80%!" pressure tactics.

**2. Structural GEO/SEO Gaps:**
- **TL;DR Placement (Critical):** The `TL;DR Block` (Section 6) explaining the Global Resource Pool is currently sitting at the *bottom* of the page, below the pricing grids and specs. According to GEO Rule 1 ("Answer First"), this must be moved directly beneath the Hero Section (before the Pricing Grid).
- **Schema Validation:** The page already has FAQ content, which is excellent. We must ensure `SoftwareApplication` and `FAQPage` schemas are explicitly implemented in the final Astro rebuild.
- **Value Statement:** The SEO Guide suggests a crisp 1-sentence value statement underneath the H1 ("Context-aware translation. Start free, grow at your pace.").

**3. Brand Voice & Copy Improvements (For Phase 4):**
- Review the `faqs` arrays to ensure answers don't sound like a generic bot, but rather a patient expert.
- The "Enterprise Note" under specs should lean into "Zero-Touch Infrastructure" as outlined in the Platform Overview.

**Rewrite Directives:** Move TL;DR to the top. Keep the grid structures. Polish the FAQ tone.

---

## Phase 4: Final Rewritten Copy

**Title Tag:** Flixu Pricing | Transparent Scaling for Context-Aware Translation
**Meta Description:** Scale your localization without per-seat taxes. Flixu pricing is built on a unified global resource pool for freelance, agency, and enterprise teams.

### 1. Hero Section
**H1:** Flixu Pricing — Transparent Scaling. No Seat Taxes.
**P:** Context-aware translation. Start free, grow at your own pace.

### 2. TL;DR Block (Moved up for Answer-First GEO)
"We replaced rigid 'per-language' pricing and collaboration penalties with a simple Global Resource Pool. Unlike legacy TMS platforms, there are no per-seat fees and no per-language unlock costs. Purchase a unified baseline of translation capacity, distribute it seamlessly across 100+ languages, and let unused credits automatically roll over to the next month. Curious how the engine works? See our [Orchestration Methodology](/method)."

### 3. Pricing Validation
> [!NOTE]
> **Why teams upgrade:** Companies deploying structured Vector Translation Memory report up to **80% fewer QA cycles** during major software releases. The Flixu Global Resource Pool is designed to radically lower your localized Customer Acquisition Cost (CAC).

### 4. Pricing Grid (Component Render)
*(Keep existing `<PricingGrid />` component structure covering Free, Individual, Team, Business)*

### 5. Pool Mechanics
**H3:** Unified Global Pools
**P:** Scale into Europe and Asia simultaneously. Your translated character pool can be spent seamlessly across any of our 100+ supported languages. No artificial geographical locks.

**H3:** Zero "Seat Tax"
**P:** Localization is inherently cross-functional. Our Team and Business tiers allow you to invite marketers, developers, and product managers to the workspace without paying arbitrary per-user license fees. See specific feature allocations on our [Agency Solutions](/for/agencies) page.

**H3:** Rollover Protection
**P:** Product releases can be unpredictable. Unused translation credits aren't lost at the end of the month; they automatically roll over to your next active billing cycle. Comparing options? See our [Pricing Comparisons](/comparisons/).

### 5. Detailed Comparison Table (Specs)
*(Keep existing Table structure iterating over categories)*

**Enterprise Note (Beneath Table):**
**P:** For organizations that need dedicated infrastructure, custom LLM routing, and volume-based contracts, our engineering team handles the architecture directly. Learn more about [Enterprise Capabilities](/for/enterprise).
**Button:** Discuss Enterprise Infrastructure

### 6. FAQ Section
**H2:** Frequently Asked Questions

- **Q: Do I have to pay unlocking fees per language?**
  A: No. Flixu utilizes an unrestricted Global Resource Pool. You purchase translation volume, and you can instantly deploy that volume across any of our 100+ supported languages.
- **Q: What happens if our release is delayed and I don't use all my credits in a month?**
  A: Flixu ensures you keep exactly what you pay for. All unused translation credits roll over to the next billing cycle automatically, as long as your subscription remains active.
- **Q: Are there hidden fees for API access?**
  A: No. API access is fully included in the Team and Business plans. We believe developers should have programmatic access to the Context Engine without negotiating a bespoke secondary contract.
- **Q: Can I bring my own LLM API keys?**
  A: Enterprise customers can bypass our internal compute routing and use their own secure, self-hosted LLM deployments (e.g., Azure OpenAI) for inference. Contact our sales engineers for specific networking requirements.
- **Q: Is there a free trial?**
  A: Yes. All new workspaces include a free credit allocation — enough to translate a full document and test the Context Engine before committing to a plan, with no credit card required to start.
- **Q: Can I cancel my subscription at any time?**
  A: Yes. Flixu subscriptions are billed monthly. You can downgrade or cancel directly from your billing dashboard at any time without punitive cancellation fees or long-term lock-outs.
- **Q: What happens to my data if I downgrade or cancel?**
  A: If your subscription is canceled, your Translation Memory and Glossaries remain safely stored in your workspace. You just lose the ability to query the Engine using those assets until you resubscribe.
- **Q: What counts as a translated character?**
  A: Flixu only meters the characters generated in the target language. We do not charge you for the structural geometric tags, JSON keys, or Markdown syntax that we mathematically shield during the orchestration process.
- **Q: Is there a discount for annual billing?**
  A: Currently, all self-serve Team and Business plans are billed strictly on a monthly capacity cycle to ensure maximum flexibility for agile teams. Contact sales if you require an annual enterprise volume contract.
