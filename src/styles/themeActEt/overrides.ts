/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import Color from 'color';
import { Overrides } from '@material-ui/core/styles/overrides';

import COLORS from './colors';
import DIMS from './dims';
import SHAPE from './shape';

const OVERRIDES: Overrides = {
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
    root: {
      fontSize: 14,
      height: 36,
    },
    sizeLarge: {
      fontSize: 18,
      height: 40,
    },
    sizeSmall: {
      fontSize: 12,
      height: 32,
    },
    textPrimary: {
      '&:active': {
        color: COLORS.PRIMARY_DARK,
      },
    },
  },
  MuiDataGrid: {
    root: {
      '& .MuiDataGrid-main': {
        '& .MuiDataGrid-columnHeader': {
          '& .MuiDataGrid-columnHeaderTitleContainer': {
            '& .MuiCheckbox-root': {
              color: COLORS.WHITE,
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              color: COLORS.WHITE,
              userSelect: 'none',
            },
          },
          '& .MuiDataGrid-iconButtonContainer': {
            '& .MuiIconButton-root': {
              color: Color(COLORS.WHITE).fade(0.35).rgb().string(),
              padding: '0 0 1px 0',
            },
            '& .MuiIconButton-root[aria-label="Show filters"]': {
              color: `${COLORS.WHITE} !important`,
            },
            alignItems: 'center',
            display: 'flex',
          },
          '& .MuiDataGrid-menuIcon': {
            '& .MuiIconButton-root[aria-label="Menu"]': {
              color: Color(COLORS.WHITE).fade(0.35).rgb().string(),
            },
          },
        },
        '& .MuiDataGrid-columnHeader--sorted': {
          '& .MuiIconButton-root[aria-label="Sort"]': {
            color: `${COLORS.WHITE} !important`,
          },
          backgroundColor: Color(COLORS.PRIMARY).darken(0.15).hex(),
        },
        '& .MuiDataGrid-columnHeaderWrapper': {
          backgroundColor: COLORS.PRIMARY,
        },
        '& .MuiDataGrid-columnSeparator': {
          marginRight: 1.5,
        },
        '& .MuiDataGrid-overlay': {
          backgroundColor: Color(COLORS.WHITE).fade(0.35).rgb().string(),
          zIndex: 1,
        },
      },
      borderRadius: SHAPE.borderRadius,
      overflow: 'hidden',
    },
  },
  MuiIconButton: {
    root: {
      height: 36,
      width: 36,
    },
    sizeSmall: {
      height: 32,
      width: 32,
    },
  },
  MuiLink: {
    root: {
      cursor: 'pointer',
    },
  },
  MuiSvgIcon: {
    fontSizeLarge: {
      height: 32,
      width: 32,
    },
    fontSizeSmall: {
      height: 17,
      width: 17,
    },
    root: {
      height: 22,
      width: 22,
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
      height: 'unset',
      padding: 3,
      width: 'unset',
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
} as Overrides;

export default OVERRIDES;
