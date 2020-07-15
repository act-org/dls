/**
 * @prettier
 */

import * as React from 'react';
import { AppBar, AppBarProps } from '@material-ui/core';

export type Props = AppBarProps;

const AppBarBase: React.FC<Props> = (props: Props): React.ReactElement<any> => (
  <AppBar {...props} />
);

export default AppBarBase;
