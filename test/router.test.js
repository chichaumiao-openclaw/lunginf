import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeRoute, routeFromHash } from '../src/router.js';

test('normalizeRoute accepts supported lunginf routes only', () => {
  assert.equal(normalizeRoute('HOME'), 'home');
  assert.equal(normalizeRoute('conditions'), 'conditions');
  assert.equal(normalizeRoute('IMMUNE-STATES'), 'immune-states');
  assert.equal(normalizeRoute('signals'), 'signals');
  assert.equal(normalizeRoute('datasets'), 'datasets');
  assert.equal(normalizeRoute('about'), 'about');
  assert.equal(normalizeRoute('unknown'), 'home');
});

test('routeFromHash parses lunginf hash routes safely', () => {
  assert.equal(routeFromHash('#conditions'), 'conditions');
  assert.equal(routeFromHash('#IMMUNE-STATES'), 'immune-states');
  assert.equal(routeFromHash('#signals'), 'signals');
  assert.equal(routeFromHash(''), 'home');
  assert.equal(routeFromHash('#not-a-route'), 'home');
});
