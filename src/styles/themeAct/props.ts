/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { ComponentsProps } from '@mui/material/styles';
import { DataGridProps } from '@mui/x-data-grid';
import { LabComponentsPropsList } from '@mui/lab/themeAugmentation';

export interface DataGridPropsList {
  MuiDataGrid: DataGridProps;
}

declare module '@mui/material/styles/props' {
  // eslint-disable-next-line prettier/prettier
  interface ComponentsPropsList
    extends LabComponentsPropsList,
      DataGridPropsList {}
}

const PROPS: ComponentsProps = {
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

export default PROPS;
