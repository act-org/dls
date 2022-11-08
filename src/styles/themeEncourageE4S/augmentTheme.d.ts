/* eslint-disable @typescript-eslint/naming-convention */

// Augment Material UI theme interface to include our own custom values

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    mobile: true;
  }
  interface TypeAction {
    activeHover: string;
  }
  interface TypeBackground {
    inset: string;
    disabled: string;
    overlay: string;
  }
  interface Palette {
    branding?: {
      fuschia: string;
      mist: string;
      navy: string;
      neon: string;
      orange: string;
      seafoam: string;
      teal: string;
      watermelon: string;
      yellow: string;
    };
    progress?: {
      ongoing: string;
    };
    text: TextType & {
      over?: {
        dark: {
          medium: string;
          high: string;
        };
        light: {
          medium: string;
          high: string;
        };
      };
    };
  }
  interface PaletteOptions {
    branding?: Palette['branding'];
    progress?: Palette['progress'];
  }
  interface Theme {
    customDims: ACTTheme['customDims'] & { header: number };
    spacingPx: number;
  }
  interface TypographyOptions {
    primaryFontFamily: string;
    secondaryFontFamily: string;
  }
}

declare module '@mui/material/Chip' {
  interface ChipClasses {
    colorDefault: string;
    outlinedDefault: string;
  }
}

// disable automatic export
export {};
