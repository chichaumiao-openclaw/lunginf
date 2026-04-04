export const DATA_VERSION = '2026-04-04.lunginf-mvp.v1';
export const DETERMINISTIC_SEED = 20260404;

export const siteMeta = {
  siteId: 'lunginf',
  label: 'lunginf',
  title: 'Lung Infection Atlas',
  githubPagesUrl: 'https://chichaumiao-openclaw.github.io/lunginf/',
  customDomain: 'lunginf.gznl.org',
  strapline:
    'A single-cell database of lung infectious diseases across pathogens, disease states, and host immune responses.',
  heroIntro:
    'Track healthy-versus-infected shifts in epithelial, stromal, and immune compartments across viral, bacterial, fungal, and repair-associated lung programs.',
  mission:
    'Build a disease-focused resource for studying how lung cell states, immune responses, and tissue programs change across infectious conditions.',
  release: 'Prototype release 0.1',
  coverage: 'Healthy reference plus infection-response MVP',
  focus:
    'Pathogen classes, immune remodeling, inflammatory signaling, and healthy-versus-infected comparisons.',
  defaultTheme: 'lunginf'
};

export const databasePortfolio = [
  {
    id: 'lungdev',
    label: 'lungdev',
    axis: 'Development',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lungdev/',
    customDomain: 'lungdev.gznl.org',
    summary: 'Stage-resolved developmental atlas from early fetal lung to mature adulthood.'
  },
  {
    id: 'lunginf',
    label: 'lunginf',
    axis: 'Infection / inflammation',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lunginf/',
    customDomain: 'lunginf.gznl.org',
    summary: 'Host response, pathogen-specific remodeling, and injury-repair programs.'
  },
  {
    id: 'lungcancer',
    label: 'lungcancer',
    axis: 'Cancer',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lungcancer/',
    customDomain: 'lungcancer.gznl.org',
    summary: 'Malignant ecosystems, microenvironment remodeling, and clinical heterogeneity.'
  },
  {
    id: 'lungevo',
    label: 'lungevo',
    axis: 'Evolution',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lungevo/',
    customDomain: 'lungevo.gznl.org',
    summary: 'Cross-species respiratory programs, homology, and lineage innovation.'
  }
];

export const navigationItems = [
  { id: 'home', label: 'Home', kicker: 'Infection program overview' },
  { id: 'conditions', label: 'Conditions', kicker: 'Healthy to infected comparison' },
  { id: 'immune-states', label: 'Immune States', kicker: 'Host-response remodeling' },
  { id: 'signals', label: 'Signals', kicker: 'Inflammatory modules and marker search' },
  { id: 'datasets', label: 'Datasets', kicker: 'Release scope and provenance' },
  { id: 'about', label: 'About', kicker: 'Mission, boundaries, and roadmap' }
];

export const conditionBackbone = [
  {
    rank: 1,
    id: 'healthy',
    label: 'Healthy',
    color: '#3b82f6',
    ink: '#ffffff',
    pathogen: 'Reference state',
    state: 'Control baseline',
    headline: 'Healthy lung tissue anchors all downstream infection comparisons',
    summary:
      'This baseline reference captures alveolar homeostasis, resident macrophage surveillance, and low inflammatory tone before pathogen-driven remodeling.',
    traits: ['Healthy control', 'Resident macrophages', 'Low inflammatory tone'],
    question: 'Which epithelial and immune programs define the healthy comparison frame?'
  },
  {
    rank: 2,
    id: 'viral',
    label: 'Viral',
    color: '#8b5cf6',
    ink: '#ffffff',
    pathogen: 'Viral infection',
    state: 'Interferon-dominant injury',
    headline: 'Antiviral interferon programs dominate early infected airway and immune states',
    summary:
      'Viral conditions emphasize interferon-responsive epithelium, antigen presentation, and inflammatory myeloid recruitment across infected lung compartments.',
    traits: ['Interferon response', 'Antigen presentation', 'Airway injury'],
    question: 'Which host-response modules are shared across viral pneumonias versus virus-specific?'
  },
  {
    rank: 3,
    id: 'bacterial',
    label: 'Bacterial',
    color: '#f97316',
    ink: '#ffffff',
    pathogen: 'Bacterial infection',
    state: 'Neutrophil-rich inflammation',
    headline: 'Bacterial lung infection amplifies acute inflammatory and neutrophil programs',
    summary:
      'Bacterial states prioritize neutrophil influx, chemokine signaling, alveolar macrophage disruption, and epithelial stress linked to tissue damage.',
    traits: ['Neutrophil influx', 'Acute inflammation', 'Barrier disruption'],
    question: 'Which inflammatory circuits distinguish bacterial injury from viral interferon states?'
  },
  {
    rank: 4,
    id: 'fungal',
    label: 'Fungal',
    color: '#ef4444',
    ink: '#ffffff',
    pathogen: 'Fungal infection',
    state: 'Damage and innate defense',
    headline: 'Fungal disease exposes mixed innate defense and tissue-damage programs',
    summary:
      'Fungal conditions highlight myeloid activation, epithelial stress, matrix remodeling, and prolonged inflammatory signaling across damaged lung tissue.',
    traits: ['Innate defense', 'Matrix remodeling', 'Prolonged inflammation'],
    question: 'Which cell states persist in fungal injury and how do they differ from bacterial damage?'
  },
  {
    rank: 5,
    id: 'repair',
    label: 'Repair',
    color: '#22c55e',
    ink: '#052e16',
    pathogen: 'Post-infection recovery',
    state: 'Repair and resolution',
    headline: 'Recovery states capture inflammation resolution and tissue repair programs',
    summary:
      'Repair-associated conditions track epithelial reconstitution, matrix normalization, and macrophage states linked to inflammatory resolution after infection.',
    traits: ['Repair program', 'Resolution macrophages', 'Epithelial recovery'],
    question: 'Which repair-linked states indicate successful recovery rather than chronic inflammation?'
  }
];

