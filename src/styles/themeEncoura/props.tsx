/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { ComponentsProps } from '@material-ui/core/styles/props';

import FilterVariant from '~/icons/FilterVariant';

const PROPS: ComponentsProps = {
  MuiAlert: {
    closeText: 'Close',
    severity: 'info' as any,
    variant: 'standard' as any,
  },
  MuiButton: {
    disableElevation: true,
    variant: 'contained' as any,
  },
  MuiDataGrid: {
    components: {
      ColumnFilteredIcon: FilterVariant,
    },
    disableSelectionOnClick: true,
  },
  MuiPaper: {
    elevation: 3,
  },
  MuiTextField: {
    InputLabelProps: {
      shrink: true,
    },
    InputProps: {
      notched: false,
    },
    size: 'small',
    variant: 'outlined',
  },
};

export default PROPS;
