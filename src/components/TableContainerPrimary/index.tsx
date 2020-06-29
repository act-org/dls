/**
 * @prettier
 */

import * as React from 'react';

import TableContainerBase, {
  Props as TableContainerBaseProps,
} from '~/components/TableContainerBase';

import Component from './Component';

export interface Props extends TableContainerBaseProps {
  component?: React.ReactElement<any>;
}

const TableContainerPrimary: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => (
  <TableContainerBase component={Component} {...props} />
);

export default TableContainerPrimary;
