/**
 * @prettier
 */

import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export type Props = SvgIconProps;

const IconBase: React.FC<Props> = (props: Props): React.ReactElement<any> => (
  <SvgIcon {...props} />
);

export default IconBase;
