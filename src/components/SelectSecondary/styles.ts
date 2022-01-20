/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

const BORDER_WIDTH = 2;

export default makeStyles(({ palette, shape, typography }) => ({
  selectIcon: {
    color: `${palette.primary.main} !important`,
  },
  selectRoot: {
    alignItems: 'center !important',
    border: `${BORDER_WIDTH}px solid ${palette.primary.main} !important`,
    borderRadius: `${shape.borderRadius * 5}px !important`,
    color: `${palette.primary.main} !important`,
    display: 'flex !important',
    fontSize: `${typography.fontSize}px !important`,
    fontWeight: Number(typography.fontWeightMedium),
    height: `${38 - BORDER_WIDTH * 2}px !important`,
    marginTop: '0px !important',
    paddingBottom: '0px !important',
    paddingTop: '0px !important',
  },
}));
