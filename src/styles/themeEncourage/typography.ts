/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  TypographyVariantsOptions,
  createTheme as muiCreateTheme,
} from '@mui/material/styles';

import px from '@actinc/dls/helpers/px';
import { Px } from '@actinc/dls/types';

import { customPalette } from './palette';

const theme = muiCreateTheme();

export const primaryFontFamily = [
  '"Work Sans"',
  'Roboto',
  '"Helvetica Neue"',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  '"Open Sans"',
  'sans-serif',
].join(', ');

export const secondaryFontFamily = [
  'Roboto',
  '"Helvetica Neue"',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  '"Open Sans"',
  'sans-serif',
].join(', ');

export const tertiaryFontFamily = [
  'Roboto Mono',
  '"Helvetica Neue"',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  '"Open Sans"',
  'sans-serif',
].join(', ');

export interface IFontSize {
  fontSize: number | Px;
  letterSpacing: number | Px;
  lineHeight: number | Px;
}

export const BASE_FONT_SIZE: IFontSize = {
  fontSize: px(16),
  letterSpacing: px(0),
  lineHeight: px(24),
};
export const INPUT_FONT_SIZE: IFontSize = {
  fontSize: px(16),
  letterSpacing: px(0),
  lineHeight: px(20),
};

// Base values found here:
// https://github.com/act-org/dls/blob/main/src/styles/themeActEt/typography.ts
const typography: TypographyVariantsOptions = {
  allVariants: {
    ...BASE_FONT_SIZE,
    color: customPalette.text.over.light.high,
    fontFamily: primaryFontFamily,
  },
  body1: {
    '& > strong': {
      fontWeight: 600,
    },
    ...BASE_FONT_SIZE,
    fontFamily: secondaryFontFamily,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  body2: {
    '& > strong': {
      fontWeight: 700,
    },
    fontFamily: secondaryFontFamily,
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: px(0),
    lineHeight: '20px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
  button: {
    ...INPUT_FONT_SIZE,
    fontFamily: primaryFontFamily,
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '20px',
  },
  caption: {
    fontFamily: secondaryFontFamily,
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: px(1),
    lineHeight: px(20),
  },
  fontFamily: primaryFontFamily,
  fontWeightBold: 800,
  fontWeightLight: 500,
  fontWeightMedium: 600,
  fontWeightRegular: 400,
  h1: {
    fontFamily: primaryFontFamily,
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: px(-1),
    lineHeight: px(38),
    [theme.breakpoints.up('xs')]: {
      fontSize: 32,
      lineHeight: px(38),
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 48,
      lineHeight: px(64),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 48,
      lineHeight: px(64),
    },
  },
  h2: {
    fontFamily: primaryFontFamily,
    fontSize: '28px',
    fontWeight: 500,
    letterSpacing: px(-1),
    lineHeight: '32px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '28px',
      lineHeight: '32px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '40px',
      fontWeight: 600,
      lineHeight: '48px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '40px',
      fontWeight: 600,
      lineHeight: '48px',
    },
  },
  h3: {
    fontFamily: primaryFontFamily,
    fontSize: '24px',
    fontWeight: 600,
    letterSpacing: px(-1),
    lineHeight: '32px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '24px',
      lineHeight: '32px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '32px',
      lineHeight: '40px',
    },
  },
  h4: {
    fontFamily: primaryFontFamily,
    fontSize: '20px',
    fontWeight: 600,
    letterSpacing: px(-0.5),
    lineHeight: '24px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '20px',
      lineHeight: '24px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '28px',
      lineHeight: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '28px',
      lineHeight: '40px',
    },
  },
  h5: {
    fontFamily: primaryFontFamily,
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '22px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
      letterSpacing: px(-0.75),
      lineHeight: '32px',
    },
  },
  h6: {
    fontFamily: primaryFontFamily,
    fontSize: '18px',
    fontWeight: 500,
    letterSpacing: px(-0.5),
    lineHeight: '24px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px',
    },
  },
  overline: {
    fontFamily: tertiaryFontFamily,
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: px(1),
    lineHeight: px(20),
  },
  subtitle1: {
    fontFamily: secondaryFontFamily,
    fontSize: '18px',
    fontWeight: 400,
    letterSpacing: px(0),
    lineHeight: px(24),
    textTransform: undefined, // Clear the base theme's transform
    [theme.breakpoints.up('xs')]: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
  subtitle2: {
    fontFamily: secondaryFontFamily,
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: px(0),
    lineHeight: px(24),
    [theme.breakpoints.up('xs')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
};

export default typography;
