/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { createTheme } from '@actinc/dls/styles/createTheme';
import { CustomThemeOptions, ICustomDims } from '@actinc/dls/types';

import COMPONENTS from './components';
import CUSTOM_DIMS from './customDims';
import PALETTE, { CustomPaletteOptions } from './palette';
import SHAPE from './shape';
import spacing, { SPACING_PX } from './spacing';
import TYPOGRAPHY from './typography';

export type ThemeCustomizations = ICustomDims & {
  palette: CustomPaletteOptions;
  spacingPx: number;
};

export const THEME_ENCOURA_CLASSIC: CustomThemeOptions<ThemeCustomizations> = {
  components: COMPONENTS,
  customDims: CUSTOM_DIMS,
  palette: PALETTE,
  shape: SHAPE,
  spacing,
  spacingPx: SPACING_PX,
  typography: TYPOGRAPHY,
};

export default createTheme(THEME_ENCOURA_CLASSIC);
