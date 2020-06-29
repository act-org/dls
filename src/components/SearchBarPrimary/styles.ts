/**
 * @prettier
 */

import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  '&::-ms-clear, & *::-ms-clear': {
    display: 'none',
  },
  inputIconRoot: {
    color: '#8f8f8f', // FIXME: COLORS.MEDIUM_GREY,
  },
  searchNotchedOutlined: {
    borderColor: '#f1f1f1',
  },
  searchRoot: {
    backgroundColor: '#f9f9f9', // FIXME: COLORS.LIGHT_GREY,
    borderRadius: 11,
    color: '#2d2d2d', // FIXME: COLORS.TEXT_PRIMARY,
    fontSize: 14,
    height: 40,
  },
});
