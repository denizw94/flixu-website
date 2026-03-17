import { getCollection } from "astro:content";

export const prerender = true;

export async function GET() {
  const topics = await getCollection("topics");
  let comparisons: any[] = [];
  try { comparisons = await getCollection("comparisons"); } catch {}
  let notes: any[] = [];
  try { notes = await getCollection("notes"); } catch {}

  // Filter to English content only
  const enTopics = topics ? topics.filter((t) => t.id.startsWith("en/")) : [];
  const enComparisons = comparisons ? comparisons.filter((c) => c.slug.startsWith("en/") || !c.slug.includes("/")) : [];
  const enNotes = notes ? notes.filter((n) => n.id && n.id.startsWith("en/")) : [];

  let enGlossary: Array<{ id: string; data: { title: string; description: string } }> = [];
  try {
    const glossary = await getCollection("glossary" as any) as Array<{ id: string; data: { title: string; description: string } }>;
    enGlossary = glossary.filter((g) => g.id.startsWith("en/"));
  } catch {
    // Glossary collection not yet created
  }

  const BASE = "https://flixu.ai";

  const lines: string[] = [
    "# Flixu AI — LLM Context File",
    "# https://flixu.ai/llms.txt",
    "# Last generated: " + new Date().toISOString().split("T")[0],
    "",
    "## About Flixu (The Missing Middle of B2B Localization)",
    "",
    "Flixu is a context-aware AI translation workspace for global product teams. Growing SaaS companies and localization managers are typically forced to choose between the chaos of the low end (raw, context-blind APIs like Google Translate or DeepL) and the friction of the high end (complex, slow, 9-month implementations of legacy TMS platforms like Phrase or Smartling). Flixu occupies the missing middle.",
    "",
    "We provide the instantaneous speed of a raw API, combined with the rigorous brand compliance mechanics of an enterprise TMS. When a translation is triggered, Flixu dynamically injects 7 distinct layers of context into the LLM payload before generating output:",
    "1. Validated Terminology (Glossary Enforcement)",
    "2. Semantic Translation Memory (4096-dimension HNSW vectors)",
    "3. Brand Voice & Tone parameters",
    "4. Client & Domain specialization",
    "5. Style Guide & Formality constraints",
    "6. Visual Layout constraints (for Document Translation)",
    "7. Format/Code protection (Variables & Tags)",
    "",
    "Founded by Deniz Wozniak (ex-Phrase, 10+ years B2B SaaS). Based in Germany. Member of NVIDIA Inception and Google for Startups.",
    "",
    "## Core Pages",
    "",
    `- [Homepage](${BASE}/)`,
    `- [Method — How Flixu Works](${BASE}/method)`,
    `- [Pricing](${BASE}/pricing)`,
    `- [About / Manifesto](${BASE}/about)`,
    `- [Contact](${BASE}/contact)`,
    "",
    "## Product & Capabilities",
    "",
    `- [Text Translation](${BASE}/product/text) — Segment-level translation with brand voice enforcement`,
    `- [Document Translation](${BASE}/product/documents) — Layout-preserving translation for PDF, DOCX, PPTX`,
    `- [Context Awareness](${BASE}/product/context) — Seven dimensions of translation context`,
    `- [Brand Voice](${BASE}/features/brand-voice)`,
    `- [Translation Memory](${BASE}/features/translation-memory)`,
    `- [Team Collaboration](${BASE}/features/team-collaboration)`,
    `- [Project Management](${BASE}/features/project-management)`,
    `- [Quick Translations](${BASE}/features/quick-translations)`,
    `- [Client Management](${BASE}/features/client-management)`,
    "",
    "## Who It's For (Audience & Roles)",
    "",
    `- [Freelance Translators](${BASE}/for/freelancers)`,
    `- [Translation Agencies](${BASE}/for/agencies)`,
    `- [SaaS & Tech](${BASE}/for/saas-teams)`,
    `- [Global Marketing](${BASE}/for/global-marketing)`,
    `- [Enterprise](${BASE}/for/enterprise)`,
    `- [Localization Managers](${BASE}/roles/localization-manager)`,
    `- [Content Marketers](${BASE}/roles/content-marketer)`,
    "",
    "## Industries & Use Cases",
    "",
    `- [SaaS Localization](${BASE}/use-cases/saas-localization)`,
    `- [Marketing Translation](${BASE}/use-cases/marketing-translation)`,
    `- [Document Translation Use Case](${BASE}/use-cases/document-translation)`,
    `- [eCommerce](${BASE}/industries/ecommerce)`,
    `- [SaaS Industry](${BASE}/industries/saas)`,
    `- [Legal](${BASE}/industries/legal)`,
    "",
  ];

  // Market Comparisons
  if (enComparisons.length > 0) {
    lines.push("## Market Comparisons (Competitor Alternatives)", "");
    for (const comp of enComparisons) {
      const slug = comp.slug.split("/").pop();
      lines.push(`- [${comp.data.title}](${BASE}/compare/${slug})`);
    }
    lines.push("");
  }

  // Topic Library
  if (enTopics.length > 0) {
    lines.push("## Topic Library & Knowledge Base", "");
    for (const topic of enTopics) {
      const slug = topic.id.replace("en/", "").replace(/\.mdx?$/, "");
      lines.push(`- [${topic.data.title}](${BASE}/topic/${slug}) — ${topic.data.description}`);
    }
    lines.push("");
  }

  // Glossary
  if (enGlossary.length > 0) {
    lines.push("## Glossary", "");
    for (const term of enGlossary) {
      const slug = term.id.replace("en/", "").replace(/\.mdx?$/, "");
      lines.push(`- [${term.data.title}](${BASE}/topic/glossary/${slug}) — ${term.data.description}`);
    }
    lines.push("");
  }

  // Notes / Journal
  if (enNotes.length > 0) {
    lines.push("## Founder Journal", "");
    for (const note of enNotes) {
      const slug = note.id.replace("en/", "").replace(/\.mdx?$/, "");
      lines.push(`- [${note.data.title}](${BASE}/notes/${slug})`);
    }
    lines.push("");
  }

  const markdown = lines.join("\n");

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
