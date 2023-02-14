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
import DIMS from './dims';
import PALETTE, { CustomPaletteOptions } from './palette';
import SHAPE from './shape';
import TYPOGRAPHY from './typography';

type ThemeCustomizations = ICustomDims & {
  palette: CustomPaletteOptions;
};

export const THEME_ACT_ET: CustomThemeOptions<ThemeCustomizations> = {
  components: COMPONENTS,
  customDims: DIMS.CUSTOM,
  palette: PALETTE,
  shape: SHAPE,
  spacing: DIMS.SPACING,
  typography: TYPOGRAPHY,
};

export default createTheme(THEME_ACT_ET);
