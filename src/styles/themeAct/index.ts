/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import TYPOGRAPHY from './typography';
import PALETTE from './palette';
import PROPS from './props';
import SHAPE from './shape';
import OVERRIDES from './overrides';

export const THEME_ACT: ThemeOptions = {
  overrides: OVERRIDES,
  palette: PALETTE,
  props: PROPS,
  shape: SHAPE,
  typography: TYPOGRAPHY,
};

export default createMuiTheme(THEME_ACT);
