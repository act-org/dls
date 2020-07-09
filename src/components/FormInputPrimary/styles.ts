/**
 * @prettier
 */

import DIMS from '~/constants/dims';
import makeStyles from '~/styles/makeStyles';

export default makeStyles({
  inputContainer: {
    position: 'relative',
  },
  labelContainer: {
    marginBottom: DIMS.LAYOUT_PADDING / 2,
  },
  warning: {
    marginLeft: 3,
    opacity: 0.5,
    position: 'absolute',
    right: -28,
    top: '35%',
  },
});
