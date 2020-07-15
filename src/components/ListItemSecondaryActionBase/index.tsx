/**
 * @prettier
 */

import * as React from 'react';
import {
  ListItemSecondaryAction,
  ListItemSecondaryActionProps,
} from '@material-ui/core';

export type Props = ListItemSecondaryActionProps;

const ListItemSecondaryActionBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <ListItemSecondaryAction {...props} />;

export default ListItemSecondaryActionBase;
