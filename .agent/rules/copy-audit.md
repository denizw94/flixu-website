## Context
This rule applies whenever you are asked to "extract a page for audit", "audit website copy", or "rewrite a page" within the Flixu Translate website project. It governs the structural translation between `.astro` code and `.md` copies, and enforces the Audit framework.

## Structural Extraction Rule
Never extract just the raw strings. When creating a `copy-audit/[name].md` file from an `.astro` page, you **MUST** map the exact component architecture.
1. Document the `BaseLayout` and any `SchemaOrg` included.
2. Document every `<Section>` component, including its `id` and `data-chapter` tags.
3. Map the layout (e.g., "Grid 1-2", "1 Column Intro").
4. Pull both hardcoded text and i18n keys (`en.json`) into the structure.
5. If interactive React widgets are present (e.g. `<TranslationComparator client:visible />`), note them in the structure.

## Audit Framework
After extraction, every Audit Report appended to the Markdown MUST check four dimensions:
1. **Target Audience (ICP) Assessment:** Who is this page for? Is it a global page (Homepage) addressing all segments (Agencies, Freelancers, Teams), or a hyper-niched page? The copy MUST not accidentally exclude secondary buyers if it's a global page.
2. **Stage of Awareness Check:** Evaluate the Hero and above-the-fold content against the target audience's Stage of Awareness (1-5). Does it hook their specific pain or awareness level?
3. **Brand Voice & Reading Level:** Evaluate against "Calm, Precise, Warm, Human." Flag any academic jargon, "fluff", or hype-words ("revolutionary"). Ensure 60-100 word paragraphs max.
4. **SEO / AEO / GEO Structure:** (Crucial for 2026 Visibility). Evaluate if the page needs:
   - An "Answer-First" Definitions-Block/TL;DR in the first 100 words.
   - H2/H3 headers rewritten as natural language questions.
   - Tabular data formats for comparisons.
   - A dedicated FAQ Schema section.

## Rewrite Rule
When drafting the Revised Copy:
- Always keep the target Page Intent and Stage of Awareness at the top.
- Propose structural changes to the Astro representation (e.g., "Add a TL;DR Block here", "Change this Paragraph to a Grid format").
- Map platform features (from `flixu_marketing_platform_overview.md`) organically into the copy to prove value.
- Do not use 1st person plural ("we") excessively; position Flixu as the workspace, not the protagonist.
