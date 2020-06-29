/**
 * @prettier
 */

import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';

import COLORS from '~/constants/colors';
import TYPOGRAPHY from '~/constants/typography';

export default makeStyles({
  selectComponentRoot: {
    fontSize: 14,
    padding: '11px 16px',
  },
  selectIcon: {
    color: COLORS.TEXT_PRIMARY,
    height: '70%',
    marginRight: 6,
  },
  selectOptionRoot: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
  },
  selectRoot: {
    '&.Mui-disabled': {
      cursor: 'not-allowed',
    },
    backgroundColor: COLORS.LIGHT_GREY,
    border: `1px solid ${grey[300]}`,
    borderRadius: 2,
    color: COLORS.TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
    marginTop: 8,
  },
  selectRootEmpty: {
    color: grey[400],
  },
  warning: {
    left: '100%',
    marginLeft: 3,
    opacity: 0.5,
    position: 'absolute',
    top: '45%',
  },
});
