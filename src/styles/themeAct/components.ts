import type { } from '@mui/lab/themeAugmentation';
import { common } from '@mui/material/colors';
import { Components } from '@mui/material/styles';
import type { } from '@mui/x-data-grid/themeAugmentation';
import COLORS from './colors';

export const components: Components = {
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
        color: COLORS.ERROR,
      },
      outlinedInfo: {
        color: COLORS.INFO,
      },
      outlinedSuccess: {
        color: COLORS.SUCCESS,
      },
      outlinedWarning: {
        color: COLORS.WARNING,
      },
      standardError: {
        backgroundColor: COLORS.ERROR_BACKGROUND,
        color: COLORS.ERROR,
      },
      standardInfo: {
        backgroundColor: COLORS.INFO_BACKGROUND,
        color: COLORS.INFO,
      },
      standardSuccess: {
        backgroundColor: COLORS.SUCCESS_BACKGROUND,
        color: COLORS.SUCCESS,
      },
      standardWarning: {
        backgroundColor: COLORS.WARNING_BACKGROUND,
        color: COLORS.WARNING,
      },
    },

  },
  MuiAlertTitle: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiAppBar: {
    defaultProps: {
      color: 'primary',
    },
    styleOverrides: {
      colorPrimary: {
        backgroundColor: COLORS.PRIMARY_DARK,
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
    styleOverrides: {},
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
    defaultProps: {
      color: 'primary',
    },
    styleOverrides: {
      root: {
        marginBottom: '.6em',
      }
    },
  },
  MuiButton: {
    defaultProps: {
      color: 'primary',
      disableElevation: true,
      size: 'medium',
    },
    styleOverrides: {},
  },
  MuiButtonBase: {

    defaultProps: {
      color: 'primary',
    },
    styleOverrides: {},
  },
  MuiButtonGroup: {
    defaultProps: {},
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
    defaultProps: {
      color: 'primary',
    },
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
      autoHeight: true,
      autoPageSize: true,
      density: 'standard',
      filterMode: 'client',
      sortingMode: 'client',
    },
    styleOverrides: {},
  },
  MuiDialog: {
    defaultProps: {
      fullWidth: true,
      maxWidth: 'md',
    },
    styleOverrides: {},
  },
  MuiDialogActions: {
    defaultProps: {},
    styleOverrides: {
      root: {
        backgroundColor: COLORS.OVERLAY_BACKGROUND,
      },
    },

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
    styleOverrides: {
      root: {
        backgroundColor: COLORS.OVERLAY_BACKGROUND,
      },
    },

  },
  MuiDivider: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiDrawer: {
    defaultProps: {
      color: 'primary',
      variant: 'persistent',
    },
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
    styleOverrides: {
      root: {
          '.MuiFormControl-root': {
            marginBottom: '1em'
          }
      }
    },
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
    defaultProps: {
      color: 'primary',
    },
    styleOverrides: {},
  },
  MuiIconButton: {
    defaultProps: {
      color: 'primary',
    },
    styleOverrides: {},
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
    defaultProps: {
      color: 'primary'
    },
    styleOverrides: {
      formControl: {
        position: 'relative',
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
        marginBottom: '.5rem'
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
    styleOverrides: {},
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
    defaultProps: {
      color: 'primary',
      type: 'text',
    },
    styleOverrides: {

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
    defaultProps: {},
    styleOverrides: {},
  },
  MuiPopover: {
    defaultProps: {},
    styleOverrides: {},
  },
  MuiRadio: {
    defaultProps: {
      color: 'primary',
    },
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
      displayEmpty: true,
      variant: 'outlined',
    },
    styleOverrides: {
      outlined: {
        backgroundColor: common.white,
        fontSize: '1.125rem',
        fontWeight: 'normal',
        padding: '15px 15px',
      },
    },
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
    styleOverrides: {},
  },
  MuiSwitch: {
    defaultProps: {
      color: 'primary',
      size: 'medium',
    },
    styleOverrides: {},
  },
  MuiTab: {
    defaultProps: {},
    styleOverrides: {
      root: {
        textTransform: undefined,
      },
    },
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
    defaultProps: { color: 'primary' },
    styleOverrides: {},
  },
  MuiTooltip: {
    defaultProps: {
      color: 'primary',
    },
    styleOverrides: {
      arrow: {
        color: COLORS.PRIMARY_DARK,
      },
      tooltip: {
        backgroundColor: COLORS.PRIMARY_DARK,
        color: common.white,
      },
    },
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
}

export default components;