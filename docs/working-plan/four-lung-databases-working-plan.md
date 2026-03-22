# Four Lung Databases Working Plan

Last updated: 2026-03-18
Owner: research_leader

## Goal
Design and execute a coherent four-database program for lung single-cell resources, with website construction driven by clear scientific themes rather than generic engineering work.

The four databases are:
1. **lungdev** — lung development from early fetal to mature adult
2. **lunginf** — a single-cell database of lung infectious diseases
3. **lungcancer** — a single-cell atlas of lung cancer
4. **lungevo** — a database of lung evolution from fish to amphibians to reptiles to human

---

## Project Principle
Website construction must be organized around the scientific theme of each database.
Do **not** build four generic sites with renamed titles.

Each database must have:
- a clear scientific mission
- explicit scope and boundaries
- target users
- core biological questions
- key metadata dimensions
- a site architecture aligned to the theme
- a minimum viable product (MVP)

---

# Part I. Theme Design Specification

## 1. lungdev
### Theme
**Lung development from early fetal to mature adult**

### Scientific mission
Create a stage-resolved single-cell resource for understanding how the lung develops from early fetal stages to mature adulthood.

### Core scientific questions
- How do major lung cell types emerge, differentiate, and mature over developmental time?
- Which cell states are stage-specific and which are persistent across stages?
- What transcriptional programs define fetal, neonatal, pediatric, and adult transitions?
- Which adult cell states can be traced back to developmental origins?

### Scope
- Focus on normal lung development first
- Time axis: early fetal → late fetal → neonatal → pediatric → adult
- Multi-dataset integration is allowed, but developmental ordering is the core

### Key entities
- developmental stage
- age
- cell type
- lineage/trajectory
- marker genes
- dataset/source

### Target users
- developmental biologists
- lung biologists
- single-cell analysts
- clinicians interested in developmental origins

### Minimum launch scope
- stage browser
- cell type browser
- marker gene search
- dataset page
- about/data provenance page

### Homepage message
> A single-cell database of lung development from early fetal stages to mature adulthood.

---

## 2. lunginf
### Theme
**A single-cell database of lung infectious diseases**

### Scientific mission
Build a disease-focused resource for studying how lung cell states, immune responses, and tissue programs change across infectious conditions.

### Core scientific questions
- How do lung cell states shift across viral, bacterial, and fungal infections?
- Which immune responses are shared across infections and which are pathogen-specific?
- How do infected lungs differ from healthy lungs in epithelial, stromal, and immune compartments?
- Which programs are linked to inflammation, tissue damage, and repair?

### Scope
- Focus on infectious diseases of the lung
- Prioritize pathogen type, disease state, and host response
- Distinguish infection clearly from cancer and development

### Key entities
- pathogen type
- disease condition
- severity
- cell type
- immune program
- inflammatory signature
- dataset/source

### Target users
- infectious disease researchers
- immunologists
- pulmonary researchers
- translational scientists

### Minimum launch scope
- disease browser
- pathogen browser
- healthy vs infected comparison
- immune response modules
- dataset page

### Homepage message
> A single-cell database of lung infectious diseases across pathogens, disease states, and host immune responses.

---

## 3. lungcancer
### Theme
**A single-cell atlas of lung cancer**

### Scientific mission
Build an atlas-centered resource for understanding malignant cell states, tumor microenvironment remodeling, and clinical heterogeneity in lung cancer.

### Core scientific questions
- How is tumor cell heterogeneity organized in lung cancer?
- How do immune and stromal compartments change across lung cancer contexts?
- Which malignant and microenvironment states are linked to progression, therapy response, and resistance?
- How do tumor ecosystems differ by subtype, stage, and treatment status?

### Scope
- Focus on lung cancer single-cell atlases
- Emphasize malignant ecosystems and tumor microenvironment
- Distinguish from infectious disease and developmental biology

### Key entities
- cancer subtype
- stage
- treatment status
- malignant cell state
- immune microenvironment
- stromal state
- dataset/source

### Target users
- cancer biologists
- thoracic oncology researchers
- immuno-oncology researchers
- translational and clinical scientists

### Minimum launch scope
- cancer subtype browser
- malignant vs non-malignant views
- microenvironment explorer
- clinical metadata filters
- dataset page

### Homepage message
> A single-cell atlas of lung cancer, covering malignant ecosystems, immune remodeling, and clinical heterogeneity.

---

## 4. lungevo
### Theme
**A database of lung evolution from fish to amphibians to reptiles to human**

### Scientific mission
Create a comparative evolutionary resource to study conserved and divergent respiratory cell programs across species.

### Core scientific questions
- How do respiratory structures and cell states evolve from fish to amphibians to reptiles to humans?
- Which lung-related programs are evolutionarily conserved?
- Which cell states emerged later in vertebrate lung evolution?
- How can homologous or analogous respiratory cell types be mapped across species?

### Scope
- Cross-species evolutionary comparison
- Focus on respiratory organ/cell-state evolution
- Prioritize comparative organization rather than simple species collection

### Key entities
- species
- clade
- respiratory structure/organ
- cell type
- homologous mapping
- conserved/divergent programs
- dataset/source

