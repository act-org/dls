/**
 * @prettier
 */

import * as React from 'react';
import { TableContainer, TableContainerProps } from '@material-ui/core';

import Component from './Component';

export interface Props extends TableContainerProps {
  component?: React.ReactElement<any>;
}

const TableContainerPrimary: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => (
  <TableContainer component={Component} {...props} />
);

export default TableContainerPrimary;
