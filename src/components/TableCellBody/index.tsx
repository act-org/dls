/**
 * @prettier
 */

import * as React from 'react';

import TableCellBase, {
  Props as TableCellBaseProps,
} from '~/components/TableCellBase';

import useStyles from './styles';

export type Props = TableCellBaseProps;

const TableCellBody: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <TableCellBase
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
