# Flixu AI — On-Page SEO Guide 2026

## SEO · GEO · AEO · AIO · SXO

> Abgeleitet aus dem konsolidierten Global Organic Visibility Research Report (4 LLM Cross-Analyse). Angepasst an Flixus reale Seitenarchitektur und Brand Voice.

### Brand Voice Leitprinzip

Jeder Content auf flixu.ai folgt der Stimme: **Calm, Precise, Warm, Human.**

- ✅ Ehrlich statt gehypt. Bildend statt werbend. Persönlich statt Corporate.
- ✅ Spezifisch statt generisch. Daten statt Behauptungen. Geschichten statt Features.
- ❌ Kein "revolutionary", "game-changing", "crushing it". Keine Pressure-Taktiken. Keine Superlative ohne Beweis.
- ❌ Kein generisches Marketing-Speak. Jeder Satz muss einen echten Gedanken transportieren.

**SEO und Brand Voice stehen nicht im Konflikt.** Calm, Precise deckt sich mit den GEO-Regeln (faktenbasiert, klar, kein Fluff). Die Herausforderung ist, SEO-Strukturen (FAQ, Definitions-Blöcke, Vergleichstabellen) in einem Ton zu liefern, der sich wie eine ehrliche Erklärung anfühlt — nicht wie ein Template.

---

## 1. Technische Basis — Pre-Launch Checklist

### 1.1 Core Web Vitals Targets

| Metrik   | Zielwert | Warum                                                    |
| -------- | -------- | -------------------------------------------------------- |
| **LCP**  | < 2.0s   | Good CWV → 24% weniger Bounce, 25% mehr Conversion       |
| **INP**  | < 160ms  | 43% der Sites scheitern hier — Differenzierungspotential |
| **CLS**  | < 0.08   | Verhindert Layout-Shifts, verbessert Dwell Time          |
| **TTFB** | < 200ms  | Vercel / Cloudflare Pages nutzen                         |

### 1.2 Crawling & Indexierung

**robots.txt** — Alle AI-Crawler erlauben:

```txt
# Traditional Crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# AI Search & Retrieval Crawlers
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

# Block non-productive crawlers
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

# Sitemap
Sitemap: https://flixu.ai/sitemap.xml
```

**Pflicht-Punkte:**

- [ ] XML Sitemap → Google Search Console + Bing Webmaster einreichen
- [ ] IndexNow für Bing implementieren (→ schnellere Perplexity-Indexierung)
- [ ] Canonical Tags auf allen Seiten
- [ ] HTTPS mit forced Redirect
- [ ] Keine `noindex` auf Money Pages
- [ ] Clean URL-Struktur (max 3 Klicks von Homepage)
- [ ] Breadcrumb-Navigation + `BreadcrumbList` Schema
- [ ] `hreflang` Tags vorbereiten (wenn EN + DE Content parallel kommt)

### 1.3 llms.txt Implementierung

Datei unter `https://flixu.ai/llms.txt` — `text/plain`, UTF-8.

> **Tonalität:** Neutral, faktisch, präzise. Keine Sales-Sprache. Die Datei spricht zu Maschinen — aber in Flixus ruhiger Klarheit.

```markdown
# Flixu AI

> Context-aware AI translation workspace. Analyzes five dimensions before
> translating: cultural awareness, domain expertise, formality level,
> brand voice, and situational context. Routes each task to the best-fit
> language model. Built for translators, agencies, and localization teams
> who need precision beyond simple machine translation.

## Product

- [Method](https://flixu.ai/method): How the 5-dimension analysis engine works
- [Text Translation](https://flixu.ai/product/text): Real-time text translation
- [Document Translation](https://flixu.ai/product/documents): File-based translation
- [Context Engine](https://flixu.ai/product/context): The analysis layer explained
- [Pricing](https://flixu.ai/pricing): Individual, Team, and Business plans

## For

- [Freelancers](https://flixu.ai/for/freelancers): Workflows for independent translators
- [Agencies](https://flixu.ai/for/agencies): Small-to-mid agency collaboration
- [Enterprise](https://flixu.ai/for/enterprise): Teams and scaling organizations

## Resources

- [Topic Hub](https://flixu.ai/topic): In-depth guides on translation and localization
- [Glossary](https://flixu.ai/topic/glossary): Translation & localization terminology
- [Founder Notes](https://flixu.ai/notes): Building Flixu — the journey and decisions
- [Documentation](https://flixu.ai/docs): Technical docs and API reference
- [About](https://flixu.ai/about): Company, founder, mission
```

