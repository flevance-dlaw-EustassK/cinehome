const hexToHsl = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }

  return [
    Math.round(h),
    Math.round(s * 100),
    Math.round(l * 100)
  ];
};

const colors = {
  background: '#0E0E10',
  surface: '#1A1A1C',
  surfaceElevated: '#1F2937',
  textPrimary: '#FFFFFF',
  textSecondary: '#A0A0A0',
  textMuted: '#6B7280',
  borderSubtle: 'rgba(255, 255, 255, 0.08)',
  accentRed: '#E50914',
  accentRedHover: '#C70616',
  accentRedLight: '#F58F89'
};

for (const [key, value] of Object.entries(colors)) {
  if (value.startsWith('rgba')) {
    console.log(`${key}: ${value}`);
  } else {
    const [h, s, l] = hexToHsl(value);
    console.log(`${key}: hsl(${h}, ${s}%, ${l}%)`);
  }
}