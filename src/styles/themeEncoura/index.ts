/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import deepMerge from 'deepmerge';

import { createTheme } from '~/styles/createTheme';
import THEME_ENCOURA_CLASSIC from '~/styles/themeEncouraClassic';
import { CustomThemeOptions, ICustomDims } from '~/types';

import COMPONENTS from './components';
import CUSTOM_DIMS from './customDims';
import PALETTE from './palette';
import spacing, { SPACING_PX } from './spacing';
import TYPOGRAPHY from './typography';

export type ThemeCustomizations = ICustomDims & {
  spacingPx: number;
};

export const THEME_ENCOURA: CustomThemeOptions<ThemeCustomizations> = deepMerge(
  THEME_ENCOURA_CLASSIC,
  {
    components: COMPONENTS,
    customDims: CUSTOM_DIMS,
    palette: PALETTE,
    spacing,
    spacingPx: SPACING_PX,
    typography: TYPOGRAPHY,
  },
);

export default createTheme(THEME_ENCOURA);
