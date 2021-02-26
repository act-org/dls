/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { createMuiTheme } from '@material-ui/core/styles';

import OVERRIDES from './overrides';
import PALETTE from './palette';
import SHAPE from './shape';
import TYPOGRAPHY from './typography';

export const THEME_ACT_ET = {
  overrides: OVERRIDES,
  palette: PALETTE,
  shape: SHAPE,
  typography: TYPOGRAPHY,
};

export default createMuiTheme(THEME_ACT_ET);
