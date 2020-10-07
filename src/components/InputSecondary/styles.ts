/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

import COLORS from '~/constants/colors';
import DIMS from '~/constants/dims';
import TYPOGRAPHY from '~/constants/typography';

export default makeStyles({
  default: {
    height: DIMS.SECONDARY.HEIGHTS.INPUT,
    minHeight: DIMS.SECONDARY.HEIGHTS.INPUT,
  },
  inputInput: {
    '&.Mui-disabled': {
      cursor: 'not-allowed',
    },
    fontSize: 14,
    padding: `0 ${DIMS.LAYOUT_PADDING}px`,
  },
  inputInputPassword: {
    fontSize: 22,
    fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 4,
  },
  inputRoot: {
    border: `1px solid ${COLORS.BORDER_SECONDARY}`,
    borderRadius: DIMS.SECONDARY.BORDER_RADIUS * 2,
    color: COLORS.DARK_SECONDARY,
  },
  large: {
    height: DIMS.SECONDARY.HEIGHTS.INPUT + DIMS.SECONDARY.HEIGHT_INCREMENT,
    minHeight: DIMS.SECONDARY.HEIGHTS.INPUT + DIMS.SECONDARY.HEIGHT_INCREMENT,
  },
  multiline: {
    height: 'unset',
  },
});