---

## 2. Seitenarchitektur & URL-Struktur

### 2.1 Aktuelle Struktur (SEO-optimiert)

```
flixu.ai/
│
├── /                            🏠 Homepage (Organization + SoftwareApp Schema)
├── /about                       ℹ️  Über Flixu & Deniz (Organization Schema)
├── /contact                     📬 Kontakt
├── /method                      🔬 5-Dimensions-Analyse-Engine (HowTo Schema)
├── /pricing                     💰 Preise (SoftwareApp + FAQ Schema)
├── /roadmap                     🗺️  Produkt-Roadmap
├── /status                      📊 System Status
│
├── /product/                    📦 Produktseiten (SoftwareApp Schema)
│   ├── /product/text               Text-Übersetzung
│   ├── /product/documents          Dokument-Übersetzung
│   └── /product/context             Kontext-Engine (→ Pillar-nah)
│
├── /for/                        👥 ICP Landing Pages
│   ├── /for/freelancers            Freelance-Übersetzer
│   ├── /for/agencies               Übersetzungs-Agenturen
│   └── /for/enterprise             Unternehmen / Teams
│
├── /solutions/
│   └── /solutions/enterprise    🏢 Enterprise-Lösung (Detail, ggf. Gated)
│
├── /compare/                    ⚖️  Vergleiche & Alternativen
│   ├── /compare/deepl-alternative
│   ├── /compare/phrase-alternative
│   ├── /compare/smartling-alternative
│   └── /compare/[slug]
│
├── /topic/                      📝 Topic Hub — SEO Pillar & Cluster Content
│   ├── /topic/context-aware-translation        ← Cluster A Pillar
│   ├── /topic/brand-voice-in-translation       ← Cluster B Pillar
│   ├── /topic/localization-for-midmarket       ← Cluster C Pillar
│   ├── /topic/ai-in-translation                ← Cluster D Pillar
│   ├── /topic/glossary                         ← Glossar Hub
│   │   ├── /topic/glossary/context-aware-translation
│   │   ├── /topic/glossary/translation-memory
│   │   └── /topic/glossary/[term]
│   └── /topic/[slug]                           ← Cluster Supporting Articles
│
├── /notes/                      📓 Founder Notes (Build-in-Public, Deniz's Voice)
│   └── /notes/[slug]
│
├── /docs/                       📖 Technische Dokumentation
│   └── /docs/[slug]
│
├── /legal/                      ⚖️  Rechtliches
│   ├── /legal/privacy
│   ├── /legal/terms
│   └── /legal/[slug]
│
├── /llms.txt                    🤖 AI Model Context File
├── /sitemap.xml
└── /robots.txt
```

### 2.2 Architektur-Empfehlungen

| Empfehlung                   | Details                                                                                                                                                                |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`/topic/` vs `/notes/`**   | `/topic/` = SEO-optimierte Fach-Guides (Pillar, Cluster, Glossar). `/notes/` = persönliche Founder-Posts im Build-in-Public-Stil. Trennung ist korrekt und SEO-sauber. |
| **`/product/context`**       | Doppelt als Feature-Seite UND Entry-Point zum Cluster A "Context-Aware Translation". Hier eng mit `/topic/context-aware-translation` verlinken.                        |
| **`/for/` vs `/solutions/`** | `/for/freelancers` = ICP Landing (Emotional, Workflow-orientiert). `/solutions/enterprise` = Feature-deep, Security, Compliance. Beides berechtigt.                    |
| **Glossar unter `/topic/`**  | Saubere Lösung: `/topic/glossary/[term]` gehört thematisch zum Topic Hub UND baut interne Links zu `/topic/`-Artikeln.                                                 |
| **`/compare/` Timing**       | Ab DR 15+ (ca. Monat 3–4). Vorher: Thin Authority gegen Phrase/Smartling/DeepL.                                                                                        |

### 2.3 URL-Konventionen

- Lowercase, Hyphens: `/topic/context-aware-translation/`
- Keywords vorne: `/compare/deepl-alternative/` (nicht `/compare/alternative-to-deepl/`)
- Max 3 Verzeichnisebenen: `/topic/glossary/translation-memory/`
- Kein Trailing-Slash-Wildwuchs — konsistent bleiben (entweder immer oder nie)

---

## 3. Content-Vorlagen nach Seitentyp

