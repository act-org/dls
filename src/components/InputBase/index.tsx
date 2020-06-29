/**
 * @prettier
 */

import * as React from 'react';
import { Input, InputProps } from '@material-ui/core';

export type Props = InputProps;

const InputBase: React.FC<Props> = (props: Props): React.ReactElement<any> => (
  <Input {...props} />
);

export default InputBase;
