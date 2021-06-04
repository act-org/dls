/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { TableCell, TableCellProps } from '@material-ui/core';

import mergeClasses from '~/helpers/mergeClasses';

import useStyles from './styles';

export type TableCellBodyProps = TableCellProps;

const TableCellBody: React.FC<TableCellBodyProps> = ({
  classes: classesProp,
  ...otherProps
}: TableCellBodyProps): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <TableCell
      classes={mergeClasses(
        {
          root: classes.tableCellRoot,
        },
        classesProp,
      )}
      component="td"
      padding="none"
      {...otherProps}
    />
  );
};

export default TableCellBody;
