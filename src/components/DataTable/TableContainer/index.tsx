/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TableContainer as MuiTableContainer, TableContainerProps as MuiTableContainerProps } from '@mui/material';
import { FC, ReactElement } from 'react';

import Component from './Component';

export type TableContainerProps = MuiTableContainerProps;

const TableContainer: FC<TableContainerProps> = (props: TableContainerProps): ReactElement<unknown> => <MuiTableContainer component={Component} {...props} />;

export default TableContainer;
