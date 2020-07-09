/**
 * @prettier
 */

import * as React from 'react';
import { Tooltip, TooltipProps } from '@material-ui/core';

export type Props = TooltipProps;

const TooltipBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <Tooltip {...props} />;

export default TooltipBase;
