/**
 * @prettier
 */

import * as React from 'react';
import { TableRow, TableRowProps } from '@material-ui/core';

import useStyles from './styles';

const TableHeadRow: React.FC<TableRowProps> = (
  props: TableRowProps,
): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <TableRow
      {...props}
      classes={{
        root: classes.tableRowRoot,
      }}
    />
  );
};

export default TableHeadRow;
