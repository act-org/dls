/**
 * @prettier
 */

import * as React from 'react';
import { OutlinedInput, OutlinedInputProps } from '@material-ui/core';

export type Props = OutlinedInputProps;

const OutlinedInputBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <OutlinedInput {...props} />;

export default OutlinedInputBase;