### Target users
- evolutionary biologists
- comparative genomics researchers
- developmental biologists
- lung biology researchers

### Minimum launch scope
- species browser
- evolutionary map
- cross-species cell type comparison
- conserved program explorer
- dataset page

### Homepage message
> A database of lung evolution from fish to amphibians, reptiles, and humans, revealing conserved and divergent respiratory cell programs.

---

# Part II. Overall Matrix

## Orthogonal theme matrix
- **lungdev** = development
- **lunginf** = infection
- **lungcancer** = cancer
- **lungevo** = evolution

These four databases must remain distinct and complementary.
They should not collapse into the same site architecture with only different names.

---

# Part III. Product Plan for Website Construction

## Shared engineering principle
Use one technical base, but differentiate:
- homepage narrative
- primary navigation
- filters
- core visual modules
- search entry points
- biological questions answered

Do **not** use a one-template-fits-all content model.

---

## 1. lungdev product architecture
### Primary navigation
- Home
- Stages
- Cell Types
- Trajectories
- Markers
- Datasets
- Download
- About

### Homepage modules
1. Hero section: developmental mission and stage timeline
2. Stage overview cards
3. Cell composition across developmental stages
4. Featured trajectories / lineage programs
5. Marker gene explorer entry
6. Dataset summary
7. Download and documentation

### Core filters
- developmental stage
- age
- tissue region
- cell type
- dataset

### Core functions
- browse by developmental stage
- compare cell types across stages
- search marker genes
- visualize trajectory-related states
- inspect dataset provenance and QC

---

## 2. lunginf product architecture
### Primary navigation
- Home
- Diseases
- Pathogens
- Cell Responses
- Immune Landscape
- Datasets
- Download
- About

### Homepage modules
1. Hero section: infection-focused mission
2. Pathogen categories
3. Healthy vs infected overview
4. Immune response map
5. Inflammation/repair program entry
6. Dataset summary
7. Download and documentation

### Core filters
- pathogen type
- disease name
- severity
- acute/chronic
- cell type
- dataset

### Core functions
- browse by infection type
- compare healthy vs infected states
- inspect immune remodeling
- search inflammatory signatures
- explore disease-associated cell programs

---

## 3. lungcancer product architecture
### Primary navigation
- Home
- Cancer Types
- Malignant Cells
- Microenvironment
- Clinical Features
- Datasets
- Download
- About

### Homepage modules
1. Hero section: lung cancer atlas mission
2. Cancer subtype overview
3. Tumor ecosystem map
4. Malignant vs non-malignant comparison
5. Immune/stromal remodeling entry
6. Clinical feature filters
7. Dataset summary and download

### Core filters
- cancer subtype
- stage
- treatment status
- primary/metastatic
- cell type
- dataset

### Core functions
- browse by subtype
- inspect malignant cell states
- explore tumor microenvironment
- compare treated vs untreated states
- search tumor-associated markers/signatures

---

## 4. lungevo product architecture
### Primary navigation
- Home
- Species
- Evolutionary Map
- Cell Type Homology
- Conserved Programs
- Datasets
- Download
- About

### Homepage modules
1. Hero section: evolutionary mission
2. Species/clade overview
3. Evolutionary trajectory map
4. Conserved vs divergent program entry
5. Cross-species cell mapping module
6. Dataset summary
7. Download and documentation

### Core filters
- species
- clade
- organ/structure
- cell type
- homolog group
- dataset

### Core functions
- browse by species/clade
- inspect cross-species cell type mappings
- explore conserved/divergent programs
- compare respiratory cell states across evolution
- review dataset provenance and homolog assumptions

---

# Part IV. Execution Plan

## Phase 0. Infrastructure and GitHub access
Owner: Eng
Goal:
- verify repo access
- verify push pipeline
- verify local working directory
- verify deployment/build capability

Acceptance evidence:
- repo clone success
- push success
- remote URL
- commit hash
- documented access method

---

## Phase 1. Theme and architecture documents
Owner: Eng
Support: PI + Dat
Output files:
- `docs/four-database-theme-spec.md`
- `docs/lungdev-site-architecture.md`
- `docs/lunginf-site-architecture.md`
- `docs/lungcancer-site-architecture.md`
- `docs/lungevo-site-architecture.md`

Acceptance evidence:
- changed files
- markdown docs committed
- commit hash
- alignment with theme definitions above

---

## Phase 2. Build one sample site first: lungdev
Owner: Eng
Support: Dat
Goal:
Use lungdev as the first working prototype.

MVP requirements:
- homepage
- stage browser
- cell type browser
- marker search entry
- dataset page
- about page
- local build success
- push to GitHub

Acceptance evidence:
- changed files
- local run/build command output
- screenshots
- commit hash
- pushed branch/repo URL

---

## Phase 3. Template generalization to lunginf, lungcancer, lungevo
Owner: Eng
Support: Dat + Reviewer
Goal:
Reuse technical base but adapt each site according to its scientific theme.

Rules:
- shared scaffold allowed
- homepage narrative must differ
- filter system must differ by theme
- core modules must differ by scientific use case

