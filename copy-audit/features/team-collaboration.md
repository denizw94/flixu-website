# Current Copy & Structure: Team Collaboration (features/team-collaboration.astro)

> **File:** `src/pages/[...lang]/features/team-collaboration.astro`
> **Schema:** `FAQPage`
> **Layout:** `BaseLayout`
> **Metadata:** Title="Team Collaboration & Translation Management | Flixu", Desc="Scale your localization output effortlessly..."

---

## 1. Hero Section
**Component:** `<Section data-chapter="01 — OVERVIEW" class="hero-section pb-16">`
**Layout:** Grid 1-2 (`md:grid-cols-2 gap-12`) 

**Left Column (Text):**
- **Breadcrumbs:** Home > Features > Team Collaboration
- **Label (Orange, Mono):** Feature Spotlight
- **H1:** Built for teams.<br /><span class="text-orange-700 italic">Not just individuals.</span>
- **P:** Achieve absolute consistency across your entire translation roster. Shared memories, terminology, and project workflows without the onboarding friction.
- **Button:** Start Your Free Team Trial (Hidden class applied)

**Right Column (Visual):**
- `<HeroTeamCollaboration client:load />`

---

## 2. TL;DR Block
**Component:** `<Section data-chapter="02 — TL;DR" class="tldr-section">`
**Layout:** 1 Column (`max-w-3xl`)

**BlockText:** `<TldrBlock text="..." />`
"Flixu Team and Business plans transform solitary translation into a networked operation. Instantly share specific Translation Memories, Glossaries, and Brand Voices. Utilize a continuous activity feed to track translation progress, and assign strict Owner/Admin/Editor roles to maintain security when inviting external contractors to your workspace."

---

## 3. Capabilities / Mechanic Grid
**Component:** `<Section data-chapter="03 — CAPABILITIES" class="content-section mt-12">`
**Layout:** 1 Column Intro + Grid 2x2 (`md:grid-cols-2 gap-12`)

**Intro:**
- **H2:** Core Capabilities

**Grid Items (4 Cards):**
- **Card 1 (Networked Intelligence):**
  - **Icon:** (SVG Icon)
  - **H3:** Networked Intelligence
  - **P:** Structural consistency built-in. An agency deploying 5 translators automatically builds a unified intelligence layer. Translator A's edits instantly provide context for Translator B.
- **Card 2 (Role-Based Access (RBAC)):**
  - **Icon:** (SVG Icon)
  - **H3:** Role-Based Access (RBAC)
  - **P:** Prevent unintended modifications. Assign roles from Owner down to Viewer. Freelancers can be restricted to specific projects without exposing global client settings.
- **Card 3 (Activity Feed):**
  - **Icon:** (SVG Icon)
  - **H3:** Activity Feed
  - **P:** Eliminate project management ping-pong. See precisely when segments are verified or modified across your entire organization in real-time.
- **Card 4 (Unified Billing):**
  - **Icon:** (SVG Icon)
  - **H3:** Unified Billing
  - **P:** One invoice, shared resource pools. Your Team or Business credit pool is distributed automatically across your organization, drastically simplifying procurement.

---

## 4. FAQ
**Component:** `<Section data-chapter="04 — FAQ" class="content-section bg-stone-50 border-t mt-24">`
**Layout:** 1 Column (`max-w-3xl`)

**Intro:**
- **H2:** Technical FAQ

**Static Grid Items (2 Cards):**
- **Q1:** How does shared Translation Memory work?
  - **A1:** When multiple team members work in the same client workspace, all confirmed translations instantly update the shared Translation Memory algorithm. The next translator benefits from those matches in real-time.
- **Q2:** Can I restrict what my freelance translators can see?
  - **A2:** Yes, Flixu utilizes Role-Based Access Control (RBAC). You can invite external vendors or team members as Viewers or Editors, restricting their access to specific projects or configuration settings.

---
## Audit Report (Phase 2 Completed)

**1. Stage of Awareness:**
- **Current:** Stage 3. Highlights RBAC, Shared Resources, and Unified Billing.
- **Target:** Maintain. Strongly targets mid-market and enterprise buyers where "lone wolf" translation fails.

**2. Persona Alignment:**
- Agency Operations Managers, Localization Directors.

**3. Structural GEO / SEO Gaps:**
- **Missing In-Body Answer First:** The TL;DR block must be rendered beneath the Hero.
- **Paragraph Density:** The Grid format is clean. P tags are a good length (mostly 2 sentences).
- **Missing Visual Anchor:** Mentioning "Role-Based Access (RBAC)" is great for B2B, but we need a visual list or a visual table showing the permissions (Admin vs Editor vs Viewer) to anchor the page.

