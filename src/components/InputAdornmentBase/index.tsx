/**
 * @prettier
 */

import * as React from 'react';
import { InputAdornment, InputAdornmentProps } from '@material-ui/core';

export type Props = InputAdornmentProps;

const InputAdornmentBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <InputAdornment {...props} />;

export default InputAdornmentBase;
