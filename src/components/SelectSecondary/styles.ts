/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

const BORDER_WIDTH = 2;

export default makeStyles(({ palette, shape, typography }: any) => ({
  selectIcon: {
    color: palette.primary.main,
  },
  selectRoot: {
    alignItems: 'center',
    border: `${BORDER_WIDTH}px solid ${palette.primary.main}`,
    borderRadius: `${shape.borderRadius * 5}px !important`,
    color: palette.primary.main,
    display: 'flex',
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeightMedium,
    height: 38 - BORDER_WIDTH * 2,
    marginTop: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
}));
