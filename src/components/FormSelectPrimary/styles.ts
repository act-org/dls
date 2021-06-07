/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

import DIMS from '~/constants/dims';

export default makeStyles(({ palette, typography }) => ({
  labelContainer: {
    marginBottom: DIMS.LAYOUT_PADDING / 2,
  },
  selectContainer: {
    position: 'relative',
  },
  selectOptionRoot: {
    color: palette.text.primary,
    fontSize: 14,
    fontWeight: typography.fontWeightRegular,
  },
  warning: {
    left: '100%',
    marginLeft: 3,
    opacity: 0.5,
    position: 'absolute',
    top: '45%',
  },
}));
