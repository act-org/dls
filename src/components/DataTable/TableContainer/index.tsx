/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  TableContainer as MuiTableContainer,
  TableContainerProps as MuiTableContainerProps,
} from '@mui/material';
import { FC, ReactElement } from 'react';

import Component from './Component';

export interface TableContainerProps extends MuiTableContainerProps {
  component?: ReactElement<unknown>;
}

const TableContainer: FC<TableContainerProps> = (
  props: TableContainerProps,
): ReactElement<unknown> => (
  <MuiTableContainer component={Component} {...props} />
);

TableContainer.defaultProps = {
  component: undefined,
};

export default TableContainer;
