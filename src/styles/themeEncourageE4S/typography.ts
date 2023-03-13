/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { TypographyVariantsOptions } from '@mui/material/styles';
import { isNumber } from 'lodash';

import palette from './palette';

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

export type Px = `${number}px` | '';

export interface IFontSize {
  fontSize: number | Px;
  letterSpacing: number | Px;
  lineHeight: number | Px;
}

export const px = (value?: number): Px => {
  return value !== undefined ? `${value}px` : '';
};

export const pxToNumber = (value: Px | number): number => {
  return isNumber(value) ? value : parseInt(value.replace('px', ''), 10);
};

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
    color: palette.text.over.light.high,
    fontFamily: primaryFontFamily,
  },
  body1: {
    '& > strong': {
      fontWeight: 600,
    },
    ...BASE_FONT_SIZE,
    fontFamily: secondaryFontFamily,
    fontWeight: 400,
  },
  body2: {
    '& > strong': {
      fontWeight: 700,
    },
    fontFamily: secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: px(0),
    lineHeight: px(20),
  },
  button: {
    ...INPUT_FONT_SIZE,
    fontFamily: primaryFontFamily,
    fontWeight: 600,
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
  fontWeightLight: 200,
  fontWeightMedium: 600,
  fontWeightRegular: 400,
  h1: {
    fontFamily: primaryFontFamily,
    fontSize: 48,
    fontWeight: 600,
    letterSpacing: px(-1),
    lineHeight: px(64),
  },
  h2: {
    fontFamily: primaryFontFamily,
    fontSize: 40,
    fontWeight: 600,
    letterSpacing: px(-1),
    lineHeight: px(48),
  },
  h3: {
    fontFamily: primaryFontFamily,
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: px(-1),
    lineHeight: px(40),
  },
  h4: {
    fontFamily: primaryFontFamily,
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: px(-0.5),
    lineHeight: px(40),
  },
  h5: {
    fontFamily: primaryFontFamily,
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: px(-0.75),
    lineHeight: px(40),
  },
  h6: {
    fontFamily: primaryFontFamily,
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: px(-0.5),
    lineHeight: px(24),
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
    fontSize: 18,
    fontWeight: 400,
    letterSpacing: px(0),
    lineHeight: px(24),
    textTransform: undefined, // Clear the base theme's transform
  },
  subtitle2: {
    fontFamily: secondaryFontFamily,
    fontSize: 16,
    letterSpacing: px(0),
    lineHeight: px(24),
  },
};

export default typography;
