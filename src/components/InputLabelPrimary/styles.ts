/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ palette, typography }) => ({
  labelRoot: {
    '& .label-split': {
      '& > .required': {
        color: palette.error.main,
        fontSize: 12,
        fontWeight: typography.fontWeightRegular,
      },
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
    },
    color: palette.text.primary,
    fontSize: 14,
    fontWeight: typography.fontWeightBold,
    position: 'relative',
  },
}));