> **Tonalität für alle Templates:** Schreibe wie jemand, der das Thema tief versteht und es einem intelligenten Gegenüber erklärt — ruhig, ohne Angeberei, mit echten Beispielen. Nie wie ein Whitepaper, nie wie ein Pitch Deck.

### 3.1 Topic Pillar Page (`/topic/[cluster-pillar]`) — 2.500–5.000 Wörter

```
Title Tag: [Primary Keyword] — A Clear Guide [2026] | Flixu
Meta Desc: [Keyword] erklärt. [Spezifischer Nutzen]. [Stat oder Einordnung]. [150-160 Zeichen]

H1: What Is [Term]? — And Why It Matters for [Audience]

── TL;DR Block (60–80 Wörter, visuell abgesetzt) ──
   Direkte Definition. Keine Einleitung. Kein "In today's fast-paced..."
   Stil: Klar, warm, mit 1 konkretem Beispiel.

── Key Takeaways (4–6 Bullets) ──
   Jeder Bullet = 1 Fakt mit Zahl oder konkreter Aussage.

H2: How [Term] Works in Practice
   [2–3 Absätze à 60–100 Wörter. Echte Beispiele, nicht abstrakt.]
   [Tabelle wenn Vergleich sinnvoll]

H2: The Five Dimensions of [Aspekt]
   [Oder anderes Framework — Struktur, die Flixus Methode organisch erklärt,
    ohne dass es nach Werbetext klingt]

H2: [Practical Section — "When You Should / Shouldn't Use This"]
   [Ehrliche Einordnung. Zeigt Expertise, baut Vertrauen.]

H2: Common Mistakes with [Term]
   [Erfahrungs-basiert. Zeigt Deniz' 10 Jahre SaaS + Translation Knowledge.]

H2: How to Get Started
   [5–7 Steps — HowTo Schema. Praktisch, nicht abgedroschen.]

H2: Frequently Asked Questions
   H3: [Frage als natürliche Sprache]?
   [40–60 Wort Antwort. Precise, ohne Hedging.]
   ... [5–10 FAQs]

── Author: Deniz — Founder, Flixu AI ──
── Last Updated: [Datum] ──
```

**Checkliste:**

- [ ] Definition in den ersten 100 Wörtern
- [ ] Min. 3 Statistiken mit Quelle
- [ ] Min. 1 Tabelle/Matrix
- [ ] 10+ interne Links (zu Siblings, Glossar, Product, Compare)
- [ ] 8–10 externe Zitate
- [ ] FAQ mit FAQPage Schema
- [ ] Author Bio + Person Schema
- [ ] "Last Updated" sichtbar
- [ ] Brand Voice Check: Liest es sich ruhig und warm? Keine Hype-Wörter?

### 3.2 Comparison Page (`/compare/[slug]`) — 1.200–2.500 Wörter

```
Title: [Competitor] Alternative — An Honest Comparison [Year] | Flixu
oder: [Tool A] vs [Tool B]: Which Fits Your Workflow? [Year]

H1: Looking for a [Competitor] Alternative? Here's an Honest Look.

── TL;DR (2–3 Sätze) ──
   "[Competitor] is excellent at [strength]. Flixu takes a different approach:
    [differentiator]. Here's when each makes sense."

H2: Quick Comparison
   [Tabelle: Feature | Competitor | Flixu | Best For]

H2: Where [Competitor] is Strong
   [2–3 ehrliche Stärken. Keine Ironie, kein Understatement.
    "They've built a mature platform for..." — warm, respektvoll.]

H2: Where Flixu Takes a Different Path
   [3–4 Differenzierungspunkte. Keine Superlative.
    Statt "Flixu is better at..." → "Flixu's approach to X means..."]

H2: Pricing Side by Side
   [Tabelle. Nüchtern. Keine "Save 80%!"-Sprache.]

H2: Honest Recommendation
   [1 Absatz. "If you need [X], [Competitor] is likely the better choice.
    If [Y] matters more, we built Flixu for exactly that."]

H2: FAQ
   [5–8 Fragen — FAQPage Schema]
```

> **Brand Voice Reminder:** Comparison Pages sind der härteste Brand-Voice-Test. Die Versuchung, Wettbewerber subtil schlecht darzustellen, ist groß. Flixus Stimme: _Ehrlich, warm, klar._ "They're good at X. We're different at Y. Here's how to decide."

### 3.3 Glossar-Eintrag (`/topic/glossary/[term]`) — 300–800 Wörter

