/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

import COLORS from '~/constants/colors';
import DIMS from '~/constants/dims';

export default makeStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  descriptionRoot: {
    color: COLORS.BLACK_54,
    marginBottom: DIMS.LAYOUT_PADDING * 2,
    marginTop: DIMS.LAYOUT_PADDING / 2,
    maxWidth: 350,
  },
  descriptionRootFlexibleHeight: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  descriptionRootWithoutTitle: {
    marginTop: DIMS.LAYOUT_PADDING * 2,
  },
  iconRoot: {
    fontSize: 50,
  },
  titleGridContainer: {
    marginBottom: DIMS.LAYOUT_PADDING,
    marginTop: DIMS.LAYOUT_PADDING,
    maxWidth: 300,
  },
  titleGridContainerWithDescription: {
    marginBottom: DIMS.LAYOUT_PADDING / 2,
  },
  titleGridItem: {
    display: 'flex',
  },
});
