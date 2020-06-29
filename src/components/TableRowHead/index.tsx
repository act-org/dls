/**
 * @prettier
 */

import * as React from 'react';

import TableRowBase, {
  Props as TableRowBaseProps,
} from '~/components/TableRowBase';

import useStyles from './styles';

export type Props = TableRowBaseProps;

const TableRowHead: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => {
  const classes = useStyles();

  return <TableRowBase classes={classes} {...props} />;
};

export default TableRowHead;
