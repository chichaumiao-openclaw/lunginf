# Unified Scientific Database Frontend Plan (Ribocentre / Riboswitch / Aptamer)

Author: research_leader (res-agents)
Date: 2026-03-06
Working directory: `~/coding/web_template/`
Reference style: https://gznldataportal.github.io/

---

## 0) Goal & Scope

Design one **modern unified frontend template** for:
- https://www.ribocentre.org/
- https://riboswitch.ribocentre.org/
- https://aptamer.ribocentre.org/

Principle:
- Scientific meaning is consistent across three databases.
- Keep **one shared IA + one shared visualization module system**.
- Allow only **theme token differences** (color identity per site).

---

## 1) Research Plan (research_leader)

## 1.1 Core hypotheses
1. A single template can support all three databases with minimal per-site branching.
2. Shared visualization modules will improve maintainability and consistency.
3. Theme-only customization preserves brand separation without fragmenting UX.

## 1.2 Success criteria (MVP)
- One code path, three themes.
- Shared pages functional on all three sites: Home / Browse / Detail.
- Shared modules functional: search + filters + table + evidence + provenance.
- Frontend quality gates passed:
  - Accessibility baseline (WCAG AA key checks)
  - Performance baseline (LCP/INP no major regression)
  - Provenance visible on detail page

## 1.3 Team assignment (res-agents)
- **research_engineer**: IA implementation, page scaffold, component system, theme integration
- **research_data_steward**: schema/provenance display contract, validation checklist
- **research_statistician**: KPI design + usability evaluation protocol
- **research_reviewer**: adversarial review (misleading visualization, leakage, performance/accessibility risk)
- **research_leader**: final go/revise decision based on evidence + risk gates

## 1.4 4-week accelerated timeline
- **Week 1**: IA freeze + wireframe + token system + component contract
- **Week 2**: Build Home/Browse/Detail shared template (RiboCentre pilot)
- **Week 3**: Apply Riboswitch/Aptamer themes + shared module QA
- **Week 4**: usability/performance/provenance validation + go-live recommendation

---

## 2) A) 统一template页面线框（可直接给前端）

## 2.1 Site map (shared)
1. Home
2. Browse Datasets
3. Entity Detail
4. Analytics (phase-2)
5. Methods & Provenance
6. API / Download
7. About / Citation / Help

## 2.2 Home wireframe

```text
[Top Nav]
Logo | Site Switcher | Search | Docs | API | About | Theme Toggle

[Hero]
Title + subtitle + CTA(Explore / Advanced Search)
Right: scientific visual hero block

[Quick Stats]
Total Records | Data Types | Species | Publications | Last Update

[Data Modules Grid]
Genomics | Transcriptomics | RNA Structure | Interaction | Literature | Clinical

[Condition/Stage Section]
chips + bar/treemap overview

[Visualization Preview]
Distribution chart + growth trend

[Recent Activity / Changelog]
latest updates, imported datasets

[Footer]
Citation | Contact | License | GitHub/API | Version
```

## 2.3 Browse wireframe

```text
[Header]
Title + breadcrumb + save/export actions

[Search + Facet Controls]
Keyword search + filters(Type/Species/Evidence/Date/Source)

[Main layout]
Left: facet sidebar (collapsible)
Right: result list/table + sort + view switch + pagination

[Utility]
Compare tray + export CSV/JSON/FASTA
```

## 2.4 Detail wireframe

```text
[Entity Header]
Entry ID + Name + Status badges + Actions(Copy/Cite/Download/Share)

[Overview Card]
Summary + core metadata (organism, family, target/ligand, updated_at)

[Tabs]
Overview | Sequence/Structure | Evidence | Publications | Provenance | API

[Sequence/Structure]
sequence viewer + annotation tracks + structure panel

[Evidence]
evidence table + metric cards + method context

[Provenance]
source list + curation timeline + version snapshot + confidence status

[Related]
related entities + external database links
```

## 2.5 Shared component IDs (implementation-friendly)
- `C-SHELL-001` AppShell
- `C-NAV-001` TopNav
- `C-SEARCH-001` GlobalSearchBar
- `C-FACET-001` FacetPanel
- `C-RESULT-002` ResultList
- `C-ENTITY-001` EntityHeader
- `C-EVID-001` EvidenceTable
- `C-PROV-001` ProvenanceSummary
- `C-PROV-002` ProvenanceHistory

---

## 3) B) 三套配色 token 草案（final mapping）

> Mapping confirmed:
> - RiboCentre = Blue
> - Riboswitch = Teal-Green
> - Aptamer = Purple-Indigo

```json
{
  "version": "1.0.0",
  "semantic": {
    "success": "#16A34A",
    "warning": "#D97706",
    "error": "#DC2626",
    "info": "#0284C7"
  },
  "sites": {
    "RiboCentre": {
      "theme": "blue",
      "colors": {
        "primary": "#2563EB",
        "primaryHover": "#1D4ED8",
        "primarySoft": "#DBEAFE",
        "accent": "#0EA5E9",
        "background": "#F8FAFC",
        "surface": "#FFFFFF",
        "border": "#BFDBFE",
        "textPrimary": "#0F172A",
        "textSecondary": "#334155",
        "chart1": "#2563EB",
        "chart2": "#0EA5E9",
        "chart3": "#14B8A6",
        "chart4": "#22C55E",
        "chart5": "#F59E0B"
      }
    },
    "Riboswitch": {
      "theme": "teal-green",
      "colors": {
        "primary": "#0D9488",
        "primaryHover": "#0F766E",
        "primarySoft": "#CCFBF1",
        "accent": "#16A34A",
        "background": "#F7FCFA",
        "surface": "#FFFFFF",
        "border": "#99F6E4",
        "textPrimary": "#0F172A",
        "textSecondary": "#334155",
        "chart1": "#0D9488",
        "chart2": "#14B8A6",
        "chart3": "#22C55E",
        "chart4": "#0EA5E9",
        "chart5": "#F59E0B"
      }
    },
    "Aptamer": {
      "theme": "purple-indigo",
      "colors": {
        "primary": "#7C3AED",
        "primaryHover": "#6D28D9",
        "primarySoft": "#EDE9FE",
        "accent": "#4F46E5",
        "background": "#FAFAFF",
        "surface": "#FFFFFF",
        "border": "#DDD6FE",
        "textPrimary": "#111827",
        "textSecondary": "#374151",
        "chart1": "#7C3AED",
        "chart2": "#4F46E5",
        "chart3": "#A855F7",
        "chart4": "#06B6D4",
        "chart5": "#F59E0B"
      }
    }
  }
}
```

---

## 4) Engineering handoff checklist

- [ ] Build pages from wireframe skeleton (Home/Browse/Detail)
- [ ] No hardcoded hex in components (token-only)
- [ ] Theme switching by site config only
- [ ] Shared visualization modules reused across 3 sites
- [ ] Provenance card present on all detail pages
- [ ] Accessibility and performance smoke checks before demo

---

## 5) Decision Gate (research_leader)

Proceed if all conditions are met:
1. One template renders all 3 sites correctly.
2. Theme swap does not alter module behavior.
3. Provenance and evidence display are complete.
4. No critical accessibility/performance regression.

If not met: revise within one sprint and re-evaluate.
