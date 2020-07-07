/**
 * @prettier
 */

import { grey } from '@material-ui/core/colors';

import DIMS from '~/constants/dims';
import makeStyles from '~/styles/makeStyles';
import TYPOGRAPHY from '~/constants/typography';

export default makeStyles({
  inputBaseInput: {
    '&.Mui-disabled': {
      cursor: 'not-allowed',
    },
    fontSize: 14,
    height: DIMS.HEIGHTS.INPUT,
    minHeight: DIMS.HEIGHTS.INPUT,
    padding: `0 ${DIMS.LAYOUT_PADDING}px`,
  },
  inputBaseInputPassword: {
    fontSize: 22,
    fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 4,
  },
  inputBaseRoot: {
    backgroundColor: grey[100],
    border: `1px solid ${grey[300]}`,
    borderRadius: 2,
    marginTop: 8,
  },
});
