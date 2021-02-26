/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { createMuiTheme } from '@material-ui/core/styles';

import TYPOGRAPHY from '~/constants/typography';

const COLORS = {
  BLACK: '#000',
  ERROR_DARK: '#8E0024',
  INFO_DARK: '#1976D2',
  PRIMARY_LIGHT: '#0077AA',
  SUCCESS_DARK: '#007B00',
  TEXT_SECONDARY: '#444444',
  WARNING_DARK: '#D14900',
  WHITE: '#FFF',
};

export const COLOR_PALETTE_ACT_ET = {
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
    paper: COLORS.WHITE,
  },
  common: {
    black: COLORS.BLACK,
    white: COLORS.WHITE,
  },
  divider: '#B2B4B7',
  error: {
    contrastText: COLORS.WHITE,
    dark: COLORS.ERROR_DARK,
    main: '#CC0033',
  },
  info: {
    contrastText: COLORS.WHITE,
    dark: COLORS.INFO_DARK,
    light: '#64B5F6',
    main: '#2196F3',
  },
  primary: {
    contrastText: COLORS.WHITE,
    dark: '#042E60',
    light: COLORS.PRIMARY_LIGHT,
    main: '#016089',
  },
  secondary: {
    contrastText: COLORS.WHITE,
    dark: '#004043',
    light: '#46999c',
    main: '#016b6e',
  },
  success: {
    contrastText: COLORS.WHITE,
    dark: COLORS.SUCCESS_DARK,
    main: '#009900',
  },
  text: {
    disabled: '#B2B4B7',
    hint: COLORS.TEXT_SECONDARY,
    primary: COLORS.BLACK,
    secondary: COLORS.TEXT_SECONDARY,
  },
  warning: {
    contrastText: COLORS.BLACK,
    dark: COLORS.WARNING_DARK,
    main: '#FF9900',
  },
};

export const THEME_ACT_ET = {
  overrides: {
    MuiAlert: {
      closeText: 'Close',
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
      severity: 'info',
      variant: 'standard',
    },
  },
  palette: {
    ...COLOR_PALETTE_ACT_ET,
    contrastThreshold: 3,
    tonalOffset: {
      dark: 0.2,
      light: 0.2,
    },
  },
  typography: {
    body1: {
      fontSize: '1.125rem',
      fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
      letterSpacing: 0,
      lineHeight: '1.5rem',
    },
    body2: {
      color: COLORS.TEXT_SECONDARY,
      fontSize: '0.875rem',
      fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
      letterSpacing: 0,
      lineHeight: '1.5rem',
    },
    button: {
      color: COLORS.PRIMARY_LIGHT,
      fontSize: '0.875rem',
      fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
      letterSpacing: 0,
      lineHeight: '1.5rem',
      textTransform: 'none' as any,
    },
    caption: {
      color: COLORS.TEXT_SECONDARY,
      fontSize: '0.75rem',
      fontWeight: TYPOGRAPHY.WEIGHT_MEDIUM,
      letterSpacing: 0,
      lineHeight: '1rem',
    },
    fontFamily: ['Montserrat', 'Helvetica', 'sans-serif'].join(','),
    fontSize: 18,
    fontWeightBold: TYPOGRAPHY.WEIGHT_BOLD,
    fontWeightLight: TYPOGRAPHY.WEIGHT_LIGHT,
    fontWeightMedium: TYPOGRAPHY.WEIGHT_MEDIUM,
    fontWeightRegular: TYPOGRAPHY.WEIGHT_REGULAR,
    h1: {
      fontSize: '2.5rem',
      fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
      letterSpacing: 0,
      lineHeight: '3.5rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
      letterSpacing: 0,
      lineHeight: '3rem',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
      letterSpacing: 0,
      lineHeight: '2.5rem',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: TYPOGRAPHY.WEIGHT_MEDIUM,
      letterSpacing: 0,
      lineHeight: '2.5rem',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
      letterSpacing: 0,
      lineHeight: '2rem',
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: TYPOGRAPHY.WEIGHT_MEDIUM,
      letterSpacing: 0,
      lineHeight: '2rem',
    },
    htmlFontSize: 16,
    overline: {
      color: COLORS.TEXT_SECONDARY,
      fontSize: '0.75rem',
      fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
      letterSpacing: '0.031rem',
      lineHeight: '1rem',
      textTransform: 'uppercase' as any,
    },
    subtitle1: {
      color: COLORS.TEXT_SECONDARY,
      fontSize: '0.75rem',
      fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
      letterSpacing: '0.031rem',
      lineHeight: '1rem',
      textTransform: 'uppercase' as any,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: TYPOGRAPHY.WEIGHT_MEDIUM,
      letterSpacing: 0,
      lineHeight: '1.5rem',
    },
  },
};

export default createMuiTheme(THEME_ACT_ET);
