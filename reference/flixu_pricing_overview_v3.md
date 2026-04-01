# Flixu AI — Pricing & Plan Overview

**Version 4.0 · März 2026 · Internes Dokument (GTM-Strategie)**

---

## Die Zwei-Reiter Strategie (Die Kurzversion)

Flixu bedient zwei fundamental unterschiedliche Zielgruppen. Das Pricing spiegelt dies durch eine strikte visuelle Trennung auf der Website in zwei Reiter ("Tabs") wider. Die Basis-Preise ($0, $39, $149, $449) sind auf beiden Reitern identisch, aber Paketierung, Feature-Priorisierung und Monetarisierungslogik sind auf die jeweilige Persona zugeschnitten.

### Tab 1: Developer Infrastructure (API-First)
_Fokus: Vibe-Coding, Headless CI/CD, schnelle App-Localization_

|                      | Free (Builder) | Pro (Indie)        | Growth (Scale-up)   | Scale (Infra)   | Enterprise              |
| -------------------- | ------------ | ------------------ | ------------------- | --------------- | ----------------------- |
| **Preis / Monat**    | $0           | $39                | $149                | $449            | ab $5.000               |
| **Jährlich / Monat** | —            | $33                | $125                | $375            | Verhandelbar            |
| **Credits / Monat**  | 30.000       | 300.000            | 1.000.000           | 3.000.000       | Custom                  |
| **SaaS Projects**    | 1            | 5                  | 15                 | Unbegrenzt      | Unbegrenzt              |
| **API & MCP Server** | ✓ Inklusive  | ✓ Inklusive        | ✓ Inklusive         | ✓ Inklusive     | ✓ Inklusive             |
| **Inkludierte UI Seats**| 1         | 1                  | **5 (für PM/Mktg)** | **10**          | Custom                  |
| **TM-Qualität**      | Standard     | Smart              | Advanced            | Precision       | Elite                   |

### Tab 2: Translation Workspace (UI-First)
_Fokus: CAT-Tool Features, Translation Memories, Freelancer-Collaboration_

|                      | Free (Starter)| Individual (Freelancer)| Team (Boutique) | Business (LSP) | Enterprise              |
| -------------------- | ------------ | ------------------ | ------------------- | --------------- | ----------------------- |
| **Preis / Monat**    | $0           | $39                | $149                | $449            | ab $5.000               |
| **Jährlich / Monat** | —            | $33                | $125                | $375            | Verhandelbar            |
| **Credits / Monat**  | 30.000       | 300.000            | 1.000.000           | 3.000.000       | Custom                  |
| **TMs / Glossareas** | 1 / 1        | 5 / 10             | 15 / 25             | 35 / 50         | Unbegrenzt              |
| **API-Zugang**       | —            | —                  | —                   | ✓ (CMS-Sync)    | ✓ Inklusive             |
| **Seats**            | 1            | 1                  | **5**               | **10**          | Custom                  |
| **TM-Qualität**      | Standard     | Smart              | Advanced            | Precision       | Elite                   |

---

## Was ein Credit ist

Ein Credit entspricht einem Zeichen im lateinischen Alphabet — ein Buchstabe, ein Leerzeichen, ein Satzzeichen zählt je als ein Credit. **Abgerechnet wird ausschließlich der übersetzte Output.** Quelltext, Prompt-Kontext, TM-Lookups und fehlgeschlagene Versuche kosten *nichts*.

**Was das in der Praxis bedeutet:**
Egal ob der Payload via JSON API (Dev Tab) oder DOCX (Workspace Tab) initiiert wird:
*   **JSON API:** Nur die eigentlichen Value-Strings werden berechnet. Keys werden ignoriert. UI-Strings ("Save", "Cancel") kosten meist 20–60 Credits.
*   **Dokumente:** Ein typischer Fließtextsatz hat ~100 Zeichen Output (ca. 100 Credits).

**In Wörtern:** 1 Credit ≈ 1 Zeichen. Bei durchschnittlich 6 Zeichen pro Wort (inkl. Leerzeichen) gilt:

| Plan       | Credits/Mo | ~ Wörter/Mo | ~ Segmente/Mo |
| ---------- | ---------- | ----------- | ------------- |
| Free       | 30.000     | ~5.000      | ~200          |
| $39-Plan   | 300.000    | ~50.000     | ~2.000        |
| $149-Plan  | 1.000.000  | ~167.000    | ~6.700        |
| $449-Plan  | 3.000.000  | ~500.000    | ~20.000       |

