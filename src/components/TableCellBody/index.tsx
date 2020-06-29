/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';

import TableCellBase, {
  Props as TableCellBaseProps,
} from '~/components/TableCellBase';

import { SortObject } from '~/types';

import useStyles from './styles';

export interface Props<T> extends TableCellBaseProps {
  dataKey?: string;
  sortObject?: SortObject<T>;
}

const TableCellBody = <T,>({
  dataKey,
  sortObject,
  ...otherProps
}: Props<T>): React.ReactElement<any> => {
  const sortIsApplied: boolean =
    sortObject && dataKey ? sortObject.dataKey === dataKey : false;

  const classes = useStyles();

  return (
    <TableCellBase
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

export default TableCellBody;
