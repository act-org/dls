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
    default: '#FAFAFA',
    paper: COLORS.WHITE,
  },
  common: {
    black: COLORS.BLACK,
    white: COLORS.WHITE,
  },
  contrastThreshold: 3,
  divider: '#B2B4B7',
  error: {
    contrastText: COLORS.WHITE,
    dark: COLORS.ERROR_DARK,
    main: '#CC0033',
  },
  info: {
    contrastText: COLORS.WHITE,
    dark: COLORS.INFO_DARK,
    light: '#64B5F6',
    main: '#2196F3',
  },
  primary: {
    contrastText: COLORS.WHITE,
    dark: '#042E60',
    light: COLORS.PRIMARY_LIGHT,
    main: '#016089',
  },
  secondary: {
    contrastText: COLORS.WHITE,
    dark: '#004043',
    light: '#46999c',
    main: '#016b6e',
  },
  success: {
    contrastText: COLORS.WHITE,
    dark: COLORS.SUCCESS_DARK,
    main: '#009900',
  },
  text: {
    disabled: '#B2B4B7',
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
    main: '#FF9900',
  },
};

export default PALETTE;