export const heroMetrics = [
  { label: 'Condition anchors', value: '5', detail: 'healthy to repair' },
  { label: 'Immune programs', value: '5', detail: 'launch-ready host-response states' },
  { label: 'Signal markers', value: '10', detail: 'searchable inflammatory modules' },
  { label: 'Prototype datasets', value: '5', detail: 'condition-scoped release rows' }
];

export const immuneStateCatalog = [
  {
    name: 'Interferon-dominant antiviral myeloid activation',
    category: 'Shared immune program',
    comparison: 'Healthy -> viral',
    summary:
      'Interferon-responsive monocytes and macrophages expand rapidly under viral injury and reshape antigen-presentation dynamics.',
    evidence:
      'Best anchored by IFITM3, CXCL10, and HLA-DRA enrichment across antiviral conditions.',
    anchors: ['IFITM3', 'CXCL10', 'HLA-DRA']
  },
  {
    name: 'Neutrophil-heavy acute inflammatory recruitment',
    category: 'Pathogen-skewed program',
    comparison: 'Healthy -> bacterial',
    summary:
      'Bacterial lung conditions intensify neutrophil recruitment and chemokine-driven tissue infiltration beyond the typical viral response.',
    evidence:
      'Marked by S100A8, CXCL8, and IL1B-centered acute inflammation.',
    anchors: ['S100A8', 'CXCL8', 'IL1B']
  },
  {
    name: 'Alveolar macrophage disruption and replacement',
    category: 'Cross-condition remodeling',
    comparison: 'Healthy -> infected',
    summary:
      'Resident alveolar macrophage identity erodes during infection as inflammatory monocyte-derived states accumulate.',
    evidence:
      'Useful for comparing resident surveillance loss versus recruited inflammatory dominance.',
    anchors: ['C1QA', 'CSF1R', 'CCL2']
  },
  {
    name: 'Damage-associated stromal and matrix remodeling',
    category: 'Tissue injury program',
    comparison: 'Bacterial / fungal -> repair',
    summary:
      'Matrix-producing stromal states expand during tissue damage and partially normalize during repair-associated resolution.',
    evidence:
      'Tracks structural consequences of infection rather than purely immune recruitment.',
    anchors: ['COL1A1', 'MMP9', 'TIMP1']
  },
  {
    name: 'Repair-linked macrophage and epithelial recovery module',
    category: 'Resolution program',
    comparison: 'Infected -> repair',
    summary:
      'Repair conditions reveal macrophage and epithelial states associated with inflammatory resolution and tissue reconstitution.',
    evidence:
      'Useful for separating recovery trajectories from chronic inflammatory persistence.',
    anchors: ['ARG1', 'MRC1', 'KRT19']
  }
];

