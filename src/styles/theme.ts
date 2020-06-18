/**
 * @prettier
 */

import { createMuiTheme } from '@material-ui/core/styles';

import COLORS from '~/constants/colors';

export const theme = {
  palette: {
    primary: {
      dark: COLORS.PRIMARY,
      light: COLORS.PRIMARY,
      main: COLORS.PRIMARY,
    },
    secondary: {
      main: COLORS.WHITE,
    },
    text: {
      primary: COLORS.TEXT_PRIMARY,
      secondary: COLORS.MEDIUM_GREY,
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Helvetica', 'sans-serif'].join(','),
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    htmlFontSize: 18,
  },
};

export default createMuiTheme(theme);
