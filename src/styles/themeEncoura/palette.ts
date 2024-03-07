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
  primary: {
    main: COLORS.PRIMARY,
  },
  secondary: {
    contrastText: common.white,
    dark: COLORS.SECONDARY_DARK,
    light: COLORS.SECONDARY_LIGHT,
    main: COLORS.SECONDARY,
  },
  text: {
    disabled: COLORS.TEXT_DISABLED,
    primary: COLORS.TEXT_PRIMARY,
    secondary: COLORS.TEXT_SECONDARY,
  },
};

export default PALETTE;
