/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ spacing }) => ({
  inputContainer: {
    position: 'relative',
  },
  labelContainer: {
    marginBottom: spacing(1) / 2,
  },
  warning: {
    marginLeft: 3,
    opacity: 0.5,
    position: 'absolute',
    right: -28,
    top: '35%',
  },
}));
