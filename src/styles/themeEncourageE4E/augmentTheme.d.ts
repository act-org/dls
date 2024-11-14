/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/naming-convention */

import React from 'react';

import type { Color } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    buttonLarge: React.CSSProperties;
    buttonMedium: React.CSSProperties;
    buttonSmall: React.CSSProperties;
    body1Strong?: React.CSSProperties;
    body2Strong?: React.CSSProperties;
    inputLabel?: React.CSSProperties;
    inputLabelStrong?: React.CSSProperties;
    linkBody1?: React.CSSProperties;
    linkBody2?: React.CSSProperties;
    tooltip?: React.CSSProperties;
    tableHeader?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    buttonLarge?: React.CSSProperties;
    buttonMedium?: React.CSSProperties;
    buttonSmall?: React.CSSProperties;
    body1Strong?: React.CSSProperties;
    body2Strong?: React.CSSProperties;
    inputLabel?: React.CSSProperties;
    inputLabelStrong?: React.CSSProperties;
    linkBody1?: React.CSSProperties;
    linkBody2?: React.CSSProperties;
    tooltip?: React.CSSProperties;
    tableHeader?: React.CSSProperties;
  }

  interface IconButtonClasses {
    colorTerciary: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    buttonLarge: true;
    buttonMedium: true;
    buttonSmall: true;
    body1Strong: true;
    body2Strong: true;
    inputLabel: true;
    inputLabelStrong: true;
    linkBody1: true;
    linkBody2: true;
    tooltip: true;
    tableHeader: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    buttonLarge: true;
    buttonMedium: true;
    buttonSmall: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonClasses {
    iconOutlined: true;
  }
  interface ButtonPropsVariantOverrides {
    iconOutlined: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonClasses {
    colorTerciary: true;
  }
  interface IconButtonPropsColorOverrides {
    terciary: true;
  }
}

declare module '@mui/material/styles' {
  interface TypeText {
    overDark: {
      high: string;
      disabled: string;
      medium: string;
    };
    overLight: {
      high: string;
      disabled: string;
      medium: string;
    };
  }

  // Overriding the Palette interface here, gives us quick access to all the colors generated on components.ts
  interface Palette {
    action: {
      activeHover: string;
    };
    progress: {
      failure: string;
      idle: string;
      interrupted: string;
      ongoing: string;
      success: string;
    };
    background: {
      paper: string;
    };
    branding: {
      blue: Color;
      fuchsia: Color;
      mist: Color;
      navy: Color;
      neon: Color;
      orange: Color;
      sapphire: Color;
      seafoam: Color;
      surface: Color;
      teal: Color;
    };
    error: {
      main: string;
    };
    info: {
      main: string;
    };
    primary: {
      contrastText: string;
      light: string;
      main: string;
    };
    progress: {
      failure: string;
      idle: string;
      interrupted: string;
      ongoing: string;
      success: string;
    };
    secondary: {
      contrastText: string;
      main: string;
    };
    success: {
      contrastText: string;
      main: string;
    };
    text: {
      primary: string;
      secondary: string;
      overDark: {
        disabled: string;
        high: string;
        medium: string;
      };
      overLight: {
        disabled: string;
        high: string;
        medium: string;
      };
    };
    utility: {
      error: Color;
      info: Color;
      success: Color;
      warning: Color;
      white: '#ffffff';
    };
    warning: {
      main: string;
    };
  }

  interface Theme {
    customDims: {
      heights: {
        header: number;
        tableHeader: number;
        tablePagination: number;
      };
      widths: {
        pageMainContent: number;
        datePickerPopper: number;
        largeDialog: number;
        leftNavBar: number;
        listItemIcon: number;
        mediumDialog: number;
      };
    };
    spacingPx: number;
  }
}

declare module '@mui/material/Autocomplete' {
  interface AutocompletePropsSizeOverrides {
    small: false;
    large: true;
  }
}

declare module '@mui/material/Divider' {
  interface DividerPropsVariantOverrides {
    small: true;
    medium: true;
    large: true;
    fill: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    interactive: true;
    gradYear: true;
    matched: true;
    possible: true;
    inverted: true;
  }
}

// disable automatic export
export {};
