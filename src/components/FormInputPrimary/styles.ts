/**
 * @prettier
 */

import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(({ spacing }) => ({
  inputContainer: {
    position: 'relative',
  },
  labelContainer: {
    marginBottom: spacing(0.5),
  },
  warning: {
    marginLeft: 3,
    opacity: 0.5,
    position: 'absolute',
    right: -28,
    top: '35%',
  },
}));