export const signalCatalog = [
  {
    gene: 'IFITM3',
    conditionFocus: 'Viral',
    interpretation: 'Antiviral interferon signal',
    compartment: 'Myeloid and epithelium',
    pathway: 'Interferon response',
    summary: 'Highlights interferon-dominant antiviral remodeling across infected immune and epithelial compartments.'
  },
  {
    gene: 'CXCL10',
    conditionFocus: 'Viral',
    interpretation: 'Chemokine recruitment signal',
    compartment: 'Myeloid and stromal',
    pathway: 'Interferon chemotaxis',
    summary: 'Tracks antiviral recruitment pressure and interferon-linked inflammatory amplification.'
  },
  {
    gene: 'IL1B',
    conditionFocus: 'Bacterial',
    interpretation: 'Acute inflammatory cytokine',
    compartment: 'Inflammatory myeloid cells',
    pathway: 'Innate inflammatory signaling',
    summary: 'Captures acute injury-associated cytokine activity that often exceeds viral baseline inflammation.'
  },
  {
    gene: 'CXCL8',
    conditionFocus: 'Bacterial',
    interpretation: 'Neutrophil recruitment signal',
    compartment: 'Myeloid and stressed epithelium',
    pathway: 'Neutrophil chemotaxis',
    summary: 'Supports condition-level comparison of neutrophil-dominant bacterial responses.'
  },
  {
    gene: 'S100A8',
    conditionFocus: 'Bacterial',
    interpretation: 'Myeloid inflammatory stress marker',
    compartment: 'Inflammatory myeloid cells',
    pathway: 'Damage-associated inflammation',
    summary: 'Often marks highly inflamed infiltrating innate states in bacterial lung injury.'
  },
  {
    gene: 'TNF',
    conditionFocus: 'Bacterial / fungal',
    interpretation: 'Broad inflammatory cytokine',
    compartment: 'Myeloid compartment',
    pathway: 'TNF signaling',
    summary: 'Useful for comparing acute pathogen-driven inflammatory burden across multiple infected states.'
  },
  {
    gene: 'CCL2',
    conditionFocus: 'Healthy -> infected',
    interpretation: 'Monocyte recruitment cue',
    compartment: 'Macrophage and stromal states',
    pathway: 'Monocyte chemotaxis',
    summary: 'Helps quantify recruited inflammatory replacement of resident surveillance states.'
  },
  {
    gene: 'HLA-DRA',
    conditionFocus: 'Viral',
    interpretation: 'Antigen-presentation marker',
    compartment: 'Antigen-presenting immune cells',
    pathway: 'Adaptive priming',
    summary: 'Marks immune states involved in antiviral antigen presentation and cross-talk.'
  },
  {
    gene: 'MMP9',
    conditionFocus: 'Fungal / repair',
    interpretation: 'Matrix-remodeling signal',
    compartment: 'Myeloid and stromal states',
    pathway: 'Tissue damage and repair',
    summary: 'Links infection-driven tissue damage to later structural repair dynamics.'
  },
  {
    gene: 'ARG1',
    conditionFocus: 'Repair',
    interpretation: 'Resolution-associated macrophage marker',
    compartment: 'Repair-linked macrophages',
    pathway: 'Inflammation resolution',
    summary: 'Highlights the transition from inflammatory injury toward repair-associated immune states.'
  }
];

export const signalSearchSuggestions = ['IFITM3', 'CXCL10', 'IL1B', 'S100A8', 'ARG1'];

export const datasetReleases = [
  {
    id: 'LI-DS-001',
    title: 'Healthy adult lung immune reference',
    conditionScope: 'Healthy control',
    structure: 'Alveolar and airway tissue',
    cells: '44,800 cells',
    assays: 'scRNA-seq',
    status: 'Prototype metadata',
    note: 'Reference baseline for comparing infected tissue remodeling and resident immune homeostasis.'
  },
  {
    id: 'LI-DS-002',
    title: 'Viral pneumonia host-response atlas',
    conditionScope: 'Viral infection',
    structure: 'Inflamed airway and distal lung',
    cells: '52,300 cells',
    assays: 'scRNA-seq + clinical severity metadata',
    status: 'Prototype metadata',
    note: 'Anchors interferon-rich epithelial and immune response modules under viral injury.'
  },
  {
    id: 'LI-DS-003',
    title: 'Bacterial pneumonia inflammatory panel',
    conditionScope: 'Bacterial infection',
    structure: 'Airspace and tissue injury compartments',
    cells: '39,600 cells',
    assays: 'scRNA-seq',
    status: 'Prototype metadata',
    note: 'Supports neutrophil-heavy inflammatory and barrier-disruption comparisons.'
  },
  {
    id: 'LI-DS-004',
    title: 'Fungal lung injury single-cell reference',
    conditionScope: 'Fungal infection',
    structure: 'Damaged distal and stromal tissue',
    cells: '33,900 cells',
    assays: 'scRNA-seq + pathology anchors',
    status: 'Prototype metadata',
    note: 'Captures prolonged innate defense and tissue-damage programs under fungal disease.'
  },
  {
    id: 'LI-DS-005',
    title: 'Post-infection repair and resolution cohort',
    conditionScope: 'Repair / recovery',
    structure: 'Recovering airway and alveolar tissue',
    cells: '28,400 cells',
    assays: 'scRNA-seq',
    status: 'Prototype metadata',
    note: 'Frames resolution macrophages, epithelial repair, and recovery-linked tissue remodeling.'
  }
];

