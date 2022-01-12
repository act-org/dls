/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import Color from 'color';
import { common, grey } from '@material-ui/core/colors';
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
  MuiBadge: {
    badge: {
      fontSize: 10,
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
        color: common.white,
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
      '& .MuiDataGrid-footerContainer': {
        '& .MuiTablePagination-root': {
          '& .MuiToolbar-root': {
            '& .MuiSelect-root': {
              fontSize: 14,
            },
          },
        },
      },
      '& .MuiDataGrid-main': {
        '& .MuiDataGrid-columnHeader': {
          '& .MuiDataGrid-columnHeaderTitleContainer': {
            '& .MuiDataGrid-columnHeaderTitle': {
              color: common.black,
              userSelect: 'none',
            },
          },
          '& .MuiDataGrid-iconButtonContainer': {
            '& .MuiIconButton-root': {
              color: Color(common.black).fade(0).rgb().string(),
              padding: '0 0 1px 0',
            },
            '& .MuiIconButton-root[aria-label="Show filters"]': {
              color: `${common.black} !important`,
            },
            alignItems: 'center',
            display: 'flex',
          },
          '& .MuiDataGrid-menuIcon': {
            '& .MuiIconButton-root[aria-label="Menu"]': {
              color: Color(common.black).fade(0.35).rgb().string(),
            },
          },
          '&.MuiDataGrid-withBorder': {
            borderRightColor: grey[300],
          },
          outline: 'none',
          paddingLeft: DIMS.SPACING / 2,
          paddingRight: DIMS.SPACING / 2,
        },
        '& .MuiDataGrid-columnHeader--sorted': {
          '& .MuiIconButton-root[aria-label="Sort"]': {
            color: `${common.black} !important`,
          },
          backgroundColor: grey[300],
        },
        '& .MuiDataGrid-columnHeaderWrapper': {
          backgroundColor: grey[200],
        },
        '& .MuiDataGrid-columnSeparator': {
          display: 'none',
        },
        '& .MuiDataGrid-overlay': {
          backgroundColor: Color(common.white).fade(0.35).rgb().string(),
          zIndex: 1,
        },
      },
      '& .MuiDataGrid-toolbarContainer': {
        '& .MuiButton-root': {
          marginRight: DIMS.SPACING,
        },
        padding: DIMS.SPACING,
      },
      '&.primary': {
        '& .MuiDataGrid-main': {
          '& .MuiDataGrid-columnHeader': {
            '& .MuiDataGrid-columnHeaderTitleContainer': {
              '& .MuiCheckbox-root': {
                color: common.white,
              },
              '& .MuiDataGrid-columnHeaderTitle': {
                color: common.white,
              },
            },
            '& .MuiDataGrid-iconButtonContainer': {
              '& .MuiIconButton-root': {
                color: Color(common.white).fade(0.1).rgb().string(),
              },
              '& .MuiIconButton-root[aria-label="Show filters"]': {
                color: `${common.white} !important`,
              },
            },
            '& .MuiDataGrid-menuIcon': {
              '& .MuiIconButton-root[aria-label="Menu"]': {
                color: Color(common.white).fade(0.35).rgb().string(),
              },
            },
            '&.MuiDataGrid-withBorder': {
              borderRightColor: Color(COLORS.PRIMARY).lighten(0.2).hex(),
            },
          },
          '& .MuiDataGrid-columnHeader--sorted': {
            '& .MuiIconButton-root[aria-label="Sort"]': {
              color: `${common.white} !important`,
            },
            backgroundColor: Color(COLORS.PRIMARY).darken(0.15).hex(),
          },
          '& .MuiDataGrid-columnHeaderWrapper': {
            backgroundColor: COLORS.PRIMARY,
          },
        },
      },
      '&.secondary': {
        '& .MuiDataGrid-main': {
          '& .MuiDataGrid-columnHeader': {
            '& .MuiDataGrid-columnHeaderTitleContainer': {
              '& .MuiCheckbox-root': {
                color: common.white,
              },
              '& .MuiDataGrid-columnHeaderTitle': {
                color: common.white,
              },
            },
            '& .MuiDataGrid-iconButtonContainer': {
              '& .MuiIconButton-root': {
                color: Color(common.white).fade(0.1).rgb().string(),
              },
              '& .MuiIconButton-root[aria-label="Show filters"]': {
                color: `${common.white} !important`,
              },
            },
            '& .MuiDataGrid-menuIcon': {
              '& .MuiIconButton-root[aria-label="Menu"]': {
                color: Color(common.white).fade(0.35).rgb().string(),
              },
            },
            '&.MuiDataGrid-withBorder': {
              borderRightColor: Color(COLORS.SECONDARY).lighten(0.5).hex(),
            },
          },
          '& .MuiDataGrid-columnHeader--sorted': {
            '& .MuiIconButton-root[aria-label="Sort"]': {
              color: `${common.white} !important`,
            },
            backgroundColor: Color(COLORS.SECONDARY).darken(0.15).hex(),
          },
          '& .MuiDataGrid-columnHeaderWrapper': {
            backgroundColor: COLORS.SECONDARY,
          },
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
  MuiInputLabel: {
    formControl: {
      position: 'relative',
      transform: 'unset',
    },
    marginDense: {
      transform: 'unset',
    },
    outlined: {
      '&.MuiInputLabel-marginDense': {
        transform: 'unset',
      },
      transform: 'unset',
      transformOrigin: 'unset',
    },
    root: {
      color: common.black,
      fontSize: 14,
      fontWeight: 600,
      marginBottom: DIMS.SPACING,
    },
  },
  MuiLink: {
    root: {
      cursor: 'pointer',
    },
  },
  MuiOutlinedInput: {
    input: {
      '&.Mui-disabled': {
        cursor: 'not-allowed',
      },
    },
    root: {
      backgroundColor: common.white,
      fontSize: 14,
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
        color: common.white,
        transform: 'translateX(16px)',
      },
      '&$focusVisible $thumb': {
        border: `6px solid ${common.white}`,
        color: COLORS.PRIMARY,
      },
      height: 'unset',
      padding: 3,
      width: 'unset',
    },
    thumb: {
      boxShadow: '0 1px 2px 1px rgba(0, 0, 0, 0.08)',
      color: common.white,
      height: 20,
      width: 20,
    },
    track: {
      backgroundColor: grey[300],
      border: `1px solid ${grey[300]}`,
      borderRadius: 26 / 2,
      opacity: 1,
    },
  },
} as Overrides;

export default OVERRIDES;
