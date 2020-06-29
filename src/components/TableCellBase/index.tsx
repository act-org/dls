/**
 * @prettier
 */

import * as React from 'react';
import { TableCell, TableCellProps } from '@material-ui/core';

export type Props = TableCellProps;

const TableCellBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <TableCell {...props} />;

export default TableCellBase;
