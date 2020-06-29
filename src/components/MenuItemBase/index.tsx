/**
 * @prettier
 */

import * as React from 'react';
import { MenuItem, MenuItemProps } from '@material-ui/core';

export type Props = MenuItemProps;

const MenuItemBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <MenuItem {...(props as any)} />;

export default MenuItemBase;
