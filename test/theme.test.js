import test from 'node:test';
import assert from 'node:assert/strict';
import { cssVarsFor, themeTokens } from '../src/theme.js';

test('theme token coverage exists for the four planned databases', () => {
  assert.deepEqual(Object.keys(themeTokens).sort(), ['lungcancer', 'lungdev', 'lungevo', 'lunginf']);
});

test('lunginf light mode exposes expected infection colors', () => {
  const vars = cssVarsFor('lunginf', 'light');
  assert.ok(vars.includes('--primary: #C75B12;'));
  assert.ok(vars.includes('--background: #F5FBFC;'));
  assert.ok(vars.includes('--textPrimary: #11202A;'));
});

test('dark mode keeps shared contrast tokens', () => {
  const vars = cssVarsFor('lungcancer', 'dark');
  assert.ok(vars.includes('--background: #06131A;'));
  assert.ok(vars.includes('--textPrimary: #E5F0F4;'));
  assert.ok(vars.includes('--mode: dark;'));
});

test('dark mode includes onPrimary for button contrast', () => {
  const vars = cssVarsFor('lunginf', 'dark');
  assert.ok(vars.includes('--onPrimary: #041015;'));
});

test('fallback theme resolves to lungdev', () => {
  const vars = cssVarsFor('unknown', 'light');
  assert.ok(vars.includes('--primary: #0E7490;'));
});