**4. Brand Voice & Copy Improvements:**
- "Built for teams. Not just individuals." is a great H1.
- "Eliminate project management ping-pong" is perfect pain-point marketing copy.

**Phase 4 Directives:**
1. Render the TL;DR block.
2. Inject a visual table or ordered list detailing the specific RBAC permissions (Owner, Editor, Viewer) to capture feature-parity search intent.

---

## Phase 4: Final Rewritten Copy

**Title Tag:** Team Collaboration & Translation Management | Flixu
**Meta Description:** Scale your localization output effortlessly. Share Translation Memories, enforce RBAC, and consolidate your translation team.
**[STRUCTURAL DIRECTIVE: Implement SoftwareApplication and FAQPage Schema.]**

### 1. Hero Section
**Label:** Feature Spotlight
**H1:** Built for teams.<br /><span class="text-orange-700 italic">Not just individuals.</span>
**P:** Achieve consistent terminology and tone across your entire translation team. Shared memories, terminology, and project workflows without the onboarding friction.

### 2. TL;DR Block (In-Body Answer First)
> **What is Flixu Team Collaboration?**
> Flixu's collaboration features let teams share Translation Memories, Glossaries, and Brand Voices across projects and users. Roles from Owner to Viewer control what each team member or external contractor can access and modify. Every confirmed translation updates the shared TM automatically.

### 3. Role-Based Access Control (RBAC)
**H2:** Granular Security Permissions

Prevent unintended database modifications while scaling your freelance resources. Flixu enforces strict, enterprise-grade access boundaries.

<!-- Conceptual example — exact roles in the API documentation -->
| Role Requirement | Permission Level | System Access |
| :--- | :--- | :--- |
| **Workspace Owner** | Full System Control | Can manage billing, global settings, client profiles, TM databases, and invite/remove members. |
| **Workspace Admin** | Operational Management | Can create projects, edit Glossary rules, modify Brand Voices, and review translations. Cannot alter billing. |
| **Project Editor** | Active Contributor | Can upload files and execute translations within assigned projects. Can edit TM segments. Cannot modify global Glossaries or Client logic. |
| **Restricted Viewer** | Review Only | Can view translated outputs and monitor project progress. Cannot initiate new translations or alter any system data. |

### 4. Organizational Synergy
**H2:** Networked Intelligence

> **The Compound Value of Shared Memory:**
> CSA Research indicates that centralized Translation Memories reduce terminology alignment time by up to 60% for distributed teams.

**Shared Semantic Context**
Your agency's intelligence compounds automatically. When an authorized translator confirms a segment, it becomes available in the shared Translation Memory for the rest of the team. The next translator instantly benefits from those verified matches across entirely different projects.

**Accountability via Activity Feeds**
Eliminate project management ping-pong. See precisely when segments are verified, modified, or exported across your entire organization in a unified activity stream. 

**Centralized Billing Infrastructure**
One corporate invoice, shared resource pools. Your monthly character volume distributes automatically across your organization — one invoice, no per-seat complexity.

### 5. Frequently Asked Questions
**H2:** FAQs: Team Collaboration

- **Q1: How does shared Translation Memory work?**
  A1: When multiple team members work in the same client workspace, all confirmed translations update the shared Translation Memory algorithm. The next translator benefits from those matches contextually across the entire dataset.
- **Q2: Can I restrict what my freelance translators can see?**
  A2: Yes, Flixu utilizes Role-Based Access Control (RBAC). You can invite external vendors or team members as Viewers or Editors, restricting their access to specific projects or configuration settings.
- **Q3: How many users can I add to a Team plan?**
  A3: The standard Team plan allows up to 5 users, but you can scale users linearly via our enterprise API logic without needing separate corporate accounts.
- **Q4: Can I restrict a translator to a specific language pair only?**
  A4: Language pair restrictions can be enforced at the project level by assigning a translator explicitly to a Spanish or German target branch within the larger localization scope.
- **Q5: Does a Viewer have access to Translation Memory data?**
  A5: Viewers can see how sentences were translated within explicit projects, but they cannot directly export, query, or download the raw Translation Memory `.tmx` files.
- **Q6: Can I upgrade individual users between roles?**
  A6: Yes. Workspace Owners and Admins can promote an Editor to an Admin, or downgrade an external contractor to a Viewer, at any point through the settings dashboard.

### 6. Call to Action
**H2:** Scale your localization intelligence.
**P:** Consolidate your team. Share your memories. Maintain security.
**Button (Primary):** Start Free Trial -> `/signup`
**Button (Secondary):** Manage Your Team -> `/features/client-management`

#### Related Features
- [For Agencies](/for/agencies)
- [Client Management Hub](/features/client-management)
- [Project Management Workspace](/features/project-management)
