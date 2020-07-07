/**
 * @prettier
 */

import { grey } from '@material-ui/core/colors';

import DIMS from '~/constants/dims';
import makeStyles from '~/styles/makeStyles';

export default makeStyles(({ typography }: any) => ({
  tableCellRoot: {
    fontSize: '0.888rem',
    fontWeight: typography.fontWeightRegular,
    padding: `${DIMS.LAYOUT_PADDING}px !important`,
  },
  tableCellRootSortApplied: {
    backgroundColor: grey[100],
  },
}));
