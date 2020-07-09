/**
 * @prettier
 */

import DIMS from '~/constants/dims';
import makeStyles from '~/styles/makeStyles';

export default makeStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  typographyRoot: {
    marginTop: DIMS.LAYOUT_PADDING / 2,
  },
});
