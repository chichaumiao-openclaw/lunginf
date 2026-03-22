import { cssVarsFor } from './theme.js';
import { renderGlobalSearch } from './modules.js';
import { siteConfig } from './site-content.js';
import { normalizeRoute, routeFromHash } from './router.js';

let route = routeFromHash(window.location.hash);
let mode = 'light';

function setTheme() {
  const styleTag = document.getElementById('theme-vars') ?? document.createElement('style');
  styleTag.id = 'theme-vars';
  styleTag.textContent = `:root { ${cssVarsFor(siteConfig.themeKey, mode)} }`;
  document.head.appendChild(styleTag);
  document.body.setAttribute('data-mode', mode);
}

function metricCards() {
  return siteConfig.metrics.map((item) => `<div><strong>${item.value}</strong><span>${item.label}</span></div>`).join('');
}

function nav() {
  return `<header>
    <div class="black-nav"><a href="#home">${siteConfig.siteName}</a><span>${siteConfig.tagline}</span></div>
    <div class="top-nav">
      <strong>${siteConfig.siteName}</strong>
      <nav>${siteConfig.routes.map((key) => `<button class="nav-btn ${route === key ? 'active' : ''}" data-route="${key}">${siteConfig.navLabels[key]}</button>`).join('')}</nav>
      <div class="theme-controls"><label>Mode<select id="mode-switcher"><option value="light" ${mode === 'light' ? 'selected' : ''}>Light</option><option value="dark" ${mode === 'dark' ? 'selected' : ''}>Dark</option></select></label></div>
    </div>
  </header>`;
}

function homePage() {
  return `<main class="page-home">
    <section class="hero card">
      <div>
        <span class="eyebrow">${siteConfig.hero.eyebrow}</span>
        <h1>${siteConfig.hero.title}</h1>
        <p>${siteConfig.hero.description}</p>
        <div class="actions"><button data-route="conditions">Open conditions</button><button class="ghost" data-route="immune-states">Inspect immune states</button></div>
      </div>
      <div class="hero-metrics">${metricCards()}</div>
    </section>
    <section class="stats-grid">${siteConfig.spotlightCards.map((item) => `<article class="card"><h3>${item.title}</h3><p>${item.text}</p></article>`).join('')}</section>
    <section class="card"><h2>Core modules</h2><div class="stats-grid compact">${siteConfig.moduleCards.map((item) => `<article class="mini-card"><strong>${item.title}</strong><span>${item.text}</span></article>`).join('')}</div></section>
    ${renderGlobalSearch()}
  </main>`;
}

function conditionsPage() {
  return `<main class="page-browse"><section class="card"><h1>Conditions</h1><p>Condition-first browsing across infection, injury, smoke exposure, and chronic inflammatory remodeling.</p></section><section class="stats-grid">${siteConfig.spotlightCards.map((item) => `<article class="card"><h3>${item.title}</h3><p>${item.text}</p></article>`).join('')}</section></main>`;
}

function immuneStatesPage() {
  return `<main class="page-browse"><section class="card"><h1>Immune States</h1><p>Map macrophage, neutrophil, T-cell, and dendritic-cell state transitions across inflammatory contexts.</p></section><section class="stats-grid compact">${siteConfig.moduleCards.map((item) => `<article class="mini-card"><strong>${item.title}</strong><span>${item.text}</span></article>`).join('')}</section></main>`;
}

function signalsPage() {
  return `<main class="page-browse"><section class="card"><h1>Signals</h1><p>Highlight cytokine circuits, interferon programs, chemokine gradients, and repair signaling.</p></section>${renderGlobalSearch()}</main>`;
}
function datasetsPage() { return `<main class="page-browse"><section class="card"><h1>Datasets</h1><ul>${siteConfig.datasets.map((item) => `<li>${item}</li>`).join('')}</ul></section></main>`; }
function aboutPage() { return `<main class="page-browse"><section class="card"><h1>About ${siteConfig.siteName}</h1><p>${siteConfig.about}</p></section></main>`; }

function renderPage() {
  switch (route) {
    case 'conditions': return conditionsPage();
    case 'immune-states': return immuneStatesPage();
    case 'signals': return signalsPage();
    case 'datasets': return datasetsPage();
    case 'about': return aboutPage();
    default: return homePage();
  }
}

function render() {
  setTheme();
  document.body.innerHTML = `${nav()}${renderPage()}`;
  document.querySelectorAll('[data-route]').forEach((node) => node.addEventListener('click', () => { window.location.hash = normalizeRoute(node.getAttribute('data-route')); }));
  document.getElementById('mode-switcher')?.addEventListener('change', (event) => { mode = event.target.value; render(); });
}
window.addEventListener('hashchange', () => { route = routeFromHash(window.location.hash); render(); });
render();