```
Title: What Is [Term]? — Definition | Flixu Glossary

H1: What Is [Term]?

── Definition Box (40–60 Wörter, visuell abgesetzt) ──
   "[Term] is [definition]. [Context: wann/wo es relevant ist]."
   Stil: Wie ein Mentor es einer klugen Junior-Kollegin erklärt.

H2: How It Works in Practice
   [1–2 Absätze. Konkretes Beispiel.]

H2: [Term] vs. [Related Term]
   [Kurze Abgrenzung, ggf. Mini-Tabelle]

── Related Terms (3–5 interne Links) ──
── Related Guides (2–3 Links zu /topic/ Artikeln) ──
```

### 3.4 Founder Note (`/notes/[slug]`) — 500–2.000 Wörter

```
Title: [Persönlicher Hook — Deniz's Perspektive] | Flixu Notes

H1: [Storytelling-Hook. Nicht SEO-optimiert, sondern ehrlich.]

[Persönlicher, narrativer Text. Build-in-Public.
 Hier gelten Brand Voice Regeln am stärksten:
 Location, Action, Thoughts, Emotions, Dialogue.

 Kein SEO-Template. Kein FAQ-Block nötig.
 Aber: 3–5 interne Links organisch einbauen.
 Author Bio + Last Updated.]
```

> **Notes vs. Topics:** `/notes/` ist Deniz's persönliche Stimme. Hier darf und soll es menschlich klingen — Campervan-Geschichten, 2-AM-Debugging, echte Rückschläge. `/topic/` ist Fach-Content, der SEO-strukturierter sein darf aber trotzdem Flixus ruhigen Ton hält.

### 3.5 Pricing Page (`/pricing`) — 500–1.000 Wörter + FAQ

```
Title: Pricing — Simple Plans for Every Workflow | Flixu

H1: Transparent Pricing. No Surprises.

── Value Statement (1 Satz) ──
   "Context-aware translation. Start free, grow at your pace."
   [Kein "revolutionary pricing" oder "unbeatable value"]

── Billing Toggle (Monthly / Annual) ──
── 3 Tiers mit klaren Namen ──

── Feature Comparison Table (HTML) ──
   [8–12 Features, ehrlich dargestellt]

── Social Proof (wenn verfügbar) ──
   [Nutzerzahlen, Testimonials — nah an CTAs]

H2: Frequently Asked Questions
   [8–10 Fragen: "Is there a free tier?", "Can I cancel anytime?",
    "What happens to my data if I downgrade?"]
   → FAQPage + SoftwareApplication Schema
```

### 3.6 Product Page (`/product/[feature]`) — 800–1.500 Wörter

```
Title: [Feature Name] — [One-Sentence Benefit] | Flixu

H1: [Feature Name]

── Benefit Statement (2–3 Sätze) ──
   Was es tut + warum es besser funktioniert als der Status Quo.
   [Kein "revolutionary". Statt: "Most tools translate sentence by sentence.
    Context Engine reads the full document first."]

H2: How It Works
   [3–5 Steps oder visuelle Erklärung]

H2: When This Matters Most
   [Spezifische Use Cases pro ICP]

── Contextual CTA ──
   "Try it with your own text — see the difference in 30 seconds."

── Related Features (2–3 Links zu anderen /product/ Seiten) ──
── FAQPage Schema wenn FAQ vorhanden ──
```

---

## 4. Schema Markup — Implementierung

### 4.1 Organization (Homepage + /about)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Flixu AI",
  "url": "https://flixu.ai",
  "logo": "https://flixu.ai/logo.png",
  "description": "Context-aware AI translation workspace for translators, agencies, and localization teams",
  "founder": {
    "@type": "Person",
    "name": "Deniz Wozniak",
    "jobTitle": "Founder & CEO",
    "sameAs": ["https://linkedin.com/in/deniz-wozniak"]
  },
  "sameAs": [
    "https://twitter.com/flixuai",
    "https://linkedin.com/company/flixu",
    "https://g2.com/products/flixu"
  ]
}
```

### 4.2 SoftwareApplication (/pricing + /product/)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Flixu",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Context-aware AI translation workspace analyzing cultural awareness, domain expertise, formality level, brand voice, and situational context before translating",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "0",
    "highPrice": "999",
    "priceCurrency": "EUR",
    "offerCount": "3"
  },
  "featureList": [
    "Context-aware translation",
    "5-dimension analysis engine",
    "Brand voice preservation",
    "Dynamic LLM routing",
    "Document translation",
    "Translation memory",
    "Glossary management"
  ]
}
```

