/**
 * @prettier
 */

import * as React from 'react';
import { Paper, PaperProps } from '@material-ui/core';

export type Props = PaperProps;

const PaperBase: React.FC<Props> = (props: Props): React.ReactElement<any> => (
  <Paper {...props} />
);

export default PaperBase;
