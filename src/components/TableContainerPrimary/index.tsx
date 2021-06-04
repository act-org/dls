/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { TableContainer, TableContainerProps } from '@material-ui/core';

import Component from './Component';

export interface TableContainerPrimaryProps extends TableContainerProps {
  component?: React.ReactElement<any>;
}

const TableContainerPrimary: React.FC<TableContainerPrimaryProps> = (
  props: TableContainerPrimaryProps,
): React.ReactElement<any> => (
  <TableContainer component={Component} {...props} />
);

export default TableContainerPrimary;
