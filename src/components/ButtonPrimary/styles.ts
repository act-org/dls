/**
 * @prettier
 */

import makeStyles from '~/styles/makeStyles';

export default makeStyles(({ palette, shape, typography }: any) => ({
  label: {
    textTransform: 'none',
  },
  outlined: {
    border: `2px solid red`,
    borderRadius: shape.borderRadius * 5,
    color: palette.primary.main,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeightMedium,
  },
  text: {
    '& .MuiButton-endIcon': {
      marginLeft: 'auto',
    },
    '& .MuiButton-startIcon': {
      color: palette.primary.main,
    },
    justifyContent: 'flex-start',
  },
}));
