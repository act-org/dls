/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */
/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import TYPOGRAPHY from '~/constants/typography';
import { DataGridProps } from '@material-ui/data-grid';
// eslint-disable-next-line prettier/prettier
import { LabComponentsPropsList } from '@material-ui/lab/themeAugmentation';

export interface DataGridPropsList {
  MuiDataGrid: DataGridProps;
}

declare module '@material-ui/core/styles/props' {
  // eslint-disable-next-line prettier/prettier
  interface ComponentsPropsList
    extends LabComponentsPropsList,
      DataGridPropsList {}
}

const backgroundDisabled = '#FCFCFC';
const placeHolder = '#767676';
const COLOR_PALETTE_ACT = {
  primary: {
    contrastText: '#ffffff',
    dark: '#042E60',
    light: '#0077AA',
    main: '#0077AA',
  },
  secondary: {
    contrastText: '#ffffff',
    dark: '#004043',
    light: '#46999c',
    main: '#016b6e',
  },
  info: {
    main: '#003B55',
  },
  success: {
    main: '#007B00',
  },
  error: {
    main: '#8E0024',
  },
  warning: {
    main: '#826E0D',
  },
  text: {
    primary: '#000000',
    secondary: '#000000',
    disabled: '#CCCCCC',
  },
};

export const THEME_ACT: ThemeOptions = {
  palette: COLOR_PALETTE_ACT,
  typography: {
    fontFamily: ['Montserrat', 'Helvetica', 'sans-serif'].join(','),
    fontWeightBold: TYPOGRAPHY.WEIGHT_BOLD,
    fontWeightLight: TYPOGRAPHY.WEIGHT_LIGHT,
    fontWeightMedium: TYPOGRAPHY.WEIGHT_MEDIUM,
    fontWeightRegular: TYPOGRAPHY.WEIGHT_REGULAR,
    htmlFontSize: 16,
    fontSize: 16,
  },
  shape: {
    borderRadius: 2,
  },
  props: {
    MuiOutlinedInput: {
      color: 'primary',
      type: 'text',
    },
    MuiCheckbox: {
      color: 'primary',
    },
    MuiRadio: {
      color: 'primary',
    },
    MuiDialog: {
      fullWidth: true,
      maxWidth: 'md',
    },
    MuiIcon: {
      color: 'primary',
    },
    MuiIconButton: {
      color: 'primary',
    },
    MuiInputLabel: {
      color: 'primary',
    },
    MuiLink: {
      color: 'primary',
      underline: 'hover',
    },
    MuiAlert: {
      closeText: 'Close',
      severity: 'info',
      variant: 'standard',
    },
    MuiAppBar: {
      color: 'primary',
    },
    MuiButton: {
      color: 'primary',
      disableElevation: true,
      size: 'medium',
      variant: 'outlined',
    },
    MuiSelect: {
      variant: 'outlined',
      displayEmpty: true,
    },
    MuiSwitch: {
      size: 'medium',
      color: 'primary',
    },
    MuiDataGrid: {
      autoHeight: true,
      autoPageSize: true,
      density: 'standard',
      filterMode: 'client',
      sortingMode: 'client',
    },
    MuiDrawer: {
      color: 'primary',
      variant: 'persistent',
    },
    MuiToolbar: {
      color: 'primary',
    },
    MuiTooltip: {
      color: 'primary',
    },
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: COLOR_PALETTE_ACT.primary.dark,
      },
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: '#F2F4F7',
      },
    },
    MuiDialogActions: {
      root: {
        backgroundColor: '#F2F4F7',
      },
    },
    MuiOutlinedInput: {
      root: {
        '&$disabled': {
          cursor: 'not-allowed',
          border: `1px solid ${COLOR_PALETTE_ACT.text.disabled}`,
          color: `${COLOR_PALETTE_ACT.text.disabled}`,
          backgroundColor: `${backgroundDisabled}`,
        },
      },
      notchedOutline: {
        border: `1px solid ${COLOR_PALETTE_ACT.primary.main}`,
      },
      input: {
        '&::placeholder': {
          color: `${placeHolder}`,
          opacity: 1,
        },
        fontSize: `1rem`,
        '&$disabled': {
          cursor: 'not-allowed',
        },
        paddingTop: '15px',
        paddingBottom: '15px',
      },
      multiline: {
        paddingTop: '15px',
        paddingBottom: '15px',
      },
    },
    MuiInputLabel: {
      root: {
        color: `${COLOR_PALETTE_ACT.text.primary}`,
        marginBottom: `15px`,
        fontSize: `1rem`,
      },
      formControl: {
        position: 'relative',
        transform: undefined,
      },
      shrink: {
        transform: undefined,
        transformOrigin: undefined,
      },
    },
    MuiSelect: {
      outlined: {
        fontSize: '1.125rem',
        fontWeight: 'normal',
        backgroundColor: '#FFFFFF',
        padding: '15px 15px',
      },
    },
    MuiAlert: {
      standardError: {
        backgroundColor: '#FAE6EB',
        color: '#8E0024',
      },
      standardInfo: {
        backgroundColor: '#E6F2F7',
        color: '#003B55',
      },
      standardSuccess: {
        backgroundColor: '#D9F0D9',
        color: '#007B00',
      },
      standardWarning: {
        backgroundColor: '#FEF8DC',
        color: '#826E0D',
      },
      outlinedError: {
        color: '#8E0024',
      },
      outlinedInfo: {
        color: '#003B55',
      },
      outlinedSuccess: {
        color: '#007B00',
      },
      outlinedWarning: {
        color: '#826E0D',
      },
    },
    MuiTab: {
      root: {
        textTransform: undefined,
      },
    },
  },
};

export default createMuiTheme(THEME_ACT);
