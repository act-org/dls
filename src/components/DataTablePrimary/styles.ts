/**
 * @prettier
 */

import makeStyles from '~/styles/makeStyles';

import DIMS from '~/constants/dims';

export default makeStyles({
  emptyStateContainer: {
    padding: `${DIMS.LAYOUT_PADDING * 2.5}px ${DIMS.LAYOUT_PADDING}px
      ${DIMS.LAYOUT_PADDING}px ${DIMS.LAYOUT_PADDING}px`,
    width: '100%',
  },
});
