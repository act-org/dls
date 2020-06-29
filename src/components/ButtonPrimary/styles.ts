/**
 * @prettier
 */

import { makeStyles } from '@material-ui/styles';

export default makeStyles(({ palette, shape, typography }: any) => ({
  label: {
    textTransform: 'none',
  },
  outlined: {
    border: `2px solid ${palette.primary.main}`,
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