### 4.3 FAQPage (Alle Seiten mit FAQ-Sektion)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is context-aware translation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Context-aware translation analyzes five dimensions before translating — cultural awareness, domain expertise, formality, brand voice, and situational context. Instead of processing sentences in isolation, it understands the full picture first."
      }
    }
  ]
}
```

### 4.4 Article + Person (/topic/ + /notes/)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Title]",
  "author": {
    "@type": "Person",
    "name": "Deniz Wozniak",
    "url": "https://flixu.ai/about",
    "jobTitle": "Founder, Flixu AI",
    "description": "10+ years B2B SaaS. Former Phrase. Building context-aware translation tools from a campervan in Greece."
  },
  "datePublished": "2026-03-01",
  "dateModified": "2026-03-01",
  "publisher": {
    "@type": "Organization",
    "name": "Flixu AI"
  }
}
```

### 4.5 HowTo (/method + Prozess-Guides)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Flixu's 5-Dimension Analysis Works",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Source Analysis",
      "text": "The engine reads your full text and identifies cultural markers, domain terminology, and formality patterns."
    }
  ]
}
```

### 4.6 BreadcrumbList (Alle Seiten)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://flixu.ai/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Topics",
      "item": "https://flixu.ai/topic/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Context-Aware Translation",
      "item": "https://flixu.ai/topic/context-aware-translation/"
    }
  ]
}
```

---

## 5. GEO/AEO Content-Formatierung — Die 10 Regeln

### Regel 1: Answer-First

44% aller LLM-Zitate kommen aus den **ersten 30% des Textes**. Starte jede Seite mit TL;DR (60–80 Wörter). Nie mit einer Einleitung.

### Regel 2: Definitions-Block als "Entity is"-Format

_"Context-aware translation is [40–60 Wort Definition]."_ — visuell abgesetzt. Wahrscheinlichster AI-Snippet. **Tonalität:** Präzise und zugänglich, nicht akademisch.

### Regel 3: H2/H3 als echte Fragen

Nicht: "Vorteile" → Sondern: **"What makes context-aware translation different from word-by-word MT?"** — matcht AI-Retrieval direkt.

### Regel 4: Kompakte Absätze

60–100 Wörter pro Absatz. 15–20 Wörter pro Satz. 1 Idee = 1 Absatz. AI extrahiert klare, abgeschlossene Blöcke.

### Regel 5: Tabellen für alles Vergleichbare

AI-Engines extrahieren tabellarische Daten bevorzugt. Jede Seite mit Vergleichs-Dimension → HTML-Tabelle.

### Regel 6: 3–5 Statistiken pro Artikel

+30–40% AI-Visibility. Immer mit Attribution. **Flixu-Stil:** Zahlen einbetten, nicht Zahlen anschreien. _"Teams using context-aware tools report 40% fewer QA cycles (CSA Research, 2025)"_ — nicht _"INCREDIBLE 40% REDUCTION!!!"_

### Regel 7: Externe Zitate (8–10 pro 1.000 Wörter)

Zu Studien, Industry Publications, offizielle Docs. Zeigt AI-Engines: gut recherchiert, trust-würdig.

### Regel 8: FAQ auf jeder Content-Seite

Nur 10.5% aller Seiten nutzen FAQPage Schema. 5–10 Fragen, je 40–60 Wort Antworten. **Flixu-Stil:** Beantworte FAQs wie ein geduldiger Experte, nicht wie ein FAQ-Bot.

### Regel 9: Kein Fluff, kein Hedging, kein AI-Slop

| ❌ Verboten                                  | ✅ Stattdessen                    |
| -------------------------------------------- | --------------------------------- |
| "In today's fast-paced digital landscape..." | [Direkt zum Punkt]                |
| "It's important to note that..."             | [Einfach den Punkt machen]        |
| "Revolutionary / Game-changing"              | [Was es konkret tut]              |
| "Trusted by thousands" (ohne Beweis)         | [Spezifische Zahl oder weglassen] |
| "Best-in-class solution"                     | [Erklären was anders ist]         |

### Regel 10: Author + Freshness Signals

Author Bio mit verifizierbaren Credentials + Person Schema. "Last Updated: [Datum]" prominent. Deniz' 10-Jahre-SaaS + Ex-Phrase Background = starkes E-E-A-T Signal.

---

## 6. Internal Linking Strategie

### 6.1 Cluster-Model auf Flixus Architektur

