/**
 * @prettier
 */

import makeStyles from '@mui/styles/makeStyles';
import { grey } from '@mui/material/colors';

export default makeStyles(({ customDims, spacing, typography }: any) => ({
  inputInput: {
    '&.Mui-disabled': {
      cursor: 'not-allowed',
    },
    fontSize: 14,
    height: customDims.heights.input,
    minHeight: customDims.heights.input,
    padding: `0 ${spacing(1)}`,
  },
  inputInputPassword: {
    fontSize: 22,
    fontWeight: Number(typography.fontWeightBold),
    letterSpacing: 4,
  },
  inputRoot: {
    backgroundColor: grey[100],
    border: `1px solid ${grey[300]}`,
    borderRadius: 2,
    marginTop: 8,
  },
}));
