/**
 * @prettier
 */

import * as React from 'react';
import { IconButton, IconButtonProps } from '@material-ui/core';

export type Props = IconButtonProps;

const IconButtonBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <IconButton {...props} />;

export default IconButtonBase;
