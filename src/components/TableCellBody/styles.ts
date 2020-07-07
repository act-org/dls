/**
 * @prettier
 */

import DIMS from '~/constants/dims';
import grey from '~/colors/grey';
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
