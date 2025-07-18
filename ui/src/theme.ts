import { createTheme } from "@mui/material/styles";

// Minnesota Sports Team Color Palette
export const mnColors = {
  // MN United Colors
  loonGray: '#8CD2EF',
  unitedDarkBlue: '#263E68',
  unitedLightGray: '#EEEEEE',
  
  // Vikings Colors (Updated with ABE purple)
  vikingsPurple: '#412A91', // Updated to match ABE image
  vikingsGold: '#FFC62F',
  vikingsWhite: '#FFFFFF',
  
  // Twins Colors
  twinsNavy: '#002B5C',
  twinsRed: '#C6011F',
  twinsGold: '#CFAB7A',
  
  // Additional shades for better theming
  lightBackground: '#FAFAFA',
  darkBackground: '#121212',
  mediumGray: '#666666',
  lightGray: '#AAAAAA',
  darkGray: '#333333',
};

// Theme configuration for light and dark modes
export const mnThemeConfig = {
  light: {
    primary: mnColors.vikingsPurple,
    secondary: mnColors.twinsRed,
    accent: mnColors.loonGray,
    background: {
      default: mnColors.lightBackground,
      paper: mnColors.unitedLightGray,
    },
    text: {
      primary: mnColors.twinsNavy,
      secondary: mnColors.mediumGray,
    },
    socialIcons: {
      default: mnColors.unitedLightGray,
      hover: mnColors.vikingsPurple,
      shadow: mnColors.loonGray,
    },
    footer: {
      background: mnColors.vikingsPurple,
      text: mnColors.vikingsWhite,
    }
  },
  dark: {
    primary: mnColors.loonGray,
    secondary: mnColors.vikingsGold,
    accent: mnColors.twinsGold,
    background: {
      default: mnColors.darkBackground,
      paper: mnColors.darkGray,
    },
    text: {
      primary: mnColors.vikingsWhite,
      secondary: mnColors.lightGray,
    },
    socialIcons: {
      default: mnColors.unitedLightGray,
      hover: mnColors.loonGray,
      shadow: mnColors.vikingsPurple,
    },
    footer: {
      background: mnColors.vikingsPurple,
      text: mnColors.vikingsWhite,
    }
  }
};

// Function to create theme based on mode
export const createMnTheme = (mode: 'light' | 'dark') => {
  const config = mnThemeConfig[mode];
  return createTheme({
    palette: {
      mode,
      primary: { main: config.primary },
      secondary: { main: config.secondary },
      background: config.background,
      text: config.text,
    },
    shape: {
      borderRadius: 4, // Less aggressive, subtle rounding
    },
    typography: {
      fontFamily: [
        'Inter',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: {
        fontWeight: 700,
        fontSize: '2.5rem',
        letterSpacing: '-0.02em',
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 700,
        fontSize: '2rem',
        letterSpacing: '-0.01em',
        lineHeight: 1.25,
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.3,
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.35,
      },
      h5: {
        fontWeight: 500,
        fontSize: '1.1rem',
        lineHeight: 1.4,
      },
      h6: {
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 1.4,
      },
      body1: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.7,
      },
      body2: {
        fontWeight: 400,
        fontSize: '0.95rem',
        lineHeight: 1.6,
      },
      button: {
        fontWeight: 600,
        borderRadius: 12,
        textTransform: 'none',
        letterSpacing: 0,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            '--social-icon-color': config.socialIcons.default,
            '--social-icon-hover': config.socialIcons.hover,
            '--social-icon-shadow': config.socialIcons.shadow,
            '--footer-bg': config.footer.background,
            '--footer-text': config.footer.text,
            '--header-bg': config.footer.background, // Same as footer for consistency
            '--header-text': config.footer.text,
            '--header-link-hover': config.socialIcons.hover,
            '--header-link-glow': config.socialIcons.shadow,
          },
        },
      },
    },
  });
};

// Keep the default export for backward compatibility
const theme = createMnTheme('dark');
export default theme;
