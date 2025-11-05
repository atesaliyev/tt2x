export const GAMING_COLORS = {
  background: {
    primary: '#0a0a0a',
    secondary: '#141416', // Slightly lighter for corporate feel
    card: '#1a1a1c', // Increased brightness for professionalism
  },
  
  corporate: {
    surface: '#1a1a1c',
    border: '#2a2a2a',
    borderSubtle: '#1f1f1f',
    accentIntensity: 0.7, // Reduced from 1.0 for subtlety
    glowStrength: 0, // No glow for corporate look
  },
  
  accents: {
    magenta: {
      from: '#ec4899',
      to: '#f472b6',
      gradient: 'from-pink-500 to-pink-400',
      gradientSubtle: 'from-pink-500/70 to-pink-400/70', // Corporate version
    },
    orange: {
      from: '#f97316',
      to: '#fb923c',
      gradient: 'from-orange-500 to-orange-400',
      gradientSubtle: 'from-orange-500/70 to-orange-400/70',
    },
    green: {
      from: '#10b981',
      to: '#34d399',
      gradient: 'from-emerald-500 to-emerald-400',
      gradientSubtle: 'from-emerald-500/70 to-emerald-400/70',
    },
    cyan: {
      from: '#06b6d4',
      to: '#22d3ee',
      gradient: 'from-cyan-500 to-cyan-400',
      gradientSubtle: 'from-cyan-500/70 to-cyan-400/70',
    },
    purple: {
      from: '#8b5cf6',
      to: '#a78bfa',
      gradient: 'from-violet-500 to-violet-400',
      gradientSubtle: 'from-violet-500/70 to-violet-400/70',
    },
  },
  
  platformColors: {
    tiktok: 'magenta',
    instagram: 'magenta',
    facebook: 'cyan',
    spotify: 'green',
    youtube: 'orange',
    twitter: 'cyan',
    discord: 'purple',
    telegram: 'cyan',
    whatsapp: 'green',
    pubg: 'orange',
    valorant: 'magenta',
    roblox: 'orange',
    freefire: 'orange',
    'counter-strike': 'orange',
    fortnite: 'cyan',
  },
} as const;

export type AccentColor = keyof typeof GAMING_COLORS.accents;
export type Platform = keyof typeof GAMING_COLORS.platformColors;

export function getPlatformAccent(platform: string): AccentColor {
  const normalized = platform.toLowerCase().replace(/\s+/g, '-');
  return GAMING_COLORS.platformColors[normalized as Platform] || 'magenta';
}
