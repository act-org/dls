/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import DIMS from '~/constants/dims';

export default makeStyles(({ typography }) => ({
  inputInput: {
    '&.Mui-disabled': {
      cursor: 'not-allowed',
    },
    fontSize: 14,
    height: DIMS.HEIGHTS.INPUT,
    minHeight: DIMS.HEIGHTS.INPUT,
    padding: `0 ${DIMS.LAYOUT_PADDING}px`,
  },
  inputInputPassword: {
    fontSize: 22,
    fontWeight: typography.fontWeightBold,
    letterSpacing: 4,
  },
  inputRoot: {
    backgroundColor: grey[100],
    border: `1px solid ${grey[300]}`,
    borderRadius: 2,
    marginTop: 8,
  },
}));
