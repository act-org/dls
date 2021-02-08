/**
 * @prettier
 */

import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import TYPOGRAPHY from '~/constants/typography';
import type { } from "@material-ui/lab/themeAugmentation";

const backgroundDisabled = '#FCFCFC';
const placeHolder = '#767676';
const ACTColorPalette = {
  primary: {
    dark: '#042E60',
    light: '#0077AA',
    main: '#0077AA',
    contrastText: '#ffffff'
  },
  secondary: {
    dark: '#004043',
    light: '#46999c',
    main: '#016b6e',
    contrastText: '#ffffff'
  },
  success: {
    main: '#007B00'
  },
  error: {
    main: '#8E0024'
  },
  warning: {
    main: '#826E0D'
  },
  text: {
    primary: '#000000',
    secondary: '#000000',
    disabled: '#CCCCCC',
  },
}


export const ACTTheme: ThemeOptions = {
  palette: ACTColorPalette,
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
    borderRadius: 2
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'none'
      }
    },
    MuiOutlinedInput: {
      root: {
        "&$disabled": {
          cursor: "not-allowed",
          border: `1px solid ${ACTColorPalette.text.disabled}`,
          color: `${ACTColorPalette.text.disabled}`,
          backgroundColor: `${backgroundDisabled}`
        },
      },
      notchedOutline: {
        border: `1px solid ${ACTColorPalette.primary.main}`,
      },
      input: {
        '&::placeholder': {
          color: `${placeHolder}`,
          opacity: 1
        },
        fontSize: `1rem`,
        "&$disabled": {
          cursor: "not-allowed",
        },
      },
    },
    MuiInputLabel: {
      root: {
        color: `${ACTColorPalette.text.primary}`,
        marginBottom: `15px`,
        fontSize: `1rem`
      }
    },
    MuiSelect: {
      outlined: {
        fontSize: '1.125rem',
        fontWeight: 'normal',
        backgroundColor: '#FFFFFF',
        height: '54px',
        padding: '20px 25px'
      }
    }
  }
};

export default createMuiTheme(ACTTheme);
