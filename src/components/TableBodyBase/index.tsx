/**
 * @prettier
 */

import * as React from 'react';
import { TableBody, TableBodyProps } from '@material-ui/core';

export type Props = TableBodyProps;

const TableBodyBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <TableBody {...props} />;

export default TableBodyBase;
