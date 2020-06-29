/**
 * @prettier
 */

import * as React from 'react';
import { Table, TableProps } from '@material-ui/core';

export type Props = TableProps;

const TableBase: React.FC<Props> = (props: Props): React.ReactElement<any> => (
  <Table {...props} />
);

export default TableBase;
