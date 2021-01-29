/**
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import COLORS from '~/constants/colors';
import DIMS from '~/constants/dims';
import TYPOGRAPHY from '~/constants/typography';

export const primary = makeStyles({
  inputInput: {
    '&.Mui-disabled': {
      cursor: 'not-allowed',
    },
    fontSize: 14,
    height: DIMS.HEIGHTS.INPUT,
    minHeight: DIMS.HEIGHTS.INPUT,
    padding: `0 ${DIMS.LAYOUT_PADDING}px`,
  },
  inputInputPassword: {
    fontSize: 22,
    fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 4,
  },
  inputRoot: {
    backgroundColor: grey[100],
    border: `1px solid ${grey[300]}`,
    borderRadius: 2,
    marginTop: 8,
  },
});

export const secondary = makeStyles({
  default: {
    height: DIMS.SECONDARY.HEIGHTS.INPUT,
    minHeight: DIMS.SECONDARY.HEIGHTS.INPUT,
  },
  inputInput: {
    '&.Mui-disabled': {
      cursor: 'not-allowed',
    },
    fontSize: 14,
    padding: `${DIMS.LAYOUT_PADDING}px`,
  },
  inputInputPassword: {
    fontSize: 22,
    fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 4,
  },
  inputRoot: {
    border: `1px solid ${COLORS.BORDER_SECONDARY}`,
    borderRadius: DIMS.SECONDARY.BORDER_RADIUS * 2,
    color: COLORS.DARK_SECONDARY,
  },
  large: {
    height: DIMS.SECONDARY.HEIGHTS.INPUT + DIMS.SECONDARY.HEIGHT_INCREMENT,
    minHeight: DIMS.SECONDARY.HEIGHTS.INPUT + DIMS.SECONDARY.HEIGHT_INCREMENT,
  },
  multiline: {
    height: 'unset',
  },
});
