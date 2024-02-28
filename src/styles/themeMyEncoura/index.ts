/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Palette, TypographyVariants } from '@mui/material/styles';
import { Spacing, Breakpoints } from '@mui/system';
import deepMerge from 'deepmerge';

import THEME_ENCOURA_CLASSIC from '~/styles/themeEncouraClassic';
import { createTheme } from '~/styles/createTheme';
import { CustomThemeOptions, ICustomDims } from '~/types';

import COMPONENTS from './components';
import COLORS from './colors';
// import CUSTOM_DIMS from './customDims';
import PALETTE, { CustomPaletteOptions } from './palette';
// import SHAPE from './shape';
// import spacing, { SPACING_PX } from './spacing';
// import TYPOGRAPHY from './typography';

export type ThemeCustomizations = ICustomDims & {
  palette: CustomPaletteOptions;
  spacingPx: number;
};

// export type MyEncouraCustomThemeOptions = CustomThemeOptions & {
//   breakpoints: Breakpoints;
//   customColors: {
//     accent: {
//       primary: string;
//       secondary: string;
//       tertiary: string;
//     };
//     chart: {
//       primary: {
//         fifth: string;
//         first: string;
//         fourth: string;
//         second: string;
//         sixth: string;
//         third: string;
//       };
//       quaternary: {
//         fifth: string;
//         first: string;
//         fourth: string;
//         second: string;
//         sixth: string;
//         third: string;
//       };
//       secondary: {
//         fifth: string;
//         first: string;
//         fourth: string;
//         second: string;
//         sixth: string;
//         third: string;
//       };
//       tertiary: {
//         fifth: string;
//         first: string;
//         fourth: string;
//         second: string;
//         sixth: string;
//         third: string;
//       };
//     };
//     evi: {
//       icon: string;
//     };
//     homePage: {
//       headerPrimary: string;
//       headerPrimaryIcon: string;
//       headerSecondary: string;
//       headerSecondaryIcon: string;
//     };
//     table: {
//       accentBackgroundColor: string;
//     };
//     tertiary: {
//       dark: string;
//       light: string;
//     };
//   };
//   customDims: {
//     heights: {
//       header: number;
//       tableHeader: number;
//     };
//     widths: {
//       listItemIcon: number;
//     };
//   };
//   palette: Palette;
//   shape: {
//     borderRadius: number;
//   };
//   spacing: Spacing;
//   typography: TypographyVariants;
// };

export const THEME_MY_ENCOURA: CustomThemeOptions<MyEncouraCustomThemeOptions> =
  deepMerge(THEME_ENCOURA_CLASSIC, {
    // Theme customizations to distinguish Market Insights from
    // the other app modules.
    components: COMPONENTS,
    customColors: COLORS.CUSTOM,
    customDims: {
      heights: {
        header: 60,
      },
      widths: {
        listItemIcon: 40,
      },
    },
    palette: PALETTE,
    typography: {
      fontWeightMedium: 600,
      fontWeightRegular: 500,
    },
  });

export default createTheme(THEME_MY_ENCOURA);
