/**
 * @prettier
 */

import * as React from 'react';
import { Divider, DividerProps } from '@material-ui/core';

export type Props = DividerProps;

const DividerBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <Divider {...props} />;

export default DividerBase;
