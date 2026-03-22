const COMMON = {
  light: {
    surface: '#FFFFFF',
    background: '#F8FAFC',
    textPrimary: '#0F172A',
    textSecondary: '#334155',
    onPrimary: '#FFFFFF'
  },
  dark: {
    surface: '#0F172A',
    background: '#020617',
    textPrimary: '#E2E8F0',
    textSecondary: '#94A3B8',
    onPrimary: '#020617'
  }
};

export const themeTokens = {
  red: {
    label: 'Red',
    light: { primary: '#DC2626', primaryHover: '#B91C1C', primarySoft: '#FEE2E2', accent: '#EF4444', border: '#FCA5A5' },
    dark: { primary: '#F87171', primaryHover: '#FCA5A5', primarySoft: '#7F1D1D', accent: '#FCA5A5', border: '#7F1D1D' }
  },
  orange: {
    label: 'Orange',
    light: { primary: '#EA580C', primaryHover: '#C2410C', primarySoft: '#FFEDD5', accent: '#F97316', border: '#FDBA74' },
    dark: { primary: '#FB923C', primaryHover: '#FDBA74', primarySoft: '#7C2D12', accent: '#FDBA74', border: '#7C2D12' }
  },
  yellow: {
    label: 'Yellow',
    light: { primary: '#CA8A04', primaryHover: '#A16207', primarySoft: '#FEF9C3', accent: '#EAB308', border: '#FDE047' },
    dark: { primary: '#FACC15', primaryHover: '#FDE047', primarySoft: '#713F12', accent: '#FDE047', border: '#713F12' }
  },
  green: {
    label: 'Green',
    light: { primary: '#16A34A', primaryHover: '#15803D', primarySoft: '#DCFCE7', accent: '#22C55E', border: '#86EFAC' },
    dark: { primary: '#4ADE80', primaryHover: '#86EFAC', primarySoft: '#14532D', accent: '#86EFAC', border: '#14532D' }
  },
  blue: {
    label: 'Blue',
    light: { primary: '#2563EB', primaryHover: '#1D4ED8', primarySoft: '#DBEAFE', accent: '#0EA5E9', border: '#93C5FD' },
    dark: { primary: '#60A5FA', primaryHover: '#93C5FD', primarySoft: '#1E3A8A', accent: '#38BDF8', border: '#1E3A8A' }
  },
  purple: {
    label: 'Purple',
    light: { primary: '#7C3AED', primaryHover: '#6D28D9', primarySoft: '#EDE9FE', accent: '#A855F7', border: '#C4B5FD' },
    dark: { primary: '#A78BFA', primaryHover: '#C4B5FD', primarySoft: '#4C1D95', accent: '#C084FC', border: '#4C1D95' }
  },
  pink: {
    label: 'Pink',
    light: { primary: '#DB2777', primaryHover: '#BE185D', primarySoft: '#FCE7F3', accent: '#EC4899', border: '#F9A8D4' },
    dark: { primary: '#F472B6', primaryHover: '#F9A8D4', primarySoft: '#831843', accent: '#F9A8D4', border: '#831843' }
  },
  brown: {
    label: 'Brown',
    light: { primary: '#92400E', primaryHover: '#78350F', primarySoft: '#F5E6D3', accent: '#B45309', border: '#D6A87C' },
    dark: { primary: '#D6A87C', primaryHover: '#E7C6A1', primarySoft: '#451A03', accent: '#E7C6A1', border: '#451A03' }
  },
  gray: {
    label: 'Gray',
    light: { primary: '#475569', primaryHover: '#334155', primarySoft: '#E2E8F0', accent: '#64748B', border: '#CBD5E1' },
    dark: { primary: '#94A3B8', primaryHover: '#CBD5E1', primarySoft: '#1E293B', accent: '#CBD5E1', border: '#1E293B' }
  },
  bw: {
    label: 'Black/White',
    light: { primary: '#111111', primaryHover: '#000000', primarySoft: '#F1F5F9', accent: '#525252', border: '#D4D4D4' },
    dark: { primary: '#F5F5F5', primaryHover: '#FFFFFF', primarySoft: '#111111', accent: '#A3A3A3', border: '#262626' }
  }
};

export function cssVarsFor(themeKey, mode = 'light') {
  const theme = themeTokens[themeKey] ?? themeTokens.blue;
  const safeMode = mode === 'dark' ? 'dark' : 'light';
  const merged = { ...COMMON[safeMode], ...theme[safeMode] };
  const entries = Object.entries(merged).map(([k, v]) => `--${k}: ${v};`);
  entries.push(`--mode: ${safeMode};`);
  return entries.join('\n');
}
