/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { common, grey } from '@mui/material/colors';
import { Components } from '@mui/material/styles';
import { IconProps } from '@mui/x-data-grid/models/gridBaseSlots';
import Color from 'color';
import FilterVariant from '~/icons/FilterVariant';

import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';

import CUSTOM_DIMS from './customDims';
import { COLORS } from './palette';
import SHAPE from './shape';
import spacing from './spacing';
import TYPOGRAPHY from './typography';

import type {} from '@mui/x-data-grid/themeAugmentation';

export const components: Components = {
  [DLS_COMPONENT_NAMES.BAR_CHART]: {
    defaultProps: {
      xAxisProps: {
        style: {
          fill: grey[700],
          fontSize: TYPOGRAPHY?.caption?.fontSize,
        },
      },
      yAxisProps: {
        width: 85,
      },
    },
  },
  [DLS_COMPONENT_NAMES.LINE_CHART]: {
    defaultProps: {
      xAxisProps: {
        style: {
          fill: grey[700],
          fontSize: TYPOGRAPHY?.caption?.fontSize,
        },
      },
      yAxisProps: {
        style: {
          fill: grey[700],
          fontSize: TYPOGRAPHY?.caption?.fontSize,
          fontWeight: TYPOGRAPHY?.fontWeightRegular,
        },
      },
    },
  },
  [DLS_COMPONENT_NAMES.PIE_CHART]: {
    defaultProps: {
      chartLegendTextFontSize: TYPOGRAPHY?.body2?.fontSize,
      chartLegendTextFontSizeSmall: TYPOGRAPHY?.caption?.fontSize,
    },
  },
  [DLS_COMPONENT_NAMES.STACKED_BAR_CHART]: {
    defaultProps: {
      customizeBarText: i => ({
        fill: i === 2 ? common.white : common.black,
        fontSize: TYPOGRAPHY?.caption?.fontSize,
      }),
      subLabelProps: {
        style: {
          fill: common.black,
          fontSize: TYPOGRAPHY?.caption?.fontSize,
        },
      },
    },
  },
  MuiAccordion: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiAccordionActions: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiAccordionDetails: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiAccordionSummary: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiAlert: {
    defaultProps: {
      closeText: 'Close',
      severity: 'info',
      variant: 'standard',
    },
    styleOverrides: {
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
  },
  MuiAlertTitle: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiAppBar: {
    defaultProps: {},
    styleOverrides: {
      root: {
        height: CUSTOM_DIMS.heights.header,
      },
    },
  },
  MuiAutocomplete: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiAvatar: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiAvatarGroup: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiBackdrop: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiBadge: {
    defaultProps: {},
    styleOverrides: {
      badge: {
        fontSize: 10,
      },
    },
  },
  MuiBottomNavigation: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiBottomNavigationAction: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiBreadcrumbs: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiButton: {
    defaultProps: {
      variant: 'outlined',
    },
    styleOverrides: {
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
  },
  MuiButtonBase: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiButtonGroup: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {},
  },
  MuiCard: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiCardActionArea: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiCardActions: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiCardContent: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiCardHeader: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiCardMedia: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiCheckbox: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiChip: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiCircularProgress: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiCollapse: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiContainer: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiCssBaseline: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiDataGrid: {
    defaultProps: {
      disableRowSelectionOnClick: true,
      slots: {
        columnFilteredIcon:
          FilterVariant as React.JSXElementConstructor<IconProps>,
      },
    },
    styleOverrides: {
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
            paddingLeft: spacing(0.5),
            paddingRight: spacing(0.5),
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
            marginRight: spacing(1),
          },
          padding: spacing(1),
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
  },
  MuiDialog: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiDialogActions: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiDialogContent: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiDialogContentText: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiDialogTitle: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiDivider: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiDrawer: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiFab: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiFilledInput: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiFormControl: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiFormControlLabel: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiFormGroup: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiFormHelperText: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiFormLabel: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiGrid: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiIcon: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiIconButton: {
    defaultProps: {},
    styleOverrides: {
      root: {
        height: 36,
        width: 36,
      },
      sizeSmall: {
        height: 32,
        width: 32,
      },
    },
  },
  MuiImageList: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiImageListItem: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiImageListItemBar: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiInput: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiInputAdornment: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiInputBase: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiInputLabel: {
    defaultProps: {},
    styleOverrides: {
      formControl: {
        position: 'relative',
        transform: 'unset',
      },
      // marginDense: {
      //   transform: 'unset',
      // },
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
        marginBottom: spacing(1),
      },
    },
  },
  MuiLinearProgress: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiLink: {
    defaultProps: {
      color: 'primary',
      underline: 'hover',
    },
    styleOverrides: {
      root: {
        cursor: 'pointer',
      },
    },
  },
  MuiList: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiListItem: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiListItemAvatar: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiListItemButton: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiListItemIcon: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiListItemSecondaryAction: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiListItemText: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiListSubheader: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiMenu: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiMenuItem: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiMobileStepper: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiModal: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiNativeSelect: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiOutlinedInput: {
    defaultProps: {},
    styleOverrides: {
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
  },
  MuiPagination: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiPaginationItem: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiPaper: {
    defaultProps: {
      elevation: 3,
    },
    styleOverrides: {},
  },
  MuiPopover: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiRadio: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiRating: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiScopedCssBaseline: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiSelect: {
    defaultProps: {
      variant: 'outlined',
    },
    styleOverrides: {},
  },
  MuiSkeleton: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiSlider: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiSnackbar: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiSnackbarContent: {},
  MuiSpeedDial: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiSpeedDialAction: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiSpeedDialIcon: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiStack: {
    defaultProps: {},
  },
  MuiStep: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiStepButton: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiStepConnector: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiStepContent: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiStepIcon: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiStepLabel: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiStepper: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiSvgIcon: {
    defaultProps: {},
    styleOverrides: {
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
  },
  MuiSwitch: {
    defaultProps: {},
    styleOverrides: {
      root: {
        height: 26,
        margin: spacing(1),
        padding: 0,
        width: 42,
      },
      sizeSmall: {
        height: 26 * 0.9,
        width: 42 * 0.9,
      },
      switchBase: {
        '&.Mui-checked': {
          '& + $track': {
            backgroundColor: COLORS.PRIMARY,
            border: COLORS.PRIMARY,
            opacity: 1,
          },
          color: common.white,
          transform: 'translateX(16px)',
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
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
  },
  MuiTab: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiTable: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiTableBody: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiTableCell: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiTableContainer: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiTableFooter: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiTableHead: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiTablePagination: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiTableRow: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiTableSortLabel: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiTabs: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiTextField: {
    defaultProps: {
      InputLabelProps: {
        shrink: true,
      },
      InputProps: {
        notched: false,
      },
      size: 'small',
      variant: 'outlined',
    },
    styleOverrides: {},
  },
  MuiToggleButton: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiToggleButtonGroup: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiToolbar: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiTooltip: {
    defaultProps: {
      arrow: true,
    },
    styleOverrides: {},
  },
  MuiTouchRipple: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiTypography: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiUseMediaQuery: {
    defaultProps: {},
  },
};

export default components;
