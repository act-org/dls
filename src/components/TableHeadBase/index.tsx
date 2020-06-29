/**
 * @prettier
 */

import * as React from 'react';
import { TableHead, TableHeadProps } from '@material-ui/core';

export type Props = TableHeadProps;

const TableHeadBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <TableHead {...props} />;

export default TableHeadBase;
