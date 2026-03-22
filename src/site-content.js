export const siteConfig = {
  siteName: 'LungInf',
  tagline: 'Inflammation and infection response atlas for the lung immune ecosystem.',
  themeKey: 'orange',
  routes: ['home', 'conditions', 'immune-states', 'signals', 'datasets', 'about'],
  navLabels: {
    home: 'Home',
    conditions: 'Conditions',
    'immune-states': 'Immune States',
    signals: 'Signals',
    datasets: 'Datasets',
    about: 'About'
  },
  hero: {
    eyebrow: 'Inflammation-focused prototype',
    title: 'Study infection, injury, and immune-state shifts across lung inflammation contexts',
    description:
      'LungInf is structured for condition-centric browsing across pathogen exposure, inflammatory burden, cytokine signaling, and repair transitions.'
  },
  metrics: [
    { label: 'Conditions indexed', value: '14' },
    { label: 'Immune states', value: '52' },
    { label: 'Signal axes', value: '28' },
    { label: 'Reference cohorts', value: '18' }
  ],
  spotlightCards: [
    { title: 'Viral response atlas', text: 'Compare interferon-high epithelial and immune programs across acute infection windows.' },
    { title: 'Sterile injury and repair', text: 'Trace inflammatory-to-repair transitions after injury and regeneration perturbations.' },
    { title: 'Chronic inflammation map', text: 'Aggregate persistent inflammatory remodeling signals across cohorts.' }
  ],
  moduleCards: [
    { title: 'Condition browser', text: 'Browse infection, fibrosis-linked inflammation, smoke exposure, and acute injury contexts.' },
    { title: 'Immune-state panels', text: 'Inspect macrophage, neutrophil, lymphoid, and dendritic-state remodeling.' },
    { title: 'Signal circuits', text: 'Prioritize cytokine, chemokine, and stress-response pathways for comparison.' }
  ],
  datasets: [
    'Acute infection single-cell atlases',
    'Inflammation resolution time-course references',
    'Cytokine perturbation compendia',
    'Immune-state harmonized matrices'
  ],
  about:
    'Prototype for the inflammation and infection response portal in the four-database lung program.'
};
