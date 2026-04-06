// Yiting Lin Portfolio - Pantone Color Theme
// Centralized color configuration for easy updates

export const pantone = {
  // Primary Blues - Depth & Tech Foundation
  deepBlue: '#2E7091',      // Pantone 17-4427 - Ocean depth, primary background
  navyBlue: '#1F305E',      // Pantone 19-4052 - Dark navy, main backgrounds
  slateBlue: '#263238',     // Pantone 19-4038 - Dark slate, cards & sections

  // Accent Golds - Futuristic Highlights
  brightGold: '#F1C40F',    // Pantone 14-0837 - Vibrant gold, CTAs & highlights
  bronzeGold: '#9C6A3B',    // Pantone 18-1160 - Muted bronze, secondary accents
};

// Gradient presets using theme colors
export const gradients = {
  hero: 'linear-gradient(135deg, #1F305E 0%, #2E7091 50%, #263238 100%)',
  goldAccent: 'linear-gradient(135deg, #F1C40F 0%, #9C6A3B 100%)',
  cardBg: 'linear-gradient(145deg, rgba(38, 50, 56, 0.9) 0%, rgba(31, 48, 94, 0.8) 100%)',
};

// Semantic color mappings
export const theme = {
  bg: {
    primary: pantone.navyBlue,
    secondary: pantone.slateBlue,
    accent: pantone.deepBlue,
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#E0E0E0',
    muted: '#9CA3AF',
    gold: pantone.brightGold,
  },
  accent: {
    primary: pantone.brightGold,
    secondary: pantone.bronzeGold,
    hover: '#D4A900',
  },
  border: {
    subtle: 'rgba(241, 196, 15, 0.2)',
    strong: 'rgba(241, 196, 15, 0.4)',
  }
};

export default theme;
