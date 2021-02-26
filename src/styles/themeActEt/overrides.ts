/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import COLORS from './colors';
import DIMS from './dims';

const OVERRIDES = {
  MuiAlert: {
    outlinedError: {
      color: COLORS.ERROR_DARK,
    },
    outlinedInfo: {
      color: COLORS.INFO_DARK,
    },
    outlinedSuccess: {
      color: COLORS.SUCCESS_DARK,
    },
    outlinedWarning: {
      color: COLORS.WARNING_DARK,
    },
  },
  MuiButton: {
    contained: {
      borderRadius: 18,
    },
    outlined: {
      '&:hover': {
        borderWidth: 2,
      },
      borderRadius: 18,
      borderStyle: 'solid',
      borderWidth: 2,
    },
    outlinedPrimary: {
      '&:active': {
        backgroundColor: COLORS.PRIMARY_DARK,
        borderColor: COLORS.PRIMARY_DARK,
        color: COLORS.WHITE,
      },
      '&:hover': {
        borderWidth: 2,
      },
      borderColor: COLORS.PRIMARY,
      borderStyle: 'solid',
      borderWidth: 2,
    },
    outlinedSizeLarge: {
      borderRadius: 24,
    },
    sizeSmall: {
      fontSize: 14,
    },
    textPrimary: {
      '&:active': {
        color: COLORS.PRIMARY_DARK,
      },
    },
  },
  MuiSwitch: {
    root: {
      height: 26,
      margin: DIMS.SPACING,
      padding: 0,
      width: 42,
    },
    sizeSmall: {
      height: 26 * 0.9,
      width: 42 * 0.9,
    },
    switchBase: {
      '&$checked': {
        '& + $track': {
          backgroundColor: COLORS.PRIMARY,
          border: COLORS.PRIMARY,
          opacity: 1,
        },
        color: COLORS.WHITE,
        transform: 'translateX(16px)',
      },
      '&$focusVisible $thumb': {
        border: `6px solid ${COLORS.WHITE}`,
        color: COLORS.PRIMARY,
      },
      padding: 3,
    },
    thumb: {
      boxShadow: '0 1px 2px 1px rgba(0, 0, 0, 0.08)',
      color: COLORS.WHITE,
      height: 20,
      width: 20,
    },
    track: {
      backgroundColor: COLORS.GREY_300,
      border: `1px solid ${COLORS.GREY_300}`,
      borderRadius: 26 / 2,
      opacity: 1,
    },
  },
};

export default OVERRIDES;
