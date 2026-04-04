import { cssVarsFor } from './theme.js';
import {
  renderAboutPage,
  renderConditionsPage,
  renderDatasetsPage,
  renderHomePage,
  renderImmuneStatesPage,
  renderSignalsPage,
  initSignalSearch
} from './modules.js';
import { conditionBackbone, databasePortfolio, navigationItems, siteMeta } from './data.js';
import { normalizeRoute, routeFromHash } from './router.js';

let route = routeFromHash(window.location.hash);
let mode = 'light';
let viewerCondition = conditionBackbone[0].id;
let mobileNavOpen = false;

const institutionalLinks = [
  {
    label: 'Home',
    href: 'http://www.gznl.org/',
    icon: './src/assets/header/home.svg'
  },
  {
    label: 'Database',
    href: 'https://www.gznl.org/database/',
    icon: './src/assets/header/database.svg'
  },
  {
    label: 'Research',
    href: 'https://www.gznl.org/research/',
    icon: './src/assets/header/research.svg'
  },
  {
    label: 'About us',
    href: 'https://www.gznl.org/aboutus/',
    icon: './src/assets/header/aboutus.svg'
  },
  {
    label: 'GZNL-RDC',
    href: 'https://gzlab.ac.cn/',
    icon: './src/assets/header/gznl2.svg'
  }
];

function setTheme(modeKey) {
  const styleTag = document.getElementById('theme-vars') ?? document.createElement('style');
  styleTag.id = 'theme-vars';
  styleTag.textContent = `:root { ${cssVarsFor(siteMeta.defaultTheme, modeKey)} }`;
  document.head.appendChild(styleTag);
  document.body.setAttribute('data-mode', modeKey);
}

function currentRouteLabel() {
  return navigationItems.find((item) => item.id === route)?.label ?? 'Home';
}

function bundleHomeHref(site) {
  return `${site.url}#home`;
}

function renderBundleSwitcher() {
  return `<div class="bundle-switcher">
    <div class="bundle-switcher-head">
      <span class="bundle-switcher-title">Lung Database Bundle</span>
      <span class="bundle-domain">${siteMeta.customDomain}</span>
    </div>
    <div class="bundle-links" aria-label="Four lung database bundle switcher">
      ${databasePortfolio
        .map(
          (site) => `<a
            class="bundle-pill ${site.id === siteMeta.siteId ? 'active' : ''}"
            href="${bundleHomeHref(site)}"
            ${site.id === siteMeta.siteId ? 'aria-current="page"' : ''}
          >
            <span class="bundle-pill-label">${site.label}</span>
            <small>${site.axis}</small>
          </a>`
        )
        .join('')}
    </div>
  </div>`;
}

