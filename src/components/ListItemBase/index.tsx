/**
 * @prettier
 */

import * as React from 'react';
import { get } from 'lodash';
import { ListItem, ListItemProps } from '@material-ui/core';

export type Props = ListItemProps;

const ListItemBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => (
  // FIXME: https://github.com/mui-org/material-ui/issues/14971
  <ListItem button={get(props, 'button') as any} {...props} />
);

export default ListItemBase;
