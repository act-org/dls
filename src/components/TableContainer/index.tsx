/**
 * @prettier
 */

import * as React from 'react';
import {
  TableContainer as TableContainerImport,
  TableContainerProps,
} from '@material-ui/core';

import TableContainerComponent from '~/components/TableContainerComponent';

const TableContainer: React.FC<TableContainerProps> = (
  props: TableContainerProps,
): React.ReactElement<any> => (
  <TableContainerImport component={TableContainerComponent} {...props} />
);

export default TableContainer;
