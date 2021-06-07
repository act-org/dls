/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  TableContainer as MuiTableContainer,
  TableContainerProps as MuiTableContainerProps,
} from '@material-ui/core';

import Component from './Component';

export interface TableContainerProps extends MuiTableContainerProps {
  component?: React.ReactElement<any>;
}

const TableContainer: React.FC<TableContainerProps> = (
  props: TableContainerProps,
): React.ReactElement<any> => (
  <MuiTableContainer component={Component} {...props} />
);

export default TableContainer;
