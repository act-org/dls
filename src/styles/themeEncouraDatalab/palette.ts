/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { common, grey } from '@mui/material/colors';
import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';

import { typeOk } from '~/helpers/types';

export const COLORS = {
  BACKGROUND: '#EBF0F1',
  ERROR: '#E80000',
  ERROR_DARK: '#E80000',
  INFO: '#0390BF',
  INFO_DARK: '#0390BF',
  INFO_LIGHT: '#0390BF',
  PRIMARY: '#00AF3F',
  PRIMARY_DARK: '#00AF3F',
  PRIMARY_LIGHT: '#00AF3F',
  SECONDARY: '#0098C3',
  SECONDARY_DARK: '#003359',
  SECONDARY_LIGHT: '#0098C3',
  SUCCESS: '#03AE43',
  SUCCESS_DARK: '#03AE43',
  TERTIARY: '#E68329',
  TEXT_SECONDARY: '#555555',
  WARNING: '#E68428',
  WARNING_DARK: '#E68428',
};

export type CustomPaletteOptions = PaletteOptions & {
  tertiary: PaletteColorOptions;
};

const PALETTE = typeOk<CustomPaletteOptions>()({
  action: {
    activatedOpacity: 0.12,
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: '#C1C1C1',
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
    dark: COLORS.SECONDARY_DARK,
    light: COLORS.SECONDARY_LIGHT,
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
