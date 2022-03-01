/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { common } from '@mui/material/colors';
import { PaletteOptions } from '@mui/material/styles';

import COLORS from './colors';

const PALETTE: PaletteOptions = {
  error: {
    main: COLORS.ERROR,
  },
  info: {
    main: COLORS.INFO,
  },
  primary: {
    contrastText: common.white,
    dark: COLORS.PRIMARY_DARK,
    light: COLORS.PRIMARY_LIGHT,
    main: COLORS.PRIMARY,
  },
  secondary: {
    contrastText: common.white,
    dark: COLORS.SECONDARY_DARK,
    light: COLORS.SECONDARY_LIGHT,
    main: COLORS.SECONDARY,
  },
  success: {
    main: COLORS.SUCCESS,
  },
  text: {
    disabled: COLORS.TEXT_DISABLED,
    primary: COLORS.TEXT_PRIMARY,
    secondary: COLORS.TEXT_SECONDARY,
  },
  warning: {
    main: COLORS.WARNING,
  },
};

export default PALETTE;