```
/topic/context-aware-translation (Pillar A)
  ├── /topic/5-dimensions-of-translation-quality
  ├── /topic/context-vs-traditional-mt
  ├── /topic/cultural-awareness-in-translation
  ├── /topic/domain-specific-translation
  ├── /topic/glossary/context-aware-translation
  ├── → /product/context (Product Page)
  ├── → /method (How the engine works)
  └── → /compare/deepl-alternative (Funnel: nächster Schritt)

/topic/brand-voice-in-translation (Pillar B)
  ├── /topic/how-to-maintain-brand-voice-across-languages
  ├── /topic/formality-levels-in-translation
  ├── /topic/glossary/brand-voice
  ├── → /product/text
  └── → /for/agencies
```

### 6.2 Linking-Regeln

| Regel                                          | Details                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------ |
| **Min. 10 interne Links pro /topic/ Artikel**  | Zu Pillars, Siblings, Glossar, Product, Compare                    |
| **Anchor Text = Keyword**                      | "context-aware translation" statt "click here"                     |
| **Jeder Cluster-Artikel → Pillar**             | + 2–3 Siblings                                                     |
| **Glossar als Link-Hub**                       | Jeder `/topic/glossary/` Term linkt zu 2+ /topic/ Artikeln         |
| **Bei neuem Content: 2–3 alte Seiten updaten** | Rücklinks einfügen                                                 |
| **Money Pages ≤ 3 Klicks**                     | /pricing, /product/, /compare/ immer über Nav + Content erreichbar |

### 6.3 Funnel-Verlinkung

```
/notes/ (Awareness: "Was ich beim Bauen lerne")
  → /topic/ (Education: "So funktioniert das fachlich")
    → /compare/ (Evaluation: "Wie unterscheidet sich das?")
      → /pricing (Decision: "Was kostet es?")
        → Trial Signup
```

### 6.4 Cross-Linking /product/ ↔ /topic/

| Seite                | Verlinkt organisch zu                                         |
| -------------------- | ------------------------------------------------------------- |
| `/product/context`   | `/topic/context-aware-translation`, `/method`                 |
| `/product/text`      | `/topic/brand-voice-in-translation`, `/for/freelancers`       |
| `/product/documents` | `/topic/document-translation-best-practices`, `/for/agencies` |
| `/method`            | `/product/context`, `/topic/context-aware-translation`        |
| `/for/freelancers`   | `/product/text`, `/pricing`, relevante `/topic/` Guides       |

---

## 7. Meta Tags — Templates mit Flixu Voice

### 7.1 Title Tags (50–60 Zeichen)

| Seitentyp         | Template                                                | Beispiel                                                        |
| ----------------- | ------------------------------------------------------- | --------------------------------------------------------------- |
| **Topic Pillar**  | `[Keyword]: A Clear Guide [Year] \| Flixu`              | `Context-Aware Translation: A Clear Guide 2026 \| Flixu`        |
| **Topic Article** | `[Topic] — [Angle] \| Flixu`                            | `Brand Voice in Translation — Why Consistency Matters \| Flixu` |
| **Compare**       | `[Competitor] Alternative — Honest Comparison \| Flixu` | `DeepL Alternative — Honest Comparison \| Flixu`                |
| **Product**       | `[Feature] — [Benefit] \| Flixu`                        | `Context Engine — Translate With Full Awareness \| Flixu`       |
| **Glossar**       | `What Is [Term]? \| Flixu Glossary`                     | `What Is Translation Memory? \| Flixu Glossary`                 |
| **Notes**         | `[Personal Hook] \| Flixu Notes`                        | `Debugging Context at 2 AM in Thessaloniki \| Flixu Notes`      |
| **For**           | `Flixu for [Audience] — [Value Prop]`                   | `Flixu for Freelance Translators — Work Smarter`                |

### 7.2 Meta Descriptions (150–160 Zeichen)

**Stil:** Informativ, kein Hype. Wer das liest, soll wissen was ihn erwartet — nicht überzeugt werden.

| Typ         | Template                                                                               |
| ----------- | -------------------------------------------------------------------------------------- |
| **Topic**   | `[Keyword] explained clearly. [What you'll learn]. [Proof/stat if available].`         |
| **Compare** | `An honest look at [Competitor] vs Flixu. Features, pricing, and where each one fits.` |
| **Product** | `[What it does]. [How it's different]. [Inviting, not pushy].`                         |
| **Notes**   | `[Personal hook from the article]. By Deniz, Founder of Flixu.`                        |

