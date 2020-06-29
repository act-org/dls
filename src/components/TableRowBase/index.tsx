/**
 * @prettier
 */

import * as React from 'react';
import { TableRow, TableRowProps } from '@material-ui/core';

export type Props = TableRowProps;

const TableRowBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <TableRow {...props} />;

export default TableRowBase;