**Das TM als Sparschwein:** 100% TM-Matches verbrauchen 0 LLM-Calls und kosten **0 Credits**. Je mehr das TM wächst, desto günstiger wird der Laufzeitbetrieb. Skript-Sprachen (CJK) nutzen standardmäßig einen 2–3× Multiplikator für Zeichendichte.

---

## Die Pläne im Detail

---

### Free ($0) — "Builder" (Tab 1) / "Starter" (Tab 2)
_Zum Ausprobieren. Oder für Micro-SaaS "Vibe Coding"._

**30.000 Credits / Monat** (~5.000 Wörter). 
*   **Dev Tab:** API-Zugang, MCP Cursor Server und GitHub App sind sofort aktiv. Headless L10n für kleine Projekte.
*   **Workspace Tab:** 1 TM, 1 Glossary, Quick Translate und TMX-Support zur Tool-Evaluation.

**Standard TM:** Bietet grundlegende semantische Suche (256-dim, kein Reranking).

---

### Pro / Individual ($39 / Monat)
_Für ambitionierte Solo-Entwickler oder aktive Freelancer._

**300.000 Credits / Monat** (~50.000 Wörter).
*   **Dev Tab ("Pro"):** 5 Cloud-Projekte. Automatisierte CI/CD-Pipelines via API für Indie-Hacker mit mehreren Apps im Portfolio.
*   **Workspace Tab ("Individual"):** 5 TMs, 10 Glossaries, DOCX/XLIFF 2.0 In/Out für ernsthafte Übersetzer mit mehreren Agenturkunden.

**Smart TM (1024-dim + AI-Reranking):** 4× höhere semantische Auflösung. Das Basis-AI-Reranking filtert irrelevante Matches zuverlässig aus. Reduziert drastisch die "False Positives" klassischer CAT-Tools.

---

### Growth / Team ($149 / Monat)
_Der "Tipping Point" der Monetarisierung. Wenn Skalierung Kollaboration erzwingt._

**1.000.000 Credits / Monat** (~167.000 Wörter). **5 Seats inklusive.**
*   **Dev Tab ("Growth"):** UI-Zugriff für Marketing! Sobald Entwickler die Quality-Schranken auf >85% LQA setzen, müssen "quarantänisierte" Texte vom nicht-technischen Team (PM/Mktg) freigegeben werden. Diese 5 Seats finanzieren den Plan.
*   **Workspace Tab ("Boutique"):** 15 TMs, geteilte Ressourcen, Rollen (Owner/Admin/Editor). Kleine Agenturen erzwingen so strukturell die Konsistenz ihrer Freelancer.

**Advanced TM (1024-dim + Instruktion + Reranker-4B):** Versteht nicht nur *was* übersetzt wird, sondern *wofür*. Branchenspezifische Ausdrücke (Legal, Tech) werden durch den 4B-Reranker bevorzugt gematcht.

---

### Scale / Business ($449 / Monat)
_Infrastruktur für Agenturen und mittlere SaaS-Tech-Teams._

**3.000.000 Credits / Monat** (~500.000 Wörter). **10 Seats inklusive.**
*   **Dev Tab ("Scale"):** High API Rate Limits, erweiterte Headless-Regeln, SSO/SCIM-Provisionierung. Für CI/CD-Pipelines, in denen Lokalisierung Teil des Master-Commits ist.
*   **Workspace Tab ("Business"):** 35 TMs, 50 Glossaries. Hier öffnen wir im UI-Tab die API, da LSPs tiefgreifende Headless-CMS (Contentful, Sanity) anbinden müssen.

**Precision TM (2048-dim + Reranker-8B, 15 Kandidaten):** Enterprise-grade Präzision. Prüft bis zu 15 Kandidaten gleichzeitig als Query-Document-Pairs. Erkennt winzige Nuancen (kündigen vs. terminieren) – nahezu menschliche Trefferqualität für regulierte Branchen.

---

### Enterprise (ab $5.000 / Monat)
_Für Organisationen, bei denen Lokalisierung strategisches Kernsystem ist._

**Spezifikation:** Custom Credits & Custom Seats, nach Vereinbarung.
*   **Compliance:** GDPR-Audits, SSO/SCIM immer inklusive, SLAs, Uptime-Garantien, dedizierter Onboarding-Engineer.
*   **Elite TM (4096-dim + Reranker-8B, 20 Kandidaten + Cross-Lingual):** Maximale Vektorauflösung ohne Komprimierung. Erkennt "Der Vertrag wurde gekündigt" als *exaktes Match* für "The contract has been terminated" über Sprachgrenzen hinweg.

