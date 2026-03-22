const ALLOWED_ROUTES = new Set(['home', 'conditions', 'immune-states', 'signals', 'datasets', 'about']);

export function normalizeRoute(value) {
  if (typeof value !== 'string') return 'home';
  const lowered = value.trim().toLowerCase();
  return ALLOWED_ROUTES.has(lowered) ? lowered : 'home';
}

export function routeFromHash(hashValue) {
  if (typeof hashValue !== 'string' || hashValue.length === 0) return 'home';
  const withoutHash = hashValue.startsWith('#') ? hashValue.slice(1) : hashValue;
  return normalizeRoute(withoutHash);
}
