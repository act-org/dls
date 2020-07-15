/**
 * @prettier
 */

import * as React from 'react';
import { Toolbar, ToolbarProps } from '@material-ui/core';

export type Props = ToolbarProps;

const ToolbarBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <Toolbar {...props} />;

export default ToolbarBase;
