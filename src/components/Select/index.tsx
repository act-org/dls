/**
 * @prettier
 */

import * as React from 'react';
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@material-ui/core';

export type SelectProps = MuiSelectProps;

export const Select: React.FC<SelectProps> = (
  selectProps: SelectProps,
): React.ReactElement<any> => {
  return <MuiSelect {...selectProps} />;
};

Select.defaultProps = {
  variant: 'outlined',
} as SelectProps;

/*

import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import TYPOGRAPHY from '~/constants/typography';

export default makeStyles({
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
    fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
    marginTop: 8,
  },
  selectRootEmpty: {
    color: grey[400],
  },
});


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
*/
