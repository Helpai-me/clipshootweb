export const tokens = {
  colors: {
    // Brand colors (from icon.png gradient)
    brand: {
      magenta: '#EC4899',
      coral: '#F97316',
      cyan: '#06B6D4',
      violet: '#8B5CF6',
      purple: '#7C3AED',
      pink: '#E040FB',
    },

    // Base primitives
    base: {
      black: '#000000',
      white: '#FFFFFF',
      gray50: '#FAFAFA',
      gray100: '#F4F4F5',
      gray200: '#E4E4E7',
      gray300: '#D4D4D8',
      gray400: '#A1A1AA',
      gray500: '#71717A',
      gray600: '#52525B',
      gray700: '#3F3F46',
      gray800: '#27272A',
      gray900: '#18181B',
      gray950: '#09090B',
    },

    // Neumorphic surfaces (dark mode)
    surface: {
      base: '#08080C',
      raised: '#0F0F14',
      overlay: '#16161D',
      highlight: '#1E1E26',
      line: 'rgba(255, 255, 255, 0.06)',
      lineLight: 'rgba(255, 255, 255, 0.1)',
    },

    // Semantic colors
    semantic: {
      background: '#08080C',
      surface: '#0F0F14',
      surfaceElevated: '#16161D',
      text: '#FAFAFA',
      textSecondary: '#A1A1AA',
      textTertiary: '#52525B',
      primary: '#EC4899',
      secondary: '#1466b2ff',
      accent: '#06B6D4',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      line: 'rgba(255, 255, 255, 0.06)',
      glass: 'rgba(15, 15, 20, 0.8)',
      glassLight: 'rgba(255, 255, 255, 0.03)',
    },
  },

  gradients: {
    // Brand gradients
    brandPrimary: ['#EC4899', '#1662f9ff'],
    brandCool: ['#06B6D4', '#8B5CF6'],
    brandFull: ['#EC4899', '#F97316', '#06B6D4'],
    brandDark: ['#7C3AED', '#EC4899'],
    sunset: ['#F97316', '#EC4899', '#8B5CF6'],

    // Background gradients (Screencut-style)
    purple: ['#8B5CF6', '#EC4899'],
    ocean: ['#06B6D4', '#3B82F6'],
    aurora: ['#10B981', '#06B6D4', '#8B5CF6'],
    midnight: ['#0F0F14', '#08080C'],
    premium: ['#7C3AED', '#EC4899', '#F97316'],
    neon: ['#E040FB', '#06B6D4'],
    fire: ['#F97316', '#EF4444'],
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    huge: '64px',
  },

  radius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
    full: '9999px',
  },

  typography: {
    fonts: {
      regular: 'System',
      medium: 'System',
      bold: 'System',
    },
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
      huge: 32,
      display: 40,
    },
    weights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },

  shadows: {
    // Neumorphic shadows for dark mode
    neumorphic: {
      light: {
        shadowColor: '#FFFFFF',
        shadowOffset: { width: -3, height: -3 },
        shadowOpacity: 0.02,
        shadowRadius: 6,
        elevation: 2,
      },
      dark: {
        shadowColor: '#000000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 4,
      },
    },

    // Standard shadows
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.4,
      shadowRadius: 16,
      elevation: 8,
    },

    // Glow effects
    glow: {
      primary: {
        shadowColor: '#EC4899',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 6,
      },
      accent: {
        shadowColor: '#06B6D4',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
      },
    },
  },

  motion: {
    duration: {
      fast: 150,
      normal: 250,
      slow: 400,
    },
    easing: 'ease-out',
  },

  opacity: {
    subtle: '0.7',
    muted: '0.5',
    glass: '0.8',
    overlay: '0.6',
  },

  blur: {
    sm: '4px',
    md: '10px',
    lg: '20px',
    xl: '30px',
  },

  zIndex: {
    base: '0',
    dock: '10',
    toolbar: '20',
    overlay: '50',
    modal: '100',
    toast: '500',
  },
};

export type Tokens = typeof tokens;