---

## TM Intelligence: Die verifizierte Architektur

_Kommuniziert wird an Kunden nicht die Parameterzahl, sondern das Resultat: "Mehr Konsistenz, weniger Post-Editing."_

| Plan       | Label        | Embedding-Dims | Retrieval-Methode              | Reranker / Filter   |
| ---------- | ------------ | -------------- | ------------------------------ | ------------------- |
| Free       | Standard TM  | 256            | ANN-Vektorsuche                | Keiner              |
| $39        | Smart TM     | 1024           | ANN-Vektorsuche                | AI-Reranking (Basis)|
| $149       | Advanced TM  | 1024           | ANN + Instruktions-Embeddings  | Reranker-4B         |
| $449       | Precision TM | 2048           | ANN + Domänen-Instruktionen    | Reranker-8B (15x)   |
| Enterprise | Elite TM     | 4096           | ANN + Terminologie-Instruktionen| Reranker-8B (20x)   |

---

## Credit Topups

Verfügbar für alle zahlenden Pläne auf beiden Reitern. Werden vor dem monatlichen Kontingent verbraucht und verfallen nicht.

| Paket      | Credits | Preis  | $/1M Credits | Verfügbar ab |
| ---------- | ------- | ------ | ------------ | ------------ |
| Flex       | 500K    | $69    | $138         | $39 (Pro/Indiv) |
| Starter    | 1M      | $129   | $129         | $39 (Pro/Indiv) |
| Standard   | 3M      | $349   | $116         | $149 (Growth)  |
| Pro        | 5M      | $549   | $110         | $449 (Scale)   |
| Volume     | 10M     | $1.049 | **$105**     | $449 (Scale)   |
| Enterprise | 100M+   | Custom | ab **$80**   | Enterprise     |

---

## Add-ons & Service Bundles

### Security & Compliance
| Add-on                | Preis / Monat | Verfügbar ab | Enterprise |
| --------------------- | ------------- | ------------ | ---------- |
| **SAML SSO**          | $149          | $149 Plan    | inkl.      |
| **SCIM Provisioning** | $249          | $449 Plan    | inkl.      |
| **Security Bundle**   | $349          | $449 Plan    | inkl.      |

### Resource Packs (Fokus: Workspace Tab)
| Pack            | Inhalt                                      | Preis / Monat | Verfügbar ab |
| --------------- | ------------------------------------------- | ------------- | ------------ |
| **Voice Pack**  | +5 Brand Voices                             | $49           | $39 Plan     |
| **Memory Pack** | +10 TMs, +10 Glossare                       | $49           | $39 Plan     |
| **Combo Pack**  | +5 BVs, +10 TMs, +10 Glossare, +20 Klienten | $99           | $149 Plan    |

### Platform & Productivity
| Add-on                               | Preis / Monat | Verfügbar ab | Enterprise |
| ------------------------------------ | ------------- | ------------ | ---------- |
| **Extra Seat** ($149 Plan / $449 Plan) | $19 / $15   | $149 Plan    | Custom     |
| **Priority Support**                 | $99           | $39 Plan     | inkl.      |
| **API Rate Limit+** (500 req/min)    | $99           | $449 Plan    | Custom     |
| **White-Label**                      | $249          | $449 Plan    | inkl.      |

*(Das White-Label Add-on richtet sich exklusiv an LSPs im Workspace-Reiter, die Flixu als eigene Plattform an ihre End-Kunden verkaufen wollen).*

---

## Segment-Mapping (ICP Distribution)

_Wie wir unsere 12 ICPs auf die Pläne und Reiter verteilen._

### Tab 1: Developer Infrastructure (API-First)
| ICP (Tier)                                  | Ziel-Plan      | Das entscheidende Argument                                      |
| ------------------------------------------- | -------------- | --------------------------------------------------------------- |
| **Early-Stage / Micro-SaaS (T3)**           | Free / Pro     | Null Setup. Startet lokal via Cursor MCP. Völlig Headless.      |
| **B2B SaaS Expansion Stage (T1)**           | Growth / Scale | 5 UI-Seats, damit Marketing die Quarantäne-Strings freigeben kann. |
| **High-Growth B2C Mobile Apps (T1)**        | Growth / Scale | iOS/Android native APIs, schnelle Freigabe-Iterationen (Agile). |
| **Game Studios / Interactive (T1)**         | Scale          | High Volume JSON-Arrays, konsistente Lore dank Brand Voice.     |
| **Technical Docs (T3) / IoT Apps (T2)**     | Growth         | GitHub App, MDX-Support, direkte Repo-Synchronisation.          |

