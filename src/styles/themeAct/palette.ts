import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import COLORS from './colors';
/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable sort-keys */
const palette: PaletteOptions = {
  primary: {
    contrastText: COLORS.WHITE,
    dark: COLORS.PRIMARY_DARK,
    light: COLORS.PRIMARY_LIGHT,
    main: COLORS.PRIMARY,
  },
  secondary: {
    contrastText: COLORS.WHITE,
    dark: COLORS.SECONDARY_DARK,
    light: COLORS.SECONDARY_LIGHT,
    main: COLORS.SECONDARY,
  },
  info: {
    main: COLORS.INFO,
  },
  success: {
    main: COLORS.SUCCESS,
  },
  error: {
    main: COLORS.ERROR,
  },
  warning: {
    main: COLORS.WARNING,
  },
  text: {
    primary: COLORS.TEXT_PRIMARY,
    secondary: COLORS.TEXT_SECONDARY,
    disabled: COLORS.TEXT_DISABLED,
  },
};

export default palette;
