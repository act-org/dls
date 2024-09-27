/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { grey } from '@mui/material/colors';

export const accentBlue = '#00A8D6'; // 2nd Market Insights chart color and icon accent color
export const secondaryDark = '#003359';
export const secondaryMain = '#0080A3';
export const slateBlue = '#80ACC4'; // grey blue

export const teal = '#03BBBB';

export const brightOrange = '#FF7900';
export const darkOrange = '#D54215';

export const slateGrey = '#64829A';

export const COLORS = {
  ACCENT: {
    primary: accentBlue,
    secondary: brightOrange,
    tertiary: darkOrange,
  },
  CHART: {
    // Market insights chart colors
    primary: [
      '#7FC4E1',
      accentBlue,
      '#0D47A1',
      secondaryDark,
      slateBlue,
      slateGrey,
    ],
    // Dark enrollment lens charts
    quaternary: [
      '#00838F',
      secondaryMain,
      secondaryDark,
      slateBlue,
      slateGrey,
      grey[700],
    ],
    // Enrollment lens chart colors
    secondary: [
      teal,
      '#1594A3',
      '#225479',
      secondaryDark,
      slateBlue,
      slateGrey,
    ],
    // Vivid chart colors
    tertiary: [teal, brightOrange, '#8E24AA', '#2196F3', '#E91E63', '#CE93D8'],
  },
  EVI: {
    icon: '#1E9D8B',
  },
  HOMEPAGE: {
    headerPrimary: darkOrange, // Orange header
    headerPrimaryIcon: '#FF9A3F', //
    headerSecondary: '#420059', // Purple header
    headerSecondaryIcon: '#B165CC',
  },
  PRIMARY: '#008531',
  SECONDARY: secondaryMain,
  SECONDARY_DARK: secondaryDark,
  SECONDARY_LIGHT: '#E6F5F9',
  TABLE: {
    accentBackgroundColor: '#f2f9fc',
  },
  // Teals of Enrollment Lens reports
  TERTIARY: {
    dark: '#125F6D', // Dark teal Enrollment Lens header for charts & dialogs
    light: teal,
  },
  TEXT_DISABLED: '#CCCCCC',
  TEXT_PRIMARY: '#555555',
  TEXT_SECONDARY: '#00789A', // Dark blue used for hover states
};

export default COLORS;
