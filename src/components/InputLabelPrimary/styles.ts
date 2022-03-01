/**
 * @prettier
 */

import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(({ palette, typography }) => ({
  labelRoot: {
    '& .label-split': {
      '& > .required': {
        color: palette.error.main,
        fontSize: 12,
        fontWeight: Number(typography.fontWeightRegular),
      },
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
    },
    color: palette.text.primary,
    fontSize: 14,
    fontWeight: Number(typography.fontWeightBold),
    position: 'relative',
  },
}));
