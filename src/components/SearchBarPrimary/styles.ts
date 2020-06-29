/**
 * @prettier
 */

import { makeStyles } from '@material-ui/styles';

import COLORS from '~/constants/colors';

export default makeStyles({
  '&::-ms-clear, & *::-ms-clear': {
    display: 'none',
  },
  iconClose: {
    color: COLORS.BLACK_38,
  },
  iconCloseHidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
  inputAdornmentRoot: {
    color: '#8f8f8f', // FIXME: COLORS.MEDIUM_GREY,
  },
  outlinedInputNotchedOutlined: {
    borderColor: '#f1f1f1',
  },
  outlinedInputRoot: {
    backgroundColor: '#f9f9f9', // FIXME: COLORS.LIGHT_GREY,
    borderRadius: 11,
    color: '#2d2d2d', // FIXME: COLORS.TEXT_PRIMARY,
    fontSize: 14,
    height: 40,
    paddingRight: 0,
  },
});
