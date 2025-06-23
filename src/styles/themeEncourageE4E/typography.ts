/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TypographyVariantsOptions } from '@mui/material/styles';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

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

export interface IFontSize {
  fontSize: number;
  lineHeight: number;
}
export const BASE_FONT_SIZE: IFontSize = { fontSize: 16, lineHeight: 24 / 16 };
export const INPUT_FONT_SIZE: IFontSize = { fontSize: 16, lineHeight: 20 / 16 };

export type CustomTypographyVariantsOptions = TypographyVariantsOptions & {
  body1Strong: TypographyStyleOptions;
  body2Strong: TypographyStyleOptions;
  buttonLarge: TypographyStyleOptions;
  buttonMedium: TypographyStyleOptions;
  buttonSmall: TypographyStyleOptions;
  inputLabel: TypographyStyleOptions;
  inputLabelStrong: TypographyStyleOptions;
  linkBody1: TypographyStyleOptions;
  linkBody2: TypographyStyleOptions;
  tableHeader: TypographyStyleOptions;
  tooltip: TypographyStyleOptions;
};

export const typography: CustomTypographyVariantsOptions = {
  allVariants: {
    color: palette.text.overLight.high,
    fontFamily: primaryFontFamily,
    fontSize: 16,
  },
  body1: {
    fontFamily: secondaryFontFamily,
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 24 / 16,
  },
  body1Strong: {
    fontFamily: secondaryFontFamily,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 24 / 16,
  },
  body2: {
    fontFamily: secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 20 / 14,
  },
  body2Strong: {
    fontFamily: secondaryFontFamily,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 20 / 14,
  },
  button: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 20 / 14,
  },
  buttonLarge: {
    fontFamily: primaryFontFamily,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 20 / 16,
  },
  buttonMedium: {
    fontFamily: primaryFontFamily,
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 20 / 14,
  },
  buttonSmall: {
    fontFamily: primaryFontFamily,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 20 / 12,
  },
  caption: {
    fontFamily: secondaryFontFamily,
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 20 / 12,
  },
  fontWeightBold: 800,
  fontWeightLight: 500,
  fontWeightMedium: 600,
  fontWeightRegular: 400,
  h1: {
    fontFamily: primaryFontFamily,
    fontSize: 48,
    fontWeight: 600,
    letterSpacing: -1,
    lineHeight: 64 / 48,
  },
  h2: {
    fontFamily: primaryFontFamily,
    fontSize: 40,
    fontWeight: 600,
    letterSpacing: -1,
    lineHeight: 48 / 40,
  },
  h3: {
    fontFamily: primaryFontFamily,
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: -1,
    lineHeight: 40 / 32,
  },
  h4: {
    fontFamily: primaryFontFamily,
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: -0.5,
    lineHeight: 40 / 28,
  },
  h5: {
    fontFamily: primaryFontFamily,
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: -0.75,
    lineHeight: 32 / 24,
  },
  h6: {
    fontFamily: primaryFontFamily,
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: -0.5,
    lineHeight: 24 / 18,
  },
  inputLabel: {
    fontFamily: secondaryFontFamily,
    fontSize: 10,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 12 / 10,
  },
  inputLabelStrong: {
    fontFamily: secondaryFontFamily,
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 12 / 10,
  },
  linkBody1: {
    fontFamily: secondaryFontFamily,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 24 / 16,
    textDecoration: 'underline',
  },
  linkBody2: {
    fontFamily: secondaryFontFamily,
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 24 / 17,
    textDecoration: 'underline',
  },
  overline: {
    fontFamily: '"Roboto Mono"',
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 1,
    lineHeight: 20 / 14,
  },
  subtitle1: {
    fontFamily: secondaryFontFamily,
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 24 / 18,
  },
  tableHeader: {
    fontFamily: secondaryFontFamily,
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 14 / 10,
  },
  tooltip: {
    fontFamily: secondaryFontFamily,
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 14 / 10,
  },
};

export default typography;
