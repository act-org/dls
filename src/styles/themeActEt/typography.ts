/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import COMMON_TYPOGRAPHY from '~/constants/typography';

import COLORS from './colors';

const TYPOGRAPHY = {
  body1: {
    fontSize: 18,
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_REGULAR,
    letterSpacing: 0,
    lineHeight: 24 / 18,
  },
  body2: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 14,
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_REGULAR,
    letterSpacing: 0,
    lineHeight: 24 / 14,
  },
  button: {
    color: COLORS.PRIMARY_LIGHT,
    fontSize: 14,
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 0,
    lineHeight: 24 / 14,
    textTransform: 'none' as any,
  },
  caption: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 12,
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_MEDIUM,
    letterSpacing: 0,
    lineHeight: 16 / 12,
  },
  fontFamily: ['Montserrat', 'Helvetica', 'sans-serif'].join(','),
  fontSize: 18,
  fontWeightBold: COMMON_TYPOGRAPHY.WEIGHT_BOLD,
  fontWeightLight: COMMON_TYPOGRAPHY.WEIGHT_LIGHT,
  fontWeightMedium: COMMON_TYPOGRAPHY.WEIGHT_MEDIUM,
  fontWeightRegular: COMMON_TYPOGRAPHY.WEIGHT_REGULAR,
  h1: {
    fontSize: 40,
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 0,
    lineHeight: 56 / 40,
  },
  h2: {
    fontSize: 32,
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 0,
    lineHeight: 48 / 32,
  },
  h3: {
    fontSize: 28,
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 0,
    lineHeight: 40 / 28,
  },
  h4: {
    fontSize: 28,
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_MEDIUM,
    letterSpacing: 0,
    lineHeight: 40 / 28,
  },
  h5: {
    fontSize: 24,
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 0,
    lineHeight: 32 / 24,
  },
  h6: {
    fontSize: 24,
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_MEDIUM,
    letterSpacing: 0,
    lineHeight: 32 / 24,
  },
  htmlFontSize: 16,
  overline: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 12,
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_REGULAR,
    letterSpacing: 0.496,
    lineHeight: 16 / 12,
    textTransform: 'uppercase' as any,
  },
  subtitle1: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 12,
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_REGULAR,
    letterSpacing: 0.496,
    lineHeight: 16 / 12,
    textTransform: 'uppercase' as any,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_MEDIUM,
    letterSpacing: 0,
    lineHeight: 24 / 14,
  },
};

export default TYPOGRAPHY;