function renderHeader() {
  return `<header class="app-header">
    <div class="institutional-nav">
      ${institutionalLinks
        .map(
          (item) => `<a class="institutional-link" href="${item.href}" target="_blank" rel="noopener noreferrer">
            <img src="${item.icon}" alt="" />
            <span>${item.label}</span>
          </a>`
        )
        .join('')}
    </div>
    <div class="top-nav">
      <div class="brand-block">
        <div class="brand-mark">LI</div>
        <div>
          <p class="eyebrow">Infection axis</p>
          <div class="brand-title">${siteMeta.label}</div>
          <p class="brand-copy">${siteMeta.strapline}</p>
        </div>
      </div>
      <div class="nav-cluster">
        <div class="nav-utility-row">
          ${renderBundleSwitcher()}
          <div class="nav-actions">
            <button type="button" class="ghost mode-toggle" id="mode-switcher">
              ${mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            </button>
            <button
              type="button"
              class="ghost nav-toggle"
              id="nav-menu-toggle"
              aria-expanded="${mobileNavOpen ? 'true' : 'false'}"
              aria-controls="site-navigation"
            >
              ${mobileNavOpen ? 'Close menu' : 'Open menu'}
            </button>
          </div>
        </div>
        <nav class="nav-list ${mobileNavOpen ? 'open' : ''}" id="site-navigation" aria-label="lunginf navigation">
          ${navigationItems
            .map(
              (item) => `<button
                type="button"
                class="nav-btn ${item.id === route ? 'active' : ''}"
                data-route="${item.id}"
                title="${item.kicker}"
                aria-current="${item.id === route ? 'page' : 'false'}"
              >
                <span class="nav-label">${item.label}</span>
                <span class="nav-tooltip" role="tooltip">${item.kicker}</span>
              </button>`
            )
            .join('')}
        </nav>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  return `<footer class="black-footer">
    <div class="black-footer-inner">
      <div class="footer-stack">
        <div class="footer-row">
          <span>© Guangzhou National Laboratory</span>
          <span class="sep">|</span>
          ${institutionalLinks
            .map(
              (item) => `<a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.label}</a>`
            )
            .join('')}
        </div>
        <div class="footer-row footer-bundle">
          <span class="footer-heading">Bundle</span>
          ${databasePortfolio
            .map(
              (site) => `<a href="${bundleHomeHref(site)}" ${site.id === siteMeta.siteId ? 'aria-current="page"' : ''}>${site.label}</a>`
            )
            .join('')}
        </div>
        <div class="footer-row footer-domain">
          <span class="footer-heading">GitHub Pages</span>
          <a href="${siteMeta.githubPagesUrl}" target="_blank" rel="noopener noreferrer">${siteMeta.githubPagesUrl}</a>
          <span class="sep">|</span>
          <span class="footer-heading">Custom domain</span>
          <strong>${siteMeta.customDomain}</strong>
        </div>
      </div>
    </div>
  </footer>`;
}

function pageFor(name) {
  const safeRoute = normalizeRoute(name);
  if (safeRoute === 'conditions') return renderConditionsPage(viewerCondition, mode);
  if (safeRoute === 'immune-states') return renderImmuneStatesPage();
  if (safeRoute === 'signals') return renderSignalsPage();
  if (safeRoute === 'datasets') return renderDatasetsPage();
  if (safeRoute === 'about') return renderAboutPage();
  return renderHomePage();
}

function bindNavigation() {
  document.querySelectorAll('[data-route]').forEach((element) => {
    element.addEventListener('click', () => {
      const nextRoute = normalizeRoute(element.getAttribute('data-route'));
      mobileNavOpen = false;

      if (route === nextRoute && window.location.hash === `#${nextRoute}`) {
        render({ preserveScroll: true });
        return;
      }

      route = nextRoute;
      window.location.hash = route;
    });
  });
}

function bindViewerMessages() {
  if (window.__lunginfViewerListenerBound) return;

  window.addEventListener('message', (event) => {
    const payload = event.data;
    if (!payload || payload.type !== 'lunginf-condition-change') return;
    if (!conditionBackbone.some((condition) => condition.id === payload.condition)) return;
    viewerCondition = payload.condition;
  });

  window.__lunginfViewerListenerBound = true;
}

function bindModeToggle() {
  document.getElementById('mode-switcher')?.addEventListener('click', () => {
    mode = mode === 'light' ? 'dark' : 'light';
    render({ preserveScroll: true });
  });
}

function bindMenuToggle() {
  document.getElementById('nav-menu-toggle')?.addEventListener('click', () => {
    mobileNavOpen = !mobileNavOpen;
    render({ preserveScroll: true });
  });
}

function render(options = {}) {
  const { preserveScroll = false } = options;
  const previousScrollX = window.scrollX;
  const previousScrollY = window.scrollY;

  setTheme(mode);
  document.title = `${siteMeta.label} | ${currentRouteLabel()}`;
  document.getElementById('app').innerHTML = `${renderHeader()}${pageFor(route)}${renderFooter()}`;

  bindNavigation();
  bindViewerMessages();
  bindModeToggle();
  bindMenuToggle();
  initSignalSearch();

  if (preserveScroll) {
    requestAnimationFrame(() => window.scrollTo(previousScrollX, previousScrollY));
  }
}

window.addEventListener('hashchange', () => {
  route = routeFromHash(window.location.hash);
  mobileNavOpen = false;
  render();
});

render();
