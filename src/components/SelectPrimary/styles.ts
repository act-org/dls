/**
 * @prettier
 */

import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ typography }) => ({
  selectComponentRoot: {
    fontSize: 14,
    padding: '11px 16px',
  },
  selectIcon: {
    color: '#2d2d2d', // FIXME: TEXT_PRIMARY
    height: '70%',
    marginRight: 6,
  },
  selectRoot: {
    '&.Mui-disabled': {
      cursor: 'not-allowed',
    },
    backgroundColor: '#f9f9f9',
    border: `1px solid ${grey[300]}`,
    borderRadius: 2,
    color: '#2d2d2d', // FIXME: TEXT_PRIMARY
    fontSize: 14,
    fontWeight: typography.fontWeightRegular,
    marginTop: 8,
  },
  selectRootEmpty: {
    color: grey[400],
  },
}));
