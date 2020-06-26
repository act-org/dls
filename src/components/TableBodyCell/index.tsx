/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { TableCell, TableCellProps } from '@material-ui/core';

import { SortObject } from '~/types';

import useStyles from './styles';

interface Props<T> extends TableCellProps {
  dataKey?: string;
  sortObject?: SortObject<T>;
}

const TableBodyCell = <T,>({
  dataKey,
  sortObject,
  ...otherProps
}: Props<T>): React.ReactElement<any> => {
  const sortIsApplied: boolean =
    sortObject && dataKey ? sortObject.dataKey === dataKey : false;

  const classes = useStyles();

  return (
    <TableCell
      classes={{
        root: clsx(
          classes.tableCellRoot,
          sortIsApplied && classes.tableCellRootSortApplied,
        ),
      }}
      component="td"
      padding="none"
      scope="row"
      {...otherProps}
    />
  );
};

export default TableBodyCell;
