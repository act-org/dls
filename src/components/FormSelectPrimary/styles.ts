/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ palette, spacing, typography }) => ({
  labelContainer: {
    marginBottom: spacing(1) / 2,
  },
  selectContainer: {
    position: 'relative',
  },
  selectOptionRoot: {
    color: palette.text.primary,
    fontSize: 14,
    fontWeight: Number(typography.fontWeightRegular),
  },
  warning: {
    left: '100%',
    marginLeft: 3,
    opacity: 0.5,
    position: 'absolute',
    top: '45%',
  },
}));
