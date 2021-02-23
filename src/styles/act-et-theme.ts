/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { createMuiTheme } from '@material-ui/core/styles';

const COLOR_BLACK = '#000';
const COLOR_WHITE = '#FFF';
const COLOR_TEXT_SECONDARY = '#444444';
const COLOR_PRIMARY_LIGHT = '#0077AA';

const TYPOGRAPHY_WEIGHT_LIGHT = 300;
const TYPOGRAPHY_WEIGHT_REGULAR = 400;
const TYPOGRAPHY_WEIGHT_MEDIUM = 500;
const TYPOGRAPHY_WEIGHT_BOLD = 700;

export const COLOR_PALETTE = {
  action: {
    activatedOpacity: 0.12,
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
  },
  background: {
    default: '#FAFAFA',
    paper: COLOR_WHITE,
  },
  common: {
    black: COLOR_BLACK,
    white: COLOR_WHITE,
  },
  divider: '#B2B4B7',
  error: {
    contrastText: COLOR_WHITE,
    dark: '#8E0024',
    main: '#CC0033',
  },
  info: {
    contrastText: COLOR_WHITE,
    dark: '#1976D2',
    light: '#64B5F6',
    main: '#2196F3',
  },
  primary: {
    contrastText: COLOR_WHITE,
    dark: '#042E60',
    light: COLOR_PRIMARY_LIGHT,
    main: '#016089',
  },
  secondary: {
    contrastText: COLOR_WHITE,
    dark: '#004043',
    light: '#46999c',
    main: '#016b6e',
  },
  success: {
    contrastText: COLOR_WHITE,
    dark: '#007B00',
    main: '#009900',
  },
  text: {
    disabled: '#B2B4B7',
    hint: COLOR_TEXT_SECONDARY,
    primary: COLOR_BLACK,
    secondary: COLOR_TEXT_SECONDARY,
  },
  warning: {
    contrastText: COLOR_BLACK,
    dark: '#D14900',
    main: '#FF9900',
  },
};

export const ActETTheme = {
  overrides: {
    MuiAlert: {
      filledWarning: {
        // color: COLOR_BLACK,
      },
      /*
      outlinedSuccess: {
        // color: COLOR_WHITE,
      },
      standardSuccess: {
        // backgroundColor: COLOR_SUCCESS_MAIN,
        // color: COLOR_WHITE,
      },
      */
      /*
      standardError: {
        backgroundColor: '#FAE6EB',
        color: '#8E0024',
      },
      standardInfo: {
        backgroundColor: '#E6F2F7',
        color: '#003B55',
      },
      standardWarning: {
        backgroundColor: 'red',
        color: 'blue',
      },
      outlinedError: {
        color: '#8E0024',
      },
      outlinedInfo: {
        color: '#003B55',
      },
      outlinedWarning: {
        color: '#826E0D',
      },
      */
    },
  },
  palette: {
    ...COLOR_PALETTE,
    contrastThreshold: 3,
    tonalOffset: {
      dark: 0.2,
      light: 0.2,
    },
  },
  typography: {
    body1: {
      fontSize: '1.125rem',
      fontWeight: TYPOGRAPHY_WEIGHT_REGULAR,
      letterSpacing: 0,
      lineHeight: '1.5rem',
    },
    body2: {
      color: COLOR_TEXT_SECONDARY,
      fontSize: '0.875rem',
      fontWeight: TYPOGRAPHY_WEIGHT_REGULAR,
      letterSpacing: 0,
      lineHeight: '1.5rem',
    },
    button: {
      color: COLOR_PRIMARY_LIGHT,
      fontSize: '0.875rem',
      fontWeight: TYPOGRAPHY_WEIGHT_BOLD,
      letterSpacing: 0,
      lineHeight: '1.5rem',
      textTransform: 'none' as any,
    },
    caption: {
      color: COLOR_TEXT_SECONDARY,
      fontSize: '0.75rem',
      fontWeight: TYPOGRAPHY_WEIGHT_MEDIUM,
      letterSpacing: 0,
      lineHeight: '1rem',
    },
    fontFamily: ['Montserrat', 'Helvetica', 'sans-serif'].join(','),
    fontSize: 18,
    fontWeightBold: TYPOGRAPHY_WEIGHT_BOLD,
    fontWeightLight: TYPOGRAPHY_WEIGHT_LIGHT,
    fontWeightMedium: TYPOGRAPHY_WEIGHT_MEDIUM,
    fontWeightRegular: TYPOGRAPHY_WEIGHT_REGULAR,
    h1: {
      fontSize: '2.5rem',
      fontWeight: TYPOGRAPHY_WEIGHT_BOLD,
      letterSpacing: 0,
      lineHeight: '3.5rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: TYPOGRAPHY_WEIGHT_BOLD,
      letterSpacing: 0,
      lineHeight: '3rem',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: TYPOGRAPHY_WEIGHT_BOLD,
      letterSpacing: 0,
      lineHeight: '2.5rem',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: TYPOGRAPHY_WEIGHT_MEDIUM,
      letterSpacing: 0,
      lineHeight: '2.5rem',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: TYPOGRAPHY_WEIGHT_BOLD,
      letterSpacing: 0,
      lineHeight: '2rem',
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: TYPOGRAPHY_WEIGHT_MEDIUM,
      letterSpacing: 0,
      lineHeight: '2rem',
    },
    htmlFontSize: 16,
    overline: {
      color: COLOR_TEXT_SECONDARY,
      fontSize: '0.75rem',
      fontWeight: TYPOGRAPHY_WEIGHT_REGULAR,
      letterSpacing: '0.031rem',
      lineHeight: '1rem',
      textTransform: 'uppercase' as any,
    },
    subtitle1: {
      color: COLOR_TEXT_SECONDARY,
      fontSize: '0.75rem',
      fontWeight: TYPOGRAPHY_WEIGHT_REGULAR,
      letterSpacing: '0.031rem',
      lineHeight: '1rem',
      textTransform: 'uppercase' as any,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: TYPOGRAPHY_WEIGHT_MEDIUM,
      letterSpacing: 0,
      lineHeight: '1.5rem',
    },
  },
};

export default createMuiTheme(ActETTheme);
