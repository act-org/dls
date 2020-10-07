/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

import COLORS from '~/constants/colors';
import DIMS from '~/constants/dims';

export default makeStyles({
  '&::-ms-clear, & *::-ms-clear': {
    display: 'none',
  },
  default: {
    height: DIMS.SECONDARY.HEIGHTS.INPUT,
  },
  iconClose: {
    color: COLORS.BLACK_38,
  },
  iconCloseHidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
  inputAdornmentRoot: {
    color: COLORS.BORDER_SECONDARY,
  },
  large: {
    height: DIMS.SECONDARY.HEIGHTS.INPUT + DIMS.SECONDARY.HEIGHT_INCREMENT,
  },
  outlinedInputNotchedOutlined: {
    borderColor: COLORS.BORDER_SECONDARY,
  },
  outlinedInputRoot: {
    borderRadius: DIMS.SECONDARY.BORDER_RADIUS * 2,
    color: COLORS.DARK_SECONDARY,
    fontSize: 14,
    paddingLeft: DIMS.LAYOUT_PADDING,
    paddingRight: 0,
  },
});
