/**
 * @prettier
 */

import * as React from 'react';
import { Select, SelectProps } from '@material-ui/core';

export type Props = SelectProps;

const SelectBase: React.FC<Props> = (props: Props): React.ReactElement<any> => (
  <Select {...props} />
);

export default SelectBase;
