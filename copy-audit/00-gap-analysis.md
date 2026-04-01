# High-Level Gap Analysis: Phase 1 (Baseline) vs. Strategy 2026

Basierend auf den vier Leitdokumenten (SEO Guide, Visibility Report, Stages of Awareness Guide, Platform Overview) und dem Abgleich mit den aktuell in `copy-audit/` vorhandenen Dateien.

## 1. Core & Trust Pages (Fehlend)
Laut SEO Guide (Sektion 2.1) fehlen noch folgende strukturelle Foundation-Pages:
* `/contact` (Kontakt)
* `/roadmap` (Produkt-Roadmap)
* `/status` (System Status)
* `/legal/privacy` & `/legal/terms`
* `/llms.txt` (**Kritisch für AIO:** Muss als Plain-Text-Markdown nach Standard geschrieben werden)

## 2. Developer & API Pages (Fehlend)
Das *Platform Overview* Sektion 4 ("Developer Infrastructure & Automation") pitcht "Zero-Touch Auto-Approval Workflows" und die "GitHub App" extrem stark. 
* **Gap:** Wir haben `/for/saas-teams` und `/industries/saas`, aber keine dedizierte **`/for/developers`** oder **`/product/developer-api`** Seite. Entwickler (Phase 3/4) werden aktuell nicht dediziert mit API-Copy abgeholt.
* **LQA & Cultural Adaptation:** "Built-in Quality Estimation (LQA)" und die "Cultural Adaptation Engine" sind laut Overview Killer-Features, haben aber noch keine expliziten `/features/...` Seiten (wir haben aktuell nur `brand-voice, translation-memory, etc.`).

## 3. Top 15 Priority Pages (SEO Gaps)
Laut der Priorisierungs-Liste im SEO Guide fehlen uns noch exakte Matches für einige Tier-3 Quick-Win Pillar Pages:
* `/topic/context-vs-traditional-mt` (Target KD 15-25: "context-aware vs machine translation")
* `/topic/brand-voice-in-translation` (Wir haben `brand-voice-consistency.md`, sollte auf Intent geprüft werden)
* `/topic/localization-for-midmarket` (Cluster C)
* `/topic/ai-in-translation` (Cluster D)

## 4. Use Cases & Problem Awareness (Phase 2)
Im Copywriting Guide (Sektion 3.3) wird betont, dass Use Cases die spitzeste Form des Copyflows sind.
* **Ist-Zustand:** `document-translation`, `marketing-translation`, `saas-localization`
* **Gap:** Legal / Compliance (Vertragsstrafen durch Fehlübersetzungen), Medical Tech / E-Commerce (Wurde als Sub-Industrie erfasst, aber vielleicht fehlt ein konkreter *Use Case* wie "Website Localization" oder "Software String Translation").

## 5. Hinweis zu den Compare Pages
Die Alternativen-Seiten (`deep-l-alternatives`, `phrase`, `smartling-alternative` etc.) liegen im Format `.mdx` statt `.md` vor. Sie sind da, müssen aber im Audit-Plan bedacht werden, da sie die "Product Aware / Most Aware" Phase (Phase 4 & 5) nach dem ehrlichen Vergleichsschema abbilden müssen.

---
### Fazit für das anstehende Audit:
Das bestehende Material in `copy-audit` deckt ~80% der Strategie ab. Wir können mit dem systematischen Audit der vorhandenen Batches starten. **Empfehlung:** Wir auditieren erst die bestehenden Seiten, optimieren sie auf die Brand Voice und SEO/GEO-Guidelines, und erstellen danach die "Missing Pages" in einem gezielten neuen Batch.
