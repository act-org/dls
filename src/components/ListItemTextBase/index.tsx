/**
 * @prettier
 */

import * as React from 'react';
import { ListItemText, ListItemTextProps } from '@material-ui/core';

export type Props = ListItemTextProps;

const ListItemTextBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <ListItemText {...props} />;

export default ListItemTextBase;
