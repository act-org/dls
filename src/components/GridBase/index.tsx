/**
 * @prettier
 */

import * as React from 'react';
import { Grid, GridProps } from '@material-ui/core';

export type Props = GridProps;

const GridBase: React.FC<Props> = (props: Props): React.ReactElement<any> => (
  <Grid {...props} />
);

export default GridBase;
