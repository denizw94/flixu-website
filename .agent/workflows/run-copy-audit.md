---
description: How to extract, audit, and rewrite an Astro page or Content Hub for the Flixu website
---
# Website Copy Audit Pipeline (4-Phase Batch Process)

Use this workflow to standardize the transformation of website copy across Flixu's 40+ pages. Due to the scale of the domain, this workflow **must strictly be executed in 4 distinct phases**, working through logical batches (e.g., "All Product Pages", "All Topic Hubs", "All ICP Pages").

**DO NOT combine these steps. Each phase must be fully completed and reviewed before moving to the next.**

## Contextual Prerequisites
When summoned, ensure you have read:
1. `2026-03-18_GUIDE_Flixu-Copywriting-Stages-of-Awareness.md`
2. `flixu_marketing_platform_overview.md`
3. `2026-03-01_GUIDE_Flixu-Onpage-SEO-Guide_FINAL.md`

---

## Phase 1: Pure Extraction (The Baseline)
*Goal: Create a perfect structural mirror of the Astro codebase in Markdown without making any evaluations.*
1. Define the current batch (e.g., `/product/*`).
2. Read the target `.astro` pages and their translation strings (`en.json`).
3. Map the exact component structure (Sections, Grids, Components, Schema) to a new Markdown file in the `copy-audit/[batch-name]/` directory.
4. Inject the current English text into this structure.
5. End the file with: `--- \n ## Audit Report (Pending Phase 2)`.
6. **Stop here.** Do not audit. Do not rewrite. Move to the next page in the batch until the entire batch is extracted.

## Phase 2: Systematic Auditing
*Goal: Evaluate the extracted pages ONE BY ONE against the core frameworks. No skipping.*
1. For each Markdown file in the current batch, append an `## Audit Report`.
2. **Stage of Awareness Assessment:** Identify the target audience stage for this page type and evaluate if the current hook matches it.
3. **Brand Voice Check:** Scrutinize the tone for jargon, hype, or overly academic structuring.
4. **SEO/GEO Structure Check:** Evaluate the presence of Answer-First blocks, FAQ schemas, and question-based H2s against the SEO Guide.
5. Identify which specific features from the `flixu_marketing_platform_overview.md` should be contextually mapped to this page.
6. Process every page in the batch meticulously.

## Phase 3: User Review (Manual)
*Goal: The human user reviews and edits the Audit Reports.*
1. Notify the user that Phase 2 for the batch is complete.
2. The user will manually review the generated Audit Reports directly in the Markdown files, making adjustments, additions, or strategic corrections.
3. Wait for the user's explicit command to proceed to Phase 4.

## Phase 4: Restructuring & Rewrite
*Goal: Draft the new copy sequentially, heavily based on the user-approved Audit Report.*
1. For each Markdown file, read the finalized `## Audit Report`.
2. Draft the `## Revised Copy (Draft 1)` directly beneath the Audit Report.
3. Ensure the new copy conforms to the required Stage of Awareness.
4. Add **Structural Directives** (e.g., `[NEW: TL;DR Block in Astro]`) where the Astro code will need to be updated to support SEO best practices.
5. Validate the final output against the "Calm, Precise, Warm, Human" brand voice.
6. Process the batch comprehensively, page by page.
