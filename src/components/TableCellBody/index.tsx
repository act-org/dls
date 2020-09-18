/**
 * @prettier
 */

import * as React from 'react';
import { TableCell, TableCellProps } from '@material-ui/core';

import useStyles from './styles';

export type Props = TableCellProps;

const TableCellBody: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <TableCell
      classes={{
        root: classes.tableCellRoot,
      }}
      component="td"
      padding="none"
      scope="row"
      {...props}
    />
  );
};

export default TableCellBody;
