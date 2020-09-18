/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

import COLORS from '~/constants/colors';

export default makeStyles({
  linkBase: {
    '&:hover': {
      textDecoration: 'underline',
    },
    color: COLORS.LINK,
    textDecoration: 'none',
  },
});
