/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

import COLORS from '~/constants/colors';

export default makeStyles(({ typography }) => ({
  labelRoot: {
    '& .label-split': {
      '& > .required': {
        color: COLORS.REQUIRED,
        fontSize: 12,
        fontWeight: typography.fontWeightRegular,
      },
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
    },
    color: COLORS.TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: typography.fontWeightBold,
    position: 'relative',
  },
}));
