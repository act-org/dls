/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { DataGrid as MuiDataGrid, DataGridProps } from '@material-ui/data-grid';

export type {
  DataGridProps,
  GridColDef,
  GridValueGetterParams,
  GridValueFormatterParams,
} from '@material-ui/data-grid';

/**
 * # Data Grid
 *
 * The Data Grid component is a fast and extendable data table and data grid for
 * React. Our implementation is based on the
 * <a href="https://material-ui.com/components/data-grid" target="_blank">Data Grid</a>
 * &nbsp;component from Material UI.
 *
 * @param props
 */
export function DataGrid(
  props: DataGridProps,
): React.ReactElement<DataGridProps> {
  return <MuiDataGrid {...props} />;
}

export default DataGrid;
