import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DATA_VERSION,
  DETERMINISTIC_SEED,
  bundleCrossLinks,
  conditionBackbone,
  databasePortfolio,
  datasetReleases,
  navigationItems,
  provenanceHistory,
  siteMeta,
  signalCatalog
} from '../src/data.js';

test('portfolio exposes the four orthogonal lung database axes', () => {
  assert.equal(databasePortfolio.length, 4);
  assert.deepEqual(
    databasePortfolio.map((site) => site.id),
    ['lungdev', 'lunginf', 'lungcancer', 'lungevo']
  );
  assert.ok(
    databasePortfolio.every(
      (site) => /^https:\/\/chichaumiao-openclaw\.github\.io\/lung/.test(site.url) && /\.gznl\.org$/.test(site.customDomain)
    )
  );
});

test('lunginf navigation uses the planned MVP routes', () => {
  assert.deepEqual(
    navigationItems.map((item) => item.id),
    ['home', 'conditions', 'immune-states', 'signals', 'datasets', 'about']
  );
});

test('condition backbone is ordered from healthy reference to repair', () => {
  assert.equal(conditionBackbone.length, 5);
  assert.deepEqual(conditionBackbone.map((condition) => condition.rank), [1, 2, 3, 4, 5]);
  assert.deepEqual(conditionBackbone.map((condition) => condition.label), [
    'Healthy',
    'Viral',
    'Bacterial',
    'Fungal',
    'Repair'
  ]);
});

test('signal catalog exposes searchable inflammatory markers', () => {
  assert.ok(signalCatalog.length >= 10);
  assert.ok(
    signalCatalog.every(
      (signal) =>
        signal.gene &&
        signal.conditionFocus &&
        signal.interpretation &&
        signal.compartment &&
        signal.pathway
    )
  );
});

test('dataset releases describe condition scope, assay, and scale', () => {
  assert.ok(
    datasetReleases.every(
      (dataset) => dataset.id && dataset.conditionScope && dataset.assays && dataset.cells && dataset.structure
    )
  );
});

test('site metadata identifies the lunginf workspace', () => {
  assert.equal(siteMeta.siteId, 'lunginf');
  assert.equal(siteMeta.defaultTheme, 'lunginf');
  assert.equal(siteMeta.githubPagesUrl, 'https://chichaumiao-openclaw.github.io/lunginf/');
  assert.equal(siteMeta.customDomain, 'lunginf.gznl.org');
});

test('bundle cross-links cover the route-level infection entry points', () => {
  assert.deepEqual(Object.keys(bundleCrossLinks), ['home', 'conditions', 'immune-states', 'signals', 'datasets', 'about']);
  assert.ok(bundleCrossLinks.conditions.some((link) => link.siteId === 'lungdev' && link.route === 'atlas'));
  assert.ok(bundleCrossLinks.signals.some((link) => link.siteId === 'lungcancer' && link.route === 'biomarkers'));
});

test('provenance history is chronological', () => {
  const dates = provenanceHistory.map((event) => event.slice(0, 10));
  const sorted = [...dates].sort();
  assert.deepEqual(dates, sorted);
});

test('data versioning metadata is present for reproducibility', () => {
  assert.match(DATA_VERSION, /^\d{4}-\d{2}-\d{2}\./);
  assert.equal(DETERMINISTIC_SEED, 20260404);
});
