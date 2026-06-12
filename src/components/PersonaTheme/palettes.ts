export interface Palette {
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  accent: string;
  accentContrast: string;
  border: string;
  shadow: string;
}

export const engineerPalette: Palette = {
  bg: '#0f172a',
  surface: '#1c2840',
  text: '#e6edf6',
  textMuted: '#93a5bd',
  accent: '#38bdf8',
  accentContrast: '#06283d',
  border: '#2b3a55',
  shadow: 'rgba(2, 8, 23, 0.55)',
};

export const humanPalette: Palette = {
  bg: '#fff4f1',
  surface: '#ffffff',
  text: '#43262c',
  textMuted: '#92686f',
  accent: '#e85d75',
  accentContrast: '#ffffff',
  border: '#f4d7d3',
  shadow: 'rgba(151, 71, 89, 0.18)',
};
