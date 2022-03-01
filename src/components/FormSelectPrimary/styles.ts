/**
 * @prettier
 */

import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(({ palette, spacing, typography }) => ({
  labelContainer: {
    marginBottom: spacing(0.5),
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
