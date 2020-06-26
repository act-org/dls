/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

// import COLORS from '~/constants/colors';
import DIMS from '~/constants/dims';

export default makeStyles({
  buttonRoot: {
    color: 'red', // FIXME
    textTransform: 'capitalize',
  },
  gridItemAction: {
    marginRight: DIMS.LAYOUT_PADDING,
  },
  typographyRoot: {
    fontSize: 14, // FIXME
  },
});
