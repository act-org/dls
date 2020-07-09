/**
 * @prettier
 */

import COLORS from '~/constants/colors';
import makeStyles from '~/styles/makeStyles';

export default makeStyles({
  linkBase: {
    '&:hover': {
      textDecoration: 'underline',
    },
    color: COLORS.LINK,
    textDecoration: 'none',
  },
});