### Tab 2: Translation Workspace (UI-First)
| ICP (Tier)                                  | Ziel-Plan      | Das entscheidende Argument                                      |
| ------------------------------------------- | -------------- | --------------------------------------------------------------- |
| **Language Service Providers (T1)**         | Business       | White-Label-Fähigkeit, 35 TMs für Kunden, Cross-Lingual Enterprise.|
| **Global Marketing Teams (T1)**             | Team / Business| Collaboration-Seats, Brand Voice Lock-in für DACH/EMEA Märkte.     |
| **Telehealth & Digital Healthcare (T1)**    | Business + Sec | Extreme Qualität (Precision TM - 8B Reranker), SAML SSO, GDPR.  |
| **Legal Tech & Compliance (T3)**            | Business       | Subtilitäten wie "terminieren" vs "kündigen" sicher auflösen.   |
| **Globale E-Commerce Enablers (T2)**        | Team / Business| Hoher Bulk-Durchsatz (Produktdaten), Shared Glossaries für Tone.   |

---

## Jahresabrechnung & Plan-Wechsel

*   **Jahresabrechnung:** 17% Rabatt bei jährlicher Zahlung ($39 -> $33; $149 -> $125; $449 -> $375).
*   **Plan-Upgrades (TM Updates):** Wer von Individual (1024-dim) auf Business (2048-dim) wechselt, stößt einen asynchronen Re-Embedding-Job an. Das TM skaliert hoch, während das System live bleibt. 
*   **Downgrades:** Das TM bleibt erhalten, neue Übersetzungen greifen künftig jedoch auf das kleinere Reranking-Modell zurück.

---

## Typische Kundenprofile (Revenue-Architektur)

### B2B SaaS "KontoFlow" (12 Personen, Infrastruktur Tab)
| Posten             | Monatlich   |
| ------------------ | ----------- |
| Scale Plan         | $449        |
| Security Bundle    | $349        |
| 2 Extra UI Seats   | $30         |
| **Run-Rate**       | **$828**    |

_Vergleich: Lokalise Growth + DeepL API = $7.548/yr — aber ohne Brand Voice, Quality Scoring oder Multi-LLM-Routing. Flixu liefert die Infra UND die Intelligenz aus einer Hand._

### Boutique Agentur "TransText GmbH" (6 Personen, Workspace Tab)
| Posten             | Monatlich   |
| ------------------ | ----------- |
| Team / Business    | $449        |
| Voice Pack         | $49         |
| 1 Extra Seat       | $15         |
| **Run-Rate**       | **$513**    |

_Vergleich: Phrase Team = $12.540/yr für 2M "Machine Translation Units" und extrem langsames Tooling. Flixu ist fast 60% günstiger, bei radikal besserer KI-Intelligenz._

---

## Wettbewerber-Benchmark: Phrase vs. Lokalise vs. Flixu

Das starke Verkaufsargument liegt im **"Missing Middle"**:
*   Wir greifen **Lokalise** an, indem wir bessere Developer Experience (Zero-Friction API ab $0) und gleichzeitig eigene native KI (Reranker) liefern, statt als dumpfer Durchlauferhitzer für DeepL zu fungieren.
*   Wir greifen **Phrase TMS** an, indem wir Agenturen und LSPs ein leichtgewichtiges System ohne Legacy-Enterprise-Bloat anbieten: "Zahlen Sie $1.500 statt $12.000, und bekommen Sie dafür KI-Matching mit 8B-Parameter-Rerankern statt einfachem Fuzzy-Müll."

---

## Was Flixu nicht kommuniziert
**Nicht sagen:**
*   "Spezial-Rabatte für Developer!" (Preise sind fest, das Produkt ist so stark, dass es den Preis rechtfertigt).
*   "Flixu ersetzt deine Übersetzer" (An LSPs sagen wir: Flixu macht deine Übersetzer zu Supervisorn).

---

_Flixu AI LLC · flixu.ai · Version 4.0 · Stand März 2026_
_Pricing-Umstellung auf Zwei-Reiter-Modell (Developer Infra vs Workspace UI) zur optimalen Abdeckung der 12 Kern-ICPs. Basispreise verbleiben auf V3-Level._
