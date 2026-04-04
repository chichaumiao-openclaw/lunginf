import test from 'node:test';
import assert from 'node:assert/strict';
import {
  renderConditionsPage,
  renderDatasetsPage,
  renderHomePage,
  renderImmuneStatesPage,
  renderSignalsPage
} from '../src/modules.js';

test('home page includes the core lunginf MVP modules', () => {
  const html = renderHomePage();
  const requiredIds = [
    'LI-HERO-001',
    'LI-CONDITION-001',
    'LI-IMMUNE-001',
    'LI-SIGNAL-001',
    'LI-DATASET-001',
    'LI-BRIDGE-001',
    'LI-PORTFOLIO-001'
  ];

  for (const id of requiredIds) {
    assert.ok(html.includes(id), `missing module: ${id}`);
  }

  assert.match(html, /Lung Infection Atlas/);
  assert.match(html, /healthy-versus-infected/i);
  assert.match(html, /Four Lung Database Bundle/);
  assert.match(html, /Open condition browser/);
  assert.match(html, /https:\/\/chichaumiao-openclaw\.github\.io\/lungdev\/#atlas/);
});

test('signals page exposes searchable inflammatory signal UI', () => {
  const html = renderSignalsPage();

  assert.match(html, /Search inflammatory and repair-linked signal modules/);
  assert.match(html, /data-signal-search-root/);
  assert.match(html, /IFITM3/);
  assert.match(html, /ARG1/);
});

test('datasets page includes evidence and provenance rails', () => {
  const html = renderDatasetsPage();

  assert.match(html, /LI-EVIDENCE-001/);
  assert.match(html, /LI-BRIDGE-001/);
  assert.match(html, /Infectious condition release table/);
  assert.match(html, /Healthy adult lung immune reference/);
  assert.match(html, /<table class="data-table">/);
  assert.match(html, /Provenance timeline/);
});

test('conditions page centers on the five-condition comparative backbone', () => {
  const html = renderConditionsPage();

  assert.match(html, /LI-UMAP-001/);
  assert.match(html, /LI-CONDITION-001/);
  assert.match(html, /singlecell-viewer/);
  assert.match(html, /<iframe/);
  assert.match(html, /condition=healthy/);
  assert.match(html, /Healthy/);
  assert.match(html, /Bacterial/);
  assert.match(html, /Fungal/);
  assert.match(html, /Repair/);
  assert.match(html, /Follow complementary routes across the four lung databases/);
});

test('immune states page presents host-response comparison logic', () => {
  const html = renderImmuneStatesPage();

  assert.match(html, /LI-IMMUNE-001/);
  assert.match(html, /Interferon-dominant antiviral myeloid activation/);
  assert.match(html, /Shared immune response does not mean pathogen identity disappears/);
});
