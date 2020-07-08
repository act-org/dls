/**
 * @prettier
 */

import * as React from 'react';
import { List, ListProps } from '@material-ui/core';

export type Props = ListProps;

const ListBase: React.FC<Props> = (props: Props): React.ReactElement<any> => (
  <List {...props} />
);

export default ListBase;
