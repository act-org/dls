/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';
import TYPOGRAPHY from '~/constants/typography';

export default makeStyles({
  labelRoot: {
    '& .label-split': {
      '& > .required': {
        fontSize: 12,
        fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
      },
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
    },
    fontSize: 14,
    fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
    position: 'relative',
  },
});
