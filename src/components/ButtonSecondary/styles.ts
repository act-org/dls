/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';
import COLORS from '~/constants/colors';

export default makeStyles({
  contained: {
    '&:hover': {
      backgroundColor: COLORS.PRIMARY_DARK,
    },
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 90,
    color: COLORS.WHITE,
  },
  default: {
    maxHeight: 40,
    padding: '8px 16px',
  },
  label: {
    fontSize: 14,
    lineHeight: '24px',
    textTransform: 'none',
  },
  large: {
    maxHeight: 42,
    padding: '9px 16px',
  },
  outlined: {
    border: `solid 2px ${COLORS.PRIMARY}`,
    borderRadius: 90,
    color: COLORS.PRIMARY,
  },
  small: {
    maxHeight: 34,
    padding: '5px 16px',
  },
  text: {
    padding: 0,
  },
});
