/**
 * @prettier
 */

import * as React from 'react';
import { Typography, TypographyProps } from '@material-ui/core';

export type Props = TypographyProps;

const TypographyBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <Typography {...props} />;

export default TypographyBase;
