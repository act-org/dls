/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import deepMerge from 'deepmerge';

import THEME_ENCOURA_CLASSIC from '~/styles/themeEncouraClassic';
import { createTheme } from '~/styles/createTheme';
import { CustomThemeOptions } from '~/types';

import COMPONENTS from './components';
import COLORS, { CustomColorOptions } from './colors';
// import CUSTOM_DIMS from './customDims';
import PALETTE from './palette';
// import SHAPE from './shape';
// import spacing, { SPACING_PX } from './spacing';
// import TYPOGRAPHY from './typography';

export type MyEncouraTheme = CustomThemeOptions<CustomColorOptions>;

export const THEME_MY_ENCOURA: MyEncouraTheme = deepMerge(
  THEME_ENCOURA_CLASSIC,
  {
    // Theme customizations to distinguish MyEncoura from
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
  },
);

export default createTheme(THEME_MY_ENCOURA);
