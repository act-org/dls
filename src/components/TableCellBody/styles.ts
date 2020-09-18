/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

import DIMS from '~/constants/dims';

export default makeStyles(({ typography }: any) => ({
  tableCellRoot: {
    fontSize: '0.888rem',
    fontWeight: typography.fontWeightRegular,
    padding: `${DIMS.LAYOUT_PADDING}px !important`,
  },
}));