export const evidenceHighlights = [
  { label: 'Condition anchors', value: '5', detail: 'healthy, viral, bacterial, fungal, repair' },
  { label: 'Primary filters', value: '6', detail: 'pathogen, condition, severity, acute/chronic, cell type, dataset' },
  { label: 'Signal programs', value: '5', detail: 'interferon, neutrophil, macrophage, stromal, repair' },
  { label: 'Assumption notes', value: '5', detail: 'each release states condition framing and current prototype evidence scope' }
];

export const coreQuestions = [
  'How do lung cell states shift across viral, bacterial, and fungal infection contexts?',
  'Which immune response modules are shared across infections and which are pathogen-skewed?',
  'How do infected lungs differ from healthy lungs in epithelial, stromal, and immune compartments?',
  'Which programs appear linked to inflammation, tissue damage, recovery, and repair rather than pathogen identity alone?'
];

export const targetUsers = [
  'Infectious disease researchers',
  'Immunologists',
  'Pulmonary researchers',
  'Translational scientists'
];

export const scopeBoundaries = [
  'The MVP focuses on infectious and inflammatory lung conditions rather than cancer or developmental biology.',
  'Healthy reference and repair-associated states are included to support comparison, not to replace broad normal-lung atlases.',
  'Current condition groups are prototype anchors rather than a comprehensive ontology of all lung infections.'
];

export const metadataPriorities = [
  'Pathogen type',
  'Disease condition',
  'Severity',
  'Acute or chronic',
  'Cell type',
  'Immune program',
  'Inflammatory signature',
  'Dataset / source'
];

export const methodsResources = [
  {
    title: 'Healthy-versus-infected comparison notes',
    detail: 'Summarizes how the MVP distinguishes baseline lung states from pathogen-driven remodeling.'
  },
  {
    title: 'Immune response module guide',
    detail: 'Defines the launch immune programs used to compare antiviral, antibacterial, fungal, and repair-linked states.'
  },
  {
    title: 'Condition provenance cards',
    detail: 'Expose dataset scope, assay footprint, and condition-level interpretation limits for each release.'
  }
];

export const provenanceHistory = [
  '2026-03-18 four-database scientific program defined',
  '2026-04-04 lunginf selected for prototype implementation',
  '2026-04-04 lunginf infection-first MVP workspace created'
];

export const routeCopy = {
  home: {
    eyebrow: 'Infection axis',
    title: 'Compare healthy lung reference states with pathogen-driven remodeling',
    description:
      'Use the homepage to orient around condition anchors, host immune states, inflammatory signaling, and release-scoped infection datasets.'
  },
  conditions: {
    eyebrow: 'Condition browser',
    title: 'Healthy, viral, bacterial, fungal, and repair-associated lung conditions',
    description:
      'Browse the infection axis through condition anchors that distinguish pathogen type, tissue injury, and recovery-linked remodeling.'
  },
  'immune-states': {
    eyebrow: 'Immune landscape',
    title: 'Immune state remodeling across infection contexts',
    description:
      'Inspect which myeloid, lymphoid, and repair-associated states are shared, intensified, or condition-skewed across infected lungs.'
  },
  signals: {
    eyebrow: 'Signal explorer',
    title: 'Inflammatory and repair signal modules',
    description:
      'Use the signal catalog to connect genes, pathways, and condition-linked inflammatory programs without flattening disease context.'
  },
  datasets: {
    eyebrow: 'Condition releases',
    title: 'Datasets, provenance, and infection framing',
    description:
      'Review the current prototype condition datasets, their assay scope, and the explicit comparison logic behind the infection portal.'
  },
  about: {
    eyebrow: 'Mission and scope',
    title: 'Why lunginf exists inside the four-database program',
    description:
      'Clarify the scientific mission, target users, scope boundaries, and how lunginf stays distinct from development, cancer, and evolution portals.'
  }
};