### 7.3 OpenGraph + Twitter Cards (Alle Seiten)

```html
<meta property="og:title" content="[Title]" />
<meta property="og:description" content="[Meta Description]" />
<meta property="og:image" content="https://flixu.ai/og/[page-slug].png" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://flixu.ai/[path]/" />
<meta name="twitter:card" content="summary_large_image" />
```

OG-Images (1200×630px) — Design konsistent mit Flixu Brand. Ruhig, klar, typografisch.

---

## 8. Bild- & Media-Optimierung

| Aspekt           | Regel                                                                              |
| ---------------- | ---------------------------------------------------------------------------------- |
| **Format**       | WebP (Fallback: PNG für Grafiken, JPEG für Fotos)                                  |
| **Alt-Text**     | Beschreibend + organisch: `"Table comparing context-aware translation dimensions"` |
| **Lazy Loading** | Below-the-fold Bilder                                                              |
| **Max-Breite**   | Responsive, max 1200px                                                             |
| **Kompression**  | < 100KB Blog, < 200KB Hero                                                         |
| **Dateinamen**   | `context-analysis-workflow.webp` (nicht `img_001.webp`)                            |
| **Stil**         | Clean, minimal, Brand-konsistent. Keine Stock-Fotos mit Handshakes.                |

---

## 9. CTA-Strategie

> **Flixu-Prinzip:** CTAs dürfen nie den Ton brechen. Kein "Sign Up NOW!", kein Countdown-Timer, kein "Only 3 spots left!". Einladend, nicht drängend.

### 9.1 CTA nach Seitentyp

| Seite                    | Primärer CTA                              | Stil                                 |
| ------------------------ | ----------------------------------------- | ------------------------------------ |
| **Topic Pillar/Article** | Lead Magnet (Checklist/Template)          | Mid-Article, kontextuell eingebettet |
| **Compare**              | "Try Flixu — see the difference yourself" | Nach Vergleichstabelle + Footer      |
| **Pricing**              | "Start free"                              | Hero + Sticky + nach jedem Plan      |
| **Product**              | "Try it with your own text"               | Nach Feature-Erklärung               |
| **Glossar**              | Newsletter                                | Sidebar / Bottom                     |
| **Notes**                | Newsletter oder Social Follow             | Bottom, dezent                       |

### 9.2 Lead Magnets pro Cluster

| Cluster                      | Lead Magnet                                   |
| ---------------------------- | --------------------------------------------- |
| A: Context-Aware Translation | "Context-Aware Translation Checklist"         |
| B: Brand Voice               | "Brand Voice Translation Template"            |
| C: Mid-Market Localization   | "Localization QA Checklist"                   |
| D: AI in Translation         | "AI Translation vs Human: Decision Framework" |

### 9.3 Mid-Article CTAs (Flixu-Stil)

- ❌ "Sign up for Flixu today!"
- ❌ "Don't miss out on our free trial!"
- ✅ "Curious how context analysis handles this? Paste your own text and see."
- ✅ "We built a free checklist for exactly this — grab it here."
- ✅ "If this resonates, our guide on [related topic] goes deeper."

---

## 10. Content-Qualitäts-Checklist

Vor Veröffentlichung — jede Seite:

### SEO Struktur

- [ ] TL;DR in den ersten 200 Wörtern
- [ ] H2/H3 als Fragen wo sinnvoll
- [ ] Absätze ≤ 100 Wörter, Sätze ≤ 20 Wörter (Durchschnitt)
- [ ] Min. 1 Tabelle/Matrix
- [ ] Min. 3 Statistiken mit Quelle
- [ ] FAQ-Sektion (5–10 Fragen, 40–60 Wort Antworten)

### Schema & Technik

- [ ] Passender Schema-Typ implementiert
- [ ] `dateModified` aktuell
- [ ] "Last Updated" sichtbar
- [ ] Author Bio + Person Schema
- [ ] OG/Twitter Meta Tags
- [ ] Bilder: Alt-Text, WebP, komprimiert, lazy-loaded

### Internal Linking

- [ ] 10+ interne Links (Topic: Pillar, Siblings, Glossar, Product, Compare)
- [ ] Nächster Funnel-Schritt verlinkt
- [ ] Descriptive Anchor Text
- [ ] 2–3 bestehende Seiten rückverlinkt zum neuen Content

### Brand Voice ← Flixu-spezifisch

