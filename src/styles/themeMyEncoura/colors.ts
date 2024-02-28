/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { grey } from '@mui/material/colors';
import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';

export const accentBlue = '#00A8D6'; // 2nd MI chart color and icon accent color
export const secondaryDark = '#003359';
export const secondaryMain = '#0080A3';
export const slateBlue = '#80ACC4'; // grey blue

export const teal = '#03BBBB';

export const brightOrange = '#FF7900';
export const darkOrange = '#D54215';

export const slateGrey = '#64829A';

const COLORS = {
  CUSTOM: {
    accent: {
      primary: accentBlue,
      secondary: brightOrange,
      tertiary: darkOrange,
    },
    chart: {
      // Market Insights charts
      primary: {
        fifth: slateBlue,
        first: '#7FC4E1',
        fourth: secondaryDark,
        second: accentBlue,
        sixth: slateGrey,
        third: '#0D47A1',
      },
      // Dark Enrollment Lens charts
      quaternary: {
        fifth: slateGrey,
        first: '#00838F',
        fourth: slateBlue,
        second: secondaryMain,
        sixth: grey[700],
        third: secondaryDark,
      },
      // Enrollment Lens charts
      secondary: {
        fifth: slateBlue,
        first: teal,
        fourth: secondaryDark,
        second: '#1594A3',
        sixth: slateGrey,
        third: '#225479',
      },
      // Vivid charts
      tertiary: {
        fifth: '#E91E63',
        first: teal,
        fourth: '#2196F3',
        second: brightOrange,
        sixth: '#CE93D8',
        third: '#8E24AA',
      },
    },
    evi: {
      icon: '#1E9D8B',
    },
    homePage: {
      headerPrimary: darkOrange, // Orange header
      headerPrimaryIcon: '#FF9A3F', //
      headerSecondary: '#420059', // Purple header
      headerSecondaryIcon: '#B165CC',
    },
    table: {
      accentBackgroundColor: '#f2f9fc',
    },
    // Teals of Enrollment Lens reports
    tertiary: {
      dark: '#125F6D', // Dark teal Enrollment Lens header for charts & dialogs
      light: teal,
    },
  },
  PRIMARY: '#008531',
  SECONDARY: secondaryMain,
  SECONDARY_DARK: secondaryDark,
  SECONDARY_LIGHT: '#E6F5F9',
  TEXT_DISABLED: '#CCCCCC',
  TEXT_PRIMARY: '#555555',
  TEXT_SECONDARY: '#00789A', // Dark blue used for hover states
};

export default COLORS;
