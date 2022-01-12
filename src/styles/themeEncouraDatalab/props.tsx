/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { ComponentsProps } from '@material-ui/core/styles/props';

import ChevronDown from '~/icons/ChevronDown';
import FilterVariant from '~/icons/FilterVariant';

const PROPS: ComponentsProps = {
  MuiAlert: {
    closeText: 'Close',
    severity: 'info',
    variant: 'standard',
  },
  MuiButton: {
    disableElevation: true,
    variant: 'contained',
  },
  MuiButtonGroup: {
    disableElevation: true,
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
  MuiSelect: {
    IconComponent: ChevronDown,
    variant: 'outlined',
  },
  MuiTextField: {
    color: 'secondary',
    InputLabelProps: {
      shrink: true,
    },
    InputProps: {
      notched: false,
    },
    size: 'small',
    variant: 'outlined',
  },
  MuiTooltip: {
    arrow: true,
  },
};

export default PROPS;