export const bundleCrossLinks = {
  home: [
    {
      siteId: 'lungdev',
      route: 'atlas',
      title: 'Anchor infection changes against normal lung development',
      summary: 'Use the developmental atlas to separate injury-linked remodeling from stage-resolved normal structure.'
    },
    {
      siteId: 'lungcancer',
      route: 'clinical',
      title: 'Compare inflammatory remodeling with clinically stratified tumor ecosystems',
      summary: 'Use the clinical route to ask which immune and stromal shifts are shared between infection and cancer contexts.'
    },
    {
      siteId: 'lungevo',
      route: 'programs',
      title: 'Check whether inflammatory modules intersect conserved respiratory programs',
      summary: 'Move into the comparative program view to ask which defense and repair signals are deeply retained.'
    }
  ],
  conditions: [
    {
      siteId: 'lungdev',
      route: 'atlas',
      title: 'Compare healthy and infected lungs against developmental stage structure',
      summary: 'Use developmental stage views to keep normal tissue maturation visible while reading infection UMAP shifts.'
    },
    {
      siteId: 'lungcancer',
      route: 'subtypes',
      title: 'Contrast infection conditions with cancer subtype ecosystems',
      summary: 'Use subtype-centered tumor views to separate malignant remodeling from pathogen-driven tissue injury.'
    }
  ],
  'immune-states': [
    {
      siteId: 'lungcancer',
      route: 'clinical',
      title: 'Compare immune remodeling in infection and cancer',
      summary: 'Jump to the clinical route to contrast infection-linked immune activation with therapy, stage, and progression contexts.'
    },
    {
      siteId: 'lungdev',
      route: 'lineages',
      title: 'Relate immune-state expansion to developmental maturation logic',
      summary: 'Use lineage tracks to keep developmental origins visible when interpreting macrophage, lymphoid, and repair programs.'
    }
  ],
  signals: [
    {
      siteId: 'lungcancer',
      route: 'biomarkers',
      title: 'Cross-check inflammatory modules with tumor biomarker programs',
      summary: 'Compare infection-linked signals with malignant, immune, and stromal biomarkers in lung cancer.'
    },
    {
      siteId: 'lungevo',
      route: 'orthologs',
      title: 'Check which injury-response genes stay interpretable across species',
      summary: 'Use ortholog markers to see whether inflammatory and repair genes map cleanly across the evolution portal.'
    }
  ],
  datasets: [
    {
      siteId: 'lungdev',
      route: 'datasets',
      title: 'Inspect the development release table',
      summary: 'Compare infection dataset framing with stage-resolved normal development releases.'
    },
    {
      siteId: 'lungcancer',
      route: 'datasets',
      title: 'Inspect the cancer cohort release table',
      summary: 'Use the cancer dataset route to compare cohort-centric provenance against condition-centric infection releases.'
    }
  ],
  about: [
    {
      siteId: 'lungdev',
      route: 'home',
      title: 'See how development stays normal-first',
      summary: 'The developmental axis organizes the shared shell around time, maturation, and lineage emergence rather than disease.'
    },
    {
      siteId: 'lungcancer',
      route: 'home',
      title: 'See how cancer centers malignant ecosystems instead of infection',
      summary: 'The cancer axis uses subtype, treatment, and microenvironment logic rather than pathogen class or severity.'
    },
    {
      siteId: 'lungevo',
      route: 'home',
      title: 'See how evolution makes homology the primary entry point',
      summary: 'The evolution axis stays comparative, using species anchors and homolog assumptions instead of disease-state comparison.'
    }
  ]
};

export const launchChecklist = [
  'Route-complete MVP across home, conditions, immune-states, signals, datasets, and about',
  'Infection-first homepage narrative tied to condition anchors and host-response modules',
  'Searchable inflammatory signal catalog with condition-aware interpretation',
  'Condition-scoped dataset table with provenance and evidence framing',
  'Cross-linked bundle metadata, mobile nav shell, and custom-domain deployment wiring',
  'Build and regression checks updated for lunginf'
];
