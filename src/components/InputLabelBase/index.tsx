/**
 * @prettier
 */

import * as React from 'react';
import { InputLabel, InputLabelProps } from '@material-ui/core';

export type Props = InputLabelProps;

const InputLabelBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <InputLabel {...props} />;

export default InputLabelBase;
