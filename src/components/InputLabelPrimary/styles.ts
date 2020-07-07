/**
 * @prettier
 */

import COLORS from '~/constants/colors';
import makeStyles from '~/styles/makeStyles';
import TYPOGRAPHY from '~/constants/typography';

export default makeStyles({
  labelRoot: {
    '& .label-split': {
      '& > .required': {
        color: COLORS.REQUIRED,
        fontSize: 12,
        fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
      },
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
    },
    color: COLORS.TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
    position: 'relative',
  },
});
