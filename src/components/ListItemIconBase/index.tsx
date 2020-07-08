/**
 * @prettier
 */

import * as React from 'react';
import { ListItemIcon, ListItemIconProps } from '@material-ui/core';

export type Props = ListItemIconProps;

const ListItemIconBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <ListItemIcon {...props} />;

export default ListItemIconBase;
