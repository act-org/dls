/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

import DIMS from '../../constants/dims';

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
