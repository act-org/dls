/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { TypographyOptions } from '@material-ui/core/styles/createTypography';

import COLORS from './colors';

const TYPOGRAPHY: TypographyOptions = {
  body1: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 24 / 16,
  },
  body2: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 24 / 14,
  },
  button: {
    color: COLORS.PRIMARY_LIGHT,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 24 / 12,
    textTransform: 'none' as any,
  },
  caption: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 10,
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: 12 / 10,
  },
  fontFamily: ['Museo', 'Helvetica', 'sans-serif'].join(','),
  fontSize: 18,
  fontWeightBold: 700,
  fontWeightLight: 300,
  fontWeightMedium: 500,
  fontWeightRegular: 500,
  h1: {
    fontSize: 32,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 38 / 32,
  },
  h2: {
    fontSize: 26,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 31 / 26,
  },
  h3: {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 38 / 14,
  },
  h4: {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 17 / 14,
  },
  h5: {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 14 / 12,
  },
  h6: {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 14 / 12,
  },
  htmlFontSize: 16,
  overline: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 16 / 12,
    textTransform: 'uppercase' as any,
  },
  subtitle1: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 12,
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: 14 / 12,
  },
  subtitle2: {
    fontSize: 10,
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: 12 / 10,
  },
};

export default TYPOGRAPHY;