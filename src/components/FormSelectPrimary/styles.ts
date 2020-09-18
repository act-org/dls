/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

import DIMS from '~/constants/dims';
import TYPOGRAPHY from '~/constants/typography';

export default makeStyles({
  labelContainer: {
    marginBottom: DIMS.LAYOUT_PADDING / 2,
  },
  selectContainer: {
    position: 'relative',
  },
  selectOptionRoot: {
    color: '#2d2d2d', // FIXME: COLORS.TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
  },
  warning: {
    left: '100%',
    marginLeft: 3,
    opacity: 0.5,
    position: 'absolute',
    top: '45%',
  },
});
