/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
} from '@material-ui/data-grid';

export type DataGridProps = MuiDataGridProps;
export type {
  ValueGetterParams,
  ValueFormatterParams,
} from '@material-ui/data-grid';

/**
 * # DataGrid
 *
 * This is the core component for grids.  It wraps the Material UI DataGrid lab grid.
 *
 * This grid is currently being developed by the MUI team, so additional features will appear over time.
 * The story book version of this component is fairly well documented, but for a more complete view
 * of what's capable with this component see the [MaterialUI DataGrid Documentation](https://material-ui.com/components/data-grid/)
 *
 * @param dataGridProps
 */
export function DataGrid(
  dataGridProps: DataGridProps,
): React.ReactElement<DataGridProps> {
  return <MuiDataGrid {...dataGridProps} />;
}

export default DataGrid;
