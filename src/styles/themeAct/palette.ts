/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { common } from '@mui/material/colors';
import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';

import { typeOk } from '@actinc/dls/helpers/types';

export const COLORS = {
  BACKGROUND_DISABLED: '#FCFCFC',
  ERROR: '#8E0024',
  ERROR_BACKGROUND: '#FAE6EB',
  INFO: '#003B55',
  INFO_BACKGROUND: '#E6F2F7',
  OVERLAY_BACKGROUND: '#F2F4F7',
  PLACEHOLDER: '#767676',
  PRIMARY: '#0077AA',
  PRIMARY_DARK: '#042E60',
  PRIMARY_LIGHT: '#0077AA',
  SECONDARY: '#016b6e',
  SECONDARY_DARK: '#004043',
  SECONDARY_LIGHT: '#46999c',
  SUCCESS: '#007B00',
  SUCCESS_BACKGROUND: '#D9F0D9',
  TERTIARY: '#016b6e',
  TEXT_DISABLED: '#CCCCCC',
  TEXT_PRIMARY: '#000000',
  TEXT_SECONDARY: '#000000',
  WARNING: '#826E0D',
  WARNING_BACKGROUND: '#FEF8DC',
};

export type CustomPaletteOptions = PaletteOptions & {
  tertiary: PaletteColorOptions;
};

const PALETTE = typeOk<CustomPaletteOptions>()({
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
  tertiary: {
    main: COLORS.TERTIARY,
  },
  text: {
    disabled: COLORS.TEXT_DISABLED,
    primary: COLORS.TEXT_PRIMARY,
    secondary: COLORS.TEXT_SECONDARY,
  },
  warning: {
    main: COLORS.WARNING,
  },
});

export default PALETTE;
