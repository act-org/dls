/**
 * @prettier
 */

import COLORS from '~/constants/colors';
import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import TYPOGRAPHY from '~/constants/typography';

export const theme: ThemeOptions = {
  palette: {
    primary: {
      dark: '#000336',
      light: '#3e568e',
      main: '#042e60',
      contrastText: '#ffffff'
    },
    secondary: {
      dark: '#004043',
      light: '#46999c',
      main: '#016b6e',
      contrastText: '#ffffff'
    },
    text: {
      primary: COLORS.TEXT_PRIMARY,
      secondary: COLORS.TEXT_SECONDARY,
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Helvetica', 'sans-serif'].join(','),
    fontWeightBold: TYPOGRAPHY.WEIGHT_BOLD,
    fontWeightLight: TYPOGRAPHY.WEIGHT_LIGHT,
    fontWeightMedium: TYPOGRAPHY.WEIGHT_MEDIUM,
    fontWeightRegular: TYPOGRAPHY.WEIGHT_REGULAR,
    htmlFontSize: 18,
  },
};

export default createMuiTheme(theme);
