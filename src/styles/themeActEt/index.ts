/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable @typescript-eslint/no-empty-interface */
import { createTheme } from '@material-ui/core/styles';

import { CustomThemeOptions } from '~/types';

import COLORS from './colors';
import DIMS from './dims';
import OVERRIDES from './overrides';
import PALETTE from './palette';
import PROPS from './props';
import SHAPE from './shape';
import TYPOGRAPHY from './typography';

export const THEME_ACT_ET: CustomThemeOptions = {
  customColors: COLORS.CUSTOM,
  customDims: DIMS.CUSTOM,
  overrides: OVERRIDES,
  palette: PALETTE,
  props: PROPS,
  shape: SHAPE,
  spacing: DIMS.SPACING,
  typography: TYPOGRAPHY,
};

export default createTheme(THEME_ACT_ET);
