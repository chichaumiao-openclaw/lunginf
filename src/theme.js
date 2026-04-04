const COMMON = {
  light: {
    surface: '#FFFFFF',
    surfaceAlt: '#EEF7F7',
    background: '#F5FBFC',
    backgroundStrong: '#DBF0F3',
    textPrimary: '#11202A',
    textSecondary: '#405866',
    onPrimary: '#F7FEFF',
    shadowColor: 'rgba(11, 30, 40, 0.08)'
  },
  dark: {
    surface: '#0B1E28',
    surfaceAlt: '#12303D',
    background: '#06131A',
    backgroundStrong: '#0A1C26',
    textPrimary: '#E5F0F4',
    textSecondary: '#9EB7C0',
    onPrimary: '#041015',
    shadowColor: 'rgba(0, 0, 0, 0.35)'
  }
};

export const themeTokens = {
  lungdev: {
    label: 'Lung Development',
    light: {
      primary: '#0E7490',
      primaryHover: '#0A5A70',
      primarySoft: '#D6F2F7',
      accent: '#22A884',
      accentStrong: '#157A62',
      border: '#9FD3DC',
      heroGlow: 'rgba(34, 168, 132, 0.28)'
    },
    dark: {
      primary: '#72D7F0',
      primaryHover: '#9BE5F7',
      primarySoft: '#103748',
      accent: '#59D6AD',
      accentStrong: '#8FE2C7',
      border: '#1E4E5C',
      heroGlow: 'rgba(89, 214, 173, 0.25)'
    }
  },
  lunginf: {
    label: 'Lung Infection',
    light: {
      primary: '#C75B12',
      primaryHover: '#9D430A',
      primarySoft: '#FCE6D5',
      accent: '#D93A2F',
      accentStrong: '#A52A22',
      border: '#E6B18B',
      heroGlow: 'rgba(217, 58, 47, 0.25)'
    },
    dark: {
      primary: '#F7A15A',
      primaryHover: '#FBC089',
      primarySoft: '#4A2314',
      accent: '#FF7A6D',
      accentStrong: '#FFB2A8',
      border: '#6C3A22',
      heroGlow: 'rgba(255, 122, 109, 0.24)'
    }
  },
  lungcancer: {
    label: 'Lung Cancer',
    light: {
      primary: '#9340D8',
      primaryHover: '#742CB1',
      primarySoft: '#EFDFFD',
      accent: '#D640A2',
      accentStrong: '#A52C7C',
      border: '#D2B2F1',
      heroGlow: 'rgba(214, 64, 162, 0.24)'
    },
    dark: {
      primary: '#D89BFF',
      primaryHover: '#E8BEFF',
      primarySoft: '#311647',
      accent: '#FF82C8',
      accentStrong: '#FFC1E6',
      border: '#54306F',
      heroGlow: 'rgba(255, 130, 200, 0.22)'
    }
  },
  lungevo: {
    label: 'Lung Evolution',
    light: {
      primary: '#2F7D4A',
      primaryHover: '#225B36',
      primarySoft: '#DCEEDB',
      accent: '#6B8E23',
      accentStrong: '#4B6414',
      border: '#B8D2B0',
      heroGlow: 'rgba(107, 142, 35, 0.24)'
    },
    dark: {
      primary: '#8ED09B',
      primaryHover: '#B3E0BC',
      primarySoft: '#17311F',
      accent: '#C7E676',
      accentStrong: '#DDF29E',
      border: '#31503A',
      heroGlow: 'rgba(199, 230, 118, 0.22)'
    }
  }
};

export function cssVarsFor(themeKey, mode = 'light') {
  const theme = themeTokens[themeKey] ?? themeTokens.lungdev;
  const safeMode = mode === 'dark' ? 'dark' : 'light';
  const merged = { ...COMMON[safeMode], ...theme[safeMode] };
  const entries = Object.entries(merged).map(([k, v]) => `--${k}: ${v};`);
  entries.push(`--mode: ${safeMode};`);
  return entries.join('\n');
}
