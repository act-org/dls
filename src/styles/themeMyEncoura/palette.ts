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

export type CustomPaletteOptions = PaletteOptions & {
  customColors: {
    accent: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    chart: {
      primary: {
        fifth: string;
        first: string;
        fourth: string;
        second: string;
        sixth: string;
        third: string;
      };
      quaternary: {
        fifth: string;
        first: string;
        fourth: string;
        second: string;
        sixth: string;
        third: string;
      };
      secondary: {
        fifth: string;
        first: string;
        fourth: string;
        second: string;
        sixth: string;
        third: string;
      };
      tertiary: {
        fifth: string;
        first: string;
        fourth: string;
        second: string;
        sixth: string;
        third: string;
      };
    };
    evi: {
      icon: string;
    };
    homePage: {
      headerPrimary: string;
      headerPrimaryIcon: string;
      headerSecondary: string;
      headerSecondaryIcon: string;
    };
    table: {
      accentBackgroundColor: string;
    };
    tertiary: {
      dark: string;
      light: string;
    };
  };
};

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
