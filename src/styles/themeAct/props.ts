/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */
import { DataGridProps } from '@material-ui/data-grid';
import { LabComponentsPropsList } from '@material-ui/lab/themeAugmentation';
import { ComponentsProps } from '@material-ui/core/styles/props';

export interface DataGridPropsList {
  MuiDataGrid: DataGridProps;
}

declare module '@material-ui/core/styles/props' {
  // eslint-disable-next-line prettier/prettier
  interface ComponentsPropsList extends LabComponentsPropsList, DataGridPropsList { }
}

const props: ComponentsProps = {
  MuiAlert: {
    closeText: 'Close',
    severity: 'info',
    variant: 'standard',
  },
  MuiAppBar: {
    color: 'primary',
  },
  MuiButton: {
    color: 'primary',
    disableElevation: true,
    size: 'medium',
    variant: 'contained',
  },
  MuiCheckbox: {
    color: 'primary',
  },
  MuiDataGrid: {
    autoHeight: true,
    autoPageSize: true,
    density: 'standard',
    filterMode: 'client',
    sortingMode: 'client',
  },
  MuiDialog: {
    fullWidth: true,
    maxWidth: 'md',
  },
  MuiDrawer: {
    color: 'primary',
    variant: 'persistent',
  },
  MuiIcon: {
    color: 'primary',
  },
  MuiIconButton: {
    color: 'primary',
  },
  MuiInputLabel: {
    color: 'primary',
  },
  MuiLink: {
    color: 'primary',
    underline: 'hover',
  },
  MuiOutlinedInput: {
    color: 'primary',
    type: 'text',
  },
  MuiRadio: {
    color: 'primary',
  },
  MuiSelect: {
    displayEmpty: true,
    variant: 'outlined',
  },
  MuiSwitch: {
    color: 'primary',
    size: 'medium',
  },
  MuiToolbar: {
    color: 'primary',
  },
  MuiTooltip: {
    color: 'primary',
  },
};

export default props;
