/**
 * @prettier
 */

import { makeStyles } from '@material-ui/styles';

import COLORS from '~/constants/colors';
import TYPOGRAPHY from '~/constants/typography';

export default makeStyles({
  buttonLabel: {
    textTransform: 'none',
  },
  buttonOutlined: {
    border: `2px solid red`,
    borderRadius: 20,
    color: COLORS.PRIMARY,
    fontSize: 14,
    fontWeight: TYPOGRAPHY.WEIGHT_MEDIUM,
  },
  buttonText: {
    '& .MuiButton-endIcon': { marginLeft: 'auto' },
    '& .MuiButton-startIcon': { color: COLORS.PRIMARY },
    color: COLORS.TEXT_PRIMARY,
    fontSize: 12,
    fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
    justifyContent: 'flex-start',
  },
});
