/**
 * @prettier
 */

import * as React from 'react';
import { TableContainer, TableContainerProps } from '@material-ui/core';

export type Props = TableContainerProps;

const TableContainerBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <TableContainer {...props} />;

export default TableContainerBase;
