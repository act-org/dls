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
    fontSize: '1.125rem',
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_REGULAR,
    letterSpacing: 0,
    lineHeight: '1.5rem',
  },
  body2: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: '0.875rem',
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_REGULAR,
    letterSpacing: 0,
    lineHeight: '1.5rem',
  },
  button: {
    color: COLORS.PRIMARY_LIGHT,
    fontSize: '0.875rem',
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 0,
    lineHeight: '1.5rem',
    textTransform: 'none' as any,
  },
  caption: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: '0.75rem',
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_MEDIUM,
    letterSpacing: 0,
    lineHeight: '1rem',
  },
  fontFamily: ['Montserrat', 'Helvetica', 'sans-serif'].join(','),
  fontSize: 18,
  fontWeightBold: COMMON_TYPOGRAPHY.WEIGHT_BOLD,
  fontWeightLight: COMMON_TYPOGRAPHY.WEIGHT_LIGHT,
  fontWeightMedium: COMMON_TYPOGRAPHY.WEIGHT_MEDIUM,
  fontWeightRegular: COMMON_TYPOGRAPHY.WEIGHT_REGULAR,
  h1: {
    fontSize: '2.5rem',
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 0,
    lineHeight: '3.5rem',
  },
  h2: {
    fontSize: '2rem',
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 0,
    lineHeight: '3rem',
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 0,
    lineHeight: '2.5rem',
  },
  h4: {
    fontSize: '1.75rem',
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_MEDIUM,
    letterSpacing: 0,
    lineHeight: '2.5rem',
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 0,
    lineHeight: '2rem',
  },
  h6: {
    fontSize: '1.5rem',
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_MEDIUM,
    letterSpacing: 0,
    lineHeight: '2rem',
  },
  htmlFontSize: 16,
  overline: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: '0.75rem',
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_REGULAR,
    letterSpacing: '0.031rem',
    lineHeight: '1rem',
    textTransform: 'uppercase' as any,
  },
  subtitle1: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: '0.75rem',
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_REGULAR,
    letterSpacing: '0.031rem',
    lineHeight: '1rem',
    textTransform: 'uppercase' as any,
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: COMMON_TYPOGRAPHY.WEIGHT_MEDIUM,
    letterSpacing: 0,
    lineHeight: '1.5rem',
  },
};

export default TYPOGRAPHY;
