export const GAMING_COLORS = {
  background: {
    primary: '#0a0a0a',
    secondary: '#1a1a1a',
    card: '#1f1f1f',
  },
  
  accents: {
    magenta: {
      from: '#ec4899',
      to: '#f472b6',
      gradient: 'from-pink-500 to-pink-400',
    },
    orange: {
      from: '#f97316',
      to: '#fb923c',
      gradient: 'from-orange-500 to-orange-400',
    },
    green: {
      from: '#10b981',
      to: '#34d399',
      gradient: 'from-emerald-500 to-emerald-400',
    },
    cyan: {
      from: '#06b6d4',
      to: '#22d3ee',
      gradient: 'from-cyan-500 to-cyan-400',
    },
    purple: {
      from: '#8b5cf6',
      to: '#a78bfa',
      gradient: 'from-violet-500 to-violet-400',
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
