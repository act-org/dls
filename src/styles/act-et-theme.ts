/**
 * @prettier
 */

import COLORS from '~/constants/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import TYPOGRAPHY from '~/constants/typography';

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
