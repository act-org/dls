/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { common, grey } from '@mui/material/colors';
import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';

import { typeOk } from '~/helpers/types';

export const COLORS = {
  BACKGROUND: '#F7F7F7',
  ERROR: '#CC0033',
  ERROR_DARK: '#8E0024',
  INFO: '#2196F3',
  INFO_DARK: '#1976D2',
  INFO_LIGHT: '#64B5F6',
  PRIMARY: '#0077AA',
  PRIMARY_DARK: '#042E60',
  PRIMARY_LIGHT: '#0077AA',
  SECONDARY: '#2D2D2D',
  SUCCESS: '#009900',
  SUCCESS_DARK: '#007B00',
  TERTIARY: '#2D2D2D',
  TEXT_SECONDARY: '#444444',
  WARNING: '#FF9900',
  WARNING_DARK: '#D14900',
};

export type CustomPaletteOptions = PaletteOptions & {
  tertiary: PaletteColorOptions;
};

const PALETTE = typeOk<CustomPaletteOptions>()({
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
    paper: common.white,
  },
  common: {
    black: common.black,
    white: common.white,
  },
  contrastThreshold: 3,
  divider: 'rgba(0, 0, 0, 0.12)',
  error: {
    contrastText: common.white,
    dark: COLORS.ERROR_DARK,
    main: COLORS.ERROR,
  },
  info: {
    contrastText: common.white,
    dark: COLORS.INFO_DARK,
    light: COLORS.INFO_LIGHT,
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
    dark: grey[800],
    light: grey[500],
    main: COLORS.SECONDARY,
  },
  success: {
    contrastText: common.white,
    dark: COLORS.SUCCESS_DARK,
    main: COLORS.SUCCESS,
  },
  tertiary: {
    main: COLORS.TERTIARY,
  },
  text: {
    disabled: grey[400],
    primary: common.black,
    secondary: COLORS.TEXT_SECONDARY,
  },
  tonalOffset: {
    dark: 0.2,
    light: 0.2,
  },
  warning: {
    contrastText: common.black,
    dark: COLORS.WARNING_DARK,
    main: COLORS.WARNING,
  },
});

export default PALETTE;
