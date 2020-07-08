/**
 * @prettier
 */

import * as React from 'react';
import { Checkbox, CheckboxProps } from '@material-ui/core';

export type Props = CheckboxProps;

const CheckboxBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <Checkbox {...props} />;

export default CheckboxBase;
