/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import COLORS from './colors';

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
};

export default OVERRIDES;