- [ ] Liest es sich ruhig, warm und klar?
- [ ] Keine Hype-Wörter? (revolutionary, game-changing, crushing it)
- [ ] Keine Pressure-Taktiken? (limited time, don't miss out)
- [ ] Ehrlich über Grenzen? (wo Wettbewerber besser sind, was noch fehlt)
- [ ] Spezifisch statt generisch? (echte Beispiele, echte Zahlen)
- [ ] Könnte eine KI das geschrieben haben? (Wenn ja → persönliche Story einfügen)
- [ ] Kein AI-Slop? ("In today's...", "It's important to note...")

### SEO Basics

- [ ] Title Tag: 50–60 Zeichen, Keyword vorne
- [ ] Meta Description: 150–160 Zeichen
- [ ] H1 = 1x, enthält Primary Keyword
- [ ] URL: kurz, lowercase, hyphenated
- [ ] Canonical Tag
- [ ] Mobile-responsive

---

## 11. Erste 15 Seiten — Priorisierung

| #   | URL                                   | Ziel-Keyword                           | Schema                     | Zeitplan    |
| --- | ------------------------------------- | -------------------------------------- | -------------------------- | ----------- |
| 1   | `/`                                   | "context-aware translation workspace"  | Organization + SoftwareApp | **Woche 1** |
| 2   | `/method`                             | "how context-aware translation works"  | HowTo + FAQ                | **Woche 1** |
| 3   | `/pricing`                            | "flixu pricing"                        | SoftwareApp + FAQ          | **Woche 1** |
| 4   | `/product/context`                    | "context engine translation"           | SoftwareApp                | **Woche 1** |
| 5   | `/product/text`                       | "AI text translation tool"             | SoftwareApp                | **Woche 1** |
| 6   | `/for/freelancers`                    | "translation tool for freelancers"     | —                          | **Woche 2** |
| 7   | `/for/agencies`                       | "translation tool for agencies"        | —                          | **Woche 2** |
| 8   | `/topic/context-aware-translation`    | "context-aware translation"            | Article + FAQ              | **Woche 2** |
| 9   | `/topic/brand-voice-in-translation`   | "brand voice in translation"           | Article + FAQ              | **Woche 3** |
| 10  | `/topic/context-vs-traditional-mt`    | "context-aware vs machine translation" | Article + FAQ              | **Woche 3** |
| 11  | `/about`                              | "flixu ai" (branded)                   | Organization + Person      | **Woche 3** |
| 12  | `/topic/glossary` (30 initiale Terms) | Multi Long-tail                        | DefinedTermSet             | **Woche 4** |
| 13  | `/product/documents`                  | "document translation tool"            | SoftwareApp                | **Woche 4** |
| 14  | `/compare/deepl-alternative`          | "deepl alternative for teams"          | Article + FAQ              | **Monat 2** |
| 15  | `/compare/phrase-alternative`         | "phrase alternative"                   | Article + FAQ              | **Monat 2** |

> Compare Pages ab Monat 2 — erst Basics + Topic Authority aufbauen. Placeholder-Pages (`/product/audio`, `/product/visual`) → `noindex` bis Feature live.

---

## 12. Monitoring & Iteration

### Wöchentlich (15 Min)

- [ ] GSC: Neue indexierte Seiten? Fehler?
- [ ] GSC: Impressions + Klicks Trend
- [ ] CWV: Alle Seiten "Good"?

### Monatlich (45 Min)

- [ ] Top 5 + Bottom 5 Seiten nach Impressions
- [ ] Seiten Rang 11–20 → Content + Links optimieren
- [ ] Neue Queries aus GSC → zu existierenden FAQs hinzufügen
- [ ] 2–3 Seiten updaten (neue Links, Stats, "Last Updated")
- [ ] AI-Prompt-Check: 10 Prompts in ChatGPT/Perplexity → wird Flixu zitiert?

### Quarterly (2h)

- [ ] Content Audit: Thin Content konsolidieren, Top-Performer expandieren
- [ ] Backlink Review (Ahrefs Webmaster Tools)
- [ ] Keyword Review: Neue Opportunities in GSC Queries
- [ ] `llms.txt` aktualisieren
- [ ] GEO Share-of-Voice (Otterly.AI oder manuell über 30 Prompts)

---

_Guide Version: 2026-03-01 | Basis: Globaler Organic Visibility Research Report (4-LLM Cross-Analyse) | Angepasst an: Flixu Seitenarchitektur + Brand Voice_
