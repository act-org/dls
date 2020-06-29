/**
 * @prettier
 */

import * as React from 'react';
import { CircularProgress, CircularProgressProps } from '@material-ui/core';

export type Props = CircularProgressProps;

const CircularProgressBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <CircularProgress {...props} />;

export default CircularProgressBase;
