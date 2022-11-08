/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable @typescript-eslint/no-empty-interface */
import { createTheme } from '@mui/material/styles';

import { CustomThemeOptions } from '~/types';

import COLORS from './colors';
import COMPONENTS from './components';
import DIMS from './dims';
import PALETTE from './palette';
import SHAPE from './shape';
import TYPOGRAPHY from './typography';

export const THEME_ENCOURA_DATALAB: CustomThemeOptions = {
  components: COMPONENTS,
  customColors: COLORS.CUSTOM,
  customDims: DIMS.CUSTOM,
  palette: PALETTE,
  shape: SHAPE,
  spacing: DIMS.SPACING,
  typography: TYPOGRAPHY,
};

export default createTheme(THEME_ENCOURA_DATALAB);