Acceptance evidence:
- separate site configs/docs
- separate pages/modules
- screenshots
- commit hashes
- push records

---

## Phase 4. PI acceptance and anti-fake-completion checks
PI checks hourly for execution evidence.

A report is **invalid** if it only says:
- “working on it”
- “almost done”
- “most features completed”
- “will push later”

A task is marked **only-talking-no-doing** if there is:
- no changed files
- no command output
- no build/test evidence
- no commit hash
- no page/demo evidence

Required update format for Eng:
1. current phase
2. changed files
3. commands run
4. build/test output
5. commit hash
6. push result
7. screenshots or route list
8. blocker and next step

---

# Part V. Immediate Next Actions

## Priority order
1. Confirm GitHub access and working repo path
2. Create and commit theme specification docs
3. Create and commit four site architecture docs
4. Build lungdev as sample site
5. After lungdev is accepted, extend to lunginf, lungcancer, and lungevo

## Strategic note
The current objective is **not** to “finish four websites quickly.”
The current objective is to create a scientifically coherent four-database product system that can then be engineered efficiently and evaluated rigorously.

## One-line summary
Build a four-axis lung single-cell database system organized by **development, infection, cancer, and evolution**, with website engineering strictly driven by scientific theme and evidence-based execution.

## 2026-03-18 Kickoff (SLK-23568249)
- Started immediate execution for task SLK-23568249 from research_leader.
- Completed: added delivery-oriented comparison matrix, milestone timeline, concrete deliverables, and quality gates in this working plan.
- Next: implement Phase 1 docs (`docs/four-database-theme-spec.md` + four architecture docs) and commit with evidence.

## 2026-03-18 Delivery Addendum (Execution-Oriented)

### A. Database comparison matrix (scientific/product/engineering)
| Axis | lungdev | lunginf | lungcancer | lungevo |
|---|---|---|---|---|
| Scientific axis | Developmental time | Infectious disease | Tumor ecosystem | Evolutionary trajectory |
| Primary question | How cell states emerge/mature across age | How infection reshapes lung and immunity | How malignant + TME states drive heterogeneity/response | What programs are conserved/divergent across species |
| Core cohort dimensions | fetal→adult, age, region | pathogen, severity, acute/chronic | subtype, stage, treatment, primary/metastatic | species, clade, structure, homolog group |
| Main comparator | stage vs stage | healthy vs infected / pathogen vs pathogen | malignant vs non-malignant / treated vs untreated | species vs species / clade vs clade |
| Signature feature | trajectory-informed development browser | immune response and inflammation modules | malignant state + microenvironment atlas | homolog mapping + conserved program explorer |
| Minimum required pages | Home, Stages, Cell Types, Markers, Datasets, About | Home, Diseases, Pathogens, Cell Responses, Datasets, About | Home, Cancer Types, Malignant Cells, Microenvironment, Datasets, About | Home, Species, Evolutionary Map, Homology, Datasets, About |
| Data-risk hotspot | stage label consistency | pathogen/condition ontology drift | clinical metadata incompleteness | homolog inference assumptions |
| MVP success criterion | stage-wise composition + marker search usable | healthy/infected and pathogen-level comparisons usable | subtype + microenvironment exploration usable | cross-species mapping and conserved programs browseable |

### B. Milestone timeline (baseline plan)

- **M0 (2026-03-18 to 2026-03-19): Setup and proof of execution**  
  - Validate repo path, branch strategy, build command, push permissions.  
  - Output: environment proof notes + first docs commit.

- **M1 (2026-03-19 to 2026-03-21): Phase 1 docs complete**  
  - Deliver and commit: theme spec + four architecture docs.  
  - Output: commit hash, route/module checklist, review-ready markdown.

- **M2 (2026-03-21 to 2026-03-24): lungdev MVP implementation**  
  - Build pages/modules required by lungdev architecture.  
  - Output: local run/build logs, screenshots, push evidence.

- **M3 (2026-03-24 to 2026-03-28): Themed expansion to lunginf/lungcancer/lungevo**  
  - Reuse scaffold with theme-specific navigation/filters/modules.  
  - Output: per-site diff summary + screenshots + validation checklist.

- **M4 (2026-03-28 onward): PI acceptance and hardening**  
  - Resolve review comments; tighten provenance/QC docs and release notes.

### C. Concrete deliverables checklist (for anti-fake-completion)

For each phase update, include all items below:

1. changed files (absolute or repo-relative paths)
2. commands actually run
3. test/build result (pass/fail + one-line reason)
4. commit hash
5. push result (remote + branch)
6. route list or screenshots
7. blocker + single next action

### D. Quality gates per phase

- **Gate G0 (Setup)**: repo accessible, branch pushable, build command identified.
- **Gate G1 (Docs)**: all five docs exist; each reflects theme-specific navigation + filters + modules.
- **Gate G2 (lungdev MVP)**: required pages load; marker search entry reachable; build passes.
- **Gate G3 (Three-site expansion)**: no one-template narrative reuse; per-site filter schema differs.
- **Gate G4 (Acceptance)**: evidence package complete and reproducible.

