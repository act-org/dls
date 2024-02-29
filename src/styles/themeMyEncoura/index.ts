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
import CUSTOM_DIMS from './customDims';
import PALETTE from './palette';
import TYPOGRAPHY from './typography';

export type MyEncouraCustomTheme = CustomThemeOptions<CustomColorOptions>;

export const THEME_MY_ENCOURA: MyEncouraCustomTheme = deepMerge(
  THEME_ENCOURA_CLASSIC,
  {
    // Theme customizations to distinguish MyEncoura from
    // the the Encoura Classic theme.
    components: COMPONENTS,
    customColors: COLORS.CUSTOM,
    customDims: CUSTOM_DIMS,
    palette: PALETTE,
    typography: TYPOGRAPHY,
  },
);

export default createTheme(THEME_MY_ENCOURA);
