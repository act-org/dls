/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import COLORS from './colors';

const PALETTE = {
  action: {
    activatedOpacity: 0.12,
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
  },
  background: {
    default: COLORS.BACKGROUND,
    paper: COLORS.WHITE,
  },
  common: {
    black: COLORS.BLACK,
    white: COLORS.WHITE,
  },
  contrastThreshold: 3,
  divider: COLORS.GREY_400,
  error: {
    contrastText: COLORS.WHITE,
    dark: COLORS.ERROR_DARK,
    main: COLORS.ERROR,
  },
  info: {
    contrastText: COLORS.WHITE,
    dark: COLORS.INFO_DARK,
    light: COLORS.INFO_LIGHT,
    main: COLORS.INFO,
  },
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
  success: {
    contrastText: COLORS.WHITE,
    dark: COLORS.SUCCESS_DARK,
    main: COLORS.SUCCESS,
  },
  text: {
    disabled: COLORS.GREY_400,
    hint: COLORS.TEXT_SECONDARY,
    primary: COLORS.BLACK,
    secondary: COLORS.TEXT_SECONDARY,
  },
  tonalOffset: {
    dark: 0.2,
    light: 0.2,
  },
  warning: {
    contrastText: COLORS.BLACK,
    dark: COLORS.WARNING_DARK,
    main: COLORS.WARNING,
  },
};

export default PALETTE;
