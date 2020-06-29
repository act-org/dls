/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

import DIMS from '~/constants/dims';

export default makeStyles({
  gridContainerRoot: {
    marginBottom: DIMS.LAYOUT_PADDING / 2,
  },
  gridItemRoot: {
    flex: 1,
  },
});
